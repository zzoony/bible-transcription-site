#!/bin/bash

# 데이터베이스 요약 정보를 보여주는 스크립트

echo "======================================"
echo "📊 성경 구절 분석 DB 현황"
echo "======================================"
echo ""

# 1. 통계
echo "📈 전체 통계:"
docker compose exec postgres psql -U postgres -d bible_transcription -t -c "
SELECT
    '• 총 구절: ' || COUNT(*) || '개' as status
FROM verses
UNION ALL
SELECT
    '• 분석 완료: ' || COUNT(*) || '개'
FROM verses WHERE analysis_completed = true
UNION ALL
SELECT
    '• 문장 구조: ' || COUNT(*) || '개'
FROM sentence_structures
UNION ALL
SELECT
    '• 어휘 항목: ' || COUNT(*) || '개'
FROM vocabulary"

echo ""
echo "======================================"
echo "📖 저장된 구절:"
docker compose exec postgres psql -U postgres -d bible_transcription -c "
SELECT
    reference as \"구절\",
    LEFT(niv_text, 80) || '...' as \"영어 원문\"
FROM verses
ORDER BY id"

echo ""
echo "======================================"
echo "📝 문장 구조 분석:"
docker compose exec postgres psql -U postgres -d bible_transcription -c "
SELECT
    sequence_order as \"순서\",
    LEFT(original_text, 50) as \"영어 문장\",
    clause_type as \"유형\"
FROM sentence_structures
WHERE verse_id = 1
ORDER BY sequence_order"

echo ""
echo "======================================"
echo "📚 주요 어휘:"
docker compose exec postgres psql -U postgres -d bible_transcription -c "
SELECT
    word as \"단어\",
    pronunciation_simple as \"발음\",
    definition_korean as \"한국어 뜻\"
FROM vocabulary
WHERE verse_id = 1
LIMIT 6"

echo ""
echo "======================================"
echo "💡 상세 조회 명령:"
echo ""
echo "• JSON 형태로 전체 데이터 보기:"
echo "  docker compose exec postgres psql -U postgres -d bible_transcription -t -c \"SELECT jsonb_pretty(row_to_json(t)::jsonb) FROM verse_analysis_complete t WHERE reference = 'Philippians 3:1'\""
echo ""
echo "• 인터랙티브 뷰어 실행:"
echo "  ./database/db_viewer.sh"
echo ""