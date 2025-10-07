import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 .env 파일에 설정해주세요.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function verifyAllData() {
  console.log('\n' + '='.repeat(60))
  console.log('📊 전체 성경 데이터 검증')
  console.log('='.repeat(60) + '\n')

  // 1. Books 확인
  console.log('1️⃣ Books 테이블 확인...\n')
  const { data: books, error: booksError } = await supabase
    .from('books')
    .select('id, name_english, testament')
    .order('testament', { ascending: true })
    .order('id', { ascending: true })

  if (booksError) {
    console.error('❌ Books 조회 오류:', booksError)
    return
  }

  const otBooks = books?.filter(b => b.testament === 1) || []
  const ntBooks = books?.filter(b => b.testament === 2) || []

  console.log(`총 ${books?.length}권`)
  console.log(`  구약: ${otBooks.length}권 ${otBooks.length === 39 ? '✅' : '❌ (예상: 39권)'}`)
  console.log(`  신약: ${ntBooks.length}권 ${ntBooks.length === 27 ? '✅' : '❌ (예상: 27권)'}`)

  // 2. Verses 확인 (페이지네이션)
  console.log('\n2️⃣ Verses 테이블 확인...\n')

  let allVerses: any[] = []
  let offset = 0
  const pageSize = 1000

  console.log('  전체 verses 로딩 중...')
  while (true) {
    const { data: verses, error } = await supabase
      .from('verses')
      .select('id, reference, book_id, analysis_completed')
      .range(offset, offset + pageSize - 1)

    if (error) {
      console.error('  ❌ Verses 조회 오류:', error)
      break
    }

    if (!verses || verses.length === 0) break

    allVerses = allVerses.concat(verses)
    process.stdout.write(`\r  ${allVerses.length}개 로드됨...`)

    if (verses.length < pageSize) break
    offset += pageSize
  }

  console.log(`\n  총 ${allVerses.length}개 구절`)

  // 3. Analysis_completed 확인
  const analyzedVerses = allVerses.filter(v => v.analysis_completed)
  const unanalyzedVerses = allVerses.filter(v => !v.analysis_completed)

  console.log(`  분석 완료: ${analyzedVerses.length}/${allVerses.length} (${((analyzedVerses.length / allVerses.length) * 100).toFixed(2)}%)`)

  if (unanalyzedVerses.length > 0) {
    console.log(`  ⚠️  미분석 구절: ${unanalyzedVerses.length}개`)
    console.log('\n  미분석 구절 샘플 (최대 10개):')
    unanalyzedVerses.slice(0, 10).forEach(v => {
      console.log(`    - ${v.reference}`)
    })
  } else {
    console.log('  ✅ 모든 구절 분석 완료!')
  }

  // 4. Analyses 테이블 확인
  console.log('\n3️⃣ Analyses 테이블 확인...\n')

  let allAnalyses: any[] = []
  offset = 0

  console.log('  전체 analyses 로딩 중...')
  while (true) {
    const { data: analyses, error } = await supabase
      .from('analyses')
      .select('id, verse_id')
      .range(offset, offset + pageSize - 1)

    if (error) {
      console.error('  ❌ Analyses 조회 오류:', error)
      break
    }

    if (!analyses || analyses.length === 0) break

    allAnalyses = allAnalyses.concat(analyses)
    process.stdout.write(`\r  ${allAnalyses.length}개 로드됨...`)

    if (analyses.length < pageSize) break
    offset += pageSize
  }

  console.log(`\n  총 ${allAnalyses.length}개 분석`)

  // 5. 중복 확인
  const verseIdCounts: { [key: number]: number } = {}
  allAnalyses.forEach(a => {
    verseIdCounts[a.verse_id] = (verseIdCounts[a.verse_id] || 0) + 1
  })

  const duplicates = Object.entries(verseIdCounts).filter(([_, count]) => count > 1)

  if (duplicates.length > 0) {
    console.log(`  ⚠️  중복 분석: ${duplicates.length}개 verse_id`)
    console.log('\n  중복 샘플 (최대 10개):')
    duplicates.slice(0, 10).forEach(([verseId, count]) => {
      console.log(`    - verse_id ${verseId}: ${count}회 중복`)
    })
  } else {
    console.log('  ✅ 중복 분석 없음!')
  }

  // 6. 구약/신약 분석 통계
  console.log('\n4️⃣ 구약/신약 분석 통계...\n')

  const otVerses = allVerses.filter(v => {
    const book = books?.find(b => b.id === v.book_id)
    return book?.testament === 1
  })

  const ntVerses = allVerses.filter(v => {
    const book = books?.find(b => b.id === v.book_id)
    return book?.testament === 2
  })

  const otAnalyzed = otVerses.filter(v => v.analysis_completed).length
  const ntAnalyzed = ntVerses.filter(v => v.analysis_completed).length

  console.log(`구약:`)
  console.log(`  전체: ${otVerses.length}개 구절`)
  console.log(`  분석 완료: ${otAnalyzed}/${otVerses.length} (${((otAnalyzed / otVerses.length) * 100).toFixed(2)}%)`)

  console.log(`\n신약:`)
  console.log(`  전체: ${ntVerses.length}개 구절`)
  console.log(`  분석 완료: ${ntAnalyzed}/${ntVerses.length} (${((ntAnalyzed / ntVerses.length) * 100).toFixed(2)}%)`)

  // 7. 최종 요약
  console.log('\n' + '='.repeat(60))
  console.log('📋 최종 요약')
  console.log('='.repeat(60))
  console.log(`총 성경책: ${books?.length}/66권 ${books?.length === 66 ? '✅' : '❌'}`)
  console.log(`총 구절: ${allVerses.length}개`)
  console.log(`분석 완료: ${analyzedVerses.length}/${allVerses.length} (${((analyzedVerses.length / allVerses.length) * 100).toFixed(2)}%)`)
  console.log(`분석 데이터: ${allAnalyses.length}개`)
  console.log(`중복 분석: ${duplicates.length}개 ${duplicates.length === 0 ? '✅' : '⚠️'}`)
  console.log(`미분석 구절: ${unanalyzedVerses.length}개 ${unanalyzedVerses.length === 0 ? '✅' : '⚠️'}`)
  console.log('='.repeat(60) + '\n')
}

verifyAllData()
