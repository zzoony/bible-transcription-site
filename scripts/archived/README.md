# Archived Scripts

이 디렉토리는 Claude API를 사용하던 구버전 분석 스크립트들을 보관합니다.

## 보관 이유

2025년 10월 2일부터 Claude API 대신 **Claude Code 대화형 분석 방식**으로 전환했습니다.

### 변경 사항

**이전 (API 방식):**
- Claude API 호출하여 자동 분석
- 비용 발생 ($$$)
- 프로그래밍적 반복 처리

**현재 (Claude Code 방식):**
- Claude Code와 대화하며 분석
- Subscription만 사용 (비용 절감)
- 실시간 품질 확인 및 수정 가능

## 보관된 파일들

### 분석 스크립트
- `analyze-galatians.ts` - 갈라디아서 전체 분석
- `analyze-missing-galatians.ts` - 누락 구절 분석
- `add-remaining-verses.ts` - 남은 구절 추가
- `retry-missing.ts` - 실패 구절 재시도
- `test-single-galatians.ts` - 단일 구절 테스트
- `analyze-philippians-2-12.ts` - 빌립보서 특정 구절

### 에이전트
- `agents/archived/single_verse_analyzer.js` - 단일 구절 분석 에이전트

## 참고 문서

새로운 분석 방법은 다음 문서를 참조하세요:
- `docs/CLAUDE_CODE_ANALYSIS_GUIDE.md` - Claude Code 기반 분석 가이드
- `claudedocs/philippians_3_1_analysis.md` - 분석 결과 예제

## 복원이 필요한 경우

혹시 API 방식이 필요하면 이 파일들을 `scripts/` 디렉토리로 복사하여 사용할 수 있습니다.
단, `@anthropic-ai/sdk` 패키지와 `ANTHROPIC_API_KEY` 환경 변수가 필요합니다.
