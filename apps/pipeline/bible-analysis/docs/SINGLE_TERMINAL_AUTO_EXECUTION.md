# 단일 터미널 완전 자동 실행 가이드

**목적**: 하나의 터미널(Claude Code 세션)에서 여러 책을 완전 자동으로 병렬 분석

## 🎯 핵심 개념

### 백그라운드 병렬 실행
```bash
# 4개 스크립트를 동시에 백그라운드 실행
npx ts-node script1.ts > logs/s1.log 2>&1 &
npx ts-node script2.ts > logs/s2.log 2>&1 &
npx ts-node script3.ts > logs/s3.log 2>&1 &
npx ts-node script4.ts > logs/s4.log 2>&1 &
```

**장점:**
- ✅ 터미널 1개만 필요
- ✅ Claude Code가 모든 것을 자동 실행
- ✅ 유저 입력 완전히 불필요
- ✅ 진행 상황 자동 모니터링

---

## 📋 1 Corinthians 완전 자동 실행

### 1단계: 준비 및 실행 (한 번에!)

**실행 프롬프트:**
```
1 Corinthians 완전 자동 병렬 분석을 시작합니다.

필수 참조 문서:
- bible-analysis/docs/FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md
- bible-analysis/docs/SINGLE_VERSE_ANALYSIS_METHODOLOGY.md
- bible-analysis/database/SCHEMA_GUIDE.md

다음 작업을 자동으로 순차 수행:

=== 1단계: 준비 ===
1. logs/ 폴더 생성:
   mkdir -p logs

2. 4개 세션 스크립트 생성 (FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md의 템플릿 사용):
   - bible-analysis/workspace/analyze-1cor-session1.ts (1-4장, 109절)
   - bible-analysis/workspace/analyze-1cor-session2.ts (5-8장, 107절)
   - bible-analysis/workspace/analyze-1cor-session3.ts (9-12장, 112절)
   - bible-analysis/workspace/analyze-1cor-session4.ts (13-16장, 109절)

=== 2단계: 백그라운드 병렬 실행 ===
3. 4개 스크립트를 동시 실행 (백그라운드):
   cd bible-analysis/workspace
   npx ts-node analyze-1cor-session1.ts > ../../logs/1cor-s1.log 2>&1 &
   npx ts-node analyze-1cor-session2.ts > ../../logs/1cor-s2.log 2>&1 &
   npx ts-node analyze-1cor-session3.ts > ../../logs/1cor-s3.log 2>&1 &
   npx ts-node analyze-1cor-session4.ts > ../../logs/1cor-s4.log 2>&1 &
   cd ../..

=== 3단계: 실행 확인 ===
4. 백그라운드 프로세스 확인:
   jobs
   또는
   ps aux | grep "analyze-1cor"

5. 초기 로그 확인:
   tail -5 logs/1cor-s1.log
   tail -5 logs/1cor-s2.log
   tail -5 logs/1cor-s3.log
   tail -5 logs/1cor-s4.log

출력: "✅ 1 Corinthians 4세션 병렬 실행 시작됨 (백그라운드)"
```

### 2단계: 진행 상황 모니터링 (주기적)

**모니터링 프롬프트 (10분마다):**
```
1 Corinthians 병렬 분석 진행 상황을 확인합니다.

자동 확인:

1. 각 세션 로그 최근 20줄:
   echo "=== 세션 1 (1-4장) ==="
   tail -20 logs/1cor-s1.log

   echo "=== 세션 2 (5-8장) ==="
   tail -20 logs/1cor-s2.log

   echo "=== 세션 3 (9-12장) ==="
   tail -20 logs/1cor-s3.log

   echo "=== 세션 4 (13-16장) ==="
   tail -20 logs/1cor-s4.log

2. 진행 파일 확인:
   echo "세션 1: $(cat .1cor-session1-progress.json 2>/dev/null | jq 'length' 2>/dev/null || echo 0)/109절"
   echo "세션 2: $(cat .1cor-session2-progress.json 2>/dev/null | jq 'length' 2>/dev/null || echo 0)/107절"
   echo "세션 3: $(cat .1cor-session3-progress.json 2>/dev/null | jq 'length' 2>/dev/null || echo 0)/112절"
   echo "세션 4: $(cat .1cor-session4-progress.json 2>/dev/null | jq 'length' 2>/dev/null || echo 0)/109절"

3. 프로세스 상태:
   ps aux | grep "analyze-1cor" | grep -v grep | wc -l
   => 실행 중인 세션 수

4. 예상 완료 시간 계산:
   - 평균 처리 속도: 4-6초/구절
   - 총 437절 / 4세션 = 평균 109절/세션
   - 예상 시간: 109 × 5초 = 약 9-10분

보기 좋게 요약 출력
```

