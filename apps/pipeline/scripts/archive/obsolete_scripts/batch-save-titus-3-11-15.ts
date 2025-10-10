import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 3:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "분열자의 상태",
        original_text: "You may be sure that such people are warped and sinful",
        korean_translation: "그런 사람들은 비뚤어지고 죄를 짓고 있음을 네가 확신할 수 있습니다",
        grammatical_explanation: "확신의 근거"
      },
      {
        sequence_order: 2,
        semantic_classification: "자기 정죄",
        original_text: "they are self-condemned",
        korean_translation: "그들은 스스로 정죄받았습니다",
        grammatical_explanation: "최종 판단"
      }
    ],
    vocabulary: [
      { word: "warped", ipa_pronunciation: "/wɔːrpt/", korean_pronunciation: "워프트", definition_korean: "비뚤어진" },
      { word: "sinful", ipa_pronunciation: "/ˈsɪnfəl/", korean_pronunciation: "신풀", definition_korean: "죄짓는" },
      { word: "self-condemned", ipa_pronunciation: "/sɛlf kənˈdɛmd/", korean_pronunciation: "셀프 컨뎀드", definition_korean: "스스로 정죄받은" }
    ],
    contextual_explanation: {
      integrated_explanation: "3:10의 분열자에 대한 판단입니다. 그들은 '비뚤어졌고'(ἐξέστραπται - '길에서 벗어남'), '죄짓고 있으며'(ἁμαρτάνει), '스스로 정죄받았습니다'(αὐτοκατάκριτος). '스스로 정죄'는 그들이 경고를 거부함으로써 스스로 유죄를 입증했다는 뜻입니다. 2회 경고(3:10) 후에도 회개하지 않으면, 그들의 완고함이 그들을 정죄합니다."
    },
    korean_translation: {
      natural_translation: "그런 사람들은 비뚤어지고 죄를 짓고 있으며, 스스로 정죄받았음을 네가 확신할 수 있습니다."
    },
    special_explanation: {
      explanation_type: "스스로 정죄",
      content: "'스스로 정죄'(αὐτοκατάκριτος)는 신약에서 여기에만 나오는 표현입니다. 분열자가 반복된 경고를 거부함으로써 자신의 죄를 입증한다는 뜻입니다. 마 23:31에서 바리새인들이 '스스로 증거'하는 것과 유사한 개념입니다."
    }
  },
  {
    reference: "Titus 3:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "인사 계획",
        original_text: "As soon as I send Artemas or Tychicus to you",
        korean_translation: "내가 아르테마나 두기고를 네게 보내는 즉시",
        grammatical_explanation: "시간 조건"
      },
      {
        sequence_order: 2,
        semantic_classification: "요청",
        original_text: "do your best to come to me at Nicopolis",
        korean_translation: "니고볼리에 있는 나에게 오도록 최선을 다하십시오",
        grammatical_explanation: "명령"
      },
      {
        sequence_order: 3,
        semantic_classification: "이유",
        original_text: "because I have decided to winter there",
        korean_translation: "왜냐하면 나는 거기서 겨울을 나기로 결정했기 때문입니다",
        grammatical_explanation: "because로 이유 설명"
      }
    ],
    vocabulary: [
      { word: "send", ipa_pronunciation: "/sɛnd/", korean_pronunciation: "센드", definition_korean: "보내다" },
      { word: "do your best", ipa_pronunciation: "/duː jɔːr bɛst/", korean_pronunciation: "두 요어 베스트", definition_korean: "최선을 다하다" },
      { word: "winter", ipa_pronunciation: "/ˈwɪntər/", korean_pronunciation: "윈터", definition_korean: "겨울을 나다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 여행 계획이 언급됩니다. '아르테마'(Ἀρτεμᾶν)는 신약에서 여기만 나옵니다. '두기고'(Τυχικὸν)는 바울의 신뢰받는 동역자로(행 20:4; 엡 6:21; 골 4:7; 딤후 4:12) 자주 언급됩니다. '니고볼리'(Νικόπολιν)는 그리스 서부 해안의 도시로, 바울이 거기서 '겨울을 나려'(παραχειμάσαι) 했습니다. 지중해 항해는 겨울(11월-2월)에 위험했습니다(행 27:9-12). 이는 바울이 디도를 크레타에서 불러 합류시키려는 계획입니다."
    },
    korean_translation: {
      natural_translation: "내가 아르테마나 두기고를 네게 보내는 즉시, 니고볼리에 있는 나에게 오도록 최선을 다하십시오. 왜냐하면 나는 거기서 겨울을 나기로 결정했기 때문입니다."
    },
    special_explanation: {
      explanation_type: "바울의 동역자들",
      content: "두기고는 바울의 가장 신뢰받는 사역자 중 하나였습니다. 바울은 그를 '사랑하는 형제요 신실한 일꾼'(엡 6:21)이라 불렀습니다. 바울이 디도를 대체할 사람으로 두기고를 보낸 것은 크레타 교회의 중요성을 보여줍니다."
    }
  },
  {
    reference: "Titus 3:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "도움 요청",
        original_text: "Do everything you can to help Zenas the lawyer and Apollos on their way",
        korean_translation: "율법사 제나스와 아볼로가 여정을 떠날 때 모든 것을 다하여 도우십시오",
        grammatical_explanation: "명령과 목적"
      },
      {
        sequence_order: 2,
        semantic_classification: "공급 확인",
        original_text: "and see that they have everything they need",
        korean_translation: "그리고 그들이 필요한 모든 것을 갖추도록 하십시오",
        grammatical_explanation: "추가 지시"
      }
    ],
    vocabulary: [
      { word: "lawyer", ipa_pronunciation: "/ˈlɔːjər/", korean_pronunciation: "로이어", definition_korean: "율법사, 법률가" },
      { word: "on their way", ipa_pronunciation: "/ɒn ðɛr weɪ/", korean_pronunciation: "온 데어 웨이", definition_korean: "여정을 떠날 때" },
      { word: "see that", ipa_pronunciation: "/siː ðæt/", korean_pronunciation: "시 댓", definition_korean: "~하도록 확인하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "두 사람이 언급됩니다: '율법사 제나스'(Ζηνᾶν τὸν νομικὸν - 신약에서 여기만 나옴)와 '아볼로'(Ἀπολλῶν - 고린도 교회의 지도자, 행 18:24; 고전 1:12, 3:4-6). '율법사'(νομικός)는 율법 전문가를 의미합니다. 디도는 그들의 여정을 '모든 것을 다하여'(σπουδαίως) 돕고, '필요한 모든 것을 갖추도록'(μηδὲν αὐτοῖς λείπῃ) 해야 했습니다. 이는 초대교회의 여행 사역자 환대 문화를 보여줍니다(롬 15:24; 고전 16:6, 11; 요삼 1:5-8)."
    },
    korean_translation: {
      natural_translation: "율법사 제나스와 아볼로가 여정을 떠날 때 모든 것을 다하여 도와서, 그들이 필요한 모든 것을 갖추도록 하십시오."
    },
    special_explanation: {
      explanation_type: "아볼로",
      content: "아볼로는 알렉산드리아 출신의 뛰어난 웅변가이자 성경 해석자였습니다(행 18:24). 고린도 교회에서 바울과 함께 사역했으며(고전 3:5-9), 일부는 그를 히브리서의 저자로 추정합니다. 바울이 그를 디도에게 추천한 것은 그의 신뢰를 보여줍니다."
    }
  },
  {
    reference: "Titus 3:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "학습 필요",
        original_text: "Our people must learn to devote themselves to doing what is good",
        korean_translation: "우리 사람들은 선한 일을 행하는 데 전념하는 것을 배워야 합니다",
        grammatical_explanation: "필수 학습"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적 1",
        original_text: "in order to provide for urgent needs",
        korean_translation: "긴급한 필요를 공급하기 위해",
        grammatical_explanation: "목적절 1"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 2",
        original_text: "and not live unproductive lives",
        korean_translation: "그리고 열매 없는 삶을 살지 않기 위해서입니다",
        grammatical_explanation: "목적절 2"
      }
    ],
    vocabulary: [
      { word: "learn", ipa_pronunciation: "/lɜːrn/", korean_pronunciation: "런", definition_korean: "배우다" },
      { word: "devote", ipa_pronunciation: "/dɪˈvoʊt/", korean_pronunciation: "디보트", definition_korean: "전념하다" },
      { word: "urgent needs", ipa_pronunciation: "/ˈɜːrdʒənt niːdz/", korean_pronunciation: "어전트 니즈", definition_korean: "긴급한 필요들" },
      { word: "unproductive", ipa_pronunciation: "/ˌʌnprəˈdʌktɪv/", korean_pronunciation: "언프러덕티브", definition_korean: "열매 없는" }
    ],
    contextual_explanation: {
      integrated_explanation: "디도서의 최종 권면입니다. '우리 사람들'(οἱ ἡμέτεροι - '우리 편 사람들', 크레타 신자들)은 '선한 일에 전념하는 것을 배워야'(μανθανέτωσαν προΐστασθαι καλῶν ἔργων) 합니다. 목적은 두 가지: (1) '긴급한 필요 공급'(εἰς τὰς ἀναγκαίας χρείας), (2) '열매 없는 삶을 살지 않음'(μὴ ὦσιν ἄκαρποι). '선한 일'은 디도서의 핵심 주제로(1:16; 2:7, 14; 3:1, 8), 마지막에 다시 강조됩니다. 크레타인들은 '게으른 먹보'(1:12)였지만, 복음은 그들을 '선한 일에 열심'(2:14)인 자로 변화시켜야 했습니다."
    },
    korean_translation: {
      natural_translation: "우리 사람들은 긴급한 필요를 공급하고 열매 없는 삶을 살지 않기 위해 선한 일을 행하는 데 전념하는 것을 배워야 합니다."
    },
    special_explanation: {
      explanation_type: "선한 일의 강조",
      content: "디도서는 '선한 일'(καλὰ ἔργα)을 7번 언급하여(1:16; 2:7, 14; 3:1, 8, 14), 바울 서신 중 가장 높은 빈도를 보입니다. 이는 은혜로 구원받은 자들의 필연적 열매입니다(엡 2:10). 디도서는 교리(믿음)와 실천(행함)의 균형을 보여줍니다."
    }
  },
  {
    reference: "Titus 3:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "문안 인사",
        original_text: "Everyone with me sends you greetings",
        korean_translation: "나와 함께 있는 모든 사람이 네게 문안합니다",
        grammatical_explanation: "공동체 인사"
      },
      {
        sequence_order: 2,
        semantic_classification: "인사 전달",
        original_text: "Greet those who love us in the faith",
        korean_translation: "믿음 안에서 우리를 사랑하는 자들에게 문안하십시오",
        grammatical_explanation: "상호 인사"
      },
      {
        sequence_order: 3,
        semantic_classification: "축복",
        original_text: "Grace be with you all",
        korean_translation: "은혜가 너희 모두와 함께 있기를 바랍니다",
        grammatical_explanation: "최종 축복"
      }
    ],
    vocabulary: [
      { word: "greetings", ipa_pronunciation: "/ˈɡriːtɪŋz/", korean_pronunciation: "그리팅즈", definition_korean: "문안, 인사" },
      { word: "love", ipa_pronunciation: "/lʌv/", korean_pronunciation: "러브", definition_korean: "사랑하다" },
      { word: "grace", ipa_pronunciation: "/ɡreɪs/", korean_pronunciation: "그레이스", definition_korean: "은혜" }
    ],
    contextual_explanation: {
      integrated_explanation: "디도서의 마무리입니다. '나와 함께 있는 모든 사람'(οἱ μετ' ἐμοῦ πάντες)은 바울의 동역자들을 가리킵니다. '믿음 안에서 우리를 사랑하는 자들'(τοὺς φιλοῦντας ἡμᾶς ἐν πίστει)은 크레타의 신실한 신자들입니다. 최종 축복은 '은혜가 너희 모두와 함께'(ἡ χάρις μετὰ πάντων ὑμῶν)입니다. '너희 모두'(복수)는 디도뿐 아니라 크레타 교회 전체를 포함합니다. 디도서는 은혜로 시작하여(1:4) 은혜로 끝나며, 그 사이 은혜의 나타남(2:11)과 은혜로 의롭다 하심(3:7)을 가르쳤습니다."
    },
    korean_translation: {
      natural_translation: "나와 함께 있는 모든 사람이 네게 문안합니다. 믿음 안에서 우리를 사랑하는 자들에게 문안하십시오. 은혜가 너희 모두와 함께 있기를 바랍니다."
    },
    special_explanation: {
      explanation_type: "은혜의 포괄",
      content: "디도서는 은혜(χάρις)로 시작하고(1:4) 은혜로 끝납니다(3:15). 전체 서신은 은혜의 신학을 전개합니다: 은혜의 나타남(2:11), 은혜의 훈련(2:12), 은혜로 의롭다 하심(3:7). 최종 축복의 '너희 모두'(πάντων ὑμῶν)는 개인적 서신이지만 교회 공동체 전체를 염두에 두었음을 보여줍니다."
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
