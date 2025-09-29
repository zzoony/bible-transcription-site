# 성경 필사 사이트

성경 구절별 상세 분석을 제공하는 웹 사이트 프로젝트입니다.

## 주요 기능

- NIV 성경 구절별 언어학적 분석
- 문장 구조 분석 (의미적 분류 + 문법적 설명)
- 주요 단어 발음 및 의미 해석 (IPA + 한국어 발음)
- 문맥적 배경 설명 (역사적/신학적/문학적 통합)
- 한국어 번역 제공

## 기술 스택

- **데이터베이스**: PostgreSQL (로컬 개발용)
- **백엔드**: Node.js
- **AI 분석**: Claude API 연동
- **병렬 처리**: Sub Agent 활용 시스템

## 프로젝트 구조

```
📁 bible-transcription-site/
├── 📁 agents/                    # 분석 엔진
├── 📁 database/                  # DB 스키마 및 스크립트
├── 📁 docs/                      # 문서화
│   ├── 📁 analysis/              # 분석 표준 및 품질 문서
│   ├── 📁 plans/                 # 계획 및 전략 문서
│   └── 📁 reports/               # 처리 결과 보고서
├── 📁 scripts/                   # 유틸리티 스크립트
│   └── 📁 analysis/              # 분석용 Python 스크립트
├── 📁 temp/                      # 임시 파일
├── CLAUDE.md                     # 프로젝트 규칙 및 표준
├── SUB_AGENT_UTILIZATION_RULES.md # Sub Agent 활용 규칙
└── README.md                     # 프로젝트 소개
```

## 핵심 문서

- **SUB_AGENT_UTILIZATION_RULES.md**: Sub Agent 병렬 처리 표준
- **docs/analysis/ANALYSIS_OUTPUT_STANDARD.md**: 분석 출력 형식 v2
- **docs/plans/**: 병렬 처리 전략 및 계획
- **docs/reports/**: 처리 완료 보고서

## 설치 및 실행

```bash
# Docker로 PostgreSQL 실행
docker-compose up -d

# 데이터베이스 상태 확인
./database/db_summary.sh

# 단일 구절 분석
cd agents
node single_verse_analyzer.js

# 전체 장 병렬 처리 (권장)
# SUB_AGENT_UTILIZATION_RULES.md 참조
```

## 현재 상태

- ✅ **빌립보서 1장**: 30개 구절 완료 (100%)
- ✅ **빌립보서 3장**: 21개 구절 완료 (100%)
- ⚠️ **빌립보서 2장**: 11개 구절 완료 (37% - 복구 필요)
- ⚠️ **빌립보서 4장**: 2개 구절 완료 (9% - 복구 필요)

## 다음 단계

1. 누락 구절 복구 (빌립보서 2,4장)
2. 데이터 무결성 검증 시스템 강화
3. 다른 성경책 확장 (갈라디아서, 로마서)
4. Supabase 마이그레이션
5. 웹 애플리케이션 개발

## Sub Agent 활용 규칙

⚠️ **중요**: 모든 콘텐츠 확장 작업은 다음 규칙을 준수해야 합니다:

1. **데이터 완결성 최우선**: 완료 선언 전 반드시 모든 구절의 DB 저장 검증
2. **Sub Agent 병렬 처리**: 6개 이상 구절은 병렬 처리 필수
3. **의미 단위 그룹핑**: 신학적 주제별 Agent 작업 분배
4. **품질 보장**: Schema v2 형식 준수 및 자동 검증

자세한 내용은 `SUB_AGENT_UTILIZATION_RULES.md` 참조.