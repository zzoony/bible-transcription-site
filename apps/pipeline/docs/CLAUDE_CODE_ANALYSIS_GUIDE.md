# Claude Code 기반 성경 구절 분석 가이드

이 가이드는 Claude API 대신 Claude Code를 사용하여 성경 구절을 분석하는 방법을 설명합니다.

## 왜 Claude Code를 사용하나요?

- **비용 절감**: Claude API 비용 없이 subscription만으로 사용 가능
- **품질 확인**: 실시간으로 분석 결과를 확인하고 수정 가능
- **유연성**: 중단/재개가 자유롭고, 에러 발생 시 즉시 대응 가능

## 분석 워크플로우

### 1단계: 단일 구절 분석

```
사용자: "Philippians 1:1 분석해서 .md 파일로 저장해줘"

Claude Code:
1. DB에서 NIV 원문 조회
2. CLAUDE.md 규칙에 따라 분석
3. claudedocs/[book]_[chapter]_[verse]_analysis.md로 저장
4. 사용자 확인 대기
```

**예시:**
```bash
# Claude Code에 요청:
"Philippians 3:1 분석해서 claudedocs에 저장해줘"
```

### 2단계: 분석 결과 확인

Claude Code가 생성한 `.md` 파일을 확인:
- 문장 구조 분석 (모든 문장/절 포함 여부)
- 주요 단어 (IPA + 한국어 발음)
- 문맥 설명
- 한국어 번역
- 특별 설명

### 3단계: Supabase 저장 (확인 후)

분석이 만족스러우면:

```
사용자: "이 분석 결과를 Supabase에 저장해줘"

Claude Code:
1. .md 파일을 파싱하여 JSON 변환
2. save-analysis-to-db.ts 스크립트 실행
3. Supabase에 저장 (sentence_structures, vocabulary, etc.)
4. 저장 결과 검증
```

## 배치 분석 (책 전체)

### 소량 (1-10 구절)

```
사용자: "Philippians 1:1-5 분석해서 DB에 저장해줘"

Claude Code:
1. TodoWrite로 5개 구절 작업 등록
2. 각 구절마다:
   - NIV 조회
   - 분석 수행
   - .md 파일 생성
   - DB 저장
   - Todo 완료 표시
3. 완료 보고
```

### 대량 (책 전체)

```
사용자: "Philippians 전체를 분석해줘. TodoWrite로 관리하고 자동으로 진행해줘."

Claude Code:
1. 전체 구절 목록 조회 (예: 104개 구절)
2. TodoWrite로 전체 작업 등록
3. 10구절마다 진행상황 보고
4. 각 구절:
   - 분석
   - .md 파일 저장 (선택)
   - DB 저장
5. 검증 및 완료 보고
```

## 스크립트 활용

### 1. NIV 원문 조회

```typescript
// scripts/fetch-verse.ts 사용
npx tsx scripts/fetch-verse.ts "Philippians 3:1"
```

### 2. 분석 결과 저장

```typescript
// scripts/save-analysis-to-db.ts
// Claude Code가 생성한 JSON을 DB에 저장
```

### 3. 검증

```typescript
// scripts/verify-completeness.ts --book="Philippians"
// 모든 구절이 완전히 분석되었는지 확인
```

## 분석 규칙 (CLAUDE.md 참조)

### 필수 요소

1. **문장 구조 분석**: NIV 원문의 모든 문장/절 포함
2. **주요 단어**: IPA + 한국어 발음 표 형식
3. **문맥 설명**: 역사적/신학적/문학적 통합 서술
4. **한국어 번역**: 자연스러운 번역 1개
5. **특별 설명**: 문법적/해석적 특이점

### 출력 형식

```markdown
# [Book] [Chapter]:[Verse] (NIV)

**원문:** "[NIV text]"

## 문장 구조 분석
1. "..." - 분류
   - 의미: ...
   - 문법: ...
   - 번역: ...

## 주요 단어들
| 영어 | IPA | 한국어 발음 | 의미 |
|------|-----|-------------|------|

## 문맥 설명
...

## 한국어 번역
...

## 특별 설명
...
```

## 예제 파일

참고: `claudedocs/philippians_3_1_analysis.md`

## 자주 묻는 질문

**Q: API 스크립트는 어떻게 하나요?**
A: 더 이상 사용하지 않습니다. 필요시 참고용으로 `scripts/archived/` 디렉토리로 이동.

**Q: 대량 분석은 얼마나 걸리나요?**
A: 책 크기에 따라 다름. Philippians(104구절) 기준 약 2-3시간 예상.

**Q: 중단했다가 재개할 수 있나요?**
A: 네, Claude Code는 이미 분석된 구절을 건너뛰고 누락된 것만 처리 가능.

**Q: 품질은 어떤가요?**
A: Claude Code는 대화형이므로 실시간 피드백으로 품질 향상 가능. API 방식보다 나을 수 있음.

## 다음 단계

1. Philippians 3:1 예제 확인
2. 소량 구절(3-5개)로 테스트
3. 만족스러우면 책 전체로 확대
4. 다른 책들로 확장
