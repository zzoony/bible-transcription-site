#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function checkSchema() {
  console.log('\n📋 Books 테이블 샘플 조회:');
  const { data: books } = await supabase
    .from('books')
    .select('*')
    .limit(1);

  if (books && books.length > 0) {
    console.log('컬럼:', Object.keys(books[0]));
  } else {
    console.log('테이블이 비어있습니다.');
  }

  console.log('\n📋 Chapters 테이블 샘플 조회:');
  const { data: chapters } = await supabase
    .from('chapters')
    .select('*')
    .limit(1);

  if (chapters && chapters.length > 0) {
    console.log('컬럼:', Object.keys(chapters[0]));
  } else {
    console.log('테이블이 비어있습니다.');
  }

  console.log('\n📋 Verses 테이블 샘플 조회:');
  const { data: verses } = await supabase
    .from('verses')
    .select('*')
    .limit(1);

  if (verses && verses.length > 0) {
    console.log('컬럼:', Object.keys(verses[0]));
  } else {
    console.log('테이블이 비어있습니다.');
  }
}

checkSchema();
