import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'

const supabaseUrl = 'https://kmbndafjfxzbyokzqgno.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

interface Verse {
  id: number
  reference: string
  niv_text: string
}

async function fetchRemainingVerses(): Promise<Verse[]> {
  console.log('🔍 Hebrews 미분석 구절 조회 중...\n')

  // Fetch all Hebrews verses
  const { data: verses, error: versesError } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Hebrews%')
    .order('id')

  if (versesError) {
    console.error('❌ verses 조회 오류:', versesError)
    return []
  }

  if (!verses || verses.length === 0) {
    console.error('❌ Hebrews 구절을 찾을 수 없습니다')
    return []
  }

  console.log(`📖 총 ${verses.length}개 Hebrews 구절 발견`)

  // Check which verses are already analyzed
  const verseIds = verses.map(v => v.id)
  const { data: analyzed, error: analyzedError } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  if (analyzedError) {
    console.error('❌ sentence_structures 조회 오류:', analyzedError)
    return []
  }

  const analyzedSet = new Set(analyzed?.map(a => a.verse_id) || [])
  const remaining = verses.filter(v => !analyzedSet.has(v.id))

  console.log(`✅ 이미 분석됨: ${analyzedSet.size}개`)
  console.log(`⏳ 분석 필요: ${remaining.length}개\n`)

  return remaining
}

async function exportVersesForAnalysis(verses: Verse[], batchSize: number = 50) {
  const outputDir = '/Users/peter/Dev/bible-transcription-site/apps/pipeline/hebrews_batches'

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Split into batches
  const batches = []
  for (let i = 0; i < verses.length; i += batchSize) {
    batches.push(verses.slice(i, i + batchSize))
  }

  console.log(`📦 총 ${batches.length}개 배치로 분할 (배치당 최대 ${batchSize}개 구절)\n`)

  // Export each batch
  batches.forEach((batch, index) => {
    const batchNum = index + 1
    const filename = `${outputDir}/batch_${batchNum.toString().padStart(2, '0')}.json`

    const batchData = {
      batch_number: batchNum,
      total_batches: batches.length,
      verses_count: batch.length,
      verses: batch.map(v => ({
        id: v.id,
        reference: v.reference,
        niv_text: v.niv_text
      }))
    }

    fs.writeFileSync(filename, JSON.stringify(batchData, null, 2))
    console.log(`✅ Batch ${batchNum}/${batches.length} 저장: ${filename} (${batch.length}개 구절)`)
  })

  // Create summary file
  const summary = {
    total_verses: verses.length,
    total_batches: batches.length,
    batch_size: batchSize,
    exported_at: new Date().toISOString(),
    batches: batches.map((batch, index) => ({
      batch_number: index + 1,
      first_verse: batch[0].reference,
      last_verse: batch[batch.length - 1].reference,
      verses_count: batch.length
    }))
  }

  const summaryFile = `${outputDir}/SUMMARY.json`
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2))
  console.log(`\n📊 요약 파일 저장: ${summaryFile}`)

  // Create a simple markdown checklist
  const checklistLines = [
    '# Hebrews 분석 진행 체크리스트',
    '',
    `총 ${verses.length}개 구절을 ${batches.length}개 배치로 분할`,
    '',
    '## 배치별 진행 상황',
    ''
  ]

  batches.forEach((batch, index) => {
    const batchNum = index + 1
    checklistLines.push(`- [ ] Batch ${batchNum}/${batches.length}: ${batch[0].reference} ~ ${batch[batch.length - 1].reference} (${batch.length}개)`)
  })

  const checklistFile = `${outputDir}/CHECKLIST.md`
  fs.writeFileSync(checklistFile, checklistLines.join('\n'))
  console.log(`📝 체크리스트 저장: ${checklistFile}`)

  return outputDir
}

async function main() {
  console.log('🚀 Hebrews 남은 구절 분석 준비\n')
  console.log('=' .repeat(80))
  console.log()

  const remaining = await fetchRemainingVerses()

  if (remaining.length === 0) {
    console.log('✅ 모든 구절이 이미 분석되었습니다!')
    return
  }

  // Export to batches
  const outputDir = await exportVersesForAnalysis(remaining, 50)

  console.log('\n' + '=' .repeat(80))
  console.log('✅ 준비 완료!')
  console.log('=' .repeat(80))
  console.log(`\n📂 출력 디렉토리: ${outputDir}`)
  console.log('\n다음 단계:')
  console.log('1. hebrews_batches/ 디렉토리의 각 배치 파일을 확인')
  console.log('2. Claude Code를 사용하여 각 배치를 순차적으로 분석')
  console.log('3. CHECKLIST.md 파일로 진행 상황 추적')
  console.log()
}

main().catch(console.error)
