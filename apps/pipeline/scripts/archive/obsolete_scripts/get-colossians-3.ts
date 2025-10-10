import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function getColossians3() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Colossians 3:%')
    .order('reference')

  if (error) {
    console.error('오류:', error)
    return
  }

  console.log(`골로새서 3장 구절 수: ${data?.length || 0}개\n`)
  data?.forEach(v => {
    console.log(`${v.reference}`)
    console.log(`${v.niv_text}\n`)
  })
}

getColossians3()
