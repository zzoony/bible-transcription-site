# 성경 분석 표준 템플릿

이 문서는 창세기 1:2의 우수한 분석 사례를 기준으로 만들어진 표준 템플릿입니다.

## 템플릿 기준: 창세기 1:2

### NIV 원문
```
Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.
```

### 완벽한 분석의 기준

#### 1. 문장 구조 분석 (sentence_structures)
**최소 기준**: NIV 원문의 모든 문장/절을 빠짐없이 포함

**창세기 1:2 예시 (3개 구조)**:
```typescript
[
  {
    sequence_order: 1,
    semantic_classification: "상태 묘사",
    original_text: "Now the earth was formless and empty",
    korean_translation: "이제 땅은 형태가 없고 비어있었다",
    grammatical_explanation: "주어(the earth) + be동사(was) + 형용사구(formless and empty). 'and'로 연결된 두 형용사가 땅의 초기 상태를 강조하여 묘사함"
  },
  {
    sequence_order: 2,
    semantic_classification: "위치 서술",
    original_text: "darkness was over the surface of the deep",
    korean_translation: "어둠이 깊은 곳의 표면 위에 있었다",
    grammatical_explanation: "주어(darkness) + be동사(was) + 전치사구(over the surface of the deep). 전치사 'over'가 어둠의 공간적 위치를 나타냄"
  },
  {
    sequence_order: 3,
    semantic_classification: "동작 묘사",
    original_text: "and the Spirit of God was hovering over the waters",
    korean_translation: "그리고 하나님의 영은 물 위를 운행하고 있었다",
    grammatical_explanation: "주어(the Spirit of God) + be동사(was) + 현재분사(hovering) + 전치사구(over the waters). 과거진행형으로 하나님의 영의 지속적인 활동을 표현함"
  }
]
```

**필수 요소**:
- ✅ `semantic_classification`: 의미적 분류 (상태 묘사, 위치 서술, 동작 묘사 등)
- ✅ `original_text`: 영어 원문 그대로
- ✅ `korean_translation`: 해당 구조의 한글 번역
- ✅ `grammatical_explanation`: 문법적 설명 (주어, 동사, 수식어 등 명시)
- ✅ `sequence_order`: 순서 (1부터 시작)

#### 2. 주요 단어 (vocabulary)
**최소 기준**: 구절의 핵심 단어 7-10개 이상

**창세기 1:2 예시 (9개 단어)**:
```typescript
[
  {
    word: "earth",
    ipa_pronunciation: "[ɜːrθ]",
    korean_pronunciation: "어스",
    part_of_speech: "명사",
    definition_korean: "땅, 지구 (히브리어 \"에레츠\"로, 창조된 세계 전체를 의미하며, 하늘과 대비되는 물질 세계를 나타냄)",
    usage_note: "Genesis 1:2에서 사용됨"
  },
  {
    word: "formless",
    ipa_pronunciation: "[ˈfɔːrmləs]",
    korean_pronunciation: "폼리스",
    part_of_speech: "형용사",
    definition_korean: "형태가 없는, 혼돈한 (히브리어 \"토후\"로, 황폐하고 텅 빈 상태를 의미하며, 창조 이전의 무질서한 상태를 나타냄)",
    usage_note: "Genesis 1:2에서 사용됨"
  },
  // ... 7개 더
]
```

**필수 요소**:
- ✅ `word`: 영어 단어
- ✅ `ipa_pronunciation`: IPA 발음 기호 (대괄호 포함)
- ✅ `korean_pronunciation`: 한국어 발음
- ✅ `part_of_speech`: 품사
- ✅ `definition_korean`: 한국어 정의 + **히브리어/그리스어 원어 설명 포함**
- ✅ `usage_note`: 사용된 구절 표시

**핵심**: 히브리어/그리스어 원어와 그 의미를 반드시 포함!

#### 3. 문맥 설명 (contextual_explanations)
**최소 기준**: 역사적/신학적/문학적 배경을 통합한 상세 설명 (300자 이상)

**창세기 1:2 예시**:
```typescript
{
  integrated_explanation: `Genesis 1:2는 창조 이전의 혼돈 상태를 세밀하게 묘사하는 구절이다. 이 구절은 Genesis 1:1의 "태초에 하나님이 천지를 창조하시니라"는 선언 직후의 상태를 설명하며, 하나님의 창조 행위가 아직 완성되지 않은 초기 단계를 보여준다.

히브리어 "토후 와 보후"(혼돈하고 공허하며)는 형태도 없고 내용물도 없는 완전한 무질서 상태를 나타낸다. 이 표현은 히브리어의 중첩 수사법을 사용하여 혼돈의 완전성을 강조한다. "흑암"(호셰크)은 빛이 창조되기 전의 상태를 나타내며, "깊음"(테홈)은 고대 근동 문화에서 혼돈의 상징이었던 원시 바다를 가리킨다.

