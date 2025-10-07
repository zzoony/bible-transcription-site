# 🔒 보안 수정 가이드: Supabase 키 교체

**생성일**: 2025년 10월 7일
**문제**: GitGuardian이 GitHub 저장소에서 노출된 Supabase Service Role JWT 감지
**심각도**: 🔴 CRITICAL

---

## 📋 문제 요약

### 노출된 정보
- **Supabase Project URL**: `https://kmbndafjfxzbyokzqgno.supabase.co`
- **Service Role JWT**: 하드코딩되어 Git 히스토리에 저장됨
- **노출 일시**: 2025년 10월 7일 11:56:38 UTC
- **감지 도구**: GitGuardian
- **노출 위치**: 11개 pipeline 스크립트 파일

### 보안 위험
- ❌ Service Role Key는 **관리자급 권한**
- ❌ 데이터베이스 전체에 대한 읽기/쓰기/삭제 가능
- ❌ 성경 분석 데이터 30,903구절 삭제/변조 가능
- ❌ 공개 저장소에 노출되어 악의적 스캐너가 자동 수집 가능

---

## ✅ 이미 완료된 조치 (코드 수정)

### 1. 환경변수 시스템 구축
- ✅ `.env.example` 파일 생성 (`apps/pipeline/.env.example`)
- ✅ `.gitignore`에 `.env` 파일 추가 (이미 설정됨)

### 2. 스크립트 마이그레이션 (11개 파일)
모든 활성 스크립트가 환경변수를 사용하도록 수정:

**수정된 파일**:
1. ✅ `analyze-old-testament.ts`
2. ✅ `check-duplicates.ts`
3. ✅ `check-duplicate-books.ts`
4. ✅ `fix-missing-exodus.ts`
5. ✅ `load-missing-ot-books.ts`
6. ✅ `remove-duplicate-books.ts`
7. ✅ `setup-old-testament-complete.ts`
8. ✅ `verify-all-data.ts`

**이미 환경변수 사용 중**:
9. ✅ `fix-galatians-duplicates.ts`
10. ✅ `import-from-json.ts`
11. ✅ `save-analysis-to-db.ts`

### 3. 환경변수 검증 로직
모든 스크립트에 다음 로직 추가:
```typescript
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 .env 파일에 설정해주세요.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
```

---

## 🚨 즉시 수행해야 할 조치 (사용자 직접)

### 1단계: Supabase 키 교체 (가장 중요 - 지금 당장!)

#### 방법 A: Supabase 대시보드
1. https://app.supabase.com 로그인
2. 프로젝트 선택: `bible-transcription-site` (kmbndafjfxzbyokzqgno)
3. Settings → API 이동
4. **Service Role** 섹션 찾기
5. 🔄 **"Rotate"** 버튼 클릭
6. 새 키 복사 (클립보드에 저장)

#### 방법 B: Supabase CLI (선택사항)
```bash
supabase secrets set SERVICE_ROLE_KEY --project-ref kmbndafjfxzbyokzqgno
```

### 2단계: 로컬 환경변수 설정

#### apps/pipeline/.env 파일 생성
```bash
cd apps/pipeline
cp .env.example .env
```

#### .env 파일 편집
```bash
# apps/pipeline/.env
SUPABASE_URL=https://kmbndafjfxzbyokzqgno.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<새로_발급받은_키를_여기에_붙여넣기>
```

⚠️ **중요**: `.env` 파일은 절대 Git에 커밋하지 마세요!

### 3단계: 환경변수 로드 확인

#### 스크립트 실행 시 환경변수 로드 방법

**옵션 A: dotenv 사용 (권장)**
```bash
npm install --save-dev dotenv
```

스크립트 실행:
```bash
node -r dotenv/config scripts/analyze-old-testament.ts
```

또는 `package.json`에 스크립트 추가:
```json
{
  "scripts": {
    "analyze:ot": "node -r dotenv/config scripts/analyze-old-testament.ts"
  }
}
```

