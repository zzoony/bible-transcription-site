import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function main() {
  const { data } = await supabase
    .from('verses')
    .select('reference, niv_text, analysis_completed')
    .ilike('reference', '1 Thessalonians%')
    .order('id')

  const incomplete = data?.filter(v => !v.analysis_completed) || []

  console.log(`1 Thessalonians 총 구절: ${data?.length}개`)
  console.log(`미완료 구절: ${incomplete.length}개\n`)

  if (incomplete.length > 0) {
    console.log("미완료 구절 목록:")
    incomplete.forEach(v => {
      console.log(`  ${v.reference}`)
    })
  }
}

main()
