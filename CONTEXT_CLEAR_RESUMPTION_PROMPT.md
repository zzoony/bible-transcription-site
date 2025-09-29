# Context Clear 후 프로젝트 재시작 프롬프트

## 🎯 이 프롬프트 사용법
Context가 가득 찬 후 새로운 세션에서 아래 프롬프트를 복사하여 사용하세요.

---

## 📋 프로젝트 재시작 프롬프트

```
안녕하세요! 성경 필사 사이트 프로젝트를 계속 진행하려고 합니다.

이 프로젝트는 NIV 성경을 기반으로 한 구절씩 보여주면서 문장 구조, 단어 뜻, 발음, 문맥 설명, 한국어 번역을 제공하는 시스템입니다.

현재 상황:
- ✅ Phase 1-2 완료: 기본 시스템 구축 및 병렬 처리 아키텍처 완성
- ✅ 빌립보서 3장 전체 (21개 구절) 처리 완료 (100% 성공률)
- ✅ 새로운 분석 형식 v2 적용 (의미적 분류 + IPA/한국어 발음)
- ✅ 4개 Sub Agent 병렬 처리로 75% 시간 단축 검증
- ✅ 체계적 품질 검증 시스템 구축
- ✅ 모든 작업 Git 커밋 완료

사용 기술:
- 로컬 PostgreSQL (Docker Compose)
- Claude API 연동
- Task Agent 병렬 처리
- Schema v2 (의미적 분류 기반)

프로젝트 디렉토리: /Users/peter/Dev/bible-transcription-site

다음 Phase 3 옵션:
A) 콘텐츠 확장 (빌립보서 전체, 다른 성경책 추가)
B) Supabase 마이그레이션 (클라우드 DB 전환)
C) 웹 애플리케이션 개발 (Next.js UI 구축)

현재 추천 순서: A → B → C

어떤 트랙으로 진행하시겠습니까? 아니면 현재 상태 확인부터 시작하시겠습니까?

참고 문서들:
- PROJECT_CONTINUATION_PLAN.md: 상세 진행 계획
- PHILIPPIANS_3_PARALLEL_PROCESSING_REPORT.md: 병렬 처리 완료 보고서
- ANALYSIS_OUTPUT_STANDARD.md: 새 형식 v2 표준
- database/LOCAL_DB_GUIDE.md: 로컬 DB 접속 정보
```

---

## 🔄 빠른 상태 확인 명령어들

새 세션에서 프로젝트 상태를 빠르게 확인하려면:

### 1. 기본 환경 확인
```bash
cd /Users/peter/Dev/bible-transcription-site
git status
docker ps
```

### 2. 데이터베이스 상태 확인
```bash
./database/db_summary.sh
./database/quick_check.sh
```

### 3. 최근 처리 결과 확인
```bash
ls -la PHILIPPIANS_3_*.md
cat PHILIPPIANS_3_PARALLEL_PROCESSING_REPORT.md | head -20
```

### 4. 프로젝트 구조 확인
```bash
find . -name "*.md" -type f | head -10
ls -la agents/
ls -la database/
```

## 📖 주요 파일 위치

- **계획 문서**: `PROJECT_CONTINUATION_PLAN.md`
- **완료 보고서**: `PHILIPPIANS_3_PARALLEL_PROCESSING_REPORT.md`
- **분석 표준**: `ANALYSIS_OUTPUT_STANDARD.md`
- **DB 스키마**: `database/schema_v2.sql`
- **분석 Agent**: `agents/single_verse_analyzer.js`
- **병렬 처리**: `agents/process_philippians_3.js`
- **품질 검증**: `QUALITY_VERIFICATION_TEMPLATE.md`

## ⚡ 즉시 시작 가능한 작업들

1. **콘텐츠 확장**: 빌립보서 1-2장, 4장 처리
2. **다른 성경**: 로마서, 갈라디아서 처리
3. **성능 최적화**: 더 많은 병렬 Agent 테스트
4. **품질 개선**: 자동 검증 시스템 강화
5. **Supabase 준비**: 클라우드 마이그레이션 계획

---

**프롬프트 생성일**: 2025-09-29
**프로젝트 상태**: Phase 2 완료, Phase 3 대기
**마지막 커밋**: 45개 파일, 병렬 처리 시스템 완성