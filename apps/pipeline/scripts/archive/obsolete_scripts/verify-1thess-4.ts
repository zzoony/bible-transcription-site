import * as dotenv from 'dotenv'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function verifyAnalyses() {
  console.log('\n1 Thessalonians 4장 분석 데이터 검증 중...\n')

  // 1. verses 테이블에서 모든 구절 조회
  const { data: verses, error: versesError } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', '1 Thessalonians 4:%')
    .order('reference')

  if (versesError) {
    console.error('구절 조회 실패:', versesError)
    return
  }

  console.log(`총 ${verses?.length || 0}개 구절 발견\n`)

  const results = []

  for (const verse of verses || []) {
    // 각 테이블별로 데이터 확인
    const [sentences, vocab, context, translation, special] = await Promise.all([
      supabase
        .from('sentence_structures')
        .select('*')
        .eq('verse_id', verse.id),
      supabase.from('vocabulary').select('*').eq('verse_id', verse.id),
      supabase
        .from('contextual_explanations')
        .select('*')
        .eq('verse_id', verse.id),
      supabase
        .from('korean_translations')
        .select('*')
        .eq('verse_id', verse.id),
      supabase
        .from('special_explanations')
        .select('*')
        .eq('verse_id', verse.id)
    ])

    const status = {
      reference: verse.reference,
      sentences: sentences.data?.length || 0,
      vocab: vocab.data?.length || 0,
      context: context.data?.length || 0,
      translation: translation.data?.length || 0,
      special: special.data?.length || 0,
      complete:
        (sentences.data?.length || 0) > 0 &&
        (vocab.data?.length || 0) > 0 &&
        (context.data?.length || 0) > 0 &&
        (translation.data?.length || 0) > 0 &&
        (special.data?.length || 0) > 0
    }

    results.push(status)

    const icon = status.complete ? '✅' : '❌'
    console.log(`${icon} ${status.reference}`)
    console.log(
      `   문장구조: ${status.sentences}, 어휘: ${status.vocab}, 문맥: ${status.context}, 번역: ${status.translation}, 특별설명: ${status.special}`
    )
  }

  // 요약 통계
  const complete = results.filter((r) => r.complete).length
  const incomplete = results.filter((r) => !r.complete).length

  console.log('\n' + '='.repeat(60))
  console.log('검증 결과 요약')
  console.log('='.repeat(60))
  console.log(`총 구절: ${results.length}개`)
  console.log(`완료: ${complete}개`)
  console.log(`미완료: ${incomplete}개`)
  console.log(
    `완성도: ${((complete / results.length) * 100).toFixed(1)}%`
  )
  console.log('='.repeat(60) + '\n')

  // 미완료 구절 상세
  if (incomplete > 0) {
    console.log('미완료 구절 목록:')
    results
      .filter((r) => !r.complete)
      .forEach((r) => {
        console.log(`- ${r.reference}`)
      })
  }
}

verifyAnalyses()
