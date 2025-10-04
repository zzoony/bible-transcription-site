#!/usr/bin/env node

/**
 * Check Supabase schema structure
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

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkTableStructure(tableName) {
  console.log(`\n📊 Checking ${tableName} table structure...`)

  try {
    // Try to get a sample row to see column structure
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1)

    if (error) {
      console.log(`❌ Error accessing ${tableName}:`, error.message)
      return null
    }

    if (data && data.length > 0) {
      console.log(`✅ ${tableName} columns:`, Object.keys(data[0]))
    } else {
      console.log(`📝 ${tableName} exists but is empty`)

      // Try inserting a dummy record to see expected columns
      const testInsert = await supabase
        .from(tableName)
        .insert([{}])

      if (testInsert.error) {
        console.log(`💡 ${tableName} expected structure from error:`, testInsert.error.message)
      }
    }

  } catch (err) {
    console.log(`💥 Unexpected error checking ${tableName}:`, err.message)
  }
}

async function main() {
  console.log('🔍 Checking Supabase schema structure...')

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
    await checkTableStructure(table)
  }

  console.log('\n🏁 Schema check completed!')
}

main()