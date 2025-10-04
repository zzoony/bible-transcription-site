# Supabase Setup Guide

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 가입
2. "New Project" 클릭
3. 프로젝트 정보 입력:
   - Name: `bible-transcription`
   - Database Password: 강력한 비밀번호 설정
   - Region: `Northeast Asia (Seoul)` 선택

## 2. 스키마 적용

### 방법 1: Supabase SQL Editor 사용
1. Supabase Dashboard → SQL Editor
2. `database/schema.sql` 내용 복사
3. 실행

### 방법 2: Supabase CLI 사용
```bash
# Supabase CLI 설치
npm install -g supabase

# 프로젝트 초기화
supabase init

# 로그인
supabase login

# 프로젝트 연결
supabase link --project-ref your-project-ref

# 마이그레이션 실행
supabase db push
```

## 3. 환경 변수 설정

Supabase Dashboard → Settings → API에서 다음 값들을 복사:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_KEY=eyJ...
```

## 4. Row Level Security (RLS) 설정

```sql
-- 읽기 전용 공개 접근 (옵션)
ALTER TABLE verses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public verses are viewable by everyone"
ON verses FOR SELECT
USING (true);

-- 관리자만 쓰기 가능
CREATE POLICY "Only service role can insert/update"
ON verses FOR ALL
USING (auth.jwt() ->> 'role' = 'service_role');
```

## 5. Local → Supabase 마이그레이션

```bash
# 마이그레이션 스크립트 실행
node database/scripts/migrate_to_supabase.js
```

또는

```bash
# pg_dump를 사용한 직접 마이그레이션
pg_dump -h localhost -U postgres -d bible_transcription > backup.sql
psql -h db.your-project.supabase.co -U postgres -d postgres < backup.sql
```

## 6. Realtime 설정 (옵션)

실시간 업데이트가 필요한 경우:

```sql
-- Realtime 활성화
ALTER PUBLICATION supabase_realtime ADD TABLE verses;
ALTER PUBLICATION supabase_realtime ADD TABLE processing_queue;
```

## 7. 성능 최적화

### 인덱스 확인
```sql
-- 인덱스 상태 확인
SELECT schemaname, tablename, indexname, indexdef
FROM pg_indexes
WHERE schemaname = 'public'
ORDER BY tablename, indexname;
```

### Connection Pooling
Supabase는 자동으로 connection pooling을 제공합니다.
- Transaction mode: 짧은 트랜잭션용
- Session mode: 긴 연결이 필요한 경우

## 8. 백업 설정

Supabase는 매일 자동 백업을 제공합니다.
추가 백업이 필요한 경우:

```bash
# 수동 백업
pg_dump $SUPABASE_DB_URL > backup_$(date +%Y%m%d).sql
```

## 9. 모니터링

Supabase Dashboard에서 제공하는 모니터링:
- Database → Performance
- Database → Query Performance
- Logs → Database Logs

## 10. 비용 관리

무료 플랜 제한:
- 500MB Database
- 1GB Transfer
- 50MB File storage

성경 데이터 예상 사용량:
- ~31,000 구절 × ~2KB = ~60MB
- 충분한 여유 공간 있음

## Troubleshooting

### 연결 문제
```bash
# 연결 테스트
psql $SUPABASE_DB_URL -c "SELECT version();"
```

### 권한 문제
```sql
-- 테이블 권한 확인
SELECT grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_name='verses';
```

### 성능 문제
```sql
-- 느린 쿼리 찾기
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```