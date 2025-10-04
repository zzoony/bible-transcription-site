#!/usr/bin/env node

/**
 * Automated Supabase Migration Script
 * Handles chapter_id mapping and data upload automatically
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Helper function to parse CSV
function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n')
  const headers = lines[0].split(',')

  return lines.slice(1).map(line => {
    const values = []
    let inQuotes = false
    let currentValue = ''

    for (let i = 0; i < line.length; i++) {
      const char = line[i]

      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim())
        currentValue = ''
      } else {
        currentValue += char
      }
    }
    values.push(currentValue.trim())

    const row = {}
    headers.forEach((header, index) => {
      let value = values[index] || ''

      // Remove quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }

      // Convert numeric strings to numbers for specific fields
      if (['id', 'book_id', 'chapter_id', 'verse_number', 'verse_id'].includes(header)) {
        row[header] = value ? parseInt(value) : null
      } else if (header === 'analysis_completed') {
        row[header] = value === 't' || value === 'true'
      } else {
        row[header] = value
      }
    })

    return row
  })
}

async function fixChapterIds() {
  console.log('🔧 Fixing chapter IDs to match local database...')

  try {
    // Update in reverse order to avoid conflicts
    const updates = [
      { from: 4, to: 6 }, // Chapter 4 -> id 6
      { from: 3, to: 5 }, // Chapter 3 -> id 5
      { from: 2, to: 4 }  // Chapter 2 -> id 4
    ]

    for (const update of updates) {
      const { error } = await supabase
        .from('chapters')
        .update({ id: update.to })
        .eq('chapter_number', update.from)
        .eq('book_id', 1)

      if (error) {
        console.log(`⚠️  Warning updating chapter ${update.from}:`, error.message)
      } else {
        console.log(`✅ Updated chapter ${update.from} to id ${update.to}`)
      }
    }

    console.log('✅ Chapter ID mapping completed')

  } catch (error) {
    console.error('❌ Error fixing chapter IDs:', error.message)
    throw error
  }
}

async function uploadCSVData(tableName, csvPath) {
  console.log(`\n📤 Uploading ${tableName} data...`)

  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8')
    const data = parseCSV(csvContent)

    console.log(`📊 Parsed ${data.length} rows for ${tableName}`)

    // Upload in batches of 100
    const batchSize = 100
    let successCount = 0
    let errorCount = 0

    for (let i = 0; i < data.length; i += batchSize) {
      const batch = data.slice(i, i + batchSize)

      const { data: insertedData, error } = await supabase
        .from(tableName)
        .upsert(batch, {
          onConflict: 'id',
          ignoreDuplicates: false
        })

      if (error) {
        console.log(`❌ Batch ${Math.floor(i / batchSize) + 1} error:`, error.message)
        errorCount += batch.length
      } else {
        successCount += batch.length
        console.log(`✅ Batch ${Math.floor(i / batchSize) + 1} uploaded successfully`)
      }
    }

    console.log(`📊 ${tableName} Summary: ${successCount} success, ${errorCount} errors`)
    return { successCount, errorCount }

  } catch (error) {
    console.error(`❌ Error uploading ${tableName}:`, error.message)
    throw error
  }
}

async function verifyData() {
  console.log('\n🔍 Verifying uploaded data...')

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
      const { data, error } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true })

      if (error) {
        results[table] = `Error: ${error.message}`
      } else {
        results[table] = `${data?.length || 0} rows`
      }
    } catch (err) {
      results[table] = `Error: ${err.message}`
    }
  }

  console.log('\n📊 Data verification results:')
  Object.entries(results).forEach(([table, count]) => {
    console.log(`  ${table}: ${count}`)
  })
}

async function main() {
  console.log('🚀 Starting automated Supabase migration...')
  console.log(`🔗 Target: ${supabaseUrl}`)

  try {
    // Step 1: Fix chapter IDs
    await fixChapterIds()

    // Step 2: Upload CSV files in correct order
    const dataDir = path.join(__dirname, '..', 'temp', 'supabase_data')

    const uploadSequence = [
      { table: 'verses', file: 'philippians_verses.csv' },
      { table: 'sentence_structures', file: 'philippians_sentence_structures.csv' },
      { table: 'vocabulary', file: 'philippians_vocabulary.csv' },
      { table: 'contextual_explanations', file: 'philippians_contextual_explanations.csv' },
      { table: 'korean_translations', file: 'philippians_korean_translations.csv' },
      { table: 'special_explanations', file: 'philippians_special_explanations.csv' }
    ]

    let totalSuccess = 0
    let totalErrors = 0

    for (const { table, file } of uploadSequence) {
      const csvPath = path.join(dataDir, file)

      if (fs.existsSync(csvPath)) {
        const result = await uploadCSVData(table, csvPath)
        totalSuccess += result.successCount
        totalErrors += result.errorCount
      } else {
        console.log(`⚠️  File not found: ${csvPath}`)
      }
    }

    // Step 3: Verify all data
    await verifyData()

    console.log(`\n🎉 Migration completed!`)
    console.log(`📊 Total: ${totalSuccess} success, ${totalErrors} errors`)

    if (totalErrors === 0) {
      console.log('✅ All data migrated successfully!')
    } else {
      console.log('⚠️  Some errors occurred, please check the logs above')
    }

  } catch (error) {
    console.error('💥 Migration failed:', error.message)
    process.exit(1)
  }
}

main()