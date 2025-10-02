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

async function testSingle() {
  console.log('🧪 단일 구절 테스트: Galatians 1:1\n')

  const { data: verse } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .eq('reference', 'Galatians 1:1')
    .single()

  if (!verse) {
    console.error('❌ 구절을 찾을 수 없습니다')
    return
  }

  console.log(`📖 ${verse.reference}`)
  console.log(`   "${verse.niv_text}"\n`)

  console.log('🤖 Claude로 분석 중...')

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: `당신은 성경 구절 분석 전문가입니다. 다음 구절을 JSON 형식으로 분석해주세요.

구절: ${verse.reference}
원문 (NIV): ${verse.niv_text}

JSON 형식으로 sentence_structures (2-3개), vocabulary (5-10개), contextual_explanation, korean_translation을 포함하여 응답하세요.`
    }]
  })

  const responseText = message.content[0].type === 'text' ? message.content[0].text : ''
  console.log('\n✅ 분석 완료')
  console.log(`   응답 길이: ${responseText.length}자`)

  const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) ||
                    responseText.match(/\{[\s\S]*\}/)

  if (jsonMatch) {
    console.log('   ✅ JSON 추출 성공')
  } else {
    console.log('   ❌ JSON 추출 실패')
  }
}

testSingle().catch(console.error)