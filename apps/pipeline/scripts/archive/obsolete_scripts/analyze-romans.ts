import { createClient } from '@supabase/supabase-js';
import { saveAnalysisToDb } from './save-analysis-to-db';
import * as fs from 'fs';
import * as path from 'path';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

const BATCH_SIZE = 30;
const PROGRESS_FILE = '/Users/peter/Dev/bible-transcription-site/apps/pipeline/romans_progress.json';

interface BatchProgress {
  completed: string[];
  failed: string[];
  lastBatch: number;
}

function loadProgress(): BatchProgress {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  return { completed: [], failed: [], lastBatch: 0 };
}

function saveProgress(progress: BatchProgress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function main() {
  console.log('Romans 전체 433개 구절 분석 시작\n');

  // 모든 Romans 구절 조회
  const { data: verses, error } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Romans%')
    .order('reference');

  if (error || !verses) {
    console.error('구절 조회 실패:', error);
    return;
  }

  console.log(`총 ${verses.length}개 구절 발견\n`);

  // 진행 상황 로드
  const progress = loadProgress();
  console.log(`이미 완료: ${progress.completed.length}개`);
  console.log(`실패: ${progress.failed.length}개\n`);

  // 미분석 구절 필터링
  const completedSet = new Set(progress.completed);
  const toAnalyze = verses.filter(v => !completedSet.has(v.reference));

  console.log(`분석 필요: ${toAnalyze.length}개\n`);

  if (toAnalyze.length === 0) {
    console.log('모든 구절이 이미 분석되었습니다!');
    return;
  }

  // 30개씩 배치로 분할
  const batches = [];
  for (let i = 0; i < toAnalyze.length; i += BATCH_SIZE) {
    batches.push(toAnalyze.slice(i, i + BATCH_SIZE));
  }

  console.log(`총 ${batches.length}개 배치로 처리합니다.\n`);
  console.log('='.repeat(60));

  // 배치 출력 (Claude가 직접 분석할 수 있도록)
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`\n배치 ${i + 1}/${batches.length}: ${batch.length}개 구절`);
    console.log('-'.repeat(60));

    batch.forEach((verse, idx) => {
      console.log(`\n[${idx + 1}/${batch.length}] ${verse.reference}`);
      console.log(`ID: ${verse.id}`);
      console.log(`원문: ${verse.niv_text}`);
      console.log('');
    });

    console.log('-'.repeat(60));
    console.log(`배치 ${i + 1} 완료. 다음 배치로 진행하려면 계속하세요.\n`);

    // 배치 정보를 JSON 파일로도 저장
    const batchFile = `/Users/peter/Dev/bible-transcription-site/apps/pipeline/romans_batch_${i + 1}.json`;
    fs.writeFileSync(batchFile, JSON.stringify(batch, null, 2));
    console.log(`배치 데이터 저장: ${batchFile}\n`);
  }

  console.log('='.repeat(60));
  console.log('\n모든 배치 정보가 출력되었습니다.');
  console.log('이제 Claude Code 세션에서 각 배치를 순차적으로 분석하세요.\n');
}

main();
