import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const anthropicKey = process.env.ANTHROPIC_API_KEY!

if (!supabaseUrl || !supabaseKey || !anthropicKey) {
  console.error('❌ Missing required environment variables')
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY, ANTHROPIC_API_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const anthropic = new Anthropic({ apiKey: anthropicKey })

// Analysis prompt following project rules
const ANALYSIS_PROMPT = `당신은 성경 구절 분석 전문가입니다. 주어진 NIV 영어 구절을 다음 형식으로 분석해주세요:

**중요 규칙:**
1. 이모지 사용 금지 - 깔끔한 텍스트 형식만 사용
2. 의미적 분류를 주로 하되 문법적 설명도 포함
3. IPA 발음과 한국어 발음을 모두 제공
4. 문맥 설명은 역사적/신학적/문학적 내용을 통합하여 자연스럽게 서술
5. 한국어 번역은 하나의 자연스러운 번역만 제공

**출력 형식 (JSON):**
\`\`\`json
{
  "sentence_structures": [
    {
      "sequence_order": 1,
      "semantic_classification": "의미적 분류명 (한국어)",
      "original_text": "영어 원문",
      "korean_translation": "한국어 번역",
      "grammatical_explanation": "문법적 설명"
    }
  ],
  "vocabulary": [
    {
      "word": "단어",
      "ipa_pronunciation": "/aɪ.pi.eɪ/",
      "korean_pronunciation": "한국어 발음",
      "part_of_speech": "품사",
      "definition_korean": "한국어 뜻",
      "usage_note": "사용법 설명 (선택사항)"
    }
  ],
  "contextual_explanation": {
    "integrated_explanation": "통합된 문맥 설명",
    "cross_references": ["관련 구절"]
  },
  "korean_translation": {
    "natural_translation": "자연스러운 한국어 번역",
    "translation_notes": "번역 참고사항 (선택사항)"
  },
  "special_explanation": {
    "explanation_type": "문법적/해석적",
    "content": "특별 설명 내용",
    "examples": []
  }
}
\`\`\`

성경 구절을 분석하고 위 JSON 형식으로만 응답해주세요.`

interface VerseAnalysis {
  sentence_structures: Array<{
    sequence_order: number
    semantic_classification: string
    original_text: string
    korean_translation: string
    grammatical_explanation?: string
  }>
  vocabulary: Array<{
    word: string
    ipa_pronunciation?: string
    korean_pronunciation?: string
    part_of_speech?: string
    definition_korean: string
    usage_note?: string
  }>
  contextual_explanation: {
    integrated_explanation: string
    cross_references?: string[]
  }
  korean_translation: {
    natural_translation: string
    translation_notes?: string
  }
  special_explanation?: {
    explanation_type?: string
    content: string
    examples?: any[]
  }
}

async function analyzeVerseWithClaude(reference: string, nivText: string): Promise<VerseAnalysis | null> {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: `${ANALYSIS_PROMPT}

구절: ${reference}
원문 (NIV): ${nivText}`
      }]
    })

    const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

    // Extract JSON from response
    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/)
    if (!jsonMatch) {
      const directJsonMatch = responseText.match(/\{[\s\S]*\}/)
      if (!directJsonMatch) {
        console.error(`  ❌ Could not extract JSON from response`)
        return null
      }
      return JSON.parse(directJsonMatch[0])
    }

    return JSON.parse(jsonMatch[1])
  } catch (error: any) {
    console.error(`  ❌ Error analyzing verse:`, error.message)
    return null
  }
}

async function insertVerseAnalysis(verseId: number, reference: string, analysis: VerseAnalysis): Promise<boolean> {
  try {
    let allSuccess = true

    // Insert sentence structures
    if (analysis.sentence_structures && analysis.sentence_structures.length > 0) {
      const structures = analysis.sentence_structures.map(s => ({
        verse_id: verseId,
        sequence_order: s.sequence_order,
        semantic_classification: s.semantic_classification,
        original_text: s.original_text,
        korean_translation: s.korean_translation,
        grammatical_explanation: s.grammatical_explanation
      }))

      const { error } = await supabase
        .from('sentence_structures')
        .insert(structures)

      if (error) {
        console.error(`  ❌ Structures error: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ Added ${structures.length} sentence structures`)
      }
    }

    // Insert vocabulary
    if (analysis.vocabulary && analysis.vocabulary.length > 0) {
      const vocab = analysis.vocabulary.map(v => ({
        verse_id: verseId,
        word: v.word,
        ipa_pronunciation: v.ipa_pronunciation,
        korean_pronunciation: v.korean_pronunciation,
        part_of_speech: v.part_of_speech,
        definition_korean: v.definition_korean,
        usage_note: v.usage_note
      }))

      const { error } = await supabase
        .from('vocabulary')
        .insert(vocab)

      if (error) {
        console.error(`  ❌ Vocabulary error: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ Added ${vocab.length} vocabulary entries`)
      }
    }

    // Insert contextual explanation
    if (analysis.contextual_explanation) {
      const { error } = await supabase
        .from('contextual_explanations')
        .insert({
          verse_id: verseId,
          integrated_explanation: analysis.contextual_explanation.integrated_explanation,
          cross_references: analysis.contextual_explanation.cross_references || []
        })

      if (error) {
        console.error(`  ❌ Context error: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ Added contextual explanation`)
      }
    }

    // Insert Korean translation
    if (analysis.korean_translation) {
      const { error } = await supabase
        .from('korean_translations')
        .insert({
          verse_id: verseId,
          natural_translation: analysis.korean_translation.natural_translation,
          translation_notes: analysis.korean_translation.translation_notes
        })

      if (error) {
        console.error(`  ❌ Translation error: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ Added Korean translation`)
      }
    }

    // Insert special explanation (if exists)
    if (analysis.special_explanation && analysis.special_explanation.content) {
      const { error } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          explanation_type: analysis.special_explanation.explanation_type,
          content: analysis.special_explanation.content,
          examples: analysis.special_explanation.examples || []
        })

      if (error) {
        console.error(`  ❌ Special explanation error: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ Added special explanation`)
      }
    }

    // Mark verse as analyzed if all succeeded
    if (allSuccess) {
      await supabase
        .from('verses')
        .update({ analysis_completed: true })
        .eq('id', verseId)
    }

    return allSuccess
  } catch (error: any) {
    console.error(`  ❌ Error inserting analysis:`, error.message)
    return false
  }
}

