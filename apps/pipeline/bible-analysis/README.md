# 성경 분석 작업 공간

이 디렉토리는 성경 구절 분석을 위한 모든 도구, 템플릿, 데이터를 포함합니다.

## 📁 폴더 구조

```
bible-analysis/
├── source-data/          # 원본 데이터
│   └── NIV_Bible.json    # NIV 성경 전체 (4.5MB)
│
├── database/             # 데이터베이스 문서 ⭐ NEW!
│   ├── schema.sql                   # SQL 형식 스키마
│   ├── SCHEMA.md                    # 마크다운 형식 스키마 (샘플 데이터 포함)
│   ├── SCHEMA_GUIDE.md              # 사용자 친화적 가이드
│   ├── database.types.ts            # TypeScript 타입 정의
│   ├── ENV_SETUP.md                 # 환경 변수 설정 가이드
│   └── extract-schema.ts            # 스키마 추출 스크립트
│
├── tools/                # 분석 도구
│   ├── get-niv-text.ts              # NIV 원문 조회 도구
│   └── evaluate-verse-quality.ts   # 품질 평가 스크립트
│
├── templates/            # 분석 템플릿 및 가이드
│   ├── ANALYSIS_TEMPLATE.md         # 상세 분석 템플릿 (창세기 1:2 기준)
│   └── QUALITY_STANDARD_SUMMARY.md  # 품질 기준 요약
│
├── workspace/            # 작업 공간
│   └── (분석 작업 파일들)
│
├── tests/                # 테스트 스크립트
│   └── (테스트 파일들)
│
└── README.md             # 이 파일
```

---

## 🗄️ 데이터베이스 문서 (NEW!)

### 필수 참조 순서
DB 작업 시 **반드시** 아래 순서대로 문서를 확인하세요:

1. **환경 변수 설정** (`database/ENV_SETUP.md`)
   - .env.local 파일 위치 및 필수 환경 변수
   - dotenv 설정 방법
   - 자주 발생하는 오류 해결

2. **스키마 가이드** (`database/SCHEMA_GUIDE.md`)
   - 전체 테이블 구조 및 관계 (ERD)
   - 각 테이블의 목적과 용도
   - 자주 사용하는 쿼리 패턴
   - 품질 기준 및 주의사항

3. **TypeScript 타입** (`database/database.types.ts`)
   - 모든 테이블의 정확한 타입 정의
   - Insert/Update 타입 포함
   - IDE 자동완성 지원

### 빠른 참조
```bash
# 환경 변수 가이드
cat database/ENV_SETUP.md

# 스키마 가이드
cat database/SCHEMA_GUIDE.md

# 실제 스키마 (샘플 데이터 포함)
cat database/SCHEMA.md

# 최신 스키마 추출
npx ts-node database/extract-schema.ts
```

### 왜 이 문서들이 중요한가?
- ✅ **환경 변수 오류 방지**: "supabaseUrl is required" 같은 오류 사전 차단
- ✅ **테이블/컬럼명 오류 방지**: "Could not find table" 같은 오류 사전 차단
- ✅ **타입 안정성**: TypeScript 자동완성으로 오타 방지
- ✅ **빠른 문제 해결**: 자주 발생하는 오류의 해결 방법 포함

---

## 🚀 빠른 시작

### 1. NIV 원문 조회

```bash
# 단일 절
npx ts-node tools/get-niv-text.ts "Genesis 1:2"

# 범위
npx ts-node tools/get-niv-text.ts "Genesis 1:1-5"

# 전체 장
npx ts-node tools/get-niv-text.ts "Genesis 1"
```

### 2. 구절 품질 평가

```bash
# 특정 구절 평가
npx ts-node tools/evaluate-verse-quality.ts "Genesis 1:2"
```

### 3. 분석 템플릿 참고

- **상세 템플릿**: `templates/ANALYSIS_TEMPLATE.md`
- **빠른 참조**: `templates/QUALITY_STANDARD_SUMMARY.md`

---

## 📊 데이터 소스

### NIV_Bible.json 구조
```json
{
    "Book Name": {
        "Chapter Number": {
            "Verse Number": "NIV text..."
        }
    }
}
```

