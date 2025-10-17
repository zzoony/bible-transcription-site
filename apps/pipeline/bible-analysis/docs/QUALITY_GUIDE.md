# 품질 관리 가이드

**작성일**: 2025-10-17
**기준**: 창세기 1:2 (최고 품질 분석 사례)

---

## 📋 목차

1. [품질 평가 시스템](#품질-평가-시스템)
2. [표준 템플릿](#표준-템플릿)
3. [필수 품질 기준](#필수-품질-기준)
4. [검증 프로세스](#검증-프로세스)
5. [자주 발생하는 문제](#자주-발생하는-문제)

---

## ⭐ 품질 평가 시스템

### 평가 스크립트 사용법
```bash
# 단일 구절 평가
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:1"

# 기준 구절 (창세기 1:2) 평가
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:2"
```

### 평가 기준 (100점 만점)

| 항목 | 배점 | 세부 기준 |
|------|------|-----------|
| **문장 구조** | 30점 | 완전성 (10점), 문법 설명 (10점), 의미 분류 (10점) |
| **주요 단어** | 25점 | 개수 (10점), 원어 포함 (10점), 발음 정확성 (5점) |
| **문맥 설명** | 20점 | 길이 (5점), 깊이 (10점), 통합성 (5점) |
| **한국어 번역** | 15점 | 자연스러움 (10점), 정확성 (5점) |
| **특별 설명** | 10점 | 개수 (5점), 다양성 (5점) |

### 등급 기준
- **우수 (A)**: 90-100점 - 창세기 1:2 수준
- **양호 (B)**: 70-89점 - 대부분 요소 충족
- **보통 (C)**: 50-69점 - 일부 개선 필요
- **미흡 (D)**: 50점 미만 - 대폭 개선 필요

### 저장 기준
- **90점 이상**: DB 저장 ✅
- **90점 미만**: 저장 안 함, 재분석 필요 ❌

---

## 📖 표준 템플릿

### 기준
**창세기 1:2** - 최고 품질 분석 사례

### 핵심 원칙
1. **완전성**: NIV 원문의 모든 문장/절을 빠짐없이 분석
2. **깊이**: 히브리어/그리스어 원어를 모든 주요 단어에 포함
3. **통합성**: 역사적/신학적/문학적 배경을 하나로 통합
4. **자연스러움**: 한국어 번역은 직역과 의역을 조화

### 필수 구성 요소

#### 1. 문장 구조 (sentence_structures)
```typescript
{
  sequence_order: 1,
  semantic_classification: "선언적 진술",  // 의미적 분류
  original_text: "In the beginning God created...",
  korean_translation: "태초에 하나님이 천지를 창조하셨다",
  grammatical_explanation: "전치사구(In the beginning) + 주어(God) + 동사(created) + 목적어(the heavens and the earth). 과거시제로 창조의 완료된 행위를 표현"  // 30자 이상
}
```

**필수 요건**:
- ✅ NIV 원문의 모든 문장/절 포함 (누락 금지!)
- ✅ `semantic_classification`: 의미적 분류 명확히
- ✅ `grammatical_explanation`: 주어, 동사, 수식어 명시 (30자 이상)
- ✅ `korean_translation`: 각 구조의 한글 번역

**예시 - 빌립보서 1:7**:
```
NIV: "It is right for me to feel this way about all of you, since I have
you in my heart and, whether I am in chains or defending and confirming
the gospel, all of you share in God's grace with me."

구조 분석 (4개):
1. "It is right for me to feel this way about all of you" - 정서적 확신
2. "since I have you in my heart" - 이유 설명
3. "whether I am in chains or defending and confirming the gospel" - 상황 묘사
4. "all of you share in God's grace with me" - 은혜의 공유 ⚠️ 빠뜨리기 쉬움!
```

#### 2. 주요 단어 (vocabulary)
```typescript
{
  word: "beginning",
  ipa_pronunciation: "[bɪˈɡɪnɪŋ]",
  korean_pronunciation: "비기닝",
  part_of_speech: "명사",
  definition_korean: "시작, 태초 (히브리어 'בְּרֵאשִׁית'(bereshit)로, 시간의 시작점을 의미하며 모든 창조의 출발점을 나타냄)",
  usage_note: "Genesis 1:1에서 사용됨",
  frequency: 1
}
```

**필수 요건**:
- ✅ 최소 7-10개 핵심 단어
- ✅ IPA 발음 + 한국어 발음
- ✅ **히브리어(구약)/그리스어(신약) 원어 설명 필수!**
- ✅ 품사 정확히 표시
- ✅ 형식: `"의미 (원어 '히브리어/그리스어'(transliteration)로, 뜻과 맥락)"`

#### 3. 문맥 설명 (contextual_explanations)
```typescript
{
  integrated_explanation: "창세기 1:1은 성경 전체의 서론이자 신학적 토대를 제공하는 핵심 구절입니다. 히브리어 '베레쉬트'(태초에)는...(최소 300자, 히브리어/그리스어 원어 분석 포함)",
  cross_references: "John 1:1,Hebrews 11:3"
}
```

**필수 요건**:
- ✅ 300자 이상 상세 설명
- ✅ 역사적/신학적/문학적 배경 통합
- ✅ 히브리어/그리스어 원어 분석 포함

#### 4. 한국어 번역 (korean_translations)
```typescript
{
  natural_translation: "태초에 하나님이 하늘과 땅을 창조하셨다.",
  translation_notes: "히브리어 원문의 강조점을 살린 번역"
}
```

**필수 요건**:
- ✅ 자연스러운 하나의 통합 번역
- ✅ 원문의 뉘앙스 보존

#### 5. 특별 설명 (special_explanations)
```typescript
[
  {
    explanation_type: "히브리어 문법",
    content: "히브리어 원문은 '베레쉬트 바라 엘로힘'으로 시작하며...",
    examples: ""
  },
  {
    explanation_type: "신학적 해석",
    content: "이 구절은 유일신 창조론을 명확히 선언하며...",
    examples: ""
  }
]
```

**필수 요건**:
- ✅ 최소 2-3개
- ✅ 다양한 관점 (문법, 신학, 문학, 역사 등)

---

## ✅ 필수 품질 기준

### 완전성 검증
**NIV 영어 원문의 모든 문장과 주요 절(clause)을 sentence_structures에 포함**

- 마침표(.), 느낌표(!), 물음표(?)로 끝나는 모든 완전한 문장
- 접속사로 연결된 독립절과 종속절
- 의미상 중요한 분사구나 부정사구

### 누락 방지 체크리스트
- [ ] NIV 원문을 처음부터 끝까지 읽으며 모든 문장 식별
- [ ] 각 문장/절이 sentence_structures에 매핑되는지 확인
- [ ] 복잡한 구절은 의미 단위로 분리하되 빠뜨리지 않음
- [ ] 마지막 문장/절까지 반드시 포함

### 원어 필수
- 모든 주요 단어의 `definition_korean`에 히브리어/그리스어 포함
- 구약 = 히브리어
- 신약 = 그리스어
- 형식: `"의미 (원어 '히브리어/그리스어'(transliteration)로, ...)"`

### 출력 형식
- 이모지 사용 금지 - 깔끔한 텍스트 형식만 사용
- 주요 단어들은 표 형식으로 정리
- 분석 완료일, 복잡도 점수, 핵심 주제 등 메타데이터는 출력하지 않음

### 표준 출력 형식
1. # [성경책명] [장]:[절] (NIV)
2. **원문:** "[영어 원문]"
3. ### 문장 구조 분석: (의미적 분류 + 문법적 설명)
4. ### 주요 단어들: (IPA + 한국어 발음 표 형식)
5. ### 문맥 설명: (통합된 배경 설명)
6. ### 한국어 번역: (자연스러운 번역)
7. ### 특별 설명: (문법적/해석적 특이점)

---

## 🔍 검증 프로세스

### 새로운 책을 분석할 때 반드시 수행

#### 1. 분석 전 검증
- [ ] 기존 데이터베이스 스키마 확인
- [ ] 예제 구절로 분석 규칙 테스트
- [ ] 출력 형식이 CLAUDE.md 규칙과 일치하는지 확인

#### 2. 분석 중 검증 (Sub Agent 사용)
- [ ] 각 장별로 병렬 분석하여 빠진 구절 확인
- [ ] NIV 원문과 sentence_structures 개수 비교
- [ ] 복잡한 구절은 더블 체크

#### 3. 분석 후 검증
- [ ] 전체 책의 모든 구절에 sentence_structures 존재 확인
- [ ] 랜덤 샘플링으로 품질 확인 (최소 10%)
- [ ] 웹사이트에서 실제 렌더링 확인

#### 4. 검증 스크립트 실행
```bash
npm run verify:completeness -- --book="Book Name"
```

### 품질 확인 워크플로우
```bash
# 1. 분석 전: 템플릿 문서 확인
cat bible-analysis/templates/ANALYSIS_TEMPLATE.md

# 2. 분석 중: 체크리스트 따라 진행

# 3. 분석 후: 품질 평가
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:1"

# 4. 70점 미만: 재분석 또는 개선 필요
```

---

## ⚠️ 자주 발생하는 문제

### 1. 문장 누락
**문제**: NIV 원문의 일부 문장/절이 빠짐

**원인**:
- 복잡한 구절에서 마지막 절을 놓침
- 접속사로 연결된 종속절을 독립적으로 처리 안 함

**해결**:
- NIV 원문을 처음부터 끝까지 읽으며 모든 문장 식별
- 빌립보서 1:7 같은 예시 참조

### 2. 원어 누락
**문제**: vocabulary의 definition_korean에 히브리어/그리스어 없음

**원인**:
- 원어 포함을 잊어버림
- 형식을 몰라서

**해결**:
```typescript
// ❌ 잘못된 예
definition_korean: "시작, 태초"

// ✅ 올바른 예
definition_korean: "시작, 태초 (히브리어 'בְּרֵאשִׁית'(bereshit)로, 시간의 시작점을 의미하며 모든 창조의 출발점을 나타냄)"
```

### 3. 문맥 설명 부족
**문제**: contextual_explanations.integrated_explanation이 300자 미만

**원인**:
- 너무 간략하게 작성
- 역사적/신학적/문학적 배경 중 일부만 포함

**해결**:
- 역사적/신학적/문학적 배경을 **모두** 통합
- 원어 분석 포함
- 최소 300자 확보

### 4. 특별 설명 단조로움
**문제**: special_explanations가 1개만 있거나 모두 같은 관점

**원인**:
- 다양한 관점을 생각하지 못함

**해결**:
- 최소 2-3개 작성
- 다양한 관점 사용:
  - 문법 (히브리어/그리스어 문법)
  - 신학 (신학적 해석)
  - 역사 (역사적 배경)
  - 문학 (문학적 기법)

---

## 🎯 분석 시 필수 체크

### 분석 전
1. **템플릿 확인**: `bible-analysis/templates/ANALYSIS_TEMPLATE.md`
2. **기준 구절 확인**: 창세기 1:2

### 분석 중
1. **체크리스트 따르기**: 누락 방지
2. **원어 필수**: 모든 단어에 히브리어/그리스어 포함

### 분석 후
1. **품질 평가**: `evaluate-verse-quality.ts` 실행
2. **90점 이상 확인**: 미만이면 재분석
3. **DB 저장**: 90점 이상만

---

## 📊 품질 통계 (목표)

| 항목 | 목표 | 현재 상태 |
|------|------|-----------|
| **평균 점수** | 90점 이상 | 추적 중 |
| **A 등급 비율** | 80% 이상 | 추적 중 |
| **누락 구절** | 0개 | 추적 중 |
| **원어 포함률** | 100% | 추적 중 |

---

## 🔗 관련 문서

- **표준 템플릿**: `bible-analysis/templates/ANALYSIS_TEMPLATE.md`
- **빠른 참조**: `bible-analysis/templates/QUALITY_STANDARD_SUMMARY.md`
- **워크플로우**: `ANALYSIS_WORKFLOWS.md`
- **빠른 참조**: `CLAUDE.md`

---

**작성**: Bible Analysis Team  
**최종 수정**: 2025-10-17
