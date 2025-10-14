/**
 * Galatians 5장 구절들을 verses 테이블에 삽입하는 스크립트
 */

import * as dotenv from "dotenv";
import * as path from "path";
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";

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

async function main() {
  console.log(`\n${"=".repeat(80)}`);
  console.log("📝 Galatians 5장 구절 삽입");
  console.log(`${"=".repeat(80)}\n`);

  // NIV Bible JSON 읽기
  const nivPath = path.resolve(__dirname, "../source-data/NIV_Bible.json");
  const nivBible = JSON.parse(fs.readFileSync(nivPath, "utf-8"));

  const galatians5 = nivBible["Galatians"]["5"];

  if (!galatians5) {
    console.error("❌ Galatians 5장을 NIV_Bible.json에서 찾을 수 없습니다!");
    process.exit(1);
  }

  console.log(`✅ NIV_Bible.json에서 Galatians 5장 로드 완료`);
  console.log(`   총 구절 수: ${Object.keys(galatians5).length}개\n`);

  // Galatians의 book_id와 5장의 chapter_id 찾기
  const { data: bookData } = await supabase
    .from("books")
    .select("id")
    .eq("name_english", "Galatians")
    .single();

  if (!bookData) {
    console.error("❌ Galatians 책을 찾을 수 없습니다!");
    process.exit(1);
  }

  const bookId = bookData.id;
  console.log(`✅ Book ID: ${bookId}`);

  const { data: chapterData } = await supabase
    .from("chapters")
    .select("id")
    .eq("book_id", bookId)
    .eq("chapter_number", 5)
    .single();

  if (!chapterData) {
    console.error("❌ Galatians 5장을 찾을 수 없습니다!");
    process.exit(1);
  }

  const chapterId = chapterData.id;
  console.log(`✅ Chapter ID: ${chapterId}\n`);

  // verses 삽입 준비
  const versesToInsert = [];

  for (const [verseNum, nivText] of Object.entries(galatians5)) {
    const verseNumber = parseInt(verseNum);
    const reference = `Galatians 5:${verseNumber}`;

    versesToInsert.push({
      book_id: bookId,
      chapter_id: chapterId,
      verse_number: verseNumber,
      reference: reference,
      niv_text: nivText,
      analysis_completed: false,
    });
  }

  console.log(`${"─".repeat(80)}`);
  console.log(`📤 verses 테이블에 ${versesToInsert.length}개 구절 삽입 중...`);
  console.log(`${"─".repeat(80)}\n`);

  // 배치 삽입
  const { data, error } = await supabase
    .from("verses")
    .insert(versesToInsert)
    .select();

  if (error) {
    console.error("❌ 삽입 실패:", error.message);
    process.exit(1);
  }

  console.log(`✅ 삽입 완료: ${data?.length}개 구절\n`);

  // 삽입된 구절들 확인
  console.log(`${"─".repeat(80)}`);
  console.log("📋 삽입된 구절 목록:");
  console.log(`${"─".repeat(80)}`);

  data?.slice(0, 5).forEach((verse: any) => {
    console.log(`   ${verse.reference} (ID: ${verse.id})`);
  });

  if (data && data.length > 5) {
    console.log(`   ... 외 ${data.length - 5}개`);
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log("✅ Galatians 5장 구절 삽입 완료!");
  console.log(`${"=".repeat(80)}\n`);
}

main().catch((error) => {
  console.error("\n❌ 예외 발생:", error);
  process.exit(1);
});
