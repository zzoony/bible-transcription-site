/**
 * JSON 파일을 Supabase 데이터베이스에 업로드하는 스크립트
 *
 * 사용법:
 * 1. 모든 JSON 파일 업로드: npx ts-node bible-analysis/tools/upload-json-to-db.ts
 * 2. 특정 파일 업로드: npx ts-node bible-analysis/tools/upload-json-to-db.ts Genesis_1_1.json
 * 3. 여러 파일 업로드: npx ts-node bible-analysis/tools/upload-json-to-db.ts Genesis_1_1.json Genesis_1_2.json
 */

import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import type {
  SentenceStructureInsert,
  VocabularyInsert,
  ContextualExplanationInsert,
  KoreanTranslationInsert,
  SpecialExplanationInsert,
} from "../database/database.types";

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
  console.error("\n📋 해결 방법:");
  console.error("   1. apps/web/.env.local 파일 확인");
  console.error("   2. bible-analysis/database/ENV_SETUP.md 참조");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface AnalysisJSON {
  verse_reference: string;
  niv_text: string;
  testament: number;
  sentence_structures: Array<{
    sequence_order: number;
    semantic_classification: string;
    original_text: string;
    korean_translation: string;
    grammatical_explanation: string;
  }>;
  vocabulary: Array<{
    word: string;
    ipa_pronunciation: string;
    korean_pronunciation: string;
    part_of_speech: string;
    definition_korean: string;
    usage_note: string;
    frequency: number;
  }>;
  contextual_explanations: {
    integrated_explanation: string;
    cross_references: string;
  };
  korean_translations: {
    natural_translation: string;
    translation_notes?: string;
  };
  special_explanations: Array<{
    explanation_type: string;
    content: string;
    examples: string;
  }>;
}

/**
 * 구절 참조를 파싱하여 book, chapter, verse 정보 추출
 */
function parseReference(reference: string): {
  bookName: string;
  chapter: number;
  verse: number;
} | null {
  // 패턴: "Book Name Chapter:Verse" (예: "Galatians 5:1", "1 Peter 3:15")
  const match = reference.match(/^(.+?)\s+(\d+):(\d+)$/);

  if (!match) {
    console.error(`   ❌ 잘못된 reference 형식: ${reference}`);
    return null;
  }

  return {
    bookName: match[1].trim(),
    chapter: parseInt(match[2]),
    verse: parseInt(match[3]),
  };
}

/**
 * 구절 참조로 verse_id 찾기 (book_id, chapter_id 검증 포함)
 */
