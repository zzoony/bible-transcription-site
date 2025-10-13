const fs = require('fs');
const path = require('path');

// NIV Bible 로드
const nivBiblePath = path.join(__dirname, '..', '..', 'source-data', 'NIV_Bible.json');
const nivBible = JSON.parse(fs.readFileSync(nivBiblePath, 'utf8'));

// 책 이름 매핑 (NIV_Bible.json → bible-structure.json)
const bookNameMapping = {
  'Psalm': 'Psalms',
  'Song Of Solomon': 'Song of Solomon'
};

// 구절 수 추출
const verseCounts = {};

for (const bookName in nivBible) {
  // 책 이름 변환 (매핑이 있으면 변환, 없으면 그대로 사용)
  const mappedName = bookNameMapping[bookName] || bookName;
  verseCounts[mappedName] = {};

  for (const chapter in nivBible[bookName]) {
    const verses = Object.keys(nivBible[bookName][chapter]);
    verseCounts[mappedName][chapter] = verses.length;
  }
}

// 결과 저장
const outputPath = path.join(__dirname, '..', 'src', 'verse-counts.json');
fs.writeFileSync(outputPath, JSON.stringify(verseCounts, null, 2), 'utf8');

console.log('✅ verse-counts.json 생성 완료!');
console.log(`📊 총 ${Object.keys(verseCounts).length}권 성경 데이터 추출`);

// 예시 출력 (James 3장)
console.log('\n예시: James 3장 =', verseCounts['James']['3'], '절');
