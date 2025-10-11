import * as fs from 'fs';
import * as path from 'path';

/**
 * NIV 원문 조회 유틸리티
 *
 * 사용법:
 *   npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:2"
 *   npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:1-5"
 *   npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1"
 */

// NIV JSON 파일 로드
const nivPath = path.resolve(__dirname, '../source-data/NIV_Bible.json');
const nivBible = JSON.parse(fs.readFileSync(nivPath, 'utf-8'));

interface VerseReference {
  book: string;
  chapter: string;
  verseStart?: string;
  verseEnd?: string;
}

function parseReference(reference: string): VerseReference {
  // "Genesis 1:2" 또는 "Genesis 1:1-5" 또는 "Genesis 1" 형식
  const match = reference.match(/^(.+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/);

  if (!match) {
    throw new Error(`잘못된 참조 형식: ${reference}`);
  }

  const [, book, chapter, verseStart, verseEnd] = match;

  return {
    book: book.trim(),
    chapter,
    verseStart,
    verseEnd
  };
}

function getNIVText(reference: string): void {
  try {
    const ref = parseReference(reference);

    // 책 확인
    if (!nivBible[ref.book]) {
      console.error(`❌ 책을 찾을 수 없습니다: ${ref.book}`);
      console.log('\n사용 가능한 책 목록 (일부):');
      console.log(Object.keys(nivBible).slice(0, 10).join(', '), '...');
      return;
    }

    // 장 확인
    if (!nivBible[ref.book][ref.chapter]) {
      console.error(`❌ 장을 찾을 수 없습니다: ${ref.book} ${ref.chapter}`);
      console.log(`\n${ref.book}의 사용 가능한 장:`, Object.keys(nivBible[ref.book]).join(', '));
      return;
    }

    const chapter = nivBible[ref.book][ref.chapter];

    // 전체 장 조회
    if (!ref.verseStart) {
      console.log(`\n📖 ${ref.book} ${ref.chapter} (전체 장)\n`);
      Object.entries(chapter).forEach(([verse, text]) => {
        console.log(`${ref.chapter}:${verse} ${text}\n`);
      });
      return;
    }

    // 단일 절 조회
    if (!ref.verseEnd) {
      if (!chapter[ref.verseStart]) {
        console.error(`❌ 절을 찾을 수 없습니다: ${reference}`);
        return;
      }

      console.log(`\n📖 ${ref.book} ${ref.chapter}:${ref.verseStart}\n`);
      console.log(chapter[ref.verseStart]);
      console.log();
      return;
    }

    // 범위 조회 (예: 1-5)
    console.log(`\n📖 ${ref.book} ${ref.chapter}:${ref.verseStart}-${ref.verseEnd}\n`);
    const start = parseInt(ref.verseStart);
    const end = parseInt(ref.verseEnd);

    for (let i = start; i <= end; i++) {
      const verseNum = i.toString();
      if (chapter[verseNum]) {
        console.log(`${ref.chapter}:${verseNum} ${chapter[verseNum]}\n`);
      }
    }

  } catch (error) {
    console.error('오류:', error instanceof Error ? error.message : error);
    console.log('\n사용법:');
    console.log('  npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:2"');
    console.log('  npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:1-5"');
    console.log('  npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1"');
  }
}

// 메인 실행
const reference = process.argv[2];

if (!reference) {
  console.log('📖 NIV 원문 조회 유틸리티\n');
  console.log('사용법:');
  console.log('  npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:2"      # 단일 절');
  console.log('  npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:1-5"   # 범위');
  console.log('  npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1"       # 전체 장');
  console.log('\n참고: bible-analysis/source-data/NIV_Bible.json 파일 사용');
  process.exit(0);
}

getNIVText(reference);
