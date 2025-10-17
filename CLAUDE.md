# 프로젝트 핵심 규칙

**최종 수정**: 2025-10-17
**전체 가이드**: `CLAUDE_FULL_GUIDE.md` (586줄 상세 버전)

---

## 📋 빠른 인덱스

- [절대 규칙](#절대-규칙-위반-금지) ⚠️ **(가장 중요!)**
- [자주 사용하는 작업](#자주-사용하는-작업) 🔧
- [상세 문서](#상세-문서) 📚

---

## ⚠️ 절대 규칙 (위반 금지!)

### 1. 데이터베이스 작업
```bash
# 반드시 이 순서로!
1. cat apps/pipeline/bible-analysis/database/SCHEMA_GUIDE.md
2. import { Verse } from '../bible-analysis/database/database.types'
3. dotenv.config({ path: '../../../../apps/web/.env.local' })
```

**금지 사항**:
- ❌ 테이블명/컬럼명 추측 (`verse_analyses`, `text`, `content` 등)
- ❌ 환경 변수 없이 Supabase 사용
- ❌ SCHEMA_GUIDE.md 확인 없이 쿼리 작성

### 2. NIV 원문 사용
```typescript
// ✅ 항상 JSON 파일에서만 가져오기
import nivBible from './archive/niv-data/NIV_Bible.json';
const text = nivBible["Genesis"]["1"]["2"];

// ❌ 웹 검색, 외부 API, 수동 입력 금지
```

**파일 위치**: `archive/niv-data/NIV_Bible.json`

### 3. 원어 필수
- 모든 주요 단어에 **히브리어(구약) 또는 그리스어(신약)** 포함
- 형식: `"시작 (히브리어 'בְּרֵאשִׁית'(bereshit)로, ...)"`

### 4. 한글 우선
- 모든 응답, 코드 주석, 커밋 메시지는 **한글**
- 영어는 기술 용어나 코드 내부에서만 사용

---

## 🔧 자주 사용하는 작업

### A. DB 스크립트 작성
```typescript
// 1. 환경 변수 설정
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

// 2. 타입 import
import type { Verse, SentenceStructure } from '../bible-analysis/database/database.types';

// 3. Supabase 클라이언트
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!  // SERVICE_KEY 사용!
);

// 4. 쿼리 (SCHEMA_GUIDE.md에서 확인한 테이블명 사용)
const { data } = await supabase.from('verses').select('niv_text');
```

### B. NIV 원문 조회
```bash
# 단일 절
npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:2"

# 범위
npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1:1-5"

# 전체 장
npx ts-node bible-analysis/tools/get-niv-text.ts "Genesis 1"
```

### C. 구절 분석 (analyzer-app)
- **프롬프트**: `bible-analysis/ANALYZE_VERSE_PROMPT_COMPACT.txt` (94줄)
- **품질 기준**: 90점 이상 (창세기 1:2 기준)
- **출력**: 간소하게 (분석 요약만, 장황한 설명 금지)
- **"없음" 처리**: NIV에 없는 절은 `niv_text: "없음"` + 빈 필드

### D. 품질 평가
```bash
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "Genesis 1:1"
```

---

## 📚 상세 문서

### 데이터베이스
- **필수**: `apps/pipeline/bible-analysis/database/SCHEMA_GUIDE.md` (테이블 구조)
- **환경 설정**: `apps/pipeline/bible-analysis/database/ENV_SETUP.md`
- **타입 정의**: `apps/pipeline/bible-analysis/database/database.types.ts`
- **상세 가이드**: `apps/pipeline/bible-analysis/docs/DATABASE_GUIDE.md`

### 구절 분석
- **표준 템플릿**: `apps/pipeline/docs/ANALYSIS_TEMPLATE.md`
- **단일 구절 분석**: `apps/pipeline/bible-analysis/docs/SINGLE_VERSE_ANALYSIS_METHODOLOGY.md`
- **대량 자동 분석**: `apps/pipeline/bible-analysis/docs/ANALYSIS_WORKFLOWS.md`
- **프롬프트 최적화**: `apps/pipeline/bible-analysis/docs/PROMPT_OPTIMIZATION_HISTORY.md`

### 품질 관리
- **품질 평가 시스템**: `apps/pipeline/bible-analysis/docs/QUALITY_GUIDE.md`
- **검증 프로세스**: `CLAUDE_FULL_GUIDE.md` (267-288줄)

### 폴더 구조
```
apps/pipeline/bible-analysis/
├── source-data/NIV_Bible.json    # NIV 원문
├── database/                      # DB 문서 (필수!)
├── docs/                          # 방법론 문서
├── tools/                         # 유틸리티
├── ANALYZE_VERSE_PROMPT_COMPACT.txt  # analyzer-app 프롬프트
└── analyzer-app/                  # 자동 분석 도구
```

---

## 🎯 작업 흐름 예시

### 1. DB에서 구절 조회
```bash
# 1. 스키마 확인
cat apps/pipeline/bible-analysis/database/SCHEMA_GUIDE.md

# 2. 스크립트 작성 (환경 변수 + 타입 + 쿼리)
# 3. 실행
```

### 2. 새 구절 분석
```bash
# 1. NIV 원문 확인
npx ts-node bible-analysis/tools/get-niv-text.ts "John 3:16"

# 2. analyzer-app 실행
cd bible-analysis/analyzer-app && npm start

# 3. 품질 확인
npx ts-node bible-analysis/tools/evaluate-verse-quality.ts "John 3:16"
```

---

## ⚡ 자주 발생하는 오류 방지

### "supabaseUrl is required"
→ `dotenv.config()` 정확한 경로로 설정

### "Could not find the table 'xxx'"
→ `SCHEMA_GUIDE.md`에서 실제 테이블명 확인

### "column xxx does not exist"
→ `database.types.ts`에서 컬럼명 확인

### analyzer-app 타임아웃
→ `ANALYZE_VERSE_PROMPT_COMPACT.txt` 사용 중인지 확인 (205줄 버전 사용 금지)

---

**🔍 더 자세한 내용은 `CLAUDE_FULL_GUIDE.md` 참조**
