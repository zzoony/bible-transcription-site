import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function fixDuplicates() {
  console.log('🔍 Finding duplicates in Philippians 2:12...\n')

  const { data: verse } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('reference', 'Philippians 2:12')
    .single()

  if (!verse) {
    console.log('❌ Verse not found')
    return
  }

  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('*')
    .eq('verse_id', verse.id)
    .order('id')

  if (!structures) {
    console.log('❌ No structures found')
    return
  }

  console.log(`Found ${structures.length} structures\n`)

  // 각 sequence_order별로 가장 최근 것(큰 id)을 제외하고 삭제
  const sequenceGroups = new Map<number, any[]>()

  for (const s of structures) {
    if (!sequenceGroups.has(s.sequence_order)) {
      sequenceGroups.set(s.sequence_order, [])
    }
    sequenceGroups.get(s.sequence_order)!.push(s)
  }

  console.log('Duplicates by sequence_order:')
  let deletedCount = 0

  for (const [seqOrder, items] of sequenceGroups) {
    if (items.length > 1) {
      console.log(`\nSequence ${seqOrder}: ${items.length} items found`)

      // ID가 가장 큰 것(최신)을 제외하고 나머지 삭제
      const sortedItems = items.sort((a, b) => b.id - a.id)
      const toKeep = sortedItems[0]
      const toDelete = sortedItems.slice(1)

      console.log(`  ✅ Keeping ID ${toKeep.id}: "${toKeep.original_text.substring(0, 50)}..."`)

      for (const item of toDelete) {
        console.log(`  ❌ Deleting ID ${item.id}: "${item.original_text.substring(0, 50)}..."`)

        const { error } = await supabase
          .from('sentence_structures')
          .delete()
          .eq('id', item.id)

        if (error) {
          console.log(`     Error: ${error.message}`)
        } else {
          deletedCount++
        }
      }
    }
  }

  console.log(`\n✨ Deleted ${deletedCount} duplicate structures`)

  // 최종 확인
  const { data: finalStructures } = await supabase
    .from('sentence_structures')
    .select('*')
    .eq('verse_id', verse.id)
    .order('sequence_order')

  console.log(`\nFinal count: ${finalStructures?.length} structures`)
  finalStructures?.forEach(s => {
    console.log(`  Sequence ${s.sequence_order}: ${s.semantic_classification}`)
  })
}

fixDuplicates()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err)
    process.exit(1)
  })