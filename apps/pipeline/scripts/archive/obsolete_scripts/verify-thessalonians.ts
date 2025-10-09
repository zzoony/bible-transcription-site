import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

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

async function verify() {
  console.log('🔍 1 Thessalonians 분석 완성도 검증\n')
  console.log('📖 대상: 1 Thessalonians\n')

  // Get all 1 Thessalonians verses
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', '1 Thessalonians%')
    .order('id')

  if (!verses || verses.length === 0) {
    console.log('❌ 1 Thessalonians 구절을 찾을 수 없습니다')
    return
  }

  console.log(`📊 통계`)
  console.log('='.repeat(80))
  console.log(`총 구절: ${verses.length}`)

  // Check sentence structures
  const verseIds = verses.map(v => v.id)
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const versesWithStructures = new Set(structures?.map(s => s.verse_id) || [])
  const complete = versesWithStructures.size
  const missing = verses.filter(v => !versesWithStructures.has(v.id))

  console.log(`✅ 완성: ${complete}`)
  console.log(`❌ 문장구조 없음: ${missing.length}`)

  if (missing.length > 0) {
    console.log(`\n⚠️  누락된 구절들:`)
    missing.forEach(v => console.log(`  - ${v.reference}`))
  }

  // Check for duplicates
  console.log(`\n🔄 중복 검사`)
  console.log('='.repeat(80))

  const duplicateCheck = await supabase
    .from('sentence_structures')
    .select('verse_id, sequence_order, id')
    .in('verse_id', verseIds)
    .order('verse_id')
    .order('sequence_order')

  const duplicateMap = new Map<string, number>()
  duplicateCheck.data?.forEach(item => {
    const key = `${item.verse_id}-${item.sequence_order}`
    duplicateMap.set(key, (duplicateMap.get(key) || 0) + 1)
  })

  const hasDuplicates = Array.from(duplicateMap.values()).some(count => count > 1)

  if (hasDuplicates) {
    console.log('❌ 중복 발견!')
    duplicateMap.forEach((count, key) => {
      if (count > 1) {
        const [verseId, seqOrder] = key.split('-')
        const verse = verses.find(v => v.id === parseInt(verseId))
        console.log(`  - ${verse?.reference} sequence_order ${seqOrder}: ${count}개`)
      }
    })
  } else {
    console.log('✅ 중복 없음')
  }

  // Check data quality
  console.log(`\n📝 데이터 품질 검사`)
  console.log('='.repeat(80))

  // Empty strings
  const { data: emptyStrings } = await supabase
    .from('sentence_structures')
    .select('id, verse_id')
    .in('verse_id', verseIds)
    .or('original_text.eq.,korean_translation.eq.')

  console.log(`빈 문자열: ${emptyStrings?.length || 0}개`)

  // NULL values
  const { data: nullValues } = await supabase
    .from('sentence_structures')
    .select('id, verse_id')
    .in('verse_id', verseIds)
    .or('original_text.is.null,korean_translation.is.null')

  console.log(`NULL 값: ${nullValues?.length || 0}개`)

  // Check vocabulary completeness
  const { data: vocabCount } = await supabase
    .from('vocabulary')
    .select('verse_id')
    .in('verse_id', verseIds)

  const versesWithVocab = new Set(vocabCount?.map(v => v.verse_id) || [])
  console.log(`어휘 있는 구절: ${versesWithVocab.size}/${verses.length}`)

  // Check contextual explanations
  const { data: contextCount } = await supabase
    .from('contextual_explanations')
    .select('verse_id')
    .in('verse_id', verseIds)

  console.log(`문맥설명 있는 구절: ${contextCount?.length || 0}/${verses.length}`)

  // Check Korean translations
  const { data: translationCount } = await supabase
    .from('korean_translations')
    .select('verse_id')
    .in('verse_id', verseIds)

  console.log(`한국어 번역 있는 구절: ${translationCount?.length || 0}/${verses.length}`)

  // Final verdict
  console.log('\n' + '='.repeat(80))
  if (missing.length === 0 && !hasDuplicates &&
      (emptyStrings?.length || 0) === 0 && (nullValues?.length || 0) === 0) {
    console.log('✅ ✅ ✅  모든 구절 완료! ✅ ✅ ✅')
  } else {
    console.log('⚠️  문제 발견. 위 내용 확인 필요')
  }
  console.log('='.repeat(80))
}

verify().catch(console.error)
