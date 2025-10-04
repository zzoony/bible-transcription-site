#!/bin/bash

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}===============================================${NC}"
echo -e "${CYAN}📖 성경 구절 분석 데이터베이스 뷰어${NC}"
echo -e "${CYAN}===============================================${NC}"

# 메뉴 표시
show_menu() {
    echo ""
    echo -e "${YELLOW}선택하세요:${NC}"
    echo "1) 전체 구절 목록 보기"
    echo "2) 특정 구절 상세 보기"
    echo "3) 문장 구조 분석 보기"
    echo "4) 어휘 목록 보기"
    echo "5) 문맥 설명 보기"
    echo "6) JSON 형태로 전체 데이터 보기"
    echo "7) 통계 현황 보기"
    echo "q) 종료"
    echo ""
    read -p "선택 > " choice
}

# 전체 구절 목록
show_verses() {
    echo -e "\n${GREEN}📚 저장된 구절 목록:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -c "
    SELECT
        id,
        reference as \"구절\",
        LEFT(niv_text, 60) || '...' as \"영어 원문\",
        CASE
            WHEN analysis_completed THEN '✅'
            ELSE '⏳'
        END as \"상태\"
    FROM verses
    ORDER BY id"
}

# 특정 구절 상세 보기
show_verse_detail() {
    read -p "구절 입력 (예: Philippians 3:1) > " ref
    echo -e "\n${GREEN}📖 $ref 상세 정보:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -x -c "
    SELECT
        reference,
        niv_text,
        korean_literal,
        korean_dynamic,
        complexity_score,
        key_themes
    FROM verse_analysis_complete
    WHERE reference = '$ref'"
}

# 문장 구조 분석
show_sentence_structures() {
    echo -e "\n${GREEN}📝 문장 구조 분석:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -c "
    SELECT
        v.reference as \"구절\",
        ss.sequence_order as \"순서\",
        ss.original_text as \"영어 문장\",
        ss.korean_translation as \"한국어 번역\",
        ss.clause_type as \"문장 유형\"
    FROM sentence_structures ss
    JOIN verses v ON ss.verse_id = v.id
    ORDER BY v.id, ss.sequence_order"
}

# 어휘 목록
show_vocabulary() {
    echo -e "\n${GREEN}📚 어휘 목록:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -c "
    SELECT
        voc.word as \"단어\",
        voc.pronunciation_simple as \"발음\",
        voc.part_of_speech as \"품사\",
        voc.definition_korean as \"한국어 뜻\",
        v.reference as \"구절\"
    FROM vocabulary voc
    JOIN verses v ON voc.verse_id = v.id
    ORDER BY voc.word"
}

# 문맥 설명
show_contextual_notes() {
    echo -e "\n${GREEN}📖 문맥 설명:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -c "
    SELECT
        v.reference as \"구절\",
        cn.note_type as \"유형\",
        LEFT(cn.content, 100) || '...' as \"설명\"
    FROM contextual_notes cn
    JOIN verses v ON cn.verse_id = v.id
    ORDER BY v.id, cn.note_type"
}

# JSON 형태로 전체 데이터
show_json() {
    read -p "구절 입력 (예: Philippians 3:1) > " ref
    echo -e "\n${GREEN}📄 JSON 데이터:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -t -c "
    SELECT jsonb_pretty(row_to_json(t)::jsonb)
    FROM verse_analysis_complete t
    WHERE reference = '$ref'"
}

# 통계 현황
show_statistics() {
    echo -e "\n${GREEN}📊 데이터베이스 통계:${NC}"
    docker compose exec postgres psql -U postgres -d bible_transcription -c "
    SELECT
        '총 구절 수' as \"항목\",
        COUNT(*) as \"개수\"
    FROM verses
    UNION ALL
    SELECT
        '분석 완료',
        COUNT(*)
    FROM verses WHERE analysis_completed = true
    UNION ALL
    SELECT
        '문장 구조',
        COUNT(*)
    FROM sentence_structures
    UNION ALL
    SELECT
        '어휘 항목',
        COUNT(*)
    FROM vocabulary
    UNION ALL
    SELECT
        '문맥 설명',
        COUNT(*)
    FROM contextual_notes
    UNION ALL
    SELECT
        '특별 설명',
        COUNT(*)
    FROM special_explanations"
}

# 메인 루프
while true; do
    show_menu
    case $choice in
        1) show_verses ;;
        2) show_verse_detail ;;
        3) show_sentence_structures ;;
        4) show_vocabulary ;;
        5) show_contextual_notes ;;
        6) show_json ;;
        7) show_statistics ;;
        q|Q) echo -e "${CYAN}종료합니다.${NC}"; exit 0 ;;
        *) echo -e "${RED}잘못된 선택입니다.${NC}" ;;
    esac
done