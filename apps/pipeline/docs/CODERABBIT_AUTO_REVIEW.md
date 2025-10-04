# 🤖 CodeRabbit 자동 리뷰 적용 가이드

CodeRabbit의 리뷰 내용을 Claude Code를 통해 자동으로 반영하는 워크플로우입니다.

## 📋 개요

GitHub PR에서 CodeRabbit이 남긴 리뷰 코멘트를 자동으로 수집하고, Claude Code에게 전달하여 코드 수정을 자동화합니다.

**장점:**
- ✅ 수동으로 리뷰 내용을 복사할 필요 없음
- ✅ "Prompt for AI Agents" 섹션을 자동 추출
- ✅ 모든 리뷰 항목을 한 번에 처리
- ✅ 체계적이고 일관된 수정 작업

---

## 🚀 사용법

### 1. Claude Code 슬래시 커맨드 (권장)

Claude Code에서 `/apply-coderabbit` 명령어를 사용하면 더욱 편리합니다:

```
/apply-coderabbit 3          # PR #3의 CodeRabbit 리뷰 적용
/apply-coderabbit --here     # 현재 작업 중인 PR 자동 감지 후 적용
```

**장점:**
- ✅ Claude Code 내에서 바로 실행
- ✅ 프롬프트 자동 복사 (별도 파일 읽기 불필요)
- ✅ 작업 흐름 중단 없이 진행
- ✅ `--here` 옵션으로 현재 PR 자동 감지

### 2. 직접 스크립트 실행

터미널에서 직접 실행할 수도 있습니다:

```bash
# PR 번호를 인자로 전달
./scripts/commands/apply-coderabbit-review.sh 3

# 현재 브랜치의 PR 자동 감지
./scripts/commands/apply-coderabbit-review.sh --here
```

### 3. 실행 흐름

```
1. PR 정보 조회
   ↓
2. 브랜치 자동 전환 (필요시)
   ↓
3. CodeRabbit 코멘트 추출
   ↓
4. AI Prompt 생성
   ↓
5. Claude에게 전달
   ↓
6. 수정 완료 후 Push
```

---

## 📖 상세 단계

### Step 1: 스크립트 실행

```bash
./scripts/commands/apply-coderabbit-review.sh 3
```

**출력 예시:**
```
🤖 CodeRabbit 리뷰 자동 적용 시작...

📋 PR #3 정보 조회 중...
✓ PR: ✨ 구절 탐색 기능 구현
✓ 브랜치: feature/improve-navigation → main

🔍 CodeRabbit 리뷰 코멘트 조회 중...
✓ CodeRabbit 코멘트 12개 발견

📝 AI Prompt 추출 중...
✓ Prompts 저장: /tmp/coderabbit-prompts-3.md
```

### Step 2: 생성된 프롬프트 확인

스크립트가 생성한 프롬프트 파일 위치:
```
/tmp/claude-prompt-{PR_NUMBER}.txt
```

**내용 구조:**
```markdown
GitHub PR #3의 CodeRabbit 리뷰 내용을 읽고 수정사항을 반영해주세요.

**PR 정보:**
- 제목: ✨ 구절 탐색 기능 구현
- 브랜치: feature/improve-navigation → main

**작업 지침:**
1. CodeRabbit 리뷰 내용을 꼼꼼히 읽기
2. "Prompt for AI Agents" 지침 따르기
3. 각 파일별 수정사항 적용
4. 빌드 테스트 (npm run build)
5. 커밋

---

# CodeRabbit 리뷰 내용

## 파일: app/api/search/route.ts
라인: 23

⚠️ Potential issue | 🟡 Minor
...
```

### Step 3: Claude에게 프롬프트 전달

#### 방법 1: 파일 내용 복사
```bash
cat /tmp/claude-prompt-3.txt
```
출력된 내용을 Claude Code에 붙여넣기

#### 방법 2: 스크립트 실행 시 자동 출력
스크립트 실행 중 "프롬프트를 지금 출력하시겠습니까?"에 `y` 입력

