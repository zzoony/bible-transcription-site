# 프로젝트 규칙

## 🚨 데이터베이스 작업 필수 규칙 (최우선!) 🚨
**DB 관련 작업 시 반드시 준수해야 하는 규칙**

### ⛔ 절대 규칙 (위반 금지!)
1. **테이블명/컬럼명 추측 금지**
   - ❌ 추측: `verse_analyses`, `text`, `content`
   - ✅ 확인: `bible-analysis/database/SCHEMA_GUIDE.md` 또는 `database.types.ts` 참조

2. **환경 변수 설정 필수**
   - ❌ 건너뛰기: `dotenv.config()` 없이 Supabase 사용
   - ✅ 필수: `bible-analysis/database/ENV_SETUP.md` 참조 후 정확한 경로로 설정

3. **스키마 문서 우선 참조**
   - DB 스크립트 작성 전 **반드시** 다음 순서로 문서 확인:
     1. `bible-analysis/database/ENV_SETUP.md` - 환경 설정
     2. `bible-analysis/database/SCHEMA_GUIDE.md` - 테이블 구조
     3. `bible-analysis/database/database.types.ts` - 타입 정의

### 📋 DB 작업 전 체크리스트
**모든 DB 스크립트 작성 시 다음을 확인**:
- [ ] ENV_SETUP.md를 읽고 환경 변수 설정 확인
- [ ] SCHEMA_GUIDE.md에서 테이블명/컬럼명 확인
- [ ] database.types.ts로 타입 import
- [ ] dotenv.config() 정확한 경로로 설정
- [ ] Supabase 클라이언트 생성 시 SERVICE_KEY 사용

### 🔗 빠른 참조
```bash
# 환경 변수 가이드
cat bible-analysis/database/ENV_SETUP.md

# 스키마 구조 확인
cat bible-analysis/database/SCHEMA_GUIDE.md

# TypeScript 타입 확인
cat bible-analysis/database/database.types.ts
```

### 🛡️ 이 규칙이 방지하는 오류들
- ✅ "supabaseUrl is required"
- ✅ "Could not find the table 'xxx'"
- ✅ "column xxx does not exist"
- ✅ 테이블/컬럼명 오타로 인한 실행 오류

**⚠️ 주의**: 이 규칙을 따르지 않으면 매번 같은 오류가 반복됩니다!

---

## 언어 사용 규칙 ⚠️
**중요: 모든 출력과 커뮤니케이션은 한글을 최우선으로 사용**
- Claude의 모든 응답과 설명은 한글로 작성
- 코드 주석, 커밋 메시지, 문서는 한글 사용
- 오류 메시지와 로그 출력도 한글로 표시
- 영어는 기술 용어나 코드 내부에서만 사용
- 사용자와의 모든 대화는 한글로 진행

## 성경 분석 표준 템플릿 ⭐
**기준: 창세기 1:2 (최고 품질 분석 사례)**

**필수 참조 문서**: `apps/pipeline/docs/ANALYSIS_TEMPLATE.md`

### 핵심 원칙
1. **완전성**: NIV 원문의 모든 문장/절을 빠짐없이 분석
2. **깊이**: 히브리어/그리스어 원어를 모든 주요 단어에 포함
3. **통합성**: 역사적/신학적/문학적 배경을 하나로 통합
4. **자연스러움**: 한국어 번역은 직역과 의역을 조화

### 필수 구성 요소

#### 1. 문장 구조 (sentence_structures)
- ✅ 모든 문장/절 포함 (누락 금지!)
- ✅ `semantic_classification`: 의미적 분류
- ✅ `grammatical_explanation`: 문법적 설명 (주어, 동사, 수식어 명시)
- ✅ `korean_translation`: 각 구조의 한글 번역

#### 2. 주요 단어 (vocabulary)
- ✅ 최소 7-10개 핵심 단어
- ✅ IPA 발음 + 한국어 발음
- ✅ **히브리어/그리스어 원어 설명 필수!**
- ✅ 품사 정확히 표시

#### 3. 문맥 설명 (contextual_explanations)
- ✅ 300자 이상 상세 설명
- ✅ 역사적/신학적/문학적 배경 통합
- ✅ 히브리어/그리스어 원어 분석 포함

#### 4. 한국어 번역 (korean_translations)
- ✅ 자연스러운 하나의 통합 번역
- ✅ 원문의 뉘앙스 보존

#### 5. 특별 설명 (special_explanations)
- ✅ 최소 2-3개
- ✅ 다양한 관점 (문법, 신학, 문학 등)

