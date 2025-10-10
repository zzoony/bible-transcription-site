import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

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

async function checkHebrewsAnalysis() {
  console.log('히브리서 분석 상태 확인 중...\n')

  // 히브리서의 모든 구절 조회
  const { data: verses, error: versesError } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Hebrews%')
    .order('reference')

  if (versesError) {
    console.error('오류:', versesError)
    return
  }

  console.log(`총 ${verses?.length}개 구절 발견\n`)

  // 각 구절별로 분석 데이터 확인
  const missingAnalysis: string[] = []
  const completedAnalysis: string[] = []

  for (const verse of verses || []) {
    const { data: structures } = await supabase
      .from('sentence_structures')
      .select('id')
      .eq('verse_id', verse.id)

    const { data: vocab } = await supabase
      .from('vocabulary')
      .select('id')
      .eq('verse_id', verse.id)

    if ((structures?.length || 0) > 0 && (vocab?.length || 0) > 0) {
      completedAnalysis.push(verse.reference)
    } else {
      missingAnalysis.push(verse.reference)
    }
  }

  console.log(`완료된 구절: ${completedAnalysis.length}개`)
  console.log(`미완료 구절: ${missingAnalysis.length}개\n`)

  if (missingAnalysis.length > 0) {
    console.log('미완료 구절 목록:')
    missingAnalysis.forEach(ref => console.log(`  - ${ref}`))
  } else {
    console.log('모든 구절이 분석 완료되었습니다!')
  }
}

checkHebrewsAnalysis()
