import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysisData: AnalysisData[] = [
  {
    reference: 'Colossians 3:1',
    sentence_structures: [
      {
        structure: 'Since, then, you have been raised with Christ',
        explanation: '조건절 - 완료 수동태로 그리스도와 함께 부활한 신학적 사실을 전제로 제시'
      },
      {
        structure: 'set your hearts on things above',
        explanation: '명령문 - 위의 것들에 마음을 두라는 직접적 권면'
      },
      {
        structure: 'where Christ is, seated at the right hand of God',
        explanation: '관계절 - 그리스도의 현재 위치를 하나님 우편으로 설명'
      }
    ],
    key_words: [
      {
        word: 'raised',
        pronunciation_ipa: '/reɪzd/',
        pronunciation_korean: '레이즈드',
        meaning: '일으킴을 받은, 부활시킴을 받은'
      },
      {
        word: 'hearts',
        pronunciation_ipa: '/hɑrts/',
        pronunciation_korean: '하츠',
        meaning: '마음, 심령'
      },
      {
        word: 'things above',
        pronunciation_ipa: '/θɪŋz əˈbʌv/',
        pronunciation_korean: '씽즈 어버브',
        meaning: '위의 것들, 하늘의 것들'
      },
      {
        word: 'seated',
        pronunciation_ipa: '/ˈsiːtɪd/',
        pronunciation_korean: '시티드',
        meaning: '앉아 계신'
      }
    ],
    contextual_explanation: '바울은 골로새 교회 성도들에게 그리스도와의 연합을 통한 새로운 정체성을 강조합니다. "그리스도와 함께 일으킴을 받았다"는 표현은 세례를 통해 그리스도의 죽음과 부활에 참여한 신학적 현실을 가리킵니다. 이는 단순히 미래의 소망이 아니라 현재 이미 일어난 영적 사건입니다. "위의 것들"은 지상의 물질적이고 일시적인 가치와 대비되는 하늘의 영원한 가치를 의미합니다. 그리스도께서 하나님 우편에 앉아 계시다는 것은 구약의 시편 110:1을 인용한 것으로, 메시아의 왕권과 권위를 나타냅니다. 따라서 성도들은 자신들의 주님이 계신 곳, 즉 하늘의 가치와 관점에 마음을 집중해야 합니다.',
    korean_translation: '그러므로 여러분이 그리스도와 함께 일으킴을 받았으니, 위의 것들을 추구하십시오. 거기에는 그리스도께서 하나님의 오른편에 앉아 계십니다.',
    special_notes: '"raised with Christ"는 완료 수동태(perfect passive)로 과거에 완성되어 현재까지 지속되는 상태를 나타냅니다. "set your hearts"는 현재 명령형으로 계속적인 행동을 요구합니다.'
  },
  {
    reference: 'Colossians 3:2',
    sentence_structures: [
      {
        structure: 'Set your minds on things above',
        explanation: '명령문 - 생각을 위의 것들에 두라는 적극적 권면'
      },
      {
        structure: 'not on earthly things',
        explanation: '부정 대조구 - 땅의 것들과 대비하여 강조'
      }
    ],
    key_words: [
      {
        word: 'minds',
        pronunciation_ipa: '/maɪndz/',
        pronunciation_korean: '마인즈',
        meaning: '생각, 사고, 정신'
      },
      {
        word: 'earthly',
        pronunciation_ipa: '/ˈɜrθli/',
        pronunciation_korean: '어슬리',
        meaning: '땅의, 세상의, 일시적인'
      }
    ],
    contextual_explanation: '1절의 "마음"(hearts)에 이어 여기서는 "생각"(minds)을 언급하며, 신자의 내면 전체가 하늘의 가치로 방향 전환되어야 함을 강조합니다. "위의 것들"과 "땅의 것들"의 대조는 초대 교회가 직면한 이원론적 세계관과 연결됩니다. 골로새서가 대응하는 거짓 가르침은 물질 세계를 악한 것으로 보거나, 반대로 영적 영역을 무시하고 현세적 가치에만 집중하는 극단을 모두 포함했을 가능성이 있습니다. 바울은 육체를 부정하는 것이 아니라, 그리스도 안에서 새로운 관점과 가치관을 가지라고 권면합니다. 이는 도피주의가 아니라 그리스도의 왕권 아래서 모든 삶을 재구성하는 것입니다.',
    korean_translation: '위의 것들에 여러분의 생각을 두고, 땅의 것들에 두지 마십시오.',
    special_notes: '"minds"와 "hearts"(1절)의 구분은 의지와 감정, 이성과 정서를 모두 포함하는 전인적 헌신을 요구하는 히브리적 사고를 반영합니다.'
  },
  {
    reference: 'Colossians 3:3',
    sentence_structures: [
      {
        structure: 'For you died',
        explanation: '이유절 - 신자의 영적 죽음을 과거 사실로 진술'
      },
      {
        structure: 'and your life is now hidden with Christ in God',
        explanation: '병렬절 - 현재 숨겨진 새 생명의 위치를 설명'
      }
    ],
    key_words: [
      {
        word: 'died',
        pronunciation_ipa: '/daɪd/',
        pronunciation_korean: '다이드',
        meaning: '죽었다'
      },
      {
        word: 'hidden',
        pronunciation_ipa: '/ˈhɪdən/',
        pronunciation_korean: '히든',
        meaning: '숨겨진, 감추어진'
      }
    ],
    contextual_explanation: '신자가 "죽었다"는 것은 세례를 통해 그리스도의 죽음에 연합했다는 신학적 진리입니다(로마서 6:3-4). 이는 옛 자아와 죄의 지배로부터의 해방을 의미합니다. "생명이 그리스도와 함께 하나님 안에 감추어졌다"는 독특한 표현은 여러 의미를 담고 있습니다. 첫째, 신자의 참된 정체성은 외적으로 드러나지 않고 영적 영역에 속합니다. 둘째, 이 생명은 안전하게 보호되고 보존됩니다. 셋째, 현재 세상은 이 영광의 실체를 아직 알지 못합니다. "하나님 안에"라는 표현은 궁극적 안전과 영원성을 나타냅니다. 이는 현재의 고난이나 어려움 속에서도 신자의 참된 생명은 흔들리지 않는다는 확신을 제공합니다.',
    korean_translation: '여러분은 이미 죽었고, 여러분의 생명은 이제 그리스도와 함께 하나님 안에 감추어져 있습니다.',
    special_notes: '"hidden"은 완료 수동분사로 계속되는 상태를 나타냅니다. 이는 신비주의나 영지주의적 비밀 지식이 아니라, 그리스도와의 연합이라는 복음의 핵심 진리입니다.'
  },
  {
    reference: 'Colossians 3:4',
    sentence_structures: [
      {
        structure: 'When Christ, who is your life, appears',
        explanation: '시간절 - 그리스도의 재림을 미래 사건으로 제시'
      },
      {
        structure: 'then you also will appear with him in glory',
        explanation: '주절 - 성도들의 영광스러운 나타남을 약속'
      }
    ],
    key_words: [
      {
        word: 'appears',
        pronunciation_ipa: '/əˈpɪrz/',
        pronunciation_korean: '어피어즈',
        meaning: '나타나다, 현현하다'
      },
      {
        word: 'glory',
        pronunciation_ipa: '/ˈɡlɔri/',
        pronunciation_korean: '글로리',
        meaning: '영광, 영광스러움'
      }
    ],
    contextual_explanation: '3절의 "숨겨진" 생명이 4절에서 "나타날" 영광으로 대조를 이룹니다. "그리스도가 곧 여러분의 생명"이라는 표현은 신자의 정체성이 그리스도와 완전히 일체화되었음을 보여줍니다. 이는 단순히 그리스도를 따르는 것을 넘어, 그리스도 자체가 신자 존재의 원천이며 본질이라는 의미입니다. "나타나다"(appears)는 묵시적 용어로 그리스도의 재림을 가리킵니다. 현재는 숨겨진 영광이 그때 공개적으로 드러날 것입니다. "함께"(with him)는 신자와 그리스도의 불가분의 연합을 강조합니다. 이 소망은 현재의 고난과 핍박 속에서 인내하게 하는 동력이며, 동시에 현재의 거룩한 삶을 촉구하는 근거가 됩니다.',
    korean_translation: '여러분의 생명이신 그리스도께서 나타나실 때, 여러분도 그분과 함께 영광 중에 나타날 것입니다.',
    special_notes: '"who is your life"는 관계절로 그리스도의 본질적 역할을 정의합니다. 미래시제 "will appear"는 확실한 미래 사건을 나타냅니다.'
  },
  {
    reference: 'Colossians 3:5',
    sentence_structures: [
      {
        structure: 'Put to death, therefore, whatever belongs to your earthly nature',
        explanation: '명령문 - 땅의 본성에 속한 것들을 죽이라는 강력한 권면'
      },
      {
        structure: 'sexual immorality, impurity, lust, evil desires and greed',
        explanation: '동격 목록 - 구체적인 죄악들을 나열'
      },
      {
        structure: 'which is idolatry',
        explanation: '관계절 - 탐욕을 우상숭배로 규정'
      }
    ],
    key_words: [
      {
        word: 'put to death',
        pronunciation_ipa: '/pʊt tuː dɛθ/',
        pronunciation_korean: '풋 투 데스',
        meaning: '죽이다, 제거하다'
      },
      {
        word: 'sexual immorality',
        pronunciation_ipa: '/ˈsɛkʃuəl ɪˌmɔˈræləti/',
        pronunciation_korean: '섹슈얼 이모랠러티',
        meaning: '성적 부도덕'
      },
      {
        word: 'greed',
        pronunciation_ipa: '/ɡriːd/',
        pronunciation_korean: '그리드',
        meaning: '탐욕'
      },
      {
        word: 'idolatry',
        pronunciation_ipa: '/aɪˈdɑlətri/',
        pronunciation_korean: '아이달러트리',
        meaning: '우상숭배'
      }
    ],
    contextual_explanation: '1-4절의 신학적 토대 위에서 5절부터는 실천적 권면이 시작됩니다. "그러므로"(therefore)는 논리적 연결어로, 그리스도와 함께 죽고 부활했다는 사실이 윤리적 삶의 근거임을 보여줍니다. "죽이다"(put to death)는 강력한 의지적 행위를 요구하는 명령입니다. 나열된 다섯 가지 죄악은 성적 영역(sexual immorality, impurity, lust)과 물질적 영역(evil desires, greed)을 포괄합니다. 그리스-로마 문화에서 이러한 행위들은 흔히 용인되었지만, 그리스도인들은 다른 기준으로 살아야 했습니다. "탐욕이 곧 우상숭배"라는 규정은 탐욕이 하나님을 대체하는 것임을 명확히 합니다. 이는 외적 행위의 금지를 넘어 마음의 우선순위와 헌신의 문제입니다.',
    korean_translation: '그러므로 여러분의 땅의 본성에 속한 것들을 죽이십시오. 곧 음란, 부정, 정욕, 악한 욕망, 그리고 우상숭배인 탐욕입니다.',
    special_notes: '"earthly nature"(직역: 땅 위의 지체들)는 죄악이 표현되는 인간의 육체적·정신적 기능을 가리킵니다. "which is idolatry"는 관계대명사로 탐욕만을 지칭하거나 전체 목록을 지칭할 수 있습니다.'
  },
  {
    reference: 'Colossians 3:6',
    sentence_structures: [
      {
        structure: 'Because of these, the wrath of God is coming',
        explanation: '이유절과 주절 - 하나님의 진노가 임하는 이유를 설명'
      }
    ],
    key_words: [
      {
        word: 'wrath',
        pronunciation_ipa: '/ræθ/',
        pronunciation_korean: '래스',
        meaning: '진노, 분노'
      },
      {
        word: 'coming',
        pronunciation_ipa: '/ˈkʌmɪŋ/',
        pronunciation_korean: '커밍',
        meaning: '오고 있는, 다가오는'
      }
    ],
    contextual_explanation: '5절에서 나열한 죄악들이 단순히 사회적으로 바람직하지 않은 것이 아니라, 하나님의 진노를 초래하는 심각한 것임을 밝힙니다. "하나님의 진노"는 구약 예언서에서 자주 나타나는 주제로, 죄에 대한 하나님의 거룩한 반응을 나타냅니다. "오고 있다"는 현재진행형은 이미 진행 중이며 종말에 완성될 심판을 가리킵니다. 이는 로마서 1:18의 "하나님의 진노가 하늘로부터 나타나"와 연결됩니다. 바울 시대의 독자들은 이 진노가 역사 속에서 부분적으로 나타나며(로마 제국의 쇠퇴 등), 최종적으로 재림 때 완전히 드러날 것을 이해했습니다. 이 경고는 신자들이 과거의 삶의 방식에서 완전히 돌이켜야 할 긴급성을 제공합니다.',
    korean_translation: '이런 것들 때문에 하나님의 진노가 오고 있습니다.',
    special_notes: '일부 사본에는 "on those who are disobedient"(불순종하는 자들에게)라는 구절이 추가되어 있으나, 더 이른 사본들에는 없습니다. 현재진행형 "is coming"은 임박성과 확실성을 모두 전달합니다.'
  },
  {
    reference: 'Colossians 3:7',
    sentence_structures: [
      {
        structure: 'You used to walk in these ways',
        explanation: '과거 습관 표현 - 과거의 삶의 방식을 설명'
      },
      {
        structure: 'in the life you once lived',
        explanation: '전치사구 - 과거의 삶을 부연 설명'
      }
    ],
    key_words: [
      {
        word: 'used to walk',
        pronunciation_ipa: '/juːzd tuː wɔːk/',
        pronunciation_korean: '유즈드 투 워크',
        meaning: '걷곤 했다, 행하곤 했다'
      },
      {
        word: 'once',
        pronunciation_ipa: '/wʌns/',
        pronunciation_korean: '원스',
        meaning: '한때, 이전에'
      }
    ],
    contextual_explanation: '"걷다"(walk)는 성경에서 삶의 방식과 행동 패턴을 나타내는 관용적 표현입니다. "used to"는 과거의 습관이지만 현재는 중단된 것을 나타냅니다. 바울은 골로새 성도들의 과거를 상기시킴으로써 현재의 새로운 정체성을 대조합니다. "한때 살던 삶"은 그리스도를 만나기 전 이방인으로서의 삶을 가리킵니다. 골로새는 소아시아의 이방 도시였으며, 주민들은 그리스-로마 문화의 가치관과 도덕 기준 속에서 살았습니다. 회심은 단순히 종교적 신념의 변화가 아니라 전체 삶의 방식의 근본적 전환을 의미했습니다. 이 구절은 정죄가 아니라 은혜로운 변화를 확인하는 것으로, 신자들이 더 이상 그 길에 있지 않다는 확신을 줍니다.',
    korean_translation: '여러분도 전에 그렇게 살 때는 그런 것들 가운데 행하곤 했습니다.',
    special_notes: '"walk"는 히브리어 "halak"의 헬라어 번역으로, 일상적 행동과 생활 방식을 포괄하는 은유입니다. 과거형과 "used to"의 조합은 완전한 단절을 강조합니다.'
  },
  {
    reference: 'Colossians 3:8',
    sentence_structures: [
      {
        structure: 'But now you must also rid yourselves of all such things as these',
        explanation: '대조 명령문 - 과거와 대비하여 현재의 행동을 요구'
      },
      {
        structure: 'anger, rage, malice, slander, and filthy language from your lips',
        explanation: '동격 목록 - 버려야 할 구체적인 죄악들을 나열'
      }
    ],
    key_words: [
      {
        word: 'rid yourselves',
        pronunciation_ipa: '/rɪd jɔːrˈsɛlvz/',
        pronunciation_korean: '리드 유어셀브즈',
        meaning: '벗어버리다, 제거하다'
      },
      {
        word: 'anger',
        pronunciation_ipa: '/ˈæŋɡər/',
        pronunciation_korean: '앵거',
        meaning: '분노'
      },
      {
        word: 'rage',
        pronunciation_ipa: '/reɪdʒ/',
        pronunciation_korean: '레이지',
        meaning: '격노, 격분'
      },
      {
        word: 'malice',
        pronunciation_ipa: '/ˈmælɪs/',
        pronunciation_korean: '멜리스',
        meaning: '악의'
      },
      {
        word: 'slander',
        pronunciation_ipa: '/ˈslændər/',
        pronunciation_korean: '슬랜더',
        meaning: '비방, 중상'
      },
      {
        word: 'filthy language',
        pronunciation_ipa: '/ˈfɪlθi ˈlæŋɡwɪdʒ/',
        pronunciation_korean: '필씨 랭귀지',
        meaning: '음란한 말, 저속한 언어'
      }
    ],
    contextual_explanation: '"이제"(now)는 시간적 대조를 나타내며, 7절의 과거와 명확히 구분합니다. "벗어버리다"는 옷을 벗는 이미지로, 9절의 "옛 사람을 벗었다"와 연결됩니다. 5절의 목록이 주로 개인적 욕망과 관련된 죄였다면, 8절은 대인관계에서 나타나는 죄들을 다룹니다. 다섯 가지는 모두 언어와 태도의 영역입니다. "분노"(anger)는 지속적인 화를, "격노"(rage)는 폭발적인 감정을 나타냅니다. "악의"(malice)는 다른 사람을 해치려는 의도입니다. "비방"(slander)은 다른 사람의 명예를 훼손하는 말이고, "저속한 언어"는 수치스럽고 부적절한 표현입니다. 초대 교회 공동체 내에서 이러한 언어적 죄들은 하나님의 백성으로서의 증거를 훼손하고 공동체의 일치를 해쳤습니다.',
    korean_translation: '그러나 이제는 여러분도 이 모든 것을 벗어버려야 합니다. 곧 분노, 격노, 악의, 비방, 그리고 여러분의 입에서 나오는 저속한 언어입니다.',
    special_notes: '"must also"는 5절의 명령에 추가하여(also) 반드시(must) 해야 할 것을 강조합니다. 언어 관련 죄악들의 나열은 야고보서 3장의 혀에 대한 경고와 연결됩니다.'
  },
  {
    reference: 'Colossians 3:9',
    sentence_structures: [
      {
        structure: 'Do not lie to each other',
        explanation: '부정 명령문 - 거짓말을 금지'
      },
      {
        structure: 'since you have taken off your old self with its practices',
        explanation: '이유절 - 옛 사람을 벗었다는 신학적 근거 제시'
      }
    ],
    key_words: [
      {
        word: 'lie',
        pronunciation_ipa: '/laɪ/',
        pronunciation_korean: '라이',
        meaning: '거짓말하다'
      },
      {
        word: 'taken off',
        pronunciation_ipa: '/ˈteɪkən ɔːf/',
        pronunciation_korean: '테이큰 오프',
        meaning: '벗다, 제거하다'
      },
      {
        word: 'old self',
        pronunciation_ipa: '/oʊld sɛlf/',
        pronunciation_korean: '올드 셀프',
        meaning: '옛 사람, 옛 자아'
      },
      {
        word: 'practices',
        pronunciation_ipa: '/ˈpræktɪsɪz/',
        pronunciation_korean: '프랙티시즈',
        meaning: '행위, 관습'
      }
    ],
    contextual_explanation: '거짓말은 8절의 언어적 죄악들 중 특히 공동체를 파괴하는 것으로 별도로 다뤄집니다. "서로에게"(to each other)는 교회 공동체 내부의 관계를 강조합니다. 거짓말은 신뢰를 무너뜨리고 하나님의 백성으로서의 진실성을 해칩니다. "옛 사람을 벗었다"는 완료 시제로, 회심과 세례 시 이미 일어난 결정적 사건을 가리킵니다. 이는 로마서 6:6의 "옛 사람이 십자가에 못 박혔다"와 같은 진리입니다. "그 행위들과 함께"는 옛 사람이 특정 생활 방식과 불가분의 관계에 있음을 보여줍니다. 따라서 옛 사람을 벗었다면, 그에 속한 행위들도 함께 벗어야 합니다. 이는 신학적 진리(이미 벗었다)와 윤리적 명령(벗어야 한다)의 긴장을 보여주는데, 이는 "이미"와 "아직"의 종말론적 긴장입니다.',
    korean_translation: '서로 거짓말하지 마십시오. 여러분은 옛 사람을 그 행위와 함께 벗어버렸습니다.',
    special_notes: '"have taken off"는 완료 시제로 과거의 결정적 행위가 현재까지 영향을 미침을 나타냅니다. 옷을 벗는 이미지는 10절의 "입었다"와 대조를 이룹니다.'
  },
  {
    reference: 'Colossians 3:10',
    sentence_structures: [
      {
        structure: 'and have put on the new self',
        explanation: '완료 시제 - 새 사람을 입은 사실을 진술'
      },
      {
        structure: 'which is being renewed in knowledge in the image of its Creator',
        explanation: '관계절 - 새 사람이 지속적으로 새로워지는 과정을 설명'
      }
    ],
    key_words: [
      {
        word: 'put on',
        pronunciation_ipa: '/pʊt ɑːn/',
        pronunciation_korean: '풋 온',
        meaning: '입다, 옷을 걸치다'
      },
      {
        word: 'new self',
        pronunciation_ipa: '/nuː sɛlf/',
        pronunciation_korean: '뉴 셀프',
        meaning: '새 사람, 새 자아'
      },
      {
        word: 'renewed',
        pronunciation_ipa: '/rɪˈnuːd/',
        pronunciation_korean: '리뉴드',
        meaning: '새롭게 되는, 갱신되는'
      },
      {
        word: 'knowledge',
        pronunciation_ipa: '/ˈnɑːlɪdʒ/',
        pronunciation_korean: '날리지',
        meaning: '지식, 앎'
      },
      {
        word: 'image',
        pronunciation_ipa: '/ˈɪmɪdʒ/',
        pronunciation_korean: '이미지',
        meaning: '형상, 모습'
      },
      {
        word: 'Creator',
        pronunciation_ipa: '/kriˈeɪtər/',
        pronunciation_korean: '크리에이터',
        meaning: '창조주'
      }
    ],
    contextual_explanation: '9절의 옛 사람을 벗은 것과 대조하여, 새 사람을 입었다는 긍정적 진술이 나옵니다. "새 사람"은 그리스도 안에서 재창조된 인격을 가리킵니다. 흥미롭게도 이미 입었지만(완료 시제) 동시에 "새로워지고 있다"(현재 수동 분사)는 표현이 나옵니다. 이는 칭의(한 번에 완성)와 성화(지속적 과정)의 구분을 보여줍니다. "지식 안에서"는 하나님을 아는 지식, 즉 관계적이고 경험적인 앎을 의미합니다. 이는 골로새서가 대응하는 거짓 교사들의 영지주의적 "지식"과 대비됩니다. 참된 지식은 그리스도를 닮아가는 변화를 가져옵니다. "창조주의 형상을 따라"는 창세기 1:26-27의 인간 창조로 돌아갑니다. 죄로 훼손된 하나님의 형상이 그리스도 안에서 회복되고 있습니다.',
    korean_translation: '그리고 새 사람을 입었습니다. 이 새 사람은 자기를 창조하신 분의 형상을 따라 지식에 이르도록 새로워지고 있습니다.',
    special_notes: '"is being renewed"는 현재 수동 진행형으로 하나님께서 지속적으로 행하시는 작업을 나타냅니다. "in knowledge"는 수단이나 목적으로 해석될 수 있습니다.'
  },
  {
    reference: 'Colossians 3:11',
    sentence_structures: [
      {
        structure: 'Here there is no Gentile or Jew, circumcised or uncircumcised, barbarian, Scythian, slave or free',
        explanation: '부정문 - 새 사람 안에서 모든 사회적 구분이 없음을 나열'
      },
      {
        structure: 'but Christ is all, and is in all',
        explanation: '대조절 - 그리스도가 전부이며 모든 이 안에 계심을 선언'
      }
    ],
    key_words: [
      {
        word: 'Gentile',
        pronunciation_ipa: '/ˈdʒɛntaɪl/',
        pronunciation_korean: '젠타일',
        meaning: '이방인'
      },
      {
        word: 'circumcised',
        pronunciation_ipa: '/ˈsɜːrkəmsaɪzd/',
        pronunciation_korean: '서컴사이즈드',
        meaning: '할례받은'
      },
      {
        word: 'barbarian',
        pronunciation_ipa: '/bɑːrˈbɛəriən/',
        pronunciation_korean: '바베리언',
        meaning: '야만인'
      },
      {
        word: 'Scythian',
        pronunciation_ipa: '/ˈsɪθiən/',
        pronunciation_korean: '시씨언',
        meaning: '스구디아인'
      }
    ],
    contextual_explanation: '"여기"는 새 사람, 즉 그리스도 안에 있는 새로운 인류 공동체를 가리킵니다. 바울은 당시 세계를 구분하던 주요 경계선들을 나열합니다. "헬라인과 유대인"은 종교적·문화적 구분입니다. "할례당과 무할례당"은 언약 백성의 표지에 따른 구분입니다. "야만인과 스구디아인"은 문명의 정도에 따른 구분으로, 스구디아인은 그리스인들이 가장 야만적이라고 여기던 민족이었습니다. "종과 자유인"은 사회경제적 신분의 구분입니다. 이 모든 경계가 그리스도 안에서 무너집니다. "그리스도는 전부요 모든 것 안에 계시다"는 그리스도의 절대적 우선성과 포괄성을 선언합니다. 이는 사회적 차이가 완전히 사라진다는 의미가 아니라, 그리스도 안에서 새로운 정체성이 모든 다른 정체성보다 우선하고 근본적이라는 뜻입니다.',
    korean_translation: '여기에는 헬라인이나 유대인, 할례받은 자나 할례받지 않은 자, 야만인, 스구디아인, 종이나 자유인의 구별이 없습니다. 오직 그리스도가 모든 것이며, 모든 것 안에 계십니다.',
    special_notes: '갈라디아서 3:28의 "유대인이나 헬라인, 종이나 자유인, 남자나 여자"와 유사하지만, 여기서는 특히 문화적 우월감(헬라인/야만인)을 다룹니다. "all"은 중성 복수로 "모든 것들"을 의미합니다.'
  },
  {
    reference: 'Colossians 3:12',
    sentence_structures: [
      {
        structure: 'Therefore, as God\'s chosen people, holy and dearly loved',
        explanation: '호칭절 - 신자들의 정체성을 세 가지로 규정'
      },
      {
        structure: 'clothe yourselves with compassion, kindness, humility, gentleness and patience',
        explanation: '명령문 - 다섯 가지 덕목을 옷 입듯 입으라는 권면'
      }
    ],
    key_words: [
      {
        word: 'chosen',
        pronunciation_ipa: '/ˈtʃoʊzən/',
        pronunciation_korean: '초즌',
        meaning: '선택받은, 택하신'
      },
      {
        word: 'holy',
        pronunciation_ipa: '/ˈhoʊli/',
        pronunciation_korean: '홀리',
        meaning: '거룩한'
      },
      {
        word: 'dearly loved',
        pronunciation_ipa: '/ˈdɪrli lʌvd/',
        pronunciation_korean: '디얼리 러브드',
        meaning: '깊이 사랑받는'
      },
      {
        word: 'compassion',
        pronunciation_ipa: '/kəmˈpæʃən/',
        pronunciation_korean: '컴패션',
        meaning: '긍휼, 연민'
      },
      {
        word: 'kindness',
        pronunciation_ipa: '/ˈkaɪndnəs/',
        pronunciation_korean: '카인드니스',
        meaning: '친절, 자비'
      },
      {
        word: 'humility',
        pronunciation_ipa: '/hjuːˈmɪləti/',
        pronunciation_korean: '휴밀러티',
        meaning: '겸손'
      },
      {
        word: 'gentleness',
        pronunciation_ipa: '/ˈdʒɛntəlnəs/',
        pronunciation_korean: '젠틀니스',
        meaning: '온유'
      },
      {
        word: 'patience',
        pronunciation_ipa: '/ˈpeɪʃəns/',
        pronunciation_korean: '페이션스',
        meaning: '인내, 오래 참음'
      }
    ],
    contextual_explanation: '"그러므로"는 5-11절의 신학적 토대(옛 사람을 벗고 새 사람을 입음) 위에서 실천적 권면을 이어갑니다. 바울은 명령에 앞서 신자들의 정체성을 확인합니다. "하나님의 선택받은 백성"은 구약 이스라엘의 칭호를(신명기 7:6) 교회에 적용한 것입니다. "거룩한"은 하나님께 구별된 존재를, "깊이 사랑받는"은 하나님의 능동적 사랑을 나타냅니다. 이 세 가지 정체성이 윤리의 동기가 됩니다. "입으라"는 10절의 새 사람을 입은 것의 구체적 실천입니다. 나열된 다섯 덕목은 모두 대인관계의 덕입니다. "긍휼"(compassion)은 타인의 고통에 대한 내적 반응이고, "자비"(kindness)는 그것의 외적 표현입니다. "겸손"(humility)은 자신을 낮추는 태도이며, 그리스-로마 세계에서는 약점으로 여겨졌지만 기독교에서는 핵심 덕목입니다. "온유"(gentleness)는 힘을 절제하는 부드러움이고, "인내"(patience)는 도발에도 참는 오래 견딤입니다.',
    korean_translation: '그러므로 하나님께서 선택하신 백성, 거룩하고 사랑받는 자로서, 긍휼과 자비와 겸손과 온유와 인내를 옷 입듯 입으십시오.',
    special_notes: '정체성 선언("chosen, holy, dearly loved")이 명령에 선행하는 것은 바울 신학의 전형적 패턴입니다. 다섯 덕목은 모두 그리스도의 성품을 반영합니다(마태복음 11:29).'
  },
  {
    reference: 'Colossians 3:13',
    sentence_structures: [
      {
        structure: 'Bear with each other',
        explanation: '명령문 - 서로 참으라는 권면'
      },
      {
        structure: 'and forgive one another if any of you has a grievance against someone',
        explanation: '병렬 명령문과 조건절 - 용서의 상황을 설명'
      },
      {
        structure: 'Forgive as the Lord forgave you',
        explanation: '비교절 - 용서의 기준과 동기를 제시'
      }
    ],
    key_words: [
      {
        word: 'bear with',
        pronunciation_ipa: '/bɛr wɪð/',
        pronunciation_korean: '베어 위드',
        meaning: '참다, 견디다'
      },
      {
        word: 'forgive',
        pronunciation_ipa: '/fərˈɡɪv/',
        pronunciation_korean: '퍼기브',
        meaning: '용서하다'
      },
      {
        word: 'grievance',
        pronunciation_ipa: '/ˈɡriːvəns/',
        pronunciation_korean: '그리번스',
        meaning: '불만, 원한'
      }
    ],
    contextual_explanation: '12절의 덕목들이 실제 공동체 생활에서 어떻게 적용되는지 구체화합니다. "서로 참으라"는 타인의 약점이나 실수를 관용하는 태도입니다. "용서하다"는 더 적극적인 행위로, 죄나 잘못을 면제해주는 것입니다. "불만이 있거든"은 공동체 내 갈등이 현실임을 인정합니다. 바울은 완벽한 공동체를 가정하지 않고, 상처와 갈등이 있는 현실 속에서 어떻게 반응할지를 가르칩니다. "주께서 여러분을 용서하신 것같이"는 용서의 궁극적 근거이자 모델입니다. 이는 마태복음 18장의 무자비한 종의 비유와 연결되며, 하나님의 용서가 우리 용서의 동기이자 능력입니다. "주"는 그리스도를 가리키며, 십자가에서의 용서가 배경입니다. 인간의 용서는 하나님의 용서를 받은 경험에서 흘러나옵니다. 이는 "용서해야 용서받는다"는 조건이 아니라, "용서받았기에 용서한다"는 은혜의 논리입니다.',
    korean_translation: '서로 참아 주고, 누가 누구에게 불만이 있거든 서로 용서하십시오. 주께서 여러분을 용서하신 것같이 여러분도 용서하십시오.',
    special_notes: '"as the Lord forgave you"는 비교구문으로 방식과 근거를 모두 나타냅니다. 일부 사본은 "Lord" 대신 "Christ"를 사용합니다.'
  },
  {
    reference: 'Colossians 3:14',
    sentence_structures: [
      {
        structure: 'And over all these virtues put on love',
        explanation: '명령문 - 모든 덕목 위에 사랑을 더하라는 권면'
      },
      {
        structure: 'which binds them all together in perfect unity',
        explanation: '관계절 - 사랑의 기능을 설명'
      }
    ],
    key_words: [
      {
        word: 'over',
        pronunciation_ipa: '/ˈoʊvər/',
        pronunciation_korean: '오버',
        meaning: '위에, ~을 넘어서'
      },
      {
        word: 'virtues',
        pronunciation_ipa: '/ˈvɜːrtʃuːz/',
        pronunciation_korean: '버츄즈',
        meaning: '덕목들'
      },
      {
        word: 'binds',
        pronunciation_ipa: '/baɪndz/',
        pronunciation_korean: '바인즈',
        meaning: '묶다, 결합하다'
      },
      {
        word: 'perfect unity',
        pronunciation_ipa: '/ˈpɜːrfɪkt ˈjuːnəti/',
        pronunciation_korean: '퍼펙트 유너티',
        meaning: '완전한 연합'
      }
    ],
    contextual_explanation: '"이 모든 것 위에"는 12-13절의 덕목들을 넘어서, 또는 그것들을 감싸는 최상위 덕목으로 사랑을 제시합니다. 옷을 겹쳐 입듯이, 사랑은 다른 모든 덕목 위에 입는 외투와 같습니다. "사랑"(agape)은 의지적이고 희생적인 사랑으로, 감정을 넘어선 결단입니다. "묶는다"(binds)는 동사는 사랑이 모든 덕목을 하나로 통합하는 기능을 나타냅니다. 긍휼, 자비, 겸손 등이 따로따로 존재하는 것이 아니라, 사랑 안에서 유기적으로 결합됩니다. "완전한 연합"(perfect unity)은 문자적으로 "완전함의 띠"로, 사랑이 공동체를 완전하게 만드는 결속력임을 나타냅니다. 이는 고린도전서 13장의 사랑 찬가와 연결되며, 사랑 없이는 다른 모든 것이 무의미함을 상기시킵니다. 사랑은 율법의 완성(로마서 13:10)이며, 신자 공동체의 정체성입니다(요한복음 13:35).',
    korean_translation: '이 모든 것 위에 사랑을 더하십시오. 사랑은 완전하게 묶는 띠입니다.',
    special_notes: '"over all"은 위치적 우선성을 나타내며, 사랑이 다른 덕목들의 토대이자 정점임을 보여줍니다. "bond of perfection"은 목적격 속격으로 해석될 수 있습니다.'
  },
  {
    reference: 'Colossians 3:15',
    sentence_structures: [
      {
        structure: 'Let the peace of Christ rule in your hearts',
        explanation: '명령문 - 그리스도의 평강이 마음을 지배하게 하라는 권면'
      },
      {
        structure: 'since as members of one body you were called to peace',
        explanation: '이유절 - 한 몸의 지체로 부르심을 받은 근거 제시'
      },
      {
        structure: 'And be thankful',
        explanation: '추가 명령문 - 감사하라는 간결한 권면'
      }
    ],
    key_words: [
      {
        word: 'peace',
        pronunciation_ipa: '/piːs/',
        pronunciation_korean: '피스',
        meaning: '평화, 평강'
      },
      {
        word: 'rule',
        pronunciation_ipa: '/ruːl/',
        pronunciation_korean: '룰',
        meaning: '지배하다, 다스리다, 심판하다'
      },
      {
        word: 'members',
        pronunciation_ipa: '/ˈmɛmbərz/',
        pronunciation_korean: '멤버즈',
        meaning: '지체들'
      },
      {
        word: 'called',
        pronunciation_ipa: '/kɔːld/',
        pronunciation_korean: '콜드',
        meaning: '부르심을 받은'
      },
      {
        word: 'thankful',
        pronunciation_ipa: '/ˈθæŋkfəl/',
        pronunciation_korean: '땡크풀',
        meaning: '감사하는'
      }
    ],
    contextual_explanation: '"그리스도의 평강"은 그리스도께서 주시는 평강이며, 동시에 그리스도 자신이 우리의 평화이심을(에베소서 2:14) 가리킵니다. "다스리게 하라"(rule)는 헬라어로 "심판하다, 중재하다"의 의미를 가진 단어로, 경기의 심판처럼 결정권을 행사하게 한다는 뜻입니다. 신자의 마음에서 갈등이 일어날 때, 그리스도의 평강이 최종 판단 기준이 되어야 합니다. "한 몸의 지체로"는 고린도전서 12장의 몸 비유를 상기시킵니다. 교회는 그리스도의 한 몸이며, 지체들은 서로 연결되어 있습니다. "평화에 이르도록 부르심을 받았다"는 하나님의 부르심의 목적이 공동체의 화평임을 명시합니다. 이는 개인의 내적 평안을 넘어 공동체의 화해와 일치를 포함합니다. "감사하라"는 짧지만 강력한 명령으로, 골로새서에서 반복되는 주제입니다(1:12, 2:7, 4:2). 감사는 불평과 갈등을 막는 예방책이며, 하나님의 은혜를 인식하는 표현입니다.',
    korean_translation: '그리스도의 평강이 여러분의 마음을 다스리게 하십시오. 여러분은 한 몸의 지체로 부르심을 받아 평화를 누립니다. 그리고 감사하는 사람이 되십시오.',
    special_notes: '"rule"(brabeuo)는 신약에서 여기에만 나오는 단어로 경기장의 심판을 의미합니다. "be thankful"는 현재 명령형으로 지속적인 감사의 태도를 요구합니다.'
  },
  {
    reference: 'Colossians 3:16',
    sentence_structures: [
      {
        structure: 'Let the message of Christ dwell among you richly',
        explanation: '명령문 - 그리스도의 말씀이 풍성히 거하게 하라는 권면'
      },
      {
        structure: 'as you teach and admonish one another with all wisdom',
        explanation: '방법절 - 가르침과 권면의 방식을 설명'
      },
      {
        structure: 'through psalms, hymns, and songs from the Spirit',
        explanation: '수단절 - 시와 찬송과 신령한 노래를 통한 방법 제시'
      },
      {
        structure: 'singing to God with gratitude in your hearts',
        explanation: '분사구 - 하나님께 감사로 노래하는 태도 묘사'
      }
    ],
    key_words: [
      {
        word: 'message',
        pronunciation_ipa: '/ˈmɛsɪdʒ/',
        pronunciation_korean: '메시지',
        meaning: '말씀, 메시지'
      },
      {
        word: 'dwell',
        pronunciation_ipa: '/dwɛl/',
        pronunciation_korean: '드웰',
        meaning: '거하다, 살다'
      },
      {
        word: 'richly',
        pronunciation_ipa: '/ˈrɪtʃli/',
        pronunciation_korean: '리치리',
        meaning: '풍성하게'
      },
      {
        word: 'teach',
        pronunciation_ipa: '/tiːtʃ/',
        pronunciation_korean: '티치',
        meaning: '가르치다'
      },
      {
        word: 'admonish',
        pronunciation_ipa: '/ədˈmɑːnɪʃ/',
        pronunciation_korean: '어드마니시',
        meaning: '권면하다, 경고하다'
      },
      {
        word: 'psalms',
        pronunciation_ipa: '/sɑːmz/',
        pronunciation_korean: '삼즈',
        meaning: '시편, 시'
      },
      {
        word: 'hymns',
        pronunciation_ipa: '/hɪmz/',
        pronunciation_korean: '힘즈',
        meaning: '찬송가'
      }
    ],
    contextual_explanation: '"그리스도의 말씀"은 그리스도에 대한 복음 메시지이자, 그리스도께서 하신 말씀을 모두 포함합니다. "거하다"는 15절의 평강이 다스리는 것과 병행하며, 말씀이 공동체 안에 지속적으로 현존해야 함을 나타냅니다. "풍성하게"는 양적 풍부함과 질적 깊이를 모두 의미합니다. "서로 가르치고 권면하라"는 말씀 사역이 전문 교사만이 아니라 모든 성도의 상호 책임임을 보여줍니다. "가르침"(teach)은 진리를 전달하는 것이고, "권면"(admonish)은 적용과 실천을 촉구하는 것입니다. "지혜"는 단순한 지식이 아니라 삶에 적용하는 실천적 지혜입니다. "시와 찬송과 신령한 노래"는 예배와 교제에서 사용되던 다양한 형태의 음악을 가리킵니다. 정확한 구분은 어렵지만, 시편 인용, 찬양 찬송, 영감받은 노래 등을 포함할 것입니다. 노래는 진리를 전달하고 감정을 표현하며 공동체를 결속시키는 강력한 수단입니다. "마음으로 하나님께"는 외적 형식보다 내적 진실성을 강조하며, "감사함으로"는 모든 예배의 기본 정신입니다.',
    korean_translation: '그리스도의 말씀이 여러분 가운데 풍성히 거하게 하십시오. 모든 지혜로 서로 가르치고 권면하며, 시와 찬송과 신령한 노래로 마음에 감사함으로 하나님을 찬양하십시오.',
    special_notes: '"dwell among you"는 공동체적 차원을 강조하며, 개인의 경건을 넘어 교회의 공동 생활을 다룹니다. 에베소서 5:19과 매우 유사한 구절입니다.'
  },
  {
    reference: 'Colossians 3:17',
    sentence_structures: [
      {
        structure: 'And whatever you do, whether in word or deed',
        explanation: '포괄절 - 모든 행위를 말과 행동으로 구분하여 포괄'
      },
      {
        structure: 'do it all in the name of the Lord Jesus',
        explanation: '명령문 - 주 예수의 이름으로 행하라는 권면'
      },
      {
        structure: 'giving thanks to God the Father through him',
        explanation: '분사구 - 하나님께 감사하는 방식을 설명'
      }
    ],
    key_words: [
      {
        word: 'whatever',
        pronunciation_ipa: '/wɑtˈɛvər/',
        pronunciation_korean: '왓에버',
        meaning: '무엇이든지'
      },
      {
        word: 'word',
        pronunciation_ipa: '/wɜːrd/',
        pronunciation_korean: '워드',
        meaning: '말'
      },
      {
        word: 'deed',
        pronunciation_ipa: '/diːd/',
        pronunciation_korean: '디드',
        meaning: '행동, 행위'
      },
      {
        word: 'in the name of',
        pronunciation_ipa: '/ɪn ðə neɪm ʌv/',
        pronunciation_korean: '인 더 네임 오브',
        meaning: '~의 이름으로'
      }
    ],
    contextual_explanation: '이 구절은 12-16절의 구체적 권면들을 포괄하는 일반 원칙입니다. "무엇을 하든지"는 예외 없이 모든 영역을 포함합니다. "말이나 행동이나"는 인간 활동의 전체를 대표하는 표현입니다. "주 예수의 이름으로"는 여러 의미를 담고 있습니다. 첫째, 예수님의 권위 아래서 행한다는 뜻입니다. 둘째, 예수님을 대표하여 행한다는 의미입니다. 셋째, 예수님께 영광을 돌리기 위해 행한다는 목적입니다. 이는 성속의 구분을 넘어, 일상의 모든 활동이 거룩한 의미를 가질 수 있음을 보여줍니다. 식사, 일, 대화, 여가 모두가 주님의 이름으로 행해질 수 있습니다. "하나님 아버지께 감사하며"는 모든 행위가 감사의 표현이 되어야 함을 나타냅니다. "그를 힘입어"는 그리스도가 하나님께 나아가는 중보자이심을 상기시킵니다. 이 구절은 기독교 윤리의 핵심을 담고 있습니다: 삶의 모든 영역에서 그리스도를 주로 인정하고 하나님께 영광을 돌리는 것입니다.',
    korean_translation: '여러분이 무엇을 하든지, 말이나 행동이나, 모든 것을 주 예수의 이름으로 하고, 그분을 통하여 하나님 아버지께 감사하십시오.',
    special_notes: '"in the name of"는 단순히 말로 이름을 언급하는 것이 아니라, 그 사람의 권위와 성품을 대표하여 행동하는 것을 의미합니다.'
  },
  {
    reference: 'Colossians 3:18',
    sentence_structures: [
      {
        structure: 'Wives, submit yourselves to your husbands',
        explanation: '호칭과 명령 - 아내들에게 남편에게 복종하라는 권면'
      },
      {
        structure: 'as is fitting in the Lord',
        explanation: '비교절 - 주 안에서 합당한 것으로 근거 제시'
      }
    ],
    key_words: [
      {
        word: 'wives',
        pronunciation_ipa: '/waɪvz/',
        pronunciation_korean: '와이브즈',
        meaning: '아내들'
      },
      {
        word: 'submit',
        pronunciation_ipa: '/səbˈmɪt/',
        pronunciation_korean: '서브밋',
        meaning: '복종하다, 순종하다'
      },
      {
        word: 'husbands',
        pronunciation_ipa: '/ˈhʌzbəndz/',
        pronunciation_korean: '허즈번즈',
        meaning: '남편들'
      },
      {
        word: 'fitting',
        pronunciation_ipa: '/ˈfɪtɪŋ/',
        pronunciation_korean: '피팅',
        meaning: '합당한, 적절한'
      }
    ],
    contextual_explanation: '18절부터 4:1까지는 "가정 규칙"(Haustafeln)이라 불리는 고대 윤리 교훈의 기독교적 형태입니다. 이는 에베소서 5:22-6:9와 유사하며, 당시 가정의 세 가지 주요 관계(아내-남편, 자녀-부모, 종-주인)를 다룹니다. "아내들아, 남편에게 복종하라"는 당시 문화에서 일반적이던 가부장적 구조를 반영하지만, 중요한 것은 "주 안에서 마땅한 것"이라는 기독교적 한정입니다. 이는 무조건적 복종이 아니라, 주 안에서 적절하고 합당한 방식의 관계를 말합니다. 복종(submit)은 군사 용어에서 유래한 것으로 자발적으로 자신을 낮추는 것을 의미하며, 열등함이 아니라 역할의 차이를 나타냅니다. 에베소서 5:21은 "그리스도를 경외함으로 서로 복종하라"고 하여 상호성을 강조합니다. 초대 교회는 당시의 사회 구조를 즉시 뒤집지 않았지만, "주 안에서"라는 새로운 틀을 제시함으로써 모든 관계를 그리스도 중심으로 변화시켰습니다.',
    korean_translation: '아내들은 주 안에서 마땅한 것으로 남편에게 복종하십시오.',
    special_notes: '"in the Lord"는 모든 가정 규칙의 기독교적 특징으로, 단순한 사회적 관습이 아니라 주님과의 관계 안에서 이해되어야 함을 나타냅니다.'
  },
  {
    reference: 'Colossians 3:19',
    sentence_structures: [
      {
        structure: 'Husbands, love your wives',
        explanation: '호칭과 명령 - 남편들에게 아내를 사랑하라는 권면'
      },
      {
        structure: 'and do not be harsh with them',
        explanation: '부정 명령 - 가혹하게 대하지 말라는 금지'
      }
    ],
    key_words: [
      {
        word: 'love',
        pronunciation_ipa: '/lʌv/',
        pronunciation_korean: '러브',
        meaning: '사랑하다'
      },
      {
        word: 'harsh',
        pronunciation_ipa: '/hɑːrʃ/',
        pronunciation_korean: '하쉬',
        meaning: '가혹한, 거친'
      }
    ],
    contextual_explanation: '아내의 복종에 대한 균형으로, 남편에게는 사랑의 명령이 주어집니다. 당시 그리스-로마 사회에서 남편의 권위는 당연시되었지만, 사랑의 의무는 강조되지 않았습니다. 바울은 남편의 권위보다 사랑의 책임을 강조함으로써 균형을 제공합니다. "사랑하라"(agapao)는 희생적이고 헌신적인 사랑으로, 에베소서 5:25에서는 "그리스도께서 교회를 사랑하신 것같이"라고 확장됩니다. 이는 자기희생과 섬김의 사랑입니다. "가혹하게 대하지 말라"는 부정적 금지로, 권위의 남용을 경고합니다. "가혹하다"(harsh)는 쓴맛을 나타내는 단어에서 유래하여, 신랄함, 거칠음, 분노를 포함합니다. 남편의 권위가 독재나 폭력으로 변질되는 것을 막습니다. 이 짧은 구절은 상호 존중과 배려의 결혼 관계를 제시합니다. 18-19절을 함께 보면, 아내는 복종으로, 남편은 사랑으로 서로를 섬기는 상호적 관계가 드러납니다.',
    korean_translation: '남편들은 아내를 사랑하고 그들에게 가혹하게 대하지 마십시오.',
    special_notes: '에베소서 5:25-33은 이 명령을 그리스도와 교회의 관계로 확장하여 설명합니다. 부정 명령 "do not be harsh"는 지속적 행위의 금지를 나타냅니다.'
  },
  {
    reference: 'Colossians 3:20',
    sentence_structures: [
      {
        structure: 'Children, obey your parents in everything',
        explanation: '호칭과 명령 - 자녀들에게 부모에게 순종하라는 권면'
      },
      {
        structure: 'for this pleases the Lord',
        explanation: '이유절 - 주를 기쁘시게 하는 것으로 동기 제시'
      }
    ],
    key_words: [
      {
        word: 'children',
        pronunciation_ipa: '/ˈtʃɪldrən/',
        pronunciation_korean: '칠드런',
        meaning: '자녀들, 아이들'
      },
      {
        word: 'obey',
        pronunciation_ipa: '/oʊˈbeɪ/',
        pronunciation_korean: '오베이',
        meaning: '순종하다'
      },
      {
        word: 'parents',
        pronunciation_ipa: '/ˈpɛrənts/',
        pronunciation_korean: '페어런츠',
        meaning: '부모들'
      },
      {
        word: 'pleases',
        pronunciation_ipa: '/ˈpliːzɪz/',
        pronunciation_korean: '플리지즈',
        meaning: '기쁘게 하다'
      }
    ],
    contextual_explanation: '가정 규칙의 두 번째 관계는 자녀와 부모입니다. "자녀들아"라는 호칭은 교회 모임에 자녀들도 함께 참여했음을 시사합니다. "순종하라"(obey)는 18절의 아내의 "복종"(submit)보다 더 직접적인 순종을 의미하며, 부모의 권위를 인정하고 따르는 것입니다. "모든 일에"는 순종의 범위가 포괄적임을 나타내지만, 21절의 경고와 함께 읽으면 합리적이고 합당한 범위 내에서임을 알 수 있습니다. 에베소서 6:1은 "주 안에서 너희 부모에게 순종하라"고 하여 한계를 명시합니다. 만약 부모의 요구가 하나님의 뜻과 충돌한다면, 하나님께 순종해야 합니다(사도행전 5:29). "이것이 주를 기쁘시게 하는 것"은 순종의 궁극적 동기입니다. 십계명의 다섯 번째 계명 "부모를 공경하라"(출애굽기 20:12)를 반영합니다. 자녀의 순종은 단순히 부모를 위한 것이 아니라, 하나님을 기쁘시게 하는 예배 행위입니다.',
    korean_translation: '자녀들은 모든 일에 부모에게 순종하십시오. 이것이 주를 기쁘시게 하는 일입니다.',
    special_notes: '"in everything"은 절대적 순종을 요구하는 것처럼 보이지만, "in the Lord"(주 안에서)라는 틀 안에서 이해되어야 합니다.'
  },
  {
    reference: 'Colossians 3:21',
    sentence_structures: [
      {
        structure: 'Fathers, do not embitter your children',
        explanation: '호칭과 부정 명령 - 아버지들에게 자녀를 낙심시키지 말라는 경고'
      },
      {
        structure: 'or they will become discouraged',
        explanation: '결과절 - 낙심의 결과를 설명'
      }
    ],
    key_words: [
      {
        word: 'fathers',
        pronunciation_ipa: '/ˈfɑːðərz/',
        pronunciation_korean: '파더즈',
        meaning: '아버지들'
      },
      {
        word: 'embitter',
        pronunciation_ipa: '/ɪmˈbɪtər/',
        pronunciation_korean: '임비터',
        meaning: '짜증나게 하다, 쓰라리게 하다'
      },
      {
        word: 'discouraged',
        pronunciation_ipa: '/dɪsˈkɜːrɪdʒd/',
        pronunciation_korean: '디스커리지드',
        meaning: '낙담한, 의기소침한'
      }
    ],
    contextual_explanation: '자녀의 순종 명령과 균형을 이루는 부모, 특히 아버지에 대한 경고입니다. "아버지들"로 특정한 것은 당시 가정에서 아버지가 주요 권위자였기 때문이지만, 원칙은 양육하는 모든 부모에게 적용됩니다. "짜증나게 하지 말라"(embitter)는 문자적으로 "자극하지 말라, 도발하지 말라"는 의미로, 자녀를 분노와 좌절로 몰아넣는 행위를 가리킵니다. 이는 과도한 요구, 불공정한 처벌, 일관성 없는 훈육, 지속적인 비판 등을 포함합니다. "낙심하게 될까 함이라"는 결과를 명시합니다. "낙심하다"(discouraged)는 의욕을 잃고 영적으로 위축되는 상태를 의미합니다. 부모의 가혹함이나 불합리함은 자녀의 정서적·영적 성장을 해칩니다. 에베소서 6:4는 더 적극적으로 "주의 교훈과 훈계로 양육하라"고 명령합니다. 바울은 권위의 행사가 사랑과 지혜로 절제되어야 함을 강조합니다. 부모의 역할은 단순히 복종을 강요하는 것이 아니라, 자녀가 주님을 사랑하고 섬기도록 격려하고 양육하는 것입니다.',
    korean_translation: '아버지들은 자녀를 짜증나게 하지 마십시오. 그들이 낙심할까 염려됩니다.',
    special_notes: '"embitter"(원어: erethizō)는 신약에서 여기에만 나오며, 부정적 감정을 자극한다는 의미입니다. 이는 자녀 양육에서 부모의 감정 조절과 지혜의 중요성을 강조합니다.'
  },
  {
    reference: 'Colossians 3:22',
    sentence_structures: [
      {
        structure: 'Slaves, obey your earthly masters in everything',
        explanation: '호칭과 명령 - 종들에게 육체의 상전에게 순종하라는 권면'
      },
      {
        structure: 'and do it, not only when their eye is on you and to curry their favor',
        explanation: '부정적 동기 제시 - 눈가림이나 아첨이 아님을 명시'
      },
      {
        structure: 'but with sincerity of heart and reverence for the Lord',
        explanation: '긍정적 동기 제시 - 진실한 마음과 주를 경외함으로'
      }
    ],
    key_words: [
      {
        word: 'slaves',
        pronunciation_ipa: '/sleɪvz/',
        pronunciation_korean: '슬레이브즈',
        meaning: '종들, 노예들'
      },
      {
        word: 'earthly masters',
        pronunciation_ipa: '/ˈɜːrθli ˈmæstərz/',
        pronunciation_korean: '어슬리 마스터즈',
        meaning: '육체의 상전들'
      },
      {
        word: 'curry their favor',
        pronunciation_ipa: '/ˈkɜːri ðɛr ˈfeɪvər/',
        pronunciation_korean: '커리 데어 페이버',
        meaning: '환심을 사다'
      },
      {
        word: 'sincerity',
        pronunciation_ipa: '/sɪnˈsɛrəti/',
        pronunciation_korean: '신세러티',
        meaning: '진실, 성실'
      },
      {
        word: 'reverence',
        pronunciation_ipa: '/ˈrɛvərəns/',
        pronunciation_korean: '레버런스',
        meaning: '경외, 존경'
      }
    ],
    contextual_explanation: '가정 규칙의 세 번째 관계는 종과 주인으로, 22-25절과 4:1에 걸쳐 가장 길게 다뤄집니다. 이는 초대 교회에 종의 신분인 성도들이 많았음을 시사합니다. 골로새 교회의 오네시모(빌레몬서)가 대표적 예입니다. "육체의 상전"은 지상의 주인을 가리키며, 참된 주인은 그리스도임을 암시합니다. "모든 일에 순종하라"는 20절의 자녀 순종과 같은 표현으로, 포괄적 순종을 요구합니다. 그러나 바울은 순종의 방식과 동기를 재정의합니다. "눈가림만 하지 말라"는 주인이 볼 때만 일하는 위선을 경계합니다. "사람을 기쁘게 하는 자처럼" 하지 말라는 것은 단순히 인간의 인정만을 구하는 태도를 버리라는 뜻입니다. 대신 "마음의 진실함으로 주를 경외하여" 일하라고 합니다. "마음의 진실함"은 겉과 속이 같은 성실함이고, "주를 경외함"은 모든 일의 궁극적 동기입니다. 이는 노예제를 정당화하는 것이 아니라, 그 안에 있는 신자들에게 그리스도 중심적 관점을 제공합니다. 종의 일도 주님을 섬기는 거룩한 일이 될 수 있습니다.',
    korean_translation: '종들은 모든 일에 육체의 상전들에게 순종하십시오. 눈가림으로 사람을 기쁘게 하는 자처럼 하지 말고, 마음의 진실함으로 주를 경외하여 하십시오.',
    special_notes: '"earthly masters"는 하늘의 주인(Lord)과 대조됩니다. 바울은 노예제 자체를 다루지 않고, 그 안에서 그리스도인의 태도를 다룹니다.'
  },
  {
    reference: 'Colossians 3:23',
    sentence_structures: [
      {
        structure: 'Whatever you do, work at it with all your heart',
        explanation: '일반 명령 - 모든 일을 마음을 다해 일하라는 권면'
      },
      {
        structure: 'as working for the Lord, not for human masters',
        explanation: '비교절 - 주를 위해 일하는 것으로 관점 전환'
      }
    ],
    key_words: [
      {
        word: 'work at it',
        pronunciation_ipa: '/wɜːrk æt ɪt/',
        pronunciation_korean: '워크 앳 잇',
        meaning: '일하다, 노력하다'
      },
      {
        word: 'with all your heart',
        pronunciation_ipa: '/wɪð ɔːl jɔːr hɑːrt/',
        pronunciation_korean: '위드 올 유어 하트',
        meaning: '마음을 다하여'
      },
      {
        word: 'human masters',
        pronunciation_ipa: '/ˈhjuːmən ˈmæstərz/',
        pronunciation_korean: '휴먼 마스터즈',
        meaning: '사람 주인들'
      }
    ],
    contextual_explanation: '22절의 원칙을 확장하여 모든 일의 의미를 재해석합니다. "무엇을 하든지"는 17절과 같은 포괄적 표현으로, 종의 일뿐 아니라 모든 노동에 적용됩니다. "마음을 다하여 하라"(work with all your heart)는 신명기 6:5의 "마음을 다하여 하나님을 사랑하라"를 반영하며, 일을 대충하지 말고 최선을 다하라는 뜻입니다. "주께 하듯 하고 사람에게 하듯 하지 말라"는 일의 관점을 근본적으로 전환합니다. 지상의 주인은 일차적 대상이 아니라, 진정한 주인은 그리스도이십니다. 이는 종의 일을 비천한 노동에서 거룩한 섬김으로 격상시킵니다. 설령 주인이 불공정하거나 인정하지 않아도, 참된 주인이신 그리스도께서 보시고 갚아주실 것입니다. 이 원칙은 현대의 직장 생활에도 적용됩니다. 상사나 고객을 위해서가 아니라, 궁극적으로 주님을 위해 일할 때, 일의 의미와 동기가 달라집니다. 이는 모든 노동에 존엄성과 영적 가치를 부여합니다.',
    korean_translation: '무엇을 하든지 마음을 다해 주께 하듯 하고, 사람에게 하듯 하지 마십시오.',
    special_notes: '"with all your heart"(직역: 영혼으로부터)는 외적 행위를 넘어 내적 헌신을 요구합니다. 이는 일의 신학을 제시합니다.'
  },
  {
    reference: 'Colossians 3:24',
    sentence_structures: [
      {
        structure: 'since you know that you will receive an inheritance from the Lord as a reward',
        explanation: '이유절 - 주로부터 상을 받을 것을 아는 근거 제시'
      },
      {
        structure: 'It is the Lord Christ you are serving',
        explanation: '강조 구문 - 섬기는 대상이 주 그리스도임을 명확히'
      }
    ],
    key_words: [
      {
        word: 'inheritance',
        pronunciation_ipa: '/ɪnˈhɛrɪtəns/',
        pronunciation_korean: '인헤리턴스',
        meaning: '유업, 상속'
      },
      {
        word: 'reward',
        pronunciation_ipa: '/rɪˈwɔːrd/',
        pronunciation_korean: '리워드',
        meaning: '보상, 상'
      },
      {
        word: 'serving',
        pronunciation_ipa: '/ˈsɜːrvɪŋ/',
        pronunciation_korean: '서빙',
        meaning: '섬기는'
      }
    ],
    contextual_explanation: '23절의 권면에 대한 강력한 동기와 근거를 제시합니다. "너희가 아는 것은"은 이미 알고 있는 확실한 진리를 상기시킵니다. "주께 받을 유업의 상"은 이중적 의미를 담고 있습니다. "유업"(inheritance)은 상속 재산으로, 구약에서 이스라엘이 가나안 땅을 받은 것을 연상시킵니다. 그러나 신약에서는 영원한 하늘의 유업을 가리킵니다(1:12). "상"(reward)은 행위에 대한 보상입니다. 중요한 것은 이 유업이 지상의 주인이 아니라 "주로부터" 온다는 점입니다. 당시 종들은 법적으로 상속권이 없었습니다. 로마법에서 종은 재산이지 상속자가 아니었습니다. 그러나 바울은 그리스도 안에서 종들도 하나님의 상속자임을 선언합니다(로마서 8:17). "너희는 주 그리스도를 섬기느니라"는 강조 구문으로 핵심 진리를 못 박습니다. 종의 일상적 노동이 실제로는 주 그리스도를 섬기는 예배 행위입니다. 이는 일의 신성함과 영원한 의미를 부여하며, 현재의 고난과 불공정을 견디게 하는 소망을 제공합니다.',
    korean_translation: '여러분이 주께 받을 유업의 상이 있는 줄 알기 때문입니다. 여러분은 주 그리스도를 섬기고 있습니다.',
    special_notes: '"inheritance"와 "reward"의 조합은 은혜(상속)와 행위(보상)의 조화를 보여줍니다. 강조 구문은 원어 어순을 반영합니다.'
  },
  {
    reference: 'Colossians 3:25',
    sentence_structures: [
      {
        structure: 'Anyone who does wrong will be repaid for their wrongs',
        explanation: '경고문 - 불의를 행하는 자는 갚음을 받을 것임을 선언'
      },
      {
        structure: 'and there is no favoritism',
        explanation: '추가 진술 - 하나님께는 편파가 없음을 명시'
      }
    ],
    key_words: [
      {
        word: 'does wrong',
        pronunciation_ipa: '/dʌz rɒŋ/',
        pronunciation_korean: '더즈 롱',
        meaning: '불의를 행하다'
      },
      {
        word: 'repaid',
        pronunciation_ipa: '/rɪˈpeɪd/',
        pronunciation_korean: '리페이드',
        meaning: '갚음을 받다'
      },
      {
        word: 'favoritism',
        pronunciation_ipa: '/ˈfeɪvərɪtɪzəm/',
        pronunciation_korean: '페이버리티즘',
        meaning: '편파, 편애'
      }
    ],
    contextual_explanation: '24절의 긍정적 약속과 대조하여 경고를 제시합니다. "불의를 행하는 자"는 종과 주인 모두를 포함합니다. 종이 불성실하거나 부정직하게 일한다면, 4:1의 주인이 불공정하게 대한다면, 모두 하나님의 심판을 받을 것입니다. "받으리니"는 미래 시제로 최후 심판을 가리킵니다. "불의한 일"은 구체적으로 22절에서 경고한 눈가림이나 게으름, 또는 주인의 부당한 대우를 포함할 수 있습니다. "불공평함이 없느니라"는 하나님의 공의로운 심판의 원칙입니다. 로마서 2:11 "하나님은 사람을 외모로 취하지 아니하시느니라"를 반영합니다. 지상에서 종은 법적·사회적으로 주인보다 낮지만, 하나님 앞에서는 동등합니다. 하나님은 사회적 지위나 신분으로 판단하지 않으시고, 각 사람의 행위대로 심판하십니다. 이는 종에게는 위로가 되고(불공정한 대우를 받아도 하나님이 공정하게 갚아주심), 주인에게는 경고가 됩니다(권력을 남용하면 심판받음). 양쪽 모두 하나님 앞에서 책임이 있으며, 최종 심판자는 인간 주인이 아니라 하나님이십니다. 이는 사회적 불평등 속에서도 궁극적 정의가 실현될 것이라는 소망을 줍니다.',
    korean_translation: '불의를 행하는 자는 자기가 행한 불의대로 갚음을 받을 것입니다. 거기에는 불공평함이 없습니다.',
    special_notes: '"no favoritism"(직역: 사람의 얼굴을 받음이 없음)은 히브리 관용어로 외모나 지위로 판단하지 않음을 의미합니다. 이 구절은 4:1의 주인에 대한 권면으로 연결됩니다.'
  }
]

async function saveAnalyses() {
  console.log(`골로새서 3:1-25 분석 데이터 저장 시작 (${analysisData.length}개 구절)`)

  let successCount = 0
  let errorCount = 0

  for (const analysis of analysisData) {
    try {
      const { error } = await supabase
        .from('verse_analyses')
        .upsert({
          reference: analysis.reference,
          sentence_structures: analysis.sentence_structures,
          key_words: analysis.key_words,
          contextual_explanation: analysis.contextual_explanation,
          korean_translation: analysis.korean_translation,
          special_notes: analysis.special_notes,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'reference'
        })

      if (error) {
        console.error(`❌ ${analysis.reference} 저장 실패:`, error.message)
        errorCount++
      } else {
        console.log(`✅ ${analysis.reference} 저장 완료`)
        successCount++
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))

    } catch (err) {
      console.error(`❌ ${analysis.reference} 예외 발생:`, err)
      errorCount++
    }
  }

  console.log(`\n저장 완료: 성공 ${successCount}개, 실패 ${errorCount}개`)
}

saveAnalyses()
