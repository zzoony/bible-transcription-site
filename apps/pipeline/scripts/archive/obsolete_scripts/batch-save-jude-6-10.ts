import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Jude 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주어",
        original_text: "And the angels who did not keep their positions of authority",
        korean_translation: "자기 지위를 지키지 않은 천사들",
        grammatical_explanation: "타락한 천사들 소개"
      },
      {
        sequence_order: 2,
        semantic_classification: "대조절",
        original_text: "but abandoned their proper dwelling",
        korean_translation: "본래의 거처를 버렸다",
        grammatical_explanation: "배교 행위 묘사"
      },
      {
        sequence_order: 3,
        semantic_classification: "주절",
        original_text: "these he has kept in darkness",
        korean_translation: "하나님께서는 어둠 속에 가두어 두셨습니다",
        grammatical_explanation: "현재의 상태"
      },
      {
        sequence_order: 4,
        semantic_classification: "분사구",
        original_text: "bound with everlasting chains for judgment on the great Day",
        korean_translation: "큰 날의 심판을 위해 영원한 사슬로 묶어",
        grammatical_explanation: "형벌의 세부 사항"
      }
    ],
    vocabulary: [
      { word: "authority", ipa_pronunciation: "/ɔːˈθɒrəti/", korean_pronunciation: "오쏘리티", definition_korean: "권위, 지위" },
      { word: "abandoned", ipa_pronunciation: "/əˈbændənd/", korean_pronunciation: "어밴던드", definition_korean: "버리다" },
      { word: "dwelling", ipa_pronunciation: "/ˈdwɛlɪŋ/", korean_pronunciation: "드웰링", definition_korean: "거처, 처소" },
      { word: "everlasting", ipa_pronunciation: "/ˌɛvərˈlɑːstɪŋ/", korean_pronunciation: "에버라스팅", definition_korean: "영원한" },
      { word: "chains", ipa_pronunciation: "/tʃeɪnz/", korean_pronunciation: "체인즈", definition_korean: "사슬, 족쇄" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 두 번째 경고 예시로 타락한 천사들을 제시합니다. 이들은 자신들의 '지위를 지키지 않고' 본래의 '거처를 버렸다'는 표현은 창세기 6장의 네피림 전승이나 외경 에녹서의 타락 천사 이야기를 암시할 수 있습니다. 하나님은 이들을 '어둠 속에', '영원한 사슬로 묶어' 최후 심판 때까지 보관하고 계십니다. 이는 거짓 교사들도 아무리 영적 특권을 받았더라도, 배교하면 반드시 심판받는다는 경고입니다."
    },
    korean_translation: {
      natural_translation: "그리고 자기 지위를 지키지 않고 본래의 거처를 버린 천사들을, 하나님께서는 큰 날의 심판을 위해 영원한 사슬로 묶어 어둠 속에 가두어 두셨습니다."
    },
    special_explanation: {
      explanation_type: "성경 배경",
      content: "'proper dwelling'(ἴδιον οἰκητήριον)은 천사들의 본래 하늘 거처를 의미하며, 그들의 배교는 하나님이 정한 영역을 이탈한 것입니다. 'everlasting chains'는 문자적 사슬이 아니라 영적 구속 상태를 비유적으로 표현한 것으로, 베드로후서 2:4의 '지옥에 던져짐'과 유사합니다."
    }
  },
  {
    reference: "Jude 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "In a similar way, Sodom and Gomorrah and the surrounding towns gave themselves up to sexual immorality and perversion",
        korean_translation: "마찬가지로 소돔과 고모라와 주변 도시들도 성적 부도덕과 변태에 스스로를 내어주었고",
        grammatical_explanation: "소돔과 고모라의 죄"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과절",
        original_text: "They serve as an example",
        korean_translation: "본보기가 되었습니다",
        grammatical_explanation: "예시 역할"
      },
      {
        sequence_order: 3,
        semantic_classification: "전치사구",
        original_text: "of those who suffer the punishment of eternal fire",
        korean_translation: "영원한 불의 형벌을 받는 자들의",
        grammatical_explanation: "형벌의 성격"
      }
    ],
    vocabulary: [
      { word: "gave themselves up", ipa_pronunciation: "/ɡeɪv ðəmˈsɛlvz ʌp/", korean_pronunciation: "게이브 뎀셀브즈 업", definition_korean: "스스로를 내어주다" },
      { word: "immorality", ipa_pronunciation: "/ˌɪməˈræləti/", korean_pronunciation: "이머랠러티", definition_korean: "부도덕, 음란" },
      { word: "perversion", ipa_pronunciation: "/pərˈvɜːrʒən/", korean_pronunciation: "퍼버전", definition_korean: "변태, 왜곡" },
      { word: "punishment", ipa_pronunciation: "/ˈpʌnɪʃmənt/", korean_pronunciation: "퍼니시먼트", definition_korean: "형벌" },
      { word: "eternal", ipa_pronunciation: "/ɪˈtɜːrnəl/", korean_pronunciation: "이터널", definition_korean: "영원한" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 세 번째 경고 예시로 소돔과 고모라를 제시합니다. 이 도시들은 '성적 부도덕과 변태'에 스스로를 내어주었으며, '영원한 불의 형벌'을 받는 예로 남았습니다. 창세기 19장에서 이 도시들은 유황불로 멸망당했으며, 유다는 이를 종말적 심판의 예표로 해석합니다. 'in a similar way'는 거짓 교사들의 성적 방종이 소돔의 죄와 유사함을 암시합니다."
    },
    korean_translation: {
      natural_translation: "마찬가지로 소돔과 고모라와 주변 도시들도 성적 부도덕과 변태에 스스로를 내어주었고, 영원한 불의 형벌을 받는 자들의 본보기가 되었습니다."
    },
    special_explanation: {
      explanation_type: "성경 배경",
      content: "'sexual immorality and perversion'(ἐκπορνεύσασαι καὶ ἀπελθοῦσαι ὀπίσω σαρκὸς ἑτέρας)은 문자적으로 '다른 육체를 쫓아간' 것으로, 동성애나 천사와의 관계(창 6장 암시)를 가리킬 수 있습니다. 'eternal fire'는 종말론적 심판을 의미하며, 소돔의 물리적 멸망은 더 큰 영적 심판의 그림자입니다."
    }
  },
  {
    reference: "Jude 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부사구",
        original_text: "In the very same way, on the strength of their dreams",
        korean_translation: "바로 그와 같이 자기 꿈에 근거하여",
        grammatical_explanation: "비교와 동기"
      },
      {
        sequence_order: 2,
        semantic_classification: "주절",
        original_text: "these ungodly people pollute their own bodies",
        korean_translation: "이 사람들도 자신의 몸을 더럽히고",
        grammatical_explanation: "첫 번째 죄악"
      },
      {
        sequence_order: 3,
        semantic_classification: "병렬 동사구",
        original_text: "reject authority",
        korean_translation: "권위를 거부하며",
        grammatical_explanation: "두 번째 죄악"
      },
      {
        sequence_order: 4,
        semantic_classification: "병렬 동사구",
        original_text: "and heap abuse on celestial beings",
        korean_translation: "천상의 존재들을 모독합니다",
        grammatical_explanation: "세 번째 죄악"
      }
    ],
    vocabulary: [
      { word: "dreams", ipa_pronunciation: "/driːmz/", korean_pronunciation: "드림즈", definition_korean: "꿈, 환상" },
      { word: "pollute", ipa_pronunciation: "/pəˈluːt/", korean_pronunciation: "폴루트", definition_korean: "더럽히다" },
      { word: "reject", ipa_pronunciation: "/rɪˈdʒɛkt/", korean_pronunciation: "리젝트", definition_korean: "거부하다" },
      { word: "heap abuse", ipa_pronunciation: "/hiːp əˈbjuːs/", korean_pronunciation: "힙 어뷰스", definition_korean: "모욕을 퍼붓다" },
      { word: "celestial", ipa_pronunciation: "/səˈlɛstiəl/", korean_pronunciation: "설레스티얼", definition_korean: "천상의" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들의 세 가지 죄악을 고발합니다. 첫째, 그들은 '꿈'이나 환상을 구실로 자신의 몸을 더럽힙니다(성적 방종). 둘째, 권위를 거부합니다(교회 지도자나 사도적 권위 무시). 셋째, '천상의 존재들'을 모독합니다. 'celestial beings'는 천사들이나 영적 권세를 가리킬 수 있으며, 거짓 교사들이 영적 세계에 대해 무례하고 무지한 태도를 보임을 나타냅니다."
    },
    korean_translation: {
      natural_translation: "바로 그와 같이 이 사람들도 자기 꿈에 근거하여 자신의 몸을 더럽히고, 권위를 거부하며, 천상의 존재들을 모독합니다."
    },
    special_explanation: {
      explanation_type: "이단 교리",
      content: "'on the strength of their dreams'는 거짓 교사들이 자신의 환상이나 계시를 주장하며 죄를 정당화했음을 암시합니다. 'heap abuse on celestial beings'는 영지주의적 경향을 가진 거짓 교사들이 천사론에 대해 잘못된 가르침을 펼쳤을 가능성을 시사합니다."
    }
  },
  {
    reference: "Jude 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부사절",
        original_text: "But even the archangel Michael, when he was disputing with the devil about the body of Moses",
        korean_translation: "그러나 대천사 미가엘조차도 모세의 시체에 대해 마귀와 다툴 때",
        grammatical_explanation: "상황 설정"
      },
      {
        sequence_order: 2,
        semantic_classification: "주절 부정",
        original_text: "did not himself dare to condemn him for slander",
        korean_translation: "감히 모독하는 판결을 내리지 않고",
        grammatical_explanation: "미가엘의 절제"
      },
      {
        sequence_order: 3,
        semantic_classification: "대조절",
        original_text: "but said, 'The Lord rebuke you!'",
        korean_translation: "단지 '주께서 당신을 꾸짖으시기를!'이라고만 말했습니다",
        grammatical_explanation: "실제 반응"
      }
    ],
    vocabulary: [
      { word: "archangel", ipa_pronunciation: "/ˌɑːrkˈeɪndʒəl/", korean_pronunciation: "아크엔젤", definition_korean: "대천사" },
      { word: "disputing", ipa_pronunciation: "/dɪˈspjuːtɪŋ/", korean_pronunciation: "디스퓨팅", definition_korean: "논쟁하다" },
      { word: "condemn", ipa_pronunciation: "/kənˈdɛm/", korean_pronunciation: "컨뎀", definition_korean: "정죄하다" },
      { word: "slander", ipa_pronunciation: "/ˈslɑːndər/", korean_pronunciation: "슬란더", definition_korean: "비방, 중상" },
      { word: "rebuke", ipa_pronunciation: "/rɪˈbjuːk/", korean_pronunciation: "리뷰크", definition_korean: "꾸짖다" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 대천사 미가엘의 예를 들어 거짓 교사들의 오만함을 대조시킵니다. 미가엘은 모세의 시체를 놓고 마귀와 다툴 때조차 감히 모독적인 비난을 하지 않고, '주께서 당신을 꾸짖으시기를!'이라고만 말했습니다. 이 이야기는 정경에 없고 외경 '모세의 승천'에 나오는 것으로, 유다가 유대 전승을 활용한 예입니다. 거짓 교사들은 미가엘보다도 교만하여 영적 존재들을 함부로 모독한다는 것이 유다의 논점입니다."
    },
    korean_translation: {
      natural_translation: "그러나 대천사 미가엘조차도 모세의 시체에 대해 마귀와 다툴 때, 감히 모독하는 판결을 내리지 않고 단지 '주께서 당신을 꾸짖으시기를!'이라고만 말했습니다."
    },
    special_explanation: {
      explanation_type: "성경 배경",
      content: "'the body of Moses'를 둘러싼 분쟁은 외경 자료를 바탕으로 하며, 마귀가 모세의 죄를 들어 시체를 요구했고, 미가엘이 이를 막았다는 전승입니다. 'did not dare to condemn'은 미가엘의 겸손과 지혜를 보여주며, 하나님의 권세에 심판을 맡기는 모범을 제시합니다."
    }
  },
  {
    reference: "Jude 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "Yet these people slander whatever they do not understand",
        korean_translation: "그러나 이 사람들은 자기들이 이해하지 못하는 것은 무엇이든지 비방하고",
        grammatical_explanation: "무지한 비방"
      },
      {
        sequence_order: 2,
        semantic_classification: "삽입절",
        original_text: "and the very things they do understand by instinct—as irrational animals do—",
        korean_translation: "비이성적인 동물들처럼 본능으로만 아는 바로 그것들이",
        grammatical_explanation: "본능적 이해"
      },
      {
        sequence_order: 3,
        semantic_classification: "주절",
        original_text: "will destroy them",
        korean_translation: "그들을 멸망시킬 것입니다",
        grammatical_explanation: "파멸의 결과"
      }
    ],
    vocabulary: [
      { word: "slander", ipa_pronunciation: "/ˈslɑːndər/", korean_pronunciation: "슬란더", definition_korean: "비방하다" },
      { word: "instinct", ipa_pronunciation: "/ˈɪnstɪŋkt/", korean_pronunciation: "인스팅트", definition_korean: "본능" },
      { word: "irrational", ipa_pronunciation: "/ɪˈræʃənəl/", korean_pronunciation: "이래셔널", definition_korean: "비이성적인" },
      { word: "destroy", ipa_pronunciation: "/dɪˈstrɔɪ/", korean_pronunciation: "디스트로이", definition_korean: "멸망시키다" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들의 이중적 무지를 지적합니다. 첫째, 그들은 이해하지 못하는 영적 진리들을 비방합니다. 둘째, 그들이 '본능적으로' 이해하는 것들(성적 욕망, 물질적 탐욕)은 오히려 그들을 멸망시킬 것입니다. 'as irrational animals'는 비이성적 동물처럼 고등한 사고 없이 본능만 따른다는 의미입니다. 이는 베드로후서 2:12의 유사한 표현과 일치합니다."
    },
    korean_translation: {
      natural_translation: "그러나 이 사람들은 자기들이 이해하지 못하는 것은 무엇이든지 비방하고, 비이성적인 동물들처럼 본능으로만 아는 바로 그것들이 그들을 멸망시킬 것입니다."
    },
    special_explanation: {
      explanation_type: "신적 응보",
      content: "'whatever they do not understand'는 영적 진리, 천사론, 종말론 등에 대한 무지를 암시합니다. 'will destroy them'은 아이러니컬하게도 그들이 쫓는 육체적 쾌락과 탐욕이 궁극적으로 자신들의 파멸 원인이 된다는 신적 응보(divine irony)를 나타냅니다."
    }
  }
]

async function main() {
  let successCount = 0
  let failureCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failureCount++
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n=== 완료 ===`)
  console.log(`성공: ${successCount}`)
  console.log(`실패: ${failureCount}`)

  if (successCount > 0) {
    const { createClient } = await import('@supabase/supabase-js')
    const dotenv = await import('dotenv')
    dotenv.config()

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    )

    for (const analysis of analyses) {
      await supabase
        .from('verses')
        .update({ analysis_completed: true })
        .eq('reference', analysis.reference)
    }
    console.log(`✅ ${successCount}개 구절 analysis_completed 플래그 업데이트 완료`)
  }
}

main()
