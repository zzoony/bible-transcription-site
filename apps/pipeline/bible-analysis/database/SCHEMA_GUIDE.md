# 데이터베이스 스키마 가이드

성경 분석 프로젝트의 데이터베이스 구조와 사용법을 설명합니다.

## 📊 전체 구조 개요

```
books (66권)
  ↓
chapters (1,192장)
  ↓
verses (30,903구절)
  ↓
  ├─ sentence_structures (42,979개) - 문장 구조 분석
  ├─ vocabulary (189,575개)        - 주요 단어 설명
  ├─ contextual_explanations (30,913개) - 문맥 설명
  ├─ korean_translations (30,914개) - 한국어 번역
  └─ special_explanations (966개)  - 특별 설명
```

## 🔗 테이블 관계

### 1. 계층 구조
```
books (성경 책)
  ├─ id → chapters.book_id (1:N)
  └─ id → verses.book_id (1:N)

chapters (장)
  └─ id → verses.chapter_id (1:N)

verses (구절)
  ├─ id → sentence_structures.verse_id (1:N)
  ├─ id → vocabulary.verse_id (1:N)
  ├─ id → contextual_explanations.verse_id (1:1)
  ├─ id → korean_translations.verse_id (1:1)
  └─ id → special_explanations.verse_id (1:N)
```

### 2. Foreign Key 관계
- `chapters.book_id` → `books.id`
- `verses.book_id` → `books.id`
- `verses.chapter_id` → `chapters.id`
- `sentence_structures.verse_id` → `verses.id`
- `vocabulary.verse_id` → `verses.id`
- `contextual_explanations.verse_id` → `verses.id`
- `korean_translations.verse_id` → `verses.id`
- `special_explanations.verse_id` → `verses.id`

## 📋 테이블별 상세 설명

### 1. books (성경 책)
**목적**: 66권의 성경 책 정보

**핵심 필드**:
- `name_english`: 영어 이름 (예: "Genesis", "Philippians")
- `name_korean`: 한글 이름 (예: "창세기", "빌립보서")
- `testament`: 1=구약, 2=신약
- `order_number`: 성경 순서 (1-66)

**사용 예시**:
```typescript
// 구약 모든 책 가져오기
const { data } = await supabase
  .from('books')
  .select('*')
  .eq('testament', 1)
  .order('order_number');

// 특정 책 찾기
const { data } = await supabase
  .from('books')
  .select('*')
  .eq('name_english', 'Genesis')
  .single();
```

### 2. chapters (장)
**목적**: 각 책의 장 정보 (총 1,192장)

**핵심 필드**:
- `book_id`: 어느 책에 속하는지
- `chapter_number`: 장 번호 (1부터 시작)
- `total_verses`: 해당 장의 총 절 수

**사용 예시**:
```typescript
// 창세기 1장 정보
const { data } = await supabase
  .from('chapters')
  .select('*, books(*)')
  .eq('book_id', 1)
  .eq('chapter_number', 1)
  .single();
```

### 3. verses (구절)
**목적**: 개별 구절 정보 (총 30,903구절)

**핵심 필드**:
- `reference`: 구절 참조 (예: "Genesis 1:1")
- `niv_text`: NIV 영어 원문
- `analysis_completed`: 분석 완료 여부 (boolean)

**사용 예시**:
```typescript
// 특정 구절 찾기
const { data } = await supabase
  .from('verses')
  .select('*')
  .ilike('reference', 'Genesis 1:2')
  .single();

// 미분석 구절 찾기
const { data } = await supabase
  .from('verses')
  .select('*')
  .eq('analysis_completed', false)
  .limit(10);
```

### 4. sentence_structures (문장 구조)
**목적**: 각 구절의 문장/절 구조 분석

**품질 기준**:
- ✅ NIV 원문의 **모든 문장/절 포함** (누락 금지!)
- ✅ `semantic_classification`: 의미적 분류 필수
- ✅ `grammatical_explanation`: 상세한 문법 설명 필수

**핵심 필드**:
- `sequence_order`: 구절 내 순서
- `semantic_classification`: 의미적 분류 (예: "배경 묘사", "부가적 권면")
- `original_text`: 원문 텍스트
- `korean_translation`: 한글 번역
- `grammatical_explanation`: 문법 설명 (주어, 동사, 수식어 등)

