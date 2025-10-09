# Hebrews 분석 작업 상태 보고

## 현재 상황

### 완료된 작업
- ✅ Hebrews 미분석 구절 조회: 총 231개 구절 확인
- ✅ 5개 배치로 분할 완료 (배치당 최대 50개 구절)
  - Batch 1: 50개 구절 (Hebrews 1:2 ~ )
  - Batch 2: 50개 구절
  - Batch 3: 50개 구절
  - Batch 4: 50개 구절
  - Batch 5: 31개 구절

### 발견된 문제
❌ **Anthropic API 키 인증 오류**
```
401 {"type":"error","error":{"type":"authentication_error","message":"invalid x-api-key"}}
```

.env 파일에 저장된 ANTHROPIC_API_KEY가 유효하지 않거나 만료되었습니다.

## 해결 방법 옵션

### 옵션 1: API 키 갱신 (권장)
1. Anthropic 콘솔에서 새로운 API 키 발급
2. `.env` 파일의 `ANTHROPIC_API_KEY` 업데이트
3. `analyze-hebrews.ts` 스크립트 재실행

### 옵션 2: Claude Code를 통한 수동 분석
Claude Code 세션에서 직접 각 구절을 분석하여 데이터베이스에 저장하는 방식입니다.

**장점:**
- API 키 불필요
- 실시간 모니터링 가능
- 오류 발생 시 즉시 대응

**단점:**
- 231개 구절 처리 시 시간이 오래 걸림
- 수동 개입 필요

### 옵션 3: 배치 처리 스크립트 수정
Claude Code를 활용하여 배치별로 구절을 분석하고 결과를 JSON 파일로 저장한 후, 별도 스크립트로 데이터베이스에 일괄 삽입하는 방식입니다.

## 준비된 리소스

### 배치 파일 위치
```
/Users/peter/Dev/bible-transcription-site/apps/pipeline/hebrews_batches/
├── batch_01.json (50 verses)
├── batch_02.json (50 verses)
├── batch_03.json (50 verses)
├── batch_04.json (50 verses)
├── batch_05.json (31 verses)
├── SUMMARY.json
└── CHECKLIST.md
```

### 분석 스크립트
- `scripts/analyze-hebrews.ts` - 자동 분석 스크립트 (API 키 필요)
- `scripts/analyze-hebrews-remaining.ts` - 미분석 구절 조회 및 배치 생성

## 다음 단계 권장사항

1. **즉시 실행 가능 (API 키 갱신 후):**
   ```bash
   # .env 파일에서 ANTHROPIC_API_KEY 업데이트
   npx tsx scripts/analyze-hebrews.ts
   ```

2. **대안 (수동 분석):**
   Claude Code를 사용하여 배치별로 순차 분석 진행

## 통계

| 항목 | 수량 |
|------|------|
| 전체 Hebrews 구절 | 303개 |
| 이미 분석됨 | 72개 (23.8%) |
| 분석 필요 | 231개 (76.2%) |
| 배치 수 | 5개 |
| 예상 소요 시간 (API 사용) | 약 12분 (3초/구절) |

## 생성된 날짜
2025-10-06
