/**
 * 데이터베이스 무결성 검사 스크립트
 *
 * 검사 항목:
 * 1. chapters 테이블에는 있는데 verses가 하나도 없는 경우
 * 2. analysis_completed = true인데 실제 분석 데이터가 없는 경우
 * 3. 중복된 reference가 있는지 확인
 */

import * as dotenv from "dotenv";
import * as path from "path";
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

async function main() {
  console.log(`\n${"=".repeat(80)}`);
  console.log("🔍 데이터베이스 무결성 검사");
  console.log(`${"=".repeat(80)}\n`);

  // 1. 모든 책과 장 정보 가져오기
  const { data: booksData } = await supabase
    .from("books")
    .select("id, name_english, name_korean")
    .order("order_number");

  const { data: chaptersData } = await supabase
    .from("chapters")
    .select("id, book_id, chapter_number, total_verses")
    .order("book_id, chapter_number");

  console.log(`📚 전체 책 수: ${booksData?.length || 0}`);
  console.log(`📖 전체 장 수: ${chaptersData?.length || 0}\n`);

  // 2. 각 장에 대해 구절이 있는지 확인
  console.log(`${"─".repeat(80)}`);
  console.log("📋 구절이 없는 장 검사");
  console.log(`${"─".repeat(80)}\n`);

  const emptyChapters: {
    book: string;
    bookKorean: string;
    chapter: number;
    expectedVerses: number;
  }[] = [];

  for (const chapter of chaptersData || []) {
    const { data: verses } = await supabase
      .from("verses")
      .select("id")
      .eq("chapter_id", chapter.id);

    if (!verses || verses.length === 0) {
      const book = booksData?.find((b) => b.id === chapter.book_id);
      emptyChapters.push({
        book: book?.name_english || "Unknown",
        bookKorean: book?.name_korean || "알 수 없음",
        chapter: chapter.chapter_number,
        expectedVerses: chapter.total_verses,
      });
    }
  }

  if (emptyChapters.length > 0) {
    console.log(`⚠️  구절이 없는 장: ${emptyChapters.length}개\n`);
    emptyChapters.forEach((item) => {
      console.log(
        `   ${item.book} (${item.bookKorean}) ${item.chapter}장 - 예상 구절 수: ${item.expectedVerses}`
      );
    });
  } else {
    console.log("✅ 모든 장에 구절이 있습니다.\n");
  }

  // 3. 중복된 reference 확인
  console.log(`\n${"─".repeat(80)}`);
  console.log("📋 중복 reference 검사");
  console.log(`${"─".repeat(80)}\n`);

  const { data: allVerses } = await supabase
    .from("verses")
    .select("reference");

  const refCounts = new Map<string, number>();
  allVerses?.forEach((v) => {
    refCounts.set(v.reference, (refCounts.get(v.reference) || 0) + 1);
  });

  const duplicateRefs = Array.from(refCounts.entries())
    .filter(([_, count]) => count > 1)
    .map(([ref, count]) => ({ reference: ref, count }));

  if (duplicateRefs.length === 0) {
    console.log("✅ 중복된 reference가 없습니다.\n");
  } else {
    console.log(`⚠️  중복된 reference: ${duplicateRefs.length}개\n`);
    duplicateRefs.forEach((dup) => {
      console.log(`   ${dup.reference}: ${dup.count}개`);
    });
  }

  // 4. analysis_completed = true인데 분석 데이터가 없는 경우
  console.log(`\n${"─".repeat(80)}`);
  console.log("📋 분석 완료 플래그는 true인데 실제 데이터가 없는 경우");
  console.log(`${"─".repeat(80)}\n`);

  const { data: analyzedVerses } = await supabase
    .from("verses")
    .select("id, reference")
    .eq("analysis_completed", true);

  const incompleteAnalyses: string[] = [];

  for (const verse of analyzedVerses || []) {
    // sentence_structures 확인
    const { data: structures } = await supabase
      .from("sentence_structures")
      .select("id")
      .eq("verse_id", verse.id)
      .limit(1);

    if (!structures || structures.length === 0) {
      incompleteAnalyses.push(verse.reference);
    }
  }

  if (incompleteAnalyses.length > 0) {
    console.log(`⚠️  분석 데이터가 없는 구절: ${incompleteAnalyses.length}개\n`);
    incompleteAnalyses.slice(0, 10).forEach((ref) => {
      console.log(`   ${ref}`);
    });
    if (incompleteAnalyses.length > 10) {
      console.log(`   ... 외 ${incompleteAnalyses.length - 10}개`);
    }
  } else {
    console.log("✅ 모든 분석 완료 구절에 데이터가 있습니다.\n");
  }

  // 5. 갈라디아서 특별 검사
  console.log(`\n${"─".repeat(80)}`);
  console.log("📋 갈라디아서 상세 검사");
  console.log(`${"─".repeat(80)}\n`);

  const { data: galatians } = await supabase
    .from("books")
    .select("id")
    .eq("name_english", "Galatians")
    .single();

  if (galatians) {
    const { data: galatianChapters } = await supabase
      .from("chapters")
      .select("id, chapter_number, total_verses")
      .eq("book_id", galatians.id)
      .order("chapter_number");

    console.log(`📖 갈라디아서 장 수: ${galatianChapters?.length || 0}\n`);

    for (const chapter of galatianChapters || []) {
      const { data: verses } = await supabase
        .from("verses")
        .select("id, verse_number, analysis_completed")
        .eq("chapter_id", chapter.id)
        .order("verse_number");

      const analyzed = verses?.filter((v) => v.analysis_completed).length || 0;
      const total = verses?.length || 0;

      console.log(
        `   ${chapter.chapter_number}장: ${total}/${chapter.total_verses} 구절, 분석 완료: ${analyzed}개`
      );

      if (total === 0) {
        console.log(
          `      ⚠️  구절이 하나도 없습니다! (예상: ${chapter.total_verses}개)`
        );
      } else if (total < chapter.total_verses) {
        console.log(
          `      ⚠️  구절이 부족합니다! (${chapter.total_verses - total}개 누락)`
        );
      }
    }
  }

  // 요약
  console.log(`\n${"=".repeat(80)}`);
  console.log("📊 검사 요약");
  console.log(`${"=".repeat(80)}`);
  console.log(`   구절 없는 장: ${emptyChapters.length}개`);
  console.log(`   중복 reference: ${duplicateRefs?.length || 0}개`);
  console.log(`   불완전한 분석: ${incompleteAnalyses.length}개`);
  console.log(`${"=".repeat(80)}\n`);
}

main().catch((error) => {
  console.error("\n❌ 예외 발생:", error);
  process.exit(1);
});
