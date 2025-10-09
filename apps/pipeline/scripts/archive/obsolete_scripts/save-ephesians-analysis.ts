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

interface VerseAnalysis {
  verseId: number
  reference: string
  sentence_structures: Array<{
    sequence_order: number
    semantic_classification: string
    original_text: string
    korean_translation: string
    grammatical_explanation?: string
  }>
  vocabulary: Array<{
    word: string
    ipa_pronunciation?: string
    korean_pronunciation?: string
    part_of_speech?: string
    definition_korean: string
    usage_note?: string
  }>
  contextual_explanation: {
    integrated_explanation: string
    cross_references?: string[]
  }
  korean_translation: {
    natural_translation: string
    translation_notes?: string
  }
  special_explanation?: {
    explanation_type?: string
    content: string
    examples?: any[]
  }
}

async function insertVerseAnalysis(analysis: VerseAnalysis): Promise<boolean> {
  try {
    let allSuccess = true
    const { verseId, reference } = analysis

    console.log(`\n처리 중: ${reference}`)

    // Insert sentence structures
    if (analysis.sentence_structures && analysis.sentence_structures.length > 0) {
      const structures = analysis.sentence_structures.map(s => ({
        verse_id: verseId,
        sequence_order: s.sequence_order,
        semantic_classification: s.semantic_classification,
        original_text: s.original_text,
        korean_translation: s.korean_translation,
        grammatical_explanation: s.grammatical_explanation
      }))

      const { error } = await supabase
        .from('sentence_structures')
        .insert(structures)

      if (error) {
        console.error(`  ❌ 문장구조 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ ${structures.length}개 문장구조 추가`)
      }
    }

    // Insert vocabulary
    if (analysis.vocabulary && analysis.vocabulary.length > 0) {
      const vocab = analysis.vocabulary.map(v => ({
        verse_id: verseId,
        word: v.word,
        ipa_pronunciation: v.ipa_pronunciation,
        korean_pronunciation: v.korean_pronunciation,
        part_of_speech: v.part_of_speech,
        definition_korean: v.definition_korean,
        usage_note: v.usage_note
      }))

      const { error } = await supabase
        .from('vocabulary')
        .insert(vocab)

      if (error) {
        console.error(`  ❌ 어휘 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ ${vocab.length}개 어휘 추가`)
      }
    }

    // Insert contextual explanation
    if (analysis.contextual_explanation) {
      const { error } = await supabase
        .from('contextual_explanations')
        .insert({
          verse_id: verseId,
          integrated_explanation: analysis.contextual_explanation.integrated_explanation,
          cross_references: analysis.contextual_explanation.cross_references || []
        })

      if (error) {
        console.error(`  ❌ 문맥설명 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 문맥설명 추가`)
      }
    }

    // Insert Korean translation
    if (analysis.korean_translation) {
      const { error } = await supabase
        .from('korean_translations')
        .insert({
          verse_id: verseId,
          natural_translation: analysis.korean_translation.natural_translation,
          translation_notes: analysis.korean_translation.translation_notes
        })

      if (error) {
        console.error(`  ❌ 번역 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 한국어 번역 추가`)
      }
    }

    // Insert special explanation (if exists)
    if (analysis.special_explanation && analysis.special_explanation.content) {
      const { error } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          explanation_type: analysis.special_explanation.explanation_type,
          content: analysis.special_explanation.content,
          examples: analysis.special_explanation.examples || []
        })

      if (error) {
        console.error(`  ❌ 특별설명 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 특별설명 추가`)
      }
    }

    return allSuccess
  } catch (error: any) {
    console.error(`  ❌ 데이터 삽입 오류:`, error.message)
    return false
  }
}

async function main() {
  // Read analysis data from file
  const analysisFile = process.argv[2]
  if (!analysisFile) {
    console.error('Usage: npx tsx save-ephesians-analysis.ts <analysis_file.json>')
    process.exit(1)
  }

  const analysisData: VerseAnalysis[] = JSON.parse(fs.readFileSync(analysisFile, 'utf-8'))

  console.log(`📖 총 ${analysisData.length}개 구절 분석 데이터 로드`)
  console.log('🚀 데이터베이스 저장 시작\n')

  const startTime = Date.now()
  let successCount = 0
  let failedCount = 0
  const failedVerses: string[] = []

  for (let i = 0; i < analysisData.length; i++) {
    const analysis = analysisData[i]

    try {
      const success = await insertVerseAnalysis(analysis)

      if (success) {
        successCount++
      } else {
        failedCount++
        failedVerses.push(analysis.reference)
      }
    } catch (error: any) {
      failedCount++
      failedVerses.push(analysis.reference)
      console.error(`❌ ${analysis.reference} 예외 발생: ${error.message}`)
    }

    // Progress report every 10 verses
    if ((i + 1) % 10 === 0) {
      const progress = Math.round(((i + 1) / analysisData.length) * 100)
      console.log(`\n[진행 상황] ${i + 1}/${analysisData.length} (${progress}%)`)
    }
  }

  const duration = Math.round((Date.now() - startTime) / 1000)

  console.log('\n' + '='.repeat(80))
  console.log('📊 최종 통계')
  console.log('='.repeat(80))
  console.log(`  총 구절: ${analysisData.length}`)
  console.log(`  성공: ${successCount}`)
  console.log(`  실패: ${failedCount}`)
  console.log(`  소요 시간: ${duration}초`)

  if (failedVerses.length > 0) {
    console.log(`\n❌ 실패한 구절들:`)
    failedVerses.forEach(ref => console.log(`  - ${ref}`))
  }

  if (successCount === analysisData.length) {
    console.log(`\n✅ ✅ ✅  모든 구절 저장 완료! ✅ ✅ ✅`)
  }
}

main().catch(console.error)
