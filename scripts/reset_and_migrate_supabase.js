#!/usr/bin/env node

/**
 * Complete Supabase Reset and Migration
 * 1. Execute schema reset
 * 2. Migrate all data
 * 3. Verify results
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

// Helper function to execute SQL
async function executeSQL(sql, description) {
  console.log(`🔧 ${description}...`)

  try {
    const { data, error } = await supabase.rpc('exec_sql', { query: sql })

    if (error) {
      console.log(`⚠️  ${description} warning:`, error.message)
      return false
    } else {
      console.log(`✅ ${description} completed`)
      return true
    }
  } catch (err) {
    console.log(`❌ ${description} error:`, err.message)
    return false
  }
}

// Parse CSV with proper handling of quotes and commas
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
        if (inQuotes && line[i + 1] === '"') {
          // Handle escaped quotes
          currentValue += '"'
          i++ // Skip next quote
        } else {
          inQuotes = !inQuotes
        }
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

      // Remove surrounding quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }

      // Convert types
      if (['id', 'book_id', 'chapter_id', 'verse_id', 'verse_number', 'sequence_order', 'testament', 'order_number', 'total_chapters', 'total_verses', 'frequency'].includes(header)) {
        row[header] = value ? parseInt(value) : null
      } else if (header === 'analysis_completed') {
        row[header] = value === 't' || value === 'true'
      } else if (header === 'cross_references') {
        // Handle array field
        row[header] = value ? value.split(',').map(s => s.trim()) : []
      } else if (header === 'examples') {
        // Handle JSONB field
        try {
          row[header] = value ? JSON.parse(value) : []
        } catch {
          row[header] = []
        }
      } else {
        row[header] = value
      }
    })

    return row
  })
}

async function resetSchema() {
  console.log('🔄 Resetting Supabase schema...')

  const schemaPath = path.join(__dirname, 'supabase_exact_schema.sql')
  const schemaSQL = fs.readFileSync(schemaPath, 'utf8')

  // Split into smaller statements for better execution
  const statements = schemaSQL
    .split(';')
    .map(stmt => stmt.trim())
    .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))

  console.log(`📊 Executing ${statements.length} SQL statements...`)

  let successCount = 0
  let errorCount = 0

  for (const [index, statement] of statements.entries()) {
    if (statement.trim()) {
      const success = await executeSQL(statement + ';', `Statement ${index + 1}`)
      if (success) {
        successCount++
      } else {
        errorCount++
      }
    }
  }

  console.log(`📊 Schema reset: ${successCount} success, ${errorCount} errors`)
  return errorCount === 0
}

async function uploadTableData(tableName, csvPath) {
  console.log(`\n📤 Uploading ${tableName}...`)

  if (!fs.existsSync(csvPath)) {
    console.log(`⚠️  File not found: ${csvPath}`)
    return { successCount: 0, errorCount: 0 }
  }

  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8')
    const data = parseCSV(csvContent)

    console.log(`📊 Parsed ${data.length} rows for ${tableName}`)

    if (data.length === 0) {
      console.log(`⚠️  No data to upload for ${tableName}`)
      return { successCount: 0, errorCount: 0 }
    }

    // Upload in smaller batches
    const batchSize = 50
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
        console.log(`❌ Batch ${Math.floor(i / batchSize) + 1} error:`, error.message.substring(0, 100))
        errorCount += batch.length
      } else {
        successCount += batch.length
        console.log(`✅ Batch ${Math.floor(i / batchSize) + 1} uploaded (${batch.length} rows)`)
      }
    }

    console.log(`📊 ${tableName}: ${successCount} success, ${errorCount} errors`)
    return { successCount, errorCount }

  } catch (error) {
    console.error(`❌ Error uploading ${tableName}:`, error.message)
    return { successCount: 0, errorCount: data?.length || 0 }
  }
}

async function verifyMigration() {
  console.log('\n🔍 Verifying migration results...')

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

  for (const table of tables) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true })

      if (error) {
        console.log(`❌ ${table}: Error - ${error.message}`)
      } else {
        console.log(`✅ ${table}: ${count} rows`)
      }
    } catch (err) {
      console.log(`❌ ${table}: ${err.message}`)
    }
  }
}

async function main() {
  console.log('🚀 Starting complete Supabase reset and migration...')
  console.log(`🎯 Target: ${supabaseUrl}\n`)

  try {
    // Step 1: Reset schema
    const schemaSuccess = await resetSchema()
    if (!schemaSuccess) {
      console.log('⚠️  Schema reset had errors, but continuing...')
    }

    // Step 2: Upload data in correct order
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
      const result = await uploadTableData(table, csvPath)
      totalSuccess += result.successCount
      totalErrors += result.errorCount
    }

    // Step 3: Verify results
    await verifyMigration()

    console.log(`\n🎉 Migration completed!`)
    console.log(`📊 Total: ${totalSuccess} rows uploaded, ${totalErrors} errors`)

    if (totalErrors === 0) {
      console.log('✅ Perfect migration! All data uploaded successfully!')
    } else if (totalSuccess > 0) {
      console.log('⚠️  Partial success - some data uploaded with errors')
    } else {
      console.log('❌ Migration failed - no data uploaded')
    }

  } catch (error) {
    console.error('💥 Migration failed:', error.message)
    process.exit(1)
  }
}

main()