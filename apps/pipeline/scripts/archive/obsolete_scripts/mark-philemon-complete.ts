import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function markComplete() {
  const { data, error } = await supabase
    .from('verses')
    .update({ analysis_completed: true })
    .eq('reference', 'Philemon 1:1')
    .select()
  
  if (error) {
    console.error('❌ Error:', error)
  } else {
    console.log('✅ Updated:', data)
  }
}

markComplete()
