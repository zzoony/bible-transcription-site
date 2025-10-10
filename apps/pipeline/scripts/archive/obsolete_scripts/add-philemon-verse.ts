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

async function addVerse() {
  const { data, error } = await supabase
    .from('verses')
    .insert({
      reference: 'Philemon 1:1',
      niv_text: 'Paul, a prisoner of Christ Jesus, and Timothy our brother, to Philemon our dear friend and fellow worker—'
    })
    .select()
  
  if (error) {
    console.error('❌ Error:', error)
  } else {
    console.log('✅ Verse added:', data)
  }
}

addVerse()
