#!/bin/bash

# CodeRabbit 리뷰 내용을 자동으로 반영하는 스크립트
# 사용법: ./scripts/commands/apply-coderabbit-review.sh [PR_NUMBER]

set -Eeuo pipefail
trap 'echo -e "\n${RED}Error on line $LINENO. Exiting.${NC}" >&2' ERR

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# PR 번호 확인
PR_NUMBER=$1
if [ -z "$PR_NUMBER" ]; then
    echo -e "${RED}❌ 오류: PR 번호가 필요합니다${NC}"
    echo "사용법: $0 <PR_NUMBER|--here>"
    echo "예시: $0 3"
    echo "예시: $0 --here  (현재 브랜치의 PR 자동 감지)"
    exit 1
fi

# --here 옵션 처리: 현재 브랜치에서 PR 번호 자동 감지
if [ "$PR_NUMBER" = "--here" ]; then
    echo -e "${YELLOW}🔍 현재 브랜치의 PR 자동 감지 중...${NC}"
    CURRENT_BRANCH=$(git branch --show-current)

    # 현재 브랜치와 연결된 PR 찾기
    PR_DATA=$(gh pr list --head "$CURRENT_BRANCH" --json number,state --limit 1)

    if [ -z "$PR_DATA" ] || [ "$PR_DATA" = "[]" ]; then
        echo -e "${RED}❌ 현재 브랜치($CURRENT_BRANCH)와 연결된 PR을 찾을 수 없습니다${NC}"
        echo -e "${YELLOW}💡 Tip: 먼저 PR을 생성하거나, PR 번호를 직접 입력하세요${NC}"
        exit 1
    fi

    PR_NUMBER=$(jq -r '.[0].number' <<<"$PR_DATA")
    PR_STATE=$(jq -r '.[0].state' <<<"$PR_DATA")

    echo -e "${GREEN}✓ 감지된 PR: #${PR_NUMBER} (상태: ${PR_STATE})${NC}\n"
fi

echo -e "${BLUE}🤖 CodeRabbit 리뷰 자동 적용 시작...${NC}\n"

# 1. PR 정보 가져오기
echo -e "${YELLOW}📋 PR #${PR_NUMBER} 정보 조회 중...${NC}"
PR_INFO=$(gh pr view $PR_NUMBER --json title,state,headRefName,baseRefName)
PR_TITLE=$(jq -r '.title' <<<"$PR_INFO")
PR_STATE=$(jq -r '.state' <<<"$PR_INFO")
HEAD_BRANCH=$(jq -r '.headRefName' <<<"$PR_INFO")
BASE_BRANCH=$(jq -r '.baseRefName' <<<"$PR_INFO")

if [ "$PR_STATE" != "OPEN" ]; then
    echo -e "${RED}❌ PR이 OPEN 상태가 아닙니다 (현재: $PR_STATE)${NC}"
    exit 1
fi

echo -e "${GREEN}✓ PR: $PR_TITLE${NC}"
echo -e "${GREEN}✓ 브랜치: $HEAD_BRANCH → $BASE_BRANCH${NC}\n"

# 2. 현재 브랜치 확인 및 전환
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "$HEAD_BRANCH" ]; then
    echo -e "${YELLOW}📌 브랜치 전환: $CURRENT_BRANCH → $HEAD_BRANCH${NC}"
    git checkout $HEAD_BRANCH
    git pull origin $HEAD_BRANCH
fi

# 3. CodeRabbit 코멘트 추출
echo -e "${YELLOW}🔍 CodeRabbit 리뷰 코멘트 조회 중...${NC}"
TEMP_FILE="$(mktemp -t coderabbit-review."$PR_NUMBER".XXXXXX.json)"
trap 'rm -f "$TEMP_FILE"' EXIT

gh api "repos/:owner/:repo/pulls/$PR_NUMBER/comments" --paginate > "$TEMP_FILE"

# CodeRabbit 코멘트 개수 확인 (pagination 지원)
CODERABBIT_COUNT=$(jq -s '[.[].[] | select(.user.login == "coderabbitai[bot]")] | length' "$TEMP_FILE")

