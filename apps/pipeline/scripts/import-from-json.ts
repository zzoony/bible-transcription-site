#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function importVerses() {
  const jsonPath = path.join(__dirname, '../data/niv-texts.json');
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // 2 John 처리
  console.log('\n2 John 구절 삽입 중...');
  const { data: twoJohnBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 John')
    .single();

  if (twoJohnBook) {
    const { data: twoJohnChapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', twoJohnBook.id)
      .eq('chapter_number', 1)
      .single();

    if (twoJohnChapter) {
      for (const v of data['2 John']) {
        const reference = `2 John 1:${v.verse}`;
        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: twoJohnBook.id,
            chapter_id: twoJohnChapter.id,
            verse_number: v.verse,
            reference,
            niv_text: v.text,
            analysis_completed: false
          });
          console.log(`  ${reference}`);
        }
      }
    }
  }

  // Jude 처리
  console.log('\nJude 구절 삽입 중...');
  const { data: judeBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', 'Jude')
    .single();

  if (judeBook) {
    const { data: judeChapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', judeBook.id)
      .eq('chapter_number', 1)
      .single();

    if (judeChapter) {
      for (const v of data['Jude']) {
        const reference = `Jude 1:${v.verse}`;
        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: judeBook.id,
            chapter_id: judeChapter.id,
            verse_number: v.verse,
            reference,
            niv_text: v.text,
            analysis_completed: false
          });
          console.log(`  ${reference}`);
        }
      }
    }
  }

  // Titus 처리
  console.log('\nTitus 구절 삽입 중...');
  const { data: titusBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', 'Titus')
    .single();

  if (titusBook) {
    for (const chapterNum of ['1', '2', '3']) {
      const { data: chapter } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', titusBook.id)
        .eq('chapter_number', parseInt(chapterNum))
        .single();

      if (chapter) {
        for (const v of data['Titus'][chapterNum]) {
          const reference = `Titus ${chapterNum}:${v.verse}`;
          const { data: existing } = await supabase
            .from('verses')
            .select('id')
            .eq('reference', reference)
            .single();

          if (!existing) {
            await supabase.from('verses').insert({
              book_id: titusBook.id,
              chapter_id: chapter.id,
              verse_number: v.verse,
              reference,
              niv_text: v.text,
              analysis_completed: false
            });
            console.log(`  ${reference}`);
          }
        }
      }
    }
  }

  console.log('\n모든 구절 삽입 완료\n');
}

importVerses();
