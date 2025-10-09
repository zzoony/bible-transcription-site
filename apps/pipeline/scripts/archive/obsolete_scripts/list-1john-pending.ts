import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kmbndafjfxzbyokzqgno.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'

const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchPendingVerses() {
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', '1 John%')
    .order('reference')

  if (!verses) {
    console.log('No verses found')
    return
  }

  const verseIds = verses.map(v => v.id)
  const { data: analyzed } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const analyzedSet = new Set(analyzed?.map(a => a.verse_id) || [])
  const pending = verses.filter(v => !analyzedSet.has(v.id))

  console.log(`Total verses: ${verses.length}`)
  console.log(`Already analyzed: ${analyzedSet.size}`)
  console.log(`Pending: ${pending.length}\n`)

  console.log('Pending verses:')
  pending.forEach(v => {
    console.log(`\n[${v.id}] ${v.reference}`)
    console.log(`NIV: ${v.niv_text}`)
  })

  console.log('\n\nJSON format for easy processing:')
  console.log(JSON.stringify(pending, null, 2))
}

fetchPendingVerses().catch(console.error)
