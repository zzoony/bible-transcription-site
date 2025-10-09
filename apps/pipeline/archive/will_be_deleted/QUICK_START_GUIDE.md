# Quick Start Guide: Add Missing Supabase Data

## Current Status
- ❌ 40 verses missing sentence structures
- ✅ Scripts ready for execution
- ✅ Solution tested and documented

## 3-Step Process

### Step 1: Fix Database (5 min)
Open Supabase SQL Editor and run:
```sql
-- Fix sequences
SELECT setval('sentence_structures_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM sentence_structures), false);
SELECT setval('vocabulary_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM vocabulary), false);
SELECT setval('contextual_explanations_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM contextual_explanations), false);
SELECT setval('korean_translations_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM korean_translations), false);
SELECT setval('special_explanations_id_seq', (SELECT COALESCE(MAX(id), 0) + 1 FROM special_explanations), false);

-- Add Priority 1 structures
INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
VALUES
  (27, 4, '은혜의 공유', 'all of you share in God''s grace with me', '여러분은 모두 나와 함께 하나님의 은혜에 동참하고 있습니다', '독립절 (주어 + 동사 + 목적어 + 전치사구)'),
  (22, 3, '행동 방식 설명', 'striving together as one for the faith of the gospel', '복음의 믿음을 위하여 한 마음으로 함께 애쓰고 있는', '분사구 (현재분사 striving + 부사구 together as one + 전치사구 for the faith of the gospel)'),
  (8, 3, '목적 진술', 'that I may gain Christ', '그리스도를 얻기 위함입니다', '목적절 (접속사 that + 조동사 may + 동사 gain + 목적어 Christ)')
ON CONFLICT (verse_id, sequence_order) DO NOTHING;
```

### Step 2: Run Script (60 min)
```bash
cd /Users/peter/Dev/bible-transcription-site
npx ts-node scripts/add-remaining-verses.ts
```

### Step 3: Verify (30 sec)
```bash
npx ts-node scripts/find-missing-data.ts
```

## Expected Results
```
✅ Total verses: 104
✅ Verses with structures: 104
✅ Verses still missing: 0
```

## What Gets Added
For each of the 40 missing verses:
- ✅ Sentence structures (semantic + grammatical)
- ✅ Vocabulary (with IPA/Korean pronunciations)
- ✅ Contextual explanations (historical/theological)
- ✅ Korean translations (natural, fluent)
- ✅ Special explanations (if needed)

## Documentation
- Full details: `SUPABASE_DATA_ADDITION_REPORT.md`
- Technical guide: `scripts/ADD_MISSING_DATA_README.md`
- Execution summary: `scripts/EXECUTION_SUMMARY.md`

## Need Help?
- Review error messages in console
- Check documentation files above
- Verify environment variables in `.env`
- Re-run scripts (they're idempotent)