async function getVerseId(reference: string): Promise<number | null> {
  // 1. Reference 파싱
  const parsed = parseReference(reference);
  if (!parsed) {
    return null;
  }

  // 2. Book 찾기
  const { data: bookData, error: bookError } = await supabase
    .from("books")
    .select("id, name_english")
    .eq("name_english", parsed.bookName)
    .single();

  if (bookError || !bookData) {
    console.error(`   ❌ 책을 찾을 수 없습니다: ${parsed.bookName}`);
    console.error(`   💡 힌트: 영문 책 이름이 정확한지 확인하세요.`);
    return null;
  }

  const bookId = bookData.id;
  console.log(`   🔍 Book: ${parsed.bookName} (ID: ${bookId})`);

  // 3. Chapter 찾기
  const { data: chapterData, error: chapterError } = await supabase
    .from("chapters")
    .select("id, chapter_number")
    .eq("book_id", bookId)
    .eq("chapter_number", parsed.chapter)
    .single();

  if (chapterError || !chapterData) {
    console.error(
      `   ❌ 장을 찾을 수 없습니다: ${parsed.bookName} ${parsed.chapter}장`
    );
    console.error(`   💡 힌트: chapters 테이블에 해당 장이 존재하는지 확인하세요.`);
    return null;
  }

  const chapterId = chapterData.id;
  console.log(`   🔍 Chapter: ${parsed.chapter} (ID: ${chapterId})`);

  // 4. Verse 찾기 (book_id, chapter_id, verse_number로 정확히 조회)
  const { data: verseData, error: verseError } = await supabase
    .from("verses")
    .select("id, reference, book_id, chapter_id, verse_number")
    .eq("book_id", bookId)
    .eq("chapter_id", chapterId)
    .eq("verse_number", parsed.verse)
    .single();

  if (verseError || !verseData) {
    console.error(`   ❌ 구절을 찾을 수 없습니다: ${reference}`);
    console.error(
      `   💡 힌트: verses 테이블에 book_id=${bookId}, chapter_id=${chapterId}, verse_number=${parsed.verse} 구절이 존재하는지 확인하세요.`
    );
    return null;
  }

  // 5. Reference 일치 여부 검증
  if (verseData.reference.toLowerCase() !== reference.toLowerCase()) {
    console.warn(`   ⚠️  Reference 불일치:`);
    console.warn(`      JSON: ${reference}`);
    console.warn(`      DB:   ${verseData.reference}`);
    console.warn(`   💡 계속 진행하지만, reference가 정확한지 확인하세요.`);
  }

  // 6. Book_id, Chapter_id 검증
  if (verseData.book_id !== bookId) {
    console.error(`   ❌ 데이터 무결성 오류: verse의 book_id가 일치하지 않습니다!`);
    console.error(`      예상: ${bookId}, 실제: ${verseData.book_id}`);
    console.error(`   💡 DB에 잘못된 데이터가 있을 수 있습니다. 확인이 필요합니다.`);
    return null;
  }

  if (verseData.chapter_id !== chapterId) {
    console.error(
      `   ❌ 데이터 무결성 오류: verse의 chapter_id가 일치하지 않습니다!`
    );
    console.error(`      예상: ${chapterId}, 실제: ${verseData.chapter_id}`);
    console.error(`   💡 DB에 잘못된 데이터가 있을 수 있습니다. 확인이 필요합니다.`);
    return null;
  }

  console.log(`   🔍 Verse: ${parsed.verse} (ID: ${verseData.id})`);

  return verseData.id;
}

/**
 * 기존 분석 데이터 삭제
 */
async function deleteExistingAnalysis(verseId: number): Promise<void> {
  const tables = [
    "sentence_structures",
    "vocabulary",
    "contextual_explanations",
    "korean_translations",
    "special_explanations",
  ];

  for (const table of tables) {
    const { error } = await supabase.from(table).delete().eq("verse_id", verseId);

    if (error) {
      console.error(`   ⚠️  ${table} 삭제 실패:`, error.message);
    }
  }
}

/**
 * JSON 데이터를 DB에 업로드
 */
