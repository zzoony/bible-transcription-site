#!/bin/bash

set -e

# Navigation 기능 통합 테스트 실행 스크립트

echo "================================================"
echo "Navigation 기능 통합 테스트"
echo "================================================"
echo ""

# NavigationControls 컴포넌트 테스트
echo "✓ NavigationControls 컴포넌트 테스트 실행 중..."
if ! npm test -- tests/components/NavigationControls.test.tsx --silent; then
  echo "❌ NavigationControls 컴포넌트 테스트 실패"
  exit 1
fi

# BibleNavigator 컴포넌트 테스트
echo ""
echo "✓ BibleNavigator 컴포넌트 테스트 실행 중..."
if ! npm test -- tests/components/BibleNavigator.test.tsx --silent; then
  echo "❌ BibleNavigator 컴포넌트 테스트 실패"
  exit 1
fi

# 빌드 테스트
echo ""
echo "✓ 프로덕션 빌드 테스트 실행 중..."
npm run build > /dev/null 2>&1

if [ $? -eq 0 ]; then
  echo "✅ 프로덕션 빌드 성공"
else
  echo "❌ 프로덕션 빌드 실패"
  exit 1
fi

echo ""
echo "================================================"
echo "테스트 완료!"
echo "================================================"
echo "상세 보고서: docs/NAVIGATION_TEST_REPORT.md"
