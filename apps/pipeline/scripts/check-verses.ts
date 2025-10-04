import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

async function check() {
  const { data: phil } = await supabase
    .from('verses')
    .select('reference')
    .ilike('reference', 'Philippians%')
    .order('id')
    .limit(3)

  console.log('Philippians 샘플:', phil?.map(v => v.reference))

  const { data: gal } = await supabase
    .from('verses')
    .select('reference')
    .ilike('reference', 'Galatians%')
    .limit(1)

  console.log('Galatians 존재:', gal?.length ? '예' : '아니오')
}

check().catch(console.error)