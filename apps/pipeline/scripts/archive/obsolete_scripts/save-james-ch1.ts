import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const jamesChapter1Analyses: AnalysisData[] = [
  {
    reference: 'James 1:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '발신인 소개',
        original_text: 'James, a servant of God and of the Lord Jesus Christ',
        korean_translation: '하나님과 주 예수 그리스도의 종인 야고보',
        grammatical_explanation: '동격 표현으로 저자의 정체성과 역할을 나타냄. servant는 doulos로 완전한 헌신을 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '수신인 지정',
        original_text: 'To the twelve tribes scattered among the nations',
        korean_translation: '여러 나라에 흩어진 열두 지파에게',
        grammatical_explanation: 'twelve tribes는 유대 디아스포라 공동체를 지칭하는 관용적 표현'
      },
      {
        sequence_order: 3,
        semantic_classification: '인사말',
        original_text: 'Greetings',
        korean_translation: '문안하노라',
        grammatical_explanation: '그리스어 서신 형식의 전형적인 인사 표현 chairein'
      }
    ],
    vocabulary: [
      { word: 'servant', ipa_pronunciation: '/ˈsɜːrvənt/', korean_pronunciation: '서번트', part_of_speech: '명사', definition_korean: '종, 하인', usage_note: '그리스어 doulos로 자발적 헌신과 복종을 의미' },
      { word: 'scattered', ipa_pronunciation: '/ˈskætərd/', korean_pronunciation: '스캐터드', part_of_speech: '형용사', definition_korean: '흩어진', usage_note: '디아스포라를 표현하는 용어' },
      { word: 'tribes', ipa_pronunciation: '/traɪbz/', korean_pronunciation: '트라입스', part_of_speech: '명사', definition_korean: '지파들', usage_note: '이스라엘 열두 지파를 가리키며 전체 유대 기독교 공동체를 상징' }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보서는 예수의 형제 야고보가 주후 45-50년경 디아스포라 유대인 기독교인들에게 보낸 서신입니다. 저자는 겸손하게 자신을 종으로만 표현합니다. 열두 지파는 새 이스라엘인 교회를 의미합니다. 신약 중 가장 유대적 색채가 강하며 지혜 문학의 전통을 따릅니다.'
    },
    korean_translation: {
      natural_translation: '하나님과 주 예수 그리스도의 종 야고보는 여러 나라에 흩어져 사는 열두 지파에게 문안합니다.'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '야고보는 예수의 동생으로 부활 후 믿음을 가지게 되었으며 예루살렘 교회의 지도자가 되었습니다. 이 서신은 신약에서 가장 이른 시기에 쓰인 문서 중 하나입니다.'
    }
  },
  {
    reference: 'James 1:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 태도의 전환',
        original_text: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds',
        korean_translation: '내 형제자매들이여, 여러 가지 시험을 만날 때 순전한 기쁨으로 여기십시오',
        grammatical_explanation: 'Consider it은 명령형으로 능동적 관점 전환을 요구. whenever절은 시련이 반복적이고 불가피함을 나타냄'
      }
    ],
    vocabulary: [
      { word: 'consider', ipa_pronunciation: '/kənˈsɪdər/', korean_pronunciation: '컨시더', part_of_speech: '동사', definition_korean: '여기다, 간주하다', usage_note: '의도적이고 의지적인 사고 작용' },
      { word: 'pure', ipa_pronunciation: '/pjʊər/', korean_pronunciation: '퓨어', part_of_speech: '형용사', definition_korean: '순전한, 완전한', usage_note: '조건 없는 완전한 기쁨을 강조' },
      { word: 'trials', ipa_pronunciation: '/ˈtraɪəlz/', korean_pronunciation: '트라이얼즈', part_of_speech: '명사', definition_korean: '시련, 시험', usage_note: '신앙을 시험하고 단련하는 역경' }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보서의 핵심 주제인 시련 속 신앙을 도입합니다. 1세기 디아스포라 유대 기독교인들은 사회적 차별과 종교적 박해를 경험했습니다. 야고보는 시련을 기쁨으로 받아들이라는 역설적 권면을 하며, 이는 구약 지혜 전통과 예수의 산상수훈을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '나의 형제자매 여러분, 각종 시험을 만날 때에 그것을 온전한 기쁨으로 여기십시오.'
    },
    special_explanation: {
      explanation_type: '신학적 역설',
      content: '시련을 기쁨으로 여기라는 것은 시련이 가져올 영적 성장과 믿음의 정련을 미리 바라보는 믿음의 관점입니다. 로마서 5:3-5의 바울 신학과 일맥상통합니다.'
    }
  },
  {
    reference: 'James 1:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유 설명',
        original_text: 'because you know that the testing of your faith produces perseverance',
        korean_translation: '너희 믿음의 시험이 인내를 만들어내는 것을 너희가 알기 때문이니',
        grammatical_explanation: 'because절은 1:2의 근거. testing은 dokimion으로 금속 정련 과정의 은유. produces는 현재형으로 필연적 결과를 나타냄'
      }
    ],
    vocabulary: [
      { word: 'testing', ipa_pronunciation: '/ˈtɛstɪŋ/', korean_pronunciation: '테스팅', part_of_speech: '명사', definition_korean: '시험, 검증', usage_note: '금속의 순도를 시험하듯 믿음의 진정성을 검증하는 과정' },
      { word: 'perseverance', ipa_pronunciation: '/ˌpɜːrsəˈvɪrəns/', korean_pronunciation: '퍼서비어런스', part_of_speech: '명사', definition_korean: '인내, 견딤', usage_note: '수동적 참음이 아닌 능동적이고 승리하는 견딤' },
      { word: 'produces', ipa_pronunciation: '/prəˈduːsɪz/', korean_pronunciation: '프러듀시즈', part_of_speech: '동사', definition_korean: '만들어내다', usage_note: '완전히 이루어내다는 의미의 강한 동사' }
    ],
    contextual_explanation: {
      integrated_explanation: '시련을 긍정적으로 보아야 하는 논리적 근거를 제시합니다. 믿음의 시험은 금속 정련의 은유로, 불순물을 제거하고 순도를 높이는 과정입니다. 이를 통해 인내가 형성되는데, 이는 신약에서 매우 중요한 덕목입니다. 로마서 5:3-4에서도 동일하게 나타납니다.'
    },
    korean_translation: {
      natural_translation: '이는 여러분의 믿음이 시험을 받으면 인내가 생긴다는 것을 여러분이 알기 때문입니다.'
    }
  },
  {
    reference: 'James 1:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 과정의 완성',
        original_text: 'Let perseverance finish its work',
        korean_translation: '인내가 그 일을 완전히 이루게 하십시오',
        grammatical_explanation: 'Let은 허용의 명령형으로 인내의 과정을 방해하지 말라는 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적: 성숙한 완전함',
        original_text: 'so that you may be mature and complete, not lacking anything',
        korean_translation: '그리하여 너희가 온전하고 완전하여 조금도 부족함이 없게 하려 함이라',
        grammatical_explanation: 'so that절은 목적. mature and complete은 동의적 병행으로 영적 완전함을 강조. not lacking anything은 부정 표현으로 긍정을 강화'
      }
    ],
    vocabulary: [
      { word: 'finish', ipa_pronunciation: '/ˈfɪnɪʃ/', korean_pronunciation: '피니쉬', part_of_speech: '동사', definition_korean: '완성하다', usage_note: '목표까지 완전히 이루어내는 것' },
      { word: 'mature', ipa_pronunciation: '/məˈtʊər/', korean_pronunciation: '머츄어', part_of_speech: '형용사', definition_korean: '성숙한, 온전한', usage_note: '목적을 달성한, 완전히 발달한 상태' },
      { word: 'complete', ipa_pronunciation: '/kəmˈpliːt/', korean_pronunciation: '컴플리트', part_of_speech: '형용사', definition_korean: '완전한', usage_note: '모든 부분이 완전한, 통합된 상태' },
      { word: 'lacking', ipa_pronunciation: '/ˈlækɪŋ/', korean_pronunciation: '래킹', part_of_speech: '동사', definition_korean: '부족하다', usage_note: '결핍되거나 모자라는 것' }
    ],
    contextual_explanation: {
      integrated_explanation: '시련-인내-성숙의 영적 발전 과정을 완성합니다. 온전하고 완전하여는 히브리적 완전 개념을 반영하는 동의적 병행 표현으로, 도덕적 완벽이 아닌 목적을 이룬 성숙함을 의미합니다. 이는 신약 전체의 성화 과정을 압축적으로 표현한 것입니다.'
    },
    korean_translation: {
      natural_translation: '인내를 온전히 이루게 하십시오. 그리하여 여러분이 온전하고 구비하여 조금도 부족함이 없게 하려는 것입니다.'
    },
    special_explanation: {
      explanation_type: '어휘 분석',
      content: 'mature(teleios)와 complete(holoklēros)는 미묘한 차이가 있습니다. teleios는 목적을 달성한 성숙함을, holoklēros는 모든 부분이 온전한 통합성을 강조합니다.'
    }
  },
  {
    reference: 'James 1:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건절: 지혜 부족',
        original_text: 'If any of you lacks wisdom',
        korean_translation: '너희 중에 누구든지 지혜가 부족하거든',
        grammatical_explanation: 'If절은 조건절로 실제 상황을 가정. wisdom은 실천적 분별력을 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령: 하나님께 구함',
        original_text: 'you should ask God, who gives generously to all without finding fault',
        korean_translation: '모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하십시오',
        grammatical_explanation: 'should ask는 명령형 의미의 권고. 관계절로 하나님의 성품을 설명: gives generously와 without finding fault'
      },
      {
        sequence_order: 3,
        semantic_classification: '약속: 응답',
        original_text: 'and it will be given to you',
        korean_translation: '그리하면 너희에게 주실 것입니다',
        grammatical_explanation: 'will be given은 신적 수동태로 하나님이 주체. 미래형은 확실한 약속'
      }
    ],
    vocabulary: [
      { word: 'wisdom', ipa_pronunciation: '/ˈwɪzdəm/', korean_pronunciation: '위즈덤', part_of_speech: '명사', definition_korean: '지혜', usage_note: '단순한 지식이 아닌 실천적 분별력과 하나님의 뜻을 아는 것' },
      { word: 'generously', ipa_pronunciation: '/ˈdʒɛnərəsli/', korean_pronunciation: '제너러슬리', part_of_speech: '부사', definition_korean: '후하게, 너그럽게', usage_note: '단순하게, 순수하게, 조건 없이 주는 것' },
      { word: 'finding fault', ipa_pronunciation: '/ˈfaɪndɪŋ fɔːlt/', korean_pronunciation: '파인딩 폴트', part_of_speech: '동명사구', definition_korean: '꾸짖다', usage_note: '하나님은 기도하는 자를 꾸짖지 않으심' }
    ],
    contextual_explanation: {
      integrated_explanation: '시련을 잘 견디고 성숙에 이르기 위해서는 지혜가 필요합니다. 야고보의 지혜 개념은 구약 지혜 문학을 배경으로 하며, 하나님을 경외하며 그분의 뜻대로 사는 실천적 분별력을 의미합니다. 하나님은 후하게 주시고 꾸짖지 않으신다는 표현은 하나님의 관대한 성품을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '여러분 가운데 누구든지 지혜가 부족하면, 모든 사람에게 아낌없이 주시고 나무라지 않으시는 하나님께 구하십시오. 그러면 주실 것입니다.'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '야고보의 지혜는 바울의 믿음과 상호보완적입니다. 지혜는 시련 속에서 하나님의 뜻을 분별하고 올바르게 반응하는 능력으로, 삶으로 실천되는 경건입니다. 잠언 9:10을 반영합니다.'
    }
  },
  {
    reference: 'James 1:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건: 믿음의 태도',
        original_text: 'But when you ask, you must believe and not doubt',
        korean_translation: '그러나 구할 때에는 의심하지 말고 믿음으로 구하십시오',
        grammatical_explanation: 'must believe는 강한 의무. not doubt는 부정 명령으로 의심 배제'
      },
      {
        sequence_order: 2,
        semantic_classification: '비유: 의심하는 자',
        original_text: 'because the one who doubts is like a wave of the sea, blown and tossed by the wind',
        korean_translation: '의심하는 사람은 바람에 불려 요동하는 바다 물결 같기 때문입니다',
        grammatical_explanation: 'like a wave는 직유법. blown and tossed는 수동태 분사로 외부 힘에 의한 불안정을 강조'
      }
    ],
    vocabulary: [
      { word: 'doubt', ipa_pronunciation: '/daʊt/', korean_pronunciation: '다우트', part_of_speech: '동사', definition_korean: '의심하다', usage_note: '마음이 둘로 나뉘어 판단이 흔들리는 상태' },
      { word: 'wave', ipa_pronunciation: '/weɪv/', korean_pronunciation: '웨이브', part_of_speech: '명사', definition_korean: '파도, 물결', usage_note: '안정성 없이 계속 움직이는 것의 비유' },
      { word: 'tossed', ipa_pronunciation: '/tɔːst/', korean_pronunciation: '토스트', part_of_speech: '과거분사', definition_korean: '내던져진, 요동하는', usage_note: '외부 힘에 의해 통제 불능 상태로 흔들리는 것' }
    ],
    contextual_explanation: {
      integrated_explanation: '기도의 조건으로 의심 없는 믿음을 제시합니다. 바다 물결의 비유는 구약과 유대 문학에서 불안정과 불신앙의 상징으로 사용되었습니다. 의심은 단순한 지적 회의가 아니라 하나님의 신실하심에 대한 불신을 의미하며, 기도 응답을 방해합니다.'
    },
    korean_translation: {
      natural_translation: '다만 믿음으로 구하고 조금도 의심하지 마십시오. 의심하는 사람은 바람에 밀려 요동하는 바다 물결 같습니다.'
    }
  },
  {
    reference: 'James 1:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결과: 응답 불가',
        original_text: 'That person should not expect to receive anything from the Lord',
        korean_translation: '그런 사람은 주께로부터 무엇이든 받으리라고 생각하지 말아야 합니다',
        grammatical_explanation: 'should not expect는 부정 명령의 강화. anything은 포괄적 부정'
      }
    ],
    vocabulary: [
      { word: 'expect', ipa_pronunciation: '/ɪkˈspɛkt/', korean_pronunciation: '익스펙트', part_of_speech: '동사', definition_korean: '기대하다', usage_note: '받을 것이라는 확신이나 추측' }
    ],
    contextual_explanation: {
      integrated_explanation: '의심하는 자에 대한 경고입니다. 하나님께 구하면서도 의심한다면 응답을 기대할 수 없습니다. 이는 하나님의 무능 때문이 아니라 구하는 자의 불신 때문입니다.'
    },
    korean_translation: {
      natural_translation: '그런 사람은 주님께 무엇을 받으리라고 생각하지 마십시오.'
    }
  },
  {
    reference: 'James 1:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '특징 묘사',
        original_text: 'Such a person is double-minded and unstable in all they do',
        korean_translation: '그런 사람은 두 마음을 품어 모든 일에 안정되지 못합니다',
        grammatical_explanation: 'double-minded는 야고보의 독특한 용어. unstable in all they do는 전 생활 영역의 불안정'
      }
    ],
    vocabulary: [
      { word: 'double-minded', ipa_pronunciation: '/ˈdʌbəl ˈmaɪndɪd/', korean_pronunciation: '더블 마인디드', part_of_speech: '형용사', definition_korean: '두 마음을 품은', usage_note: '야고보서에서만 나타나는 단어. 하나님과 세상 사이에서 갈등하는 상태' },
      { word: 'unstable', ipa_pronunciation: '/ʌnˈsteɪbəl/', korean_pronunciation: '언스테이블', part_of_speech: '형용사', definition_korean: '불안정한', usage_note: '확고한 기반이 없이 흔들리는 상태' }
    ],
    contextual_explanation: {
      integrated_explanation: '두 마음은 야고보가 만든 신조어로, 하나님과 세상 사이에서 양다리를 걸친 분열된 마음을 묘사합니다. 이런 내적 분열은 삶의 모든 영역에 불안정을 가져옵니다.'
    },
    korean_translation: {
      natural_translation: '그는 두 마음을 품고 모든 일에 안정되지 못한 사람입니다.'
    },
    special_explanation: {
      explanation_type: '어휘 연구',
      content: 'dipsychos(두 마음)는 신약에서 야고보서에만 나타나는 독특한 용어로, dis(둘) + psychē(혼)의 합성어입니다. 하나님께 온전히 헌신하지 못하고 세상과 타협하려는 분열된 충성을 묘사합니다.'
    }
  },
  {
    reference: 'James 1:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 가난한 자의 자랑',
        original_text: 'Believers in humble circumstances ought to take pride in their high position',
        korean_translation: '낮은 처지에 있는 믿는 사람은 자기의 높은 지위를 자랑해야 합니다',
        grammatical_explanation: 'ought to는 도덕적 의무. high position은 영적 지위로 물질적 가난과 대조'
      }
    ],
    vocabulary: [
      { word: 'humble', ipa_pronunciation: '/ˈhʌmbəl/', korean_pronunciation: '험블', part_of_speech: '형용사', definition_korean: '낮은, 겸손한', usage_note: '사회경제적으로 낮은 지위를 의미' },
      { word: 'take pride', ipa_pronunciation: '/teɪk praɪd/', korean_pronunciation: '테이크 프라이드', part_of_speech: '동사구', definition_korean: '자랑하다', usage_note: '기쁨과 자부심을 가지는 것' }
    ],
    contextual_explanation: {
      integrated_explanation: '사회경제적 역설을 제시합니다. 가난한 믿는 자는 하나님 나라에서의 높은 지위를 자랑해야 합니다. 이는 예수의 팔복과 마리아의 찬가를 반영합니다.'
    },
    korean_translation: {
      natural_translation: '가난한 형제는 자기가 높아진 것을 자랑하십시오.'
    }
  },
  {
    reference: 'James 1:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 부자의 겸손',
        original_text: 'But the rich should take pride in their humiliation',
        korean_translation: '그러나 부자는 자기의 낮아짐을 자랑해야 합니다',
        grammatical_explanation: 'But은 1:9와의 대조. humiliation은 부의 무가치함을 깨달은 영적 겸손'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유: 부의 무상함',
        original_text: 'since they will pass away like a wild flower',
        korean_translation: '왜냐하면 그들은 들풀처럼 지나갈 것이기 때문입니다',
        grammatical_explanation: 'since절은 이유. wild flower 비유는 구약 인용'
      }
    ],
    vocabulary: [
      { word: 'humiliation', ipa_pronunciation: '/hjuːˌmɪliˈeɪʃən/', korean_pronunciation: '휴밀리에이션', part_of_speech: '명사', definition_korean: '낮아짐, 겸손', usage_note: '자발적 또는 강제적 낮아짐' },
      { word: 'wild flower', ipa_pronunciation: '/waɪld ˈflaʊər/', korean_pronunciation: '와일드 플라워', part_of_speech: '명사구', definition_korean: '들풀, 야생화', usage_note: '순식간에 피었다 지는 무상함의 상징' }
    ],
    contextual_explanation: {
      integrated_explanation: '부자에 대한 역설적 권면입니다. 부는 일시적이므로 부자는 자신의 영적 가난을 깨닫고 겸손해져야 합니다. 들풀 비유는 이사야 40:6-8을 인용하여 인간과 부의 덧없음을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '부한 사람은 자기가 낮아진 것을 자랑하십시오. 그는 들풀처럼 사라질 것이기 때문입니다.'
    }
  },
  {
    reference: 'James 1:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '자연 현상 묘사',
        original_text: 'For the sun rises with scorching heat and withers the plant',
        korean_translation: '태양이 뜨거운 열기와 함께 떠올라 풀을 시들게 하고',
        grammatical_explanation: 'For는 1:10의 근거 제시. rises with는 동반 상황'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 아름다움의 파괴',
        original_text: 'its blossom falls and its beauty is destroyed',
        korean_translation: '그 꽃이 떨어지고 아름다움이 파괴됩니다',
        grammatical_explanation: '두 개의 병렬절로 완전한 파괴를 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '적용: 부자의 운명',
        original_text: 'In the same way, the rich will fade away even while they go about their business',
        korean_translation: '이와 같이 부자도 자기 사업을 하는 중에 사라질 것입니다',
        grammatical_explanation: 'In the same way는 비교 적용. even while은 역설적 동시성'
      }
    ],
    vocabulary: [
      { word: 'scorching', ipa_pronunciation: '/ˈskɔːrtʃɪŋ/', korean_pronunciation: '스코칭', part_of_speech: '형용사', definition_korean: '뜨겁게 태우는', usage_note: '파괴적인 강렬한 열' },
      { word: 'withers', ipa_pronunciation: '/ˈwɪðərz/', korean_pronunciation: '위더즈', part_of_speech: '동사', definition_korean: '시들게 하다', usage_note: '생명력을 잃고 말라 죽음' },
      { word: 'blossom', ipa_pronunciation: '/ˈblɒsəm/', korean_pronunciation: '블로섬', part_of_speech: '명사', definition_korean: '꽃', usage_note: '아름다움과 번성의 상징' },
      { word: 'fade away', ipa_pronunciation: '/feɪd əˈweɪ/', korean_pronunciation: '페이드 어웨이', part_of_speech: '동사구', definition_korean: '사라지다', usage_note: '점차 약해져 소멸됨' }
    ],
    contextual_explanation: {
      integrated_explanation: '이사야 40:6-8의 들풀 비유를 확장하여 부의 무상함을 생생하게 묘사합니다. 중동 지역의 뜨거운 시로코 바람은 하루 만에 풀을 시들게 만듭니다. 부자가 사업에 열중하는 바로 그 순간에도 사라질 수 있다는 경고는 야고보 시대 상인들에게 특히 적절했습니다.'
    },
    korean_translation: {
      natural_translation: '해가 뜨거운 열기와 함께 떠오르면 풀을 말리고, 그 꽃은 떨어지며 그 아름다운 모양이 사라집니다. 이와 같이 부자도 그의 일을 하다가 쇠잔해질 것입니다.'
    }
  },
  {
    reference: 'James 1:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '축복 선언',
        original_text: 'Blessed is the one who perseveres under trial',
        korean_translation: '시험을 견디는 사람은 복이 있습니다',
        grammatical_explanation: 'Blessed는 마카리즘 형식의 축복 선언. perseveres는 현재형으로 지속적 행위'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유: 시험 통과',
        original_text: 'because, having stood the test, that person will receive the crown of life',
        korean_translation: '시험을 이겨낸 그 사람은 생명의 면류관을 받을 것이기 때문입니다',
        grammatical_explanation: 'having stood는 완료 분사로 시험 통과의 완결성. will receive는 미래의 확실한 보상'
      },
      {
        sequence_order: 3,
        semantic_classification: '약속의 수혜자',
        original_text: 'that the Lord has promised to those who love him',
        korean_translation: '주께서 자기를 사랑하는 자들에게 약속하신 것입니다',
        grammatical_explanation: '관계절로 약속의 신뢰성과 수혜자를 명시'
      }
    ],
    vocabulary: [
      { word: 'blessed', ipa_pronunciation: '/blɛst/', korean_pronunciation: '블레스트', part_of_speech: '형용사', definition_korean: '복이 있는', usage_note: '하나님의 은총을 받은 상태' },
      { word: 'perseveres', ipa_pronunciation: '/ˌpɜːrsəˈvɪrz/', korean_pronunciation: '퍼서비어즈', part_of_speech: '동사', definition_korean: '견디다, 인내하다', usage_note: '끝까지 견뎌내는 능동적 인내' },
      { word: 'crown', ipa_pronunciation: '/kraʊn/', korean_pronunciation: '크라운', part_of_speech: '명사', definition_korean: '면류관', usage_note: '승리와 영광의 상징, 그리스 경기의 월계관' }
    ],
    contextual_explanation: {
      integrated_explanation: '1:2-11의 시련 주제를 결론짓는 축복 선언입니다. 생명의 면류관은 그리스 경기의 월계관 이미지를 사용하여 영생을 상징합니다. 시험을 견디는 것은 하나님을 사랑하는 것과 직접 연결되며, 이는 야고보의 실천적 신앙 강조와 일치합니다. 요한계시록 2:10에서도 같은 약속이 나타납니다.'
    },
    korean_translation: {
      natural_translation: '시험을 견디는 사람은 복이 있습니다. 시험을 이겨낸 사람은 주께서 자기를 사랑하는 사람들에게 약속하신 생명의 면류관을 받을 것입니다.'
    }
  },
  {
    reference: 'James 1:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고: 잘못된 귀인',
        original_text: 'When tempted, no one should say, "God is tempting me"',
        korean_translation: '시험을 받을 때 아무도 하나님이 나를 시험하신다고 말해서는 안 됩니다',
        grammatical_explanation: 'When tempted는 시간 상황. no one should say는 강한 금지'
      },
      {
        sequence_order: 2,
        semantic_classification: '근거: 하나님의 성품',
        original_text: 'For God cannot be tempted by evil',
        korean_translation: '하나님은 악에게 시험을 받지 않으시며',
        grammatical_explanation: 'cannot be tempted는 절대적 불가능. by evil은 악의 출처'
      },
      {
        sequence_order: 3,
        semantic_classification: '근거: 하나님의 행위',
        original_text: 'nor does he tempt anyone',
        korean_translation: '또한 아무도 시험하지 않으십니다',
        grammatical_explanation: 'nor는 부정의 추가. anyone은 보편적 부정'
      }
    ],
    vocabulary: [
      { word: 'tempted', ipa_pronunciation: '/ˈtɛmptɪd/', korean_pronunciation: '템티드', part_of_speech: '과거분사', definition_korean: '유혹받은, 시험받은', usage_note: '그리스어 peirazō로 시험과 유혹의 이중 의미' },
      { word: 'evil', ipa_pronunciation: '/ˈiːvəl/', korean_pronunciation: '이블', part_of_speech: '명사', definition_korean: '악', usage_note: '도덕적, 영적 악함' }
    ],
    contextual_explanation: {
      integrated_explanation: '시련(trial)에서 유혹(temptation)으로 주제가 전환됩니다. 그리스어 peirasmos는 두 의미를 모두 가집니다. 야고보는 사람들이 자신의 죄를 하나님께 돌리는 것을 강력히 경고합니다. 하나님은 본질적으로 악과 무관하시므로 악으로 유혹할 수 없으십니다. 이는 창세기 3장에서 하와가 뱀의 유혹을 받은 것과 대조됩니다.'
    },
    korean_translation: {
      natural_translation: '시험을 받을 때 아무도 하나님께서 나를 시험하신다고 말하지 마십시오. 하나님은 악에게 시험받지 않으시며, 친히 아무도 시험하지 않으십니다.'
    },
    special_explanation: {
      explanation_type: '신학적 명확화',
      content: '시련(testing)과 유혹(temptation)은 같은 그리스어 peirasmos입니다. 하나님은 믿음을 단련하기 위해 시련을 허락하시지만(1:2-12), 죄를 짓도록 유혹하지는 않으십니다. 시험의 출처와 목적이 다릅니다.'
    }
  },
  {
    reference: 'James 1:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '유혹의 실제 원인',
        original_text: 'but each person is tempted when they are dragged away by their own evil desire and enticed',
        korean_translation: '오히려 각 사람이 유혹을 받는 것은 자기의 욕심에 끌려 미혹될 때입니다',
        grammatical_explanation: 'but은 1:13과 대조. dragged away와 enticed는 수동태로 욕심의 능동적 힘을 강조. own은 개인적 책임'
      }
    ],
    vocabulary: [
      { word: 'dragged away', ipa_pronunciation: '/dræɡd əˈweɪ/', korean_pronunciation: '드래그드 어웨이', part_of_speech: '동사구', definition_korean: '끌려가다', usage_note: '낚시나 사냥에서 미끼로 유인하는 이미지' },
      { word: 'enticed', ipa_pronunciation: '/ɪnˈtaɪst/', korean_pronunciation: '인타이스트', part_of_speech: '과거분사', definition_korean: '유혹되다, 유인되다', usage_note: '달콤한 미끼로 속이는 것' },
      { word: 'evil desire', ipa_pronunciation: '/ˈiːvəl dɪˈzaɪər/', korean_pronunciation: '이블 디자이어', part_of_speech: '명사구', definition_korean: '악한 욕망', usage_note: '내면의 부패한 욕구' }
    ],
    contextual_explanation: {
      integrated_explanation: '유혹의 진정한 원천은 외부가 아닌 내면의 욕심입니다. dragged away와 enticed는 사냥과 낚시 은유로, 욕심이 미끼처럼 사람을 유혹하여 죄로 이끕니다. 이는 개인의 도덕적 책임을 강조하며, 아담과 하와가 자신의 죄를 남에게 돌린 것과 대조됩니다.'
    },
    korean_translation: {
      natural_translation: '오히려 사람이 시험을 받는 것은 자기 욕심에 끌려 미혹되기 때문입니다.'
    }
  },
  {
    reference: 'James 1:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진행 과정: 욕심에서 죄로',
        original_text: 'Then, after desire has conceived, it gives birth to sin',
        korean_translation: '그 다음 욕심이 잉태하면 죄를 낳고',
        grammatical_explanation: 'after...has conceived는 완료 후 결과. gives birth는 출산 은유로 필연적 결과'
      },
      {
        sequence_order: 2,
        semantic_classification: '최종 결과: 죄에서 사망으로',
        original_text: 'and sin, when it is full-grown, gives birth to death',
        korean_translation: '죄가 장성하면 사망을 낳습니다',
        grammatical_explanation: 'when it is full-grown은 시간 조건. gives birth to death는 출산 은유의 연속으로 최종 파멸'
      }
    ],
    vocabulary: [
      { word: 'conceived', ipa_pronunciation: '/kənˈsiːvd/', korean_pronunciation: '컨시브드', part_of_speech: '과거분사', definition_korean: '잉태하다', usage_note: '임신하다, 품다' },
      { word: 'gives birth', ipa_pronunciation: '/ɡɪvz bɜːrθ/', korean_pronunciation: '기브즈 버스', part_of_speech: '동사구', definition_korean: '낳다', usage_note: '출산하다, 산출하다' },
      { word: 'full-grown', ipa_pronunciation: '/fʊl ɡroʊn/', korean_pronunciation: '풀 그로운', part_of_speech: '형용사', definition_korean: '완전히 자란, 성숙한', usage_note: '완전히 발달한 상태' }
    ],
    contextual_explanation: {
      integrated_explanation: '욕심-죄-사망의 진행 과정을 출산 은유로 묘사합니다. 욕심이 잉태되어 죄를 낳고, 죄가 성장하여 사망을 낳는 3단계 타락 과정입니다. 이는 창세기 3장의 타락 이야기를 반영하며, 로마서 6:23의 죄의 삯은 사망이라는 가르침과 일치합니다. full-grown은 죄가 완전히 발달하여 돌이킬 수 없는 지경에 이르렀음을 의미합니다.'
    },
    korean_translation: {
      natural_translation: '욕심이 잉태하면 죄를 낳고, 죄가 장성하면 사망을 낳습니다.'
    },
    special_explanation: {
      explanation_type: '은유 분석',
      content: '출산 은유는 죄의 발생 과정을 3단계로 보여줍니다: 1) 욕심의 잉태(conception), 2) 죄의 출산(birth of sin), 3) 사망의 최종 산물(death). 이는 죄가 우연이 아닌 욕심의 필연적 결과임을 강조합니다.'
    }
  },
  {
    reference: 'James 1:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고',
        original_text: 'Don\'t be deceived, my dear brothers and sisters',
        korean_translation: '나의 사랑하는 형제자매 여러분, 속지 마십시오',
        grammatical_explanation: 'Don\'t be deceived는 현재 명령형의 금지. my dear는 애정 어린 호칭'
      }
    ],
    vocabulary: [
      { word: 'deceived', ipa_pronunciation: '/dɪˈsiːvd/', korean_pronunciation: '디시브드', part_of_speech: '과거분사', definition_korean: '속다, 미혹되다', usage_note: '잘못된 생각에 빠지는 것' }
    ],
    contextual_explanation: {
      integrated_explanation: '1:13-15의 유혹에 대한 가르침을 마무리하는 경고입니다. 하나님을 유혹의 원인으로 돌리거나, 자신의 욕심의 위험성을 과소평가하는 것은 자기기만입니다. 애정 어린 호칭은 경고의 엄중함을 부드럽게 합니다.'
    },
    korean_translation: {
      natural_translation: '나의 사랑하는 형제자매 여러분, 속지 마십시오.'
    }
  },
  {
    reference: 'James 1:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '선언: 모든 선물의 출처',
        original_text: 'Every good and perfect gift is from above',
        korean_translation: '모든 좋은 은사와 완전한 선물은 위로부터 옵니다',
        grammatical_explanation: 'Every는 보편성 강조. good and perfect는 동의적 병행. from above는 하늘의 출처'
      },
      {
        sequence_order: 2,
        semantic_classification: '묘사: 선물 주시는 분',
        original_text: 'coming down from the Father of the heavenly lights',
        korean_translation: '하늘의 광명들의 아버지로부터 내려옵니다',
        grammatical_explanation: 'coming down은 현재 분사로 지속적 행위. Father of the heavenly lights는 창조주 하나님의 칭호'
      },
      {
        sequence_order: 3,
        semantic_classification: '대조: 하나님의 불변성',
        original_text: 'who does not change like shifting shadows',
        korean_translation: '그분께는 변함도 없고 회전하는 그림자도 없습니다',
        grammatical_explanation: 'who절은 하나님의 성품 묘사. does not change는 절대 부정. like shifting shadows는 비교로 천체의 변화와 대조'
      }
    ],
    vocabulary: [
      { word: 'perfect', ipa_pronunciation: '/ˈpɜːrfɪkt/', korean_pronunciation: '퍼펙트', part_of_speech: '형용사', definition_korean: '완전한', usage_note: '결함이 없는, 온전한' },
      { word: 'heavenly lights', ipa_pronunciation: '/ˈhɛvənli laɪts/', korean_pronunciation: '헤븐리 라이츠', part_of_speech: '명사구', definition_korean: '하늘의 광명들', usage_note: '해, 달, 별 등 천체' },
      { word: 'shifting', ipa_pronunciation: '/ˈʃɪftɪŋ/', korean_pronunciation: '쉬프팅', part_of_speech: '현재분사', definition_korean: '변하는, 이동하는', usage_note: '위치나 상태가 바뀌는 것' }
    ],
    contextual_explanation: {
      integrated_explanation: '1:13-16의 부정적 가르침(하나님은 악의 원천이 아님)에서 긍정적 진리(하나님은 모든 선의 원천)로 전환합니다. heavenly lights는 해, 달, 별을 가리키며 이들은 위치가 변하고 그림자를 만들지만, 하나님은 완전히 불변하십니다. 이는 말라기 3:6과 히브리서 13:8의 하나님의 불변성을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '온갖 좋은 선물과 완전한 은사는 위로부터, 곧 빛들의 아버지께로부터 내려옵니다. 그분께는 변함도 없고 회전하는 그림자도 없습니다.'
    },
    special_explanation: {
      explanation_type: '천문학적 은유',
      content: '하늘의 광명들(태양, 달, 별)은 위치가 변하며 그림자를 만들지만, 하나님은 절대 불변하십니다. 고대인들은 천체의 규칙적 움직임조차 변화로 보았지만, 하나님은 그런 변화마저 없으십니다.'
    }
  },
  {
    reference: 'James 1:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '의도적 행위',
        original_text: 'He chose to give us birth through the word of truth',
        korean_translation: '그분께서 진리의 말씀으로 우리를 낳으시기로 작정하셨습니다',
        grammatical_explanation: 'chose는 의도적 선택. give us birth는 영적 출생 은유. through는 수단'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적',
        original_text: 'that we might be a kind of firstfruits of all he created',
        korean_translation: '우리가 그분이 창조하신 모든 것 중에 첫 열매가 되게 하려는 것입니다',
        grammatical_explanation: 'that절은 목적. might be는 잠재적 가능성. firstfruits는 구약 제사 용어'
      }
    ],
    vocabulary: [
      { word: 'chose', ipa_pronunciation: '/tʃoʊz/', korean_pronunciation: '초즈', part_of_speech: '동사', definition_korean: '선택하다', usage_note: '의도적이고 자발적인 결정' },
      { word: 'word of truth', ipa_pronunciation: '/wɜːrd əv truːθ/', korean_pronunciation: '워드 오브 트루스', part_of_speech: '명사구', definition_korean: '진리의 말씀', usage_note: '복음, 하나님의 말씀' },
      { word: 'firstfruits', ipa_pronunciation: '/ˈfɜːrstfruːts/', korean_pronunciation: '퍼스트프루츠', part_of_speech: '명사', definition_korean: '첫 열매', usage_note: '최초이자 최상의 것, 구약 제사 용어' }
    ],
    contextual_explanation: {
      integrated_explanation: '하나님의 선한 선물(1:17)의 최고봉은 영적 출생입니다. 진리의 말씀은 복음을 가리키며, 이를 통해 믿는 자들이 영적으로 거듭납니다. 첫 열매는 구약에서 하나님께 드리는 최초이자 최상의 산물로(출애굽기 23:19), 여기서는 믿는 자들이 새 창조의 시작이자 하나님께 구별된 존재임을 의미합니다. 이는 요한복음 3:3-5의 거듭남과 고린도후서 5:17의 새 피조물 개념과 연결됩니다.'
    },
    korean_translation: {
      natural_translation: '그분께서 그 뜻을 따라 진리의 말씀으로 우리를 낳으셨습니다. 이는 우리가 그분의 피조물 가운데 첫 열매가 되게 하려는 것입니다.'
    }
  },
  {
    reference: 'James 1:19',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '주의 환기',
        original_text: 'My dear brothers and sisters, take note of this',
        korean_translation: '나의 사랑하는 형제자매 여러분, 이것을 알아야 합니다',
        grammatical_explanation: 'take note는 명령형으로 주의를 환기. this는 다음 내용을 가리킴'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령: 듣기, 말하기, 분노',
        original_text: 'Everyone should be quick to listen, slow to speak and slow to become angry',
        korean_translation: '모든 사람은 듣기는 빨리 하고, 말하기는 더디 하며, 성내기도 더디 해야 합니다',
        grammatical_explanation: '세 개의 병렬 명령: quick to listen, slow to speak, slow to become angry. 첫 번째와 나머지 둘의 대조'
      }
    ],
    vocabulary: [
      { word: 'quick', ipa_pronunciation: '/kwɪk/', korean_pronunciation: '퀵', part_of_speech: '형용사', definition_korean: '빠른', usage_note: '신속한, 즉각적인' },
      { word: 'slow', ipa_pronunciation: '/sloʊ/', korean_pronunciation: '슬로우', part_of_speech: '형용사', definition_korean: '느린, 더딘', usage_note: '조심스럽고 신중한' },
      { word: 'angry', ipa_pronunciation: '/ˈæŋɡri/', korean_pronunciation: '앵그리', part_of_speech: '형용사', definition_korean: '화난', usage_note: '분노한 상태' }
    ],
    contextual_explanation: {
      integrated_explanation: '새로운 단원으로 말과 분노에 대한 실천적 지혜를 시작합니다. 듣기-말하기-화내기의 순서는 의도적입니다. 먼저 하나님의 말씀을 들어야 하고, 말은 신중해야 하며, 분노는 통제되어야 합니다. 이는 잠언의 지혜 전통을 반영하며, 특히 잠언 10:19, 17:27-28과 연결됩니다. 1:18의 진리의 말씀을 받아들이는 올바른 태도를 제시합니다.'
    },
    korean_translation: {
      natural_translation: '나의 사랑하는 형제자매 여러분, 이것을 기억하십시오. 모든 사람은 듣기는 빨리 하고 말하기는 더디 하며 성내기도 더디 해야 합니다.'
    }
  },
  {
    reference: 'James 1:20',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '근거: 분노의 비생산성',
        original_text: 'because human anger does not produce the righteousness that God desires',
        korean_translation: '사람의 성냄은 하나님께서 원하시는 의를 이루지 못하기 때문입니다',
        grammatical_explanation: 'because절은 1:19의 근거. does not produce는 절대 부정. righteousness that God desires는 하나님의 기준'
      }
    ],
    vocabulary: [
      { word: 'human anger', ipa_pronunciation: '/ˈhjuːmən ˈæŋɡər/', korean_pronunciation: '휴먼 앵거', part_of_speech: '명사구', definition_korean: '사람의 분노', usage_note: '인간적이고 육체적인 화' },
      { word: 'produce', ipa_pronunciation: '/prəˈduːs/', korean_pronunciation: '프러듀스', part_of_speech: '동사', definition_korean: '이루다, 만들어내다', usage_note: '결과를 산출하다' },
      { word: 'righteousness', ipa_pronunciation: '/ˈraɪtʃəsnəs/', korean_pronunciation: '라이처스니스', part_of_speech: '명사', definition_korean: '의', usage_note: '하나님의 기준에 맞는 올바름' }
    ],
    contextual_explanation: {
      integrated_explanation: '인간의 분노가 하나님의 의를 이룰 수 없는 이유를 설명합니다. 하나님의 의는 그분의 성품과 뜻에 부합하는 올바름인데, 인간의 격정적 분노는 이를 성취할 수 없습니다. 분노는 종종 자기중심적이고 파괴적이기 때문입니다. 이는 에베소서 4:26-27의 가르침과 일치합니다.'
    },
    korean_translation: {
      natural_translation: '사람의 분노는 하나님의 의를 이루지 못합니다.'
    }
  },
  {
    reference: 'James 1:21',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 악 제거',
        original_text: 'Therefore, get rid of all moral filth and the evil that is so prevalent',
        korean_translation: '그러므로 모든 더러움과 넘치는 악을 버리고',
        grammatical_explanation: 'Therefore는 1:19-20의 결론. get rid of는 완전한 제거 명령. all은 전면적 제거'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령: 말씀 영접',
        original_text: 'and humbly accept the word planted in you, which can save you',
        korean_translation: '겸손히 너희 속에 심어진 말씀을 받으십시오. 그 말씀이 너희 영혼을 구원할 수 있습니다',
        grammatical_explanation: 'humbly는 태도 부사. planted in you는 완료 상태. which can save는 말씀의 능력'
      }
    ],
    vocabulary: [
      { word: 'get rid of', ipa_pronunciation: '/ɡɛt rɪd əv/', korean_pronunciation: '겟 리드 오브', part_of_speech: '동사구', definition_korean: '버리다, 제거하다', usage_note: '완전히 없애다' },
      { word: 'moral filth', ipa_pronunciation: '/ˈmɒrəl fɪlθ/', korean_pronunciation: '모럴 필스', part_of_speech: '명사구', definition_korean: '도덕적 더러움', usage_note: '영적, 도덕적 오염' },
      { word: 'prevalent', ipa_pronunciation: '/ˈprɛvələnt/', korean_pronunciation: '프레벌런트', part_of_speech: '형용사', definition_korean: '널리 퍼진, 만연한', usage_note: '풍부하게 존재하는' },
      { word: 'humbly', ipa_pronunciation: '/ˈhʌmbli/', korean_pronunciation: '험블리', part_of_speech: '부사', definition_korean: '겸손히', usage_note: '온유하고 순종적으로' },
      { word: 'planted', ipa_pronunciation: '/ˈplæntɪd/', korean_pronunciation: '플랜티드', part_of_speech: '과거분사', definition_korean: '심어진', usage_note: '뿌리내린' }
    ],
    contextual_explanation: {
      integrated_explanation: '말씀을 올바르게 받아들이기 위한 두 단계를 제시합니다. 먼저 악을 제거하고, 그 다음 겸손히 말씀을 받아야 합니다. 심어진 말씀은 1:18의 진리의 말씀과 연결되며, 이미 복음을 들은 상태를 가리킵니다. 겸손은 1:19의 듣기와 연결되며, 말씀을 받는 올바른 태도입니다. 말씀의 구원 능력은 로마서 1:16과 베드로전서 1:23을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 모든 더러움과 넘치는 악을 버리고 마음에 심어진 말씀을 온유함으로 받으십시오. 이 말씀이 여러분의 영혼을 구원할 수 있습니다.'
    }
  },
  {
    reference: 'James 1:22',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '금지: 듣기만 함',
        original_text: 'Do not merely listen to the word, and so deceive yourselves',
        korean_translation: '말씀을 듣기만 하여 자신을 속이지 마십시오',
        grammatical_explanation: 'Do not merely는 제한적 금지. and so는 결과. deceive yourselves는 자기기만'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령: 실천',
        original_text: 'Do what it says',
        korean_translation: '말씀을 실천하십시오',
        grammatical_explanation: '간결한 명령형으로 행동의 필수성 강조'
      }
    ],
    vocabulary: [
      { word: 'merely', ipa_pronunciation: '/ˈmɪrli/', korean_pronunciation: '미얼리', part_of_speech: '부사', definition_korean: '단지, 그저', usage_note: '오직 ~만' },
      { word: 'deceive', ipa_pronunciation: '/dɪˈsiːv/', korean_pronunciation: '디시브', part_of_speech: '동사', definition_korean: '속이다', usage_note: '잘못 생각하게 만들다' }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보서의 핵심 주제인 행함이 있는 믿음을 도입합니다. 말씀을 듣기만 하고 실천하지 않는 것은 자기기만입니다. 이는 마태복음 7:24-27의 반석 위에 집 짓는 비유와 연결됩니다. 유대교 전통에서도 토라를 듣는 것과 행하는 것의 통합을 강조했습니다.'
    },
    korean_translation: {
      natural_translation: '말씀을 듣기만 하고 행하지 않아 자신을 속이는 사람이 되지 마십시오. 말씀을 행하는 사람이 되십시오.'
    }
  },
  {
    reference: 'James 1:23',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '비유 시작',
        original_text: 'Anyone who listens to the word but does not do what it says is like someone who looks at his face in a mirror',
        korean_translation: '말씀을 듣고도 실천하지 않는 사람은 거울로 자기 얼굴을 보는 사람과 같습니다',
        grammatical_explanation: 'who절은 특정 부류 설명. but은 대조. is like는 직유법 도입'
      }
    ],
    vocabulary: [
      { word: 'mirror', ipa_pronunciation: '/ˈmɪrər/', korean_pronunciation: '미러', part_of_speech: '명사', definition_korean: '거울', usage_note: '반사된 모습을 보는 도구' }
    ],
    contextual_explanation: {
      integrated_explanation: '거울 비유를 시작합니다. 고대의 거울은 현대처럼 선명하지 않았지만, 자기 모습을 볼 수 있었습니다. 말씀은 영적 거울로 우리의 진정한 모습을 보여줍니다. 1:24와 함께 완전한 비유를 형성합니다.'
    },
    korean_translation: {
      natural_translation: '말씀을 듣고도 행하지 않는 사람은 거울로 자기의 생긴 얼굴을 보는 사람과 같습니다.'
    }
  },
  {
    reference: 'James 1:24',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '비유 완성',
        original_text: 'and, after looking at himself, goes away and immediately forgets what he looks like',
        korean_translation: '자기 모습을 보고 나서 가 버리면 곧 자기가 어떻게 생겼는지 잊어버립니다',
        grammatical_explanation: 'after looking은 시간 표현. goes away와 forgets는 연속 행위. immediately는 신속성 강조'
      }
    ],
    vocabulary: [
      { word: 'immediately', ipa_pronunciation: '/ɪˈmiːdiətli/', korean_pronunciation: '이미디엇리', part_of_speech: '부사', definition_korean: '즉시, 곧', usage_note: '지체 없이 바로' },
      { word: 'forgets', ipa_pronunciation: '/fərˈɡɛts/', korean_pronunciation: '포겟츠', part_of_speech: '동사', definition_korean: '잊다', usage_note: '기억에서 사라지다' }
    ],
    contextual_explanation: {
      integrated_explanation: '거울 비유를 완성합니다. 거울로 자기 모습을 보고도 곧 잊어버리는 것처럼, 말씀을 듣고도 실천하지 않으면 아무 소용이 없습니다. 이는 듣는 것과 행하는 것 사이의 치명적 단절을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '자기를 보고 나서 떠나면 곧 자기가 어떻게 생겼는지 잊어버립니다.'
    }
  },
  {
    reference: 'James 1:25',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조: 올바른 반응',
        original_text: 'But whoever looks intently into the perfect law that gives freedom, and continues in it',
        korean_translation: '그러나 자유를 주는 완전한 율법을 자세히 들여다보고 그것을 지속하며',
        grammatical_explanation: 'But은 1:23-24와 대조. looks intently는 주의 깊은 관찰. continues는 지속성'
      },
      {
        sequence_order: 2,
        semantic_classification: '행동 특징',
        original_text: 'not forgetting what they have heard, but doing it',
        korean_translation: '들은 것을 잊지 않고 실천하는 사람은',
        grammatical_explanation: 'not forgetting과 but doing은 대조적 병행. 소극적 측면과 적극적 측면'
      },
      {
        sequence_order: 3,
        semantic_classification: '결과: 축복',
        original_text: 'they will be blessed in what they do',
        korean_translation: '그가 행하는 일에 복을 받을 것입니다',
        grammatical_explanation: 'will be blessed는 미래의 확실한 축복. in what they do는 행위의 영역'
      }
    ],
    vocabulary: [
      { word: 'intently', ipa_pronunciation: '/ɪnˈtɛntli/', korean_pronunciation: '인텐틀리', part_of_speech: '부사', definition_korean: '자세히, 주의 깊게', usage_note: '집중하여 면밀히' },
      { word: 'perfect law', ipa_pronunciation: '/ˈpɜːrfɪkt lɔː/', korean_pronunciation: '퍼펙트 로', part_of_speech: '명사구', definition_korean: '완전한 율법', usage_note: '하나님의 완전한 말씀' },
      { word: 'freedom', ipa_pronunciation: '/ˈfriːdəm/', korean_pronunciation: '프리덤', part_of_speech: '명사', definition_korean: '자유', usage_note: '해방, 속박으로부터의 자유' },
      { word: 'blessed', ipa_pronunciation: '/blɛst/', korean_pronunciation: '블레스트', part_of_speech: '형용사', definition_korean: '복받은', usage_note: '행복하고 은총받은 상태' }
    ],
    contextual_explanation: {
      integrated_explanation: '1:23-24의 부정적 예와 대조되는 긍정적 모델입니다. 완전한 율법은 구약 율법이 아닌 그리스도의 복음을 가리키며, 이것이 자유를 준다는 표현은 역설적입니다. 율법이 속박이 아닌 자유를 주는 것은 복음의 본질 때문입니다(요한복음 8:32, 36). looks intently는 피상적 듣기가 아닌 깊은 묵상을, continues는 일회적이 아닌 지속적 헌신을 의미합니다. 행함을 통한 축복은 야고보의 실천적 신앙을 요약합니다.'
    },
    korean_translation: {
      natural_translation: '그러나 자유를 주는 완전한 율법을 자세히 들여다보고 그대로 행하며, 듣고 잊어버리는 사람이 아니라 실천하는 사람은 그 행하는 일에 복을 받을 것입니다.'
    },
    special_explanation: {
      explanation_type: '신학적 역설',
      content: '율법이 자유를 준다는 것은 역설입니다. 하지만 그리스도의 율법(갈라디아서 6:2)은 죄로부터의 자유를 주며, 진리가 자유케 합니다(요한복음 8:32). 야고보에게 율법은 억압이 아닌 생명의 길입니다.'
    }
  },
  {
    reference: 'James 1:26',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건: 자칭 경건함',
        original_text: 'Those who consider themselves religious',
        korean_translation: '스스로 경건하다고 생각하는 사람이',
        grammatical_explanation: 'consider themselves는 자기 평가. religious는 외적 종교성'
      },
      {
        sequence_order: 2,
        semantic_classification: '실패: 혀 통제 불능',
        original_text: 'and yet do not keep a tight rein on their tongues',
        korean_translation: '자기 혀를 제어하지 못하면',
        grammatical_explanation: 'and yet은 역접. do not keep a tight rein은 통제 실패의 생생한 은유'
      },
      {
        sequence_order: 3,
        semantic_classification: '결과: 자기기만과 무가치',
        original_text: 'deceive themselves, and their religion is worthless',
        korean_translation: '자기를 속이는 것이며, 그의 경건은 헛된 것입니다',
        grammatical_explanation: 'deceive themselves는 자기기만. worthless는 완전한 무가치'
      }
    ],
    vocabulary: [
      { word: 'religious', ipa_pronunciation: '/rɪˈlɪdʒəs/', korean_pronunciation: '릴리저스', part_of_speech: '형용사', definition_korean: '종교적인, 경건한', usage_note: '외적 종교 활동' },
      { word: 'keep a tight rein', ipa_pronunciation: '/kiːp ə taɪt reɪn/', korean_pronunciation: '킵 어 타이트 레인', part_of_speech: '동사구', definition_korean: '고삐를 단단히 쥐다, 제어하다', usage_note: '말의 고삐를 조종하듯 통제함' },
      { word: 'tongue', ipa_pronunciation: '/tʌŋ/', korean_pronunciation: '텅', part_of_speech: '명사', definition_korean: '혀', usage_note: '말, 언어를 상징' },
      { word: 'worthless', ipa_pronunciation: '/ˈwɜːrθləs/', korean_pronunciation: '워스리스', part_of_speech: '형용사', definition_korean: '헛된, 무가치한', usage_note: '아무 가치가 없는' }
    ],
    contextual_explanation: {
      integrated_explanation: '진정한 경건의 첫 번째 시금석은 혀의 통제입니다. 외적 종교 활동은 많지만 말을 제어하지 못하면 그 경건은 헛됩니다. keep a tight rein은 말을 통제하는 고삐의 은유로, 3장의 혀에 대한 광범위한 가르침을 예고합니다. 이는 잠언의 말에 대한 지혜(잠언 10:19, 13:3, 21:23)를 반영합니다.'
    },
    korean_translation: {
      natural_translation: '누구든지 스스로 경건하다고 생각하면서도 자기 혀를 재어하지 못하면 자기 마음을 속이는 것이니, 이런 사람의 경건은 헛된 것입니다.'
    }
  },
  {
    reference: 'James 1:27',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '정의: 순수한 경건',
        original_text: 'Religion that God our Father accepts as pure and faultless is this',
        korean_translation: '하나님 아버지께서 순수하고 흠 없다고 인정하시는 경건은 이것입니다',
        grammatical_explanation: 'that절은 관계절로 religion 수식. accepts as는 평가. pure and faultless는 동의적 병행'
      },
      {
        sequence_order: 2,
        semantic_classification: '첫 번째 실천: 사회적 약자 돌봄',
        original_text: 'to look after orphans and widows in their distress',
        korean_translation: '고아와 과부를 그들의 환난 중에 돌보는 것과',
        grammatical_explanation: 'to look after는 부정사로 경건의 내용. orphans and widows는 대표적 약자'
      },
      {
        sequence_order: 3,
        semantic_classification: '두 번째 실천: 세상으로부터 분리',
        original_text: 'and to keep oneself from being polluted by the world',
        korean_translation: '자기를 지켜 세상에 물들지 않게 하는 것입니다',
        grammatical_explanation: 'and to keep은 두 번째 부정사. from being polluted는 부정적 결과 회피'
      }
    ],
    vocabulary: [
      { word: 'pure', ipa_pronunciation: '/pjʊər/', korean_pronunciation: '퓨어', part_of_speech: '형용사', definition_korean: '순수한', usage_note: '오염되지 않은' },
      { word: 'faultless', ipa_pronunciation: '/ˈfɔːltləs/', korean_pronunciation: '폴트리스', part_of_speech: '형용사', definition_korean: '흠 없는', usage_note: '결함이 없는' },
      { word: 'look after', ipa_pronunciation: '/lʊk ˈæftər/', korean_pronunciation: '룩 애프터', part_of_speech: '동사구', definition_korean: '돌보다', usage_note: '보살피고 보호하다' },
      { word: 'orphans', ipa_pronunciation: '/ˈɔːrfənz/', korean_pronunciation: '오펀즈', part_of_speech: '명사', definition_korean: '고아들', usage_note: '부모 없는 아이들' },
      { word: 'widows', ipa_pronunciation: '/ˈwɪdoʊz/', korean_pronunciation: '위도우즈', part_of_speech: '명사', definition_korean: '과부들', usage_note: '남편을 잃은 여성들' },
      { word: 'distress', ipa_pronunciation: '/dɪˈstrɛs/', korean_pronunciation: '디스트레스', part_of_speech: '명사', definition_korean: '환난, 곤경', usage_note: '극심한 어려움' },
      { word: 'polluted', ipa_pronunciation: '/pəˈluːtɪd/', korean_pronunciation: '폴루티드', part_of_speech: '과거분사', definition_korean: '오염된', usage_note: '더럽혀진, 부패한' }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보는 진정한 경건을 두 가지로 요약합니다. 첫째, 사회적 약자인 고아와 과부를 돌보는 것으로, 이는 구약의 사회 정의 전통(신명기 10:18, 이사야 1:17)을 반영합니다. 고대 사회에서 고아와 과부는 가장 취약한 계층이었습니다. 둘째, 세상의 도덕적 오염으로부터 자신을 지키는 것으로, 이는 세상과의 분리(요한일서 2:15-17)를 의미합니다. 이 두 가지는 사회적 책임과 개인적 성결을 통합하여 균형 잡힌 경건을 제시합니다. 1장 전체를 마무리하며 실천적 신앙의 본질을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '하나님 아버지 앞에서 깨끗하고 더럽혀지지 않은 경건은 고난 중에 있는 고아와 과부를 돌보며, 자기를 지켜 세상에 물들지 않게 하는 것입니다.'
    },
    special_explanation: {
      explanation_type: '경건의 본질',
      content: '야고보의 경건은 의식이나 의례가 아닌 사랑의 실천(고아와 과부 돌봄)과 도덕적 순결(세상에 물들지 않음)입니다. 이는 외적 종교성과 내적 진실의 통합이며, 수직적(하나님)과 수평적(이웃) 차원을 모두 포함합니다.'
    }
  }
]

async function main() {
  console.log(`James 1장 분석 데이터 저장 시작 (총 ${jamesChapter1Analyses.length}개 구절)...\n`)

  let successCount = 0
  let failCount = 0

  for (const analysis of jamesChapter1Analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting: 3초 대기
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  console.log(`\n=== James 1장 저장 완료 ===`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
}

main()
