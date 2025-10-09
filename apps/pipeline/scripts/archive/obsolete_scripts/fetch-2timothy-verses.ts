import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config({ path: '/Users/peter/Dev/bible-transcription-site/apps/pipeline/.env' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function main() {
  const { data: verses, error } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', '2 Timothy %')
    .order('id')

  if (error) {
    console.error('Error:', error)
    process.exit(1)
  }

  // Filter out 1:1 (already done)
  const toAnalyze = verses.filter(v => {
    const match = v.reference.match(/2 Timothy (\d+):(\d+)/)
    if (!match) return false
    const chapter = parseInt(match[1])
    const verse = parseInt(match[2])
    if (chapter === 1 && verse === 1) return false
    return true
  })

  console.log(JSON.stringify(toAnalyze, null, 2))
  fs.writeFileSync('2timothy_verses.json', JSON.stringify(toAnalyze, null, 2))
  console.log(`\n${toAnalyze.length}개 구절 저장됨: 2timothy_verses.json`)
}

main().catch(console.error)
