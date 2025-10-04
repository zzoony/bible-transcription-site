-- Bible Transcription Database Schema v2
-- Updated for new analysis output format
-- Compatible with both local PostgreSQL and Supabase

-- ============================================
-- Core Tables (unchanged)
-- ============================================

-- Books table
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    name_english VARCHAR(50) NOT NULL UNIQUE,
    name_korean VARCHAR(50) NOT NULL,
    abbreviation VARCHAR(10) NOT NULL,
    testament SMALLINT NOT NULL CHECK (testament IN (1, 2)), -- 1: Old, 2: New
    order_number SMALLINT NOT NULL UNIQUE,
    total_chapters SMALLINT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chapters table
CREATE TABLE IF NOT EXISTS chapters (
    id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
    chapter_number SMALLINT NOT NULL,
    total_verses SMALLINT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(book_id, chapter_number)
);

-- Verses table (main table)
CREATE TABLE IF NOT EXISTS verses (
    id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    verse_number SMALLINT NOT NULL,
    reference VARCHAR(50) NOT NULL UNIQUE, -- e.g., "Philippians 3:1"
    niv_text TEXT NOT NULL,
    analysis_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(chapter_id, verse_number)
);

-- ============================================
-- Analysis Tables (Updated for new format)
-- ============================================

-- Sentence structure analysis (updated for meaningful classification)
CREATE TABLE IF NOT EXISTS sentence_structures (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    sequence_order SMALLINT NOT NULL,
    semantic_classification VARCHAR(100) NOT NULL, -- e.g., "부가적 권면", "반복의 이유 1"
    original_text TEXT NOT NULL,
    korean_translation TEXT NOT NULL,
    grammatical_explanation TEXT, -- 문법적 구조 설명
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(verse_id, sequence_order)
);

