#!/usr/bin/env python3
"""
빌립보서 2:6 분석 및 데이터베이스 저장
NIV: "Who, being in very nature God, did not consider equality with God something to be used to his own advantage;"
"""

import subprocess

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
    VALUES (1, 4, 6, 'Philippians 2:6', 'Who, being in very nature God, did not consider equality with God something to be used to his own advantage;', false)
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
        "SELECT id FROM verses WHERE reference = 'Philippians 2:6'"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        return int(result.stdout.strip())
    return None

def insert_sentence_structure(verse_id):
    """문장 구조 분석 삽입"""
    sql1 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 1, '관계절 (신성 묘사)', 'Who, being in very nature God', '본래 하나님의 본체이신 이로서', 'Who는 관계대명사로 예수를 지칭하며, being은 현재분사로 지속적 상태를 나타냄');
    """

    sql2 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 2, '부정 구문 (겸손의 선택)', 'did not consider equality with God something to be used to his own advantage', '하나님과 동등됨을 취할 것으로 여기지 아니하시고', '과거형 did not으로 확정적 선택을 강조하며, harpagmos는 강탈이나 이용의 개념');
    """

    return execute_sql(sql1) and execute_sql(sql2)

def insert_vocabulary(verse_id):
    """주요 단어 분석 삽입"""
    words = [
        ("nature", "/ˈneɪtʃər/", "네이처", "명사", "본성, 본질", "헬라어 morphe는 외형이 아닌 본질적 형태를 의미"),
        ("God", "/ɡɒd/", "갓", "고유명사", "하나님", "정관사 없는 theos로 신성의 본질을 나타냄"),
        ("consider", "/kənˈsɪdər/", "컨시더", "동사", "생각하다, 여기다", "hegemoomai는 지배하거나 통치하는 것으로 간주하는 의미"),
        ("equality", "/ɪˈkwɒləti/", "이퀄러티", "명사", "동등함, 평등", "isa는 같음, 동일함을 나타내는 형용사의 명사형"),
        ("advantage", "/ədˈvɑːntɪdʒ/", "어드밴티지", "명사", "이익, 유리함", "harpagmos는 강탈하여 얻는 것, 움켜쥐는 것을 의미")
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
    explanation = "이 구절은 기독교 교리사에서 가장 중요한 성육신 신학의 핵심을 담고 있습니다. 바울은 예수가 본래 하나님과 동등한 신적 본질을 가지고 계셨지만, 그 신성을 자신의 이익을 위해 사용하지 않으셨음을 강조합니다."

    sql = f"""
    INSERT INTO contextual_explanations (verse_id, integrated_explanation)
    VALUES ({verse_id}, '{explanation}');
    """
    return execute_sql(sql)

def insert_korean_translation(verse_id):
    """한국어 번역 삽입"""
    translation = "그는 본래 하나님의 본체이시나 하나님과 동등됨을 취할 것으로 여기지 아니하시고"

    sql = f"""
    INSERT INTO korean_translations (verse_id, natural_translation)
    VALUES ({verse_id}, '{translation}');
    """
    return execute_sql(sql)

def insert_special_explanations(verse_id):
    """특별 설명 삽입"""
    explanations = [
        "morphe theou는 단순한 외모가 아니라 하나님의 본질적 형태를 의미하여 예수의 완전한 신성을 증명합니다.",
        "harpagmos는 강탈의 개념으로, 예수가 신적 특권을 강제로 붙잡지 않으셨음을 나타내는 핵심 신학 용어입니다.",
        "이 구절은 기독론의 두 본성 (divine and human nature) 교리의 성경적 근거가 되는 중요한 본문입니다."
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
    print("=== 빌립보서 2:6 분석 처리 ===")

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

    print("\n=== 빌립보서 2:6 분석 완료 ===")

if __name__ == "__main__":
    main()