**옵션 B: 직접 export (임시 방법)**
```bash
export SUPABASE_URL=https://kmbndafjfxzbyokzqgno.supabase.co
export SUPABASE_SERVICE_ROLE_KEY=<새_키>

npx tsx scripts/analyze-old-testament.ts
```

### 4단계: Vercel 환경변수 설정 (웹앱용)

웹앱이 Supabase를 사용한다면:
```bash
cd apps/web
vercel env pull .env.local
```

또는 Vercel 대시보드에서:
1. https://vercel.com/dashboard 접속
2. 프로젝트 → Settings → Environment Variables
3. `SUPABASE_SERVICE_ROLE_KEY` 업데이트

---

## 🔍 검증 단계

### 1. 환경변수 로드 확인
```bash
cd apps/pipeline
node -r dotenv/config -e "console.log(process.env.SUPABASE_URL)"
```

예상 출력: `https://kmbndafjfxzbyokzqgno.supabase.co`

### 2. 스크립트 실행 테스트
```bash
npx tsx scripts/check-duplicates.ts
```

성공 시: `🔍 중복 데이터 검사 시작...` 출력
실패 시: `❌ 환경변수가 설정되지 않았습니다.` 출력

### 3. 새 키로 데이터베이스 접근 확인
```bash
npx tsx scripts/verify-all-data.ts
```

---

## 📊 Git 히스토리 정리 (선택사항)

⚠️ **경고**: 이 작업은 복잡하며 협업자가 있다면 모두 저장소를 다시 clone해야 합니다.

### 완전한 히스토리 정리 방법

```bash
# 1. git-filter-repo 설치 (macOS)
brew install git-filter-repo

# 2. 백업 생성
git clone --mirror https://github.com/zzoony/bible-transcription-site.git backup-repo

# 3. 민감한 정보가 포함된 파일 제거
git filter-repo --path apps/pipeline/scripts/ --invert-paths-regex '.*\.ts$' --force

# 4. Force push (주의!)
git push origin --force --all
git push origin --force --tags
```

⚠️ **협업자 있는 경우**:
- 모든 팀원에게 알림
- 기존 로컬 저장소 삭제
- 새로 clone 필요

---

## 🎯 향후 예방 조치

### 1. Pre-commit Hook 설정
```bash
# .git/hooks/pre-commit 생성
#!/bin/bash
if git diff --cached | grep -E "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; then
  echo "❌ JWT 토큰이 감지되었습니다!"
  exit 1
fi
```

### 2. GitGuardian Pre-commit Hook
```bash
npm install --save-dev @gitguardian/ggshield
```

### 3. GitHub Secrets Scanning
- Repository Settings → Security → Secret scanning 활성화
- Push protection 활성화

---

## 📞 문제 해결

### 문제: "환경변수가 설정되지 않았습니다"
**해결**: `.env` 파일이 `apps/pipeline/` 디렉토리에 있는지 확인

### 문제: 새 키로 접근 불가
**해결**: Supabase 대시보드에서 키가 정상 교체되었는지 확인

### 문제: Vercel 배포 실패
**해결**: Vercel 환경변수에 새 키가 업데이트되었는지 확인

---

## ✅ 체크리스트

완료 시 체크:
- [ ] Supabase 대시보드에서 Service Role Key 교체
- [ ] `apps/pipeline/.env` 파일 생성 및 새 키 설정
- [ ] 로컬에서 스크립트 실행 테스트 (verify-all-data.ts)
- [ ] Vercel 환경변수 업데이트 (웹앱 사용 시)
- [ ] Git 히스토리 정리 (선택사항)
- [ ] 팀원들에게 키 교체 알림 (협업자 있는 경우)

---

**마지막 업데이트**: 2025년 10월 7일
**상태**: 코드 수정 완료, 키 교체 대기 중
**다음 단계**: 사용자가 Supabase에서 키 교체 직접 수행
