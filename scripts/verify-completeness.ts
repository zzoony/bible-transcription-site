import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

interface VerseWithStructures {
  id: number
  reference: string
  niv_text: string
  structure_count: number
}

interface MissingStructure {
  reference: string
  niv_text: string
  structure_count: number
  missing_text?: string
}

async function verifyCompleteness(bookName?: string) {
  console.log('🔍 Verifying Bible Analysis Completeness\n')

  if (bookName) {
    console.log(`📖 Book: ${bookName}\n`)
  } else {
    console.log('📖 Checking all books\n')
  }

  // Build query
  let query = supabase
    .from('verses')
    .select(`
      id,
      reference,
      niv_text,
      sentence_structures(id)
    `)
    .order('id')

  if (bookName) {
    query = query.ilike('reference', `${bookName}%`)
  }

  const { data: verses, error } = await query

  if (error) {
    console.error('❌ Error fetching verses:', error)
    return
  }

  // Process results
  const results: VerseWithStructures[] = verses.map((v: any) => ({
    id: v.id,
    reference: v.reference,
    niv_text: v.niv_text,
    structure_count: v.sentence_structures?.length || 0
  }))

  // Find verses without structures
  const missing = results.filter(v => v.structure_count === 0)

  // Find verses with suspicious structure counts
  const suspicious: MissingStructure[] = []
  for (const verse of results.filter(v => v.structure_count > 0)) {
    const sentenceCount = countSentences(verse.niv_text)
    const structureCount = verse.structure_count

    // If sentence count > structure count, might be missing
    if (sentenceCount > structureCount) {
      suspicious.push({
        reference: verse.reference,
        niv_text: verse.niv_text,
        structure_count: structureCount,
        missing_text: `Expected ~${sentenceCount} sentences, found ${structureCount} structures`
      })
    }
  }

  // Statistics
  console.log('📊 Statistics')
  console.log('='.repeat(60))
  console.log(`Total verses: ${results.length}`)
  console.log(`✅ Complete: ${results.length - missing.length - suspicious.length}`)
  console.log(`❌ Missing all structures: ${missing.length}`)
  console.log(`⚠️  Potentially incomplete: ${suspicious.length}`)
  console.log()

  // Report missing verses
  if (missing.length > 0) {
    console.log('❌ Verses WITHOUT any structures:')
    console.log('='.repeat(60))
    missing.forEach(v => {
      console.log(`  ${v.reference}`)
      console.log(`    Text: "${v.niv_text.substring(0, 60)}..."`)
    })
    console.log()
  }

  // Report suspicious verses
  if (suspicious.length > 0) {
    console.log('⚠️  Verses with POTENTIALLY INCOMPLETE structures:')
    console.log('='.repeat(60))
    suspicious.slice(0, 10).forEach(v => {
      console.log(`  ${v.reference}`)
      console.log(`    ${v.missing_text}`)
      console.log(`    Text: "${v.niv_text.substring(0, 80)}..."`)
      console.log()
    })

    if (suspicious.length > 10) {
      console.log(`  ... and ${suspicious.length - 10} more`)
      console.log()
    }
  }

  // Final verdict
  console.log('='.repeat(60))
  if (missing.length === 0 && suspicious.length === 0) {
    console.log('✅ ✅ ✅  ALL VERSES COMPLETE! ✅ ✅ ✅')
  } else {
    console.log(`⚠️  ISSUES FOUND: ${missing.length + suspicious.length} verses need attention`)
    console.log()
    console.log('Recommended actions:')
    if (missing.length > 0) {
      console.log(`  1. Run analysis for ${missing.length} missing verses`)
    }
    if (suspicious.length > 0) {
      console.log(`  2. Manual review of ${suspicious.length} potentially incomplete verses`)
    }
  }
  console.log('='.repeat(60))
}

function countSentences(text: string): number {
  // Count sentences by periods, exclamation marks, question marks
  // This is a rough estimate
  const matches = text.match(/[.!?]+/g)
  return matches ? matches.length : 1
}

// Parse command line arguments
const args = process.argv.slice(2)
const bookArg = args.find(arg => arg.startsWith('--book='))
const bookName = bookArg ? bookArg.split('=')[1] : undefined

verifyCompleteness(bookName)
  .then(() => process.exit(0))
  .catch(err => {
    console.error('💥 Fatal error:', err)
    process.exit(1)
  })