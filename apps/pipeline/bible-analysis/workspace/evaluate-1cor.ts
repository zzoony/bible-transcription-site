import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 환경 변수 로드
dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// 품질 평가 함수
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

async function evaluateBook() {
  console.log('고린도전서 품질 평가 시작...\n');

  const { data: allVerses, error: countError } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', '1 Corinthians%')
    .order('reference');

  if (countError || !allVerses) {
    console.error('구절 조회 실패:', countError);
    return;
  }

  console.log('총 구절 수: ' + allVerses.length + '개\n');

  const sampleIndices = [
    0, 1, 2, 3, 4,
    Math.floor(allVerses.length / 2) - 2,
    Math.floor(allVerses.length / 2) - 1,
    Math.floor(allVerses.length / 2),
    Math.floor(allVerses.length / 2) + 1,
    Math.floor(allVerses.length / 2) + 2,
    allVerses.length - 5,
    allVerses.length - 4,
    allVerses.length - 3,
    allVerses.length - 2,
    allVerses.length - 1
  ];

  console.log('샘플 구절 품질 평가 (15개):\n');

  let totalScore = 0;
  let evaluatedCount = 0;
  const scores: number[] = [];

  for (const idx of sampleIndices) {
    const verse = allVerses[idx];
    
    const { data: analysis, error } = await supabase
      .from('verses')
      .select('id, reference, sentence_structures (*), vocabulary (*), contextual_explanations (*), korean_translations (*), special_explanations (*)')
      .eq('id', verse.id)
      .single();

    if (error || !analysis) {
      console.log(verse.reference + ': 데이터 조회 실패');
      continue;
    }

    const score = evaluateQuality(analysis);
    scores.push(score);
    totalScore += score;
    evaluatedCount++;

    const grade = score >= 90 ? 'A' : score >= 70 ? 'B' : score >= 50 ? 'C' : 'D';
    console.log('[' + grade + '] ' + verse.reference + ': ' + score + '점');
  }

  console.log('\n' + '='.repeat(60));
  console.log('품질 통계\n');

  const avgScore = totalScore / evaluatedCount;
  scores.sort((a, b) => b - a);
  const minScore = scores[scores.length - 1];
  const maxScore = scores[0];

  console.log('평균 점수: ' + avgScore.toFixed(1) + '점');
  console.log('최고 점수: ' + maxScore + '점');
  console.log('최저 점수: ' + minScore + '점');

  const gradeA = scores.filter(s => s >= 90).length;
  const gradeB = scores.filter(s => s >= 70 && s < 90).length;
  const gradeC = scores.filter(s => s >= 50 && s < 70).length;
  const gradeD = scores.filter(s => s < 50).length;

  console.log('\n등급 분포:');
  console.log('  A등급 (90-100점): ' + gradeA + '개 (' + (gradeA/evaluatedCount*100).toFixed(1) + '%)');
  console.log('  B등급 (70-89점): ' + gradeB + '개 (' + (gradeB/evaluatedCount*100).toFixed(1) + '%)');
  console.log('  C등급 (50-69점): ' + gradeC + '개 (' + (gradeC/evaluatedCount*100).toFixed(1) + '%)');
  console.log('  D등급 (50점 미만): ' + gradeD + '개 (' + (gradeD/evaluatedCount*100).toFixed(1) + '%)');

  console.log('\n' + '='.repeat(60));
  console.log('데이터 완성도 검사\n');

  let missingData = 0;
  for (const verse of allVerses) {
    const { data: check } = await supabase
      .from('sentence_structures')
      .select('id')
      .eq('verse_id', verse.id)
      .limit(1);

    if (!check || check.length === 0) {
      console.log('누락: ' + verse.reference);
      missingData++;
    }
  }

  if (missingData === 0) {
    console.log('모든 구절에 분석 데이터가 존재합니다!');
  } else {
    console.log(missingData + '개 구절에 분석 데이터가 없습니다.');
  }

  console.log('\n' + '='.repeat(60));
  console.log('평가 완료!\n');
}

evaluateBook().catch(console.error);
