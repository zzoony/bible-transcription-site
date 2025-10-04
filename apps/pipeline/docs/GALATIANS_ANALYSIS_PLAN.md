# 갈라디아서 자동 분석 실행 계획서

> **작성일:** 2025-09-30
> **목적:** 빌립보서 성공 경험을 바탕으로 갈라디아서 전체 구절을 자동 분석하여 Supabase에 업로드
> **예상 소요 시간:** 2-2.5시간
> **실행 모드:** 완전 자동 (사용자 확인 불필요)

---

## 📚 프로젝트 배경

### 현재 상태
- **빌립보서:** 104구절 100% 분석 완료 ✅
- **갈라디아서:** 149구절 미분석 (작업 대상)
- **배포 상태:** Vercel 프로덕션 배포 완료
- **GitHub PR:** #1 오픈 상태

### 기술 스택
- Next.js 14 + TypeScript
- Supabase PostgreSQL
- Anthropic Claude API (Sonnet 4.5)
- Vercel 호스팅

---

## 🎓 빌립보서 작업에서 얻은 교훈

### ✅ 성공 요인
1. **자동화 스크립트** - `add-remaining-verses.ts`로 Claude API 활용한 일괄 분석
2. **검증 스크립트** - `verify-completeness.ts`로 누락/불완전 구절 즉시 탐지
3. **단계적 접근** - 단일 구절 테스트 → 소규모 배치 → 전체 실행
4. **진행상황 로깅** - 실시간 진행 상황 모니터링

### ⚠️ 발생했던 문제들
1. **중복 데이터 생성**
   - 원인: Philippians 2:12 수동 분석 후 자동 스크립트 실행
   - 결과: sequence_order별 중복 구조 (6개 → 3개로 수정)
   - 교훈: 실행 전 기존 데이터 확인 필수

2. **부분 실패 처리**
   - 원인: 일부 구절 API 호출 실패
   - 결과: 42개 구절 누락 → 수동 재실행
   - 교훈: 실패한 구절만 재시도하는 복구 로직 필요

3. **타입 오류**
   - 원인: sentence_structure를 null로 설정
   - 결과: 프로덕션 빌드 실패
   - 교훈: TypeScript 인터페이스 정확히 준수

4. **검증 누락**
   - 원인: 실행 후 바로 완료 가정
   - 결과: 중복/누락 발견 지연
   - 교훈: 반드시 검증 스크립트 실행

---

## 🎯 갈라디아서 처리 5단계 계획

### Phase 1: 사전 조사 및 환경 검증 (10분)

#### 목표
현재 상태 파악 및 실행 환경 안전성 확인

#### 작업 내용

**1.1 갈라디아서 기본 정보**
- 총 6장 (Galatians 1-6)
- 총 149구절 예상
- NIV 영어 원문 기준

**1.2 데이터베이스 현황 조사**
```bash
# Supabase에 접속하여 확인
npx ts-node -e "
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function check() {
  const { data } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Galatians%')
    .order('id');

  console.log(\`Total Galatians verses: \${data?.length || 0}\`);

  if (data && data.length > 0) {
    const { data: analyzed } = await supabase
      .from('sentence_structures')
      .select('verse_id')
      .in('verse_id', data.map(v => v.id));

    console.log(\`Already analyzed: \${new Set(analyzed?.map(a => a.verse_id)).size}\`);
  }
}

check();
"
```

**1.3 환경 변수 검증**
```bash
# .env 파일 확인
if [ -f .env ]; then
  echo "✅ .env file exists"
  grep -q "NEXT_PUBLIC_SUPABASE_URL" .env && echo "✅ SUPABASE_URL found"
  grep -q "SUPABASE_SERVICE_KEY" .env && echo "✅ SERVICE_KEY found"
  grep -q "ANTHROPIC_API_KEY" .env && echo "✅ ANTHROPIC_KEY found"
else
  echo "❌ .env file not found!"
  exit 1
fi
```

#### 예상 결과
```
✅ Total Galatians verses: 149
✅ Already analyzed: 0
✅ All environment variables present
```

---

### Phase 2: 스크립트 준비 (15분)

#### 2.1 메인 분석 스크립트 생성

**파일:** `scripts/analyze-galatians.ts`

**핵심 기능:**
1. Galatians 구절만 필터링
2. 중복 방지 (이미 분석된 구절 스킵)
3. 3초 대기 (API rate limit 회피)
4. 진행상황 로깅
5. 오류 복구 (실패 시 계속 진행)

