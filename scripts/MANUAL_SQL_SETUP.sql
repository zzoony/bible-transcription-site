-- ==================================================================
-- MANUAL SQL SETUP - Run this in Supabase SQL Editor BEFORE running
-- the TypeScript scripts
-- ==================================================================

-- Step 1: Fix all sequence counters to prevent ID conflicts
-- This ensures that auto-generated IDs start from the correct number

SELECT setval('sentence_structures_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM sentence_structures), false);
SELECT setval('vocabulary_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM vocabulary), false);
SELECT setval('contextual_explanations_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM contextual_explanations), false);
SELECT setval('korean_translations_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM korean_translations), false);
SELECT setval('special_explanations_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM special_explanations), false);

-- Step 2: Verify the sequences are correct
SELECT 'sentence_structures_id_seq' as sequence_name, last_value FROM sentence_structures_id_seq
UNION ALL
SELECT 'vocabulary_id_seq', last_value FROM vocabulary_id_seq
UNION ALL
SELECT 'contextual_explanations_id_seq', last_value FROM contextual_explanations_id_seq
UNION ALL
SELECT 'korean_translations_id_seq', last_value FROM korean_translations_id_seq
UNION ALL
SELECT 'special_explanations_id_seq', last_value FROM special_explanations_id_seq;

-- Step 3: Add Priority 1 missing structures
-- Note: Only run this if the structures don't already exist
-- Check first: SELECT COUNT(*) FROM sentence_structures WHERE verse_id IN (27, 22, 8) AND sequence_order IN (4, 3, 3);

DO $$
BEGIN
  -- Add Philippians 1:7 missing structure (verse_id=27, sequence=4)
  IF NOT EXISTS (SELECT 1 FROM sentence_structures WHERE verse_id = 27 AND sequence_order = 4) THEN
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES (27, 4, '은혜의 공유', 'all of you share in God''s grace with me', '여러분은 모두 나와 함께 하나님의 은혜에 동참하고 있습니다', '독립절 (주어 + 동사 + 목적어 + 전치사구)');
  END IF;

  -- Add Philippians 1:27 missing structure (verse_id=22, sequence=3)
  IF NOT EXISTS (SELECT 1 FROM sentence_structures WHERE verse_id = 22 AND sequence_order = 3) THEN
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES (22, 3, '행동 방식 설명', 'striving together as one for the faith of the gospel', '복음의 믿음을 위하여 한 마음으로 함께 애쓰고 있는', '분사구 (현재분사 striving + 부사구 together as one + 전치사구 for the faith of the gospel)');
  END IF;

  -- Add Philippians 3:8 missing structure (verse_id=8, sequence=3)
  IF NOT EXISTS (SELECT 1 FROM sentence_structures WHERE verse_id = 8 AND sequence_order = 3) THEN
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES (8, 3, '목적 진술', 'that I may gain Christ', '그리스도를 얻기 위함입니다', '목적절 (접속사 that + 조동사 may + 동사 gain + 목적어 Christ)');
  END IF;
END $$;

-- Step 4: Verify Priority 1 structures were added
SELECT v.reference, ss.sequence_order, ss.semantic_classification
FROM sentence_structures ss
JOIN verses v ON v.id = ss.verse_id
WHERE v.reference IN ('Philippians 1:7', 'Philippians 1:27', 'Philippians 3:8')
ORDER BY v.reference, ss.sequence_order;

-- ==================================================================
-- After running this SQL, you can run the TypeScript script to add
-- the remaining Chapter 2 and Chapter 4 verses
-- ==================================================================