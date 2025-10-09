import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// Load from apps/pipeline/.env
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function getJudeVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Jude%')
    .order('reference');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log(`Found ${data?.length || 0} Jude verses\n`);

  // Save to JSON for reference
  fs.writeFileSync(
    path.resolve(__dirname, 'jude-verses.json'),
    JSON.stringify(data, null, 2)
  );

  // Also print for analysis
  data?.forEach(v => {
    console.log(`${v.reference}:`);
    console.log(`${v.niv_text}\n`);
  });
}

getJudeVerses();