그러나 창세기는 이러한 혼돈 위에 "하나님의 영"(루아흐 엘로힘)이 "운행하시니라"(라하프)고 기록하여, 하나님이 혼돈을 통제하고 질서 있는 창조를 준비하고 계심을 보여준다. "운행하다"는 히브리어 동사는 새가 둥지 위를 날개를 펴고 맴도는 이미지를 연상시키며(신명기 32:11 참조), 하나님의 보호하시고 돌보시는 임재를 나타낸다. 이는 창조가 단순한 물리적 행위가 아니라 하나님의 사랑과 돌보심이 담긴 행위임을 암시한다.`
}
```

**필수 요소**:
- ✅ 역사적 배경 포함
- ✅ 신학적 의미 설명
- ✅ 문학적 특징 (수사법, 구조 등)
- ✅ 히브리어/그리스어 원어 분석
- ✅ 관련 구절 참조 (있는 경우)

#### 4. 한국어 번역 (korean_translations)
**최소 기준**: 자연스러운 하나의 통합 번역

**창세기 1:2 예시**:
```typescript
{
  natural_translation: "이제 땅은 형태가 없고 비어있었으며, 어둠이 깊은 곳의 표면 위에 있었고, 하나님의 영은 물 위를 운행하고 있었다."
}
```

**필수 요소**:
- ✅ 직역과 의역을 조화시킨 자연스러운 번역
- ✅ 원문의 뉘앙스 보존
- ✅ 한국어로 읽기 쉬운 문장 구조

#### 5. 특별 설명 (special_explanations)
**최소 기준**: 문법적/해석적 특이점 2-3개

**창세기 1:2 예시 (3개)**:
```typescript
[
  {
    explanation_type: "히브리어 문법",
    content: "\"토후 와 보hu\"는 히브리어의 중첩 표현(hendiadys)으로, 두 단어를 사용하여 하나의 완전한 개념을 강조한다. 이는 단순히 \"비어있다\"가 아니라 \"완전히, 철저히 혼돈되고 비어있다\"는 의미를 전달한다."
  },
  {
    explanation_type: "신학적 해석",
    content: "\"하나님의 영\"(루아흐 엘로힘)은 삼위일체의 성령을 암시하며, 창조 사역에서 성령의 능동적 역할을 보여준다. 신약성경의 관점에서 보면, 창조는 성부, 성자, 성령의 협력적 사역임을 시사한다."
  },
  {
    explanation_type: "문학적 기교",
    content: "이 구절은 대조법을 사용한다: 혼돈(토후 와 보후, 흑암, 깊음)과 질서(하나님의 영의 운행). 이 대조는 창세기 1장 전체의 주제인 \"혼돈에서 질서로\"를 예고한다."
  }
]
```

**필수 요소**:
- ✅ `explanation_type`: 설명 유형 (히브리어 문법, 신학적 해석, 문학적 기교 등)
- ✅ `content`: 구체적인 설명 내용

---

## 데이터베이스 스키마

### 테이블 구조
```typescript
// 1. verses 테이블 (기본 구절 정보)
{
  id: number,
  reference: string,        // "Genesis 1:2"
  niv_text: string,        // NIV 영어 원문
  book_id: number,
  chapter_number: number,
  verse_number: number
}

// 2. sentence_structures 테이블 (문장 구조)
{
  id: number,
  verse_id: number,        // FK to verses
  sequence_order: number,  // 1, 2, 3, ...
  semantic_classification: string,
  original_text: string,
  korean_translation: string,
  grammatical_explanation: string
}

// 3. vocabulary 테이블 (주요 단어)
{
  id: number,
  verse_id: number,        // FK to verses
  word: string,
  ipa_pronunciation: string,
  korean_pronunciation: string,
  part_of_speech: string,
  definition_korean: string,  // 히브리어/그리스어 원어 포함!
  usage_note: string
}

// 4. contextual_explanations 테이블 (문맥 설명)
{
  id: number,
  verse_id: number,        // FK to verses
  integrated_explanation: string,  // 통합된 상세 설명
  cross_references: string[]?      // 관련 구절 (옵션)
}

// 5. korean_translations 테이블 (한국어 번역)
{
  id: number,
  verse_id: number,        // FK to verses
  natural_translation: string,
  translation_notes: string?
}

// 6. special_explanations 테이블 (특별 설명)
{
  id: number,
  verse_id: number,        // FK to verses
  explanation_type: string,
  content: string,
  examples: any[]?
}
```