### 3단계: 완료 대기 및 확인

**완료 대기 프롬프트:**
```
1 Corinthians 병렬 분석 완료를 대기합니다.

자동 대기 및 확인:

1. 모든 백그라운드 프로세스 완료 대기:
   wait
   (모든 백그라운드 작업이 끝날 때까지 대기)

2. 최종 로그 확인:
   echo "=== 세션 1 최종 요약 ==="
   tail -30 logs/1cor-s1.log | grep "완료 요약" -A 10

   echo "=== 세션 2 최종 요약 ==="
   tail -30 logs/1cor-s2.log | grep "완료 요약" -A 10

   echo "=== 세션 3 최종 요약 ==="
   tail -30 logs/1cor-s3.log | grep "완료 요약" -A 10

   echo "=== 세션 4 최종 요약 ==="
   tail -30 logs/1cor-s4.log | grep "완료 요약" -A 10

3. 진행 파일 최종 확인:
   total=$(cat .1cor-session*-progress.json | jq -s 'map(length) | add')
   echo "총 완료: ${total}/437절"

출력: "✅ 모든 세션 완료됨"
```

### 4단계: 검증 및 정리

**검증 프롬프트:**
```
1 Corinthians 분석 완료를 검증하고 정리합니다.

자동 검증:

1. DB 완성도 확인:
   psql 또는 Supabase SQL:

   SELECT
     COUNT(DISTINCT v.id) as total_verses,
     COUNT(DISTINCT ss.verse_id) as analyzed_verses,
     (COUNT(DISTINCT ss.verse_id) * 100.0 / COUNT(DISTINCT v.id)) as completion_rate
   FROM verses v
   LEFT JOIN sentence_structures ss ON v.id = ss.verse_id
   WHERE v.reference ILIKE '1 Corinthians%';

2. 샘플 품질 확인 (5개):
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

=== 정리 ===
5. 진행 파일 아카이브:
   mkdir -p bible-analysis/workspace/completed/1-corinthians
   mv .1cor-session*-progress.json bible-analysis/workspace/completed/1-corinthians/

6. 로그 아카이브:
   mkdir -p logs/completed/1-corinthians
   mv logs/1cor-s*.log logs/completed/1-corinthians/

7. 완료 보고서 생성:
   bible-analysis/workspace/completed/1-corinthians/REPORT.md

   내용:
   - 실행 시간
   - 완성률
   - 평균 품질 점수
   - 문제 구절 목록 (있다면)

출력: "✅ 1 Corinthians 분석 완료 및 검증됨"
```

---

## 🚀 신약 전체 자동 실행

### 오케스트레이터 스크립트 생성

**준비 프롬프트:**
```
신약 전체 자동 분석을 위한 마스터 오케스트레이터를 생성합니다.

생성할 스크립트: bible-analysis/workspace/orchestrate-new-testament.ts

기능:
1. 신약 27권 메타데이터 로드
2. 각 책마다 세션 스크립트 자동 생성
3. 모든 스크립트를 백그라운드로 순차 실행
4. 진행 상황 모니터링
5. 완료 대기 및 검증

실행 방식:
- 책 크기별 그룹핑 (소형 → 중형 → 대형)
- 동시 실행 세션 수 제한 (최대 20개)
- 각 책 완료 후 다음 책 시작
- 전체 진행 상황 대시보드

생성 완료 후:
npx ts-node bible-analysis/workspace/orchestrate-new-testament.ts

이 명령어 하나로 신약 전체 자동 분석 시작
```

### 오케스트레이터 스크립트 구조

