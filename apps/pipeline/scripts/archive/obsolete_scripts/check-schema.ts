import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function checkSchema() {
  const { data, error} = await supabase
    .from('verses')
    .select('*')
    .limit(1)

  if (error) {
    console.error('❌ Error:', error)
  } else if (data && data[0]) {
    console.log('verses 테이블 컬럼:', Object.keys(data[0]))
    console.log('\n샘플 데이터:', JSON.stringify(data[0], null, 2))
  } else {
    console.log('데이터 없음')
  }
}

checkSchema()
