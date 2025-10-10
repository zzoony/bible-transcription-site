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

async function checkStatus() {
  console.log('📊 사도행전 분석 상태 확인\n')
  console.log('=' .repeat(80))

  // Get all Acts verses
  const { data: verses, error: versesError } = await supabase
    .from('verses')
    .select('id, reference, niv_text, analysis_completed')
    .ilike('reference', 'Acts%')
    .order('reference')

  if (versesError) {
    console.log('❌ 오류:', versesError)
    return
  }

  if (!verses || verses.length === 0) {
    console.log('❌ 사도행전 구절을 찾을 수 없습니다')
    return
  }

  console.log(`📖 총 구절: ${verses.length}`)

  // Count analyzed vs unanalyzed
  const analyzed = verses.filter(v => v.analysis_completed).length
  const unanalyzed = verses.filter(v => !v.analysis_completed).length

  console.log(`✅ 분석 완료: ${analyzed}`)
  console.log(`⏳ 분석 대기: ${unanalyzed}`)

  // Check sentence structures
  const verseIds = verses.map(v => v.id)
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const versesWithStructures = new Set(structures?.map(s => s.verse_id) || [])
  const withStructures = versesWithStructures.size

  console.log(`📝 문장구조 있음: ${withStructures}`)
  console.log(`📝 문장구조 없음: ${verses.length - withStructures}`)

  // Show first 10 unanalyzed verses
  const unanalyzedVerses = verses.filter(v => !versesWithStructures.has(v.id))

  if (unanalyzedVerses.length > 0) {
    console.log(`\n⏳ 분석 대기 중인 구절 (처음 10개):`)
    unanalyzedVerses.slice(0, 10).forEach(v => {
      console.log(`  - ${v.reference}`)
    })

    if (unanalyzedVerses.length > 10) {
      console.log(`  ... 외 ${unanalyzedVerses.length - 10}개`)
    }
  }

  console.log('\n' + '=' .repeat(80))
}

checkStatus().catch(console.error)
