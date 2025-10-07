# Bible Transcription Site - Monorepo

성경 구절 분석 및 표시를 위한 Monorepo 프로젝트입니다.

## 📁 프로젝트 구조 (Monorepo)

```text
bible-transcription-site/
├── apps/
│   ├── web/              # Next.js 웹 애플리케이션
│   │   ├── app/          # Next.js App Router
│   │   ├── components/   # React 컴포넌트
│   │   ├── lib/          # 유틸리티 함수
│   │   └── hooks/        # React 훅
│   └── pipeline/         # 데이터 분석 파이프라인
│       ├── scripts/      # 분석 스크립트
│       ├── docs/         # 분석 가이드
│       └── claudedocs/   # Claude 분석 문서
├── packages/
│   └── database/         # 공유 데이터베이스 스키마 및 타입
└── package.json          # Workspace 루트
```

## 🚀 빠른 시작

### 설치
```bash
npm install
```

### 웹 애플리케이션 실행
```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버
npm start
```

### 파이프라인 스크립트 실행
```bash
# 갈라디아서 분석 검증
npm run verify -w pipeline

# NIV 텍스트 가져오기
npm run import-niv -w pipeline
```

## 주요 기능

- NIV 성경 구절별 언어학적 분석
- 문장 구조 분석 (의미적 분류 + 문법적 설명)
- 주요 단어 발음 및 의미 해석 (IPA + 한국어 발음)
- 문맥적 배경 설명 (역사적/신학적/문학적 통합)
- 한국어 번역 제공

## 📦 Workspace 구성

### apps/web
- **기술 스택**: Next.js 14, React 18, TypeScript
- **UI 라이브러리**: Radix UI, Tailwind CSS
- **데이터베이스**: Supabase
- **배포**: Vercel

### apps/pipeline
- **목적**: 성경 구절 분석 및 데이터 생성
- **언어**: TypeScript
- **도구**: ts-node, Claude Code

### packages/database
- **목적**: DB 스키마 및 타입 공유
- **내용**: Supabase 타입 정의

## 🔧 개발 스크립트

### 루트 명령어
```bash
npm run dev              # 웹 앱 개발 서버 실행
npm run build            # 웹 앱 빌드
npm run test             # 웹 앱 테스트 실행
npm run lint             # 웹 앱 린트 검사
```

### Workspace별 명령어
```bash
# Web App
npm run dev -w web
npm run build -w web
npm run test -w web

# Pipeline
npm run verify -w pipeline
npm run import-niv -w pipeline
```

## 🌐 배포

### Vercel 설정
- `vercel.json`에서 `apps/web`만 배포하도록 설정됨
- 파이프라인 파일은 배포에서 제외됨

### 환경 변수
`.env.example` 파일을 `.env`로 복사하고 다음 값을 설정하세요:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_KEY`

## 📚 문서

- [분석 가이드](apps/pipeline/docs/CLAUDE_CODE_ANALYSIS_GUIDE.md)
- [갈라디아서 분석 계획](apps/pipeline/docs/GALATIANS_ANALYSIS_PLAN.md)
- [자동 분석 워크플로우](apps/pipeline/docs/AUTO_ANALYZE_NEW_TESTAMENT.md)

## 🤝 기여

이 프로젝트는 Monorepo 구조를 사용합니다:
1. 웹 앱 변경사항은 `apps/web/`에서 작업
2. 분석 스크립트는 `apps/pipeline/`에서 작업
3. DB 타입 변경은 `packages/database/`에서 작업

## 📄 라이선스

MIT
