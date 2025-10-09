import { createClient } from '@supabase/supabase-js';
import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// 이미 분석된 구절 확인
async function getAnalyzedVerses(): Promise<Set<string>> {
  const { data, error } = await supabase
    .from('sentence_structures')
    .select('verses(reference)')
    .ilike('verses.reference', 'Titus%');

  if (error || !data) return new Set();

  const analyzed = new Set<string>();
  data.forEach((item: any) => {
    if (item.verses?.reference) {
      analyzed.add(item.verses.reference);
    }
  });

  return analyzed;
}

// Titus 전체 구절 가져오기
async function getAllTitusVerses() {
  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Titus%')
    .order('reference');

  if (error || !verses) {
    console.error('구절 조회 실패:', error);
    return [];
  }

  return verses;
}

// 구절 분석 생성 (Claude에서 수행하는 부분 - 여기서는 플레이스홀더)
// 실제 분석은 이 스크립트 밖에서 Claude가 수행합니다
function generateAnalysis(reference: string, niv_text: string): AnalysisData | null {
  // 이 함수는 외부에서 분석 결과를 받아서 처리할 것입니다
  // 지금은 null을 반환하여 외부 분석이 필요함을 표시
  return null;
}

async function main() {
  console.log('=== Titus 전체 분석 시작 ===\n');

  // 1. 이미 분석된 구절 확인
  const analyzed = await getAnalyzedVerses();
  console.log(`이미 분석됨: ${analyzed.size}개`);
  analyzed.forEach(ref => console.log(`  - ${ref}`));

  // 2. 전체 구절 가져오기
  const allVerses = await getAllTitusVerses();
  console.log(`\n전체 구절: ${allVerses.length}개`);

  // 3. 미분석 구절 필터링
  const pending = allVerses.filter(v => !analyzed.has(v.reference));
  console.log(`미분석 구절: ${pending.length}개\n`);

  if (pending.length === 0) {
    console.log('모든 구절이 이미 분석되었습니다!');
    return;
  }

  // 4. 미분석 구절 출력 (Claude가 분석할 수 있도록)
  console.log('=== 분석이 필요한 구절 ===');
  pending.forEach(v => {
    console.log(`\n${v.reference}`);
    console.log(`원문: ${v.niv_text}`);
  });

  console.log(`\n\n총 ${pending.length}개 구절을 분석하세요.`);
}

main().catch(console.error);
