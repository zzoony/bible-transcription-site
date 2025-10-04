#!/usr/bin/env python3
"""
빌립보서 4:8-9절 분석 결과 출력 생성
프로젝트 규칙에 따른 표준 형식
"""

import subprocess
import json

def execute_query(sql):
    """SQL 쿼리 실행"""
    cmd = [
        "docker", "compose", "exec", "-T", "postgres",
        "psql", "-U", "postgres", "-d", "bible_transcription", "-t", "-c", sql
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        return result.stdout.strip()
    return None

def get_verse_basic_info(verse_ref):
    """구절 기본 정보 조회"""
    sql = f"SELECT niv_text, korean_translation, integrated_explanation FROM verse_analysis_complete WHERE reference = '{verse_ref}'"
    result = execute_query(sql)
    if result:
        lines = result.split('|')
        if len(lines) >= 3:
            return {
                'niv_text': lines[0].strip(),
                'korean_translation': lines[1].strip(),
                'contextual_explanation': lines[2].strip()
            }
    return None

def get_sentence_structures(verse_ref):
    """문장 구조 분석 조회"""
    sql = f"""
    SELECT ss.semantic_classification, ss.original_text, ss.korean_translation, ss.grammatical_explanation
    FROM sentence_structures ss
    JOIN verses v ON ss.verse_id = v.id
    WHERE v.reference = '{verse_ref}'
    ORDER BY ss.sequence_order
    """
    result = execute_query(sql)
    structures = []
    if result:
        for line in result.split('\n'):
            if line.strip():
                parts = line.split('|')
                if len(parts) >= 4:
                    structures.append({
                        'semantic_classification': parts[0].strip(),
                        'text': parts[1].strip(),
                        'korean': parts[2].strip(),
                        'grammatical_explanation': parts[3].strip()
                    })
    return structures

def get_vocabulary(verse_ref):
    """어휘 분석 조회"""
    sql = f"""
    SELECT vocab.word, vocab.ipa_pronunciation, vocab.korean_pronunciation, vocab.part_of_speech, vocab.definition_korean
    FROM vocabulary vocab
    JOIN verses v ON vocab.verse_id = v.id
    WHERE v.reference = '{verse_ref}'
    ORDER BY vocab.word
    """
    result = execute_query(sql)
    vocabulary = []
    if result:
        for line in result.split('\n'):
            if line.strip():
                parts = line.split('|')
                if len(parts) >= 5:
                    vocabulary.append({
                        'word': parts[0].strip(),
                        'ipa_pronunciation': parts[1].strip(),
                        'korean_pronunciation': parts[2].strip(),
                        'part_of_speech': parts[3].strip(),
                        'definition': parts[4].strip()
                    })
    return vocabulary

def get_special_explanations(verse_ref):
    """특별 설명 조회"""
    sql = f"""
    SELECT se.content
    FROM special_explanations se
    JOIN verses v ON se.verse_id = v.id
    WHERE v.reference = '{verse_ref}'
    ORDER BY se.id
    """
    result = execute_query(sql)
    explanations = []
    if result:
        for line in result.split('\n'):
            if line.strip():
                explanations.append({'content': line.strip()})
    return explanations

def format_sentence_structure(structures):
    """문장 구조 분석 형식화"""
    output = []
    for i, struct in enumerate(structures, 1):
        semantic = struct['semantic_classification']
        text = struct['text']
        korean = struct['korean']
        grammar = struct['grammatical_explanation']

        output.append(f"{i}. **{semantic}**: \"{text}\"")
        output.append(f"   - {korean}")
        output.append(f"   - {grammar}")
        output.append("")

    return "\n".join(output)

def format_vocabulary_table(vocabulary):
    """단어 분석 표 형식화"""
    output = ["| 단어 | IPA 발음 | 한국어 발음 | 품사 | 의미 |"]
    output.append("|------|----------|-------------|------|------|")

    for word in vocabulary:
        w = word['word']
        ipa = word['ipa_pronunciation']
        korean_pron = word['korean_pronunciation']
        pos = word['part_of_speech']
        definition = word['definition']

        output.append(f"| {w} | {ipa} | {korean_pron} | {pos} | {definition} |")

    return "\n".join(output)

def format_special_explanations(explanations):
    """특별 설명 형식화"""
    output = []
    for i, exp in enumerate(explanations, 1):
        content = exp['content']
        output.append(f"{i}. {content}")

    return "\n".join(output)

def generate_verse_output(verse_ref):
    """구절 분석 출력 생성"""
    # 기본 정보 조회
    basic_info = get_verse_basic_info(verse_ref)
    if not basic_info:
        return f"❌ {verse_ref} 데이터를 찾을 수 없습니다."

    niv_text = basic_info['niv_text']
    korean_translation = basic_info['korean_translation']
    contextual_explanation = basic_info['contextual_explanation']

    # 문장 구조 분석 조회
    sentence_structures = get_sentence_structures(verse_ref)
    structure_output = format_sentence_structure(sentence_structures)

    # 주요 단어들 조회
    vocabulary = get_vocabulary(verse_ref)
    vocab_table = format_vocabulary_table(vocabulary)

    # 특별 설명 조회
    special_explanations = get_special_explanations(verse_ref)
    special_output = format_special_explanations(special_explanations)

    # 출력 형식 구성
    output = f"""# {verse_ref} (NIV)

**원문:** "{niv_text}"

### 문장 구조 분석:

{structure_output}

### 주요 단어들:

{vocab_table}

### 문맥 설명:

{contextual_explanation}

### 한국어 번역:

{korean_translation}

### 특별 설명:

{special_output}

---
"""

    return output

def main():
    print("빌립보서 4:8-9절 분석 결과 출력 생성")
    print("=" * 50)

    # 빌립보서 4:8절 출력
    output_4_8 = generate_verse_output("Philippians 4:8")
    print(output_4_8)

    # 빌립보서 4:9절 출력
    output_4_9 = generate_verse_output("Philippians 4:9")
    print(output_4_9)

    # 파일로 저장
    with open("PHILIPPIANS_4_8_9_ANALYSIS.md", "w", encoding="utf-8") as f:
        f.write("# 빌립보서 4:8-9절 분석 결과\n\n")
        f.write("**주제**: 덕목의 실천\n\n")
        f.write(output_4_8)
        f.write(output_4_9)

    print("📁 분석 결과가 PHILIPPIANS_4_8_9_ANALYSIS.md 파일로 저장되었습니다.")

if __name__ == "__main__":
    main()