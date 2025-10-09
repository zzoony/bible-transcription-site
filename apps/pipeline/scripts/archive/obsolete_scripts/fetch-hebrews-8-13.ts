import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchHebrews8to13() {
  console.log('히브리서 8-13장 NIV 원문 조회 중...\n');
  
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Hebrews%')
    .order('reference');
  
  if (error) {
    console.error('오류:', error);
    return;
  }
  
  // 8-13장만 필터링
  const filtered = data.filter(v => {
    const match = v.reference.match(/Hebrews (\d+):/);
    if (match) {
      const chapter = parseInt(match[1]);
      return chapter >= 8 && chapter <= 13;
    }
    return false;
  });
  
  console.log(`총 ${filtered.length}개 구절 발견\n`);
  
  // 장별로 그룹화
  const byChapter: Record<number, typeof filtered> = {};
  filtered.forEach(v => {
    const match = v.reference.match(/Hebrews (\d+):/);
    if (match) {
      const ch = parseInt(match[1]);
      if (!byChapter[ch]) byChapter[ch] = [];
      byChapter[ch].push(v);
    }
  });
  
  // 출력
  for (let ch = 8; ch <= 13; ch++) {
    const verses = byChapter[ch] || [];
    console.log(`\n=== Hebrews ${ch} (${verses.length} verses) ===\n`);
    verses.forEach(v => {
      console.log(`${v.reference}`);
      console.log(`${v.niv_text}\n`);
    });
  }
}

fetchHebrews8to13();
