#!/usr/bin/env python3
"""
Generate formatted analysis output from database
새로운 형식에 맞춰 데이터베이스에서 분석 결과를 가져와 표준 형식으로 출력
"""

import json
import subprocess
import sys

def get_verse_data(reference):
    """데이터베이스에서 구절 데이터 조회"""
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c",
        f"SELECT jsonb_pretty(row_to_json(t)::jsonb) FROM verse_analysis_complete t WHERE reference = '{reference}'"
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        return None

    try:
        return json.loads(result.stdout.strip())
    except json.JSONDecodeError as e:
        print(f"JSON parse error: {e}")
        return None

def format_verse_analysis(data):
    """데이터베이스 데이터를 표준 출력 형식으로 변환"""
    if not data:
        return "No data found"

    output = []

    # 1. 제목 및 원문
    output.append(f"# {data['reference']} (NIV)")
    output.append("")
    output.append("**원문:**")
    output.append(f'"{data["niv_text"]}"')
    output.append("")

    # 2. 문장 구조 분석
    output.append("### 문장 구조 분석:")
    if data.get('sentence_structures'):
        for structure in data['sentence_structures']:
            classification = structure.get('semantic_classification', '')
            text = structure.get('text', '')
            korean = structure.get('korean', '')
            explanation = structure.get('grammatical_explanation', '')

            output.append(f"- **{classification}:** \"{text}\" ({korean})")
            if explanation:
                output.append(f"  - {explanation}")
    output.append("")

    # 3. 주요 단어들 (표 형식)
    output.append("### 주요 단어들:")
    output.append("")
    output.append("| 단어 | IPA 발음 | 한국어 발음 | 품사 | 뜻 |")
    output.append("|------|----------|-------------|------|-----|")

    if data.get('vocabulary'):
        for vocab in data['vocabulary']:
            word = vocab.get('word', '')
            ipa = vocab.get('ipa_pronunciation') or '-'
            korean_pron = vocab.get('korean_pronunciation', '')
            pos = vocab.get('part_of_speech', '')
            definition = vocab.get('definition', '')

            output.append(f"| {word} | {ipa} | {korean_pron} | {pos} | {definition} |")
    output.append("")

    # 4. 문맥 설명
    output.append("### 문맥 설명:")
    if data.get('contextual_explanation'):
        output.append(data['contextual_explanation'])
    output.append("")

    # 5. 한국어 번역
    output.append("### 한국어 번역:")
    if data.get('korean_translation'):
        output.append(data['korean_translation'])
    output.append("")

    # 6. 특별 설명
    output.append("### 특별 설명:")
    if data.get('special_explanations'):
        for explanation in data['special_explanations']:
            content = explanation.get('content', '')
            output.append(content)

    return "\n".join(output)

def main():
    reference = sys.argv[1] if len(sys.argv) > 1 else "Philippians 3:1"

    print(f"Retrieving analysis for: {reference}")
    data = get_verse_data(reference)

    if data:
        formatted_output = format_verse_analysis(data)
        print("\n" + "="*50)
        print(formatted_output)
    else:
        print("Failed to retrieve data")

if __name__ == "__main__":
    main()