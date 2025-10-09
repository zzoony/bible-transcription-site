import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

async function fetchVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '1 John%')
    .order('reference');

  if (error) {
    console.error('Error fetching verses:', error);
    return;
  }

  console.log(JSON.stringify(data, null, 2));
  console.error(`\n총 ${data?.length || 0}개의 구절을 조회했습니다.`);
}

fetchVerses();
