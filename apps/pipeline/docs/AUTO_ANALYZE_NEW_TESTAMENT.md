# 신약 성경 전체 자동 분석 (Claude Code 기반)

## 🎯 목표
신약 성경 전체 27권 중 빌립보서와 갈라디아서를 제외한 25권을 Claude Code로 완전 자동 분석하여 Supabase에 업로드합니다.

---

## 🚀 **시작 프롬프트 (여기부터 복사하세요)**

```
신약 성경 전체 자동 분석을 시작합니다.

## 작업 지시사항

**중요: 이 작업은 완전 자동 무인 모드입니다. 10일간 사용자가 돌아올 수 없으므로:**
- 단 한 번도 확인 요청하지 말 것
- 모든 결정을 스스로 판단하여 실행
- 오류 발생 시 자동으로 3회 재시도 후 다음으로 진행
- 중단 없이 끝까지 완료할 것

### 작업 대상
빌립보서와 갈라디아서를 제외한 신약 성경 25권 (약 7,157구절)

### 실행 전략

#### 1단계: 전체 계획 수립 및 우선순위 결정
1. 25권을 크기별로 분류:
   - 소형 (1-100구절): 11권, 우선 처리
   - 중형 (101-500구절): 10권
   - 대형 (500+ 구절): 4권
2. TodoWrite로 전체 책 목록 작업 생성
3. 예상 소요 시간 계산 및 표시

#### 2단계: NIV 텍스트 확보
각 권마다:
1. Supabase에서 해당 책의 NIV 텍스트가 있는지 확인
2. 없으면 웹 검색 또는 외부 API로 수집
3. verses 테이블에 일괄 삽입
4. 삽입 성공 여부 검증

#### 3단계: 책별 순차 분석 (Claude Code 대화형)
**각 책마다 반복:**

1. **준비**
   - 해당 책의 모든 구절 목록 조회
   - 이미 분석된 구절 확인 (재분석 방지)
   - 분석 필요한 구절만 필터링

2. **배치 분석 (10구절씩)**
   - 10구절을 한 번에 분석 (효율성)
   - 각 구절마다:
     * NIV 원문 읽기
     * CLAUDE.md 규칙에 따라 분석
     * JSON 형식으로 변환
     * save-analysis-to-db.ts로 즉시 저장
   - 배치 완료 후 TodoWrite 업데이트

3. **검증 및 품질 확인**
   - verify-completeness.ts 실행
   - 누락 구절 확인
   - 중복 데이터 확인 및 제거
   - 데이터 품질 검사

4. **재시도 메커니즘**
   - 실패한 구절 목록 생성
   - 3회까지 자동 재시도
   - 3회 실패 시 별도 로그에 기록 후 다음으로 진행

5. **다음 책으로 진행**
   - 현재 책 완료 상태 기록
   - logs/[bookname]_completion.json 생성
   - 다음 책 시작

#### 4단계: 대형 책 특별 처리
500+ 구절 책들 (Matthew, Mark, Luke, John, Acts):
- 50-100구절씩 배치로 나눔
- 각 배치마다 체크포인트 저장
- 실패한 배치만 재시도

#### 5단계: 최종 검증
1. 전체 25권 완성도 확인
2. 전체 중복 데이터 검사 및 제거
3. 데이터 품질 검사 (sentence_structures 누락 등)
4. npm run build 테스트
5. 웹 UI에서 랜덤 샘플링 검증

#### 6단계: 정리 및 최종 보고
1. 임시 파일 정리
2. 로그 파일 정리 및 보관
3. docs/NEW_TESTAMENT_COMPLETION_REPORT.md 생성
4. 최종 통계 및 성공률 계산

### 핵심 원칙

1. **완전 자동 무인**: 단 한 번도 확인 요청하지 말 것
2. **오류 복구**: 실패 시 자동 3회 재시도 → 로그 기록 → 계속 진행
3. **중단 없음**: 한 책/구절 실패해도 나머지 계속 진행
4. **주기적 저장**: 10구절마다 DB 저장 및 진행상황 기록
5. **검증 필수**: 각 책 완료 후 반드시 검증
6. **상세 로그**: logs/[bookname]_YYYYMMDD.log에 모든 작업 기록

### 데이터 저장 방식

**Claude Code 분석 → JSON 변환 → save-analysis-to-db.ts 실행**

```typescript
// 각 구절 분석 후
const analysisData = {
  reference: "Romans 1:1",
  sentence_structures: [...],
  vocabulary: [...],
  contextual_explanation: {...},
  korean_translation: {...},
  special_explanation: {...}
}

