import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

interface AnalysisData {
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
    explanation_type: string
    content: string
    examples?: string[]
  }
}

async function saveAnalysisToDb(data: AnalysisData) {
  console.log(`\n📝 ${data.reference} 분석 결과 저장 중...`)

  // 1. verse_id 조회
  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .select('id')
    .eq('reference', data.reference)
    .single()

  if (verseError || !verse) {
    console.error(`❌ 구절을 찾을 수 없습니다: ${data.reference}`)
    return false
  }

  const verseId = verse.id

  try {
    // 2. 기존 데이터 삭제 (중복 방지)
    await supabase.from('sentence_structures').delete().eq('verse_id', verseId)
    await supabase.from('vocabulary').delete().eq('verse_id', verseId)
    await supabase.from('context_explanation').delete().eq('verse_id', verseId)
    await supabase.from('korean_translations').delete().eq('verse_id', verseId)
    await supabase.from('special_explanations').delete().eq('verse_id', verseId)

    // 3. 문장 구조 저장
    if (data.sentence_structures && data.sentence_structures.length > 0) {
      const { error: sentenceError } = await supabase
        .from('sentence_structures')
        .insert(
          data.sentence_structures.map((s) => ({
            verse_id: verseId,
            ...s
          }))
        )

      if (sentenceError) {
        console.error('❌ 문장 구조 저장 실패:', sentenceError)
        return false
      }
      console.log(`  ✅ ${data.sentence_structures.length}개 문장구조 저장`)
    }

    // 4. 어휘 저장
    if (data.vocabulary && data.vocabulary.length > 0) {
      const { error: vocabError } = await supabase
        .from('vocabulary')
        .insert(
          data.vocabulary.map((v) => ({
            verse_id: verseId,
            ...v
          }))
        )

      if (vocabError) {
        console.error('❌ 어휘 저장 실패:', vocabError)
        return false
      }
      console.log(`  ✅ ${data.vocabulary.length}개 어휘 저장`)
    }

    // 5. 문맥 설명 저장
    if (data.contextual_explanation) {
      const { error: contextError } = await supabase
        .from('context_explanation')
        .insert({
          verse_id: verseId,
          ...data.contextual_explanation
        })

      if (contextError) {
        console.error('❌ 문맥 설명 저장 실패:', contextError)
        return false
      }
      console.log(`  ✅ 문맥설명 저장`)
    }

    // 6. 한국어 번역 저장
    if (data.korean_translation) {
      const { error: translationError } = await supabase
        .from('korean_translations')
        .insert({
          verse_id: verseId,
          ...data.korean_translation
        })

      if (translationError) {
        console.error('❌ 한국어 번역 저장 실패:', translationError)
        return false
      }
      console.log(`  ✅ 한국어 번역 저장`)
    }

    // 7. 특별 설명 저장
    if (data.special_explanation) {
      const { error: specialError } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          ...data.special_explanation
        })

      if (specialError) {
        console.error('❌ 특별 설명 저장 실패:', specialError)
        return false
      }
      console.log(`  ✅ 특별설명 저장`)
    }

    console.log(`✅ ${data.reference} 저장 완료\n`)
    return true
  } catch (error) {
    console.error('❌ 저장 중 오류:', error)
    return false
  }
}

// CLI 사용법
async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log(`
사용법:
  npx tsx scripts/save-analysis-to-db.ts <JSON 파일 경로>
  npx tsx scripts/save-analysis-to-db.ts <JSON 문자열>

예제:
  npx tsx scripts/save-analysis-to-db.ts analysis.json
  npx tsx scripts/save-analysis-to-db.ts '{"reference":"Philippians 3:1",...}'
`)
    process.exit(1)
  }

  const input = args[0]
  let data: AnalysisData

  // 파일 또는 JSON 문자열 판단
  if (fs.existsSync(input)) {
    console.log(`📂 파일 읽기: ${input}`)
    const content = fs.readFileSync(input, 'utf-8')
    data = JSON.parse(content)
  } else {
    console.log(`📋 JSON 문자열 파싱`)
    data = JSON.parse(input)
  }

  const success = await saveAnalysisToDb(data)
  process.exit(success ? 0 : 1)
}

main()

export { saveAnalysisToDb }
export type { AnalysisData }
