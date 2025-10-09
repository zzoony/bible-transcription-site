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
    .select('reference, niv_text')
    .eq('reference', '2 Peter 2:8')
    .single()

  console.log(JSON.stringify(data, null, 2))
}

main()