### 출력 형식
- 이모지 사용 금지 - 깔끔한 텍스트 형식만 사용
- 주요 단어들은 표 형식으로 정리
- 분석 완료일, 복잡도 점수, 핵심 주제 등 메타데이터는 출력하지 않음

## 문장 구조 분석 필수 규칙 ⚠️
**중요: 구절의 모든 문장과 주요 절을 빠짐없이 분석해야 함**

1. **완전성 검증**: NIV 영어 원문의 모든 문장과 주요 절(clause)을 sentence_structures에 포함
   - 마침표(.), 느낌표(!), 물음표(?)로 끝나는 모든 완전한 문장
   - 접속사로 연결된 독립절과 종속절
   - 의미상 중요한 분사구나 부정사구

2. **누락 방지 체크리스트**:
   - [ ] NIV 원문을 처음부터 끝까지 읽으며 모든 문장 식별
   - [ ] 각 문장/절이 sentence_structures에 매핑되는지 확인
   - [ ] 복잡한 구절은 의미 단위로 분리하되 빠뜨리지 않음
   - [ ] 마지막 문장/절까지 반드시 포함

3. **예시 - 빌립보서 1:7**:
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

## 표준 출력 형식
1. # [성경책명] [장]:[절] (NIV)
2. **원문:** "[영어 원문]"
3. ### 문장 구조 분석: (의미적 분류 + 문법적 설명)
4. ### 주요 단어들: (IPA + 한국어 발음 표 형식)
5. ### 문맥 설명: (통합된 배경 설명)
6. ### 한국어 번역: (자연스러운 번역)
7. ### 특별 설명: (문법적/해석적 특이점)

## NIV 원문 참조 규칙 ⚠️
**필수: NIV 원문이 필요할 때는 반드시 JSON 파일을 사용**

### 원본 파일 경로
```
archive/niv-data/NIV_Bible.json
```

### JSON 구조
```json
{
    "Book Name": {
        "Chapter": {
            "Verse": "NIV text..."
        }
    }
}
```

### 사용 예시
```typescript
import nivBible from './archive/niv-data/NIV_Bible.json';

// 창세기 1:2 원문 가져오기
const genesis1_2 = nivBible["Genesis"]["1"]["2"];
// "Now the earth was formless and empty, darkness was over..."

// 특정 장 전체 가져오기
const genesis1 = nivBible["Genesis"]["1"];
```

### 필수 원칙
- ✅ NIV 원문은 **항상** `NIV_Bible.json`에서 가져오기
- ✅ 웹 검색이나 외부 API 사용 금지
- ✅ 수동 입력 금지 (타이핑 오류 방지)
- ✅ 구절 참조 형식: `"BookName"]["ChapterNum"]["VerseNum"]`

### 빠른 조회 명령어
```bash
# 단일 절 조회
npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:2"

# 범위 조회
npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:1-5"

# 전체 장 조회
npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1"
```

## 데이터베이스 관련 ⚠️
**필수: DB 작업 전 반드시 아래 문서 참조!**

### 필수 참조 문서 (우선순위 순)
1. **환경 변수 설정**: `bible-analysis/database/ENV_SETUP.md`
   - .env.local 파일 위치 및 필수 변수
   - dotenv 설정 방법
   - 자주 발생하는 오류 해결

2. **스키마 가이드**: `bible-analysis/database/SCHEMA_GUIDE.md`
   - 전체 테이블 구조 및 관계
   - 각 테이블의 목적과 용도
   - 자주 사용하는 쿼리 패턴
   - 품질 기준 및 주의사항

3. **TypeScript 타입**: `bible-analysis/database/database.types.ts`
   - 모든 테이블의 정확한 타입 정의
   - Insert/Update 타입 포함
   - IDE 자동완성 지원

4. **실제 스키마**: `bible-analysis/database/schema.sql` 또는 `SCHEMA.md`
   - 실제 DB 구조 (정기적으로 재생성)

### DB 작업 시 필수 체크리스트
**매번 DB 스크립트 작성 시 다음을 확인**:

#### 1. 환경 변수 설정 ✅
```typescript
import * as dotenv from 'dotenv';
import * as path from 'path';

// ⚠️ 필수: 정확한 경로로 환경 변수 로드!
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// Supabase 클라이언트 생성
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!  // 서버 측 작업에는 SERVICE_KEY
);
```

#### 2. 테이블/컬럼명 확인 ✅
```typescript
// ❌ 추측하지 말 것!
const { data } = await supabase.from('verse_analyses').select('text');

// ✅ SCHEMA_GUIDE.md 또는 database.types.ts 참조!
const { data } = await supabase.from('verses').select('niv_text');
```