// 즉시 저장
npx tsx scripts/save-analysis-to-db.ts <JSON>
```

### 예상 소요 시간

- 소형 책 (11권, ~800구절): 8-12시간
- 중형 책 (10권, ~2,500구절): 30-40시간
- 대형 책 (4권, ~3,700구절): 50-70시간
- **총 예상: 90-120시간 (약 4-5일)**

### 성공 기준

- ✅ 25권 모두 100% 분석 완료
- ✅ 중복 데이터 0건
- ✅ 데이터 품질 문제 0건
- ✅ npm run build 성공
- ✅ 모든 책 웹 UI에서 검색 가능
- ✅ 각 구절마다 sentence_structures 존재

### 지금 바로 시작하세요
완료되면 docs/NEW_TESTAMENT_COMPLETION_REPORT.md만 보여주세요.
```

---

## 📋 작업 대상 (25권, 약 7,157구절)

### 소형 책 (1-100구절) - 11권, 우선 처리
1. Philemon (빌레몬서) - 25구절 ⭐ 가장 먼저
2. 3 John (요한3서) - 14구절
3. 2 John (요한2서) - 13구절
4. Jude (유다서) - 25구절
5. Titus (디도서) - 46구절
6. 2 Thessalonians (데살로니가후서) - 47구절
7. 2 Peter (베드로후서) - 61구절
8. 2 Timothy (디모데후서) - 83구절
9. 1 Thessalonians (데살로니가전서) - 89구절
10. Colossians (골로새서) - 95구절
11. 1 Peter (베드로전서) - 105구절

**소계: 약 603구절**

### 중형 책 (101-500구절) - 10권
12. 1 John (요한1서) - 105구절
13. James (야고보서) - 108구절
14. 1 Timothy (디모데전서) - 113구절
15. Ephesians (에베소서) - 155구절
16. 2 Corinthians (고린도후서) - 257구절
17. Hebrews (히브리서) - 303구절
18. Revelation (요한계시록) - 404구절
19. Romans (로마서) - 433구절
20. 1 Corinthians (고린도전서) - 437구절

**소계: 약 2,315구절**

### 대형 책 (500+ 구절) - 4권, 마지막 처리
21. Mark (마가복음) - 678구절
22. John (요한복음) - 879구절
23. Acts (사도행전) - 1,007구절
24. Matthew (마태복음) - 1,071구절
25. Luke (누가복음) - 1,151구절

**소계: 약 4,786구절**

**총 예상 구절: 7,704구절 (빌립보서/갈라디아서 제외 시 약 7,451구절)**

---

## 🛠️ 주요 변경사항 (Claude API → Claude Code)

### 제거된 것
❌ `scripts/analyze-[book].ts` - API 호출 스크립트
❌ `anthropic.messages.create()` - API 호출
❌ API rate limiting (5초 대기)
❌ exponential backoff
❌ ANTHROPIC_API_KEY 환경 변수

### 추가된 것
✅ Claude Code 대화형 분석
✅ `scripts/fetch-verse.ts` - 구절 조회
✅ `scripts/save-analysis-to-db.ts` - DB 저장
✅ 10구절 배치 분석 (효율성)
✅ 실시간 품질 확인

