import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

interface Verse {
  reference: string;
  niv_text: string;
}

function parseReference(ref: string): { book: string; chapter: number; verse: number } {
  const match = ref.match(/^(.+?)\s+(\d+):(\d+)$/);
  if (!match) throw new Error(`Invalid reference: ${ref}`);
  return {
    book: match[1],
    chapter: parseInt(match[2]),
    verse: parseInt(match[3])
  };
}

async function fetchAndSortVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '1 Peter%');

  if (error) {
    console.error('오류:', error);
    return;
  }

  // Sort verses properly
  const sorted = (data as Verse[]).sort((a, b) => {
    const refA = parseReference(a.reference);
    const refB = parseReference(b.reference);
    
    if (refA.chapter !== refB.chapter) {
      return refA.chapter - refB.chapter;
    }
    return refA.verse - refB.verse;
  });

  console.log(`총 ${sorted.length}개 구절 조회됨\n`);
  
  let output = '';
  sorted.forEach(verse => {
    output += `${verse.reference}\n${verse.niv_text}\n\n`;
  });

  fs.writeFileSync('/tmp/1peter_sorted.txt', output);
  console.log('파일 저장 완료: /tmp/1peter_sorted.txt');
}

fetchAndSortVerses();
