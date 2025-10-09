import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

async function saveJamesChapter2And3() {
  console.log('=== James 2-3장 분석 결과 저장 시작 ===\n')

  const analyses: AnalysisData[] = [
    // James 2:1
    {
      reference: 'James 2:1',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '호칭',
          original_text: 'My brothers and sisters',
          korean_translation: '나의 형제자매들이여',
          grammatical_explanation: '호격 표현으로 친밀한 관계를 나타냄'
        },
        {
          sequence_order: 2,
          semantic_classification: '정체성 설명',
          original_text: 'believers in our glorious Lord Jesus Christ',
          korean_translation: '영광스러운 우리 주 예수 그리스도를 믿는 자들',
          grammatical_explanation: '명사구로 독자들의 신앙적 정체성을 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '명령 (금지)',
          original_text: 'must not show favoritism',
          korean_translation: '편애를 보여서는 안 된다',
          grammatical_explanation: 'must not으로 강한 금지 명령'
        }
      ],
      vocabulary: [
        {
          word: 'favoritism',
          ipa_pronunciation: '/ˈfeɪvərɪtɪzəm/',
          korean_pronunciation: '페이버리티즘',
          part_of_speech: '명사',
          definition_korean: '편애, 편파적 대우',
          usage_note: '외모나 지위에 따라 차별하는 행위'
        },
        {
          word: 'glorious',
          ipa_pronunciation: '/ˈɡlɔːriəs/',
          korean_pronunciation: '글로리어스',
          part_of_speech: '형용사',
          definition_korean: '영광스러운, 찬란한',
          usage_note: '주 예수 그리스도의 신성한 영광을 강조'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보서는 초대교회 내에서 부자와 가난한 자에 대한 차별 문제를 다룹니다. 1세기 교회 공동체에서는 사회적 계층에 따른 대우의 차이가 나타났으며, 야고보는 이것이 예수 그리스도의 영광과 양립할 수 없다고 강조합니다. "영광스러운 주"라는 표현은 그리스도의 신성과 권위를 나타내며, 이러한 주를 믿는 자들은 외모나 지위가 아닌 하나님의 형상대로 지음받은 인간의 본질적 가치를 존중해야 함을 의미합니다.',
        cross_references: ['Leviticus 19:15', 'Deuteronomy 16:19', 'Romans 2:11', 'Ephesians 6:9']
      },
      korean_translation: {
        natural_translation: '나의 형제자매 여러분, 영광스러운 우리 주 예수 그리스도를 믿는 여러분은 사람을 차별해서는 안 됩니다.',
        translation_notes: 'favoritism을 "편애" 또는 "차별"로 번역 가능하며, 여기서는 "차별"이 문맥상 더 자연스러움'
      },
      special_explanation: {
        explanation_type: '신학적 의미',
        content: '편애 금지는 단순한 윤리적 권고가 아니라 복음의 본질과 연결됩니다. 예수 그리스도께서 인류를 차별 없이 사랑하신 것처럼, 그를 따르는 자들도 모든 사람을 동등하게 대해야 합니다. "영광스러운 주"라는 표현은 교회의 주인이 누구인지 상기시키며, 인간의 기준이 아닌 하나님의 기준으로 사람을 평가해야 함을 강조합니다.',
        examples: ['Galatians 3:28 - 그리스도 안에서 모두가 하나', 'Colossians 3:11 - 그리스도가 모든 것이요 모든 것 안에 계심']
      }
    },

    // James 2:2
    {
      reference: 'James 2:2',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '가상 상황 제시',
          original_text: 'Suppose a man comes into your meeting',
          korean_translation: '어떤 사람이 너희 모임에 들어온다고 가정하라',
          grammatical_explanation: '명령형 suppose로 가상 상황을 제시하는 수사적 기법'
        },
        {
          sequence_order: 2,
          semantic_classification: '외모 묘사 1',
          original_text: 'wearing a gold ring and fine clothes',
          korean_translation: '금반지를 끼고 좋은 옷을 입은',
          grammatical_explanation: '현재분사구로 동시 상황 묘사'
        },
        {
          sequence_order: 3,
          semantic_classification: '대조 상황 제시',
          original_text: 'and a poor man in filthy old clothes also comes in',
          korean_translation: '또한 더러운 낡은 옷을 입은 가난한 사람도 들어온다',
          grammatical_explanation: 'also를 사용하여 대조적 상황 병치'
        }
      ],
      vocabulary: [
        {
          word: 'meeting',
          ipa_pronunciation: '/ˈmiːtɪŋ/',
          korean_pronunciation: '미팅',
          part_of_speech: '명사',
          definition_korean: '모임, 집회 (여기서는 예배)',
          usage_note: '초대교회의 예배 모임을 지칭'
        },
        {
          word: 'filthy',
          ipa_pronunciation: '/ˈfɪlθi/',
          korean_pronunciation: '필시',
          part_of_speech: '형용사',
          definition_korean: '더러운, 불결한',
          usage_note: '극심한 가난을 암시하는 강한 표현'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 구체적인 가상 시나리오를 통해 교회 내 차별의 실상을 생생하게 묘사합니다. 금반지와 좋은 옷은 1세기 로마 사회에서 부와 지위의 상징이었으며, 반대로 더러운 낡은 옷은 극심한 가난을 나타냅니다. 초대교회는 모든 계층이 모이는 장소였지만, 세상의 가치관이 교회 안으로 침투하는 문제가 있었습니다. 이 대조적인 묘사는 독자들이 자신의 태도를 돌아보게 만드는 수사적 장치입니다.',
        cross_references: ['Luke 16:19-31', '1 Timothy 2:9', '1 Peter 3:3-4']
      },
      korean_translation: {
        natural_translation: '금반지를 끼고 좋은 옷을 입은 사람이 여러분의 모임에 들어오고, 동시에 더러운 낡은 옷을 입은 가난한 사람도 들어온다고 가정해 봅시다.',
        translation_notes: 'meeting은 문맥상 예배나 교회 모임을 의미'
      },
      special_explanation: {
        explanation_type: '문화적 배경',
        content: '1세기 로마 제국에서 금반지는 상류층의 표시였으며, 옷의 품질은 사회적 지위를 나타냈습니다. 초대교회는 노예와 자유인, 부자와 가난한 자가 함께 모이는 혁명적인 공동체였지만, 세상의 계급 의식을 완전히 떨쳐내지 못한 경우가 많았습니다. 야고보는 이러한 현실을 직시하고 변화를 촉구합니다.',
        examples: ['Acts 10:34 - 하나님은 사람을 차별하지 않으심', 'Galatians 2:6 - 하나님은 사람의 외모를 보지 않으심']
      }
    },

    // James 2:3
    {
      reference: 'James 2:3',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '조건절 - 부자에 대한 특별 대우',
          original_text: 'If you show special attention to the man wearing fine clothes',
          korean_translation: '만약 너희가 좋은 옷을 입은 사람에게 특별한 관심을 보이며',
          grammatical_explanation: 'if 조건절로 잘못된 행동 패턴 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '직접 인용 - 존대 표현',
          original_text: 'and say, "Here\'s a good seat for you,"',
          korean_translation: '"여기 좋은 자리가 있습니다"라고 말하고',
          grammatical_explanation: '직접 화법으로 존대하는 태도 표현'
        },
        {
          sequence_order: 3,
          semantic_classification: '대조 행동 - 가난한 자 무시',
          original_text: 'but say to the poor man, "You stand there"',
          korean_translation: '가난한 사람에게는 "거기 서 있어"라고 말하거나',
          grammatical_explanation: 'but으로 대조되는 차별적 태도 표현'
        },
        {
          sequence_order: 4,
          semantic_classification: '대안 제시 - 낮은 자리',
          original_text: 'or "Sit on the floor by my feet,"',
          korean_translation: '"내 발치 바닥에 앉아"라고 말한다면',
          grammatical_explanation: 'or로 또 다른 차별적 선택지 제시'
        }
      ],
      vocabulary: [
        {
          word: 'attention',
          ipa_pronunciation: '/əˈtenʃən/',
          korean_pronunciation: '어텐션',
          part_of_speech: '명사',
          definition_korean: '관심, 주의',
          usage_note: 'special attention은 특별 대우를 의미'
        },
        {
          word: 'stand',
          ipa_pronunciation: '/stænd/',
          korean_pronunciation: '스탠드',
          part_of_speech: '동사',
          definition_korean: '서다',
          usage_note: '앉지 못하고 서있게 하는 것은 무시와 천대를 나타냄'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 구체적인 대화를 통해 차별의 실상을 생생하게 드러냅니다. 좋은 자리를 제공하는 것과 서있게 하거나 바닥에 앉게 하는 것의 대조는 극명한 차별을 보여줍니다. 1세기 회당이나 교회에서 좋은 자리는 존경의 표시였으며, 서있거나 바닥에 앉는 것은 낮은 지위를 의미했습니다. 이러한 행동은 복음의 평등 정신과 정면으로 배치됩니다.',
        cross_references: ['Luke 14:7-11', 'Matthew 23:6', 'Mark 12:38-39']
      },
      korean_translation: {
        natural_translation: '만약 여러분이 좋은 옷을 입은 사람에게는 특별히 관심을 보이며 "여기 좋은 자리에 앉으십시오"라고 말하면서, 가난한 사람에게는 "당신은 거기 서 있든지, 아니면 내 발치 바닥에 앉으시오"라고 말한다면,',
        translation_notes: '직접 화법의 존댓말과 반말 차이로 차별적 태도를 더욱 극명하게 표현'
      },
      special_explanation: {
        explanation_type: '수사적 기법',
        content: '야고보는 직접 화법을 사용하여 차별의 현장을 생생하게 재현합니다. 존댓말과 반말, 좋은 자리와 바닥의 대조는 독자들이 자신의 행동을 구체적으로 성찰하게 만듭니다. "내 발치"라는 표현은 주종 관계를 암시하며, 이것이 얼마나 복음과 상반되는지 강조합니다.',
        examples: ['Luke 18:9-14 - 바리새인과 세리의 기도', 'James 4:6 - 하나님은 겸손한 자에게 은혜를 주심']
      }
    },

    // James 2:4
    {
      reference: 'James 2:4',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문 1 - 차별의 본질',
          original_text: 'have you not discriminated among yourselves',
          korean_translation: '너희 자신들 사이에서 차별하지 않았느냐',
          grammatical_explanation: '수사적 의문문으로 독자의 자기 성찰 유도'
        },
        {
          sequence_order: 2,
          semantic_classification: '수사적 질문 2 - 판단의 부당성',
          original_text: 'and become judges with evil thoughts?',
          korean_translation: '악한 생각을 가진 재판관이 되지 않았느냐?',
          grammatical_explanation: '병렬 구조로 차별 행위의 심각성 강조'
        }
      ],
      vocabulary: [
        {
          word: 'discriminated',
          ipa_pronunciation: '/dɪˈskrɪmɪneɪtɪd/',
          korean_pronunciation: '디스크리미네이티드',
          part_of_speech: '동사',
          definition_korean: '차별하다, 구별하다',
          usage_note: '부당하게 다르게 대우함'
        },
        {
          word: 'judges',
          ipa_pronunciation: '/ˈdʒʌdʒɪz/',
          korean_pronunciation: '저지즈',
          part_of_speech: '명사',
          definition_korean: '재판관들, 판단하는 자들',
          usage_note: '여기서는 부당한 기준으로 판단하는 자들을 의미'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 두 개의 수사적 질문으로 차별 행위의 본질을 폭로합니다. "너희 자신들 사이에서"라는 표현은 교회 공동체 내부의 문제임을 강조하며, "악한 생각을 가진 재판관"이라는 표현은 차별이 단순한 실수가 아니라 악한 동기에서 비롯된 심각한 죄임을 드러냅니다. 구약에서 재판관은 공정함의 상징이었지만, 여기서는 정반대로 편파적인 판단을 내리는 자로 묘사됩니다.',
        cross_references: ['Exodus 23:3', 'Deuteronomy 1:17', 'John 7:24', 'Romans 2:1']
      },
      korean_translation: {
        natural_translation: '이것은 여러분 자신들 사이에서 차별하며, 악한 생각으로 판단하는 사람이 된 것이 아닙니까?',
        translation_notes: '두 수사적 질문을 자연스럽게 하나로 통합'
      },
      special_explanation: {
        explanation_type: '신학적 의미',
        content: '"악한 생각을 가진 재판관"이라는 표현은 차별의 근본 원인이 마음의 동기에 있음을 보여줍니다. 외모로 사람을 판단하는 것은 하나님의 기준이 아닌 세상의 기준을 따르는 것이며, 이는 복음의 본질을 부정하는 행위입니다. 재판관이라는 비유는 하나님만이 유일한 심판자이심을 상기시키며, 인간이 부당한 기준으로 타인을 판단하는 것의 심각성을 강조합니다.',
        examples: ['Matthew 7:1-2 - 판단하지 말라', 'James 4:11-12 - 오직 한 분 재판자']
      }
    },

    // James 2:5
    {
      reference: 'James 2:5',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '주의 환기',
          original_text: 'Listen, my dear brothers and sisters',
          korean_translation: '들으라, 나의 사랑하는 형제자매들이여',
          grammatical_explanation: '명령형 동사로 중요한 진리 선포 전 주의 집중'
        },
        {
          sequence_order: 2,
          semantic_classification: '수사적 질문 - 하나님의 선택',
          original_text: 'Has not God chosen those who are poor in the eyes of the world',
          korean_translation: '하나님께서 세상의 눈에는 가난한 자들을 선택하지 않으셨느냐',
          grammatical_explanation: '부정 의문문으로 긍정적 진리 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '목적 1 - 믿음의 풍성함',
          original_text: 'to be rich in faith',
          korean_translation: '믿음에 있어서 부유하게 하시려고',
          grammatical_explanation: '부정사구로 선택의 목적 설명'
        },
        {
          sequence_order: 4,
          semantic_classification: '목적 2 - 왕국 상속',
          original_text: 'and to inherit the kingdom',
          korean_translation: '그리고 왕국을 상속받게 하시려고',
          grammatical_explanation: '병렬 부정사구로 두 번째 목적 제시'
        },
        {
          sequence_order: 5,
          semantic_classification: '약속의 조건',
          original_text: 'he promised those who love him',
          korean_translation: '그를 사랑하는 자들에게 약속하신',
          grammatical_explanation: '관계절로 약속의 대상과 조건 명시'
        }
      ],
      vocabulary: [
        {
          word: 'chosen',
          ipa_pronunciation: '/ˈtʃoʊzən/',
          korean_pronunciation: '초즌',
          part_of_speech: '동사 (과거분사)',
          definition_korean: '선택하다, 택하다',
          usage_note: '하나님의 주권적 선택을 나타냄'
        },
        {
          word: 'inherit',
          ipa_pronunciation: '/ɪnˈherɪt/',
          korean_pronunciation: '인헤릿',
          part_of_speech: '동사',
          definition_korean: '상속받다, 물려받다',
          usage_note: '하나님 나라를 선물로 받는 것을 의미'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 하나님의 가치관이 세상과 정반대임을 강조합니다. 세상이 가난한 자를 무시할 때, 하나님은 그들을 특별히 선택하셨습니다. 이것은 단순히 물질적 가난을 미화하는 것이 아니라, 가난한 자들이 물질에 의지하지 않고 하나님을 의지하기에 믿음이 풍성할 수 있다는 영적 진리를 담고 있습니다. "믿음에 부유함"과 "왕국 상속"은 세상의 부를 초월하는 영원한 가치를 나타냅니다. "그를 사랑하는 자들"이라는 조건은 가난 자체가 아니라 하나님과의 관계가 핵심임을 보여줍니다.',
        cross_references: ['Matthew 5:3', 'Luke 6:20', '1 Corinthians 1:26-29', '2 Corinthians 8:9']
      },
      korean_translation: {
        natural_translation: '사랑하는 형제자매 여러분, 들어보십시오. 하나님께서는 세상의 눈으로 볼 때 가난한 사람들을 선택하여 믿음에 있어서는 부유하게 하시고, 당신을 사랑하는 사람들에게 약속하신 나라를 상속받게 하지 않으셨습니까?',
        translation_notes: 'rich in faith를 "믿음에 있어서 부유함"으로 번역하여 물질적 부와 대조'
      },
      special_explanation: {
        explanation_type: '신학적 역설',
        content: '야고보는 하나님 나라의 역설적 가치관을 제시합니다. 세상에서 가난한 자가 믿음에서는 부유하고, 세상에서 낮은 자가 하나님 나라에서는 높습니다. 이것은 예수님의 팔복과 일맥상통하며, 복음이 세상의 가치 체계를 전복시키는 혁명적 메시지임을 보여줍니다. 중요한 것은 가난 자체가 아니라 "하나님을 사랑하는" 믿음의 관계입니다.',
        examples: ['Matthew 19:30 - 먼저 된 자가 나중 되고', '1 Corinthians 1:27 - 어리석은 것으로 지혜 있는 자를 부끄럽게 하심']
      }
    },

    // James 2:6
    {
      reference: 'James 2:6',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '대조 - 부당한 행동',
          original_text: 'But you have dishonored the poor',
          korean_translation: '그러나 너희는 가난한 자를 모욕했다',
          grammatical_explanation: 'But으로 하나님의 선택과 대조되는 인간의 행동 지적'
        },
        {
          sequence_order: 2,
          semantic_classification: '수사적 질문 1 - 억압의 주체',
          original_text: 'Is it not the rich who are exploiting you?',
          korean_translation: '너희를 착취하는 자들이 바로 부자들이 아니냐?',
          grammatical_explanation: '부정 의문문으로 역설적 상황 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '수사적 질문 2 - 법정 소송',
          original_text: 'Are they not the ones who are dragging you into court?',
          korean_translation: '너희를 법정으로 끌고 가는 자들이 바로 그들이 아니냐?',
          grammatical_explanation: '병렬 수사적 질문으로 부자들의 악행 나열'
        }
      ],
      vocabulary: [
        {
          word: 'dishonored',
          ipa_pronunciation: '/dɪsˈɑːnərd/',
          korean_pronunciation: '디스아너드',
          part_of_speech: '동사',
          definition_korean: '모욕하다, 불명예스럽게 하다',
          usage_note: '존엄성을 손상시키는 행위'
        },
        {
          word: 'exploiting',
          ipa_pronunciation: '/ɪkˈsplɔɪtɪŋ/',
          korean_pronunciation: '익스플로이팅',
          part_of_speech: '동사',
          definition_korean: '착취하다, 부당하게 이용하다',
          usage_note: '약자를 억압하여 이득을 취함'
        },
        {
          word: 'dragging',
          ipa_pronunciation: '/ˈdræɡɪŋ/',
          korean_pronunciation: '드래깅',
          part_of_speech: '동사',
          definition_korean: '끌다, 질질 끌고 가다',
          usage_note: '강제로 억지로 데려가는 폭력적 이미지'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 독자들의 모순된 행동을 날카롭게 지적합니다. 하나님이 선택하신 가난한 자를 모욕하면서, 정작 자신들을 억압하는 부자들에게 아첨하는 어리석음을 폭로합니다. 1세기 로마 제국에서 부유한 지주들은 가난한 소작인들을 착취했고, 법정을 통해 빚진 자들을 압박했습니다. 초대교회 성도들 중 많은 이들이 이러한 경제적 억압을 경험했지만, 역설적으로 교회 안에서는 부자들에게 특별 대우를 했습니다.',
        cross_references: ['Amos 2:6-7', 'Amos 8:4-6', '1 Corinthians 6:1-8', 'James 5:1-6']
      },
      korean_translation: {
        natural_translation: '그런데 여러분은 가난한 사람을 모욕했습니다. 여러분을 억압하는 자들이 바로 부자들이 아닙니까? 또 여러분을 법정으로 끌고 가는 자들도 바로 그들이 아닙니까?',
        translation_notes: 'dragging을 "끌고 가는"으로 번역하여 폭력성 표현'
      },
      special_explanation: {
        explanation_type: '사회적 배경',
        content: '1세기 로마 사회에서 부자와 가난한 자 사이의 경제적 격차는 극심했습니다. 부유한 지주들은 법적 권력을 이용해 가난한 자들의 토지를 빼앗고, 빚을 빌미로 법정에 고소하여 더욱 억압했습니다. 야고보가 묘사하는 "끌고 가는" 이미지는 물리적 폭력을 동반한 강제성을 나타냅니다. 이러한 상황에서 교회가 억압자에게 아첨하는 것은 피해자를 두 번 모욕하는 행위입니다.',
        examples: ['Nehemiah 5:1-13 - 가난한 자 착취 금지', 'Luke 12:13-21 - 탐욕에 대한 경고']
      }
    },

    // James 2:7
    {
      reference: 'James 2:7',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문 - 신성모독',
          original_text: 'Are they not the ones who are blaspheming the noble name',
          korean_translation: '그 고귀한 이름을 모독하는 자들이 바로 그들이 아니냐',
          grammatical_explanation: '부정 의문문으로 부자들의 영적 죄악 폭로'
        },
        {
          sequence_order: 2,
          semantic_classification: '소유/정체성 설명',
          original_text: 'of him to whom you belong?',
          korean_translation: '너희가 속한 그분의',
          grammatical_explanation: '관계절로 그리스도인의 정체성과 소속 강조'
        }
      ],
      vocabulary: [
        {
          word: 'blaspheming',
          ipa_pronunciation: '/ˈblæsfəmɪŋ/',
          korean_pronunciation: '블래스페밍',
          part_of_speech: '동사',
          definition_korean: '모독하다, 신성을 훼손하다',
          usage_note: '하나님이나 거룩한 것을 경멸하는 행위'
        },
        {
          word: 'noble',
          ipa_pronunciation: '/ˈnoʊbəl/',
          korean_pronunciation: '노블',
          part_of_speech: '형용사',
          definition_korean: '고귀한, 존귀한',
          usage_note: '예수 그리스도의 이름의 거룩함과 영광을 강조'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 부자들의 죄악의 정점으로 예수 그리스도의 이름을 모독하는 것을 지적합니다. "고귀한 이름"은 세례 때 그리스도인들에게 불려진 예수 그리스도의 이름을 가리키며, "너희가 속한 그분"이라는 표현은 그리스도인의 정체성이 그리스도께 속한 것임을 강조합니다. 1세기 로마 사회에서 일부 부유한 비신자들은 그리스도인들을 조롱하고 박해했으며, 예수의 이름을 경멸했습니다. 교회가 이러한 자들에게 아첨하는 것은 자신들의 주인을 배신하는 행위입니다.',
        cross_references: ['Acts 5:41', 'Acts 9:21', '1 Peter 4:14', 'Revelation 2:13']
      },
      korean_translation: {
        natural_translation: '여러분이 속해 있는 그 고귀한 이름을 모독하는 자들도 바로 그들이 아닙니까?',
        translation_notes: 'the noble name을 "고귀한 이름"으로 번역하여 예수 그리스도를 지칭'
      },
      special_explanation: {
        explanation_type: '신학적 의미',
        content: '"고귀한 이름"은 초대교회에서 예수 그리스도를 가리키는 관용적 표현이었습니다. 세례 때 "예수 그리스도의 이름으로" 세례받은 신자들은 그 이름을 자신의 정체성으로 삼았습니다. "너희가 속한 그분"이라는 표현은 소유권과 충성의 관계를 나타내며, 그리스도인들이 더 이상 자신의 것이 아니라 그리스도의 것임을 강조합니다. 따라서 그리스도의 이름을 모독하는 자들에게 아첨하는 것은 자신의 주인을 배반하는 행위입니다.',
        examples: ['Acts 2:38 - 예수 그리스도의 이름으로 세례', '1 Corinthians 6:11 - 주 예수의 이름으로 씻음받음']
      }
    },

    // James 2:8
    {
      reference: 'James 2:8',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '조건절 - 긍정적 가정',
          original_text: 'If you really keep the royal law found in Scripture',
          korean_translation: '만약 너희가 정말로 성경에서 발견되는 왕의 율법을 지킨다면',
          grammatical_explanation: 'if 조건절로 올바른 행동의 기준 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '율법 인용',
          original_text: '"Love your neighbor as yourself,"',
          korean_translation: '"네 이웃을 네 자신같이 사랑하라"',
          grammatical_explanation: '레위기 19:18 직접 인용'
        },
        {
          sequence_order: 3,
          semantic_classification: '결과 - 칭찬',
          original_text: 'you are doing right',
          korean_translation: '너희는 올바르게 행하는 것이다',
          grammatical_explanation: '조건절의 결과로 긍정적 평가'
        }
      ],
      vocabulary: [
        {
          word: 'royal',
          ipa_pronunciation: '/ˈrɔɪəl/',
          korean_pronunciation: '로열',
          part_of_speech: '형용사',
          definition_korean: '왕의, 왕실의, 최고의',
          usage_note: '하나님 나라의 왕이신 예수께서 가장 중요하게 여기신 율법'
        },
        {
          word: 'neighbor',
          ipa_pronunciation: '/ˈneɪbər/',
          korean_pronunciation: '네이버',
          part_of_speech: '명사',
          definition_korean: '이웃, 동료 인간',
          usage_note: '성경적으로는 모든 사람, 특히 도움이 필요한 자'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 편애 금지의 근거로 "왕의 율법"을 제시합니다. 이것은 레위기 19:18의 "네 이웃을 네 자신같이 사랑하라"는 계명으로, 예수님께서 가장 중요한 두 계명 중 하나로 강조하셨습니다. "왕의"라는 표현은 이 율법이 왕이신 예수께서 주신 최고의 명령임을 나타냅니다. 이웃 사랑은 외모나 지위를 따지지 않고 모든 사람을 동등하게 대하는 것을 의미하며, 편애는 이 율법을 정면으로 위반하는 것입니다.',
        cross_references: ['Leviticus 19:18', 'Matthew 22:39', 'Mark 12:31', 'Romans 13:9', 'Galatians 5:14']
      },
      korean_translation: {
        natural_translation: '만약 여러분이 성경에 기록된 "네 이웃을 네 몸같이 사랑하라"는 가장 중요한 율법을 정말로 지킨다면, 여러분은 옳은 일을 하는 것입니다.',
        translation_notes: 'royal law를 "왕의 율법" 또는 "가장 중요한 율법"으로 번역 가능'
      },
      special_explanation: {
        explanation_type: '신학적 연결',
        content: '"왕의 율법"이라는 표현은 여러 의미를 담고 있습니다. 첫째, 하나님 나라의 왕이신 예수께서 가장 중요하게 여기신 율법입니다. 둘째, 왕국의 시민으로서 지켜야 할 최고의 법입니다. 셋째, 모든 율법을 요약하는 왕 같은 율법입니다. 이웃 사랑은 단순한 감정이 아니라 외모, 지위, 재산에 관계없이 모든 사람을 하나님의 형상을 지닌 존재로 존중하는 구체적 행동입니다.',
        examples: ['Matthew 7:12 - 황금률', 'John 13:34-35 - 새 계명', '1 John 4:20-21 - 형제 사랑']
      }
    },

    // James 2:9
    {
      reference: 'James 2:9',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '조건절 - 부정적 행동',
          original_text: 'But if you show favoritism',
          korean_translation: '그러나 만약 너희가 편애를 보인다면',
          grammatical_explanation: 'But으로 대조되는 잘못된 행동 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '결과 - 죄의 선언',
          original_text: 'you sin',
          korean_translation: '너희는 죄를 짓는 것이며',
          grammatical_explanation: '단순하고 명확한 죄의 규정'
        },
        {
          sequence_order: 3,
          semantic_classification: '법적 판결',
          original_text: 'and are convicted by the law as lawbreakers',
          korean_translation: '율법에 의해 범법자로 정죄받는다',
          grammatical_explanation: '수동태로 율법의 객관적 판단 표현'
        }
      ],
      vocabulary: [
        {
          word: 'sin',
          ipa_pronunciation: '/sɪn/',
          korean_pronunciation: '신',
          part_of_speech: '동사',
          definition_korean: '죄를 짓다',
          usage_note: '하나님의 율법을 위반하는 행위'
        },
        {
          word: 'convicted',
          ipa_pronunciation: '/kənˈvɪktɪd/',
          korean_pronunciation: '컨빅티드',
          part_of_speech: '동사 (수동태)',
          definition_korean: '유죄 판결을 받다, 정죄되다',
          usage_note: '법적으로 범죄가 확정됨'
        },
        {
          word: 'lawbreakers',
          ipa_pronunciation: '/ˈlɔːbreɪkərz/',
          korean_pronunciation: '로브레이커즈',
          part_of_speech: '명사',
          definition_korean: '범법자들, 율법을 어기는 자들',
          usage_note: '율법의 권위에 도전하는 자들'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 편애가 단순한 실수나 윤리적 결함이 아니라 명백한 죄임을 선언합니다. "죄를 짓는다"는 현재형 동사는 습관적이고 지속적인 행동을 나타내며, "범법자로 정죄받는다"는 법정적 선언은 편애의 심각성을 강조합니다. 이것은 단순히 사회적 예의나 윤리의 문제가 아니라, 하나님의 율법을 직접 위반하는 범죄입니다. 이웃 사랑의 율법을 어기는 것은 곧 하나님께 불순종하는 것입니다.',
        cross_references: ['Romans 3:20', 'Galatians 3:10', '1 John 3:4', 'James 4:17']
      },
      korean_translation: {
        natural_translation: '그러나 만약 여러분이 사람을 차별한다면, 여러분은 죄를 짓는 것이며, 율법에 의해 범법자로 판결받습니다.',
        translation_notes: 'convicted를 "정죄받다" 또는 "판결받다"로 번역하여 법정적 의미 강조'
      },
      special_explanation: {
        explanation_type: '법적 의미',
        content: '야고보는 편애를 도덕적 결함이 아닌 법적 범죄로 규정합니다. "죄를 짓는다"는 선언은 편애가 하나님의 율법을 직접 위반하는 행위임을 명확히 하며, "범법자로 정죄받는다"는 표현은 마지막 심판 때의 법정적 결과를 암시합니다. 이것은 교회 내의 차별이 얼마나 심각한 죄인지 강조하며, 신자들이 이를 가볍게 여겨서는 안 됨을 경고합니다.',
        examples: ['Deuteronomy 1:17 - 재판에서 차별 금지', 'Malachi 2:9 - 편파적 판단에 대한 심판']
      }
    },

    // James 2:10
    {
      reference: 'James 2:10',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '조건절 - 율법 준수',
          original_text: 'For whoever keeps the whole law',
          korean_translation: '누구든지 온 율법을 지키다가',
          grammatical_explanation: 'whoever로 보편적 원리 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '대조절 - 부분적 실패',
          original_text: 'and yet stumbles at just one point',
          korean_translation: '단 한 가지에서라도 실족한다면',
          grammatical_explanation: 'and yet으로 대조적 상황 제시, just one으로 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '결과 - 전체 유죄',
          original_text: 'is guilty of breaking all of it',
          korean_translation: '모든 것을 범한 것으로 유죄다',
          grammatical_explanation: '극단적 결과로 율법의 통일성 강조'
        }
      ],
      vocabulary: [
        {
          word: 'stumbles',
          ipa_pronunciation: '/ˈstʌmbəlz/',
          korean_pronunciation: '스텀블즈',
          part_of_speech: '동사',
          definition_korean: '실족하다, 넘어지다, 실수하다',
          usage_note: '도덕적·영적 실패를 나타내는 은유'
        },
        {
          word: 'guilty',
          ipa_pronunciation: '/ˈɡɪlti/',
          korean_pronunciation: '길티',
          part_of_speech: '형용사',
          definition_korean: '유죄의, 죄책감이 있는',
          usage_note: '법적 책임과 도덕적 책임을 모두 포함'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 율법의 불가분성 원리를 제시합니다. 율법은 하나님의 뜻을 나타내는 통일된 전체이므로, 한 부분을 어기는 것은 전체를 주신 하나님께 불순종하는 것입니다. 이것은 율법주의가 아니라 오히려 율법을 선택적으로 지키려는 위선을 폭로합니다. 편애를 하면서 다른 율법을 지킨다고 자부하는 자들에게, 야고보는 한 가지 계명을 어기는 것이 전체를 어기는 것과 같다고 선언합니다. 이것은 모든 계명이 동일한 입법자 하나님에게서 나왔기 때문입니다.',
        cross_references: ['Matthew 5:19', 'Galatians 3:10', 'Galatians 5:3', 'James 2:11']
      },
      korean_translation: {
        natural_translation: '누구든지 율법 전체를 지키다가도 한 가지 조항에서라도 실패하면, 모든 계명을 범한 것으로 유죄 판결을 받습니다.',
        translation_notes: 'stumbles를 "실족하다" 또는 "실패하다"로 번역'
      },
      special_explanation: {
        explanation_type: '율법의 통일성',
        content: '야고보의 주장은 율법의 근원이 하나님이라는 사실에 기초합니다. 율법의 각 계명은 독립적인 규칙이 아니라 하나님의 완전한 뜻을 나타내는 통일된 전체의 일부입니다. 따라서 한 계명을 고의로 어기는 것은 입법자이신 하나님의 권위에 도전하는 것이며, 이는 전체 율법을 거부하는 것과 같습니다. 이 원리는 사람들이 자신이 좋아하는 율법만 선택적으로 지키려는 위선을 폭로합니다.',
        examples: ['Deuteronomy 27:26 - 율법의 모든 말씀을 행하지 않는 자는 저주받음', 'Galatians 3:10 - 율법책에 기록된 모든 것을 행해야 함']
      }
    },

    // James 2:11
    {
      reference: 'James 2:11',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '예시 1 - 간음 금지',
          original_text: 'For he who said, "You shall not commit adultery,"',
          korean_translation: '"간음하지 말라"고 말씀하신 분이',
          grammatical_explanation: '십계명 제7계명 인용'
        },
        {
          sequence_order: 2,
          semantic_classification: '예시 2 - 살인 금지',
          original_text: 'also said, "You shall not murder."',
          korean_translation: '또한 "살인하지 말라"고 말씀하셨다',
          grammatical_explanation: '십계명 제6계명 인용, also로 같은 입법자 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '결론 - 범법자 선언',
          original_text: 'If you do not commit adultery but do commit murder, you have become a lawbreaker',
          korean_translation: '만약 네가 간음하지 않더라도 살인한다면, 너는 범법자가 된 것이다',
          grammatical_explanation: '가상 예시로 율법 불가분성 원리 구체화'
        }
      ],
      vocabulary: [
        {
          word: 'adultery',
          ipa_pronunciation: '/əˈdʌltəri/',
          korean_pronunciation: '어덜터리',
          part_of_speech: '명사',
          definition_korean: '간음',
          usage_note: '십계명 중 제7계명'
        },
        {
          word: 'murder',
          ipa_pronunciation: '/ˈmɜːrdər/',
          korean_pronunciation: '머더',
          part_of_speech: '명사/동사',
          definition_korean: '살인',
          usage_note: '십계명 중 제6계명'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 십계명의 두 가지 중요한 계명을 예로 들어 율법의 불가분성을 구체화합니다. 간음하지 않는다고 해서 살인이 정당화되지 않는 것처럼, 어떤 율법을 지킨다고 해서 다른 율법을 어기는 것이 용인되지 않습니다. 핵심은 모든 계명을 주신 분이 동일한 하나님이라는 사실입니다. 따라서 어떤 계명을 어기든 그것은 하나님의 권위에 대한 불순종입니다. 이것은 편애를 하면서 다른 율법을 지킨다고 자부하는 자들의 변명을 무력화시킵니다.',
        cross_references: ['Exodus 20:13-14', 'Matthew 5:21-22', 'Matthew 5:27-28', '1 John 3:15']
      },
      korean_translation: {
        natural_translation: '"간음하지 말라"고 말씀하신 분께서 또한 "살인하지 말라"고 말씀하셨습니다. 그러므로 간음하지 않더라도 살인한다면, 여러분은 율법을 어긴 사람이 됩니다.',
        translation_notes: '십계명의 순서가 원래는 살인(6계), 간음(7계)이지만 야고보는 역순으로 제시'
      },
      special_explanation: {
        explanation_type: '율법론적 논증',
        content: '야고보는 율법의 근원이 하나님이라는 사실을 강조하기 위해 "말씀하신 분"을 주어로 삼습니다. 간음 금지와 살인 금지를 주신 분이 동일한 하나님이므로, 한 계명을 어기는 것은 입법자 하나님께 불순종하는 것입니다. 이것은 사람들이 자신의 약점에서는 관대하고 남의 약점에서는 엄격한 이중 잣대를 폭로합니다. 편애하는 자들은 자신은 살인이나 간음을 하지 않았다고 변명할 수 있지만, 야고보는 편애 역시 동일한 하나님의 율법을 어긴 것이라고 선언합니다.',
        examples: ['Matthew 23:23 - 율법의 더 중요한 것과 작은 것', 'Romans 2:21-23 - 율법을 가르치면서 어김']
      }
    },

    // James 2:12 - Continuing with rest of verses...
    {
      reference: 'James 2:12',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '명령 - 발화 행동',
          original_text: 'Speak',
          korean_translation: '말하라',
          grammatical_explanation: '명령형 동사로 일상적 언어 사용 지시'
        },
        {
          sequence_order: 2,
          semantic_classification: '명령 - 실천 행동',
          original_text: 'and act',
          korean_translation: '그리고 행하라',
          grammatical_explanation: '병렬 명령으로 말과 행동 모두 포함'
        },
        {
          sequence_order: 3,
          semantic_classification: '방식 설명',
          original_text: 'as those who are going to be judged by the law that gives freedom',
          korean_translation: '자유를 주는 율법에 의해 심판받을 자들처럼',
          grammatical_explanation: 'as 비교절로 삶의 기준 제시'
        }
      ],
      vocabulary: [
        {
          word: 'judged',
          ipa_pronunciation: '/dʒʌdʒd/',
          korean_pronunciation: '저지드',
          part_of_speech: '동사 (수동태)',
          definition_korean: '심판받다, 판단받다',
          usage_note: '마지막 심판을 암시'
        },
        {
          word: 'freedom',
          ipa_pronunciation: '/ˈfriːdəm/',
          korean_pronunciation: '프리덤',
          part_of_speech: '명사',
          definition_korean: '자유',
          usage_note: '여기서는 죄와 율법주의로부터의 자유'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 신자들이 "자유를 주는 율법"의 관점에서 삶을 살아야 한다고 권면합니다. 이것은 율법주의적 속박이 아니라 복음의 자유 안에서 사랑의 율법을 따르는 삶을 의미합니다. "심판받을 자들처럼"이라는 표현은 마지막 날의 심판을 의식하며 살라는 것으로, 이것은 두려움이 아니라 책임 있는 삶의 동기가 됩니다. 말과 행동 모두가 이 율법의 빛 아래서 평가될 것임을 인식해야 합니다.',
        cross_references: ['James 1:25', 'John 8:32', 'Romans 8:2', '2 Corinthians 3:17', 'Galatians 5:1']
      },
      korean_translation: {
        natural_translation: '자유를 주는 율법으로 심판을 받을 사람답게 말하고 행동하십시오.',
        translation_notes: 'the law that gives freedom을 "자유의 율법" 또는 "자유를 주는 율법"으로 번역'
      },
      special_explanation: {
        explanation_type: '자유의 율법',
        content: '"자유를 주는 율법"은 역설적 표현으로, 율법이 속박이 아니라 자유를 준다는 복음의 진리를 담고 있습니다. 이것은 죄와 이기심으로부터의 자유를 의미하며, 사랑의 율법을 기쁨으로 따를 수 있는 자유입니다. 그리스도 안에서 율법은 더 이상 정죄의 도구가 아니라 하나님의 뜻을 알고 따를 수 있는 은혜의 안내자입니다. 이 율법으로 심판받는다는 것은 은혜와 책임이 함께 가는 복음의 본질을 나타냅니다.',
        examples: ['Romans 8:2 - 생명의 성령의 법', 'Galatians 6:2 - 그리스도의 법', '1 Corinthians 9:21 - 그리스도의 법 아래']
      }
    },

    // James 2:13
    {
      reference: 'James 2:13',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '원리 선언 - 무자비의 결과',
          original_text: 'because judgment without mercy will be shown to anyone who has not been merciful',
          korean_translation: '자비를 베풀지 않은 자에게는 자비 없는 심판이 있을 것이기 때문이다',
          grammatical_explanation: 'because로 앞 구절의 이유 설명, 수동태로 하나님의 심판 강조'
        },
        {
          sequence_order: 2,
          semantic_classification: '대조 - 자비의 승리',
          original_text: 'Mercy triumphs over judgment',
          korean_translation: '자비는 심판을 이긴다',
          grammatical_explanation: '간결한 선언문으로 복음의 핵심 진리 표현'
        }
      ],
      vocabulary: [
        {
          word: 'mercy',
          ipa_pronunciation: '/ˈmɜːrsi/',
          korean_pronunciation: '머시',
          part_of_speech: '명사',
          definition_korean: '자비, 긍휼',
          usage_note: '불쌍히 여기고 용서하는 하나님의 성품'
        },
        {
          word: 'triumphs',
          ipa_pronunciation: '/ˈtraɪʌmfs/',
          korean_pronunciation: '트라이엄프스',
          part_of_speech: '동사',
          definition_korean: '승리하다, 이기다',
          usage_note: '완전한 우위를 점함'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 자비와 심판의 관계에 대한 중요한 원리를 제시합니다. 자비를 베풀지 않은 자는 자비 없는 심판을 받을 것이라는 경고는 예수님의 가르침을 반영합니다. 그러나 마지막 문장 "자비는 심판을 이긴다"는 복음의 핵심 진리를 담고 있습니다. 자비를 베푸는 자는 심판의 날에도 하나님의 자비를 경험할 것입니다. 이것은 자비가 공의를 무시한다는 것이 아니라, 자비를 베푸는 삶이 심판에 대한 두려움을 이긴다는 의미입니다.',
        cross_references: ['Matthew 5:7', 'Matthew 6:14-15', 'Matthew 18:23-35', 'Luke 6:36-38']
      },
      korean_translation: {
        natural_translation: '자비를 베풀지 않은 사람에게는 자비 없는 심판이 있을 것입니다. 그러나 자비는 심판을 이깁니다.',
        translation_notes: 'triumphs를 "이기다" 또는 "승리하다"로 번역하여 역동성 표현'
      },
      special_explanation: {
        explanation_type: '신학적 긴장',
        content: '이 구절은 심판과 자비 사이의 긴장을 다룹니다. 첫 번째 진술은 하나님의 공의를 나타내며, 자비를 베풀지 않는 자는 자비를 받을 자격이 없다는 원리를 밝힙니다. 그러나 두 번째 진술 "자비는 심판을 이긴다"는 복음의 승리를 선포합니다. 자비를 베푸는 자는 자비를 경험하며, 이 자비는 심판의 두려움보다 강력합니다. 이것은 행위 구원이 아니라, 하나님의 자비를 받은 자가 자연스럽게 자비를 베푸는 삶을 살게 된다는 복음의 논리입니다.',
        examples: ['Micah 6:8 - 자비를 사랑하며', 'Hosea 6:6 - 자비를 원하고 제사를 원하지 않음', 'Matthew 9:13 - 자비를 배우라']
      }
    },

    // James 2:14
    {
      reference: 'James 2:14',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문 1 - 무익한 믿음',
          original_text: 'What good is it, my brothers and sisters, if someone claims to have faith but has no deeds?',
          korean_translation: '나의 형제자매들이여, 누군가 믿음이 있다고 주장하지만 행위가 없다면 무슨 유익이 있겠느냐?',
          grammatical_explanation: '수사적 의문문으로 행위 없는 믿음의 무용성 지적'
        },
        {
          sequence_order: 2,
          semantic_classification: '수사적 질문 2 - 구원의 불가능',
          original_text: 'Can such faith save them?',
          korean_translation: '그러한 믿음이 그들을 구원할 수 있겠느냐?',
          grammatical_explanation: '부정적 답변을 전제하는 수사적 질문'
        }
      ],
      vocabulary: [
        {
          word: 'claims',
          ipa_pronunciation: '/kleɪmz/',
          korean_pronunciation: '클레임즈',
          part_of_speech: '동사',
          definition_korean: '주장하다, 요구하다',
          usage_note: '실제와 다를 수 있는 말로만의 주장'
        },
        {
          word: 'deeds',
          ipa_pronunciation: '/diːdz/',
          korean_pronunciation: '디즈',
          part_of_speech: '명사',
          definition_korean: '행위, 행동',
          usage_note: '믿음의 실제적 표현'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 믿음과 행위의 관계라는 중요한 주제를 시작합니다. "주장한다"는 동사는 실제와 다를 수 있는 말만의 주장을 암시하며, "행위가 없다"는 표현은 삶의 변화가 없는 믿음을 지적합니다. 이것은 당시 일부 신자들이 믿음만 있으면 된다고 하면서 실제 삶에서는 변화가 없는 문제를 다룹니다. 야고보는 이러한 믿음이 구원에 이르게 할 수 없다고 강력하게 주장하지만, 이것은 바울의 믿음으로 말미암는 구원 교리와 모순되지 않습니다. 야고보가 말하는 것은 진정한 믿음은 반드시 행위로 나타난다는 것입니다.',
        cross_references: ['Matthew 7:21-23', 'Romans 2:13', 'Ephesians 2:8-10', 'Titus 1:16', '1 John 3:18']
      },
      korean_translation: {
        natural_translation: '나의 형제자매 여러분, 누군가가 믿음이 있다고 말하면서도 그에 따른 행동이 없다면 무슨 소용이 있겠습니까? 그런 믿음이 그 사람을 구원할 수 있겠습니까?',
        translation_notes: 'claims를 "주장하다" 또는 "말하다"로 번역'
      },
      special_explanation: {
        explanation_type: '믿음과 행위의 관계',
        content: '야고보는 행위로 구원받는다고 주장하는 것이 아니라, 진정한 믿음은 반드시 행위로 나타난다고 가르칩니다. "그러한 믿음"(such faith)이라는 표현은 행위가 없는 죽은 믿음을 가리키며, 이것은 진정한 믿음이 아닙니다. 바울은 믿음으로 의롭다 함을 받는다고 가르쳤지만(롬 3:28), 그 믿음은 사랑으로 역사하는 믿음입니다(갈 5:6). 야고보와 바울은 같은 진리의 다른 면을 강조하는 것입니다.',
        examples: ['Romans 3:28 vs James 2:24 - 믿음과 행위의 조화', 'Galatians 5:6 - 사랑으로 역사하는 믿음', 'Ephesians 2:10 - 선한 일을 위해 창조됨']
      }
    },

    // James 2:15-16
    {
      reference: 'James 2:15',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '가상 상황 - 형제자매의 궁핍',
          original_text: 'Suppose a brother or a sister is without clothes and daily food',
          korean_translation: '형제나 자매가 옷이 없고 매일의 양식이 없다고 가정하라',
          grammatical_explanation: 'Suppose로 구체적 가상 상황 제시'
        }
      ],
      vocabulary: [
        {
          word: 'daily',
          ipa_pronunciation: '/ˈdeɪli/',
          korean_pronunciation: '데일리',
          part_of_speech: '형용사',
          definition_korean: '매일의, 날마다의',
          usage_note: '생존을 위한 기본적 필요'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 구체적인 예시를 통해 행위 없는 믿음의 모순을 드러냅니다. "형제나 자매"는 교회 공동체의 일원을 가리키며, "옷이 없고 매일의 양식이 없다"는 표현은 극심한 가난과 생존의 위협을 나타냅니다. 이것은 1세기 교회가 직면한 실제 문제였으며, 초대교회는 가난한 성도들을 돌보는 것을 중요한 책임으로 여겼습니다.',
        cross_references: ['Acts 2:44-45', 'Acts 4:32-35', '1 John 3:17-18']
      },
      korean_translation: {
        natural_translation: '어떤 형제나 자매가 입을 옷도 없고 먹을 양식도 없다고 가정해 봅시다.',
        translation_notes: 'daily food를 "매일의 양식" 또는 "먹을 것"으로 번역'
      }
    },

    {
      reference: 'James 2:16',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '조건절 - 공허한 말',
          original_text: 'If one of you says to them',
          korean_translation: '너희 중 한 사람이 그들에게 말하기를',
          grammatical_explanation: 'if 조건절로 잘못된 반응 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '직접 인용 - 빈말',
          original_text: '"Go in peace; keep warm and well fed,"',
          korean_translation: '"평안히 가서 따뜻하게 지내고 배불리 먹으시오"',
          grammatical_explanation: '직접 화법으로 피상적 축복 표현'
        },
        {
          sequence_order: 3,
          semantic_classification: '대조절 - 실제 무행동',
          original_text: 'but does nothing about their physical needs',
          korean_translation: '그러나 그들의 육체적 필요에 대해 아무것도 하지 않는다면',
          grammatical_explanation: 'but으로 말과 행동의 모순 강조'
        },
        {
          sequence_order: 4,
          semantic_classification: '수사적 질문 - 무익함',
          original_text: 'what good is it?',
          korean_translation: '무슨 유익이 있겠느냐?',
          grammatical_explanation: '14절과 동일한 수사적 질문으로 무용성 강조'
        }
      ],
      vocabulary: [
        {
          word: 'peace',
          ipa_pronunciation: '/piːs/',
          korean_pronunciation: '피스',
          part_of_speech: '명사',
          definition_korean: '평안, 평화',
          usage_note: '여기서는 빈말로 사용된 형식적 축복'
        },
        {
          word: 'physical',
          ipa_pronunciation: '/ˈfɪzɪkəl/',
          korean_pronunciation: '피지컬',
          part_of_speech: '형용사',
          definition_korean: '육체적, 물질적',
          usage_note: '구체적이고 실제적인 필요'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 말만 있고 행동이 없는 신앙의 위선을 신랄하게 비판합니다. "평안히 가라"는 히브리어 샬롬(shalom)에 해당하는 인사말로, 본래는 온전한 복지를 기원하는 의미였지만, 여기서는 실제 도움 없이 형식적으로만 사용되는 빈말입니다. "따뜻하게 지내고 배불리 먹으시오"라는 축복은 옷과 음식이 필요한 사람에게 옷과 음식을 주지 않으면서 하는 공허한 말입니다. 이것은 믿음 없는 행위가 아니라 행위 없는 믿음의 비극적 모습입니다.',
        cross_references: ['1 John 3:17-18', 'Matthew 25:35-40', 'Isaiah 58:7', 'Proverbs 3:27-28']
      },
      korean_translation: {
        natural_translation: '그런데 여러분 가운데 누군가가 그들에게 "평안히 가서 몸을 따뜻하게 하고 배불리 먹으시오"라고 말만 하고, 그들이 필요로 하는 것을 실제로 주지 않는다면, 무슨 소용이 있겠습니까?',
        translation_notes: 'Go in peace를 "평안히 가라"로 번역하여 히브리적 인사 표현'
      },
      special_explanation: {
        explanation_type: '실천적 사랑',
        content: '야고보는 사랑이 말이 아니라 행동으로 표현되어야 함을 강조합니다. "평안히 가라"는 진정한 관심이 아니라 무관심을 감추는 종교적 언어입니다. 진정한 믿음은 형제자매의 필요를 보고 실제로 돕는 것으로 나타납니다. 이것은 단순한 감정이나 동정이 아니라, 자신의 자원을 나누는 구체적 희생입니다. 요한일서 3:17-18은 이와 동일한 진리를 가르칩니다: "말과 혀로만 사랑하지 말고 행함과 진실함으로 하자."',
        examples: ['Luke 10:30-37 - 선한 사마리아인', 'Acts 3:6 - 베드로의 실제적 도움', '2 Corinthians 8:1-5 - 마게도냐 교회의 관대함']
      }
    },

    // James 2:17
    {
      reference: 'James 2:17',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '결론 - 믿음의 본질',
          original_text: 'In the same way, faith by itself',
          korean_translation: '이와 같이, 믿음도 그 자체로는',
          grammatical_explanation: '앞의 예시와 연결하여 원리 도출'
        },
        {
          sequence_order: 2,
          semantic_classification: '조건절 - 행위 부재',
          original_text: 'if it is not accompanied by action',
          korean_translation: '만약 행동이 동반되지 않는다면',
          grammatical_explanation: 'if 조건절로 행위 없는 믿음 규정'
        },
        {
          sequence_order: 3,
          semantic_classification: '판결 - 죽은 믿음',
          original_text: 'is dead',
          korean_translation: '죽은 것이다',
          grammatical_explanation: '단호한 선언으로 행위 없는 믿음의 무가치 강조'
        }
      ],
      vocabulary: [
        {
          word: 'accompanied',
          ipa_pronunciation: '/əˈkʌmpənid/',
          korean_pronunciation: '어컴퍼니드',
          part_of_speech: '동사 (과거분사)',
          definition_korean: '동반되다, 함께하다',
          usage_note: '믿음과 행위의 불가분 관계'
        },
        {
          word: 'dead',
          ipa_pronunciation: '/ded/',
          korean_pronunciation: '데드',
          part_of_speech: '형용사',
          definition_korean: '죽은, 생명 없는',
          usage_note: '기능하지 않는, 무용한'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 앞의 구체적 예시에서 일반적 원리로 나아갑니다. "그 자체로는"이라는 표현은 믿음이 고립되어 있고 행동과 분리되어 있는 상태를 나타냅니다. "죽은"이라는 강력한 표현은 그러한 믿음이 생명력이 없고 구원에 이르게 할 수 없다는 것을 의미합니다. 이것은 믿음이 필요 없다는 것이 아니라, 진정한 믿음은 반드시 행위로 나타난다는 것입니다. 죽은 믿음은 진정한 믿음이 아니라 단순한 지적 동의에 불과합니다.',
        cross_references: ['James 2:26', 'Matthew 7:16-20', 'Galatians 5:6', 'Titus 1:16', 'Hebrews 11']
      },
      korean_translation: {
        natural_translation: '이와 마찬가지로, 믿음도 행동이 동반되지 않으면 그 자체로는 죽은 것입니다.',
        translation_notes: 'by itself를 "그 자체로는"으로 번역하여 고립된 상태 강조'
      },
      special_explanation: {
        explanation_type: '죽은 믿음과 산 믿음',
        content: '"죽은 믿음"은 강력한 은유로, 생명이 없고 열매를 맺지 못하는 믿음을 나타냅니다. 이것은 머리로만 동의하는 지적 믿음으로, 마귀들도 하나님을 믿고 떠는 그런 믿음입니다(2:19). 반대로 산 믿음은 성령의 역사로 마음이 변화되고 삶이 변화되는 믿음입니다. 야고보는 행위가 믿음을 만든다고 주장하는 것이 아니라, 진정한 믿음은 자연스럽게 행위로 나타난다고 가르칩니다. 이것은 나무가 좋으면 열매도 좋다는 예수님의 가르침과 일치합니다.',
        examples: ['Matthew 7:17 - 좋은 나무는 좋은 열매', 'John 15:5 - 포도나무와 가지', 'Galatians 5:22-23 - 성령의 열매']
      }
    },

    // Due to length constraints, I'll continue with the remaining verses of James 2 and all of James 3 in a condensed format
    // James 2:18-26 and James 3:1-18 analyses would follow the same detailed pattern above

    // James 2:18
    {
      reference: 'James 2:18',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '가상 반론 제시',
          original_text: 'But someone will say, "You have faith; I have deeds."',
          korean_translation: '그러나 누군가 말할 것이다, "너는 믿음이 있고 나는 행위가 있다"',
          grammatical_explanation: '가상의 반대 의견 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '반박 - 믿음의 증명 요구',
          original_text: 'Show me your faith without deeds',
          korean_translation: '행위 없이 네 믿음을 나에게 보여주라',
          grammatical_explanation: '명령형으로 불가능한 요구 제시'
        },
        {
          sequence_order: 3,
          semantic_classification: '주장 - 행위로 증명',
          original_text: 'and I will show you my faith by my deeds',
          korean_translation: '나는 내 행위로 내 믿음을 네게 보여주겠다',
          grammatical_explanation: '대조로 진정한 믿음의 증거 제시'
        }
      ],
      vocabulary: [
        {
          word: 'show',
          ipa_pronunciation: '/ʃoʊ/',
          korean_pronunciation: '쇼',
          part_of_speech: '동사',
          definition_korean: '보여주다, 증명하다',
          usage_note: '가시적으로 드러내다'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 믿음과 행위를 분리하려는 잘못된 주장에 반박합니다. 어떤 사람은 믿음과 행위가 별개의 은사라고 주장할 수 있지만, 야고보는 믿음은 행위 없이는 증명될 수 없다고 논증합니다. 믿음은 보이지 않는 내적 확신이지만, 그것이 진짜인지는 행위를 통해서만 알 수 있습니다.',
        cross_references: ['Matthew 7:16', '1 Timothy 6:18', 'Titus 3:8', '1 John 3:18']
      },
      korean_translation: {
        natural_translation: '그러나 어떤 사람은 이렇게 말할 것입니다. "당신에게는 믿음이 있고 나에게는 행동이 있습니다." 행동이 없는 당신의 믿음을 내게 보여주십시오. 나는 내 행동으로 나의 믿음을 당신에게 보여주겠습니다.',
        translation_notes: 'show를 "보여주다" 또는 "증명하다"로 번역'
      }
    },

    // James 2:19
    {
      reference: 'James 2:19',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '긍정적 평가',
          original_text: 'You believe that there is one God',
          korean_translation: '너는 하나님이 한 분이신 것을 믿는다',
          grammatical_explanation: '단일신 신앙 고백'
        },
        {
          sequence_order: 2,
          semantic_classification: '인정',
          original_text: 'Good!',
          korean_translation: '좋다!',
          grammatical_explanation: '감탄사로 표면적 칭찬'
        },
        {
          sequence_order: 3,
          semantic_classification: '비교 - 마귀들도',
          original_text: 'Even the demons believe that',
          korean_translation: '마귀들도 그것을 믿으며',
          grammatical_explanation: 'Even으로 더 나아간 비교 제시'
        },
        {
          sequence_order: 4,
          semantic_classification: '반응 - 두려움',
          original_text: 'and shudder',
          korean_translation: '떤다',
          grammatical_explanation: '믿음의 결과로 공포 반응'
        }
      ],
      vocabulary: [
        {
          word: 'demons',
          ipa_pronunciation: '/ˈdiːmənz/',
          korean_pronunciation: '디먼즈',
          part_of_speech: '명사',
          definition_korean: '마귀들, 귀신들',
          usage_note: '하나님을 대적하는 영적 존재'
        },
        {
          word: 'shudder',
          ipa_pronunciation: '/ˈʃʌdər/',
          korean_pronunciation: '셔더',
          part_of_speech: '동사',
          definition_korean: '떨다, 전율하다',
          usage_note: '두려움으로 인한 신체적 반응'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 지적 동의만으로는 구원에 이를 수 없음을 극적으로 보여줍니다. "하나님이 한 분"이라는 고백은 유대교의 핵심 신조인 쉐마(Shema, 신명기 6:4)를 가리킵니다. 그러나 마귀들도 이 진리를 알고 있으며, 그들은 두려움으로 떱니다. 이것은 단순한 신학적 지식이나 지적 동의가 구원하는 믿음이 아님을 보여줍니다. 진정한 믿음은 지식을 넘어 신뢰와 순종으로 이어집니다.',
        cross_references: ['Deuteronomy 6:4', 'Mark 1:24', 'Mark 5:7', 'Luke 4:41', 'Acts 16:17']
      },
      korean_translation: {
        natural_translation: '당신은 하나님이 한 분이라는 것을 믿습니까? 잘하는 일입니다! 그러나 귀신들도 그것을 믿고 두려워 떱니다.',
        translation_notes: 'shudder를 "떨다" 또는 "전율하다"로 번역하여 공포감 표현'
      },
      special_explanation: {
        explanation_type: '믿음의 본질',
        content: '이 구절은 믿음이 단순한 지적 동의 이상이어야 함을 강력하게 보여줍니다. 마귀들은 하나님의 존재와 능력을 완벽하게 알고 있지만 구원받지 못합니다. 그들의 "믿음"은 두려움을 낳을 뿐 사랑과 순종으로 이어지지 않습니다. 진정한 구원하는 믿음은 하나님을 아는 지식, 그분을 신뢰하는 확신, 그리고 그분께 순종하는 행위가 모두 포함됩니다.',
        examples: ['Matthew 8:29 - 귀신들이 예수를 알아봄', 'John 2:23-25 - 표적 믿음의 한계']
      }
    },

    // James 2:20
    {
      reference: 'James 2:20',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '호칭 (경멸적)',
          original_text: 'You foolish person',
          korean_translation: '어리석은 사람아',
          grammatical_explanation: '강한 책망의 호격'
        },
        {
          sequence_order: 2,
          semantic_classification: '수사적 질문',
          original_text: 'do you want evidence that faith without deeds is useless?',
          korean_translation: '행위 없는 믿음이 쓸모없다는 증거를 원하느냐?',
          grammatical_explanation: '증거 제시 예고'
        }
      ],
      vocabulary: [
        {
          word: 'foolish',
          ipa_pronunciation: '/ˈfuːlɪʃ/',
          korean_pronunciation: '풀리쉬',
          part_of_speech: '형용자',
          definition_korean: '어리석은, 미련한',
          usage_note: '영적 무지를 지적하는 강한 표현'
        },
        {
          word: 'useless',
          ipa_pronunciation: '/ˈjuːsləs/',
          korean_pronunciation: '유슬리스',
          part_of_speech: '형용사',
          definition_korean: '쓸모없는, 무용한',
          usage_note: '기능하지 못하는 상태'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 더 강한 어조로 행위 없는 믿음을 옹호하는 자들을 책망합니다. "어리석은 사람"이라는 호칭은 영적 분별력이 없음을 지적하며, 이제 성경적 증거를 제시하겠다고 예고합니다. 다음 구절들에서 아브라함과 라합의 예를 들어 믿음과 행위의 불가분성을 증명할 것입니다.',
        cross_references: ['Luke 24:25', 'Galatians 3:1', 'Ephesians 5:17']
      },
      korean_translation: {
        natural_translation: '어리석은 사람이여, 행동이 없는 믿음이 쓸모없다는 것을 증명해 주기를 원합니까?',
        translation_notes: 'useless를 "쓸모없다" 또는 "무용하다"로 번역'
      }
    },

    // James 2:21
    {
      reference: 'James 2:21',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문 - 의롭다 함',
          original_text: 'Was not our father Abraham considered righteous for what he did',
          korean_translation: '우리 조상 아브라함이 그가 행한 것으로 의롭다 여김을 받지 않았느냐',
          grammatical_explanation: '부정 의문문으로 긍정 답변 유도'
        },
        {
          sequence_order: 2,
          semantic_classification: '구체적 행위',
          original_text: 'when he offered his son Isaac on the altar?',
          korean_translation: '그가 자기 아들 이삭을 제단에 드렸을 때?',
          grammatical_explanation: 'when절로 구체적 행위 명시'
        }
      ],
      vocabulary: [
        {
          word: 'considered',
          ipa_pronunciation: '/kənˈsɪdərd/',
          korean_pronunciation: '컨시더드',
          part_of_speech: '동사 (수동태)',
          definition_korean: '여김을 받다, 인정받다',
          usage_note: '법적 선언'
        },
        {
          word: 'righteous',
          ipa_pronunciation: '/ˈraɪtʃəs/',
          korean_pronunciation: '라이처스',
          part_of_speech: '형용사',
          definition_korean: '의로운',
          usage_note: '하나님 앞에서 올바른 관계'
        },
        {
          word: 'altar',
          ipa_pronunciation: '/ˈɔːltər/',
          korean_pronunciation: '올터',
          part_of_speech: '명사',
          definition_korean: '제단',
          usage_note: '희생 제사를 드리는 장소'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 아브라함의 이삭 제사 사건(창세기 22장)을 증거로 제시합니다. 이것은 아브라함의 믿음이 최고조에 달한 순간으로, 그의 믿음이 순종의 행위로 완성되었음을 보여줍니다. 바울은 아브라함이 믿음으로 의롭다 함을 받았다고 가르쳤지만(로마서 4장), 야고보는 그 믿음이 이삭을 드리는 행위로 증명되고 완성되었다고 강조합니다. 두 관점은 모순이 아니라 상호 보완적입니다.',
        cross_references: ['Genesis 22:1-19', 'Romans 4:1-3', 'Hebrews 11:17-19', 'Genesis 15:6']
      },
      korean_translation: {
        natural_translation: '우리 조상 아브라함이 그의 아들 이삭을 제단에 바쳤을 때, 그가 행한 일로 의롭다고 인정받지 않았습니까?',
        translation_notes: 'considered righteous를 "의롭다 여김을 받다" 또는 "의롭다고 인정받다"로 번역'
      },
      special_explanation: {
        explanation_type: '바울과 야고보의 조화',
        content: '야고보와 바울이 모순되는 것처럼 보이지만, 실제로는 다른 측면을 강조합니다. 바울은 아브라함이 창세기 15:6에서 하나님을 믿었을 때 의롭다 함을 받았다고 강조하며(롬 4:3), 이것은 행위가 아닌 믿음으로임을 보여줍니다. 야고보는 그 믿음이 창세기 22장에서 이삭을 드리는 행위로 증명되고 완성되었다고 강조합니다. 믿음으로 의롭다 함을 받지만, 그 믿음은 반드시 행위로 나타납니다.',
        examples: ['Romans 4:2-3 - 믿음으로 의롭다 함', 'Genesis 15:6 - 믿음을 의로 여기심', 'Genesis 22:12 - 순종으로 증명된 믿음']
      }
    },

    // James 2:22
    {
      reference: 'James 2:22',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '관찰 - 믿음과 행위의 협력',
          original_text: 'You see that his faith and his actions were working together',
          korean_translation: '너는 그의 믿음과 행위가 함께 작용했음을 본다',
          grammatical_explanation: '현재형으로 명백한 진리 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '결과 - 믿음의 완성',
          original_text: 'and his faith was made complete by what he did',
          korean_translation: '그의 믿음이 그가 행한 것으로 완전하게 되었다',
          grammatical_explanation: '수동태로 행위를 통한 믿음의 성숙 표현'
        }
      ],
      vocabulary: [
        {
          word: 'working together',
          ipa_pronunciation: '/ˈwɜːrkɪŋ təˈɡeðər/',
          korean_pronunciation: '워킹 투게더',
          part_of_speech: '동사구',
          definition_korean: '함께 일하다, 협력하다',
          usage_note: '상호 보완적 관계'
        },
        {
          word: 'complete',
          ipa_pronunciation: '/kəmˈpliːt/',
          korean_pronunciation: '컴플리트',
          part_of_speech: '형용사',
          definition_korean: '완전한, 온전한',
          usage_note: '성숙하고 완성된 상태'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 믿음과 행위의 관계를 "함께 작용한다"와 "완전하게 한다"는 두 가지 개념으로 설명합니다. 믿음과 행위는 대립하는 것이 아니라 협력하여 하나의 온전한 믿음을 형성합니다. 행위는 믿음의 결과이자 믿음을 완성시키는 수단입니다. "완전하게 되었다"는 표현은 믿음이 성숙하고 온전한 형태로 발전했음을 의미합니다.',
        cross_references: ['Philippians 2:12-13', 'Colossians 1:28-29', 'Hebrews 5:14', 'James 1:4']
      },
      korean_translation: {
        natural_translation: '보십시오, 그의 믿음과 행동이 함께 작용했으며, 그가 행한 일로 그의 믿음이 완전하게 되었습니다.',
        translation_notes: 'made complete를 "완전하게 되다" 또는 "온전하게 되다"로 번역'
      },
      special_explanation: {
        explanation_type: '믿음의 완성',
        content: '"완전하게 되었다"(made complete)는 믿음이 처음에는 불완전했다는 의미가 아니라, 행위를 통해 성숙하고 온전한 형태로 발전했다는 의미입니다. 아브라함은 처음 하나님을 믿었을 때 의롭다 함을 받았지만(창 15:6), 그 믿음은 수십 년에 걸쳐 시험과 순종을 통해 성숙했고, 이삭을 드리는 행위로 그 믿음의 진정성과 깊이가 완전히 드러났습니다.',
        examples: ['Hebrews 11:17 - 믿음으로 이삭을 드림', 'James 1:2-4 - 시련을 통한 온전함']
      }
    },

    // James 2:23
    {
      reference: 'James 2:23',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '성경 인용',
          original_text: 'And the scripture was fulfilled that says',
          korean_translation: '그리고 성경 말씀이 성취되었으니',
          grammatical_explanation: '수동태로 예언 성취 선언'
        },
        {
          sequence_order: 2,
          semantic_classification: '직접 인용 - 믿음을 의로 여김',
          original_text: '"Abraham believed God, and it was credited to him as righteousness,"',
          korean_translation: '"아브라함이 하나님을 믿으니 이것이 그에게 의로 여겨졌다"',
          grammatical_explanation: '창세기 15:6 직접 인용'
        },
        {
          sequence_order: 3,
          semantic_classification: '칭호 부여',
          original_text: 'and he was called God\'s friend',
          korean_translation: '그는 하나님의 친구라 불렸다',
          grammatical_explanation: '수동태로 특별한 관계 강조'
        }
      ],
      vocabulary: [
        {
          word: 'fulfilled',
          ipa_pronunciation: '/fʊlˈfɪld/',
          korean_pronunciation: '풀필드',
          part_of_speech: '동사 (수동태)',
          definition_korean: '성취되다, 실현되다',
          usage_note: '예언이나 말씀이 완성됨'
        },
        {
          word: 'credited',
          ipa_pronunciation: '/ˈkredɪtɪd/',
          korean_pronunciation: '크레디티드',
          part_of_speech: '동사 (수동태)',
          definition_korean: '여겨지다, 인정되다',
          usage_note: '법적 회계 용어로 의의 전가'
        },
        {
          word: 'friend',
          ipa_pronunciation: '/frend/',
          korean_pronunciation: '프렌드',
          part_of_speech: '명사',
          definition_korean: '친구',
          usage_note: '친밀한 관계'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 창세기 15:6을 인용하여 아브라함의 믿음이 의로 여겨졌음을 확인합니다. 그러나 그는 이 말씀이 창세기 22장의 이삭 제사 사건에서 "성취되었다"고 말합니다. 이것은 창세기 15장의 믿음 선언이 창세기 22장의 순종 행위로 완전히 실현되고 증명되었다는 의미입니다. "하나님의 친구"라는 칭호는 아브라함의 특별한 지위를 나타내며(역대하 20:7, 이사야 41:8), 믿음과 순종을 통한 하나님과의 친밀한 관계를 보여줍니다.',
        cross_references: ['Genesis 15:6', 'Genesis 22:12', '2 Chronicles 20:7', 'Isaiah 41:8', 'John 15:14-15']
      },
      korean_translation: {
        natural_translation: '그래서 "아브라함이 하나님을 믿으니, 이것을 그에게 의로 인정하셨다"는 성경 말씀이 이루어졌으며, 그는 하나님의 친구라고 불렸습니다.',
        translation_notes: 'credited를 "여겨지다" 또는 "인정되다"로 번역'
      },
      special_explanation: {
        explanation_type: '하나님의 친구',
        content: '"하나님의 친구"는 아브라함에게만 주어진 특별한 칭호입니다. 이것은 단순한 종의 관계를 넘어 친밀한 우정의 관계를 나타냅니다. 예수님은 요한복음 15:14-15에서 제자들을 종이 아니라 친구라고 부르시며, 순종하는 자가 친구라고 말씀하셨습니다. 아브라함은 믿음과 순종을 통해 하나님과 친밀한 관계를 누렸으며, 이것이 진정한 믿음의 목표입니다.',
        examples: ['Exodus 33:11 - 모세와 하나님의 대면', 'John 15:13-15 - 친구 관계의 조건']
      }
    },

    // James 2:24
    {
      reference: 'James 2:24',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '결론 선언',
          original_text: 'You see that a person is considered righteous by what they do',
          korean_translation: '너희가 보거니와 사람이 행위로 의롭다 여김을 받는다',
          grammatical_explanation: 'You see로 명백한 결론 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '대조 - 믿음만으로는 아님',
          original_text: 'and not by faith alone',
          korean_translation: '믿음만으로가 아니다',
          grammatical_explanation: 'not...alone으로 강한 부정'
        }
      ],
      vocabulary: [
        {
          word: 'alone',
          ipa_pronunciation: '/əˈloʊn/',
          korean_pronunciation: '얼론',
          part_of_speech: '부사',
          definition_korean: '홀로, 단독으로',
          usage_note: '다른 것이 동반되지 않음'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '이 구절은 야고보서에서 가장 논란이 많은 구절 중 하나입니다. "믿음만으로가 아니다"는 표현이 바울의 "믿음으로 의롭다 함"(로마서 3:28)과 모순되는 것처럼 보이기 때문입니다. 그러나 야고보가 말하는 "믿음만"은 행위가 없는 죽은 믿음, 즉 진정한 믿음이 아닌 것을 가리킵니다. 반면 바울이 말하는 "믿음"은 사랑으로 역사하는 산 믿음입니다(갈 5:6). 야고보는 진정한 믿음은 반드시 행위로 나타나므로, 행위 없는 믿음만으로는 의롭다 함을 받을 수 없다고 주장합니다.',
        cross_references: ['Romans 3:28', 'Galatians 2:16', 'Galatians 5:6', 'Ephesians 2:8-10']
      },
      korean_translation: {
        natural_translation: '보시다시피, 사람은 행동으로 의롭다고 인정받는 것이지, 믿음만으로 되는 것이 아닙니다.',
        translation_notes: 'not by faith alone을 "믿음만으로가 아니다"로 번역'
      },
      special_explanation: {
        explanation_type: '종교개혁과의 관계',
        content: '종교개혁자들은 "오직 믿음"(sola fide)을 강조했고, 이 구절을 어떻게 이해해야 할지 고민했습니다. 마틴 루터는 야고보서를 "지푸라기 서신"이라고까지 불렀습니다. 그러나 올바른 이해는 야고보와 바울이 서로 다른 오류를 다루고 있다는 것입니다. 바울은 행위로 의롭게 되려는 율법주의와 싸웠고, 야고보는 행위 없는 공허한 믿음과 싸웠습니다. 진정한 복음적 믿음은 은혜로 받지만(바울), 반드시 행위로 나타납니다(야고보).',
        examples: ['Romans 3:28 - 율법의 행위 없이 믿음으로', 'Galatians 5:6 - 사랑으로 역사하는 믿음', 'Ephesians 2:8-10 - 은혜로 구원, 선한 일을 위해 창조됨']
      }
    },

    // James 2:25
    {
      reference: 'James 2:25',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '비교 - 두 번째 예시',
          original_text: 'In the same way, was not even Rahab the prostitute considered righteous',
          korean_translation: '이와 같이 기생 라합도 의롭다 여김을 받지 않았느냐',
          grammatical_explanation: 'In the same way로 아브라함과 병렬, even으로 강조'
        },
        {
          sequence_order: 2,
          semantic_classification: '구체적 행위 1',
          original_text: 'for what she did when she gave lodging to the spies',
          korean_translation: '그녀가 정탐꾼들을 영접했을 때 그녀가 행한 것으로',
          grammatical_explanation: 'when절로 구체적 행위 명시'
        },
        {
          sequence_order: 3,
          semantic_classification: '구체적 행위 2',
          original_text: 'and sent them off in a different direction?',
          korean_translation: '다른 길로 그들을 보냈을 때?',
          grammatical_explanation: '병렬 행위로 완전한 도움 표현'
        }
      ],
      vocabulary: [
        {
          word: 'prostitute',
          ipa_pronunciation: '/ˈprɑːstɪtuːt/',
          korean_pronunciation: '프라스티튜트',
          part_of_speech: '명사',
          definition_korean: '기생, 창녀',
          usage_note: '사회적으로 천대받는 직업'
        },
        {
          word: 'lodging',
          ipa_pronunciation: '/ˈlɑːdʒɪŋ/',
          korean_pronunciation: '라징',
          part_of_speech: '명사',
          definition_korean: '숙소, 숙박',
          usage_note: '안전한 거처 제공'
        },
        {
          word: 'spies',
          ipa_pronunciation: '/spaɪz/',
          korean_pronunciation: '스파이즈',
          part_of_speech: '명사',
          definition_korean: '정탐꾼들, 첩자들',
          usage_note: '적지를 정찰하는 자들'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 아브라함이라는 고귀한 족장에 이어, 기생 라합이라는 이방 여인을 두 번째 예로 제시합니다. 이것은 믿음과 행위의 원리가 신분, 성별, 민족을 초월한다는 것을 보여줍니다. 라합은 여리고 정복 때 이스라엘 정탐꾼들을 숨겨주고 다른 길로 도망가게 함으로써(여호수아 2장) 자신의 믿음을 행동으로 증명했습니다. 그녀의 행위는 목숨을 건 위험한 결정이었으며, 이스라엘의 하나님에 대한 진정한 믿음에서 비롯되었습니다.',
        cross_references: ['Joshua 2:1-21', 'Joshua 6:22-25', 'Hebrews 11:31', 'Matthew 1:5']
      },
      korean_translation: {
        natural_translation: '이와 같이, 창녀 라합도 정탐꾼들을 받아들여 다른 길로 내보낸 행동으로 의롭다고 인정받지 않았습니까?',
        translation_notes: 'prostitute를 "기생" 또는 "창녀"로 번역, gave lodging을 "영접하다" 또는 "받아들이다"로 번역'
      },
      special_explanation: {
        explanation_type: '은혜의 포괄성',
        content: '야고보가 아브라함과 라합을 함께 예로 드는 것은 매우 의미심장합니다. 아브라함은 믿음의 조상, 남성, 유대인이고, 라합은 이방인, 여성, 기생입니다. 이것은 하나님의 은혜와 의롭다 함이 모든 사람에게 열려 있으며, 진정한 믿음은 사회적 지위와 무관하게 행위로 나타남을 보여줍니다. 놀랍게도 라합은 예수님의 족보에 포함됩니다(마태복음 1:5).',
        examples: ['Joshua 2:11 - 라합의 신앙고백', 'Hebrews 11:31 - 믿음으로 멸망하지 않음', 'Matthew 1:5 - 예수님의 족보에 포함']
      }
    },

    // James 2:26
    {
      reference: 'James 2:26',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '비유 - 몸과 영',
          original_text: 'As the body without the spirit is dead',
          korean_translation: '영혼 없는 몸이 죽은 것같이',
          grammatical_explanation: 'As 비교절로 자연적 진리 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '결론 - 믿음과 행위',
          original_text: 'so faith without deeds is dead',
          korean_translation: '행위 없는 믿음도 죽은 것이다',
          grammatical_explanation: 'so로 영적 진리 도출'
        }
      ],
      vocabulary: [
        {
          word: 'spirit',
          ipa_pronunciation: '/ˈspɪrɪt/',
          korean_pronunciation: '스피릿',
          part_of_speech: '명사',
          definition_korean: '영혼, 영',
          usage_note: '생명의 원리'
        },
        {
          word: 'dead',
          ipa_pronunciation: '/ded/',
          korean_pronunciation: '데드',
          part_of_speech: '형용사',
          definition_korean: '죽은',
          usage_note: '생명이 없는 상태'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 믿음과 행위의 관계를 몸과 영의 관계로 비유합니다. 영혼이 떠난 몸이 죽은 것처럼, 행위가 없는 믿음도 죽은 것입니다. 이 비유는 믿음과 행위가 분리될 수 없는 하나의 전체임을 강력하게 보여줍니다. 몸과 영이 합쳐져야 살아있는 사람인 것처럼, 믿음과 행위가 함께해야 진정한 구원하는 믿음입니다. 이것으로 믿음과 행위에 대한 야고보의 긴 논증이 마무리됩니다.',
        cross_references: ['James 2:17', 'Genesis 2:7', 'Ecclesiastes 12:7', 'Luke 8:55']
      },
      korean_translation: {
        natural_translation: '영혼 없는 몸이 죽은 것과 같이, 행동이 없는 믿음도 죽은 것입니다.',
        translation_notes: 'spirit를 "영혼" 또는 "영"으로 번역'
      },
      special_explanation: {
        explanation_type: '믿음과 행위의 불가분성',
        content: '이 마지막 구절은 믿음과 행위 논쟁에 대한 야고보의 최종 요약입니다. 몸과 영이 분리되면 죽음인 것처럼, 믿음과 행위가 분리된 것은 영적 죽음입니다. 이것은 행위가 구원의 조건이라는 의미가 아니라, 진정한 믿음은 자연스럽게 행위로 나타난다는 의미입니다. 행위 없는 믿음은 애초에 진정한 믿음이 아니었던 것입니다.',
        examples: ['Titus 1:16 - 하나님을 시인하나 행위로는 부인', '1 John 3:18 - 말과 혀로만이 아니라 행함과 진실함으로']
      }
    },

    // James 3:1
    {
      reference: 'James 3:1',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '호칭',
          original_text: 'Not many of you should become teachers, my fellow believers',
          korean_translation: '나의 형제들아, 너희 중 많은 이가 선생이 되지 말라',
          grammatical_explanation: '부정 명령으로 경고'
        },
        {
          sequence_order: 2,
          semantic_classification: '이유 - 더 엄한 심판',
          original_text: 'because you know that we who teach will be judged more strictly',
          korean_translation: '우리 가르치는 자들이 더 엄한 심판을 받을 줄 너희가 알기 때문이다',
          grammatical_explanation: 'because절로 경고의 근거 제시'
        }
      ],
      vocabulary: [
        {
          word: 'teachers',
          ipa_pronunciation: '/ˈtiːtʃərz/',
          korean_pronunciation: '티처즈',
          part_of_speech: '명사',
          definition_korean: '선생들, 교사들',
          usage_note: '초대교회의 중요한 직분'
        },
        {
          word: 'strictly',
          ipa_pronunciation: '/ˈstrɪktli/',
          korean_pronunciation: '스트릭틀리',
          part_of_speech: '부사',
          definition_korean: '엄격하게, 엄하게',
          usage_note: '더 높은 기준 적용'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 3장에서 혀의 위력과 제어라는 새로운 주제로 전환하며, 특히 가르치는 자들의 책임을 강조합니다. 초대교회에서 교사는 사도와 선지자 다음으로 중요한 직분이었습니다(고린도전서 12:28). 그러나 많은 사람이 이 직분을 추구하는 것은 위험합니다. 왜냐하면 가르치는 자는 많은 사람에게 영향을 미치므로 잘못 가르칠 경우 책임이 크기 때문입니다. "더 엄한 심판"은 하나님께서 더 높은 기준으로 평가하신다는 의미입니다.',
        cross_references: ['Matthew 23:8', 'Luke 12:48', '1 Corinthians 12:28', 'Ephesians 4:11', 'Hebrews 13:17', '1 Timothy 3:1-7']
      },
      korean_translation: {
        natural_translation: '나의 형제자매 여러분, 여러분 중에 많은 사람이 교사가 되려고 하지 마십시오. 우리 교사들이 더 엄격한 심판을 받을 것을 여러분이 알기 때문입니다.',
        translation_notes: 'teachers를 "선생" 또는 "교사"로 번역, strictly를 "엄격하게" 또는 "엄하게"로 번역'
      },
      special_explanation: {
        explanation_type: '영적 리더십의 책임',
        content: '교사의 직분은 영광스러운 것이지만 동시에 큰 책임을 수반합니다. 예수님은 "많이 받은 자에게는 많이 요구된다"고 말씀하셨습니다(눅 12:48). 교사는 하나님의 말씀을 다루고 사람들의 영적 성장에 영향을 미치므로, 잘못 가르치거나 위선적으로 행동할 경우 그 책임이 큽니다. 야고보 자신도 "우리"라고 하여 자신을 포함시킵니다.',
        examples: ['Ezekiel 3:17-21 - 파수꾼의 책임', 'Acts 20:26-27 - 바울의 책임 의식', 'Hebrews 13:17 - 지도자들의 청지기 의식']
      }
    },

    // James 3:2
    {
      reference: 'James 3:2',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '보편적 진리',
          original_text: 'We all stumble in many ways',
          korean_translation: '우리는 모두 많은 면에서 실수한다',
          grammatical_explanation: 'We all로 보편성 강조'
        },
        {
          sequence_order: 2,
          semantic_classification: '조건절 - 말의 완전함',
          original_text: 'Anyone who is never at fault in what they say',
          korean_translation: '누구든지 말에 실수가 없다면',
          grammatical_explanation: 'Anyone으로 가상 조건 제시'
        },
        {
          sequence_order: 3,
          semantic_classification: '결과 - 온전한 사람',
          original_text: 'is perfect, able to keep their whole body in check',
          korean_translation: '온전한 사람이요 온몸도 제어할 수 있는 사람이다',
          grammatical_explanation: '완벽한 자제력 표현'
        }
      ],
      vocabulary: [
        {
          word: 'stumble',
          ipa_pronunciation: '/ˈstʌmbəl/',
          korean_pronunciation: '스텀블',
          part_of_speech: '동사',
          definition_korean: '실수하다, 넘어지다',
          usage_note: '도덕적·영적 실패'
        },
        {
          word: 'fault',
          ipa_pronunciation: '/fɔːlt/',
          korean_pronunciation: '폴트',
          part_of_speech: '명사',
          definition_korean: '실수, 잘못',
          usage_note: '책임 있는 오류'
        },
        {
          word: 'perfect',
          ipa_pronunciation: '/ˈpɜːrfɪkt/',
          korean_pronunciation: '퍼펙트',
          part_of_speech: '형용사',
          definition_korean: '완전한, 온전한',
          usage_note: '성숙하고 완성된 상태'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 모든 사람이 여러 면에서 실수한다는 보편적 진리를 인정합니다. 그러나 특별히 말에서 실수하지 않는 사람은 온전한 사람이라고 선언합니다. 이것은 혀를 제어하는 것이 가장 어렵다는 의미입니다. 혀를 완전히 제어할 수 있다면 온몸도 제어할 수 있을 정도로 혀의 제어는 자제력의 최고 단계입니다. 이것은 교사들이 특별히 말을 조심해야 하는 이유를 설명합니다.',
        cross_references: ['Proverbs 10:19', 'Proverbs 13:3', 'Proverbs 21:23', 'Matthew 12:36-37', 'Ephesians 4:29']
      },
      korean_translation: {
        natural_translation: '우리는 모두 여러 면에서 실수합니다. 말에서 실수하지 않는 사람이 있다면, 그는 완전한 사람이며 온몸을 제어할 수 있는 사람입니다.',
        translation_notes: 'stumble을 "실수하다" 또는 "넘어지다"로 번역'
      },
      special_explanation: {
        explanation_type: '혀 제어의 중요성',
        content: '야고보는 혀를 제어하는 것을 완전함의 척도로 제시합니다. 이것은 혀가 가장 제어하기 어려운 신체 부위임을 암시합니다. 잠언도 "말을 삼가는 자가 지식이 있다"고 가르칩니다(잠 17:27). 혀의 제어는 단순히 입을 다무는 것이 아니라, 마음의 상태를 반영합니다. 예수님은 "마음에 가득한 것을 입으로 말한다"고 하셨습니다(눅 6:45).',
        examples: ['Proverbs 17:27 - 말을 아끼는 자가 지식이 있음', 'Matthew 12:34 - 마음에 가득한 것을 입으로 말함', '1 Peter 3:10 - 선한 날을 보려면 혀를 금하라']
      }
    },

    // James 3:3-4 (이어서 계속...)
    {
      reference: 'James 3:3',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '비유 1 - 말의 재갈',
          original_text: 'When we put bits into the mouths of horses to make them obey us',
          korean_translation: '우리가 말들을 순종하게 하려고 그 입에 재갈을 물릴 때',
          grammatical_explanation: 'When절로 조건 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '결과 - 전체 제어',
          original_text: 'we can turn the whole animal',
          korean_translation: '우리는 그 온몸을 조종할 수 있다',
          grammatical_explanation: '작은 도구로 큰 효과'
        }
      ],
      vocabulary: [
        {
          word: 'bits',
          ipa_pronunciation: '/bɪts/',
          korean_pronunciation: '비츠',
          part_of_speech: '명사',
          definition_korean: '재갈',
          usage_note: '말의 입에 물리는 작은 철제 도구'
        },
        {
          word: 'obey',
          ipa_pronunciation: '/oʊˈbeɪ/',
          korean_pronunciation: '오베이',
          part_of_speech: '동사',
          definition_korean: '순종하다, 복종하다',
          usage_note: '명령에 따르다'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 혀의 영향력을 설명하기 위해 첫 번째 비유로 말의 재갈을 제시합니다. 재갈은 매우 작은 도구이지만 큰 말 전체를 제어할 수 있습니다. 이것은 혀도 작은 신체 부위이지만 전체 삶을 좌우할 수 있다는 의미입니다. 말을 올바른 방향으로 인도하려면 재갈이 필요한 것처럼, 삶을 올바른 방향으로 인도하려면 혀의 제어가 필요합니다.',
        cross_references: ['Psalm 32:9', 'Proverbs 26:3']
      },
      korean_translation: {
        natural_translation: '우리가 말을 순종시키려고 그 입에 작은 재갈을 물리면, 그 큰 몸 전체를 조종할 수 있습니다.',
        translation_notes: 'bits를 "재갈"로 번역'
      }
    },

    {
      reference: 'James 3:4',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '비유 2 - 배의 키',
          original_text: 'Or take ships as an example',
          korean_translation: '또 배를 보라',
          grammatical_explanation: '두 번째 비유 도입'
        },
        {
          sequence_order: 2,
          semantic_classification: '상황 설명',
          original_text: 'Although they are so large and are driven by strong winds',
          korean_translation: '배가 매우 크고 거센 바람에 밀려가지만',
          grammatical_explanation: 'Although로 대조 상황 제시'
        },
        {
          sequence_order: 3,
          semantic_classification: '결과 - 작은 키의 효과',
          original_text: 'they are steered by a very small rudder wherever the pilot wants to go',
          korean_translation: '매우 작은 키로 조종사가 원하는 곳으로 인도된다',
          grammatical_explanation: '크기와 효과의 역설'
        }
      ],
      vocabulary: [
        {
          word: 'ships',
          ipa_pronunciation: '/ʃɪps/',
          korean_pronunciation: '십스',
          part_of_speech: '명사',
          definition_korean: '배들',
          usage_note: '큰 선박'
        },
        {
          word: 'rudder',
          ipa_pronunciation: '/ˈrʌdər/',
          korean_pronunciation: '러더',
          part_of_speech: '명사',
          definition_korean: '키, 방향타',
          usage_note: '배의 방향을 조정하는 장치'
        },
        {
          word: 'pilot',
          ipa_pronunciation: '/ˈpaɪlət/',
          korean_pronunciation: '파일럿',
          part_of_speech: '명사',
          definition_korean: '조종사, 키잡이',
          usage_note: '배를 운항하는 사람'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 두 번째 비유로 배의 키를 제시합니다. 고대의 큰 배들도 작은 키로 방향을 조정했습니다. 거센 바람과 파도에도 불구하고, 숙련된 조종사는 작은 키로 배를 원하는 방향으로 인도할 수 있었습니다. 이것은 혀가 비록 작지만 인생 전체의 방향을 결정할 수 있다는 강력한 비유입니다.',
        cross_references: ['Proverbs 16:9', 'Proverbs 20:24']
      },
      korean_translation: {
        natural_translation: '배를 생각해 보십시오. 배는 매우 크고 강한 바람에 밀려가지만, 아주 작은 키로 조종사가 원하는 곳으로 조종됩니다.',
        translation_notes: 'rudder를 "키" 또는 "방향타"로 번역'
      },
      special_explanation: {
        explanation_type: '작은 것의 큰 영향',
        content: '재갈과 키의 비유는 모두 작은 것이 큰 것을 제어한다는 공통점이 있습니다. 혀도 마찬가지로 작은 신체 부위이지만 전체 삶의 방향을 결정합니다. 긍정적인 말은 삶을 축복의 방향으로, 부정적인 말은 파괴의 방향으로 이끌 수 있습니다. 이것은 우리가 혀를 얼마나 조심스럽게 사용해야 하는지 보여줍니다.',
        examples: ['Proverbs 18:21 - 죽고 사는 것이 혀의 권세에 달림', 'Proverbs 15:4 - 온순한 혀는 생명나무']
      }
    },

    // James 3:5-6
    {
      reference: 'James 3:5',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '비교 - 혀의 크기',
          original_text: 'Likewise, the tongue is a small part of the body',
          korean_translation: '이와 같이 혀도 작은 지체이지만',
          grammatical_explanation: 'Likewise로 앞의 비유들과 연결'
        },
        {
          sequence_order: 2,
          semantic_classification: '대조 - 큰 자랑',
          original_text: 'but it makes great boasts',
          korean_translation: '큰 자랑을 한다',
          grammatical_explanation: 'but으로 크기와 영향의 대조'
        },
        {
          sequence_order: 3,
          semantic_classification: '비유 3 - 작은 불',
          original_text: 'Consider what a great forest is set on fire by a small spark',
          korean_translation: '보라, 얼마나 작은 불이 얼마나 큰 숲을 태우는가',
          grammatical_explanation: '세 번째 비유로 파괴력 강조'
        }
      ],
      vocabulary: [
        {
          word: 'boasts',
          ipa_pronunciation: '/boʊsts/',
          korean_pronunciation: '보스츠',
          part_of_speech: '명사',
          definition_korean: '자랑, 허풍',
          usage_note: '과장된 주장'
        },
        {
          word: 'spark',
          ipa_pronunciation: '/spɑːrk/',
          korean_pronunciation: '스파크',
          part_of_speech: '명사',
          definition_korean: '불꽃, 불티',
          usage_note: '작은 불씨'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 혀의 긍정적 잠재력(재갈, 키)에서 부정적 파괴력(불)으로 전환합니다. 혀는 작지만 "큰 자랑"을 합니다. 이것은 자화자찬뿐 아니라 과장된 주장, 거짓말, 험담 등을 포함합니다. 작은 불꽃 하나가 거대한 숲을 태울 수 있는 것처럼, 잘못된 말 한마디가 공동체 전체를 파괴할 수 있습니다. 이 비유는 1세기 팔레스타인의 건조한 기후에서 특히 생생했을 것입니다.',
        cross_references: ['Proverbs 16:27', 'Proverbs 26:20-21', 'Psalm 120:2-4']
      },
      korean_translation: {
        natural_translation: '이와 같이 혀도 작은 지체이지만 큰 것을 자랑합니다. 보십시오! 아주 작은 불이 얼마나 큰 숲을 태우는지!',
        translation_notes: 'boasts를 "자랑" 또는 "허풍"으로 번역'
      }
    },

    {
      reference: 'James 3:6',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '비유 적용 - 혀는 불',
          original_text: 'The tongue also is a fire',
          korean_translation: '혀도 불이요',
          grammatical_explanation: '직접적 비유 선언'
        },
        {
          sequence_order: 2,
          semantic_classification: '확대 설명',
          original_text: 'a world of evil among the parts of the body',
          korean_translation: '우리 지체 중에 악의 세계다',
          grammatical_explanation: '동격 표현으로 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '영향 1 - 몸 전체 오염',
          original_text: 'It corrupts the whole body',
          korean_translation: '온몸을 더럽히며',
          grammatical_explanation: '전체에 미치는 영향'
        },
        {
          sequence_order: 4,
          semantic_classification: '영향 2 - 삶의 진로 방화',
          original_text: 'sets the whole course of one\'s life on fire',
          korean_translation: '삶의 수레바퀴를 불사르나니',
          grammatical_explanation: '삶 전체의 파괴'
        },
        {
          sequence_order: 5,
          semantic_classification: '근원 - 지옥불',
          original_text: 'and is itself set on fire by hell',
          korean_translation: '그 자체가 지옥 불에 사르심을 받느니라',
          grammatical_explanation: '악의 궁극적 근원'
        }
      ],
      vocabulary: [
        {
          word: 'corrupts',
          ipa_pronunciation: '/kəˈrʌpts/',
          korean_pronunciation: '커럽츠',
          part_of_speech: '동사',
          definition_korean: '부패시키다, 더럽히다',
          usage_note: '도덕적 타락'
        },
        {
          word: 'course',
          ipa_pronunciation: '/kɔːrs/',
          korean_pronunciation: '코스',
          part_of_speech: '명사',
          definition_korean: '진로, 과정',
          usage_note: '인생의 여정'
        },
        {
          word: 'hell',
          ipa_pronunciation: '/hel/',
          korean_pronunciation: '헬',
          part_of_speech: '명사',
          definition_korean: '지옥',
          usage_note: '영원한 형벌의 장소'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '이 구절은 야고보서에서 가장 강렬한 구절 중 하나입니다. 혀를 "불", "악의 세계", "지옥의 도구"로 묘사합니다. "온몸을 더럽힌다"는 것은 혀의 죄가 전인격을 오염시킨다는 의미이고, "삶의 수레바퀴를 불사른다"(원문: 생의 바퀴)는 인생 전체를 파괴한다는 의미입니다. 가장 충격적인 것은 혀가 "지옥 불에 사르심을 받는다"는 표현으로, 악한 말의 궁극적 근원이 사탄임을 시사합니다.',
        cross_references: ['Matthew 12:34', 'Matthew 15:18-19', 'Romans 3:13-14', 'Revelation 20:14-15']
      },
      korean_translation: {
        natural_translation: '혀도 불입니다. 혀는 우리 몸의 지체들 가운데서 온갖 악으로 가득 찬 세계입니다. 혀는 온몸을 더럽히고, 인생의 수레바퀴를 불사르며, 그 자체가 지옥 불에 타오릅니다.',
        translation_notes: 'course of life를 "삶의 수레바퀴" 또는 "인생의 진로"로 번역'
      },
      special_explanation: {
        explanation_type: '혀의 영적 전쟁',
        content: '"지옥 불에 사르심을 받는다"는 표현은 혀의 악한 사용이 영적 전쟁의 일부임을 보여줍니다. 사탄은 거짓말의 아비이며(요 8:44), 악한 말을 통해 파괴 사역을 합니다. 중상모략, 거짓말, 험담, 비방은 모두 지옥에서 나온 불입니다. 이것은 우리가 말을 조심해야 하는 영적 이유입니다.',
        examples: ['John 8:44 - 사탄은 거짓의 아비', 'Ephesians 6:12 - 영적 전쟁', 'Revelation 12:10 - 형제들을 참소하는 자']
      }
    },

    // James 3:7-8 계속...
    {
      reference: 'James 3:7',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '보편적 진리',
          original_text: 'All kinds of animals, birds, reptiles and sea creatures are being tamed and have been tamed by mankind',
          korean_translation: '모든 종류의 짐승과 새와 파충류와 바다 생물은 인류에 의해 길들여지며 길들여져 왔다',
          grammatical_explanation: '현재진행형과 현재완료형으로 지속적 사실 표현'
        }
      ],
      vocabulary: [
        {
          word: 'reptiles',
          ipa_pronunciation: '/ˈreptaɪlz/',
          korean_pronunciation: '렙타일즈',
          part_of_speech: '명사',
          definition_korean: '파충류',
          usage_note: '뱀, 도마뱀 등'
        },
        {
          word: 'tamed',
          ipa_pronunciation: '/teɪmd/',
          korean_pronunciation: '테임드',
          part_of_speech: '동사 (수동태)',
          definition_korean: '길들여지다',
          usage_note: '야생 동물을 순화시키다'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 인간이 창조 세계의 모든 종류의 생물을 길들여 왔다는 사실을 지적합니다. 이것은 창세기의 인간의 피조물 다스림 명령을 반영합니다(창 1:28). 고대부터 인간은 말, 코끼리, 독수리, 심지어 뱀까지 길들였습니다. 그러나 역설적으로 인간은 자기 자신의 작은 혀는 길들이지 못합니다.',
        cross_references: ['Genesis 1:26-28', 'Genesis 9:2', 'Psalm 8:6-8']
      },
      korean_translation: {
        natural_translation: '모든 종류의 짐승과 새와 파충류와 바다 생물들은 인간에 의해 길들여져 왔고, 지금도 길들여지고 있습니다.',
        translation_notes: 'tamed를 "길들여지다"로 번역'
      }
    },

    {
      reference: 'James 3:8',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '대조 - 혀의 불가능성',
          original_text: 'but no human being can tame the tongue',
          korean_translation: '그러나 혀는 아무도 길들일 수 없다',
          grammatical_explanation: 'but으로 강한 대조, no one으로 절대 불가능 강조'
        },
        {
          sequence_order: 2,
          semantic_classification: '설명 1 - 불안정성',
          original_text: 'It is a restless evil',
          korean_translation: '쉬지 않는 악이요',
          grammatical_explanation: '동격 명사구로 특성 묘사'
        },
        {
          sequence_order: 3,
          semantic_classification: '설명 2 - 치명성',
          original_text: 'full of deadly poison',
          korean_translation: '죽이는 독이 가득하다',
          grammatical_explanation: '형용사구로 위험성 강조'
        }
      ],
      vocabulary: [
        {
          word: 'tame',
          ipa_pronunciation: '/teɪm/',
          korean_pronunciation: '테임',
          part_of_speech: '동사',
          definition_korean: '길들이다',
          usage_note: '제어하고 순화시키다'
        },
        {
          word: 'restless',
          ipa_pronunciation: '/ˈrestləs/',
          korean_pronunciation: '레스트리스',
          part_of_speech: '형용사',
          definition_korean: '쉬지 않는, 불안정한',
          usage_note: '끊임없이 움직이는'
        },
        {
          word: 'deadly',
          ipa_pronunciation: '/ˈdedli/',
          korean_pronunciation: '데들리',
          part_of_speech: '형용사',
          definition_korean: '치명적인, 죽이는',
          usage_note: '생명을 앗아가는'
        },
        {
          word: 'poison',
          ipa_pronunciation: '/ˈpɔɪzən/',
          korean_pronunciation: '포이즌',
          part_of_speech: '명사',
          definition_korean: '독',
          usage_note: '해를 끼치는 물질'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 혀를 "쉬지 않는 악"과 "죽이는 독"으로 묘사합니다. 인간이 모든 피조물을 길들일 수 있지만 자기 혀는 길들일 수 없다는 것은 인간 본성의 깊은 타락을 보여줍니다. "쉬지 않는"이라는 표현은 혀가 끊임없이 악을 행할 잠재력이 있음을 나타내며, "죽이는 독"은 말의 파괴적 영향력을 강조합니다. 이것은 인간의 노력만으로는 혀를 제어할 수 없으며 하나님의 은혜가 필요함을 암시합니다.',
        cross_references: ['Psalm 140:3', 'Romans 3:13', 'Proverbs 12:18', 'Proverbs 18:21']
      },
      korean_translation: {
        natural_translation: '그러나 사람은 아무도 혀를 길들일 수 없습니다. 혀는 쉬지 않는 악이며, 치명적인 독으로 가득 차 있습니다.',
        translation_notes: 'restless를 "쉬지 않는" 또는 "불안정한"으로 번역'
      },
      special_explanation: {
        explanation_type: '인간 한계와 은혜의 필요',
        content: '"아무도 길들일 수 없다"는 절망적 선언처럼 보이지만, 이것은 인간의 능력 한계를 인정하고 하나님의 은혜를 구하게 만듭니다. 성령의 도우심 없이는 혀를 제어할 수 없습니다. 그러나 성령의 열매 중 하나가 "절제"이므로(갈 5:23), 하나님의 능력으로는 가능합니다. 이것은 우리를 겸손과 의존으로 이끕니다.',
        examples: ['Galatians 5:22-23 - 성령의 열매: 절제', 'Philippians 4:13 - 그리스도 안에서 능력', 'Psalm 141:3 - 내 입의 문을 지켜달라는 기도']
      }
    },

    // James 3:9-12
    {
      reference: 'James 3:9',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '긍정적 사용',
          original_text: 'With the tongue we praise our Lord and Father',
          korean_translation: '이것으로 우리가 주 아버지를 찬송하고',
          grammatical_explanation: '혀의 올바른 용도'
        },
        {
          sequence_order: 2,
          semantic_classification: '부정적 사용',
          original_text: 'and with it we curse human beings, who have been made in God\'s likeness',
          korean_translation: '또 이것으로 하나님의 형상대로 지음 받은 사람을 저주한다',
          grammatical_explanation: '동일한 도구로 상반된 행위'
        }
      ],
      vocabulary: [
        {
          word: 'praise',
          ipa_pronunciation: '/preɪz/',
          korean_pronunciation: '프레이즈',
          part_of_speech: '동사',
          definition_korean: '찬송하다, 찬양하다',
          usage_note: '경배와 감사 표현'
        },
        {
          word: 'curse',
          ipa_pronunciation: '/kɜːrs/',
          korean_pronunciation: '커스',
          part_of_speech: '동사',
          definition_korean: '저주하다, 악담하다',
          usage_note: '해를 기원하는 말'
        },
        {
          word: 'likeness',
          ipa_pronunciation: '/ˈlaɪknəs/',
          korean_pronunciation: '라이크니스',
          part_of_speech: '명사',
          definition_korean: '형상, 모습',
          usage_note: '닮음, 유사성'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 혀의 모순된 사용을 지적합니다. 같은 입으로 하나님을 찬송하면서 하나님의 형상으로 지음 받은 사람을 저주하는 것은 근본적 모순입니다. "하나님의 형상"이라는 표현은 모든 인간의 존엄성과 가치를 강조하며, 사람을 저주하는 것은 곧 그 사람을 만드신 하나님을 모욕하는 것입니다. 1세기 유대교 회당에서는 하나님을 찬송한 직후에 원수를 저주하는 일이 있었을 것입니다.',
        cross_references: ['Genesis 1:26-27', 'Genesis 9:6', 'Matthew 5:44', 'Romans 12:14', '1 Peter 3:9']
      },
      korean_translation: {
        natural_translation: '우리는 이 혀로 주님이시며 아버지이신 하나님을 찬양하면서도, 같은 혀로 하나님의 형상을 따라 지음 받은 사람들을 저주합니다.',
        translation_notes: 'curse를 "저주하다" 또는 "욕하다"로 번역'
      },
      special_explanation: {
        explanation_type: '하나님 형상의 신학',
        content: '야고보는 인간이 "하나님의 형상"대로 지음 받았다는 창세기의 진리를 인용합니다. 이것은 모든 인간이 인종, 성별, 사회적 지위와 무관하게 본질적 존엄성과 가치를 가진다는 의미입니다. 따라서 사람을 저주하거나 모욕하는 것은 하나님의 형상을 훼손하는 것이며, 하나님 자신을 모욕하는 것입니다. 이것은 2장의 편애 금지와 연결됩니다.',
        examples: ['Genesis 1:27 - 하나님의 형상', 'Genesis 9:6 - 형상 훼손 금지', '1 Corinthians 11:7 - 하나님의 형상과 영광']
      }
    },

    {
      reference: 'James 3:10',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '현상 지적',
          original_text: 'Out of the same mouth come praise and cursing',
          korean_translation: '한 입에서 찬송과 저주가 나온다',
          grammatical_explanation: '모순된 현실 폭로'
        },
        {
          sequence_order: 2,
          semantic_classification: '판단',
          original_text: 'My brothers and sisters, this should not be',
          korean_translation: '나의 형제들아, 이것은 마땅하지 않다',
          grammatical_explanation: '강한 부정 판단'
        }
      ],
      vocabulary: [
        {
          word: 'should not be',
          ipa_pronunciation: '/ʃʊd nɑːt biː/',
          korean_pronunciation: '슈드 낫 비',
          part_of_speech: '동사구',
          definition_korean: '마땅하지 않다, 있어서는 안 된다',
          usage_note: '도덕적 당위성 부정'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 한 입에서 찬송과 저주가 나오는 것을 "마땅하지 않다"고 강하게 선언합니다. 이것은 단순한 불편함이 아니라 도덕적으로 용납될 수 없는 모순입니다. 그리스도인은 새로운 피조물이므로(고후 5:17), 이러한 이중성이 있어서는 안 됩니다. 다음 구절들에서 자연의 예를 들어 이 부당함을 더욱 분명히 보여줄 것입니다.',
        cross_references: ['Matthew 12:34-35', 'Luke 6:45', '2 Corinthians 5:17', 'Ephesians 4:29']
      },
      korean_translation: {
        natural_translation: '같은 입에서 찬양과 저주가 나옵니다. 나의 형제자매 여러분, 이것은 있어서는 안 됩니다.',
        translation_notes: 'should not be를 "마땅하지 않다" 또는 "있어서는 안 된다"로 번역'
      }
    },

    {
      reference: 'James 3:11',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문 - 자연의 예 1',
          original_text: 'Can both fresh water and salt water flow from the same spring?',
          korean_translation: '샘이 한 구멍으로 단물과 쓴물을 낼 수 있겠느냐?',
          grammatical_explanation: '부정 답변 전제 수사 질문'
        }
      ],
      vocabulary: [
        {
          word: 'fresh',
          ipa_pronunciation: '/freʃ/',
          korean_pronunciation: '프레시',
          part_of_speech: '형용사',
          definition_korean: '신선한, 단',
          usage_note: '소금기가 없는 물'
        },
        {
          word: 'salt',
          ipa_pronunciation: '/sɔːlt/',
          korean_pronunciation: '솔트',
          part_of_speech: '형용사',
          definition_korean: '짠, 소금의',
          usage_note: '바닷물처럼 소금기 있는'
        },
        {
          word: 'spring',
          ipa_pronunciation: '/sprɪŋ/',
          korean_pronunciation: '스프링',
          part_of_speech: '명사',
          definition_korean: '샘, 泉',
          usage_note: '땅에서 솟아나는 물'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 자연의 법칙을 통해 혀의 이중성이 부자연스러움을 보여줍니다. 팔레스타인에는 담수 샘과 염수 샘이 있었지만, 한 샘에서 두 종류의 물이 나올 수 없었습니다. 이것은 자연의 일관성을 보여주며, 그리스도인의 말도 이와 같이 일관되어야 함을 가르칩니다.',
        cross_references: ['Matthew 7:16-18', 'Matthew 12:33', 'Luke 6:43-45']
      },
      korean_translation: {
        natural_translation: '샘이 같은 구멍에서 단물과 쓴물을 함께 낼 수 있겠습니까?',
        translation_notes: 'fresh water를 "단물"로, salt water를 "쓴물"로 번역'
      }
    },

    {
      reference: 'James 3:12',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문 - 자연의 예 2',
          original_text: 'My brothers and sisters, can a fig tree bear olives, or a grapevine bear figs?',
          korean_translation: '나의 형제들아, 무화과나무가 감람 열매를, 포도나무가 무화과를 맺을 수 있겠느냐?',
          grammatical_explanation: '두 가지 불가능한 예시'
        },
        {
          sequence_order: 2,
          semantic_classification: '결론',
          original_text: 'Neither can a salt spring produce fresh water',
          korean_translation: '이와 같이 짠 샘이 단물을 낼 수 없다',
          grammatical_explanation: 'Neither로 동일한 원리 적용'
        }
      ],
      vocabulary: [
        {
          word: 'fig',
          ipa_pronunciation: '/fɪɡ/',
          korean_pronunciation: '피그',
          part_of_speech: '명사',
          definition_korean: '무화과',
          usage_note: '중동의 흔한 과일'
        },
        {
          word: 'olives',
          ipa_pronunciation: '/ˈɑːlɪvz/',
          korean_pronunciation: '올리브즈',
          part_of_speech: '명사',
          definition_korean: '감람 열매',
          usage_note: '올리브 나무 열매'
        },
        {
          word: 'grapevine',
          ipa_pronunciation: '/ˈɡreɪpvaɪn/',
          korean_pronunciation: '그레이프바인',
          part_of_speech: '명사',
          definition_korean: '포도나무',
          usage_note: '포도를 맺는 식물'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 나무와 열매의 비유로 마무리합니다. 무화과나무는 무화과만, 감람나무는 감람만, 포도나무는 포도만 맺습니다. 이것은 예수님께서 가르치신 원리입니다(마 7:16-18). 각 나무는 그 본성대로 열매를 맺습니다. 마찬가지로 그리스도인은 새로운 본성을 가진 자이므로(고후 5:17), 찬송과 저주가 섞여 나와서는 안 됩니다. 진정으로 거듭난 사람은 성령의 열매를 맺습니다.',
        cross_references: ['Matthew 7:16-20', 'Matthew 12:33-35', 'Luke 6:43-45', 'Galatians 5:22-23']
      },
      korean_translation: {
        natural_translation: '나의 형제자매 여러분, 무화과나무가 올리브 열매를 맺을 수 있으며, 포도나무가 무화과를 맺을 수 있겠습니까? 마찬가지로 소금물 샘이 단물을 낼 수 없습니다.',
        translation_notes: 'salt spring을 "짠 샘" 또는 "소금물 샘"으로 번역'
      },
      special_explanation: {
        explanation_type: '본성과 열매',
        content: '이 비유들은 모두 본성이 열매를 결정한다는 원리를 가르칩니다. 나무의 종류가 열매를 결정하고, 샘의 성질이 물을 결정합니다. 마찬가지로 사람의 내적 본성이 말을 결정합니다. 그리스도 안에서 새로운 피조물이 된 사람은 새로운 본성을 가지므로, 옛 사람의 악한 말이 아닌 새 사람의 덕을 세우는 말을 해야 합니다. 이것은 성화의 과정입니다.',
        examples: ['2 Corinthians 5:17 - 새로운 피조물', 'Ephesians 4:22-24 - 옛 사람과 새 사람', 'Colossians 3:9-10 - 새 사람을 입음']
      }
    },

    // James 3:13-18 (지혜에 관한 마지막 단락)
    {
      reference: 'James 3:13',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '수사적 질문',
          original_text: 'Who is wise and understanding among you?',
          korean_translation: '너희 중에 지혜롭고 총명한 자가 누구냐?',
          grammatical_explanation: '새로운 주제 도입'
        },
        {
          sequence_order: 2,
          semantic_classification: '명령 - 증명 방법',
          original_text: 'Let them show it by their good life',
          korean_translation: '그는 선행으로 그것을 나타내라',
          grammatical_explanation: '명령형으로 실천 촉구'
        },
        {
          sequence_order: 3,
          semantic_classification: '방식 설명',
          original_text: 'by deeds done in the humility that comes from wisdom',
          korean_translation: '지혜에서 나오는 온유함으로 행하는 행실로',
          grammatical_explanation: '지혜의 특징인 온유함 강조'
        }
      ],
      vocabulary: [
        {
          word: 'wise',
          ipa_pronunciation: '/waɪz/',
          korean_pronunciation: '와이즈',
          part_of_speech: '형용사',
          definition_korean: '지혜로운',
          usage_note: '분별력과 통찰력'
        },
        {
          word: 'understanding',
          ipa_pronunciation: '/ˌʌndərˈstændɪŋ/',
          korean_pronunciation: '언더스탠딩',
          part_of_speech: '형용사',
          definition_korean: '총명한, 이해력 있는',
          usage_note: '깊은 통찰력'
        },
        {
          word: 'humility',
          ipa_pronunciation: '/hjuːˈmɪləti/',
          korean_pronunciation: '휴밀리티',
          part_of_speech: '명사',
          definition_korean: '겸손, 온유',
          usage_note: '자신을 낮추는 태도'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 혀의 주제에서 지혜의 주제로 자연스럽게 전환합니다. 진정한 지혜는 말이 아니라 "선행"과 "온유함"으로 증명됩니다. 이것은 2장의 "행위 없는 믿음은 죽은 것"이라는 주제와 연결됩니다. "지혜에서 나오는 온유함"이라는 표현은 참된 지혜가 교만이 아니라 겸손을 낳는다는 것을 보여줍니다. 당시 일부 교사들은 지식을 자랑했지만, 야고보는 진정한 지혜는 삶으로 나타난다고 가르칩니다.',
        cross_references: ['Matthew 11:29', 'Galatians 5:22-23', '1 Peter 3:15-16', 'Proverbs 11:2']
      },
      korean_translation: {
        natural_translation: '여러분 가운데 누가 지혜롭고 총명합니까? 그 사람은 지혜에서 나오는 온유함으로 선한 삶을 살고 선한 행동으로 그것을 보여주십시오.',
        translation_notes: 'humility를 "겸손" 또는 "온유"로 번역'
      },
      special_explanation: {
        explanation_type: '지혜와 온유',
        content: '야고보는 진정한 지혜의 표시가 온유함이라고 가르칩니다. 이것은 세상의 관점과 정반대입니다. 세상은 지혜로운 자를 교만하고 자신만만한 사람으로 여기지만, 성경적 지혜는 겸손과 온유로 나타납니다. 예수님께서 "나는 마음이 온유하고 겸손하니"라고 하신 것처럼(마 11:29), 진정한 지혜는 자신을 낮추고 타인을 섬기는 것입니다.',
        examples: ['Proverbs 3:34 - 겸손한 자에게 은혜', 'Matthew 5:5 - 온유한 자는 복이 있음', 'Philippians 2:3-8 - 그리스도의 겸손']
      }
    },

    {
      reference: 'James 3:14',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '조건절 - 거짓 지혜',
          original_text: 'But if you harbor bitter envy and selfish ambition in your hearts',
          korean_translation: '그러나 만약 너희 마음에 독한 시기와 이기적 야망이 있다면',
          grammatical_explanation: 'if 조건절로 잘못된 동기 지적'
        },
        {
          sequence_order: 2,
          semantic_classification: '명령 - 자랑 금지',
          original_text: 'do not boast about it or deny the truth',
          korean_translation: '자랑하지 말고 진리를 거역하지 말라',
          grammatical_explanation: '이중 부정 명령'
        }
      ],
      vocabulary: [
        {
          word: 'harbor',
          ipa_pronunciation: '/ˈhɑːrbər/',
          korean_pronunciation: '하버',
          part_of_speech: '동사',
          definition_korean: '품다, 마음에 간직하다',
          usage_note: '내적으로 유지하다'
        },
        {
          word: 'bitter',
          ipa_pronunciation: '/ˈbɪtər/',
          korean_pronunciation: '비터',
          part_of_speech: '형용사',
          definition_korean: '쓴, 독한',
          usage_note: '강렬하고 파괴적인'
        },
        {
          word: 'envy',
          ipa_pronunciation: '/ˈenvi/',
          korean_pronunciation: '엔비',
          part_of_speech: '명사',
          definition_korean: '시기, 질투',
          usage_note: '남의 것을 탐내는 마음'
        },
        {
          word: 'selfish ambition',
          ipa_pronunciation: '/ˈselfɪʃ æmˈbɪʃən/',
          korean_pronunciation: '셀피쉬 앰비션',
          part_of_speech: '명사구',
          definition_korean: '이기적 야망, 당파심',
          usage_note: '자기 이익만 추구하는 태도'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 거짓 지혜의 특징인 "독한 시기"와 "이기적 야망"을 지적합니다. "독한"(bitter)이라는 형용사는 시기의 파괴적 성격을 강조하며, "이기적 야망"은 자신의 영광만을 추구하는 태도를 나타냅니다. 이러한 동기를 가진 사람이 지혜를 자랑하는 것은 "진리를 거역하는" 것입니다. 왜냐하면 진정한 지혜는 이러한 악한 동기와 양립할 수 없기 때문입니다.',
        cross_references: ['Galatians 5:20', 'Philippians 1:17', 'Philippians 2:3', '1 Corinthians 3:3']
      },
      korean_translation: {
        natural_translation: '그러나 만약 여러분의 마음속에 쓰디쓴 질투와 이기적인 야심이 있다면, 자랑하지 말고 진리를 거슬러 거짓말하지 마십시오.',
        translation_notes: 'bitter envy를 "독한 시기" 또는 "쓰디쓴 질투"로 번역'
      }
    },

    {
      reference: 'James 3:15',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '판단 - 거짓 지혜의 근원',
          original_text: 'Such "wisdom" does not come down from heaven',
          korean_translation: '그러한 "지혜"는 위로부터 내려온 것이 아니라',
          grammatical_explanation: '부정문으로 근원 부인'
        },
        {
          sequence_order: 2,
          semantic_classification: '설명 - 세 가지 특성',
          original_text: 'but is earthly, unspiritual, demonic',
          korean_translation: '땅에 속하고 정욕에 속하고 마귀에게 속한 것이다',
          grammatical_explanation: '세 형용사로 점진적 악화 표현'
        }
      ],
      vocabulary: [
        {
          word: 'earthly',
          ipa_pronunciation: '/ˈɜːrθli/',
          korean_pronunciation: '어슬리',
          part_of_speech: '형용사',
          definition_korean: '땅에 속한, 세상적인',
          usage_note: '하늘이 아닌 땅의 가치관'
        },
        {
          word: 'unspiritual',
          ipa_pronunciation: '/ʌnˈspɪrɪtʃuəl/',
          korean_pronunciation: '언스피리츄얼',
          part_of_speech: '형용사',
          definition_korean: '영적이지 않은, 육체적인',
          usage_note: '성령이 아닌 육신의 욕망'
        },
        {
          word: 'demonic',
          ipa_pronunciation: '/dɪˈmɑːnɪk/',
          korean_pronunciation: '디마닉',
          part_of_speech: '형용사',
          definition_korean: '마귀적인, 악령의',
          usage_note: '사탄의 영향'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 거짓 지혜를 세 단계로 묘사합니다: "땅에 속하고"(인간 중심), "정욕에 속하고"(육체적 욕망), "마귀에게 속한"(악한 영향). 이것은 하나에서 악으로의 하강을 보여줍니다. "위로부터 내려온" 진정한 지혜와 대조됩니다(17절). 이러한 거짓 지혜는 세상의 가치관, 인간의 욕망, 궁극적으로 사탄의 영향에서 비롯됩니다.',
        cross_references: ['1 Corinthians 2:14', '1 Corinthians 3:19', 'Philippians 3:19', 'Jude 1:19']
      },
      korean_translation: {
        natural_translation: '그러한 지혜는 위에서 내려오는 것이 아니라, 세상적이고 육체적이며 악마적인 것입니다.',
        translation_notes: 'unspiritual을 "육체적" 또는 "정욕에 속한"으로 번역'
      },
      special_explanation: {
        explanation_type: '지혜의 두 근원',
        content: '야고보는 지혜에 두 가지 근원이 있음을 가르칩니다. 하나는 "위로부터" 즉 하나님으로부터 오는 것이고, 다른 하나는 "땅에 속한" 즉 세상으로부터 오는 것입니다. 바울도 "이 세상의 지혜"와 "하나님의 지혜"를 대조했습니다(고전 1-2장). 궁극적으로 하늘의 지혜는 성령에서, 땅의 지혜는 육신과 사탄에서 비롯됩니다.',
        examples: ['1 Corinthians 1:20-25 - 세상의 지혜 vs 하나님의 지혜', '1 Corinthians 2:6-16 - 성령이 주시는 지혜', 'Colossians 2:8 - 세상의 철학을 조심하라']
      }
    },

    {
      reference: 'James 3:16',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '원인 제시',
          original_text: 'For where you have envy and selfish ambition',
          korean_translation: '시기와 이기적 야망이 있는 곳에는',
          grammatical_explanation: 'For로 이유 설명, where로 조건 제시'
        },
        {
          sequence_order: 2,
          semantic_classification: '결과 1 - 무질서',
          original_text: 'there you find disorder',
          korean_translation: '혼란이 있고',
          grammatical_explanation: '첫 번째 부정적 결과'
        },
        {
          sequence_order: 3,
          semantic_classification: '결과 2 - 악행',
          original_text: 'and every evil practice',
          korean_translation: '모든 악한 일이 있다',
          grammatical_explanation: '두 번째 포괄적 결과'
        }
      ],
      vocabulary: [
        {
          word: 'disorder',
          ipa_pronunciation: '/dɪsˈɔːrdər/',
          korean_pronunciation: '디스오더',
          part_of_speech: '명사',
          definition_korean: '무질서, 혼란',
          usage_note: '질서의 부재, 혼돈'
        },
        {
          word: 'evil practice',
          ipa_pronunciation: '/ˈiːvəl ˈpræktɪs/',
          korean_pronunciation: '이블 프랙티스',
          part_of_speech: '명사구',
          definition_korean: '악한 행위',
          usage_note: '부도덕한 행동'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 거짓 지혜의 결과를 제시합니다. 시기와 이기적 야망은 "무질서"(혼란)와 "모든 악한 일"을 낳습니다. "무질서"는 공동체의 평화와 질서가 깨지는 것을 의미하며, "모든 악한 일"은 포괄적인 도덕적 타락을 나타냅니다. 이것은 하나님이 질서의 하나님이시며(고전 14:33), 참된 지혜는 평화와 질서를 가져온다는 것과 대조됩니다.',
        cross_references: ['1 Corinthians 3:3', '1 Corinthians 14:33', 'Galatians 5:19-21', 'Philippians 2:3-4']
      },
      korean_translation: {
        natural_translation: '시기와 이기적인 야망이 있는 곳에는 무질서와 온갖 악한 행위가 있습니다.',
        translation_notes: 'disorder를 "무질서" 또는 "혼란"으로 번역'
      },
      special_explanation: {
        explanation_type: '공동체 파괴',
        content: '시기와 이기적 야망은 개인의 죄에 그치지 않고 공동체 전체를 파괴합니다. "무질서"는 하나님이 창조하신 질서와 조화가 깨지는 것을 의미하며, "모든 악한 일"은 한 가지 죄가 다른 죄들을 낳는다는 것을 보여줍니다. 초대교회의 많은 문제들이 시기와 당파심에서 비롯되었습니다(고전 3:3, 빌 2:3).',
        examples: ['Genesis 3:1-6 - 죄의 시작과 무질서', '1 Corinthians 3:3 - 시기와 분쟁', 'Galatians 5:15 - 서로 물고 뜯음']
      }
    },

    {
      reference: 'James 3:17',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '대조 - 참된 지혜의 근원',
          original_text: 'But the wisdom that comes from heaven',
          korean_translation: '그러나 위로부터 오는 지혜는',
          grammatical_explanation: 'But으로 거짓 지혜와 대조'
        },
        {
          sequence_order: 2,
          semantic_classification: '특성 1 - 순결',
          original_text: 'is first of all pure',
          korean_translation: '첫째 순결하고',
          grammatical_explanation: 'first of all로 최우선 특성 강조'
        },
        {
          sequence_order: 3,
          semantic_classification: '특성 2-8 나열',
          original_text: 'then peace-loving, considerate, submissive, full of mercy and good fruit, impartial and sincere',
          korean_translation: '다음으로 평화롭고 관대하고 양순하며 긍휼과 선한 열매가 가득하고 편견이 없고 거짓이 없다',
          grammatical_explanation: '일곱 가지 추가 특성 나열'
        }
      ],
      vocabulary: [
        {
          word: 'pure',
          ipa_pronunciation: '/pjʊr/',
          korean_pronunciation: '퓨어',
          part_of_speech: '형용사',
          definition_korean: '순결한, 깨끗한',
          usage_note: '도덕적 순수함'
        },
        {
          word: 'peace-loving',
          ipa_pronunciation: '/piːs ˈlʌvɪŋ/',
          korean_pronunciation: '피스 러빙',
          part_of_speech: '형용사',
          definition_korean: '평화를 사랑하는',
          usage_note: '화평을 추구함'
        },
        {
          word: 'considerate',
          ipa_pronunciation: '/kənˈsɪdərət/',
          korean_pronunciation: '컨시더릿',
          part_of_speech: '형용사',
          definition_korean: '관대한, 너그러운',
          usage_note: '타인을 배려함'
        },
        {
          word: 'submissive',
          ipa_pronunciation: '/səbˈmɪsɪv/',
          korean_pronunciation: '서브미시브',
          part_of_speech: '형용사',
          definition_korean: '복종하는, 양순한',
          usage_note: '합리적 권위에 순종'
        },
        {
          word: 'impartial',
          ipa_pronunciation: '/ɪmˈpɑːrʃəl/',
          korean_pronunciation: '임파셜',
          part_of_speech: '형용사',
          definition_korean: '편견이 없는, 공평한',
          usage_note: '차별하지 않음'
        },
        {
          word: 'sincere',
          ipa_pronunciation: '/sɪnˈsɪr/',
          korean_pronunciation: '신시어',
          part_of_speech: '형용사',
          definition_korean: '진실한, 거짓 없는',
          usage_note: '위선이 없음'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 하늘로부터 오는 지혜의 여덟 가지 특성을 나열합니다. "순결"이 첫째인 것은 도덕적 순수함이 모든 지혜의 기초임을 나타냅니다. 나머지 특성들은 대인 관계에서 나타나는 지혜의 열매들입니다: 평화 추구, 관대함, 양순함, 긍휼, 선한 열매, 공평함, 진실함. 이것은 성령의 열매(갈 5:22-23)와 유사하며, 진정한 지혜가 성령의 역사임을 보여줍니다.',
        cross_references: ['Galatians 5:22-23', 'Matthew 5:3-12', 'Philippians 4:8', '1 Timothy 3:2-3', 'Titus 1:7-8']
      },
      korean_translation: {
        natural_translation: '그러나 위로부터 오는 지혜는 첫째로 순수하고, 그 다음으로 평화롭고, 관대하고, 순종적이며, 긍휼과 선한 열매가 가득하고, 편파적이지 않고, 위선이 없습니다.',
        translation_notes: 'submissive를 "양순한" 또는 "순종적"으로 번역'
      },
      special_explanation: {
        explanation_type: '지혜의 여덟 특성',
        content: '이 여덟 가지 특성은 체계적으로 배열되어 있습니다. "순결"은 하나님과의 관계(수직), 나머지는 사람과의 관계(수평)입니다. "평화롭고 관대하고 양순한"은 태도, "긍휼과 선한 열매"는 행동, "편견 없고 거짓 없는"은 진실성입니다. 이 모든 특성이 예수 그리스도의 성품을 반영하며, 성령의 열매와 일치합니다.',
        examples: ['Matthew 5:9 - 화평케 하는 자', 'Luke 6:36 - 긍휼히 여기라', 'Ephesians 4:32 - 서로 인자하라', 'Philippians 2:3 - 겸손']
      }
    },

    {
      reference: 'James 3:18',
      sentence_structures: [
        {
          sequence_order: 1,
          semantic_classification: '원리 - 의의 열매',
          original_text: 'Peacemakers who sow in peace reap a harvest of righteousness',
          korean_translation: '평화를 이루는 자들은 평화 가운데 심어서 의의 열매를 거둔다',
          grammatical_explanation: '인과관계 표현'
        }
      ],
      vocabulary: [
        {
          word: 'peacemakers',
          ipa_pronunciation: '/ˈpiːsmeɪkərz/',
          korean_pronunciation: '피스메이커즈',
          part_of_speech: '명사',
          definition_korean: '평화를 이루는 자들',
          usage_note: '화평을 만드는 사람들'
        },
        {
          word: 'sow',
          ipa_pronunciation: '/soʊ/',
          korean_pronunciation: '소우',
          part_of_speech: '동사',
          definition_korean: '씨를 뿌리다, 심다',
          usage_note: '농사 비유'
        },
        {
          word: 'reap',
          ipa_pronunciation: '/riːp/',
          korean_pronunciation: '립',
          part_of_speech: '동사',
          definition_korean: '거두다, 수확하다',
          usage_note: '결과를 얻다'
        },
        {
          word: 'harvest',
          ipa_pronunciation: '/ˈhɑːrvɪst/',
          korean_pronunciation: '하비스트',
          part_of_speech: '명사',
          definition_korean: '수확, 열매',
          usage_note: '농사의 결과'
        },
        {
          word: 'righteousness',
          ipa_pronunciation: '/ˈraɪtʃəsnəs/',
          korean_pronunciation: '라이처스니스',
          part_of_speech: '명사',
          definition_korean: '의, 공의',
          usage_note: '하나님의 의로우심'
        }
      ],
      contextual_explanation: {
        integrated_explanation: '야고보는 3장을 농사 비유로 마무리합니다. "평화를 이루는 자들"은 예수님의 팔복에 나오는 "화평케 하는 자"(마 5:9)를 상기시킵니다. 그들은 "평화 가운데" 씨를 뿌리는데, 이것은 평화로운 방법으로 사역한다는 의미입니다. 결과는 "의의 열매"로, 이것은 하나님께서 기뻐하시는 올바른 관계와 공동체를 의미합니다. 이것은 시기와 당파심이 낳는 "무질서와 모든 악"(16절)과 극명하게 대조됩니다.',
        cross_references: ['Matthew 5:9', 'Proverbs 11:18', 'Hosea 10:12', 'Galatians 6:7-9', 'Hebrews 12:11']
      },
      korean_translation: {
        natural_translation: '평화를 만드는 사람들은 평화 가운데 씨를 뿌려서 의의 열매를 거둡니다.',
        translation_notes: 'peacemakers를 "평화를 이루는 자" 또는 "화평케 하는 자"로 번역'
      },
      special_explanation: {
        explanation_type: '파종과 수확의 원리',
        content: '야고보는 영적 파종과 수확의 원리를 가르칩니다. 평화를 심으면 의를 거두고, 시기를 심으면 무질서를 거둡니다(16절). 이것은 갈라디아서 6:7-8의 "사람이 무엇으로 심든지 그대로 거두리라"는 원리와 일치합니다. "평화 가운데"라는 표현은 방법과 내용 모두 평화로워야 함을 강조합니다. 올바른 목표도 잘못된 방법으로 추구하면 의의 열매를 맺지 못합니다.',
        examples: ['Matthew 5:9 - 화평케 하는 자는 하나님의 아들', 'Galatians 6:7-9 - 심는 대로 거둠', 'Proverbs 11:18 - 의를 뿌리는 자는 확실한 상을 받음']
      }
    }

  ] // End of analyses array

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

  console.log('\n=== 저장 완료 ===')
  console.log(`성공: ${successCount}개 구절`)
  console.log(`실패: ${failCount}개 구절`)

  if (failCount > 0) {
    process.exit(1)
  }
}

// 실행
saveJamesChapter2And3()
  .then(() => {
    console.log('\n✅ James 2-3장 저장 완료')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n❌ 오류 발생:', error)
    process.exit(1)
  })
