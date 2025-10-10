import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function quickCheck() {
  // 1 Thessalonians의 분석된 구절 확인
  const { data } = await supabase
    .from('verses')
    .select(`
      reference,
      sentence_structures(id)
    `)
    .ilike('reference', '1 Thessalonians%')
    .order('reference')

  console.log('1 Thessalonians 분석 현황:')
  let analyzed = 0
  let notAnalyzed = 0
  
  for (const verse of data || []) {
    const hasAnalysis = verse.sentence_structures && verse.sentence_structures.length > 0
    if (hasAnalysis) {
      analyzed++
    } else {
      notAnalyzed++
      console.log(`❌ ${verse.reference} - 분석 필요`)
    }
  }
  
  console.log(`\n총계: ${analyzed}구절 완료, ${notAnalyzed}구절 남음`)
}

quickCheck()
