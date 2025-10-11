import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function quickCheck() {
  const { data } = await supabase
    .from('chapters')
    .select('*')
    .eq('book_id', 1)
    .order('id');

  console.log('📑 현재 DB의 Philippians chapters:\n');
  data?.forEach(ch => {
    console.log(`  ID ${ch.id}: 장 ${ch.chapter_number} (${ch.total_verses}절)`);
  });
  console.log(`\n총 ${data?.length}개 chapters`);
}

quickCheck();
