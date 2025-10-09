import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Timothy 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성령의 특성 부정",
        original_text: "For the Spirit God gave us does not make us timid",
        korean_translation: "하나님이 우리에게 주신 성령은 우리를 두려워하게 하지 않고",
        grammatical_explanation: "for로 1:6의 근거"
      },
      {
        sequence_order: 2,
        semantic_classification: "성령의 특성 긍정",
        original_text: "but gives us power, love and self-discipline",
        korean_translation: "능력과 사랑과 절제를 주십니다",
        grammatical_explanation: "but으로 대조, 3가지 은사"
      }
    ],
    vocabulary: [
      { word: "timid", ipa_pronunciation: "/ˈtɪmɪd/", korean_pronunciation: "티미드", definition_korean: "두려워하는, 소심한" },
      { word: "power", ipa_pronunciation: "/ˈpaʊər/", korean_pronunciation: "파워", definition_korean: "능력" },
      { word: "self-discipline", ipa_pronunciation: "/sɛlf ˈdɪsəplɪn/", korean_pronunciation: "셀프 디서플린", definition_korean: "절제" }
    ],
    contextual_explanation: {
      integrated_explanation: "성령은 '두려움의 영'(πνεῦμα δειλίας)이 아니라 3가지를 주십니다: (1) '능력'(δυνάμεως - 행 1:8), (2) '사랑'(ἀγάπης), (3) '절제'(σωφρονισμοῦ - 자제, 건전한 마음). 디모데는 어려운 상황에서 두려워했을 수 있지만, 바울은 성령의 능력을 상기시킵니다."
    },
    korean_translation: {
      natural_translation: "하나님이 우리에게 주신 성령은 우리를 두려워하게 하지 않고, 능력과 사랑과 절제를 주십니다."
    },
    special_explanation: {
      explanation_type: "성령의 삼중 은사",
      content: "능력(δύναμις)은 복음 증거를 위한 힘, 사랑(ἀγάπη)은 희생적 섬김, 절제(σωφρονισμός)는 자기 통제입니다. 이 셋은 디모데가 두려움을 극복하고 사역을 감당하는 데 필요한 자원입니다."
    }
  },
  {
    reference: "2 Timothy 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "금지",
        original_text: "So do not be ashamed of the testimony about our Lord or of me his prisoner",
        korean_translation: "그러므로 우리 주에 관한 증거나 그분의 죄수인 나를 부끄러워하지 마십시오",
        grammatical_explanation: "so로 결론, 이중 금지"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령",
        original_text: "Rather, join with me in suffering for the gospel, by the power of God",
        korean_translation: "오히려 하나님의 능력으로 복음을 위해 나와 함께 고난받으십시오",
        grammatical_explanation: "rather로 대조, 긍정 명령"
      }
    ],
    vocabulary: [
      { word: "ashamed", ipa_pronunciation: "/əˈʃeɪmd/", korean_pronunciation: "어셰임드", definition_korean: "부끄러워하다" },
      { word: "testimony", ipa_pronunciation: "/ˈtɛstɪmoʊni/", korean_pronunciation: "테스티모니", definition_korean: "증거" },
      { word: "prisoner", ipa_pronunciation: "/ˈprɪzənər/", korean_pronunciation: "프리즈너", definition_korean: "죄수" },
      { word: "suffering", ipa_pronunciation: "/ˈsʌfərɪŋ/", korean_pronunciation: "서퍼링", definition_korean: "고난" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 '부끄러워하지 말라'(ἐπαισχυνθῇς)고 권면합니다. 두 가지: (1) '주의 증거', (2) '죄수인 나'. 바울은 로마 감옥에 있으며, 연합하는 것이 위험할 수 있었습니다. 대신 '복음을 위해 함께 고난받으라'(συγκακοπάθησον)고 명령합니다. 능력의 원천은 '하나님의 능력'(δυνάμει θεοῦ)입니다."
    },
    korean_translation: {
      natural_translation: "그러므로 우리 주에 관한 증거나 그분의 죄수인 나를 부끄러워하지 마십시오. 오히려 하나님의 능력으로 복음을 위해 나와 함께 고난받으십시오."
    },
    special_explanation: {
      explanation_type: "복음을 위한 고난",
      content: "바울은 복음 때문에 감옥에 있었지만(엡 3:1, 4:1), 이를 '그리스도의 죄수'로 재해석합니다. 디모데도 복음 증거로 인한 고난을 각오해야 했습니다. 2:3, 3:12, 4:5도 고난을 강조합니다."
    }
  },
  {
    reference: "2 Timothy 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "구원",
        original_text: "He has saved us and called us to a holy life",
        korean_translation: "그분이 우리를 구원하시고 거룩한 삶으로 부르셨습니다",
        grammatical_explanation: "과거 완료 행위"
      },
      {
        sequence_order: 2,
        semantic_classification: "구원 근거 부정",
        original_text: "not because of anything we have done",
        korean_translation: "우리가 행한 것 때문이 아니라",
        grammatical_explanation: "행위 부정"
      },
      {
        sequence_order: 3,
        semantic_classification: "구원 근거 긍정",
        original_text: "but because of his own purpose and grace",
        korean_translation: "그분 자신의 목적과 은혜 때문입니다",
        grammatical_explanation: "but으로 대조"
      },
      {
        sequence_order: 4,
        semantic_classification: "은혜의 시기",
        original_text: "This grace was given us in Christ Jesus before the beginning of time",
        korean_translation: "이 은혜는 영원 전에 그리스도 예수 안에서 우리에게 주어졌습니다",
        grammatical_explanation: "영원한 작정"
      }
    ],
    vocabulary: [
      { word: "saved", ipa_pronunciation: "/seɪvd/", korean_pronunciation: "세이브드", definition_korean: "구원하다" },
      { word: "called", ipa_pronunciation: "/kɔːld/", korean_pronunciation: "콜드", definition_korean: "부르다" },
      { word: "holy life", ipa_pronunciation: "/ˈhoʊli laɪf/", korean_pronunciation: "홀리 라이프", definition_korean: "거룩한 삶" },
      { word: "purpose", ipa_pronunciation: "/ˈpɜːrpəs/", korean_pronunciation: "퍼퍼스", definition_korean: "목적" }
    ],
    contextual_explanation: {
      integrated_explanation: "하나님의 구원 사역: (1) '구원하심'(σώσαντος), (2) '거룩한 부르심'(καλέσαντος κλήσει ἁγίᾳ). 근거는 '우리 행위가 아니라'(οὐ κατὰ τὰ ἔργα ἡμῶν) '그분의 목적과 은혜'(κατὰ ἰδίαν πρόθεσιν καὶ χάριν)입니다. 이 은혜는 '영원 전에'(πρὸ χρόνων αἰωνίων) 주어졌습니다(엡 1:4; 딛 1:2)."
    },
    korean_translation: {
      natural_translation: "그분이 우리를 구원하시고 거룩한 삶으로 부르셨으니, 우리가 행한 것 때문이 아니라 그분 자신의 목적과 은혜 때문입니다. 이 은혜는 영원 전에 그리스도 예수 안에서 우리에게 주어졌습니다."
    },
    special_explanation: {
      explanation_type: "영원한 선택",
      content: "'영원 전에'(πρὸ χρόνων αἰωνίων)는 하나님의 구원 계획이 창조 이전부터 있었음을 나타냅니다. 엡 1:4 '창세 전에 그리스도 안에서 택하심'과 동일한 교리입니다."
    }
  },
  {
    reference: "2 Timothy 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "은혜의 현재 계시",
        original_text: "but it has now been revealed through the appearing of our Savior, Christ Jesus",
        korean_translation: "그러나 이제 우리 구주 그리스도 예수의 나타나심을 통해 계시되었습니다",
        grammatical_explanation: "but으로 시간적 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "그리스도의 업적 1",
        original_text: "who has destroyed death",
        korean_translation: "그분은 죽음을 폐하셨고",
        grammatical_explanation: "관계절로 성취 설명"
      },
      {
        sequence_order: 3,
        semantic_classification: "그리스도의 업적 2",
        original_text: "and has brought life and immortality to light through the gospel",
        korean_translation: "복음을 통해 생명과 불멸을 빛 가운데 나타내셨습니다",
        grammatical_explanation: "병렬 업적"
      }
    ],
    vocabulary: [
      { word: "revealed", ipa_pronunciation: "/rɪˈviːld/", korean_pronunciation: "리빌드", definition_korean: "계시되다" },
      { word: "appearing", ipa_pronunciation: "/əˈpɪrɪŋ/", korean_pronunciation: "어피어링", definition_korean: "나타나심" },
      { word: "destroyed", ipa_pronunciation: "/dɪˈstrɔɪd/", korean_pronunciation: "디스트로이드", definition_korean: "폐하다" },
      { word: "immortality", ipa_pronunciation: "/ˌɪmɔːrˈtæləti/", korean_pronunciation: "이모탤리티", definition_korean: "불멸" }
    ],
    contextual_explanation: {
      integrated_explanation: "영원한 은혜(1:9)가 '이제'(νῦν) 계시되었습니다. '나타나심'(ἐπιφανείας)은 그리스도의 성육신입니다(딛 2:11, 3:4). 두 가지 업적: (1) '죽음을 폐함'(καταργήσαντος μὲν τὸν θάνατον - 고전 15:26, 54-55; 히 2:14), (2) '생명과 불멸을 밝히 드러냄'(φωτίσαντος δὲ ζωὴν καὶ ἀφθαρσίαν). 수단은 '복음'(διὰ τοῦ εὐαγγελίου)입니다."
    },
    korean_translation: {
      natural_translation: "그러나 이제 우리 구주 그리스도 예수의 나타나심을 통해 계시되었습니다. 그분은 죽음을 폐하시고, 복음을 통해 생명과 불멸을 빛 가운데 나타내셨습니다."
    },
    special_explanation: {
      explanation_type: "죽음의 폐지",
      content: "'죽음을 폐함'(καταργέω)은 '무력화하다', '효력 없게 하다'는 뜻입니다. 그리스도는 십자가와 부활로 죽음의 권세를 깨뜨렸습니다(히 2:14-15). 고전 15:54-57도 '죽음이 승리에 삼킨 바 되리라'고 선포합니다."
    }
  },
  {
    reference: "2 Timothy 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 임명",
        original_text: "And of this gospel I was appointed a herald and an apostle and a teacher",
        korean_translation: "그리고 이 복음을 위해 나는 전령과 사도와 교사로 임명되었습니다",
        grammatical_explanation: "삼중 직분"
      }
    ],
    vocabulary: [
      { word: "appointed", ipa_pronunciation: "/əˈpɔɪntɪd/", korean_pronunciation: "어포인티드", definition_korean: "임명되다" },
      { word: "herald", ipa_pronunciation: "/ˈhɛrəld/", korean_pronunciation: "헤럴드", definition_korean: "전령" },
      { word: "apostle", ipa_pronunciation: "/əˈpɒsəl/", korean_pronunciation: "어파슬", definition_korean: "사도" },
      { word: "teacher", ipa_pronunciation: "/ˈtiːtʃər/", korean_pronunciation: "티처", definition_korean: "교사" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 '이 복음을 위해'(εἰς ὃ) 세 가지 직분으로 '임명되었습니다'(ἐτέθην): (1) '전령'(κῆρυξ - 공적 선포자), (2) '사도'(ἀπόστολος - 보내심 받은 자), (3) '교사'(διδάσκαλος - 가르치는 자). 딤전 2:7도 동일한 표현을 사용합니다. 바울의 권위는 자기에게서 나온 것이 아니라 하나님의 임명에서 나옵니다."
    },
    korean_translation: {
      natural_translation: "그리고 이 복음을 위해 나는 전령과 사도와 교사로 임명되었습니다."
    },
    special_explanation: {
      explanation_type: "바울의 삼중 직분",
      content: "전령(κῆρυξ)은 왕의 공식 메시지를 선포하는 자, 사도(ἀπόστολος)는 권위를 가지고 파송된 대표자, 교사(διδάσκαλος)는 진리를 체계적으로 가르치는 자입니다. 바울은 이 셋을 통해 복음을 선포하고, 교회를 세우고, 성도를 가르쳤습니다."
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
