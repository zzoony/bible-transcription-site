# 환경 변수 설정 가이드

DB 작업을 위한 환경 변수 설정 방법을 설명합니다.

## 📍 환경 변수 파일 위치

```
/Users/peter/Dev/bible-transcription-site/
└── apps/
    └── web/
        └── .env.local  ← 여기!
```

**절대 경로**: `/Users/peter/Dev/bible-transcription-site/apps/web/.env.local`

## 🔑 필수 환경 변수

### 1. Supabase 연결 정보

```bash
# Supabase URL (필수)
NEXT_PUBLIC_SUPABASE_URL="https://kmbndafjfxzbyokzqgno.supabase.co"

# Supabase Anon Key (클라이언트 측 요청용)
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# Supabase Service Key (서버 측 작업용, 권한 높음!)
SUPABASE_SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### 2. 각 키의 용도

| 변수명 | 용도 | 권한 레벨 | 노출 가능 여부 |
|--------|------|----------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL | - | ✅ 공개 가능 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 클라이언트 측 읽기 | 낮음 | ✅ 공개 가능 |
| `SUPABASE_SERVICE_KEY` | 서버 측 읽기/쓰기 | **높음** | ❌ 비공개! |

## 📝 TypeScript 스크립트에서 사용법

### 기본 패턴

```typescript
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// ⚠️ 중요: 정확한 경로 지정!
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// Supabase 클라이언트 생성
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!  // 서버 측 작업에는 SERVICE_KEY 사용
);
```

### 경로 계산 방법

스크립트 위치에 따라 상대 경로가 달라집니다:

| 스크립트 위치 | 상대 경로 |
|-------------|----------|
| `apps/pipeline/scripts/*.ts` | `../../../apps/web/.env.local` |
| `apps/pipeline/bible-analysis/tools/*.ts` | `../../../../apps/web/.env.local` |
| `apps/pipeline/bible-analysis/database/*.ts` | `../../../../apps/web/.env.local` |

**팁**: `__dirname`을 사용하면 현재 파일의 디렉토리 기준으로 상대 경로를 계산합니다.

## ✅ 환경 변수 확인

### 1. 간단한 확인 스크립트

```typescript
// test-env.ts
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

console.log('환경 변수 확인:');
console.log('✅ NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '설정됨' : '❌ 누락!');
console.log('✅ SUPABASE_SERVICE_KEY:', process.env.SUPABASE_SERVICE_KEY ? '설정됨' : '❌ 누락!');

// 실제 연결 테스트
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function testConnection() {
  const { data, error } = await supabase
    .from('books')
    .select('count')
    .limit(1);

  if (error) {
    console.error('❌ DB 연결 실패:', error.message);
  } else {
    console.log('✅ DB 연결 성공!');
  }
}

testConnection();
```

**실행**:
```bash
npx ts-node test-env.ts
```

### 2. 명령어로 확인

```bash
# .env.local 파일 존재 확인
ls -la apps/web/.env.local

# 환경 변수 내용 확인 (민감 정보 포함!)
cat apps/web/.env.local | grep SUPABASE
```

## 🔧 Supabase CLI 연결

### 1. 프로젝트 링크 확인

```bash
# 현재 링크된 프로젝트 확인
supabase projects list
```

**출력 예시**:
```
  LINKED | ORG ID               | REFERENCE ID         | NAME
  --------|----------------------|----------------------|---------------------
     ●    | fomvjogijjbejpuujnsi | kmbndafjfxzbyokzqgno | bible-transcription
```

### 2. 프로젝트 링크 설정 (필요시)

```bash
# 프로젝트 링크 (이미 링크되어 있으면 생략)
supabase link --project-ref kmbndafjfxzbyokzqgno
```

### 3. 원격 DB 쿼리

```bash
# SQL 쿼리 실행
supabase db query "SELECT COUNT(*) FROM verses;"
```

## ❌ 자주 발생하는 오류

### 오류 1: "supabaseUrl is required"

**원인**: 환경 변수가 로드되지 않음

**해결**:
```typescript
// ❌ 잘못된 방법
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(...);  // dotenv.config() 없이 사용

// ✅ 올바른 방법
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);
```

### 오류 2: "Could not find the table 'public.xxx'"

**원인**:
1. 테이블 이름 오타
2. 스키마가 'public'이 아님
3. 테이블이 실제로 존재하지 않음

**해결**:
```typescript
// ❌ 잘못된 테이블명
const { data } = await supabase.from('verse_analyses').select('*');

// ✅ 올바른 테이블명
const { data } = await supabase.from('verses').select('*');
```

**테이블 목록 확인**:
```bash
supabase db query "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
```

### 오류 3: "column xxx does not exist"

**원인**: 컬럼 이름 오타

**해결**:
```typescript
// ❌ 잘못된 컬럼명
const { data } = await supabase.from('verses').select('text');

// ✅ 올바른 컬럼명
const { data } = await supabase.from('verses').select('niv_text');
```

**컬럼 목록 확인**:
- `bible-analysis/database/SCHEMA.md` 참조
- 또는 `bible-analysis/database/database.types.ts` 참조

### 오류 4: "Cannot connect to the Docker daemon"

**원인**: Supabase CLI가 로컬 Docker를 찾으려고 함

**해결**:
- `supabase db dump --linked` 사용 (원격 DB 사용)
- 또는 `bible-analysis/database/extract-schema.ts` 스크립트 사용

## 🛡️ 보안 주의사항

### 1. SERVICE_KEY 보호
```bash
# ❌ 절대 하지 말 것!
git add .env.local                    # Git에 커밋 금지!
console.log(process.env.SUPABASE_SERVICE_KEY);  # 로그 출력 금지!

# ✅ 안전한 방법
# .gitignore에 .env.local 포함 (이미 설정됨)
# 로컬에서만 사용
```

### 2. 클라이언트 vs 서버 키 사용

```typescript
// ❌ 클라이언트 측에서 SERVICE_KEY 사용 금지!
// apps/web/components/SomeComponent.tsx
const supabase = createClient(url, process.env.SUPABASE_SERVICE_KEY);

// ✅ 클라이언트 측에서는 ANON_KEY 사용
const supabase = createClient(url, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// ✅ 서버 측 스크립트에서는 SERVICE_KEY 사용
// apps/pipeline/scripts/analyze.ts
const supabase = createClient(url, process.env.SUPABASE_SERVICE_KEY);
```

## 📋 체크리스트

DB 작업 전 확인사항:

- [ ] `.env.local` 파일 존재 확인
- [ ] `NEXT_PUBLIC_SUPABASE_URL` 설정 확인
- [ ] `SUPABASE_SERVICE_KEY` 설정 확인
- [ ] `dotenv.config()` 올바른 경로로 호출
- [ ] Supabase 클라이언트 생성 시 올바른 키 사용
- [ ] 테이블명, 컬럼명 `SCHEMA.md` 또는 `database.types.ts`와 대조

## 🚀 빠른 시작

### 새 분석 스크립트 작성 템플릿

```typescript
// apps/pipeline/bible-analysis/tools/my-script.ts
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// Supabase 클라이언트 생성
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// 메인 함수
async function main() {
  // 여기에 DB 작업 코드 작성
  const { data, error } = await supabase
    .from('verses')
    .select('*')
    .limit(10);

  if (error) {
    console.error('오류:', error.message);
    return;
  }

  console.log('결과:', data);
}

main();
```

**실행**:
```bash
npx ts-node bible-analysis/tools/my-script.ts
```

## 📚 관련 문서

- **데이터베이스 스키마**: `bible-analysis/database/SCHEMA_GUIDE.md`
- **TypeScript 타입**: `bible-analysis/database/database.types.ts`
- **스키마 추출 스크립트**: `bible-analysis/database/extract-schema.ts`
