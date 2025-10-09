import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as path from 'path'

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

const PROGRESS_FILE = path.join(__dirname, '../logs/titus_progress.json')

function loadProgress(): Set<string> {
  try {
    if (fs.existsSync(PROGRESS_FILE)) {
      const data = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'))
      return new Set(data.completed || [])
    }
  } catch (error) {
    console.error('진행 상황 로드 실패:', error)
  }
  return new Set()
}

function saveProgress(completed: Set<string>) {
  try {
    const logsDir = path.dirname(PROGRESS_FILE)
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true })
    }
    fs.writeFileSync(
      PROGRESS_FILE,
      JSON.stringify({ completed: Array.from(completed), updated: new Date().toISOString() }, null, 2)
    )
  } catch (error) {
    console.error('진행 상황 저장 실패:', error)
  }
}

async function saveAnalysisToDb(data: AnalysisData): Promise<boolean> {
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
  console.log('=== Titus 전체 분석 시작 ===\n')

  // 1. Books/Chapters 확인 및 생성
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name', 'Titus')
    .single()

  let bookId = book?.id

  if (!bookId) {
    const { data: newBook } = await supabase
      .from('books')
      .insert({ name: 'Titus', testament: 2 })
      .select('id')
      .single()
    bookId = newBook?.id
    console.log('Books 테이블에 Titus 추가됨')
  }

  // 2. Chapters 생성 (3장)
  for (let ch = 1; ch <= 3; ch++) {
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

  // 3. 진행 상황 로드
  const completed = loadProgress()
  console.log(`\n이미 완료된 구절: ${completed.size}개`)

  // 4. 모든 Titus 구절 가져오기
  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Titus%')
    .order('reference')

  if (error || !verses) {
    console.error('구절 조회 실패:', error)
    return
  }

  console.log(`\n총 ${verses.length}개 구절 분석 예정`)
  console.log('남은 구절:', verses.length - completed.size)

  console.log('\n=== 분석 준비 완료 ===')
  console.log('이제 각 구절을 분석하여 saveAnalysisToDb()로 저장하세요.')
}

main()

export { saveAnalysisToDb, loadProgress, saveProgress }
export type { AnalysisData }