-- Vocabulary entries (updated for dual pronunciation)
CREATE TABLE IF NOT EXISTS vocabulary (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    word VARCHAR(100) NOT NULL,
    ipa_pronunciation VARCHAR(200), -- IPA 발음 기호
    korean_pronunciation VARCHAR(200), -- 한국어 발음
    part_of_speech VARCHAR(50),
    definition_korean TEXT NOT NULL, -- 한국어 뜻 및 설명
    usage_note TEXT,
    frequency INTEGER DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for word lookup
CREATE INDEX IF NOT EXISTS idx_vocabulary_word ON vocabulary(word);
CREATE INDEX IF NOT EXISTS idx_vocabulary_verse ON vocabulary(verse_id);

-- Contextual explanations (simplified to single integrated explanation)
CREATE TABLE IF NOT EXISTS contextual_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE UNIQUE,
    integrated_explanation TEXT NOT NULL, -- 역사적/신학적/문학적 배경을 통합한 설명
    cross_references TEXT[], -- 관련 성경 구절들
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Korean translations (simplified to single natural translation)
CREATE TABLE IF NOT EXISTS korean_translations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE UNIQUE,
    natural_translation TEXT NOT NULL, -- 균형 잡힌 자연스러운 번역
    translation_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Special explanations (new table for grammatical/interpretive notes)
CREATE TABLE IF NOT EXISTS special_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    explanation_type VARCHAR(50), -- grammar, interpretation, linguistic_note
    content TEXT NOT NULL,
    examples JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Metadata and Analytics Tables (simplified)
-- ============================================

-- Processing queue (for agent system)
CREATE TABLE IF NOT EXISTS processing_queue (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    book_name VARCHAR(50),
    chapter_number SMALLINT,
    verse_number SMALLINT,
    status VARCHAR(20) DEFAULT 'pending', -- pending, processing, completed, failed
    priority INTEGER DEFAULT 5, -- 1-10, higher = more priority
    attempts INTEGER DEFAULT 0,
    last_error TEXT,
    assigned_to VARCHAR(100), -- agent identifier
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(book_name, chapter_number, verse_number)
);

CREATE INDEX IF NOT EXISTS idx_queue_status ON processing_queue(status);
CREATE INDEX IF NOT EXISTS idx_queue_priority ON processing_queue(priority DESC);

-- ============================================
-- Views for Easy Access (Updated)
-- ============================================

-- Complete verse view with all analysis (updated for new format)
CREATE OR REPLACE VIEW verse_analysis_complete AS
WITH
sentence_agg AS (
    SELECT
        verse_id,
        json_agg(
            jsonb_build_object(
                'sequence', sequence_order,
                'semantic_classification', semantic_classification,
                'text', original_text,
                'korean', korean_translation,
                'grammatical_explanation', grammatical_explanation
            ) ORDER BY sequence_order
        ) as sentence_structures
    FROM sentence_structures
    GROUP BY verse_id
),
vocabulary_agg AS (
    SELECT
        verse_id,
        json_agg(
            jsonb_build_object(
                'word', word,
                'ipa_pronunciation', ipa_pronunciation,
                'korean_pronunciation', korean_pronunciation,
                'part_of_speech', part_of_speech,
                'definition', definition_korean
            )
        ) as vocabulary
    FROM vocabulary
    GROUP BY verse_id
),
special_agg AS (
    SELECT
        verse_id,
        json_agg(
            jsonb_build_object(
                'type', explanation_type,
                'content', content,
                'examples', examples
            )
        ) as special_explanations
    FROM special_explanations
    GROUP BY verse_id
)
SELECT
    v.id,
    v.reference,
    v.niv_text,
    b.name_english as book_name,
    b.name_korean as book_name_korean,
    c.chapter_number,
    v.verse_number,
    kt.natural_translation as korean_translation,
    ce.integrated_explanation as contextual_explanation,
    ce.cross_references,
    COALESCE(sa.sentence_structures, '[]'::json) as sentence_structures,
    COALESCE(va.vocabulary, '[]'::json) as vocabulary,
    COALESCE(se.special_explanations, '[]'::json) as special_explanations,
    v.analysis_completed,
    v.updated_at
FROM verses v
JOIN chapters c ON v.chapter_id = c.id
JOIN books b ON v.book_id = b.id
LEFT JOIN korean_translations kt ON v.id = kt.verse_id
LEFT JOIN contextual_explanations ce ON v.id = ce.verse_id
LEFT JOIN sentence_agg sa ON v.id = sa.verse_id
LEFT JOIN vocabulary_agg va ON v.id = va.verse_id
LEFT JOIN special_agg se ON v.id = se.verse_id;

-- Processing status view
CREATE OR REPLACE VIEW processing_status AS
SELECT
    status,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM processing_queue
GROUP BY status
ORDER BY
    CASE status
        WHEN 'completed' THEN 1
        WHEN 'processing' THEN 2
        WHEN 'pending' THEN 3
        WHEN 'failed' THEN 4
    END;

-- ============================================
-- Indexes for Performance
-- ============================================

CREATE INDEX IF NOT EXISTS idx_verses_reference ON verses(reference);
CREATE INDEX IF NOT EXISTS idx_verses_book_chapter ON verses(book_id, chapter_id, verse_number);
CREATE INDEX IF NOT EXISTS idx_verses_analysis_status ON verses(analysis_completed);
CREATE INDEX IF NOT EXISTS idx_sentence_verse ON sentence_structures(verse_id);
CREATE INDEX IF NOT EXISTS idx_contextual_verse ON contextual_explanations(verse_id);
CREATE INDEX IF NOT EXISTS idx_special_verse ON special_explanations(verse_id);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_verses_niv_text_search ON verses USING GIN(to_tsvector('english', niv_text));
CREATE INDEX IF NOT EXISTS idx_korean_text_search ON korean_translations USING GIN(to_tsvector('simple', natural_translation));

-- ============================================
-- Functions and Triggers
-- ============================================

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update trigger to relevant tables
CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_verses_updated_at BEFORE UPDATE ON verses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_korean_translations_updated_at BEFORE UPDATE ON korean_translations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to mark verse as analyzed
CREATE OR REPLACE FUNCTION mark_verse_analyzed(verse_id_param INTEGER)
RETURNS VOID AS $$
BEGIN
    UPDATE verses
    SET analysis_completed = TRUE,
        updated_at = NOW()
    WHERE id = verse_id_param;

    UPDATE processing_queue
    SET status = 'completed',
        completed_at = NOW()
    WHERE verse_id = verse_id_param;
END;
$$ LANGUAGE plpgsql;