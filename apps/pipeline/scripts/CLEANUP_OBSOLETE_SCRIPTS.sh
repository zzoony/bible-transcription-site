#!/bin/bash

# 구약/신약 분석 완료 후 불필요한 스크립트 정리
# 실행 전 확인: analyze-old-testament.ts가 완료된 후에만 실행!

echo "🧹 불필요한 스크립트 정리 시작..."
echo ""
echo "⚠️  주의: 이 스크립트는 신약+구약 분석이 완료된 후에만 실행하세요!"
echo "⚠️  analyze-old-testament.ts가 실행 중이면 절대 실행하지 마세요!"
echo ""
read -p "계속하시겠습니까? (y/N): " confirm

if [[ $confirm != [yY] ]]; then
    echo "취소되었습니다."
    exit 0
fi

cd /Users/peter/Dev/bible-transcription-site/apps/pipeline/scripts

# 백업 디렉토리 생성
mkdir -p archive/obsolete_scripts
echo "📦 archive/obsolete_scripts 디렉토리 생성 완료"

# 삭제 대신 아카이브로 이동 (안전)
echo ""
echo "📂 스크립트 아카이브 시작..."

# 1. 신약 책별 조각 저장 스크립트들
echo "  1/5: batch-save-* 및 save-* 스크립트 이동 중..."
mv batch-save-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-1peter-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-1timothy-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-2peter-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-2thess*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-2timothy-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-colossians-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-hebrews-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-james-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-jude-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-titus-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-1john-*.ts archive/obsolete_scripts/ 2>/dev/null
mv save-ephesians-*.ts archive/obsolete_scripts/ 2>/dev/null

# 2. 신약 책별 개별 분석 스크립트들
echo "  2/5: analyze-* 개별 책 스크립트 이동 중..."
mv analyze-1-john.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-1-peter.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-1-timothy.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-1corinthians.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-1timothy-remaining.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-2corinthians-full.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-2john.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-2peter.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-2thessalonians.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-2timothy.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-all-remaining.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-colossians.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-ephesians-direct.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-hebrews-1.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-hebrews-remaining.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-hebrews.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-james-remaining-auto.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-james.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-jude.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-revelation.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-romans.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-titus-auto.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-titus.ts archive/obsolete_scripts/ 2>/dev/null
mv analyze-two-books.ts archive/obsolete_scripts/ 2>/dev/null
mv auto-analyze-*.ts archive/obsolete_scripts/ 2>/dev/null
mv full-titus-analysis.ts archive/obsolete_scripts/ 2>/dev/null
mv hebrews-chapter-1-analysis.ts archive/obsolete_scripts/ 2>/dev/null
mv manual-analysis-batch-1.ts archive/obsolete_scripts/ 2>/dev/null
mv run-*.ts archive/obsolete_scripts/ 2>/dev/null
mv titus-all-analyses.ts archive/obsolete_scripts/ 2>/dev/null

# 3. Check/Verify/Fix 스크립트들 (핵심 템플릿 제외)
echo "  3/5: check-*, verify-*, fix-* 스크립트 이동 중 (템플릿 제외)..."
mv check-1thess-*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-2-12.ts archive/obsolete_scripts/ 2>/dev/null
mv check-2corinthians.ts archive/obsolete_scripts/ 2>/dev/null
mv check-2peter-*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-acts-*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-available-books.ts archive/obsolete_scripts/ 2>/dev/null
mv check-books-status.ts archive/obsolete_scripts/ 2>/dev/null
mv check-books.ts archive/obsolete_scripts/ 2>/dev/null
mv check-chapter-schema.ts archive/obsolete_scripts/ 2>/dev/null
mv check-colossians-*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-completed-analysis.ts archive/obsolete_scripts/ 2>/dev/null
mv check-galatians-status.ts archive/obsolete_scripts/ 2>/dev/null
mv check-hebrews-*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-jude.ts archive/obsolete_scripts/ 2>/dev/null
mv check-navigation-data.ts archive/obsolete_scripts/ 2>/dev/null
mv check-old-testament-status.ts archive/obsolete_scripts/ 2>/dev/null
mv check-old-testament-verses-count.ts archive/obsolete_scripts/ 2>/dev/null
mv check-philemon-*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-revelation.ts archive/obsolete_scripts/ 2>/dev/null
mv check-romans.ts archive/obsolete_scripts/ 2>/dev/null
mv check-schema*.ts archive/obsolete_scripts/ 2>/dev/null
mv check-three-books.ts archive/obsolete_scripts/ 2>/dev/null
mv check-titus.ts archive/obsolete_scripts/ 2>/dev/null
mv check-two-books.ts archive/obsolete_scripts/ 2>/dev/null
mv check-verse*.ts archive/obsolete_scripts/ 2>/dev/null
mv cleanup-*.ts archive/obsolete_scripts/ 2>/dev/null
mv find-missing-data.ts archive/obsolete_scripts/ 2>/dev/null
mv fix-2-12-duplicates.ts archive/obsolete_scripts/ 2>/dev/null
mv list-*.ts archive/obsolete_scripts/ 2>/dev/null
mv verify-1thess-*.ts archive/obsolete_scripts/ 2>/dev/null
mv verify-completeness.ts archive/obsolete_scripts/ 2>/dev/null
mv verify-jude.ts archive/obsolete_scripts/ 2>/dev/null
mv verify-philemon.ts archive/obsolete_scripts/ 2>/dev/null
mv verify-romans-*.ts archive/obsolete_scripts/ 2>/dev/null
mv verify-thessalonians.ts archive/obsolete_scripts/ 2>/dev/null