### 워크플로우 변경

**이전 (API):**
```
스크립트 실행 → API 호출 → 자동 분석 → DB 저장
```

**현재 (Claude Code):**
```
Claude Code 대화 → 분석 수행 → JSON 생성 → save-analysis-to-db.ts 실행 → DB 저장
```

---

## 📊 진행 상황 추적

각 책마다 `logs/[bookname]_completion.json` 생성:

```json
{
  "book": "Romans",
  "total_verses": 433,
  "completed": 433,
  "failed": 0,
  "retried": 5,
  "duplicates_removed": 2,
  "start_time": "2025-10-02T10:00:00Z",
  "end_time": "2025-10-02T18:30:00Z",
  "duration_hours": 8.5,
  "status": "completed",
  "quality_score": "100%"
}
```

---

## 🔧 문제 해결 전략

### 분석 실패
- 즉시 재시도 (최대 3회)
- 3회 실패 시 `logs/failed_verses.json`에 기록
- 다음 구절로 진행

### 중복 데이터
- 각 책 완료 후 자동 중복 검사
- `DELETE FROM sentence_structures WHERE verse_id IN (중복 ID)`
- 재검증

### 누락 구절
- verify-completeness.ts로 누락 확인
- 누락 구절 목록 생성
- 자동 재분석

### 품질 문제
- sentence_structures 개수 < 1 인 구절 재분석
- vocabulary 개수 < 3 인 구절 재분석
- 특정 필드 누락 시 재분석

---

## 📝 최종 보고서 형식

`docs/NEW_TESTAMENT_COMPLETION_REPORT.md`:

```markdown
# 신약 성경 전체 분석 완료 보고서

생성일: 2025-10-XX
분석 방식: Claude Code (API 미사용)

## 전체 통계
- 총 처리 권수: 25/25 (100%)
- 총 구절 수: 7,451/7,451 (100%)
- 총 소요 시간: XX시간 XX분
- 성공률: 99.X%

## 권별 상세 결과
| 책명 | 구절수 | 완료 | 실패 | 재시도 | 소요시간 |
|------|--------|------|------|--------|----------|
| Philemon | 25 | 25 | 0 | 0 | 0.5h |
| ... | ... | ... | ... | ... | ... |

## 데이터 품질
- 중복 제거: XX건
- 재시도 성공: XX건
- 최종 실패: X건 (0.X%)
- sentence_structures 평균: X개/구절
- vocabulary 평균: X개/구절

## 실패 구절 (있는 경우)
- Romans 3:15 - 이유: [...]
- ...

## 검증 결과
- ✅ npm run build 성공
- ✅ 웹 UI 검색 테스트 통과
- ✅ 랜덤 샘플링 품질 확인 완료

## 다음 단계
1. 실패 구절 수동 재분석 (X건)
2. 구약 성경 분석 계획
3. 추가 번역본 추가 검토
```

---

## 🎯 실행 전 체크리스트

- [x] .env 파일 환경 변수 확인
- [x] Supabase 연결 확인
- [x] ~~Claude API 키 확인~~ (불필요)
- [x] 디스크 공간 확인 (최소 5GB)
- [x] 안정적인 인터넷 연결
- [x] Claude Code 세션 유지 가능 여부 확인
- [x] 10일간 중단 없이 실행 가능 여부 확인

---

## 💡 효율성 팁

### 배치 분석
- 한 번에 10구절씩 분석 (개별 분석보다 빠름)
- 간단한 구절은 20개씩도 가능

### 체크포인트
- 50구절마다 진행상황 저장
- 중단 시 재시작 가능

### 우선순위
- 소형 책부터 시작 (빠른 성공 경험)
- 대형 책은 마지막 (안정성 확보 후)

---

**이 프롬프트를 Claude Code에 복사하여 붙여넣으면 신약 성경 25권이 완전 자동으로 분석됩니다.**