**중복 방지 로직:**
```typescript
// 이미 분석된 구절 확인
const { data: existing } = await supabase
  .from('sentence_structures')
  .select('id')
  .eq('verse_id', verseId)
  .limit(1)

if (existing && existing.length > 0) {
  console.log(`  ⏭️  Already analyzed, skipping...`)
  skippedCount++
  continue
}
```

#### 2.2 검증 스크립트 생성

**파일:** `scripts/verify-galatians.ts`

**검증 항목:**
- 총 구절 수 vs 분석 완료 수
- sentence_structures: 0개인 구절 찾기
- 중복 검사 (sequence_order별)
- 데이터 품질 (빈 문자열, NULL 체크)

#### 2.3 중복 제거 스크립트 생성

**파일:** `scripts/fix-galatians-duplicates.ts`

**로직:**
- sequence_order별로 그룹핑
- 각 그룹에서 ID가 가장 큰 것(최신) 유지
- 나머지 삭제

#### 2.4 테스트 실행

```bash
# 단일 구절 테스트
npx ts-node scripts/analyze-galatians.ts --test --verse "Galatians 1:1"

# 예상 출력:
# [TEST] Galatians 1:1
#   ✅ Added 2 sentence structures
#   ✅ Added 8 vocabulary entries
#   ✅ Added contextual explanation
#   ✅ Added Korean translation
#   ✅ Test successful!
```

---

### Phase 3: 일괄 분석 실행 (75-90분)

#### 3.1 실행 전 최종 체크

```bash
# 1. 현재 디렉토리 확인
pwd
# Expected: /Users/peter/Dev/bible-transcription-site

# 2. 환경 변수 로드 확인
source .env
echo "Supabase URL: ${NEXT_PUBLIC_SUPABASE_URL:0:30}..."
echo "Anthropic Key: ${ANTHROPIC_API_KEY:0:20}..."

# 3. TypeScript 컴파일 확인
npx tsc --noEmit
```

#### 3.2 본 실행

```bash
# 로그 파일과 함께 실행
npx ts-node scripts/analyze-galatians.ts 2>&1 | tee logs/galatians_analysis_$(date +%Y%m%d_%H%M%S).log
```

#### 3.3 진행상황 예시

```
🔍 Starting Galatians Analysis...
📖 Found 149 verses to analyze
⏱️  Estimated completion: 75 minutes

[1/149] Galatians 1:1
  ✅ Added 2 sentence structures
  ✅ Added 8 vocabulary entries
  ✅ Added contextual explanation
  ✅ Added Korean translation
  ⏱️  ETA: 74 minutes

[10/149] Galatians 1:10
  ✅ Completed (10/149 = 6.7%)
  ⏱️  ETA: 65 minutes

[50/149] Galatians 3:8
  ✅ Completed (50/149 = 33.6%)
  ⏱️  ETA: 35 minutes

[100/149] Galatians 5:12
  ✅ Completed (100/149 = 67.1%)
  ⏱️  ETA: 15 minutes

[149/149] Galatians 6:18
  ✅ COMPLETED!

📊 Final Statistics:
  Total: 149 verses
  Successful: 149
  Failed: 0
  Skipped: 0
  Duration: 74 minutes
```

#### 3.4 안전장치

**Rate Limiting 회피:**
```typescript
// 각 구절 처리 후 3초 대기
await new Promise(resolve => setTimeout(resolve, 3000))
```

**오류 복구:**
```typescript
try {
  await analyzeAndInsert(verse)
  successCount++
} catch (error) {
  console.error(`  ❌ Error: ${error.message}`)
  failedVerses.push(verse.reference)
  // 계속 진행 (중단하지 않음)
}
```

**진행상황 저장:**
```typescript
// 10구절마다 진행상황 파일 업데이트
if (index % 10 === 0) {
  fs.writeFileSync('galatians_progress.json', JSON.stringify({
    lastProcessed: verse.reference,
    successCount,
    failedCount,
    timestamp: new Date().toISOString()
  }))
}
```

---

### Phase 4: 철저한 검증 (20분)

#### 4.1 자동 검증 실행

```bash
npx ts-node scripts/verify-galatians.ts
```

**검증 항목:**

**1. 완성도 검사**
```sql
SELECT
  COUNT(*) as total_verses,
  COUNT(DISTINCT ss.verse_id) as analyzed_verses
FROM verses v
LEFT JOIN sentence_structures ss ON v.id = ss.verse_id
WHERE v.reference LIKE 'Galatians%';
```