```typescript
// bible-analysis/workspace/orchestrate-new-testament.ts

import * as fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

// 신약 27권 메타데이터
const NEW_TESTAMENT_BOOKS = [
  { book: 'Matthew', chapters: 28, verses: 1071, sessions: 10, split: [[1,3], [4,6], [7,9], [10,12], [13,15], [16,18], [19,21], [22,24], [25,26], [27,28]] },
  { book: 'Mark', chapters: 16, verses: 678, sessions: 6, split: [[1,3], [4,6], [7,9], [10,11], [12,13], [14,16]] },
  // ... 전체 27권
];

interface BookAnalysis {
  book: string;
  sessions: number;
  startTime: Date;
  endTime?: Date;
  status: 'pending' | 'running' | 'completed' | 'failed';
  completedVerses: number;
  totalVerses: number;
}

const analysisStatus: Map<string, BookAnalysis> = new Map();

// 책 하나의 세션 스크립트들을 생성
async function generateBookScripts(bookMeta: typeof NEW_TESTAMENT_BOOKS[0]) {
  console.log(`📝 ${bookMeta.book} 세션 스크립트 ${bookMeta.sessions}개 생성 중...`);

  for (let i = 0; i < bookMeta.sessions; i++) {
    const sessionId = `session${i + 1}`;
    const chapters = bookMeta.split[i];
    const scriptPath = `bible-analysis/workspace/analyze-${bookMeta.book.toLowerCase().replace(' ', '')}-${sessionId}.ts`;

    // FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md의 템플릿 사용
    const scriptContent = generateSessionScript(bookMeta.book, sessionId, chapters);
    fs.writeFileSync(scriptPath, scriptContent);
  }

  console.log(`✅ ${bookMeta.book} 스크립트 생성 완료`);
}

// 책 하나의 모든 세션을 백그라운드로 실행
async function executeBookSessions(bookMeta: typeof NEW_TESTAMENT_BOOKS[0]) {
  console.log(`🚀 ${bookMeta.book} ${bookMeta.sessions}개 세션 병렬 실행 시작`);

  analysisStatus.set(bookMeta.book, {
    book: bookMeta.book,
    sessions: bookMeta.sessions,
    startTime: new Date(),
    status: 'running',
    completedVerses: 0,
    totalVerses: bookMeta.verses
  });

  const processes: Promise<any>[] = [];

  for (let i = 0; i < bookMeta.sessions; i++) {
    const sessionId = `session${i + 1}`;
    const bookName = bookMeta.book.toLowerCase().replace(' ', '');
    const scriptPath = `bible-analysis/workspace/analyze-${bookName}-${sessionId}.ts`;
    const logPath = `logs/${bookName}-s${i + 1}.log`;

    // 백그라운드 실행
    const process = execAsync(
      `npx ts-node ${scriptPath} > ${logPath} 2>&1`
    );

    processes.push(process);
  }

  // 모든 세션 완료 대기
  await Promise.all(processes);

  const status = analysisStatus.get(bookMeta.book)!;
  status.endTime = new Date();
  status.status = 'completed';

  console.log(`✅ ${bookMeta.book} 완료 (${status.endTime.getTime() - status.startTime.getTime()}ms)`);
}

// 진행 상황 모니터링 (비동기)
async function monitorProgress() {
  setInterval(() => {
    console.log('\n' + '='.repeat(60));
    console.log('📊 신약 전체 분석 진행 상황');
    console.log('='.repeat(60));

    for (const [book, status] of analysisStatus.entries()) {
      const elapsed = status.endTime
        ? status.endTime.getTime() - status.startTime.getTime()
        : Date.now() - status.startTime.getTime();

      console.log(`${status.status === 'completed' ? '✅' : '🔄'} ${book}: ${status.completedVerses}/${status.totalVerses}절 (${(elapsed / 60000).toFixed(1)}분)`);
    }

    console.log('='.repeat(60));
  }, 60000); // 1분마다
}

// 메인 오케스트레이터
async function orchestrateNewTestament() {
  console.log('🎯 신약 전체 자동 분석 시작\n');

  // 진행 상황 모니터링 시작
  monitorProgress();

  // 책 크기별 그룹 실행
  const smallBooks = NEW_TESTAMENT_BOOKS.filter(b => b.verses <= 100);
  const mediumBooks = NEW_TESTAMENT_BOOKS.filter(b => b.verses > 100 && b.verses <= 300);
  const largeBooks = NEW_TESTAMENT_BOOKS.filter(b => b.verses > 300);

  // 소형 책들 (동시 실행)
  console.log('\n📚 소형 책 분석 (1-100절)');
  for (const book of smallBooks) {
    await generateBookScripts(book);
  }
  const smallPromises = smallBooks.map(book => executeBookSessions(book));
  await Promise.all(smallPromises);

  // 중형 책들 (순차 실행, 리소스 고려)
  console.log('\n📚 중형 책 분석 (101-300절)');
  for (const book of mediumBooks) {
    await generateBookScripts(book);
    await executeBookSessions(book);
  }

  // 대형 책들 (순차 실행)
  console.log('\n📚 대형 책 분석 (300+절)');
  for (const book of largeBooks) {
    await generateBookScripts(book);
    await executeBookSessions(book);
  }

  console.log('\n🎉 신약 전체 분석 완료!');

  // 최종 보고서 생성
  generateFinalReport();
}

// 실행
orchestrateNewTestament().catch(console.error);
```

