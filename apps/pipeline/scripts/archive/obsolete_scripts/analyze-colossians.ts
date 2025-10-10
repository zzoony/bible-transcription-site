import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

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
  console.log(`\n저장 중: ${data.reference}`)

  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .select('id')
    .eq('reference', data.reference)
    .single()

  if (verseError || !verse) {
    console.error(`오류: 구절을 찾을 수 없습니다 - ${data.reference}`)
    return false
  }

  const verseId = verse.id

  try {
    // 기존 데이터 삭제 (중복 방지)
    await supabase.from('sentence_structures').delete().eq('verse_id', verseId)
    await supabase.from('vocabulary').delete().eq('verse_id', verseId)
    await supabase.from('contextual_explanations').delete().eq('verse_id', verseId)
    await supabase.from('korean_translations').delete().eq('verse_id', verseId)
    await supabase.from('special_explanations').delete().eq('verse_id', verseId)

    // 문장 구조 저장
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
        console.error('문장 구조 저장 실패:', sentenceError)
        return false
      }
    }

    // 어휘 저장
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
        console.error('어휘 저장 실패:', vocabError)
        return false
      }
    }

    // 문맥 설명 저장
    if (data.contextual_explanation) {
      const { error: contextError } = await supabase
        .from('contextual_explanations')
        .insert({
          verse_id: verseId,
          ...data.contextual_explanation
        })

      if (contextError) {
        console.error('문맥 설명 저장 실패:', contextError)
        return false
      }
    }

    // 한국어 번역 저장
    if (data.korean_translation) {
      const { error: translationError } = await supabase
        .from('korean_translations')
        .insert({
          verse_id: verseId,
          ...data.korean_translation
        })

      if (translationError) {
        console.error('한국어 번역 저장 실패:', translationError)
        return false
      }
    }

    // 특별 설명 저장
    if (data.special_explanation) {
      const { error: specialError } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          ...data.special_explanation
        })

      if (specialError) {
        console.error('특별 설명 저장 실패:', specialError)
        return false
      }
    }

    console.log(`완료: ${data.reference}`)
    return true
  } catch (error) {
    console.error('저장 중 오류:', error)
    return false
  }
}

async function main() {
  console.log('=== Colossians 전체 분석 시작 ===\n')

  // 1. Books/Chapters 확인 및 생성
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name', 'Colossians')
    .single()

  let bookId = book?.id

  if (!bookId) {
    const { data: newBook } = await supabase
      .from('books')
      .insert({ name: 'Colossians', testament: 2 })
      .select('id')
      .single()
    bookId = newBook?.id
    console.log('Books 테이블에 Colossians 추가됨')
  }

  // 2. Chapters 생성 (4장)
  for (let ch = 1; ch <= 4; ch++) {
    const { data: existing } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', bookId)
      .eq('chapter_number', ch)
      .single()

    if (!existing) {
      await supabase
        .from('chapters')
        .insert({ book_id: bookId, chapter_number: ch })
      console.log(`Chapter ${ch} 추가됨`)
    }
  }

  // 3. NIV 텍스트 확보 및 verses 테이블 삽입은 수동으로 진행
  console.log('\nNIV 텍스트를 Bible Gateway에서 가져와 verses 테이블에 삽입해야 합니다.')
  console.log('준비가 완료되면 분석을 계속합니다.\n')

  // 4. 구절별 분석 (예시: Colossians 1:1만 우선 수행)
  // 실제 분석은 Claude Code에서 수행하고 이 스크립트는 저장만 담당

  console.log('=== 분석 준비 완료 ===')
  console.log('Claude Code에서 각 구절을 분석하고 이 스크립트로 저장하세요.')
}

main()

export { saveAnalysisToDb }
export type { AnalysisData }
