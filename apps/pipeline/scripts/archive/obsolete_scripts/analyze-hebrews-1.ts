import { config } from 'dotenv';
import { resolve } from 'path';
import * as fs from 'fs';

config({ path: resolve(__dirname, '../.env') });

const versesData = JSON.parse(
  fs.readFileSync(resolve(__dirname, '../hebrews-1-7-verses.json'), 'utf-8')
);

// Hebrews 1장만 필터링하고 정렬
const chapter1 = versesData
  .filter((v: any) => v.reference.startsWith('Hebrews 1:'))
  .sort((a: any, b: any) => {
    const aNum = parseInt(a.reference.split(':')[1]);
    const bNum = parseInt(b.reference.split(':')[1]);
    return aNum - bNum;
  });

console.log('=== 히브리서 1장 구절 목록 ===\n');
chapter1.forEach((v: any) => {
  console.log(`${v.reference}`);
  console.log(`"${v.niv_text}"`);
  console.log('');
});

console.log(`\n총 ${chapter1.length}개 구절`);