### Step 4: Claude가 수정 완료

Claude Code가 다음 작업을 자동 수행:
1. ✅ 리뷰 내용 분석
2. ✅ 코드 수정
3. ✅ 빌드 테스트
4. ✅ 변경사항 커밋

### Step 5: 변경사항 Push

```bash
git push origin feature/improve-navigation
```

---

## 🎯 스크립트가 하는 일

### 1. PR 정보 검증
- PR 상태 확인 (OPEN만 처리)
- 브랜치 정보 추출
- 현재 브랜치와 비교

### 2. 자동 브랜치 전환
```bash
# 현재 브랜치가 PR 브랜치가 아니면 자동 전환
git checkout feature/improve-navigation
git pull origin feature/improve-navigation
```

### 3. CodeRabbit 코멘트 추출
```bash
# GitHub API로 PR 코멘트 조회
gh api repos/:owner/:repo/pulls/3/comments --paginate

# CodeRabbit 봇 코멘트만 필터링
jq '.[] | select(.user.login == "coderabbitai[bot]")'
```

### 4. AI Prompt 섹션 추출
각 코멘트에서 다음 섹션을 찾아 추출:
```markdown
<details>
<summary>🤖 Prompt for AI Agents</summary>

```
{실제 AI 지침}
```

</details>
```

### 5. Claude 전용 프롬프트 생성
- PR 컨텍스트 정보
- 작업 지침
- 모든 리뷰 내용 통합
- 코드 스타일 규칙

---

## 💡 활용 팁

### Tip 1: 리뷰가 많을 때
```bash
# 프롬프트 파일 미리 확인
cat /tmp/claude-prompt-3.txt | less

# 특정 파일만 보기
cat /tmp/claude-prompt-3.txt | grep "파일:" -A 10
```

### Tip 2: 현재 작업 중인 PR 처리
```bash
# 현재 브랜치의 PR 자동 감지
./scripts/commands/apply-coderabbit-review.sh --here

# 또는 Claude Code에서
/apply-coderabbit --here
```

### Tip 3: 여러 PR 처리
```bash
# PR 3 처리
./scripts/commands/apply-coderabbit-review.sh 3

# PR 4 처리
./scripts/commands/apply-coderabbit-review.sh 4
```

### Tip 4: 임시 파일 재사용
```bash
# 임시 파일 유지 선택 → 나중에 다시 참고 가능
cat /tmp/coderabbit-prompts-3.md
```

---

## 🔧 문제 해결

### Q1: "CodeRabbit 코멘트가 없습니다"
**원인:**
- CodeRabbit이 아직 리뷰를 시작하지 않음
- 모든 이슈가 이미 해결됨

**해결:**
- 잠시 기다렸다가 재실행
- GitHub PR 페이지에서 CodeRabbit 상태 확인

### Q2: "PR이 OPEN 상태가 아닙니다"
**원인:**
- PR이 이미 병합되었거나 닫힘

**해결:**
- 올바른 PR 번호인지 확인
- `gh pr list` 명령어로 OPEN PR 확인

### Q3: 브랜치 전환 실패
**원인:**
- 로컬에 커밋되지 않은 변경사항

**해결:**
```bash
# 변경사항 스태시
git stash

# 스크립트 재실행
./scripts/commands/apply-coderabbit-review.sh 3

# 필요시 스태시 복구
git stash pop
```

---

## 📁 관련 파일

```
scripts/
  commands/
    apply-coderabbit-review.sh    # 메인 스크립트

docs/
  CODERABBIT_AUTO_REVIEW.md       # 이 문서

/tmp/
  coderabbit-review-{PR}.json     # 원본 코멘트 (임시)
  coderabbit-prompts-{PR}.md      # 추출된 Prompts (임시)
  claude-prompt-{PR}.txt          # Claude용 프롬프트 (임시)
```

---

## 🎨 워크플로우 예시

### 실제 사용 예시

