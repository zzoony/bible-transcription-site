#!/usr/bin/env python3
"""
빌립보서 4:8-9절 분석 및 데이터베이스 저장
덕목의 실천에 관한 구절들
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

def insert_verse(verse_num, niv_text):
    """구절 데이터 삽입"""
    sql = f"""
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 6, {verse_num}, 'Philippians 4:{verse_num}', '{niv_text}', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    return execute_sql(sql)

def get_verse_id(verse_num):
    """구절 ID 조회"""
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"SELECT id FROM verses WHERE reference = 'Philippians 4:{verse_num}'"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        return int(result.stdout.strip())
    return None

def analyze_verse_4_8():
    """빌립보서 4:8절 분석"""
    print("\n=== 빌립보서 4:8절 분석 처리 ===")

    # NIV 텍스트
    niv_text = "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things."

    # 1. 구절 삽입
    if not insert_verse(8, niv_text):
        print("구절 삽입 실패")
        return False
    print("✓ 구절 데이터 삽입 완료")

    # 2. 구절 ID 조회
    verse_id = get_verse_id(8)
    if not verse_id:
        print("구절 ID 조회 실패")
        return False
    print(f"✓ 구절 ID: {verse_id}")

    # 3. 문장 구조 분석 삽입
    sentence_structures = [
        (1, "결론적 권면 도입", "Finally, brothers and sisters", "끝으로 형제자매들아", "종결 부사 Finally로 서신의 마지막 권면임을 표시하며, 친밀한 호칭으로 공동체를 부름"),
        (2, "덕목 열거 1 (진리와 고귀함)", "whatever is true, whatever is noble", "무엇에든지 참되며 무엇에든지 경건하며", "whatever 관계대명사로 무제한적 포괄성을 나타내며, true와 noble은 절대적 진리와 도덕적 고귀함을 의미"),
        (3, "덕목 열거 2 (의로움과 순결)", "whatever is right, whatever is pure", "무엇에든지 의로우며 무엇에든지 정결하며", "right는 하나님의 기준에 맞는 의로움, pure는 도덕적 순결과 진실성을 의미"),
        (4, "덕목 열거 3 (아름다움과 칭찬)", "whatever is lovely, whatever is admirable", "무엇에든지 사랑할 만하며 무엇에든지 칭찬할 만하며", "lovely는 매력적이고 아름다운 것, admirable은 존경받을 만한 가치를 의미"),
        (5, "조건절과 총괄", "if anything is excellent or praiseworthy", "무엇에든지 덕이 있거나 기림이 있거든", "조건절 if로 앞의 덕목들을 포괄하며, excellent와 praiseworthy로 모든 선한 가치를 총합"),
        (6, "결론적 명령", "think about such things", "이것들을 생각하라", "현재 명령법으로 지속적인 묵상과 실천을 명령하는 핵심 메시지")
    ]

    for seq, semantic, text, korean, grammar in sentence_structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
        VALUES ({verse_id}, {seq}, '{semantic}', '{text}', '{korean}', '{grammar}');
        """
        if not execute_sql(sql):
            return False
    print("✓ 문장 구조 분석 완료")

    # 4. 주요 단어 분석 삽입
    words = [
        ("Finally", "/ˈfaɪnəli/", "파이널리", "부사", "마지막으로, 결국", "서신의 결론 부분을 시작하는 전환 표현"),
        ("brothers", "/ˈbrʌðərz/", "브라더즈", "명사", "형제들", "그리스도 안에서의 영적 형제 관계를 나타냄"),
        ("sisters", "/ˈsɪstərz/", "시스터즈", "명사", "자매들", "여성 신자들을 포함한 포괄적 호칭"),
        ("whatever", "/wʌtˈevər/", "와트에버", "관계대명사", "무엇이든지", "제한 없는 포괄적 범위를 나타냄"),
        ("true", "/truː/", "트루", "형용사", "참된, 진실한", "절대적 진리와 신실함을 의미"),
        ("noble", "/ˈnoʊbəl/", "노블", "형용사", "고귀한, 존귀한", "도덕적 품격과 영적 존귀함을 의미"),
        ("right", "/raɪt/", "라이트", "형용사", "의로운, 올바른", "하나님의 기준에 맞는 의로움"),
        ("pure", "/pjʊr/", "퓨어", "형용사", "순결한, 정결한", "도덕적 순결과 진실성"),
        ("lovely", "/ˈlʌvli/", "러블리", "형용사", "사랑스러운, 아름다운", "매력적이고 호감을 주는 성질"),
        ("admirable", "/ˈædmərəbəl/", "애드머러블", "형용사", "칭찬할 만한, 존경할 만한", "존중받을 가치가 있는 품성"),
        ("excellent", "/ˈeksələnt/", "엑설런트", "형용사", "탁월한, 우수한", "뛰어난 덕과 가치"),
        ("praiseworthy", "/ˈpreɪzwɜːrði/", "프레이즈워디", "형용사", "찬양할 만한", "칭찬받을 가치가 있는 것"),
        ("think", "/θɪŋk/", "씽크", "동사", "생각하다, 묵상하다", "깊이 있는 성찰과 지속적 묵상")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        if not execute_sql(sql):
            return False
    print("✓ 주요 단어 분석 완료")

    # 5. 문맥 설명 삽입
    explanation = "바울은 빌립보서의 마지막 권면에서 그리스도인이 추구해야 할 8가지 덕목을 제시합니다. 이는 단순한 도덕적 교훈이 아니라 복음에 합당한 삶의 구체적 기준이며, 헬레니즘 문화 속에서도 구별된 그리스도인의 정체성을 나타내는 실천적 지침입니다. 고대 그리스-로마 철학의 덕목론과 대조하여, 바울은 하나님 중심적 가치관을 제시하며 공동체 전체의 영적 성숙을 추구합니다."

    sql = f"""
    INSERT INTO contextual_explanations (verse_id, integrated_explanation, cross_references)
    VALUES ({verse_id}, '{explanation}', ARRAY['로마서 12:2', '에베소서 5:9-10', '골로새서 3:2']);
    """
    if not execute_sql(sql):
        return False
    print("✓ 문맥 설명 완료")

    # 6. 한국어 번역 삽입
    translation = "끝으로 형제자매들아, 무엇에든지 참되며, 무엇에든지 경건하며, 무엇에든지 의로우며, 무엇에든지 정결하며, 무엇에든지 사랑할 만하며, 무엇에든지 칭찬할 만하며, 무엇에든지 덕이 있거나 기림이 있거든 이것들을 생각하라."

    sql = f"""
    INSERT INTO korean_translations (verse_id, natural_translation)
    VALUES ({verse_id}, '{translation}');
    """
    if not execute_sql(sql):
        return False
    print("✓ 한국어 번역 완료")

    # 7. 특별 설명 삽입
    explanations = [
        ("grammar", "헬라어 동사 로기제스떼는 회계용어에서 유래하여 신중한 계산과 숙고를 의미합니다.", "[]"),
        ("interpretation", "8가지 덕목은 헬레니즘 철학의 4주덕과 달리 하나님 중심적 가치체계를 반영합니다.", "[]"),
        ("linguistic_note", "whatever의 반복은 수사법적 강조로 덕목의 포괄성과 절대성을 나타냅니다.", "[]"),
        ("cultural_context", "당시 빌립보는 로마 식민도시로서 이방 문화와 그리스도교 가치관의 대조가 선명했습니다.", "[]")
    ]

    for exp_type, content, examples in explanations:
        sql = f"""
        INSERT INTO special_explanations (verse_id, explanation_type, content, examples)
        VALUES ({verse_id}, '{exp_type}', '{content}', '{examples}');
        """
        if not execute_sql(sql):
            return False
    print("✓ 특별 설명 완료")

    # 8. 분석 완료 표시
    sql = f"""
    UPDATE verses SET analysis_completed = true, updated_at = now()
    WHERE id = {verse_id};
    """
    if not execute_sql(sql):
        return False
    print("✓ 분석 완료 표시")

    return True

def analyze_verse_4_9():
    """빌립보서 4:9절 분석"""
    print("\n=== 빌립보서 4:9절 분석 처리 ===")

    # NIV 텍스트
    niv_text = "Whatever you have learned or received or heard from me, or seen in me—put it into practice. And the God of peace will be with you."

    # 1. 구절 삽입
    if not insert_verse(9, niv_text):
        print("구절 삽입 실패")
        return False
    print("✓ 구절 데이터 삽입 완료")

    # 2. 구절 ID 조회
    verse_id = get_verse_id(9)
    if not verse_id:
        print("구절 ID 조회 실패")
        return False
    print(f"✓ 구절 ID: {verse_id}")

    # 3. 문장 구조 분석 삽입
    sentence_structures = [
        (1, "학습 경험의 열거", "Whatever you have learned or received or heard from me", "너희가 내게 배우고 받고 듣고", "완료 시제 동사들로 과거의 지속적 학습 경험을 나타내며, 지적/경험적/청각적 학습을 포괄"),
        (2, "관찰 경험의 추가", "or seen in me", "내 안에서 본 바를", "시각적 관찰을 통한 실제적 모범 학습을 의미하며, 바울의 삶 자체가 교육 내용임을 강조"),
        (3, "실천 명령", "put it into practice", "이것들을 행하라", "현재 명령법으로 배운 것의 즉각적이고 지속적인 실행을 요구"),
        (4, "약속과 결과", "And the God of peace will be with you", "그리하면 평강의 하나님이 너희와 함께 계시리라", "조건문의 결과절로 실천에 따른 하나님의 임재와 평강을 약속")
    ]

    for seq, semantic, text, korean, grammar in sentence_structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
        VALUES ({verse_id}, {seq}, '{semantic}', '{text}', '{korean}', '{grammar}');
        """
        if not execute_sql(sql):
            return False
    print("✓ 문장 구조 분석 완료")

    # 4. 주요 단어 분석 삽입
    words = [
        ("learned", "/lɜːrnd/", "런드", "동사(과거분사)", "배웠다", "체계적이고 지속적인 학습 과정을 의미"),
        ("received", "/rɪˈsiːvd/", "리시브드", "동사(과거분사)", "받았다", "권위 있는 전수를 통한 수용을 나타냄"),
        ("heard", "/hɜːrd/", "허드", "동사(과거분사)", "들었다", "청각을 통한 직접적 교훈 습득"),
        ("seen", "/siːn/", "신", "동사(과거분사)", "보았다", "시각적 관찰을 통한 실제적 모범 학습"),
        ("practice", "/ˈpræktɪs/", "프랙티스", "명사/동사", "실천, 실행하다", "배운 것을 삶에서 구현하는 행동"),
        ("God", "/ɡɑːd/", "갓", "명사", "하나님", "평강의 근원이신 하나님의 속성을 강조"),
        ("peace", "/piːs/", "피스", "명사", "평강, 평화", "내적 안정과 하나님과의 화목 상태"),
        ("with", "/wɪð/", "위드", "전치사", "함께", "하나님의 지속적 임재와 동행을 나타냄")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        if not execute_sql(sql):
            return False
    print("✓ 주요 단어 분석 완료")

    # 5. 문맥 설명 삽입
    explanation = "바울은 자신의 교육 방법론을 네 가지 차원으로 제시합니다: 지적 교육(learned), 전통 전수(received), 구두 교훈(heard), 모범 학습(seen). 이는 고대 교육학의 총체적 접근이며, 특히 랍비 전통의 제자 양성 방식을 반영합니다. 평강의 하나님이라는 표현은 로마의 팍스 로마나와 대조되는 진정한 평화의 근원을 제시하며, 실천적 순종과 하나님의 임재 사이의 언약적 관계를 나타냅니다."

    sql = f"""
    INSERT INTO contextual_explanations (verse_id, integrated_explanation, cross_references)
    VALUES ({verse_id}, '{explanation}', ARRAY['빌립보서 4:7', '데살로니가전서 5:23', '고린도전서 11:1']);
    """
    if not execute_sql(sql):
        return False
    print("✓ 문맥 설명 완료")

    # 6. 한국어 번역 삽입
    translation = "너희가 내게 배우고 받고 듣고 또 내 안에서 본 바를 이것들을 행하라. 그리하면 평강의 하나님이 너희와 함께 계시리라."

    sql = f"""
    INSERT INTO korean_translations (verse_id, natural_translation)
    VALUES ({verse_id}, '{translation}');
    """
    if not execute_sql(sql):
        return False
    print("✓ 한국어 번역 완료")

    # 7. 특별 설명 삽입
    explanations = [
        ("grammar", "네 개의 과거분사가 병렬구조를 이루며 학습의 완전성을 나타냅니다.", "[]"),
        ("interpretation", "바울은 자신을 모방의 대상으로 제시하지만 궁극적으로는 그리스도를 모방하라고 가르칩니다.", "[]"),
        ("linguistic_note", "평강의 하나님은 속격 구문으로 하나님의 본질적 속성을 강조합니다.", "[]"),
        ("theological_context", "실천과 하나님의 임재 사이의 조건부 약속은 언약신학의 핵심 원리를 반영합니다.", "[]")
    ]

    for exp_type, content, examples in explanations:
        sql = f"""
        INSERT INTO special_explanations (verse_id, explanation_type, content, examples)
        VALUES ({verse_id}, '{exp_type}', '{content}', '{examples}');
        """
        if not execute_sql(sql):
            return False
    print("✓ 특별 설명 완료")

    # 8. 분석 완료 표시
    sql = f"""
    UPDATE verses SET analysis_completed = true, updated_at = now()
    WHERE id = {verse_id};
    """
    if not execute_sql(sql):
        return False
    print("✓ 분석 완료 표시")

    return True

def main():
    print("=== 빌립보서 4:8-9절 분석 처리 ===")

    # 빌립보서 4:8절 분석
    if not analyze_verse_4_8():
        print("4:8절 분석 실패")
        return

    # 빌립보서 4:9절 분석
    if not analyze_verse_4_9():
        print("4:9절 분석 실패")
        return

    print("\n=== 빌립보서 4:8-9절 분석 완료 ===")
    print("덕목의 실천에 관한 바울의 마지막 권면이 성공적으로 분석되어 데이터베이스에 저장되었습니다.")

if __name__ == "__main__":
    main()