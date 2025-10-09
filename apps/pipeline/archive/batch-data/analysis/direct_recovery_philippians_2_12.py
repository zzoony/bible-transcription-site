#!/usr/bin/env python3
"""
Direct recovery script for Philippians 2:12
직접 구절 복구 스크립트 - 테스트용
"""

import subprocess
import sys
import os
import time

# Change to agents directory
agents_dir = "/Users/peter/Dev/bible-transcription-site/agents"
os.chdir(agents_dir)

# Philippians 2:12 details
reference = "Philippians 2:12"
niv_text = "Therefore, my dear friends, as you have always obeyed—not only in my presence, but now much more in my absence—continue to work out your salvation with fear and trembling,"

print(f"🔧 직접 복구 시작: {reference}")
print(f"📝 NIV 텍스트: {niv_text}")

try:
    # Run the single verse analyzer directly
    result = subprocess.run([
        "node", "single_verse_analyzer.js",
        reference, niv_text
    ], capture_output=True, text=True, timeout=60)

    if result.returncode == 0:
        print("✅ 분석 성공!")
        print("📤 출력:", result.stdout[:200], "..." if len(result.stdout) > 200 else "")
    else:
        print("❌ 분석 실패!")
        print("🚫 오류:", result.stderr)

    # Check if verse was actually saved to database
    time.sleep(2)

    # Verify in database
    db_check = subprocess.run([
        "docker", "compose", "exec", "postgres", "psql",
        "-U", "postgres", "-d", "bible_transcription",
        "-c", f"SELECT reference FROM verses WHERE reference = '{reference}';"
    ], capture_output=True, text=True, cwd="/Users/peter/Dev/bible-transcription-site")

    if reference in db_check.stdout:
        print("✅ DB 저장 확인됨!")
    else:
        print("❌ DB 저장 실패!")
        print("DB 출력:", db_check.stdout)
        print("DB 오류:", db_check.stderr)

except subprocess.TimeoutExpired:
    print("⏰ 타임아웃 발생!")
except Exception as e:
    print(f"💥 예외 발생: {e}")

print("🏁 직접 복구 테스트 완료")