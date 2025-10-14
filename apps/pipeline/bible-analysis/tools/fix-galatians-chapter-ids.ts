/**
 * 잘못된 chapter_id로 저장된 Galatians 구절들을 수정하는 스크립트
 *
 * 문제: Galatians 구절들이 잘못된 chapter_id로 저장되어 있음
 * 해결: 잘못된 구절들을 삭제하고 올바른 chapter_id로 다시 삽입
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

async function main() {
  console.log(`\n${"=".repeat(80)}`);
  console.log("🔧 Galatians chapter_id 수정 작업");
  console.log(`${"=".repeat(80)}\n`);

  // 1. Galatians book_id 찾기
  const { data: galatiansBook } = await supabase
    .from("books")
    .select("id")
    .eq("name_english", "Galatians")
    .single();

  if (!galatiansBook) {
    console.error("❌ Galatians 책을 찾을 수 없습니다!");
    return;
  }

  console.log(`✅ Galatians Book ID: ${galatiansBook.id}\n`);

  // 2. 올바른 chapter_id 매핑 가져오기
  const { data: chapters } = await supabase
    .from("chapters")
    .select("id, chapter_number")
    .eq("book_id", galatiansBook.id)
    .order("chapter_number");

  const chapterMap = new Map(
    chapters?.map((ch) => [ch.chapter_number, ch.id]) || []
  );

  console.log("📖 올바른 Chapter ID 매핑:");
  chapters?.forEach((ch) => {
    console.log(`   Chapter ${ch.chapter_number} → ID ${ch.id}`);
  });
  console.log();

  // 3. 잘못 저장된 Galatians 구절들 찾기
  console.log(`${"─".repeat(80)}`);
  console.log("🔍 잘못 저장된 Galatians 구절 검색");
  console.log(`${"─".repeat(80)}\n`);

  const { data: wrongVerses } = await supabase
    .from("verses")
    .select("id, reference, chapter_id, verse_number")
    .ilike("reference", "Galatians%")
    .order("reference");

  if (!wrongVerses || wrongVerses.length === 0) {
    console.log("✅ 잘못된 구절이 없습니다.\n");
    return;
  }

  console.log(`⚠️  발견된 Galatians 구절: ${wrongVerses.length}개`);

  // chapter별로 그룹화
  const byChapter = new Map<number, typeof wrongVerses>();
  wrongVerses.forEach((v) => {
    const match = v.reference.match(/Galatians (\d+):(\d+)/);
    if (match) {
      const chapterNum = parseInt(match[1]);
      if (!byChapter.has(chapterNum)) {
        byChapter.set(chapterNum, []);
      }
      byChapter.get(chapterNum)!.push(v);
    }
  });

  console.log("\n장별 분포:");
  byChapter.forEach((verses, chapterNum) => {
    const correctChapterId = chapterMap.get(chapterNum);
    const wrongIds = new Set(verses.map((v) => v.chapter_id));
    console.log(
      `   ${chapterNum}장: ${verses.length}개 구절 (저장된 chapter_id: ${Array.from(wrongIds).join(", ")} → 올바른 ID: ${correctChapterId})`
    );
  });
  console.log();

  // 4. 각 장별로 처리
  for (const [chapterNum, verses] of byChapter.entries()) {
    const correctChapterId = chapterMap.get(chapterNum);

    if (!correctChapterId) {
      console.error(`   ❌ Chapter ${chapterNum}의 올바른 ID를 찾을 수 없습니다!`);
      continue;
    }

    // 잘못된 chapter_id로 저장된 구절인지 확인
    const hasWrongId = verses.some((v) => v.chapter_id !== correctChapterId);

    if (!hasWrongId) {
      console.log(`   ✅ Chapter ${chapterNum}: 모두 올바른 chapter_id로 저장되어 있음`);
      continue;
    }

    console.log(`\n${"─".repeat(80)}`);
    console.log(`🔧 Chapter ${chapterNum} 수정 중...`);
    console.log(`${"─".repeat(80)}`);

    // 4-1. 잘못된 구절들 삭제
    const idsToDelete = verses.map((v) => v.id);
    console.log(`   🗑️  ${idsToDelete.length}개 구절 삭제 중...`);

    const { error: deleteError } = await supabase
      .from("verses")
      .delete()
      .in("id", idsToDelete);

    if (deleteError) {
      console.error(`   ❌ 삭제 실패:`, deleteError.message);
      continue;
    }

    console.log(`   ✅ 삭제 완료`);

    // 4-2. NIV에서 텍스트 가져와서 올바른 chapter_id로 재삽입
    const nivChapter = nivBible["Galatians"]?.[String(chapterNum)];

    if (!nivChapter) {
      console.error(
        `   ❌ NIV_Bible.json에서 Galatians ${chapterNum}장을 찾을 수 없습니다!`
      );
      continue;
    }

    const versesToInsert = [];

    for (const [verseNum, nivText] of Object.entries(nivChapter)) {
      const verseNumber = parseInt(verseNum);
      const reference = `Galatians ${chapterNum}:${verseNumber}`;

      versesToInsert.push({
        book_id: galatiansBook.id,
        chapter_id: correctChapterId,
        verse_number: verseNumber,
        reference: reference,
        niv_text: nivText,
        analysis_completed: false,
      });
    }

    console.log(`   📤 ${versesToInsert.length}개 구절 재삽입 중...`);

    const { data, error: insertError } = await supabase
      .from("verses")
      .insert(versesToInsert)
      .select();

    if (insertError) {
      console.error(`   ❌ 재삽입 실패:`, insertError.message);
      continue;
    }

    console.log(`   ✅ 재삽입 완료: ${data?.length}개 구절`);
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log("✅ Galatians chapter_id 수정 작업 완료!");
  console.log(`${"=".repeat(80)}\n`);
}

main().catch((error) => {
  console.error("\n❌ 예외 발생:", error);
  process.exit(1);
});
