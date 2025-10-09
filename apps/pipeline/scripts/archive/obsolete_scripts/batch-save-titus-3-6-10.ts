import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 3:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성령 부어주심",
        original_text: "whom he poured out on us generously through Jesus Christ our Savior",
        korean_translation: "그분이 우리 구주 예수 그리스도를 통하여 우리에게 풍성히 부어 주신 성령입니다",
        grammatical_explanation: "관계절로 성령 묘사"
      }
    ],
    vocabulary: [
      { word: "poured out", ipa_pronunciation: "/pɔːrd aʊt/", korean_pronunciation: "포드 아웃", definition_korean: "부어 주다" },
      { word: "generously", ipa_pronunciation: "/ˈdʒɛnərəsli/", korean_pronunciation: "제너러슬리", definition_korean: "풍성히" }
    ],
    contextual_explanation: {
      integrated_explanation: "성령을 '풍성히 부어 주심'(ἐξέχεεν ἐφ' ἡμᾶς πλουσίως)은 오순절(행 2:17-18, 33)과 개인 구원 양쪽을 가리킵니다. '풍성히'(πλουσίως)는 하나님의 관대하심을 강조합니다. 매개자는 '우리 구주 예수 그리스도'(διὰ Ἰησοῦ Χριστοῦ τοῦ σωτῆρος ἡμῶν)입니다. 3:4-6은 삼위일체적 구원을 보여줍니다: 하나님 아버지의 사랑(3:4), 예수 그리스도의 중보(3:6), 성령의 능동적 역사(3:5-6)."
    },
    korean_translation: {
      natural_translation: "그분이 우리 구주 예수 그리스도를 통하여 우리에게 풍성히 부어 주신 성령입니다."
    },
    special_explanation: {
      explanation_type: "삼위일체적 구원",
      content: "3:4-6은 삼위일체의 구원 사역을 보여줍니다: 하나님 아버지의 친절과 사랑(3:4), 예수 그리스도의 구속(3:6 '통하여'), 성령의 거듭남과 새로워짐(3:5-6). 이는 엡 1:3-14의 삼위일체적 구원 구조와 유사합니다."
    }
  },
  {
    reference: "Titus 3:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "의롭다 하심",
        original_text: "so that, having been justified by his grace",
        korean_translation: "그래서 우리가 그분의 은혜로 의롭다 하심을 받아",
        grammatical_explanation: "so that으로 목적 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "상속자 됨",
        original_text: "we might become heirs having the hope of eternal life",
        korean_translation: "영생의 소망을 가진 상속자가 되게 하려 하심입니다",
        grammatical_explanation: "최종 목적"
      }
    ],
    vocabulary: [
      { word: "justified", ipa_pronunciation: "/ˈdʒʌstɪfaɪd/", korean_pronunciation: "저스티파이드", definition_korean: "의롭다 하심을 받다" },
      { word: "heirs", ipa_pronunciation: "/ɛrz/", korean_pronunciation: "에어즈", definition_korean: "상속자들" },
      { word: "eternal life", ipa_pronunciation: "/ɪˈtɜːrnəl laɪf/", korean_pronunciation: "이터널 라이프", definition_korean: "영생" }
    ],
    contextual_explanation: {
      integrated_explanation: "구원의 결과가 두 가지로 제시됩니다: (1) '그분의 은혜로 의롭다 하심'(δικαιωθέντες τῇ ἐκείνου χάριτι) - 법정적 선언(롬 3:24, 5:1; 갈 2:16), (2) '영생의 소망을 가진 상속자'(κληρονόμοι κατ' ἐλπίδα ζωῆς αἰωνίου) - 미래 상속(롬 8:17; 갈 3:29, 4:7). '의롭다 하심'은 과거의 법적 지위 변화를, '상속자'는 미래의 영광 참여를 가리킵니다. '소망'(ἐλπίς)은 1:2, 2:13과 연결되며, 확실한 기대입니다."
    },
    korean_translation: {
      natural_translation: "그래서 우리가 그분의 은혜로 의롭다 하심을 받아 영생의 소망을 가진 상속자가 되게 하려 하심입니다."
    },
    special_explanation: {
      explanation_type: "의롭다 하심과 상속",
      content: "'의롭다 하심'(δικαιόω)은 법정 용어로, 무죄 선언을 의미합니다. 로마서와 갈라디아서의 핵심 교리입니다. '상속자'(κληρονόμος)는 로마법의 상속 개념을 사용하여, 신자가 하나님 나라의 합법적 상속자임을 선언합니다(롬 8:17)."
    }
  },
  {
    reference: "Titus 3:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신실한 말",
        original_text: "This is a trustworthy saying",
        korean_translation: "이것은 신실한 말입니다",
        grammatical_explanation: "3:4-7 확증"
      },
      {
        sequence_order: 2,
        semantic_classification: "강조 명령",
        original_text: "And I want you to stress these things",
        korean_translation: "그리고 나는 네가 이것들을 강조하기를 원합니다",
        grammatical_explanation: "바울의 의도"
      },
      {
        sequence_order: 3,
        semantic_classification: "강조의 목적",
        original_text: "so that those who have trusted in God may be careful to devote themselves to doing what is good",
        korean_translation: "그래야 하나님을 믿은 자들이 선한 일을 행하는 데 전념하도록 조심할 것입니다",
        grammatical_explanation: "목적절"
      },
      {
        sequence_order: 4,
        semantic_classification: "가치 평가",
        original_text: "These things are excellent and profitable for everyone",
        korean_translation: "이것들은 모든 사람에게 훌륭하고 유익합니다",
        grammatical_explanation: "선한 일의 가치"
      }
    ],
    vocabulary: [
      { word: "trustworthy saying", ipa_pronunciation: "/ˈtrʌstˌwɜːrði ˈseɪɪŋ/", korean_pronunciation: "트러스트워디 세잉", definition_korean: "신실한 말" },
      { word: "stress", ipa_pronunciation: "/strɛs/", korean_pronunciation: "스트레스", definition_korean: "강조하다" },
      { word: "devote", ipa_pronunciation: "/dɪˈvoʊt/", korean_pronunciation: "디보트", definition_korean: "전념하다" },
      { word: "excellent", ipa_pronunciation: "/ˈɛksələnt/", korean_pronunciation: "엑셀런트", definition_korean: "훌륭한" },
      { word: "profitable", ipa_pronunciation: "/ˈprɒfɪtəbəl/", korean_pronunciation: "프라피터블", definition_korean: "유익한" }
    ],
    contextual_explanation: {
      integrated_explanation: "'신실한 말'(πιστὸς ὁ λόγος)은 목회 서신에 5번 나오는 표현으로(딤전 1:15, 3:1, 4:9; 딤후 2:11; 딛 3:8), 핵심 교리를 강조합니다. 여기서는 3:4-7의 구원론을 가리킵니다. 디도는 '이것들을 강조'(διαβεβαιοῦσθαι)해야 하며, 목적은 '선한 일에 전념'(καλῶν ἔργων προΐστασθαι)입니다. '선한 일'은 디도서의 핵심 주제입니다(1:16; 2:7, 14; 3:1, 14). 이것들은 '훌륭하고 유익'(καλὰ καὶ ὠφέλιμα)하여 '모든 사람에게'(τοῖς ἀνθρώποις) 도움이 됩니다."
    },
    korean_translation: {
      natural_translation: "이것은 신실한 말입니다. 그리고 나는 네가 이것들을 강조하기를 원합니다. 그래야 하나님을 믿은 자들이 선한 일을 행하는 데 전념하도록 조심할 것입니다. 이것들은 모든 사람에게 훌륭하고 유익합니다."
    },
    special_explanation: {
      explanation_type: "신실한 말 공식",
      content: "'신실한 말'(πιστὸς ὁ λόγος)은 목회 서신의 독특한 표현으로, 중요한 신학적 진술을 표시합니다. 5번 모두 구원론(딤전 1:15), 교회 지도력(딤전 3:1), 경건 훈련(딤전 4:9), 인내(딤후 2:11), 구원(딛 3:8)과 관련됩니다."
    }
  },
  {
    reference: "Titus 3:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "피해야 할 것들",
        original_text: "But avoid foolish controversies and genealogies and arguments and quarrels about the law",
        korean_translation: "그러나 어리석은 논쟁과 족보와 말다툼과 율법에 관한 다툼을 피하십시오",
        grammatical_explanation: "but으로 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유",
        original_text: "because these are unprofitable and useless",
        korean_translation: "왜냐하면 이것들은 무익하고 쓸모없기 때문입니다",
        grammatical_explanation: "because로 이유 제시"
      }
    ],
    vocabulary: [
      { word: "avoid", ipa_pronunciation: "/əˈvɔɪd/", korean_pronunciation: "어보이드", definition_korean: "피하다" },
      { word: "foolish", ipa_pronunciation: "/ˈfuːlɪʃ/", korean_pronunciation: "풀리시", definition_korean: "어리석은" },
      { word: "controversies", ipa_pronunciation: "/ˈkɒntrəvɜːrsiz/", korean_pronunciation: "컨트러버시즈", definition_korean: "논쟁들" },
      { word: "genealogies", ipa_pronunciation: "/ˌdʒiːniˈælədʒiz/", korean_pronunciation: "지니얼러지즈", definition_korean: "족보들" },
      { word: "quarrels", ipa_pronunciation: "/ˈkwɒrəlz/", korean_pronunciation: "쿼럴즈", definition_korean: "다툼들" },
      { word: "unprofitable", ipa_pronunciation: "/ʌnˈprɒfɪtəbəl/", korean_pronunciation: "언프라피터블", definition_korean: "무익한" },
      { word: "useless", ipa_pronunciation: "/ˈjuːsləs/", korean_pronunciation: "유스리스", definition_korean: "쓸모없는" }
    ],
    contextual_explanation: {
      integrated_explanation: "3:8의 '유익한 것들'(ὠφέλιμα)과 대조하여 '피해야 할 것들'이 제시됩니다. 4가지: (1) '어리석은 논쟁'(μωρὰς ζητήσεις), (2) '족보'(γενεαλογίας - 딤전 1:4와 유사, 유대적 환상 이야기), (3) '말다툼'(ἔρεις), (4) '율법에 관한 다툼'(μάχας νομικάς - 율법주의적 논쟁). 이것들은 '무익하고 쓸모없습니다'(ἀνωφελεῖς καὶ μάταιοι). 1:10-16의 거짓 교사들의 문제와 연결됩니다. 바울은 논쟁을 위한 논쟁이 아니라 실천적 경건을 강조합니다(딤전 1:4; 딤후 2:23)."
    },
    korean_translation: {
      natural_translation: "그러나 어리석은 논쟁과 족보와 말다툼과 율법에 관한 다툼을 피하십시오. 왜냐하면 이것들은 무익하고 쓸모없기 때문입니다."
    },
    special_explanation: {
      explanation_type: "쓸데없는 논쟁",
      content: "바울은 반복적으로 쓸데없는 신학적 논쟁을 경고합니다(딤전 1:4, 6:4; 딤후 2:14, 23). '족보'는 환상적 유대 전통과 영적 우월성 주장을 가리킵니다. 목회 서신의 일관된 메시지는 논쟁보다 경건한 삶입니다."
    }
  },
  {
    reference: "Titus 3:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "분열자 대응",
        original_text: "Warn a divisive person once, and then warn them a second time",
        korean_translation: "분열을 일으키는 사람을 한 번 경고하고, 두 번째 경고하십시오",
        grammatical_explanation: "2회 경고 절차"
      },
      {
        sequence_order: 2,
        semantic_classification: "최종 조치",
        original_text: "After that, have nothing to do with them",
        korean_translation: "그 후에는 그들과 상종하지 마십시오",
        grammatical_explanation: "교제 단절"
      }
    ],
    vocabulary: [
      { word: "warn", ipa_pronunciation: "/wɔːrn/", korean_pronunciation: "워른", definition_korean: "경고하다" },
      { word: "divisive", ipa_pronunciation: "/dɪˈvaɪsɪv/", korean_pronunciation: "디바이시브", definition_korean: "분열을 일으키는" },
      { word: "have nothing to do", ipa_pronunciation: "/hæv ˈnʌθɪŋ tuː duː/", korean_pronunciation: "해브 너씽 투 두", definition_korean: "상종하지 않다" }
    ],
    contextual_explanation: {
      integrated_explanation: "'분열을 일으키는 사람'(αἱρετικὸν ἄνθρωπον - '이단적 사람')을 다루는 절차가 제시됩니다. (1) 한 번 경고(νουθεσίαν), (2) 두 번째 경고, (3) '상종하지 않음'(παραιτοῦ - 거부, 교제 단절). 이는 마 18:15-17의 교회 징계 절차와 유사하지만 더 간결합니다. '분열 일으키는 자'는 교회의 하나됨을 깨뜨리는 거짓 교사들을 가리킵니다(롬 16:17; 고전 11:19도 유사). 목적은 회개 기회를 주되, 교회 전체를 보호하는 것입니다."
    },
    korean_translation: {
      natural_translation: "분열을 일으키는 사람을 한 번 경고하고, 두 번째 경고한 후에는 그들과 상종하지 마십시오."
    },
    special_explanation: {
      explanation_type: "교회 징계",
      content: "'분열 일으키는 자'(αἱρετικός)는 영어 'heretic'(이단)의 어원이지만, 여기서는 교리적 이탈보다 공동체 분열에 초점이 있습니다. 2회 경고 후 교제 단절은 마 18:15-17의 원리를 반영하며, 개인과 공동체 양쪽을 보호합니다."
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
