#!/usr/bin/env python3
"""
빌립보서 2:5-11 분석 결과를 표준 형식으로 출력
Schema v2 형식에 맞춰 데이터베이스에서 조회하여 표준 출력 생성
"""

import subprocess

def get_verse_data(reference):
    """데이터베이스에서 구절 데이터 조회"""
    # 구절 기본 정보
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"SELECT niv_text FROM verses WHERE reference = '{reference}'"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    niv_text = result.stdout.strip() if result.returncode == 0 else ""

    # 문장 구조
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"""SELECT ss.semantic_classification, ss.original_text, ss.korean_translation, ss.grammatical_explanation
            FROM sentence_structures ss
            JOIN verses v ON ss.verse_id = v.id
            WHERE v.reference = '{reference}'
            ORDER BY ss.sequence_order"""
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    structures = []
    if result.returncode == 0:
        for line in result.stdout.strip().split('\n'):
            if '|' in line:
                parts = [p.strip() for p in line.split('|')]
                if len(parts) >= 4:
                    structures.append({
                        'semantic_classification': parts[0],
                        'original_text': parts[1],
                        'korean_translation': parts[2],
                        'grammatical_explanation': parts[3]
                    })

    # 주요 단어들
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"""SELECT vo.word, vo.ipa_pronunciation, vo.korean_pronunciation, vo.part_of_speech, vo.definition_korean
            FROM vocabulary vo
            JOIN verses v ON vo.verse_id = v.id
            WHERE v.reference = '{reference}'
            ORDER BY vo.word"""
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    vocabulary = []
    if result.returncode == 0:
        for line in result.stdout.strip().split('\n'):
            if '|' in line:
                parts = [p.strip() for p in line.split('|')]
                if len(parts) >= 5:
                    vocabulary.append({
                        'word': parts[0],
                        'ipa_pronunciation': parts[1] if parts[1] and parts[1] != '-' else '',
                        'korean_pronunciation': parts[2],
                        'part_of_speech': parts[3],
                        'definition_korean': parts[4]
                    })

    # 문맥 설명
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"""SELECT ce.integrated_explanation
            FROM contextual_explanations ce
            JOIN verses v ON ce.verse_id = v.id
            WHERE v.reference = '{reference}'"""
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    contextual_explanation = result.stdout.strip() if result.returncode == 0 else ""

    # 한국어 번역
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"""SELECT kt.natural_translation
            FROM korean_translations kt
            JOIN verses v ON kt.verse_id = v.id
            WHERE v.reference = '{reference}'"""
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    korean_translation = result.stdout.strip() if result.returncode == 0 else ""

    # 특별 설명
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"""SELECT se.content
            FROM special_explanations se
            JOIN verses v ON se.verse_id = v.id
            WHERE v.reference = '{reference}'
            ORDER BY se.id"""
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    special_explanations = []
    if result.returncode == 0:
        for line in result.stdout.strip().split('\n'):
            if line.strip():
                special_explanations.append(line.strip())

    return {
        'reference': reference,
        'niv_text': niv_text,
        'structures': structures,
        'vocabulary': vocabulary,
        'contextual_explanation': contextual_explanation,
        'korean_translation': korean_translation,
        'special_explanations': special_explanations
    }

def format_verse_analysis(data):
    """데이터를 표준 출력 형식으로 변환"""
    output = []

    # 1. 제목 및 원문
    output.append(f"# {data['reference']} (NIV)")
    output.append("")
    output.append("**원문:**")
    output.append(f'"{data["niv_text"]}"')
    output.append("")

    # 2. 문장 구조 분석
    output.append("### 문장 구조 분석:")
    if data['structures']:
        for structure in data['structures']:
            classification = structure['semantic_classification']
            text = structure['original_text']
            korean = structure['korean_translation']
            explanation = structure['grammatical_explanation']

            output.append(f"- **{classification}:** \"{text}\" ({korean})")
            if explanation:
                output.append(f"  - {explanation}")
    output.append("")

    # 3. 주요 단어들 (표 형식)
    output.append("### 주요 단어들:")
    output.append("")
    output.append("| 단어 | IPA 발음 | 한국어 발음 | 품사 | 뜻 |")
    output.append("|------|----------|-------------|------|-----|")

    if data['vocabulary']:
        for vocab in data['vocabulary']:
            word = vocab['word']
            ipa = vocab['ipa_pronunciation'] or '-'
            korean_pron = vocab['korean_pronunciation']
            pos = vocab['part_of_speech']
            definition = vocab['definition_korean']

            output.append(f"| {word} | {ipa} | {korean_pron} | {pos} | {definition} |")
    output.append("")

    # 4. 문맥 설명
    output.append("### 문맥 설명:")
    if data['contextual_explanation']:
        output.append(data['contextual_explanation'])
    output.append("")

    # 5. 한국어 번역
    output.append("### 한국어 번역:")
    if data['korean_translation']:
        output.append(data['korean_translation'])
    output.append("")

    # 6. 특별 설명
    output.append("### 특별 설명:")
    if data['special_explanations']:
        for explanation in data['special_explanations']:
            output.append(f"- {explanation}")

    return "\n".join(output)

def main():
    references = [
        'Philippians 2:5',
        'Philippians 2:6',
        'Philippians 2:7',
        'Philippians 2:8',
        'Philippians 2:9',
        'Philippians 2:10',
        'Philippians 2:11'
    ]

    print("빌립보서 2:5-11 그리스도 찬송 분석 결과")
    print("=" * 50)
    print()

    for reference in references:
        data = get_verse_data(reference)
        if data['niv_text']:
            formatted_output = format_verse_analysis(data)
            print(formatted_output)
            print("\n" + "-" * 50 + "\n")
        else:
            print(f"데이터를 찾을 수 없습니다: {reference}")

if __name__ == "__main__":
    main()