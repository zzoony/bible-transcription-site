import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

const mediumBooks = ['1 Timothy', 'James', '1 Peter', '1 John', 'Hebrews']

async function updateMediumBooksFlags() {
  console.log('🔄 중형 책 analysis_completed 플래그 업데이트 시작...\n')

  let totalUpdated = 0

  for (const bookName of mediumBooks) {
    const { data: verses } = await supabase
      .from('verses')
      .select('id, reference, analysis_completed')
      .ilike('reference', `${bookName}%`)
      .order('id')

    if (!verses) continue

    let updated = 0

    for (const verse of verses) {
      if (verse.analysis_completed) continue

      const { count } = await supabase
        .from('sentence_structures')
        .select('*', { count: 'exact', head: true })
        .eq('verse_id', verse.id)

      if (count && count > 0) {
        await supabase
          .from('verses')
          .update({ analysis_completed: true })
          .eq('id', verse.id)

        updated++
      }
    }

    console.log(`✅ ${bookName}: ${updated}개 플래그 업데이트`)
    totalUpdated += updated
  }

  console.log(`\n✅ 전체 완료: ${totalUpdated}개 업데이트`)
}

updateMediumBooksFlags().catch(console.error)
