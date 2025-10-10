import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // ===== HEBREWS 9 =====
  {
    reference: 'Hebrews 9:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '서술: 옛 언약의 특징',
        original_text: 'Now the first covenant had regulations for worship',
        korean_translation: '첫 언약에는 예배 규정이 있었습니다',
        grammatical_explanation: 'Now는 논의 전환, the first covenant는 시내산 언약을 지칭, had regulations는 과거의 제도적 특징을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '추가 설명: 성소의 존재',
        original_text: 'and also an earthly sanctuary',
        korean_translation: '그리고 또한 지상의 성소가 있었습니다',
        grammatical_explanation: 'also는 병렬 추가, earthly는 하늘 성소와 대비되는 지상의 일시적 성격 강조'
      }
    ],
    vocabulary: [
      {
        word: 'covenant',
        ipa_pronunciation: '/ˈkʌvənənt/',
        korean_pronunciation: '커버넌트',
        part_of_speech: '명사',
        definition_korean: '언약, 계약',
        usage_note: '그리스어 diatheke로 하나님과 인간 사이의 법적 약속 관계'
      },
      {
        word: 'regulations',
        ipa_pronunciation: '/ˌrɛɡjəˈleɪʃənz/',
        korean_pronunciation: '레귤레이션스',
        part_of_speech: '명사',
        definition_korean: '규정, 법규',
        usage_note: '그리스어 dikaiomata로 예배와 제사에 관한 구체적 의식 규칙'
      },
      {
        word: 'sanctuary',
        ipa_pronunciation: '/ˈsæŋktʃuˌɛri/',
        korean_pronunciation: '생츄어리',
        part_of_speech: '명사',
        definition_korean: '성소, 성전',
        usage_note: '그리스어 hagion으로 하나님의 임재를 위한 거룩한 장소'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 9장은 옛 언약의 성막 제도와 그리스도의 완전한 제사를 대조합니다. 저자는 먼저 시내산 언약의 구체적 예배 규정과 지상 성소의 존재를 언급함으로써, 이후 그리스도의 하늘 성소 사역과의 비교 기반을 마련합니다. "첫 언약"은 모세를 통해 시내산에서 맺어진 옛 언약을 의미하며, 이는 레위기의 제사 제도를 포괄합니다.'
    },
    korean_translation: {
      natural_translation: '첫 언약에는 예배에 관한 규정들과 지상의 성소가 있었습니다.',
      translation_notes: '옛 언약 제도의 두 가지 핵심 요소(규정과 성소)를 간결하게 제시'
    },
    special_explanation: {
      explanation_type: '신학적 구조',
      content: '히브리서 9-10장의 핵심 논증 구조는 "그림자 대 실체"의 대조입니다. 9:1은 그림자(옛 언약의 지상 성소)를 소개하며, 이후 구절들에서 실체(그리스도의 하늘 성소 사역)로 전환됩니다.'
    }
  },
  {
    reference: 'Hebrews 9:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '서술: 성막 설치',
        original_text: 'A tabernacle was set up',
        korean_translation: '성막이 설치되었습니다',
        grammatical_explanation: 'was set up은 수동태로 하나님의 명령에 따른 설치를 암시'
      },
      {
        sequence_order: 2,
        semantic_classification: '설명: 첫째 칸의 내용물',
        original_text: 'In its first room were the lampstand and the table with its consecrated bread',
        korean_translation: '첫째 칸에는 등잔대와 진설병 상이 있었습니다',
        grammatical_explanation: '도치 구문(were... the lampstand)으로 위치 강조, consecrated bread는 하나님께 바쳐진 거룩한 떡'
      },
      {
        sequence_order: 3,
        semantic_classification: '명명: 성소의 이름',
        original_text: 'this was called the Holy Place',
        korean_translation: '이것은 성소라고 불렸습니다',
        grammatical_explanation: 'was called은 수동태로 공식 명칭 부여, Holy Place는 지성소와 구별되는 바깥 성소'
      }
    ],
    vocabulary: [
      {
        word: 'tabernacle',
        ipa_pronunciation: '/ˈtæbərˌnækəl/',
        korean_pronunciation: '태버내클',
        part_of_speech: '명사',
        definition_korean: '성막, 장막',
        usage_note: '그리스어 skene로 광야에서 이동 가능한 하나님의 임재 장소'
      },
      {
        word: 'lampstand',
        ipa_pronunciation: '/ˈlæmpstænd/',
        korean_pronunciation: '램프스탠드',
        part_of_speech: '명사',
        definition_korean: '등잔대, 촛대',
        usage_note: '그리스어 lychnia로 일곱 가지가 달린 금촛대(출애굽기 25:31-39)'
      },
      {
        word: 'consecrated bread',
        ipa_pronunciation: '/ˈkɑnsəˌkreɪtɪd brɛd/',
        korean_pronunciation: '칸서크레이티드 브레드',
        part_of_speech: '명사구',
        definition_korean: '진설병, 거룩하게 바쳐진 떡',
        usage_note: '그리스어 prothesis arton으로 매주 하나님 앞에 진열된 12개의 떡(레위기 24:5-9)'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '성막은 두 칸으로 구분되었습니다. 첫째 칸인 성소에는 세 가지 기구가 있었는데, 등잔대(하나님의 빛), 진설병 상(하나님의 공급), 그리고 분향단(기도)입니다. 이들은 이스라엘의 일상적 예배 생활을 상징하며, 제사장들이 매일 출입하며 섬기는 공간이었습니다. 출애굽기 25-26장의 성막 건축 지시를 배경으로 합니다.'
    },
    korean_translation: {
      natural_translation: '성막이 설치되었는데, 첫째 칸에는 등잔대와 진설병 상이 있었으며, 이것을 성소라고 불렀습니다.',
      translation_notes: '성막 구조의 첫 번째 부분(성소)을 소개하는 설명적 진술'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '히브리서 저자는 솔로몬 성전이나 헤롯 성전이 아닌 모세의 성막을 언급합니다. 이는 시내산 언약의 원형을 다루기 때문이며, 성전은 성막의 구조를 확대한 것이기 때문입니다.'
    }
  },
  {
    reference: 'Hebrews 9:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '위치 설명: 지성소의 위치',
        original_text: 'Behind the second curtain was a room called the Most Holy Place',
        korean_translation: '둘째 휘장 뒤에는 지성소라고 불리는 칸이 있었습니다',
        grammatical_explanation: '도치 구문(was a room)으로 위치 강조, the second curtain은 성소와 지성소를 구분하는 두꺼운 휘장'
      }
    ],
    vocabulary: [
      {
        word: 'curtain',
        ipa_pronunciation: '/ˈkɜrtən/',
        korean_pronunciation: '커튼',
        part_of_speech: '명사',
        definition_korean: '휘장, 장막',
        usage_note: '그리스어 katapetasma로 성소와 지성소를 나누는 두꺼운 천 장벽(출애굽기 26:31-33)'
      },
      {
        word: 'Most Holy Place',
        ipa_pronunciation: '/moʊst ˈhoʊli pleɪs/',
        korean_pronunciation: '모스트 홀리 플레이스',
        part_of_speech: '고유명사',
        definition_korean: '지성소, 가장 거룩한 곳',
        usage_note: '그리스어 Hagia Hagion으로 하나님의 직접적 임재가 있는 최고의 거룩한 공간'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '성막의 두 번째 칸인 지성소는 두꺼운 휘장으로 성소와 완전히 격리되었습니다. 이 휘장은 거룩하신 하나님과 죄인 사이의 분리를 상징하며, 오직 대제사장만이 일년에 한 번(속죄일) 피를 가지고 들어갈 수 있었습니다. 이 휘장은 예수님이 십자가에서 죽으실 때 찢어져(마태복음 27:51), 하나님께 나아가는 새 길이 열렸음을 예표합니다.'
    },
    korean_translation: {
      natural_translation: '둘째 휘장 뒤에는 지성소라고 불리는 방이 있었습니다.',
      translation_notes: '성막의 가장 거룩한 공간인 지성소를 소개'
    },
    special_explanation: {
      explanation_type: '상징적 의미',
      content: '둘째 휘장은 단순한 물리적 장벽이 아니라 신학적 장벽입니다. 이는 죄로 인한 하나님과 인간의 분리를 상징하며, 히브리서 10:19-20에서 이 휘장이 그리스도의 육체를 예표한다고 설명됩니다.'
    }
  },
  {
    reference: 'Hebrews 9:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '설명: 지성소의 제단',
        original_text: 'which had the golden altar of incense',
        korean_translation: '그곳에는 금향단이 있었습니다',
        grammatical_explanation: 'which는 지성소를 지칭하는 관계대명사, golden altar는 순금으로 덮인 분향단'
      },
      {
        sequence_order: 2,
        semantic_classification: '추가 설명: 언약궤',
        original_text: 'and the gold-covered ark of the covenant',
        korean_translation: '그리고 금으로 싼 언약궤가 있었습니다',
        grammatical_explanation: 'gold-covered는 순금으로 덮인 상태, ark of the covenant는 하나님의 언약을 담은 가장 거룩한 기물'
      },
      {
        sequence_order: 3,
        semantic_classification: '내용물 설명: 언약궤 안의 물품',
        original_text: 'This ark contained the gold jar of manna, Aaron\'s staff that had budded, and the stone tablets of the covenant',
        korean_translation: '이 언약궤 안에는 만나를 담은 금항아리와 싹난 아론의 지팡이와 언약의 돌판들이 들어 있었습니다',
        grammatical_explanation: '세 가지 항목을 병렬 구조로 나열, each representing different aspects of God\'s covenant relationship'
      }
    ],
    vocabulary: [
      {
        word: 'altar of incense',
        ipa_pronunciation: '/ˈɔltər əv ˈɪnsɛns/',
        korean_pronunciation: '올터 오브 인센스',
        part_of_speech: '명사구',
        definition_korean: '분향단, 향단',
        usage_note: '그리스어 thymiate rion으로 향을 피워 기도를 상징하는 제단(출애굽기 30:1-10)'
      },
      {
        word: 'ark of the covenant',
        ipa_pronunciation: '/ɑrk əv ðə ˈkʌvənənt/',
        korean_pronunciation: '아크 오브 더 커버넌트',
        part_of_speech: '명사구',
        definition_korean: '언약궤, 법궤',
        usage_note: '그리스어 kibotos tes diathekes로 하나님의 임재와 언약을 상징하는 가장 거룩한 기물'
      },
      {
        word: 'manna',
        ipa_pronunciation: '/ˈmænə/',
        korean_pronunciation: '만나',
        part_of_speech: '명사',
        definition_korean: '만나, 하늘 양식',
        usage_note: '그리스어 manna로 광야에서 하나님이 공급하신 기적의 음식(출애굽기 16장)'
      },
      {
        word: 'budded',
        ipa_pronunciation: '/ˈbʌdɪd/',
        korean_pronunciation: '버디드',
        part_of_speech: '동사',
        definition_korean: '싹이 났다',
        usage_note: '그리스어 blastesasa로 아론의 제사장 권위를 확증한 기적적 싹(민수기 17장)'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '지성소의 핵심은 언약궤였습니다. 언약궤 안에는 세 가지 중요한 물품이 보존되었는데, 각각 이스라엘 역사의 핵심 사건을 기념합니다. 만나 항아리는 광야에서 하나님의 공급(출애굽기 16:32-34), 아론의 싹난 지팡이는 제사장 권위의 확증(민수기 17장), 돌판은 시내산 언약(출애굽기 25:16; 신명기 10:1-5)을 상징합니다. 이 세 가지는 하나님의 공급, 권위, 그리고 율법을 대표합니다.'
    },
    korean_translation: {
      natural_translation: '그곳에는 금향단과 금으로 싼 언약궤가 있었는데, 이 언약궤 안에는 만나를 담은 금항아리, 싹난 아론의 지팡이, 그리고 언약의 돌판들이 들어 있었습니다.',
      translation_notes: '지성소의 두 가지 주요 기물과 언약궤의 내용물을 상세히 설명'
    },
    special_explanation: {
      explanation_type: '해석적 난점',
      content: '금향단의 위치에 대한 논란이 있습니다. 출애굽기 30:6에 따르면 분향단은 휘장 밖 성소에 있었지만, 히브리서는 이것을 지성소와 연관시킵니다. 이는 분향단이 기능적으로 지성소를 향해 있었고(레위기 16:12-13), 속죄일에는 지성소와 밀접하게 연결되었기 때문으로 해석됩니다.'
    }
  },
  {
    reference: 'Hebrews 9:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '설명: 속죄소 위의 그룹들',
        original_text: 'Above the ark were the cherubim of the Glory, overshadowing the atonement cover',
        korean_translation: '언약궤 위에는 영광의 그룹들이 속죄소를 덮고 있었습니다',
        grammatical_explanation: '도치 구문(were the cherubim)으로 위치 강조, cherubim of the Glory는 하나님의 영광을 상징하는 천사적 존재들'
      },
      {
        sequence_order: 2,
        semantic_classification: '전환: 상세 설명 보류',
        original_text: 'But we cannot discuss these things in detail now',
        korean_translation: '그러나 우리는 지금 이것들을 자세히 논할 수 없습니다',
        grammatical_explanation: 'But은 주제 전환, cannot은 시간 제약, in detail은 상세한 설명을 의미'
      }
    ],
    vocabulary: [
      {
        word: 'cherubim',
        ipa_pronunciation: '/ˈtʃɛrəbɪm/',
        korean_pronunciation: '체러빔',
        part_of_speech: '명사',
        definition_korean: '그룹들, 천사적 존재들',
        usage_note: '그리스어 cheroubim(히브리어 복수형)으로 하나님의 영광과 임재를 지키는 천사적 존재들'
      },
      {
        word: 'atonement cover',
        ipa_pronunciation: '/əˈtoʊnmənt ˈkʌvər/',
        korean_pronunciation: '어톤먼트 커버',
        part_of_speech: '명사구',
        definition_korean: '속죄소, 시은좌',
        usage_note: '그리스어 hilasterion으로 대제사장이 속죄일에 피를 뿌리는 언약궤 덮개(레위기 16:14-15)'
      },
      {
        word: 'overshadowing',
        ipa_pronunciation: '/ˌoʊvərˈʃædoʊɪŋ/',
        korean_pronunciation: '오버섀도잉',
        part_of_speech: '동사',
        definition_korean: '덮다, 그늘지게 하다',
        usage_note: '그리스어 kataskiazo로 날개를 펴서 보호하고 존경하는 자세'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '언약궤 덮개인 속죄소 양쪽에는 금으로 만든 두 그룹이 날개를 펴서 덮고 있었습니다(출애굽기 25:17-22). 이 속죄소는 일년에 한 번 대제사장이 속죄일에 피를 뿌리는 가장 거룩한 장소였으며, 하나님의 임재가 나타나는 곳이었습니다(레위기 16:2). 저자는 이러한 성막 기물들의 상징적 의미를 상세히 다루지 않고, 핵심 논지인 그리스도의 더 나은 제사로 빠르게 전환합니다.'
    },
    korean_translation: {
      natural_translation: '언약궤 위에는 영광의 그룹들이 속죄소를 덮고 있었습니다. 하지만 지금은 이것들을 자세히 설명할 수 없습니다.',
      translation_notes: '성막 기물 묘사를 마무리하고 본론으로 전환하는 전환구'
    },
    special_explanation: {
      explanation_type: '수사적 기법',
      content: '"자세히 논할 수 없습니다"는 시간 제약이 아니라 수사적 장치입니다. 저자는 성막의 물리적 세부사항보다 그것이 가리키는 영적 실체(그리스도)에 독자의 주의를 집중시키려 합니다. 이는 9:9-10에서 성막이 "비유"임을 밝히는 것과 연결됩니다.'
    }
  },
  {
    reference: 'Hebrews 9:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '시간적 배경: 성막 완성 후',
        original_text: 'When everything had been arranged like this',
        korean_translation: '이 모든 것이 이렇게 준비되었을 때',
        grammatical_explanation: 'When은 시간 조건절, had been arranged는 과거완료 수동태로 하나님의 명령에 따른 완벽한 준비 상태'
      },
      {
        sequence_order: 2,
        semantic_classification: '서술: 제사장들의 일상적 사역',
        original_text: 'the priests entered regularly into the outer room to carry on their ministry',
        korean_translation: '제사장들이 바깥 칸에 규칙적으로 들어가 섬겼습니다',
        grammatical_explanation: 'regularly는 매일의 일상적 반복, outer room은 성소, ministry는 등잔대와 진설병 관리 등의 예배 의식'
      }
    ],
    vocabulary: [
      {
        word: 'arranged',
        ipa_pronunciation: '/əˈreɪndʒd/',
        korean_pronunciation: '어레인지드',
        part_of_speech: '동사',
        definition_korean: '배치하다, 준비하다',
        usage_note: '그리스어 kateskeuasmeno n으로 하나님의 지시대로 완벽하게 준비된 상태'
      },
      {
        word: 'regularly',
        ipa_pronunciation: '/ˈrɛɡjələrli/',
        korean_pronunciation: '레귤럴리',
        part_of_speech: '부사',
        definition_korean: '규칙적으로, 항상',
        usage_note: '그리스어 diapantos로 중단 없이 계속되는 일상적 반복'
      },
      {
        word: 'ministry',
        ipa_pronunciation: '/ˈmɪnɪstri/',
        korean_pronunciation: '미니스트리',
        part_of_speech: '명사',
        definition_korean: '섬김, 봉사',
        usage_note: '그리스어 latreias로 예배와 제사 의식을 통한 하나님 섬김'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '성막이 완성되자 제사장들의 일상적 사역이 시작되었습니다. 일반 제사장들은 매일 성소에 들어가 등불을 정비하고(출애굽기 27:20-21), 진설병을 교체하고(레위기 24:5-9), 분향단에서 향을 피웠습니다(출애굽기 30:7-8). 이는 끊임없이 반복되는 의식으로, 영구적 해결책이 아닌 임시적 제도임을 암시합니다. 이후 7절에서 대제사장의 연례 사역과 대조됩니다.'
    },
    korean_translation: {
      natural_translation: '이 모든 것이 이렇게 준비되었을 때, 제사장들은 바깥 방에 늘 들어가 섬기는 일을 수행했습니다.',
      translation_notes: '일반 제사장들의 일상적이고 반복적인 성소 사역을 설명'
    },
    special_explanation: {
      explanation_type: '대조 구조',
      content: '6절과 7절은 의도적 대조를 이룹니다. 제사장들의 "규칙적" 출입 vs 대제사장의 "일년에 한 번" 출입, 성소 vs 지성소. 이 대조는 옛 제도의 한계(불완전하고 반복적)를 부각시켜, 그리스도의 단번 제사(once for all)의 우월성을 준비합니다.'
    }
  },
  {
    reference: 'Hebrews 9:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조: 대제사장만의 특권',
        original_text: 'But only the high priest entered the inner room',
        korean_translation: '그러나 오직 대제사장만이 안쪽 방에 들어갔습니다',
        grammatical_explanation: 'But은 6절과 강한 대조, only는 배타적 제한, inner room은 지성소'
      },
      {
        sequence_order: 2,
        semantic_classification: '시간 제한: 일년에 한 번',
        original_text: 'and that only once a year',
        korean_translation: '그것도 일년에 단 한 번만',
        grammatical_explanation: 'and that은 추가 제한 사항, once a year는 속죄일(레위기 16장)을 지칭'
      },
      {
        sequence_order: 3,
        semantic_classification: '조건: 피를 가지고',
        original_text: 'and never without blood',
        korean_translation: '결코 피 없이는 아니었습니다',
        grammatical_explanation: 'never without는 이중 부정으로 절대적 필수조건 강조, blood는 속죄 제물의 피'
      },
      {
        sequence_order: 4,
        semantic_classification: '목적: 자신과 백성의 죄',
        original_text: 'which he offered for himself and for the sins the people had committed in ignorance',
        korean_translation: '그는 이 피를 자신과 백성이 무지 중에 범한 죄를 위해 드렸습니다',
        grammatical_explanation: 'which는 blood를 지칭, for himself는 대제사장 자신의 죄 속죄, in ignorance는 고의가 아닌 무지에서 범한 죄'
      }
    ],
    vocabulary: [
      {
        word: 'high priest',
        ipa_pronunciation: '/haɪ prist/',
        korean_pronunciation: '하이 프리스트',
        part_of_speech: '명사',
        definition_korean: '대제사장',
        usage_note: '그리스어 archiereus로 제사장 중 최고 지도자, 속죄일에만 지성소에 들어갈 수 있는 유일한 사람'
      },
      {
        word: 'inner room',
        ipa_pronunciation: '/ˈɪnər rum/',
        korean_pronunciation: '이너 룸',
        part_of_speech: '명사구',
        definition_korean: '안쪽 방, 지성소',
        usage_note: '그리스어 deuteron으로 두 번째 칸, 즉 지성소를 의미'
      },
      {
        word: 'ignorance',
        ipa_pronunciation: '/ˈɪɡnərəns/',
        korean_pronunciation: '이그너런스',
        part_of_speech: '명사',
        definition_korean: '무지, 알지 못함',
        usage_note: '그리스어 agnoema ton으로 고의가 아닌 실수나 무지로 범한 죄(민수기 15:22-29)'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '대제사장은 일년에 단 한 번, 속죄일(Yom Kippur, 레위기 16장)에만 지성소에 들어갈 수 있었습니다. 그도 죄인이었기에 먼저 자신을 위한 속죄 제물의 피를 가지고 들어가야 했고, 그 다음 백성의 죄를 위한 피를 가지고 들어갔습니다. "무지 중에 범한 죄"는 고의적 반역죄와 구별되는 것으로, 옛 언약의 제사 제도는 고의적 죄는 다루지 못했습니다(민수기 15:30-31). 이 연례 의식의 반복성은 그 효과의 불완전함을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '그러나 오직 대제사장만이 안쪽 방에 들어갔는데, 그것도 일년에 한 번, 반드시 피를 가지고 들어가 자기 자신과 백성이 무지 중에 범한 죄를 위해 드렸습니다.',
      translation_notes: '대제사장의 배타적이고 제한적인 지성소 출입과 속죄 의식을 설명'
    },
    special_explanation: {
      explanation_type: '신학적 의미',
      content: '대제사장 자신도 죄인이라는 사실은 옛 제사 제도의 근본적 한계입니다. 이는 히브리서 7:26-27에서 그리스도와 대조됩니다. 그리스도는 죄 없으신 대제사장으로서 자신을 위한 제사가 필요 없고, 백성을 위해 단번에 자신을 드리셨습니다.'
    }
  },
  {
    reference: 'Hebrews 9:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '해석: 성령의 계시',
        original_text: 'The Holy Spirit was showing by this that the way into the Most Holy Place had not yet been disclosed',
        korean_translation: '성령께서 이것으로 지성소로 들어가는 길이 아직 드러나지 않았음을 보이셨습니다',
        grammatical_explanation: 'was showing은 과거 진행형으로 계속된 계시, by this는 성막 제도를 통한 가르침, had not yet been disclosed는 과거완료로 아직 열리지 않은 길'
      },
      {
        sequence_order: 2,
        semantic_classification: '조건: 첫 성막의 존속',
        original_text: 'as long as the first tabernacle was still functioning',
        korean_translation: '첫 성막이 여전히 서 있는 동안에는',
        grammatical_explanation: 'as long as는 시간 조건절, was still functioning은 옛 제도가 유효한 기간'
      }
    ],
    vocabulary: [
      {
        word: 'disclosed',
        ipa_pronunciation: '/dɪsˈkloʊzd/',
        korean_pronunciation: '디스클로즈드',
        part_of_speech: '동사',
        definition_korean: '드러나다, 공개되다',
        usage_note: '그리스어 pephanerōsthai로 숨겨진 것이 밝혀지고 접근 가능해짐'
      },
      {
        word: 'functioning',
        ipa_pronunciation: '/ˈfʌŋkʃənɪŋ/',
        korean_pronunciation: '펑션잉',
        part_of_speech: '동사',
        definition_korean: '기능하다, 작동하다',
        usage_note: '그리스어 echousēs stasin으로 여전히 유효하고 작동 중인 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '성막의 구조 자체가 하나님의 교육적 계시였습니다. 휘장으로 막힌 지성소는 죄로 인해 하나님께 직접 나아갈 수 없는 인간의 상태를 상징했습니다. "첫 성막"은 옛 언약 전체 제도를 대표하며, 그것이 존속하는 한 하나님께 나아가는 완전한 길은 아직 열리지 않았음을 보여줍니다. 이는 그리스도의 십자가를 통해 휘장이 찢어지고(마태복음 27:51) 새로운 길이 열린 것과 대조됩니다(히브리서 10:19-20).'
    },
    korean_translation: {
      natural_translation: '성령께서는 이것으로, 첫 성막이 서 있는 동안에는 지성소로 들어가는 길이 아직 드러나지 않았음을 보여주셨습니다.',
      translation_notes: '성막 제도의 교육적 의미를 성령의 계시로 해석'
    },
    special_explanation: {
      explanation_type: '해석학적 원리',
      content: '히브리서 저자는 성막 제도를 단순한 역사적 의식이 아니라 성령이 의도한 예표(type)로 봅니다. 물리적 구조와 의식이 영적 진리를 가르치는 하나님의 교육 도구였다는 것입니다. 이러한 해석은 구약을 그리스도 중심으로 읽는 초대교회의 전형적 방법입니다.'
    }
  },
  {
    reference: 'Hebrews 9:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '비유 선언: 현 시대를 위한 예표',
        original_text: 'This is an illustration for the present time',
        korean_translation: '이것은 현재 시대를 위한 비유입니다',
        grammatical_explanation: 'This는 성막 제도 전체, illustration은 그리스어 parabolē(비유, 예표), present time은 저자의 시대'
      },
      {
        sequence_order: 2,
        semantic_classification: '내용 설명: 제사의 한계',
        original_text: 'indicating that the gifts and sacrifices being offered were not able to clear the conscience of the worshiper',
        korean_translation: '드려지는 예물과 제사가 예배자의 양심을 깨끗하게 할 수 없음을 나타냅니다',
        grammatical_explanation: 'indicating은 분사로 부가 설명, were not able은 근본적 무능력, clear the conscience는 내적 정결'
      }
    ],
    vocabulary: [
      {
        word: 'illustration',
        ipa_pronunciation: '/ˌɪləˈstreɪʃən/',
        korean_pronunciation: '일러스트레이션',
        part_of_speech: '명사',
        definition_korean: '비유, 예표',
        usage_note: '그리스어 parabolē로 실체를 가리키는 상징적 그림'
      },
      {
        word: 'conscience',
        ipa_pronunciation: '/ˈkɑnʃəns/',
        korean_pronunciation: '칸션스',
        part_of_speech: '명사',
        definition_korean: '양심, 내적 의식',
        usage_note: '그리스어 syneidēsis로 죄책감을 느끼는 도덕적 자각'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '옛 제사 제도는 "비유"(parable)였습니다. 즉, 더 큰 실체를 가리키는 그림자였습니다. 그 제사들의 근본적 한계는 예배자의 양심을 깨끗하게 할 수 없다는 것입니다. 동물의 피는 외적 의식적 정결은 가져올 수 있어도(9:13), 죄의식과 죄책감으로부터 내적 해방은 주지 못했습니다. 이는 그리스도의 피가 양심을 깨끗하게 한다는 9:14과 대조됩니다.'
    },
    korean_translation: {
      natural_translation: '이것은 현재 시대를 위한 비유로서, 드려지는 예물과 제사가 예배자의 양심을 깨끗하게 할 수 없음을 보여줍니다.',
      translation_notes: '성막 제도의 예표적 성격과 그 한계를 명시'
    },
    special_explanation: {
      explanation_type: '신학적 핵심',
      content: '양심의 정결은 히브리서의 핵심 주제입니다(9:14; 10:2, 22). 옛 제사는 외적 의식적 부정만 다루었지만, 그리스도의 제사는 내적 죄책감과 죄의식 자체를 해결합니다. 이것이 옛 언약과 새 언약의 근본적 차이입니다.'
    }
  },
  {
    reference: 'Hebrews 9:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '한정: 외적 규정의 성격',
        original_text: 'They are only a matter of food and drink and various ceremonial washings',
        korean_translation: '그것들은 단지 음식과 음료와 여러 가지 씻는 예식에 관한 것입니다',
        grammatical_explanation: 'only는 제한적 강조, a matter of는 "~에 관한 것", ceremonial washings는 의식적 정결 예식'
      },
      {
        sequence_order: 2,
        semantic_classification: '시간 제한: 개혁의 때까지',
        original_text: 'external regulations applying until the time of the new order',
        korean_translation: '새 질서의 때까지 적용되는 외적 규정들입니다',
        grammatical_explanation: 'external은 내적 변화와 대조되는 외적 의식, new order는 그리스도가 가져온 새 언약 시대'
      }
    ],
    vocabulary: [
      {
        word: 'ceremonial',
        ipa_pronunciation: '/ˌsɛrəˈmoʊniəl/',
        korean_pronunciation: '세러모니얼',
        part_of_speech: '형용사',
        definition_korean: '의식의, 예식의',
        usage_note: '그리스어 baptismois로 정결을 위한 씻는 의식들'
      },
      {
        word: 'external',
        ipa_pronunciation: '/ɪkˈstɜrnəl/',
        korean_pronunciation: '익스터널',
        part_of_speech: '형용사',
        definition_korean: '외적인, 겉의',
        usage_note: '그리스어 sarkos로 육체적, 물질적 차원에 국한됨'
      },
      {
        word: 'new order',
        ipa_pronunciation: '/nu ˈɔrdər/',
        korean_pronunciation: '뉴 오더',
        part_of_speech: '명사구',
        definition_korean: '새 질서, 개혁',
        usage_note: '그리스어 diorthōseōs로 바로잡음, 완전하게 만드는 개혁의 시기'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '옛 언약의 제사 제도는 근본적으로 외적이고 물질적인 규정들이었습니다. 음식법(정결한 음식과 부정한 음식), 음료(포도주 규정), 여러 씻는 예식(제사장의 씻음, 부정한 자의 정결 예식 등, 레위기 11-15장)은 모두 외적 의식이었습니다. 이들은 "새 질서의 때"까지만 유효한 임시 규정이었습니다. "새 질서"는 그리스도가 가져온 새 언약 시대로, 예레미야 31:31-34에서 예언된 내적 변화의 시대입니다.'
    },
    korean_translation: {
      natural_translation: '그것들은 단지 음식과 음료와 여러 가지 씻는 예식에 관한 외적 규정들로서, 새로운 질서가 올 때까지만 적용됩니다.',
      translation_notes: '옛 언약 제도의 외적이고 임시적인 성격을 강조'
    },
    special_explanation: {
      explanation_type: '구약 배경',
      content: '레위기 11-15장은 정결법을 상세히 다룹니다. 이러한 규정들은 거룩의 외적 표현이었지만, 내적 변화를 가져오지는 못했습니다. 바울도 골로새서 2:16-17에서 이런 규정들이 "장래 일의 그림자"라고 설명합니다.'
    }
  }
]

async function main() {
  console.log('히브리서 9-10장 분석 저장을 시작합니다...\n')

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting: 3초 대기
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
  console.log(`전체: ${analyses.length}개`)
}

main()
