#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function analyzeBooks() {
  const books = ['2 Timothy', '1 Thessalonians'];

  for (const bookName of books) {
    console.log(`\n\n${'='.repeat(80)}`);
    console.log(`📖 ${bookName} 분석 시작`);
    console.log('='.repeat(80));

    // 미완료 구절 조회
    const { data: verses } = await supabase
      .from('verses')
      .select('id, reference, niv_text')
      .ilike('reference', `${bookName}%`)
      .eq('analysis_completed', false)
      .order('reference');

    if (!verses || verses.length === 0) {
      console.log(`✅ ${bookName} - 이미 모든 구절이 분석되었습니다.`);
      continue;
    }

    console.log(`\n📝 분석 대기 구절: ${verses.length}개\n`);

    for (const verse of verses) {
      console.log(`\n${'─'.repeat(80)}`);
      console.log(`📍 ${verse.reference}`);
      console.log(`─'.repeat(80)}`);
      console.log(`\n원문 (NIV):\n${verse.niv_text}\n`);
      console.log(`⚠️ Claude Code 대화형 세션에서 이 구절을 분석하고`);
      console.log(`   save-analysis-to-db.ts를 사용하여 저장해주세요.\n`);
      console.log(`   예: npx tsx scripts/save-analysis-to-db.ts analysis.json\n`);
    }

    console.log(`\n${'='.repeat(80)}`);
    console.log(`📊 ${bookName} 통계:`);
    console.log(`   총 미완료: ${verses.length}개`);
    console.log('='.repeat(80)}\n`);
  }
}

analyzeBooks();
