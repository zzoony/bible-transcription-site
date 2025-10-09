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

async function getVerses(chapter: number) {
  const { data } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', `1 Thessalonians ${chapter}:%`)
    .order('id')

  return data || []
}

async function main() {
  const chapter = parseInt(process.argv[2] || '1')
  const verses = await getVerses(chapter)
  console.log(JSON.stringify(verses, null, 2))
}

main()
