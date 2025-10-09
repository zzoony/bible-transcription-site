import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function fetchJamesVerses() {
  console.log('James 전체 구절 조회 중...')

  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'James%')
    .order('reference')

  if (error) {
    console.error('조회 오류:', error)
    return
  }

  console.log(`\n총 ${verses?.length}개 구절 조회됨\n`)

  // JSON 파일로 저장
  const outputPath = '/Users/peter/Dev/bible-transcription-site/apps/pipeline/scripts/james-verses.json'
  fs.writeFileSync(outputPath, JSON.stringify(verses, null, 2))

  console.log(`\n저장 완료: ${outputPath}`)

  // 각 장별 구절 수 출력
  const chapterCounts: Record<string, number> = {}
  verses?.forEach(v => {
    const chapter = v.reference.match(/James (\d+):/)?.[1]
    if (chapter) {
      chapterCounts[chapter] = (chapterCounts[chapter] || 0) + 1
    }
  })

  console.log('\n장별 구절 수:')
  Object.entries(chapterCounts).forEach(([ch, count]) => {
    console.log(`  James ${ch}: ${count}개 구절`)
  })
}

fetchJamesVerses()
