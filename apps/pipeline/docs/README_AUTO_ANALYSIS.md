# 신약 성경 자동 분석 가이드

## 현재 상황 (2025-10-04)

### ✅ 완료된 책 (2권, 40구절)
1. **Philemon** - 25/25 구절 (100%)
2. **3 John** - 15/15 구절 (100%)

### 🔄 부분 완료 (3권)
1. **2 John** - 1/13 구절 (8%)
2. **2 Timothy** - 1/83 구절 (1%)
3. 기타 - NIV 텍스트만 삽입됨

### ⏳ 남은 작업
- **소형책** 9권: 약 562구절
- **중형책** 9권: 약 2,315구절
- **대형책** 5권: 약 4,786구절
- **총 예상**: 약 7,411구절

## 자동 분석 완료 방법

### Option 1: Claude Code 대화형 (현재 방식)
장점: 품질이 매우 높음
단점: 매우 느림 (구절당 1-2분)

사용법:
```bash
# Claude Code에서 요청:
"<책이름> 전체를 분석해줘"
```

### Option 2: API 스크립트 (권장)
장점: 빠르고 자동화됨 (구절당 10-20초)
단점: ANTHROPIC_API_KEY 필요

1. `.env` 파일에 API 키 추가:
```bash
ANTHROPIC_API_KEY=sk-ant-...
```

2. 갈라디아서 분석 스크립트 참고:
```bash
# 예시 스크립트가 scripts/ 디렉토리에 있음
# 필요시 복사하여 다른 책에 적용
```

### Option 3: 단계별 수동 분석
장점: 완전한 제어
단점: 시간 소요

Claude Code에서 각 책을 하나씩 요청:
```
"2 John 1:2-13을 분석하여 DB에 저장해줘"
```

## 데이터베이스 현황

### Books 테이블
- Philemon, 3 John, 2 John, Jude, Titus, 2 Thessalonians, 2 Peter, 2 Timothy, 1 Thessalonians 생성됨

### Verses 테이블
- 대부분의 소형책 NIV 텍스트 삽입 완료
- `analysis_completed = false` 상태

### 분석 데이터
- Philemon: 완전한 분석 데이터 존재
- 3 John: 완전한 분석 데이터 존재

## 다음 단계 권장사항

### 즉시 실행 가능 (API 키 없이)
1. Claude Code 세션에서 소형책들을 하나씩 완료:
   ```
   "2 John 전체를 분석해줘"
   "Jude 전체를 분석해줘"
   "Titus 전체를 분석해줘"
   ```

2. 각 책 완료 후 검증:
   ```bash
   npx tsx scripts/check-philemon-pending.ts
   ```

### API 키 있을 때
1. Anthropic API 키를 `.env`에 추가
2. 자동 분석 스크립트 실행
3. 몇 시간 내에 전체 신약 완료 가능

## 진행 상황 모니터링

```bash
# 전체 진행 상황 확인
npx tsx -e "
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

async function checkAll() {
  const { data } = await supabase
    .from('verses')
    .select('analysis_completed, reference')
    .order('reference');

  const completed = data?.filter(v => v.analysis_completed).length || 0;
  const total = data?.length || 0;
  console.log(\`전체: \${completed}/\${total} (\${Math.round(completed/total*100)}%)\`);
}

checkAll();
"
```

## 예상 소요 시간

### Claude Code 대화형
- 소형책 (평균 60구절): 1-2시간/책
- 중형책 (평균 250구절): 4-8시간/책
- 대형책 (평균 900구절): 15-30시간/책
- **전체 예상**: 200-400시간

### API 스크립트 (자동)
- 소형책: 10-20분/책
- 중형책: 40-80분/책
- 대형책: 2-4시간/책
- **전체 예상**: 30-60시간

## 문의사항

분석 품질 확인:
- Philemon과 3 John 분석 결과를 웹사이트에서 확인
- 동일한 품질로 나머지 책들도 분석 예정