```bash
$ ./scripts/commands/apply-coderabbit-review.sh 3

🤖 CodeRabbit 리뷰 자동 적용 시작...

📋 PR #3 정보 조회 중...
✓ PR: ✨ 구절 탐색 기능 구현
✓ 브랜치: feature/improve-navigation → main

📌 브랜치 전환: main → feature/improve-navigation
Switched to branch 'feature/improve-navigation'
Already up to date.

🔍 CodeRabbit 리뷰 코멘트 조회 중...
✓ CodeRabbit 코멘트 8개 발견

📝 AI Prompt 추출 중...
✓ Prompts 저장: /tmp/coderabbit-prompts-3.md
📄 총 245 줄의 리뷰 내용

✓ Claude 프롬프트 생성: /tmp/claude-prompt-3.txt

═══════════════════════════════════════════════════
✅ 준비 완료!

다음 단계:
1. Claude Code에서 다음 파일의 내용을 복사하여 전달:
   /tmp/claude-prompt-3.txt

2. 또는 다음 명령어로 직접 보기:
   cat /tmp/claude-prompt-3.txt

3. Claude가 수정을 완료하면:
   git push origin feature/improve-navigation

═══════════════════════════════════════════════════

프롬프트를 지금 출력하시겠습니까? (y/n): y

[프롬프트 내용 출력...]

임시 파일을 삭제하시겠습니까? (y/n): n
임시 파일 유지:
  - /tmp/coderabbit-review-3.json
  - /tmp/coderabbit-prompts-3.md
  - /tmp/claude-prompt-3.txt

🎉 완료!
```

---

## 🔗 관련 문서

- [CodeRabbit 공식 문서](https://docs.coderabbit.ai/)
- [GitHub CLI 문서](https://cli.github.com/)
- [프로젝트 기여 가이드](../CONTRIBUTING.md)

---

## 📝 버전 히스토리

- **v1.0.0** (2025-10-02)
  - 초기 버전 생성
  - PR 코멘트 자동 추출
  - Claude용 프롬프트 생성
  - 대화형 인터페이스

---

**💡 Tip:** Claude Code 슬래시 커맨드가 가장 편리하지만, 터미널에서도 alias로 등록 가능합니다!

```bash
# ~/.bashrc 또는 ~/.zshrc에 추가
alias crr='./scripts/commands/apply-coderabbit-review.sh'

# 사용
crr 3
crr --here
```

## 🎮 Claude Code 슬래시 커맨드 상세 가이드

### 커맨드 등록

프로젝트에 `.claude/commands/apply-coderabbit.md` 파일이 생성되어 있습니다:

```markdown
---
description: GitHub PR의 CodeRabbit 리뷰 내용을 자동으로 반영합니다
---

다음 명령어를 실행하여 CodeRabbit 리뷰를 가져와서 적용해주세요:

bash scripts/commands/apply-coderabbit-review.sh {{arg1}}

명령어 실행 후:
1. 생성된 프롬프트 파일의 내용을 읽어주세요
2. CodeRabbit의 제안사항을 코드에 적용해주세요
3. 변경사항을 검토하고 필요시 수정해주세요
```

### 사용 방법

Claude Code 대화창에서:

```
/apply-coderabbit 3          # PR #3 리뷰 적용
/apply-coderabbit --here     # 현재 브랜치 PR 자동 감지
```

### --here 옵션 동작 방식

1. **현재 브랜치 확인**: `git branch --show-current`
2. **연결된 PR 검색**: `gh pr list --head <브랜치명>`
3. **PR 번호 추출**: 자동으로 PR 번호 감지
4. **리뷰 적용**: 감지된 PR의 CodeRabbit 리뷰 자동 처리

**예시:**
```bash
# 현재 브랜치: feature/improve-navigation
# 연결된 PR: #3

/apply-coderabbit --here

# 출력:
# 🔍 현재 브랜치의 PR 자동 감지 중...
# ✓ 감지된 PR: #3 (상태: OPEN)
# [리뷰 처리 진행...]
```
