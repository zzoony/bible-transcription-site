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

async function fixDuplicates() {
  console.log('🔧 Galatians 중복 데이터 제거\n')

  // Get all Galatians verses
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Galatians%')
    .order('id')

  if (!verses || verses.length === 0) {
    console.log('❌ Galatians 구절을 찾을 수 없습니다')
    return
  }

  const verseIds = verses.map(v => v.id)

  // Get all sentence structures for Galatians
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('id, verse_id, sequence_order')
    .in('verse_id', verseIds)
    .order('verse_id')
    .order('sequence_order')
    .order('id')

  if (!structures || structures.length === 0) {
    console.log('✅ 문장구조 데이터 없음')
    return
  }

  // Group by verse_id and sequence_order
  const groups = new Map<string, number[]>()
  structures.forEach(s => {
    const key = `${s.verse_id}-${s.sequence_order}`
    if (!groups.has(key)) {
      groups.set(key, [])
    }
    groups.get(key)!.push(s.id)
  })

  // Find duplicates
  const duplicateGroups = Array.from(groups.entries()).filter(([_, ids]) => ids.length > 1)

  if (duplicateGroups.length === 0) {
    console.log('✅ 중복 없음')
    return
  }

  console.log(`⚠️  ${duplicateGroups.length}개 중복 그룹 발견\n`)

  let totalDeleted = 0

  for (const [key, ids] of duplicateGroups) {
    const [verseId, seqOrder] = key.split('-').map(Number)
    const verse = verses.find(v => v.id === verseId)

    console.log(`처리 중: ${verse?.reference} sequence_order ${seqOrder}`)
    console.log(`  ID들: ${ids.join(', ')}`)

    // Keep the highest ID (most recent), delete others
    const toKeep = Math.max(...ids)
    const toDelete = ids.filter(id => id !== toKeep)

    console.log(`  유지: ${toKeep}`)
    console.log(`  삭제: ${toDelete.join(', ')}`)

    const { error } = await supabase
      .from('sentence_structures')
      .delete()
      .in('id', toDelete)

    if (error) {
      console.error(`  ❌ 삭제 오류: ${error.message}`)
    } else {
      console.log(`  ✅ ${toDelete.length}개 삭제 완료`)
      totalDeleted += toDelete.length
    }
  }

  console.log(`\n✅ 총 ${totalDeleted}개 중복 레코드 삭제 완료`)
  console.log('\n다시 verify-galatians.ts를 실행하여 확인하세요.')
}

fixDuplicates().catch(console.error)