---

## 품질 체크리스트

새로운 구절을 분석할 때 이 체크리스트를 따르세요:

### 1. 문장 구조 (sentence_structures)
- [ ] NIV 원문의 모든 문장/절 포함
- [ ] 각 구조마다 `semantic_classification` 지정
- [ ] 각 구조마다 `grammatical_explanation` 작성
- [ ] `sequence_order` 순서대로 정렬

### 2. 주요 단어 (vocabulary)
- [ ] 최소 7-10개 핵심 단어 선정
- [ ] 모든 단어에 IPA 발음 기호 포함
- [ ] 모든 단어에 한국어 발음 포함
- [ ] **모든 단어에 히브리어/그리스어 원어 설명 포함**
- [ ] 품사 정확히 표시

### 3. 문맥 설명 (contextual_explanations)
- [ ] 300자 이상의 상세 설명
- [ ] 역사적 배경 포함
- [ ] 신학적 의미 설명
- [ ] 문학적 특징 언급
- [ ] 히브리어/그리스어 원어 분석 포함

### 4. 한국어 번역 (korean_translations)
- [ ] 자연스러운 한국어 문장
- [ ] 원문의 의미 정확히 반영
- [ ] 직역과 의역의 조화

### 5. 특별 설명 (special_explanations)
- [ ] 최소 2-3개의 특별 설명
- [ ] 다양한 `explanation_type` 사용
- [ ] 구체적이고 유익한 내용

---

## 평가 기준

분석의 품질을 평가할 때 다음 기준을 사용합니다:

### 우수 (90-100점)
- 모든 문장/절 빠짐없이 분석
- 주요 단어 10개 이상, 모두 히브리어/그리스어 원어 포함
- 문맥 설명 500자 이상, 깊이 있는 신학적/역사적 분석
- 자연스러운 한국어 번역
- 특별 설명 3개 이상, 다양한 관점

### 양호 (70-89점)
- 대부분의 문장/절 분석 (1-2개 누락 가능)
- 주요 단어 7-9개, 대부분 히브리어/그리스어 원어 포함
- 문맥 설명 300-500자, 적절한 배경 설명
- 이해하기 쉬운 한국어 번역
- 특별 설명 2-3개

### 보통 (50-69점)
- 주요 문장만 분석 (일부 누락)
- 주요 단어 5-6개, 일부만 원어 포함
- 문맥 설명 200-300자, 기본적인 설명
- 기계적인 번역
- 특별 설명 1-2개

### 미흡 (50점 미만)
- 문장 구조 대부분 누락
- 주요 단어 5개 미만
- 문맥 설명 200자 미만
- 번역 누락 또는 부정확
- 특별 설명 없음

---

## 예시: 창세기 1:2 완전 분석

### 출력 형식 (웹사이트 표시용)

