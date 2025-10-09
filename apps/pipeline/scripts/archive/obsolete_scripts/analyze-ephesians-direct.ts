import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const supabaseUrl = 'https://kmbndafjfxzbyokzqgno.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

interface VerseAnalysis {
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

async function insertVerseAnalysis(verseId: number, reference: string, analysis: VerseAnalysis): Promise<boolean> {
  try {
    let allSuccess = true

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
  console.log('🚀 Ephesians 전체 분석 시작 (Claude Code 세션 직접 분석)\n')

  // Fetch all Ephesians verses
  const { data: verses, error: fetchError } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Ephesians%')
    .order('id')

  if (fetchError) {
    console.error('❌ 데이터베이스 조회 오류:', fetchError.message)
    process.exit(1)
  }

  if (!verses || verses.length === 0) {
    console.error('❌ Ephesians 구절을 찾을 수 없습니다')
    process.exit(1)
  }

  console.log(`📖 총 ${verses.length}개 구절 발견`)

  // Check which verses are already analyzed
  const verseIds = verses.map(v => v.id)
  const { data: analyzed } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const analyzedSet = new Set(analyzed?.map(a => a.verse_id) || [])
  const toAnalyze = verses.filter(v => !analyzedSet.has(v.id))

  console.log(`✅ 이미 분석됨: ${analyzedSet.size}개`)
  console.log(`⏳ 분석 필요: ${toAnalyze.length}개`)

  if (toAnalyze.length === 0) {
    console.log('\n✅ 모든 구절이 이미 분석되었습니다!')
    return
  }

  // 분석할 구절들을 JSON 파일로 출력
  const outputData = {
    total: toAnalyze.length,
    verses: toAnalyze.map(v => ({
      id: v.id,
      reference: v.reference,
      niv_text: v.niv_text
    }))
  }

  fs.writeFileSync(
    '/Users/peter/Dev/bible-transcription-site/apps/pipeline/ephesians_to_analyze.json',
    JSON.stringify(outputData, null, 2)
  )

  console.log('\n📝 분석할 구절 목록을 ephesians_to_analyze.json에 저장했습니다.')
  console.log('이제 Claude Code 세션에서 각 구절을 직접 분석하겠습니다.\n')
}

main().catch(console.error)
