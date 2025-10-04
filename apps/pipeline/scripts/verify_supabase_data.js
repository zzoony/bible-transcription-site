#!/usr/bin/env node

/**
 * Verify Supabase data integrity and quality
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function verifyTableCounts() {
  console.log('📊 Verifying table row counts...')

  const tables = [
    'books',
    'chapters',
    'verses',
    'sentence_structures',
    'vocabulary',
    'contextual_explanations',
    'korean_translations',
    'special_explanations'
  ]

  const results = {}

  for (const table of tables) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true })

      if (error) {
        results[table] = `❌ Error: ${error.message}`
      } else {
        results[table] = `✅ ${count} rows`
      }
    } catch (err) {
      results[table] = `❌ Exception: ${err.message}`
    }
  }

  console.log('\n📋 Table row counts:')
  Object.entries(results).forEach(([table, result]) => {
    console.log(`  ${table.padEnd(25)}: ${result}`)
  })

  return results
}

async function verifyPhilippiansData() {
  console.log('\n🔍 Verifying Philippians data structure...')

  try {
    // Check verses by chapter
    const { data: verses, error: versesError } = await supabase
      .from('verses')
      .select('chapter_id, COUNT(*)')
      .group('chapter_id')
      .order('chapter_id')

    if (versesError) {
      console.log('❌ Error checking verses:', versesError.message)
    } else {
      console.log('\n📖 Verses by chapter:')
      for (const row of verses) {
        const chapterNum = row.chapter_id === 1 ? 1 : row.chapter_id === 3 ? 3 : row.chapter_id === 4 ? 2 : row.chapter_id === 5 ? 3 : row.chapter_id === 6 ? 4 : 'Unknown'
        console.log(`  Chapter ${chapterNum} (id=${row.chapter_id}): ${row.count} verses`)
      }
    }

    // Check analysis completion
    const { data: analysisStatus, error: analysisError } = await supabase
      .from('verses')
      .select('analysis_completed, COUNT(*)')
      .group('analysis_completed')

    if (analysisError) {
      console.log('❌ Error checking analysis status:', analysisError.message)
    } else {
      console.log('\n📈 Analysis completion status:')
      for (const row of analysisStatus) {
        const status = row.analysis_completed ? 'Completed' : 'Pending'
        console.log(`  ${status}: ${row.count} verses`)
      }
    }

    // Sample data check
    const { data: sampleVerse, error: sampleError } = await supabase
      .from('verses')
      .select('id, reference, niv_text')
      .limit(3)

    if (sampleError) {
      console.log('❌ Error fetching sample:', sampleError.message)
    } else {
      console.log('\n📄 Sample verses:')
      for (const verse of sampleVerse) {
        console.log(`  ${verse.reference}: "${verse.niv_text.substring(0, 50)}..."`)
      }
    }

  } catch (error) {
    console.error('❌ Error verifying Philippians data:', error.message)
  }
}

async function verifyDataRelationships() {
  console.log('\n🔗 Verifying data relationships...')

  try {
    // Check verses with analysis data
    const { data: versesWithAnalysis, error } = await supabase
      .from('verses')
      .select(`
        id,
        reference,
        sentence_structures(count),
        vocabulary(count),
        contextual_explanations(count),
        korean_translations(count),
        special_explanations(count)
      `)
      .limit(5)

    if (error) {
      console.log('❌ Error checking relationships:', error.message)
    } else {
      console.log('\n🔄 Sample verse relationships:')
      for (const verse of versesWithAnalysis) {
        console.log(`  ${verse.reference}:`)
        console.log(`    - Sentence structures: ${verse.sentence_structures?.[0]?.count || 0}`)
        console.log(`    - Vocabulary: ${verse.vocabulary?.[0]?.count || 0}`)
        console.log(`    - Context explanations: ${verse.contextual_explanations?.[0]?.count || 0}`)
        console.log(`    - Korean translations: ${verse.korean_translations?.[0]?.count || 0}`)
        console.log(`    - Special explanations: ${verse.special_explanations?.[0]?.count || 0}`)
      }
    }

  } catch (error) {
    console.error('❌ Error verifying relationships:', error.message)
  }
}

async function testAPIQueries() {
  console.log('\n🧪 Testing API query performance...')

  const tests = [
    {
      name: 'Get all verses',
      query: () => supabase.from('verses').select('id, reference').limit(10)
    },
    {
      name: 'Get verse with full analysis',
      query: () => supabase
        .from('verses')
        .select(`
          *,
          sentence_structures(*),
          vocabulary(*),
          contextual_explanations(*),
          korean_translations(*),
          special_explanations(*)
        `)
        .eq('reference', 'Philippians 3:1')
        .single()
    },
    {
      name: 'Search verses by text',
      query: () => supabase
        .from('verses')
        .select('reference, niv_text')
        .ilike('niv_text', '%rejoice%')
        .limit(5)
    }
  ]

  for (const test of tests) {
    try {
      const startTime = Date.now()
      const { data, error } = await test.query()
      const duration = Date.now() - startTime

      if (error) {
        console.log(`❌ ${test.name}: Error - ${error.message}`)
      } else {
        const count = Array.isArray(data) ? data.length : 1
        console.log(`✅ ${test.name}: ${count} results in ${duration}ms`)
      }
    } catch (err) {
      console.log(`❌ ${test.name}: Exception - ${err.message}`)
    }
  }
}

async function main() {
  console.log('🔍 Starting Supabase data verification...')
  console.log(`🎯 Target: ${supabaseUrl}\n`)

  try {
    // Step 1: Verify table counts
    const counts = await verifyTableCounts()

    // Step 2: Verify Philippians-specific data
    await verifyPhilippiansData()

    // Step 3: Verify relationships
    await verifyDataRelationships()

    // Step 4: Test API performance
    await testAPIQueries()

    console.log('\n🎉 Data verification completed!')

    // Summary
    const totalRows = Object.values(counts)
      .filter(result => result.includes('rows'))
      .reduce((sum, result) => {
        const match = result.match(/(\d+) rows/)
        return sum + (match ? parseInt(match[1]) : 0)
      }, 0)

    console.log(`\n📊 Summary:`)
    console.log(`  Total rows across all tables: ${totalRows}`)
    console.log(`  Migration: ${totalRows > 0 ? '✅ Success' : '❌ Failed'}`)

  } catch (error) {
    console.error('💥 Verification failed:', error.message)
    process.exit(1)
  }
}

main()