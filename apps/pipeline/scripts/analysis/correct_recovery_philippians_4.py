#!/usr/bin/env python3
"""
올바른 방법으로 빌립보서 4장 누락 구절 복구
"""

import subprocess
import sys

# 빌립보서 4장 데이터
book_id = 1  # Philippians
chapter_id = 6  # Chapter 4

# 누락된 구절들 (4:8, 4:9 제외한 나머지 21개)
verses_data = [
    (1, "Therefore, my brothers and sisters, you whom I love and long for, my joy and crown, stand firm in the Lord in this way, dear friends!"),
    (2, "I plead with Euodia and I plead with Syntyche to be of the same mind in the Lord."),
    (3, "Yes, and I ask you, my true companion, help these women since they have contended at my side in the cause of the gospel, along with Clement and the rest of my co-workers, whose names are in the book of life."),
    (4, "Rejoice in the Lord always. I will say it again: Rejoice!"),
    (5, "Let your gentleness be evident to all. The Lord is near."),
    (6, "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."),
    (7, "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."),
    (10, "I rejoiced greatly in the Lord that at last you renewed your concern for me. Indeed, you were concerned, but you had no opportunity to show it."),
    (11, "I am not saying this because I am in need, for I have learned to be content whatever the circumstances."),
    (12, "I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want."),
    (13, "I can do all this through him who gives me strength."),
    (14, "Yet it was good of you to share in my troubles."),
    (15, "Moreover, as you Philippians know, in the early days of your acquaintance with the gospel, when I set out from Macedonia, not one church shared with me in the matter of giving and receiving, except you only;"),
    (16, "for even when I was in Thessalonica, you sent me aid more than once when I was in need."),
    (17, "Not that I desire your gifts; what I desire is that more be credited to your account."),
    (18, "I have received full payment and have more than enough. I am amply supplied, now that I have received from Epaphroditus the gifts you sent. They are a fragrant offering, an acceptable sacrifice, pleasing to God."),
    (19, "And my God will meet all your needs according to the riches of his glory in Christ Jesus."),
    (20, "To our God and Father be glory for ever and ever. Amen."),
    (21, "Greet all God's people in Christ Jesus. The brothers and sisters who are with me send greetings."),
    (22, "All the saints greet you, especially those of Caesar's household."),
    (23, "The grace of the Lord Jesus Christ be with your spirit. Amen.")
]

print(f"🔧 빌립보서 4장 누락 구절 복구 시작")
print(f"📊 대상: {len(verses_data)}개 구절")

success_count = 0
failed_count = 0

for verse_number, niv_text in verses_data:
    reference = f"Philippians 4:{verse_number}"

    # Escape single quotes in text
    escaped_text = niv_text.replace("'", "''")

    sql_command = f"""
    INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text, analysis_completed, created_at, updated_at)
    VALUES ({book_id}, {chapter_id}, {verse_number}, '{reference}', '{escaped_text}', false, NOW(), NOW())
    ON CONFLICT (reference) DO UPDATE SET
        niv_text = EXCLUDED.niv_text,
        updated_at = NOW();
    """

    try:
        result = subprocess.run([
            "docker", "compose", "exec", "postgres", "psql",
            "-U", "postgres", "-d", "bible_transcription",
            "-c", sql_command
        ], capture_output=True, text=True)

        if result.returncode == 0:
            print(f"✅ {reference} 삽입 성공")
            success_count += 1
        else:
            print(f"❌ {reference} 삽입 실패: {result.stderr}")
            failed_count += 1

    except Exception as e:
        print(f"💥 {reference} 예외 발생: {e}")
        failed_count += 1

print(f"\n📊 처리 결과:")
print(f"✅ 성공: {success_count}개")
print(f"❌ 실패: {failed_count}개")

# 최종 검증
print(f"\n🔍 최종 검증 중...")
verify_result = subprocess.run([
    "docker", "compose", "exec", "postgres", "psql",
    "-U", "postgres", "-d", "bible_transcription",
    "-c", "SELECT COUNT(*) as total_verses FROM verses WHERE reference LIKE 'Philippians 4:%';"
], capture_output=True, text=True)

print("📈 빌립보서 4장 현재 상태:")
print(verify_result.stdout)

print("🏁 복구 작업 완료")