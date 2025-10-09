#!/bin/bash

echo "======================================================"
echo "히브리서 전체 분석 데이터 저장 시작"
echo "======================================================"
echo ""

echo "[1/5] 히브리서 2-4장 저장 중..."
npx tsx scripts/save-hebrews-ch2-4.ts
if [ $? -ne 0 ]; then
  echo "❌ 2-4장 저장 실패"
  exit 1
fi

echo ""
echo "[2/5] 히브리서 5-7장 저장 중..."
npx tsx scripts/save-hebrews-ch5-7.ts
if [ $? -ne 0 ]; then
  echo "❌ 5-7장 저장 실패"
  exit 1
fi

echo ""
echo "[3/5] 히브리서 8장 저장 중..."
npx tsx scripts/save-hebrews-8.ts
if [ $? -ne 0 ]; then
  echo "❌ 8장 저장 실패"
  exit 1
fi

echo ""
echo "[4/5] 히브리서 9-10장 저장 중..."
npx tsx scripts/save-hebrews-ch9-10.ts
if [ $? -ne 0 ]; then
  echo "❌ 9-10장 저장 실패"
  exit 1
fi

echo ""
echo "[5/5] 히브리서 11-13장 저장 중..."
npx tsx scripts/save-hebrews-ch11-13.ts
if [ $? -ne 0 ]; then
  echo "❌ 11-13장 저장 실패"
  exit 1
fi

echo ""
echo "======================================================"
echo "✅ 히브리서 전체 저장 완료!"
echo "======================================================"
echo ""

echo "저장 상태 확인 중..."
npx tsx scripts/check-hebrews-analysis.ts
