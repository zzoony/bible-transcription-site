# 성경 전체 자동 병렬 분석 실행 전략

**목적**: 유저 입력 없이 신약/구약 전체를 안정적으로 자동 분석하는 완전 자동화 전략

## 🎯 핵심 설계 원칙

### 1. 완전 자동화 (Zero User Input)
- 모든 작업이 스크립트로 자동 실행
- Claude Code 세션은 독립적으로 실행
- 에러 발생 시 자동 재시도 또는 건너뛰기
- 진행 상황 자동 저장 및 복구

### 2. 멱등성 보장 (Idempotent)
- 같은 구절을 여러 번 분석해도 안전
- DB 중복 체크로 이미 분석된 구절 건너뛰기
- 세션 중단 후 재시작 시 이어서 진행
- 여러 세션이 동시 실행해도 충돌 없음

### 3. 세션 독립성 (Stateless Sessions)
- 각 세션은 독립적으로 실행 가능
- 메모리 유실 대비: 진행 파일 + 로그
- 명확한 구절 범위 할당으로 중복 방지
- 세션 간 의존성 없음

### 4. 확장성 (Scalable)
- 단일 책 → 신약 전체 → 구약 전체 동일 패턴
- 책 크기에 따라 자동 세션 할당
- 동시 실행 세션 수 조절 가능

---

## 📊 전략 개요

### 책 크기별 분류

```yaml
소형_책:
  구절_범위: 1-100절
  세션_수: 1개
  예시: Philemon, 2 John, 3 John, Jude, Titus
  실행_시간: 8-15분

중형_책:
  구절_범위: 101-300절
  세션_수: 2-3개
  예시: Galatians, Philippians, 1-2 Thessalonians, Colossians
  실행_시간: 15-30분

대형_책:
  구절_범위: 301-600절
  세션_수: 4-6개
  예시: Romans, 1-2 Corinthians, Hebrews
  실행_시간: 20-40분

초대형_책:
  구절_범위: 600+절
  세션_수: 6-10개
  예시: Matthew, Luke, John, Acts
  실행_시간: 30-60분
```

### 다중 세션 병렬 실행 모델

```
책: 1 Corinthians (437절)
├─ 세션 1 [터미널 1]: 1장-4장 (109절)
├─ 세션 2 [터미널 2]: 5장-8장 (107절)
├─ 세션 3 [터미널 3]: 9장-12장 (112절)
└─ 세션 4 [터미널 4]: 13장-16장 (109절)

실행 시간: 40분 (순차) → 10-12분 (병렬)
```

---

## 🔧 기술 구현

### 세션별 독립 스크립트 구조

각 세션은 다음을 포함:

```typescript
// bible-analysis/workspace/analyze-1cor-session1.ts

import { analyzeSingleVerse } from '../core/analyze-single-verse';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, '../../../web/.env.local')
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// 세션 설정
const SESSION_ID = 'session1';
const BOOK = '1 Corinthians';
const CHAPTERS = [1, 2, 3, 4]; // 이 세션이 담당하는 장
const PROGRESS_FILE = `.1cor-${SESSION_ID}-progress.json`;
const LOG_FILE = `logs/1cor-${SESSION_ID}.log`;

// 진행 상황 로드
function loadProgress(): string[] {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  return [];
}

// 진행 상황 저장
function saveProgress(completed: string[]) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(completed, null, 2));
}

// 로그 기록
function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${message}`;
  console.log(logMsg);
  fs.appendFileSync(LOG_FILE, logMsg + '\n');
}

// 멱등성 보장: DB에서 이미 분석되었는지 확인
async function isAlreadyAnalyzed(verseId: number): Promise<boolean> {
  const { data, error } = await supabase
    .from('sentence_structures')
    .select('id')
    .eq('verse_id', verseId)
    .limit(1);

  return !error && data && data.length > 0;
}

// 구절 ID 조회
async function getVerseId(reference: string): Promise<number | null> {
  const { data, error } = await supabase
    .from('verses')
    .select('id')
    .eq('reference', reference)
    .single();

  if (error || !data) return null;
  return data.id;
}

