# 병렬 구절 분석 실행 전략 및 프롬프트

**목적**: 단일 구절 분석 방법론을 활용한 대규모 병렬 분석 실행 가이드

## 개요

`analyze-single-verse.ts` 스크립트를 기반으로 여러 구절을 동시에 분석하는 전략과 실행 방법을 정의합니다.

## 병렬 실행 전략 옵션

### 전략 1: Task Agent 병렬 실행 (권장 - 10-50 구절)
**장점**: Claude Code의 Task 도구를 활용한 자동 병렬화
**단점**: 동시 실행 수 제한 (최대 10-15개)
**적합**: 특정 책의 단일 장, 품질 개선 작업

### 전략 2: 배치 순차 실행 (중규모 - 50-200 구절)
**장점**: 안정적, 에러 핸들링 용이
**단점**: 실행 시간 오래 걸림
**적합**: 전체 책 분석, 안정성 우선 작업

### 전략 3: 다중 세션 병렬 (대규모 - 200+ 구절)
**장점**: 최대 처리량
**단점**: 세션 관리 복잡, 수동 조정 필요
**적합**: 신약/구약 전체 분석

## 전략별 상세 가이드

---

## 전략 1: Task Agent 병렬 실행

### 실행 프롬프트 템플릿

```
다음 [N]개 구절을 병렬로 분석해 줘. 각 구절마다 Task agent를 사용해서 동시에 실행해야 해.

구절 목록:
1. [Book Chapter:Verse]
2. [Book Chapter:Verse]
3. [Book Chapter:Verse]
...
N. [Book Chapter:Verse]

각 Task agent는:
- apps/pipeline/bible-analysis/core/analyze-single-verse.ts의 analyzeSingleVerse() 함수 사용
- 독립적으로 실행 (서로 의존성 없음)
- 결과를 각자 Supabase에 저장

실행 방법:
npx ts-node -e "
import { analyzeSingleVerse } from './bible-analysis/core/analyze-single-verse';
await analyzeSingleVerse('[Reference]');
"

모든 Task가 완료되면 요약 보고서 제공:
- 성공한 구절 수 / 실패한 구절 수
- 평균 품질 점수
- 총 소요 시간
```

### 사용 예시

**10개 구절 병렬 분석**:
```
Galatians 1:1부터 1:10까지 총 10개 구절을 병렬로 분석해 줘.

각 구절마다 Task agent를 사용해서 동시에 실행:
- Galatians 1:1
- Galatians 1:2
- Galatians 1:3
- Galatians 1:4
- Galatians 1:5
- Galatians 1:6
- Galatians 1:7
- Galatians 1:8
- Galatians 1:9
- Galatians 1:10

실행 명령어: npx ts-node -e "import { analyzeSingleVerse } from './bible-analysis/core/analyze-single-verse'; await analyzeSingleVerse('Galatians 1:X');"

완료 후 요약 보고해 줘.
```

### 에러 핸들링

**재시도 프롬프트**:
```
다음 구절들이 실패했어. 각각 재시도해 줘:
- [Failed Reference 1] - 사유: [error message]
- [Failed Reference 2] - 사유: [error message]

재시도는 exponential backoff 적용 (5초 → 10초 → 20초 대기)
```

---

## 전략 2: 배치 순차 실행

### 스크립트 템플릿

`bible-analysis/workspace/analyze-batch.ts` 생성:

