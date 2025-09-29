#!/usr/bin/env python3
"""
빌립보서 2:7-11 일괄 분석 및 데이터베이스 저장
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

def get_verse_id(reference):
    """구절 ID 조회"""
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"SELECT id FROM verses WHERE reference = '{reference}'"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        return int(result.stdout.strip())
    return None

def analyze_verse_2_7():
    """빌립보서 2:7 분석"""
    print("=== 빌립보서 2:7 분석 시작 ===")

    # 구절 삽입
    sql = """
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 4, 7, 'Philippians 2:7', 'rather, he made himself nothing by taking the very nature of a servant, being made in human likeness.', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    execute_sql(sql)

    verse_id = get_verse_id('Philippians 2:7')
    print(f"✓ 구절 ID: {verse_id}")

    # 기존 데이터 정리
    execute_sql(f"DELETE FROM sentence_structures WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM vocabulary WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM contextual_explanations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM korean_translations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM special_explanations WHERE verse_id = {verse_id};")

    # 문장 구조 분석
    sql1 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 1, '대조 접속구문', 'rather', '오히려', '앞 절과 대조되는 선택을 나타내는 부사');
    """

    sql2 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 2, '자기 비움의 행동', 'he made himself nothing', '자기를 비어 무엇이 되었고', 'kenosis 개념의 핵심으로 자발적 자기 포기를 나타냄');
    """

    sql3 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 3, '수단을 나타내는 분사구문', 'by taking the very nature of a servant', '종의 형체를 가지사', '방법을 나타내는 분사구문으로 성육신의 구체적 방식 설명');
    """

    sql4 = f"""
    INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
    VALUES ({verse_id}, 4, '보완적 분사구문', 'being made in human likeness', '사람들과 같이 되셨고', '앞 구문을 보완하는 분사구문으로 인간성 취득을 강조');
    """

    execute_sql(sql1)
    execute_sql(sql2)
    execute_sql(sql3)
    execute_sql(sql4)

    # 주요 단어들
    words = [
        ("rather", "/ˈrɑːðər/", "라더", "부사", "오히려, 차라리", "강한 대조를 나타내는 부사로 앞 절과의 반전을 강조"),
        ("nothing", "/ˈnʌθɪŋ/", "나띵", "대명사", "아무것도 아님", "kenosis의 핵심 개념으로 완전한 자기 포기를 의미"),
        ("servant", "/ˈsɜːrvənt/", "서번트", "명사", "종, 하인", "doulos로 완전히 주인에게 속한 노예의 신분을 나타냄"),
        ("likeness", "/ˈlaɪknəs/", "라이크니스", "명사", "유사함, 닮음", "homoioma로 외형적 유사성을 나타내되 본질과는 구별됨"),
        ("human", "/ˈhjuːmən/", "휴먼", "형용사", "인간의", "anthropos로 완전한 인간성을 의미")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        execute_sql(sql)

    # 문맥 설명
    explanation = "이 구절은 그리스도의 성육신의 핵심을 담고 있습니다. 헬라어 케노시스는 자기를 비운다는 의미로, 예수가 신적 특권을 포기하고 종의 신분을 취하셨음을 나타냅니다. 이는 고대 근동 지역의 왕들이 신적 지위를 주장하던 것과 정반대의 모습입니다."
    execute_sql(f"INSERT INTO contextual_explanations (verse_id, integrated_explanation) VALUES ({verse_id}, '{explanation}');")

    # 한국어 번역
    translation = "오히려 자기를 비어 종의 형체를 가져 사람들과 같이 되셨고"
    execute_sql(f"INSERT INTO korean_translations (verse_id, natural_translation) VALUES ({verse_id}, '{translation}');")

    # 특별 설명
    explanations = [
        "케노시스 신학의 핵심 구절로, 예수의 자기 비움이 신성의 포기가 아닌 신적 특권의 사용 중단을 의미합니다.",
        "종의 형체는 단순한 겸손이 아니라 완전한 복종과 섬김의 자세를 나타내는 신학적 개념입니다.",
        "사람과 같이 되심은 외형적 유사성을 강조하되, 죄는 없으신 완전한 인성을 의미합니다."
    ]

    for explanation in explanations:
        execute_sql(f"INSERT INTO special_explanations (verse_id, content) VALUES ({verse_id}, '{explanation}');")

    # 분석 완료 표시
    execute_sql(f"UPDATE verses SET analysis_completed = true, updated_at = now() WHERE id = {verse_id};")
    print("✓ 빌립보서 2:7 분석 완료")

def analyze_verse_2_8():
    """빌립보서 2:8 분석"""
    print("=== 빌립보서 2:8 분석 시작 ===")

    # 구절 삽입
    sql = """
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 4, 8, 'Philippians 2:8', 'And being found in appearance as a man, he humbled himself by becoming obedient to death—even death on a cross!', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    execute_sql(sql)

    verse_id = get_verse_id('Philippians 2:8')
    print(f"✓ 구절 ID: {verse_id}")

    # 기존 데이터 정리
    execute_sql(f"DELETE FROM sentence_structures WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM vocabulary WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM contextual_explanations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM korean_translations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM special_explanations WHERE verse_id = {verse_id};")

    # 문장 구조 분석
    structures = [
        (1, '연결 분사구문', 'And being found in appearance as a man', '사람의 모양으로 나타나사', '앞 절과 연결되는 분사구문으로 외형적 인간성을 강조'),
        (2, '겸손의 행동', 'he humbled himself', '자기를 낮추시고', '자발적 겸손의 행위를 나타내는 재귀동사'),
        (3, '순종의 구체적 내용', 'by becoming obedient to death', '죽기까지 복종하시되', '극한의 순종을 나타내는 목적 구문'),
        (4, '강조 구문', 'even death on a cross', '곧 십자가에 죽으심이라', '가장 수치스러운 죽음을 강조하는 절정 표현')
    ]

    for order, classification, text, korean, explanation in structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
        VALUES ({verse_id}, {order}, '{classification}', '{text}', '{korean}', '{explanation}');
        """
        execute_sql(sql)

    # 주요 단어들
    words = [
        ("appearance", "/əˈpɪərəns/", "어피어런스", "명사", "외모, 모양", "schema로 외형적 형태를 의미하되 본질과는 구별됨"),
        ("humbled", "/ˈhʌmbəld/", "험블드", "동사", "낮추다, 겸손하게 하다", "tapeinoo의 과거형으로 자발적 낮아짐을 강조"),
        ("obedient", "/əˈbiːdiənt/", "어비디언트", "형용사", "순종하는", "hypekoos로 완전한 복종과 청종을 의미"),
        ("death", "/deθ/", "데스", "명사", "죽음", "thanatos로 육체적 죽음을 넘어 영적 분리까지 포함"),
        ("cross", "/krɔːs/", "크로스", "명사", "십자가", "stauros로 당시 가장 수치스럽고 저주받은 처형 방식")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        execute_sql(sql)

    # 문맥 설명
    explanation = "이 구절은 그리스도의 겸손이 절정에 이르는 모습을 보여줍니다. 십자가 처형은 로마 시대 가장 수치스러운 죽음으로, 로마 시민에게는 적용되지 않았습니다. 바울은 이런 극한의 수치를 통해 그리스도의 완전한 순종과 인간을 위한 희생을 강조합니다."
    execute_sql(f"INSERT INTO contextual_explanations (verse_id, integrated_explanation) VALUES ({verse_id}, '{explanation}');")

    # 한국어 번역
    translation = "사람의 모양으로 나타나사 자기를 낮추시고 죽기까지 복종하시되 곧 십자가에 죽으심이라"
    execute_sql(f"INSERT INTO korean_translations (verse_id, natural_translation) VALUES ({verse_id}, '{translation}');")

    # 특별 설명
    explanations = [
        "십자가 처형은 로마법상 가장 수치스러운 형벌로, 그리스도의 극한 겸손을 나타내는 절정 표현입니다.",
        "죽기까지 복종함은 단순한 순종을 넘어 생명까지 내어주는 완전한 헌신을 의미합니다.",
        "사람의 모양으로 나타나심은 참 인간이시되 죄는 없으신 그리스도의 완전한 인성을 강조합니다."
    ]

    for explanation in explanations:
        execute_sql(f"INSERT INTO special_explanations (verse_id, content) VALUES ({verse_id}, '{explanation}');")

    # 분석 완료 표시
    execute_sql(f"UPDATE verses SET analysis_completed = true, updated_at = now() WHERE id = {verse_id};")
    print("✓ 빌립보서 2:8 분석 완료")

def analyze_verse_2_9():
    """빌립보서 2:9 분석"""
    print("=== 빌립보서 2:9 분석 시작 ===")

    # 구절 삽입
    sql = """
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 4, 9, 'Philippians 2:9', 'Therefore God exalted him to the highest place and gave him the name that is above every name,', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    execute_sql(sql)

    verse_id = get_verse_id('Philippians 2:9')
    print(f"✓ 구절 ID: {verse_id}")

    # 기존 데이터 정리
    execute_sql(f"DELETE FROM sentence_structures WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM vocabulary WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM contextual_explanations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM korean_translations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM special_explanations WHERE verse_id = {verse_id};")

    # 문장 구조 분석
    structures = [
        (1, '결과 접속사', 'Therefore', '그러므로', '앞의 겸손에 대한 결과를 나타내는 인과관계 접속사'),
        (2, '하나님의 응답', 'God exalted him to the highest place', '하나님이 그를 지극히 높여', '신적 능동태로 하나님의 주권적 행위를 강조'),
        (3, '수여 동사구문', 'and gave him the name', '그에게 이름을 주사', '하나님이 주시는 권위와 지위를 나타내는 수여 구문'),
        (4, '최상급 표현', 'that is above every name', '모든 이름 위에 뛰어난 이름이니', '절대적 우월성을 나타내는 관계절')
    ]

    for order, classification, text, korean, explanation in structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
        VALUES ({verse_id}, {order}, '{classification}', '{text}', '{korean}', '{explanation}');
        """
        execute_sql(sql)

    # 주요 단어들
    words = [
        ("Therefore", "/ˈðeərfɔːr/", "데어포어", "부사", "그러므로", "결론을 나타내는 접속부사로 인과관계를 강조"),
        ("exalted", "/ɪɡˈzɔːltɪd/", "이그절티드", "동사", "높이다, 승격시키다", "hyperupsoo로 최고 수준까지 올리는 것을 의미"),
        ("highest", "/ˈhaɪɪst/", "하이이스트", "형용사", "가장 높은", "절대적 우월성과 권위를 나타내는 최상급"),
        ("place", "/pleɪs/", "플레이스", "명사", "자리, 지위", "하나님 우편의 권능의 보좌를 의미하는 신학적 개념"),
        ("name", "/neɪm/", "네임", "명사", "이름", "단순한 호칭이 아닌 권위와 본질을 나타내는 개념")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        execute_sql(sql)

    # 문맥 설명
    explanation = "이 구절은 그리스도의 겸손에 대한 하나님의 응답을 보여줍니다. 십자가의 수치에서 최고의 영광으로의 전환은 신약 신학의 핵심 패턴입니다. 모든 이름 위에 뛰어난 이름은 야훼의 이름과 동등한 신적 권위를 의미합니다."
    execute_sql(f"INSERT INTO contextual_explanations (verse_id, integrated_explanation) VALUES ({verse_id}, '{explanation}');")

    # 한국어 번역
    translation = "이러므로 하나님이 그를 지극히 높여 모든 이름 위에 뛰어난 이름을 주사"
    execute_sql(f"INSERT INTO korean_translations (verse_id, natural_translation) VALUES ({verse_id}, '{translation}');")

    # 특별 설명
    explanations = [
        "지극히 높이심은 단순한 복권이 아니라 십자가 죽음을 통해 얻은 새로운 차원의 영광을 의미합니다.",
        "모든 이름 위에 뛰어난 이름은 야훼의 이름과 동등한 신적 권위를 나타내는 기독론적 선언입니다.",
        "겸손과 높임의 패턴은 그리스도를 따르는 자들에게도 적용되는 영적 원리를 제시합니다."
    ]

    for explanation in explanations:
        execute_sql(f"INSERT INTO special_explanations (verse_id, content) VALUES ({verse_id}, '{explanation}');")

    # 분석 완료 표시
    execute_sql(f"UPDATE verses SET analysis_completed = true, updated_at = now() WHERE id = {verse_id};")
    print("✓ 빌립보서 2:9 분석 완료")

def analyze_verse_2_10():
    """빌립보서 2:10 분석"""
    print("=== 빌립보서 2:10 분석 시작 ===")

    # 구절 삽입
    sql = """
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 4, 10, 'Philippians 2:10', 'that at the name of Jesus every knee should bow, in heaven and on earth and under the earth,', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    execute_sql(sql)

    verse_id = get_verse_id('Philippians 2:10')
    print(f"✓ 구절 ID: {verse_id}")

    # 기존 데이터 정리
    execute_sql(f"DELETE FROM sentence_structures WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM vocabulary WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM contextual_explanations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM korean_translations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM special_explanations WHERE verse_id = {verse_id};")

    # 문장 구조 분석
    structures = [
        (1, '목적절', 'that at the name of Jesus', '예수의 이름에', '앞 절의 목적을 나타내는 접속사절'),
        (2, '보편적 경배', 'every knee should bow', '모든 무릎이 꿇고', '의무를 나타내는 조동사로 우주적 경배를 강조'),
        (3, '우주적 범위', 'in heaven and on earth and under the earth', '하늘에 있는 자들과 땅에 있는 자들과 땅 아래 있는 자들', '삼중 구조로 전 우주의 범위를 포괄')
    ]

    for order, classification, text, korean, explanation in structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
        VALUES ({verse_id}, {order}, '{classification}', '{text}', '{korean}', '{explanation}');
        """
        execute_sql(sql)

    # 주요 단어들
    words = [
        ("knee", "/niː/", "니", "명사", "무릎", "경배와 복종의 상징적 표현"),
        ("bow", "/baʊ/", "바우", "동사", "절하다, 굽히다", "kampto로 경배와 복종을 나타내는 행위"),
        ("heaven", "/ˈhevən/", "헤븐", "명사", "하늘", "천사들과 영적 존재들의 영역"),
        ("earth", "/ɜːrθ/", "어스", "명사", "땅", "인간들이 거주하는 물질세계"),
        ("under", "/ˈʌndər/", "언더", "전치사", "아래", "지하세계나 죽은 자들의 영역을 나타냄")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        execute_sql(sql)

    # 문맥 설명
    explanation = "이 구절은 이사야 45:23의 야훼에 대한 예언을 예수님께 적용합니다. 삼중 구조는 전 우주가 그리스도의 주권을 인정할 것임을 선언합니다. 무릎 꿇음은 고대 근동에서 왕에게 하는 최고의 경배 표현이었습니다."
    execute_sql(f"INSERT INTO contextual_explanations (verse_id, integrated_explanation) VALUES ({verse_id}, '{explanation}');")

    # 한국어 번역
    translation = "하늘에 있는 자들과 땅에 있는 자들과 땅 아래 있는 자들로 모든 무릎을 예수의 이름에 꿇게 하시고"
    execute_sql(f"INSERT INTO korean_translations (verse_id, natural_translation) VALUES ({verse_id}, '{translation}');")

    # 특별 설명
    explanations = [
        "이사야 45:23의 야훼 찬양을 예수님께 적용함으로써 그리스도의 완전한 신성을 증명합니다.",
        "삼중 구조는 천상, 지상, 지하의 모든 존재가 포함되는 우주적 경배를 나타냅니다.",
        "예수의 이름에 무릎 꿇음은 그 이름의 신적 권능과 구원의 능력을 인정하는 것입니다."
    ]

    for explanation in explanations:
        execute_sql(f"INSERT INTO special_explanations (verse_id, content) VALUES ({verse_id}, '{explanation}');")

    # 분석 완료 표시
    execute_sql(f"UPDATE verses SET analysis_completed = true, updated_at = now() WHERE id = {verse_id};")
    print("✓ 빌립보서 2:10 분석 완료")

def analyze_verse_2_11():
    """빌립보서 2:11 분석"""
    print("=== 빌립보서 2:11 분석 시작 ===")

    # 구절 삽입
    sql = """
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed)
    VALUES (1, 4, 11, 'Philippians 2:11', 'and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father.', false)
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = now();
    """
    execute_sql(sql)

    verse_id = get_verse_id('Philippians 2:11')
    print(f"✓ 구절 ID: {verse_id}")

    # 기존 데이터 정리
    execute_sql(f"DELETE FROM sentence_structures WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM vocabulary WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM contextual_explanations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM korean_translations WHERE verse_id = {verse_id};")
    execute_sql(f"DELETE FROM special_explanations WHERE verse_id = {verse_id};")

    # 문장 구조 분석
    structures = [
        (1, '병렬 구문', 'and every tongue acknowledge', '모든 입으로 시인하여', '앞 절과 병렬을 이루는 우주적 고백'),
        (2, '신앙고백 내용', 'that Jesus Christ is Lord', '예수 그리스도를 주라 하게', '기독교의 가장 핵심적인 신앙고백문'),
        (3, '목적절', 'to the glory of God the Father', '하나님 아버지께 영광을 돌리게', '모든 경배의 궁극적 목적을 나타내는 부정사구')
    ]

    for order, classification, text, korean, explanation in structures:
        sql = f"""
        INSERT INTO sentence_structures (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
        VALUES ({verse_id}, {order}, '{classification}', '{text}', '{korean}', '{explanation}');
        """
        execute_sql(sql)

    # 주요 단어들
    words = [
        ("tongue", "/tʌŋ/", "텅", "명사", "혀, 언어", "glossa로 언어와 고백을 의미하는 환유법"),
        ("acknowledge", "/əkˈnɒlɪdʒ/", "어크날리지", "동사", "인정하다, 고백하다", "exomologeo로 공개적 신앙고백을 의미"),
        ("Lord", "/lɔːrd/", "로드", "명사", "주님, 주인", "kyrios로 신적 권위와 절대적 주권을 나타냄"),
        ("glory", "/ˈɡlɔːri/", "글로리", "명사", "영광", "doxa로 하나님의 본질적 영광과 찬양을 의미"),
        ("Father", "/ˈfɑːðər/", "파더", "명사", "아버지", "삼위일체의 제1위격으로서의 하나님")
    ]

    for word, ipa, korean_pron, pos, definition, context in words:
        sql = f"""
        INSERT INTO vocabulary (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean, usage_note)
        VALUES ({verse_id}, '{word}', '{ipa}', '{korean_pron}', '{pos}', '{definition}', '{context}');
        """
        execute_sql(sql)

    # 문맥 설명
    explanation = "이 구절은 그리스도 찬송의 절정으로 우주적 신앙고백을 다룹니다. 예수 그리스도를 주라 고백하는 것은 야훼의 주권을 인정하는 것과 동등합니다. 모든 영광이 아버지께 돌아가는 것은 삼위일체의 조화와 그리스도 사역의 궁극적 목적을 보여줍니다."
    execute_sql(f"INSERT INTO contextual_explanations (verse_id, integrated_explanation) VALUES ({verse_id}, '{explanation}');")

    # 한국어 번역
    translation = "모든 입으로 예수 그리스도를 주라 시인하여 하나님 아버지께 영광을 돌리게 하셨느니라"
    execute_sql(f"INSERT INTO korean_translations (verse_id, natural_translation) VALUES ({verse_id}, '{translation}');")

    # 특별 설명
    explanations = [
        "예수 그리스도를 주라 고백하는 것은 초대교회의 가장 기본적인 신앙고백이었습니다.",
        "kyrios 호칭은 구약의 야훼와 동등한 신적 권위를 인정하는 최고의 경배 표현입니다.",
        "아버지께 영광을 돌림은 그리스도의 사역이 삼위일체의 조화 속에서 이루어짐을 보여줍니다."
    ]

    for explanation in explanations:
        execute_sql(f"INSERT INTO special_explanations (verse_id, content) VALUES ({verse_id}, '{explanation}');")

    # 분석 완료 표시
    execute_sql(f"UPDATE verses SET analysis_completed = true, updated_at = now() WHERE id = {verse_id};")
    print("✓ 빌립보서 2:11 분석 완료")

def main():
    print("=== 빌립보서 2:7-11 일괄 분석 시작 ===")

    analyze_verse_2_7()
    analyze_verse_2_8()
    analyze_verse_2_9()
    analyze_verse_2_10()
    analyze_verse_2_11()

    print("\n=== 빌립보서 2:7-11 일괄 분석 완료 ===")

if __name__ == "__main__":
    main()