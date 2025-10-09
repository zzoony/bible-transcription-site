import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function checkPhilemon() {
  const { data } = await supabase
    .from('verses')
    .select('reference, analysis_completed')
    .ilike('reference', 'Philemon%')
    .eq('analysis_completed', false)
    .order('reference');

  console.log('분석 필요한 구절:', data?.length || 0);
  data?.forEach(v => console.log(v.reference));
}

checkPhilemon();
