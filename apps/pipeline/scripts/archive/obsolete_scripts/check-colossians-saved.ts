import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function main() {
  // Colossians 구절들 조회
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Colossians%')
    .order('id')

  if (!verses) {
    console.log('Colossians 구절 없음')
    return
  }

  console.log(`Colossians 총 구절: ${verses.length}개\n`)

  let hasSentenceStructures = 0

  for (const verse of verses) {
    const { count } = await supabase
      .from('sentence_structures')
      .select('*', { count: 'exact', head: true })
      .eq('verse_id', verse.id)

    if (count && count > 0) {
      hasSentenceStructures++
      console.log(`✅ ${verse.reference}: ${count}개 문장구조`)
    }
  }

  console.log(`\nsentence_structures가 있는 구절: ${hasSentenceStructures}/${verses.length}`)
}

main()
