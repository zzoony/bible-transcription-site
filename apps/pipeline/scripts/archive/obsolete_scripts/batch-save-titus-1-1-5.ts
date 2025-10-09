import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "발신자 소개",
        original_text: "Paul, a servant of God and an apostle of Jesus Christ",
        korean_translation: "하나님의 종이며 예수 그리스도의 사도인 바울이",
        grammatical_explanation: "이중 직함으로 권위 확립"
      },
      {
        sequence_order: 2,
        semantic_classification: "사도직의 목적 1",
        original_text: "to further the faith of God's elect",
        korean_translation: "하나님의 택하신 자들의 믿음을 진작시키고",
        grammatical_explanation: "부정사구로 사명 설명"
      },
      {
        sequence_order: 3,
        semantic_classification: "사도직의 목적 2",
        original_text: "and their knowledge of the truth that leads to godliness",
        korean_translation: "경건에 이르게 하는 진리의 지식을 증진시키기 위해",
        grammatical_explanation: "병렬 목적"
      }
    ],
    vocabulary: [
      { word: "servant", ipa_pronunciation: "/ˈsɜːrvənt/", korean_pronunciation: "서번트", definition_korean: "종" },
      { word: "apostle", ipa_pronunciation: "/əˈpɒsəl/", korean_pronunciation: "어파슬", definition_korean: "사도" },
      { word: "further", ipa_pronunciation: "/ˈfɜːrðər/", korean_pronunciation: "퍼더", definition_korean: "진작시키다, 촉진하다" },
      { word: "elect", ipa_pronunciation: "/ɪˈlɛkt/", korean_pronunciation: "일렉트", definition_korean: "택함받은 자들" },
      { word: "godliness", ipa_pronunciation: "/ˈɡɒdlinəs/", korean_pronunciation: "갓리니스", definition_korean: "경건" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신을 '하나님의 종이자 예수 그리스도의 사도'로 소개합니다. '종'(δοῦλος)은 겸손을, '사도'(ἀπόστολος)는 권위를 나타냅니다. 그의 사도직 목적은 '하나님의 택하신 자들의 믿음을 진작시키고' '경건에 이르는 진리의 지식을 증진'시키는 것입니다. 디도서는 목회 서신(Pastoral Epistles) 중 하나로, 교회 조직과 건강한 교리를 강조합니다."
    },
    korean_translation: {
      natural_translation: "하나님의 종이며 예수 그리스도의 사도인 바울이, 하나님의 택하신 자들의 믿음을 진작시키고 경건에 이르게 하는 진리의 지식을 증진시키기 위하여,"
    },
    special_explanation: {
      explanation_type: "목회 서신의 특징",
      content: "디도서는 디모데전후서와 함께 '목회 서신'으로 분류되며, 교회 지도자의 자격과 건강한 교리를 강조합니다. '경건'(εὐσέβεια)은 목회 서신의 핵심 주제로, 지식이 단순한 교리가 아니라 삶의 변화로 이어져야 함을 강조합니다."
    }
  },
  {
    reference: "Titus 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "믿음의 근거",
        original_text: "in the hope of eternal life",
        korean_translation: "영생의 소망 안에서",
        grammatical_explanation: "전치사구로 동기 설명"
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님의 속성",
        original_text: "which God, who does not lie, promised",
        korean_translation: "거짓말하지 않으시는 하나님께서 약속하신",
        grammatical_explanation: "관계절로 하나님 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "약속의 시기",
        original_text: "before the beginning of time",
        korean_translation: "영원 전에",
        grammatical_explanation: "시간 표현"
      }
    ],
    vocabulary: [
      { word: "eternal life", ipa_pronunciation: "/ɪˈtɜːrnəl laɪf/", korean_pronunciation: "이터널 라이프", definition_korean: "영생" },
      { word: "lie", ipa_pronunciation: "/laɪ/", korean_pronunciation: "라이", definition_korean: "거짓말하다" },
      { word: "promised", ipa_pronunciation: "/ˈprɒmɪst/", korean_pronunciation: "프로미스트", definition_korean: "약속하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 사명은 '영생의 소망'에 기초합니다. 이 소망은 '거짓말하지 않으시는 하나님'의 약속에 근거하며, 그 약속은 '영원 전'(πρὸ χρόνων αἰωνίων)에 이루어졌습니다. 이는 하나님의 구원 계획이 창조 이전부터 영원한 작정 속에 있었음을 나타냅니다(엡 1:4, 딤후 1:9)."
    },
    korean_translation: {
      natural_translation: "거짓말하지 않으시는 하나님께서 영원 전에 약속하신 영생의 소망 안에서,"
    },
    special_explanation: {
      explanation_type: "하나님의 신실성",
      content: "'거짓말하지 않으시는 하나님'(ὁ ἀψευδὴς θεός)은 민수기 23:19와 히브리서 6:18을 반영하며, 하나님의 약속의 절대적 신뢰성을 강조합니다. 거짓말이 만연한 크레타 문화(1:12)와 대조됩니다."
    }
  },
  {
    reference: "Titus 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "계시의 시기",
        original_text: "and which now at his appointed season he has brought to light",
        korean_translation: "그리고 정하신 때에 지금 나타내신 것인데",
        grammatical_explanation: "하나님의 주권적 시간표"
      },
      {
        sequence_order: 2,
        semantic_classification: "계시의 수단",
        original_text: "through the preaching entrusted to me",
        korean_translation: "내게 맡기신 전파로 말미암아",
        grammatical_explanation: "바울의 사명"
      },
      {
        sequence_order: 3,
        semantic_classification: "권위의 근원",
        original_text: "by the command of God our Savior",
        korean_translation: "우리 구주 하나님의 명령대로",
        grammatical_explanation: "신적 권위"
      }
    ],
    vocabulary: [
      { word: "appointed season", ipa_pronunciation: "/əˈpɔɪntɪd ˈsiːzən/", korean_pronunciation: "어포인티드 시즌", definition_korean: "정하신 때" },
      { word: "brought to light", ipa_pronunciation: "/brɔːt tuː laɪt/", korean_pronunciation: "브롯 투 라이트", definition_korean: "나타내다, 밝히다" },
      { word: "entrusted", ipa_pronunciation: "/ɪnˈtrʌstɪd/", korean_pronunciation: "인트러스티드", definition_korean: "맡기다" }
    ],
    contextual_explanation: {
      integrated_explanation: "영원한 약속(1:2)이 '정하신 때에'(καιροῖς ἰδίοις) 복음 전파를 통해 나타났습니다. 바울은 이 전파를 '하나님의 명령'으로 받았으며, 하나님을 '우리 구주'(τοῦ σωτῆρος ἡμῶν θεοῦ)라 칭합니다. 디도서에서 '구주'는 하나님과 그리스도 양쪽에 적용되어(1:3, 1:4), 양자의 동등성을 암시합니다."
    },
    korean_translation: {
      natural_translation: "정하신 때에 내게 맡기신 전파를 통하여 그 말씀을 나타내셨으니, 이는 우리 구주 하나님의 명령대로 된 것입니다."
    },
    special_explanation: {
      explanation_type: "구원사적 시간표",
      content: "'정하신 때'는 하나님의 주권적 구원사 시간표를 나타내며, 갈라디아서 4:4('때가 차매')와 연결됩니다. 영원한 계획이 역사 속에서 실현되는 패턴을 보여줍니다."
    }
  },
  {
    reference: "Titus 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수신자 지정",
        original_text: "To Titus, my true son in our common faith",
        korean_translation: "같은 믿음을 따라 된 나의 참 아들 디도에게",
        grammatical_explanation: "친밀한 관계 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "축복 기원",
        original_text: "Grace and peace from God the Father and Christ Jesus our Savior",
        korean_translation: "하나님 아버지와 우리 구주 그리스도 예수로부터 은혜와 평강이 있을지어다",
        grammatical_explanation: "전형적 서신 인사"
      }
    ],
    vocabulary: [
      { word: "true son", ipa_pronunciation: "/truː sʌn/", korean_pronunciation: "트루 선", definition_korean: "참 아들" },
      { word: "common faith", ipa_pronunciation: "/ˈkɒmən feɪθ/", korean_pronunciation: "코먼 페이스", definition_korean: "같은 믿음" },
      { word: "grace", ipa_pronunciation: "/ɡreɪs/", korean_pronunciation: "그레이스", definition_korean: "은혜" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디도를 '참 아들'(γνησίῳ τέκνῳ)이라 부르며, '같은 믿음'(κατὰ κοινὴν πίστιν)을 강조합니다. 디도는 바울의 동역자로 고린도 문제를 해결하고(고후 7-8장) 크레타에 파송되었습니다. '은혜와 평강'은 전형적 바울 서신 인사이며, '하나님 아버지'와 '그리스도 예수 우리 구주'를 함께 언급하여 그리스도의 신성을 암시합니다."
    },
    korean_translation: {
      natural_translation: "같은 믿음을 따라 된 나의 참 아들 디도에게, 하나님 아버지와 우리 구주 그리스도 예수로부터 은혜와 평강이 있을지어다."
    },
    special_explanation: {
      explanation_type: "디도의 배경",
      content: "디도는 헬라인 개종자로(갈 2:3), 바울의 신뢰받는 동역자였습니다. 바울은 그를 '참 아들'이라 부르며 영적 유대를 강조합니다. '같은 믿음'은 유대인-이방인 간 복음의 보편성을 나타냅니다."
    }
  },
  {
    reference: "Titus 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "서신 목적 1",
        original_text: "The reason I left you in Crete was that you might put in order what was left unfinished",
        korean_translation: "내가 너를 크레타에 남겨 둔 이유는 네가 미처 다 못한 일을 정돈하게 하려 함이니",
        grammatical_explanation: "목적절로 사명 설명"
      },
      {
        sequence_order: 2,
        semantic_classification: "서신 목적 2",
        original_text: "and appoint elders in every town, as I directed you",
        korean_translation: "내가 네게 명한 대로 각 성에 장로들을 세우게 하려 함이라",
        grammatical_explanation: "구체적 지시사항"
      }
    ],
    vocabulary: [
      { word: "put in order", ipa_pronunciation: "/pʊt ɪn ˈɔːrdər/", korean_pronunciation: "풋 인 오더", definition_korean: "정돈하다, 바로잡다" },
      { word: "unfinished", ipa_pronunciation: "/ʌnˈfɪnɪʃt/", korean_pronunciation: "언피니시트", definition_korean: "미완성의" },
      { word: "appoint", ipa_pronunciation: "/əˈpɔɪnt/", korean_pronunciation: "어포인트", definition_korean: "임명하다" },
      { word: "elders", ipa_pronunciation: "/ˈɛldərz/", korean_pronunciation: "엘더즈", definition_korean: "장로들" }
    ],
    contextual_explanation: {
      integrated_explanation: "디도의 크레타 사명은 '미처 다 못한 일을 정돈'하고 '각 성에 장로들을 세우는' 것입니다. 크레타는 100개 도시가 있는 큰 섬으로, 교회 조직이 필요했습니다. '장로들'(πρεσβυτέρους)은 초대교회 지도자 직분으로, 1:6-9에서 자격 요건이 상세히 제시됩니다. 디도서의 핵심은 건강한 교회 조직과 교리 확립입니다."
    },
    korean_translation: {
      natural_translation: "내가 너를 크레타에 남겨 둔 이유는 네가 미처 다 못한 일을 정돈하고, 내가 네게 명한 대로 각 성에 장로들을 세우게 하려 함이라."
    },
    special_explanation: {
      explanation_type: "초대교회 조직",
      content: "장로 임명은 초대교회의 표준 관행이었습니다(행 14:23). 디도서는 장로/감독의 자격을 상세히 제시하여(1:6-9), 교회 지도력의 중요성을 강조합니다. 크레타의 도덕적 문제(1:12)로 인해 건강한 리더십이 더욱 필요했습니다."
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