**2. 중복 검사**
```sql
SELECT
  v.reference,
  ss.sequence_order,
  COUNT(*) as duplicate_count
FROM sentence_structures ss
JOIN verses v ON ss.verse_id = v.id
WHERE v.reference LIKE 'Galatians%'
GROUP BY v.reference, ss.sequence_order
HAVING COUNT(*) > 1;
```

**3. 데이터 품질 검사**
```sql
-- 빈 문자열 체크
SELECT COUNT(*) FROM sentence_structures ss
JOIN verses v ON ss.verse_id = v.id
WHERE v.reference LIKE 'Galatians%'
  AND (ss.original_text = '' OR ss.korean_translation = '');

-- NULL 체크
SELECT COUNT(*) FROM sentence_structures ss
JOIN verses v ON ss.verse_id = v.id
WHERE v.reference LIKE 'Galatians%'
  AND (ss.original_text IS NULL OR ss.korean_translation IS NULL);
```

#### 4.2 예상 검증 결과

```
🔍 Verifying Galatians Analysis Completeness

📖 Book: Galatians

📊 Statistics
============================================================
Total verses: 149
✅ Complete: 149
❌ Missing all structures: 0
⚠️  Potentially incomplete: 0

🔄 Duplicate Check
============================================================
✅ No duplicates found

📝 Data Quality Check
============================================================
✅ No empty strings found
✅ No NULL values found
✅ All IPA pronunciations valid

✅ ✅ ✅  ALL VERSES COMPLETE! ✅ ✅ ✅
============================================================
```

#### 4.3 샘플 수동 검증

**검증할 구절:**
1. Galatians 1:1 (첫 구절)
2. Galatians 3:16 (핵심 구절 - "seed" vs "seeds")
3. Galatians 6:18 (마지막 구절)

**각 구절마다 확인:**
- [ ] sentence_structures: 2-3개 존재
- [ ] vocabulary: 5-10개 존재
- [ ] contextual_explanation: 통합 설명 존재
- [ ] korean_translation: 자연스러운 번역
- [ ] special_explanation: 있을 수도, 없을 수도

---

### Phase 5: 문제 해결 (필요시, 0-30분)

#### 5.1 누락 구절 발견 시

```bash
# 누락된 구절 목록 확인
npx ts-node scripts/find-missing-galatians.ts

# 출력 예시:
# ❌ Missing verses:
#   - Galatians 2:5
#   - Galatians 4:12
#   - Galatians 5:23

# 누락 구절만 재분석
npx ts-node scripts/analyze-galatians.ts --only-missing
```

#### 5.2 중복 데이터 발견 시

```bash
# 중복 확인
npx ts-node scripts/verify-galatians.ts --check-duplicates

# 중복 제거 (최신 데이터 유지)
npx ts-node scripts/fix-galatians-duplicates.ts

# 재검증
npx ts-node scripts/verify-galatians.ts
```

#### 5.3 데이터 품질 문제 발견 시

**빈 문자열 발견:**
```bash
# 해당 구절 ID 확인 후 삭제
npx ts-node -e "
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
await supabase.from('sentence_structures').delete().eq('id', PROBLEM_ID);
"

# 해당 구절만 재분석
npx ts-node scripts/analyze-galatians.ts --verse "Galatians X:Y"
```

---

## 🛡️ 안전장치 및 롤백

### 백업 전략

#### 1. 실행 전 백업 (권장)
```bash
# Galatians 관련 모든 데이터 JSON으로 백업
npx ts-node scripts/backup-galatians.ts

# 출력: backups/galatians_backup_20250930_153045.json
```

#### 2. 백업 내용
- verses 테이블 (Galatians 관련)
- sentence_structures
- vocabulary
- contextual_explanations
- korean_translations
- special_explanations

### 롤백 계획

#### 완전 롤백 (모든 데이터 삭제)
```bash
npx ts-node scripts/rollback-galatians.ts

# 확인 메시지:
# ⚠️  WARNING: This will delete ALL Galatians analysis data
# ⚠️  Type 'DELETE GALATIANS' to confirm:
```

#### 백업 복원
```bash
# 가장 최근 백업 복원
npx ts-node scripts/restore-galatians.ts

# 특정 백업 복원
npx ts-node scripts/restore-galatians.ts backups/galatians_backup_20250930_153045.json
```

---

## 📊 예상 결과

### 데이터베이스 최종 상태

