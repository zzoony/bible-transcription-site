# 갈라디아서 자동 분석 재개 프롬프트

> **중요:** 이 문서를 새 Claude Code 세션에서 복사하여 붙여넣으면 자동으로 작업이 재개됩니다.

---

## 📋 복사해서 붙여넣을 프롬프트

```
안녕! 컴퓨터를 재부팅했어. 이전에 작업하던 갈라디아서 분석을 이어서 진행하고 싶어.

## 프로젝트 정보
- **프로젝트:** Bible Transcription Site (성경 구절 분석 사이트)
- **위치:** /Users/peter/Dev/bible-transcription-site
- **브랜치:** 001-bible-transcription-site
- **상태:** 빌립보서 104구절 100% 완료, Vercel 배포 완료

## 작업 목표
갈라디아서 149구절을 완전 자동으로 분석하여 Supabase에 업로드

## 중요 지시사항 ⚠️
1. **완전 자동 모드:** 내게 확인 받지 말고 끝까지 자동 실행
2. **계획서 참조:** docs/GALATIANS_ANALYSIS_PLAN.md 파일을 먼저 읽어봐
3. **5단계 실행:** Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5
4. **문제 자동 해결:** 오류 발생 시 스스로 해결하고 계속 진행
5. **검증 필수:** 작업 완료 후 반드시 검증 스크립트 실행
6. **최종 보고:** 모든 작업 완료 후 결과 요약만 보고

## 실행 순서
1. docs/GALATIANS_ANALYSIS_PLAN.md 읽기
2. Phase 1: 사전 조사 (Galatians 구절 확인)
3. Phase 2: 스크립트 3개 생성
   - scripts/analyze-galatians.ts
   - scripts/verify-galatians.ts
   - scripts/fix-galatians-duplicates.ts
4. Phase 3: 149구절 일괄 분석 실행
5. Phase 4: 검증 (완성도, 중복, 품질)
6. Phase 5: 문제 해결 (필요시)

## 빌립보서 작업 교훈
- 중복 방지: 이미 분석된 구절은 스킵
- 오류 복구: 실패 시 해당 구절만 건너뛰고 계속
- 철저한 검증: verify 스크립트 반드시 실행
- Rate limit: 각 구절마다 3초 대기

## 성공 기준
✅ 149/149 구절 분석 완료
✅ 중복 데이터 0건
✅ 데이터 품질 문제 0건
✅ npm run build 성공
✅ 웹 UI에서 Galatians 검색 시 149개 결과

## 시작해줘!
확인 없이 바로 작업을 시작하고, 2-2.5시간 안에 완료해줘. 문제가 생기면 스스로 해결하고, 최종 결과만 간단히 보고해줘.
```

---

## 💡 사용 방법

### 1. 컴퓨터 재부팅 후
```bash
# 터미널 열기
cd /Users/peter/Dev/bible-transcription-site

# Claude Code 시작
# (새 세션 시작됨)
```

### 2. 위의 프롬프트 복사
- 위의 "복사해서 붙여넣을 프롬프트" 섹션 전체를 복사

### 3. Claude Code에 붙여넣기
- 프롬프트를 그대로 붙여넣기
- Enter 누르기

### 4. 자동 실행 시작
- Claude가 계획서를 읽고
- 스크립트들을 생성하고
- 자동으로 149구절을 분석하고
- 검증까지 완료

### 5. 결과 확인
- 약 2-2.5시간 후 완료 메시지 확인
- 최종 통계 확인:
  ```
  ✅ Galatians 149/149 완료
  ✅ 중복 0건
  ✅ 검증 통과
  ```

---

## ⚙️ 설정 확인 (선택사항)

재개 전에 환경이 정상인지 확인하려면:

```bash
# 1. Git 상태
git status
git branch

# 2. 환경 변수
cat .env | grep -E "SUPABASE|ANTHROPIC" | head -3

# 3. Node.js & npm
node --version  # v20.x 이상
npm --version   # v10.x 이상

# 4. TypeScript
npx tsc --version  # v5.x
```

모두 정상이면 위의 프롬프트로 재개!

---

## 🚨 문제 해결

### "작업을 시작할 수 없습니다"
- 프롬프트에 "확인 없이 바로 시작" 명시되어 있는지 확인
- Plan mode가 비활성화되어 있는지 확인

### "파일을 찾을 수 없습니다"
```bash
# 작업 디렉토리 확인
pwd
# 출력: /Users/peter/Dev/bible-transcription-site

# 계획서 존재 확인
ls -la docs/GALATIANS_ANALYSIS_PLAN.md
```

### "환경 변수가 없습니다"
```bash
# .env 파일 확인
ls -la .env

# 내용 확인 (민감 정보 주의)
cat .env | head -5
```

### "Supabase 연결 실패"
```bash
# 연결 테스트
npx ts-node -e "
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);
const { data } = await supabase.from('verses').select('count');
console.log('✅ Connection successful');
"
```

---

## 📞 긴급 중단이 필요한 경우

작업 중 중단해야 한다면:

```bash
# 1. 현재 진행 상황 확인
cat galatians_progress.json

# 2. 프로세스 찾기
ps aux | grep "analyze-galatians"

# 3. 프로세스 종료
kill -9 [PID]

# 4. 진행 상황 확인
npx ts-node scripts/verify-galatians.ts
```

---

## 📊 예상 타임라인

| 시간 | 진행 상황 |
|------|-----------|
| 0분 | 프롬프트 붙여넣기 |
| 1-5분 | Phase 1: 조사 |
| 6-15분 | Phase 2: 스크립트 생성 |
| 16-90분 | Phase 3: 149구절 분석 |
| 91-110분 | Phase 4: 검증 |
| 111-120분 | Phase 5: 문제 해결 (필요시) |
| **120-150분** | **완료!** |

---

## ✅ 완료 확인

다음 메시지가 보이면 성공:

```
🎉 갈라디아서 분석 완료!

📊 최종 통계:
  총 구절: 149
  분석 완료: 149 (100%)
  중복: 0건
  품질 문제: 0건

✅ 모든 검증 통과
✅ 프로덕션 빌드 성공
✅ 웹 UI 정상 작동

🚀 다음 단계:
  - 커밋 및 푸시
  - Vercel 자동 배포
  - PR 업데이트
```

---

**문서 버전:** 1.0
**작성일:** 2025-09-30
**용도:** 컴퓨터 재부팅 후 작업 재개용