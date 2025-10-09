import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { resolve } from 'path'

dotenv.config({ path: resolve(__dirname, '../../../.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function query2Timothy2() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text, analysis_completed')
    .ilike('reference', '2 Timothy 2:%')
    .order('reference')

  if (error) {
    console.error('Error:', error)
    return
  }

  console.log(`\n2 Timothy 2장: ${data.length}개 구절\n`)
  data.forEach((v, i) => {
    console.log(`${i + 1}. ${v.reference}`)
    console.log(`   ${v.niv_text.substring(0, 100)}${v.niv_text.length > 100 ? '...' : ''}`)
    console.log(`   분석 완료: ${v.analysis_completed ? '✅' : '❌'}\n`)
  })
}

query2Timothy2()
