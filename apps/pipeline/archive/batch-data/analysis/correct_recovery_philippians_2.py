#!/usr/bin/env python3
"""
올바른 방법으로 빌립보서 2장 누락 구절 복구
"""

import subprocess
import sys

# 빌립보서 2장 데이터
book_id = 1  # Philippians
chapter_id = 4  # Chapter 2

# 누락된 구절들 (2:12-2:30)
verses_data = [
    (12, "Therefore, my dear friends, as you have always obeyed—not only in my presence, but now much more in my absence—continue to work out your salvation with fear and trembling,"),
    (13, "for it is God who works in you to will and to act in order to fulfill his good purpose."),
    (14, "Do everything without grumbling or arguing,"),
    (15, "so that you may become blameless and pure, 'children of God without fault in a warped and crooked generation.' Then you will shine among them like stars in the sky"),
    (16, "as you hold firmly to the word of life. And then I will be able to boast on the day of Christ that I did not run or labor in vain."),
    (17, "But even if I am being poured out like a drink offering on the sacrifice and service coming from your faith, I am glad and rejoice with all of you."),
    (18, "So you too should be glad and rejoice with me."),
    (19, "I hope in the Lord Jesus to send Timothy to you soon, that I also may be cheered when I receive news about you."),
    (20, "I have no one else like him, who will show genuine concern for your welfare."),
    (21, "For everyone looks out for their own interests, not those of Jesus Christ."),
    (22, "But you know that Timothy has proved himself, because as a son with his father he has served with me in the work of the gospel."),
    (23, "I hope, therefore, to send him as soon as I see how things go with me."),
    (24, "And I am confident in the Lord that I myself will come soon."),
    (25, "But I think it is necessary to send back to you Epaphroditus, my brother, co-worker and fellow soldier, who is also your messenger, whom you sent to take care of my needs."),
    (26, "For he longs for all of you and is distressed because you heard he was ill."),
    (27, "Indeed he was ill, and almost died. But God had mercy on him, and not on him only but also on me, to spare me sorrow upon sorrow."),
    (28, "Therefore I am all the more eager to send him, so that when you see him again you may be glad and I may have less anxiety."),
    (29, "So then, welcome him in the Lord with great joy, and honor people like him,"),
    (30, "because he almost died for the work of Christ. He risked his life to make up for the help you yourselves could not give me.")
]

print(f"🔧 빌립보서 2장 누락 구절 복구 시작")
print(f"📊 대상: {len(verses_data)}개 구절 (2:12-2:30)")

success_count = 0
failed_count = 0

for verse_number, niv_text in verses_data:
    reference = f"Philippians 2:{verse_number}"

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
    "-c", "SELECT COUNT(*) as total_verses FROM verses WHERE reference LIKE 'Philippians 2:%';"
], capture_output=True, text=True)

print("📈 빌립보서 2장 현재 상태:")
print(verify_result.stdout)

print("🏁 복구 작업 완료")