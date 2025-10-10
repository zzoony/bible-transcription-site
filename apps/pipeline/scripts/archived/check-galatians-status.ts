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

async function check() {
  console.log('🔍 Galatians 데이터베이스 현황 조사\n')

  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Galatians%')
    .order('id')

  console.log(`📖 총 Galatians 구절: ${verses?.length || 0}개`)

  if (verses && verses.length > 0) {
    const { data: analyzed } = await supabase
      .from('sentence_structures')
      .select('verse_id')
      .in('verse_id', verses.map(v => v.id))

    const uniqueAnalyzed = new Set(analyzed?.map(a => a.verse_id)).size
    console.log(`✅ 이미 분석된 구절: ${uniqueAnalyzed}개`)
    console.log(`⏳ 분석 필요 구절: ${verses.length - uniqueAnalyzed}개\n`)

    if (uniqueAnalyzed > 0) {
      console.log('⚠️  이미 분석된 구절이 존재합니다.')
      console.log('   → 스크립트에서 중복 방지 로직 필수\n')
    }
  }

  console.log('✅ 사전 조사 완료')
}

check().catch(console.error)