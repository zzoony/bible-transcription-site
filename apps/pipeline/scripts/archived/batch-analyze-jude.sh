#!/bin/bash

# Jude 1:7-25 배치 분석 및 저장 스크립트
# 각 구절을 순차적으로 생성하고 저장

BASE_DIR="/Users/peter/Dev/bible-transcription-site/apps/pipeline"
ANALYSIS_DIR="$BASE_DIR/analysis"
SAVE_SCRIPT="$BASE_DIR/scripts/save-analysis-to-db.ts"

echo "Jude 1:7-25 배치 분석 시작..."
echo "진행 상황: 6/25 완료, 19개 구절 남음"

# 진행 상황을 추적하기 위한 카운터
completed=6
total=25

echo ""
echo "남은 구절: Jude 1:7-25"
echo "각 구절을 개별적으로 분석하고 저장합니다..."
echo ""

