# JSON 파일을 DB에 업로드하기

생성된 JSON 분석 파일을 Supabase 데이터베이스에 업로드하는 가이드입니다.

## 📋 사전 요구사항

### 1. 환경 변수 확인

프로젝트 루트의 `.env` 파일에 다음 변수가 설정되어 있어야 합니다:

```bash
# 확인 명령어
cat ../../.env | grep SUPABASE
```

**필수 변수**:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_KEY`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

✅ 모두 설정되어 있으면 계속 진행!

### 2. JSON 파일 준비

`analysis-json/` 폴더에 업로드할 JSON 파일이 있어야 합니다:

```bash
# JSON 파일 확인
ls -la analysis-json/
```

---

## 🚀 사용 방법

### 실행 위치

⚠️ **중요**: `apps/pipeline` 폴더에서 실행하세요!

```bash
cd /Users/peter/Dev/bible-transcription-site/apps/pipeline
```

### 방법 1: 단일 파일 업로드

```bash
npx ts-node bible-analysis/tools/upload-json-to-db.ts Ecclesiastes_1_1.json
```

### 방법 2: 여러 파일 업로드

```bash
npx ts-node bible-analysis/tools/upload-json-to-db.ts \
  Ecclesiastes_1_1.json \
  Ecclesiastes_1_2.json \
  Ecclesiastes_1_3.json
```

### 방법 3: 모든 JSON 파일 업로드

```bash
npx ts-node bible-analysis/tools/upload-json-to-db.ts
```

---

## 📊 출력 예시

### 성공 케이스

```
================================================================================
📤 JSON 분석 데이터 DB 업로드
================================================================================
📁 디렉토리: .../analysis-json
   🎯 지정된 파일들을 처리합니다...
   📊 처리할 파일 수: 1

📋 처리할 파일 목록:
   1. Ecclesiastes_1_1.json

================================================================================
📄 처리 중: Ecclesiastes_1_1.json
================================================================================
   📖 구절: Ecclesiastes 1:1
   📚 성경: 구약
   ✅ verse_id: 31560
   🗑️  기존 분석 데이터 삭제 중...
   📝 문장 구조 삽입 중 (1개)...
   ✅ 문장 구조 삽입 완료
   📚 주요 단어 삽입 중 (7개)...
   ✅ 주요 단어 삽입 완료
   🔍 문맥 설명 삽입 중...
   ✅ 문맥 설명 삽입 완료
   🇰🇷 한국어 번역 삽입 중...
   ✅ 한국어 번역 삽입 완료
   💡 특별 설명 삽입 중 (3개)...
   ✅ 특별 설명 삽입 완료
   🔄 analysis_completed 플래그 업데이트 중...
   ✅ 플래그 업데이트 완료

   ✅ 업로드 완료: Ecclesiastes 1:1

================================================================================
📊 업로드 결과 요약
================================================================================
   ✅ 성공: 1개
   ❌ 실패: 0개
   📊 전체: 1개

================================================================================
✅ 작업 완료!
================================================================================
```

---

## 🔍 업로드 프로세스

### 1. 구절 ID 조회
- `verses` 테이블에서 `verse_reference`로 조회
- 존재하지 않으면 오류 발생

### 2. 기존 분석 데이터 삭제
- 동일한 `verse_id`를 가진 모든 분석 데이터 삭제
- 대상 테이블:
  - `sentence_structures`
  - `vocabulary`
  - `contextual_explanations`
  - `korean_translations`
  - `special_explanations`

### 3. 새 분석 데이터 삽입
- JSON 파일의 모든 데이터를 5개 테이블에 삽입
- 트랜잭션 없이 순차 삽입 (일부 실패 가능)

### 4. 완료 플래그 업데이트
- `verses.analysis_completed = true`로 설정

---

## ⚠️ 주의사항

### 1. 중복 업로드
- 같은 파일을 여러 번 업로드하면 **기존 데이터가 삭제**되고 새 데이터로 교체됩니다.
- 의도적으로 재분석한 경우에만 재업로드하세요.

### 2. Rate Limiting
- 여러 파일 업로드 시 자동으로 2초 대기 (Rate limiting)
- Supabase API 제한을 피하기 위함

### 3. JSON 구조 검증
- JSON 파일이 올바른 구조를 가져야 합니다.
- 필수 필드 누락 시 업로드 실패

---

## 🛠️ 문제 해결

### Q: "supabaseUrl is required" 오류

**원인**: 환경 변수가 로드되지 않음

**해결**:
```bash
# .env 파일 확인
ls -la ../../.env

# 환경 변수 확인
cat ../../.env | grep SUPABASE
```

### Q: "Could not find the table 'xxx'" 오류

**원인**: 테이블 이름이 잘못됨

**해결**: `bible-analysis/database/SCHEMA_GUIDE.md` 참조

### Q: "구절을 찾을 수 없습니다" 오류

**원인**: `verses` 테이블에 해당 구절이 없음

**해결**:
```bash
# Supabase 대시보드에서 verses 테이블 확인
# 또는 NIV 데이터를 먼저 삽입
```

### Q: "cross_references" 타입 오류

**원인**: `cross_references`가 문자열이 아닌 배열이어야 함

**해결**:
- 업로드 스크립트가 자동으로 문자열을 배열로 변환합니다.
- JSON 파일에서 `"ref1,ref2,ref3"` 형식이면 자동 처리됨

---

## 📚 관련 문서

- **환경 변수 가이드**: `bible-analysis/database/ENV_SETUP.md`
- **데이터베이스 스키마**: `bible-analysis/database/SCHEMA_GUIDE.md`
- **JSON 분석 생성**: `bible-analysis/START_HERE.md`
- **분석 품질 기준**: `bible-analysis/templates/QUALITY_STANDARD_SUMMARY.md`

---

## 🔄 전체 워크플로우

### 1단계: JSON 생성
```bash
cd bible-analysis
claude --dangerously-skip-permissions "전도서 1장 1절: $(cat ANALYZE_VERSE_PROMPT.txt)"
```

### 2단계: JSON 확인
```bash
cat analysis-json/Ecclesiastes_1_1.json | jq
```

### 3단계: DB 업로드
```bash
cd ../
npx ts-node bible-analysis/tools/upload-json-to-db.ts Ecclesiastes_1_1.json
```

### 4단계: 웹사이트 확인
웹사이트에서 해당 구절을 검색하여 렌더링 확인

---

## 💡 팁

1. **배치 업로드**: 여러 파일을 한 번에 업로드할 때는 파일명을 스페이스로 구분
2. **재업로드**: 분석 품질을 개선한 후 동일 파일을 재업로드 가능
3. **백업**: 업로드 전 JSON 파일들을 백업해두는 것을 권장
4. **검증**: 업로드 후 웹사이트에서 실제 렌더링 확인 필수

---

## ✅ 성공 기준

- ✅ 모든 파일 업로드 성공 (실패 0개)
- ✅ `analysis_completed` 플래그 업데이트 완료
- ✅ 웹사이트에서 구절 검색 가능
- ✅ 모든 분석 데이터 정상 표시

이제 JSON 파일을 DB에 업로드하세요! 🎉
