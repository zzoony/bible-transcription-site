# 구약 성경 전체 분석 진행 가이드

## 빠른 시작

### 새 세션 시작 시
```
다음 명령어를 Claude Code에 입력:

"docs/ANALYSIS_TEMPLATE.md를 읽고, 다음 35개 구절을 분석해줘"
```

### 진행 중일 때
```
간단히 입력:

"next" 또는 "계속" 또는 "다음"
```

### 진행 상황 확인
```bash
npx tsx scripts/check-ot-progress.ts
```

## 전체 워크플로우

1. **초기 설정** (처음 한 번만)
   ```bash
   # 진행 파일 초기화
   echo '{"lastProcessedId": 16706, "lastReference": "Genesis 1:2"}' > .ot-progress.json
   ```

2. **Claude Code에서 시작**
   ```
   "docs/ANALYSIS_TEMPLATE.md를 읽고, 다음 35개 구절을 분석해줘"
   ```

3. **자동 진행**
   - Claude가 35개 분석 → JSON 출력
   - 자동으로 DB 저장
   - 진행 상황 업데이트
   - 다음 35개 준비

4. **계속 진행**
   ```
   "next"
   ```

5. **중단 후 재시작**
   - 진행 상황은 자동 저장됨
   - 새 세션에서: "docs/ANALYSIS_TEMPLATE.md를 읽고, 이어서 진행해줘"

## 진행 상황 파일

`.ot-progress.json`:
```json
{
  "lastProcessedId": 16711,
  "lastReference": "Genesis 1:7",
  "totalProcessed": 7,
  "totalRemaining": 23138,
  "lastBatch": "batch-8.json",
  "timestamp": "2025-10-10T10:30:00Z"
}
```

## 배치 파일 구조

생성되는 파일:
- `scripts/batches/batch-1.json` (35개 구절)
- `scripts/batches/batch-2.json` (35개 구절)
- ...

## 예상 소요 시간

- **총 구절**: 23,145절
- **배치 크기**: 35절
- **총 배치**: 662개
- **배치당 시간**: 약 2-3분
- **예상 총 시간**: 약 22-33시간 (사용자 입력 속도에 따라 다름)

## 트러블슈팅

### 진행 상황이 저장되지 않음
```bash
# 수동으로 진행 파일 확인
cat .ot-progress.json

# 마지막 저장된 배치 확인
ls -lt scripts/batches/ | head -5
```

### 세션 끊김
진행 상황은 자동 저장되므로, 새 세션에서:
```
"docs/ANALYSIS_TEMPLATE.md를 읽고, .ot-progress.json에서 이어서 진행해줘"
```

### 품질 확인
```bash
# 최근 5개 배치 품질 확인
npx tsx scripts/verify-recent-batches.ts
```

## 완료 기준

전체 23,145절 완료 시:
- `.ot-progress.json`의 `totalRemaining`이 0
- `scripts/batches/` 디렉토리에 662개 파일
- 모든 구절이 DB에 저장됨

## 최종 검증

```bash
# 전체 품질 검사
npx tsx scripts/quality-dashboard.ts

# 누락 구절 확인
npx tsx scripts/check-missing-verses.ts
```