**사용 예시**:
```typescript
// 특정 구절의 모든 문장 구조 가져오기
const { data } = await supabase
  .from('sentence_structures')
  .select('*')
  .eq('verse_id', 123)
  .order('sequence_order');

// 새 문장 구조 삽입
const { error } = await supabase
  .from('sentence_structures')
  .insert({
    verse_id: 123,
    sequence_order: 1,
    semantic_classification: '배경 묘사',
    original_text: 'Now the earth was formless and empty',
    korean_translation: '그때 땅은 형태가 없고 비어있었으며',
    grammatical_explanation: '주어(earth) + be동사(was) + 형용사(formless and empty)'
  });
```

### 5. vocabulary (주요 단어)
**목적**: 각 구절의 핵심 단어 설명

**품질 기준**:
- ✅ 구절당 **최소 7-10개** 단어
- ✅ **히브리어/그리스어 원어 설명 필수!**
- ✅ IPA 발음 + 한국어 발음 모두 포함

**핵심 필드**:
- `word`: 단어
- `ipa_pronunciation`: IPA 발음 (예: "[ˈfɜːrðər]")
- `korean_pronunciation`: 한글 발음 (예: "퍼더")
- `part_of_speech`: 품사
- `definition_korean`: 한글 뜻 **(히브리어/그리스어 원어 포함 필수)**

**사용 예시**:
```typescript
// 특정 구절의 모든 단어 가져오기
const { data } = await supabase
  .from('vocabulary')
  .select('*')
  .eq('verse_id', 123);

// 새 단어 삽입
const { error } = await supabase
  .from('vocabulary')
  .insert({
    verse_id: 123,
    word: 'formless',
    ipa_pronunciation: '[ˈfɔːrmləs]',
    korean_pronunciation: '폼리스',
    part_of_speech: '형용사',
    definition_korean: '형태가 없는, 무형의. 히브리어 "תֹהוּ" (tohu)에서 유래하며...',
    frequency: 1
  });
```

### 6. contextual_explanations (문맥 설명)
**목적**: 역사적, 신학적, 문학적 배경 설명

**품질 기준**:
- ✅ **최소 300자 이상** 상세 설명
- ✅ **히브리어/그리스어 원어 분석 포함 필수**
- ✅ 역사적/신학적/문학적 배경 통합

**핵심 필드**:
- `integrated_explanation`: 통합된 문맥 설명
- `cross_references`: 교차 참조 (쉼표로 구분)

**사용 예시**:
```typescript
// 특정 구절의 문맥 설명
const { data } = await supabase
  .from('contextual_explanations')
  .select('*')
  .eq('verse_id', 123)
  .single();

// 새 문맥 설명 삽입
const { error } = await supabase
  .from('contextual_explanations')
  .insert({
    verse_id: 123,
    integrated_explanation: '창세기 1:2는 창조의 초기 상태를 묘사합니다. 히브리어 "토후 와보후"(תֹהוּ וָבֹהוּ)는...',
    cross_references: 'Genesis 1:1,Jeremiah 4:23,Isaiah 45:18'
  });
```

### 7. korean_translations (한국어 번역)
**목적**: 자연스러운 한국어 번역

**품질 기준**:
- ✅ 직역과 의역의 조화
- ✅ 원문의 뉘앙스 보존

**사용 예시**:
```typescript
// 특정 구절의 번역
const { data } = await supabase
  .from('korean_translations')
  .select('*')
  .eq('verse_id', 123)
  .single();
```

### 8. special_explanations (특별 설명)
**목적**: 문법적, 신학적, 문학적 특이점

**품질 기준**:
- ✅ **최소 2-3개** 권장
- ✅ 다양한 관점 (문법, 신학, 문학 등)

**핵심 필드**:
- `explanation_type`: 설명 유형 (예: "literary", "theological", "grammatical")
- `content`: 설명 내용

**사용 예시**:
```typescript
// 특정 구절의 특별 설명들
const { data } = await supabase
  .from('special_explanations')
  .select('*')
  .eq('verse_id', 123);
```

