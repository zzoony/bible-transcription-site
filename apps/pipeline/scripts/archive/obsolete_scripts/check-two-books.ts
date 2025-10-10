#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function checkBooks() {
  const books = ['2 Timothy', '1 Thessalonians'];

  for (const bookName of books) {
    console.log(`\n📖 ${bookName} 상태 확인:`);

    const { data: verses } = await supabase
      .from('verses')
      .select('reference, analysis_completed')
      .ilike('reference', `${bookName}%`)
      .order('reference');

    if (!verses || verses.length === 0) {
      console.log('  ❌ 구절이 존재하지 않습니다.');
      continue;
    }

    const completed = verses.filter(v => v.analysis_completed).length;
    const pending = verses.filter(v => !v.analysis_completed);

    console.log(`  총 구절: ${verses.length}`);
    console.log(`  완료: ${completed}`);
    console.log(`  대기: ${pending.length}`);

    if (pending.length > 0) {
      console.log(`  미완료 구절:`);
      pending.forEach(v => console.log(`    - ${v.reference}`));
    }
  }
}

checkBooks();
