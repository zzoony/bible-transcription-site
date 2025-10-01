# 프로젝트 규칙

## 언어 사용 규칙 ⚠️
**중요: 모든 출력과 커뮤니케이션은 한글을 최우선으로 사용**
- Claude의 모든 응답과 설명은 한글로 작성
- 코드 주석, 커밋 메시지, 문서는 한글 사용
- 오류 메시지와 로그 출력도 한글로 표시
- 영어는 기술 용어나 코드 내부에서만 사용
- 사용자와의 모든 대화는 한글로 진행

## 성경 분석 출력 규칙
- 이모지 사용 금지 - 깔끔한 텍스트 형식만 사용
- 의미적 분류를 주로 하되 문법적 설명도 포함
- IPA 발음과 한국어 발음을 모두 제공
- 주요 단어들은 표 형식으로 정리
- 문맥 설명은 역사적/신학적/문학적 내용을 통합하여 자연스럽게 서술
- 한국어 번역은 직역/의역 구분 없이 하나의 자연스러운 번역
- 특별 설명 섹션으로 문법적/해석적 특이점 설명
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

## 데이터베이스 관련
- Supabase PostgreSQL에서 데이터 조회 및 분석
- 신중한 단계별 접근법 유지 (단일 구절 검증 → 자동화 → 확장)

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
