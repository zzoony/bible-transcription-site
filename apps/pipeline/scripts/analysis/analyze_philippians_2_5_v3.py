#!/usr/bin/env python3
"""
빌립보서 2:5 분석 및 데이터베이스 저장 (v3)
COPY 구문을 사용하여 안전한 데이터 삽입
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
    sql1 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 1, '권면적 명령문', 'In your relationships with one another, have the same mindset', '너희 안에 이 마음을 품으라', '현재 명령법으로 지속적인 태도 변화를 요구하는 구문');
    """

    sql2 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 2, '비교 구문', 'as Christ Jesus', '그리스도 예수의 마음과 같이', 'as 비교 접속사로 예수 그리스도를 모범으로 제시하는 기준점 역할');
    """

    return execute_sql(sql1) and execute_sql(sql2)

def insert_vocabulary(verse_id):
    """주요 단어 분석 삽입"""
    words = [
        ("relationships", "/rɪˈleɪʃənʃɪps/", "릴레이션쉽스", "명사", "관계, 연관성", "신자들 간의 상호작용과 교제를 의미"),
        ("mindset", "/ˈmaɪndset/", "마인드셋", "명사", "사고방식, 마음가짐", "그리스도의 겸손한 태도와 희생적 사랑의 정신"),
        ("Christ", "/kraɪst/", "크라이스트", "고유명사", "기름부음받은 자, 메시아", "예수의 메시아적 정체성을 나타내는 칭호"),
        ("Jesus", "/ˈdʒiːzəs/", "지저스", "고유명사", "구원자라는 뜻의 예수의 이름", "역사적 인물이자 구원자로서의 예수")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        if not execute_sql(sql):
            return False
    return True

def insert_contextual_explanation(verse_id):
    """문맥 설명 삽입"""
    explanation = "바울은 빌립보 교회의 갈등과 분열 문제를 해결하기 위해 그리스도의 겸손을 모범으로 제시합니다."

    sql = f"""
    INSERT INTO contextual_explanations (verse_id, integrated_explanation)
    VALUES ({verse_id}, '{explanation}');
    """
    return execute_sql(sql)

def insert_korean_translation(verse_id):
    """한국어 번역 삽입"""
    translation = "너희 안에 이 마음을 품으라. 그것은 곧 그리스도 예수의 마음이니라."

    sql = f"""
    INSERT INTO korean_translations (verse_id, natural_translation)
    VALUES ({verse_id}, '{translation}');
    """
    return execute_sql(sql)

def insert_special_explanations(verse_id):
    """특별 설명 삽입"""
    explanations = [
        "헬라어 프로네오는 감정과 의지를 포함한 전인격적 사고를 의미합니다.",
        "그리스도 예수라는 호칭 순서는 메시아적 기능과 역사적 실존을 모두 강조합니다.",
        "이 명령은 개인적 영성을 넘어 공동체 윤리의 기초가 됩니다."
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
    print("=== 빌립보서 2:5 분석 처리 (v3) ===")

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