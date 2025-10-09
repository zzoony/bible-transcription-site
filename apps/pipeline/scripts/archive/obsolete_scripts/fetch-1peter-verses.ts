import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load from apps/pipeline/.env
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
    .ilike('reference', '1 Peter%')
    .order('reference');

  if (error) {
    console.error('오류:', error);
    return;
  }

  console.log(`총 ${data.length}개 구절 조회됨\n`);
  data.forEach(verse => {
    console.log(`${verse.reference}`);
    console.log(`${verse.niv_text}\n`);
  });
}

fetchVerses();