```typescript
import { analyzeSingleVerse } from '../core/analyze-single-verse';
import * as fs from 'fs';

interface BatchResult {
  reference: string;
  success: boolean;
  score?: number;
  error?: string;
  duration: number;
}

async function analyzeBatch(references: string[]): Promise<BatchResult[]> {
  const results: BatchResult[] = [];
  const progressFile = './batch-progress.json';

  // 진행 상황 복원
  let completed: string[] = [];
  if (fs.existsSync(progressFile)) {
    completed = JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
    console.log(`📋 ${completed.length}개 구절 이미 완료됨. 이어서 진행...`);
  }

  for (const reference of references) {
    if (completed.includes(reference)) {
      console.log(`⏭️  ${reference} 건너뛰기 (이미 완료)`);
      continue;
    }

    const startTime = Date.now();
    console.log(`\n🔄 [${results.length + 1}/${references.length}] ${reference} 분석 중...`);

    try {
      const result = await analyzeSingleVerse(reference);
      const duration = Date.now() - startTime;

      results.push({
        reference,
        success: result.success,
        score: result.finalScore,
        duration: duration / 1000
      });

      if (result.success) {
        console.log(`✅ ${reference} 완료 (점수: ${result.finalScore}/100, ${duration / 1000}초)`);
      } else {
        console.log(`⚠️  ${reference} 품질 미달 (점수: ${result.finalScore}/100)`);
      }

      // 진행 상황 저장
      completed.push(reference);
      fs.writeFileSync(progressFile, JSON.stringify(completed, null, 2));

      // Rate limiting (3-5초 대기)
      const waitTime = 3000 + Math.random() * 2000;
      await new Promise(resolve => setTimeout(resolve, waitTime));

    } catch (error: any) {
      const duration = Date.now() - startTime;
      console.error(`❌ ${reference} 실패: ${error.message}`);

      results.push({
        reference,
        success: false,
        error: error.message,
        duration: duration / 1000
      });

      // 에러 발생 시 더 긴 대기 (10초)
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  // 최종 요약
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  const totalTime = results.reduce((sum, r) => sum + r.duration, 0);
  const avgScore = successful.length > 0
    ? successful.reduce((sum, r) => sum + (r.score || 0), 0) / successful.length
    : 0;

  console.log('\n' + '='.repeat(60));
  console.log('📊 배치 분석 완료 요약');
  console.log('='.repeat(60));
  console.log(`✅ 성공: ${successful.length}/${references.length} 구절`);
  console.log(`❌ 실패: ${failed.length}/${references.length} 구절`);
  console.log(`📈 평균 품질 점수: ${avgScore.toFixed(1)}/100`);
  console.log(`⏱️  총 소요 시간: ${(totalTime / 60).toFixed(1)}분`);
  console.log(`⚡ 평균 처리 속도: ${(totalTime / references.length).toFixed(1)}초/구절`);

  if (failed.length > 0) {
    console.log('\n⚠️  실패한 구절:');
    failed.forEach(r => console.log(`   - ${r.reference}: ${r.error}`));
  }

  // 결과 파일 저장
  const reportPath = `./batch-report-${Date.now()}.json`;
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalReferences: references.length,
    successful: successful.length,
    failed: failed.length,
    averageScore: avgScore,
    totalDuration: totalTime,
    results
  }, null, 2));
  console.log(`\n💾 상세 보고서 저장: ${reportPath}`);

  return results;
}

// 실행 예시
const references = [
  'Galatians 1:1',
  'Galatians 1:2',
  'Galatians 1:3',
  // ... 전체 구절 목록
];

analyzeBatch(references).catch(console.error);
```

### 실행 프롬프트

```
bible-analysis/workspace/analyze-batch.ts 스크립트를 만들어 줘.

배치 목록: [Book Name] [Chapter]장 전체 ([N]개 구절)

스크립트 요구사항:
1. analyze-single-verse.ts의 analyzeSingleVerse() 함수 사용
2. 각 구절마다 3-5초 대기 (rate limiting)
3. 진행 상황을 batch-progress.json에 저장 (중단 시 이어서 가능)
4. 에러 발생 시 10초 대기 후 다음 구절 진행
5. 최종 요약 보고서 출력 및 JSON 파일로 저장

완료 후 실행: npx ts-node bible-analysis/workspace/analyze-batch.ts
```

---

## 전략 3: 다중 세션 병렬

### 책 전체 분할 전략

**대형 책 분할 예시** (로마서 16장, 433절):
- 세션 1: 로마서 1-4장 (약 100절)
- 세션 2: 로마서 5-8장 (약 110절)
- 세션 3: 로마서 9-12장 (약 120절)
- 세션 4: 로마서 13-16장 (약 103절)

### 세션별 실행 프롬프트

**세션 1 프롬프트**:
```
로마서 1-4장 전체를 배치 분석해 줘.

구절 범위:
- Romans 1:1 ~ 1:32 (32절)
- Romans 2:1 ~ 2:29 (29절)
- Romans 3:1 ~ 3:31 (31절)
- Romans 4:1 ~ 4:25 (25절)

총 117개 구절을 순차적으로 분석:
1. bible-analysis/workspace/analyze-romans-1-4.ts 스크립트 생성
2. 각 구절마다 3-5초 대기
3. 진행 상황 저장 (romans-1-4-progress.json)
4. 백그라운드 실행: npx ts-node bible-analysis/workspace/analyze-romans-1-4.ts > logs/romans-1-4.log 2>&1 &

완료 예상 시간: 약 90-120분

주기적으로 진행 상황 확인:
tail -f logs/romans-1-4.log
```

