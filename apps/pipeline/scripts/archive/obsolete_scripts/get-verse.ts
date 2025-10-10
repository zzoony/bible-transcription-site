#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

const reference = process.argv[2] || '2 Timothy 1:1';

async function getVerse() {
  const { data: verse } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .eq('reference', reference)
    .single();

  if (verse) {
    console.log(`\n${verse.reference}\n`);
    console.log(`"${verse.niv_text}"\n`);
  } else {
    console.log(`❌ 구절을 찾을 수 없습니다: ${reference}`);
  }
}

getVerse();
