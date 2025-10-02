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

async function fetchVerse(reference: string) {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .eq('reference', reference)
    .single()

  if (error) {
    console.error('Error:', error)
    process.exit(1)
  } else {
    console.log('Reference:', data.reference)
    console.log('NIV Text:', data.niv_text)
    return data
  }
}

// CLI 사용법
const args = process.argv.slice(2)
if (args.length === 0) {
  console.log('사용법: npx tsx scripts/fetch-verse.ts "Philippians 3:1"')
  process.exit(1)
}

fetchVerse(args[0])
