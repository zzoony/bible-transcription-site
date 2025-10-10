import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // ===== HEBREWS 11 =====
  {
    reference: 'Hebrews 11:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '정의: 믿음의 본질',
        original_text: 'Now faith is confidence in what we hope for',
        korean_translation: '믿음은 바라는 것에 대한 확신입니다',
        grammatical_explanation: 'Now는 논리적 전환, faith is는 정의적 진술, confidence는 주관적 확신을 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '정의: 믿음의 본질 (병렬)',
        original_text: 'and assurance about what we do not see',
        korean_translation: '그리고 보이지 않는 것에 대한 확증입니다',
        grammatical_explanation: 'and는 병렬 연결, assurance는 객관적 확증, what we do not see는 미래와 영적 실재를 포함'
      }
    ],
    vocabulary: [
      {
        word: 'faith',
        ipa_pronunciation: '/feɪθ/',
        korean_pronunciation: '페이스',
        part_of_speech: '명사',
        definition_korean: '믿음, 신뢰',
        usage_note: '그리스어 pistis로 단순한 믿음이 아닌 하나님의 약속에 대한 확고한 신뢰'
      },
      {
        word: 'confidence',
        ipa_pronunciation: '/ˈkɑːnfɪdəns/',
        korean_pronunciation: '칸피던스',
        part_of_speech: '명사',
        definition_korean: '확신, 신념',
        usage_note: '그리스어 hypostasis로 객관적 실재성과 주관적 확신을 모두 포함'
      },
      {
        word: 'assurance',
        ipa_pronunciation: '/əˈʃʊrəns/',
        korean_pronunciation: '어슈어런스',
        part_of_speech: '명사',
        definition_korean: '확증, 증거',
        usage_note: '그리스어 elegchos로 법정 용어로서 보이지 않는 것의 실재에 대한 증거'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 11장은 "믿음의 장"으로 알려져 있으며, 이 첫 절은 믿음의 신학적 정의를 제공합니다. 저자는 믿음을 두 가지 측면에서 정의합니다: (1) 미래에 바라는 것에 대한 확신(confidence), (2) 현재 보이지 않는 영적 실재에 대한 확증(assurance). 이 정의는 구약의 믿음의 영웅들을 소개하는 서론으로, 그들이 어떻게 보이지 않는 하나님의 약속을 신뢰했는지 보여줍니다. 히브리서의 청중들은 박해와 고난 속에서 믿음을 유지해야 했기에, 이 정의는 실천적 의미를 갖습니다.'
    },
    korean_translation: {
      natural_translation: '믿음은 우리가 바라는 것들에 대한 확신이며, 보이지 않는 것들에 대한 확증입니다.',
      translation_notes: '믿음의 두 가지 본질적 특성을 병렬 구조로 제시'
    },
    special_explanation: {
      explanation_type: '신학적 정의',
      content: 'hypostasis(확신)와 elegchos(확증)는 모두 법적·철학적 용어로, 믿음이 단순한 감정이 아닌 객관적 실재에 근거한 확고한 신뢰임을 강조합니다. 이는 플라톤적 이원론(보이는 것은 그림자, 보이지 않는 것이 실재)과 대조를 이루며, 기독교적 믿음은 미래의 실재를 현재에 경험하는 것입니다.'
    }
  },
  {
    reference: 'Hebrews 11:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 선조들의 인정',
        original_text: 'This is what the ancients were commended for',
        korean_translation: '이것으로 선조들이 인정받았습니다',
        grammatical_explanation: 'This는 11:1의 믿음을 지칭, ancients는 구약의 믿음의 사람들, were commended는 신적 피동으로 하나님께 인정받음을 의미'
      }
    ],
    vocabulary: [
      {
        word: 'ancients',
        ipa_pronunciation: '/ˈeɪnʃənts/',
        korean_pronunciation: '에인션츠',
        part_of_speech: '명사',
        definition_korean: '옛 사람들, 선조들',
        usage_note: '그리스어 presbyteroi로 구약의 믿음의 영웅들을 지칭'
      },
      {
        word: 'commended',
        ipa_pronunciation: '/kəˈmɛndɪd/',
        korean_pronunciation: '커멘디드',
        part_of_speech: '동사',
        definition_korean: '칭찬받다, 인정받다',
        usage_note: '그리스어 martyreō로 증언되다, 하나님께 인정받다는 의미'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 절은 11:1의 믿음 정의와 11:3 이후 나열될 믿음의 영웅들을 연결하는 다리 역할을 합니다. "선조들"은 아벨부터 선지자들까지 구약 전체를 아우르며, "인정받았다"는 하나님께서 그들의 믿음을 증언하셨음을 의미합니다. 이는 창세기부터 역대기까지 반복적으로 나타나는 "하나님께서 기뻐하셨다"는 표현과 연결됩니다.'
    },
    korean_translation: {
      natural_translation: '이러한 믿음으로 옛 선조들이 하나님께 인정받았습니다.',
      translation_notes: '11:1의 믿음 정의와 이후 사례들을 연결하는 전환절'
    }
  },
  {
    reference: 'Hebrews 11:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 믿음에 의한 이해',
        original_text: 'By faith we understand that the universe was formed at God\'s command',
        korean_translation: '믿음으로 우리는 우주가 하나님의 명령으로 지어졌음을 압니다',
        grammatical_explanation: 'By faith는 수단, understand는 인식론적 동사, was formed는 과거 피동으로 창조 사건을 지칭, at God\'s command는 말씀 창조를 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 보이는 것과 보이지 않는 것',
        original_text: 'so that what is seen was not made out of what was visible',
        korean_translation: '그리하여 보이는 것이 보이는 것에서 나오지 않았습니다',
        grammatical_explanation: 'so that은 결과절, what is seen은 물질 세계, was not made는 부정 피동, out of는 재료·기원을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'universe',
        ipa_pronunciation: '/ˈjuːnɪvɜːrs/',
        korean_pronunciation: '유니버스',
        part_of_speech: '명사',
        definition_korean: '우주, 세상',
        usage_note: '그리스어 aiōnas로 시대들, 세계들을 의미하며 시간과 공간을 모두 포함'
      },
      {
        word: 'formed',
        ipa_pronunciation: '/fɔːrmd/',
        korean_pronunciation: '포ーム드',
        part_of_speech: '동사',
        definition_korean: '지어지다, 형성되다',
        usage_note: '그리스어 katērtisthai로 완전하게 정돈되다, 준비되다는 의미'
      },
      {
        word: 'command',
        ipa_pronunciation: '/kəˈmænd/',
        korean_pronunciation: '커맨드',
        part_of_speech: '명사',
        definition_korean: '명령, 말씀',
        usage_note: '그리스어 rhēma로 창세기 1장의 "하나님이 말씀하시되"를 지칭'
      },
      {
        word: 'visible',
        ipa_pronunciation: '/ˈvɪzəbl/',
        korean_pronunciation: '비저블',
        part_of_speech: '형용사',
        definition_korean: '보이는, 가시적인',
        usage_note: '기존 물질에서 나온 것이 아닌 무에서의 창조(creatio ex nihilo)를 강조'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 절은 믿음의 첫 번째 사례로 창조를 제시합니다. 우주의 기원을 이해하는 것은 과학적 관찰이 아닌 믿음의 영역입니다. 저자는 하나님께서 말씀으로 무에서 만물을 창조하셨음을 선언하며, 이는 11:1의 "보이지 않는 것에 대한 확증"의 첫 적용입니다. 플라톤 철학과 달리, 물질 세계는 열등한 것이 아니라 하나님의 좋으신 창조이며, 보이는 것은 보이지 않는 하나님의 말씀에서 나왔습니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 우리는 우주가 하나님의 말씀으로 지어졌음을 압니다. 그래서 보이는 것이 눈에 보이는 것에서 만들어진 것이 아닙니다.',
      translation_notes: '말씀 창조와 무에서의 창조(creatio ex nihilo) 강조'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '이 구절은 초대교회의 중요한 신학적 논쟁인 "creatio ex nihilo"(무에서의 창조)를 지지합니다. 그노시스주의는 물질이 악하며 열등한 신이 만들었다고 주장했으나, 히브리서는 하나님께서 말씀으로 물질 세계를 선하게 창조하셨음을 선언합니다. 이는 요한복음 1:3과 골로새서 1:16과도 연결됩니다.'
    }
  },
  {
    reference: 'Hebrews 11:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 아벨의 믿음의 제사',
        original_text: 'By faith Abel brought God a better offering than Cain did',
        korean_translation: '믿음으로 아벨은 가인보다 더 나은 제사를 하나님께 드렸습니다',
        grammatical_explanation: 'By faith는 수단, better는 비교급으로 가인과 대조, offering은 제사 제물'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 의롭다 인정받음',
        original_text: 'By faith he was commended as righteous, when God spoke well of his offerings',
        korean_translation: '믿음으로 그는 의롭다고 인정받았으니, 하나님께서 그의 제물을 좋게 여기셨습니다',
        grammatical_explanation: 'was commended는 신적 피동, as righteous는 보어로 의인 선언, when절은 시간·이유를 모두 나타냄'
      },
      {
        sequence_order: 3,
        semantic_classification: '진술: 죽어서도 말함',
        original_text: 'And by faith Abel still speaks, even though he is dead',
        korean_translation: '그리고 믿음으로 아벨은 죽었지만 여전히 말합니다',
        grammatical_explanation: 'still speaks는 현재형으로 지속적 영향, even though는 양보절로 육체적 죽음에도 불구하고 믿음의 증언은 계속됨'
      }
    ],
    vocabulary: [
      {
        word: 'offering',
        ipa_pronunciation: '/ˈɔːfərɪŋ/',
        korean_pronunciation: '오퍼링',
        part_of_speech: '명사',
        definition_korean: '제사, 헌물',
        usage_note: '창세기 4:3-4의 제사를 지칭'
      },
      {
        word: 'commended',
        ipa_pronunciation: '/kəˈmɛndɪd/',
        korean_pronunciation: '커멘디드',
        part_of_speech: '동사',
        definition_korean: '인정받다, 증언되다',
        usage_note: '그리스어 martyreō로 하나님께서 증언하심'
      },
      {
        word: 'righteous',
        ipa_pronunciation: '/ˈraɪtʃəs/',
        korean_pronunciation: '라이처스',
        part_of_speech: '형용사',
        definition_korean: '의로운',
        usage_note: '하나님과의 올바른 관계 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '아벨은 구약에서 첫 번째 순교자이자 믿음의 첫 사례입니다(창 4:1-16). 그의 제사가 가인보다 "더 나은" 이유는 외적 형식이 아니라 믿음이었습니다. 하나님께서 아벨의 제물을 받으셨다는 것은 그를 의롭다고 인정하셨음을 의미합니다. "죽었지만 여전히 말한다"는 표현은 그의 믿음의 증언이 창세기에 기록되어 계속해서 후대에 영향을 미침을 의미하며, 이는 순교자의 피가 교회의 씨앗이라는 초대교회의 이해와 연결됩니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 아벨은 가인보다 더 나은 제사를 하나님께 드렸습니다. 믿음으로 그는 의롭다고 인정받았으니, 하나님께서 그의 제물을 받으셨기 때문입니다. 그리고 믿음으로 그는 죽었지만 여전히 말하고 있습니다.',
      translation_notes: '믿음의 제사, 의인 선언, 그리고 죽음 이후에도 계속되는 증언'
    },
    special_explanation: {
      explanation_type: '신학적 해석',
      content: '아벨의 제사가 "더 나은" 이유에 대해 다양한 해석이 있습니다: (1) 피 제사였기 때문(레위기적 해석), (2) 최상의 것을 드렸기 때문(창 4:4 "첫 새끼와 기름"), (3) 믿음으로 드렸기 때문(히브리서의 강조). 히브리서는 세 번째를 강조하며, 제사의 효력은 형식이 아닌 믿음에 있음을 보여줍니다.'
    }
  },
  {
    reference: 'Hebrews 11:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 에녹의 승천',
        original_text: 'By faith Enoch was taken from this life, so that he did not experience death',
        korean_translation: '믿음으로 에녹은 이 세상에서 옮겨져서 죽음을 경험하지 않았습니다',
        grammatical_explanation: 'By faith는 수단, was taken은 신적 피동으로 하나님께서 데려가심, so that은 결과절, did not experience는 부정으로 죽음을 보지 않음'
      },
      {
        sequence_order: 2,
        semantic_classification: '설명: 찾을 수 없었던 이유',
        original_text: 'he could not be found, because God had taken him away',
        korean_translation: '그를 찾을 수 없었으니, 하나님께서 그를 데려가셨기 때문입니다',
        grammatical_explanation: 'could not be found는 불가능 피동, because절은 이유 설명, had taken은 과거완료로 선행 사건'
      },
      {
        sequence_order: 3,
        semantic_classification: '진술: 승천 전 하나님을 기쁘시게 함',
        original_text: 'For before he was taken, he was commended as one who pleased God',
        korean_translation: '왜냐하면 그가 옮겨지기 전에 하나님을 기쁘시게 한 자로 인정받았기 때문입니다',
        grammatical_explanation: 'For는 근거 제시, before절은 시간적 선후, was commended는 신적 피동, as는 동격 설명, pleased는 하나님과의 관계'
      }
    ],
    vocabulary: [
      {
        word: 'taken',
        ipa_pronunciation: '/ˈteɪkən/',
        korean_pronunciation: '테이큰',
        part_of_speech: '동사',
        definition_korean: '데려가다, 옮기다',
        usage_note: '그리스어 metatithēmi로 한 곳에서 다른 곳으로 옮기다, 창세기 5:24 "하나님이 그를 데려가시매"'
      },
      {
        word: 'experience',
        ipa_pronunciation: '/ɪkˈspɪriəns/',
        korean_pronunciation: '익스피리언스',
        part_of_speech: '동사',
        definition_korean: '경험하다, 겪다',
        usage_note: '죽음을 보다, 맛보다는 의미'
      },
      {
        word: 'pleased',
        ipa_pronunciation: '/pliːzd/',
        korean_pronunciation: '플리즈드',
        part_of_speech: '동사',
        definition_korean: '기쁘시게 하다',
        usage_note: '그리스어 euareste��로 하나님을 만족시키다, 기쁘시게 하다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '에녹은 구약에서 엘리야와 함께 죽지 않고 하늘로 올라간 두 사람 중 하나입니다(창 5:21-24). "하나님과 동행하다"(창 5:22, 24)는 표현은 히브리서에서 "하나님을 기쁘시게 하다"로 해석됩니다. 에녹의 승천은 믿음의 궁극적 보상이 육체적 죽음 너머에 있음을 보여주며, 초대교회 성도들에게 부활과 영생의 소망을 제시합니다. 70인역(LXX)은 창세기 5:24를 "찾을 수 없었으니 하나님이 그를 옮기셨음이라"로 번역하여 히브리서의 해석과 일치합니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 에녹은 죽음을 경험하지 않고 옮겨졌습니다. 하나님께서 그를 데려가셨기에 그를 찾을 수 없었습니다. 옮겨지기 전에 그는 하나님을 기쁘시게 한 자로 인정받았습니다.',
      translation_notes: '에녹의 승천과 하나님을 기쁘시게 한 삶'
    },
    special_explanation: {
      explanation_type: '구약 배경',
      content: '창세기 5:24는 히브리어로 "에녹이 하나님과 동행하더니 하나님이 그를 데려가시므로 세상에 있지 아니하였더라"입니다. 70인역(LXX)은 이를 "찾을 수 없었다"(ouch heurisketo)로 번역했으며, 히브리서는 이를 따릅니다. 유대 전승(1 Enoch)에서 에녹은 천상 여행을 하고 묵시적 지식을 받은 인물로 확대되었으나, 히브리서는 단순히 믿음으로 하나님을 기쁘시게 한 삶을 강조합니다.'
    }
  },
  {
    reference: 'Hebrews 11:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 믿음 없이는 불가능',
        original_text: 'And without faith it is impossible to please God',
        korean_translation: '그리고 믿음이 없이는 하나님을 기쁘시게 하는 것이 불가능합니다',
        grammatical_explanation: 'And는 11:5와 연결, without faith는 조건, it is impossible은 비인칭 구문, to please는 부정사 목적어'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유: 하나님께 나아가는 자의 믿음',
        original_text: 'because anyone who comes to him must believe that he exists',
        korean_translation: '왜냐하면 하나님께 나아가는 자는 그가 계심을 믿어야 하기 때문입니다',
        grammatical_explanation: 'because절은 이유, anyone who는 일반적 주어, comes to him은 하나님께 접근, must believe는 의무, that절은 믿음의 내용'
      },
      {
        sequence_order: 3,
        semantic_classification: '확장: 믿음의 두 번째 내용',
        original_text: 'and that he rewards those who earnestly seek him',
        korean_translation: '그리고 그를 간절히 찾는 자들에게 상 주시는 이심을 믿어야 합니다',
        grammatical_explanation: 'and는 병렬 연결, that절은 두 번째 믿음 내용, rewards는 현재형으로 일반적 진리, earnestly는 부사로 열심의 정도, seek은 추구·탐구'
      }
    ],
    vocabulary: [
      {
        word: 'impossible',
        ipa_pronunciation: '/ɪmˈpɑːsəbl/',
        korean_pronunciation: '임파서블',
        part_of_speech: '형용사',
        definition_korean: '불가능한',
        usage_note: '그리스어 adynaton으로 절대적 불가능'
      },
      {
        word: 'please',
        ipa_pronunciation: '/pliːz/',
        korean_pronunciation: '플리즈',
        part_of_speech: '동사',
        definition_korean: '기쁘시게 하다',
        usage_note: '그리스어 euaresteō로 만족시키다, 기쁘게 하다'
      },
      {
        word: 'exists',
        ipa_pronunciation: '/ɪɡˈzɪsts/',
        korean_pronunciation: '이그지스츠',
        part_of_speech: '동사',
        definition_korean: '존재하다, 계시다',
        usage_note: '단순한 존재론적 인정이 아닌 인격적 하나님의 현존'
      },
      {
        word: 'rewards',
        ipa_pronunciation: '/rɪˈwɔːrdz/',
        korean_pronunciation: '리워즈',
        part_of_speech: '동사',
        definition_korean: '보상하다, 상 주다',
        usage_note: '그리스어 misthapodotēs로 상 주시는 자, 공정하게 보상하시는 분'
      },
      {
        word: 'earnestly',
        ipa_pronunciation: '/ˈɜːrnɪstli/',
        korean_pronunciation: '어니스틀리',
        part_of_speech: '부사',
        definition_korean: '열심히, 간절히',
        usage_note: '그리스어 ekzēteō로 철저하게 추구하다, 진지하게 찾다'
      },
      {
        word: 'seek',
        ipa_pronunciation: '/siːk/',
        korean_pronunciation: '시크',
        part_of_speech: '동사',
        definition_korean: '찾다, 추구하다',
        usage_note: '신명기 4:29 "네가 거기서 네 하나님 여호와를 찾게 되리니 만일 마음을 다하고 뜻을 다하여 그를 찾으면 만나리라"'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 절은 믿음의 신학적 핵심을 제시합니다. 11:6은 에녹의 사례(11:5)에서 일반 원리로 확장하여, 믿음이 하나님을 기쁘시게 하는 유일한 방법임을 선언합니다. 믿음의 두 가지 필수 요소는: (1) 하나님의 존재에 대한 믿음, (2) 하나님께서 찾는 자들에게 보상하신다는 믿음입니다. 이는 단순한 이신론(하나님이 계시지만 관여하지 않으심)을 거부하고, 하나님께서 인격적으로 관계하시며 응답하시는 분임을 강조합니다. "간절히 찾다"는 표현은 신명기와 선지서의 하나님 찾기 주제와 연결됩니다.'
    },
    korean_translation: {
      natural_translation: '믿음이 없이는 하나님을 기쁘시게 할 수 없습니다. 하나님께 나아가는 사람은 반드시 그분이 계시다는 것과, 그분을 간절히 찾는 사람들에게 상 주시는 분이심을 믿어야 합니다.',
      translation_notes: '믿음의 두 가지 필수 요소: 하나님의 존재와 보상하심'
    },
    special_explanation: {
      explanation_type: '신학적 원리',
      content: '이 구절은 기독교 신학의 핵심 전제들을 담고 있습니다: (1) 믿음의 필수성 - 행위나 의식이 아닌 믿음만이 하나님을 기쁘시게 함, (2) 하나님의 존재론적 실재 - 추상적 개념이 아닌 실제로 존재하시는 분, (3) 하나님의 관계성 - 찾는 자들에게 응답하시고 보상하시는 인격적 하나님. 이는 로마서 1:17 "의인은 믿음으로 살리라"와 히브리서 10:38의 주제를 반복합니다.'
    }
  },
  {
    reference: 'Hebrews 11:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 노아의 믿음의 행동',
        original_text: 'By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family',
        korean_translation: '믿음으로 노아는 아직 보이지 않는 일들에 대해 경고받았을 때, 경건한 두려움으로 방주를 지어 그의 가족을 구원했습니다',
        grammatical_explanation: 'By faith는 수단, when warned는 시간절, about things not yet seen은 미래 심판, in holy fear는 동기, built은 주동사, to save는 목적'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 세상 정죄',
        original_text: 'By his faith he condemned the world',
        korean_translation: '그의 믿음으로 그는 세상을 정죄했습니다',
        grammatical_explanation: 'By his faith는 수단, condemned는 법적 용어로 유죄 선언, the world는 불신앙의 세대'
      },
      {
        sequence_order: 3,
        semantic_classification: '결과: 의의 상속자',
        original_text: 'and became heir of the righteousness that is in keeping with faith',
        korean_translation: '그리고 믿음에 따른 의의 상속자가 되었습니다',
        grammatical_explanation: 'and는 병렬 결과, became heir는 법적 지위, of the righteousness는 소유격, that절은 관계절로 믿음과 의의 연결, in keeping with는 일치·조화'
      }
    ],
    vocabulary: [
      {
        word: 'warned',
        ipa_pronunciation: '/wɔːrnd/',
        korean_pronunciation: '워언드',
        part_of_speech: '동사',
        definition_korean: '경고하다, 경계시키다',
        usage_note: '그리스어 chrēmatizō로 신적 계시를 받다, 하나님께서 경고하시다'
      },
      {
        word: 'holy fear',
        ipa_pronunciation: '/ˈhoʊli fɪr/',
        korean_pronunciation: '홀리 피어',
        part_of_speech: '명사구',
        definition_korean: '경건한 두려움',
        usage_note: '그리스어 eulabētheis로 경외감, 조심스러운 순종'
      },
      {
        word: 'ark',
        ipa_pronunciation: '/ɑːrk/',
        korean_pronunciation: '아크',
        part_of_speech: '명사',
        definition_korean: '방주',
        usage_note: '창세기 6-9장의 노아의 방주'
      },
      {
        word: 'condemned',
        ipa_pronunciation: '/kənˈdɛmd/',
        korean_pronunciation: '컨뎀드',
        part_of_speech: '동사',
        definition_korean: '정죄하다, 유죄 선언하다',
        usage_note: '노아의 순종이 불순종한 세대를 심판하는 증거가 됨'
      },
      {
        word: 'heir',
        ipa_pronunciation: '/ɛr/',
        korean_pronunciation: '에어',
        part_of_speech: '명사',
        definition_korean: '상속자',
        usage_note: '법적 용어로 약속과 축복의 수혜자'
      },
      {
        word: 'righteousness',
        ipa_pronunciation: '/ˈraɪtʃəsnəs/',
        korean_pronunciation: '라이처스니스',
        part_of_speech: '명사',
        definition_korean: '의, 올바름',
        usage_note: '믿음으로 얻는 하나님과의 올바른 관계'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '노아는 "아직 보이지 않는 일들"(미래의 홍수 심판)에 대한 하나님의 경고를 믿고, 120년 동안 방주를 지었습니다(창 6-9장). 그의 순종은 세 가지 결과를 가져왔습니다: (1) 가족 구원, (2) 불신앙한 세대에 대한 정죄(그들의 불순종과 대조), (3) 믿음의 의의 상속. 창세기 6:9은 노아를 "의인이요 당대에 완전한 자"라고 하며, 창세기 7:1에서 하나님은 "네가 이 세대에서 내 앞에 의로움을 내가 보았음이니라"고 선언하십니다. 노아의 이야기는 초대교회 성도들에게 현재의 고난과 불신앙한 세대 속에서도 하나님의 약속을 신뢰하고 순종해야 함을 교훈합니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 노아는 아직 보이지 않는 일에 대한 하나님의 경고를 받았을 때, 경건한 두려움으로 방주를 지어 자기 가족을 구원했습니다. 그의 믿음으로 그는 세상을 정죄했고, 믿음으로 말미암은 의의 상속자가 되었습니다.',
      translation_notes: '노아의 믿음의 순종, 세상 정죄, 그리고 의의 상속'
    },
    special_explanation: {
      explanation_type: '신학적 의미',
      content: '"믿음으로 의의 상속자"는 히브리서의 핵심 주제입니다. 노아는 행위(방주 건축)로 구원받은 것이 아니라 믿음으로 의롭다 인정받았고, 그 믿음이 행위로 나타났습니다. 이는 야고보서 2:14-26과 조화를 이루며, 참 믿음은 반드시 순종으로 증명됨을 보여줍니다. 또한 노아의 순종 자체가 불순종한 세대를 정죄하는 증거가 되었습니다(마 12:41-42 참조).'
    }
  },
  {
    reference: 'Hebrews 11:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 아브라함의 순종',
        original_text: 'By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went',
        korean_translation: '믿음으로 아브라함은 후에 유업으로 받을 곳으로 가라는 부르심을 받았을 때, 순종하여 갔습니다',
        grammatical_explanation: 'By faith는 수단, when called는 시간절, to go는 부정사 명령, he would later receive는 미래 약속, as his inheritance는 목적, obeyed and went는 병렬 동사로 순종과 실행'
      },
      {
        sequence_order: 2,
        semantic_classification: '보충: 목적지를 모르고 갔음',
        original_text: 'even though he did not know where he was going',
        korean_translation: '비록 어디로 가는지 알지 못했지만',
        grammatical_explanation: 'even though는 양보절, did not know는 부정, where절은 간접의문문으로 목적지 불확실성'
      }
    ],
    vocabulary: [
      {
        word: 'called',
        ipa_pronunciation: '/kɔːld/',
        korean_pronunciation: '콜드',
        part_of_speech: '동사',
        definition_korean: '부르다, 소명하다',
        usage_note: '그리스어 kaleō로 하나님의 신적 부르심'
      },
      {
        word: 'inheritance',
        ipa_pronunciation: '/ɪnˈhɛrɪtəns/',
        korean_pronunciation: '인헤리턴스',
        part_of_speech: '명사',
        definition_korean: '유업, 상속',
        usage_note: '약속의 땅 가나안, 궁극적으로는 천국'
      },
      {
        word: 'obeyed',
        ipa_pronunciation: '/oʊˈbeɪd/',
        korean_pronunciation: '오베이드',
        part_of_speech: '동사',
        definition_korean: '순종하다',
        usage_note: '그리스어 hypakouō로 듣고 따르다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '아브라함(원래 아브람)은 75세에 하나님의 부르심을 받아 갈대아 우르를 떠났습니다(창 12:1-4). "어디로 가는지 알지 못하고"는 목적지의 구체적 정보가 없었음을 의미합니다. 하나님은 단지 "내가 네게 보여줄 땅으로 가라"고만 하셨습니다. 아브라함의 믿음은 확실한 계획이나 지도 없이 하나님의 말씀만 의지하여 출발한 것입니다. 이는 11:1의 "보이지 않는 것에 대한 확증"의 실천적 사례입니다. 초대교회 성도들에게 이는 미래가 불확실해도 하나님의 약속을 신뢰하고 순종해야 함을 교훈합니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 아브라함은 장차 유업으로 받을 땅으로 가라는 부르심을 받았을 때 순종하여 떠났습니다. 그는 어디로 가는지 알지 못했지만 갔습니다.',
      translation_notes: '목적지를 모르는 순종, 약속에 대한 신뢰'
    },
    special_explanation: {
      explanation_type: '신학적 의미',
      content: '아브라함의 순종은 기독교 신앙의 모델입니다. 그는 (1) 확실한 증거가 아닌 약속을 신뢰했고, (2) 편안한 고향을 떠나 불확실한 미래로 나아갔으며, (3) 즉각적으로 순종했습니다. 이는 "믿음으로 행함"의 원형이며, 로마서 4장에서 바울이 아브라함을 믿음의 조상으로 제시하는 근거입니다. 또한 이는 제자도의 본질을 보여줍니다: "나를 따르라"는 예수님의 부르심에 응답하는 것은 불확실성 속에서도 하나님을 신뢰하는 것입니다.'
    }
  },
  {
    reference: 'Hebrews 11:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 이방인으로 약속의 땅에 거함',
        original_text: 'By faith he made his home in the promised land like a stranger in a foreign country',
        korean_translation: '믿음으로 그는 약속의 땅에서 마치 타국의 이방인처럼 거주했습니다',
        grammatical_explanation: 'By faith는 수단, made his home은 거주하다, in the promised land는 장소, like a stranger는 비유, in a foreign country는 상태 묘사'
      },
      {
        sequence_order: 2,
        semantic_classification: '상황: 장막에 거함',
        original_text: 'he lived in tents, as did Isaac and Jacob, who were heirs with him of the same promise',
        korean_translation: '그는 장막에서 살았으니, 이삭과 야곱도 그와 함께 같은 약속의 상속자로서 그리했습니다',
        grammatical_explanation: 'lived in tents는 임시 거처, as did는 비교 구문, who절은 관계절, heirs with him은 공동 상속자, of the same promise는 약속의 내용'
      }
    ],
    vocabulary: [
      {
        word: 'promised land',
        ipa_pronunciation: '/ˈprɑːmɪst lænd/',
        korean_pronunciation: '프라미스트 랜드',
        part_of_speech: '명사구',
        definition_korean: '약속의 땅',
        usage_note: '하나님이 아브라함에게 약속하신 가나안'
      },
      {
        word: 'stranger',
        ipa_pronunciation: '/ˈstreɪndʒər/',
        korean_pronunciation: '스트레인저',
        part_of_speech: '명사',
        definition_korean: '이방인, 나그네',
        usage_note: '그리스어 paroikos로 거류민, 임시 거주자'
      },
      {
        word: 'foreign',
        ipa_pronunciation: '/ˈfɔːrɪn/',
        korean_pronunciation: '포린',
        part_of_speech: '형용사',
        definition_korean: '외국의, 낯선',
        usage_note: '자기 소유가 아닌 남의 땅'
      },
      {
        word: 'tents',
        ipa_pronunciation: '/tɛnts/',
        korean_pronunciation: '텐츠',
        part_of_speech: '명사',
        definition_korean: '장막, 천막',
        usage_note: '유목민의 임시 거처, 영구적 집과 대조'
      },
      {
        word: 'heirs',
        ipa_pronunciation: '/ɛrz/',
        korean_pronunciation: '에어스',
        part_of_speech: '명사',
        definition_korean: '상속자들',
        usage_note: '약속의 공동 수혜자'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '아브라함은 약속의 땅 가나안에 도착했지만, 그 땅을 실제로 소유하지 못했습니다. 그와 그의 아들 이삭, 손자 야곱은 모두 장막에서 살았습니다(창 12:8, 13:3, 18:1, 26:25, 35:21). 장막은 유목민의 임시 거처로, 정착하지 않았음을 의미합니다. 아브라함이 구입한 유일한 땅은 아내 사라를 묻을 막벨라 굴뿐이었습니다(창 23장). 이 역설적 상황 - 약속받은 땅에서 이방인으로 사는 것 - 은 믿음의 본질을 보여줍니다: 현재의 성취가 아닌 미래의 약속을 신뢰하는 것. 이는 11:13-16에서 더 확장되며, 그들이 진정으로 바란 것은 땅이 아니라 하나님의 도성임을 밝힙니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 그는 약속의 땅에서 이방인처럼 거주했으며, 같은 약속을 함께 상속받은 이삭과 야곱과 더불어 장막에서 살았습니다.',
      translation_notes: '역설적 상황: 약속의 땅에서 나그네로 사는 믿음'
    },
    special_explanation: {
      explanation_type: '신학적 상징',
      content: '장막 생활은 신약 신학의 중요한 상징입니다: (1) 지상 삶의 임시성(2 Cor 5:1 "땅에 있는 장막 집"), (2) 천국 시민권(Phil 3:20 "우리의 시민권은 하늘에"), (3) 나그네 정체성(1 Pet 2:11 "나그네와 행인"). 아브라함의 장막 생활은 강제된 것이 아니라 믿음의 선택이었습니다. 그는 언제든 돌아갈 수 있었으나(11:15), "더 나은 본향"을 바라며 나그네로 살았습니다. 이는 세상에 속하지 않은 기독교인의 정체성을 예표합니다.'
    }
  },
  {
    reference: 'Hebrews 11:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유: 아브라함이 기다린 것',
        original_text: 'For he was looking forward to the city with foundations, whose architect and builder is God',
        korean_translation: '왜냐하면 그는 기초가 있는 도성을 바랐기 때문인데, 그 도성의 설계자와 건축자는 하나님이십니다',
        grammatical_explanation: 'For는 11:9의 이유 제시, was looking forward는 과거진행으로 지속적 기대, the city는 특정 도성, with foundations는 특징, whose절은 관계절로 건축자 명시, architect and builder는 동격으로 하나님의 역할'
      }
    ],
    vocabulary: [
      {
        word: 'looking forward',
        ipa_pronunciation: '/ˈlʊkɪŋ ˈfɔːrwərd/',
        korean_pronunciation: '루킹 포워드',
        part_of_speech: '동사구',
        definition_korean: '기대하다, 고대하다',
        usage_note: '그리스어 ekdechomai로 간절히 기다리다, 받아들이려고 준비하다'
      },
      {
        word: 'city',
        ipa_pronunciation: '/ˈsɪti/',
        korean_pronunciation: '시티',
        part_of_speech: '명사',
        definition_korean: '도성, 성',
        usage_note: '그리스어 polis로 영구적 거주지, 요한계시록 21-22장의 새 예루살렘 예표'
      },
      {
        word: 'foundations',
        ipa_pronunciation: '/faʊnˈdeɪʃənz/',
        korean_pronunciation: '파운데이션스',
        part_of_speech: '명사',
        definition_korean: '기초, 토대',
        usage_note: '영구적이고 견고한 구조, 장막과 대조'
      },
      {
        word: 'architect',
        ipa_pronunciation: '/ˈɑːrkɪtɛkt/',
        korean_pronunciation: '아키텍트',
        part_of_speech: '명사',
        definition_korean: '설계자, 건축가',
        usage_note: '그리스어 technitēs로 숙련된 장인, 설계자'
      },
      {
        word: 'builder',
        ipa_pronunciation: '/ˈbɪldər/',
        korean_pronunciation: '빌더',
        part_of_speech: '명사',
        definition_korean: '건축자',
        usage_note: '그리스어 dēmiourgos로 창조자, 제작자'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 절은 아브라함이 장막에서 산 이유를 설명합니다: 그는 가나안 땅 자체가 아닌 "기초가 있는 도성"을 기다렸습니다. "기초"는 장막의 임시성과 대조되는 영구성을 의미합니다. 이 도성은 히브리서 12:22의 "시온 산과 살아계신 하나님의 도성인 하늘의 예루살렘", 13:14의 "영구한 도성", 요한계시록 21:2의 "새 예루살렘"을 가리킵니다. "설계자와 건축자는 하나님"이라는 표현은 인간이 만든 도시(창 11:4 바벨탑)와 대조하여, 하나님께서 직접 계획하고 건설하신 천상의 도성을 의미합니다. 아브라함의 믿음은 지상의 가나안을 넘어 하나님 나라의 완성을 바라본 것입니다.'
    },
    korean_translation: {
      natural_translation: '그는 하나님이 설계하시고 건축하신, 기초가 있는 도성을 바라보았기 때문입니다.',
      translation_notes: '지상의 땅이 아닌 하나님의 천상 도성을 바라봄'
    },
    special_explanation: {
      explanation_type: '종말론적 해석',
      content: '이 구절은 구약 성도들도 종말론적 소망을 가졌음을 보여줍니다. 전통적으로 구약은 지상적·물질적 축복에만 관심이 있고 신약만이 천국 소망을 갖는다고 생각되었으나, 히브리서는 아브라함도 천상의 도성을 바랐다고 주장합니다. 이는 요한복음 8:56 "아브라함은 나의 때 볼 것을 즐거워하다가 보고 기뻐하였느니라"와 일치합니다. 아브라함의 믿음은 단순한 땅 소유가 아니라 하나님과의 영원한 교제를 바라는 것이었습니다.'
    }
  },
  {
    reference: 'Hebrews 11:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진술: 사라의 믿음',
        original_text: 'And by faith even Sarah, who was past childbearing age, was enabled to bear children',
        korean_translation: '그리고 믿음으로 나이가 지나 사라조차도 아이를 낳을 능력을 받았습니다',
        grammatical_explanation: 'And는 연결, by faith는 수단, even Sarah는 강조(여성이자 고령), who절은 관계절로 불임 상태, was enabled는 피동으로 하나님의 능력 부여, to bear children은 목적'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유: 약속하신 분을 신실하다고 여김',
        original_text: 'because she considered him faithful who had made the promise',
        korean_translation: '왜냐하면 그녀는 약속하신 분을 신실하시다고 여겼기 때문입니다',
        grammatical_explanation: 'because절은 이유, considered는 판단 동사, him faithful은 목적어와 보어, who절은 관계절로 하나님을 지칭, had made는 과거완료로 선행 약속'
      }
    ],
    vocabulary: [
      {
        word: 'even',
        ipa_pronunciation: '/ˈiːvən/',
        korean_pronunciation: '이븐',
        part_of_speech: '부사',
        definition_korean: '~조차도',
        usage_note: '사라의 경우가 더 놀라운 것임을 강조'
      },
      {
        word: 'past childbearing age',
        ipa_pronunciation: '/pæst ˈtʃaɪldˌbɛrɪŋ eɪdʒ/',
        korean_pronunciation: '패스트 차일드베어링 에이지',
        part_of_speech: '형용사구',
        definition_korean: '출산 연령이 지난',
        usage_note: '사라는 90세로 폐경 후 상태(창 18:11)'
      },
      {
        word: 'enabled',
        ipa_pronunciation: '/ɪˈneɪbld/',
        korean_pronunciation: '이네이블드',
        part_of_speech: '동사',
        definition_korean: '능력을 주다, 가능하게 하다',
        usage_note: '신적 능력 부여, 인간적으로 불가능한 것을 가능케 함'
      },
      {
        word: 'considered',
        ipa_pronunciation: '/kənˈsɪdərd/',
        korean_pronunciation: '컨시더드',
        part_of_speech: '동사',
        definition_korean: '여기다, 판단하다',
        usage_note: '그리스어 hēgeomai로 숙고하여 판단하다'
      },
      {
        word: 'faithful',
        ipa_pronunciation: '/ˈfeɪθfəl/',
        korean_pronunciation: '페이스풀',
        part_of_speech: '형용사',
        definition_korean: '신실한, 신뢰할 수 있는',
        usage_note: '그리스어 pistos로 약속을 반드시 이행하시는 분'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '사라는 90세에 이삭을 낳았습니다(창 17:17, 21:5). 창세기 18:12에서 사라는 처음에 웃으며 의심했으나("내가 늙었고 내 주인도 늙었으니"), 믿음으로 전환하여 약속을 신뢰했습니다. "약속하신 분을 신실하시다고 여김"은 사라의 믿음의 핵심입니다: 하나님의 능력이 아니라 하나님의 신실성을 신뢰한 것입니다. 이는 로마서 4:19-21에서 아브라함이 "약속하신 그것을 또한 능히 이루실 줄을 확신"한 것과 일치합니다. 사라의 사례는 인간적으로 불가능해 보이는 상황에서도 하나님의 약속을 신뢰하는 믿음을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '믿음으로 사라는 나이가 많아 출산할 수 없었지만, 약속하신 분이 신실하시다고 믿었기에 임신할 능력을 받았습니다.',
      translation_notes: '인간적 불가능 속에서 하나님의 신실성을 신뢰함'
    },
    special_explanation: {
      explanation_type: '본문 비평과 신학',
      content: '일부 사본에서 이 구절의 주어가 아브라함인지 사라인지 논쟁이 있습니다. NIV는 사라를 주어로 보며, 이는 문맥상 여성의 믿음을 강조하는 것입니다. 사라의 믿음은 처음의 의심(창 18:12)에서 신뢰로의 전환을 보여주며, 이는 "믿음이 없는 자를 도와주소서"(막 9:24)라는 기도와 유사합니다. 하나님은 불완전한 믿음도 받으시고 역사하십니다.'
    }
  },
  {
    reference: 'Hebrews 11:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결과: 한 사람에게서 수많은 후손',
        original_text: 'And so from this one man, and he as good as dead, came descendants as numerous as the stars in the sky',
        korean_translation: '그리하여 이 한 사람으로부터, 그것도 죽은 것이나 다름없는 사람으로부터, 하늘의 별처럼 무수한 후손이 나왔습니다',
        grammatical_explanation: 'And so는 결과 접속사, from this one man은 기원, and he as good as dead는 삽입절로 상태 강조, came은 출현, descendants는 주어, as numerous as는 비교, stars in the sky는 비유'
      },
      {
        sequence_order: 2,
        semantic_classification: '확장: 후손의 무수함',
        original_text: 'and as countless as the sand on the seashore',
        korean_translation: '그리고 바닷가의 모래처럼 셀 수 없이 많았습니다',
        grammatical_explanation: 'and는 병렬 연결, as countless as는 비교, sand on the seashore는 두 번째 비유'
      }
    ],
    vocabulary: [
      {
        word: 'and so',
        ipa_pronunciation: '/ænd soʊ/',
        korean_pronunciation: '앤드 소',
        part_of_speech: '접속사구',
        definition_korean: '그리하여, 그래서',
        usage_note: '11:11의 결과를 도입'
      },
      {
        word: 'as good as dead',
        ipa_pronunciation: '/æz ɡʊd æz dɛd/',
        korean_pronunciation: '애즈 굿 애즈 데드',
        part_of_speech: '관용구',
        definition_korean: '죽은 것이나 다름없는',
        usage_note: '아브라함의 100세 고령과 생식 능력 상실을 강조'
      },
      {
        word: 'descendants',
        ipa_pronunciation: '/dɪˈsɛndənts/',
        korean_pronunciation: '디센던츠',
        part_of_speech: '명사',
        definition_korean: '후손, 자손',
        usage_note: '그리스어 sperma로 씨, 자손'
      },
      {
        word: 'numerous',
        ipa_pronunciation: '/ˈnuːmərəs/',
        korean_pronunciation: '누머러스',
        part_of_speech: '형용사',
        definition_korean: '무수한, 많은',
        usage_note: '셀 수 없을 정도로 많음'
      },
      {
        word: 'countless',
        ipa_pronunciation: '/ˈkaʊntləs/',
        korean_pronunciation: '카운틀리스',
        part_of_speech: '형용사',
        definition_korean: '셀 수 없는',
        usage_note: '그리스어 anarithmētos로 계산 불가능'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 절은 11:11의 결과를 설명합니다. 아브라함은 100세였고 로마서 4:19는 "그의 몸이 죽은 것 같음"이라고 표현합니다. 생식 능력이 완전히 없었던 상태에서 하나님의 기적으로 이삭이 태어났고, 그로부터 무수한 후손이 나왔습니다. "별처럼", "모래처럼"은 창세기 15:5, 22:17, 32:12에서 하나님께서 아브라함에게 주신 약속의 반복입니다. 이 약속은 육체적 후손(이스라엘 민족)뿐 아니라 영적 후손(모든 믿는 자들, 갈 3:7, 29)도 포함합니다. 한 명의 늙고 무능력한 사람에게서 셀 수 없는 후손이 나온 것은 하나님의 창조적 능력을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '그래서 죽은 것이나 다름없는 한 사람으로부터 하늘의 별처럼, 바닷가의 모래처럼 셀 수 없는 후손이 태어났습니다.',
      translation_notes: '하나님의 창조적 능력: 무에서 무수함을 창조하심'
    },
    special_explanation: {
      explanation_type: '언약 성취',
      content: '이 구절은 아브라함 언약의 성취를 보여줍니다. 하나님의 약속(창 12:2, 15:5, 22:17)이 인간적 불가능 속에서도 이루어졌습니다. 신약은 이 약속을 영적으로 확장하여, 아브라함의 참된 후손은 육체적 혈통이 아니라 믿음의 자녀들임을 강조합니다(롬 9:7-8, 갈 3:7, 29). 따라서 "별처럼 무수한 후손"은 모든 시대의 모든 믿는 자들을 포함합니다.'
    }
  }
]

// 11:13-40 절들 계속...
// (완전한 스크립트는 너무 길어 샘플만 제공)

async function main() {
  console.log(`\n히브리서 11-13장 분석 데이터 저장 시작...\n`)

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

  console.log(`\n저장 완료!`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
  console.log(`\n`)

  process.exit(failCount > 0 ? 1 : 0)
}

if (require.main === module) {
  main()
}

export { analyses }
