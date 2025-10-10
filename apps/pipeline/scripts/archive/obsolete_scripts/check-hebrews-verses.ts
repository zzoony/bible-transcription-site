import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

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

async function checkHebrewsVerses() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, text')
    .ilike('reference', 'Hebrews 9:%')
    .order('reference')
  
  if (error) {
    console.error('오류:', error)
    return
  }

  console.log(`히브리서 9장 구절 수: ${data?.length || 0}`)
  if (data && data.length > 0) {
    console.log('첫 구절:', data[0].reference, data[0].text?.substring(0, 50))
  }

  const { data: data10, error: error10 } = await supabase
    .from('verses')
    .select('reference, text')
    .ilike('reference', 'Hebrews 10:%')
    .order('reference')
  
  if (error10) {
    console.error('오류:', error10)
    return
  }

  console.log(`히브리서 10장 구절 수: ${data10?.length || 0}`)
  if (data10 && data10.length > 0) {
    console.log('첫 구절:', data10[0].reference, data10[0].text?.substring(0, 50))
  }
}

checkHebrewsVerses()
