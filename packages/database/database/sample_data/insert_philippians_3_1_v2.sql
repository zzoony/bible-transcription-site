-- Insert Philippians 3:1 analysis data into updated schema v2
-- Based on the revised output format

DO $$
DECLARE
    book_id_val INTEGER;
    chapter_id_val INTEGER;
    verse_id_val INTEGER;
BEGIN
    -- 1. Insert or get book
    INSERT INTO books (name_english, name_korean, abbreviation, testament, order_number, total_chapters)
    VALUES ('Philippians', '빌립보서', 'Phil', 2, 50, 4)
    ON CONFLICT (name_english) DO NOTHING;

    SELECT id INTO book_id_val FROM books WHERE name_english = 'Philippians';

    -- 2. Insert or get chapter
    INSERT INTO chapters (book_id, chapter_number, total_verses)
    VALUES (book_id_val, 3, 21)
    ON CONFLICT (book_id, chapter_number) DO NOTHING;

    SELECT id INTO chapter_id_val FROM chapters WHERE book_id = book_id_val AND chapter_number = 3;

    -- 3. Insert verse
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (
        book_id_val,
        chapter_id_val,
        1,
        'Philippians 3:1',
        'Further, my brothers and sisters, rejoice in the Lord! It is no trouble for me to write the same things to you again, and it is a safeguard for you.',
        TRUE
    )
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        analysis_completed = EXCLUDED.analysis_completed;

    SELECT id INTO verse_id_val FROM verses WHERE reference = 'Philippians 3:1';

    -- 4. Insert sentence structures (meaningful classification + grammatical explanation)
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES
    (verse_id_val, 1, '부가적 권면', 'Further, my brothers and sisters, rejoice in the Lord!', '더 나아가, 나의 형제자매들이여, 주 안에서 기뻐하십시오!', '전환 부사 + 호격 + 명령문 구조'),
    (verse_id_val, 2, '반복의 이유 1', 'It is no trouble for me to write the same things to you again', '같은 것들을 여러분에게 다시 쓰는 것이 나에게는 번거롭지 않습니다', '가주어 구문 (It is + 형용사 + for me + to부정사)'),
    (verse_id_val, 3, '반복의 이유 2', 'and it is a safeguard for you', '그리고 그것은 여러분에게 안전장치입니다', '등위접속사로 연결된 평서문')
    ON CONFLICT (verse_id, sequence_order) DO UPDATE SET
        semantic_classification = EXCLUDED.semantic_classification,
        original_text = EXCLUDED.original_text,
        korean_translation = EXCLUDED.korean_translation,
        grammatical_explanation = EXCLUDED.grammatical_explanation;

    -- 5. Insert vocabulary (with both IPA and Korean pronunciation)
    INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean)
    VALUES
    (verse_id_val, 'Further', '[ˈfɜːrðər]', '퍼더', '부사', '더 나아가, 끝으로'),
    (verse_id_val, 'brothers and sisters', NULL, '브라더즈 앤 시스터즈', '명사구', '형제자매들 (신앙공동체 구성원)'),
    (verse_id_val, 'rejoice', '[rɪˈdʒɔɪs]', '리조이스', '동사', '기뻐하다'),
    (verse_id_val, 'trouble', '[ˈtrʌbəl]', '트러블', '명사', '수고, 번거로움'),
    (verse_id_val, 'same things', NULL, '세임 띵스', '명사구', '같은 것들'),
    (verse_id_val, 'safeguard', '[ˈseɪfɡɑːrd]', '세이프가드', '명사', '안전장치, 보호막');

    -- 6. Insert contextual explanation (integrated)
    INSERT INTO contextual_explanations (verse_id, integrated_explanation, cross_references)
    VALUES (
        verse_id_val,
        '바울이 로마 감옥에서 빌립보 교회에 보낸 서신의 3장 시작 부분입니다. 3장을 시작하면서 주 안에서 기뻐하라는 핵심 메시지를 반복합니다. "same things"는 이미 앞에서 언급한 기쁨에 대한 교훈이거나 이전 편지에서 다룬 내용을 가리킵니다. 같은 말의 반복이 교사에게는 수고가 아니고 학생에게는 안전을 위해 필요함을 강조합니다. ''주 안에서''(in the Lord)는 바울 신학의 핵심 개념으로, 그리스도와의 연합을 나타내며 기쁨의 근원이 환경이 아닌 그리스도와의 관계에서 나온다는 것을 강조합니다.',
        ARRAY['Philippians 2:18', 'Philippians 4:4', '1 Thessalonians 5:16', 'Acts 16:12-40', 'Philippians 4:15-16', 'Philippians 3:2', 'Philippians 3:4-14']
    )
    ON CONFLICT (verse_id) DO UPDATE SET
        integrated_explanation = EXCLUDED.integrated_explanation,
        cross_references = EXCLUDED.cross_references;

    -- 7. Insert Korean translation (single natural translation)
    INSERT INTO korean_translations (verse_id, natural_translation)
    VALUES (
        verse_id_val,
        '끝으로 나의 형제자매들이여, 주 안에서 기뻐하십시오! 같은 것들을 여러분에게 다시 쓰는 것이 나에게는 번거롭지 않으며, 여러분에게는 안전장치가 됩니다.'
    )
    ON CONFLICT (verse_id) DO UPDATE SET
        natural_translation = EXCLUDED.natural_translation;

    -- 8. Insert special explanations
    INSERT INTO special_explanations (verse_id, explanation_type, content)
    VALUES
    (verse_id_val, 'literary', '"Further" = 문학적으로는 결론을 의미하지만, 실제로는 3-4장이 더 이어집니다. 이는 바울이 편지를 마무리하려다가 중요한 경고사항(유대주의자들)을 추가로 다루게 되었음을 시사합니다.'),
    (verse_id_val, 'grammar', '가주어 구문 "It is no trouble for me to..."는 영어의 전형적인 표현으로, 한국어로는 "~하는 것이 나에게는 ~하다"로 번역됩니다.');

    RAISE NOTICE 'Philippians 3:1 analysis data inserted successfully with verse_id: %', verse_id_val;
END $$;