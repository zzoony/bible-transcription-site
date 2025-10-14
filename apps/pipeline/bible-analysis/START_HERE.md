# 🚀 여기서 시작하세요!

## 📍 실행 위치

모든 명령어는 **반드시** `bible-analysis/` 폴더에서 실행하세요!

```bash
cd apps/pipeline/bible-analysis
```

## ✅ 빠른 시작

### 1. 위치 확인

```bash
# 현재 위치 확인
pwd
# 결과: .../apps/pipeline/bible-analysis

# 프롬프트 파일 확인
ls -la ANALYZE_VERSE_PROMPT.txt
```

### 2. 단일 구절 분석

#### 방법 A: 현재 터미널에서 실행

```bash
claude --dangerously-skip-permissions "전도서 1장 1절: $(cat ANALYZE_VERSE_PROMPT.txt)"
```

#### 방법 B: 새 터미널에서 실행 (권장) ⭐

```bash
# 기본 (수동으로 닫기)
./scripts/analyze-in-new-terminal.sh "전도서 1장 1절"

# 자동 닫기 (3초 대기 후 닫기 - 권장!)
./scripts/analyze-in-new-terminal.sh --auto-close-delayed "전도서 1장 1절"
```

**장점**:
- 현재 터미널 작업을 방해하지 않음
- 여러 구절을 동시에 병렬 분석 가능
- 각 분석의 진행 상황을 독립적으로 모니터링
- 자동 닫기로 완료된 작업 자동 정리

### 3. 결과 확인

```bash
# 파일 생성 확인
ls -la analysis-json/

# JSON 내용 확인
cat analysis-json/Ecclesiastes_1_1.json
```

---

## 📚 자세한 가이드

- **빠른 시작**: `QUICK_START.md` 참조
- **테스트 방법**: `TEST_EXAMPLE.md` 참조
- **새 터미널 분석**: `NEW_TERMINAL_ANALYSIS.md` 참조 (병렬 분석!) ⭐
- **자동 닫기**: `AUTO_CLOSE_GUIDE.md` 참조 (완료 후 자동 정리)
- **전체 워크플로우**: `README_ONE_SHOT.md` 참조

---

## ⚠️ 일반적인 오류

### "No such file or directory"

**원인**: 잘못된 폴더에서 실행
**해결**:
```bash
cd apps/pipeline/bible-analysis
```

### JSON 파일이 생성되지 않음

**원인**: Write 도구 미사용
**해결**: 프롬프트가 Write 도구를 명시적으로 지시하도록 수정됨

---

## 🎯 사용 예시

### 전도서 1장 1절

```bash
cd apps/pipeline/bible-analysis
claude --dangerously-skip-permissions "전도서 1장 1절: $(cat ANALYZE_VERSE_PROMPT.txt)"
```

**기대 결과**:
- 파일 생성: `analysis-json/Ecclesiastes_1_1.json`
- 품질 점수: 90점 이상

### 요한복음 3장 16절

```bash
cd apps/pipeline/bible-analysis
claude --dangerously-skip-permissions "요한복음 3장 16절: $(cat ANALYZE_VERSE_PROMPT.txt)"
```

**기대 결과**:
- 파일 생성: `analysis-json/John_3_16.json`
- 품질 점수: 95점 이상

---

## 🔄 다음 단계

1. **테스트 성공**: 단일 구절로 테스트
2. **배치 분석**: 여러 구절 동시 분석 (`QUICK_START.md` 참조)
3. **DB 업로드**: JSON → Supabase 업로드

---

**이제 시작하세요!** 🚀
