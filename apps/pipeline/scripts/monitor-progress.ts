import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

async function monitor() {
  const { data: verses } = await sb
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Galatians%')
    .order('id')

  const { data: analyzed } = await sb
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verses!.map(v => v.id))

  const analyzedIds = new Set(analyzed?.map(a => a.verse_id))
  const complete = analyzedIds.size
  const total = verses!.length
  const percent = Math.round((complete / total) * 100)

  console.log(`\n📊 Galatians 분석 진행 상황`)
  console.log(`${'='.repeat(60)}`)
  console.log(`완료: ${complete}/${total} (${percent}%)`)
  console.log(`진행 바: ${'█'.repeat(Math.floor(percent / 2))}${'░'.repeat(50 - Math.floor(percent / 2))}`)

  if (complete > 0) {
    const lastAnalyzed = verses!.filter(v => analyzedIds.has(v.id)).pop()
    console.log(`마지막 분석: ${lastAnalyzed?.reference}`)
  }

  // Check progress file
  if (fs.existsSync('galatians_progress.json')) {
    const progress = JSON.parse(fs.readFileSync('galatians_progress.json', 'utf-8'))
    console.log(`\n진행 파일:`)
    console.log(`  마지막 처리: ${progress.lastProcessed}`)
    console.log(`  성공: ${progress.successCount}`)
    console.log(`  실패: ${progress.failedCount}`)
    console.log(`  건너뛴: ${progress.skippedCount}`)
    console.log(`  시간: ${progress.timestamp}`)
  }

  // Check log file
  if (fs.existsSync('logs/galatians_analysis.log')) {
    const log = fs.readFileSync('logs/galatians_analysis.log', 'utf-8')
    const lines = log.split('\n').filter(l => l.includes('/')).slice(-5)
    if (lines.length > 0) {
      console.log(`\n최근 로그:`)
      lines.forEach(l => console.log(`  ${l.substring(0, 100)}`))
    }
  }

  console.log(`\n⏱️  예상 남은 시간: ${Math.round((total - complete) * 3 / 60)} 분`)
}

monitor().catch(console.error)