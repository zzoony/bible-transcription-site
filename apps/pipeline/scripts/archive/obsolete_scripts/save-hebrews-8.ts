import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const hebrews8Analyses: AnalysisData[] = [
  // Hebrews 8:1
  {
    reference: 'Hebrews 8:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '핵심 요점 제시',
        original_text: 'Now the main point of what we are saying is this:',
        korean_translation: '이제 우리가 말하는 요점은 이것입니다:',
        grammatical_explanation: '명사절을 도입하는 담화 표지. "the main point"가 주어, "is"가 동사, "this"가 보어로 뒤따르는 설명을 예고함'
      },
      {
        sequence_order: 2,
        semantic_classification: '대제사장의 존재 선언',
        original_text: 'We do have such a high priest,',
        korean_translation: '우리에게는 그러한 대제사장이 계십니다,',
        grammatical_explanation: '강조 구문 "do have"를 사용하여 대제사장의 존재를 확증. "such"는 앞서 논의된 특성을 지칭'
      },
      {
        sequence_order: 3,
        semantic_classification: '대제사장의 위치 묘사',
        original_text: 'who sat down at the right hand of the throne of the Majesty in heaven',
        korean_translation: '하늘에 계신 지극히 높으신 분의 보좌 우편에 앉으신 분',
        grammatical_explanation: '관계절로 대제사장을 수식. "sat down"은 완료된 사역을 나타내며, "at the right hand"는 최고의 권위와 영예의 위치를 의미'
      }
    ],
    vocabulary: [
      {
        word: 'point',
        ipa_pronunciation: '/pɔɪnt/',
        korean_pronunciation: '포인트',
        part_of_speech: '명사',
        definition_korean: '요점, 핵심',
        usage_note: '논증의 중심 주장을 나타냄'
      },
      {
        word: 'high priest',
        ipa_pronunciation: '/haɪ priːst/',
        korean_pronunciation: '하이 프리스트',
        part_of_speech: '명사구',
        definition_korean: '대제사장',
        usage_note: '유대교 제사장 체계의 최고 직위. 예수님을 가리킴'
      },
      {
        word: 'sat down',
        ipa_pronunciation: '/sæt daʊn/',
        korean_pronunciation: '샛 다운',
        part_of_speech: '동사구 (과거)',
        definition_korean: '앉다',
        usage_note: '사역의 완성을 나타내는 신학적 표현'
      },
      {
        word: 'right hand',
        ipa_pronunciation: '/raɪt hænd/',
        korean_pronunciation: '라잇 핸드',
        part_of_speech: '명사구',
        definition_korean: '오른편, 우편',
        usage_note: '최고의 권위와 명예의 위치'
      },
      {
        word: 'throne',
        ipa_pronunciation: '/θroʊn/',
        korean_pronunciation: '쓰론',
        part_of_speech: '명사',
        definition_korean: '왕좌, 보좌',
        usage_note: '왕권과 통치권을 상징'
      },
      {
        word: 'Majesty',
        ipa_pronunciation: '/ˈmædʒəsti/',
        korean_pronunciation: '매저스티',
        part_of_speech: '명사',
        definition_korean: '위엄, 존귀함 (하나님을 지칭)',
        usage_note: '대문자로 시작하여 하나님을 경칭으로 표현'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 저자는 7장까지 예수님의 대제사장직에 대해 상세히 논의한 후, 8장 서두에서 핵심 요점을 명확히 정리합니다. 예수님은 단순히 지상의 성소에서 섬기는 제사장이 아니라, 하늘 성소에서 섬기시며 하나님의 보좌 우편에 앉으신 분입니다. "앉으셨다"는 표현은 구약의 제사장들이 항상 서서 섬긴 것과 대조를 이루며, 예수님의 제사 사역이 완전히 완성되었음을 나타냅니다. 보좌 우편은 시편 110:1의 메시아적 예언을 성취하며, 최고의 권위와 영예를 상징합니다. 이는 독자들에게 예수님의 대제사장직이 구약의 레위 제사장직보다 월등히 우월함을 강조합니다.',
      cross_references: ['Psalm 110:1', 'Hebrews 1:3', 'Hebrews 10:12', 'Mark 16:19', 'Ephesians 1:20']
    },
    korean_translation: {
      natural_translation: '이제 우리가 말하는 요점은 이것입니다. 우리에게는 그러한 대제사장이 계시는데, 그분은 하늘에 계신 지극히 높으신 분의 보좌 우편에 앉으셨습니다.',
      translation_notes: '"the Majesty in heaven"을 "하늘에 계신 지극히 높으신 분"으로 의역하여 하나님에 대한 경외감을 표현'
    },
    special_explanation: {
      explanation_type: '신학적 의의',
      content: '이 구절은 히브리서의 중심 신학을 압축적으로 제시합니다. 예수님의 "앉으심"은 구약 제사장들이 결코 누리지 못한 특권이며, 그의 제사 사역이 완전하고 최종적임을 나타냅니다. 보좌 우편이라는 위치는 단순한 공간적 위치가 아니라, 통치권과 중보 사역의 효력을 상징합니다.',
      examples: ['구약 제사장들은 날마다 서서 같은 제사를 반복했으나, 예수님은 단번에 완전한 제사를 드리고 앉으셨습니다 (히 10:11-12)']
    }
  },

  // Hebrews 8:2
  {
    reference: 'Hebrews 8:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '성소에서의 섬김 묘사',
        original_text: 'and who serves in the sanctuary, the true tabernacle',
        korean_translation: '그분은 성소, 곧 참된 장막에서 섬기시는데',
        grammatical_explanation: '관계절로 대제사장을 추가 설명. "the true tabernacle"은 "the sanctuary"와 동격 관계'
      },
      {
        sequence_order: 2,
        semantic_classification: '장막의 기원 설명',
        original_text: 'set up by the Lord, not by a mere human being',
        korean_translation: '이것은 주님께서 세우신 것이요 사람이 세운 것이 아닙니다',
        grammatical_explanation: '과거분사구로 장막의 기원을 대조. "by the Lord"와 "by a mere human being"을 병렬 구조로 대비시킴'
      }
    ],
    vocabulary: [
      {
        word: 'serves',
        ipa_pronunciation: '/sɜːrvz/',
        korean_pronunciation: '서브즈',
        part_of_speech: '동사',
        definition_korean: '섬기다, 봉사하다',
        usage_note: '제사장의 직무 수행을 나타냄'
      },
      {
        word: 'sanctuary',
        ipa_pronunciation: '/ˈsæŋktʃueri/',
        korean_pronunciation: '생추어리',
        part_of_speech: '명사',
        definition_korean: '성소, 거룩한 곳',
        usage_note: '하나님께서 임재하시는 거룩한 장소'
      },
      {
        word: 'true',
        ipa_pronunciation: '/truː/',
        korean_pronunciation: '트루',
        part_of_speech: '형용사',
        definition_korean: '참된, 진정한',
        usage_note: '지상 성막과 대조하여 하늘 성소의 실재성을 강조'
      },
      {
        word: 'tabernacle',
        ipa_pronunciation: '/ˈtæbərnækəl/',
        korean_pronunciation: '태버내클',
        part_of_speech: '명사',
        definition_korean: '장막, 성막',
        usage_note: '구약시대 하나님을 예배하던 이동식 성소'
      },
      {
        word: 'set up',
        ipa_pronunciation: '/set ʌp/',
        korean_pronunciation: '셋 업',
        part_of_speech: '동사구',
        definition_korean: '세우다, 건립하다',
        usage_note: '장막의 건립을 나타냄'
      },
      {
        word: 'mere',
        ipa_pronunciation: '/mɪr/',
        korean_pronunciation: '미어',
        part_of_speech: '형용사',
        definition_korean: '단순한, 불과한',
        usage_note: '인간의 제한성을 강조하는 표현'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '예수님은 지상의 성막이 아닌 하늘의 참 성소에서 섬기십니다. 출애굽기에서 모세가 하나님의 지시에 따라 세운 성막은 하늘에 있는 원형의 모형이었습니다. 저자는 "참된"이라는 형용사를 사용하여 하늘 성소가 실재이며, 지상 성소는 그림자에 불과함을 강조합니다. 또한 "주님께서 세우신"과 "사람이 세운"을 대조시켜, 하늘 성소의 신적 기원과 영원성을 부각시킵니다. 이는 플라톤적 사상의 영향을 받은 표현으로, 하늘의 원형과 지상의 모형이라는 개념 틀을 사용합니다.',
      cross_references: ['Exodus 25:40', 'Hebrews 9:11', 'Hebrews 9:24', 'Revelation 15:5']
    },
    korean_translation: {
      natural_translation: '그분은 성소, 곧 참된 장막에서 섬기시는데, 이것은 주님께서 세우신 것이요 사람이 세운 것이 아닙니다.',
      translation_notes: '"a mere human being"을 "사람"으로 간결하게 번역하되, 앞의 "주님"과의 대조를 명확히 함'
    }
  },

  // Hebrews 8:3
  {
    reference: 'Hebrews 8:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대제사장의 직무 규정',
        original_text: 'Every high priest is appointed to offer both gifts and sacrifices,',
        korean_translation: '모든 대제사장은 예물과 제사를 드리도록 임명되었으므로,',
        grammatical_explanation: '수동태 부정사구로 대제사장의 임명 목적을 설명. "both...and" 구조로 두 종류의 헌물을 병렬'
      },
      {
        sequence_order: 2,
        semantic_classification: '논리적 필연성 제시',
        original_text: 'and so it was necessary for this one also to have something to offer',
        korean_translation: '이 대제사장도 드릴 것을 가지셔야 했습니다',
        grammatical_explanation: '"it was necessary"는 비인칭 구문으로 필연성을 표현. "to have something to offer"는 목적을 나타내는 부정사구'
      }
    ],
    vocabulary: [
      {
        word: 'appointed',
        ipa_pronunciation: '/əˈpɔɪntɪd/',
        korean_pronunciation: '어포인티드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '임명되다, 지정되다',
        usage_note: '공식적인 직무 위임을 나타냄'
      },
      {
        word: 'offer',
        ipa_pronunciation: '/ˈɔːfər/',
        korean_pronunciation: '오퍼',
        part_of_speech: '동사',
        definition_korean: '드리다, 바치다',
        usage_note: '제사 행위를 나타내는 기술적 용어'
      },
      {
        word: 'gifts',
        ipa_pronunciation: '/gɪfts/',
        korean_pronunciation: '기프츠',
        part_of_speech: '명사 (복수)',
        definition_korean: '예물, 선물',
        usage_note: '피를 흘리지 않는 헌물을 지칭 (곡식, 과일 등)'
      },
      {
        word: 'sacrifices',
        ipa_pronunciation: '/ˈsækrɪfaɪsɪz/',
        korean_pronunciation: '새크리파이시즈',
        part_of_speech: '명사 (복수)',
        definition_korean: '제사, 희생제물',
        usage_note: '피를 흘리는 헌물을 지칭 (동물 제사)'
      },
      {
        word: 'necessary',
        ipa_pronunciation: '/ˈnesəseri/',
        korean_pronunciation: '네서서리',
        part_of_speech: '형용사',
        definition_korean: '필요한, 필수적인',
        usage_note: '불가피한 요구사항을 나타냄'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '대제사장의 본질적 직무는 하나님께 예물과 제사를 드리는 것입니다. 저자는 이 보편적 원칙을 먼저 제시한 후, 예수님도 대제사장이시므로 드릴 제물이 필요했다는 논리를 전개합니다. "예물"은 피를 흘리지 않는 소제나 화목제를 가리키고, "제사"는 피를 흘리는 속죄제나 번제를 의미합니다. 이 구절은 예수님의 십자가 희생을 암시하며, 그분도 대제사장으로서 드릴 제물, 즉 자신의 몸을 가지셔야 했음을 논증합니다. 이는 5장에서 언급된 "자기를 드린" 개념과 연결됩니다.',
      cross_references: ['Hebrews 5:1', 'Hebrews 7:27', 'Hebrews 9:9', 'Hebrews 10:8']
    },
    korean_translation: {
      natural_translation: '모든 대제사장은 예물과 제사를 드리도록 임명되었으므로, 이 대제사장도 드릴 것을 가지셔야 했습니다.',
      translation_notes: '"this one"을 "이 대제사장"으로 명시하여 예수님을 지칭함을 분명히 함'
    }
  },

  // Hebrews 8:4
  {
    reference: 'Hebrews 8:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '반사실적 조건문',
        original_text: 'If he were on earth, he would not be a priest,',
        korean_translation: '만일 그분이 땅에 계셨다면, 제사장이 되지 못하셨을 것입니다,',
        grammatical_explanation: '가정법 과거로 현재 사실과 반대되는 상황을 가정. "were"와 "would not be"의 조합'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유 설명',
        original_text: 'for there are already priests who offer the gifts prescribed by the law',
        korean_translation: '왜냐하면 율법에 따라 예물을 드리는 제사장들이 이미 있기 때문입니다',
        grammatical_explanation: '"for" 접속사로 이유를 도입. 관계절 "who offer..."가 priests를 수식'
      }
    ],
    vocabulary: [
      {
        word: 'earth',
        ipa_pronunciation: '/ɜːrθ/',
        korean_pronunciation: '어스',
        part_of_speech: '명사',
        definition_korean: '땅, 지상',
        usage_note: '하늘과 대조되는 물리적 세계'
      },
      {
        word: 'already',
        ipa_pronunciation: '/ɔːlˈredi/',
        korean_pronunciation: '올레디',
        part_of_speech: '부사',
        definition_korean: '이미, 벌써',
        usage_note: '기존 제사장 제도의 존재를 강조'
      },
      {
        word: 'prescribed',
        ipa_pronunciation: '/prɪˈskraɪbd/',
        korean_pronunciation: '프리스크라입드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '규정된, 지시된',
        usage_note: '율법에 의해 정해진 것을 나타냄'
      },
      {
        word: 'law',
        ipa_pronunciation: '/lɔː/',
        korean_pronunciation: '로',
        part_of_speech: '명사',
        definition_korean: '율법, 법',
        usage_note: '모세 율법을 지칭'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 예수님의 제사장직이 레위 제사장직과 근본적으로 다른 차원임을 논증합니다. 예수님은 유다 지파 출신으로 (히 7:14), 모세 율법에 따르면 제사장이 될 자격이 없었습니다. 율법은 오직 레위 지파, 특히 아론의 후손만이 제사장이 될 수 있도록 규정했습니다. 따라서 만약 예수님의 제사장직이 지상의 성전 체계에 국한되었다면, 그분은 제사장이 될 수 없었을 것입니다. 그러나 예수님은 하늘 성소에서 섬기시므로, 레위 제사장직과는 다른 차원의 대제사장이십니다. 이는 멜기세덱의 반차를 따르는 영원한 제사장직 (히 7장)의 논증과 연결됩니다.',
      cross_references: ['Hebrews 7:14', 'Numbers 3:10', 'Numbers 18:7', 'Hebrews 9:6-7']
    },
    korean_translation: {
      natural_translation: '만일 그분이 땅에 계셨다면, 제사장이 되지 못하셨을 것입니다. 왜냐하면 율법에 따라 예물을 드리는 제사장들이 이미 있기 때문입니다.',
      translation_notes: '가정법 구조를 한국어의 "-었다면, -못하셨을 것입니다" 형태로 자연스럽게 번역'
    },
    special_explanation: {
      explanation_type: '문법적 특징',
      content: '이 구절은 가정법 과거 (second conditional)를 사용하여 현재 사실과 반대되는 가정을 제시합니다. 예수님은 실제로 땅에 계시지 않고 하늘에 계시므로, "were"와 "would not be"의 조합이 적절합니다. 이는 단순한 가정이 아니라, 신학적 진리를 논증하기 위한 수사적 장치입니다.',
      examples: ['만약 그분이 지상 제사장이었다면 (사실이 아님) → 제사장이 되지 못했을 것임 (결과도 사실이 아님)']
    }
  },

  // Hebrews 8:5
  {
    reference: 'Hebrews 8:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '지상 제사장의 섬김 묘사',
        original_text: 'They serve at a sanctuary that is a copy and shadow of what is in heaven.',
        korean_translation: '그들은 하늘에 있는 것의 모형과 그림자인 성소에서 섬깁니다.',
        grammatical_explanation: '"that is a copy and shadow"는 관계절로 sanctuary를 수식. "of what is in heaven"은 전치사구로 원형을 지칭'
      },
      {
        sequence_order: 2,
        semantic_classification: '성경 인용 도입',
        original_text: 'This is why Moses was warned when he was about to build the tabernacle:',
        korean_translation: '이것이 모세가 장막을 지으려 할 때 경고를 받은 이유입니다:',
        grammatical_explanation: '"This is why" 구문으로 원인-결과 관계를 설정. "when he was about to"는 시간절로 막 하려던 시점을 나타냄'
      },
      {
        sequence_order: 3,
        semantic_classification: '하나님의 명령 인용',
        original_text: '"See to it that you make everything according to the pattern shown you on the mountain."',
        korean_translation: '"산에서 네게 보인 본을 따라 모든 것을 만들도록 주의하라."',
        grammatical_explanation: '명령문으로 "See to it that"는 강한 지시를 나타냄. "according to the pattern"은 기준을 제시하는 전치사구'
      }
    ],
    vocabulary: [
      {
        word: 'copy',
        ipa_pronunciation: '/ˈkɑːpi/',
        korean_pronunciation: '카피',
        part_of_speech: '명사',
        definition_korean: '모형, 복사본',
        usage_note: '원본의 모조품을 의미'
      },
      {
        word: 'shadow',
        ipa_pronunciation: '/ˈʃædoʊ/',
        korean_pronunciation: '새도우',
        part_of_speech: '명사',
        definition_korean: '그림자, 그늘',
        usage_note: '실체를 희미하게 반영하는 것'
      },
      {
        word: 'warned',
        ipa_pronunciation: '/wɔːrnd/',
        korean_pronunciation: '원드',
        part_of_speech: '동사 (과거)',
        definition_korean: '경고하다, 주의를 주다',
        usage_note: '엄중한 지시를 받음'
      },
      {
        word: 'about to',
        ipa_pronunciation: '/əˈbaʊt tuː/',
        korean_pronunciation: '어바웃 투',
        part_of_speech: '구동사',
        definition_korean: '막 ~하려고 하다',
        usage_note: '임박한 행동을 나타냄'
      },
      {
        word: 'pattern',
        ipa_pronunciation: '/ˈpætərn/',
        korean_pronunciation: '패턴',
        part_of_speech: '명사',
        definition_korean: '본, 모범, 양식',
        usage_note: '따라야 할 원형'
      },
      {
        word: 'according to',
        ipa_pronunciation: '/əˈkɔːrdɪŋ tuː/',
        korean_pronunciation: '어코딩 투',
        part_of_speech: '전치사구',
        definition_korean: '~에 따라',
        usage_note: '준수해야 할 기준을 제시'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '저자는 출애굽기 25:40을 인용하여 지상 성막이 하늘 원형의 모형임을 논증합니다. 플라톤 철학의 영향을 받은 이 개념은 보이는 세계가 보이지 않는 실재의 그림자라는 사상과 연결됩니다. 모세가 시내산에서 받은 지시는 단순한 건축 지침이 아니라, 하늘의 영원한 실재를 지상에서 표현하는 신학적 청사진이었습니다. "모형"과 "그림자"라는 표현은 지상 성막의 제한성과 임시성을 강조하며, 이제 그리스도께서 참된 하늘 성소에서 섬기시므로 구약의 제사 제도는 그 역할을 다했음을 암시합니다. 이는 골로새서 2:17의 "실체는 그리스도" 개념과 일맥상통합니다.',
      cross_references: ['Exodus 25:40', 'Hebrews 10:1', 'Colossians 2:17', 'Hebrews 9:23-24']
    },
    korean_translation: {
      natural_translation: '그들은 하늘에 있는 것의 모형과 그림자인 성소에서 섬깁니다. 이것이 모세가 장막을 지으려 할 때 경고를 받은 이유입니다. "산에서 네게 보인 본을 따라 모든 것을 만들도록 주의하라."',
      translation_notes: '"pattern"을 "본"으로 번역하여 한국어 성경 번역 전통을 따름'
    },
    special_explanation: {
      explanation_type: '신학적 배경',
      content: '이 구절의 "모형과 그림자" 개념은 헬레니즘 유대교, 특히 필로의 사상과 연결됩니다. 지상의 것들은 천상의 원형을 반영하는 불완전한 모사품이며, 참된 실재는 하늘에 있다는 사상입니다. 그러나 히브리서는 이를 단순한 철학적 관념이 아니라, 그리스도의 우월한 제사장직을 논증하는 도구로 사용합니다.',
      examples: ['지상 성막 = 모형과 그림자 vs 하늘 성소 = 참된 실재', '레위 제사장 = 반복적이고 불완전 vs 그리스도 = 완전하고 최종적']
    }
  },

  // Hebrews 8:6
  {
    reference: 'Hebrews 8:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '우월성 선언',
        original_text: 'But in fact the ministry Jesus has received is as superior to theirs',
        korean_translation: '그러나 실제로 예수님께서 받으신 직분은 그들의 것보다 훨씬 더 뛰어납니다',
        grammatical_explanation: '"as superior to"는 비교급 구문. "in fact"는 강조 부사구로 실재를 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '언약의 우월성 비교',
        original_text: 'as the covenant of which he is mediator is superior to the old one,',
        korean_translation: '그분이 중보자이신 언약이 옛 언약보다 더 뛰어난 것처럼,',
        grammatical_explanation: '"as...as" 구조로 두 가지 우월성을 병렬 비교. "of which he is mediator"는 관계절'
      },
      {
        sequence_order: 3,
        semantic_classification: '새 언약의 기초 설명',
        original_text: 'since the new covenant is established on better promises',
        korean_translation: '새 언약은 더 나은 약속들 위에 세워졌기 때문입니다',
        grammatical_explanation: '"since" 접속사로 이유를 제시. "is established on"은 수동태로 기초를 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'ministry',
        ipa_pronunciation: '/ˈmɪnɪstri/',
        korean_pronunciation: '미니스트리',
        part_of_speech: '명사',
        definition_korean: '직분, 사역',
        usage_note: '제사장의 공식적 직무'
      },
      {
        word: 'superior',
        ipa_pronunciation: '/suːˈpɪriər/',
        korean_pronunciation: '수피리어',
        part_of_speech: '형용사',
        definition_korean: '더 뛰어난, 우월한',
        usage_note: '비교급 의미로 사용'
      },
      {
        word: 'covenant',
        ipa_pronunciation: '/ˈkʌvənənt/',
        korean_pronunciation: '커버넌트',
        part_of_speech: '명사',
        definition_korean: '언약, 계약',
        usage_note: '하나님과 인간 사이의 신성한 약속'
      },
      {
        word: 'mediator',
        ipa_pronunciation: '/ˈmiːdieɪtər/',
        korean_pronunciation: '미디에이터',
        part_of_speech: '명사',
        definition_korean: '중보자, 중재자',
        usage_note: '두 당사자 사이를 연결하는 자'
      },
      {
        word: 'established',
        ipa_pronunciation: '/ɪˈstæblɪʃt/',
        korean_pronunciation: '이스태블리쉬트',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '세워지다, 확립되다',
        usage_note: '견고하게 기초를 놓음'
      },
      {
        word: 'promises',
        ipa_pronunciation: '/ˈprɑːmɪsɪz/',
        korean_pronunciation: '프라미시즈',
        part_of_speech: '명사 (복수)',
        definition_korean: '약속들',
        usage_note: '하나님의 신실한 보증들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 히브리서 8장의 핵심 논지를 압축합니다. 예수님의 제사장 직분이 레위 제사장직보다 우월한 이유는 그분이 중보하시는 언약 자체가 더 뛰어나기 때문입니다. "더 나은"(better)이라는 단어는 히브리서의 키워드로, 그리스도 안에서 주어진 모든 것이 구약 체계보다 우월함을 강조합니다. 새 언약은 "더 나은 약속들" 위에 세워졌는데, 이는 8-12절에서 예레미야 31:31-34를 인용하여 구체화됩니다. 옛 언약은 돌판에 새겨진 외적 율법이었으나, 새 언약은 마음에 기록되는 내적 변화, 완전한 죄 사함, 그리고 모든 사람이 하나님을 아는 직접적 관계를 약속합니다. 예수님은 이 새 언약의 중보자로서, 하나님과 인간 사이를 연결하시며 언약의 모든 복을 보장하십니다.',
      cross_references: ['Hebrews 7:22', 'Hebrews 9:15', 'Hebrews 12:24', '1 Timothy 2:5', 'Jeremiah 31:31-34']
    },
    korean_translation: {
      natural_translation: '그러나 실제로 예수님께서 받으신 직분은 그들의 것보다 훨씬 더 뛰어납니다. 그분이 중보자이신 언약이 옛 언약보다 더 뛰어난 것처럼, 새 언약은 더 나은 약속들 위에 세워졌기 때문입니다.',
      translation_notes: '"as...as" 구조를 한국어의 자연스러운 비교 표현으로 번역'
    },
    special_explanation: {
      explanation_type: '키워드 분석',
      content: '히브리서는 "더 나은"(better, superior)이라는 용어를 전략적으로 사용합니다: 더 나은 소망 (7:19), 더 나은 언약 (8:6), 더 나은 제사 (9:23), 더 나은 소유 (10:34), 더 나은 본향 (11:16), 더 나은 부활 (11:35). 이는 구약 체계의 불완전성과 그리스도 안에서의 완전한 성취를 대조합니다.',
      examples: []
    }
  },

  // Hebrews 8:7
  {
    reference: 'Hebrews 8:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '반사실적 조건문',
        original_text: 'For if there had been nothing wrong with that first covenant,',
        korean_translation: '만일 첫 번째 언약에 아무 잘못이 없었더라면,',
        grammatical_explanation: '가정법 과거완료로 과거 사실과 반대되는 조건 제시. "there had been"은 존재를 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '반사실적 결과절',
        original_text: 'no place would have been sought for another',
        korean_translation: '다른 언약을 찾지 않았을 것입니다',
        grammatical_explanation: '"would have been sought"는 가정법 과거완료의 결과절. 수동태로 "찾아지다"의 의미'
      }
    ],
    vocabulary: [
      {
        word: 'wrong',
        ipa_pronunciation: '/rɔːŋ/',
        korean_pronunciation: '롱',
        part_of_speech: '형용사',
        definition_korean: '잘못된, 결함이 있는',
        usage_note: '완전하지 못함을 나타냄'
      },
      {
        word: 'first',
        ipa_pronunciation: '/fɜːrst/',
        korean_pronunciation: '퍼스트',
        part_of_speech: '형용사',
        definition_korean: '첫 번째',
        usage_note: '시간적 순서상 먼저 온 것'
      },
      {
        word: 'sought',
        ipa_pronunciation: '/sɔːt/',
        korean_pronunciation: '소트',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '찾다 (seek의 과거분사)',
        usage_note: '의도적으로 추구함'
      },
      {
        word: 'another',
        ipa_pronunciation: '/əˈnʌðər/',
        korean_pronunciation: '어너더',
        part_of_speech: '대명사',
        definition_korean: '다른 것',
        usage_note: '추가적이거나 대체적인 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '저자는 논리적 논증을 사용합니다. 하나님께서 예레미야를 통해 "새 언약"을 약속하셨다는 사실 자체가 첫 번째 언약의 불완전성을 입증한다는 것입니다. 만약 시내산 언약이 완전했다면, 하나님께서 새로운 언약을 예고하실 필요가 없었을 것입니다. 그러나 예레미야 31:31-34에서 하나님은 명백히 "새 언약"을 선포하셨으므로, 이는 옛 언약이 어떤 면에서 부족했음을 의미합니다. 여기서 "잘못"은 언약 자체의 도덕적 결함이 아니라, 죄 문제를 근본적으로 해결하고 하나님과의 완전한 관계를 회복시키는 능력의 부재를 가리킵니다. 옛 언약은 하나님의 거룩한 기준을 드러냈지만, 사람들에게 그것을 지킬 능력을 주지 못했습니다.',
      cross_references: ['Jeremiah 31:31-34', 'Galatians 3:21', 'Romans 8:3', 'Hebrews 7:18-19']
    },
    korean_translation: {
      natural_translation: '만일 첫 번째 언약에 아무 잘못이 없었더라면, 다른 언약을 찾지 않았을 것입니다.',
      translation_notes: '가정법 과거완료를 한국어의 "-었더라면, -않았을 것입니다" 구조로 번역'
    }
  },

  // Hebrews 8:8
  {
    reference: 'Hebrews 8:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '하나님의 불만 표현',
        original_text: 'But God found fault with the people and said:',
        korean_translation: '그러나 하나님께서는 백성들의 잘못을 지적하시며 말씀하셨습니다:',
        grammatical_explanation: '"found fault with"는 비판을 나타내는 동사구. "and said"로 직접 인용을 도입'
      },
      {
        sequence_order: 2,
        semantic_classification: '예언적 선포',
        original_text: '"The days are coming, declares the Lord,"',
        korean_translation: '"보라, 때가 이르리니, 주님께서 말씀하시되,"',
        grammatical_explanation: '미래를 예고하는 현재진행형 "are coming". "declares the Lord"는 삽입절로 권위를 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '새 언약의 약속',
        original_text: '"when I will make a new covenant with the people of Israel and with the people of Judah."',
        korean_translation: '"내가 이스라엘 백성과 유다 백성과 새 언약을 맺으리라."',
        grammatical_explanation: '"when" 절로 시간을 명시. "with the people of Israel and with the people of Judah"는 병렬 구조로 언약 대상을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'found fault',
        ipa_pronunciation: '/faʊnd fɔːlt/',
        korean_pronunciation: '파운드 폴트',
        part_of_speech: '동사구',
        definition_korean: '잘못을 찾아내다, 비난하다',
        usage_note: '결함이나 부족함을 지적함'
      },
      {
        word: 'declares',
        ipa_pronunciation: '/dɪˈklerz/',
        korean_pronunciation: '디클레어즈',
        part_of_speech: '동사',
        definition_korean: '선언하다, 공표하다',
        usage_note: '공식적이고 권위 있는 발언'
      },
      {
        word: 'covenant',
        ipa_pronunciation: '/ˈkʌvənənt/',
        korean_pronunciation: '커버넌트',
        part_of_speech: '명사',
        definition_korean: '언약',
        usage_note: '신성한 약속과 관계'
      },
      {
        word: 'Israel',
        ipa_pronunciation: '/ˈɪzreɪəl/',
        korean_pronunciation: '이즈레일',
        part_of_speech: '고유명사',
        definition_korean: '이스라엘 (북왕국)',
        usage_note: '야곱의 자손, 또는 분열 왕국 시대의 북왕국'
      },
      {
        word: 'Judah',
        ipa_pronunciation: '/ˈdʒuːdə/',
        korean_pronunciation: '주다',
        part_of_speech: '고유명사',
        definition_korean: '유다 (남왕국)',
        usage_note: '분열 왕국 시대의 남왕국'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '저자는 예레미야 31:31-34의 인용을 시작합니다. 이는 구약에서 "새 언약"이라는 표현이 명시적으로 등장하는 유일한 구절입니다. 중요한 점은 하나님이 "백성들"의 잘못을 지적하셨다는 것입니다. 언약 자체가 결함이 있는 것이 아니라, 백성들이 언약을 지키지 못했기 때문에 새로운 언약이 필요했습니다. "이스라엘 백성과 유다 백성"이라는 표현은 예레미야 시대의 역사적 상황을 반영하는데, 북왕국 이스라엘은 이미 멸망했고 (BC 722), 남왕국 유다도 바벨론 포로로 가게 될 상황이었습니다. 그러나 하나님은 분열되고 흩어진 백성 전체를 회복시키고 하나로 통합하는 새 언약을 약속하십니다. 이 새 언약은 예수 그리스도의 피로 비준되었으며 (눅 22:20), 유대인과 이방인 모두를 포함하는 보편적 언약입니다.',
      cross_references: ['Jeremiah 31:31-34', 'Luke 22:20', 'Ezekiel 36:26-27', 'Romans 11:25-27']
    },
    korean_translation: {
      natural_translation: '그러나 하나님께서는 백성들의 잘못을 지적하시며 말씀하셨습니다. "보라, 때가 이르리니, 주님께서 말씀하시되, 내가 이스라엘 백성과 유다 백성과 새 언약을 맺으리라."',
      translation_notes: '"The days are coming"을 "보라, 때가 이르리니"로 예언적 어조를 살림'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '예레미야가 이 예언을 선포한 시기는 BC 587년 예루살렘 멸망 직전이었습니다. 바벨론 포로라는 언약 저주가 임박한 상황에서, 하나님은 놀랍게도 회복과 새로운 시작을 약속하셨습니다. 이 새 언약은 단순한 옛 언약의 갱신이 아니라, 질적으로 다른 차원의 언약입니다.',
      examples: []
    }
  },

  // Hebrews 8:9
  {
    reference: 'Hebrews 8:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '새 언약의 차별성 선언',
        original_text: 'It will not be like the covenant I made with their ancestors',
        korean_translation: '이것은 내가 그들의 조상과 맺은 언약과 같지 않을 것이니',
        grammatical_explanation: '부정 미래 "will not be like"로 차이점을 강조. 관계절 "I made"가 covenant 수식'
      },
      {
        sequence_order: 2,
        semantic_classification: '출애굽 언약의 시기 언급',
        original_text: 'when I took them by the hand to lead them out of Egypt,',
        korean_translation: '내가 그들의 손을 잡고 이집트에서 인도하여 낼 때 맺은 언약과 같지 않을 것이다.',
        grammatical_explanation: '"when" 절로 언약 체결 시점을 명시. "to lead"는 목적을 나타내는 부정사'
      },
      {
        sequence_order: 3,
        semantic_classification: '백성의 불순종 지적',
        original_text: 'because they did not remain faithful to my covenant,',
        korean_translation: '왜냐하면 그들은 내 언약에 신실하지 못했고,',
        grammatical_explanation: '"because" 절로 이유 제시. "remain faithful to"는 지속적 충성을 나타냄'
      },
      {
        sequence_order: 4,
        semantic_classification: '하나님의 반응 서술',
        original_text: 'and I turned away from them, declares the Lord',
        korean_translation: '나도 그들을 돌보지 않았느니라, 주님께서 말씀하시느니라',
        grammatical_explanation: '"turned away from"은 관심과 보호를 거두심을 나타냄. "declares the Lord"는 권위 강조'
      }
    ],
    vocabulary: [
      {
        word: 'ancestors',
        ipa_pronunciation: '/ˈænsestərz/',
        korean_pronunciation: '앤세스터즈',
        part_of_speech: '명사 (복수)',
        definition_korean: '조상들',
        usage_note: '출애굽 세대를 가리킴'
      },
      {
        word: 'took...by the hand',
        ipa_pronunciation: '/tʊk baɪ ðə hænd/',
        korean_pronunciation: '툭 바이 더 핸드',
        part_of_speech: '동사구',
        definition_korean: '손을 잡다',
        usage_note: '부모가 어린아이를 인도하는 이미지'
      },
      {
        word: 'lead out',
        ipa_pronunciation: '/liːd aʊt/',
        korean_pronunciation: '리드 아웃',
        part_of_speech: '동사구',
        definition_korean: '이끌어 내다',
        usage_note: '출애굽을 묘사'
      },
      {
        word: 'remain faithful',
        ipa_pronunciation: '/rɪˈmeɪn ˈfeɪθfəl/',
        korean_pronunciation: '리메인 페이스풀',
        part_of_speech: '동사구',
        definition_korean: '신실하게 머물다',
        usage_note: '지속적인 충성과 순종'
      },
      {
        word: 'turned away',
        ipa_pronunciation: '/tɜːrnd əˈweɪ/',
        korean_pronunciation: '턴드 어웨이',
        part_of_speech: '동사구',
        definition_korean: '돌아서다, 외면하다',
        usage_note: '관계 단절이나 보호 철회'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '새 언약은 시내산 언약과 근본적으로 다릅니다. "손을 잡고"라는 표현은 하나님께서 출애굽 시 이스라엘을 부모가 어린아이를 인도하듯 사랑으로 이끄셨음을 나타냅니다. 이는 하나님의 은혜로운 주도권과 보호를 강조합니다. 그러나 이스라엘은 "언약에 신실하지 못했습니다." 이는 단순한 일시적 실수가 아니라, 사사기부터 바벨론 포로까지 지속된 반복적 배교를 가리킵니다. 결과적으로 하나님은 "그들을 돌보지 않으셨는데", 이는 언약의 축복을 거두시고 저주를 허락하신 것을 의미합니다 (포로, 성전 파괴 등). 이 구절은 옛 언약의 실패 원인이 하나님이 아니라 인간의 불신실함에 있음을 분명히 합니다. 따라서 새 언약은 인간의 능력에 의존하지 않고, 하나님의 내적 변화의 역사를 통해 순종을 가능케 하는 언약이어야 했습니다.',
      cross_references: ['Exodus 19:5-8', 'Judges 2:10-13', '2 Kings 17:7-23', 'Ezekiel 16:59-60']
    },
    korean_translation: {
      natural_translation: '이것은 내가 그들의 조상과 맺은 언약과 같지 않을 것이니, 내가 그들의 손을 잡고 이집트에서 인도하여 낼 때 맺은 언약과 같지 않을 것이다. 왜냐하면 그들은 내 언약에 신실하지 못했고, 나도 그들을 돌보지 않았느니라, 주님께서 말씀하시느니라.',
      translation_notes: '"turned away from them"을 "돌보지 않았다"로 번역하여 관계적 의미를 강조'
    }
  },

  // Hebrews 8:10
  {
    reference: 'Hebrews 8:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '새 언약의 정의',
        original_text: 'This is the covenant I will establish with the people of Israel after that time, declares the Lord.',
        korean_translation: '그 때 후에 내가 이스라엘 집과 맺을 언약은 이것이니, 주님께서 말씀하시되,',
        grammatical_explanation: '"This is the covenant"가 주절. "I will establish"은 관계절로 언약의 주체를 명시'
      },
      {
        sequence_order: 2,
        semantic_classification: '마음에 율법 두심',
        original_text: 'I will put my laws in their minds and write them on their hearts.',
        korean_translation: '내가 내 율법을 그들의 마음 속에 두고 그들의 마음에 기록하리니',
        grammatical_explanation: '병렬 구조 "put...in minds"와 "write...on hearts"로 내면화 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '언약 관계 선언',
        original_text: 'I will be their God, and they will be my people.',
        korean_translation: '나는 그들의 하나님이 되고 그들은 내 백성이 되리라.',
        grammatical_explanation: '상호적 언약 공식. "I will be"와 "they will be"의 병렬로 쌍방향 관계 표현'
      }
    ],
    vocabulary: [
      {
        word: 'establish',
        ipa_pronunciation: '/ɪˈstæblɪʃ/',
        korean_pronunciation: '이스태블리쉬',
        part_of_speech: '동사',
        definition_korean: '세우다, 확립하다',
        usage_note: '견고하게 기초를 놓다'
      },
      {
        word: 'laws',
        ipa_pronunciation: '/lɔːz/',
        korean_pronunciation: '로즈',
        part_of_speech: '명사 (복수)',
        definition_korean: '율법들, 법들',
        usage_note: '하나님의 계명과 규례'
      },
      {
        word: 'minds',
        ipa_pronunciation: '/maɪndz/',
        korean_pronunciation: '마인즈',
        part_of_speech: '명사 (복수)',
        definition_korean: '마음, 생각',
        usage_note: '사고와 이해의 중심'
      },
      {
        word: 'write',
        ipa_pronunciation: '/raɪt/',
        korean_pronunciation: '라잇',
        part_of_speech: '동사',
        definition_korean: '쓰다, 기록하다',
        usage_note: '영구적으로 새기다'
      },
      {
        word: 'hearts',
        ipa_pronunciation: '/hɑːrts/',
        korean_pronunciation: '하츠',
        part_of_speech: '명사 (복수)',
        definition_korean: '마음들',
        usage_note: '정서와 의지의 중심'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 새 언약의 핵심 특징을 제시합니다. 첫째, 율법의 내면화입니다. 시내산 언약은 돌판에 새겨진 외적 율법이었으나, 새 언약은 성령을 통해 마음에 기록되는 내적 변화입니다. "마음속"과 "마음에"는 히브리 사상에서 지성, 감정, 의지를 포함하는 전인격을 의미합니다. 이는 에스겔 36:26-27의 "새 마음과 새 영"의 약속과 일치하며, 성령의 내주하심을 통해 성취됩니다. 둘째, "나는 그들의 하나님, 그들은 내 백성"이라는 언약 공식은 구약 전체에 걸쳐 나타나는 언약 관계의 핵심입니다 (출 6:7, 레 26:12, 렘 7:23). 그러나 새 언약에서 이 관계는 더 이상 외적 준수에 기초하지 않고, 내적 변화와 성령의 역사로 보장됩니다. 이는 율법주의를 극복하고 복음의 은혜 안에서 자발적 순종을 가능케 합니다.',
      cross_references: ['Ezekiel 36:26-27', 'Jeremiah 31:33', '2 Corinthians 3:3', 'Romans 8:2-4']
    },
    korean_translation: {
      natural_translation: '그 때 후에 내가 이스라엘 집과 맺을 언약은 이것이니, 주님께서 말씀하시되, 내가 내 율법을 그들의 마음 속에 두고 그들의 마음에 기록하리니, 나는 그들의 하나님이 되고 그들은 내 백성이 되리라.',
      translation_notes: '"minds"와 "hearts"를 모두 "마음"으로 번역하되 "마음 속"과 "마음에"로 구분하여 뉘앙스를 살림'
    },
    special_explanation: {
      explanation_type: '신학적 의의',
      content: '새 언약의 율법 내면화는 단순한 도덕적 개선이 아니라 존재론적 변화입니다. 성령의 내주를 통해 하나님의 뜻이 우리의 본성 자체가 되어, 순종이 외적 강제가 아닌 내적 갈망이 됩니다. 이는 칭의(법적 선언)와 성화(실제적 변화)를 통합하는 개혁주의 신학의 핵심입니다.',
      examples: ['옛 언약: 돌판에 새긴 외적 율법 → 순종 능력 없음', '새 언약: 마음에 기록된 내적 율법 → 성령을 통한 순종 능력']
    }
  },

  // Hebrews 8:11
  {
    reference: 'Hebrews 8:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '구약적 교육 방식의 폐지',
        original_text: 'No longer will they teach their neighbor, or say to one another, "Know the Lord,"',
        korean_translation: '그들이 각각 자기 이웃과 형제를 가르쳐 "주를 알라" 하지 아니할 것은',
        grammatical_explanation: '"No longer will they"는 미래 부정으로 변화를 강조. 병렬 구조 "teach...or say"'
      },
      {
        sequence_order: 2,
        semantic_classification: '보편적 지식의 이유',
        original_text: 'because they will all know me, from the least of them to the greatest.',
        korean_translation: '그들이 작은 자로부터 큰 자까지 다 나를 알 것이기 때문이니라.',
        grammatical_explanation: '"because" 절로 이유 제시. "from...to" 구조로 전체 범위 포괄'
      }
    ],
    vocabulary: [
      {
        word: 'no longer',
        ipa_pronunciation: '/noʊ ˈlɔːŋɡər/',
        korean_pronunciation: '노 롱거',
        part_of_speech: '부사구',
        definition_korean: '더 이상 ~하지 않다',
        usage_note: '과거와의 단절을 나타냄'
      },
      {
        word: 'teach',
        ipa_pronunciation: '/tiːtʃ/',
        korean_pronunciation: '티치',
        part_of_speech: '동사',
        definition_korean: '가르치다',
        usage_note: '지식이나 기술 전달'
      },
      {
        word: 'neighbor',
        ipa_pronunciation: '/ˈneɪbər/',
        korean_pronunciation: '네이버',
        part_of_speech: '명사',
        definition_korean: '이웃',
        usage_note: '가까이 사는 사람'
      },
      {
        word: 'know',
        ipa_pronunciation: '/noʊ/',
        korean_pronunciation: '노',
        part_of_speech: '동사',
        definition_korean: '알다',
        usage_note: '친밀한 관계적 지식'
      },
      {
        word: 'least',
        ipa_pronunciation: '/liːst/',
        korean_pronunciation: '리스트',
        part_of_speech: '형용사 (최상급)',
        definition_korean: '가장 작은',
        usage_note: '사회적 지위나 나이의 낮음'
      },
      {
        word: 'greatest',
        ipa_pronunciation: '/ˈɡreɪtɪst/',
        korean_pronunciation: '그레이티스트',
        part_of_speech: '형용사 (최상급)',
        definition_korean: '가장 큰',
        usage_note: '사회적 지위나 나이의 높음'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '새 언약 하에서는 하나님을 아는 지식이 보편화됩니다. 구약 시대에는 제사장, 선지자, 서기관들이 백성들에게 하나님을 가르쳤습니다. 일반 백성들은 중재자를 통해서만 하나님께 접근할 수 있었습니다. 그러나 새 언약에서는 "작은 자로부터 큰 자까지" 모두가 직접적으로 하나님을 압니다. "안다"는 히브리어 "야다"의 번역으로, 단순한 지적 정보가 아니라 친밀한 관계적 지식을 의미합니다. 이는 성령의 내주하심과 교회 공동체 안에서의 "만인제사장직"으로 성취됩니다. 모든 믿는 자가 성령을 통해 하나님을 개인적으로 알고 경험하며, 그리스도를 통해 하나님께 직접 나아갈 수 있습니다. 이는 교육이 불필요하다는 뜻이 아니라 (엡 4:11-13), 중재적 가르침 없이도 모든 신자가 하나님과 직접적 관계를 가진다는 의미입니다.',
      cross_references: ['1 John 2:27', 'John 6:45', '1 Peter 2:9', 'Joel 2:28-29']
    },
    korean_translation: {
      natural_translation: '그들이 각각 자기 이웃과 형제를 가르쳐 "주를 알라" 하지 아니할 것은, 그들이 작은 자로부터 큰 자까지 다 나를 알 것이기 때문이니라.',
      translation_notes: '"neighbor"와 히브리어 원문의 "형제"를 모두 포함하여 번역'
    }
  },

  // Hebrews 8:12
  {
    reference: 'Hebrews 8:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '죄 사함의 약속',
        original_text: 'For I will forgive their wickedness',
        korean_translation: '내가 그들의 불의를 긍휼히 여기고',
        grammatical_explanation: '"For" 접속사로 앞 절의 근거 제시. "I will forgive"는 미래 약속'
      },
      {
        sequence_order: 2,
        semantic_classification: '죄 망각의 선언',
        original_text: 'and will remember their sins no more.',
        korean_translation: '그들의 죄와 불법을 다시 기억하지 아니하리라.',
        grammatical_explanation: '"will remember...no more"는 강한 부정으로 완전한 망각을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'forgive',
        ipa_pronunciation: '/fərˈɡɪv/',
        korean_pronunciation: '퍼기브',
        part_of_speech: '동사',
        definition_korean: '용서하다',
        usage_note: '죄의 형벌을 면제함'
      },
      {
        word: 'wickedness',
        ipa_pronunciation: '/ˈwɪkɪdnəs/',
        korean_pronunciation: '위키드니스',
        part_of_speech: '명사',
        definition_korean: '사악함, 불의',
        usage_note: '도덕적 악과 죄'
      },
      {
        word: 'remember',
        ipa_pronunciation: '/rɪˈmembər/',
        korean_pronunciation: '리멤버',
        part_of_speech: '동사',
        definition_korean: '기억하다',
        usage_note: '마음에 품다, 상기하다'
      },
      {
        word: 'sins',
        ipa_pronunciation: '/sɪnz/',
        korean_pronunciation: '신즈',
        part_of_speech: '명사 (복수)',
        definition_korean: '죄들',
        usage_note: '하나님의 뜻에서 벗어난 행위'
      },
      {
        word: 'no more',
        ipa_pronunciation: '/noʊ mɔːr/',
        korean_pronunciation: '노 모어',
        part_of_speech: '부사구',
        definition_korean: '더 이상 ~하지 않다',
        usage_note: '완전한 중단을 나타냄'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '새 언약의 궁극적 축복은 완전하고 최종적인 죄 사함입니다. "긍휼히 여기다"로 번역되는 히브리어는 "속죄하다, 덮다"의 의미도 가지며, 하나님께서 죄를 더 이상 형벌의 근거로 삼지 않으심을 나타냅니다. 더 나아가 "다시 기억하지 아니하리라"는 표현은 하나님의 기억 상실이 아니라, 죄를 더 이상 우리에게 불리하게 사용하지 않으신다는 법정적 선언입니다. 이는 그리스도의 단번 제사를 통해 성취되었습니다 (히 10:17-18). 구약의 동물 제사는 해마다 죄를 상기시켰지만 (히 10:3), 그리스도의 완전한 제사는 죄를 영원히 제거했습니다. "다시 기억하지 않는다"는 것은 마치 죄가 결코 존재하지 않았던 것처럼 대하신다는 의미로, 칭의의 완전성을 강조합니다. 이는 신자가 "그리스도 안에서" 새로운 피조물이며 (고후 5:17), 정죄함이 없다는 (롬 8:1) 복음의 핵심입니다.',
      cross_references: ['Hebrews 10:17-18', 'Micah 7:19', 'Isaiah 43:25', 'Romans 8:1', 'Psalm 103:12']
    },
    korean_translation: {
      natural_translation: '내가 그들의 불의를 긍휼히 여기고, 그들의 죄와 불법을 다시 기억하지 아니하리라.',
      translation_notes: '"wickedness"를 "불의"로, "sins"를 "죄와 불법"으로 번역하여 한국어 성경 전통을 따름'
    },
    special_explanation: {
      explanation_type: '신학적 의의',
      content: '하나님의 "기억하지 않으심"은 전지하신 하나님이 실제로 잊으신다는 뜻이 아니라, 법정적 용어로 죄를 더 이상 기소하지 않으신다는 의미입니다. 이는 이중 정죄(double jeopardy) 금지 원칙과 유사합니다. 그리스도께서 우리 죄를 담당하셨으므로, 하나님은 그 죄를 우리에게 두 번 묻지 않으십니다.',
      examples: ['구약 제사: 해마다 죄를 상기시킴 (히 10:3)', '신약 제사: 단번에 영원히 죄를 제거함 (히 10:10-14)']
    }
  },

  // Hebrews 8:13
  {
    reference: 'Hebrews 8:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '논리적 결론',
        original_text: 'By calling this covenant "new," he has made the first one obsolete;',
        korean_translation: '새 언약이라고 말씀하셨으니, 첫 번째 것은 낡아지게 하셨다는 것입니다;',
        grammatical_explanation: '분사구 "By calling"로 수단을 나타냄. "has made...obsolete"는 결과를 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '옛 언약의 운명 선언',
        original_text: 'and what is obsolete and outdated will soon disappear.',
        korean_translation: '낡고 쇠하여 가는 것은 곧 사라질 것입니다.',
        grammatical_explanation: '관계절 "what is obsolete and outdated"가 주어. "will soon disappear"는 임박한 미래'
      }
    ],
    vocabulary: [
      {
        word: 'calling',
        ipa_pronunciation: '/ˈkɔːlɪŋ/',
        korean_pronunciation: '콜링',
        part_of_speech: '동명사',
        definition_korean: '부르다, 명명하다',
        usage_note: '명칭을 부여함'
      },
      {
        word: 'obsolete',
        ipa_pronunciation: '/ˌɑːbsəˈliːt/',
        korean_pronunciation: '압솔리트',
        part_of_speech: '형용사',
        definition_korean: '쓸모없게 된, 폐기된',
        usage_note: '시대에 뒤떨어진'
      },
      {
        word: 'outdated',
        ipa_pronunciation: '/aʊtˈdeɪtɪd/',
        korean_pronunciation: '아웃데이티드',
        part_of_speech: '형용사',
        definition_korean: '시대에 뒤떨어진',
        usage_note: '더 이상 유효하지 않은'
      },
      {
        word: 'disappear',
        ipa_pronunciation: '/ˌdɪsəˈpɪr/',
        korean_pronunciation: '디서피어',
        part_of_speech: '동사',
        definition_korean: '사라지다',
        usage_note: '완전히 없어짐'
      },
      {
        word: 'soon',
        ipa_pronunciation: '/suːn/',
        korean_pronunciation: '순',
        part_of_speech: '부사',
        definition_korean: '곧, 머지않아',
        usage_note: '가까운 미래'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '저자는 예레미야의 "새 언약" 선포 자체가 옛 언약의 불완전성과 임시성을 암시한다고 논증합니다. "새로운"이라고 부른다는 것은 이전 것이 낡았다는 의미이며, 낡은 것은 곧 사라질 운명입니다. 이는 히브리서가 기록될 당시 (AD 60년대 추정) 예루살렘 성전이 아직 존재했던 역사적 상황을 반영합니다. 저자는 성전 제사 체계가 "곧 사라질 것"이라고 예언하는데, 실제로 AD 70년에 로마군이 예루살렘 성전을 파괴함으로써 이 예언이 성취되었습니다. 신학적으로 이는 그리스도의 십자가 사역으로 옛 언약의 의식법이 성취되고 폐지되었음을 의미합니다. 도덕법은 여전히 유효하지만 (마 5:17-19), 제사 제도, 정결법, 음식법 등 의식법은 그리스도 안에서 완성되어 더 이상 구속력이 없습니다. 이는 사도행전 15장의 예루살렘 공의회 결정과 일치하며, 복음의 보편성을 확립하는 중요한 신학적 전환점입니다.',
      cross_references: ['Matthew 5:17-19', 'Colossians 2:16-17', 'Acts 15:1-29', 'Galatians 3:23-25']
    },
    korean_translation: {
      natural_translation: '새 언약이라고 말씀하셨으니, 첫 번째 것은 낡아지게 하셨다는 것입니다. 낡고 쇠하여 가는 것은 곧 사라질 것입니다.',
      translation_notes: '"obsolete and outdated"를 "낡고 쇠하여 가는"으로 자연스럽게 번역'
    },
    special_explanation: {
      explanation_type: '역사적 성취',
      content: '히브리서가 기록된 후 몇 년 지나지 않아 (AD 70년), 로마 장군 티투스가 예루살렘을 함락하고 성전을 파괴했습니다. 이로써 레위 제사 체계는 물리적으로 불가능하게 되었으며, 저자의 "곧 사라질 것"이라는 예언이 문자 그대로 성취되었습니다. 이는 하나님의 섭리 안에서 옛 언약 시대가 공식적으로 종료되고 새 언약 시대가 완전히 도래했음을 상징합니다.',
      examples: []
    }
  }
]

async function main() {
  console.log('히브리서 8장 분석 데이터 저장 시작...\n')

  let successCount = 0
  let failCount = 0

  for (const analysis of hebrews8Analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n=== 완료 ===`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)

  process.exit(failCount > 0 ? 1 : 0)
}

main()
