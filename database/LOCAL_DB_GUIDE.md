# 📊 로컬 데이터베이스 접속 가이드

## 1. 데이터베이스 접속 정보

### PostgreSQL 직접 접속
```
호스트: localhost
포트: 5432
데이터베이스명: bible_transcription
사용자명: postgres
비밀번호: localdev123
```

### 접속 URL
```
postgresql://postgres:localdev123@localhost:5432/bible_transcription
```

## 2. 접속 방법

### 방법 1: psql 명령어 사용
```bash
# 터미널에서 직접 접속
psql -h localhost -U postgres -d bible_transcription

# Docker를 통한 접속
docker compose exec postgres psql -U postgres -d bible_transcription
```

### 방법 2: pgAdmin 웹 인터페이스
1. 브라우저에서 http://localhost:5050 접속
2. 로그인 정보 입력:
   - 이메일: `admin@bible.local`
   - 비밀번호: `admin123`
3. 서버 추가:
   - Host: `postgres` (Docker 네트워크 내부에서는 컨테이너 이름 사용)
   - Port: `5432`
   - Username: `postgres`
   - Password: `localdev123`

### 방법 3: DBeaver 또는 TablePlus 등 GUI 도구
1. 새 연결 생성
2. PostgreSQL 선택
3. 위의 접속 정보 입력
4. 테스트 연결 후 저장

### 방법 4: Node.js 애플리케이션에서 접속
```javascript
import pg from 'pg';

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'bible_transcription',
  user: 'postgres',
  password: 'localdev123'
});

// 연결 테스트
const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ 데이터베이스 연결 성공:', result.rows[0]);
  } catch (err) {
    console.error('❌ 데이터베이스 연결 실패:', err);
  }
};
```

## 3. 데이터베이스 구조

### 현재 생성된 테이블 (10개)
- `books` - 성경책 정보 (66권)
- `chapters` - 장 정보 (1,189장)
- `verses` - 구절 정보 (아직 비어있음)
- `sentence_structures` - 문장 구조 분석
- `vocabulary` - 어휘 및 발음
- `contextual_notes` - 문맥 설명
- `korean_translations` - 한국어 번역
- `special_explanations` - 특별 설명
- `processing_queue` - 처리 대기열
- `analysis_metadata` - 분석 메타데이터

### 유용한 뷰
- `verse_analysis_complete` - 모든 분석 정보가 통합된 뷰
- `processing_status` - 처리 상태 요약 뷰

## 4. 자주 사용하는 SQL 명령어

### 테이블 목록 확인
```sql
\dt
-- 또는
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';
```

### 특정 책 정보 조회
```sql
-- 빌립보서 정보 확인
SELECT * FROM books WHERE name_english = 'Philippians';

-- 빌립보서의 모든 장 확인
SELECT c.* FROM chapters c
JOIN books b ON c.book_id = b.id
WHERE b.name_english = 'Philippians';
```

### 구절 추가 예시
```sql
-- 빌립보서 3:1 추가
INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text)
SELECT
    b.id,
    c.id,
    1,
    'Philippians 3:1',
    'Further, my brothers and sisters, rejoice in the Lord! It is no trouble for me to write the same things to you again, and it is a safeguard for you.'
FROM books b
JOIN chapters c ON c.book_id = b.id
WHERE b.name_english = 'Philippians'
AND c.chapter_number = 3;
```

### 전체 진행 상황 확인
```sql
-- 책별 구절 입력 상황
SELECT
    b.name_korean,
    b.name_english,
    COUNT(v.id) as verse_count,
    COUNT(CASE WHEN v.analysis_completed THEN 1 END) as analyzed_count
FROM books b
LEFT JOIN verses v ON v.book_id = b.id
GROUP BY b.id, b.name_korean, b.name_english
ORDER BY b.order_number;
```

## 5. Docker 명령어

### 데이터베이스 시작
```bash
docker compose up -d postgres
```

### 데이터베이스 중지
```bash
docker compose stop postgres
```

### 데이터베이스 재시작
```bash
docker compose restart postgres
```

### 로그 확인
```bash
docker compose logs -f postgres
```

### 데이터베이스 완전 초기화
```bash
# ⚠️ 주의: 모든 데이터가 삭제됩니다
docker compose down -v
docker compose up -d postgres
```

## 6. 백업 및 복원

### 백업
```bash
# 전체 데이터베이스 백업
docker compose exec postgres pg_dump -U postgres bible_transcription > backup_$(date +%Y%m%d).sql

# 특정 테이블만 백업
docker compose exec postgres pg_dump -U postgres -t books -t chapters bible_transcription > books_backup.sql
```

### 복원
```bash
# 백업 파일로부터 복원
docker compose exec -T postgres psql -U postgres -d bible_transcription < backup_20250929.sql
```

## 7. 문제 해결

### 연결 실패 시
1. Docker가 실행 중인지 확인: `docker ps`
2. 컨테이너 상태 확인: `docker compose ps`
3. 포트 충돌 확인: `lsof -i :5432`
4. 로그 확인: `docker compose logs postgres`

### 비밀번호 오류 시
- `.env` 파일의 `LOCAL_DB_PASSWORD` 확인
- Docker 볼륨 초기화 후 재시작

### 성능 최적화
```sql
-- 인덱스 상태 확인
SELECT schemaname, tablename, indexname
FROM pg_indexes
WHERE schemaname = 'public';

-- 테이블 통계 업데이트
ANALYZE;

-- 쿼리 실행 계획 확인
EXPLAIN ANALYZE SELECT * FROM verses WHERE reference = 'Philippians 3:1';
```

## 8. 다음 단계

1. **구절 데이터 입력**: NIV 성경 텍스트를 verses 테이블에 입력
2. **분석 데이터 추가**: 각 구절에 대한 언어학적 분석 추가
3. **Supabase 마이그레이션**: 프로덕션 환경으로 이전

---

**작성일**: 2025-09-29
**프로젝트**: 성경 필사 사이트 (Bible Transcription Site)