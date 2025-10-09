import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // Colossians 4:1
  {
    reference: 'Colossians 4:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'Masters, provide your slaves with what is right and fair',
        korean_translation: '주인들아, 종들에게 정당하고 공정한 것을 제공하라',
        grammatical_explanation: '명령형 동사 "provide"를 사용한 직접 명령문. "what is right and fair"는 명사절로 제공해야 할 대상을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유',
        original_text: 'because you know that you also have a Master in heaven',
        korean_translation: '왜냐하면 너희도 하늘에 주인이 계신 줄 알기 때문이다',
        grammatical_explanation: '"because" 절이 명령의 근거를 제시. "you also have"는 주인들 역시 더 높은 권위 아래 있음을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'Masters',
        ipa_pronunciation: '/ˈmæstərz/',
        korean_pronunciation: '매스터즈',
        part_of_speech: '명사',
        definition_korean: '주인들, 고용주들'
      },
      {
        word: 'provide',
        ipa_pronunciation: '/prəˈvaɪd/',
        korean_pronunciation: '프러바이드',
        part_of_speech: '동사',
        definition_korean: '제공하다, 공급하다'
      },
      {
        word: 'right',
        ipa_pronunciation: '/raɪt/',
        korean_pronunciation: '라잇',
        part_of_speech: '형용사',
        definition_korean: '옳은, 정당한',
        usage_note: '도덕적으로 올바른 것'
      },
      {
        word: 'fair',
        ipa_pronunciation: '/feər/',
        korean_pronunciation: '페어',
        part_of_speech: '형용사',
        definition_korean: '공정한, 공평한',
        usage_note: '편견 없이 공평한'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 3장 22절-4장 1절에서 주인과 종의 관계에 대한 가르침을 마무리합니다. 당시 로마 사회에서는 노예 제도가 일반적이었고, 주인이 종에 대해 절대적 권력을 가졌습니다. 바울은 주인들에게 종을 단순한 재산이 아닌 인격체로 대우할 것을 요구합니다. "정당하고 공정한" 대우는 당시로서는 혁명적인 개념이었습니다. 더 나아가 바울은 주인들도 "하늘에 주인이 계신다"는 사실을 상기시킴으로써, 그들 역시 더 높은 권위 아래 있으며 그분 앞에서 자신들의 행동에 책임을 져야 함을 강조합니다. 이는 초대 교회의 평등 사상을 반영하며, 모든 신자가 그리스도 안에서 동등한 가치를 지닌다는 복음의 핵심을 드러냅니다.'
    },
    korean_translation: {
      natural_translation: '주인 된 자들이여, 종들을 정당하고 공평하게 대하십시오. 여러분도 하늘에 주인이 계시다는 것을 알기 때문입니다.'
    },
    special_explanation: {
      explanation_type: '사회문화적 배경',
      content: '1세기 로마 사회에서 노예는 법적으로 주인의 재산이었으며 어떠한 권리도 없었습니다. 그러나 기독교는 노예와 주인이 그리스도 안에서 형제자매라는 혁신적 관점을 제시했습니다. 바울은 노예 제도 자체를 즉각 폐지하려 하지 않았지만, 관계의 질적 변화를 통해 제도의 본질적 변화를 추구했습니다. "정당하고 공정한"이라는 표현은 단순한 법적 의무를 넘어 그리스도인의 사랑과 정의를 실천하라는 요구입니다.'
    }
  },

  // Colossians 4:2
  {
    reference: 'Colossians 4:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'Devote yourselves to prayer',
        korean_translation: '기도에 전념하라',
        grammatical_explanation: '명령형 "Devote"는 지속적이고 헌신적인 기도 생활을 요구함'
      },
      {
        sequence_order: 2,
        semantic_classification: '방식',
        original_text: 'being watchful and thankful',
        korean_translation: '깨어 있고 감사하면서',
        grammatical_explanation: '분사구문으로 기도의 태도를 설명. "watchful"은 영적 경계를, "thankful"은 감사의 자세를 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'Devote',
        ipa_pronunciation: '/dɪˈvoʊt/',
        korean_pronunciation: '디보우트',
        part_of_speech: '동사',
        definition_korean: '전념하다, 헌신하다',
        usage_note: '지속적이고 헌신적인 노력을 의미'
      },
      {
        word: 'watchful',
        ipa_pronunciation: '/ˈwɑːtʃfəl/',
        korean_pronunciation: '와치풀',
        part_of_speech: '형용사',
        definition_korean: '경계하는, 깨어 있는',
        usage_note: '영적으로 깨어 경계하는 상태'
      },
      {
        word: 'thankful',
        ipa_pronunciation: '/ˈθæŋkfəl/',
        korean_pronunciation: '땡크풀',
        part_of_speech: '형용사',
        definition_korean: '감사하는',
        usage_note: '하나님께 대한 감사의 마음'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교회에 실천적 권면을 시작하면서 기도를 가장 먼저 언급합니다. "전념하라"는 표현은 헬라어 "프로스카르테레오"로, 끊임없이 지속하며 인내하는 태도를 의미합니다. 초대 교회는 기도를 공동체의 중심 활동으로 삼았습니다(사도행전 2:42). "깨어 있는" 기도는 예수님의 겟세마네 기도 현장에서의 가르침을 떠올리게 하며(마가복음 14:38), 영적 전쟁과 그리스도의 재림에 대한 준비를 의미합니다. "감사"는 골로새서의 주요 주제 중 하나로(1:3, 12; 2:7; 3:15, 17), 하나님의 은혜에 대한 올바른 반응이자 불평과 염려를 이기는 영적 무기입니다.'
    },
    korean_translation: {
      natural_translation: '기도에 전념하십시오. 깨어 있고 감사하는 마음으로 기도하십시오.'
    },
    special_explanation: {
      explanation_type: '신학적 의미',
      content: '기도, 경성, 감사의 삼중 구조는 건강한 영적 생활의 핵심입니다. "전념"은 기도를 선택사항이 아닌 필수로 여기는 태도를, "깨어 있음"은 유혹과 거짓 가르침에 대한 경계를, "감사"는 하나님의 주권과 선하심에 대한 믿음을 나타냅니다. 이 세 가지는 서로 보완적입니다: 감사는 기도에 기쁨을 더하고, 경성은 기도를 집중되게 하며, 전념은 기도를 지속하게 합니다.'
    }
  },

  // Colossians 4:3
  {
    reference: 'Colossians 4:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '요청',
        original_text: 'And pray for us, too, that God may open a door for our message',
        korean_translation: '우리를 위해서도 기도하라, 하나님께서 우리의 메시지를 위한 문을 열어주시도록',
        grammatical_explanation: '명령형 "pray"에 목적절 "that God may open"이 연결됨. "may open"은 가능성과 기원을 나타내는 조동사'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적',
        original_text: 'so that we may proclaim the mystery of Christ',
        korean_translation: '그리스도의 비밀을 선포할 수 있도록',
        grammatical_explanation: '"so that" 목적절이 기도 요청의 궁극적 목적을 제시'
      },
      {
        sequence_order: 3,
        semantic_classification: '배경',
        original_text: 'for which I am in chains',
        korean_translation: '그것 때문에 내가 쇠사슬에 묶여 있다',
        grammatical_explanation: '관계절로 바울의 현재 상황을 설명. "for which"는 복음 전파로 인한 투옥을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'door',
        ipa_pronunciation: '/dɔːr/',
        korean_pronunciation: '도어',
        part_of_speech: '명사',
        definition_korean: '문, 기회',
        usage_note: '은유적으로 복음 전파의 기회를 의미'
      },
      {
        word: 'message',
        ipa_pronunciation: '/ˈmesɪdʒ/',
        korean_pronunciation: '메시지',
        part_of_speech: '명사',
        definition_korean: '메시지, 소식',
        usage_note: '복음의 소식'
      },
      {
        word: 'mystery',
        ipa_pronunciation: '/ˈmɪstəri/',
        korean_pronunciation: '미스터리',
        part_of_speech: '명사',
        definition_korean: '비밀, 신비',
        usage_note: '이전에 감춰졌으나 이제 계시된 하나님의 계획'
      },
      {
        word: 'chains',
        ipa_pronunciation: '/tʃeɪnz/',
        korean_pronunciation: '체인즈',
        part_of_speech: '명사',
        definition_korean: '쇠사슬, 족쇄',
        usage_note: '로마 감옥에서의 구금 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신을 위한 기도를 요청하면서도 개인적 해방이 아닌 복음 전파의 기회를 구합니다. "문을 열어주심"은 신약에서 자주 사용되는 은유로(고린도전서 16:9; 고린도후서 2:12), 복음을 전할 수 있는 효과적인 기회를 의미합니다. "그리스도의 비밀"은 골로새서의 핵심 주제로(1:26-27; 2:2), 이전에는 감춰졌으나 이제 모든 민족에게 계시된 하나님의 구원 계획, 즉 그리스도께서 믿는 자들 안에 거하시며 영광의 소망이 되신다는 진리입니다. 바울은 로마 감옥에 갇혀 있지만(주후 60-62년경), 이것이 복음 전파를 방해하는 것이 아니라 오히려 새로운 기회가 되기를 기도합니다. 실제로 그의 투옥은 황실 근위대와 황제의 가정에까지 복음이 전파되는 계기가 되었습니다(빌립보서 1:12-13; 4:22).'
    },
    korean_translation: {
      natural_translation: '우리를 위해서도 기도해 주십시오. 하나님께서 우리가 전하는 메시지를 위한 문을 열어주셔서, 우리가 그리스도의 비밀을 선포할 수 있도록 기도해 주십시오. 바로 이 일 때문에 제가 지금 쇠사슬에 묶여 있습니다.'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '"그리스도의 비밀"(mystery of Christ)은 바울 서신의 중요한 신학 용어입니다. 이것은 수수께끼나 이해할 수 없는 것이 아니라, 이전에는 감춰졌으나 이제 계시된 하나님의 구원 계획을 의미합니다. 구체적으로는 유대인과 이방인이 그리스도 안에서 하나가 되며(에베소서 3:4-6), 그리스도께서 신자들 안에 거하시는 것(골로새서 1:27)을 가리킵니다. 바울은 이 비밀의 사도로 부름받았으며, 이를 선포하다가 투옥되었습니다.'
    }
  },

  // Colossians 4:4
  {
    reference: 'Colossians 4:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '요청',
        original_text: 'Pray that I may proclaim it clearly, as I should',
        korean_translation: '내가 그것을 분명히 선포할 수 있도록 기도하라, 마땅히 해야 할 대로',
        grammatical_explanation: '"Pray that" 구조에 목적절이 연결됨. "as I should"는 비교절로 바울의 사도적 책임을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'proclaim',
        ipa_pronunciation: '/prəˈkleɪm/',
        korean_pronunciation: '프러클레임',
        part_of_speech: '동사',
        definition_korean: '선포하다, 공포하다',
        usage_note: '공개적으로 분명하게 알리는 것'
      },
      {
        word: 'clearly',
        ipa_pronunciation: '/ˈklɪrli/',
        korean_pronunciation: '클리얼리',
        part_of_speech: '부사',
        definition_korean: '분명히, 명확히',
        usage_note: '이해하기 쉽고 명료하게'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 복음 전파의 기회뿐 아니라 명확성을 위해서도 기도를 요청합니다. "분명히"라는 단어는 헬라어 "파네로오"의 부사형으로, 숨김없이 드러내는 것을 의미합니다. 골로새 교회는 거짓 교사들의 복잡하고 신비주의적인 가르침에 노출되어 있었기에(2:8, 18), 바울은 복음의 단순하고 명료한 선포가 중요함을 강조합니다. "마땅히 해야 할 대로"는 바울이 자신의 사도적 소명에 대해 깊은 책임감을 가지고 있음을 보여줍니다(고린도전서 9:16). 투옥 상황에서도 바울의 우선순위는 개인적 자유가 아니라 복음의 효과적 전파였습니다. 이는 진정한 사역자의 마음을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '제가 마땅히 해야 할 대로 그것을 분명하게 선포할 수 있도록 기도해 주십시오.'
    },
    special_explanation: {
      explanation_type: '문체적 특징',
      content: '이 짧은 구절은 바울의 겸손과 의존성을 드러냅니다. 위대한 사도임에도 불구하고 바울은 자신의 능력만으로는 충분하지 않음을 인정하며 교회의 기도를 요청합니다. 또한 "분명히"라는 표현은 골로새 교회가 직면한 혼란스러운 거짓 가르침과 대조를 이룹니다. 복음은 복잡한 철학이나 신비한 지식이 아니라 모든 사람이 이해할 수 있는 분명한 진리입니다.'
    }
  },

  // Colossians 4:5
  {
    reference: 'Colossians 4:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'Be wise in the way you act toward outsiders',
        korean_translation: '외부인들을 향해 행동하는 방식에 있어서 지혜롭게 하라',
        grammatical_explanation: '명령형 "Be wise"에 "in the way you act"가 지혜를 발휘할 영역을 제한함'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령',
        original_text: 'make the most of every opportunity',
        korean_translation: '모든 기회를 최대한 활용하라',
        grammatical_explanation: '명령형 동사구. "make the most of"는 관용 표현으로 최대한 활용함을 의미'
      }
    ],
    vocabulary: [
      {
        word: 'wise',
        ipa_pronunciation: '/waɪz/',
        korean_pronunciation: '와이즈',
        part_of_speech: '형용사',
        definition_korean: '지혜로운, 현명한',
        usage_note: '분별력 있고 신중한'
      },
      {
        word: 'outsiders',
        ipa_pronunciation: '/ˌaʊtˈsaɪdərz/',
        korean_pronunciation: '아웃사이더즈',
        part_of_speech: '명사',
        definition_korean: '외부인들, 비신자들',
        usage_note: '교회 공동체 밖의 사람들'
      },
      {
        word: 'opportunity',
        ipa_pronunciation: '/ˌɑːpərˈtuːnəti/',
        korean_pronunciation: '아퍼튜니티',
        part_of_speech: '명사',
        definition_korean: '기회',
        usage_note: '복음을 전할 수 있는 때와 상황'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 신자들의 대외적 증거에 대해 가르칩니다. "외부인들"은 교회 밖의 비신자들을 의미하며, 초대 교회는 소수 집단으로서 주변 사회의 감시와 오해를 받고 있었습니다. "지혜롭게"라는 표현은 단순히 영리함이 아니라 하나님의 지혜로 행동하는 것으로, 적절한 때에 적절한 방법으로 복음을 전하는 것을 의미합니다(마태복음 10:16). "모든 기회를 최대한 활용하라"는 헬라어 "엑사고라조메노이 톤 카이론"의 번역으로, 원래 "시간을 사다"는 의미입니다(에베소서 5:16도 같은 표현 사용). 이는 때가 악하므로 복음을 전할 수 있는 귀한 시간을 낭비하지 말고 적극적으로 활용하라는 뜻입니다. 초대 교회는 로마의 박해와 유대교의 반대 속에서 언제 복음 전파의 기회가 사라질지 알 수 없는 상황이었습니다.'
    },
    korean_translation: {
      natural_translation: '외부 사람들을 대할 때 지혜롭게 행동하십시오. 모든 기회를 최대한 활용하십시오.'
    },
    special_explanation: {
      explanation_type: '실천적 적용',
      content: '이 구절은 전도의 두 가지 핵심 원리를 제시합니다. 첫째, "지혜"는 상황과 청중에 맞는 적절한 접근을 의미합니다. 바울 자신도 "유대인에게는 유대인처럼, 율법 없는 자에게는 율법 없는 자처럼" 되었습니다(고린도전서 9:20-22). 둘째, "기회 활용"은 복음을 전할 수 있는 순간을 민감하게 포착하고 적극적으로 사용하라는 것입니다. 신자들의 일상적 삶과 대화가 모두 복음을 증거할 기회가 될 수 있습니다.'
    }
  },

  // Colossians 4:6
  {
    reference: 'Colossians 4:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'Let your conversation be always full of grace, seasoned with salt',
        korean_translation: '너희의 대화가 항상 은혜로 가득하게 하라, 소금으로 간이 된',
        grammatical_explanation: '명령형 "Let"에 "be always full of grace"가 연결됨. "seasoned with salt"는 분사구로 대화의 특성을 추가 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적',
        original_text: 'so that you may know how to answer everyone',
        korean_translation: '그래서 너희가 각 사람에게 어떻게 대답해야 할지 알 수 있도록',
        grammatical_explanation: '"so that" 목적절이 은혜롭고 지혜로운 대화의 결과를 제시'
      }
    ],
    vocabulary: [
      {
        word: 'conversation',
        ipa_pronunciation: '/ˌkɑːnvərˈseɪʃn/',
        korean_pronunciation: '칸버세이션',
        part_of_speech: '명사',
        definition_korean: '대화, 담화',
        usage_note: '일상적인 말과 의사소통'
      },
      {
        word: 'grace',
        ipa_pronunciation: '/ɡreɪs/',
        korean_pronunciation: '그레이스',
        part_of_speech: '명사',
        definition_korean: '은혜, 우아함',
        usage_note: '친절하고 매력적인 특성'
      },
      {
        word: 'seasoned',
        ipa_pronunciation: '/ˈsiːzənd/',
        korean_pronunciation: '시즌드',
        part_of_speech: '형용사',
        definition_korean: '양념된, 간이 된',
        usage_note: '적절한 맛을 더한'
      },
      {
        word: 'salt',
        ipa_pronunciation: '/sɔːlt/',
        korean_pronunciation: '솔트',
        part_of_speech: '명사',
        definition_korean: '소금',
        usage_note: '은유적으로 지혜와 순수함을 상징'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 신자들의 말에 대해 구체적으로 가르칩니다. "은혜로 가득한" 대화는 친절하고 매력적이며 듣는 이에게 유익을 주는 말을 의미합니다(에베소서 4:29). "소금으로 간이 된"이라는 은유는 여러 의미를 담고 있습니다: 소금은 맛을 내고(흥미롭고 지루하지 않음), 부패를 방지하며(순수함과 진실함), 갈증을 유발합니다(영적 진리에 대한 관심 유발). 예수님도 제자들을 "세상의 소금"이라 부르셨습니다(마태복음 5:13). "각 사람에게 어떻게 대답해야 할지"는 개별화된 접근을 강조합니다. 모든 사람이 같은 질문을 하는 것이 아니며, 같은 배경을 가진 것도 아니므로, 각자의 상황과 필요에 맞는 지혜로운 대답이 필요합니다. 이는 베드로전서 3:15의 "너희 속에 있는 소망에 관한 이유를 묻는 자에게 대답할 것을 항상 준비하되"와 일맥상통합니다.'
    },
    korean_translation: {
      natural_translation: '여러분의 대화가 항상 은혜로 가득하고 소금으로 간이 된 것처럼 하십시오. 그래서 각 사람에게 어떻게 대답해야 할지 알 수 있도록 하십시오.'
    },
    special_explanation: {
      explanation_type: '은유적 표현',
      content: '"소금으로 간이 된"이라는 은유는 유대 문화에서 풍부한 의미를 가집니다. 소금은 언약의 상징(레위기 2:13, "소금 언약"), 순수함의 표시, 그리고 보존제였습니다. 신자의 말은 단조롭거나 부패한 것이 아니라, 생명력 있고 순수하며 영적 갈증을 불러일으켜야 합니다. 동시에 소금은 과하면 쓴맛을 내므로, 적절한 균형과 분별력도 필요합니다.'
    }
  },

  // Colossians 4:7
  {
    reference: 'Colossians 4:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술',
        original_text: 'Tychicus will tell you all the news about me',
        korean_translation: '두기고가 나에 관한 모든 소식을 너희에게 전할 것이다',
        grammatical_explanation: '미래 시제 "will tell"은 확실한 예정을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '묘사',
        original_text: 'He is a dear brother, a faithful minister and fellow servant in the Lord',
        korean_translation: '그는 사랑하는 형제요, 신실한 일꾼이며 주 안에서 동역자이다',
        grammatical_explanation: '세 가지 명사구가 병렬로 나열되어 두기고의 특성을 다각도로 묘사'
      }
    ],
    vocabulary: [
      {
        word: 'Tychicus',
        ipa_pronunciation: '/ˈtɪkɪkəs/',
        korean_pronunciation: '티키커스',
        part_of_speech: '고유명사',
        definition_korean: '두기고',
        usage_note: '바울의 동역자이자 편지 전달자'
      },
      {
        word: 'dear',
        ipa_pronunciation: '/dɪr/',
        korean_pronunciation: '디어',
        part_of_speech: '형용사',
        definition_korean: '사랑하는, 소중한'
      },
      {
        word: 'faithful',
        ipa_pronunciation: '/ˈfeɪθfəl/',
        korean_pronunciation: '페이스풀',
        part_of_speech: '형용사',
        definition_korean: '신실한, 충성스러운',
        usage_note: '믿을 수 있고 변함없는'
      },
      {
        word: 'minister',
        ipa_pronunciation: '/ˈmɪnɪstər/',
        korean_pronunciation: '미니스터',
        part_of_speech: '명사',
        definition_korean: '일꾼, 봉사자',
        usage_note: '헬라어 디아코노스, 섬기는 자'
      },
      {
        word: 'fellow servant',
        ipa_pronunciation: '/ˈfeloʊ ˈsɜːrvənt/',
        korean_pronunciation: '펠로우 서번트',
        part_of_speech: '명사',
        definition_korean: '동료 종, 동역자',
        usage_note: '함께 그리스도를 섬기는 자'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새서의 결론 부분에서 여러 동역자들을 언급하며 시작합니다. 두기고는 소아시아 출신으로 바울의 신뢰받는 동역자였습니다(사도행전 20:4; 에베소서 6:21-22; 디모데후서 4:12; 디도서 3:12). 그는 이 편지와 함께 에베소서, 빌레몬서를 전달한 것으로 추정됩니다. 바울이 그를 "사랑하는 형제"라고 부른 것은 개인적 친밀함을, "신실한 일꾼"은 사역에서의 신뢰성을, "주 안에서 동역자"는 동등한 동역 관계를 나타냅니다. 바울은 감옥에 있었기에 직접 방문할 수 없었으므로, 두기고를 대리자로 보내 자신의 상황을 전하고 교회를 격려하도록 했습니다. 이는 초대 교회의 네트워크와 의사소통 방식을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '두기고가 저에 관한 모든 소식을 여러분에게 전할 것입니다. 그는 사랑하는 형제요, 신실한 일꾼이며, 주님 안에서 함께 섬기는 동역자입니다.'
    },
    special_explanation: {
      explanation_type: '인물 배경',
      content: '두기고는 바울의 3차 전도 여행 때부터 동행한 아시아 출신의 동역자로, 바울이 가장 신뢰한 인물 중 하나였습니다. 그는 단순한 편지 전달자가 아니라 바울의 대리자로서 교회를 방문하고 격려하며 가르치는 권한을 가졌습니다. 바울이 그에게 세 가지 칭호를 준 것은 그의 다면적 역할을 보여줍니다: 개인적으로는 형제, 사역적으로는 일꾼, 공동체적으로는 동역자.'
    }
  },

  // Colossians 4:8
  {
    reference: 'Colossians 4:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '목적',
        original_text: 'I am sending him to you for the express purpose that you may know about our circumstances',
        korean_translation: '너희가 우리의 형편을 알 수 있도록 하는 분명한 목적으로 그를 너희에게 보낸다',
        grammatical_explanation: '"for the express purpose that" 구조로 파송의 명확한 목적을 제시'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적',
        original_text: 'and that he may encourage your hearts',
        korean_translation: '그리고 그가 너희의 마음을 격려하도록',
        grammatical_explanation: '"and that" 절이 병렬로 연결되어 두 번째 목적을 제시'
      }
    ],
    vocabulary: [
      {
        word: 'express',
        ipa_pronunciation: '/ɪkˈspres/',
        korean_pronunciation: '익스프레스',
        part_of_speech: '형용사',
        definition_korean: '분명한, 명시적인',
        usage_note: '특정하고 분명한 목적'
      },
      {
        word: 'circumstances',
        ipa_pronunciation: '/ˈsɜːrkəmstænsɪz/',
        korean_pronunciation: '서컴스탠시즈',
        part_of_speech: '명사',
        definition_korean: '형편, 상황',
        usage_note: '현재의 조건과 처지'
      },
      {
        word: 'encourage',
        ipa_pronunciation: '/ɪnˈkɜːrɪdʒ/',
        korean_pronunciation: '인커리지',
        part_of_speech: '동사',
        definition_korean: '격려하다, 용기를 주다',
        usage_note: '헬라어 파라칼레오, 위로하고 권면하다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 두기고를 보내는 두 가지 구체적인 목적을 밝힙니다. 첫째, 바울의 형편을 알리는 것입니다. 골로새 교회는 바울을 직접 만난 적이 없었지만(2:1), 그의 사역과 투옥 소식을 들었고 그를 위해 기도하고 있었습니다. 편지만으로는 전달할 수 없는 구체적인 상황과 기도 제목을 두기고가 직접 전할 것입니다. 둘째, 교회를 격려하는 것입니다. "격려하다"로 번역된 헬라어 "파라칼레오"는 "곁에 불러 위로하다"는 뜻으로, 성령이 "보혜사"(파라클레토스)로 불리는 것과 같은 어근입니다. 골로새 교회는 거짓 교사들의 영향으로 혼란을 겪고 있었고(2:8, 16-23), 바울의 투옥 소식으로 염려하고 있었을 것입니다. 두기고는 바울의 대리자로서 교회를 위로하고 신앙 안에 굳게 서도록 권면할 것입니다.'
    },
    korean_translation: {
      natural_translation: '저는 분명한 목적을 가지고 그를 여러분에게 보냅니다. 여러분이 우리의 형편을 알게 하고, 그가 여러분의 마음을 격려하도록 하기 위해서입니다.'
    },
    special_explanation: {
      explanation_type: '목회적 배려',
      content: '바울은 멀리 떨어진 교회를 돌보는 지혜를 보여줍니다. 편지만으로는 충분하지 않은 부분을 신뢰할 수 있는 대리자를 통해 보완합니다. 이는 현대 교회에도 중요한 교훈입니다: 서신이나 온라인 소통도 중요하지만, 직접 대면하여 격려하고 구체적인 상황을 나누는 것의 가치를 보여줍니다. 또한 바울은 자신의 어려움을 숨기지 않고 교회와 나누되, 그것이 교회를 낙심시키는 것이 아니라 오히려 기도와 격려의 기회가 되도록 합니다.'
    }
  },

  // Colossians 4:9
  {
    reference: 'Colossians 4:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술',
        original_text: 'He is coming with Onesimus, our faithful and dear brother, who is one of you',
        korean_translation: '그는 오네시모와 함께 온다, 우리의 신실하고 사랑하는 형제요, 너희 중 한 사람인',
        grammatical_explanation: '현재진행형 "is coming"은 확정된 미래를 나타냄. "who is one of you"는 관계절로 오네시모의 출신을 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '진술',
        original_text: 'They will tell you everything that is happening here',
        korean_translation: '그들이 여기서 일어나고 있는 모든 일을 너희에게 말할 것이다',
        grammatical_explanation: '미래 시제로 확실한 약속을 제시. "that is happening"은 관계절로 현재진행형 사건들을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'Onesimus',
        ipa_pronunciation: '/oʊˈnesɪməs/',
        korean_pronunciation: '오네시머스',
        part_of_speech: '고유명사',
        definition_korean: '오네시모',
        usage_note: '골로새 출신의 도망친 노예, 후에 신자가 됨'
      },
      {
        word: 'faithful',
        ipa_pronunciation: '/ˈfeɪθfəl/',
        korean_pronunciation: '페이스풀',
        part_of_speech: '형용사',
        definition_korean: '신실한, 충성스러운'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '오네시모는 골로새 교회와 밀접한 관련이 있는 인물입니다. 그는 골로새의 부유한 신자 빌레몬의 노예였으나 도망쳐 로마로 갔고, 그곳에서 바울을 만나 복음을 듣고 회심했습니다(빌레몬서 10). 바울은 그를 "나의 아들"이라 부르며(빌레몬서 10), 그의 변화된 모습을 보고 깊이 사랑하게 되었습니다. 이제 바울은 오네시모를 주인 빌레몬에게 돌려보내면서 빌레몬서와 골로새서를 함께 보냅니다. 바울이 오네시모를 "신실하고 사랑하는 형제"라고 부른 것은 놀라운 일입니다. 그는 과거에 도망친 노예였지만, 이제는 그리스도 안에서 동등한 형제이며 신뢰할 수 있는 동역자입니다. "너희 중 한 사람"이라는 표현은 오네시모가 골로새 출신임을 상기시키며, 교회가 그를 환영하도록 유도합니다. 바울은 1절에서 주인들에게 종을 정당하고 공평하게 대하라고 가르쳤는데, 이제 그 원리를 실천하는 구체적 사례를 제시합니다. 오네시모의 이야기는 복음이 사회적 장벽을 허무는 능력을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '그는 오네시모와 함께 올 것입니다. 오네시모는 우리의 신실하고 사랑하는 형제요, 여러분 중 한 사람입니다. 그들이 여기서 일어나고 있는 모든 일을 여러분에게 전할 것입니다.'
    },
    special_explanation: {
      explanation_type: '사회적 변혁',
      content: '오네시모의 이야기는 복음의 사회 변혁적 능력을 보여주는 강력한 예입니다. 1세기 로마 사회에서 도망친 노예는 사형에 처해질 수 있었습니다. 그러나 바울은 오네시모를 단순히 돌려보내는 것이 아니라, 그를 "형제"로 소개하며 교회가 그를 환영하도록 요청합니다. 이는 당시 사회 규범에 대한 급진적 도전이었습니다. 바울은 노예 제도를 즉각 폐지하려 하지 않았지만, 복음 안에서의 평등과 형제애를 강조함으로써 그 제도의 기초를 흔들었습니다. 오네시모의 이름은 "유익한"이라는 뜻으로, 빌레몬서 11절에서 바울은 "전에는 네게 무익하였으나 이제는 나와 네게 유익한" 자라고 말합니다.'
    }
  },

  // Colossians 4:10
  {
    reference: 'Colossians 4:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인사',
        original_text: 'My fellow prisoner Aristarchus sends you his greetings',
        korean_translation: '나와 함께 갇힌 아리스다고가 너희에게 문안한다',
        grammatical_explanation: '주어 "Aristarchus"에 동격 "My fellow prisoner"가 수식'
      },
      {
        sequence_order: 2,
        semantic_classification: '인사',
        original_text: 'as does Mark, the cousin of Barnabas',
        korean_translation: '바나바의 사촌 마가도 그러하다',
        grammatical_explanation: '"as does"는 생략 구조로 "sends you his greetings"가 생략됨'
      },
      {
        sequence_order: 3,
        semantic_classification: '지시',
        original_text: 'You have received instructions about him; if he comes to you, welcome him',
        korean_translation: '너희가 그에 관한 지시를 받았다; 그가 너희에게 가면 영접하라',
        grammatical_explanation: '조건절 "if he comes"와 명령형 "welcome"이 연결됨'
      }
    ],
    vocabulary: [
      {
        word: 'fellow prisoner',
        ipa_pronunciation: '/ˈfeloʊ ˈprɪzənər/',
        korean_pronunciation: '펠로우 프리즈너',
        part_of_speech: '명사',
        definition_korean: '함께 갇힌 자, 동료 죄수',
        usage_note: '그리스도를 위해 함께 투옥된 자'
      },
      {
        word: 'Aristarchus',
        ipa_pronunciation: '/ˌærɪˈstɑːrkəs/',
        korean_pronunciation: '아리스타커스',
        part_of_speech: '고유명사',
        definition_korean: '아리스다고',
        usage_note: '데살로니가 출신의 바울의 동역자'
      },
      {
        word: 'Mark',
        ipa_pronunciation: '/mɑːrk/',
        korean_pronunciation: '마크',
        part_of_speech: '고유명사',
        definition_korean: '마가',
        usage_note: '요한 마가, 마가복음의 저자'
      },
      {
        word: 'cousin',
        ipa_pronunciation: '/ˈkʌzn/',
        korean_pronunciation: '커즌',
        part_of_speech: '명사',
        definition_korean: '사촌',
        usage_note: '친척 관계'
      },
      {
        word: 'Barnabas',
        ipa_pronunciation: '/ˈbɑːrnəbəs/',
        korean_pronunciation: '바너버스',
        part_of_speech: '고유명사',
        definition_korean: '바나바',
        usage_note: '위로의 아들, 바울의 초기 동역자'
      },
      {
        word: 'instructions',
        ipa_pronunciation: '/ɪnˈstrʌkʃnz/',
        korean_pronunciation: '인스트럭션즈',
        part_of_speech: '명사',
        definition_korean: '지시, 지침',
        usage_note: '이전에 받은 안내'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 여섯 명의 동역자를 언급하기 시작합니다. 아리스다고는 데살로니가 출신으로(사도행전 20:4; 27:2), 바울과 함께 에베소에서 폭동을 겪었고(사도행전 19:29), 로마까지 동행했습니다. "함께 갇힌 자"는 문자적으로 같은 감옥에 있었거나, 은유적으로 복음을 위해 자유를 희생했다는 의미일 수 있습니다. 마가(요한 마가)의 언급은 특별한 의미가 있습니다. 그는 바울과 바나바의 1차 전도 여행 중 중도에 떠나 바울의 실망을 샀고(사도행전 13:13; 15:37-39), 이로 인해 바울과 바나바가 갈라서는 계기가 되었습니다. 바나바는 자신의 사촌인 마가를 데리고 갔고, 바울은 실라를 택했습니다. 그러나 세월이 흐르며 마가는 성숙했고, 이제 바울은 그를 신뢰하게 되었습니다. 디모데후서 4:11에서 바울은 "마가를 데리고 오라 그가 나의 일에 유익하니라"고 말합니다. "너희가 그에 관한 지시를 받았다"는 표현은 이전에 다른 경로로(아마도 두기고를 통해) 마가의 방문에 대한 안내를 받았음을 시사합니다. 바울이 "영접하라"고 특별히 당부한 것은 마가의 과거 실패가 알려져 있었고, 일부 교회가 그를 환영하지 않을 수 있었기 때문입니다.'
    },
    korean_translation: {
      natural_translation: '저와 함께 갇혀 있는 아리스다고가 여러분에게 문안합니다. 바나바의 사촌인 마가도 문안합니다. 여러분은 그에 관한 지시를 이미 받았습니다. 그가 여러분에게 가거든 영접해 주십시오.'
    },
    special_explanation: {
      explanation_type: '회복과 용서',
      content: '마가의 이야기는 실패 후의 회복을 보여주는 아름다운 예입니다. 그는 초기 사역에서 실패했지만, 바나바의 인내와 격려(그의 이름 "위로의 아들"이 의미하듯), 그리고 자신의 성숙을 통해 신뢰할 만한 사역자가 되었습니다. 바울이 그를 추천하고 교회가 환영하도록 요청한 것은, 과거의 실패가 영원한 낙인이 아니며 회개와 성장을 통해 회복될 수 있음을 보여줍니다. 전통적으로 마가는 베드로의 통역자로서 베드로의 증언을 바탕으로 마가복음을 기록한 것으로 알려져 있습니다.'
    }
  },

  // Colossians 4:11
  {
    reference: 'Colossians 4:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인사',
        original_text: 'Jesus, who is called Justus, also sends greetings',
        korean_translation: '유스도라 하는 예수도 문안한다',
        grammatical_explanation: '관계절 "who is called Justus"가 예수를 추가 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '설명',
        original_text: 'These are the only Jews among my co-workers for the kingdom of God',
        korean_translation: '이들은 하나님의 나라를 위한 나의 동역자들 중 유일한 유대인들이다',
        grammatical_explanation: '"the only Jews"는 제한적 표현으로 유대인 동역자의 희소성을 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '평가',
        original_text: 'and they have proved a comfort to me',
        korean_translation: '그리고 그들은 나에게 위로가 되었음이 증명되었다',
        grammatical_explanation: '현재완료 "have proved"는 지속적인 위로의 경험을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'Jesus',
        ipa_pronunciation: '/ˈdʒiːzəs/',
        korean_pronunciation: '지저스',
        part_of_speech: '고유명사',
        definition_korean: '예수 (당시 흔한 유대인 이름)',
        usage_note: '예수 그리스도가 아닌 동명의 동역자'
      },
      {
        word: 'Justus',
        ipa_pronunciation: '/ˈdʒʌstəs/',
        korean_pronunciation: '저스터스',
        part_of_speech: '고유명사',
        definition_korean: '유스도',
        usage_note: '라틴어로 "정의로운"이라는 뜻의 별명'
      },
      {
        word: 'co-workers',
        ipa_pronunciation: '/ˈkoʊˌwɜːrkərz/',
        korean_pronunciation: '코워커즈',
        part_of_speech: '명사',
        definition_korean: '동역자들, 함께 일하는 자들'
      },
      {
        word: 'comfort',
        ipa_pronunciation: '/ˈkʌmfərt/',
        korean_pronunciation: '컴퍼트',
        part_of_speech: '명사',
        definition_korean: '위로, 위안',
        usage_note: '헬라어 파레고리아, 격려와 위로'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 유스도라는 별명을 가진 예수를 언급합니다. 당시 "예수"(히브리어 예슈아)는 흔한 유대인 이름이었으므로, 그리스도와 구별하기 위해 별명을 사용했습니다. "유스도"는 라틴어로 "정의로운, 의로운"이라는 뜻으로, 그의 성품을 나타내는 이름이었을 것입니다. 사도행전 1:23의 "바사바라고도 하는 요셉"과 사도행전 18:7의 "디도 유스도"도 같은 별명을 가졌습니다. 바울의 감정적 고백이 눈에 띕니다: "이들은 하나님의 나라를 위한 나의 동역자들 중 유일한 유대인들이다." 이는 바울에게 깊은 슬픔이었을 것입니다. 그는 "내 형제 곧 골육의 친척을 위하여 내 자신이 저주를 받아 그리스도에게서 끊어질지라도 원하노라"(로마서 9:3)고 말할 정도로 동족의 구원을 간절히 바랐지만, 실제로 그와 함께 복음을 위해 수고하는 유대인 동역자는 이 세 명뿐이었습니다. 대부분의 유대인 신자들은 이방인 선교에 소극적이었고, 일부는 바울을 반대하기도 했습니다(사도행전 21:20-21). "위로"로 번역된 헬라어 "파레고리아"는 신약에서 이곳에만 나오는 단어로, 깊은 격려와 위안을 의미합니다. 소수의 충성스러운 유대인 동역자들은 바울에게 큰 위로와 힘이 되었습니다.'
    },
    korean_translation: {
      natural_translation: '유스도라고 불리는 예수도 문안합니다. 이들은 하나님 나라를 위해 함께 일하는 동역자들 중에서 유일한 유대인입니다. 그들은 저에게 큰 위로가 되었습니다.'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '초대 교회는 유대인 신자와 이방인 신자 사이에 긴장이 있었습니다. 예루살렘 공의회(사도행전 15장)에서 이방인이 할례받을 필요가 없다고 결정했지만, 많은 유대인 신자들은 여전히 율법 준수를 강조했습니다. 바울은 이방인의 사도로서 유대인 공동체로부터 오해와 반대를 받았습니다. 주후 60년대 초 유대 민족주의가 고조되면서(주후 66-70년 유대 전쟁으로 이어짐), 유대인 신자들이 이방인 선교에 참여하는 것이 더욱 어려워졌습니다. 이런 상황에서 아리스다고, 마가, 예수 유스도 같은 유대인 동역자들의 충성은 바울에게 특별한 의미가 있었습니다.'
    }
  },

  // Colossians 4:12
  {
    reference: 'Colossians 4:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인사',
        original_text: 'Epaphras, who is one of you and a servant of Christ Jesus, sends greetings',
        korean_translation: '너희 중 한 사람이요 그리스도 예수의 종인 에바브라가 문안한다',
        grammatical_explanation: '관계절 "who is one of you and a servant of Christ Jesus"가 에바브라를 수식'
      },
      {
        sequence_order: 2,
        semantic_classification: '묘사',
        original_text: 'He is always wrestling in prayer for you',
        korean_translation: '그는 항상 너희를 위하여 기도로 씨름한다',
        grammatical_explanation: '현재진행형 "is wrestling"은 지속적이고 격렬한 기도를 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '목적',
        original_text: 'that you may stand firm in all the will of God, mature and fully assured',
        korean_translation: '너희가 하나님의 모든 뜻 안에서 굳게 서고, 성숙하며, 완전히 확신하도록',
        grammatical_explanation: '"that" 목적절에 세 가지 분사가 병렬로 나열되어 기도의 목표를 제시'
      }
    ],
    vocabulary: [
      {
        word: 'Epaphras',
        ipa_pronunciation: '/ˈepəfræs/',
        korean_pronunciation: '에퍼프래스',
        part_of_speech: '고유명사',
        definition_korean: '에바브라',
        usage_note: '골로새 교회의 설립자이자 목회자'
      },
      {
        word: 'servant',
        ipa_pronunciation: '/ˈsɜːrvənt/',
        korean_pronunciation: '서번트',
        part_of_speech: '명사',
        definition_korean: '종, 봉사자',
        usage_note: '헬라어 둘로스, 노예'
      },
      {
        word: 'wrestling',
        ipa_pronunciation: '/ˈreslɪŋ/',
        korean_pronunciation: '레슬링',
        part_of_speech: '동사',
        definition_korean: '씨름하다, 분투하다',
        usage_note: '헬라어 아고니조마이, 격렬하게 투쟁하다'
      },
      {
        word: 'stand firm',
        ipa_pronunciation: '/stænd fɜːrm/',
        korean_pronunciation: '스탠드 펌',
        part_of_speech: '동사구',
        definition_korean: '굳게 서다, 확고히 하다',
        usage_note: '흔들리지 않고 견고하게'
      },
      {
        word: 'mature',
        ipa_pronunciation: '/məˈtʃʊr/',
        korean_pronunciation: '머츄어',
        part_of_speech: '형용사',
        definition_korean: '성숙한, 온전한',
        usage_note: '헬라어 텔레이오스, 완전한'
      },
      {
        word: 'fully assured',
        ipa_pronunciation: '/ˈfʊli əˈʃʊrd/',
        korean_pronunciation: '풀리 어슈얼드',
        part_of_speech: '형용사구',
        definition_korean: '완전히 확신하는',
        usage_note: '의심 없이 확실한'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '에바브라는 골로새서에서 가장 중요한 인물 중 하나입니다. 1:7에서 이미 소개되었듯이, 그는 골로새 교회를 설립한 사람으로 바울에게서 복음을 배워 고향으로 돌아가 교회를 세웠습니다. "너희 중 한 사람"이라는 표현은 그가 골로새 출신임을 강조하며, 교회에 대한 그의 애정과 헌신을 설명합니다. "그리스도 예수의 종"은 헬라어 "둘로스"로 노예를 의미하는데, 이는 최고의 헌신과 충성을 나타내는 영예로운 칭호입니다. 바울은 에바브라의 기도 생활을 특별히 강조합니다. "씨름한다"로 번역된 "아고니조마이"는 운동 경기에서 격렬하게 겨루는 것을 의미하는 단어로(영어 "agony"의 어원), 예수님이 겟세마네에서 땀이 피방울처럼 떨어지도록 기도하신 것(누가복음 22:44)과 같은 강도의 기도를 나타냅니다. 에바브라의 기도는 세 가지 목표를 가지고 있습니다: (1) "굳게 서다" - 거짓 가르침에 흔들리지 않고 진리 위에 확고히 서는 것, (2) "성숙하다" - 영적으로 자라나 그리스도의 장성한 분량에 이르는 것(에베소서 4:13), (3) "완전히 확신하다" - 하나님의 뜻에 대한 의심 없는 확신을 가지는 것. 이 세 가지는 골로새 교회가 직면한 도전(거짓 교사들의 영향, 영적 미숙함, 의심과 불확실성)에 대한 해답입니다.'
    },
    korean_translation: {
      natural_translation: '여러분 중 한 사람이요 그리스도 예수의 종인 에바브라가 문안합니다. 그는 항상 여러분을 위해 기도로 씨름하고 있습니다. 여러분이 하나님의 모든 뜻 안에서 굳게 서고, 성숙하며, 완전히 확신을 가지도록 기도합니다.'
    },
    special_explanation: {
      explanation_type: '중보 기도의 본',
      content: '에바브라는 중보 기도의 탁월한 모델입니다. 그의 기도는 (1) 지속적이고("항상"), (2) 열정적이며("씨름"), (3) 구체적이고("굳게 서고, 성숙하며, 확신하도록"), (4) 타인 중심적입니다("너희를 위하여"). 바울이 에바브라의 기도를 이렇게 자세히 묘사한 것은 골로새 교회가 그의 목회적 헌신을 인식하고 감사하도록 하기 위함입니다. 진정한 목회자는 단순히 가르치는 것을 넘어 양떼를 위해 땀 흘리며 기도하는 사람입니다.'
    }
  },

  // Colossians 4:13
  {
    reference: 'Colossians 4:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '증언',
        original_text: 'I vouch for him that he is working hard for you and for those at Laodicea and Hierapolis',
        korean_translation: '그가 너희와 라오디게아와 히에라볼리의 사람들을 위하여 수고한다는 것을 내가 증언한다',
        grammatical_explanation: '"vouch for"는 보증하다, 증언하다의 의미. "that" 절이 증언의 내용을 제시'
      }
    ],
    vocabulary: [
      {
        word: 'vouch',
        ipa_pronunciation: '/vaʊtʃ/',
        korean_pronunciation: '바우치',
        part_of_speech: '동사',
        definition_korean: '보증하다, 증언하다',
        usage_note: '직접 경험에 근거한 확증'
      },
      {
        word: 'working hard',
        ipa_pronunciation: '/ˈwɜːrkɪŋ hɑːrd/',
        korean_pronunciation: '워킹 하드',
        part_of_speech: '동사구',
        definition_korean: '열심히 일하다, 수고하다',
        usage_note: '헬라어 포노스, 고통스러운 노력'
      },
      {
        word: 'Laodicea',
        ipa_pronunciation: '/ˌleɪəˈdɪsiə/',
        korean_pronunciation: '레이어디시어',
        part_of_speech: '고유명사',
        definition_korean: '라오디게아',
        usage_note: '골로새 근처의 부유한 도시'
      },
      {
        word: 'Hierapolis',
        ipa_pronunciation: '/ˌhaɪəˈræpəlɪs/',
        korean_pronunciation: '하이어래폴리스',
        part_of_speech: '고유명사',
        definition_korean: '히에라볼리',
        usage_note: '온천으로 유명한 도시'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 에바브라의 사역을 공개적으로 인정하고 보증합니다. "증언한다"로 번역된 헬라어 "마르튀레오"는 법정 용어로, 직접 본 증인의 확실한 증언을 의미합니다. 바울은 로마에서 에바브라와 함께 있으면서(빌레몬서 23) 그의 헌신과 수고를 직접 목격했습니다. "수고한다"는 헬라어 "포노스"로, 고통스럽고 힘든 노동을 의미합니다. 에바브라의 사역 범위는 골로새만이 아니라 인근의 라오디게아와 히에라볼리까지 확장되었습니다. 이 세 도시는 루커스 계곡에 인접해 있었으며, 각각 10-15km 정도 떨어진 삼각형 형태로 위치했습니다. 골로새는 작은 도시였지만, 라오디게아는 부유한 상업 중심지였고, 히에라볼리는 온천으로 유명한 관광 도시였습니다. 에바브라는 이 지역 전체의 복음화에 헌신했으며, 세 교회를 순회하며 목양했을 것입니다. 요한계시록 3:14-22에서 라오디게아 교회는 미지근한 신앙으로 책망받는데, 이는 아마도 에바브라 이후 시대의 일로 추정됩니다. 바울이 에바브라의 수고를 증언한 것은 골로새 교회가 그를 인정하고 신뢰하며 그의 가르침을 따르도록 하기 위함입니다.'
    },
    korean_translation: {
      natural_translation: '저는 그가 여러분과 라오디게아와 히에라볼리 사람들을 위해 열심히 수고하고 있음을 증언합니다.'
    },
    special_explanation: {
      explanation_type: '지리적 배경',
      content: '루커스 계곡의 세 도시는 각각 독특한 특징을 가졌습니다. 골로새는 한때 번성했으나 쇠퇴한 도시, 라오디게아는 은행업과 양모 산업으로 부유한 도시, 히에라볼리는 치유의 온천으로 유명한 도시였습니다. 에바브라는 이 다양한 배경의 도시들에 복음을 전하고 교회를 세웠습니다. 세 교회는 서로 편지를 공유하고(4:16) 교류했을 것입니다. 이는 초대 교회의 지역 네트워크와 협력을 보여줍니다.'
    }
  },

  // Colossians 4:14
  {
    reference: 'Colossians 4:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인사',
        original_text: 'Our dear friend Luke, the doctor, and Demas send greetings',
        korean_translation: '우리의 사랑하는 친구 의사 누가와 데마가 문안한다',
        grammatical_explanation: '두 명의 주어가 "and"로 연결됨. "the doctor"는 누가에 대한 동격 설명'
      }
    ],
    vocabulary: [
      {
        word: 'dear',
        ipa_pronunciation: '/dɪr/',
        korean_pronunciation: '디어',
        part_of_speech: '형용사',
        definition_korean: '사랑하는, 소중한'
      },
      {
        word: 'Luke',
        ipa_pronunciation: '/luːk/',
        korean_pronunciation: '루크',
        part_of_speech: '고유명사',
        definition_korean: '누가',
        usage_note: '누가복음과 사도행전의 저자'
      },
      {
        word: 'doctor',
        ipa_pronunciation: '/ˈdɑːktər/',
        korean_pronunciation: '닥터',
        part_of_speech: '명사',
        definition_korean: '의사',
        usage_note: '헬라어 이아트로스, 치료하는 자'
      },
      {
        word: 'Demas',
        ipa_pronunciation: '/ˈdiːməs/',
        korean_pronunciation: '디머스',
        part_of_speech: '고유명사',
        definition_korean: '데마',
        usage_note: '바울의 동역자, 후에 배교'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 두 명의 대조적인 동역자를 언급합니다. 누가는 "사랑하는 친구"로 소개되며, 바울과의 깊은 우정과 신뢰를 보여줍니다. 그는 신약에서 유일하게 언급된 의사로(헬라어 "이아트로스"), 교육받은 헬라인이었습니다. 전통적으로 누가는 안디옥 출신으로 바울의 2차 전도 여행부터 동행했으며(사도행전 16:10의 "우리" 구절 시작), 바울이 투옥되었을 때도 함께 있었습니다. 그는 누가복음과 사도행전을 기록했는데, 이 책들은 우아한 헬라어와 의학적 정확성으로 유명합니다. 디모데후서 4:11에서 바울은 "누가만 나와 함께 있느니라"고 말하며, 누가는 바울이 순교하기 직전까지 함께한 충성스러운 동역자였습니다. 데마는 빌레몬서 24에서도 바울의 동역자로 언급되지만, 그의 이야기는 비극적으로 끝납니다. 디모데후서 4:10에서 바울은 "데마는 이 세상을 사랑하여 나를 버리고 데살로니가로 갔고"라고 슬퍼합니다. 이 구절이 기록될 당시 데마는 아직 바울과 함께 있었지만, 결국 세상의 유혹을 이기지 못하고 떠났습니다. 바울이 누가에게는 "사랑하는 친구"라는 애정 어린 표현을 사용했지만 데마에게는 이름만 언급한 것도 의미심장합니다.'
    },
    korean_translation: {
      natural_translation: '우리의 사랑하는 친구이자 의사인 누가와 데마가 문안합니다.'
    },
    special_explanation: {
      explanation_type: '대조적 결말',
      content: '누가와 데마는 신앙의 인내에서 극명한 대조를 보입니다. 누가는 끝까지 충성했고 초대 교회의 역사를 기록하는 영광을 얻었습니다. 반면 데마는 처음에는 동역자였지만 "이 세상을 사랑하여" 떠났습니다. 이는 씨 뿌리는 비유(누가복음 8:14)의 "염려와 재물과 생활의 낙으로 기운이 막혀" 열매를 맺지 못하는 경우를 떠올리게 합니다. 두 사람의 이야기는 시작도 중요하지만 끝까지 인내하는 것이 더 중요함을 가르칩니다(마태복음 24:13).'
    }
  },

  // Colossians 4:15
  {
    reference: 'Colossians 4:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'Give my greetings to the brothers and sisters at Laodicea',
        korean_translation: '라오디게아의 형제자매들에게 내 문안을 전하라',
        grammatical_explanation: '명령형 "Give"로 시작하는 인사 전달 요청'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령',
        original_text: 'and to Nympha and the church in her house',
        korean_translation: '그리고 눔바와 그녀의 집에 있는 교회에게',
        grammatical_explanation: '"and to"로 연결되어 추가 수신자를 제시. "in her house"는 가정 교회를 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'brothers and sisters',
        ipa_pronunciation: '/ˈbrʌðərz ænd ˈsɪstərz/',
        korean_pronunciation: '브러더즈 앤 시스터즈',
        part_of_speech: '명사',
        definition_korean: '형제자매들',
        usage_note: '헬라어 아델포이, 남녀 신자들'
      },
      {
        word: 'Nympha',
        ipa_pronunciation: '/ˈnɪmfə/',
        korean_pronunciation: '님파',
        part_of_speech: '고유명사',
        definition_korean: '눔바',
        usage_note: '라오디게아의 가정 교회 지도자'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교회에 인근 라오디게아 교회에 문안을 전하도록 요청합니다. 이는 두 교회 사이의 긴밀한 관계를 보여줍니다. 특별히 눔바가 언급되는데, 그녀는 자신의 집을 교회 모임 장소로 제공한 부유한 여성 신자였습니다. 초대 교회는 별도의 예배당이 없었고, 신자들의 집에서 모였습니다. 큰 집을 가진 부유한 신자들이 가정 교회를 개방하는 것은 중요한 봉사였습니다(로마서 16:5의 브리스가와 아굴라, 빌레몬서 2의 빌레몬). 그리스어 사본에 따라 "그녀의"(her)가 "그의"(his)로 되어 있어 눔바가 남성인지 여성인지 논란이 있지만, NIV를 포함한 대부분의 현대 번역은 여성으로 봅니다. 이는 초대 교회에서 여성들이 중요한 역할을 했음을 보여줍니다. 눔바는 단순히 집을 제공한 것이 아니라 그 교회의 지도자로 인정받았을 가능성이 높습니다. 바울이 그녀를 특별히 언급하고 별도로 문안을 보낸 것은 그녀의 봉사와 지도력을 인정하는 것입니다.'
    },
    korean_translation: {
      natural_translation: '라오디게아에 있는 형제자매들과 눔바, 그리고 그녀의 집에 모이는 교회에 제 문안을 전해 주십시오.'
    },
    special_explanation: {
      explanation_type: '가정 교회',
      content: '초대 교회의 가정 교회(house church)는 단순히 모임 장소만이 아니라 교회의 기본 단위였습니다. 로마의 박해 속에서 눈에 띄지 않게 모일 수 있었고, 가족적 친밀감과 상호 돌봄이 가능했습니다. 집주인은 자연스럽게 지도자 역할을 했으며, 모임을 위한 식사와 공간을 제공했습니다. 눔바 같은 여성 지도자들은 초대 교회에서 드물지 않았습니다(로마서 16:1의 뵈뵈, 로마서 16:3의 브리스길라, 빌립보서 4:2의 유오디아와 순두게).'
    }
  },

  // Colossians 4:16
  {
    reference: 'Colossians 4:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'After this letter has been read to you, see that it is also read in the church of the Laodiceans',
        korean_translation: '이 편지가 너희에게 읽힌 후에, 라오디게아 교회에서도 읽히도록 하라',
        grammatical_explanation: '시간절 "After this letter has been read"와 명령절 "see that it is read"가 연결됨'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령',
        original_text: 'and that you in turn read the letter from Laodicea',
        korean_translation: '그리고 너희도 라오디게아로부터 온 편지를 읽으라',
        grammatical_explanation: '"and that you read"는 병렬 명령으로 편지 교환을 지시'
      }
    ],
    vocabulary: [
      {
        word: 'letter',
        ipa_pronunciation: '/ˈletər/',
        korean_pronunciation: '레터',
        part_of_speech: '명사',
        definition_korean: '편지, 서신',
        usage_note: '헬라어 에피스톨레, 공식 서한'
      },
      {
        word: 'read',
        ipa_pronunciation: '/riːd/',
        korean_pronunciation: '리드',
        part_of_speech: '동사',
        definition_korean: '읽다',
        usage_note: '공개적으로 낭독하다'
      },
      {
        word: 'in turn',
        ipa_pronunciation: '/ɪn tɜːrn/',
        korean_pronunciation: '인 턴',
        part_of_speech: '부사구',
        definition_korean: '차례로, 마찬가지로',
        usage_note: '상호적 행동'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새서를 라오디게아 교회와 공유하고, 라오디게아에 보낸 편지도 골로새 교회가 읽도록 지시합니다. 이는 초대 교회의 중요한 관행을 보여줍니다: 사도의 편지는 특정 교회에 보내졌지만, 다른 교회들도 순환하며 읽었습니다(데살로니가전서 5:27도 같은 지시). 이는 바울 서신이 점차 정경으로 인정받는 과정의 시작이었습니다. "라오디게아로부터 온 편지"가 무엇인지는 논란이 있습니다. 세 가지 가능성이 있습니다: (1) 바울이 라오디게아 교회에 보낸 별도의 편지(현재 분실됨), (2) 에베소서(일부 학자들은 에베소서가 원래 라오디게아를 포함한 여러 교회에 보낸 회람 서신이라고 봄), (3) 라오디게아 교회가 바울에게 보낸 편지. 대부분의 학자들은 첫 번째 가능성, 즉 현재 전해지지 않는 바울의 서신으로 봅니다. 초대 교회 시대에 모든 서신이 보존된 것은 아니며, 일부는 분실되었을 것입니다(고린도전서 5:9에서도 이전 편지가 언급됨). 바울이 편지를 교환하도록 지시한 것은 두 교회가 같은 문제(거짓 가르침)에 직면했고, 같은 가르침이 필요했기 때문입니다.'
    },
    korean_translation: {
      natural_translation: '이 편지를 여러분이 다 읽은 후에는 라오디게아 교회에서도 읽히도록 해 주십시오. 그리고 여러분도 라오디게아로부터 온 편지를 읽으십시오.'
    },
    special_explanation: {
      explanation_type: '정경 형성 과정',
      content: '이 구절은 신약 정경이 형성되는 초기 과정을 보여줍니다. 바울의 서신들은 처음에는 특정 교회의 필요를 위해 쓰였지만, 교회들 사이에서 순환하며 읽히면서 점차 권위를 인정받았습니다. 주후 2세기 초에 이미 바울 서신 모음집이 형성되었고, 교회는 이 서신들을 성경과 동등한 권위로 받아들이기 시작했습니다(베드로후서 3:15-16). "라오디게아로부터 온 편지"가 분실된 것은 아쉽지만, 이는 초대 교회가 성령의 인도하심 아래 진정으로 영감받은 글들을 보존하고 정경에 포함시켰음을 보여줍니다.'
    }
  },

  // Colossians 4:17
  {
    reference: 'Colossians 4:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령',
        original_text: 'Tell Archippus: "See to it that you complete the ministry you have received in the Lord"',
        korean_translation: '아빕보에게 말하라: "주 안에서 받은 사역을 완수하도록 주의하라"',
        grammatical_explanation: '명령형 "Tell"에 직접 인용문이 연결됨. 인용문 내에도 명령형 "See to it"과 "complete"가 포함'
      }
    ],
    vocabulary: [
      {
        word: 'Archippus',
        ipa_pronunciation: '/ɑːrˈkɪpəs/',
        korean_pronunciation: '아킵퍼스',
        part_of_speech: '고유명사',
        definition_korean: '아빕보',
        usage_note: '골로새 교회의 지도자, 빌레몬의 가족으로 추정'
      },
      {
        word: 'See to it',
        ipa_pronunciation: '/siː tuː ɪt/',
        korean_pronunciation: '시 투 잇',
        part_of_speech: '동사구',
        definition_korean: '주의하다, 확실히 하다',
        usage_note: '주의 깊게 살피다'
      },
      {
        word: 'complete',
        ipa_pronunciation: '/kəmˈpliːt/',
        korean_pronunciation: '컴플리트',
        part_of_speech: '동사',
        definition_korean: '완수하다, 완성하다',
        usage_note: '헬라어 플레로오, 가득 채우다'
      },
      {
        word: 'ministry',
        ipa_pronunciation: '/ˈmɪnɪstri/',
        korean_pronunciation: '미니스트리',
        part_of_speech: '명사',
        definition_korean: '사역, 직분',
        usage_note: '헬라어 디아코니아, 섬김'
      },
      {
        word: 'received',
        ipa_pronunciation: '/rɪˈsiːvd/',
        korean_pronunciation: '리시브드',
        part_of_speech: '동사',
        definition_korean: '받은',
        usage_note: '하나님으로부터 위임받은'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 아빕보에게 공개적인 권면을 합니다. 아빕보는 빌레몬서 2절에서 "우리의 동역자"로 언급되며, 전통적으로 빌레몬의 아들이나 친척으로 여겨집니다. 그는 골로새 교회나 가정 교회에서 지도적 역할을 맡았던 것으로 보입니다. 바울이 그에게 직접 편지하지 않고 교회를 통해 공개적으로 메시지를 전달하도록 한 것은 의미심장합니다. 이는 아빕보가 어떤 어려움이나 낙심을 겪고 있었거나, 사역에 대한 헌신이 약해졌을 가능성을 시사합니다. 공개적 권면은 교회의 격려와 책임을 동시에 제공합니다. "주 안에서 받은 사역"이라는 표현은 중요합니다. 사역은 사람이나 교회로부터 받은 것이 아니라 주님으로부터 직접 받은 것입니다. 이는 사역의 신성한 기원과 책임을 강조합니다. "완수하다"로 번역된 "플레로오"는 "가득 채우다, 성취하다"는 의미로, 단순히 끝내는 것이 아니라 충실히 완전하게 수행하는 것을 의미합니다(사도행전 20:24에서 바울도 같은 단어 사용). 바울 자신이 "나의 달려갈 길과 주 예수께 받은 사역 곧 하나님의 은혜의 복음을 증언하는 일을 마치려 함에는"(사도행전 20:24)이라고 말한 것처럼, 그는 아빕보도 끝까지 충성하기를 원했습니다. 이 권면은 모든 시대의 사역자들에게 적용됩니다: 시작한 사역을 끝까지 완수하라.'
    },
    korean_translation: {
      natural_translation: '아빕보에게 이렇게 전하십시오: "주님 안에서 받은 사역을 반드시 완수하도록 주의하십시오."'
    },
    special_explanation: {
      explanation_type: '사역 완수의 중요성',
      content: '바울의 아빕보에 대한 권면은 사역의 지속성과 완수의 중요성을 강조합니다. 사역은 하나님으로부터 받은 신성한 위탁이므로 책임감 있게 완수해야 합니다. 공개적 권면은 부끄러움을 주려는 것이 아니라, 교회 공동체가 아빕보를 격려하고 지원하도록 하기 위함입니다. 이는 사역이 개인적인 동시에 공동체적임을 보여줍니다. 바울은 자신도 디모데후서 4:7에서 "나는 선한 싸움을 싸우고 나의 달려갈 길을 마치고 믿음을 지켰으니"라고 고백하며, 사역을 끝까지 완수한 것을 간증합니다.'
    }
  },

  // Colossians 4:18
  {
    reference: 'Colossians 4:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술',
        original_text: 'I, Paul, write this greeting in my own hand',
        korean_translation: '나 바울이 친필로 이 문안을 쓴다',
        grammatical_explanation: '"I, Paul"은 강조 구조. "in my own hand"는 친필임을 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '요청',
        original_text: 'Remember my chains',
        korean_translation: '나의 쇠사슬을 기억하라',
        grammatical_explanation: '명령형으로 기도 요청을 함축적으로 표현'
      },
      {
        sequence_order: 3,
        semantic_classification: '축복',
        original_text: 'Grace be with you',
        korean_translation: '은혜가 너희와 함께 있을지어다',
        grammatical_explanation: '기원문으로 편지의 전형적 마무리'
      }
    ],
    vocabulary: [
      {
        word: 'greeting',
        ipa_pronunciation: '/ˈɡriːtɪŋ/',
        korean_pronunciation: '그리팅',
        part_of_speech: '명사',
        definition_korean: '문안, 인사',
        usage_note: '편지의 마무리 인사'
      },
      {
        word: 'own hand',
        ipa_pronunciation: '/oʊn hænd/',
        korean_pronunciation: '오운 핸드',
        part_of_speech: '명사구',
        definition_korean: '친필, 자신의 손',
        usage_note: '직접 쓴 것임을 강조'
      },
      {
        word: 'chains',
        ipa_pronunciation: '/tʃeɪnz/',
        korean_pronunciation: '체인즈',
        part_of_speech: '명사',
        definition_korean: '쇠사슬, 족쇄',
        usage_note: '투옥 상태의 상징'
      },
      {
        word: 'Grace',
        ipa_pronunciation: '/ɡreɪs/',
        korean_pronunciation: '그레이스',
        part_of_speech: '명사',
        definition_korean: '은혜',
        usage_note: '하나님의 무조건적 사랑과 호의'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 편지의 마지막을 자신의 친필로 마무리합니다. 당시 편지는 일반적으로 서기(amanuensis)에게 구술하여 기록하게 했고, 저자가 마지막 부분만 직접 써서 진위를 보증했습니다(고린도전서 16:21; 갈라디아서 6:11; 데살로니가후서 3:17). 바울이 "나 바울"이라고 자신을 강조한 것은 편지의 권위와 진정성을 확인하는 것입니다. "나의 쇠사슬을 기억하라"는 짧지만 강력한 요청입니다. 이것은 단순히 동정을 구하는 것이 아니라 여러 의미를 담고 있습니다: (1) 기도 요청 - 바울의 투옥과 복음 사역을 위해 기도하라, (2) 격려 - 바울이 복음을 위해 고난받는 것처럼 너희도 두려워하지 말라, (3) 권위 확인 - 쇠사슬에 묶인 사도의 말에 귀 기울이라, (4) 긴급성 - 바울이 언제까지 살지 모르므로 그의 가르침을 소중히 여기라. 바울은 자신의 쇠사슬을 부끄러워하지 않고 오히려 그리스도의 복음을 위한 영광의 표시로 여겼습니다(에베소서 3:1에서 자신을 "그리스도 예수의 갇힌 자"라고 부름). 마지막 축복 "은혜가 너희와 함께 있을지어다"는 바울 서신의 전형적인 마무리입니다. 간결하지만 강력한 이 축복은 편지 전체의 주제를 요약합니다: 구원, 성화, 사역, 인간관계 모든 것이 하나님의 은혜에 달려 있습니다. 골로새 교회가 직면한 거짓 가르침(율법주의, 금욕주의, 신비주의)에 대한 답은 결국 하나님의 은혜입니다.'
    },
    korean_translation: {
      natural_translation: '나 바울이 친필로 이 문안을 씁니다. 제 쇠사슬을 기억해 주십시오. 은혜가 여러분과 함께 하기를 바랍니다.'
    },
    special_explanation: {
      explanation_type: '은혜의 신학',
      content: '바울이 모든 서신을 "은혜"로 시작하고 마치는 것은 우연이 아닙니다. 은혜(카리스)는 바울 신학의 핵심으로, 하나님의 무조건적이고 값없이 주시는 사랑과 능력을 의미합니다. 골로새서는 그리스도의 충족성과 우월성을 강조하는데, 이것이 가능한 것도 은혜 때문입니다. 율법의 행위가 아닌 은혜로 구원받고(에베소서 2:8-9), 은혜로 성장하며(베드로후서 3:18), 은혜로 섬깁니다(고린도전서 15:10). 바울의 마지막 말 "은혜가 너희와 함께"는 단순한 인사가 아니라 교회가 계속해서 하나님의 은혜 안에 거하기를 바라는 간절한 기도이자 축복입니다.'
    }
  }
]

async function main() {
  console.log('골로새서 4:1-18 분석 데이터 저장 시작...\n')

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n=== 저장 완료 ===')
  console.log(`✅ 성공: ${successCount}개 구절`)
  console.log(`❌ 실패: ${failCount}개 구절`)
  console.log(`📊 전체: ${analyses.length}개 구절`)
}

main()
