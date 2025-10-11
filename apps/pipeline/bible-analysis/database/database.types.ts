/**
 * Supabase 데이터베이스 타입 정의
 *
 * 이 파일은 bible-analysis/database/extract-schema.ts로 생성된 스키마를 기반으로 합니다.
 * 생성일: 2025-10-10
 *
 * 사용법:
 * import type { Book, Chapter, Verse, SentenceStructure } from './database.types';
 */

export interface Database {
  public: {
    Tables: {
      books: {
        Row: Book;
        Insert: BookInsert;
        Update: BookUpdate;
      };
      chapters: {
        Row: Chapter;
        Insert: ChapterInsert;
        Update: ChapterUpdate;
      };
      verses: {
        Row: Verse;
        Insert: VerseInsert;
        Update: VerseUpdate;
      };
      sentence_structures: {
        Row: SentenceStructure;
        Insert: SentenceStructureInsert;
        Update: SentenceStructureUpdate;
      };
      vocabulary: {
        Row: Vocabulary;
        Insert: VocabularyInsert;
        Update: VocabularyUpdate;
      };
      contextual_explanations: {
        Row: ContextualExplanation;
        Insert: ContextualExplanationInsert;
        Update: ContextualExplanationUpdate;
      };
      korean_translations: {
        Row: KoreanTranslation;
        Insert: KoreanTranslationInsert;
        Update: KoreanTranslationUpdate;
      };
      special_explanations: {
        Row: SpecialExplanation;
        Insert: SpecialExplanationInsert;
        Update: SpecialExplanationUpdate;
      };
    };
  };
}

/**
 * 성경 책 정보
 * 총 66권의 성경 책 정보를 저장
 */
export interface Book {
  id: number;
  name_english: string;           // 영어 책 이름 (예: "Genesis", "Philippians")
  name_korean: string;             // 한글 책 이름 (예: "창세기", "빌립보서")
  abbreviation: string;            // 약어 (예: "Gen", "Phil")
  testament: number;               // 1=구약, 2=신약
  order_number: number;            // 성경 순서 (1-66)
  total_chapters: number;          // 총 장 수
  created_at: string;              // 생성일 (ISO 8601)
  updated_at: string;              // 수정일 (ISO 8601)
}

export interface BookInsert {
  id?: number;
  name_english: string;
  name_korean: string;
  abbreviation: string;
  testament: number;
  order_number: number;
  total_chapters: number;
  created_at?: string;
  updated_at?: string;
}

export interface BookUpdate {
  id?: number;
  name_english?: string;
  name_korean?: string;
  abbreviation?: string;
  testament?: number;
  order_number?: number;
  total_chapters?: number;
  created_at?: string;
  updated_at?: string;
}

/**
 * 성경 장 정보
 * 총 1,192개 장 정보를 저장
 */
export interface Chapter {
  id: number;
  book_id: number;                 // books.id 참조
  chapter_number: number;          // 장 번호
  total_verses: number;            // 해당 장의 총 절 수
  created_at: string;              // 생성일 (ISO 8601)
  updated_at: string;              // 수정일 (ISO 8601)
}

export interface ChapterInsert {
  id?: number;
  book_id: number;
  chapter_number: number;
  total_verses: number;
  created_at?: string;
  updated_at?: string;
}

export interface ChapterUpdate {
  id?: number;
  book_id?: number;
  chapter_number?: number;
  total_verses?: number;
  created_at?: string;
  updated_at?: string;
}

/**
 * 성경 구절 정보
 * 총 30,903개 구절 정보를 저장
 */
export interface Verse {
  id: number;
  book_id: number;                 // books.id 참조
  chapter_id: number;              // chapters.id 참조
  verse_number: number;            // 절 번호
  reference: string;               // 구절 참조 (예: "Genesis 1:1", "Philippians 3:1")
  niv_text: string;                // NIV 영어 원문
  analysis_completed: boolean;     // 분석 완료 여부
  created_at: string;              // 생성일 (ISO 8601)
  updated_at: string;              // 수정일 (ISO 8601)
}