## 🔍 자주 사용하는 쿼리 패턴

### 1. 완전한 구절 분석 데이터 가져오기
```typescript
const { data: verse } = await supabase
  .from('verses')
  .select(`
    *,
    books (*),
    chapters (*),
    sentence_structures (*),
    vocabulary (*),
    contextual_explanations (*),
    korean_translations (*),
    special_explanations (*)
  `)
  .ilike('reference', 'Genesis 1:2')
  .single();
```

### 2. 특정 책의 모든 구절 가져오기
```typescript
const { data: verses } = await supabase
  .from('verses')
  .select('*, books!inner(*)')
  .eq('books.name_english', 'Genesis')
  .order('chapter_id, verse_number');
```

### 3. 분석 완료 여부 확인
```typescript
const { data: incomplete } = await supabase
  .from('verses')
  .select('reference')
  .eq('analysis_completed', false)
  .order('reference');
```

### 4. 단어 빈도 분석
```typescript
const { data: commonWords } = await supabase
  .from('vocabulary')
  .select('word, frequency')
  .order('frequency', { ascending: false })
  .limit(100);
```

## ⚠️ 주의사항

### 1. 데이터 무결성
- **절대 규칙**: `verses.id`를 삭제하기 전에 모든 관련 분석 데이터 먼저 삭제
- Foreign key 제약조건 준수

### 2. 분석 품질 기준
- ✅ sentence_structures: NIV 원문의 **모든 문장/절 포함**
- ✅ vocabulary: 구절당 **최소 7-10개**, **히브리어/그리스어 원어 필수**
- ✅ contextual_explanations: **최소 300자**, **원어 분석 필수**
- ✅ special_explanations: **최소 2-3개**

### 3. 텍스트 형식
- NIV 원문은 반드시 `NIV_Bible.json`에서 가져오기
- 구절 참조는 항상 "BookName C:V" 형식 (예: "Genesis 1:2")

### 4. 중복 방지
```typescript
// 삽입 전 중복 확인
const { data: existing } = await supabase
  .from('sentence_structures')
  .select('id')
  .eq('verse_id', verseId)
  .eq('sequence_order', 1)
  .single();

if (!existing) {
  // 삽입 진행
}
```

## 📊 품질 평가

창세기 1:2를 기준으로 품질 평가:

```bash
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:2"
```

**평가 기준** (100점 만점):
- 문장 구조: 30점 (완전성, 문법, 의미 분류)
- 주요 단어: 25점 (개수, 원어 포함)
- 문맥 설명: 20점 (길이, 깊이, 원어 분석)
- 한국어 번역: 15점 (자연스러움)
- 특별 설명: 10점 (개수, 다양성)

**등급**:
- 우수 (A): 90-100점
- 양호 (B): 70-89점
- 보통 (C): 50-69점
- 미흡 (D): 50점 미만

## 🚀 베스트 프랙티스

### 1. 트랜잭션 사용
```typescript
// 여러 테이블에 동시 삽입 시
const { error } = await supabase.rpc('insert_verse_analysis', {
  verse_data: { ... },
  structures: [ ... ],
  vocabulary: [ ... ]
});
```

### 2. 배치 삽입
```typescript
// 한 번에 여러 레코드 삽입
const { error } = await supabase
  .from('vocabulary')
  .insert([
    { verse_id: 123, word: 'formless', ... },
    { verse_id: 123, word: 'empty', ... },
    { verse_id: 123, word: 'darkness', ... }
  ]);
```

### 3. 에러 처리
```typescript
const { data, error } = await supabase
  .from('verses')
  .select('*')
  .eq('id', 123)
  .single();

if (error) {
  console.error('데이터베이스 오류:', error.message);
  // 재시도 로직 또는 에러 처리
}
```

## 📚 추가 참고 자료

- **스키마 파일**: `bible-analysis/database/schema.sql`
- **TypeScript 타입**: `bible-analysis/database/database.types.ts`
- **환경 설정**: `bible-analysis/database/ENV_SETUP.md`
- **분석 템플릿**: `bible-analysis/templates/ANALYSIS_TEMPLATE.md`
- **품질 기준**: `bible-analysis/templates/QUALITY_STANDARD_SUMMARY.md`
