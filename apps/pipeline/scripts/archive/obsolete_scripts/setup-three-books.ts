#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function setupBooks() {
  // 2 John - 요한이서 (신약 63번째)
  const twoJohn = {
    name_english: '2 John',
    name_korean: '요한이서',
    abbreviation: '2Jn',
    testament: 2,
    order_number: 63,
    total_chapters: 1,
    chapters: [{ chapter_number: 1, total_verses: 13 }]
  };

  // Jude - 유다서 (신약 65번째)
  const jude = {
    name_english: 'Jude',
    name_korean: '유다서',
    abbreviation: 'Jude',
    testament: 2,
    order_number: 65,
    total_chapters: 1,
    chapters: [{ chapter_number: 1, total_verses: 25 }]
  };

  // Titus - 디도서 (신약 56번째)
  const titus = {
    name_english: 'Titus',
    name_korean: '디도서',
    abbreviation: 'Tit',
    testament: 2,
    order_number: 56,
    total_chapters: 3,
    chapters: [
      { chapter_number: 1, total_verses: 16 },
      { chapter_number: 2, total_verses: 15 },
      { chapter_number: 3, total_verses: 15 }
    ]
  };

  for (const bookData of [twoJohn, jude, titus]) {
    console.log(`\n📖 ${bookData.name_english} 설정 중...`);

    // 1. Book 생성
    const { data: existingBook } = await supabase
      .from('books')
      .select('id')
      .eq('name_english', bookData.name_english)
      .single();

    let bookId: string;

    if (existingBook) {
      console.log(`  ✅ Book already exists`);
      bookId = existingBook.id;
    } else {
      const { data: newBook, error: bookError } = await supabase
        .from('books')
        .insert({
          name_english: bookData.name_english,
          name_korean: bookData.name_korean,
          abbreviation: bookData.abbreviation,
          testament: bookData.testament,
          order_number: bookData.order_number,
          total_chapters: bookData.total_chapters
        })
        .select()
        .single();

      if (bookError || !newBook) {
        console.error(`  ❌ Book creation failed:`, bookError);
        continue;
      }

      console.log(`  ✅ Book created`);
      bookId = newBook.id;
    }

    // 2. Chapters 생성
    for (const chapterData of bookData.chapters) {
      const { data: existingChapter } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', bookId)
        .eq('chapter_number', chapterData.chapter_number)
        .single();

      if (existingChapter) {
        console.log(`  ✅ Chapter ${chapterData.chapter_number} already exists`);
      } else {
        const { error: chapterError } = await supabase
          .from('chapters')
          .insert({
            book_id: bookId,
            chapter_number: chapterData.chapter_number,
            total_verses: chapterData.total_verses
          });

        if (chapterError) {
          console.error(`  ❌ Chapter ${chapterData.chapter_number} creation failed:`, chapterError);
        } else {
          console.log(`  ✅ Chapter ${chapterData.chapter_number} created`);
        }
      }
    }
  }

  console.log(`\n✅ 모든 책 설정 완료\n`);
}

setupBooks();
