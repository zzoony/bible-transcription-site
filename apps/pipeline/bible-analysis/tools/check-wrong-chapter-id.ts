import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

(async () => {
  console.log("\n=== Chapter ID 1 확인 ===\n");

  // chapter_id 1이 무엇인지 확인
  const { data: chapter } = await supabase
    .from("chapters")
    .select("id, chapter_number, book_id, books(name_english)")
    .eq("id", 1)
    .single();

  console.log("Chapter ID 1:", JSON.stringify(chapter, null, 2));

  // chapter_id 1을 가진 구절 수
  const { count } = await supabase
    .from("verses")
    .select("id", { count: "exact", head: true })
    .eq("chapter_id", 1);

  console.log(`\nTotal verses with chapter_id=1: ${count}`);

  // 샘플 구절들
  const { data: verses } = await supabase
    .from("verses")
    .select("reference, analysis_completed")
    .eq("chapter_id", 1)
    .limit(10);

  console.log("\nSample verses:");
  verses?.forEach((v) => {
    console.log(`   ${v.reference} (분석: ${v.analysis_completed ? "✅" : "❌"})`);
  });

  console.log("\n=== 잘못된 reference 패턴 검색 ===\n");

  // Galatians로 시작하는 구절들의 chapter_id 확인
  const { data: galatianVerses } = await supabase
    .from("verses")
    .select("id, reference, chapter_id")
    .ilike("reference", "Galatians%")
    .order("reference")
    .limit(20);

  console.log("Galatians 구절들의 chapter_id:");
  galatianVerses?.forEach((v) => {
    console.log(`   ${v.reference} → chapter_id: ${v.chapter_id}`);
  });
})();