### 진행 상황 모니터링

**모니터링 프롬프트**:
```
로마서 1-4장 배치 분석 진행 상황을 확인해 줘.

확인 항목:
1. 로그 파일 확인: tail -50 logs/romans-1-4.log
2. 진행 상황 파일 확인: cat bible-analysis/workspace/romans-1-4-progress.json
3. 현재까지 완료된 구절 수
4. 평균 처리 속도
5. 예상 완료 시간
```

---

## 품질 보증 및 검증

### 분석 완료 후 검증 프롬프트

```
[Book Name] [Chapter Range] 분석 완료 검증을 해 줘.

검증 항목:
1. 모든 구절이 분석되었는지 확인
   - 예상 구절 수: [N]개
   - 실제 분석된 구절 수: [DB에서 확인]

2. 품질 점수 분포 확인
   - 90점 이상: [N]개 (목표: 100%)
   - 70-89점: [N]개 (재분석 필요)
   - 70점 미만: [N]개 (필수 재분석)

3. 데이터 무결성 확인
   - 중복 데이터 없음
   - 모든 구절에 5가지 필수 요소 포함
   - verse_id 매핑 정확성

4. 웹사이트에서 실제 렌더링 확인

검증 SQL:
SELECT
  COUNT(*) as total,
  COUNT(DISTINCT verse_id) as unique_verses,
  AVG(quality_score) as avg_score
FROM (
  SELECT v.id as verse_id, v.reference,
    CASE
      WHEN EXISTS (SELECT 1 FROM sentence_structures WHERE verse_id = v.id)
       AND EXISTS (SELECT 1 FROM vocabulary WHERE verse_id = v.id)
       AND EXISTS (SELECT 1 FROM contextual_explanations WHERE verse_id = v.id)
       AND EXISTS (SELECT 1 FROM korean_translations WHERE verse_id = v.id)
       AND EXISTS (SELECT 1 FROM special_explanations WHERE verse_id = v.id)
      THEN 100 ELSE 0
    END as quality_score
  FROM verses v
  WHERE v.reference ILIKE '[Book] [Chapter]:%'
) as analysis;
```

---

## 에러 복구 전략

### 일반적인 에러 유형 및 해결

**1. Rate Limit 초과**
```
증상: Too many requests 에러
해결: wait time을 5초 → 10초로 증가

스크립트 수정:
const waitTime = 10000 + Math.random() * 5000; // 10-15초
```

**2. 분석 품질 미달 (70점 미만)**
```
증상: 반복적으로 낮은 품질 점수
해결:
1. 해당 구절의 NIV 원문 확인 (특수 문자, 긴 문장 등)
2. 수동으로 더 상세한 분석 지시
3. 예시 참조 (Genesis 1:2) 강조

재분석 프롬프트:
"[Reference] 구절의 분석 품질이 낮아 ([Score]/100).
창세기 1:2 템플릿을 엄격히 따라 재분석해 줘.

특히 다음 항목 강화:
- 문장 구조: 모든 절(clause) 포함
- 주요 단어: 최소 8개, 그리스어/히브리어 원어 필수
- 문맥 설명: 최소 400자 이상 상세 설명
- 특별 설명: 3가지 관점 (문법/신학/역사)
"
```

**3. 데이터베이스 연결 오류**
```
증상: Connection timeout, too many connections
해결:
1. Supabase connection pool 확인
2. 스크립트에서 connection 제대로 close 하는지 확인
3. 배치 크기 줄이기 (100 → 50)
```

**4. 중단된 배치 재개**
```
프롬프트:
"[Book] [Chapter Range] 배치 분석이 [N]번째 구절에서 중단되었어.

진행 상황 파일 확인:
cat bible-analysis/workspace/[book]-progress.json

이어서 실행해 줘:
- 이미 완료된 [N]개 구절 건너뛰기
- [Reference]부터 재시작
- 동일한 progress 파일 사용
"
```

---

## 최적화 팁

### 1. 병렬도 조정
- **높은 품질 우선**: 순차 실행, 충분한 대기 시간
- **속도 우선**: Task agent 10-15개 동시 실행
- **균형**: 배치 순차 실행 + 5초 대기

### 2. 토큰 사용 최적화
- 한 세션에 50-100 구절이 적절 (context limit 고려)
- 복잡한 구절(시편, 예언서)은 더 적게 (30-50)
- 단순한 구절(서신서)은 더 많이 (100-150)

