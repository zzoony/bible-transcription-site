import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Timothy 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수신자",
        original_text: "To Timothy, my dear son",
        korean_translation: "나의 사랑하는 아들 디모데에게",
        grammatical_explanation: "친밀한 호칭"
      },
      {
        sequence_order: 2,
        semantic_classification: "축복",
        original_text: "Grace, mercy and peace from God the Father and Christ Jesus our Lord",
        korean_translation: "하나님 아버지와 우리 주 그리스도 예수로부터 은혜와 긍휼과 평강이 있기를 바랍니다",
        grammatical_explanation: "삼중 축복"
      }
    ],
    vocabulary: [
      { word: "dear son", ipa_pronunciation: "/dɪr sʌn/", korean_pronunciation: "디어 선", definition_korean: "사랑하는 아들" },
      { word: "grace", ipa_pronunciation: "/ɡreɪs/", korean_pronunciation: "그레이스", definition_korean: "은혜" },
      { word: "mercy", ipa_pronunciation: "/ˈmɜːrsi/", korean_pronunciation: "머시", definition_korean: "긍휼" },
      { word: "peace", ipa_pronunciation: "/piːs/", korean_pronunciation: "피스", definition_korean: "평강" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 마지막 서신인 2 디모데서의 인사입니다. 디모데는 '사랑하는 아들'(ἀγαπητῷ τέκνῳ)로, 바울의 영적 유대가 깊습니다(딤전 1:2 '참 아들'과 비교). 축복은 삼중입니다: '은혜'(χάρις), '긍휼'(ἔλεος), '평강'(εἰρήνη). '긍휼'은 바울 서신 중 목회 서신에만 나타나며(딤전 1:2; 딤후 1:2; 딛 1:4), 특별한 보호와 자비를 의미합니다. 바울은 로마 감옥에서 순교를 앞두고(4:6-8) 디모데에게 마지막 권면을 쓰고 있습니다."
    },
    korean_translation: {
      natural_translation: "나의 사랑하는 아들 디모데에게, 하나님 아버지와 우리 주 그리스도 예수로부터 은혜와 긍휼과 평강이 있기를 바랍니다."
    },
    special_explanation: {
      explanation_type: "바울의 마지막 서신",
      content: "2 디모데서는 바울의 마지막 서신으로, 로마 감옥에서 순교를 앞두고 작성되었습니다(AD 67경). '은혜, 긍휼, 평강'의 삼중 축복은 어려운 상황에서 디모데에게 필요한 하나님의 능력을 강조합니다. 바울은 자신의 영적 유산을 디모데에게 전달합니다."
    }
  },
  {
    reference: "2 Timothy 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감사",
        original_text: "I thank God, whom I serve, as my ancestors did, with a clear conscience",
        korean_translation: "나는 조상들처럼 깨끗한 양심으로 섬기는 하나님께 감사합니다",
        grammatical_explanation: "감사의 근거"
      },
      {
        sequence_order: 2,
        semantic_classification: "기도",
        original_text: "as night and day I constantly remember you in my prayers",
        korean_translation: "밤낮으로 끊임없이 내 기도에서 너를 기억합니다",
        grammatical_explanation: "지속적 중보"
      }
    ],
    vocabulary: [
      { word: "serve", ipa_pronunciation: "/sɜːrv/", korean_pronunciation: "서브", definition_korean: "섬기다" },
      { word: "ancestors", ipa_pronunciation: "/ˈænsɛstərz/", korean_pronunciation: "앤세스터즈", definition_korean: "조상들" },
      { word: "clear conscience", ipa_pronunciation: "/klɪr ˈkɒnʃəns/", korean_pronunciation: "클리어 칸션스", definition_korean: "깨끗한 양심" },
      { word: "constantly", ipa_pronunciation: "/ˈkɒnstəntli/", korean_pronunciation: "칸스턴틀리", definition_korean: "끊임없이" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 '하나님을 섬김'(λατρεύω)을 '조상들처럼'(ἀπὸ προγόνων) 한다고 말합니다. 이는 유대적 배경을 강조하며, 기독교가 유대교의 완성임을 시사합니다(행 24:14). '깨끗한 양심'(ἐν καθαρᾷ συνειδήσει)은 바울의 신실한 사역을 나타냅니다(행 23:1; 딤전 1:5, 19; 3:9). '밤낮으로'(νυκτὸς καὶ ἡμέρας)는 쉼 없는 기도를 강조합니다. 바울은 디모데를 '끊임없이'(ἀδιαλείπτως) 기억합니다."
    },
    korean_translation: {
      natural_translation: "나는 조상들처럼 깨끗한 양심으로 섬기는 하나님께 감사합니다. 밤낮으로 끊임없이 내 기도에서 너를 기억합니다."
    },
    special_explanation: {
      explanation_type: "유대적 배경",
      content: "바울은 자신의 기독교 신앙이 유대교와 단절이 아니라 연속성 안에 있음을 강조합니다. '조상들처럼'은 아브라함, 이삭, 야곱의 하나님을 섬기는 것으로, 행 24:14에서도 '조상의 하나님을 섬긴다'고 변호합니다. 기독교는 구약의 완성입니다."
    }
  },
  {
    reference: "2 Timothy 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감정적 기억",
        original_text: "Recalling your tears",
        korean_translation: "네 눈물을 기억하며",
        grammatical_explanation: "과거 회상"
      },
      {
        sequence_order: 2,
        semantic_classification: "그리움",
        original_text: "I long to see you, so that I may be filled with joy",
        korean_translation: "너를 보기를 간절히 원합니다. 그래야 내가 기쁨으로 가득 찰 것입니다",
        grammatical_explanation: "목적절"
      }
    ],
    vocabulary: [
      { word: "recalling", ipa_pronunciation: "/rɪˈkɔːlɪŋ/", korean_pronunciation: "리콜링", definition_korean: "기억하다" },
      { word: "tears", ipa_pronunciation: "/tɪrz/", korean_pronunciation: "티어즈", definition_korean: "눈물" },
      { word: "long", ipa_pronunciation: "/lɒŋ/", korean_pronunciation: "롱", definition_korean: "간절히 원하다" },
      { word: "filled with joy", ipa_pronunciation: "/fɪld wɪð dʒɔɪ/", korean_pronunciation: "필드 위드 조이", definition_korean: "기쁨으로 가득 차다" }
    ],
    contextual_explanation: {
      integrated_explanation: "'네 눈물'(τῶν δακρύων σου)은 아마도 바울과 마지막 작별 때의 눈물일 것입니다(행 20:37의 에베소 장로들처럼). 바울은 디모데를 '보기를 간절히 원하며'(ἐπιποθῶν σε ἰδεῖν), 목적은 '기쁨으로 가득 차기'(χαρᾶς πληρωθῶ) 위함입니다. 이는 바울과 디모데의 깊은 영적 유대를 보여줍니다. 바울은 감옥에서 순교를 앞두고 있으며(4:6), 디모데와의 재회를 간절히 바랍니다(4:9, 21)."
    },
    korean_translation: {
      natural_translation: "네 눈물을 기억하며 너를 보기를 간절히 원합니다. 그래야 내가 기쁨으로 가득 찰 것입니다."
    },
    special_explanation: {
      explanation_type: "바울과 디모데의 유대",
      content: "바울과 디모데의 관계는 단순한 스승-제자가 아니라 아버지-아들의 깊은 영적 유대입니다. 바울은 디모데의 눈물을 기억하고, 그를 보는 것이 자신의 기쁨이라고 말합니다. 빌 2:19-22도 디모데를 '아들처럼' 섬긴 자로 묘사합니다."
    }
  },
  {
    reference: "2 Timothy 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "믿음의 기억",
        original_text: "I am reminded of your sincere faith",
        korean_translation: "나는 네 거짓없는 믿음을 생각합니다",
        grammatical_explanation: "회상"
      },
      {
        sequence_order: 2,
        semantic_classification: "믿음의 유산",
        original_text: "which first lived in your grandmother Lois and in your mother Eunice",
        korean_translation: "이 믿음은 먼저 네 할머니 로이스와 네 어머니 유니게 안에 있었고",
        grammatical_explanation: "관계절로 계보 설명"
      },
      {
        sequence_order: 3,
        semantic_classification: "확신",
        original_text: "and, I am persuaded, now lives in you also",
        korean_translation: "나는 확신하기를, 이제 네 안에도 있습니다",
        grammatical_explanation: "결론"
      }
    ],
    vocabulary: [
      { word: "reminded", ipa_pronunciation: "/rɪˈmaɪndɪd/", korean_pronunciation: "리마인디드", definition_korean: "생각나다" },
      { word: "sincere", ipa_pronunciation: "/sɪnˈsɪr/", korean_pronunciation: "신시어", definition_korean: "거짓없는, 진실한" },
      { word: "faith", ipa_pronunciation: "/feɪθ/", korean_pronunciation: "페이스", definition_korean: "믿음" },
      { word: "persuaded", ipa_pronunciation: "/pərˈsweɪdɪd/", korean_pronunciation: "퍼스웨이디드", definition_korean: "확신하는" }
    ],
    contextual_explanation: {
      integrated_explanation: "디모데의 '거짓없는 믿음'(ἀνυποκρίτου πίστεως - '위선 없는 믿음')이 강조됩니다. 이 믿음은 3대에 걸친 유산입니다: (1) 할머니 '로이스'(Λωΐδι), (2) 어머니 '유니게'(Εὐνίκῃ), (3) 디모데. 행 16:1은 디모데의 어머니가 '믿는 유대 여자'였고 아버지는 헬라인이었다고 말합니다. 바울은 '확신합니다'(πέπεισμαι)라고 말하며 디모데의 믿음을 인정합니다. 가정에서의 신앙 교육의 중요성을 보여줍니다(딤후 3:15)."
    },
    korean_translation: {
      natural_translation: "나는 네 거짓없는 믿음을 생각합니다. 이 믿음은 먼저 네 할머니 로이스와 네 어머니 유니게 안에 있었고, 나는 확신하기를, 이제 네 안에도 있습니다."
    },
    special_explanation: {
      explanation_type: "세대 간 신앙 전승",
      content: "디모데의 믿음은 할머니와 어머니를 통해 전승되었습니다. 이는 가정 신앙 교육의 모범입니다. 딤후 3:15는 디모데가 '어려서부터 성경을 알았다'고 말하며, 이는 로이스와 유니게의 교육을 가리킵니다. 신 6:6-9의 가정 교육 명령과 연결됩니다."
    }
  },
  {
    reference: "2 Timothy 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권면의 이유",
        original_text: "For this reason I remind you",
        korean_translation: "이런 이유로 내가 너에게 상기시킵니다",
        grammatical_explanation: "for로 근거 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "권면 내용",
        original_text: "to fan into flame the gift of God, which is in you through the laying on of my hands",
        korean_translation: "내 안수로 네 안에 있는 하나님의 은사를 불일듯 타오르게 하라고 합니다",
        grammatical_explanation: "부정사구로 명령"
      }
    ],
    vocabulary: [
      { word: "remind", ipa_pronunciation: "/rɪˈmaɪnd/", korean_pronunciation: "리마인드", definition_korean: "상기시키다" },
      { word: "fan into flame", ipa_pronunciation: "/fæn ˈɪntuː fleɪm/", korean_pronunciation: "팬 인투 플레임", definition_korean: "불일듯 타오르게 하다" },
      { word: "gift", ipa_pronunciation: "/ɡɪft/", korean_pronunciation: "기프트", definition_korean: "은사" },
      { word: "laying on of hands", ipa_pronunciation: "/ˈleɪɪŋ ɒn əv hændz/", korean_pronunciation: "레잉 온 오브 핸즈", definition_korean: "안수" }
    ],
    contextual_explanation: {
      integrated_explanation: "'이런 이유로'(δι' ἣν αἰτίαν)는 1:5의 디모데의 진실한 믿음을 가리킵니다. 바울은 디모데에게 '불일듯 타오르게 하라'(ἀναζωπυρεῖν - '재를 다시 불붙이다')고 권면합니다. '하나님의 은사'(χάρισμα τοῦ θεοῦ)는 사역을 위한 능력입니다(딤전 4:14). 이 은사는 '내 안수로'(διὰ τῆς ἐπιθέσεως τῶν χειρῶν μου) 주어졌습니다. 안수는 직분 임명을 상징합니다(딤전 4:14; 5:22; 행 6:6, 13:3). 바울은 디모데가 은사를 방치하지 말고 적극적으로 사용하라고 격려합니다."
    },
    korean_translation: {
      natural_translation: "이런 이유로 내가 너에게 상기시킵니다. 내 안수로 네 안에 있는 하나님의 은사를 불일듯 타오르게 하라고 합니다."
    },
    special_explanation: {
      explanation_type: "은사의 재점화",
      content: "'불일듯 타오르게 하다'(ἀναζωπυρεῖν)는 '재를 다시 불붙이다'는 뜻으로, 은사가 방치되어 약해질 수 있음을 시사합니다. 디모데는 어려운 상황(박해, 거짓 교사) 속에서 두려워하거나 위축되었을 수 있습니다(1:7-8). 바울은 그에게 용기를 내어 은사를 적극 사용하라고 격려합니다."
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
