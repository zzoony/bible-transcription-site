import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function fetchVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .or('reference.ilike.1 Peter 2:%,reference.ilike.1 Peter 3:%')
    .order('reference')

  if (error) {
    console.error('Error:', error)
    return
  }

  if (data) {
    data.forEach((v) => {
      console.log(`${v.reference}|${v.niv_text}`)
    })
  }
}

fetchVerses()
