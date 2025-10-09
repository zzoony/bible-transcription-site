#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function checkBooks() {
  const books = ['2 John', 'Jude', 'Titus'];

  for (const bookName of books) {
    console.log(`\n📖 ${bookName} 상태 확인:`);

    const { data: book } = await supabase
      .from('books')
      .select('id, name_english')
      .eq('name_english', bookName)
      .single();

    if (!book) {
      console.log(`  ❌ Book not found in database`);
      continue;
    }

    const { data: verses } = await supabase
      .from('verses')
      .select('reference, niv_text, analysis_completed')
      .eq('book_id', book.id)
      .order('verse_number');

    if (!verses) {
      console.log(`  ⚠️ No verses found`);
      continue;
    }

    const total = verses.length;
    const completed = verses.filter(v => v.analysis_completed).length;
    const pending = total - completed;

    console.log(`  총 구절: ${total}`);
    console.log(`  완료: ${completed}`);
    console.log(`  대기: ${pending}`);

    if (pending > 0) {
      console.log(`  미완료 구절:`);
      verses.filter(v => !v.analysis_completed).forEach(v => {
        console.log(`    - ${v.reference}`);
      });
    }
  }
}

checkBooks();
