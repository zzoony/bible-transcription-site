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

async function fetchVerse() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .eq('reference', 'Philippians 3:1')
    .single()

  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Reference:', data.reference)
    console.log('NIV Text:', data.niv_text)
  }
}

fetchVerse()
