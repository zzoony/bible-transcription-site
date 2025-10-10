# 구약 성경 자동 분석 준비 가이드

## 📋 개요

신약 성경 자동 분석 시스템과 동일한 방식으로 구약 39권을 분석합니다.

**구약 통계**:
- 총 39권
- 약 23,145 구절 (신약 7,958구절의 약 3배)
- 예상 소요 시간: 약 6-8시간

## 🔧 준비된 스크립트

### 1. analyze-old-testament.ts
구약 전체 자동 분석 스크립트
- ✅ 구약 특성 반영 (토라, 역사서, 지혜서, 선지서 구분)
- ✅ 문맥 설명 자동 생성 (책 유형에 따라)
- ✅ Rate limiting: 1초 (신약 1.5초보다 빠름)
- ✅ 39권 크기 순 처리

### 2. check-old-testament-status.ts
구약 분석 현황 확인 스크립트
- ✅ 카테고리별 표시 (Torah, Historical, Wisdom, Prophets)
- ✅ 실시간 진행률 확인
- ✅ 미완료 책 목록

## 📊 구약 39권 분류

### Torah (모세오경) - 5권
- Genesis (창세기) - 1,533구절
- Exodus (출애굽기) - 1,213구절
- Leviticus (레위기) - 859구절
- Numbers (민수기) - 1,288구절
- Deuteronomy (신명기) - 959구절

### Historical Books (역사서) - 12권
- Joshua (여호수아) - 658구절
- Judges (사사기) - 618구절
- Ruth (룻기) - 85구절
- 1 Samuel (사무엘상) - 810구절
- 2 Samuel (사무엘하) - 695구절
- 1 Kings (열왕기상) - 816구절
- 2 Kings (열왕기하) - 719구절
- 1 Chronicles (역대상) - 942구절
- 2 Chronicles (역대하) - 822구절
- Ezra (에스라) - 280구절
- Nehemiah (느헤미야) - 406구절
- Esther (에스더) - 167구절

### Wisdom Literature (지혜서) - 5권
- Job (욥기) - 1,070구절
- Psalms (시편) - 2,461구절
- Proverbs (잠언) - 915구절
- Ecclesiastes (전도서) - 222구절
- Song of Solomon (아가) - 117구절

### Major Prophets (대선지서) - 5권
- Isaiah (이사야) - 1,292구절
- Jeremiah (예레미야) - 1,364구절
- Lamentations (애가) - 154구절
- Ezekiel (에스겔) - 1,273구절
- Daniel (다니엘) - 357구절

### Minor Prophets (소선지서) - 12권
- Hosea (호세아) - 197구절
- Joel (요엘) - 73구절
- Amos (아모스) - 146구절
- Obadiah (오바댜) - 21구절
- Jonah (요나) - 48구절
- Micah (미가) - 105구절
- Nahum (나훔) - 47구절
- Habakkuk (하박국) - 56구절
- Zephaniah (스바냐) - 53구절
- Haggai (학개) - 38구절
- Zechariah (스가랴) - 211구절
- Malachi (말라기) - 55구절

## 🚀 실행 순서

### 1단계: 구약 NIV 텍스트 확보
**현재 상태**: 데이터베이스에 구약 텍스트 없음

**필요한 작업**:
1. Bible API 또는 웹 스크래핑으로 구약 NIV 텍스트 수집
2. verses 테이블에 일괄 삽입
3. 데이터 검증

### 2단계: 현황 확인
```bash
npx tsx scripts/check-old-testament-status.ts
```

### 3단계: 자동 분석 실행
```bash
nohup npx tsx scripts/analyze-old-testament.ts > logs/auto-analysis-ot.log 2>&1 &
echo $!
```

### 4단계: 진행 상황 모니터링
```bash
# 30분마다 진행 상황 확인
(sleep 1800 && npx tsx scripts/check-old-testament-status.ts) > logs/progress-ot-30min.log 2>&1 &

# 또는 수동 확인
tail -f logs/auto-analysis-ot.log
npx tsx scripts/check-old-testament-status.ts
```

## 🎯 구약 특화 기능

### 1. 책 유형별 문맥 설명
- **Torah**: 창조, 언약, 율법 중심
- **Historical**: 하나님의 섭리와 역사
- **Wisdom**: 삶의 지혜와 하나님 경외
- **Major Prophets**: 심판과 회복의 메시지
- **Minor Prophets**: 회개와 순종 촉구

### 2. 의미적 분류 확장
신약에 추가하여:
- '선언' - "says", "said", "spoke" 포함
- '예언' - "will", "shall", "come" 포함

### 3. 최적화된 처리 속도
- Rate limiting: 1초 (신약 1.5초 대비 33% 단축)
- 20구절마다 진행 상황 출력 (신약 10구절)
- 예상 처리 속도: 분당 60구절

## ⏱️ 예상 소요 시간

| 구분 | 구절 수 | 예상 시간 |
|-----|---------|----------|
| 소형책 (15권) | ~1,500 | 25분 |
| 중형책 (9권) | ~3,500 | 58분 |
| 대형책 (8권) | ~7,000 | 117분 |
| 초대형책 (7권) | ~11,145 | 186분 |
| **전체** | **23,145** | **약 6-7시간** |

## 📝 다음 단계

1. **NIV 텍스트 확보 방법 결정**
   - Bible API 사용
   - 웹 스크래핑
   - 기존 데이터 임포트

2. **신약 완료 후 실행**
   - 현재 신약 분석 진행 중 (40.4% 완료)
   - 신약 완료 후 구약 시작 권장

3. **품질 검증 계획**
   - 구약 특성 반영 확인
   - 히브리어 관련 설명 적절성
   - 문맥 설명 정확성

## 🔄 신약 대비 개선사항

1. **처리 속도 33% 향상** (1.5초 → 1초)
2. **책 유형별 맞춤 분석** (5가지 카테고리)
3. **구약 특화 의미 분류** (선언, 예언 추가)
4. **카테고리별 진행 상황** (Torah, Historical, etc.)

## ✅ 준비 완료 항목

- [x] 구약 분석 스크립트 작성
- [x] 구약 현황 확인 스크립트 작성
- [x] 39권 분류 및 순서 정의
- [x] 구약 특화 문맥 생성 함수
- [ ] NIV 텍스트 데이터베이스 삽입
- [ ] 실행 및 모니터링

`★ 준비 완료! NIV 텍스트만 확보되면 즉시 실행 가능합니다.`
