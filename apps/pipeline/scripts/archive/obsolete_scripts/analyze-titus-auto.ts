#!/usr/bin/env tsx
/**
 * Titus 자동 분석 스크립트 (무인 모드)
 * Jude 성공 패턴을 기반으로 전체 46구절 자동 분석
 */

import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

const logFile = '/tmp/titus_analysis.log'

function log(message: string) {
  const timestamp = new Date().toISOString()
  const logMessage = `[${timestamp}] ${message}\n`
  console.log(message)
  fs.appendFileSync(logFile, logMessage)
}

async function getAllTitusVerses() {
  log('📖 Titus 전체 구절 조회 중...')

  const allVerses: Array<{reference: string, niv_text: string}> = []

  // 수동으로 각 구절 조회 (정렬 문제 회피)
  for (let chapter = 1; chapter <= 3; chapter++) {
    const maxVerses = chapter === 1 ? 16 : chapter === 2 ? 15 : 15
    for (let verse = 1; verse <= maxVerses; verse++) {
      const ref = `Titus ${chapter}:${verse}`
      const { data } = await supabase
        .from('verses')
        .select('reference, niv_text, analysis_completed')
        .eq('reference', ref)
        .single()

      if (data && !data.analysis_completed) {
        allVerses.push({ reference: data.reference, niv_text: data.niv_text || '' })
      }
    }
  }

  log(`✅ ${allVerses.length}개 미완료 구절 발견`)
  return allVerses
}

// 간단한 AI 기반 분석 (실제로는 Claude API가 필요하지만, 템플릿 기반으로 진행)
function analyzeVerse(reference: string, nivText: string): AnalysisData {
  // 기본 템플릿 분석 (실제 분석은 너무 복잡하므로 사용자가 돌아올 때까지 대기)
  log(`⚠️  ${reference} - API 키 없이는 완전한 분석 불가능`)
  log(`💡 Titus는 사용자 복귀 시 Claude Code로 직접 분석하는 것을 권장합니다`)

  throw new Error('ANTHROPIC_API_KEY가 필요합니다. 사용자 복귀 후 직접 분석 방식을 사용하세요.')
}

async function main() {
  log('=== Titus 자동 분석 시작 ===')
  log('⚠️  주의: API 키 없이는 템플릿 기반 분석만 가능합니다')
  log('💡 권장: 사용자 복귀 후 Jude 방식(5구절씩 직접 분석)으로 진행')

  const verses = await getAllTitusVerses()

  if (verses.length === 0) {
    log('✅ Titus 이미 모두 완료됨')
    return
  }

  log(`\n📊 총 ${verses.length}개 구절 분석 필요`)
  log('❌ 현재는 API 키가 없어 자동 분석 불가능')
  log('\n=== 다음 단계 ===')
  log('1. 사용자 복귀 시 Jude처럼 5구절씩 직접 분석')
  log('2. 또는 ANTHROPIC_API_KEY 설정 후 재실행')
  log('\n처음 5구절:')
  verses.slice(0, 5).forEach(v => {
    log(`  ${v.reference}: ${v.niv_text.substring(0, 60)}...`)
  })
}

main().catch(err => {
  log(`❌ 오류: ${err.message}`)
  process.exit(1)
})
