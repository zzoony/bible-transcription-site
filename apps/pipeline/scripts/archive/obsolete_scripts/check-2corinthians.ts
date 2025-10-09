import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

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

async function check2Corinthians() {
  console.log('📊 2 Corinthians 상태 확인 중...\n')

  // book_id 먼저 조회
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Corinthians')
    .single()

  if (!book) {
    console.log('❌ 2 Corinthians 책을 찾을 수 없습니다.')
    return
  }

  // 전체 구절 수 확인
  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text, analysis_completed')
    .eq('book_id', book.id)
    .order('reference', { ascending: true })

  if (error) {
    console.error('❌ 오류:', error)
    return
  }

  if (!verses || verses.length === 0) {
    console.log('❌ 2 Corinthians 구절이 없습니다. NIV 텍스트를 먼저 추가해야 합니다.')
    return
  }

  const total = verses.length
  const completed = verses.filter(v => v.analysis_completed).length
  const pending = total - completed

  console.log(`📖 총 구절: ${total}`)
  console.log(`✅ 완료: ${completed}`)
  console.log(`⏳ 대기: ${pending}`)
  console.log(`📈 진행률: ${((completed / total) * 100).toFixed(1)}%\n`)

  // 미완료 구절 샘플 출력
  if (pending > 0) {
    const pendingVerses = verses.filter(v => !v.analysis_completed)
    console.log('⏳ 미완료 구절 (처음 5개):')
    pendingVerses.slice(0, 5).forEach(v => {
      const preview = v.niv_text.slice(0, 60) + (v.niv_text.length > 60 ? '...' : '')
      console.log(`  - ${v.reference}: "${preview}"`)
    })
    console.log()
  }

  // 완료 구절 샘플 출력
  if (completed > 0) {
    const completedVerses = verses.filter(v => v.analysis_completed)
    console.log('✅ 완료 구절 (처음 3개):')
    completedVerses.slice(0, 3).forEach(v => {
      console.log(`  - ${v.reference}`)
    })
    console.log()
  }
}

check2Corinthians()