#### 3. TypeScript 타입 사용 ✅
```typescript
import type { Verse, SentenceStructure } from '../bible-analysis/database/database.types';

// 타입 안전성 확보
const verse: Verse = { ... };
const structures: SentenceStructure[] = [ ... ];
```

### DB 작업 원칙
- Supabase PostgreSQL에서 데이터 조회 및 분석
- 신중한 단계별 접근법 유지 (단일 구절 검증 → 자동화 → 확장)
- **NIV 원문은 `bible-analysis/source-data/NIV_Bible.json` 파일에서만 가져오기**
- **테이블명/컬럼명 추측 금지** - 반드시 문서 참조
- **환경 변수 누락 시 즉시 오류** - 작업 전 ENV_SETUP.md 확인

### 스키마 업데이트 방법
DB 구조가 변경되었을 때:
```bash
# 최신 스키마 추출
npx ts-node bible-analysis/database/extract-schema.ts

# 생성된 파일 확인
ls -la bible-analysis/database/
# - schema.sql (SQL 형식)
# - SCHEMA.md (마크다운 형식, 샘플 데이터 포함)
```

## 품질 검증 프로세스
**새로운 책을 분석할 때 반드시 수행**:

1. **분석 전 검증**:
   - [ ] 기존 데이터베이스 스키마 확인
   - [ ] 예제 구절로 분석 규칙 테스트
   - [ ] 출력 형식이 CLAUDE.md 규칙과 일치하는지 확인

2. **분석 중 검증** (Sub Agent 사용):
   - [ ] 각 장별로 병렬 분석하여 빠진 구절 확인
   - [ ] NIV 원문과 sentence_structures 개수 비교
   - [ ] 복잡한 구절은 더블 체크

3. **분석 후 검증**:
   - [ ] 전체 책의 모든 구절에 sentence_structures 존재 확인
   - [ ] 랜덤 샘플링으로 품질 확인 (최소 10%)
   - [ ] 웹사이트에서 실제 렌더링 확인

4. **검증 스크립트 실행**:
   ```bash
   npm run verify:completeness -- --book="Book Name"
   ```

## 대량 자동 분석 워크플로우 ⚠️
**신약/구약 성경 전체 책 자동 분석을 위한 표준 프로세스**

### 실행 원칙
1. **완전 자동 모드**: 사용자 확인 없이 모든 단계를 스스로 판단하여 실행
2. **오류 복구**: 실패 시 자동으로 3회 재시도 후 다음으로 진행
3. **중단 없음**: 한 책이 실패해도 나머지 계속 진행
4. **주기적 저장**: 10구절마다 진행 상황 저장
5. **검증 필수**: 각 책 완료 후 반드시 검증
6. **로그 기록**: 모든 작업을 logs/ 디렉토리에 기록

### 6단계 자동화 워크플로우

#### 1단계: 전체 계획 수립 (자동)
- 책을 크기별로 3그룹 분류 (소형 1-100구절, 중형 101-500구절, 대형 500+ 구절)
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
- 최종 보고서 생성 (docs/[TESTAMENT]_COMPLETION_REPORT.md)

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

### 문제 해결 전략

**API Rate Limit**:
- 각 구절마다 5초 대기
- 오버로드 시 exponential backoff (5s → 10s → 20s)
- 최대 3회 재시도

**중복 데이터**:
- 각 책 완료 후 자동으로 fix-duplicates 스크립트 실행
- 중복 제거 후 재검증

**누락 구절**:
- verify 스크립트로 누락 확인
- retry-missing 스크립트로 자동 재시도
- 3회 실패 시 별도 리스트에 기록하고 계속 진행

**프로세스 중단**:
- 각 책마다 백그라운드 실행
- 4시간 타임아웃 설정
- 타임아웃 시 현재 상태 저장 후 다음 책으로

### 성공 기준
- ✅ 모든 책 100% 분석 완료
- ✅ 중복 데이터 0건
- ✅ 데이터 품질 문제 0건
- ✅ npm run build 성공
- ✅ 모든 책 웹 UI에서 검색 가능

### 참고 문서
- 상세 실행 가이드: docs/AUTO_ANALYZE_NEW_TESTAMENT.md
- 갈라디아서 완료 사례: logs/galatians_completion.log

## 품질 평가 시스템 ⭐
**창세기 1:2 기준 자동 평가**

### 평가 스크립트 사용법
```bash
# 단일 구절 평가
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:1"

# 기준 구절 (창세기 1:2) 평가
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:2"
```