### 3. 실행 시간 예상
- 단순 구절: 평균 0.5-1초 + 대기 3-5초 = **4-6초/구절**
- 복잡 구절: 평균 2-3초 + 대기 3-5초 = **5-8초/구절**
- 100개 구절: 약 **7-13분**
- 1000개 구절: 약 **70-130분**

### 4. 리소스 관리
- 백그라운드 실행 사용 (`&`)
- 로그 파일 분리 (책별, 장별)
- 진행 상황 파일로 중단 지점 복구

---

## 전체 워크플로우 예시: 갈라디아서 전체 분석

### 1단계: 준비
```
갈라디아서 전체 분석 준비를 해 줘.

확인 사항:
1. 총 구절 수 확인 (6장, 149절)
2. NIV 원문 데이터 확인
3. 기존 DB 분석 상태 확인
4. 예상 소요 시간 계산 (약 10-20분)

준비 완료되면 전략 추천해 줘.
```

### 2단계: 전략 선택
```
갈라디아서는 149절이니까 배치 순차 실행 전략을 사용하자.

bible-analysis/workspace/analyze-galatians-full.ts 스크립트 생성:
- Galatians 1:1 ~ 6:18 전체 (149절)
- 3-5초 rate limiting
- 진행 상황 저장 (galatians-progress.json)
- 상세 로그 출력

생성 후 실행: npx ts-node bible-analysis/workspace/analyze-galatians-full.ts
```

### 3단계: 모니터링
```
갈라디아서 분석 진행 상황을 확인해 줘.

tail -50 logs/galatians.log

현재 완료: [N]/149
예상 완료 시간: [계산]
```

### 4단계: 검증
```
갈라디아서 분석 완료 검증:

1. 모든 149절 분석 완료 확인
2. 평균 품질 점수 확인 (목표: 90+)
3. 중복 데이터 확인
4. 웹사이트에서 확인: https://bible-transcription-site.vercel.app/

검증 SQL 실행해 줘.
```

### 5단계: 재분석 (필요 시)
```
다음 구절들이 품질 미달이야. 재분석해 줘:
- Galatians 2:15 (점수: 65/100)
- Galatians 3:28 (점수: 72/100)
- Galatians 5:22-23 (점수: 68/100)

각 구절 수동으로 상세 분석 후 업데이트.
```

---

## 요약: 프롬프트 치트시트

### 소규모 (10-50 구절) - Task Agent
```
[Book] [Chapter]:[Verse Start-End] 범위 [N]개 구절을 Task agent로 병렬 분석해 줘.
각 Task는 독립적으로 analyze-single-verse.ts 사용.
완료 후 요약 보고.
```

### 중규모 (50-200 구절) - 배치 순차
```
[Book] [Chapter Range] 전체 [N]개 구절을 배치 분석해 줘.
analyze-[book].ts 스크립트 생성, 3-5초 대기, 진행 상황 저장.
백그라운드 실행 후 주기적 모니터링.
```

### 대규모 (200+ 구절) - 다중 세션
```
[Book] 전체를 4개 세션으로 분할 분석해 줘.
각 세션: 약 [N]개 구절, 독립 실행.
세션 [X]: [Chapter Range] 분석 및 검증.
```

### 재분석
```
다음 구절들 재분석 (품질 미달):
- [Reference] (점수: [N]/100)
창세기 1:2 템플릿 엄격히 준수, 특히 [약점] 강화.
```

### 검증
```
[Book] [Chapter Range] 분석 완료 검증:
1. 전체 구절 수 확인
2. 품질 점수 분포
3. 데이터 무결성
4. 웹사이트 렌더링
검증 SQL 실행.
```

---

## 다음 세션 시작 시 참조 순서

1. **이 문서** (`PARALLEL_ANALYSIS_STRATEGY.md`) - 전략 및 프롬프트
2. **방법론 문서** (`SINGLE_VERSE_ANALYSIS_METHODOLOGY.md`) - 품질 기준
3. **CLAUDE.md 규칙** - 필수 준수 사항
4. **DB 스키마 문서** (`bible-analysis/docs/supabase/SCHEMA_OVERVIEW.md`) - 데이터 구조

---

**작성일**: 2025-01-10
**버전**: 1.0
**다음 업데이트**: 실제 대규모 배치 실행 후 최적화 사항 반영
