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
  // 1. Get Philemon book ID
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', 'Philemon')
    .single()
  
  const bookId = book!.id
  console.log('✅ Philemon book ID:', bookId)
  
  // 2. Add chapter 1 with total_verses
  console.log('\n📑 Adding chapter 1...')
  const { data: chapter, error: chapterError } = await supabase
    .from('chapters')
    .insert({
      book_id: bookId,
      chapter_number: 1,
      total_verses: 25
    })
    .select()
    .single()
  
  if (chapterError) {
    console.error('❌ Chapter error:', chapterError)
    return
  }
  
  console.log('✅ Chapter added, ID:', chapter.id)
  
  // 3. Add verse 1
  console.log('\n📖 Adding verse 1...')
  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .insert({
      book_id: bookId,
      chapter_id: chapter.id,
      verse_number: 1,
      reference: 'Philemon 1:1',
      niv_text: 'Paul, a prisoner of Christ Jesus, and Timothy our brother, to Philemon our dear friend and fellow worker—',
      analysis_completed: false
    })
    .select()
  
  if (verseError) {
    console.error('❌ Verse error:', verseError)
  } else {
    console.log('✅ Verse added:\n', JSON.stringify(verse[0], null, 2))
  }
}

setup()
