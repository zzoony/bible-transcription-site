import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function fetchVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '1 Timothy%')
    .order('reference');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`총 ${data.length}개 구절 조회 완료\n`);
  
  data.forEach(verse => {
    console.log(`${verse.reference}`);
    console.log(`${verse.niv_text}\n`);
  });
}

fetchVerses();
