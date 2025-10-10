#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function setupBooks() {
  console.log('\n📖 2 Timothy와 1 Thessalonians 설정 시작...\n');

  // 2 Timothy (신약 16번째 책, 4장)
  const twoTimothyChapters = [
    { chapter: 1, verses: 18 },
    { chapter: 2, verses: 26 },
    { chapter: 3, verses: 17 },
    { chapter: 4, verses: 22 }
  ];

  // 1 Thessalonians (신약 13번째 책, 5장)
  const thessaloniansChapters = [
    { chapter: 1, verses: 10 },
    { chapter: 2, verses: 20 },
    { chapter: 3, verses: 13 },
    { chapter: 4, verses: 18 },
    { chapter: 5, verses: 28 }
  ];

  // 2 Timothy 설정
  console.log('📕 2 Timothy 설정 중...');

  // 기존 책 확인
  let { data: twoTimothy } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Timothy')
    .single();

  // 없으면 생성
  if (!twoTimothy) {
    const { data: newBook, error: bookError1 } = await supabase
      .from('books')
      .insert({
        name_english: '2 Timothy',
        name_korean: '디모데후서',
        abbreviation: '2 Tim',
        testament: 2,
        order_number: 55,
        total_chapters: 4
      })
      .select()
      .single();

    if (bookError1) {
      console.error('  ❌ 2 Timothy Book 생성 실패:', bookError1);
      return;
    }
    twoTimothy = newBook;
  }

  console.log(`  ✅ Book ID: ${twoTimothy.id}`);

  for (const ch of twoTimothyChapters) {
    // 기존 챕터 확인
    const { data: existing } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', twoTimothy.id)
      .eq('chapter_number', ch.chapter)
      .single();

    if (!existing) {
      const { error: chError } = await supabase
        .from('chapters')
        .insert({
          book_id: twoTimothy.id,
          chapter_number: ch.chapter,
          total_verses: ch.verses
        });

      if (chError) {
        console.error(`  ❌ Chapter ${ch.chapter} 실패:`, chError);
      } else {
        console.log(`  ✅ Chapter ${ch.chapter} (${ch.verses}구절)`);
      }
    } else {
      console.log(`  ⏭️  Chapter ${ch.chapter} (이미 존재)`);
    }
  }

  // 1 Thessalonians 설정
  console.log('\n📘 1 Thessalonians 설정 중...');

  // 기존 책 확인
  let { data: thessalonians } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '1 Thessalonians')
    .single();

  // 없으면 생성
  if (!thessalonians) {
    const { data: newBook, error: bookError2 } = await supabase
      .from('books')
      .insert({
        name_english: '1 Thessalonians',
        name_korean: '데살로니가전서',
        abbreviation: '1 Thess',
        testament: 2,
        order_number: 52,
        total_chapters: 5
      })
      .select()
      .single();

    if (bookError2) {
      console.error('  ❌ 1 Thessalonians Book 생성 실패:', bookError2);
      return;
    }
    thessalonians = newBook;
  }

  console.log(`  ✅ Book ID: ${thessalonians.id}`);

  for (const ch of thessaloniansChapters) {
    // 기존 챕터 확인
    const { data: existing } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', thessalonians.id)
      .eq('chapter_number', ch.chapter)
      .single();

    if (!existing) {
      const { error: chError } = await supabase
        .from('chapters')
        .insert({
          book_id: thessalonians.id,
          chapter_number: ch.chapter,
          total_verses: ch.verses
        });

      if (chError) {
        console.error(`  ❌ Chapter ${ch.chapter} 실패:`, chError);
      } else {
        console.log(`  ✅ Chapter ${ch.chapter} (${ch.verses}구절)`);
      }
    } else {
      console.log(`  ⏭️  Chapter ${ch.chapter} (이미 존재)`);
    }
  }

  console.log('\n✅ Books/Chapters 설정 완료\n');
}

setupBooks();
