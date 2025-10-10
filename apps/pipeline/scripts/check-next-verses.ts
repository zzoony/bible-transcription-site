import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function checkProgress() {
  // 창세기 분석 현황
  const { data: genesis } = await supabase
    .from('verse_analysis')
    .select('reference')
    .ilike('reference', 'Genesis%')
    .order('reference');

  const { count: genesisCount } = await supabase
    .from('verse_analysis')
    .select('*', { count: 'exact', head: true })
    .ilike('reference', 'Genesis%');

  console.log('창세기 분석 현황:');
  console.log('총 분석 구절 수:', genesisCount);

  // 다음 분석할 구절 찾기
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, text')
    .ilike('reference', 'Genesis%')
    .order('reference')
    .limit(100);

  if (verses) {
    const analyzed = new Set(genesis?.map(v => v.reference) || []);
    const next = verses.filter(v => !analyzed.has(v.reference)).slice(0, 5);

    console.log('\n다음 분석할 5개 구절:');
    next.forEach((v, i) => {
      console.log(`${i+1}. ${v.reference}`);
      console.log(`   "${v.text.substring(0, 100)}..."`);
      console.log();
    });

    // JSON 형식으로도 출력
    console.log('\n=== JSON 형식 ===');
    console.log(JSON.stringify(next, null, 2));
  }
}

checkProgress().catch(console.error);
