-- ==================================================
-- 빌립보서 3:1 데이터 삽입 스크립트
-- 주의: 이 스크립트는 동일 데이터가 없다고 가정합니다
-- ==================================================

-- 트랜잭션 시작
BEGIN;

-- 1. 구절 정보 삽입
INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
SELECT
    b.id as book_id,
    c.id as chapter_id,
    1 as verse_number,
    'Philippians 3:1' as reference,
    'Further, my brothers and sisters, rejoice in the Lord! It is no trouble for me to write the same things to you again, and it is a safeguard for you.' as niv_text,
    true as analysis_completed
FROM books b
JOIN chapters c ON c.book_id = b.id
WHERE b.name_english = 'Philippians'
AND c.chapter_number = 3
ON CONFLICT (reference) DO NOTHING
RETURNING id;

-- verse_id를 변수로 저장 (PostgreSQL의 경우)
-- 실제 사용시에는 애플리케이션 레벨에서 처리하거나 DO 블록 사용
DO $$
DECLARE
    v_verse_id INTEGER;
BEGIN
    -- 방금 삽입했거나 이미 있는 verse의 id 가져오기
    SELECT id INTO v_verse_id
    FROM verses
    WHERE reference = 'Philippians 3:1';

    -- 기존 관련 데이터 삭제 (재실행 가능하도록)
    DELETE FROM sentence_structures WHERE verse_id = v_verse_id;
    DELETE FROM vocabulary WHERE verse_id = v_verse_id;
    DELETE FROM contextual_notes WHERE verse_id = v_verse_id;
    DELETE FROM korean_translations WHERE verse_id = v_verse_id;
    DELETE FROM special_explanations WHERE verse_id = v_verse_id;
    DELETE FROM analysis_metadata WHERE verse_id = v_verse_id;

    -- 2. 문장 구조 분석 삽입
    INSERT INTO sentence_structures (verse_id, sequence_order, original_text, korean_translation, clause_type, components)
    VALUES
    (v_verse_id, 1,
     'Further, my brothers and sisters, rejoice in the Lord!',
     '더 나아가, 나의 형제자매들이여, 주 안에서 기뻐하십시오!',
     'imperative',
     '{"parts": [{"text": "Further", "role": "transitional_adverb", "korean": "더 나아가"}, {"text": "my brothers and sisters", "role": "vocative", "korean": "나의 형제자매들이여"}, {"text": "rejoice in the Lord", "role": "main_verb_phrase", "korean": "주 안에서 기뻐하라"}]}'::jsonb),

    (v_verse_id, 2,
     'It is no trouble for me to write the same things to you again',
     '같은 것들을 여러분에게 다시 쓰는 것이 나에게는 번거롭지 않습니다',
     'declarative',
     '{"parts": [{"text": "It", "role": "expletive_subject", "korean": "그것은"}, {"text": "is no trouble", "role": "predicate", "korean": "번거롭지 않다"}, {"text": "for me", "role": "prepositional_phrase", "korean": "나에게는"}, {"text": "to write the same things to you again", "role": "real_subject_infinitive", "korean": "같은 것들을 여러분에게 다시 쓰는 것"}]}'::jsonb),

    (v_verse_id, 3,
     'and it is a safeguard for you',
     '그리고 그것은 여러분에게 안전장치입니다',
     'declarative',
     '{"parts": [{"text": "and", "role": "coordinating_conjunction", "korean": "그리고"}, {"text": "it", "role": "pronoun_subject", "korean": "그것은"}, {"text": "is a safeguard", "role": "predicate_nominative", "korean": "안전장치이다"}, {"text": "for you", "role": "prepositional_phrase", "korean": "여러분에게"}]}'::jsonb);

    -- 3. 어휘 삽입
    INSERT INTO vocabulary (verse_id, word, pronunciation_ipa, pronunciation_simple, part_of_speech, definition_korean, definition_english, usage_note)
    VALUES
    (v_verse_id, 'Further', 'ˈfɜːrðər', '퍼더', 'adverb', '더 나아가, 게다가', 'additionally, moreover', '화제 전환 또는 추가 내용 도입 시 사용'),
    (v_verse_id, 'brothers and sisters', 'ˈbrʌðərz ænd ˈsɪstərz', '브라더즈 앤 시스터즈', 'noun phrase', '형제자매들', 'fellow believers', '원어는 ἀδελφοί(형제들)만 있지만 현대 번역은 포용적 언어 사용'),
    (v_verse_id, 'rejoice', 'rɪˈdʒɔɪs', '리조이스', 'verb', '기뻐하다', 'to feel or show great joy', '명령형으로 사용되어 격려의 의미'),
    (v_verse_id, 'Lord', 'lɔːrd', '로드', 'noun', '주님', 'Jesus Christ', '예수 그리스도를 지칭'),
    (v_verse_id, 'trouble', 'ˈtrʌbəl', '트러블', 'noun', '수고, 번거로움', 'difficulty or problems', '부정어 no와 함께 사용'),
    (v_verse_id, 'safeguard', 'ˈseɪfɡɑːrd', '세이프가드', 'noun', '안전장치, 보호막', 'a measure taken to protect', '영적 보호의 의미');

    -- 4. 문맥 설명 삽입
    INSERT INTO contextual_notes (verse_id, note_type, content, cross_references)
    VALUES
    (v_verse_id, 'historical',
     '바울이 로마 감옥에서 빌립보 교회에 보낸 서신으로, AD 60-62년경 작성되었습니다. 빌립보는 바울이 유럽에서 세운 첫 번째 교회였으며, 바울과 가장 친밀한 관계를 유지했습니다.',
     '["Acts 16:12-40", "Philippians 4:15-16"]'::jsonb),

    (v_verse_id, 'theological',
     '''주 안에서''(in the Lord)는 바울 신학의 핵심 개념으로, 그리스도와의 연합을 나타냅니다. 기쁨의 근원이 환경이 아닌 그리스도와의 관계에서 나온다는 것을 강조합니다.',
     '["Philippians 2:18", "Philippians 4:4", "1 Thessalonians 5:16"]'::jsonb),

    (v_verse_id, 'literary',
     '3장은 서신의 중요한 전환점입니다. 2장까지의 일반적인 권면에서 3장의 거짓 교사들에 대한 경고와 바울의 자서전적 내용으로 전환됩니다.',
     '["Philippians 3:2", "Philippians 3:4-14"]'::jsonb);

    -- 5. 한국어 번역 삽입
    INSERT INTO korean_translations (verse_id, literal_translation, dynamic_translation, translation_notes)
    VALUES
    (v_verse_id,
     '더 나아가, 나의 형제자매들이여, 주 안에서 기뻐하십시오! 같은 것들을 여러분에게 다시 쓰는 것이 나에게는 번거롭지 않으며, 그것은 여러분에게 안전장치입니다.',
     '끝으로 사랑하는 형제자매 여러분, 주님 안에서 항상 기뻐하십시오! 제가 이미 말씀드린 것을 다시 강조하는 것이 저에게는 전혀 부담이 아니며, 오히려 여러분의 믿음을 지켜주는 보호막이 됩니다.',
     'Further를 ''끝으로''가 아닌 ''더 나아가''로 번역. 편지가 계속되기 때문입니다.');

    -- 6. 특별 설명 삽입
    INSERT INTO special_explanations (verse_id, explanation_type, title, content, examples)
    VALUES
    (v_verse_id, 'grammar', '가주어 It 구문',
     '''It is no trouble for me to write...''는 영어의 전형적인 가주어 구문입니다. 실제 주어인 ''to write...'' 부정사구가 너무 길어서 가짜 주어 it을 사용하고 진짜 주어를 뒤로 보냈습니다.',
     '["It is important to study the Bible", "It was difficult to understand"]'::jsonb),

    (v_verse_id, 'translation_note', 'Further vs Finally',
     '그리스어 원문 τὸ λοιπόν은 ''남은 것은'' 또는 ''그 밖에''의 의미입니다. 많은 번역본이 ''Finally''로 번역하지만, 편지가 3장 이후도 계속되므로 ''Furthermore''의 의미가 더 적절합니다.',
     '[]'::jsonb),

    (v_verse_id, 'cultural', 'Brothers and Sisters의 포용적 번역',
     '1세기 서신 관습상 남성형 ἀδελφοί(형제들)가 전체 공동체를 대표했지만, 현대 번역은 여성도 포함됨을 명확히 하기 위해 ''brothers and sisters''로 번역합니다.',
     '[]'::jsonb);

    -- 7. 분석 메타데이터 삽입
    INSERT INTO analysis_metadata (verse_id, analysis_version, analyzed_at, word_count, complexity_score, key_themes, cross_references)
    VALUES
    (v_verse_id, '1.0', NOW(), 25, 3.5,
     ARRAY['joy', 'perseverance', 'spiritual protection'],
     ARRAY['Philippians 2:18', 'Philippians 4:4', '1 Thessalonians 5:16']);

    RAISE NOTICE 'Successfully inserted all data for Philippians 3:1 (verse_id: %)', v_verse_id;
END $$;

-- 트랜잭션 커밋
COMMIT;

-- 검증 쿼리
SELECT
    'Verse inserted:' as status,
    COUNT(*) as count
FROM verses
WHERE reference = 'Philippians 3:1'

UNION ALL

SELECT
    'Sentence structures:' as status,
    COUNT(*) as count
FROM sentence_structures s
JOIN verses v ON s.verse_id = v.id
WHERE v.reference = 'Philippians 3:1'

UNION ALL

SELECT
    'Vocabulary entries:' as status,
    COUNT(*) as count
FROM vocabulary voc
JOIN verses v ON voc.verse_id = v.id
WHERE v.reference = 'Philippians 3:1'

UNION ALL

SELECT
    'Contextual notes:' as status,
    COUNT(*) as count
FROM contextual_notes cn
JOIN verses v ON cn.verse_id = v.id
WHERE v.reference = 'Philippians 3:1';