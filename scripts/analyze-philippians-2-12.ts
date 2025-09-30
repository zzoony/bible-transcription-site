import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const anthropicKey = process.env.ANTHROPIC_API_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)
const anthropic = new Anthropic({ apiKey: anthropicKey })

const ANALYSIS_PROMPT = `당신은 성경 언어학 전문가입니다. 다음 NIV 영어 성경 구절을 분석해주세요.

구절: {VERSE_TEXT}

다음 JSON 형식으로 응답해주세요:

{
  "sentence_structures": [
    {
      "sequence_order": 1,
      "semantic_classification": "의미적 분류 (예: 권면, 조건절 등)",
      "original_text": "영어 원문 해당 부분",
      "korean_translation": "한국어 직역",
      "grammatical_explanation": "문법적 설명 (절 구조, 품사 등)"
    }
  ],
  "vocabulary": [
    {
      "word": "단어",
      "ipa_pronunciation": "IPA 발음기호",
      "korean_pronunciation": "한국어 발음",
      "definition_korean": "한국어 뜻"
    }
  ],
  "contextual_explanation": {
    "integrated_explanation": "역사적/신학적/문학적 배경을 통합한 자연스러운 설명"
  },
  "korean_translation": {
    "natural_translation": "자연스러운 한국어 번역"
  },
  "special_explanation": {
    "grammatical_notes": "문법적 특이점",
    "interpretive_notes": "해석적 특이점"
  }
}

중요:
1. 모든 문장과 주요 절을 빠짐없이 sentence_structures에 포함
2. 복잡한 문장은 의미 단위로 분리
3. JSON 형식을 정확히 지켜주세요`

/**
 * Orchestrates analysis of Philippians 2:12 by retrieving the verse, sending it to Anthropic Claude for structured linguistic analysis, and storing the resulting sentence structures, vocabulary, contextual explanation, Korean translation, and special explanation into Supabase tables.
 *
 * Performs database reads and writes and logs progress and errors; returns early if the verse cannot be retrieved. */
async function analyzeVerse() {
  console.log('🔍 Analyzing Philippians 2:12...\n')

  // 1. Get verse data
  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .select('*')
    .eq('reference', 'Philippians 2:12')
    .single()

  if (verseError || !verse) {
    console.error('❌ Error fetching verse:', verseError)
    return
  }

  console.log(`📖 Verse: ${verse.reference}`)
  console.log(`   Text: ${verse.niv_text}\n`)

  // 2. Analyze with Claude
  console.log('🤖 Analyzing with Claude...')

  const prompt = ANALYSIS_PROMPT.replace('{VERSE_TEXT}', verse.niv_text)

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: prompt
      }]
    })

    const content = message.content[0]
    if (content.type !== 'text') {
      throw new Error('Unexpected response type')
    }

    // Parse JSON response
    const jsonMatch = content.text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('No JSON found in response')
    }

    const analysis = JSON.parse(jsonMatch[0])
    console.log('✅ Analysis complete\n')

    // 3. Insert sentence structures
    console.log('📝 Inserting sentence structures...')
    for (const structure of analysis.sentence_structures) {
      const { error } = await supabase
        .from('sentence_structures')
        .insert({
          verse_id: verse.id,
          sequence_order: structure.sequence_order,
          semantic_classification: structure.semantic_classification,
          original_text: structure.original_text,
          korean_translation: structure.korean_translation,
          grammatical_explanation: structure.grammatical_explanation
        })

      if (error) {
        console.error('❌ Error inserting structure:', error)
      } else {
        console.log(`✅ Added structure ${structure.sequence_order}`)
      }
    }

    // 4. Insert vocabulary
    console.log('\n📚 Inserting vocabulary...')
    for (const vocab of analysis.vocabulary) {
      const { error } = await supabase
        .from('vocabulary')
        .insert({
          verse_id: verse.id,
          word: vocab.word,
          ipa_pronunciation: vocab.ipa_pronunciation,
          korean_pronunciation: vocab.korean_pronunciation,
          definition_korean: vocab.definition_korean
        })

      if (error) {
        console.error('❌ Error inserting vocabulary:', error)
      } else {
        console.log(`✅ Added word: ${vocab.word}`)
      }
    }

    // 5. Insert contextual explanation
    console.log('\n💬 Inserting contextual explanation...')
    const { error: contextError } = await supabase
      .from('contextual_explanations')
      .insert({
        verse_id: verse.id,
        integrated_explanation: analysis.contextual_explanation.integrated_explanation
      })

    if (contextError) {
      console.error('❌ Error inserting contextual explanation:', contextError)
    } else {
      console.log('✅ Added contextual explanation')
    }

    // 6. Insert Korean translation
    console.log('\n🇰🇷 Inserting Korean translation...')
    const { error: translationError } = await supabase
      .from('korean_translations')
      .insert({
        verse_id: verse.id,
        natural_translation: analysis.korean_translation.natural_translation
      })

    if (translationError) {
      console.error('❌ Error inserting Korean translation:', translationError)
    } else {
      console.log('✅ Added Korean translation')
    }

    // 7. Insert special explanation
    console.log('\n⭐ Inserting special explanation...')
    const { error: specialError } = await supabase
      .from('special_explanations')
      .insert({
        verse_id: verse.id,
        grammatical_notes: analysis.special_explanation.grammatical_notes,
        interpretive_notes: analysis.special_explanation.interpretive_notes
      })

    if (specialError) {
      console.error('❌ Error inserting special explanation:', specialError)
    } else {
      console.log('✅ Added special explanation')
    }

    console.log('\n✨ Philippians 2:12 analysis complete!')

  } catch (error) {
    console.error('❌ Error during analysis:', error)
  }
}

analyzeVerse()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('💥 Fatal error:', err)
    process.exit(1)
  })