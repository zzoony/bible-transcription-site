#!/bin/bash

# 간단하게 DB 내용을 확인하는 스크립트

echo "========================================="
echo "📊 성경 구절 분석 현황"
echo "========================================="

# 전체 현황
docker compose exec postgres psql -U postgres -d bible_transcription -t -c "
SELECT
    '📚 전체 구절: ' || COUNT(*) || '개' as status
FROM verses
UNION ALL
SELECT
    '✅ 분석 완료: ' || COUNT(*) || '개' as status
FROM verses
WHERE analysis_completed = true
UNION ALL
SELECT
    '⏳ 분석 대기: ' || COUNT(*) || '개' as status
FROM verses
WHERE analysis_completed = false"

echo ""
echo "========================================="
echo "📖 저장된 구절 목록"
echo "========================================="

docker compose exec postgres psql -U postgres -d bible_transcription -c "
SELECT
    reference as \"구절\",
    LEFT(niv_text, 60) || '...' as \"영어 원문 (미리보기)\",
    CASE
        WHEN analysis_completed THEN '✅ 완료'
        ELSE '⏳ 대기'
    END as \"분석 상태\"
FROM verses
ORDER BY id"

echo ""
echo "========================================="
echo "💡 상세 정보 확인 명령"
echo "========================================="
echo "• 전체 뷰 조회:"
echo "  docker compose exec postgres psql -U postgres -d bible_transcription -x -c \"SELECT * FROM verse_analysis_complete WHERE reference = 'Philippians 3:1'\""
echo ""
echo "• JSON 형태로 보기:"
echo "  docker compose exec postgres psql -U postgres -d bible_transcription -t -c \"SELECT jsonb_pretty(row_to_json(t)::jsonb) FROM verse_analysis_complete t WHERE reference = 'Philippians 3:1'\""