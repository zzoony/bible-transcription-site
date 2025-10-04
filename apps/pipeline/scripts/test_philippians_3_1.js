#!/usr/bin/env node

/**
 * Test Supabase data by fetching Philippians 3:1 complete analysis
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

async function fetchPhilippians3_1() {
  console.log('📖 Fetching Philippians 3:1 complete analysis...')

  try {
    // Get the verse with all related analysis data
    const { data: verse, error } = await supabase
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

    if (error) {
      console.error('❌ Error fetching verse:', error.message)
      return
    }

    if (!verse) {
      console.log('❌ Philippians 3:1 not found!')
      return
    }

    // Display the verse information
    console.log('\n' + '='.repeat(80))
    console.log(`📖 ${verse.reference}`)
    console.log('='.repeat(80))

    console.log('\n🔤 Original Text (NIV):')
    console.log(`"${verse.niv_text}"`)

    console.log('\n📊 Verse Information:')
    console.log(`• Verse ID: ${verse.id}`)
    console.log(`• Book ID: ${verse.book_id}`)
    console.log(`• Chapter ID: ${verse.chapter_id}`)
    console.log(`• Verse Number: ${verse.verse_number}`)
    console.log(`• Analysis Completed: ${verse.analysis_completed ? 'Yes' : 'No'}`)
    console.log(`• Created: ${new Date(verse.created_at).toLocaleString()}`)

    // Display sentence structures
    if (verse.sentence_structures && verse.sentence_structures.length > 0) {
      console.log('\n🔍 Sentence Structure Analysis:')
      verse.sentence_structures
        .sort((a, b) => a.sequence_order - b.sequence_order)
        .forEach((structure, index) => {
          console.log(`\n  ${index + 1}. ${structure.semantic_classification}`)
          console.log(`     Original: "${structure.original_text}"`)
          console.log(`     Korean: "${structure.korean_translation}"`)
          if (structure.grammatical_explanation) {
            console.log(`     Grammar: ${structure.grammatical_explanation}`)
          }
        })
    } else {
      console.log('\n🔍 Sentence Structure Analysis: None found')
    }

    // Display vocabulary
    if (verse.vocabulary && verse.vocabulary.length > 0) {
      console.log('\n📚 Vocabulary Analysis:')
      verse.vocabulary.forEach((word, index) => {
        console.log(`\n  ${index + 1}. "${word.word}" (${word.part_of_speech || 'N/A'})`)
        if (word.ipa_pronunciation) {
          console.log(`     IPA: /${word.ipa_pronunciation}/`)
        }
        if (word.korean_pronunciation) {
          console.log(`     Korean pronunciation: ${word.korean_pronunciation}`)
        }
        console.log(`     Meaning: ${word.definition_korean}`)
        if (word.usage_note) {
          console.log(`     Usage: ${word.usage_note}`)
        }
        console.log(`     Frequency: ${word.frequency || 1}`)
      })
    } else {
      console.log('\n📚 Vocabulary Analysis: None found')
    }

    // Display contextual explanations
    if (verse.contextual_explanations && verse.contextual_explanations.length > 0) {
      console.log('\n🌟 Contextual Explanation:')
      verse.contextual_explanations.forEach((context, index) => {
        console.log(`\n  ${index + 1}. ${context.integrated_explanation}`)
        if (context.cross_references && context.cross_references.length > 0) {
          console.log(`     Cross references: ${context.cross_references.join(', ')}`)
        }
      })
    } else {
      console.log('\n🌟 Contextual Explanation: None found')
    }

    // Display Korean translations
    if (verse.korean_translations && verse.korean_translations.length > 0) {
      console.log('\n🇰🇷 Korean Translation:')
      verse.korean_translations.forEach((translation, index) => {
        console.log(`\n  ${index + 1}. "${translation.natural_translation}"`)
        if (translation.translation_notes) {
          console.log(`     Notes: ${translation.translation_notes}`)
        }
      })
    } else {
      console.log('\n🇰🇷 Korean Translation: None found')
    }

    // Display special explanations
    if (verse.special_explanations && verse.special_explanations.length > 0) {
      console.log('\n✨ Special Explanations:')
      verse.special_explanations.forEach((explanation, index) => {
        console.log(`\n  ${index + 1}. ${explanation.explanation_type || 'General'}`)
        console.log(`     ${explanation.content}`)
        if (explanation.examples && explanation.examples.length > 0) {
          console.log(`     Examples: ${JSON.stringify(explanation.examples)}`)
        }
      })
    } else {
      console.log('\n✨ Special Explanations: None found')
    }

    console.log('\n' + '='.repeat(80))
    console.log('✅ Data fetch completed successfully!')

  } catch (error) {
    console.error('💥 Unexpected error:', error.message)
  }
}

fetchPhilippians3_1()