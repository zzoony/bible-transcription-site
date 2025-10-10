import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function fetchVerses() {
  const { data: ch4, error: err4 } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '1 John 4:%')
    .order('reference')

  const { data: ch5, error: err5 } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '1 John 5:%')
    .order('reference')

  if (err4 || err5) {
    console.error('Error:', err4 || err5)
    return
  }

  console.log('=== 1 John 4 ===')
  ch4?.forEach(v => console.log(`${v.reference}: ${v.niv_text}`))

  console.log('\n=== 1 John 5 ===')
  ch5?.forEach(v => console.log(`${v.reference}: ${v.niv_text}`))
}

fetchVerses()
