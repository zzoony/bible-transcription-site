-- Supabase 데이터베이스 스키마
-- 생성일: 2025-10-10T08:06:31.208Z
-- 프로젝트: bible-transcription-site

-- ========================================
-- 테이블: books
-- ========================================

CREATE TABLE books (
  id INTEGER,
  name_english TEXT,
  name_korean TEXT,
  abbreviation TEXT,
  testament INTEGER,
  order_number INTEGER,
  total_chapters INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- ========================================
-- 테이블: chapters
-- ========================================

CREATE TABLE chapters (
  id INTEGER,
  book_id INTEGER,
  chapter_number INTEGER,
  total_verses INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- ========================================
-- 테이블: verses
-- ========================================

CREATE TABLE verses (
  id INTEGER,
  book_id INTEGER,
  chapter_id INTEGER,
  verse_number INTEGER,
  reference TEXT,
  niv_text TEXT,
  analysis_completed BOOLEAN,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- ========================================
-- 테이블: sentence_structures
-- ========================================

CREATE TABLE sentence_structures (
  id INTEGER,
  verse_id INTEGER,
  sequence_order INTEGER,
  semantic_classification TEXT,
  original_text TEXT,
  korean_translation TEXT,
  grammatical_explanation TEXT,
  created_at TIMESTAMP
);

-- ========================================
-- 테이블: vocabulary
-- ========================================

CREATE TABLE vocabulary (
  id INTEGER,
  verse_id INTEGER,
  word TEXT,
  ipa_pronunciation TEXT,
  korean_pronunciation TEXT,
  part_of_speech TEXT,
  definition_korean TEXT,
  usage_note TEXT,
  frequency INTEGER,
  created_at TIMESTAMP
);

-- ========================================
-- 테이블: contextual_explanations
-- ========================================

CREATE TABLE contextual_explanations (
  id INTEGER,
  verse_id INTEGER,
  integrated_explanation TEXT,
  cross_references TEXT,
  created_at TIMESTAMP
);

-- ========================================
-- 테이블: korean_translations
-- ========================================

CREATE TABLE korean_translations (
  id INTEGER,
  verse_id INTEGER,
  natural_translation TEXT,
  translation_notes TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- ========================================
-- 테이블: special_explanations
-- ========================================

CREATE TABLE special_explanations (
  id INTEGER,
  verse_id INTEGER,
  explanation_type TEXT,
  content TEXT,
  examples TEXT,
  created_at TIMESTAMP
);

