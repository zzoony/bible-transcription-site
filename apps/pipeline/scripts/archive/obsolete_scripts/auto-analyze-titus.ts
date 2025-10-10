import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { saveAnalysisToDb, type AnalysisData } from './analyze-titus'

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

// 모든 Titus 구절 가져오기
async function getAllTitusVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Titus%')
    .order('reference')

  if (error) throw error
  return data || []
}

// 이미 분석된 구절 확인
async function getAnalyzedVerses() {
  const { data } = await supabase
    .from('sentence_structures')
    .select('verse_id, verses!inner(reference)')
    .ilike('verses.reference', 'Titus%')

  const references = new Set(
    data?.map((d: any) => d.verses.reference) || []
  )

  return references
}

async function main() {
  console.log('=== Titus 자동 분석 시작 ===\n')

  const allVerses = await getAllTitusVerses()
  const analyzed = await getAnalyzedVerses()

  console.log(`전체 구절: ${allVerses.length}개`)
  console.log(`이미 분석: ${analyzed.size}개`)
  console.log(`남은 구절: ${allVerses.length - analyzed.size}개\n`)

  // 분석할 구절 필터링
  const toAnalyze = allVerses.filter(v => !analyzed.has(v.reference))

  console.log('분석할 구절 목록:')
  toAnalyze.forEach((v, i) => {
    console.log(`${i + 1}. ${v.reference}`)
  })

  console.log('\n이제 Claude Code를 사용하여 각 구절을 분석하세요.')
  console.log('각 구절마다 AnalysisData 객체를 생성하고 saveAnalysisToDb()를 호출하세요.')
}

main().catch(console.error)
