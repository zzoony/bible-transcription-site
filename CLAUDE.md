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
