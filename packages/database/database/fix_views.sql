-- Drop the problematic view first
DROP VIEW IF EXISTS verse_analysis_complete;

-- Create a better view that handles the aggregation properly
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