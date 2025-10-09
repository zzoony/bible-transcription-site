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

async function check() {
  // First check total count
  const { data: all, error: err1 } = await supabase
    .from('verses')
    .select('id, reference', { count: 'exact' })
    .limit(5)

  console.log('Total sample:', JSON.stringify(all, null, 2))
  if (err1) console.error('Error1:', err1)

  // Check Colossians specifically
  const { data, error } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('reference', 'Colossians 1:15')

  console.log('\nColossians 1:15:', JSON.stringify(data, null, 2))
  if (error) console.error('Error2:', error)

  // Check with like
  const { data: data3, error: err3 } = await supabase
    .from('verses')
    .select('id, reference')
    .like('reference', 'Colossians%')
    .limit(10)

  console.log('\nColossians LIKE:', JSON.stringify(data3, null, 2))
  if (err3) console.error('Error3:', err3)
}

check()
