# 성경 구절 고품질 분석 템플릿

## 목적
이 문서는 구약 성경 23,145절을 일관된 고품질로 분석하기 위한 템플릿입니다.
Claude Code가 매 세션마다 이 문서를 읽어 동일한 품질을 유지합니다.

## 품질 기준 (창세기 1:2 수준)
- 자연스러운 한국어 번역 (직역, 관사 제거)
- 히브리어 원어 해석 포함
- 신학적/문법적/문화적 특별 설명
- IPA 발음 + 한국어 발음 제공
- 문맥 설명 200자 이상

## 분석 템플릿

### 1. 문장 구조 분석
NIV 원문을 의미 단위로 분리하고 각각:
- `sequence_order`: 순서 번호
- `semantic_classification`: 의미적 분류 (선언/명령/결과/평가/분리/명명/시간 등)
- `original_text`: 영어 원문
- `korean_translation`: 자연스러운 한국어 직역
- `grammatical_explanation`: 문법 설명

**예시**:
```json
{
  "sequence_order": 1,
  "semantic_classification": "상태 묘사",
  "original_text": "Now the earth was formless and empty",
  "korean_translation": "이제 땅은 형태가 없고 비어있었다",
  "grammatical_explanation": "주어(the earth) + be동사(was) + 형용사구(formless and empty)"
}
```

### 2. 주요 단어 분석
불용어(the, was, and, of, over) 제외, 3글자 이상 주요 단어:
- `word`: 영어 단어
- `ipa_pronunciation`: `[IPA]` 형식
- `korean_pronunciation`: 한글 발음
- `part_of_speech`: 품사
- `definition_korean`: 히브리어 원어 포함 설명
- `usage_note`: "Genesis X:Y에서 사용됨"
- `frequency`: 1

**예시**:
```json
{
  "word": "formless",
  "ipa_pronunciation": "[ˈfɔːrmləs]",
  "korean_pronunciation": "폼리스",
  "part_of_speech": "형용사",
  "definition_korean": "형태가 없는, 혼돈한 (히브리어 \"토후\"로, 황폐하고 텅 빈 상태를 의미)",
  "usage_note": "Genesis 1:2에서 사용됨",
  "frequency": 1
}
```

### 3. 문맥 설명
200자 이상, 다음 포함:
- 이전 구절과의 연결
- 히브리어 원어 설명
- 신학적 의미
- 역사적/문화적 배경
- 문학적 특징

### 4. 한국어 번역
자연스러운 한국어 직역:
- 관사(the, a, an) 제거
- 접속사 자연스럽게 변환
- 동사 시제 명확히
- 전체 흐름 자연스럽게

**잘못된 예**: "이제 the 땅 이었다 형태가 없고"
**올바른 예**: "이제 땅은 형태가 없고 비어있었다"

### 5. 특별 설명
2-3개, 다음 중 선택:
- 히브리어 문법
- 신학적 의미
- 문화적 배경
- 문학적 구조
- 고대 우주론
- 패턴/반복 구조

## JSON 출력 형식

```json
[
  {
    "verse_id": 16707,
    "reference": "Genesis 1:3",
    "sentence_structures": [...],
    "vocabulary": [...],
    "contextual_explanation": "...",
    "korean_translation": "...",
    "special_explanations": [...]
  }
]
```

## 작업 흐름

1. NIV 원문 35개 구절 수신
2. 각 구절을 위 템플릿대로 분석
3. TypeScript 저장 스크립트 생성 (분석 데이터 포함)
4. 스크립트 실행하여 Supabase에 직접 저장
5. 진행 상황 파일(.ot-progress.json) 업데이트
6. 다음 35개 자동 진행

**중요**: 분석 결과를 사용자에게 출력하지 않고, 바로 TypeScript 스크립트로 만들어 데이터베이스에 저장합니다.

## 주의사항

- 이모지 사용 금지
- 플레이스홀더 금지 (모든 필드 완성)
- 일관된 품질 유지
- 히브리어 원어 반드시 포함
- 200자 이상 문맥 설명

## 진행 상황

현재 위치는 `.ot-progress.json` 파일에 저장됨.
다음 배치 시작 시 이 파일을 읽어서 이어서 진행.
