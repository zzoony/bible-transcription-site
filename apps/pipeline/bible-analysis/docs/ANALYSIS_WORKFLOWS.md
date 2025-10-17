# 성경 분석 워크플로우

**작성일**: 2025-10-17
**관련 문서**: SINGLE_VERSE_ANALYSIS_METHODOLOGY.md, PARALLEL_ANALYSIS_STRATEGY.md

---

## 📋 목차

1. [analyzer-app 사용법](#analyzer-app-사용법)
2. [단일 구절 분석](#단일-구절-분석)
3. [대량 자동 분석](#대량-자동-분석)
4. [문제 해결 전략](#문제-해결-전략)

---

## 🎯 analyzer-app 사용법

### 개요
- **위치**: `apps/pipeline/bible-analysis/analyzer-app`
- **기능**: 66권 성경 자동 분석 (병렬 처리)
- **프롬프트**: `ANALYZE_VERSE_PROMPT_COMPACT.txt` (94줄)

### 실행
```bash
cd apps/pipeline/bible-analysis/analyzer-app
npm start
```

### 사용 단계
1. **책 선택**: 대시보드에서 분석할 책 클릭 (복수 선택 가능)
2. **분석 시작**: "🚀 자동 분석 시작" 버튼 클릭
3. **진행 모니터링**: 실시간 진행도 확인
4. **완료 확인**: JSON 파일 생성 확인

### 설정
```javascript
// src/renderer.js
const BATCH_SIZE = 10;  // 동시 처리 구절 수
const maxWaitTime = 300 * 1000;  // 타임아웃 (5분)
```

### 출력
```
✅ 완료: analysis-json/Romans_16_7.json
📊 요약: 문장 2개, 단어 8개, 문맥 350자
```

### "없음" 절 처리
NIV에 존재하지 않는 절(예: 로마서 16:24)은 자동으로 처리:
```json
{
  "verse_reference": "Romans 16:24",
  "niv_text": "없음",
  "testament": 2,
  "sentence_structures": [],
  "vocabulary": [],
  ...
}
```

---

## 🔍 단일 구절 분석

### 방법론
**상세 문서**: `SINGLE_VERSE_ANALYSIS_METHODOLOGY.md`

### 핵심 원칙
- ✅ API 사용 안 함 (Claude Code 토큰으로 직접 분석)
- ✅ NIV JSON 직접 사용 (`source-data/NIV_Bible.json`)
- ✅ 품질 관문: 90점 이상만 DB 저장
- ✅ 병렬 실행 준비 (함수 모듈화)

### 6단계 워크플로우

#### 1단계: 기존 분석 조회
```typescript
const existing = await fetchExistingAnalysis("1 Corinthians 13:1");
```
- Supabase에서 현재 분석 데이터 조회
- 모든 관련 테이블 포함 (sentence_structures, vocabulary 등)

#### 2단계: 품질 평가
```typescript
const score = evaluateQuality(existing);
// 90점 이상이면 재분석 불필요
```
**평가 기준** (100점 만점):
- 문장 구조 (30점)
- 주요 단어 (25점) - 히브리어/그리스어 원어 필수
- 문맥 설명 (20점) - 300자 이상
- 한국어 번역 (15점)
- 특별 설명 (10점)

#### 3단계: NIV 원문 추출
```typescript
const nivText = getNIVText("1 Corinthians 13:1");
// NIV_Bible.json에서 직접 추출
```
- JSON 구조: `nivBible["Book"]["Chapter"]["Verse"]`
- 외부 API 사용 안 함

#### 4단계: 분석 수행 ⭐
**Claude가 창세기 1:2 템플릿 기준으로 직접 작성**

필수 생성 항목:
1. **문장 구조** (3-5개)
   - semantic_classification, original_text, korean_translation
   - grammatical_explanation (30자 이상, 주어/동사/수식어 명시)

2. **주요 단어** (7-10개)
   - word, ipa_pronunciation, korean_pronunciation
   - part_of_speech, definition_korean
   - **⚠️ 필수**: definition_korean에 히브리어/그리스어 원어 포함!

3. **문맥 설명** (300-500자)
   - 역사적/신학적/문학적 배경 통합
   - 원어 분석 포함

4. **한국어 번역** (자연스러운 통합 번역)

5. **특별 설명** (2-3개)
   - 다양한 관점 (문법, 신학, 역사, 문학 등)

#### 5단계: 재평가
```typescript
const newScore = evaluateQuality(newAnalysis);
// 90점 미만이면 저장 건너뛰기
```

#### 6단계: DB 저장
```typescript
await saveToDatabase(newAnalysis);
```
- 기존 데이터 삭제 → 새 데이터 삽입
- 트랜잭션 처리 및 에러 로깅

### 실행 방법
```bash
# 단일 구절 분석
cd apps/pipeline
npx ts-node bible-analysis/core/analyze-single-verse.ts "1 Corinthians 13:1"

# 프로그래밍 방식
import { analyzeSingleVerse } from './bible-analysis/core/analyze-single-verse';
await analyzeSingleVerse("1 Corinthians 13:1");
```

---

## 🚀 대량 자동 분석

### 실행 원칙
1. **완전 자동 모드**: 사용자 확인 없이 모든 단계를 스스로 판단하여 실행
2. **오류 복구**: 실패 시 자동으로 3회 재시도 후 다음으로 진행
3. **중단 없음**: 한 책이 실패해도 나머지 계속 진행
4. **주기적 저장**: 10구절마다 진행 상황 저장
5. **검증 필수**: 각 책 완료 후 반드시 검증
6. **로그 기록**: 모든 작업을 logs/ 디렉토리에 기록

### 6단계 자동화 워크플로우

#### 1단계: 전체 계획 수립 (자동)
- 책을 크기별로 3그룹 분류:
  - 소형: 1-100구절
  - 중형: 101-500구절
  - 대형: 500+ 구절
- 각 그룹별 예상 소요 시간 계산
- TodoWrite로 전체 작업 계획 생성

#### 2단계: NIV 텍스트 확보 (자동)
- Agent를 사용하여 NIV 텍스트 수집
- verses 테이블에 일괄 삽입
- 삽입 성공 여부 확인

#### 3단계: 소형 책부터 순차 분석 (자동)
각 책마다:
- `scripts/analyze-[bookname].ts` 생성 (갈라디아서 스크립트 기반)
- `scripts/verify-[bookname].ts` 생성
- `scripts/fix-[bookname]-duplicates.ts` 생성
- 백그라운드로 분석 실행
- 주기적으로 진행 상황 모니터링
- 완료 또는 타임아웃(책당 최대 4시간) 확인
- 검증 스크립트 실행
- 중복 제거 (있을 경우)
- 누락 구절 재시도 (최대 3회)
- 다음 책으로 진행

#### 4단계: 중형/대형 책 처리 (자동)
- 중형 책들 순차 처리 (같은 방식)
- 대형 책들 순차 처리 (같은 방식)
- 대형 책은 배치를 50-100구절씩 나눠서 처리 고려

#### 5단계: 최종 검증 (자동)
- 모든 책의 완성도 확인
- 전체 중복 검사
- 전체 품질 검사
- npm run build 테스트
- 최종 통계 생성

#### 6단계: 정리 및 보고 (자동)
- 임시 파일 삭제
- 로그 파일 정리
- 최종 보고서 생성 (`docs/[TESTAMENT]_COMPLETION_REPORT.md`)

### 필수 스크립트 템플릿

#### analyze-[book].ts
```typescript
// scripts/analyze-galatians.ts를 복사하여 사용
// 변경사항:
// 1. 책 이름 변경 (Galatians → [BookName])
// 2. progress 파일명 변경
// 3. 로그 파일명 변경
// 4. 중복 방지 로직 포함 (이미 분석된 구절 건너뛰기)
// 5. 3-5초 rate limiting
```

#### verify-[book].ts
```typescript
// scripts/verify-galatians.ts를 복사하여 사용
// 변경사항:
// 1. 책 이름 변경
// 2. ilike('reference', 'Galatians%') → ilike('reference', '[BookName]%')
```

#### retry-missing-[book].ts
```typescript
// scripts/retry-missing.ts를 복사하여 사용
// 변경사항:
// 1. 책 이름 변경
// 2. exponential backoff (5s → 10s → 20s) 포함
// 3. 최대 3회 재시도
```

### 성공 기준
- ✅ 모든 책 100% 분석 완료
- ✅ 중복 데이터 0건
- ✅ 데이터 품질 문제 0건
- ✅ npm run build 성공
- ✅ 모든 책 웹 UI에서 검색 가능

---

## 🛠️ 문제 해결 전략

### API Rate Limit
**증상**: 429 Too Many Requests

**해결**:
- 각 구절마다 5초 대기
- 오버로드 시 exponential backoff (5s → 10s → 20s)
- 최대 3회 재시도

```typescript
async function analyzeWithRateLimit(verse: Verse, retryCount = 0) {
  try {
    await analyze(verse);
  } catch (error) {
    if (error.status === 429 && retryCount < 3) {
      const waitTime = 5000 * Math.pow(2, retryCount);
      await sleep(waitTime);
      return analyzeWithRateLimit(verse, retryCount + 1);
    }
    throw error;
  }
}
```

### 중복 데이터
**증상**: 같은 구절이 여러 번 분석됨

**해결**:
- 각 책 완료 후 자동으로 fix-duplicates 스크립트 실행
- 중복 제거 후 재검증

```bash
# 중복 확인
npx ts-node scripts/verify-galatians.ts

# 중복 제거
npx ts-node scripts/fix-galatians-duplicates.ts
```

### 누락 구절
**증상**: 일부 구절이 분석되지 않음

**해결**:
- verify 스크립트로 누락 확인
- retry-missing 스크립트로 자동 재시도
- 3회 실패 시 별도 리스트에 기록하고 계속 진행

```bash
# 누락 확인
npx ts-node scripts/verify-galatians.ts

# 누락 구절 재시도
npx ts-node scripts/retry-missing-galatians.ts
```

### 프로세스 중단
**증상**: analyzer-app이 응답 없음

**해결**:
- 각 책마다 백그라운드 실행
- 4시간 타임아웃 설정
- 타임아웃 시 현재 상태 저장 후 다음 책으로

```javascript
// renderer.js
const maxWaitTime = 4 * 60 * 60 * 1000;  // 4시간
```

### analyzer-app 타임아웃
**증상**: JSON 파일이 생성되지 않음

**원인 분석**:
1. 프롬프트가 너무 복잡 (205줄 → 94줄로 개선)
2. Haiku 모델이 Write 도구를 건너뜀
3. Claude가 장황한 설명을 출력

**해결**:
```bash
# 1. COMPACT 프롬프트 사용 확인
cat bible-analysis/ANALYZE_VERSE_PROMPT_COMPACT.txt

# 2. renderer.js 확인
grep "PROMPT_PATH" bible-analysis/analyzer-app/src/renderer.js
# → ANALYZE_VERSE_PROMPT_COMPACT.txt 사용해야 함

# 3. 실패한 구절 재분석
# analyzer-app에서 "🔄 실패한 것만 재분석" 버튼 클릭
```

**참고 문서**: `docs/PROMPT_OPTIMIZATION_HISTORY.md`

---

## 📊 품질 검증

### 분석 전 검증
- [ ] 기존 데이터베이스 스키마 확인
- [ ] 예제 구절로 분석 규칙 테스트
- [ ] 출력 형식이 CLAUDE.md 규칙과 일치하는지 확인

### 분석 중 검증 (Sub Agent 사용)
- [ ] 각 장별로 병렬 분석하여 빠진 구절 확인
- [ ] NIV 원문과 sentence_structures 개수 비교
- [ ] 복잡한 구절은 더블 체크

### 분석 후 검증
- [ ] 전체 책의 모든 구절에 sentence_structures 존재 확인
- [ ] 랜덤 샘플링으로 품질 확인 (최소 10%)
- [ ] 웹사이트에서 실제 렌더링 확인

### 검증 스크립트 실행
```bash
npm run verify:completeness -- --book="Book Name"
```

---

## 🔗 관련 문서

- **단일 구절 분석**: `SINGLE_VERSE_ANALYSIS_METHODOLOGY.md`
- **병렬 실행 전략**: `PARALLEL_ANALYSIS_STRATEGY.md`
- **프롬프트 최적화**: `PROMPT_OPTIMIZATION_HISTORY.md`
- **품질 관리**: `QUALITY_GUIDE.md`
- **빠른 참조**: `CLAUDE.md`

---

**작성**: Bible Analysis Team  
**최종 수정**: 2025-10-17
