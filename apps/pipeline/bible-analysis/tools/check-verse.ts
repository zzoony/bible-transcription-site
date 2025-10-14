/**
 * verses 테이블에서 특정 구절을 조회하는 스크립트
 *
 * 사용법:
 * npx ts-node bible-analysis/tools/check-verse.ts "Galatians 5:1"
 */

import * as dotenv from "dotenv";
import * as path from "path";
import { createClient } from "@supabase/supabase-js";

// 환경 변수 로드 (프로젝트 루트의 .env 파일)
dotenv.config({
  path: path.resolve(__dirname, "../../../../.env"),
});

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ 오류: Supabase 환경 변수가 설정되지 않았습니다!");
  console.error("   NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "✅" : "❌");
  console.error("   SUPABASE_SERVICE_KEY:", supabaseKey ? "✅" : "❌");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkVerse(reference: string) {
  console.log(`\n${"=".repeat(80)}`);
  console.log(`🔍 구절 조회: ${reference}`);
  console.log(`${"=".repeat(80)}\n`);

  // ilike로 조회 (대소문자 구분 없음)
  const { data, error } = await supabase
    .from("verses")
    .select("id, reference, book_id, chapter_id, verse_number, niv_text, analysis_completed")
    .ilike("reference", reference);

  if (error) {
    console.error("❌ 조회 실패:", error.message);
    return;
  }

  if (!data || data.length === 0) {
    console.log("⚠️  해당 구절을 찾을 수 없습니다.");
    console.log(`   검색어: ${reference}`);
    console.log("\n💡 유사한 구절 검색 중...");

    // 유사한 구절 찾기
    const similarSearch = reference.split(" ")[0]; // "Galatians"만 추출
    const { data: similarData } = await supabase
      .from("verses")
      .select("reference")
      .ilike("reference", `${similarSearch}%`)
      .limit(5);

    if (similarData && similarData.length > 0) {
      console.log("\n📋 유사한 구절들:");
      similarData.forEach((v) => {
        console.log(`   - ${v.reference}`);
      });
    }
    return;
  }

  console.log(`✅ 발견된 구절: ${data.length}개\n`);

  if (data.length > 1) {
    console.log("⚠️  중복 데이터가 발견되었습니다!");
  }

  data.forEach((verse, index) => {
    console.log(`${"─".repeat(80)}`);
    console.log(`결과 #${index + 1}`);
    console.log(`${"─".repeat(80)}`);
    console.log(`ID: ${verse.id}`);
    console.log(`Reference: ${verse.reference}`);
    console.log(`Book ID: ${verse.book_id}`);
    console.log(`Chapter ID: ${verse.chapter_id}`);
    console.log(`Verse Number: ${verse.verse_number}`);
    console.log(`Analysis Completed: ${verse.analysis_completed ? "✅" : "❌"}`);
    console.log(`NIV Text: ${verse.niv_text?.substring(0, 100)}${verse.niv_text && verse.niv_text.length > 100 ? "..." : ""}`);
    console.log();
  });

  if (data.length > 1) {
    console.log(`\n${"=".repeat(80)}`);
    console.log("⚠️  문제: 중복 데이터");
    console.log(`${"=".repeat(80)}`);
    console.log("\n해결 방법:");
    console.log("1. 중복 구절 중 하나를 삭제해야 합니다.");
    console.log("2. Supabase Dashboard에서 수동으로 삭제하거나");
    console.log("3. 중복 제거 스크립트를 실행하세요:");
    console.log(`   예: DELETE FROM verses WHERE id = [삭제할_id];`);
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("❌ 오류: 구절 참조가 필요합니다.");
    console.error('   사용법: npx ts-node check-verse.ts "Galatians 5:1"');
    process.exit(1);
  }

  const reference = args[0];
  await checkVerse(reference);
}

main().catch((error) => {
  console.error("\n❌ 예외 발생:", error);
  process.exit(1);
});
