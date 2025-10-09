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
  // Check a Philippians verse to see the structure
  const { data } = await supabase
    .from('verses')
    .select('*')
    .eq('reference', 'Philippians 3:1')
    .single()

  console.log('Philippians 3:1 structure:', JSON.stringify(data, null, 2))

  // Check books
  const { data: books } = await supabase
    .from('books')
    .select('*')
    .in('name', ['Philippians', 'Colossians'])

  console.log('\nBooks:', JSON.stringify(books, null, 2))

  // Check chapters for Colossians
  if (books) {
    const colBook = books.find(b => b.name === 'Colossians')
    if (colBook) {
      const { data: chapters } = await supabase
        .from('chapters')
        .select('*')
        .eq('book_id', colBook.id)

      console.log('\nColossians chapters:', JSON.stringify(chapters, null, 2))
    }
  }
}

check()
