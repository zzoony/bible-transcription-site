import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // Colossians 2:13
  {
    reference: 'Colossians 2:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '과거 영적 상태 묘사',
        original_text: 'When you were dead in your sins and in the uncircumcision of your flesh',
        korean_translation: '너희가 죄들과 육체의 무할례로 죽었을 때',
        grammatical_explanation: '시간을 나타내는 종속절. "when"이 시간적 배경을 제시하며, "dead"는 영적 죽음을 비유적으로 표현. "in"은 죄와 무할례가 죽음의 상태/영역임을 나타냄.'
      },
      {
        sequence_order: 2,
        semantic_classification: '하나님의 구원 행위',
        original_text: 'God made you alive with Christ',
        korean_translation: '하나님께서 너희를 그리스도와 함께 살리셨다',
        grammatical_explanation: '주절. "made alive"는 사역동사 구조로 죽음에서 생명으로의 전환을 표현. "with Christ"는 그리스도와의 연합을 강조.'
      },
      {
        sequence_order: 3,
        semantic_classification: '용서의 결과',
        original_text: 'He forgave us all our sins',
        korean_translation: '그분께서 우리의 모든 죄를 용서하셨다',
        grammatical_explanation: '병렬적 주절. "all our sins"에서 "all"이 용서의 완전성을 강조. 2인칭에서 1인칭 복수로 전환되어 보편성 확대.'
      }
    ],
    vocabulary: [
      {
        word: 'dead',
        ipa_pronunciation: '/dɛd/',
        korean_pronunciation: '데드',
        part_of_speech: '형용사',
        definition_korean: '죽은, 영적으로 생명 없는 상태',
        usage_note: '여기서는 영적 죽음을 비유적으로 표현. 육체적 죽음이 아닌 하나님과의 단절 상태를 의미.'
      },
      {
        word: 'uncircumcision',
        ipa_pronunciation: '/ˌʌnsɜːrkəmˈsɪʒən/',
        korean_pronunciation: '언서컴시전',
        part_of_speech: '명사',
        definition_korean: '무할례, 할례받지 않은 상태',
        usage_note: '육체적 할례가 아닌 영적 미완성 상태를 상징. 구약의 언약 표징과 대비됨.'
      },
      {
        word: 'alive',
        ipa_pronunciation: '/əˈlaɪv/',
        korean_pronunciation: '얼라이브',
        part_of_speech: '형용사',
        definition_korean: '살아있는, 영적 생명을 가진',
        usage_note: '"made alive"는 수동적 부활/재생을 의미. 하나님의 주도적 행위를 강조.'
      },
      {
        word: 'forgave',
        ipa_pronunciation: '/fərˈɡeɪv/',
        korean_pronunciation: '퍼게이브',
        part_of_speech: '동사 (과거형)',
        definition_korean: '용서하다 (forgive의 과거형)',
        usage_note: '완료된 행위로서의 용서. 죄의 법적 책임을 제거함을 의미.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교인들의 과거 영적 상태와 현재의 변화를 극적으로 대비시킵니다. "죄들과 육체의 무할례로 죽었을 때"는 그리스도를 알기 전의 영적 사망 상태를 묘사합니다. 여기서 "무할례"는 단순히 육체적 의식의 부재가 아니라, 구약의 언약 백성이 아니었던 이방인의 정체성을 상징합니다. 그러나 하나님께서 능동적으로 개입하여 "그리스도와 함께 살리셨다"는 표현은 부활의 신학을 담고 있습니다. 신자는 그리스도의 죽음과 부활에 연합되어, 그분의 생명을 공유하게 됩니다. "모든 죄를 용서하셨다"는 법적 선언으로, 과거의 모든 죄책이 완전히 제거되었음을 의미합니다. 이는 다음 구절에서 설명될 "빚 문서의 취소"와 연결되는 주제입니다. 2인칭("너희")에서 1인칭 복수("우리")로의 전환은 바울 자신도 같은 은혜의 수혜자임을 나타내며, 유대인과 이방인의 구분 없이 모든 신자가 동일한 구원을 받았음을 강조합니다.',
      cross_references: ['Ephesians 2:1-5', 'Romans 6:4-11', 'Colossians 3:1-4']
    },
    korean_translation: {
      natural_translation: '너희가 죄들과 육체의 무할례로 죽어 있을 때, 하나님께서 너희를 그리스도와 함께 살리시고, 우리의 모든 죄를 용서하셨습니다.',
      translation_notes: '"made alive"를 "살리시고"로 번역하여 하나님의 능동적 행위를 강조. "all our sins"는 "모든 죄"로 번역하여 용서의 완전성을 표현.'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '이 구절은 "연합 신학"(union with Christ)의 핵심을 담고 있습니다. 신자는 그리스도의 죽음에 연합하여 죄에 대해 죽고, 그리스도의 부활에 연합하여 새 생명을 얻습니다. "그리스도와 함께"(with Christ)라는 표현은 단순한 모방이나 추종이 아니라, 실제적이고 신비적인 연합을 의미합니다. 또한 "무할례"는 이방인의 정체성을 나타내지만, 바울은 육체적 할례가 아닌 "그리스도 안에서의 할례"(2:11)를 이미 언급했으므로, 여기서는 과거의 언약 밖의 상태를 회상하는 것입니다.',
      examples: [
        '로마서 6:5 - "우리가 그의 죽으심과 같은 모양으로 연합한 자가 되었으면 또한 그의 부활과 같은 모양으로 연합한 자도 되리라"',
        '에베소서 2:5 - "허물로 죽은 우리를 그리스도와 함께 살리셨고"'
      ]
    }
  },

  // Colossians 2:14
  {
    reference: 'Colossians 2:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '법적 문서의 취소',
        original_text: 'having canceled the charge of our legal indebtedness, which stood against us and condemned us',
        korean_translation: '우리를 대적하고 정죄했던 우리의 법적 빚 문서를 취소하시고',
        grammatical_explanation: '분사구문 (having canceled). 13절의 "용서하셨다"와 동시적/인과적 관계. "which"는 관계대nam절로 "charge"를 수식하며, "stood against"와 "condemned"는 병렬 동사.'
      },
      {
        sequence_order: 2,
        semantic_classification: '십자가의 승리',
        original_text: 'he has taken it away, nailing it to the cross',
        korean_translation: '그것을 십자가에 못 박아 제거하셨습니다',
        grammatical_explanation: '주절 + 분사구문. "taken away"는 완전한 제거를, "nailing"은 그 방법(십자가형)을 설명. 로마 법정에서 유죄 판결문을 십자가에 게시하던 관습을 암시.'
      }
    ],
    vocabulary: [
      {
        word: 'canceled',
        ipa_pronunciation: '/ˈkænsəld/',
        korean_pronunciation: '캔슬드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '취소하다, 지우다, 무효화하다',
        usage_note: '법적 효력을 완전히 제거함. 헬라어 "exaleiphō"는 문자 그대로 "지워버리다"는 뜻.'
      },
      {
        word: 'charge',
        ipa_pronunciation: '/tʃɑːrdʒ/',
        korean_pronunciation: '차지',
        part_of_speech: '명사',
        definition_korean: '고소장, 기소 문서',
        usage_note: '법정 용어. 여기서는 죄에 대한 법적 고발장을 의미.'
      },
      {
        word: 'legal indebtedness',
        ipa_pronunciation: '/ˈliːɡəl ɪnˈdɛtɪdnəs/',
        korean_pronunciation: '리걸 인데티드니스',
        part_of_speech: '명사구',
        definition_korean: '법적 빚, 법적 의무',
        usage_note: '율법의 요구사항을 다 이행하지 못한 것을 빚으로 표현. 도덕적·종교적 책임의 은유.'
      },
      {
        word: 'condemned',
        ipa_pronunciation: '/kənˈdɛmd/',
        korean_pronunciation: '컨뎀드',
        part_of_speech: '동사 (과거형)',
        definition_korean: '정죄하다, 유죄 판결하다',
        usage_note: '법정 판결을 의미. 율법이 인간의 죄를 선언하는 기능을 나타냄.'
      },
      {
        word: 'nailing',
        ipa_pronunciation: '/ˈneɪlɪŋ/',
        korean_pronunciation: '네일링',
        part_of_speech: '동사 (현재분사)',
        definition_korean: '못을 박다',
        usage_note: '십자가형의 구체적 방법. 로마 관습에서 범죄 기록을 십자가에 게시했던 것을 암시.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 법정 이미지를 사용하여 그리스도의 구속 사역을 설명합니다. "법적 빚 문서"(헬라어 cheirographon)는 손으로 쓴 빚 문서로, 율법의 요구사항을 지키지 못한 인간의 법적 책임을 상징합니다. 이 문서는 "우리를 대적하고 정죄했던" 것으로, 인간이 스스로 해결할 수 없는 영적 파산 상태를 나타냅니다. 그러나 하나님은 이 문서를 "취소하시고"(canceled) "십자가에 못 박아 제거하셨습니다". 로마 시대에는 범죄자의 죄목을 적은 팻말을 십자가에 게시하는 관습이 있었는데, 아이러니하게도 예수님의 십자가에는 우리의 죄목이 못 박혔습니다. 이는 법적 효력의 완전한 무효화를 의미하며, 율법의 정죄 기능이 그리스도의 대속으로 종결되었음을 선언합니다. 이 승리는 다음 구절의 "영적 권세들에 대한 승리"로 이어집니다.',
      cross_references: ['Romans 7:4-6', 'Galatians 3:13', 'Hebrews 10:1-18']
    },
    korean_translation: {
      natural_translation: '우리를 대적하고 정죄했던 법적 빚 문서를 취소하시고, 그것을 십자가에 못 박아 제거하셨습니다.',
      translation_notes: '"charge of our legal indebtedness"를 "법적 빚 문서"로 간결하게 번역. "nailing it to the cross"는 십자가의 구체성을 살려 번역.'
    },
    special_explanation: {
      explanation_type: '역사적·문화적 배경',
      content: '로마 시대의 법정 관습에서 빚 문서(cheirographon)는 채무자가 손으로 쓴 서약서로, 법적 구속력이 있었습니다. 이 문서가 "취소"될 때는 잉크를 지우거나, 문서에 X표를 그어 무효화했습니다. 또한 십자가형을 당하는 범죄자의 죄목(titulus)은 목에 걸거나 십자가 위에 게시되었습니다. 예수님의 십자가에도 "유대인의 왕"이라는 죄목이 있었지만(요한복음 19:19), 신학적으로는 우리의 모든 죄목이 그 십자가에 못 박혔습니다. 바울은 이러한 문화적 이미지를 활용하여, 율법의 요구(빚 문서)가 십자가에서 완전히 처리되었음을 생생하게 전달합니다.',
      examples: [
        '요한복음 19:19-22 - 빌라도가 "유대인의 왕 나사렛 예수"라는 죄목을 십자가에 달았음',
        '빌레몬서 1:18 - "그가 만일 네게 불의를 행하였거나 네게 빚진 것이 있으면 그것을 내 앞으로 계산하라"'
      ]
    }
  },

  // Colossians 2:15
  {
    reference: 'Colossians 2:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '영적 권세의 무장 해제',
        original_text: 'And having disarmed the powers and authorities',
        korean_translation: '그리고 권세들과 권력들을 무장 해제하시고',
        grammatical_explanation: '분사구문 (having disarmed). 14절과 연결되어 십자가 사역의 또 다른 결과를 제시. "powers and authorities"는 영적 존재들을 지칭.'
      },
      {
        sequence_order: 2,
        semantic_classification: '공개적 승리 선언',
        original_text: 'he made a public spectacle of them',
        korean_translation: '그들을 공개적으로 전시하셨으며',
        grammatical_explanation: '주절. "made a public spectacle"은 로마의 개선 행진(triumph)을 암시하는 표현. 포로를 공개적으로 전시하는 승리의 의식.'
      },
      {
        sequence_order: 3,
        semantic_classification: '승리의 수단',
        original_text: 'triumphing over them by the cross',
        korean_translation: '십자가로 그들을 이기셨습니다',
        grammatical_explanation: '분사구문 (triumphing). "by the cross"는 승리의 수단/장소. 인간적 패배(십자가)가 신적 승리가 되는 역설.'
      }
    ],
    vocabulary: [
      {
        word: 'disarmed',
        ipa_pronunciation: '/dɪsˈɑːrmd/',
        korean_pronunciation: '디사암드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '무장 해제하다, 무력화하다',
        usage_note: '헬라어 "apekdyomai"는 옷이나 갑옷을 벗기다는 뜻. 권세들의 힘을 완전히 제거함을 의미.'
      },
      {
        word: 'powers and authorities',
        ipa_pronunciation: '/ˈpaʊərz ənd ɔːˈθɒrɪtiz/',
        korean_pronunciation: '파워스 앤드 어쏘리티즈',
        part_of_speech: '명사구',
        definition_korean: '권세들과 권력들 (영적 존재)',
        usage_note: '악한 영적 세력들을 지칭. 골로새서 1:16에서는 창조된 존재로 언급되었으나, 여기서는 그리스도께 패배한 세력.'
      },
      {
        word: 'spectacle',
        ipa_pronunciation: '/ˈspɛktəkəl/',
        korean_pronunciation: '스펙터클',
        part_of_speech: '명사',
        definition_korean: '구경거리, 전시물',
        usage_note: '로마 개선 행진에서 포로를 공개적으로 전시하는 장면을 암시. 승리자의 권위를 과시하는 행위.'
      },
      {
        word: 'triumphing',
        ipa_pronunciation: '/ˈtraɪʌmfɪŋ/',
        korean_pronunciation: '트라이엄핑',
        part_of_speech: '동사 (현재분사)',
        definition_korean: '승리하다, 개선하다',
        usage_note: '로마의 개선 행진(triumph)을 나타내는 용어. 군사적 승리 후 포로와 전리품을 거느리고 행진하는 의식.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 십자가를 통한 그리스도의 우주적 승리를 로마의 군사적 이미지로 묘사합니다. "권세들과 권력들"은 골로새서 1:16에서 그리스도에 의해 창조된 영적 존재들이지만, 타락하여 인간을 억압하고 하나님을 대적하는 세력이 되었습니다. 골로새 교회를 위협했던 거짓 가르침은 아마도 이러한 영적 권세들을 두려워하고 숭배하도록 유도했을 것입니다. 그러나 그리스도께서는 십자가에서 이 권세들을 "무장 해제"하셨습니다. 이는 단순히 약화시킨 것이 아니라, 그들의 무기와 권위를 완전히 제거한 것입니다. 로마의 개선 행진에서는 정복한 왕들과 군대를 포로로 끌고 가며 공개적으로 전시했는데, 그리스도께서도 영적 권세들을 그렇게 공개적으로 수치스럽게 하셨습니다. 아이러니하게도 이 승리의 수단은 인간적으로는 수치와 패배의 상징인 "십자가"였습니다. 십자가는 세상이 보기에 약함과 어리석음이었지만, 하나님의 능력과 지혜로 최대의 승리를 거두는 장소가 되었습니다.',
      cross_references: ['1 Corinthians 2:6-8', 'Ephesians 1:20-21', 'Philippians 2:9-11', 'Hebrews 2:14-15']
    },
    korean_translation: {
      natural_translation: '그리고 권세들과 권력들을 무장 해제하시고, 그들을 공개적으로 전시하시며, 십자가로 그들을 이기셨습니다.',
      translation_notes: '"made a public spectacle"을 "공개적으로 전시하시며"로 번역하여 로마 개선 행진의 이미지를 전달. "by the cross"는 수단을 강조하여 "십자가로"로 번역.'
    },
    special_explanation: {
      explanation_type: '문화적 배경과 신학적 역설',
      content: '로마의 개선 행진(triumphus)은 대승을 거둔 장군이 포로와 전리품을 끌고 로마 시내를 행진하는 화려한 의식이었습니다. 정복된 왕들은 쇠사슬에 묶여 수치스럽게 전시되었고, 군중은 환호했습니다. 바울은 이 이미지를 사용하여, 십자가에서 그리스도께서 영적 권세들에 대해 그러한 승리를 거두셨다고 선언합니다. 그러나 여기에는 놀라운 역설이 있습니다. 십자가는 로마 제국에서 가장 수치스러운 처형 방식이었고, 십자가에 달린 자는 저주받은 자로 간주되었습니다(신명기 21:23). 겉보기에는 예수님이 패배하고 권세들이 승리한 것처럼 보였지만, 실제로는 정반대였습니다. 죽음과 악의 권세는 그들의 최강 무기(십자가)를 사용했지만, 오히려 그것이 그들의 패배를 확정짓는 도구가 되었습니다. 이는 "하나님의 어리석음이 사람보다 지혜롭고 하나님의 약하심이 사람보다 강하다"(고린도전서 1:25)는 진리를 극명하게 보여줍니다.',
      examples: [
        '고린도전서 1:18 - "십자가의 도가 멸망하는 자들에게는 미련한 것이요 구원을 받는 우리에게는 하나님의 능력이라"',
        '고린도전서 2:8 - "이 지혜는 이 세대의 통치자들이 한 사람도 알지 못하였나니 만일 알았더라면 영광의 주를 십자가에 못 박지 아니하였으리라"'
      ]
    }
  },

  // Colossians 2:16
  {
    reference: 'Colossians 2:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고와 금지',
        original_text: 'Therefore do not let anyone judge you',
        korean_translation: '그러므로 아무도 너희를 판단하지 못하게 하라',
        grammatical_explanation: '명령문. "Therefore"는 앞의 십자가 승리(13-15절)의 결론. "let"은 허용을 나타내는 사역동사로, 타인의 판단을 받아들이지 말라는 의미.'
      },
      {
        sequence_order: 2,
        semantic_classification: '판단의 구체적 영역들',
        original_text: 'by what you eat or drink, or with regard to a religious festival, a New Moon celebration or a Sabbath day',
        korean_translation: '먹고 마시는 것이나, 종교적 축제, 초하루 축하, 안식일에 관하여',
        grammatical_explanation: '전치사구들의 병렬 나열. "by what you eat or drink"와 "with regard to..."는 판단의 두 주요 범주(음식법, 종교력)를 제시. 구약의 의식법을 암시.'
      }
    ],
    vocabulary: [
      {
        word: 'judge',
        ipa_pronunciation: '/dʒʌdʒ/',
        korean_pronunciation: '저지',
        part_of_speech: '동사',
        definition_korean: '판단하다, 정죄하다, 비판하다',
        usage_note: '여기서는 율법적 기준으로 타인의 영적 상태를 평가하는 것을 의미. 단순한 의견이 아닌 권위적 판결의 뉘앙스.'
      },
      {
        word: 'festival',
        ipa_pronunciation: '/ˈfɛstɪvəl/',
        korean_pronunciation: '페스티벌',
        part_of_speech: '명사',
        definition_korean: '축제, 절기',
        usage_note: '유대교의 연례 축제들(유월절, 오순절, 초막절 등)을 지칭. 율법에 명시된 종교적 의무.'
      },
      {
        word: 'New Moon celebration',
        ipa_pronunciation: '/njuː muːn ˌsɛlɪˈbreɪʃən/',
        korean_pronunciation: '뉴 문 셀러브레이션',
        part_of_speech: '명사구',
        definition_korean: '초하루 축하, 월삭제',
        usage_note: '유대 달력의 매월 첫날을 기념하는 의식. 민수기 28:11-15에 규정됨.'
      },
      {
        word: 'Sabbath',
        ipa_pronunciation: '/ˈsæbəθ/',
        korean_pronunciation: '새바스',
        part_of_speech: '명사',
        definition_korean: '안식일, 토요일',
        usage_note: '유대교의 주간 거룩한 날. 십계명의 하나로 엄격히 지켜졌던 날. 여기서는 율법주의적 준수를 의미.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 그리스도의 십자가 승리를 근거로("Therefore"), 골로새 교인들이 율법주의적 판단에서 자유로워야 함을 선언합니다. 거짓 교사들은 아마도 구약의 음식법(레위기 11장)과 종교력(연례 축제, 월삭, 안식일)을 지키지 않는 신자들을 판단하고 정죄했던 것으로 보입니다. 이러한 의식법들은 구약 시대에는 하나님의 백성을 구별하는 중요한 표지였습니다. 연례 축제(유월절, 오순절, 초막절), 월삭(매월 초하루), 안식일(매주 토요일)은 각각 연간, 월간, 주간 주기의 거룩한 시간들이었습니다. 그러나 바울은 이러한 것들이 "그림자"에 불과하며(17절), 실체이신 그리스도 안에서는 더 이상 구속력이 없다고 가르칩니다. 그리스도께서 율법의 요구를 완성하셨고(14절), 영적 권세들을 이기셨으므로(15절), 신자들은 옛 언약의 의식법으로 판단받을 필요가 없습니다. 이는 율법 자체를 부정하는 것이 아니라, 율법의 궁극적 목적이 그리스도를 가리키는 것이었음을 밝히는 것입니다.',
      cross_references: ['Romans 14:1-6', 'Galatians 4:9-11', '1 Corinthians 8:8']
    },
    korean_translation: {
      natural_translation: '그러므로 먹고 마시는 것이나, 종교적 축제나 초하루 축하나 안식일에 관하여 아무도 너희를 판단하지 못하게 하십시오.',
      translation_notes: '"do not let anyone judge you"를 "아무도 너희를 판단하지 못하게 하십시오"로 번역하여 능동적 거부를 강조. 음식법과 종교력의 구체적 항목들을 명확히 나열.'
    },
    special_explanation: {
      explanation_type: '율법과 복음의 관계',
      content: '이 구절은 구약의 의식법이 신약 시대에 어떻게 적용되는가에 대한 중요한 신학적 원리를 제시합니다. 바울은 의식법의 "그림자"적 성격을 강조합니다(17절). 음식법은 정결과 부정결을 구분하여 거룩함의 개념을 가르쳤고, 축제들은 구원 역사의 중요한 사건들을 기념했으며, 안식일은 창조와 안식, 그리고 미래의 안식을 상징했습니다. 그러나 이 모든 것은 오실 그리스도를 예표하는 교육적 기능이었습니다. 그리스도께서 오신 후에는 실체가 그림자를 대체합니다. 이는 의식법이 의미 없다는 것이 아니라, 그 의미가 그리스도 안에서 완성되었다는 뜻입니다. 따라서 신자는 의식법을 지킬 자유도, 지키지 않을 자유도 있지만, 그것으로 타인을 판단하거나 구원의 조건으로 삼아서는 안 됩니다. 이는 예루살렘 공의회(사도행전 15장)의 결정과도 일치하며, 로마서 14장의 "약한 자와 강한 자" 논의와도 연결됩니다.',
      examples: [
        '마가복음 7:18-19 - 예수님께서 모든 음식을 깨끗하다고 선언하심',
        '사도행전 15:28-29 - 예루살렘 공의회에서 이방인 신자에게 율법 전체를 요구하지 않기로 결정',
        '로마서 14:17 - "하나님의 나라는 먹는 것과 마시는 것이 아니요 오직 성령 안에서 의와 평강과 희락이라"'
      ]
    }
  },

  // Colossians 2:17
  {
    reference: 'Colossians 2:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '의식법의 예표적 성격',
        original_text: 'These are a shadow of the things that were to come',
        korean_translation: '이것들은 앞으로 올 것들의 그림자입니다',
        grammatical_explanation: '주절. "These"는 16절의 음식법과 종교력을 지칭. "shadow"는 예표론적 개념. "that were to come"는 과거 시점(율법 제정 시)에서 미래였던 것(그리스도)을 의미.'
      },
      {
        sequence_order: 2,
        semantic_classification: '실체의 정체',
        original_text: 'the reality, however, is found in Christ',
        korean_translation: '그러나 실체는 그리스도 안에 있습니다',
        grammatical_explanation: '"however"는 대조 접속사로 그림자와 실체를 대비. "reality"(헬라어 soma, 몸)는 그림자의 반대 개념으로 실제적 존재를 의미. "is found in Christ"는 그리스도 안에 실체가 발견됨을 강조.'
      }
    ],
    vocabulary: [
      {
        word: 'shadow',
        ipa_pronunciation: '/ˈʃædoʊ/',
        korean_pronunciation: '새도우',
        part_of_speech: '명사',
        definition_korean: '그림자, 예표, 미리 보이는 형상',
        usage_note: '헬라어 "skia"는 실체를 미리 보여주지만 실체 자체는 아닌 것을 의미. 플라톤 철학의 그림자-실체 개념과도 연결됨.'
      },
      {
        word: 'things that were to come',
        ipa_pronunciation: '/θɪŋz ðæt wɜːr tuː kʌm/',
        korean_pronunciation: '씽즈 댓 워 투 컴',
        part_of_speech: '명사구',
        definition_korean: '앞으로 올 것들, 미래의 실체',
        usage_note: '율법 제정 당시에는 미래였지만 이제 그리스도로 성취된 것들. 종말론적 성취를 암시.'
      },
      {
        word: 'reality',
        ipa_pronunciation: '/riˈæləti/',
        korean_pronunciation: '리얼러티',
        part_of_speech: '명사',
        definition_korean: '실체, 실재, 본체',
        usage_note: '헬라어 "soma"(몸)의 번역. 그림자와 대비되는 실제 존재. 그리스도의 구체적이고 충만한 실재성을 강조.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 구약의 의식법과 그리스도의 관계를 "그림자"와 "실체"의 비유로 설명합니다. 그림자는 실체의 윤곽을 보여주지만, 실체의 색깔, 질감, 차원을 담지 못합니다. 마찬가지로 음식법, 축제, 안식일은 오실 그리스도와 그분이 가져올 구원의 윤곽을 보여주었지만, 그 자체로는 구원의 실체가 아니었습니다. "앞으로 올 것들"이라는 표현은 율법이 제정될 당시(모세 시대)에는 미래였지만, 이제 그리스도의 오심으로 현재가 된 구원의 실체를 의미합니다. 예를 들어, 유월절 어린 양은 십자가의 그리스도를 예표했고, 안식일은 그리스도 안에서 얻는 영적 안식을 미리 보여주었습니다. "실체는 그리스도 안에 있습니다"라는 선언은 모든 구약의 의식이 궁극적으로 그리스도를 가리켰음을 밝힙니다. 따라서 그리스도를 소유한 신자는 이미 실체를 가진 것이며, 그림자에 집착할 필요가 없습니다. 이는 히브리서 10:1의 "율법은 장차 올 좋은 일의 그림자"라는 가르침과 일치합니다.',
      cross_references: ['Hebrews 10:1', 'Hebrews 8:5', 'John 1:17']
    },
    korean_translation: {
      natural_translation: '이것들은 앞으로 올 것들의 그림자일 뿐입니다. 그러나 실체는 그리스도 안에 있습니다.',
      translation_notes: '"shadow"를 "그림자일 뿐"으로 번역하여 제한성을 강조. "however"의 대조를 "그러나"로 명확히 표현. "is found in Christ"는 "그리스도 안에 있습니다"로 위치를 강조.'
    },
    special_explanation: {
      explanation_type: '예표론(Typology) 해석 원리',
      content: '예표론은 구약의 인물, 사건, 제도가 신약의 그리스도와 구원을 미리 보여주는 "예표"(type)라는 해석 방법입니다. 바울은 여기서 의식법이 그리스도의 예표임을 가르칩니다. 중요한 원리는 다음과 같습니다: (1) 예표는 실체를 예시하지만 대체하지 못합니다. (2) 예표는 부분적이고 불완전하지만, 실체는 완전합니다. (3) 실체가 오면 예표의 기능은 완료됩니다. 예를 들어, 유월절 어린 양(출애굽기 12장)은 "하나님의 어린 양"이신 그리스도(요한복음 1:29)를 예표했습니다. 안식일의 쉼은 그리스도 안에서 얻는 영혼의 안식(마태복음 11:28-29)을 예표했습니다. 성막의 휘장은 그리스도의 몸(히브리서 10:20)을 예표했습니다. 따라서 그리스도인은 예표(의식법)를 문자적으로 준수하기보다, 그것이 가리키는 실체(그리스도)를 붙잡아야 합니다. 이것이 "율법의 마침은 그리스도"(로마서 10:4)라는 의미입니다.',
      examples: [
        '고린도전서 5:7 - "우리의 유월절 양 곧 그리스도께서 희생되셨느니라"',
        '요한복음 1:29 - "보라 세상 죄를 지고 가는 하나님의 어린 양이로다"',
        '히브리서 4:9-10 - "그런즉 안식할 때가 하나님의 백성에게 남아 있도다"'
      ]
    }
  },

  // Colossians 2:18
  {
    reference: 'Colossians 2:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고: 자격 박탈 금지',
        original_text: 'Do not let anyone who delights in false humility and the worship of angels disqualify you',
        korean_translation: '거짓 겸손과 천사 숭배를 기뻐하는 사람이 너희를 실격시키지 못하게 하라',
        grammatical_explanation: '명령문. 16절과 유사한 구조("Do not let anyone..."). "who"는 관계절로 거짓 교사의 특징(거짓 겸손, 천사 숭배)을 묘사. "disqualify"는 경기에서 자격을 박탈하는 이미지.'
      },
      {
        sequence_order: 2,
        semantic_classification: '거짓 교사의 행태',
        original_text: 'Such a person also goes into great detail about what they have seen',
        korean_translation: '그런 사람은 또한 자기가 본 것에 대해 아주 자세히 말합니다',
        grammatical_explanation: '"Such a person"은 앞의 거짓 교사를 지칭. "goes into great detail"은 과장된 영적 체험 주장을 암시. "what they have seen"은 환상이나 신비 체험을 의미.'
      },
      {
        sequence_order: 3,
        semantic_classification: '교만의 근원',
        original_text: 'they are puffed up with idle notions by their unspiritual mind',
        korean_translation: '그들은 영적이지 않은 마음으로 헛된 생각에 교만해져 있습니다',
        grammatical_explanation: '"puffed up"은 부풀려진, 교만한 상태. "with idle notions"는 교만의 내용(헛된 생각). "by their unspiritual mind"는 교만의 근원(육신적 마음). 아이러니하게도 영적 체험을 자랑하지만 실은 육신적임.'
      }
    ],
    vocabulary: [
      {
        word: 'delights in',
        ipa_pronunciation: '/dɪˈlaɪts ɪn/',
        korean_pronunciation: '딜라이츠 인',
        part_of_speech: '동사구',
        definition_korean: '기뻐하다, 즐기다, 좋아하다',
        usage_note: '헬라어 "thelō"는 의지적으로 원하고 즐기는 것. 단순한 선호가 아닌 적극적 추구를 의미.'
      },
      {
        word: 'false humility',
        ipa_pronunciation: '/fɔːls hjuːˈmɪləti/',
        korean_pronunciation: '폴스 휴밀러티',
        part_of_speech: '명사구',
        definition_korean: '거짓 겸손, 위선적 겸손',
        usage_note: '겉으로는 겸손한 척하지만 실제로는 자기 의를 드러내려는 태도. 금욕주의적 실천을 통한 우월감.'
      },
      {
        word: 'worship of angels',
        ipa_pronunciation: '/ˈwɜːrʃɪp əv ˈeɪndʒəlz/',
        korean_pronunciation: '워십 오브 에인절스',
        part_of_speech: '명사구',
        definition_korean: '천사 숭배',
        usage_note: '골로새의 거짓 가르침의 특징. 천사를 중재자나 숭배 대상으로 삼는 이단적 실천.'
      },
      {
        word: 'disqualify',
        ipa_pronunciation: '/dɪsˈkwɒlɪfaɪ/',
        korean_pronunciation: '디스퀄리파이',
        part_of_speech: '동사',
        definition_korean: '실격시키다, 자격을 박탈하다',
        usage_note: '헬라어 "katabrabeuō"는 경기 심판이 선수를 실격시키는 것. 구원의 확신을 빼앗으려는 시도를 의미.'
      },
      {
        word: 'puffed up',
        ipa_pronunciation: '/pʌft ʌp/',
        korean_pronunciation: '퍼프트 업',
        part_of_speech: '동사구 (과거분사)',
        definition_korean: '부풀어 오른, 교만한',
        usage_note: '헬라어 "physioō"는 바람으로 부풀리다. 실체 없이 겉만 부푼 교만의 이미지. 고린도전서에서도 자주 사용됨.'
      },
      {
        word: 'idle notions',
        ipa_pronunciation: '/ˈaɪdəl ˈnoʊʃənz/',
        korean_pronunciation: '아이들 노션즈',
        part_of_speech: '명사구',
        definition_korean: '헛된 생각, 공허한 관념',
        usage_note: '헬라어 "nous"(마음)에서 나온 헛된 사변. 영적 체험이라 주장하지만 실은 자기 상상.'
      },
      {
        word: 'unspiritual mind',
        ipa_pronunciation: '/ʌnˈspɪrɪtʃuəl maɪnd/',
        korean_pronunciation: '언스피리추얼 마인드',
        part_of_speech: '명사구',
        definition_korean: '영적이지 않은 마음, 육신적 마음',
        usage_note: '헬라어 "sarx"(육)의 마음. 성령의 지배를 받지 않고 자기 욕망과 추론을 따르는 마음.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교회를 위협하는 또 다른 거짓 가르침을 경고합니다. 이 거짓 교사들은 "거짓 겸손"과 "천사 숭배"를 특징으로 했습니다. "거짓 겸손"은 금욕주의적 실천(예: 금식, 고행)을 통해 겉으로는 겸손해 보이지만 실제로는 영적 우월감을 추구하는 태도입니다. "천사 숭배"는 당시 골로새 지역에 퍼져 있던 이단적 실천으로, 천사들을 하나님과 인간 사이의 중재자로 여기거나 숭배 대상으로 삼았습니다. 이는 그리스도의 유일한 중보자 되심(디모데전서 2:5)을 부정하는 것입니다. 거짓 교사들은 또한 자신들이 특별한 환상이나 신비 체험을 했다고 주장하며("자기가 본 것에 대해 아주 자세히 말합니다"), 이를 통해 자신들의 권위를 확립하려 했습니다. 그러나 바울은 이러한 주장들이 "영적이지 않은 마음으로 헛된 생각에 교만해진" 것이라고 폭로합니다. 아이러니하게도 이들은 영적 체험을 자랑하지만, 실제로는 "육신적 마음"(unspiritual mind)의 산물입니다. 이들은 신자들을 "실격시키려"(disqualify) 합니다. 이는 경기에서 선수의 자격을 박탈하는 이미지로, 신자의 구원 확신과 그리스도 안에서의 자유를 빼앗으려는 시도를 의미합니다.',
      cross_references: ['1 Timothy 2:5', '1 Timothy 4:1-3', 'Revelation 19:10', 'Revelation 22:8-9']
    },
    korean_translation: {
      natural_translation: '거짓 겸손과 천사 숭배를 기뻐하는 사람이 너희를 실격시키지 못하게 하십시오. 그런 사람은 자기가 본 것에 대해 아주 자세히 말하지만, 영적이지 않은 마음으로 헛된 생각에 교만해져 있습니다.',
      translation_notes: '"delights in"을 "기뻐하는"으로 번역하여 적극적 추구를 표현. "goes into great detail"은 "아주 자세히 말하지만"으로 과장된 주장의 뉘앙스를 전달.'
    },
    special_explanation: {
      explanation_type: '골로새 이단의 특징',
      content: '골로새 교회를 위협했던 거짓 가르침은 유대교, 영지주의, 그리고 지역적 신비 종교의 혼합으로 보입니다. 주요 특징은 다음과 같습니다: (1) 천사 숭배: 천사를 하나님과 인간 사이의 중재자로 여기거나, 우주의 "원소들"(stoicheia, 2:8, 20)을 다스리는 영적 존재로 숭배했습니다. 이는 그리스도의 유일성과 충분성을 부정하는 것입니다. (2) 거짓 겸손: 금욕주의, 금식, 고행을 통해 영적 우월성을 추구했습니다. 이는 겸손의 외형을 가졌지만 실제로는 자기 의를 세우는 교만이었습니다. (3) 신비 체험 주장: 환상, 천상 여행, 비밀 지식 등을 경험했다고 주장하며 권위를 확립했습니다. (4) 율법주의: 음식법, 종교력 준수를 요구했습니다(16절). 바울은 이 모든 것이 "그리스도 밖에서" 구원과 영성을 추구하는 헛된 시도라고 비판합니다. 참된 영성은 그리스도와의 연합(머리와 몸의 관계, 19절)에서 나오며, 외적 의식이나 신비 체험이 아닌 성령의 역사로 이루어집니다.',
      examples: [
        '요한계시록 19:10 - 요한이 천사를 경배하려 하자 천사가 거부함: "나는 너와 및 예수의 증언을 받은 네 형제들과 같이 된 종이니 하나님께 경배하라"',
        '디모데전서 4:3 - 거짓 교사들이 "혼인을 금하고 음식을 폐하라" 함',
        '골로새서 2:23 - "이런 것들은... 자의로 숭배하며 겸손하게 하며 몸을 괴롭게 하나 오직 육체의 정욕을 억제하는 데는 조금도 유익이 없느니라"'
      ]
    }
  },

  // Colossians 2:19
  {
    reference: 'Colossians 2:19',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '머리와의 단절',
        original_text: 'They have lost connection with the head',
        korean_translation: '그들은 머리와의 연결을 잃었습니다',
        grammatical_explanation: '"They"는 18절의 거짓 교사들. "lost connection with"는 단절/이탈을 의미. "the head"는 그리스도를 지칭(1:18 참조). 신체 은유의 시작.'
      },
      {
        sequence_order: 2,
        semantic_classification: '머리의 기능: 몸의 성장',
        original_text: 'from whom the whole body, supported and held together by its ligaments and sinews, grows as God causes it to grow',
        korean_translation: '그로부터 온 몸이, 인대와 힘줄로 지탱되고 연결되어, 하나님께서 자라게 하시는 대로 성장합니다',
        grammatical_explanation: '"from whom"은 "the head"(그리스도)를 선행사로 하는 관계절. "supported and held together"는 수동태 분사로 몸의 통합성을 표현. "by its ligaments and sinews"는 연결 구조. "grows as God causes it to grow"는 성장의 신적 기원을 강조.'
      }
    ],
    vocabulary: [
      {
        word: 'connection',
        ipa_pronunciation: '/kəˈnɛkʃən/',
        korean_pronunciation: '커넥션',
        part_of_speech: '명사',
        definition_korean: '연결, 결합',
        usage_note: '헬라어 "krateō"는 붙잡다, 견고히 연결되다. 머리(그리스도)와 몸(교회)의 생명적 연합을 의미.'
      },
      {
        word: 'head',
        ipa_pronunciation: '/hɛd/',
        korean_pronunciation: '헤드',
        part_of_speech: '명사',
        definition_korean: '머리',
        usage_note: '그리스도를 상징. 몸을 다스리고 생명을 공급하는 근원. 권위와 양육의 이중적 의미.'
      },
      {
        word: 'whole body',
        ipa_pronunciation: '/hoʊl ˈbɒdi/',
        korean_pronunciation: '홀 바디',
        part_of_speech: '명사구',
        definition_korean: '온 몸, 전체 몸',
        usage_note: '교회 전체를 지칭. 모든 지체가 유기적으로 연결된 통합체.'
      },
      {
        word: 'supported',
        ipa_pronunciation: '/səˈpɔːrtɪd/',
        korean_pronunciation: '서포티드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '지탱되다, 공급받다',
        usage_note: '헬라어 "epichorēgeō"는 풍성히 공급하다. 머리로부터의 영양 공급을 의미.'
      },
      {
        word: 'held together',
        ipa_pronunciation: '/hɛld təˈɡɛðər/',
        korean_pronunciation: '헬드 투게더',
        part_of_speech: '동사구 (과거분사)',
        definition_korean: '함께 연결되다, 결합되다',
        usage_note: '헬라어 "symbibazō"는 함께 묶다. 지체들 간의 유기적 결속을 의미.'
      },
      {
        word: 'ligaments and sinews',
        ipa_pronunciation: '/ˈlɪɡəmənts ənd ˈsɪnjuːz/',
        korean_pronunciation: '리거먼츠 앤드 시뉴즈',
        part_of_speech: '명사구',
        definition_korean: '인대와 힘줄',
        usage_note: '신체의 연결 조직. 교회 내 다양한 관계와 기능적 연결을 상징.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 거짓 교사들의 근본 문제를 진단합니다: "그들은 머리와의 연결을 잃었습니다." 머리는 그리스도를 지칭하며(1:18), 몸은 교회를 의미합니다. 거짓 교사들은 천사 숭배, 신비 체험, 율법주의 등에 집중하면서 정작 그리스도와의 생명적 연합을 놓쳤습니다. 이는 단순한 교리적 오류가 아니라 생명 근원과의 단절입니다. 바울은 이어서 그리스도(머리)와 교회(몸)의 관계를 생생하게 묘사합니다. "온 몸"은 머리로부터 "인대와 힘줄로 지탱되고 연결"됩니다. 인대와 힘줄은 신체의 연결 조직으로, 교회 내 다양한 관계, 은사, 섬김을 상징합니다(고린도전서 12장의 몸 비유 참조). 중요한 것은 성장의 원천입니다: "하나님께서 자라게 하시는 대로 성장합니다." 성장은 인간의 노력(금욕, 의식 준수, 신비 체험)이 아니라 하나님의 주권적 역사입니다. 머리이신 그리스도로부터 영양과 생명을 공급받을 때만 교회는 건강하게 성장합니다. 이는 거짓 가르침의 헛됨을 폭로합니다. 아무리 영적으로 보이는 실천이라도 그리스도와 단절되면 생명과 성장이 없습니다.',
      cross_references: ['Ephesians 4:15-16', '1 Corinthians 12:12-27', 'Colossians 1:18']
    },
    korean_translation: {
      natural_translation: '그들은 머리와의 연결을 잃었습니다. 그 머리로부터 온 몸이 인대와 힘줄로 지탱되고 연결되어, 하나님께서 자라게 하시는 대로 성장하는 것입니다.',
      translation_notes: '"lost connection with the head"를 "머리와의 연결을 잃었습니다"로 번역하여 단절을 강조. "grows as God causes it to grow"는 "하나님께서 자라게 하시는 대로 성장하는"으로 신적 주권을 표현.'
    },
    special_explanation: {
      explanation_type: '교회론: 그리스도와 교회의 관계',
      content: '이 구절은 바울 신학의 핵심적 교회론을 담고 있습니다. 그리스도는 "머리"(kephalē)이고 교회는 "몸"(sōma)입니다. 이 관계는 세 가지 핵심 요소를 포함합니다: (1) 권위: 머리는 몸을 다스립니다. 그리스도께서 교회의 유일한 주님이십니다. (2) 생명: 머리는 몸에 생명을 공급합니다. 그리스도와 단절되면 영적 사망입니다. (3) 성장: 머리로부터 몸이 성장합니다. "하나님께서 자라게 하시는 대로"라는 표현은 성장이 인간의 노력이 아닌 하나님의 은혜임을 강조합니다. 에베소서 4:15-16은 이를 더 자세히 설명합니다: "오직 사랑 안에서 참된 것을 하여 범사에 그에게까지 자랄지라 그는 머리니 곧 그리스도라 그에게서 온 몸이 각 마디를 통하여 도움을 받음으로 연결되고 결합되어 각 지체의 분량대로 역사하여 그 몸을 자라게 하며 사랑 안에서 스스로 세워지느니라." 거짓 교사들의 문제는 그리스도(머리) 외에 다른 것(천사, 율법, 신비 체험)을 추구하여 생명 근원과 단절된 것입니다. 참된 영성과 성장은 오직 그리스도와의 연합에서 나옵니다.',
      examples: [
        '에베소서 1:22-23 - "그리스도를 만물 위에 교회의 머리로 삼으셨느니라 교회는 그의 몸이니 만물 안에서 만물을 충만하게 하시는 이의 충만함이니라"',
        '에베소서 5:23 - "이는 남편이 아내의 머리 됨이 그리스도께서 교회의 머리 됨과 같음이니"',
        '고린도전서 12:12 - "몸은 하나인데 많은 지체가 있고 몸의 지체가 많으나 한 몸임과 같이 그리스도도 그러하니라"'
      ]
    }
  },

  // Colossians 2:20
  {
    reference: 'Colossians 2:20',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '그리스도와 함께 죽음',
        original_text: 'Since you died with Christ to the elemental spiritual forces of this world',
        korean_translation: '너희가 그리스도와 함께 이 세상의 초보적 영적 세력들에 대해 죽었다면',
        grammatical_explanation: '조건절 (Since = if). "died with Christ"는 2:12의 세례/연합 신학을 반복. "to"는 관계의 단절(죽음으로 인한 해방). "elemental spiritual forces"는 2:8의 "stoicheia"를 재언급.'
      },
      {
        sequence_order: 2,
        semantic_classification: '논리적 질문',
        original_text: 'why, as though you still belonged to the world, do you submit to its rules',
        korean_translation: '왜 여전히 세상에 속한 것처럼 그 규칙들에 복종합니까?',
        grammatical_explanation: '수사적 질문. "as though"는 비현실적 가정(사실은 세상에 속하지 않음). "submit to its rules"는 율법주의적 규정들을 지키는 것을 의미. 논리적 모순을 지적.'
      }
    ],
    vocabulary: [
      {
        word: 'died with Christ',
        ipa_pronunciation: '/daɪd wɪð kraɪst/',
        korean_pronunciation: '다이드 위드 크라이스트',
        part_of_speech: '동사구',
        definition_korean: '그리스도와 함께 죽다',
        usage_note: '세례를 통한 그리스도의 죽음과의 연합. 로마서 6:3-4의 신학. 옛 자아와 세상 권세에 대한 죽음.'
      },
      {
        word: 'elemental spiritual forces',
        ipa_pronunciation: '/ˌɛlɪˈmɛntəl ˈspɪrɪtʃuəl ˈfɔːrsɪz/',
        korean_pronunciation: '엘리멘틀 스피리추얼 포시즈',
        part_of_speech: '명사구',
        definition_korean: '초보적 영적 세력들, 세상의 원리',
        usage_note: '헬라어 "stoicheia tou kosmou". 우주의 기본 원리들, 또는 영적 권세들을 지칭. 율법주의와 금욕주의를 포함.'
      },
      {
        word: 'belonged to',
        ipa_pronunciation: '/bɪˈlɒŋd tuː/',
        korean_pronunciation: '빌롱드 투',
        part_of_speech: '동사구',
        definition_korean: '~에 속하다',
        usage_note: '소유권과 정체성을 나타냄. 세상에 속했던 과거 상태를 암시.'
      },
      {
        word: 'submit to',
        ipa_pronunciation: '/səbˈmɪt tuː/',
        korean_pronunciation: '섭밋 투',
        part_of_speech: '동사구',
        definition_korean: '복종하다, 순종하다',
        usage_note: '헬라어 "dogmatizō"는 교리/규칙에 묶이다. 율법주의적 규정들에 스스로를 종속시키는 것.'
      },
      {
        word: 'rules',
        ipa_pronunciation: '/ruːlz/',
        korean_pronunciation: '룰즈',
        part_of_speech: '명사',
        definition_korean: '규칙들, 법령들',
        usage_note: '헬라어 "dogmata"는 교리, 법령, 규정. 21절에서 구체화됨("만지지 마라, 맛보지 마라, 건드리지 마라").'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 거짓 가르침의 비논리성을 폭로합니다. 그는 먼저 골로새 신자들의 신분을 상기시킵니다: "너희가 그리스도와 함께... 죽었다면." 이는 2:11-12에서 언급한 세례를 통한 그리스도와의 연합을 가리킵니다. 신자는 그리스도의 죽음에 연합하여 "이 세상의 초보적 영적 세력들에 대해" 죽었습니다. "초보적 영적 세력들"(stoicheia)은 2:8에서도 언급된 개념으로, 문자적으로는 "우주의 기본 원소"를 의미하지만, 여기서는 율법주의, 금욕주의, 천사 숭배 등 그리스도 이전의 미성숙한 종교적 원리들, 또는 그것을 배후에서 조종하는 영적 권세들을 지칭합니다. 그리스도 안에서 이미 이러한 세력들에 대해 죽었다면(해방되었다면), "왜 여전히 세상에 속한 것처럼 그 규칙들에 복종합니까?"라는 수사적 질문은 논리적 모순을 지적합니다. 이는 갈라디아서 4:9의 "어찌하여 다시 약하고 천한 초등학문으로 돌아가서 다시 그들에게 종 노릇 하려 하느냐"와 같은 논리입니다. 그리스도 안에서 자유를 얻었는데 다시 노예로 돌아가는 것은 복음을 부정하는 것입니다.',
      cross_references: ['Romans 6:2-11', 'Galatians 4:3-9', 'Galatians 2:19-20']
    },
    korean_translation: {
      natural_translation: '너희가 그리스도와 함께 이 세상의 초보적 영적 세력들에 대해 죽었다면, 왜 여전히 세상에 속한 것처럼 그 규칙들에 복종합니까?',
      translation_notes: '"Since you died with Christ"를 "너희가 그리스도와 함께... 죽었다면"으로 번역하여 조건을 명확히 함. "elemental spiritual forces"는 "초보적 영적 세력들"로 번역하여 미성숙함과 영적 차원을 모두 표현.'
    },
    special_explanation: {
      explanation_type: '"Stoicheia"(초보적 세력)의 의미',
      content: '헬라어 "stoicheia tou kosmou"(이 세상의 초보적 것들)는 신약에서 중요하지만 해석이 까다로운 개념입니다. 세 가지 주요 해석이 있습니다: (1) 우주의 기본 원소: 땅, 물, 불, 공기 등 물질적 기본 요소. 고대 철학적 개념. (2) 초보적 종교 원리: 율법, 할례, 음식법, 종교력 등 그리스도 이전의 미성숙한 종교적 규정들. 어린아이의 ABC와 같은 초보 단계. (3) 영적 권세들: 우주를 다스린다고 여겨진 악한 영적 존재들. 골로새서 2:15의 "권세들과 권력들"과 연결됨. 문맥상 이 세 가지 의미가 모두 포함되는 것으로 보입니다. 거짓 교사들은 율법적 규정(의미 2)과 천사/영적 권세 숭배(의미 3)를 혼합하여 가르쳤고, 이는 우주적 원리에 복종하는 것(의미 1)으로 포장되었습니다. 바울의 핵심 주장은 그리스도께서 이 모든 "stoicheia"를 초월하시며, 신자는 그리스도 안에서 이미 이것들로부터 해방되었다는 것입니다. 따라서 다시 그것들에 복종하는 것은 그리스도의 구속을 부정하는 것입니다.',
      examples: [
        '갈라디아서 4:3 - "이와 같이 우리도 어렸을 때에 이 세상의 초등학문 아래에 있어서 종 노릇 하였더니"',
        '갈라디아서 4:9 - "너희가 하나님을 알 뿐 아니라 더욱이 하나님이 아신 바 되었거늘 어찌하여 다시 약하고 천한 초등학문으로 돌아가서"',
        '히브리서 5:12 - "때가 오래 되었으므로 너희가 마땅히 선생이 되었을 터인데 너희가 다시 하나님의 말씀의 초보에 대하여 누구에게 가르침을 받아야 할 처지이니"'
      ]
    }
  },

  // Colossians 2:21
  {
    reference: 'Colossians 2:21',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '율법주의적 금지령들',
        original_text: '"Do not handle! Do not taste! Do not touch!"?',
        korean_translation: '"만지지 마라! 맛보지 마라! 건드리지 마라!"?',
        grammatical_explanation: '인용된 명령문들. 20절의 "rules"(규칙들)의 구체적 예시. 세 개의 부정 명령이 강도를 더해가며 나열됨. 물음표는 수사적 질문의 일부로, 이러한 규칙들의 부조리함을 암시.'
      }
    ],
    vocabulary: [
      {
        word: 'handle',
        ipa_pronunciation: '/ˈhændəl/',
        korean_pronunciation: '핸들',
        part_of_speech: '동사',
        definition_korean: '만지다, 다루다',
        usage_note: '헬라어 "haptō"는 손으로 접촉하다. 가장 일반적인 접촉. 거짓 교사들의 첫 번째 금지 항목.'
      },
      {
        word: 'taste',
        ipa_pronunciation: '/teɪst/',
        korean_pronunciation: '테이스트',
        part_of_speech: '동사',
        definition_korean: '맛보다',
        usage_note: '헬라어 "geuomai"는 맛을 보다, 먹다. 음식법과 관련된 금지. 더 구체적인 제한.'
      },
      {
        word: 'touch',
        ipa_pronunciation: '/tʌtʃ/',
        korean_pronunciation: '터치',
        part_of_speech: '동사',
        definition_korean: '건드리다, 접촉하다',
        usage_note: '헬라어 "thinganō"는 가볍게 건드리다. "handle"보다 더 약한 접촉도 금지. 가장 엄격한 금지.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 거짓 교사들이 부과하는 규칙들의 구체적 예를 제시합니다. "만지지 마라! 맛보지 마라! 건드리지 마라!"는 아마도 거짓 교사들이 실제로 사용했던 슬로건일 것입니다. 이 세 명령은 점점 더 엄격해지는 금욕주의를 나타냅니다. "만지지 마라"(handle)는 가장 일반적인 접촉 금지, "맛보지 마라"(taste)는 특정 음식에 대한 금지, "건드리지 마라"(touch)는 가장 약한 접촉조차 금지하는 극단적 금욕을 의미합니다. 이는 아마도 특정 음식이나 물건을 부정하다고 간주하고 완전히 피하라는 가르침이었을 것입니다. 구약에는 정결법이 있었지만(레위기 11-15장), 이는 의식적 정결함을 가르치기 위한 것이었습니다. 그러나 거짓 교사들은 이를 극단화하여 구원의 조건처럼 제시했습니다. 문제는 이러한 금지령들이 외적이고 형식적이라는 것입니다. 예수님께서는 "입으로 들어가는 것이 사람을 더럽게 하는 것이 아니라 입에서 나오는 것이 사람을 더럽게 하는 것"(마태복음 15:11)이라고 가르치셨습니다. 바울도 "음식은 우리를 하나님 앞에 내세우지 못한다"(고린도전서 8:8)고 했습니다. 이러한 금욕주의적 규칙들은 겉으로는 경건해 보이지만(23절), 실제로는 그리스도의 충분성을 부정하고 인간의 노력으로 의를 얻으려는 시도입니다.',
      cross_references: ['Matthew 15:11', '1 Timothy 4:3-5', 'Mark 7:18-19', '1 Corinthians 8:8']
    },
    korean_translation: {
      natural_translation: '"만지지 마라! 맛보지 마라! 건드리지 마라!"?',
      translation_notes: '세 명령을 모두 느낌표로 강조하여 거짓 교사들의 강압적 어조를 전달. 물음표는 수사적 질문의 일부로 유지.'
    },
    special_explanation: {
      explanation_type: '금욕주의와 복음',
      content: '거짓 교사들의 금욕주의는 여러 면에서 복음과 충돌합니다. 첫째, 창조의 선함을 부정합니다. 하나님께서 창조하신 음식과 물질은 본질적으로 선합니다(창세기 1:31, 디모데전서 4:4). 둘째, 그리스도의 충분성을 부정합니다. 금욕적 실천이 구원이나 성화에 필요하다고 주장하는 것은 그리스도의 사역이 불완전하다는 의미입니다. 셋째, 외적 형식에 집중합니다. 참된 거룩함은 외적 규칙 준수가 아니라 내적 성령의 변화입니다. 넷째, 교만을 낳습니다. 자기 절제를 자랑거리로 삼아 타인을 판단하게 됩니다(18절). 바울은 금욕 자체를 부정하지 않습니다. 절제는 성령의 열매입니다(갈라디아서 5:23). 그러나 문제는 (1) 금욕을 구원의 조건으로 만들거나, (2) 금욕을 통해 자기 의를 세우려 하거나, (3) 금욕을 타인에게 강요하는 것입니다. 참된 자유는 금욕할 수도, 누릴 수도 있는 자유입니다(고린도전서 9:19-23). 중요한 것은 외적 규칙이 아니라 그리스도와의 관계와 성령의 인도하심입니다.',
      examples: [
        '디모데전서 4:4-5 - "하나님께서 지으신 모든 것이 선하매 감사함으로 받으면 버릴 것이 없나니 하나님의 말씀과 기도로 거룩하여짐이라"',
        '로마서 14:14 - "내가 주 예수 안에서 알고 확신하는 것은 무엇이든지 스스로 속된 것이 없으되 다만 속되게 여기는 그 사람에게는 속되니라"',
        '디도서 1:15 - "깨끗한 자들에게는 모든 것이 깨끗하나 더럽고 믿지 아니하는 자들에게는 아무 것도 깨끗한 것이 없고"'
      ]
    }
  },

  // Colossians 2:22
  {
    reference: 'Colossians 2:22',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '규칙들의 일시적 성격',
        original_text: 'These rules, which have to do with things that are all destined to perish with use',
        korean_translation: '이러한 규칙들은 모두 사용하면 없어질 것들에 관한 것입니다',
        grammatical_explanation: '"These rules"는 21절의 금지령들을 지칭. "which"는 관계절로 규칙들의 대상(음식, 물질)을 설명. "destined to perish with use"는 물질의 일시성과 소멸성을 강조. 괄호적 삽입구.'
      },
      {
        sequence_order: 2,
        semantic_classification: '규칙들의 인간적 기원',
        original_text: 'are based on merely human commands and teachings',
        korean_translation: '단지 인간의 명령과 가르침에 근거한 것입니다',
        grammatical_explanation: '주절. "based on"은 규칙들의 기원/권위. "merely human"은 신적 권위의 부재를 강조. "commands and teachings"는 율법주의적 체계를 지칭.'
      }
    ],
    vocabulary: [
      {
        word: 'destined to perish',
        ipa_pronunciation: '/ˈdɛstɪnd tuː ˈpɛrɪʃ/',
        korean_pronunciation: '데스틴드 투 페리시',
        part_of_speech: '동사구',
        definition_korean: '소멸될 운명인, 없어지도록 정해진',
        usage_note: '헬라어 "phthora"는 부패, 소멸. 물질적 것들의 일시성과 무가치함을 강조.'
      },
      {
        word: 'with use',
        ipa_pronunciation: '/wɪð juːs/',
        korean_pronunciation: '위드 유스',
        part_of_speech: '전치사구',
        definition_korean: '사용과 함께, 사용되면',
        usage_note: '헬라어 "apochrēsis"는 소비, 사용. 음식은 먹으면 소화되어 사라짐을 의미.'
      },
      {
        word: 'merely human',
        ipa_pronunciation: '/ˈmɪrli ˈhjuːmən/',
        korean_pronunciation: '미얼리 휴먼',
        part_of_speech: '형용사구',
        definition_korean: '단지 인간적인, 오직 사람의',
        usage_note: '신적 권위나 계시의 부재를 강조. 인간의 전통과 발명에 불과함.'
      },
      {
        word: 'commands and teachings',
        ipa_pronunciation: '/kəˈmændz ənd ˈtiːtʃɪŋz/',
        korean_pronunciation: '커맨즈 앤드 티칭즈',
        part_of_speech: '명사구',
        definition_korean: '명령들과 가르침들',
        usage_note: '헬라어 "entalmata kai didaskalias"는 규정과 교리. 이사야 29:13을 암시 (사람의 계명).'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 거짓 교사들의 규칙이 무가치한 두 가지 이유를 제시합니다. 첫째, 이 규칙들은 "모두 사용하면 없어질 것들에 관한 것"입니다. 음식은 먹으면 소화되어 사라지고, 물질적 물건은 사용하면 소멸됩니다. 예수님께서도 "입으로 들어가는 것은 배로 들어가서 뒷간으로 나가느니라"(마태복음 15:17)고 말씀하셨습니다. 영원한 구원과 영적 성장을 일시적이고 소멸될 물질에 의존시키는 것은 어리석습니다. 둘째, 이 규칙들은 "단지 인간의 명령과 가르침에 근거한 것"입니다. 이는 이사야 29:13을 반향합니다: "이 백성이 입으로는 나를 가까이 하며 입술로는 나를 공경하나 그들의 마음은 내게서 멀리 떠났나니 그들이 나를 경외함은 사람의 계명으로 가르침을 받았을 뿐이라." 예수님께서도 바리새인들을 비판하며 이 구절을 인용하셨습니다(마태복음 15:8-9). 거짓 교사들의 가르침은 하나님의 계시가 아니라 인간의 전통과 발명입니다. 아무리 경건해 보여도, 하나님의 권위가 없는 인간의 규정은 구속력이 없습니다. 이는 종교개혁의 핵심 원리 중 하나인 "오직 성경"(Sola Scriptura)과도 연결됩니다. 구원과 신앙의 규범은 인간의 전통이 아니라 하나님의 말씀에만 있습니다.',
      cross_references: ['Isaiah 29:13', 'Matthew 15:8-9', 'Mark 7:7-8', '1 Timothy 4:3-5']
    },
    korean_translation: {
      natural_translation: '이러한 규칙들은 모두 사용하면 없어질 것들에 관한 것으로, 단지 인간의 명령과 가르침에 근거한 것입니다.',
      translation_notes: '"destined to perish with use"를 "모두 사용하면 없어질 것들"로 간결하게 번역. "merely human"을 "단지 인간의"로 번역하여 신적 권위 부재를 강조.'
    },
    special_explanation: {
      explanation_type: '사람의 계명 vs 하나님의 말씀',
      content: '이 구절은 신앙의 권위에 대한 근본적 질문을 제기합니다. 무엇이 그리스도인의 삶을 규정하는가? 바울은 분명히 답합니다: 하나님의 말씀이지, 사람의 전통이 아닙니다. 이사야 29:13은 형식적 종교를 경고합니다: "사람의 계명으로 가르침을 받았을 뿐이라." 예수님 시대의 바리새인들은 "장로들의 전통"(마태복음 15:2)으로 하나님의 계명을 무효화했습니다(마가복음 7:13). 골로새 교회의 거짓 교사들도 같은 잘못을 범했습니다. 그들의 규칙(음식 금지, 천사 숭배, 금욕주의)은 하나님의 계시가 아니라 인간의 발명이었습니다. 이는 종교개혁의 핵심 쟁점이기도 했습니다. 중세 교회는 교회 전통에 성경과 동등하거나 더 높은 권위를 부여했습니다. 그러나 개혁자들은 "오직 성경"(Sola Scriptura)을 외치며, 성경만이 신앙과 삶의 유일한 규범임을 선언했습니다. 오늘날에도 이 원리는 중요합니다. 교회 전통, 문화적 관습, 개인적 체험은 유익할 수 있지만, 절대 권위는 하나님의 말씀에만 있습니다. 어떤 가르침이나 실천이 성경에 근거하지 않으면, 아무리 오래되고 널리 퍼진 것이라도 구속력이 없습니다.',
      examples: [
        '마태복음 15:9 - "사람의 계명으로 교훈을 삼아 가르치니 나를 헛되이 경배하는도다"',
        '마가복음 7:8 - "너희가 하나님의 계명은 버리고 사람의 전통을 지키느니라"',
        '디모데후서 3:16-17 - "모든 성경은 하나님의 감동으로 된 것으로... 하나님의 사람으로 온전하게 하며 모든 선한 일을 행할 능력을 갖추게 하느니라"'
      ]
    }
  },

  // Colossians 2:23
  {
    reference: 'Colossians 2:23',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '규칙들의 겉모습',
        original_text: 'Such regulations indeed have an appearance of wisdom, with their self-imposed worship, their false humility and their harsh treatment of the body',
        korean_translation: '그러한 규정들은 실로 자의적 숭배, 거짓 겸손, 몸을 가혹하게 다루는 것으로 지혜의 외양을 가지고 있습니다',
        grammatical_explanation: '"Such regulations"는 앞의 모든 거짓 가르침을 요약. "indeed"는 아이러니한 인정. "appearance of wisdom"는 겉모습과 실체의 대조. "with"는 동반 상황으로 세 가지 특징(자의적 숭배, 거짓 겸손, 금욕) 나열.'
      },
      {
        sequence_order: 2,
        semantic_classification: '규칙들의 실제 무용성',
        original_text: 'but they lack any value in restraining sensual indulgence',
        korean_translation: '그러나 육체의 정욕을 억제하는 데는 아무 가치가 없습니다',
        grammatical_explanation: '"but"은 강한 대조. "lack any value"는 완전한 무용성. "in restraining sensual indulgence"는 진정한 목적(죄 억제)에 대한 실패. 금욕주의의 역설: 겉으로는 경건하나 내적 변화는 없음.'
      }
    ],
    vocabulary: [
      {
        word: 'regulations',
        ipa_pronunciation: '/ˌrɛɡjʊˈleɪʃənz/',
        korean_pronunciation: '레귤레이션즈',
        part_of_speech: '명사',
        definition_korean: '규정들, 규칙들',
        usage_note: '헬라어 "dogma"에서 파생. 인간이 만든 종교적 법규.'
      },
      {
        word: 'appearance of wisdom',
        ipa_pronunciation: '/əˈpɪrəns əv ˈwɪzdəm/',
        korean_pronunciation: '어피런스 오브 위즈덤',
        part_of_speech: '명사구',
        definition_korean: '지혜의 외양, 지혜로운 듯한 모습',
        usage_note: '헬라어 "logos sophias"는 지혜의 명성/평판. 실제 지혜가 아닌 겉모습만.'
      },
      {
        word: 'self-imposed worship',
        ipa_pronunciation: '/sɛlf ɪmˈpoʊzd ˈwɜːrʃɪp/',
        korean_pronunciation: '셀프 임포즈드 워십',
        part_of_speech: '명사구',
        definition_korean: '자의적 숭배, 스스로 만든 예배',
        usage_note: '헬라어 "ethelothrēskeia"는 자의적 종교. 하나님이 명하지 않은 자기 발명적 경건 행위.'
      },
      {
        word: 'false humility',
        ipa_pronunciation: '/fɔːls hjuːˈmɪləti/',
        korean_pronunciation: '폴스 휴밀러티',
        part_of_speech: '명사구',
        definition_korean: '거짓 겸손',
        usage_note: '18절에서도 언급됨. 겉으로는 겸손하나 실제로는 자기 의를 추구하는 위선.'
      },
      {
        word: 'harsh treatment of the body',
        ipa_pronunciation: '/hɑːrʃ ˈtriːtmənt əv ðə ˈbɒdi/',
        korean_pronunciation: '하쉬 트리트먼트 오브 더 바디',
        part_of_speech: '명사구',
        definition_korean: '몸을 가혹하게 다루는 것, 고행',
        usage_note: '헬라어 "apheidia sōmatos"는 몸을 아끼지 않음. 금욕주의적 고행, 자해적 수행.'
      },
      {
        word: 'lack any value',
        ipa_pronunciation: '/læk ˈɛni ˈvæljuː/',
        korean_pronunciation: '랙 애니 밸류',
        part_of_speech: '동사구',
        definition_korean: '아무 가치도 없다',
        usage_note: '헬라어 "ouk en timē tini"는 어떤 명예/가치도 없음. 완전한 무용성.'
      },
      {
        word: 'restraining',
        ipa_pronunciation: '/rɪˈstreɪnɪŋ/',
        korean_pronunciation: '리스트레이닝',
        part_of_speech: '동사 (현재분사)',
        definition_korean: '억제하다, 제한하다',
        usage_note: '헬라어 "pros plēsmonēn"은 만족/포만을 향해. 육체의 욕망을 채우는 것에 대한 억제.'
      },
      {
        word: 'sensual indulgence',
        ipa_pronunciation: '/ˈsɛnʃuəl ɪnˈdʌldʒəns/',
        korean_pronunciation: '센슈얼 인덜전스',
        part_of_speech: '명사구',
        definition_korean: '육체의 정욕, 감각적 탐닉',
        usage_note: '헬라어 "sarx"(육)의 만족. 죄된 본성의 욕구와 탐욕.'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 거짓 가르침에 대한 최종 평가를 내립니다. 그는 먼저 이러한 규정들이 "지혜의 외양을 가지고 있다"고 인정합니다. 자의적 숭배(자기가 고안한 경건 행위), 거짓 겸손(금욕을 통한 영적 우월감), 몸을 가혹하게 다루는 것(고행, 금식, 자해적 수행) 등은 겉으로 보기에 매우 경건하고 영적으로 보입니다. 사람들은 이러한 극단적 헌신을 존경하고 지혜롭다고 여길 수 있습니다. 그러나 "but"(그러나)로 시작되는 결정적 비판이 따릅니다: "육체의 정욕을 억제하는 데는 아무 가치가 없습니다." 이것이 핵심입니다. 진정한 영성의 목적은 죄된 본성을 다스리고 하나님의 형상으로 변화되는 것입니다. 그러나 외적 규칙과 금욕은 내적 변화를 일으키지 못합니다. 오히려 율법주의는 종종 교만(내가 이것을 지켰다), 위선(겉과 속이 다름), 판단(나보다 못한 자들을 정죄함)을 낳습니다. 바리새인들이 그 실례입니다. 그들은 외적으로는 흠 없어 보였지만, 예수님께서는 "회칠한 무덤"(마태복음 23:27)이라 부르셨습니다. 참된 변화는 성령의 역사로 이루어집니다(갈라디아서 5:16-25). 성령 안에서 행하면 육체의 욕심을 이루지 않습니다(갈라디아서 5:16). 이것이 그리스도 안에서의 자유입니다.',
      cross_references: ['Galatians 5:16-25', 'Matthew 23:25-28', '1 Timothy 4:8', 'Romans 8:13']
    },
    korean_translation: {
      natural_translation: '그러한 규정들은 자의적 숭배, 거짓 겸손, 몸을 가혹하게 다루는 것으로 지혜의 외양을 가지고 있으나, 육체의 정욕을 억제하는 데는 아무 가치가 없습니다.',
      translation_notes: '"appearance of wisdom"을 "지혜의 외양"으로 번역하여 겉모습과 실체의 대조를 강조. "lack any value"는 "아무 가치가 없습니다"로 완전한 무용성을 표현.'
    },
    special_explanation: {
      explanation_type: '율법주의와 복음의 대조',
      content: '이 구절은 율법주의(외적 규칙)와 복음(내적 변화)의 근본적 차이를 폭로합니다. 율법주의의 함정: (1) 외양에 집중: "지혜의 외양"은 있으나 실제 지혜는 없습니다. (2) 인간 노력 의존: "자의적 숭배"는 하나님이 명하지 않은 자기 발명입니다. (3) 자기 의: "거짓 겸손"은 겸손의 탈을 쓴 교만입니다. (4) 고행 숭배: "몸을 가혹하게 다루는 것"은 영적 우월감을 주지만 실제 변화는 없습니다. (5) 무능함: "육체의 정욕을 억제하는 데 아무 가치가 없습니다." 복음의 능력은 이와 대조됩니다: (1) 내적 변화: 성령께서 마음을 새롭게 하십니다(에스겔 36:26-27). (2) 하나님의 은혜: 구원과 성화는 모두 하나님의 선물입니다(에베소서 2:8-10). (3) 진정한 겸손: 자기 의를 버리고 그리스도를 의지합니다(빌립보서 3:7-9). (4) 성령의 열매: 외적 규칙이 아닌 성령의 역사로 변화됩니다(갈라디아서 5:22-23). (5) 실제 능력: "성령으로 몸의 행실을 죽이면 살리라"(로마서 8:13). 바울의 메시지는 분명합니다: 그리스도만으로 충분합니다. 외적 규칙, 금욕, 신비 체험을 더할 필요가 없습니다. 그리스도 안에서 우리는 이미 완전함을 얻었습니다(2:10).',
      examples: [
        '갈라디아서 5:16 - "내가 이르노니 너희는 성령을 따라 행하라 그리하면 육체의 욕심을 이루지 아니하리라"',
        '로마서 8:3-4 - "율법이 육신으로 말미암아 연약하여 할 수 없는 그것을 하나님은 하시나니 곧 죄로 말미암아 자기 아들을 죄 있는 육신의 모양으로 보내어 육신에 죄를 정죄하사 육신을 따르지 않고 그 영을 따라 행하는 우리에게 율법의 요구가 이루어지게 하려 하심이니라"',
        '에베소서 2:10 - "우리는 그가 만드신 바라 그리스도 예수 안에서 선한 일을 위하여 지으심을 받은 자니 이 일은 하나님이 전에 예비하사 우리로 그 가운데서 행하게 하려 하심이니라"'
      ]
    }
  }
]

async function main() {
  console.log('골로새서 2:13-23 (11개 구절) 분석 결과를 데이터베이스에 저장합니다.\n')

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting: 1초 대기
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n=== 저장 완료 ===')
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
  console.log(`총: ${analyses.length}개`)

  process.exit(failCount > 0 ? 1 : 0)
}

main()
