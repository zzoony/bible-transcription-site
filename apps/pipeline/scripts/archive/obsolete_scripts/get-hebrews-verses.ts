import { config } from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';

// apps/pipeline/.env 파일 로드
config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('환경 변수 오류:');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '설정됨' : '없음');
  console.error('SUPABASE_SERVICE_KEY:', supabaseKey ? '설정됨' : '없음');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getHebrewsVerses() {
  console.log('히브리서 1-7장 구절 조회 중...');
  
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Hebrews%')
    .order('reference');
  
  if (error) {
    console.error('오류:', error);
    return;
  }
  
  // 1-7장만 필터링
  const chapters1to7 = data.filter(v => {
    const match = v.reference.match(/Hebrews (\d+):/);
    if (match) {
      const chapter = parseInt(match[1]);
      return chapter >= 1 && chapter <= 7;
    }
    return false;
  });
  
  console.log(`\n총 ${chapters1to7.length}개 구절 발견\n`);
  
  // 장별로 그룹화
  const byChapter: { [key: number]: any[] } = {};
  chapters1to7.forEach(v => {
    const match = v.reference.match(/Hebrews (\d+):/);
    if (match) {
      const chapter = parseInt(match[1]);
      if (!byChapter[chapter]) byChapter[chapter] = [];
      byChapter[chapter].push(v);
    }
  });
  
  // 장별 통계
  for (let i = 1; i <= 7; i++) {
    if (byChapter[i]) {
      console.log(`Hebrews ${i}: ${byChapter[i].length}개 구절`);
    }
  }
  
  // 전체 구절을 파일로 저장
  fs.writeFileSync(
    resolve(__dirname, '../hebrews-1-7-verses.json'),
    JSON.stringify(chapters1to7, null, 2)
  );
  console.log('\nhebrews-1-7-verses.json 파일에 저장 완료');
  
  // 샘플 출력
  console.log('\n첫 3개 구절 샘플:');
  chapters1to7.slice(0, 3).forEach(v => {
    console.log(`\n${v.reference}`);
    console.log(`"${v.niv_text}"`);
  });
}

getHebrewsVerses();
