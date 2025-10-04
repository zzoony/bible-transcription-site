#!/usr/bin/env python3
"""
빌립보서 2:5 분석 및 데이터베이스 저장
Schema v2 형식에 맞춰 처리
"""

import subprocess
import json

def execute_sql(sql):
    """SQL 실행"""
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-c", sql
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"SQL Error: {result.stderr}")
        return False
    return True

def insert_verse():
    """구절 데이터 삽입"""
    sql = """
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 4, 5, 'Philippians 2:5', 'In your relationships with one another, have the same mindset as Christ Jesus:', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    return execute_sql(sql)

def get_verse_id():
    """구절 ID 조회"""
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        "SELECT id FROM verses WHERE reference = 'Philippians 2:5'"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        return int(result.stdout.strip())
    return None

def insert_sentence_structure(verse_id):
    """문장 구조 분석 삽입"""
    structures = [
        {
            "semantic_classification": "권면적 명령문",
            "text": "In your relationships with one another, have the same mindset",
            "korean": "너희 안에 이 마음을 품으라",
            "grammatical_explanation": "현재 명령법으로 지속적인 태도 변화를 요구하는 구문. have는 능동태 명령형으로 의지적 선택을 강조"
        },
        {
            "semantic_classification": "비교 구문",
            "text": "as Christ Jesus",
            "korean": "그리스도 예수의 마음과 같이",
            "grammatical_explanation": "as 비교 접속사로 예수 그리스도를 모범으로 제시하는 기준점 역할"
        }
    ]

    for structure in structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, semantic_classification, text, korean, grammatical_explanation)
        VALUES ({verse_id}, '{structure["semantic_classification"]}', E'{structure["text"]}', '{structure["korean"]}', E'{structure["grammatical_explanation"]}');
        """
        if not execute_sql(sql):
            return False
    return True

def insert_vocabulary(verse_id):
    """주요 단어 분석 삽입"""
    words = [
        {
            "word": "relationships",
            "ipa_pronunciation": "/rɪˈleɪʃənʃɪps/",
            "korean_pronunciation": "릴레이션쉽스",
            "part_of_speech": "명사",
            "definition": "관계, 연관성",
            "context_explanation": "신자들 간의 상호작용과 교제를 의미"
        },
        {
            "word": "mindset",
            "ipa_pronunciation": "/ˈmaɪndset/",
            "korean_pronunciation": "마인드셋",
            "part_of_speech": "명사",
            "definition": "사고방식, 마음가짐",
            "context_explanation": "그리스도의 겸손한 태도와 희생적 사랑의 정신"
        },
        {
            "word": "Christ",
            "ipa_pronunciation": "/kraɪst/",
            "korean_pronunciation": "크라이스트",
            "part_of_speech": "고유명사",
            "definition": "기름부음받은 자, 메시아",
            "context_explanation": "예수의 메시아적 정체성을 나타내는 칭호"
        },
        {
            "word": "Jesus",
            "ipa_pronunciation": "/ˈdʒiːzəs/",
            "korean_pronunciation": "지저스",
            "part_of_speech": "고유명사",
            "definition": "구원자라는 뜻의 예수의 이름",
            "context_explanation": "역사적 인물이자 구원자로서의 예수"
        }
    ]

    for word in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition, context_explanation)
        VALUES ({verse_id}, '{word["word"]}', '{word["ipa_pronunciation"]}', '{word["korean_pronunciation"]}', '{word["part_of_speech"]}', '{word["definition"]}', '{word["context_explanation"]}');
        """
        if not execute_sql(sql):
            return False
    return True

def insert_contextual_explanation(verse_id):
    """문맥 설명 삽입"""
    explanation = """바울은 빌립보 교회의 갈등과 분열 문제를 해결하기 위해 그리스도의 겸손을 모범으로 제시합니다. 이 구절은 2:6-11절의 유명한 '그리스도 찬송'(Christological Hymn)의 서론 역할을 합니다. 헬라어 원문의 'φρονέω'(프로네오)는 단순한 생각이 아니라 전인격적인 태도와 가치관의 변화를 의미합니다. 1세기 로마 사회에서 지위와 권력을 추구하던 문화와 대조적으로, 바울은 그리스도의 자기비움과 섬김의 자세를 교회 공동체의 행동 원리로 제시합니다."""

    sql = f"""
    INSERT INTO contextual_explanations (verse_id, explanation)
    VALUES ({verse_id}, '{explanation}');
    """
    return execute_sql(sql)

def insert_korean_translation(verse_id):
    """한국어 번역 삽입"""
    translation = "너희 안에 이 마음을 품으라. 그것은 곧 그리스도 예수의 마음이니라."

    sql = f"""
    INSERT INTO korean_translations (verse_id, translation)
    VALUES ({verse_id}, '{translation}');
    """
    return execute_sql(sql)

def insert_special_explanations(verse_id):
    """특별 설명 삽입"""
    explanations = [
        "헬라어 'φρονέω'(프로네오)는 감정과 의지를 포함한 전인격적 사고를 의미하며, 단순한 지적 동의를 넘어선 실존적 결단을 요구합니다.",
        "'그리스도 예수'라는 호칭 순서는 메시아적 기능(그리스도)과 역사적 실존(예수)을 모두 강조하는 신학적 의도를 보여줍니다.",
        "이 명령은 개인적 영성의 차원을 넘어 공동체 윤리의 기초가 되며, 다음 구절들에서 전개될 성육신 신학의 실천적 적용점입니다."
    ]

    for explanation in explanations:
        sql = f"""
        INSERT INTO special_explanations (verse_id, content)
        VALUES ({verse_id}, '{explanation}');
        """
        if not execute_sql(sql):
            return False
    return True

def mark_analysis_complete(verse_id):
    """분석 완료 표시"""
    sql = f"""
    UPDATE verses SET analysis_completed = true, updated_at = now()
    WHERE id = {verse_id};
    """
    return execute_sql(sql)

def main():
    print("=== 빌립보서 2:5 분석 처리 ===")

    # 1. 구절 삽입
    if not insert_verse():
        print("구절 삽입 실패")
        return
    print("✓ 구절 데이터 삽입 완료")

    # 2. 구절 ID 조회
    verse_id = get_verse_id()
    if not verse_id:
        print("구절 ID 조회 실패")
        return
    print(f"✓ 구절 ID: {verse_id}")

    # 3. 분석 데이터 삽입
    if not insert_sentence_structure(verse_id):
        print("문장 구조 분석 삽입 실패")
        return
    print("✓ 문장 구조 분석 완료")

    if not insert_vocabulary(verse_id):
        print("주요 단어 분석 삽입 실패")
        return
    print("✓ 주요 단어 분석 완료")

    if not insert_contextual_explanation(verse_id):
        print("문맥 설명 삽입 실패")
        return
    print("✓ 문맥 설명 완료")

    if not insert_korean_translation(verse_id):
        print("한국어 번역 삽입 실패")
        return
    print("✓ 한국어 번역 완료")

    if not insert_special_explanations(verse_id):
        print("특별 설명 삽입 실패")
        return
    print("✓ 특별 설명 완료")

    # 4. 분석 완료 표시
    if not mark_analysis_complete(verse_id):
        print("분석 완료 표시 실패")
        return
    print("✓ 분석 완료 표시")

    print("\n=== 빌립보서 2:5 분석 완료 ===")

if __name__ == "__main__":
    main()