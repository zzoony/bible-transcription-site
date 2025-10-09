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

async function cleanup() {
  await supabase.from('chapters').delete().eq('book_id', 15)
  await supabase.from('chapters').delete().eq('book_id', 16)
  console.log('Cleaned up chapters')
}

cleanup()
