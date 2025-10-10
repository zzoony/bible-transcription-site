import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function getVerses(bookPattern: string) {
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', `${bookPattern}%`)
    .order('id')

  if (!verses) {
    console.log('[]')
    return
  }

  console.log(JSON.stringify(verses, null, 2))
}

const bookPattern = process.argv[2] || '2 Thessalonians'
getVerses(bookPattern)
