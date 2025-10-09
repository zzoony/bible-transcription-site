import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

async function findMissing() {
  console.log('🔍 Finding missing sentence structures...\n')

  // Get all Philippians verses
  const { data: allVerses } = await supabase
    .from('verses')
    .select('id, reference')
    .like('reference', 'Philippians %')
    .order('reference')

  if (!allVerses) {
    console.error('No verses found')
    return
  }

  console.log(`Total verses: ${allVerses.length}`)

  // Check each verse for sentence structures
  const verseIds = allVerses.map(v => v.id)
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('verse_id, sequence_order, semantic_classification')
    .in('verse_id', verseIds)

  const versesWithStructures = new Set(structures?.map(s => s.verse_id) || [])

  console.log(`Verses with structures: ${versesWithStructures.size}`)
  console.log(`Verses WITHOUT structures: ${allVerses.length - versesWithStructures.size}\n`)

  // Find verses without any structures
  const missingVerses = allVerses.filter(v => !versesWithStructures.has(v.id))

  if (missingVerses.length > 0) {
    console.log('❌ Verses COMPLETELY missing structures:')
    missingVerses.forEach(v => console.log(`  - ${v.reference} (id: ${v.id})`))
  }

  // Check Priority 1 specific verses
  console.log('\n📋 Checking Priority 1 verses:')
  const priority1 = ['Philippians 1:7', 'Philippians 1:27', 'Philippians 3:8']

  for (const ref of priority1) {
    const verse = allVerses.find(v => v.reference === ref)
    if (!verse) {
      console.log(`  ❌ ${ref}: Verse not found in database`)
      continue
    }

    const verseStructures = structures?.filter(s => s.verse_id === verse.id) || []
    console.log(`  ${ref} (id: ${verse.id}): ${verseStructures.length} structures`)

    // Check for specific sequence_order gaps
    const sequences = verseStructures.map(s => s.sequence_order).sort((a, b) => a - b)
    console.log(`    Sequences: [${sequences.join(', ')}]`)

    // Check if we're missing any sequences
    if (sequences.length > 0) {
      const maxSeq = Math.max(...sequences)
      const missing = []
      for (let i = 1; i <= maxSeq; i++) {
        if (!sequences.includes(i)) {
          missing.push(i)
        }
      }
      if (missing.length > 0) {
        console.log(`    ⚠️  Missing sequences: [${missing.join(', ')}]`)
      }
    }
  }

  // Check for NULL semantic_classification
  console.log('\n📋 Checking for NULL semantic_classification:')
  const nullClassification = structures?.filter(s => !s.semantic_classification || s.semantic_classification === null) || []

  if (nullClassification.length > 0) {
    console.log(`  ❌ Found ${nullClassification.length} structures with NULL classification`)
    nullClassification.forEach(s => {
      const verse = allVerses.find(v => v.id === s.verse_id)
      console.log(`    - ${verse?.reference} (seq ${s.sequence_order})`)
    })
  } else {
    console.log('  ✅ All structures have semantic_classification')
  }

  // Get verse counts by chapter
  console.log('\n📊 Verse counts by chapter:')
  const chapters = {
    '1': allVerses.filter(v => v.reference.includes('Philippians 1:')),
    '2': allVerses.filter(v => v.reference.includes('Philippians 2:')),
    '3': allVerses.filter(v => v.reference.includes('Philippians 3:')),
    '4': allVerses.filter(v => v.reference.includes('Philippians 4:'))
  }

  for (const [ch, verses] of Object.entries(chapters)) {
    const versesWithData = verses.filter(v => versesWithStructures.has(v.id))
    console.log(`  Chapter ${ch}: ${versesWithData.length}/${verses.length} verses have structures`)

    const missing = verses.filter(v => !versesWithStructures.has(v.id))
    if (missing.length > 0) {
      console.log(`    Missing: ${missing.map(v => v.reference.split(':')[1]).join(', ')}`)
    }
  }
}

findMissing().then(() => process.exit(0)).catch(err => {
  console.error('Error:', err)
  process.exit(1)
})