---
description: GitHub PR의 CodeRabbit 리뷰 내용을 자동으로 반영합니다
---

다음 명령어를 실행하여 CodeRabbit 리뷰를 가져와서 적용해주세요:

```bash
bash scripts/commands/apply-coderabbit-review.sh {{arg1}}
```

명령어 실행 후:
1. 생성된 프롬프트 파일의 내용을 읽어주세요
2. CodeRabbit의 제안사항을 코드에 적용해주세요
3. 변경사항을 검토하고 필요시 수정해주세요

**사용 예시:**
- `/apply-coderabbit 3` - PR #3의 리뷰 적용
- `/apply-coderabbit --here` - 현재 브랜치의 PR 자동 감지
