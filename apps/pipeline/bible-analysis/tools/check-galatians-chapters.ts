import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

(async () => {
  // 갈라디아서 책 정보
  const { data: book } = await supabase
    .from("books")
    .select("id, name_english")
    .eq("name_english", "Galatians")
    .single();

  console.log("📚 Book:", book);
  console.log();

  // 갈라디아서의 모든 chapters
  const { data: chapters } = await supabase
    .from("chapters")
    .select("id, chapter_number, book_id")
    .eq("book_id", book?.id)
    .order("chapter_number");

  console.log("📖 Chapters:", chapters);
  console.log();

  // 각 장별 구절 수
  console.log("📊 각 장별 구절 수:");
  for (const ch of chapters || []) {
    const { count } = await supabase
      .from("verses")
      .select("id", { count: "exact", head: true })
      .eq("chapter_id", ch.id);

    const { data: sampleVerse } = await supabase
      .from("verses")
      .select("reference, analysis_completed")
      .eq("chapter_id", ch.id)
      .limit(1)
      .single();

    console.log(
      `   Chapter ${ch.chapter_number} (ID: ${ch.id}): ${count} verses` +
        (sampleVerse ? ` - 예시: ${sampleVerse.reference}` : " (비어있음)")
    );
  }
})();
