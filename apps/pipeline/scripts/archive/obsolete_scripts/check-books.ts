import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function checkBooks() {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .ilike('name', '%philemon%')
  
  if (error) {
    console.error('❌ Error:', error)
  } else {
    console.log('Books:', data)
  }
}

checkBooks()
