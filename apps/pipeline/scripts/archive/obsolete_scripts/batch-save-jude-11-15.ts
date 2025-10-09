import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Jude 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감탄사",
        original_text: "Woe to them!",
        korean_translation: "그들에게 화가 있을 것입니다!",
        grammatical_explanation: "화 선언"
      },
      {
        sequence_order: 2,
        semantic_classification: "첫 번째 고발",
        original_text: "They have taken the way of Cain",
        korean_translation: "그들은 가인의 길을 따랐고",
        grammatical_explanation: "가인의 길"
      },
      {
        sequence_order: 3,
        semantic_classification: "두 번째 고발",
        original_text: "they have rushed for profit into Balaam's error",
        korean_translation: "이득을 위해 발람의 오류로 돌진했으며",
        grammatical_explanation: "발람의 오류"
      },
      {
        sequence_order: 4,
        semantic_classification: "세 번째 고발",
        original_text: "they have been destroyed in Korah's rebellion",
        korean_translation: "고라의 반역으로 멸망당했습니다",
        grammatical_explanation: "고라의 반역"
      }
    ],
    vocabulary: [
      { word: "woe", ipa_pronunciation: "/woʊ/", korean_pronunciation: "워", definition_korean: "화, 재앙" },
      { word: "way", ipa_pronunciation: "/weɪ/", korean_pronunciation: "웨이", definition_korean: "길, 방법" },
      { word: "rushed", ipa_pronunciation: "/rʌʃt/", korean_pronunciation: "러쉬트", definition_korean: "돌진하다" },
      { word: "profit", ipa_pronunciation: "/ˈprɒfɪt/", korean_pronunciation: "프로핏", definition_korean: "이익, 이득" },
      { word: "error", ipa_pronunciation: "/ˈɛrər/", korean_pronunciation: "에러", definition_korean: "오류, 잘못" },
      { word: "rebellion", ipa_pronunciation: "/rɪˈbɛljən/", korean_pronunciation: "리벨리언", definition_korean: "반역, 반란" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 구약의 세 가지 부정적 인물(가인, 발람, 고라)을 통해 거짓 교사들을 고발합니다. '가인의 길'은 형제 살인과 하나님 거부(창 4장), '발람의 오류'는 금전적 이득을 위한 백성 미혹(민 22-24장), '고라의 반역'은 하나님이 세운 권위에 대한 도전(민 16장)을 의미합니다. 세 개의 완료형 동사(have taken, have rushed, have been destroyed)는 거짓 교사들의 행위가 이미 확정되었고 그 결과(멸망)도 확실함을 강조합니다."
    },
    korean_translation: {
      natural_translation: "그들에게 화가 있을 것입니다! 그들은 가인의 길을 따랐고, 이득을 위해 발람의 오류로 돌진했으며, 고라의 반역으로 멸망당했습니다."
    },
    special_explanation: {
      explanation_type: "구약 배경",
      content: "'the way of Cain'은 단순한 살인이 아니라 하나님의 은혜를 거부하고 자기 의로움을 추구하는 태도를 상징합니다. 'rushed for profit'(ἐξεχύθησαν)은 문자적으로 '쏟아져 나갔다'는 의미로, 절제 없는 탐욕을 묘사합니다. 세 인물의 공통점은 모두 하나님과 그분의 백성에 대한 배신과 반역입니다."
    }
  },
  {
    reference: "Jude 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "These people are blemishes at your love feasts, eating with you without the slightest qualm",
        korean_translation: "이 사람들은 여러분의 애찬에서 오점이 되며, 아무 거리낌 없이 여러분과 함께 먹으면서도",
        grammatical_explanation: "애찬의 오점"
      },
      {
        sequence_order: 2,
        semantic_classification: "동격어",
        original_text: "shepherds who feed only themselves",
        korean_translation: "자기 자신만 먹이는 목자들입니다",
        grammatical_explanation: "이기적 목자"
      },
      {
        sequence_order: 3,
        semantic_classification: "비유 1",
        original_text: "They are clouds without rain, blown along by the wind",
        korean_translation: "그들은 바람에 떠밀리는 비 없는 구름이며",
        grammatical_explanation: "공허한 구름"
      },
      {
        sequence_order: 4,
        semantic_classification: "비유 2",
        original_text: "autumn trees, without fruit and uprooted—twice dead",
        korean_translation: "열매도 없고 뿌리째 뽑힌 가을 나무로서 두 번 죽은 것입니다",
        grammatical_explanation: "죽은 나무"
      }
    ],
    vocabulary: [
      { word: "blemishes", ipa_pronunciation: "/ˈblɛmɪʃɪz/", korean_pronunciation: "블레미시즈", definition_korean: "오점, 결함" },
      { word: "love feasts", ipa_pronunciation: "/lʌv fiːsts/", korean_pronunciation: "러브 피스츠", definition_korean: "애찬, 사랑의 잔치" },
      { word: "qualm", ipa_pronunciation: "/kwɑːm/", korean_pronunciation: "콸름", definition_korean: "양심의 가책" },
      { word: "shepherds", ipa_pronunciation: "/ˈʃɛpərdz/", korean_pronunciation: "셰퍼즈", definition_korean: "목자들" },
      { word: "uprooted", ipa_pronunciation: "/ʌpˈruːtɪd/", korean_pronunciation: "업루티드", definition_korean: "뿌리째 뽑힌" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 네 가지 생생한 비유로 거짓 교사들을 묘사합니다. 첫째, 그들은 초대교회의 애찬(agape feast)에서 '양심의 가책 없이' 먹으며 오점이 됩니다. 둘째, '자기만 먹이는 목자'로 양 무리는 돌보지 않습니다. 셋째, '비 없는 구름'처럼 약속만 하고 실제 유익은 주지 않습니다. 넷째, '가을 나무'처럼 열매도 없고 뿌리째 뽑혀 '두 번 죽었습니다'(육체적·영적 죽음 또는 완전한 죽음 강조)."
    },
    korean_translation: {
      natural_translation: "이 사람들은 여러분의 애찬에서 오점이 되며, 아무 거리낌 없이 여러분과 함께 먹으면서도 자기 자신만 먹이는 목자들입니다. 그들은 바람에 떠밀리는 비 없는 구름이며, 열매도 없고 뿌리째 뽑힌 가을 나무로서 두 번 죽은 것입니다."
    },
    special_explanation: {
      explanation_type: "초대교회 관습",
      content: "'love feasts'는 초대교회의 공동 식사로, 성찬식과 연결되기도 했으며, 거짓 교사들이 이를 악용했습니다. 'twice dead'는 영적으로 이미 죽었고(불신앙), 심판으로 완전히 죽을 것(멸망)을 의미합니다. 자연 이미지(구름, 나무)는 겉으로는 유망해 보이지만 실제로는 무용하다는 메시지를 전달합니다."
    }
  },
  {
    reference: "Jude 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "비유 1",
        original_text: "They are wild waves of the sea, foaming up their shame",
        korean_translation: "그들은 바다의 거친 파도로서 자신들의 수치를 거품처럼 내뿜으며",
        grammatical_explanation: "거친 파도"
      },
      {
        sequence_order: 2,
        semantic_classification: "비유 2",
        original_text: "wandering stars",
        korean_translation: "방황하는 별들로서",
        grammatical_explanation: "방황하는 별들"
      },
      {
        sequence_order: 3,
        semantic_classification: "관계절",
        original_text: "for whom blackest darkness has been reserved forever",
        korean_translation: "그들을 위해 가장 깊은 어둠이 영원히 예비되어 있습니다",
        grammatical_explanation: "영원한 형벌"
      }
    ],
    vocabulary: [
      { word: "wild", ipa_pronunciation: "/waɪld/", korean_pronunciation: "와일드", definition_korean: "거친, 사나운" },
      { word: "waves", ipa_pronunciation: "/weɪvz/", korean_pronunciation: "웨이브즈", definition_korean: "파도" },
      { word: "foaming", ipa_pronunciation: "/ˈfoʊmɪŋ/", korean_pronunciation: "포밍", definition_korean: "거품을 내다" },
      { word: "shame", ipa_pronunciation: "/ʃeɪm/", korean_pronunciation: "셰임", definition_korean: "수치, 부끄러움" },
      { word: "wandering", ipa_pronunciation: "/ˈwɒndərɪŋ/", korean_pronunciation: "원더링", definition_korean: "방황하는" },
      { word: "blackest", ipa_pronunciation: "/ˈblækɪst/", korean_pronunciation: "블랙키스트", definition_korean: "가장 어두운" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 두 가지 강렬한 자연 이미지를 사용합니다. '바다의 거친 파도'는 이사야 57:20의 '악인은 요동하는 바다'를 연상시키며, 그들의 '수치'를 거품처럼 드러냅니다. '방황하는 별들'은 궤도를 이탈한 행성이나 유성을 가리키며, 하나님이 정한 질서에서 벗어났음을 상징합니다. 이들을 위해 '가장 깊은 어둠'이 영원히 예비되었다는 것은 최종 심판의 확실성을 강조합니다."
    },
    korean_translation: {
      natural_translation: "그들은 바다의 거친 파도로서 자신들의 수치를 거품처럼 내뿜으며, 방황하는 별들로서 그들을 위해 가장 깊은 어둠이 영원히 예비되어 있습니다."
    },
    special_explanation: {
      explanation_type: "비유적 표현",
      content: "'foaming up their shame'은 거짓 교사들의 부끄러운 행위들이 숨길 수 없이 드러난다는 의미입니다. 'wandering stars'는 고대 우주론에서 불규칙한 궤도를 가진 천체를 가리키며, 혼돈과 무질서의 상징입니다. 'blackest darkness'(ζόφος τοῦ σκότους)는 지옥의 완전한 절망을 나타냅니다."
    }
  },
  {
    reference: "Jude 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "Enoch, the seventh from Adam, prophesied about them",
        korean_translation: "아담으로부터 일곱 번째인 에녹도 이들에 대해 예언하여 말했습니다",
        grammatical_explanation: "에녹의 예언 소개"
      },
      {
        sequence_order: 2,
        semantic_classification: "직접 인용",
        original_text: "See, the Lord is coming with thousands upon thousands of his holy ones",
        korean_translation: "보라, 주께서 그분의 수만 명의 거룩한 자들과 함께 오신다",
        grammatical_explanation: "예언 내용"
      }
    ],
    vocabulary: [
      { word: "Enoch", ipa_pronunciation: "/ˈiːnək/", korean_pronunciation: "이녹", definition_korean: "에녹 (인명)" },
      { word: "prophesied", ipa_pronunciation: "/ˈprɒfɪsaɪd/", korean_pronunciation: "프로퍼사이드", definition_korean: "예언하다" },
      { word: "thousands", ipa_pronunciation: "/ˈθaʊzəndz/", korean_pronunciation: "싸우전즈", definition_korean: "수천" },
      { word: "holy ones", ipa_pronunciation: "/ˈhoʊli wʌnz/", korean_pronunciation: "홀리 원즈", definition_korean: "거룩한 자들" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 외경 '에녹서' 1:9를 인용하여 거짓 교사들에 대한 심판을 예언합니다. '아담에서 일곱 번째'는 에녹의 족보(창 5:3-18)를 따르며, 그의 경건함과 권위를 강조합니다. 에녹은 주님이 '무수한 거룩한 자들'(천사들이나 성도들)과 함께 오실 것을 예언했습니다. 이는 재림과 최후 심판을 가리키며, 거짓 교사들의 멸망이 하나님의 오래된 계획임을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "아담으로부터 일곱 번째인 에녹도 이들에 대해 예언하여 말했습니다: '보라, 주께서 그분의 수만 명의 거룩한 자들과 함께 오신다.'"
    },
    special_explanation: {
      explanation_type: "외경 인용",
      content: "'the seventh from Adam'은 완전수 7을 통해 에녹의 특별한 위치를 강조하며, 그가 하나님과 동행한 인물(창 5:24)임을 상기시킵니다. 유다가 외경을 인용한 것은 논쟁적이지만, 성령의 인도 하에 진리를 담은 전승을 활용한 것으로 해석됩니다. 'thousands upon thousands'(μυριάσιν)은 '만 명'을 의미하며, 주님의 군대의 엄청난 규모를 나타냅니다."
    }
  },
  {
    reference: "Jude 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부정사구",
        original_text: "to judge everyone",
        korean_translation: "모든 사람을 심판하시고",
        grammatical_explanation: "심판의 목적"
      },
      {
        sequence_order: 2,
        semantic_classification: "병렬 부정사구",
        original_text: "and to convict all of them of all the ungodly acts they have committed in their ungodliness",
        korean_translation: "경건하지 않은 자들이 그들의 경건하지 않음으로 행한 모든 경건하지 않은 행위",
        grammatical_explanation: "정죄의 내용 1"
      },
      {
        sequence_order: 3,
        semantic_classification: "병렬 전치사구",
        original_text: "and of all the defiant words ungodly sinners have spoken against him",
        korean_translation: "경건하지 않은 죄인들이 그분께 대적하여 말한 모든 반항적인 말들에 대해 유죄를 입증하시기 위함입니다",
        grammatical_explanation: "정죄의 내용 2"
      }
    ],
    vocabulary: [
      { word: "judge", ipa_pronunciation: "/dʒʌdʒ/", korean_pronunciation: "저지", definition_korean: "심판하다" },
      { word: "convict", ipa_pronunciation: "/kənˈvɪkt/", korean_pronunciation: "컨빅트", definition_korean: "유죄를 입증하다" },
      { word: "ungodly", ipa_pronunciation: "/ʌnˈɡɒdli/", korean_pronunciation: "언갓리", definition_korean: "경건하지 않은" },
      { word: "defiant", ipa_pronunciation: "/dɪˈfaɪənt/", korean_pronunciation: "디파이언트", definition_korean: "반항적인, 도전적인" }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 에녹의 예언(1:14)의 연속으로, 주님이 오시는 목적을 설명합니다. 첫째, '모든 사람을 심판하기' 위함입니다. 둘째, '경건하지 않음으로 행한 모든 경건하지 않은 행위'와 '경건하지 않은 죄인들이 주님께 대적하여 말한 모든 반항적인 말들'에 대해 정죄하기 위함입니다. 'ungodly'가 네 번 반복되어 거짓 교사들의 근본 문제(경건의 결여)를 강조합니다."
    },
    korean_translation: {
      natural_translation: "모든 사람을 심판하시고, 경건하지 않은 자들이 그들의 경건하지 않음으로 행한 모든 경건하지 않은 행위와, 경건하지 않은 죄인들이 그분께 대적하여 말한 모든 반항적인 말들에 대해 유죄를 입증하시기 위함입니다."
    },
    special_explanation: {
      explanation_type: "수사적 강조",
      content: "'ungodly'의 네 번 반복은 수사적 강조로, 거짓 교사들의 전인격적 부패(행위와 말 모두)를 드러냅니다. 'defiant words'는 단순한 불신앙을 넘어 하나님께 대한 적극적 도전과 비방을 의미합니다. 이 예언은 신약 종말론의 전형적 패턴(재림-심판-정죄)을 따릅니다."
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
