/**
 * 누락된 구절들을 NIV_Bible.json에서 가져와서 일괄 삽입하는 스크립트
 */

import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";
import { createClient } from "@supabase/supabase-js";

// 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, "../../../../.env"),
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ 오류: Supabase 환경 변수가 설정되지 않았습니다!");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// NIV Bible 로드
const nivPath = path.resolve(__dirname, "../source-data/NIV_Bible.json");
const nivBible = JSON.parse(fs.readFileSync(nivPath, "utf-8"));

interface MissingChapter {
  bookName: string;
  bookKorean: string;
  chapter: number;
  expectedVerses: number;
}

const missingChapters: MissingChapter[] = [
  { bookName: "Galatians", bookKorean: "갈라디아서", chapter: 1, expectedVerses: 24 },
  { bookName: "Galatians", bookKorean: "갈라디아서", chapter: 3, expectedVerses: 29 },
  { bookName: "Galatians", bookKorean: "갈라디아서", chapter: 4, expectedVerses: 31 },
  { bookName: "Galatians", bookKorean: "갈라디아서", chapter: 6, expectedVerses: 18 },
  { bookName: "Colossians", bookKorean: "골로새서", chapter: 1, expectedVerses: 29 },
  { bookName: "Colossians", bookKorean: "골로새서", chapter: 2, expectedVerses: 23 },
  { bookName: "Colossians", bookKorean: "골로새서", chapter: 3, expectedVerses: 25 },
  { bookName: "Colossians", bookKorean: "골로새서", chapter: 4, expectedVerses: 18 },
  { bookName: "1 Peter", bookKorean: "베드로전서", chapter: 1, expectedVerses: 25 },
  { bookName: "1 Peter", bookKorean: "베드로전서", chapter: 2, expectedVerses: 25 },
  { bookName: "1 Peter", bookKorean: "베드로전서", chapter: 3, expectedVerses: 22 },
  { bookName: "1 Peter", bookKorean: "베드로전서", chapter: 4, expectedVerses: 19 },
  { bookName: "1 Peter", bookKorean: "베드로전서", chapter: 5, expectedVerses: 14 },
];

async function insertMissingVerses() {
  console.log(`\n${"=".repeat(80)}`);
  console.log("📝 누락된 구절 삽입 작업 시작");
  console.log(`${"=".repeat(80)}\n`);

  let totalInserted = 0;

  for (const missing of missingChapters) {
    console.log(`\n${"─".repeat(80)}`);
    console.log(`📖 ${missing.bookKorean} (${missing.bookName}) ${missing.chapter}장`);
    console.log(`${"─".repeat(80)}`);

    // 1. book_id 찾기
    const { data: bookData } = await supabase
      .from("books")
      .select("id")
      .eq("name_english", missing.bookName)
      .single();

    if (!bookData) {
      console.error(`   ❌ 책을 찾을 수 없습니다: ${missing.bookName}`);
      continue;
    }

    const bookId = bookData.id;
    console.log(`   ✅ Book ID: ${bookId}`);

    // 2. chapter_id 찾기
    const { data: chapterData } = await supabase
      .from("chapters")
      .select("id")
      .eq("book_id", bookId)
      .eq("chapter_number", missing.chapter)
      .single();

    if (!chapterData) {
      console.error(
        `   ❌ 장을 찾을 수 없습니다: ${missing.bookName} ${missing.chapter}장`
      );
      continue;
    }

    const chapterId = chapterData.id;
    console.log(`   ✅ Chapter ID: ${chapterId}`);

    // 3. NIV 텍스트 가져오기
    const nivChapter = nivBible[missing.bookName]?.[String(missing.chapter)];

    if (!nivChapter) {
      console.error(
        `   ❌ NIV_Bible.json에서 찾을 수 없습니다: ${missing.bookName} ${missing.chapter}장`
      );
      continue;
    }

    console.log(`   ✅ NIV 텍스트 로드 완료: ${Object.keys(nivChapter).length}개 구절`);

    // 4. verses 삽입 준비
    const versesToInsert = [];

    for (const [verseNum, nivText] of Object.entries(nivChapter)) {
      const verseNumber = parseInt(verseNum);
      const reference = `${missing.bookName} ${missing.chapter}:${verseNumber}`;

      versesToInsert.push({
        book_id: bookId,
        chapter_id: chapterId,
        verse_number: verseNumber,
        reference: reference,
        niv_text: nivText,
        analysis_completed: false,
      });
    }

    console.log(`   📤 ${versesToInsert.length}개 구절 삽입 중...`);

    // 5. 배치 삽입
    const { data, error } = await supabase
      .from("verses")
      .insert(versesToInsert)
      .select();

    if (error) {
      console.error(`   ❌ 삽입 실패:`, error.message);
      continue;
    }

    console.log(`   ✅ 삽입 완료: ${data?.length}개 구절`);
    totalInserted += data?.length || 0;
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log(`✅ 작업 완료: 총 ${totalInserted}개 구절 삽입`);
  console.log(`${"=".repeat(80)}\n`);
}

insertMissingVerses().catch((error) => {
  console.error("\n❌ 예외 발생:", error);
  process.exit(1);
});
