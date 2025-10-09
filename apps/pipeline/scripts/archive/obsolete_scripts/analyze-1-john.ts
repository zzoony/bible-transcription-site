import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const anthropicKey = process.env.ANTHROPIC_API_KEY!

if (!supabaseUrl || !supabaseKey || !anthropicKey) {
  console.error('❌ 필수 환경 변수 누락')
  console.error('필요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY, ANTHROPIC_API_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

const anthropic = new Anthropic({ apiKey: anthropicKey })

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
    console.error(`  ❌ 분석 오류:`, error.message)
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
        console.error(`  ❌ 문장구조 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ ${structures.length}개 문장구조 추가`)
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
        console.error(`  ❌ 어휘 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ ${vocab.length}개 어휘 추가`)
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
        console.error(`  ❌ 문맥설명 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 문맥설명 추가`)
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
        console.error(`  ❌ 번역 오류: ${error.message}`)
        allSuccess = false
      } else {
        console.log(`  ✅ 한국어 번역 추가`)
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
  console.log('🚀 1 John 전체 분석 시작\n')

  // Fetch all 1 John verses
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', '1 John%')
    .order('id')

  if (!verses || verses.length === 0) {
    console.error('❌ 1 John 구절을 찾을 수 없습니다')
    console.error('먼저 verses 테이블에 1 John 구절을 추가해야 합니다')
    process.exit(1)
  }

  console.log(`📖 총 ${verses.length}개 구절 발견`)

  // Check which verses are already analyzed
  const verseIds = verses.map(v => v.id)
  const { data: analyzed } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const analyzedSet = new Set(analyzed?.map(a => a.verse_id) || [])
  const toAnalyze = verses.filter(v => !analyzedSet.has(v.id))

  console.log(`✅ 이미 분석됨: ${analyzedSet.size}개`)
  console.log(`⏳ 분석 필요: ${toAnalyze.length}개`)

  if (toAnalyze.length === 0) {
    console.log('\n✅ 모든 구절이 이미 분석되었습니다!')
    return
  }

  const startTime = Date.now()
  let successCount = 0
  let failedCount = 0
  let skippedCount = 0
  const failedVerses: string[] = []

  console.log(`\n⏱️  예상 소요 시간: ${Math.round(toAnalyze.length * 3 / 60)} 분`)
  console.log('=' .repeat(80))

  for (let i = 0; i < toAnalyze.length; i++) {
    const verse = toAnalyze[i]
    const progress = Math.round((i / toAnalyze.length) * 100)
    const eta = Math.round(((Date.now() - startTime) / (i + 1)) * (toAnalyze.length - i - 1) / 1000 / 60)

    console.log(`\n[${i + 1}/${toAnalyze.length}] ${verse.reference} (${progress}% 완료, ETA: ${eta}분)`)

    // Double-check not already analyzed (중복 방지)
    const { data: existing } = await supabase
      .from('sentence_structures')
      .select('id')
      .eq('verse_id', verse.id)
      .limit(1)

    if (existing && existing.length > 0) {
      console.log(`  ⏭️  이미 분석됨, 건너뛰기...`)
      skippedCount++
      continue
    }

    try {
      // Analyze with Claude
      const analysis = await analyzeVerseWithClaude(verse.reference, verse.niv_text)

      if (!analysis) {
        failedCount++
        failedVerses.push(verse.reference)
        console.log(`  ❌ 분석 실패`)
        continue
      }

      // Insert to database
      const success = await insertVerseAnalysis(verse.id, verse.reference, analysis)

      if (success) {
        successCount++
        console.log(`  ✅ 완료`)
      } else {
        failedCount++
        failedVerses.push(verse.reference)
        console.log(`  ⚠️  부분 완료 (일부 오류)`)
      }
    } catch (error: any) {
      failedCount++
      failedVerses.push(verse.reference)
      console.error(`  ❌ 예외 발생: ${error.message}`)
    }

    // Rate limiting - 3초 대기
    if (i < toAnalyze.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 3000))
    }

    // Save progress every 10 verses
    if ((i + 1) % 10 === 0) {
      const progressData = {
        lastProcessed: verse.reference,
        successCount,
        failedCount,
        skippedCount,
        timestamp: new Date().toISOString()
      }
      fs.writeFileSync('1-john_progress.json', JSON.stringify(progressData, null, 2))
    }
  }

  const duration = Math.round((Date.now() - startTime) / 1000 / 60)

  console.log('\n' + '=' .repeat(80))
  console.log('📊 최종 통계')
  console.log('=' .repeat(80))
  console.log(`  총 구절: ${toAnalyze.length}`)
  console.log(`  성공: ${successCount}`)
  console.log(`  실패: ${failedCount}`)
  console.log(`  건너뛴: ${skippedCount}`)
  console.log(`  소요 시간: ${duration}분`)

  if (failedVerses.length > 0) {
    console.log(`\n❌ 실패한 구절들:`)
    failedVerses.forEach(ref => console.log(`  - ${ref}`))
  }

  if (successCount === toAnalyze.length) {
    console.log(`\n✅ ✅ ✅  모든 구절 분석 완료! ✅ ✅ ✅`)
  } else {
    console.log(`\n⚠️  일부 구절 실패. verify 스크립트로 확인 필요`)
  }
}

main().catch(console.error)