if [ "$CODERABBIT_COUNT" -eq 0 ]; then
    echo -e "${YELLOW}⚠️  CodeRabbit 리뷰 코멘트가 없습니다${NC}"
    echo -e "${BLUE}💡 CodeRabbit이 아직 리뷰를 하지 않았거나, 이미 모든 이슈가 해결되었습니다${NC}"
    exit 0
fi

echo -e "${GREEN}✓ CodeRabbit 코멘트 ${CODERABBIT_COUNT}개 발견${NC}\n"

# 4. AI Prompt 추출 및 저장
echo -e "${YELLOW}📝 AI Prompt 추출 중...${NC}"
PROMPTS_FILE="/tmp/coderabbit-prompts-$PR_NUMBER.md"

jq -r '.[] | select(.user.login == "coderabbitai[bot]") | "
## 파일: \(.path)
라인: \(.line // .original_line // "N/A")

\(.body)

---
"' $TEMP_FILE > $PROMPTS_FILE

echo -e "${GREEN}✓ Prompts 저장: $PROMPTS_FILE${NC}"
echo -e "${BLUE}📄 총 $(wc -l < $PROMPTS_FILE) 줄의 리뷰 내용${NC}\n"

# 5. Claude에게 전달할 프롬프트 생성
CLAUDE_PROMPT_FILE="/tmp/claude-prompt-$PR_NUMBER.txt"

cat > $CLAUDE_PROMPT_FILE <<EOF
GitHub PR #${PR_NUMBER}의 CodeRabbit 리뷰 내용을 읽고 수정사항을 반영해주세요.

**PR 정보:**
- 제목: $PR_TITLE
- 브랜치: $HEAD_BRANCH → $BASE_BRANCH

**작업 지침:**
1. 아래 CodeRabbit 리뷰 내용을 꼼꼼히 읽어주세요
2. "Prompt for AI Agents" 섹션의 지침을 따라 코드를 수정하세요
3. 각 파일별로 수정사항을 적용하세요
4. 수정 완료 후 빌드 테스트를 실행하세요 (npm run build)
5. 모든 수정사항을 커밋하세요

**중요:**
- TypeScript 타입 안정성 유지
- 기존 코드 스타일 패턴 준수
- 프로덕션 환경에서 에러 상세정보 숨김
- 한글 에러 메시지 사용

---

# CodeRabbit 리뷰 내용

$(cat $PROMPTS_FILE)

---

위 리뷰 내용을 바탕으로 코드를 수정해주세요.
EOF

echo -e "${GREEN}✓ Claude 프롬프트 생성: $CLAUDE_PROMPT_FILE${NC}\n"

# 6. 사용자에게 안내
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}✅ 준비 완료!${NC}\n"
echo -e "${YELLOW}다음 단계:${NC}"
echo -e "1. Claude Code에서 다음 파일의 내용을 복사하여 전달:"
echo -e "   ${BLUE}$CLAUDE_PROMPT_FILE${NC}\n"
echo -e "2. 또는 다음 명령어로 직접 보기:"
echo -e "   ${BLUE}cat $CLAUDE_PROMPT_FILE${NC}\n"
echo -e "3. Claude가 수정을 완료하면:"
echo -e "   ${BLUE}git push origin $HEAD_BRANCH${NC}\n"
echo -e "${BLUE}═══════════════════════════════════════════════════${NC}\n"

# 7. 옵션: 프롬프트 자동 출력
read -p "프롬프트를 지금 출력하시겠습니까? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "\n${BLUE}═══════════════════════════════════════════════════${NC}"
    cat $CLAUDE_PROMPT_FILE
    echo -e "${BLUE}═══════════════════════════════════════════════════${NC}\n"
fi

# 8. 정리 옵션
read -p "임시 파일을 삭제하시겠습니까? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -f $TEMP_FILE $PROMPTS_FILE $CLAUDE_PROMPT_FILE
    echo -e "${GREEN}✓ 임시 파일 삭제 완료${NC}"
else
    echo -e "${YELLOW}임시 파일 유지:${NC}"
    echo -e "  - $TEMP_FILE"
    echo -e "  - $PROMPTS_FILE"
    echo -e "  - $CLAUDE_PROMPT_FILE"
fi

echo -e "\n${GREEN}🎉 완료!${NC}"
