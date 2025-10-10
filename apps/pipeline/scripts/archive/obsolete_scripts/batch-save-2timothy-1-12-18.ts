import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Timothy 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "고난의 이유",
        original_text: "That is why I am suffering as I am",
        korean_translation: "이것이 내가 이렇게 고난받는 이유입니다",
        grammatical_explanation: "결과"
      },
      {
        sequence_order: 2,
        semantic_classification: "부끄럽지 않음",
        original_text: "Yet this is no cause for shame, because I know whom I have believed",
        korean_translation: "그러나 이것은 부끄러운 일이 아닙니다. 왜냐하면 내가 누구를 믿었는지 알기 때문입니다",
        grammatical_explanation: "확신의 근거"
      },
      {
        sequence_order: 3,
        semantic_classification: "확신",
        original_text: "and am convinced that he is able to guard what I have entrusted to him until that day",
        korean_translation: "그리고 그분이 내가 그분께 맡긴 것을 그날까지 지키실 수 있음을 확신합니다",
        grammatical_explanation: "완전한 신뢰"
      }
    ],
    vocabulary: [
      { word: "suffering", ipa_pronunciation: "/ˈsʌfərɪŋ/", korean_pronunciation: "서퍼링", definition_korean: "고난" },
      { word: "shame", ipa_pronunciation: "/ʃeɪm/", korean_pronunciation: "셰임", definition_korean: "부끄러움" },
      { word: "convinced", ipa_pronunciation: "/kənˈvɪnst/", korean_pronunciation: "컨빈스트", definition_korean: "확신하는" },
      { word: "guard", ipa_pronunciation: "/ɡɑːrd/", korean_pronunciation: "가드", definition_korean: "지키다" },
      { word: "entrusted", ipa_pronunciation: "/ɪnˈtrʌstɪd/", korean_pronunciation: "인트러스티드", definition_korean: "맡기다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 고난을 부끄러워하지 않습니다. '누구를 믿었는지'(ᾧ πεπίστευκα) 알기 때문입니다. '그날'(ἐκείνην τὴν ἡμέραν)은 그리스도의 재림입니다. '맡긴 것'(παραθήκην)은 바울의 영혼과 사역일 수 있습니다."
    },
    korean_translation: {
      natural_translation: "이것이 내가 이렇게 고난받는 이유입니다. 그러나 이것은 부끄러운 일이 아닙니다. 왜냐하면 내가 누구를 믿었는지 알고, 그분이 내가 그분께 맡긴 것을 그날까지 지키실 수 있음을 확신하기 때문입니다."
    },
    special_explanation: {
      explanation_type: "확신의 근거",
      content: "바울의 확신은 자신에게 있지 않고 그리스도께 있습니다. '누구를'(ᾧ)는 인격적 관계를 강조하며, '무엇을'(what)이 아니라 '누구를'(whom) 믿는지가 중요합니다."
    }
  },
  {
    reference: "2 Timothy 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령",
        original_text: "What you heard from me, keep as the pattern of sound teaching",
        korean_translation: "네가 내게서 들은 것을 건전한 가르침의 본으로 지키십시오",
        grammatical_explanation: "유산 보존 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "태도",
        original_text: "with faith and love in Christ Jesus",
        korean_translation: "그리스도 예수 안에 있는 믿음과 사랑으로",
        grammatical_explanation: "수반 조건"
      }
    ],
    vocabulary: [
      { word: "pattern", ipa_pronunciation: "/ˈpætərn/", korean_pronunciation: "패턴", definition_korean: "본, 모범" },
      { word: "sound teaching", ipa_pronunciation: "/saʊnd ˈtiːtʃɪŋ/", korean_pronunciation: "사운드 티칭", definition_korean: "건전한 가르침" }
    ],
    contextual_explanation: {
      integrated_explanation: "'들은 것'(ἤκουσας)을 '본'(ὑποτύπωσιν)으로 지키라는 명령입니다. '건전한 가르침'(ὑγιαινόντων λόγων)은 목회 서신의 핵심 용어입니다(딛 1:9, 2:1). 디모데는 바울에게서 받은 복음을 변질 없이 보존해야 합니다."
    },
    korean_translation: {
      natural_translation: "네가 내게서 들은 것을 그리스도 예수 안에 있는 믿음과 사랑으로 건전한 가르침의 본으로 지키십시오."
    },
    special_explanation: {
      explanation_type: "사도적 전통",
      content: "바울은 디모데에게 받은 가르침을 '본'(ὑποτύπωσις - 모형, 표준)으로 지키라고 합니다. 이는 사도적 전통의 충실한 전승을 강조합니다(살후 2:15, 3:6)."
    }
  },
  {
    reference: "2 Timothy 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령",
        original_text: "Guard the good deposit that was entrusted to you",
        korean_translation: "네게 맡겨진 좋은 것을 지키십시오",
        grammatical_explanation: "보호 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "수단",
        original_text: "guard it with the help of the Holy Spirit who lives in us",
        korean_translation: "우리 안에 거하시는 성령의 도우심으로 그것을 지키십시오",
        grammatical_explanation: "성령의 능력"
      }
    ],
    vocabulary: [
      { word: "guard", ipa_pronunciation: "/ɡɑːrd/", korean_pronunciation: "가드", definition_korean: "지키다" },
      { word: "deposit", ipa_pronunciation: "/dɪˈpɒzɪt/", korean_pronunciation: "디파짓", definition_korean: "맡겨진 것" }
    ],
    contextual_explanation: {
      integrated_explanation: "'좋은 것'(καλὴν παραθήκην)은 복음과 사도적 가르침입니다. 디모데는 성령의 능력으로(διὰ πνεύματος ἁγίου) 이를 지켜야 합니다. 인간의 노력만으로는 불가능하고, 성령이 함께하십니다."
    },
    korean_translation: {
      natural_translation: "네게 맡겨진 좋은 것을 우리 안에 거하시는 성령의 도우심으로 지키십시오."
    },
    special_explanation: {
      explanation_type: "성령의 보호",
      content: "'거하시는'(ἐνοικοῦντος) 성령은 신자 안에 영구적으로 내주하십니다(롬 8:9, 11; 고전 3:16). 복음 보존은 성령의 사역입니다."
    }
  },
  {
    reference: "2 Timothy 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "배교",
        original_text: "You know that everyone in the province of Asia has deserted me",
        korean_translation: "아시아에 있는 모든 사람이 나를 버린 것을 네가 알고 있습니다",
        grammatical_explanation: "슬픈 사실"
      },
      {
        sequence_order: 2,
        semantic_classification: "구체적 예",
        original_text: "including Phygelus and Hermogenes",
        korean_translation: "부겔로와 헤르모게네를 포함하여",
        grammatical_explanation: "특정인 언급"
      }
    ],
    vocabulary: [
      { word: "province", ipa_pronunciation: "/ˈprɒvɪns/", korean_pronunciation: "프라빈스", definition_korean: "지방" },
      { word: "deserted", ipa_pronunciation: "/dɪˈzɜːrtɪd/", korean_pronunciation: "디저티드", definition_korean: "버리다" }
    ],
    contextual_explanation: {
      integrated_explanation: "'아시아'는 로마 속주로 에베소가 중심이었습니다. '버렸다'(ἀπεστράφησαν)는 바울이 로마 감옥에 있을 때 그를 외면했다는 뜻입니다. 부겔로와 헤르모게네는 여기만 언급됩니다."
    },
    korean_translation: {
      natural_translation: "아시아에 있는 모든 사람이, 부겔로와 헤르모게네를 포함하여, 나를 버린 것을 네가 알고 있습니다."
    },
    special_explanation: {
      explanation_type: "배교의 아픔",
      content: "바울은 동역자들의 배신을 경험했습니다. 4:10도 '데마가 이 세상을 사랑하여 나를 버렸다'고 말합니다. 고난 중에 신실함을 유지하기는 어렵습니다."
    }
  },
  {
    reference: "2 Timothy 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "축복 기도",
        original_text: "May the Lord show mercy to the household of Onesiphorus",
        korean_translation: "주께서 오네시보로의 집에 긍휼을 베푸시기를 원합니다",
        grammatical_explanation: "기원"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 1",
        original_text: "because he often refreshed me",
        korean_translation: "왜냐하면 그가 자주 나를 격려했고",
        grammatical_explanation: "근거"
      },
      {
        sequence_order: 3,
        semantic_classification: "이유 2",
        original_text: "and was not ashamed of my chains",
        korean_translation: "내 쇠사슬을 부끄러워하지 않았기 때문입니다",
        grammatical_explanation: "대조적 충성"
      }
    ],
    vocabulary: [
      { word: "mercy", ipa_pronunciation: "/ˈmɜːrsi/", korean_pronunciation: "머시", definition_korean: "긍휼" },
      { word: "household", ipa_pronunciation: "/ˈhaʊshoʊld/", korean_pronunciation: "하우스홀드", definition_korean: "집, 가족" },
      { word: "refreshed", ipa_pronunciation: "/rɪˈfrɛʃt/", korean_pronunciation: "리프레시트", definition_korean: "격려하다" },
      { word: "chains", ipa_pronunciation: "/tʃeɪnz/", korean_pronunciation: "체인즈", definition_korean: "쇠사슬" }
    ],
    contextual_explanation: {
      integrated_explanation: "오네시보로는 바울을 '자주 격려했고'(ἀνέψυξεν) '쇠사슬을 부끄러워하지 않았습니다'(οὐκ ἐπαισχύνθη). 1:15의 배교자들과 대조됩니다. 바울은 그의 '집'(οἶκον)을 위해 기도합니다."
    },
    korean_translation: {
      natural_translation: "주께서 오네시보로의 집에 긍휼을 베푸시기를 원합니다. 왜냐하면 그가 자주 나를 격려했고, 내 쇠사슬을 부끄러워하지 않았기 때문입니다."
    },
    special_explanation: {
      explanation_type: "오네시보로의 충성",
      content: "오네시보로는 바울이 감옥에 있을 때도 그를 찾아가 섬겼습니다. 이는 위험한 일이었으며(1:17), 1:8의 '부끄러워하지 말라'는 권면과 대조됩니다."
    }
  },
  {
    reference: "2 Timothy 1:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조",
        original_text: "On the contrary, when he was in Rome",
        korean_translation: "오히려 그가 로마에 있을 때",
        grammatical_explanation: "상황 설정"
      },
      {
        sequence_order: 2,
        semantic_classification: "헌신",
        original_text: "he searched hard for me until he found me",
        korean_translation: "그가 나를 찾을 때까지 열심히 나를 찾았습니다",
        grammatical_explanation: "적극적 노력"
      }
    ],
    vocabulary: [
      { word: "on the contrary", ipa_pronunciation: "/ɒn ðə ˈkɒntrəri/", korean_pronunciation: "온 더 칸트러리", definition_korean: "오히려" },
      { word: "searched hard", ipa_pronunciation: "/sɜːrtʃt hɑːrd/", korean_pronunciation: "서치트 하드", definition_korean: "열심히 찾다" }
    ],
    contextual_explanation: {
      integrated_explanation: "오네시보로는 로마에서 바울을 '열심히 찾아'(σπουδαιότερον ἐζήτησεν) '찾았습니다'(εὗρεν). 로마 감옥에서 죄수를 찾는 것은 쉽지 않았고 위험했습니다."
    },
    korean_translation: {
      natural_translation: "오히려 그가 로마에 있을 때, 나를 찾을 때까지 열심히 나를 찾았습니다."
    },
    special_explanation: {
      explanation_type: "위험을 무릅쓴 섬김",
      content: "로마 감옥에서 정치범을 방문하는 것은 자신도 연루될 위험이 있었습니다. 오네시보로의 헌신은 진정한 사랑의 본보기입니다."
    }
  },
  {
    reference: "2 Timothy 1:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도",
        original_text: "May the Lord grant that he will find mercy from the Lord on that day",
        korean_translation: "주께서 그가 그날에 주로부터 긍휼을 얻게 하시기를 원합니다",
        grammatical_explanation: "미래 축복 기원"
      },
      {
        sequence_order: 2,
        semantic_classification: "과거 섬김",
        original_text: "You know very well in how many ways he helped me in Ephesus",
        korean_translation: "그가 에베소에서 얼마나 많이 나를 도왔는지 네가 아주 잘 알고 있습니다",
        grammatical_explanation: "증거 확인"
      }
    ],
    vocabulary: [
      { word: "grant", ipa_pronunciation: "/ɡrænt/", korean_pronunciation: "그랜트", definition_korean: "허락하다" },
      { word: "helped", ipa_pronunciation: "/hɛlpt/", korean_pronunciation: "헬프트", definition_korean: "돕다" }
    ],
    contextual_explanation: {
      integrated_explanation: "'그날'(ἐκείνῃ τῇ ἡμέρᾳ)은 재림의 날입니다(1:12). 오네시보로는 '에베소에서'(ἐν Ἐφέσῳ) 바울을 섬겼고, 디모데가 이를 잘 압니다. 바울은 그의 현재와 미래 복을 위해 기도합니다."
    },
    korean_translation: {
      natural_translation: "주께서 그가 그날에 주로부터 긍휼을 얻게 하시기를 원합니다. 그가 에베소에서 얼마나 많이 나를 도왔는지 네가 아주 잘 알고 있습니다."
    },
    special_explanation: {
      explanation_type: "충성에 대한 보상",
      content: "바울은 오네시보로의 충성이 심판의 날에 보상받기를 기도합니다. 마 25:34-40의 '지극히 작은 자에게 한 것이 내게 한 것'과 연결됩니다."
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
