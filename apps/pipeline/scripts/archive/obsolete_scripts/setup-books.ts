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

async function setupBooks() {
  // Colossians
  let { data: col } = await supabase
    .from('books')
    .select('id')
    .eq('name', 'Colossians')
    .single()

  if (!col) {
    const { data } = await supabase
      .from('books')
      .insert({ name: 'Colossians', testament: 2 })
      .select('id')
      .single()
    col = data
    console.log('Colossians book created')
  } else {
    console.log('Colossians already exists')
  }

  // 1 Peter
  let { data: peter } = await supabase
    .from('books')
    .select('id')
    .eq('name', '1 Peter')
    .single()

  if (!peter) {
    const { data } = await supabase
      .from('books')
      .insert({ name: '1 Peter', testament: 2 })
      .select('id')
      .single()
    peter = data
    console.log('1 Peter book created')
  } else {
    console.log('1 Peter already exists')
  }

  // Colossians chapters (4)
  if (col) {
    for (let ch = 1; ch <= 4; ch++) {
      const { data: existing } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', col.id)
        .eq('chapter_number', ch)
        .single()

      if (!existing) {
        await supabase
          .from('chapters')
          .insert({ book_id: col.id, chapter_number: ch })
        console.log(`Colossians chapter ${ch} created`)
      }
    }
  }

  // 1 Peter chapters (5)
  if (peter) {
    for (let ch = 1; ch <= 5; ch++) {
      const { data: existing } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', peter.id)
        .eq('chapter_number', ch)
        .single()

      if (!existing) {
        await supabase
          .from('chapters')
          .insert({ book_id: peter.id, chapter_number: ch })
        console.log(`1 Peter chapter ${ch} created`)
      }
    }
  }

  console.log('Setup complete')
}

setupBooks()