# 4. Fetch/Import/Scrape 스크립트들
echo "  4/5: fetch-*, import-*, scrape-* 스크립트 이동 중..."
mv fetch-*.ts archive/obsolete_scripts/ 2>/dev/null
mv import-galatians-niv.ts archive/obsolete_scripts/ 2>/dev/null
mv import-niv-*.ts archive/obsolete_scripts/ 2>/dev/null
mv import-two-books-niv.ts archive/obsolete_scripts/ 2>/dev/null
mv load-old-testament-from-json.ts archive/obsolete_scripts/ 2>/dev/null
mv parse-niv-json.ts archive/obsolete_scripts/ 2>/dev/null
mv scrape-all-nt-niv.ts archive/obsolete_scripts/ 2>/dev/null

# 5. Setup/Get/Insert/Update/Query/임시/테스트 스크립트들
echo "  5/5: setup-*, get-*, temp-*, test-* 등 기타 스크립트 이동 중..."
mv add-philemon-verse.ts archive/obsolete_scripts/ 2>/dev/null
mv bulk-save-*.ts archive/obsolete_scripts/ 2>/dev/null
mv create-colossians-1peter.ts archive/obsolete_scripts/ 2>/dev/null
mv final-check.ts archive/obsolete_scripts/ 2>/dev/null
mv get-*.ts archive/obsolete_scripts/ 2>/dev/null
mv insert-*.ts archive/obsolete_scripts/ 2>/dev/null
mv mark-philemon-complete.ts archive/obsolete_scripts/ 2>/dev/null
mv monitor-progress.ts archive/obsolete_scripts/ 2>/dev/null
mv query-*.ts archive/obsolete_scripts/ 2>/dev/null
mv quick-check.ts archive/obsolete_scripts/ 2>/dev/null
mv setup-2peter.ts archive/obsolete_scripts/ 2>/dev/null
mv setup-2thessalonians.ts archive/obsolete_scripts/ 2>/dev/null
mv setup-books.ts archive/obsolete_scripts/ 2>/dev/null
mv setup-philemon*.ts archive/obsolete_scripts/ 2>/dev/null
mv setup-three-books.ts archive/obsolete_scripts/ 2>/dev/null
mv setup-two-timothy-thessalonians.ts archive/obsolete_scripts/ 2>/dev/null
mv temp-*.ts archive/obsolete_scripts/ 2>/dev/null
mv test-*.ts archive/obsolete_scripts/ 2>/dev/null
mv update-*.ts archive/obsolete_scripts/ 2>/dev/null
mv wait-for-completion.ts archive/obsolete_scripts/ 2>/dev/null

echo ""
echo "✅ 스크립트 아카이브 완료!"
echo ""

# 통계 출력
ARCHIVED_COUNT=$(ls -1 archive/obsolete_scripts/*.ts 2>/dev/null | wc -l | xargs)
REMAINING_COUNT=$(ls -1 *.ts 2>/dev/null | wc -l | xargs)

echo "📊 정리 결과:"
echo "  • 아카이브된 스크립트: ${ARCHIVED_COUNT}개"
echo "  • 남은 핵심 스크립트: ${REMAINING_COUNT}개"
echo ""
echo "📂 남은 핵심 스크립트 목록:"
ls -1 *.ts 2>/dev/null | head -20
echo ""
echo "✅ 정리 완료! archive/obsolete_scripts/ 디렉토리에 백업되었습니다."
echo "⚠️  필요하면 언제든 복원할 수 있습니다: mv archive/obsolete_scripts/[파일명] ."
