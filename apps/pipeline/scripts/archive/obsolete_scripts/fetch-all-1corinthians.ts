import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import * as cheerio from 'cheerio';

const supabaseUrl = 'https://kmbndafjfxzbyokzqgno.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchChapterFromBibleGateway(chapter: number): Promise<Record<string, string>> {
  const url = `https://www.biblegateway.com/passage/?search=1+Corinthians+${chapter}&version=NIV`;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const verses: Record<string, string> = {};

    // BibleGateway의 HTML 구조에서 구절 추출
    $('.passage-text .text').each((_, element) => {
      const $el = $(element);
      const verseNum = $el.find('.versenum').first().text().trim();
      const verseText = $el.text().replace(/\d+/g, '').trim();

      if (verseNum && verseText) {
        verses[verseNum] = verseText;
      }
    });

    return verses;
  } catch (error) {
    console.error(`Chapter ${chapter} 가져오기 실패:`, error);
    return {};
  }
}

async function main() {
  console.log('=== 1 Corinthians 전체 NIV 텍스트 가져오기 ===\n');

  let totalInserted = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  // 1 Corinthians는 16장까지 있음
  for (let chapter = 1; chapter <= 16; chapter++) {
    console.log(`\n[Chapter ${chapter}] 가져오는 중...`);

    const verses = await fetchChapterFromBibleGateway(chapter);

    if (Object.keys(verses).length === 0) {
      console.error(`❌ Chapter ${chapter} 가져오기 실패`);
      totalFailed++;
      continue;
    }

    console.log(`총 ${Object.keys(verses).length}개 구절 발견`);

    for (const [verse, text] of Object.entries(verses)) {
      const reference = `1 Corinthians ${chapter}:${verse}`;

      // 이미 존재하는지 확인
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', reference)
        .single();

      if (existing) {
        console.log(`  건너뜀: ${reference}`);
        totalSkipped++;
        continue;
      }

      // 삽입
      const { error } = await supabase
        .from('verses')
        .insert({
          reference,
          text,
          book: '1 Corinthians',
          chapter: chapter,
          verse: parseInt(verse)
        });

      if (error) {
        console.error(`  ❌ 삽입 실패: ${reference}`, error.message);
        totalFailed++;
      } else {
        console.log(`  ✅ 삽입: ${reference}`);
        totalInserted++;
      }
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log(`\n=== 완료 ===`);
  console.log(`삽입: ${totalInserted}개`);
  console.log(`건너뜀: ${totalSkipped}개`);
  console.log(`실패: ${totalFailed}개`);
}

main();
