-- =============================================
-- 데이터베이스 저장 내용 확인 쿼리 모음
-- =============================================

-- 1. 전체 구절 현황
SELECT
    b.name_korean || ' (' || b.name_english || ')' as book_name,
    COUNT(v.id) as total_verses,
    COUNT(CASE WHEN v.analysis_completed THEN 1 END) as analyzed_verses
FROM books b
LEFT JOIN verses v ON v.book_id = b.id
GROUP BY b.id, b.name_korean, b.name_english
HAVING COUNT(v.id) > 0
ORDER BY b.order_number;

-- 2. 빌립보서 3:1 상세 정보
SELECT
    v.reference,
    v.niv_text,
    kt.literal_translation,
    kt.dynamic_translation
FROM verses v
LEFT JOIN korean_translations kt ON v.id = kt.verse_id
WHERE v.reference = 'Philippians 3:1';

-- 3. 문장 구조 분석
SELECT
    sequence_order,
    original_text,
    korean_translation,
    clause_type
FROM sentence_structures
WHERE verse_id = (SELECT id FROM verses WHERE reference = 'Philippians 3:1')
ORDER BY sequence_order;

-- 4. 어휘 목록
SELECT
    word,
    pronunciation_simple as pronunciation,
    part_of_speech,
    definition_korean
FROM vocabulary
WHERE verse_id = (SELECT id FROM verses WHERE reference = 'Philippians 3:1')
ORDER BY id;

-- 5. 문맥 설명
SELECT
    note_type,
    LEFT(content, 100) || '...' as content_preview
FROM contextual_notes
WHERE verse_id = (SELECT id FROM verses WHERE reference = 'Philippians 3:1');

-- 6. 특별 설명
SELECT
    explanation_type,
    title,
    LEFT(content, 100) || '...' as content_preview
FROM special_explanations
WHERE verse_id = (SELECT id FROM verses WHERE reference = 'Philippians 3:1');

-- 7. 분석 메타데이터
SELECT
    analysis_version,
    analyzed_at,
    word_count,
    complexity_score,
    key_themes
FROM analysis_metadata
WHERE verse_id = (SELECT id FROM verses WHERE reference = 'Philippians 3:1');