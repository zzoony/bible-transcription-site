import { createClient } from '@supabase/supabase-js'
import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

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

// 진행 상황 파일
const progressFile = path.resolve(__dirname, '../progress-2cor.json')

interface Progress {
  completed: string[]
  failed: string[]
  lastProcessed?: string
}

function loadProgress(): Progress {
  if (fs.existsSync(progressFile)) {
    return JSON.parse(fs.readFileSync(progressFile, 'utf-8'))
  }
  return { completed: [], failed: [] }
}

function saveProgress(progress: Progress) {
  fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2))
}

async function get2CorinthiansVerses() {
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Corinthians')
    .single()

  if (!book) throw new Error('2 Corinthians 책을 찾을 수 없습니다')

  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text, analysis_completed')
    .eq('book_id', book.id)
    .order('reference', { ascending: true })

  if (error) throw error
  return verses || []
}

async function analyzeVerse(reference: string, nivText: string): Promise<AnalysisData> {
  console.log(`\n🔍 ${reference} 분석 중...`)

  // 이 함수는 실제로 Claude Code Agent가 직접 각 구절을 분석합니다
  // 여기서는 구조만 제공하고, 실제 분석 내용은 Agent가 생성합니다

  throw new Error('이 함수는 직접 호출되지 않습니다. 배치 스크립트를 사용하세요.')
}

async function main() {
  console.log('📖 2 Corinthians 전체 분석 시작...\n')

  const verses = await get2CorinthiansVerses()
  const progress = loadProgress()

  console.log(`총 구절 수: ${verses.length}`)
  console.log(`이미 완료: ${progress.completed.length}`)
  console.log(`실패: ${progress.failed.length}`)
  console.log(`남은 구절: ${verses.length - progress.completed.length}\n`)

  const pending = verses.filter(v =>
    !progress.completed.includes(v.reference) &&
    !v.analysis_completed
  )

  console.log('⏳ 미완료 구절 목록:')
  pending.forEach((v, i) => {
    if (i < 10) {
      console.log(`  ${i + 1}. ${v.reference}`)
    }
  })
  if (pending.length > 10) {
    console.log(`  ... 그 외 ${pending.length - 10}개`)
  }

  console.log('\n⚠️  이 스크립트는 진행 상황 확인용입니다.')
  console.log('실제 분석은 배치 스크립트를 사용하세요:')
  console.log('  - scripts/batch-save-2cor-X-Y.ts 형식으로 작성')
  console.log('  - 10-20개 구절씩 배치로 처리 권장')
}

main()