export interface VerseInsert {
  id?: number;
  book_id: number;
  chapter_id: number;
  verse_number: number;
  reference: string;
  niv_text: string;
  analysis_completed?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface VerseUpdate {
  id?: number;
  book_id?: number;
  chapter_id?: number;
  verse_number?: number;
  reference?: string;
  niv_text?: string;
  analysis_completed?: boolean;
  created_at?: string;
  updated_at?: string;
}

/**
 * 문장 구조 분석
 * 총 42,979개의 문장/절 구조 분석
 *
 * 각 구절의 문장 및 주요 절(clause)을 분석하여 저장
 * 창세기 1:2 기준: 최소 3개 이상의 구조를 포함해야 함
 */
export interface SentenceStructure {
  id: number;
  verse_id: number;                // verses.id 참조
  sequence_order: number;          // 구절 내 문장 순서
  semantic_classification: string; // 의미적 분류 (예: "부가적 권면", "배경 묘사")
  original_text: string;           // 원문 텍스트 (NIV)
  korean_translation: string;      // 한글 번역
  grammatical_explanation: string; // 문법적 설명 (주어, 동사, 수식어 등)
  created_at: string;              // 생성일 (ISO 8601)
}

export interface SentenceStructureInsert {
  id?: number;
  verse_id: number;
  sequence_order: number;
  semantic_classification: string;
  original_text: string;
  korean_translation: string;
  grammatical_explanation: string;
  created_at?: string;
}

export interface SentenceStructureUpdate {
  id?: number;
  verse_id?: number;
  sequence_order?: number;
  semantic_classification?: string;
  original_text?: string;
  korean_translation?: string;
  grammatical_explanation?: string;
  created_at?: string;
}

/**
 * 주요 단어 설명
 * 총 189,575개의 단어 분석
 *
 * 각 구절의 핵심 단어 7-10개를 선정하여 분석
 * 히브리어/그리스어 원어 설명 포함 필수
 */
export interface Vocabulary {
  id: number;
  verse_id: number;                // verses.id 참조
  word: string;                    // 단어
  ipa_pronunciation: string;       // IPA 발음 기호 (예: "[ˈfɜːrðər]")
  korean_pronunciation: string;    // 한글 발음 (예: "퍼더")
  part_of_speech: string;          // 품사 (예: "명사", "동사", "부사")
  definition_korean: string;       // 한글 뜻 (히브리어/그리스어 원어 설명 포함)
  usage_note: string | null;       // 사용 참고사항
  frequency: number;               // 빈도수
  created_at: string;              // 생성일 (ISO 8601)
}

export interface VocabularyInsert {
  id?: number;
  verse_id: number;
  word: string;
  ipa_pronunciation: string;
  korean_pronunciation: string;
  part_of_speech: string;
  definition_korean: string;
  usage_note?: string | null;
  frequency?: number;
  created_at?: string;
}

export interface VocabularyUpdate {
  id?: number;
  verse_id?: number;
  word?: string;
  ipa_pronunciation?: string;
  korean_pronunciation?: string;
  part_of_speech?: string;
  definition_korean?: string;
  usage_note?: string | null;
  frequency?: number;
  created_at?: string;
}

/**
 * 문맥 설명
 * 총 30,913개의 문맥 설명
 *
 * 역사적, 신학적, 문학적 배경을 통합한 설명
 * 최소 300자 이상, 히브리어/그리스어 원어 분석 포함 필수
 */
export interface ContextualExplanation {
  id: number;
  verse_id: number;                // verses.id 참조
  integrated_explanation: string;  // 통합 문맥 설명 (역사적/신학적/문학적)
  cross_references: string;        // 교차 참조 (쉼표로 구분)
  created_at: string;              // 생성일 (ISO 8601)
}

export interface ContextualExplanationInsert {
  id?: number;
  verse_id: number;
  integrated_explanation: string;
  cross_references?: string;
  created_at?: string;
}

export interface ContextualExplanationUpdate {
  id?: number;
  verse_id?: number;
  integrated_explanation?: string;
  cross_references?: string;
  created_at?: string;
}

/**
 * 한국어 번역
 * 총 30,914개의 번역
 *
 * 자연스러운 한국어 번역 (직역과 의역의 조화)
 */
export interface KoreanTranslation {
  id: number;
  verse_id: number;                // verses.id 참조
  natural_translation: string;     // 자연스러운 한국어 번역
  translation_notes: string | null; // 번역 참고사항
  created_at: string;              // 생성일 (ISO 8601)
  updated_at: string;              // 수정일 (ISO 8601)
}

export interface KoreanTranslationInsert {
  id?: number;
  verse_id: number;
  natural_translation: string;
  translation_notes?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface KoreanTranslationUpdate {
  id?: number;
  verse_id?: number;
  natural_translation?: string;
  translation_notes?: string | null;
  created_at?: string;
  updated_at?: string;
}

/**
 * 특별 설명
 * 총 966개의 특별 설명
 *
 * 문법적, 신학적, 문학적 특이점 설명
 * 최소 2-3개 권장
 */
export interface SpecialExplanation {
  id: number;
  verse_id: number;                // verses.id 참조
  explanation_type: string;        // 설명 유형 (예: "literary", "theological", "grammatical")
  content: string;                 // 설명 내용
  examples: string;                // 예시
  created_at: string;              // 생성일 (ISO 8601)
}

export interface SpecialExplanationInsert {
  id?: number;
  verse_id: number;
  explanation_type: string;
  content: string;
  examples?: string;
  created_at?: string;
}

export interface SpecialExplanationUpdate {
  id?: number;
  verse_id?: number;
  explanation_type?: string;
  content?: string;
  examples?: string;
  created_at?: string;
}

/**
 * 헬퍼 타입: 모든 테이블 이름
 */
export type TableName = keyof Database['public']['Tables'];

/**
 * 헬퍼 타입: 특정 테이블의 Row 타입 추출
 */
export type TableRow<T extends TableName> = Database['public']['Tables'][T]['Row'];

/**
 * 헬퍼 타입: 특정 테이블의 Insert 타입 추출
 */
export type TableInsert<T extends TableName> = Database['public']['Tables'][T]['Insert'];

/**
 * 헬퍼 타입: 특정 테이블의 Update 타입 추출
 */
export type TableUpdate<T extends TableName> = Database['public']['Tables'][T]['Update'];
