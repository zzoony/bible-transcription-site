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

async function setup() {
  // 1. Add Philemon book
  console.log('📚 Adding Philemon to books table...')
  const { data: book, error: bookError } = await supabase
    .from('books')
    .insert({
      name_english: 'Philemon',
      name_korean: '빌레몬서',
      abbreviation: 'Phlm',
      testament: 2,
      order_number: 57,
      total_chapters: 1
    })
    .select()
    .single()
  
  if (bookError) {
    console.error('❌ Book error:', bookError)
    return
  }
  
  console.log('✅ Book added:', book)
  
  // 2. Add Philemon 1:1 verse
  console.log('\n📖 Adding Philemon 1:1 verse...')
  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .insert({
      book_id: book.id,
      chapter: 1,
      verse: 1,
      reference: 'Philemon 1:1',
      niv_text: 'Paul, a prisoner of Christ Jesus, and Timothy our brother, to Philemon our dear friend and fellow worker—'
    })
    .select()
  
  if (verseError) {
    console.error('❌ Verse error:', verseError)
  } else {
    console.log('✅ Verse added:', verse)
  }
}

setup()
