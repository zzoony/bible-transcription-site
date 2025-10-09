import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load from apps/pipeline/.env
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

async function checkJudeVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Jude%')
    .order('reference');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data?.length || 0} Jude verses`);
  if (data && data.length > 0) {
    console.log('First verse:', data[0].reference);
    console.log('Last verse:', data[data.length - 1].reference);
    console.log('\nAll verses:');
    data.forEach(v => {
      console.log(`${v.reference}: ${v.niv_text?.substring(0, 50)}...`);
    });
  }
}

checkJudeVerses();
