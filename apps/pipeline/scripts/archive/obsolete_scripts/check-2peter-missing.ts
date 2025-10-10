import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function check2Peter() {
  const { data } = await supabase
    .from('verses')
    .select('reference, analysis_completed')
    .ilike('reference', '2 Peter%')
    .order('id')

  const incomplete = data?.filter(v => !v.analysis_completed) || []
  console.log(`2 Peter 미완료 구절: ${incomplete.length}개`)
  if (incomplete.length > 0) {
    console.log(`누락된 구절: ${incomplete.map(v => v.reference).join(', ')}`)
  }
}

check2Peter()
