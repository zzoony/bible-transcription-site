import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 .env 파일에 설정해주세요.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkDuplicates() {
  console.log('\n🔍 중복 데이터 검사 시작...\n')

  // 1. verses 테이블에서 reference별 개수 확인 (페이지네이션)
  let allVerses: any[] = []
  let offset = 0
  const pageSize = 1000

  console.log('📥 전체 verses 데이터 로드 중...')

  while (true) {
    const { data: verses, error } = await supabase
      .from('verses')
      .select('reference')
      .range(offset, offset + pageSize - 1)

    if (error) {
      console.error('❌ 조회 오류:', error)
      return
    }

    if (!verses || verses.length === 0) break

    allVerses = allVerses.concat(verses)
    console.log(`  ${allVerses.length}개 로드됨...`)

    if (verses.length < pageSize) break

    offset += pageSize
  }

  const verses = allVerses

  const refCounts: { [key: string]: number} = {}
  verses?.forEach((v: any) => {
    refCounts[v.reference] = (refCounts[v.reference] || 0) + 1
  })

  const duplicates = Object.entries(refCounts)
    .filter(([_, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])

  console.log(`📊 전체 구절 수: ${verses?.length}`)
  console.log(`📊 고유 구절 수: ${Object.keys(refCounts).length}`)
  console.log(`🔴 중복된 구절 수: ${duplicates.length}\n`)

  if (duplicates.length > 0) {
    console.log('🔴 중복 구절 목록 (상위 20개):\n')
    duplicates.slice(0, 20).forEach(([ref, count]) => {
      console.log(`  ${ref}: ${count}회 중복`)
    })

    console.log(`\n... 총 ${duplicates.length}개 중복 구절`)

    // 구약/신약 분리 확인
    const otDuplicates = duplicates.filter(([ref]) =>
      !ref.match(/^(Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation)/i)
    )
    const ntDuplicates = duplicates.filter(([ref]) =>
      ref.match(/^(Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation)/i)
    )

    console.log(`\n📖 구약 중복: ${otDuplicates.length}개`)
    console.log(`📖 신약 중복: ${ntDuplicates.length}개`)
  } else {
    console.log('✅ 중복 없음!')
  }

  // 2. analyses 테이블 중복 확인
  console.log('\n─────────────────────────────────────')
  console.log('📊 Analyses 테이블 중복 검사...\n')

  const { data: analyses, error: analysesError } = await supabase
    .from('analyses')
    .select('verse_id')

  if (analysesError) {
    console.error('❌ analyses 조회 오류:', analysesError)
    return
  }

  const analysisCounts: { [key: number]: number } = {}
  analyses?.forEach((a: any) => {
    analysisCounts[a.verse_id] = (analysisCounts[a.verse_id] || 0) + 1
  })

  const analysisDuplicates = Object.entries(analysisCounts)
    .filter(([_, count]) => count > 1)
    .sort((a, b) => b[1] - a[1])

  console.log(`📊 전체 분석 레코드 수: ${analyses?.length}`)
  console.log(`📊 고유 verse_id 수: ${Object.keys(analysisCounts).length}`)
  console.log(`🔴 중복된 분석: ${analysisDuplicates.length}\n`)

  if (analysisDuplicates.length > 0) {
    console.log('🔴 중복 분석 (상위 10개):\n')
    analysisDuplicates.slice(0, 10).forEach(([verseId, count]) => {
      console.log(`  verse_id ${verseId}: ${count}개 분석`)
    })
    console.log(`\n... 총 ${analysisDuplicates.length}개 중복 분석`)
  } else {
    console.log('✅ 분석 중복 없음!')
  }
}

checkDuplicates()