async function processVerses(verses: Array<{ id: number, reference: string, niv_text: string }>, chapterName: string) {
  let successCount = 0
  let errorCount = 0

  console.log(`\n🎯 Processing ${chapterName} (${verses.length} verses)`)
  console.log('=' .repeat(60))

  for (let i = 0; i < verses.length; i++) {
    const verse = verses[i]
    console.log(`\n[${i + 1}/${verses.length}] ${verse.reference}`)
    console.log(`  Text: "${verse.niv_text.substring(0, 60)}${verse.niv_text.length > 60 ? '...' : ''}"`)

    // Analyze with Claude
    console.log(`  🤖 Analyzing with Claude...`)
    const analysis = await analyzeVerseWithClaude(verse.reference, verse.niv_text)

    if (!analysis) {
      errorCount++
      console.log(`  ❌ Analysis failed`)
      continue
    }

    // Insert to database
    const success = await insertVerseAnalysis(verse.id, verse.reference, analysis)

    if (success) {
      successCount++
      console.log(`  ✅ Verse complete`)
    } else {
      errorCount++
      console.log(`  ⚠️  Verse partially complete (some errors)`)
    }

    // Rate limiting
    if (i < verses.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  console.log(`\n📊 ${chapterName} Summary: ${successCount} succeeded, ${errorCount} failed`)
  return { successCount, errorCount }
}

async function main() {
  console.log('🚀 Adding remaining missing verses to Supabase\n')

  // Check current state
  console.log('📊 Checking current state...')
  const { data: allVerses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .like('reference', 'Philippians %')
    .order('reference')

  if (!allVerses) {
    console.error('❌ Could not fetch verses')
    return
  }

  const verseIds = allVerses.map(v => v.id)
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const versesWithStructures = new Set(structures?.map(s => s.verse_id) || [])
  const missingVerses = allVerses.filter(v => !versesWithStructures.has(v.id))

  console.log(`  Total Philippians verses: ${allVerses.length}`)
  console.log(`  Verses with structures: ${versesWithStructures.size}`)
  console.log(`  Verses missing structures: ${missingVerses.length}`)

  if (missingVerses.length === 0) {
    console.log('\n✅ No missing verses! All data is complete.')
    return
  }

  // Separate by chapter
  const ch2Missing = missingVerses.filter(v => v.reference.includes('Philippians 2:'))
  const ch4Missing = missingVerses.filter(v => v.reference.includes('Philippians 4:'))
  const otherMissing = missingVerses.filter(v =>
    !v.reference.includes('Philippians 2:') &&
    !v.reference.includes('Philippians 4:')
  )

  console.log(`\n📋 Breakdown:`)
  console.log(`  Chapter 2: ${ch2Missing.length} verses`)
  console.log(`  Chapter 4: ${ch4Missing.length} verses`)
  if (otherMissing.length > 0) {
    console.log(`  Other: ${otherMissing.length} verses`)
  }

  // Process Chapter 2
  let totalSuccess = 0
  let totalErrors = 0

  if (ch2Missing.length > 0) {
    const result = await processVerses(ch2Missing, 'Chapter 2')
    totalSuccess += result.successCount
    totalErrors += result.errorCount
  }

  // Process Chapter 4
  if (ch4Missing.length > 0) {
    const result = await processVerses(ch4Missing, 'Chapter 4')
    totalSuccess += result.successCount
    totalErrors += result.errorCount
  }

  // Process any other missing verses
  if (otherMissing.length > 0) {
    const result = await processVerses(otherMissing, 'Other verses')
    totalSuccess += result.successCount
    totalErrors += result.errorCount
  }

  // Final verification
  console.log('\n\n📊 FINAL VERIFICATION')
  console.log('=' .repeat(60))

  const { data: finalVerses } = await supabase
    .from('verses')
    .select('id, reference')
    .like('reference', 'Philippians %')

  const finalVerseIds = finalVerses?.map(v => v.id) || []
  const { data: finalStructures } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', finalVerseIds)

  const finalVersesWithStructures = new Set(finalStructures?.map(s => s.verse_id) || [])

  console.log(`Total verses: ${finalVerses?.length || 0}`)
  console.log(`Verses with structures: ${finalVersesWithStructures.size}`)
  console.log(`Verses still missing: ${(finalVerses?.length || 0) - finalVersesWithStructures.size}`)
  console.log(`\nOverall: ${totalSuccess} succeeded, ${totalErrors} failed`)

  if (finalVersesWithStructures.size === finalVerses?.length) {
    console.log('\n🎉 SUCCESS! All verses now have sentence structures!')
  } else {
    console.log('\n⚠️  Some verses still missing structures:')
    finalVerses?.forEach(v => {
      if (!finalVersesWithStructures.has(v.id)) {
        console.log(`  - ${v.reference}`)
      }
    })
  }
}

main()
  .then(() => {
    console.log('\n✨ Script completed!')
    process.exit(0)
  })
  .catch(err => {
    console.error('\n💥 Fatal error:', err)
    process.exit(1)
  })