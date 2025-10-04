-- Bible Transcription Database Schema
-- Compatible with both local PostgreSQL and Supabase

-- ============================================
-- Core Tables
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
-- Analysis Tables
-- ============================================

-- Sentence structure analysis
CREATE TABLE IF NOT EXISTS sentence_structures (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    sequence_order SMALLINT NOT NULL,
    original_text TEXT NOT NULL,
    korean_translation TEXT NOT NULL,
    clause_type VARCHAR(50), -- imperative, declarative, interrogative, etc.
    components JSONB DEFAULT '[]', -- Detailed component breakdown
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(verse_id, sequence_order)
);

-- Vocabulary entries
CREATE TABLE IF NOT EXISTS vocabulary (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    word VARCHAR(100) NOT NULL,
    pronunciation_ipa VARCHAR(200),
    pronunciation_simple VARCHAR(200),
    part_of_speech VARCHAR(50),
    definition_korean TEXT NOT NULL,
    definition_english TEXT,
    usage_note TEXT,
    frequency INTEGER DEFAULT 1, -- How often this word appears in the Bible
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for word lookup
CREATE INDEX IF NOT EXISTS idx_vocabulary_word ON vocabulary(word);
CREATE INDEX IF NOT EXISTS idx_vocabulary_verse ON vocabulary(verse_id);

-- Contextual notes
CREATE TABLE IF NOT EXISTS contextual_notes (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    note_type VARCHAR(50) NOT NULL, -- historical, theological, cultural
    content TEXT NOT NULL,
    cross_references JSONB DEFAULT '[]', -- Cross-references (renamed from 'references')
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Korean translations
CREATE TABLE IF NOT EXISTS korean_translations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE UNIQUE,
    literal_translation TEXT NOT NULL,
    dynamic_translation TEXT,
    translation_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Special explanations
CREATE TABLE IF NOT EXISTS special_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    explanation_type VARCHAR(50), -- grammar, idiom, translation_note
    title VARCHAR(200),
    content TEXT NOT NULL,
    examples JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Metadata and Analytics Tables
-- ============================================

-- Analysis metadata (tracking processing)
CREATE TABLE IF NOT EXISTS analysis_metadata (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE UNIQUE,
    analysis_version VARCHAR(20) DEFAULT '1.0',
    analyzed_at TIMESTAMPTZ,
    analysis_duration_ms INTEGER,
    word_count INTEGER,
    complexity_score DECIMAL(3,2), -- 0.00 to 9.99
    key_themes TEXT[],
    cross_references TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW()
);

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
-- Views for Easy Access
-- ============================================

-- Complete verse view with all analysis (using CTEs to avoid duplication)
CREATE OR REPLACE VIEW verse_analysis_complete AS
WITH
sentence_agg AS (
    SELECT
        verse_id,
        json_agg(
            jsonb_build_object(
                'sequence', sequence_order,
                'text', original_text,
                'korean', korean_translation,
                'type', clause_type,
                'components', components
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
                'pronunciation', pronunciation_simple,
                'definition', definition_korean,
                'pos', part_of_speech
            )
        ) as vocabulary
    FROM vocabulary
    GROUP BY verse_id
),
contextual_agg AS (
    SELECT
        verse_id,
        json_agg(
            jsonb_build_object(
                'type', note_type,
                'content', content,
                'references', cross_references
            )
        ) as contextual_notes
    FROM contextual_notes
    GROUP BY verse_id
),
special_agg AS (
    SELECT
        verse_id,
        json_agg(
            jsonb_build_object(
                'type', explanation_type,
                'title', title,
                'content', content
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
    kt.literal_translation as korean_literal,
    kt.dynamic_translation as korean_dynamic,
    COALESCE(sa.sentence_structures, '[]'::json) as sentence_structures,
    COALESCE(va.vocabulary, '[]'::json) as vocabulary,
    COALESCE(ca.contextual_notes, '[]'::json) as contextual_notes,
    COALESCE(se.special_explanations, '[]'::json) as special_explanations,
    am.complexity_score,
    am.key_themes,
    v.analysis_completed,
    v.updated_at
FROM verses v
JOIN chapters c ON v.chapter_id = c.id
JOIN books b ON v.book_id = b.id
LEFT JOIN korean_translations kt ON v.id = kt.verse_id
LEFT JOIN sentence_agg sa ON v.id = sa.verse_id
LEFT JOIN vocabulary_agg va ON v.id = va.verse_id
LEFT JOIN contextual_agg ca ON v.id = ca.verse_id
LEFT JOIN special_agg se ON v.id = se.verse_id
LEFT JOIN analysis_metadata am ON v.id = am.verse_id;

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
CREATE INDEX IF NOT EXISTS idx_contextual_verse ON contextual_notes(verse_id);
CREATE INDEX IF NOT EXISTS idx_special_verse ON special_explanations(verse_id);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_verses_niv_text_search ON verses USING GIN(to_tsvector('english', niv_text));
CREATE INDEX IF NOT EXISTS idx_korean_text_search ON korean_translations USING GIN(to_tsvector('simple', literal_translation));

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

-- ============================================
-- Initial Data Population
-- ============================================

-- This will be populated by a separate seed script
-- See: database/seeds/initial_books.sql