# 데이터베이스 작업 가이드

**작성일**: 2025-10-17
**관련 문서**: CLAUDE.md (빠른 참조), SCHEMA_GUIDE.md (테이블 구조)

---

## 📋 목차

1. [절대 규칙](#절대-규칙)
2. [작업 전 체크리스트](#작업-전-체크리스트)
3. [환경 변수 설정](#환경-변수-설정)
4. [테이블/컬럼명 확인](#테이블컬럼명-확인)
5. [TypeScript 타입 사용](#typescript-타입-사용)
6. [자주 발생하는 오류](#자주-발생하는-오류)
7. [코드 예시](#코드-예시)

---

## ⛔ 절대 규칙 (위반 금지!)

### 1. 테이블명/컬럼명 추측 금지
```typescript
// ❌ 추측하지 말 것!
const { data } = await supabase.from('verse_analyses').select('text');
const { data } = await supabase.from('analysis').select('content');

// ✅ SCHEMA_GUIDE.md에서 확인!
const { data } = await supabase.from('verses').select('niv_text');
const { data } = await supabase.from('sentence_structures').select('original_text');
```

### 2. 환경 변수 설정 필수
```typescript
// ❌ 건너뛰기 금지!
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
); // 이렇게 하면 undefined 오류 발생!

// ✅ 반드시 dotenv.config() 먼저!
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);
```

### 3. 스키마 문서 우선 참조
**DB 스크립트 작성 전 반드시 다음 순서로 문서 확인**:

1. `bible-analysis/database/ENV_SETUP.md` - 환경 설정
2. `bible-analysis/database/SCHEMA_GUIDE.md` - 테이블 구조
3. `bible-analysis/database/database.types.ts` - 타입 정의

---

## 📋 작업 전 체크리스트

**모든 DB 스크립트 작성 시 다음을 확인**:

- [ ] ENV_SETUP.md를 읽고 환경 변수 설정 확인
- [ ] SCHEMA_GUIDE.md에서 테이블명/컬럼명 확인
- [ ] database.types.ts로 타입 import
- [ ] dotenv.config() 정확한 경로로 설정
- [ ] Supabase 클라이언트 생성 시 SERVICE_KEY 사용

---

## 🔧 환경 변수 설정

### 파일 위치
```
apps/web/.env.local
```

### 필수 변수
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 로드 방법
```typescript
import * as dotenv from 'dotenv';
import * as path from 'path';

// 현재 파일 위치에 따라 경로 조정
// apps/pipeline/bible-analysis/database/xxx.ts 에서:
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// apps/pipeline/bible-analysis/tools/xxx.ts 에서:
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});
```

### 검증 방법
```typescript
// 환경 변수가 제대로 로드되었는지 확인
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
}

if (!process.env.SUPABASE_SERVICE_KEY) {
  throw new Error('SUPABASE_SERVICE_KEY is not defined');
}

console.log('✅ 환경 변수 로드 완료');
```

---

## 📊 테이블/컬럼명 확인

### 빠른 참조
```bash
# 스키마 확인
cat apps/pipeline/bible-analysis/database/SCHEMA_GUIDE.md

# TypeScript 타입 확인
cat apps/pipeline/bible-analysis/database/database.types.ts
```

### 주요 테이블

| 테이블명 | 용도 | 주요 컬럼 |
|----------|------|-----------|
| `verses` | 성경 구절 원문 | `niv_text`, `reference`, `testament` |
| `sentence_structures` | 문장 구조 분석 | `original_text`, `korean_translation`, `grammatical_explanation` |
| `vocabulary` | 주요 단어 | `word`, `definition_korean`, `ipa_pronunciation` |
| `contextual_explanations` | 문맥 설명 | `integrated_explanation`, `cross_references` |
| `korean_translations` | 한국어 번역 | `natural_translation`, `translation_notes` |
| `special_explanations` | 특별 설명 | `explanation_type`, `content` |

### 자주 혼동하는 컬럼명

| ❌ 틀린 이름 | ✅ 올바른 이름 | 테이블 |
|-------------|---------------|--------|
| `text` | `niv_text` | verses |
| `content` | `original_text` | sentence_structures |
| `translation` | `korean_translation` | sentence_structures |
| `explanation` | `grammatical_explanation` | sentence_structures |
| `definition` | `definition_korean` | vocabulary |

---

## 📦 TypeScript 타입 사용

### Import
```typescript
import type {
  Verse,
  SentenceStructure,
  Vocabulary,
  ContextualExplanation,
  KoreanTranslation,
  SpecialExplanation
} from '../bible-analysis/database/database.types';
```

### 사용 예시
```typescript
// 타입 안전성 확보
const verse: Verse = {
  reference: 'Genesis 1:1',
  niv_text: 'In the beginning God created the heavens and the earth.',
  testament: 1
};

const structures: SentenceStructure[] = [
  {
    verse_id: verse.id,
    sequence_order: 1,
    semantic_classification: '선언적 진술',
    original_text: 'In the beginning God created the heavens and the earth',
    korean_translation: '태초에 하나님이 천지를 창조하셨다',
    grammatical_explanation: '전치사구(In the beginning) + 주어(God) + 동사(created) + 목적어(the heavens and the earth)'
  }
];
```

---

## ⚠️ 자주 발생하는 오류

### 1. "supabaseUrl is required"
**원인**: `dotenv.config()` 누락 또는 잘못된 경로

**해결**:
```typescript
// ❌ 잘못된 경로
dotenv.config({ path: '.env.local' });

// ✅ 올바른 경로 (절대 경로 사용)
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});
```

### 2. "Could not find the table 'xxx'"
**원인**: 테이블명을 추측하거나 오타

**해결**:
```bash
# SCHEMA_GUIDE.md 확인
cat apps/pipeline/bible-analysis/database/SCHEMA_GUIDE.md | grep "테이블:"
```

### 3. "column xxx does not exist"
**원인**: 컬럼명을 추측하거나 오타

**해결**:
```typescript
// database.types.ts 확인
import type { Verse } from '../database.types';
// Verse 타입에 정의된 컬럼명만 사용
```

### 4. "relation does not exist"
**원인**: 잘못된 테이블명 또는 스키마 변경

**해결**:
```bash
# 최신 스키마 추출
npx ts-node bible-analysis/database/extract-schema.ts
```

---

## 💻 코드 예시

### 완전한 DB 스크립트 템플릿
```typescript
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import type { Verse, SentenceStructure } from '../bible-analysis/database/database.types';

// 1. 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// 2. 환경 변수 검증
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
  throw new Error('환경 변수가 설정되지 않았습니다');
}

// 3. Supabase 클라이언트 생성
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// 4. 메인 함수
async function main() {
  try {
    // 구절 조회
    const { data: verses, error } = await supabase
      .from('verses')
      .select(`
        *,
        sentence_structures (*),
        vocabulary (*),
        contextual_explanations (*),
        korean_translations (*),
        special_explanations (*)
      `)
      .eq('reference', 'Genesis 1:1');

    if (error) throw error;

    console.log('✅ 조회 성공:', verses);

  } catch (error) {
    console.error('❌ 오류 발생:', error);
    process.exit(1);
  }
}

// 5. 실행
main();
```

### 데이터 삽입 예시
```typescript
async function insertVerse() {
  // 1. 구절 삽입
  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .insert({
      reference: 'Genesis 1:1',
      niv_text: 'In the beginning God created the heavens and the earth.',
      testament: 1
    })
    .select()
    .single();

  if (verseError) throw verseError;

  // 2. 문장 구조 삽입
  const { error: structureError } = await supabase
    .from('sentence_structures')
    .insert([
      {
        verse_id: verse.id,
        sequence_order: 1,
        semantic_classification: '선언적 진술',
        original_text: 'In the beginning God created the heavens and the earth',
        korean_translation: '태초에 하나님이 천지를 창조하셨다',
        grammatical_explanation: '전치사구 + 주어 + 동사 + 목적어'
      }
    ]);

  if (structureError) throw structureError;

  console.log('✅ 삽입 완료');
}
```

### 데이터 업데이트 예시
```typescript
async function updateVerse(reference: string) {
  const { data, error } = await supabase
    .from('verses')
    .update({ niv_text: 'Updated text' })
    .eq('reference', reference)
    .select();

  if (error) throw error;

  console.log('✅ 업데이트 완료:', data);
}
```

### 데이터 삭제 예시
```typescript
async function deleteVerse(reference: string) {
  // 1. 먼저 관련 데이터 삭제 (외래 키 제약 조건)
  const { data: verse } = await supabase
    .from('verses')
    .select('id')
    .eq('reference', reference)
    .single();

  if (!verse) {
    console.log('구절을 찾을 수 없습니다');
    return;
  }

  // 2. 관련 테이블 데이터 삭제
  await supabase.from('sentence_structures').delete().eq('verse_id', verse.id);
  await supabase.from('vocabulary').delete().eq('verse_id', verse.id);
  // ... 다른 관련 테이블들

  // 3. 구절 삭제
  const { error } = await supabase
    .from('verses')
    .delete()
    .eq('reference', reference);

  if (error) throw error;

  console.log('✅ 삭제 완료');
}
```

---

## 🔗 관련 문서

- **환경 설정**: `bible-analysis/database/ENV_SETUP.md`
- **스키마 구조**: `bible-analysis/database/SCHEMA_GUIDE.md`
- **타입 정의**: `bible-analysis/database/database.types.ts`
- **빠른 참조**: `CLAUDE.md`
- **전체 가이드**: `CLAUDE_FULL_GUIDE.md`

---

**작성**: Bible Analysis Team  
**최종 수정**: 2025-10-17