```
Galatians 분석 완료 통계:

verses: 149개
├─ sentence_structures: 약 350개 (평균 2.3개/구절)
│  ├─ 의미적 분류: 호칭구, 명령절, 설명절, 조건절 등
│  └─ 문법적 설명 포함
│
├─ vocabulary: 약 1,200개 (평균 8개/구절)
│  ├─ IPA 발음: /ˈɡæləʃənz/
│  ├─ 한국어 발음: 갈라시안스
│  └─ 품사 및 정의
│
├─ contextual_explanations: 149개 (1개/구절)
│  ├─ 역사적 배경
│  ├─ 신학적 의미
│  └─ 문학적 특징
│
├─ korean_translations: 149개 (1개/구절)
│  └─ 자연스러운 한국어 번역
│
└─ special_explanations: 약 70개 (필요한 구절만)
   ├─ 문법적 특이점
   └─ 해석적 논점
```

### 소요 시간 상세

| Phase | 작업 내용 | 예상 시간 |
|-------|-----------|-----------|
| 1 | 사전 조사 및 환경 검증 | 10분 |
| 2 | 스크립트 준비 및 테스트 | 15분 |
| 3 | 일괄 분석 실행 (149구절) | 75분 |
| 4 | 검증 및 품질 확인 | 20분 |
| 5 | 문제 해결 (필요시) | 0-30분 |
| **합계** | | **2-2.5시간** |

### API 비용 예상

```
Claude Sonnet 4.5 기준:
- Input tokens: 149 verses × 500 tokens = 74,500 tokens
- Output tokens: 149 verses × 3,500 tokens = 521,500 tokens
- Total: 596,000 tokens
- 비용: 약 $2.00 (Input $0.25 + Output $1.75)
```

---

## ✅ 최종 체크리스트

### 실행 전 (Phase 1-2)
- [ ] 프로젝트 디렉토리 위치 확인
- [ ] 환경 변수 3개 모두 설정됨
- [ ] Galatians 구절 149개 확인
- [ ] 기존 분석 데이터 0건 확인
- [ ] 스크립트 3개 생성 완료
- [ ] 단일 구절 테스트 성공
- [ ] TypeScript 컴파일 오류 없음

### 실행 중 (Phase 3)
- [ ] 로그 파일 생성 확인
- [ ] 10구절마다 진행 상황 로그 확인
- [ ] 오류 발생 시 자동 스킵 확인
- [ ] ETA 표시 정상 작동

### 실행 후 (Phase 4-5)
- [ ] verify-galatians.ts 실행
- [ ] 149/149 구절 완료 확인
- [ ] 중복 데이터 0건 확인
- [ ] 데이터 품질 문제 0건 확인
- [ ] 샘플 구절 3개 수동 검증
- [ ] 웹 UI에서 Galatians 검색 테스트
- [ ] 프로덕션 빌드 성공 확인

---

## 🚀 자동 실행 명령어 시퀀스

리부팅 후 다음 명령어들을 순차 실행:

```bash
# 0. 작업 디렉토리 이동
cd /Users/peter/Dev/bible-transcription-site

# 1. Phase 1: 사전 조사
npx ts-node scripts/check-galatians-status.ts

# 2. Phase 2: 테스트
npx ts-node scripts/analyze-galatians.ts --test --verse "Galatians 1:1"

# 3. Phase 3: 본 실행
mkdir -p logs
npx ts-node scripts/analyze-galatians.ts 2>&1 | tee logs/galatians_$(date +%Y%m%d_%H%M%S).log

# 4. Phase 4: 검증
npx ts-node scripts/verify-galatians.ts

# 5. Phase 5: 문제 해결 (필요시)
# npx ts-node scripts/fix-galatians-duplicates.ts

# 6. 최종 확인
npm run build
```

---

## 📝 작업 완료 기준

다음 조건이 모두 충족되면 작업 완료:

1. ✅ **완성도:** 149/149 구절 분석 완료
2. ✅ **중복:** 중복 데이터 0건
3. ✅ **품질:** 빈 문자열, NULL 값 0건
4. ✅ **웹 UI:** Galatians 검색 시 149개 결과 표시
5. ✅ **빌드:** `npm run build` 성공
6. ✅ **타입:** TypeScript 오류 0개

---

## 🔗 관련 문서

- **재개 프롬프트:** `docs/RESUME_GALATIANS.md`
- **빌립보서 완료 보고서:** `docs/PHILIPPIANS_COMPLETION_REPORT.md` (있다면)
- **프로젝트 규칙:** `CLAUDE.md`
- **데이터베이스 스키마:** `database/schema.sql`

---

**문서 버전:** 1.0
**최종 수정:** 2025-09-30
**다음 검토일:** 작업 완료 후