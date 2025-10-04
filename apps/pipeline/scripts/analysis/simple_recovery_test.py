#!/usr/bin/env python3
"""
Simple recovery test - 직접 DB에 테스트 구절 삽입
"""

import subprocess
import sys

# Test verse data
reference = "Philippians 2:12"
niv_text = "Therefore, my dear friends, as you have always obeyed—not only in my presence, but now much more in my absence—continue to work out your salvation with fear and trembling,"

print(f"🧪 테스트 구절 직접 삽입: {reference}")

# SQL to insert verse directly
sql_command = f"""
INSERT INTO verses (reference, niv_text, analysis_completed, created_at, updated_at)
VALUES ('{reference}', '{niv_text}', false, NOW(), NOW())
ON CONFLICT (reference) DO UPDATE SET
    niv_text = EXCLUDED.niv_text,
    updated_at = NOW();
"""

try:
    # Execute the SQL
    result = subprocess.run([
        "docker", "compose", "exec", "postgres", "psql",
        "-U", "postgres", "-d", "bible_transcription",
        "-c", sql_command
    ], capture_output=True, text=True)

    if result.returncode == 0:
        print("✅ 구절 삽입 성공!")
        print("📤 출력:", result.stdout)
    else:
        print("❌ 구절 삽입 실패!")
        print("🚫 오류:", result.stderr)

    # Verify insertion
    verify_result = subprocess.run([
        "docker", "compose", "exec", "postgres", "psql",
        "-U", "postgres", "-d", "bible_transcription",
        "-c", f"SELECT reference, analysis_completed FROM verses WHERE reference = '{reference}';"
    ], capture_output=True, text=True)

    print("🔍 검증 결과:")
    print(verify_result.stdout)

except Exception as e:
    print(f"💥 예외 발생: {e}")

print("🏁 테스트 완료")