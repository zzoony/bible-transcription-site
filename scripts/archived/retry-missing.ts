import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

const ANALYSIS_PROMPT = `당신은 성경 구절 분석 전문가입니다. 주어진 NIV 영어 구절을 다음 형식으로 분석해주세요:

**중요 규칙:**
1. 이모지 사용 금지 - 깔끔한 텍스트 형식만 사용
2. 의미적 분류를 주로 하되 문법적 설명도 포함
3. IPA 발음과 한국어 발음을 모두 제공
4. 문맥 설명은 역사적/신학적/문학적 내용을 통합하여 자연스럽게 서술
5. 한국어 번역은 하나의 자연스러운 번역만 제공
6. **문장 구조 분석 필수 규칙:** NIV 원문의 모든 문장과 주요 절을 빠짐없이 sentence_structures에 포함

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
      "definition_korean": "한국어 뜻"
    }
  ],
  "contextual_explanation": {
    "integrated_explanation": "통합된 문맥 설명"
  },
  "korean_translation": {
    "natural_translation": "자연스러운 한국어 번역"
  },
  "special_explanation": {
    "content": "특별 설명 내용"
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

async function analyzeVerseWithClaude(reference: string, nivText: string, retryCount = 0): Promise<VerseAnalysis | null> {
  const maxRetries = 3

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

    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/)
    if (!jsonMatch) {
      const directJsonMatch = responseText.match(/\{[\s\S]*\}/)
      if (!directJsonMatch) {
        console.error(`  ❌ JSON 추출 실패`)
        return null
      }
      return JSON.parse(directJsonMatch[0])
    }

    return JSON.parse(jsonMatch[1])
  } catch (error: any) {
    if (retryCount < maxRetries && (error.message?.includes('timeout') || error.message?.includes('Overloaded'))) {
      const waitTime = Math.pow(2, retryCount) * 5000 // 5s, 10s, 20s
      console.log(`  ⏳ ${retryCount + 1}번째 재시도... (${waitTime/1000}초 대기)`)
      await new Promise(resolve => setTimeout(resolve, waitTime))
      return analyzeVerseWithClaude(reference, nivText, retryCount + 1)
    }
    console.error(`  ❌ 분석 오류:`, error.message)
    return null
  }
}

async function insertVerseAnalysis(verseId: number, reference: string, analysis: VerseAnalysis): Promise<boolean> {
  try {
    let allSuccess = true

    if (analysis.sentence_structures && analysis.sentence_structures.length > 0) {
      const structures = analysis.sentence_structures.map(s => ({
        verse_id: verseId,
        sequence_order: s.sequence_order,
        semantic_classification: s.semantic_classification,
        original_text: s.original_text,
        korean_translation: s.korean_translation,
        grammatical_explanation: s.grammatical_explanation
      }))

      const { error } = await supabase.from('sentence_structures').insert(structures)
      if (error) {
        console.error(`  ❌ 문장구조 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ ${structures.length}개 문장구조 추가`)
      }
    }

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

      const { error } = await supabase.from('vocabulary').insert(vocab)
      if (error) {
        console.error(`  ❌ 어휘 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ ${vocab.length}개 어휘 추가`)
      }
    }

    if (analysis.contextual_explanation) {
      const { error } = await supabase.from('contextual_explanations').insert({
        verse_id: verseId,
        integrated_explanation: analysis.contextual_explanation.integrated_explanation,
        cross_references: analysis.contextual_explanation.cross_references || []
      })

      if (error) {
        console.error(`  ❌ 문맥설명 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 문맥설명 추가`)
      }
    }

    if (analysis.korean_translation) {
      const { error } = await supabase.from('korean_translations').insert({
        verse_id: verseId,
        natural_translation: analysis.korean_translation.natural_translation,
        translation_notes: analysis.korean_translation.translation_notes
      })

      if (error) {
        console.error(`  ❌ 번역 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 한국어 번역 추가`)
      }
    }

    if (analysis.special_explanation && analysis.special_explanation.content) {
      const { error } = await supabase.from('special_explanations').insert({
        verse_id: verseId,
        explanation_type: analysis.special_explanation.explanation_type,
        content: analysis.special_explanation.content,
        examples: analysis.special_explanation.examples || []
      })

      if (error) {
        console.error(`  ❌ 특별설명 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 특별설명 추가`)
      }
    }

    return allSuccess
  } catch (error: any) {
    console.error(`  ❌ 데이터 삽입 오류:`, error.message)
    return false
  }
}

async function main() {
  console.log('🔄 누락된 Galatians 구절 재분석 시작\n')

  const missingIds = [369, 421, 425, 427, 437, 484, 485, 488, 491, 494, 486, 489, 492, 495, 487, 490, 493, 496]

  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .in('id', missingIds)
    .order('id')

  if (!verses || verses.length === 0) {
    console.error('❌ 누락 구절을 찾을 수 없습니다')
    process.exit(1)
  }

  console.log(`📖 재분석 대상: ${verses.length}개 구절\n`)

  let successCount = 0
  let failedCount = 0
  const failedVerses: string[] = []

  for (let i = 0; i < verses.length; i++) {
    const verse = verses[i]
    console.log(`\n[${i + 1}/${verses.length}] ${verse.reference}`)

    try {
      const analysis = await analyzeVerseWithClaude(verse.reference, verse.niv_text)

      if (!analysis) {
        failedCount++
        failedVerses.push(verse.reference)
        console.log(`  ❌ 분석 실패`)
        continue
      }

      const success = await insertVerseAnalysis(verse.id, verse.reference, analysis)

      if (success) {
        successCount++
        console.log(`  ✅ 완료`)
      } else {
        failedCount++
        failedVerses.push(verse.reference)
        console.log(`  ⚠️  부분 완료`)
      }
    } catch (error: any) {
      failedCount++
      failedVerses.push(verse.reference)
      console.error(`  ❌ 예외 발생: ${error.message}`)
    }

    // 5초 대기 (rate limiting)
    if (i < verses.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
  }

  console.log(`\n${'='.repeat(80)}`)
  console.log(`📊 최종 통계`)
  console.log(`${'='.repeat(80)}`)
  console.log(`  성공: ${successCount}/${verses.length}`)
  console.log(`  실패: ${failedCount}/${verses.length}`)

  if (failedVerses.length > 0) {
    console.log(`\n❌ 실패한 구절들:`)
    failedVerses.forEach(ref => console.log(`  - ${ref}`))
  }

  if (successCount === verses.length) {
    console.log(`\n✅ ✅ ✅  모든 누락 구절 분석 완료! ✅ ✅ ✅`)
  } else {
    console.log(`\n⚠️  ${failedCount}개 구절 실패`)
  }
}

main().catch(console.error)