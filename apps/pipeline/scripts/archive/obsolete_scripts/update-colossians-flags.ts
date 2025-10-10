import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function updateColossians() {
  console.log('🔄 Colossians analysis_completed 플래그 업데이트 시작...\n')

  // Colossians 구절만 조회
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, analysis_completed')
    .ilike('reference', 'Colossians%')
    .order('id')

  if (!verses) {
    console.log('Colossians 구절을 찾을 수 없습니다')
    return
  }

  let updated = 0

  for (const verse of verses) {
    if (verse.analysis_completed) {
      continue
    }

    // sentence_structures가 있는지 확인
    const { count } = await supabase
      .from('sentence_structures')
      .select('*', { count: 'exact', head: true })
      .eq('verse_id', verse.id)

    if (count && count > 0) {
      // 플래그 업데이트
      await supabase
        .from('verses')
        .update({ analysis_completed: true })
        .eq('id', verse.id)

      updated++
      console.log(`  ✅ ${verse.reference} 플래그 업데이트`)
    }
  }

  console.log(`\n✅ Colossians 완료!`)
  console.log(`   업데이트: ${updated}개`)
  console.log(`   총 구절: ${verses.length}개`)
}

updateColossians().catch(console.error)
