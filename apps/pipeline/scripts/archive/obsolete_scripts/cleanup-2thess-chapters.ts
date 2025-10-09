import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function cleanup() {
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Thessalonians')
    .single()

  if (book) {
    await supabase.from('chapters').delete().eq('book_id', book.id)
    console.log('2 Thessalonians Chapters 삭제 완료')
  }
}

cleanup()
