#!/usr/bin/env node

/**
 * Test Supabase connection and basic operations
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

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials')
  console.log('SUPABASE_URL:', supabaseUrl ? 'Present' : 'Missing')
  console.log('SUPABASE_SERVICE_KEY:', supabaseServiceKey ? 'Present' : 'Missing')
  process.exit(1)
}

console.log('🔗 Testing Supabase connection...')
console.log('URL:', supabaseUrl)

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function testConnection() {
  try {
    // Test 1: Basic connection
    console.log('\n📡 Test 1: Basic API connection...')
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      console.log('⚠️  Auth test:', error.message)
    } else {
      console.log('✅ API connection successful')
    }

    // Test 2: Check existing tables
    console.log('\n📊 Test 2: Checking existing tables...')
    const { data: tables, error: tableError } = await supabase
      .rpc('run_sql', {
        query: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
      })

    if (tableError) {
      console.log('⚠️  Tables query failed:', tableError.message)

      // Try alternative method
      console.log('🔄 Trying alternative table check...')
      const { data: altData, error: altError } = await supabase
        .from('pg_tables')
        .select('tablename')
        .eq('schemaname', 'public')

      if (altError) {
        console.log('⚠️  Alternative failed:', altError.message)
      } else {
        console.log('✅ Tables found:', altData)
      }
    } else {
      console.log('✅ Tables query successful:', tables)
    }

    // Test 3: Try to create a simple table
    console.log('\n🔨 Test 3: Creating test table...')
    const { data: createData, error: createError } = await supabase
      .rpc('run_sql', {
        query: `
          CREATE TABLE IF NOT EXISTS test_connection (
            id SERIAL PRIMARY KEY,
            message TEXT,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
        `
      })

    if (createError) {
      console.log('⚠️  Create table failed:', createError.message)
    } else {
      console.log('✅ Test table created successfully')

      // Test 4: Insert test data
      console.log('\n📝 Test 4: Inserting test data...')
      const { data: insertData, error: insertError } = await supabase
        .from('test_connection')
        .insert([
          { message: 'Hello from Bible Transcription Site!' }
        ])

      if (insertError) {
        console.log('⚠️  Insert failed:', insertError.message)
      } else {
        console.log('✅ Test data inserted:', insertData)

        // Test 5: Query test data
        console.log('\n🔍 Test 5: Querying test data...')
        const { data: queryData, error: queryError } = await supabase
          .from('test_connection')
          .select('*')
          .limit(5)

        if (queryError) {
          console.log('⚠️  Query failed:', queryError.message)
        } else {
          console.log('✅ Query successful:', queryData)
        }
      }
    }

    console.log('\n🎉 Connection tests completed!')

  } catch (error) {
    console.error('💥 Unexpected error:', error.message)
  }
}

testConnection()