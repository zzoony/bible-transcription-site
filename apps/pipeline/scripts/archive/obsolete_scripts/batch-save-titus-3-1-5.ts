import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 3:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "시민적 책임 1",
        original_text: "Remind the people to be subject to rulers and authorities, to be obedient",
        korean_translation: "사람들에게 통치자들과 권세들에게 복종하고 순종하며",
        grammatical_explanation: "remind로 기억 환기"
      },
      {
        sequence_order: 2,
        semantic_classification: "시민적 책임 2",
        original_text: "to be ready to do whatever is good",
        korean_translation: "모든 선한 일을 행할 준비가 되어 있으라고 상기시키십시오",
        grammatical_explanation: "긍정적 행동 준비"
      }
    ],
    vocabulary: [
      { word: "remind", ipa_pronunciation: "/rɪˈmaɪnd/", korean_pronunciation: "리마인드", definition_korean: "상기시키다" },
      { word: "subject", ipa_pronunciation: "/səbˈdʒɛkt/", korean_pronunciation: "서브젝트", definition_korean: "복종하는" },
      { word: "rulers", ipa_pronunciation: "/ˈruːlərz/", korean_pronunciation: "룰러즈", definition_korean: "통치자들" },
      { word: "authorities", ipa_pronunciation: "/əˈθɒrətiz/", korean_pronunciation: "어써리티즈", definition_korean: "권세들" },
      { word: "obedient", ipa_pronunciation: "/əˈbiːdiənt/", korean_pronunciation: "어비디언트", definition_korean: "순종하는" }
    ],
    contextual_explanation: {
      integrated_explanation: "3장은 실천적 권면으로 시작합니다. '상기시키다'(ὑπομιμνῄσκε)는 반복적 가르침을 의미합니다. 세 가지 시민적 책임: (1) '통치자들과 권세들에게 복종'(ἀρχαῖς ἐξουσίαις ὑποτάσσεσθαι), (2) '순종'(πειθαρχεῖν), (3) '모든 선한 일을 행할 준비'(πρὸς πᾶν ἔργον ἀγαθὸν ἑτοίμους εἶναι). 로마 제국 시대, 기독교는 종종 반역적으로 오해받았습니다. 바울은 신자들이 좋은 시민이 되도록 권면합니다(롬 13:1-7; 벧전 2:13-17). '선한 일'은 디도서의 핵심 주제입니다(1:16; 2:7, 14; 3:8, 14)."
    },
    korean_translation: {
      natural_translation: "사람들에게 통치자들과 권세들에게 복종하고 순종하며, 모든 선한 일을 행할 준비가 되어 있으라고 상기시키십시오."
    },
    special_explanation: {
      explanation_type: "기독교와 국가",
      content: "초대교회는 로마 제국 아래서 박해받았지만, 바울은 합법적 권위 존중을 가르쳤습니다. 단, 국가가 하나님의 명령과 충돌할 때는 '하나님께 순종하는 것이 사람에게 순종하는 것보다 옳다'(행 5:29)는 원리가 적용됩니다. 롬 13:1-7도 유사한 가르침을 제공합니다."
    }
  },
  {
    reference: "Titus 3:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대인 관계 1",
        original_text: "to slander no one, to be peaceable and considerate",
        korean_translation: "아무도 비방하지 않고, 평화롭고 관대하며",
        grammatical_explanation: "3가지 사회적 태도"
      },
      {
        sequence_order: 2,
        semantic_classification: "대인 관계 2",
        original_text: "and always to be gentle toward everyone",
        korean_translation: "항상 모든 사람에게 온유함을 보이라고 하십시오",
        grammatical_explanation: "포괄적 온유"
      }
    ],
    vocabulary: [
      { word: "slander", ipa_pronunciation: "/ˈslændər/", korean_pronunciation: "슬랜더", definition_korean: "비방하다" },
      { word: "peaceable", ipa_pronunciation: "/ˈpiːsəbəl/", korean_pronunciation: "피서블", definition_korean: "평화로운" },
      { word: "considerate", ipa_pronunciation: "/kənˈsɪdərət/", korean_pronunciation: "컨시더릿", definition_korean: "관대한" },
      { word: "gentle", ipa_pronunciation: "/ˈdʒɛntəl/", korean_pronunciation: "젠틀", definition_korean: "온유한" }
    ],
    contextual_explanation: {
      integrated_explanation: "대인 관계에서 4가지 태도: (1) '비방 않음'(μηδένα βλασφημεῖν), (2) '평화로움'(ἀμάχους εἶναι - '싸우지 않음'), (3) '관대함'(ἐπιεικεῖς - '양보하는'), (4) '온유함'(πραΰτητα - 모든 사람에게, πρὸς πάντας ἀνθρώπους). 이는 1:12-13에서 묘사된 크레타 문화(거짓말, 악함)와 정반대입니다. 온유(πραΰτης)는 그리스도의 특징이며(마 11:29), 성령의 열매입니다(갈 5:23). '모든 사람에게'는 신자와 불신자 모두를 포함합니다."
    },
    korean_translation: {
      natural_translation: "아무도 비방하지 않고, 평화롭고 관대하며, 항상 모든 사람에게 온유함을 보이라고 하십시오."
    },
    special_explanation: {
      explanation_type: "온유의 힘",
      content: "온유(πραΰτης)는 약함이 아니라 통제된 힘입니다. 모세(민 12:3), 예수님(마 11:29), 바울(고후 10:1)의 특징이었습니다. 마 5:5는 '온유한 자가 땅을 기업으로 받을 것'이라고 약속합니다. 빌 4:5도 '관용'(ἐπιείκεια)을 모든 사람에게 알리라고 권면합니다."
    }
  },
  {
    reference: "Titus 3:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거 상태 1",
        original_text: "At one time we too were foolish, disobedient, deceived",
        korean_translation: "한때 우리도 어리석고, 불순종하며, 속았습니다",
        grammatical_explanation: "과거 영적 상태"
      },
      {
        sequence_order: 2,
        semantic_classification: "과거 상태 2",
        original_text: "and enslaved by all kinds of passions and pleasures",
        korean_translation: "그리고 온갖 욕망과 쾌락에 종노릇했습니다",
        grammatical_explanation: "계속되는 과거 묘사"
      },
      {
        sequence_order: 3,
        semantic_classification: "과거 상태 3",
        original_text: "We lived in malice and envy, being hated and hating one another",
        korean_translation: "우리는 악의와 시기 가운데 살았고, 미움을 받으며 서로 미워했습니다",
        grammatical_explanation: "관계적 파괴"
      }
    ],
    vocabulary: [
      { word: "foolish", ipa_pronunciation: "/ˈfuːlɪʃ/", korean_pronunciation: "풀리시", definition_korean: "어리석은" },
      { word: "deceived", ipa_pronunciation: "/dɪˈsiːvd/", korean_pronunciation: "디시브드", definition_korean: "속은" },
      { word: "enslaved", ipa_pronunciation: "/ɪnˈsleɪvd/", korean_pronunciation: "인슬레이브드", definition_korean: "종노릇하는" },
      { word: "passions", ipa_pronunciation: "/ˈpæʃənz/", korean_pronunciation: "패션즈", definition_korean: "욕망들" },
      { word: "malice", ipa_pronunciation: "/ˈmælɪs/", korean_pronunciation: "멀리스", definition_korean: "악의" },
      { word: "envy", ipa_pronunciation: "/ˈɛnvi/", korean_pronunciation: "엔비", definition_korean: "시기" }
    ],
    contextual_explanation: {
      integrated_explanation: "3:1-2의 권면은 3:3-7의 신학적 토대 위에 세워집니다. 바울은 '우리도'(καὶ ἡμεῖς)를 사용하여 자신을 포함시킵니다. 과거 상태는 7가지로 묘사됩니다: (1) '어리석음'(ἀνόητοι), (2) '불순종'(ἀπειθεῖς), (3) '속음'(πλανώμενοι), (4) '욕망과 쾌락에 종노릇'(δουλεύοντες ἐπιθυμίαις καὶ ἡδοναῖς), (5) '악의'(κακίᾳ), (6) '시기'(φθόνῳ), (7) '미움 받고 미워함'(στυγητοί, μισοῦντες ἀλλήλους). 이는 모든 사람의 보편적 죄 상태입니다(롬 3:10-18; 엡 2:1-3)."
    },
    korean_translation: {
      natural_translation: "한때 우리도 어리석고, 불순종하며, 속았고, 온갖 욕망과 쾌락에 종노릇했습니다. 우리는 악의와 시기 가운데 살았고, 미움을 받으며 서로 미워했습니다."
    },
    special_explanation: {
      explanation_type: "보편적 죄성",
      content: "바울은 '우리도'(καὶ ἡμεῖς)를 사용하여 유대-이방 구분을 넘어 모든 인류의 보편적 죄성을 인정합니다. 이는 2:11의 '모든 사람'에게 구원이 필요한 이유입니다. 엡 2:1-3도 유사하게 '우리 모두'의 과거 죄악 상태를 묘사합니다."
    }
  },
  {
    reference: "Titus 3:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "전환점",
        original_text: "But when the kindness and love of God our Savior appeared",
        korean_translation: "그러나 우리 구주 하나님의 친절하심과 사랑이 나타났을 때",
        grammatical_explanation: "but으로 극적 대조"
      }
    ],
    vocabulary: [
      { word: "kindness", ipa_pronunciation: "/ˈkaɪndnəs/", korean_pronunciation: "카인드니스", definition_korean: "친절, 자애" },
      { word: "love", ipa_pronunciation: "/lʌv/", korean_pronunciation: "러브", definition_korean: "사랑" },
      { word: "appeared", ipa_pronunciation: "/əˈpɪrd/", korean_pronunciation: "어피어드", definition_korean: "나타나다" }
    ],
    contextual_explanation: {
      integrated_explanation: "3:3과 3:4 사이의 '그러나'(δὲ)는 디도서 전체에서 가장 극적인 전환입니다. 인간의 절망적 상태(3:3)와 하나님의 개입(3:4) 사이의 대조입니다. '친절하심'(χρηστότης)과 '사랑'(φιλανθρωπία - '인간 사랑')이 나타났습니다(ἐπεφάνη - 2:11의 '은혜가 나타남'과 같은 동사). '우리 구주 하나님'(τοῦ σωτῆρος ἡμῶν θεοῦ)은 1:3과 연결됩니다. 하나님의 사랑은 예수 그리스도의 성육신으로 나타났습니다."
    },
    korean_translation: {
      natural_translation: "그러나 우리 구주 하나님의 친절하심과 사랑이 나타났을 때,"
    },
    special_explanation: {
      explanation_type: "하나님의 인간 사랑",
      content: "'사랑'(φιλανθρωπία)은 '인간을 향한 사랑'이라는 뜻으로, 헬라 문화에서 통치자의 덕목이었습니다. 바울은 이를 하나님께 적용하여, 하나님이 인간을 향한 깊은 애정을 가지심을 강조합니다. 요 3:16의 '세상을 사랑하사'와 유사한 개념입니다."
    }
  },
  {
    reference: "Titus 3:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "구원의 근거 부정",
        original_text: "he saved us, not because of righteous things we had done",
        korean_translation: "그분이 우리를 구원하셨으니, 우리가 행한 의로운 일들 때문이 아니라",
        grammatical_explanation: "not because로 인간 공로 부정"
      },
      {
        sequence_order: 2,
        semantic_classification: "구원의 근거 긍정",
        original_text: "but because of his mercy",
        korean_translation: "그분의 긍휼하심 때문입니다",
        grammatical_explanation: "but으로 하나님 긍휼 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "구원의 방법",
        original_text: "He saved us through the washing of rebirth and renewal by the Holy Spirit",
        korean_translation: "그분은 거듭남의 씻음과 성령에 의한 새로워짐을 통해 우리를 구원하셨습니다",
        grammatical_explanation: "구원의 수단 설명"
      }
    ],
    vocabulary: [
      { word: "saved", ipa_pronunciation: "/seɪvd/", korean_pronunciation: "세이브드", definition_korean: "구원하다" },
      { word: "righteous", ipa_pronunciation: "/ˈraɪtʃəs/", korean_pronunciation: "라이처스", definition_korean: "의로운" },
      { word: "mercy", ipa_pronunciation: "/ˈmɜːrsi/", korean_pronunciation: "머시", definition_korean: "긍휼" },
      { word: "washing", ipa_pronunciation: "/ˈwɒʃɪŋ/", korean_pronunciation: "워싱", definition_korean: "씻음" },
      { word: "rebirth", ipa_pronunciation: "/riːˈbɜːrθ/", korean_pronunciation: "리버스", definition_korean: "거듭남" },
      { word: "renewal", ipa_pronunciation: "/rɪˈnjuːəl/", korean_pronunciation: "리뉴얼", definition_korean: "새로워짐" }
    ],
    contextual_explanation: {
      integrated_explanation: "구원의 신학이 명확히 제시됩니다. 부정: '우리가 행한 의로운 일들 때문이 아니라'(οὐκ ἐξ ἔργων τῶν ἐν δικαιοσύνῃ ἃ ἐποιήσαμεν ἡμεῖς - 행위 구원 부정, 엡 2:8-9와 동일). 긍정: '그분의 긍휼하심 때문'(κατὰ τὸ αὐτοῦ ἔλεος). 수단: '거듭남의 씻음'(λουτροῦ παλιγγενεσίας - 세례를 암시할 수 있지만 본질은 성령의 중생, 요 3:3-5)과 '성령에 의한 새로워짐'(ἀνακαινώσεως πνεύματος ἁγίου). '거듭남'(παλιγγενεσία)은 신약에서 여기와 마 19:28에만 나오며, '완전히 새로워짐'을 의미합니다. 성령은 구원의 능동적 주체입니다."
    },
    korean_translation: {
      natural_translation: "그분이 우리를 구원하셨으니, 우리가 행한 의로운 일들 때문이 아니라 그분의 긍휼하심 때문입니다. 그분은 거듭남의 씻음과 성령에 의한 새로워짐을 통해 우리를 구원하셨습니다."
    },
    special_explanation: {
      explanation_type: "은혜로만",
      content: "이 구절은 종교개혁의 핵심 교리인 '오직 은혜'(sola gratia)의 성경적 근거 중 하나입니다. '우리가 행한 의로운 일들 때문이 아니라'는 롬 3:20, 28; 갈 2:16; 엡 2:8-9와 함께 행위 구원을 명확히 부정합니다. 구원은 전적으로 하나님의 긍휼과 은혜에 달려 있습니다."
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