### 신약 전체 실행 프롬프트

```
신약 전체 자동 분석을 시작합니다.

필수 참조:
- bible-analysis/docs/FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md
- bible-analysis/docs/SINGLE_TERMINAL_AUTO_EXECUTION.md

자동 수행:

1. orchestrate-new-testament.ts 스크립트 생성
   (위 구조 사용)

2. 실행:
   npx ts-node bible-analysis/workspace/orchestrate-new-testament.ts

이 명령어 하나로:
- 신약 27권 메타데이터 로드
- 각 책마다 세션 스크립트 자동 생성
- 모든 세션 백그라운드 병렬 실행
- 진행 상황 1분마다 출력
- 완료 후 검증 및 보고서 생성

예상 시간:
- 소형 책 (18권): 동시 실행, 약 20-30분
- 중형 책 (6권): 순차 실행, 약 1-2시간
- 대형 책 (3권): 순차 실행, 약 1-2시간
- 총: 약 2.5-4시간

"🚀 신약 전체 자동 분석 시작" 출력 후 실행
```

---

## 🛡️ 장점 및 주의사항

### ✅ 장점

1. **완전 자동화**
   - 프롬프트 하나로 모든 것이 실행
   - 유저는 기다리기만 하면 됨

2. **단일 터미널**
   - 여러 터미널 관리 불필요
   - Claude Code 세션 하나로 충분

3. **진행 추적**
   - 로그 파일로 실시간 확인
   - 진행 파일로 완료 구절 추적

4. **세션 안정성**
   - 백그라운드 실행으로 세션 독립
   - 중단 시 진행 파일 기반 복구

### ⚠️ 주의사항

1. **리소스 사용**
   - 동시 실행 세션 수에 따라 CPU/메모리 사용량 증가
   - 최대 10-20개 세션 동시 실행 권장

2. **에러 핸들링**
   - 개별 세션 실패 시 로그 확인 필요
   - 진행 파일로 재시작 가능

3. **완료 대기**
   - `wait` 명령어로 모든 백그라운드 프로세스 완료 대기
   - 예상 시간보다 길어질 수 있음 (API rate limit 등)

---

## 📝 프롬프트 치트시트

### 1 Corinthians (빠른 시작)
```
1 Corinthians 단일 터미널 자동 실행:

1. 스크립트 4개 생성
2. 백그라운드 병렬 실행
3. 10분 후 진행 확인
4. 완료 대기 및 검증

FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md 템플릿 사용
```

### 진행 확인
```
1 Corinthians 진행 상황:
- 로그 확인 (tail -20)
- 진행 파일 확인 (jq length)
- 프로세스 상태 (ps aux | grep)
```

### 완료 검증
```
1 Corinthians 완료 검증:
- DB 완성도 (SQL)
- 샘플 품질 (5개)
- 중복/누락 확인
- 정리 및 아카이브
```

### 신약 전체
```
신약 전체 자동 실행:

orchestrate-new-testament.ts 생성 및 실행
2.5-4시간 소요 예상
```

---

**작성일**: 2025-01-10
**버전**: 1.0
**연관 문서**: FULL_BIBLE_AUTO_ANALYSIS_STRATEGY.md (다중 터미널 방식)
