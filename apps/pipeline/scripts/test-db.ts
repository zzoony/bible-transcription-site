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

async function test() {
  console.log('Testing database connection...\n')

  const { data, error } = await supabase
    .from('verses')
    .select('id, reference')
    .order('id')
    .limit(5)

  if (error) {
    console.error('❌ Database error:', error)
    return
  }

  console.log('✅ Connection successful')
  console.log('Sample verses:', data?.map(v => v.reference))

  // Check for Galatians
  const { data: gal } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Galatians%')
    .order('id')

  console.log(`\n📖 Galatians verses in DB: ${gal?.length || 0}`)
}

test().catch(console.error)