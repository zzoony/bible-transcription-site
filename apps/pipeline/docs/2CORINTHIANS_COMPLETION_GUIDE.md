# 2 Corinthians 분석 완료 가이드

## 현재 진행 상황 (2025-10-06)

### 완료된 구절
- ✅ 2 Corinthians 1:1-10 (10개 구절)
- 진행률: 10/257 (3.9%)

### 사용된 스크립트
- `scripts/batch-save-2cor-1-1-5.ts` - 첫 5개 구절
- `scripts/batch-save-2cor-1-6-10.ts` - 다음 5개 구절

## 남은 작업

### 우선순위 1: 1장 완료 (14개 구절)
- 2 Corinthians 1:11-24
- 예상 소요 시간: 2-3시간
- 권장 배치 크기: 5-7개 구절씩

### 우선순위 2: 2-5장 (주요 신학 장들)
- 2 Corinthians 2장 (17개 구절)
- 2 Corinthians 3장 (18개 구절)
- 2 Corinthians 4장 (18개 구절)
- 2 Corinthians 5장 (21개 구절)
- 예상 소요 시간: 4-5시간

### 우선순위 3: 6-13장 (나머지)
- 2 Corinthians 6-13장 (179개 구절)
- 예상 소요 시간: 10-12시간

## 작업 방법

### 방법 1: 수동 배치 스크립트 (현재 사용 중)

각 배치마다 새 스크립트를 작성:

```bash
# 1. 구절 조회
for i in {11..15}; do npx tsx scripts/get-verse.ts "2 Corinthians 1:$i"; done

# 2. 배치 스크립트 작성
# scripts/batch-save-2cor-1-11-15.ts 생성
# 기존 패턴을 따라 AnalysisData 배열 작성

# 3. 실행
npx tsx scripts/batch-save-2cor-1-11-15.ts

# 4. 검증
npx tsx scripts/check-2corinthians.ts
```

**장점:**
- 높은 품질의 개별 분석
- CLAUDE.md 규칙 완전 준수
- 각 구절의 신학적 깊이 확보

**단점:**
- 시간 소모가 큼 (257개 구절에 8-10시간)
- Agent의 집중적인 작업 필요

### 방법 2: 반자동화 (권장)

여러 세션에 걸쳐 진행:

**세션 1: 1장 완료 (현재 진행 중)**
```bash
# 1:11-15
npx tsx scripts/batch-save-2cor-1-11-15.ts
# 1:16-20
npx tsx scripts/batch-save-2cor-1-16-20.ts
# 1:21-24
npx tsx scripts/batch-save-2cor-1-21-24.ts
```

**세션 2-5: 한 장씩 완료**
```bash
# 2장 전체
npx tsx scripts/batch-save-2cor-2-1-17.ts
# 3장을 두 배치로
npx tsx scripts/batch-save-2cor-3-1-10.ts
npx tsx scripts/batch-save-2cor-3-11-18.ts
```

**세션 6-10: 나머지 장들**

### 방법 3: 대량 자동화 (추후 고려)

Claude API나 LLM 파이프라인을 통한 자동 분석:

```typescript
// 향후 구현 가능
// scripts/auto-analyze-2corinthians.ts
// - 각 구절을 Claude API로 분석
// - CLAUDE.md 규칙을 프롬프트로 제공
// - 결과를 자동으로 DB에 저장
```

## 품질 검증

### 각 배치 완료 후
```bash
# 진행 상황 확인
npx tsx scripts/check-2corinthians.ts

# 특정 구절 품질 확인
npx tsx scripts/get-verse.ts "2 Corinthians 1:10"
```

### 전체 완료 후
```bash
# 중복 검사
npx tsx scripts/fix-2corinthians-duplicates.ts

# 완전성 검증
npx tsx scripts/verify-2corinthians.ts

# 웹사이트 빌드 테스트
cd ../../web
npm run build
```

## 분석 품질 기준

### CLAUDE.md 규칙 체크리스트

#### 문장 구조 분석
- [x] 모든 주요 문장/절 포함
- [x] 의미적 분류 + 문법적 설명
- [x] sequence_order 올바른 순서

#### 어휘 분석
- [x] IPA 발음 제공
- [x] 한국어 발음 제공
- [x] 핵심 단어들 포함

#### 문맥 설명
- [x] 역사적/신학적/문학적 배경 통합
- [x] 이모지 사용 금지
- [x] 자연스러운 서술

#### 한국어 번역
- [x] 자연스러운 번역
- [x] 직역/의역 구분 없음

#### 특별 설명 (선택)
- [x] 문법적/해석적 특이점만 포함

## 예상 일정

### 현실적 시간표 (5-7일)

**Day 1: 1장 완료**
- 세션 1: 1:11-17 (3시간)
- 세션 2: 1:18-24 (3시간)
- 결과: 24/257 완료 (9.3%)

**Day 2-3: 2-4장**
- 각 장당 4-5시간
- 결과: 77/257 완료 (30%)

**Day 4-5: 5-8장**
- 각 장당 4-5시간
- 결과: 156/257 완료 (60%)

**Day 6-7: 9-13장**
- 마지막 장들 완료
- 검증 및 품질 확인
- 결과: 257/257 완료 (100%)

## 현재 우선 작업

1. **즉시:** 1장 나머지 14개 구절 완료
   ```bash
   # 다음 세션에서 실행
   npx tsx scripts/batch-save-2cor-1-11-15.ts
   npx tsx scripts/batch-save-2cor-1-16-20.ts
   npx tsx scripts/batch-save-2cor-1-21-24.ts
   ```

2. **이번 주:** 2-5장 완료 (핵심 신학 장들)

3. **다음 주:** 6-13장 완료

## 참고 파일

### 완료된 배치 스크립트
- `scripts/batch-save-2cor-1-1-5.ts`
- `scripts/batch-save-2cor-1-6-10.ts`

### 유틸리티 스크립트
- `scripts/check-2corinthians.ts` - 진행 상황 확인
- `scripts/save-analysis-to-db.ts` - 저장 로직

### 패턴 참고
- Titus, Philemon, Jude 완료 사례
- `scripts/batch-save-titus-*.ts` 파일들

## 연락처 및 지원

작업 중 문제 발생 시:
1. 에러 메시지 확인
2. DB 연결 확인 (.env 파일)
3. 중복 데이터 확인
4. schema 변경 사항 확인

---

마지막 업데이트: 2025-10-06
작업자: Claude Code Agent
진행률: 10/257 (3.9%)
