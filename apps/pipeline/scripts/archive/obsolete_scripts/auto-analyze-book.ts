#!/usr/bin/env tsx
/**
 * 범용 성경책 자동 분석 스크립트
 * 사용법: npx tsx scripts/auto-analyze-book.ts <BookName> <ChapterNum> <TotalVerses>
 * 예: npx tsx scripts/auto-analyze-book.ts "3 John" 1 15
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

const [, , bookName, chapterNumStr, totalVersesStr] = process.argv;

if (!bookName || !chapterNumStr || !totalVersesStr) {
  console.error('Usage: npx tsx scripts/auto-analyze-book.ts <BookName> <ChapterNum> <TotalVerses>');
  process.exit(1);
}

const chapterNum = parseInt(chapterNumStr);
const totalVerses = parseInt(totalVersesStr);

async function analyzeBook() {
  console.log(`\n📖 ${bookName} Chapter ${chapterNum} 분석 시작 (${totalVerses}구절)\n`);

  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', bookName)
    .single();

  if (!book) {
    console.error(`❌ Book not found: ${bookName}`);
    process.exit(1);
  }

  const { data: chapter } = await supabase
    .from('chapters')
    .select('id')
    .eq('book_id', book.id)
    .eq('chapter_number', chapterNum)
    .single();

  if (!chapter) {
    console.error(`❌ Chapter not found: ${bookName} ${chapterNum}`);
    process.exit(1);
  }

  // 미완료 구절 목록 조회
  const { data: pendingVerses } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .eq('book_id', book.id)
    .eq('chapter_id', chapter.id)
    .eq('analysis_completed', false)
    .order('verse_number');

  if (!pendingVerses || pendingVerses.length === 0) {
    console.log(`✅ ${bookName} ${chapterNum} - 이미 모든 구절이 분석되었습니다.`);
    return;
  }

  console.log(`📝 분석 대기 구절: ${pendingVerses.length}개`);
  pendingVerses.forEach(v => console.log(`  - ${v.reference}`));

  console.log(`\n⚠️ 이 스크립트는 구절 목록만 표시합니다.`);
  console.log(`실제 분석은 Claude Code 대화형 세션에서 수행해야 합니다.\n`);
}

analyzeBook();