### 평가 기준 (100점 만점)
- **문장 구조 (30점)**: 완전성, 문법 설명, 의미 분류
- **주요 단어 (25점)**: 개수, 원어 포함, 발음 정확성
- **문맥 설명 (20점)**: 길이, 깊이, 통합성
- **한국어 번역 (15점)**: 자연스러움, 정확성
- **특별 설명 (10점)**: 개수, 다양성

### 등급 기준
- **우수 (A)**: 90-100점 - 창세기 1:2 수준
- **양호 (B)**: 70-89점 - 대부분 요소 충족
- **보통 (C)**: 50-69점 - 일부 개선 필요
- **미흡 (D)**: 50점 미만 - 대폭 개선 필요

### 분석 시 필수 체크
1. **분석 전**: 템플릿 문서 확인 (`bible-analysis/templates/ANALYSIS_TEMPLATE.md`)
2. **분석 중**: 체크리스트 따라 진행
3. **분석 후**: 평가 스크립트로 품질 확인
4. **70점 미만**: 재분석 또는 개선 필요

## 단일 구절 분석 방법론 🔍
**Claude Code가 직접 수행하는 고품질 성경 구절 분석 프로세스**

**필수 참조 문서**: `apps/pipeline/bible-analysis/docs/SINGLE_VERSE_ANALYSIS_METHODOLOGY.md`

### 핵심 원칙
- ✅ **API 사용 안 함**: Claude Code 토큰으로 직접 분석 작성
- ✅ **NIV JSON 직접 사용**: `bible-analysis/source-data/NIV_Bible.json`
- ✅ **품질 관문**: 90점 이상만 DB 저장
- ✅ **병렬 실행 준비**: 함수 모듈화

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
- **평가 기준** (100점 만점):
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

### 품질 보증
- **90점 이상**: DB 저장
- **90점 미만**: 저장 안 함, 분석 수정 필요
- **자동 평가**: evaluateQuality() 함수 사용

### ⚠️ 필수 준수 사항
1. **API 사용 금지**
   - ✅ Claude Code 토큰으로 직접 작성
   - ❌ Anthropic API 호출
   - ❌ 외부 웹 API

2. **원어 포함 필수**
   - 모든 주요 단어에 히브리어/그리스어 원어 설명
   - 신약 = 그리스어, 구약 = 히브리어

3. **품질 기준 준수**
   - 90점 미만은 저장 안 함
   - 창세기 1:2 수준 유지

### 다음 단계
- **병렬 실행**: `apps/pipeline/bible-analysis/docs/PARALLEL_ANALYSIS_STRATEGY.md` 참조
- **대량 분석**: 여러 구절 동시 처리

## 성경 분석 작업 공간 📁
**모든 분석 관련 파일은 `bible-analysis/` 폴더에 통합 관리**

### 폴더 구조
```
apps/pipeline/bible-analysis/
├── source-data/          # 원본 데이터
│   └── NIV_Bible.json    # NIV 성경 전체 (4.5MB)
│
├── database/             # 데이터베이스 문서 ⭐
│   ├── ENV_SETUP.md                 # 환경 변수 설정 가이드 (필독!)
│   ├── SCHEMA_GUIDE.md              # 테이블 구조 가이드 (필독!)
│   ├── database.types.ts            # TypeScript 타입 정의
│   ├── schema.sql                   # SQL 형식 스키마
│   ├── SCHEMA.md                    # 마크다운 형식 스키마
│   └── extract-schema.ts            # 스키마 추출 스크립트
│
├── docs/                 # 분석 방법론 문서 ⭐
│   ├── SINGLE_VERSE_ANALYSIS_METHODOLOGY.md  # 단일 구절 분석 방법론
│   └── PARALLEL_ANALYSIS_STRATEGY.md         # 병렬 실행 전략 및 프롬프트
│
├── tools/                # 분석 도구
│   ├── get-niv-text.ts              # NIV 원문 조회
│   └── evaluate-verse-quality.ts   # 품질 평가
│
├── templates/            # 분석 템플릿
│   ├── ANALYSIS_TEMPLATE.md         # 상세 템플릿
│   └── QUALITY_STANDARD_SUMMARY.md  # 빠른 참조
│
├── core/                 # 핵심 분석 엔진
│   └── analyze-single-verse.ts      # 단일 구절 분석 스크립트
│
├── workspace/            # 작업 공간 (새 분석 작업)
├── tests/                # 테스트 스크립트
└── README.md             # 작업 공간 가이드
```

### 사용 방법
- **DB 작업 가이드**: `bible-analysis/database/` (DB 작업 시 필수 참조!)
- **상세 가이드**: `bible-analysis/README.md` 참조
- **빠른 시작**: `cat bible-analysis/README.md`
