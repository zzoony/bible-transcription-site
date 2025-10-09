#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

const bookName = process.argv[2] || '2 Timothy';
const startVerse = parseInt(process.argv[3]) || 0;
const count = parseInt(process.argv[4]) || 10;

async function getBatchVerses() {
  const { data: verses } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', `${bookName}%`)
    .eq('analysis_completed', false)
    .order('reference')
    .range(startVerse, startVerse + count - 1);

  if (!verses || verses.length === 0) {
    console.log('❌ 구절을 찾을 수 없습니다.');
    return;
  }

  console.log(`\n📖 ${bookName} 배치 (${startVerse + 1}번째부터 ${count}개)\n`);
  console.log('='.repeat(80));

  for (const verse of verses) {
    console.log(`\n# ${verse.reference}`);
    console.log(`원문: "${verse.niv_text}"\n`);
  }

  console.log('='.repeat(80));
  console.log(`\n총 ${verses.length}개 구절\n`);
}

getBatchVerses();