**예시**:
```json
{
    "Genesis": {
        "1": {
            "1": "In the beginning God created the heavens and the earth.",
            "2": "Now the earth was formless and empty..."
        }
    }
}
```

---

## 🎯 품질 기준

### 창세기 1:2 - 기준 구절 (95점)

모든 분석은 창세기 1:2를 기준으로 평가됩니다.

#### 필수 5대 요소
1. **문장 구조 (30점)**: 모든 문장/절 포함, 문법 설명
2. **주요 단어 (25점)**: 7-10개, 히브리어/그리스어 원어 포함
3. **문맥 설명 (20점)**: 300자 이상, 통합된 배경 설명
4. **한국어 번역 (15점)**: 자연스러운 번역
5. **특별 설명 (10점)**: 2-3개, 다양한 관점

---

## 🛠️ 도구 사용법

### get-niv-text.ts

NIV 원문을 빠르게 조회하는 도구입니다.

```bash
npx ts-node tools/get-niv-text.ts "Reference"
```

**지원 형식**:
- `"Genesis 1:2"` - 단일 절
- `"Genesis 1:1-5"` - 범위
- `"Genesis 1"` - 전체 장

### evaluate-verse-quality.ts

구절 분석의 품질을 100점 만점으로 평가합니다.

```bash
npx ts-node tools/evaluate-verse-quality.ts "Genesis 1:2"
```

**평가 항목**:
- 문장 구조 완전성
- 주요 단어 개수 및 원어 포함
- 문맥 설명 길이 및 깊이
- 한국어 번역 품질
- 특별 설명 개수

**등급**:
- 우수 (A): 90-100점
- 양호 (B): 70-89점
- 보통 (C): 50-69점
- 미흡 (D): 50점 미만

---

## 📚 템플릿 가이드

### ANALYSIS_TEMPLATE.md

창세기 1:2의 완벽한 분석 사례를 기준으로 한 상세 템플릿입니다.

**포함 내용**:
- 데이터베이스 스키마
- 각 테이블별 필수 요소
- 품질 체크리스트
- 평가 기준
- 완전한 예시

### QUALITY_STANDARD_SUMMARY.md

빠른 참조용 품질 기준 요약서입니다.

**포함 내용**:
- 5대 필수 요소 요약
- 빠른 체크리스트
- 흔한 실수와 해결 방법
- 학습 순서

---

## 💡 작업 흐름

### 1. 분석 전 준비
```bash
# 템플릿 확인
cat templates/QUALITY_STANDARD_SUMMARY.md

# NIV 원문 확인
npx ts-node tools/get-niv-text.ts "Book C:V"
```

### 2. 분석 수행
- 5대 필수 요소 모두 포함
- 특히 문장 구조 완전성과 원어 설명 중요

### 3. 품질 확인
```bash
# 품질 평가
npx ts-node tools/evaluate-verse-quality.ts "Book C:V"

# 70점 미만이면 개선 후 재평가
```

---

## ⚠️ 중요 규칙

1. **NIV 원문**: 항상 `source-data/NIV_Bible.json` 사용
2. **웹 검색 금지**: 외부 API나 웹사이트 사용 금지
3. **수동 입력 금지**: 타이핑 오류 방지
4. **품질 기준**: 창세기 1:2를 절대 기준으로 사용

---

## 📞 참고

### 핵심 문서
- **프로젝트 규칙**: `../../CLAUDE.md` (DB 작업 규칙 포함)
- **데이터베이스 가이드**: `database/SCHEMA_GUIDE.md`
- **환경 변수 설정**: `database/ENV_SETUP.md`
- **TypeScript 타입**: `database/database.types.ts`

### 기타
- **원본 NIV 데이터**: `../archived-work/archive/niv-data/` (참조용, 실제 사용: `source-data/`)
- **분석 스크립트**: `../scripts/`

---

## 🎉 시작하기

```bash
# 1. 템플릿 읽기
cat templates/QUALITY_STANDARD_SUMMARY.md

# 2. 기준 구절 확인
npx ts-node tools/evaluate-verse-quality.ts "Genesis 1:2"

# 3. NIV 원문 조회 연습
npx ts-node tools/get-niv-text.ts "John 3:16"

# 4. 작업 시작!
```

행복한 성경 분석 되세요! 🙏
