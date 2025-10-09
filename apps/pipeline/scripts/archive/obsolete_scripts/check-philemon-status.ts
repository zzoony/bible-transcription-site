import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function check() {
  // Check book
  const { data: book } = await supabase
    .from('books')
    .select('*')
    .eq('name_english', 'Philemon')
    .single()
  
  console.log('📚 Book:', book)
  
  // Check verse
  const { data: verse } = await supabase
    .from('verses')
    .select('*, sentence_structures(*), vocabulary(*)')
    .eq('reference', 'Philemon 1:1')
    .single()
  
  console.log('\n📖 Verse:', {
    id: verse?.id,
    reference: verse?.reference,
    niv_text: verse?.niv_text,
    analysis_completed: verse?.analysis_completed,
    sentence_count: verse?.sentence_structures?.length,
    vocab_count: verse?.vocabulary?.length
  })
  
  console.log('\n✅ 웹사이트 검색 실패 원인:')
  console.log('   - analysis_completed =', verse?.analysis_completed)
  console.log('   - 검색은 analysis_completed=true인 구절만 표시할 수 있음')
  console.log('\n💡 해결: verses 테이블의 analysis_completed를 true로 업데이트 필요')
}

check()