// 메인 분석 루프
async function analyzeSession() {
  log(`🚀 세션 ${SESSION_ID} 시작: ${BOOK} ${CHAPTERS[0]}-${CHAPTERS[CHAPTERS.length - 1]}장`);

  const completed = loadProgress();
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;

  // NIV 데이터에서 구절 목록 생성
  const nivBible = require('../source-data/NIV_Bible.json');
  const verses: string[] = [];

  for (const chapter of CHAPTERS) {
    const chapterData = nivBible[BOOK]?.[chapter.toString()];
    if (!chapterData) continue;

    const verseNumbers = Object.keys(chapterData);
    for (const verseNum of verseNumbers) {
      verses.push(`${BOOK} ${chapter}:${verseNum}`);
    }
  }

  log(`📋 총 ${verses.length}개 구절 처리 예정`);
  log(`✅ 이미 완료: ${completed.length}개`);

  for (let i = 0; i < verses.length; i++) {
    const reference = verses[i];

    // 이미 완료된 구절 건너뛰기
    if (completed.includes(reference)) {
      log(`⏭️  [${i + 1}/${verses.length}] ${reference} - 이미 완료됨 (건너뛰기)`);
      skipCount++;
      continue;
    }

    try {
      // DB에서 verse_id 조회
      const verseId = await getVerseId(reference);
      if (!verseId) {
        log(`⚠️  [${i + 1}/${verses.length}] ${reference} - verse_id 없음 (건너뛰기)`);
        skipCount++;
        continue;
      }

      // 멱등성 체크: DB에 이미 분석 데이터가 있는지 확인
      const alreadyAnalyzed = await isAlreadyAnalyzed(verseId);
      if (alreadyAnalyzed) {
        log(`✓ [${i + 1}/${verses.length}] ${reference} - DB에 이미 존재 (건너뛰기)`);
        completed.push(reference);
        saveProgress(completed);
        skipCount++;
        continue;
      }

      log(`🔄 [${i + 1}/${verses.length}] ${reference} 분석 중...`);

      // 분석 실행 (analyze-single-verse.ts 사용)
      const result = await analyzeSingleVerse(reference);

      if (result.success) {
        log(`✅ [${i + 1}/${verses.length}] ${reference} 완료 (점수: ${result.finalScore}/100)`);
        successCount++;
      } else {
        log(`⚠️  [${i + 1}/${verses.length}] ${reference} 품질 미달 (점수: ${result.finalScore}/100)`);
        failCount++;
      }

      // 진행 상황 저장
      completed.push(reference);
      saveProgress(completed);

      // Rate limiting (3-5초 대기)
      const waitTime = 3000 + Math.random() * 2000;
      await new Promise(resolve => setTimeout(resolve, waitTime));

    } catch (error: any) {
      log(`❌ [${i + 1}/${verses.length}] ${reference} 오류: ${error.message}`);
      failCount++;

      // 오류 발생 시 더 긴 대기 (10초)
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  // 최종 요약
  log('\n' + '='.repeat(60));
  log(`📊 세션 ${SESSION_ID} 완료 요약`);
  log('='.repeat(60));
  log(`✅ 성공: ${successCount}/${verses.length}`);
  log(`⏭️  건너뜀: ${skipCount}/${verses.length}`);
  log(`❌ 실패: ${failCount}/${verses.length}`);
  log(`📈 진행률: ${((successCount + skipCount) / verses.length * 100).toFixed(1)}%`);
  log('='.repeat(60));
}

// 실행
analyzeSession().catch(error => {
  log(`❌ 치명적 오류: ${error.message}`);
  process.exit(1);
});
```

---

## 📝 1 Corinthians 실행 가이드 (4세션 병렬)

### 1단계: 준비 작업

**실행 프롬프트 (터미널 1 - Claude Code):**
```
1 Corinthians 병렬 분석 준비를 시작합니다.

다음 작업을 자동으로 수행해 주세요:

1. 필수 문서 참조:
   - bible-analysis/docs/FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md (이 문서)
   - bible-analysis/docs/SINGLE_VERSE_ANALYSIS_METHODOLOGY.md (품질 기준)
   - bible-analysis/database/SCHEMA_GUIDE.md (DB 구조)

2. logs/ 폴더 생성:
   mkdir -p logs

3. 4개 세션 스크립트 생성 (위 템플릿 기반):
   - bible-analysis/workspace/analyze-1cor-session1.ts (1-4장)
   - bible-analysis/workspace/analyze-1cor-session2.ts (5-8장)
   - bible-analysis/workspace/analyze-1cor-session3.ts (9-12장)
   - bible-analysis/workspace/analyze-1cor-session4.ts (13-16장)

4. 각 스크립트 변경사항:
   - SESSION_ID: 'session1' → 'session2' → 'session3' → 'session4'
   - CHAPTERS: [1,2,3,4] → [5,6,7,8] → [9,10,11,12] → [13,14,15,16]
   - PROGRESS_FILE: .1cor-session1-progress.json (각 세션별)
   - LOG_FILE: logs/1cor-session1.log (각 세션별)

5. 검증:
   - 4개 스크립트 생성 확인
   - logs/ 폴더 존재 확인

준비 완료되면 "✅ 1 Corinthians 4세션 스크립트 생성 완료" 출력
```

### 2단계: 병렬 실행

**4개 터미널 동시 실행:**

**터미널 1:**
```bash
cd apps/pipeline
npx ts-node bible-analysis/workspace/analyze-1cor-session1.ts
```

**터미널 2:**
```bash
cd apps/pipeline
npx ts-node bible-analysis/workspace/analyze-1cor-session2.ts
```

**터미널 3:**
```bash
cd apps/pipeline
npx ts-node bible-analysis/workspace/analyze-1cor-session3.ts
```

**터미널 4:**
```bash
cd apps/pipeline
npx ts-node bible-analysis/workspace/analyze-1cor-session4.ts
```

### 3단계: 진행 상황 모니터링

**실행 프롬프트 (새 Claude Code 세션):**
```
1 Corinthians 병렬 분석 진행 상황을 확인해 주세요.

다음 정보를 출력:

1. 각 세션 로그 확인:
   tail -20 logs/1cor-session1.log
   tail -20 logs/1cor-session2.log
   tail -20 logs/1cor-session3.log
   tail -20 logs/1cor-session4.log

2. 진행 파일 확인:
   cat .1cor-session1-progress.json | jq 'length'
   cat .1cor-session2-progress.json | jq 'length'
   cat .1cor-session3-progress.json | jq 'length'
   cat .1cor-session4-progress.json | jq 'length'

3. DB 확인 (실제 저장된 구절 수):
   SELECT COUNT(DISTINCT verse_id)
   FROM sentence_structures ss
   JOIN verses v ON ss.verse_id = v.id
   WHERE v.reference ILIKE '1 Corinthians%';

4. 예상 완료 시간 계산:
   - 총 437절
   - 각 세션 진행률
   - 평균 처리 속도

보기 좋게 요약해서 출력
```

### 4단계: 최종 검증

**실행 프롬프트 (모든 세션 완료 후):**
```
1 Corinthians 분석 완료 검증을 수행해 주세요.

자동 검증 항목:

1. 완성도 확인:
   SELECT
     COUNT(DISTINCT v.id) as total_verses,
     COUNT(DISTINCT ss.verse_id) as analyzed_verses,
     (COUNT(DISTINCT ss.verse_id) * 100.0 / COUNT(DISTINCT v.id)) as completion_rate
   FROM verses v
   LEFT JOIN sentence_structures ss ON v.id = ss.verse_id
   WHERE v.reference ILIKE '1 Corinthians%';

2. 품질 확인 (5개 구절):
   npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "1 Corinthians 1:1"
   npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "1 Corinthians 5:1"
   npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "1 Corinthians 10:1"
   npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "1 Corinthians 13:1"
   npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "1 Corinthians 16:24"

3. 중복 확인:
   SELECT verse_id, COUNT(*) as cnt
   FROM sentence_structures
   WHERE verse_id IN (SELECT id FROM verses WHERE reference ILIKE '1 Corinthians%')
   GROUP BY verse_id
   HAVING COUNT(*) > 5;

4. 누락 확인:
   SELECT v.reference
   FROM verses v
   LEFT JOIN sentence_structures ss ON v.id = ss.verse_id
   WHERE v.reference ILIKE '1 Corinthians%'
     AND ss.id IS NULL
   ORDER BY v.reference;

5. 결과 보고서:
   - 완성률: XX%
   - 평균 품질 점수: XX/100
   - 중복 구절: XX개
   - 누락 구절: XX개
   - 재분석 필요 구절 목록

"✅ 1 Corinthians 분석 완료 검증 보고서" 생성
```

### 5단계: 정리

**실행 프롬프트:**
```
1 Corinthians 분석 정리 작업을 수행해 주세요.

1. 진행 파일 아카이브:
   mkdir -p bible-analysis/workspace/completed/1-corinthians
   mv .1cor-session*-progress.json bible-analysis/workspace/completed/1-corinthians/

2. 로그 아카이브:
   mkdir -p logs/completed
   mv logs/1cor-session*.log logs/completed/

3. 임시 스크립트 제거 (선택):
   rm bible-analysis/workspace/analyze-1cor-session*.ts

4. 완료 보고서 생성:
   bible-analysis/workspace/completed/1-corinthians/COMPLETION_REPORT.md

"✅ 1 Corinthians 분석 정리 완료"
```

---

## 🚀 신약 전체 자동 분석 전략

### 책 목록 및 세션 할당

```json
{
  "new_testament": [
    {
      "book": "Matthew",
      "chapters": 28,
      "verses": 1071,
      "sessions": 10,
      "split": [[1,3], [4,6], [7,9], [10,12], [13,15], [16,18], [19,21], [22,24], [25,26], [27,28]]
    },
    {
      "book": "Mark",
      "chapters": 16,
      "verses": 678,
      "sessions": 6,
      "split": [[1,3], [4,6], [7,9], [10,11], [12,13], [14,16]]
    },
    {
      "book": "Luke",
      "chapters": 24,
      "verses": 1151,
      "sessions": 10,
      "split": [[1,3], [4,6], [7,9], [10,12], [13,15], [16,17], [18,19], [20,21], [22,23], [24,24]]
    },
    {
      "book": "John",
      "chapters": 21,
      "verses": 879,
      "sessions": 8,
      "split": [[1,3], [4,6], [7,9], [10,12], [13,15], [16,17], [18,19], [20,21]]
    },
    {
      "book": "Acts",
      "chapters": 28,
      "verses": 1007,
      "sessions": 10,
      "split": [[1,3], [4,6], [7,9], [10,12], [13,15], [16,18], [19,21], [22,24], [25,26], [27,28]]
    },
    {
      "book": "Romans",
      "chapters": 16,
      "verses": 433,
      "sessions": 4,
      "split": [[1,4], [5,8], [9,12], [13,16]]
    },
    {
      "book": "1 Corinthians",
      "chapters": 16,
      "verses": 437,
      "sessions": 4,
      "split": [[1,4], [5,8], [9,12], [13,16]]
    },
    {
      "book": "2 Corinthians",
      "chapters": 13,
      "verses": 257,
      "sessions": 3,
      "split": [[1,4], [5,9], [10,13]]
    },
    {
      "book": "Galatians",
      "chapters": 6,
      "verses": 149,
      "sessions": 2,
      "split": [[1,3], [4,6]]
    },
    {
      "book": "Ephesians",
      "chapters": 6,
      "verses": 155,
      "sessions": 2,
      "split": [[1,3], [4,6]]
    },
    {
      "book": "Philippians",
      "chapters": 4,
      "verses": 104,
      "sessions": 1,
      "split": [[1,4]]
    },
    {
      "book": "Colossians",
      "chapters": 4,
      "verses": 95,
      "sessions": 1,
      "split": [[1,4]]
    },
    {
      "book": "1 Thessalonians",
      "chapters": 5,
      "verses": 89,
      "sessions": 1,
      "split": [[1,5]]
    },
    {
      "book": "2 Thessalonians",
      "chapters": 3,
      "verses": 47,
      "sessions": 1,
      "split": [[1,3]]
    },
    {
      "book": "1 Timothy",
      "chapters": 6,
      "verses": 113,
      "sessions": 2,
      "split": [[1,3], [4,6]]
    },
    {
      "book": "2 Timothy",
      "chapters": 4,
      "verses": 83,
      "sessions": 1,
      "split": [[1,4]]
    },
    {
      "book": "Titus",
      "chapters": 3,
      "verses": 46,
      "sessions": 1,
      "split": [[1,3]]
    },
    {
      "book": "Philemon",
      "chapters": 1,
      "verses": 25,
      "sessions": 1,
      "split": [[1,1]]
    },
    {
      "book": "Hebrews",
      "chapters": 13,
      "verses": 303,
      "sessions": 4,
      "split": [[1,3], [4,7], [8,10], [11,13]]
    },
    {
      "book": "James",
      "chapters": 5,
      "verses": 108,
      "sessions": 2,
      "split": [[1,3], [4,5]]
    },
    {
      "book": "1 Peter",
      "chapters": 5,
      "verses": 105,
      "sessions": 2,
      "split": [[1,3], [4,5]]
    },
    {
      "book": "2 Peter",
      "chapters": 3,
      "verses": 61,
      "sessions": 1,
      "split": [[1,3]]
    },
    {
      "book": "1 John",
      "chapters": 5,
      "verses": 105,
      "sessions": 2,
      "split": [[1,3], [4,5]]
    },
    {
      "book": "2 John",
      "chapters": 1,
      "verses": 13,
      "sessions": 1,
      "split": [[1,1]]
    },
    {
      "book": "3 John",
      "chapters": 1,
      "verses": 14,
      "sessions": 1,
      "split": [[1,1]]
    },
    {
      "book": "Jude",
      "chapters": 1,
      "verses": 25,
      "sessions": 1,
      "split": [[1,1]]
    },
    {
      "book": "Revelation",
      "chapters": 22,
      "verses": 404,
      "sessions": 6,
      "split": [[1,4], [5,8], [9,12], [13,16], [17,19], [20,22]]
    }
  ]
}
```

**신약 전체 통계:**
- 총 27권
- 총 7,957절
- 총 세션: 약 90개
- 예상 소요 시간:
  - 순차 실행: 약 40-60시간
  - 10개 세션 병렬: 약 4-6시간
  - 20개 세션 병렬: 약 2-3시간

### 오케스트레이터 프롬프트 (신약 전체)

**실행 프롬프트 (마스터 세션):**
```
신약 전체 자동 분석을 시작합니다.

다음 작업을 자동으로 순차 수행:

1. 메타데이터 파일 생성:
   bible-analysis/workspace/new-testament-metadata.json
   (위 JSON 데이터 사용)

2. 각 책마다 세션 스크립트 자동 생성:
   - 메타데이터에서 책 정보 읽기
   - sessions 수만큼 스크립트 생성
   - analyze-{book}-session{N}.ts 형식

3. 실행 계획 생성:
   bible-analysis/workspace/new-testament-execution-plan.md

   내용:
   - 각 책별 세션 명령어
   - 예상 소요 시간
   - 병렬 실행 그룹핑 (10개씩)

4. 모니터링 스크립트 생성:
   bible-analysis/workspace/monitor-new-testament.ts

   기능:
   - 모든 세션 진행률 실시간 확인
   - DB에 저장된 구절 수 확인
   - 완료 예상 시간 계산

5. 준비 완료 보고:
   - 생성된 스크립트 수
   - 실행 계획 요약
   - 다음 단계 안내

"✅ 신약 전체 분석 준비 완료" 출력
```

---

## 🛡️ 에러 복구 전략

### 세션 중단 시

**복구 프롬프트:**
```
1 Corinthians 세션 2가 중단되었습니다. 복구를 시작합니다.

자동 복구 단계:

1. 진행 파일 확인:
   cat .1cor-session2-progress.json | jq 'length'
   => 현재까지 XX개 구절 완료

2. 로그 확인 (마지막 20줄):
   tail -20 logs/1cor-session2.log
   => 마지막 처리 구절 확인

3. 세션 재시작:
   cd apps/pipeline
   npx ts-node bible-analysis/workspace/analyze-1cor-session2.ts

   멱등성 보장으로 이미 완료된 구절 자동 건너뛰기

"✅ 세션 2 복구 완료, XX개 구절부터 재시작"
```

### 품질 미달 구절 재분석

**재분석 프롬프트:**
```
1 Corinthians에서 품질 미달 구절을 찾아 재분석합니다.

자동 처리:

1. 품질 미달 구절 찾기:
   - 로그 파일에서 "품질 미달" 키워드 검색
   - 해당 구절 목록 추출

2. 각 구절 재분석:
   - analyze-single-verse.ts 직접 호출
   - 창세기 1:2 템플릿 강조
   - 90점 이상 확인

3. 재분석 결과 보고:
   - 성공: XX개
   - 여전히 미달: XX개 (수동 검토 필요)

"✅ 품질 미달 구절 재분석 완료"
```

---

## 📚 필수 참조 문서

### 분석 시작 전 (순서대로 읽기)

1. **`bible-analysis/docs/SINGLE_VERSE_ANALYSIS_METHODOLOGY.md`**
   - 단일 구절 분석 방법
   - 90점 품질 기준
   - 6단계 워크플로우

2. **`bible-analysis/database/ENV_SETUP.md`**
   - 환경 변수 설정
   - Supabase 연결
   - dotenv 설정

3. **`bible-analysis/database/SCHEMA_GUIDE.md`**
   - 테이블 구조
   - 컬럼명
   - 관계

4. **`bible-analysis/docs/PARALLEL_ANALYSIS_STRATEGY.md`**
   - 병렬 실행 기본 개념
   - 프롬프트 예시

### 실행 중 참조

5. **`CLAUDE.md`** (프로젝트 루트)
   - 전체 규칙
   - 품질 기준
   - NIV JSON 사용법

6. **`bible-analysis/templates/ANALYSIS_TEMPLATE.md`**
   - 창세기 1:2 템플릿
   - 필수 구성 요소

---

## ✅ 체크리스트

### 1 Corinthians 분석 전

- [ ] 필수 문서 5개 읽음
- [ ] logs/ 폴더 존재 확인
- [ ] NIV_Bible.json 파일 확인
- [ ] Supabase 환경 변수 설정됨
- [ ] 4개 세션 스크립트 생성됨
- [ ] 4개 터미널 준비됨

### 1 Corinthians 분석 중

- [ ] 4개 세션 모두 실행 중
- [ ] 진행 파일 생성 확인 (4개)
- [ ] 로그 파일 생성 확인 (4개)
- [ ] 주기적 진행률 확인 (10분마다)

### 1 Corinthians 분석 후

- [ ] 437절 모두 분석 완료
- [ ] 중복 데이터 0건
- [ ] 평균 품질 90점 이상
- [ ] 웹사이트 렌더링 확인
- [ ] 정리 완료 (진행 파일 아카이브)

---

## 🎯 핵심 성공 요인

1. **멱등성**: 같은 작업 여러 번 실행해도 안전
2. **진행 추적**: 파일 기반 진행 상황 저장
3. **자동 복구**: 중단 후 이어서 실행 가능
4. **병렬성**: 여러 세션 동시 실행으로 시간 단축
5. **검증**: 각 단계마다 품질 확인

---

**작성일**: 2025-01-10
**버전**: 1.0
**다음 단계**: 1 Corinthians 실제 실행 및 피드백 반영
