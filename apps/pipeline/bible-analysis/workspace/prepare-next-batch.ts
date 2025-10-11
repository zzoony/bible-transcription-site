import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const BATCH_SIZE = 15;  // 한 번에 처리할 구절 수
const PROGRESS_FILE = 'bible-analysis/workspace/.1cor-batch-progress.json';

function evaluateQuality(analysis: any): number {
  let score = 0;

  const structures = analysis.sentence_structures || [];
  if (structures.length >= 3) score += 20;
  else if (structures.length >= 2) score += 15;
  else if (structures.length >= 1) score += 10;

  if (structures.every((s: any) => s.grammatical_explanation && s.grammatical_explanation.length > 30)) {
    score += 10;
  }

  const vocabulary = analysis.vocabulary || [];
  if (vocabulary.length >= 7) score += 15;
  else if (vocabulary.length >= 5) score += 10;
  else if (vocabulary.length >= 3) score += 5;

  const hasOriginalLanguage = vocabulary.some((v: any) =>
    v.definition_korean && (v.definition_korean.includes('히브리어') || v.definition_korean.includes('그리스어'))
  );
  if (hasOriginalLanguage) score += 10;

  const context = analysis.contextual_explanations?.[0];
  if (context && context.integrated_explanation) {
    const length = context.integrated_explanation.length;
    if (length >= 500) score += 20;
    else if (length >= 300) score += 15;
    else if (length >= 200) score += 10;
    else score += 5;
  }

  const translation = analysis.korean_translations?.[0];
  if (translation && translation.natural_translation) {
    score += 15;
  }

  const specials = analysis.special_explanations || [];
  if (specials.length >= 3) score += 10;
  else if (specials.length >= 2) score += 7;
  else if (specials.length >= 1) score += 4;

  return Math.min(score, 100);
}

async function prepareNextBatch() {
  console.log('다음 배치 준비 중...\n');

  // 진행 상황 로드
  let completedVerses: string[] = [];
  if (fs.existsSync(PROGRESS_FILE)) {
    completedVerses = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }

  // 고린도전서 전체 구절 가져오기
  const { data: allVerses, error } = await supabase
    .from('verses')
    .select('id, reference, niv_text, sentence_structures (*), vocabulary (*), contextual_explanations (*), korean_translations (*), special_explanations (*)')
    .ilike('reference', '1 Corinthians%')
    .order('reference');

  if (error || !allVerses) {
    console.error('구절 조회 실패:', error);
    return;
  }

  // 재분석이 필요한 구절 필터링
  const needsReanalysis = allVerses.filter(verse => {
    if (completedVerses.includes(verse.reference)) {
      return false;
    }
    const score = evaluateQuality(verse);
    return score < 90;
  });

  if (needsReanalysis.length === 0) {
    console.log('모든 구절이 완료되었습니다!');
    console.log('총 완료: ' + completedVerses.length + '개');
    return;
  }

  // 다음 배치 선택
  const batch = needsReanalysis.slice(0, BATCH_SIZE);
  const batchNumber = Math.floor(completedVerses.length / BATCH_SIZE) + 1;

  console.log('='.repeat(80));
  console.log('배치 #' + batchNumber + ' 준비 완료');
  console.log('='.repeat(80));
  console.log('처리할 구절: ' + batch.length + '개');
  console.log('남은 구절: ' + (needsReanalysis.length - batch.length) + '개');
  console.log('전체 진행률: ' + ((completedVerses.length / allVerses.length) * 100).toFixed(1) + '%');
  console.log('='.repeat(80) + '\n');

  // 배치 정보 출력
  console.log('다음 구절들을 분석해주세요:\n');

  batch.forEach((verse, i) => {
    const score = evaluateQuality(verse);
    console.log((i+1) + '. ' + verse.reference + ' (현재: ' + score + '점)');
    console.log('   NIV: ' + verse.niv_text);
    console.log('');
  });

  // 배치 데이터 저장
  const batchData = batch.map(v => ({
    id: v.id,
    reference: v.reference,
    niv_text: v.niv_text,
    current_score: evaluateQuality(v)
  }));

  const batchFile = 'bible-analysis/workspace/batch-' + batchNumber + '-data.json';
  fs.writeFileSync(batchFile, JSON.stringify(batchData, null, 2));

  console.log('='.repeat(80));
  console.log('배치 데이터 저장됨: ' + batchFile);
  console.log('='.repeat(80));
  console.log('\n다음 단계:');
  console.log('1. 위 구절들을 창세기 1:2 템플릿 기준으로 분석');
  console.log('2. 분석 결과를 analyze-batch-' + batchNumber + '.ts 파일로 저장');
  console.log('3. save-batch.ts를 실행하여 DB에 저장');
  console.log('');
}

prepareNextBatch().catch(console.error);
