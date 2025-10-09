import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function check1Thess() {
  console.log('📖 1 Thessalonians 상세 확인:\n')

  for (let chapter = 1; chapter <= 5; chapter++) {
    const { data: verses } = await supabase
      .from('verses')
      .select('reference')
      .ilike('reference', `1 Thessalonians ${chapter}:%`)
      .order('reference')

    console.log(`\n**${chapter}장** (${verses?.length || 0}구절):`)
    
    for (const verse of verses || []) {
      const { data: analysis } = await supabase
        .from('sentence_structures')
        .select('id')
        .eq('verse_id', (await supabase.from('verses').select('id').eq('reference', verse.reference).single()).data?.id)
        .limit(1)

      const status = analysis && analysis.length > 0 ? '✅' : '❌'
      console.log(`  ${status} ${verse.reference}`)
    }
  }
}

check1Thess()
