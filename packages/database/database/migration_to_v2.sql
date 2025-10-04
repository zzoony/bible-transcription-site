-- Migration script to update existing schema to v2 format
-- Updates tables for new analysis output format

-- 1. Update sentence_structures table
-- Add semantic_classification column and rename clause_type
ALTER TABLE sentence_structures
ADD COLUMN IF NOT EXISTS semantic_classification VARCHAR(100);

ALTER TABLE sentence_structures
ADD COLUMN IF NOT EXISTS grammatical_explanation TEXT;

-- Update existing data if needed
UPDATE sentence_structures
SET semantic_classification =
    CASE
        WHEN sequence_order = 1 THEN '부가적 권면'
        WHEN sequence_order = 2 THEN '반복의 이유 1'
        WHEN sequence_order = 3 THEN '반복의 이유 2'
        ELSE '문장 ' || sequence_order
    END
WHERE semantic_classification IS NULL;

-- 2. Update vocabulary table
-- Add IPA pronunciation column and rename existing pronunciation
ALTER TABLE vocabulary
ADD COLUMN IF NOT EXISTS ipa_pronunciation VARCHAR(200);

-- Rename pronunciation_simple to korean_pronunciation if needed
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'vocabulary' AND column_name = 'pronunciation_simple'
    ) THEN
        ALTER TABLE vocabulary RENAME COLUMN pronunciation_simple TO korean_pronunciation;
    END IF;
END $$;

-- 3. Create new contextual_explanations table (replacing contextual_notes)
CREATE TABLE IF NOT EXISTS contextual_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE UNIQUE,
    integrated_explanation TEXT NOT NULL,
    cross_references TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Update korean_translations table
-- Add natural_translation column
ALTER TABLE korean_translations
ADD COLUMN IF NOT EXISTS natural_translation TEXT;

-- Migrate existing data - use literal_translation as base for natural_translation
UPDATE korean_translations
SET natural_translation = literal_translation
WHERE natural_translation IS NULL AND literal_translation IS NOT NULL;

-- 5. Drop old tables that are no longer needed
DROP TABLE IF EXISTS contextual_notes CASCADE;
DROP TABLE IF EXISTS analysis_metadata CASCADE;

-- 6. Update the view with new structure
DROP VIEW IF EXISTS verse_analysis_complete CASCADE;

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

-- 7. Update indexes
DROP INDEX IF EXISTS idx_korean_text_search;
CREATE INDEX IF NOT EXISTS idx_korean_text_search ON korean_translations USING GIN(to_tsvector('simple', natural_translation));
CREATE INDEX IF NOT EXISTS idx_contextual_verse ON contextual_explanations(verse_id);

NOTIFY MIGRATION_COMPLETE;