```markdown
# Genesis 1:2 (NIV)

**원문:** "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters."

## 문장 구조 분석

1. **상태 묘사**: "Now the earth was formless and empty"
   - **번역**: 이제 땅은 형태가 없고 비어있었다
   - **문법**: 주어(the earth) + be동사(was) + 형용사구(formless and empty). 'and'로 연결된 두 형용사가 땅의 초기 상태를 강조하여 묘사함

2. **위치 서술**: "darkness was over the surface of the deep"
   - **번역**: 어둠이 깊은 곳의 표면 위에 있었다
   - **문법**: 주어(darkness) + be동사(was) + 전치사구(over the surface of the deep). 전치사 'over'가 어둠의 공간적 위치를 나타냄

3. **동작 묘사**: "and the Spirit of God was hovering over the waters"
   - **번역**: 그리고 하나님의 영은 물 위를 운행하고 있었다
   - **문법**: 주어(the Spirit of God) + be동사(was) + 현재분사(hovering) + 전치사구(over the waters). 과거진행형으로 하나님의 영의 지속적인 활동을 표현함

## 주요 단어들

| 단어 | 발음 (IPA) | 한국어 발음 | 품사 | 의미 |
|------|------------|-------------|------|------|
| earth | [ɜːrθ] | 어스 | 명사 | 땅, 지구 (히브리어 "에레츠"로, 창조된 세계 전체를 의미하며, 하늘과 대비되는 물질 세계를 나타냄) |
| formless | [ˈfɔːrmləs] | 폼리스 | 형용사 | 형태가 없는, 혼돈한 (히브리어 "토후"로, 황폐하고 텅 빈 상태를 의미하며, 창조 이전의 무질서한 상태를 나타냄) |
| empty | [ˈɛmpti] | 엠프티 | 형용사 | 비어있는, 공허한 (히브리어 "보후"로, 아무것도 없는 텅 빈 상태를 의미하며, 토후와 함께 창조 전 혼돈을 표현) |
| darkness | [ˈdɑːrknəs] | 다크니스 | 명사 | 어둠, 흑암 (히브리어 "호셰크"로, 빛이 없는 상태를 의미하며, 하나님의 창조 이전의 상태를 나타냄) |
| surface | [ˈsɜːrfɪs] | 서피스 | 명사 | 표면, 겉면 (어떤 것의 바깥쪽 면을 의미하며, 여기서는 깊은 물의 윗면을 가리킴) |
| deep | [diːp] | 딥 | 명사 | 깊은 곳, 심연 (히브리어 "테홈"으로, 깊은 물 또는 원시 바다를 의미하며, 고대 근동 신화의 혼돈의 물을 연상시킴) |
| spirit | [ˈspɪrɪt] | 스피릿 | 명사 | 영, 바람 (히브리어 "루아흐"로, 하나님의 영, 바람, 호흡을 모두 의미할 수 있으며, 하나님의 창조적 능력을 나타냄) |
| hovering | [ˈhʌvərɪŋ] | 호버링 | 동사(분사) | 운행하다, 맴돌다 (히브리어 "라하프"로, 새가 날개를 펴고 맴도는 모습을 연상시키며, 하나님의 보호하고 창조하는 임재를 나타냄) |
| waters | [ˈwɔːtərz] | 워터스 | 명사(복수) | 물들 (히브리어 "마임"의 복수형으로, 창조 전 원시 상태의 물을 의미하며, 생명의 근원이자 혼돈의 상징) |

## 문맥 설명

Genesis 1:2는 창조 이전의 혼돈 상태를 세밀하게 묘사하는 구절이다. 이 구절은 Genesis 1:1의 "태초에 하나님이 천지를 창조하시니라"는 선언 직후의 상태를 설명하며, 하나님의 창조 행위가 아직 완성되지 않은 초기 단계를 보여준다.

히브리어 "토후 와 보후"(혼돈하고 공허하며)는 형태도 없고 내용물도 없는 완전한 무질서 상태를 나타낸다. 이 표현은 히브리어의 중첩 수사법을 사용하여 혼돈의 완전성을 강조한다. "흑암"(호셰크)은 빛이 창조되기 전의 상태를 나타내며, "깊음"(테홈)은 고대 근동 문화에서 혼돈의 상징이었던 원시 바다를 가리킨다.

그러나 창세기는 이러한 혼돈 위에 "하나님의 영"(루아흐 엘로힘)이 "운행하시니라"(라하프)고 기록하여, 하나님이 혼돈을 통제하고 질서 있는 창조를 준비하고 계심을 보여준다. "운행하다"는 히브리어 동사는 새가 둥지 위를 날개를 펴고 맴도는 이미지를 연상시키며(신명기 32:11 참조), 하나님의 보호하시고 돌보시는 임재를 나타낸다. 이는 창조가 단순한 물리적 행위가 아니라 하나님의 사랑과 돌보심이 담긴 행위임을 암시한다.

## 한국어 번역

이제 땅은 형태가 없고 비어있었으며, 어둠이 깊은 곳의 표면 위에 있었고, 하나님의 영은 물 위를 운행하고 있었다.

## 특별 설명

### 히브리어 문법
"토후 와 보hu"는 히브리어의 중첩 표현(hendiadys)으로, 두 단어를 사용하여 하나의 완전한 개념을 강조한다. 이는 단순히 "비어있다"가 아니라 "완전히, 철저히 혼돈되고 비어있다"는 의미를 전달한다.

### 신학적 해석
"하나님의 영"(루아흐 엘로힘)은 삼위일체의 성령을 암시하며, 창조 사역에서 성령의 능동적 역할을 보여준다. 신약성경의 관점에서 보면, 창조는 성부, 성자, 성령의 협력적 사역임을 시사한다.

### 문학적 기교
이 구절은 대조법을 사용한다: 혼돈(토후 와 보후, 흑암, 깊음)과 질서(하나님의 영의 운행). 이 대조는 창세기 1장 전체의 주제인 "혼돈에서 질서로"를 예고한다.
```

---

## 사용 방법

1. **분석 시작 전**: 이 템플릿의 체크리스트를 확인
2. **분석 중**: 각 섹션별 필수 요소 충족
3. **분석 완료 후**: 평가 기준으로 자체 점검
4. **데이터 저장**: 데이터베이스 스키마에 맞게 저장
5. **품질 검증**: 웹사이트에서 렌더링 확인

이 템플릿을 따르면 창세기 1:2 수준의 우수한 분석을 일관되게 생성할 수 있습니다.
