import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 2:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "은혜의 나타남",
        original_text: "For the grace of God has appeared",
        korean_translation: "하나님의 은혜가 나타났습니다",
        grammatical_explanation: "for로 근거 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "은혜의 범위",
        original_text: "that offers salvation to all people",
        korean_translation: "이는 모든 사람에게 구원을 제공합니다",
        grammatical_explanation: "관계절로 목적 설명"
      }
    ],
    vocabulary: [
      { word: "grace", ipa_pronunciation: "/ɡreɪs/", korean_pronunciation: "그레이스", definition_korean: "은혜" },
      { word: "appeared", ipa_pronunciation: "/əˈpɪrd/", korean_pronunciation: "어피어드", definition_korean: "나타나다" },
      { word: "salvation", ipa_pronunciation: "/sælˈveɪʃən/", korean_pronunciation: "샐베이션", definition_korean: "구원" }
    ],
    contextual_explanation: {
      integrated_explanation: "2:11-14는 디도서의 신학적 중심부로, 2:1-10의 실천적 가르침에 토대를 제공합니다. '하나님의 은혜가 나타났다'(ἐπεφάνη ἡ χάρις τοῦ θεοῦ)는 예수 그리스도의 성육신을 가리킵니다(3:4도 유사). '나타남'(ἐπιφάνεια)은 왕의 공식 방문을 뜻하는 용어로, 그리스도의 초림(2:11, 3:4)과 재림(2:13)에 모두 사용됩니다. '모든 사람에게'(πᾶσιν ἀνθρώποις)는 복음의 보편성을 강조하며(딤전 2:4), 유대-이방 구분을 넘어섭니다."
    },
    korean_translation: {
      natural_translation: "하나님의 은혜가 나타났으니, 이는 모든 사람에게 구원을 제공합니다."
    },
    special_explanation: {
      explanation_type: "은혜의 나타남",
      content: "'나타남'(ἐπιφάνεια)은 헬라 문화에서 신의 현현이나 황제의 방문을 묘사하는 용어였습니다. 바울은 이를 재정의하여 예수 그리스도의 오심을 묘사합니다. 디도서는 초림(2:11, 3:4)과 재림(2:13) 모두 '나타남'으로 표현하여, 구원사의 '이미'와 '아직'을 연결합니다."
    }
  },
  {
    reference: "Titus 2:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "은혜의 교육 1 - 부정",
        original_text: "It teaches us to say 'No' to ungodliness and worldly passions",
        korean_translation: "그것이 우리를 가르쳐 불경건과 세상적 욕망을 거부하게 하고",
        grammatical_explanation: "은혜가 교사 역할"
      },
      {
        sequence_order: 2,
        semantic_classification: "은혜의 교육 2 - 긍정",
        original_text: "and to live self-controlled, upright and godly lives in this present age",
        korean_translation: "이 현 시대에 자제하고, 의롭고, 경건하게 살게 합니다",
        grammatical_explanation: "3가지 긍정적 삶의 방식"
      }
    ],
    vocabulary: [
      { word: "teaches", ipa_pronunciation: "/ˈtiːtʃɪz/", korean_pronunciation: "티치즈", definition_korean: "가르치다" },
      { word: "ungodliness", ipa_pronunciation: "/ʌnˈɡɒdlinəs/", korean_pronunciation: "언갓리니스", definition_korean: "불경건" },
      { word: "worldly passions", ipa_pronunciation: "/ˈwɜːrldli ˈpæʃənz/", korean_pronunciation: "월들리 패션즈", definition_korean: "세상적 욕망" },
      { word: "upright", ipa_pronunciation: "/ˈʌpraɪt/", korean_pronunciation: "업라이트", definition_korean: "의로운" },
      { word: "godly", ipa_pronunciation: "/ˈɡɒdli/", korean_pronunciation: "갓리", definition_korean: "경건한" }
    ],
    contextual_explanation: {
      integrated_explanation: "은혜는 단순히 용서를 주는 것이 아니라 '가르칩니다'(παιδεύουσα - '훈련시킨다'). 부정적 측면: '불경건'(ἀσέβειαν)과 '세상적 욕망'(κοσμικὰς ἐπιθυμίας)을 거부. 긍정적 측면: 3가지 삶의 방식 - (1) '자제'(σωφρόνως - 자신에 대해), (2) '의로움'(δικαίως - 타인에 대해), (3) '경건'(εὐσεβῶς - 하나님에 대해). '이 현 시대'(ἐν τῷ νῦν αἰῶνι)는 그리스도의 재림 전 시간을 가리킵니다. 은혜는 값싼 것이 아니라 변화시키는 능력입니다(롬 6:1-2)."
    },
    korean_translation: {
      natural_translation: "그것이 우리를 가르쳐 불경건과 세상적 욕망을 거부하게 하고, 이 현 시대에 자제하고, 의롭고, 경건하게 살게 합니다."
    },
    special_explanation: {
      explanation_type: "은혜의 훈련",
      content: "'가르치다'(παιδεύω)는 단순한 지식 전달이 아니라 '훈련', '양육', '징계'를 포함합니다. 은혜는 수동적 선물이 아니라 능동적 교사로, 신자를 성화시킵니다. 히브리서 12:5-11도 하나님의 '징계'(παιδεία)를 은혜로 제시합니다."
    }
  },
  {
    reference: "Titus 2:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현재의 자세",
        original_text: "while we wait for the blessed hope",
        korean_translation: "우리가 복된 소망을 기다리는 동안",
        grammatical_explanation: "현재 진행 중인 자세"
      },
      {
        sequence_order: 2,
        semantic_classification: "소망의 내용",
        original_text: "the appearing of the glory of our great God and Savior, Jesus Christ",
        korean_translation: "우리의 위대하신 하나님이시며 구주이신 예수 그리스도의 영광의 나타나심입니다",
        grammatical_explanation: "동격 구조"
      }
    ],
    vocabulary: [
      { word: "blessed hope", ipa_pronunciation: "/blɛst hoʊp/", korean_pronunciation: "블레스트 홉", definition_korean: "복된 소망" },
      { word: "appearing", ipa_pronunciation: "/əˈpɪrɪŋ/", korean_pronunciation: "어피어링", definition_korean: "나타나심" },
      { word: "glory", ipa_pronunciation: "/ˈɡlɔːri/", korean_pronunciation: "글로리", definition_korean: "영광" }
    ],
    contextual_explanation: {
      integrated_explanation: "신자의 삶은 '기다림'(προσδεχόμενοι) 속에 있습니다. '복된 소망'(τὴν μακαρίαν ἐλπίδα)은 그리스도의 재림입니다. '나타남'(ἐπιφάνειαν)은 2:11의 초림과 대응되는 재림입니다. 가장 중요한 부분은 '우리의 위대하신 하나님이시며 구주이신 예수 그리스도'(τοῦ μεγάλου θεοῦ καὶ σωτῆρος ἡμῶν Ἰησοῦ Χριστοῦ)입니다. 그랜빌 샤프 규칙(Granville Sharp's Rule)에 따라, 이는 예수 그리스도가 하나님이시며 구주라는 명확한 신성 선언입니다(요 1:1, 20:28; 롬 9:5도 유사)."
    },
    korean_translation: {
      natural_translation: "우리가 복된 소망, 곧 우리의 위대하신 하나님이시며 구주이신 예수 그리스도의 영광의 나타나심을 기다리는 동안입니다."
    },
    special_explanation: {
      explanation_type: "예수 그리스도의 신성",
      content: "그랜빌 샤프 규칙: 그리스어에서 두 명사가 하나의 관사로 연결되고 καί(and)로 묶이면, 두 명사는 같은 대상을 가리킵니다. '하나님'(θεός)과 '구주'(σωτήρ)가 모두 예수 그리스도를 지칭하여, 그분의 완전한 신성을 선언합니다. 신약에서 가장 명확한 그리스도의 신성 선언 중 하나입니다."
    }
  },
  {
    reference: "Titus 2:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "그리스도의 자기 희생",
        original_text: "who gave himself for us",
        korean_translation: "그분은 우리를 위해 자신을 주셨습니다",
        grammatical_explanation: "관계절로 그리스도 묘사"
      },
      {
        sequence_order: 2,
        semantic_classification: "희생의 목적 1",
        original_text: "to redeem us from all wickedness",
        korean_translation: "이는 우리를 모든 불법에서 구속하시고",
        grammatical_explanation: "목적절 1"
      },
      {
        sequence_order: 3,
        semantic_classification: "희생의 목적 2",
        original_text: "and to purify for himself a people that are his very own, eager to do what is good",
        korean_translation: "자기 자신을 위하여 선한 일에 열심인 자기 백성을 정결하게 하려 하심입니다",
        grammatical_explanation: "목적절 2"
      }
    ],
    vocabulary: [
      { word: "gave himself", ipa_pronunciation: "/ɡeɪv hɪmˈsɛlf/", korean_pronunciation: "게이브 힘셀프", definition_korean: "자신을 주다" },
      { word: "redeem", ipa_pronunciation: "/rɪˈdiːm/", korean_pronunciation: "리딤", definition_korean: "구속하다" },
      { word: "purify", ipa_pronunciation: "/ˈpjʊrɪfaɪ/", korean_pronunciation: "퓨리파이", definition_korean: "정결하게 하다" },
      { word: "eager", ipa_pronunciation: "/ˈiːɡər/", korean_pronunciation: "이거", definition_korean: "열심인" }
    ],
    contextual_explanation: {
      integrated_explanation: "그리스도의 사역이 설명됩니다. '자신을 주심'(ἔδωκεν ἑαυτὸν)은 자발적 희생을 강조합니다(갈 1:4, 2:20; 엡 5:2, 25). 두 가지 목적: (1) '모든 불법에서 구속'(λυτρώσηται ἡμᾶς ἀπὸ πάσης ἀνομίας - 출애굽의 구속 언어, 출 19:5; 신 7:6 반영), (2) '자기 백성을 정결케 함'(καθαρίσῃ ἑαυτῷ λαὸν περιούσιον). '자기 백성'(λαὸν περιούσιον)은 출 19:5의 '내 소유'(סְגֻלָּה, 칠십인역 λαὸς περιούσιος)를 인용하여, 교회가 새 이스라엘임을 선언합니다. 최종 목표는 '선한 일에 열심'(ζηλωτὴν καλῶν ἔργων)으로, 디도서의 핵심 주제입니다(1:16; 2:7; 3:1, 8, 14)."
    },
    korean_translation: {
      natural_translation: "그분은 우리를 위해 자신을 주셨으니, 이는 우리를 모든 불법에서 구속하시고, 자기 자신을 위하여 선한 일에 열심인 자기 백성을 정결하게 하려 하심입니다."
    },
    special_explanation: {
      explanation_type: "새 이스라엘",
      content: "'자기 백성'(λαὸς περιούσιος)은 출 19:5의 핵심 언약 표현입니다. 바울은 이 언어를 교회에 적용하여, 신약 신자들이 하나님의 '특별한 소유 백성'임을 선언합니다. 벧전 2:9-10도 유사하게 출애굽 언어를 교회에 적용합니다."
    }
  },
  {
    reference: "Titus 2:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "가르침의 명령",
        original_text: "These, then, are the things you should teach",
        korean_translation: "그러므로 이것들을 가르치십시오",
        grammatical_explanation: "then으로 결론"
      },
      {
        sequence_order: 2,
        semantic_classification: "사역 방법",
        original_text: "Encourage and rebuke with all authority",
        korean_translation: "모든 권위를 가지고 권면하고 꾸짖으십시오",
        grammatical_explanation: "2가지 사역 방법"
      },
      {
        sequence_order: 3,
        semantic_classification: "자세 유지",
        original_text: "Do not let anyone despise you",
        korean_translation: "아무도 너를 업신여기지 못하게 하십시오",
        grammatical_explanation: "부정 명령"
      }
    ],
    vocabulary: [
      { word: "encourage", ipa_pronunciation: "/ɪnˈkʌrɪdʒ/", korean_pronunciation: "인커리지", definition_korean: "권면하다" },
      { word: "rebuke", ipa_pronunciation: "/rɪˈbjuːk/", korean_pronunciation: "리뷰크", definition_korean: "꾸짖다" },
      { word: "authority", ipa_pronunciation: "/əˈθɒrəti/", korean_pronunciation: "어써리티", definition_korean: "권위" },
      { word: "despise", ipa_pronunciation: "/dɪˈspaɪz/", korean_pronunciation: "디스파이즈", definition_korean: "업신여기다" }
    ],
    contextual_explanation: {
      integrated_explanation: "2장의 결론입니다. '이것들'(ταῦτα)은 2:1-14의 모든 가르침을 가리킵니다. 디도는 세 가지를 해야 합니다: (1) '가르치다'(λάλει), (2) '권면하다'(παρακάλει), (3) '꾸짖다'(ἔλεγχε). '모든 권위를 가지고'(μετὰ πάσης ἐπιταγῆς)는 사도적 권위를 강조합니다. '아무도 너를 업신여기지 못하게'(μηδείς σου περιφρονείτω)는 디도의 젊음이나 권위 부족으로 인한 도전을 예상합니다(딤전 4:12도 유사). 디도는 복음의 사자로서 확신을 가져야 했습니다."
    },
    korean_translation: {
      natural_translation: "그러므로 이것들을 가르치고, 모든 권위를 가지고 권면하고 꾸짖으십시오. 아무도 너를 업신여기지 못하게 하십시오."
    },
    special_explanation: {
      explanation_type: "사역자의 권위",
      content: "디도의 권위는 자신에게서 나오는 것이 아니라 복음에서 나옵니다. '모든 권위'(πάσης ἐπιταγῆς)는 명령의 권위로, 사도적 위임을 반영합니다. 딤전 4:12는 디모데에게도 '청년이라고 업신여김을 받지 말라'고 권면하며, 삶의 모범으로 권위를 확립하라고 가르칩니다."
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