async function uploadAnalysisToDb(
  jsonPath: string
): Promise<{ success: boolean; reference: string }> {
  const fileName = path.basename(jsonPath);
  console.log(`\n${"=".repeat(80)}`);
  console.log(`📄 처리 중: ${fileName}`);
  console.log(`${"=".repeat(80)}`);

  // JSON 파일 읽기
  const jsonContent = fs.readFileSync(jsonPath, "utf-8");
  let analysis: AnalysisJSON;

  try {
    analysis = JSON.parse(jsonContent);
  } catch (error) {
    console.error("   ❌ JSON 파싱 실패:", error);
    return { success: false, reference: fileName };
  }

  console.log(`   📖 구절: ${analysis.verse_reference}`);
  console.log(`   📚 성경: ${analysis.testament === 1 ? "구약" : "신약"}`);

  // verse_id 찾기
  const verseId = await getVerseId(analysis.verse_reference);
  if (!verseId) {
    console.error("   ❌ 구절을 찾을 수 없습니다!");
    console.error(
      "   💡 해결: verse 테이블에 해당 구절이 존재하는지 확인하세요."
    );
    return { success: false, reference: analysis.verse_reference };
  }

  console.log(`   ✅ verse_id: ${verseId}`);

  // 기존 분석 데이터 삭제
  console.log(`   🗑️  기존 분석 데이터 삭제 중...`);
  await deleteExistingAnalysis(verseId);

  let hasError = false;

  // 1. sentence_structures 삽입
  console.log(
    `   📝 문장 구조 삽입 중 (${analysis.sentence_structures.length}개)...`
  );
  const sentenceStructures: SentenceStructureInsert[] =
    analysis.sentence_structures.map((s) => ({
      verse_id: verseId,
      sequence_order: s.sequence_order,
      semantic_classification: s.semantic_classification,
      original_text: s.original_text,
      korean_translation: s.korean_translation,
      grammatical_explanation: s.grammatical_explanation,
    }));

  const { error: sentenceError } = await supabase
    .from("sentence_structures")
    .insert(sentenceStructures);

  if (sentenceError) {
    console.error("   ❌ 문장 구조 삽입 실패:", sentenceError.message);
    hasError = true;
  } else {
    console.log(`   ✅ 문장 구조 삽입 완료`);
  }

  // 2. vocabulary 삽입
  console.log(`   📚 주요 단어 삽입 중 (${analysis.vocabulary.length}개)...`);
  const vocabulary: VocabularyInsert[] = analysis.vocabulary.map((v) => ({
    verse_id: verseId,
    word: v.word,
    ipa_pronunciation: v.ipa_pronunciation,
    korean_pronunciation: v.korean_pronunciation,
    part_of_speech: v.part_of_speech,
    definition_korean: v.definition_korean,
    usage_note: v.usage_note,
    frequency: v.frequency || 1,
  }));

  const { error: vocabError } = await supabase.from("vocabulary").insert(vocabulary);

  if (vocabError) {
    console.error("   ❌ 주요 단어 삽입 실패:", vocabError.message);
    hasError = true;
  } else {
    console.log(`   ✅ 주요 단어 삽입 완료`);
  }

  // 3. contextual_explanations 삽입
  console.log(`   🔍 문맥 설명 삽입 중...`);

  // cross_references를 문자열에서 배열로 변환
  let crossRefsArray: string[] = [];
  if (analysis.contextual_explanations.cross_references) {
    if (typeof analysis.contextual_explanations.cross_references === 'string') {
      // 쉼표로 구분된 문자열을 배열로 변환
      crossRefsArray = analysis.contextual_explanations.cross_references
        .split(',')
        .map(ref => ref.trim())
        .filter(ref => ref.length > 0);
    } else if (Array.isArray(analysis.contextual_explanations.cross_references)) {
      // 이미 배열인 경우
      crossRefsArray = analysis.contextual_explanations.cross_references;
    }
  }

  const contextualExplanation: ContextualExplanationInsert = {
    verse_id: verseId,
    integrated_explanation: analysis.contextual_explanations.integrated_explanation,
    cross_references: crossRefsArray,
  };

  const { error: contextError } = await supabase
    .from("contextual_explanations")
    .insert(contextualExplanation);

  if (contextError) {
    console.error("   ❌ 문맥 설명 삽입 실패:", contextError.message);
    hasError = true;
  } else {
    console.log(`   ✅ 문맥 설명 삽입 완료`);
  }

  // 4. korean_translations 삽입
  console.log(`   🇰🇷 한국어 번역 삽입 중...`);
  const koreanTranslation: KoreanTranslationInsert = {
    verse_id: verseId,
    natural_translation: analysis.korean_translations.natural_translation,
    translation_notes: analysis.korean_translations.translation_notes || null,
  };

  const { error: translationError } = await supabase
    .from("korean_translations")
    .insert(koreanTranslation);

  if (translationError) {
    console.error("   ❌ 한국어 번역 삽입 실패:", translationError.message);
    hasError = true;
  } else {
    console.log(`   ✅ 한국어 번역 삽입 완료`);
  }

  // 5. special_explanations 삽입
  console.log(
    `   💡 특별 설명 삽입 중 (${analysis.special_explanations.length}개)...`
  );
  const specialExplanations: SpecialExplanationInsert[] =
    analysis.special_explanations.map((s) => ({
      verse_id: verseId,
      explanation_type: s.explanation_type,
      content: s.content,
      examples: s.examples || "",
    }));

  const { error: specialError } = await supabase
    .from("special_explanations")
    .insert(specialExplanations);

  if (specialError) {
    console.error("   ❌ 특별 설명 삽입 실패:", specialError.message);
    hasError = true;
  } else {
    console.log(`   ✅ 특별 설명 삽입 완료`);
  }

  // 6. verses 테이블의 analysis_completed 업데이트
  if (!hasError) {
    console.log(`   🔄 analysis_completed 플래그 업데이트 중...`);
    const { error: updateError } = await supabase
      .from("verses")
      .update({ analysis_completed: true })
      .eq("id", verseId);

    if (updateError) {
      console.error("   ⚠️  플래그 업데이트 실패:", updateError.message);
    } else {
      console.log(`   ✅ 플래그 업데이트 완료`);
    }
  }

  if (hasError) {
    console.log(`\n   ⚠️  일부 오류 발생: ${analysis.verse_reference}`);
    return { success: false, reference: analysis.verse_reference };
  } else {
    console.log(`\n   ✅ 업로드 완료: ${analysis.verse_reference}`);
    return { success: true, reference: analysis.verse_reference };
  }
}

