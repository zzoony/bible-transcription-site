import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function getOrderedVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '1 Timothy%')
    .order('reference');

  if (error) {
    console.error('Error:', error);
    return;
  }

  // Sort properly by chapter and verse
  const sorted = data.sort((a, b) => {
    const aMatch = a.reference.match(/1 Timothy (\d+):(\d+)/);
    const bMatch = b.reference.match(/1 Timothy (\d+):(\d+)/);
    if (!aMatch || !bMatch) return 0;
    
    const aChapter = parseInt(aMatch[1]);
    const aVerse = parseInt(aMatch[2]);
    const bChapter = parseInt(bMatch[1]);
    const bVerse = parseInt(bMatch[2]);
    
    if (aChapter !== bChapter) return aChapter - bChapter;
    return aVerse - bVerse;
  });

  // Group by chapter
  const chapters: {[key: number]: Array<{reference: string, niv_text: string}>} = {};
  
  sorted.forEach(verse => {
    const match = verse.reference.match(/1 Timothy (\d+):(\d+)/);
    if (match) {
      const chapter = parseInt(match[1]);
      if (!chapters[chapter]) chapters[chapter] = [];
      chapters[chapter].push(verse);
    }
  });

  // Save to file
  let output = '';
  for (let ch = 1; ch <= 6; ch++) {
    if (chapters[ch]) {
      output += `\n=== CHAPTER ${ch} (${chapters[ch].length} verses) ===\n\n`;
      chapters[ch].forEach(v => {
        output += `${v.reference}\n${v.niv_text}\n\n`;
      });
    }
  }

  fs.writeFileSync('/tmp/1timothy-ordered.txt', output);
  console.log(`총 ${data.length}개 구절을 장 순서대로 저장했습니다.`);
  
  // Print chapter statistics
  for (let ch = 1; ch <= 6; ch++) {
    if (chapters[ch]) {
      console.log(`Chapter ${ch}: ${chapters[ch].length} verses`);
    }
  }
}

getOrderedVerses();
