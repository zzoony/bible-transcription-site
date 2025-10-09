import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysesData: AnalysisData[] = [
  {
    reference: "1 Thessalonians 3:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "상황 설명 - 더 이상 견딜 수 없는 상태",
        original_text: "So when we could stand it no longer",
        korean_translation: "그래서 우리가 더 이상 견딜 수 없을 때",
        grammatical_explanation: "시간을 나타내는 종속절, 'when'이 도입하며 과거 시제 사용"
      },
      {
        sequence_order: 2,
        semantic_classification: "결정 - 아테네에 홀로 남기로 한 선택",
        original_text: "we thought it best to be left by ourselves in Athens",
        korean_translation: "우리는 아테네에 홀로 남는 것이 최선이라고 생각했습니다",
        grammatical_explanation: "주절, 'thought it best to'는 결정을 표현하는 구조, 수동태 부정사 'to be left' 사용"
      }
    ],
    vocabulary: [
      {
        word: "stand",
        ipa_pronunciation: "/stænd/",
        korean_pronunciation: "스탠드",
        definition_korean: "견디다, 참다"
      },
      {
        word: "thought",
        ipa_pronunciation: "/θɔːt/",
        korean_pronunciation: "쏘트",
        definition_korean: "생각하다 (think의 과거형)"
      },
      {
        word: "Athens",
        ipa_pronunciation: "/ˈæθɪnz/",
        korean_pronunciation: "애씬즈",
        definition_korean: "아테네 (그리스의 도시)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울이 데살로니가 교회를 떠나 있는 동안 겪은 깊은 염려를 표현합니다. 그는 교회의 상황이 너무 걱정되어 디모데를 보내고 자신은 아테네에 혼자 남기로 결정했습니다. 이는 사도 바울의 목회적 헌신과 교회에 대한 깊은 사랑을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "그래서 우리가 더 이상 견딜 수 없을 때, 우리는 아테네에 홀로 남는 것이 최선이라고 생각했습니다.",
      translation_notes: "'could stand it no longer'는 강한 감정적 긴장을 나타냅니다. 'we thought it best'는 신중한 결정 과정을 보여주며, 개인적 불편을 감수하고라도 교회를 돌보려는 바울의 헌신을 드러냅니다."
    }
  },
  {
    reference: "1 Thessalonians 3:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "행동 - 디모데를 파송함",
        original_text: "We sent Timothy",
        korean_translation: "우리는 디모데를 보냈습니다",
        grammatical_explanation: "주절, 과거 시제 동사 'sent' 사용"
      },
      {
        sequence_order: 2,
        semantic_classification: "신분 설명 - 디모데의 역할과 관계",
        original_text: "who is our brother and co-worker in God's service in spreading the gospel of Christ",
        korean_translation: "그는 우리의 형제이자 그리스도의 복음을 전파하는 하나님의 일에서 우리의 동역자입니다",
        grammatical_explanation: "관계절, 'who'가 디모데를 수식하며 세 가지 역할을 설명 (형제, 동역자, 복음 전파자)"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 파송의 두 가지 목적",
        original_text: "to strengthen and encourage you in your faith",
        korean_translation: "여러분의 믿음을 강하게 하고 격려하기 위함입니다",
        grammatical_explanation: "부정사구, 목적을 나타내며 두 개의 동사 'strengthen'과 'encourage'가 병렬 구조"
      }
    ],
    vocabulary: [
      {
        word: "Timothy",
        ipa_pronunciation: "/ˈtɪməθi/",
        korean_pronunciation: "티머씨",
        definition_korean: "디모데 (바울의 동역자)"
      },
      {
        word: "co-worker",
        ipa_pronunciation: "/ˈkoʊˌwɜːrkər/",
        korean_pronunciation: "코워커",
        definition_korean: "동역자, 함께 일하는 사람"
      },
      {
        word: "strengthen",
        ipa_pronunciation: "/ˈstreŋθən/",
        korean_pronunciation: "스트렝던",
        definition_korean: "강하게 하다, 견고하게 하다"
      },
      {
        word: "encourage",
        ipa_pronunciation: "/ɪnˈkʌrɪdʒ/",
        korean_pronunciation: "인커리지",
        definition_korean: "격려하다, 용기를 북돋우다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "디모데는 바울의 가장 신뢰하는 동역자 중 한 명으로, 여기서 그의 역할이 세 가지로 설명됩니다: 형제적 관계, 하나님 사역의 동역자, 복음 전파자. 바울이 디모데를 보낸 목적은 이중적입니다 - 믿음을 강화하고 격려하는 것. 이는 초대 교회의 상호 돌봄과 지원의 패턴을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "우리는 디모데를 보냈습니다. 그는 우리의 형제이자 그리스도의 복음을 전파하는 하나님의 일에서 우리의 동역자로서, 여러분의 믿음을 강하게 하고 격려하기 위함입니다.",
      translation_notes: "'brother and co-worker'는 디모데와 바울의 평등한 관계를 강조합니다. 'in God's service in spreading the gospel'은 이중 전치사구로 사역의 영역과 내용을 구체화합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "목적 - 시련에 흔들리지 않도록",
        original_text: "so that no one would be unsettled by these trials",
        korean_translation: "이 시련들로 인해 아무도 흔들리지 않도록",
        grammatical_explanation: "'so that' 목적절, 부정적 결과를 방지하려는 의도, 수동태 'be unsettled' 사용"
      },
      {
        sequence_order: 2,
        semantic_classification: "확인 - 시련의 필연성",
        original_text: "For you know quite well that we are destined for them",
        korean_translation: "여러분도 우리가 이런 일을 겪도록 정해져 있다는 것을 잘 알고 있기 때문입니다",
        grammatical_explanation: "'For'로 시작하는 이유절, 'know quite well'은 확실한 지식을 강조, 'destined for'는 예정된 운명을 의미"
      }
    ],
    vocabulary: [
      {
        word: "unsettled",
        ipa_pronunciation: "/ʌnˈsetəld/",
        korean_pronunciation: "언세틀드",
        definition_korean: "불안정하게 되다, 흔들리다"
      },
      {
        word: "trials",
        ipa_pronunciation: "/ˈtraɪəlz/",
        korean_pronunciation: "트라이얼즈",
        definition_korean: "시련, 시험"
      },
      {
        word: "destined",
        ipa_pronunciation: "/ˈdestɪnd/",
        korean_pronunciation: "데스틴드",
        definition_korean: "운명지어진, 예정된"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "초대 교회 그리스도인들은 박해와 시련이 신앙생활의 정상적인 부분임을 이해했습니다. 바울은 데살로니가 교인들에게 이러한 고난이 예상치 못한 것이 아니라 그리스도를 따르는 자들의 필연적 경험임을 상기시킵니다. 이는 예수님의 말씀(요 16:33)과 바울 자신의 가르침을 반영합니다."
    },
    korean_translation: {
      natural_translation: "이 시련들로 인해 아무도 흔들리지 않도록 하기 위함입니다. 여러분도 우리가 이런 일을 겪도록 정해져 있다는 것을 잘 알고 있기 때문입니다.",
      translation_notes: "'no one would be unsettled'에서 'would'는 가정적 상황을 나타냅니다. 'destined for them'은 신학적으로 중요한 표현으로, 고난이 하나님의 계획 안에 있음을 시사합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사실 강조 - 실제 상황 설명",
        original_text: "In fact, when we were with you",
        korean_translation: "사실, 우리가 여러분과 함께 있을 때",
        grammatical_explanation: "'In fact'는 앞의 진술을 강화, 'when' 시간절로 과거 상황 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "과거 행동 - 반복적 경고",
        original_text: "we kept telling you that we would be persecuted",
        korean_translation: "우리는 박해받을 것이라고 여러분에게 계속 말했습니다",
        grammatical_explanation: "'kept telling'은 반복적 과거 행동, 'that' 절에서 미래 박해를 예고"
      },
      {
        sequence_order: 3,
        semantic_classification: "결과 확인 - 예언의 성취",
        original_text: "And it turned out that way, as you well know",
        korean_translation: "그리고 여러분이 잘 아시는 것처럼 그대로 되었습니다",
        grammatical_explanation: "'turned out that way'는 결과를 나타내며, 'as you well know'는 청중의 경험적 지식 확인"
      }
    ],
    vocabulary: [
      {
        word: "kept telling",
        ipa_pronunciation: "/kept ˈtelɪŋ/",
        korean_pronunciation: "켑트 텔링",
        definition_korean: "계속 말하다 (반복적 행동)"
      },
      {
        word: "persecuted",
        ipa_pronunciation: "/ˈpɜːrsɪkjuːtɪd/",
        korean_pronunciation: "퍼시큐티드",
        definition_korean: "박해받다"
      },
      {
        word: "turned out",
        ipa_pronunciation: "/tɜːrnd aʊt/",
        korean_pronunciation: "턴드 아웃",
        definition_korean: "결과가 ~되다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 박해가 예상치 못한 일이 아니었음을 강조합니다. 그는 데살로니가에 있을 때부터 반복적으로 박해를 예고했고, 실제로 그 예언이 성취되었습니다. 이는 바울의 사도적 신뢰성을 높이며, 데살로니가 교인들이 현재 겪는 고난이 하나님의 계획 밖의 일이 아님을 확인시켜 줍니다."
    },
    korean_translation: {
      natural_translation: "사실, 우리가 여러분과 함께 있을 때, 우리는 박해받을 것이라고 여러분에게 계속 말했습니다. 그리고 여러분이 잘 아시는 것처럼 그대로 되었습니다.",
      translation_notes: "'kept telling'의 'kept'는 지속적이고 반복적인 행동을 강조합니다. 'as you well know'는 청중에게 호소하며 공동의 경험을 상기시키는 수사적 기법입니다."
    }
  },
  {
    reference: "1 Thessalonians 3:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "이유 - 조치를 취한 동기",
        original_text: "For this reason, when I could stand it no longer",
        korean_translation: "이런 이유로, 내가 더 이상 견딜 수 없을 때",
        grammatical_explanation: "'For this reason'은 앞 내용과 연결, 'when' 절로 행동의 시점 표시"
      },
      {
        sequence_order: 2,
        semantic_classification: "행동 - 믿음 상태 확인 요청",
        original_text: "I sent to find out about your faith",
        korean_translation: "나는 여러분의 믿음에 대해 알아보려고 사람을 보냈습니다",
        grammatical_explanation: "주절, 목적을 나타내는 부정사구 'to find out' 사용"
      },
      {
        sequence_order: 3,
        semantic_classification: "두려움 - 부정적 가능성에 대한 염려",
        original_text: "I was afraid that in some way the tempter had tempted you",
        korean_translation: "나는 시험하는 자가 어떤 식으로든 여러분을 유혹했을까 두려워했습니다",
        grammatical_explanation: "'afraid that' 절로 두려움의 내용 설명, 과거완료 'had tempted'로 이전 사건 가능성 표현"
      },
      {
        sequence_order: 4,
        semantic_classification: "결과 우려 - 헛수고의 가능성",
        original_text: "and that our labors might have been in vain",
        korean_translation: "그리고 우리의 수고가 헛되게 되었을까 염려했습니다",
        grammatical_explanation: "병렬 절, 'might have been'은 과거의 가능성을 나타내는 조동사 구조"
      }
    ],
    vocabulary: [
      {
        word: "tempter",
        ipa_pronunciation: "/ˈtemptər/",
        korean_pronunciation: "템프터",
        definition_korean: "시험하는 자, 유혹하는 자 (사탄)"
      },
      {
        word: "tempted",
        ipa_pronunciation: "/ˈtemptɪd/",
        korean_pronunciation: "템프티드",
        definition_korean: "유혹하다, 시험하다"
      },
      {
        word: "labors",
        ipa_pronunciation: "/ˈleɪbərz/",
        korean_pronunciation: "레이버즈",
        definition_korean: "수고, 노력"
      },
      {
        word: "in vain",
        ipa_pronunciation: "/ɪn veɪn/",
        korean_pronunciation: "인 베인",
        definition_korean: "헛되이, 소용없이"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 개인적 차원('I')으로 전환하여 자신의 깊은 염려를 표현합니다. '시험하는 자'는 사탄을 가리키며, 초대 교회는 영적 전쟁의 현실을 인식하고 있었습니다. 바울의 두려움은 자신의 선교 사역이 헛될 수 있다는 것이었는데, 이는 그의 사역이 단순한 인간적 노력이 아니라 영적 전투임을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "이런 이유로, 내가 더 이상 견딜 수 없을 때, 나는 여러분의 믿음에 대해 알아보려고 사람을 보냈습니다. 나는 시험하는 자가 어떤 식으로든 여러분을 유혹했을까, 그리고 우리의 수고가 헛되게 되었을까 두려워했습니다.",
      translation_notes: "1절의 'we'에서 5절의 'I'로 전환은 바울의 개인적 감정을 강조합니다. 'the tempter'는 정관사를 사용하여 사탄을 구체적으로 지칭합니다. 'might have been'은 불확실한 과거 가능성을 표현하는 완료 조동사 구조입니다."
    }
  },
  {
    reference: "1 Thessalonians 3:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "전환 - 디모데의 귀환",
        original_text: "But Timothy has just now come to us from you",
        korean_translation: "그러나 디모데가 지금 막 여러분에게서 우리에게 돌아왔고",
        grammatical_explanation: "'But'은 앞의 두려움과 대조, 현재완료 'has come'으로 최근 사건 강조, 'just now'로 즉시성 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "좋은 소식 - 믿음과 사랑의 보고",
        original_text: "and has brought good news about your faith and love",
        korean_translation: "여러분의 믿음과 사랑에 대한 좋은 소식을 가져왔습니다",
        grammatical_explanation: "병렬 구조, 현재완료 계속, 'good news'는 복음 용어와 연결"
      },
      {
        sequence_order: 3,
        semantic_classification: "보고 내용 1 - 상호 기억과 애정",
        original_text: "He has told us that you always have pleasant memories of us",
        korean_translation: "그는 여러분이 항상 우리를 좋게 기억하고 있다고 말했고",
        grammatical_explanation: "'told us that' 간접화법, 'always'로 지속적 태도 강조"
      },
      {
        sequence_order: 4,
        semantic_classification: "보고 내용 2 - 상호 그리움",
        original_text: "and that you long to see us, just as we also long to see you",
        korean_translation: "우리도 여러분을 보고 싶어하는 것처럼 여러분도 우리를 보고 싶어한다고 말했습니다",
        grammatical_explanation: "병렬 절, 'just as'로 상호 감정의 동등함 표현, 대칭적 구조"
      }
    ],
    vocabulary: [
      {
        word: "just now",
        ipa_pronunciation: "/dʒʌst naʊ/",
        korean_pronunciation: "저스트 나우",
        definition_korean: "지금 막, 방금"
      },
      {
        word: "pleasant",
        ipa_pronunciation: "/ˈplezənt/",
        korean_pronunciation: "플레전트",
        definition_korean: "즐거운, 좋은"
      },
      {
        word: "memories",
        ipa_pronunciation: "/ˈmeməriz/",
        korean_pronunciation: "메머리즈",
        definition_korean: "기억들"
      },
      {
        word: "long",
        ipa_pronunciation: "/lɔːŋ/",
        korean_pronunciation: "롱",
        definition_korean: "갈망하다, 간절히 바라다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "디모데의 귀환은 바울의 염려를 기쁨으로 바꾸는 전환점입니다. '좋은 소식'(good news)이라는 단어는 복음을 의미하는 헬라어 '유앙겔리온'과 같은 단어로, 디모데의 보고가 복음만큼 기쁜 소식이었음을 암시합니다. 바울과 데살로니가 교회 사이의 상호적 사랑과 그리움은 건강한 목회 관계를 보여줍니다."
    },
    korean_translation: {
      natural_translation: "그러나 디모데가 지금 막 여러분에게서 우리에게 돌아왔고, 여러분의 믿음과 사랑에 대한 좋은 소식을 가져왔습니다. 그는 여러분이 항상 우리를 좋게 기억하고 있고, 우리도 여러분을 보고 싶어하는 것처럼 여러분도 우리를 보고 싶어한다고 말했습니다.",
      translation_notes: "'just now'는 시간적 즉각성을 강조하며 바울의 안도감을 전달합니다. 'faith and love'는 데살로니가서의 주요 주제입니다. 'just as we also long to see you'의 대칭적 구조는 상호적 애정을 효과적으로 표현합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "결과 - 위로와 격려",
        original_text: "Therefore, brothers and sisters, in all our distress and persecution we were encouraged about you",
        korean_translation: "그러므로 형제자매 여러분, 우리의 모든 고난과 박해 가운데서도 우리는 여러분으로 인해 위로를 받았습니다",
        grammatical_explanation: "'Therefore'로 결론 도입, 'brothers and sisters' 호칭으로 친밀감 표현, 'in all our distress and persecution'는 역경의 맥락 설정, 수동태 'were encouraged' 사용"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 - 위로의 근거",
        original_text: "because of your faith",
        korean_translation: "여러분의 믿음 때문입니다",
        grammatical_explanation: "'because of'로 원인 명시, 간결한 이유절"
      }
    ],
    vocabulary: [
      {
        word: "therefore",
        ipa_pronunciation: "/ˈðerfɔːr/",
        korean_pronunciation: "데어포어",
        definition_korean: "그러므로"
      },
      {
        word: "distress",
        ipa_pronunciation: "/dɪˈstres/",
        korean_pronunciation: "디스트레스",
        definition_korean: "고난, 고통"
      },
      {
        word: "persecution",
        ipa_pronunciation: "/ˌpɜːrsɪˈkjuːʃən/",
        korean_pronunciation: "퍼시큐션",
        definition_korean: "박해"
      },
      {
        word: "encouraged",
        ipa_pronunciation: "/ɪnˈkʌrɪdʒd/",
        korean_pronunciation: "인커리지드",
        definition_korean: "격려받다, 위로받다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신이 겪는 고난 중에도 데살로니가 교회의 믿음으로 위로받았다고 고백합니다. 이는 역설적 상황입니다 - 목회자가 회중에게 위로를 주는 것이 아니라 회중의 신실함이 고난 중인 목회자를 격려하는 것입니다. '형제자매'라는 호칭은 평등하고 가족적인 관계를 강조하며, 초대 교회의 공동체적 성격을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "그러므로 형제자매 여러분, 우리의 모든 고난과 박해 가운데서도 우리는 여러분의 믿음 때문에 여러분으로 인해 위로를 받았습니다.",
      translation_notes: "'distress and persecution'은 내적 고통과 외적 박해를 모두 포함하는 포괄적 표현입니다. 'encouraged about you because of your faith'는 격려의 대상과 원인을 명확히 구분합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현재 상태 - 삶의 의미 회복",
        original_text: "For now we really live",
        korean_translation: "이제 우리는 진정으로 살아 있습니다",
        grammatical_explanation: "'For'로 앞 절의 이유 설명, 'now'로 현재 상황 강조, 'really'로 진정성 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "조건 - 삶의 근거",
        original_text: "since you are standing firm in the Lord",
        korean_translation: "여러분이 주님 안에서 굳건히 서 있기 때문입니다",
        grammatical_explanation: "'since'로 이유/조건 제시, 진행형 'are standing'으로 지속적 상태 표현"
      }
    ],
    vocabulary: [
      {
        word: "really",
        ipa_pronunciation: "/ˈriːəli/",
        korean_pronunciation: "리얼리",
        definition_korean: "진정으로, 정말로"
      },
      {
        word: "standing firm",
        ipa_pronunciation: "/ˈstændɪŋ fɜːrm/",
        korean_pronunciation: "스탠딩 펌",
        definition_korean: "굳게 서다, 확고히 서다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 삶의 의미와 기쁨이 데살로니가 교회의 신앙적 견고함에 달려 있음을 표현하는 강력한 진술입니다. '진정으로 살아 있다'는 표현은 단순한 생존이 아니라 목적과 의미가 있는 삶을 의미합니다. '주님 안에서 굳건히 서다'는 군사적 용어로, 영적 전쟁에서 견디는 것을 암시합니다."
    },
    korean_translation: {
      natural_translation: "이제 우리는 진정으로 살아 있습니다, 여러분이 주님 안에서 굳건히 서 있기 때문입니다.",
      translation_notes: "'really live'는 과장된 표현처럼 보이지만 바울의 목회적 헌신의 깊이를 보여줍니다. 'standing firm in the Lord'는 수동적 신앙이 아니라 능동적이고 견고한 믿음을 나타냅니다."
    }
  },
  {
    reference: "1 Thessalonians 3:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수사적 질문 - 감사의 불충분함",
        original_text: "How can we thank God enough for you",
        korean_translation: "우리가 여러분으로 인해 하나님께 어떻게 충분히 감사드릴 수 있겠습니까",
        grammatical_explanation: "수사적 의문문, 'How can'으로 불가능성 암시, 'enough'로 감사의 크기 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 - 감사의 근거",
        original_text: "in return for all the joy we have in the presence of our God because of you",
        korean_translation: "여러분으로 인해 우리 하나님 앞에서 누리는 모든 기쁨에 대한 보답으로",
        grammatical_explanation: "'in return for'로 대가/보답 관계 설정, 'all the joy'로 기쁨의 총량 표현, 'in the presence of our God'로 기쁨의 맥락 명시"
      }
    ],
    vocabulary: [
      {
        word: "enough",
        ipa_pronunciation: "/ɪˈnʌf/",
        korean_pronunciation: "이너프",
        definition_korean: "충분히"
      },
      {
        word: "in return for",
        ipa_pronunciation: "/ɪn rɪˈtɜːrn fɔːr/",
        korean_pronunciation: "인 리턴 포",
        definition_korean: "~에 대한 보답으로, 대가로"
      },
      {
        word: "presence",
        ipa_pronunciation: "/ˈprezəns/",
        korean_pronunciation: "프레전스",
        definition_korean: "면전, 임재"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 감사는 수사적 질문으로 표현되어 그 깊이를 강조합니다. 감사의 대상은 데살로니가 교인들이지만 방향은 하나님께입니다. '하나님 앞에서'라는 표현은 이 기쁨이 단순한 인간적 감정이 아니라 하나님과의 관계 안에서 경험되는 영적 기쁨임을 나타냅니다."
    },
    korean_translation: {
      natural_translation: "우리가 여러분으로 인해 우리 하나님 앞에서 누리는 모든 기쁨에 대한 보답으로, 여러분에 대해 하나님께 어떻게 충분히 감사드릴 수 있겠습니까?",
      translation_notes: "수사적 질문은 감사의 불가능성을 표현하여 오히려 감사의 크기를 강조하는 문학적 기법입니다. 'in the presence of our God'는 예배적 맥락을 암시합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도의 빈도와 강도",
        original_text: "Night and day we pray most earnestly",
        korean_translation: "밤낮으로 우리는 가장 간절히 기도합니다",
        grammatical_explanation: "'Night and day'로 시간 전체를 표현, 'most earnestly'로 기도의 열정 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "기도 내용 1 - 재회의 소망",
        original_text: "that we may see you again",
        korean_translation: "우리가 여러분을 다시 볼 수 있기를",
        grammatical_explanation: "'that'절로 기도 내용 도입, 'may'로 소망 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "기도 내용 2 - 믿음 보완의 목적",
        original_text: "and supply what is lacking in your faith",
        korean_translation: "그리고 여러분의 믿음에 부족한 것을 채울 수 있기를",
        grammatical_explanation: "병렬 부정사구, 'supply'로 채움의 행위, 'what is lacking'으로 부족함 인정"
      }
    ],
    vocabulary: [
      {
        word: "earnestly",
        ipa_pronunciation: "/ˈɜːrnɪstli/",
        korean_pronunciation: "어니스틀리",
        definition_korean: "간절히, 진지하게"
      },
      {
        word: "supply",
        ipa_pronunciation: "/səˈplaɪ/",
        korean_pronunciation: "서플라이",
        definition_korean: "공급하다, 채우다"
      },
      {
        word: "lacking",
        ipa_pronunciation: "/ˈlækɪŋ/",
        korean_pronunciation: "래킹",
        definition_korean: "부족한"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 기도 생활의 강도와 내용이 드러납니다. '밤낮으로'는 쉬지 않는 기도를, '가장 간절히'는 기도의 열정을 나타냅니다. 바울의 두 가지 기도 제목은 개인적 재회와 목회적 완성입니다. '믿음에 부족한 것'을 언급하는 것은 데살로니가 교회를 비난하는 것이 아니라 더 성숙한 신앙으로 인도하려는 목회적 관심을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "밤낮으로 우리는 가장 간절히 기도합니다. 우리가 여러분을 다시 볼 수 있고 여러분의 믿음에 부족한 것을 채울 수 있기를 기도합니다.",
      translation_notes: "'most earnestly'는 최상급으로 기도의 강도를 극대화합니다. 'what is lacking in your faith'는 완전함을 향한 여정으로서의 신앙을 암시하며, 비판이 아닌 성장의 여지를 인정합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 - 하나님의 인도 구함",
        original_text: "Now may our God and Father himself and our Lord Jesus clear the way for us to come to you",
        korean_translation: "이제 우리 하나님 아버지와 우리 주 예수님께서 친히 우리가 여러분에게 가는 길을 열어주시기를 기원합니다",
        grammatical_explanation: "기원문, 'may'로 소망 표현, 'himself'로 하나님의 직접적 개입 강조, 'clear the way'는 장애물 제거를 의미"
      }
    ],
    vocabulary: [
      {
        word: "himself",
        ipa_pronunciation: "/hɪmˈself/",
        korean_pronunciation: "힘셀프",
        definition_korean: "친히, 스스로"
      },
      {
        word: "clear the way",
        ipa_pronunciation: "/klɪr ðə weɪ/",
        korean_pronunciation: "클리어 더 웨이",
        definition_korean: "길을 열다, 장애물을 제거하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 공식적인 기도문으로 전환합니다. '우리 하나님 아버지'와 '우리 주 예수'를 함께 언급하는 것은 초대 교회의 삼위일체적 신학을 보여줍니다. '친히'는 하나님의 개인적이고 직접적인 개입을 구하는 것입니다. '길을 열다'는 여행의 실제적 장애물뿐 아니라 영적 방해도 포함할 수 있습니다."
    },
    korean_translation: {
      natural_translation: "이제 우리 하나님 아버지와 우리 주 예수님께서 친히 우리가 여러분에게 가는 길을 열어주시기를 기원합니다.",
      translation_notes: "하나님 아버지와 주 예수를 동등하게 호칭하며 단수 동사 'clear'를 사용한 것은 신학적으로 중요합니다. 'himself'의 강조는 인간의 계획이 아닌 하나님의 주권적 인도를 구합니다."
    }
  },
  {
    reference: "1 Thessalonians 3:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 - 사랑의 증가",
        original_text: "May the Lord make your love increase and overflow",
        korean_translation: "주님께서 여러분의 사랑이 증가하고 넘치게 하시기를",
        grammatical_explanation: "기원문, 'may'로 소망, 'make'는 사역동사, 두 개의 동사 'increase'와 'overflow'가 병렬"
      },
      {
        sequence_order: 2,
        semantic_classification: "사랑의 대상 - 상호적 사랑과 보편적 사랑",
        original_text: "for each other and for everyone else",
        korean_translation: "서로에 대해서와 모든 다른 사람들에 대해서",
        grammatical_explanation: "두 개의 'for' 전치사구, 내부 사랑과 외부 사랑을 구분"
      },
      {
        sequence_order: 3,
        semantic_classification: "모범 - 바울의 사랑을 본보기로",
        original_text: "just as ours does for you",
        korean_translation: "우리의 사랑이 여러분에 대해 그러한 것처럼",
        grammatical_explanation: "'just as'로 비교, 'ours does'는 대명사와 대동사로 반복 회피"
      }
    ],
    vocabulary: [
      {
        word: "increase",
        ipa_pronunciation: "/ɪnˈkriːs/",
        korean_pronunciation: "인크리스",
        definition_korean: "증가하다"
      },
      {
        word: "overflow",
        ipa_pronunciation: "/ˌoʊvərˈfloʊ/",
        korean_pronunciation: "오버플로우",
        definition_korean: "넘치다, 범람하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 사랑의 두 차원을 기도합니다: 수평적 차원(서로에 대한 사랑)과 보편적 차원(모든 사람에 대한 사랑). '증가하고 넘치다'는 점진적 성장을 넘어선 풍성함을 표현합니다. 바울은 자신의 사랑을 모범으로 제시하며, 이는 교만이 아니라 그리스도의 사랑을 본받은 것입니다."
    },
    korean_translation: {
      natural_translation: "주님께서 여러분의 사랑이 서로에 대해서와 모든 다른 사람들에 대해서 증가하고 넘치게 하시기를, 우리의 사랑이 여러분에 대해 그러한 것처럼 하시기를 기원합니다.",
      translation_notes: "'increase and overflow'는 사랑의 양적 성장과 질적 풍성함을 모두 표현합니다. 'each other'와 'everyone else'의 구분은 교회 내부와 외부를 아우르는 기독교적 사랑의 범위를 보여줍니다."
    }
  },
  {
    reference: "1 Thessalonians 3:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 - 마음의 강화",
        original_text: "May he strengthen your hearts",
        korean_translation: "그분이 여러분의 마음을 강하게 하셔서",
        grammatical_explanation: "기원문 계속, 'may'로 소망, 'strengthen'으로 견고함 구함"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적 - 거룩함과 흠 없음",
        original_text: "so that you will be blameless and holy",
        korean_translation: "여러분이 흠 없고 거룩하게 되도록",
        grammatical_explanation: "'so that'으로 목적절, 'will be'로 미래 상태 표현, 두 형용사 'blameless and holy' 병렬"
      },
      {
        sequence_order: 3,
        semantic_classification: "장소와 시간 - 하나님 앞에서 재림 때",
        original_text: "in the presence of our God and Father when our Lord Jesus comes with all his holy ones",
        korean_translation: "우리 주 예수님이 그의 모든 거룩한 자들과 함께 오실 때 우리 하나님 아버지 앞에서",
        grammatical_explanation: "'in the presence of'로 장소, 'when'으로 시간, 'comes with'로 재림의 양상 묘사"
      }
    ],
    vocabulary: [
      {
        word: "strengthen",
        ipa_pronunciation: "/ˈstreŋθən/",
        korean_pronunciation: "스트렝던",
        definition_korean: "강하게 하다"
      },
      {
        word: "blameless",
        ipa_pronunciation: "/ˈbleɪmləs/",
        korean_pronunciation: "블레임리스",
        definition_korean: "흠 없는, 책망할 것이 없는"
      },
      {
        word: "holy",
        ipa_pronunciation: "/ˈhoʊli/",
        korean_pronunciation: "홀리",
        definition_korean: "거룩한"
      },
      {
        word: "holy ones",
        ipa_pronunciation: "/ˈhoʊli wʌnz/",
        korean_pronunciation: "홀리 원즈",
        definition_korean: "거룩한 자들 (천사들 또는 성도들)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "3장의 절정으로, 바울의 기도는 종말론적 관점으로 마무리됩니다. '마음을 강하게 하다'는 내적 견고함을 의미하며, 이는 외적 시련에 대응하기 위함입니다. '흠 없고 거룩한'은 최종 심판에서의 상태를 가리키며, 이는 인간의 노력이 아닌 하나님의 은혜로 가능합니다. '거룩한 자들'은 천사들 또는 부활한 성도들을 의미할 수 있습니다."
    },
    korean_translation: {
      natural_translation: "그분이 여러분의 마음을 강하게 하셔서, 우리 주 예수님이 그의 모든 거룩한 자들과 함께 오실 때 우리 하나님 아버지 앞에서 여러분이 흠 없고 거룩하게 되도록 하시기를 기원합니다.",
      translation_notes: "'blameless and holy'는 법적 무죄(blameless)와 도덕적 순결(holy)을 모두 포함합니다. 'when our Lord Jesus comes'는 재림에 대한 명확한 종말론적 기대를 보여줍니다. 'with all his holy ones'는 재림의 영광스러운 수행을 암시합니다."
    }
  }
];

async function main() {
  console.log(`\n1 Thessalonians 3:1-13 분석 데이터 저장 시작...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const analysis of analysesData) {
    const success = await saveAnalysisToDb(analysis);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n=== 저장 완료 ===`);
  console.log(`성공: ${successCount}개`);
  console.log(`실패: ${failCount}개`);
  console.log(`총 ${analysesData.length}개 구절\n`);
}

main();