/**
 * 메인 함수
 */
async function main() {
  const args = process.argv.slice(2);
  const analysisJsonDir = path.resolve(
    __dirname,
    "../analysis-json"
  );

  console.log(`\n${"=".repeat(80)}`);
  console.log(`📤 JSON 분석 데이터 DB 업로드`);
  console.log(`${"=".repeat(80)}`);
  console.log(`📁 디렉토리: ${analysisJsonDir}`);

  let jsonFiles: string[] = [];

  if (args.length === 0) {
    // 모든 JSON 파일 처리
    console.log(`   🔍 모든 JSON 파일을 처리합니다...`);

    if (!fs.existsSync(analysisJsonDir)) {
      console.error(`\n❌ 오류: 디렉토리를 찾을 수 없습니다!`);
      console.error(`   경로: ${analysisJsonDir}`);
      process.exit(1);
    }

    const files = fs.readdirSync(analysisJsonDir);
    jsonFiles = files
      .filter((f) => f.endsWith(".json"))
      .map((f) => path.join(analysisJsonDir, f));

    if (jsonFiles.length === 0) {
      console.log(`\n⚠️  JSON 파일을 찾을 수 없습니다.`);
      console.log(`   경로: ${analysisJsonDir}`);
      process.exit(0);
    }

    console.log(`   📊 발견된 파일 수: ${jsonFiles.length}`);
  } else {
    // 특정 파일들 처리
    console.log(`   🎯 지정된 파일들을 처리합니다...`);
    for (const arg of args) {
      const filePath = path.isAbsolute(arg)
        ? arg
        : path.join(analysisJsonDir, arg);

      if (!fs.existsSync(filePath)) {
        console.error(`   ⚠️  파일을 찾을 수 없습니다: ${arg}`);
        continue;
      }

      jsonFiles.push(filePath);
    }

    if (jsonFiles.length === 0) {
      console.error(`\n❌ 처리할 파일이 없습니다!`);
      process.exit(1);
    }

    console.log(`   📊 처리할 파일 수: ${jsonFiles.length}`);
  }

  // 파일 목록 출력
  console.log(`\n📋 처리할 파일 목록:`);
  jsonFiles.forEach((f, i) => {
    console.log(`   ${i + 1}. ${path.basename(f)}`);
  });

  // 순차 업로드
  const results: Array<{ success: boolean; reference: string }> = [];

  for (let i = 0; i < jsonFiles.length; i++) {
    const jsonFile = jsonFiles[i];
    const progress = ((i + 1) / jsonFiles.length * 100).toFixed(1);

    console.log(`\n⏳ 진행: (${i + 1}/${jsonFiles.length}) ${progress}% - ${path.basename(jsonFile)}`);

    const result = await uploadAnalysisToDb(jsonFile);
    results.push(result);

    // Rate limiting
    if (jsonFiles.length > 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  // 결과 요약
  console.log(`\n${"=".repeat(80)}`);
  console.log(`📊 업로드 결과 요약`);
  console.log(`${"=".repeat(80)}`);

  const successCount = results.filter((r) => r.success).length;
  const failCount = results.filter((r) => !r.success).length;

  console.log(`   ✅ 성공: ${successCount}개`);
  console.log(`   ❌ 실패: ${failCount}개`);
  console.log(`   📊 전체: ${results.length}개`);

  if (failCount > 0) {
    console.log(`\n   ⚠️  실패한 구절:`);
    results
      .filter((r) => !r.success)
      .forEach((r) => {
        console.log(`      - ${r.reference}`);
      });
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log(`✅ 작업 완료!`);
  console.log(`${"=".repeat(80)}\n`);
}

main().catch((error) => {
  console.error("\n❌ 예외 발생:", error);
  process.exit(1);
});
