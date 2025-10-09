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
  // Create Colossians book
  const { data: col, error: colErr } = await supabase
    .from('books')
    .insert({
      name_english: 'Colossians',
      name_korean: '골로새서',
      abbreviation: 'Col',
      testament: 2,
      order_number: 51,
      total_chapters: 4
    })
    .select()
    .single()

  if (colErr) {
    console.error('Error creating Colossians:', colErr)
    return
  }

  console.log('Colossians book created:', col)

  // Create 1 Peter book
  const { data: peter, error: peterErr } = await supabase
    .from('books')
    .insert({
      name_english: '1 Peter',
      name_korean: '베드로전서',
      abbreviation: '1 Pet',
      testament: 2,
      order_number: 60,
      total_chapters: 5
    })
    .select()
    .single()

  if (peterErr) {
    console.error('Error creating 1 Peter:', peterErr)
    return
  }

  console.log('1 Peter book created:', peter)

  // Create Colossians chapters (verse counts: 29, 23, 25, 18)
  const colVerseCounts = [29, 23, 25, 18]
  for (let i = 1; i <= 4; i++) {
    const { error } = await supabase
      .from('chapters')
      .insert({
        book_id: col.id,
        chapter_number: i,
        total_verses: colVerseCounts[i-1]
      })

    if (error) console.error(`Error creating Colossians chapter ${i}:`, error)
    else console.log(`Colossians chapter ${i} created`)
  }

  // Create 1 Peter chapters (verse counts: 25, 25, 22, 19, 14)
  const peterVerseCounts = [25, 25, 22, 19, 14]
  for (let i = 1; i <= 5; i++) {
    const { error } = await supabase
      .from('chapters')
      .insert({
        book_id: peter.id,
        chapter_number: i,
        total_verses: peterVerseCounts[i-1]
      })

    if (error) console.error(`Error creating 1 Peter chapter ${i}:`, error)
    else console.log(`1 Peter chapter ${i} created`)
  }

  console.log('\nSetup complete!')
}

setup()
