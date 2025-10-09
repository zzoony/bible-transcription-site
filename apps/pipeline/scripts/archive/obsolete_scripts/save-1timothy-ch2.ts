import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysesData: AnalysisData[] = [
  {
    reference: "1 Timothy 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권면 - 기도의 우선순위",
        original_text: "I urge, then, first of all",
        korean_translation: "그러므로 나는 무엇보다 먼저 권면합니다",
        grammatical_explanation: "'I urge'로 강력한 권면, 'first of all'로 우선순위 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "요청 내용 - 네 가지 기도 형태",
        original_text: "that petitions, prayers, intercession and thanksgiving be made for all people",
        korean_translation: "간구와 기도와 중보와 감사가 모든 사람을 위해 드려지기를",
        grammatical_explanation: "명사절, 네 가지 기도 형태를 병렬로 나열, 수동태 가정법 'be made'"
      }
    ],
    vocabulary: [
      {
        word: "urge",
        ipa_pronunciation: "/ɜːrdʒ/",
        korean_pronunciation: "얼지",
        definition_korean: "권면하다, 강력히 요청하다"
      },
      {
        word: "petitions",
        ipa_pronunciation: "/pəˈtɪʃnz/",
        korean_pronunciation: "퍼티션즈",
        definition_korean: "간구, 탄원"
      },
      {
        word: "intercession",
        ipa_pronunciation: "/ˌɪntərˈseʃn/",
        korean_pronunciation: "인터세션",
        definition_korean: "중보, 대신 간청함"
      },
      {
        word: "thanksgiving",
        ipa_pronunciation: "/ˌθæŋksˈɡɪvɪŋ/",
        korean_pronunciation: "땡크스기빙",
        definition_korean: "감사"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 공적 예배의 핵심 요소로 기도를 제시하며, 네 가지 형태를 구분합니다. 간구(개인적 필요), 기도(일반적 기도), 중보(다른 이를 위한 기도), 감사(하나님께 드리는 감사)입니다. '모든 사람을 위하여'는 기도의 보편성을 강조하며, 다음 구절에서 구체화됩니다. 1세기 교회는 박해받는 상황에서도 모든 사람, 심지어 박해자들을 위해서도 기도해야 했습니다."
    },
    korean_translation: {
      natural_translation: "그러므로 나는 무엇보다 먼저 권면합니다. 간구와 기도와 중보와 감사가 모든 사람을 위해 드려지기를 바랍니다.",
      translation_notes: "네 가지 기도 형태는 중복보다는 기도의 포괄성과 다양성을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "구체화 - 특별히 위정자들",
        original_text: "for kings and all those in authority",
        korean_translation: "왕들과 높은 지위에 있는 모든 이들을 위하여",
        grammatical_explanation: "1절의 '모든 사람'을 구체화, 'kings'와 'all those in authority' 병렬"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적 - 평화로운 삶",
        original_text: "that we may live peaceful and quiet lives in all godliness and holiness",
        korean_translation: "우리가 모든 경건과 단정함 가운데 평안하고 조용한 삶을 살 수 있도록",
        grammatical_explanation: "목적절 'that', 'peaceful and quiet' 병렬, 'in all godliness and holiness' 방식 제시"
      }
    ],
    vocabulary: [
      {
        word: "authority",
        ipa_pronunciation: "/əˈθɔːrəti/",
        korean_pronunciation: "어쏘리티",
        definition_korean: "권위, 권력"
      },
      {
        word: "peaceful",
        ipa_pronunciation: "/ˈpiːsfl/",
        korean_pronunciation: "피스풀",
        definition_korean: "평화로운, 평안한"
      },
      {
        word: "quiet",
        ipa_pronunciation: "/ˈkwaɪət/",
        korean_pronunciation: "콰이엇",
        definition_korean: "조용한, 고요한"
      },
      {
        word: "godliness",
        ipa_pronunciation: "/ˈɡɑːdlinəs/",
        korean_pronunciation: "갓리니스",
        definition_korean: "경건, 신앙심"
      },
      {
        word: "holiness",
        ipa_pronunciation: "/ˈhoʊlinəs/",
        korean_pronunciation: "홀리니스",
        definition_korean: "거룩함, 성결"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 로마 황제를 포함한 모든 통치자를 위해 기도하라고 명령합니다. 이는 당시 네로 황제 치하에서 기독교인들이 박해받던 상황을 고려하면 놀라운 명령입니다. 기도의 목적은 정치적 혁명이 아니라 '평안하고 조용한 삶'입니다. 그러나 이 평화는 단순한 안전이 아니라 '경건과 단정함 가운데' 누리는 것으로, 복음 전파와 경건한 삶을 위한 환경을 의미합니다. 통치자들을 위한 기도는 하나님의 주권을 인정하고 복음 전파의 기회를 구하는 것입니다."
    },
    korean_translation: {
      natural_translation: "왕들과 높은 지위에 있는 모든 이들을 위하여 기도하십시오. 그리하여 우리가 모든 경건과 단정함 가운데 평안하고 조용한 삶을 살 수 있도록 말입니다.",
      translation_notes: "'peaceful and quiet lives'는 정치적 안정을 넘어 복음 전파와 경건한 삶을 위한 환경을 포함합니다."
    }
  },
  {
    reference: "1 Timothy 2:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "평가 - 하나님 앞에서의 선함",
        original_text: "This is good, and pleases God our Savior",
        korean_translation: "이것은 선하며 우리 구주 하나님을 기쁘시게 합니다",
        grammatical_explanation: "주어-동사-보어, 두 개의 동사 'is'와 'pleases' 병렬"
      }
    ],
    vocabulary: [
      {
        word: "pleases",
        ipa_pronunciation: "/ˈpliːzɪz/",
        korean_pronunciation: "플리지즈",
        definition_korean: "기쁘게 하다"
      },
      {
        word: "Savior",
        ipa_pronunciation: "/ˈseɪvjər/",
        korean_pronunciation: "세이비어",
        definition_korean: "구주, 구원자"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "1-2절의 기도 명령에 대한 신학적 근거를 제시합니다. 모든 사람, 특히 통치자들을 위한 기도는 '선하고' 하나님을 기쁘시게 합니다. '우리 구주 하나님'이라는 표현은 하나님의 구원 의지를 강조하며, 4절의 보편적 구원 소망으로 이어집니다. 통치자들을 위한 기도는 단순한 정치적 행위가 아니라 하나님의 구원 계획에 부합하는 영적 행위입니다."
    },
    korean_translation: {
      natural_translation: "이것은 선하며 우리 구주 하나님을 기쁘시게 합니다.",
      translation_notes: "'God our Savior'는 하나님의 구원 의지를 강조하며 다음 구절과 연결됩니다."
    }
  },
  {
    reference: "1 Timothy 2:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님의 소망 - 보편적 구원",
        original_text: "who wants all people to be saved",
        korean_translation: "그분은 모든 사람이 구원받기를 원하십니다",
        grammatical_explanation: "관계절, 'wants' 동사, 부정사절 'to be saved' 목적어"
      },
      {
        sequence_order: 2,
        semantic_classification: "목표 - 진리의 지식",
        original_text: "and to come to a knowledge of the truth",
        korean_translation: "그리고 진리의 지식에 이르기를 원하십니다",
        grammatical_explanation: "병렬 부정사절, 'come to a knowledge'는 점진적 과정 암시"
      }
    ],
    vocabulary: [
      {
        word: "saved",
        ipa_pronunciation: "/seɪvd/",
        korean_pronunciation: "세이브드",
        definition_korean: "구원받다"
      },
      {
        word: "knowledge",
        ipa_pronunciation: "/ˈnɑːlɪdʒ/",
        korean_pronunciation: "날리지",
        definition_korean: "지식, 앎"
      },
      {
        word: "truth",
        ipa_pronunciation: "/truːθ/",
        korean_pronunciation: "트루쓰",
        definition_korean: "진리, 진실"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 하나님의 보편적 구원 의지를 명확히 선언합니다. 하나님은 '모든 사람'이 구원받기를 원하시며, 이는 특정 민족이나 계층에 국한되지 않습니다. 구원은 '진리의 지식에 이름'과 연결되는데, 이는 단순한 지적 동의가 아니라 복음의 깊은 이해와 체험을 의미합니다. 따라서 모든 사람을 위한 기도(1-2절)는 하나님의 구원 계획과 일치하며, 복음 전파의 기회를 구하는 것입니다."
    },
    korean_translation: {
      natural_translation: "그분은 모든 사람이 구원받고 진리의 지식에 이르기를 원하십니다.",
      translation_notes: "'all people'은 하나님의 구원 의지가 보편적이며 차별이 없음을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 2:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "선언 - 하나님의 유일성",
        original_text: "For there is one God",
        korean_translation: "하나님은 한 분이시고",
        grammatical_explanation: "'For' 접속사로 4절과 연결, 존재 구문 'there is'"
      },
      {
        sequence_order: 2,
        semantic_classification: "선언 - 중보자의 유일성",
        original_text: "and one mediator between God and mankind, the man Christ Jesus",
        korean_translation: "하나님과 사람 사이의 중보자도 한 분이시니 곧 사람이신 그리스도 예수입니다",
        grammatical_explanation: "병렬 구조, 동격 'the man Christ Jesus'로 중보자의 정체 명시"
      }
    ],
    vocabulary: [
      {
        word: "mediator",
        ipa_pronunciation: "/ˈmiːdieɪtər/",
        korean_pronunciation: "미디에이터",
        definition_korean: "중보자, 중재자"
      },
      {
        word: "mankind",
        ipa_pronunciation: "/mænˈkaɪnd/",
        korean_pronunciation: "맨카인드",
        definition_korean: "인류, 사람"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 4절의 보편적 구원을 신학적으로 뒷받침합니다. '하나님은 한 분'이라는 유일신 선언은 유대교의 쉐마(신 6:4)를 반영합니다. 하나님이 한 분이시므로 그분의 구원 계획도 모든 민족에게 동일합니다. 마찬가지로 '중보자도 한 분'이시며, 그분이 바로 '사람이신 그리스도 예수'입니다. '사람'이라는 강조는 성육신을 통해 예수님이 하나님과 인류 사이를 진정으로 중재하실 수 있음을 보여줍니다. 다른 중보자(천사, 성인, 종교 지도자)는 없으며, 오직 예수님만이 유일한 구원의 길입니다."
    },
    korean_translation: {
      natural_translation: "하나님은 한 분이시고, 하나님과 사람 사이의 중보자도 한 분이시니, 곧 사람이신 그리스도 예수입니다.",
      translation_notes: "'the man Christ Jesus'는 성육신을 강조하며, 진정한 중보가 가능한 근거를 제시합니다."
    }
  },
  {
    reference: "1 Timothy 2:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "행위 - 그리스도의 자기 희생",
        original_text: "who gave himself as a ransom for all people",
        korean_translation: "그분은 모든 사람을 위한 대속물로 자기 자신을 주셨습니다",
        grammatical_explanation: "관계절, 'gave himself'는 자발적 희생, 'ransom'은 속량 개념"
      },
      {
        sequence_order: 2,
        semantic_classification: "시간 - 증거의 적절한 때",
        original_text: "This has now been witnessed to at the proper time",
        korean_translation: "이것이 적절한 때에 증거되었습니다",
        grammatical_explanation: "수동태 완료형 'has been witnessed', 'at the proper time'은 하나님의 시간표 암시"
      }
    ],
    vocabulary: [
      {
        word: "ransom",
        ipa_pronunciation: "/ˈrænsəm/",
        korean_pronunciation: "랜섬",
        definition_korean: "대속, 몸값"
      },
      {
        word: "witnessed",
        ipa_pronunciation: "/ˈwɪtnəst/",
        korean_pronunciation: "위트니스트",
        definition_korean: "증거되다, 증언되다"
      },
      {
        word: "proper",
        ipa_pronunciation: "/ˈprɑːpər/",
        korean_pronunciation: "프라퍼",
        definition_korean: "적절한, 올바른"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "중보자 그리스도의 사역을 구체적으로 설명합니다. 예수님은 '자기 자신을 주셨다'는 표현은 십자가 죽음의 자발성을 강조합니다. '대속물(ransom)'은 노예나 포로를 해방시키기 위해 지불하는 값을 의미하며, 예수님의 죽음이 죄의 노예 된 인류를 해방시키는 값임을 보여줍니다. '모든 사람을 위한'은 4절의 보편적 구원 의지와 일치합니다. '적절한 때'는 하나님의 구원 역사의 절정을 가리키며, 이제 이것이 복음으로 증거되고 있습니다."
    },
    korean_translation: {
      natural_translation: "그분은 모든 사람을 위한 대속물로 자기 자신을 주셨습니다. 이것이 적절한 때에 증거되었습니다.",
      translation_notes: "'ransom for all people'은 그리스도의 죽음의 대속적, 보편적 성격을 동시에 강조합니다."
    }
  },
  {
    reference: "1 Timothy 2:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "임명 - 바울의 세 가지 직분",
        original_text: "And for this purpose I was appointed a herald and an apostle",
        korean_translation: "이 목적을 위해 나는 전령과 사도로 임명되었습니다",
        grammatical_explanation: "수동태 'was appointed', 두 가지 직분 병렬"
      },
      {
        sequence_order: 2,
        semantic_classification: "진실 강조 - 부연 설명",
        original_text: "I am telling the truth, I am not lying",
        korean_translation: "내가 진실을 말하고 있으며 거짓말하지 않습니다",
        grammatical_explanation: "삽입구, 긍정과 부정의 대조로 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "역할 - 이방인 교사",
        original_text: "and a true and faithful teacher of the Gentiles",
        korean_translation: "그리고 이방인의 참되고 신실한 교사입니다",
        grammatical_explanation: "세 번째 직분 추가, 'true and faithful' 이중 수식"
      }
    ],
    vocabulary: [
      {
        word: "herald",
        ipa_pronunciation: "/ˈherəld/",
        korean_pronunciation: "헤럴드",
        definition_korean: "전령, 선포자"
      },
      {
        word: "appointed",
        ipa_pronunciation: "/əˈpɔɪntɪd/",
        korean_pronunciation: "어포인티드",
        definition_korean: "임명되다"
      },
      {
        word: "Gentiles",
        ipa_pronunciation: "/ˈdʒentaɪlz/",
        korean_pronunciation: "젠타일즈",
        definition_korean: "이방인들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 6절의 '증거'와 자신의 사역을 연결합니다. 그는 복음의 전령(공개 선포자), 사도(특별히 부름받은 사자), 이방인의 교사로 임명되었습니다. '내가 진실을 말하고 거짓말하지 않는다'는 삽입은 이방인 사도로서의 자신의 역할이 의심받았음을 암시합니다. 바울은 이방인 선교에 대한 자신의 부르심을 재확인하며, 이는 '모든 사람'을 향한 하나님의 구원 계획(4절)의 일부입니다."
    },
    korean_translation: {
      natural_translation: "이 목적을 위해 나는 전령과 사도로 임명되었습니다. 내가 진실을 말하고 있으며 거짓말하지 않습니다. 나는 이방인의 참되고 신실한 교사입니다.",
      translation_notes: "삽입구 'I am telling the truth, I am not lying'은 바울의 이방인 사도직에 대한 반대를 의식한 강한 확언입니다."
    }
  },
  {
    reference: "1 Timothy 2:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "소망 - 남자들의 기도",
        original_text: "Therefore I want the men everywhere to pray",
        korean_translation: "그러므로 나는 남자들이 어디서나 기도하기를 원합니다",
        grammatical_explanation: "'Therefore' 결론, 'want' 동사, 부정사절 'to pray' 목적어"
      },
      {
        sequence_order: 2,
        semantic_classification: "방식 - 거룩한 손",
        original_text: "lifting up holy hands",
        korean_translation: "거룩한 손을 들고",
        grammatical_explanation: "분사구로 기도 자세 묘사, 'holy hands'는 은유"
      },
      {
        sequence_order: 3,
        semantic_classification: "조건 - 분노와 논쟁 없이",
        original_text: "without anger or disputing",
        korean_translation: "분노나 논쟁 없이",
        grammatical_explanation: "'without' 구조, 두 가지 부정적 요소 나열"
      }
    ],
    vocabulary: [
      {
        word: "lifting up",
        ipa_pronunciation: "/ˈlɪftɪŋ ʌp/",
        korean_pronunciation: "리프팅 업",
        definition_korean: "들어 올리다"
      },
      {
        word: "holy",
        ipa_pronunciation: "/ˈhoʊli/",
        korean_pronunciation: "홀리",
        definition_korean: "거룩한"
      },
      {
        word: "anger",
        ipa_pronunciation: "/ˈæŋɡər/",
        korean_pronunciation: "앵거",
        definition_korean: "분노, 노여움"
      },
      {
        word: "disputing",
        ipa_pronunciation: "/dɪˈspjuːtɪŋ/",
        korean_pronunciation: "디스퓨팅",
        definition_korean: "논쟁, 다툼"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 남자들의 기도 자세를 지시합니다. '어디서나'는 장소의 제한이 없음을 강조하며, 성전 중심의 유대교와 대조됩니다. '거룩한 손을 들고'는 유대인의 전통적 기도 자세이지만, '거룩한'은 도덕적 정결함을 의미합니다(시 24:3-4). '분노나 논쟁 없이'는 교회 내 갈등이 기도를 방해함을 경고합니다. 효과적인 기도는 단순히 외적 자세가 아니라 내적 태도(거룩함, 평화)가 중요합니다."
    },
    korean_translation: {
      natural_translation: "그러므로 나는 남자들이 어디서나 거룩한 손을 들고 분노나 논쟁 없이 기도하기를 원합니다.",
      translation_notes: "'holy hands'는 물리적 깨끗함이 아니라 도덕적, 영적 순결을 상징합니다."
    }
  },
  {
    reference: "1 Timothy 2:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "소망 - 여자들의 옷차림",
        original_text: "I also want the women to dress modestly, with decency and propriety",
        korean_translation: "나는 또한 여자들이 단정함과 정숙함과 절제로 옷을 입기를 원합니다",
        grammatical_explanation: "'also' 추가, 부정사 'to dress', 세 가지 덕목 병렬"
      },
      {
        sequence_order: 2,
        semantic_classification: "방식 - 꾸밈의 내용",
        original_text: "adorning themselves, not with elaborate hairstyles or gold or pearls or expensive clothes",
        korean_translation: "정교한 머리 모양이나 금이나 진주나 값비싼 옷으로가 아니라",
        grammatical_explanation: "분사 'adorning', 'not with' 부정, 네 가지 사치품 나열"
      }
    ],
    vocabulary: [
      {
        word: "modestly",
        ipa_pronunciation: "/ˈmɑːdɪstli/",
        korean_pronunciation: "마디스틀리",
        definition_korean: "단정하게, 겸손하게"
      },
      {
        word: "decency",
        ipa_pronunciation: "/ˈdiːsnsi/",
        korean_pronunciation: "디슨시",
        definition_korean: "품위, 예절"
      },
      {
        word: "propriety",
        ipa_pronunciation: "/prəˈpraɪəti/",
        korean_pronunciation: "프러프라이어티",
        definition_korean: "적절함, 단정함"
      },
      {
        word: "elaborate",
        ipa_pronunciation: "/ɪˈlæbərət/",
        korean_pronunciation: "일래버릿",
        definition_korean: "정교한, 공들인"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "8절의 남자들에 대한 지침에 이어 여자들에 대한 지침을 제시합니다. 바울은 외적 치장이 아니라 내적 품성을 강조합니다. 1세기 로마 사회에서 부유한 여성들은 정교한 머리 모양, 금 장신구, 진주, 값비싼 옷으로 지위를 과시했습니다. 바울은 이러한 사치를 교회 내에서 금지하는데, 이는 겸손과 평등을 중시하고, 외적 아름다움보다 내적 덕성을 우선시하는 기독교 가치관을 반영합니다. 이는 특정 문화의 규범이 아니라 모든 시대에 적용되는 원칙입니다."
    },
    korean_translation: {
      natural_translation: "나는 또한 여자들이 단정함과 정숙함과 절제로 옷을 입기를 원합니다. 정교한 머리 모양이나 금이나 진주나 값비싼 옷이 아니라,",
      translation_notes: "외적 사치의 나열은 당시 상류층 여성들의 과시적 문화를 반영하며, 교회 내 평등과 겸손을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 2:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조 - 참된 아름다움",
        original_text: "but with good deeds",
        korean_translation: "오히려 선한 행실로",
        grammatical_explanation: "대조 접속사 'but', 9절과 대비되는 진정한 치장"
      },
      {
        sequence_order: 2,
        semantic_classification: "적절성 - 신앙 고백과의 일치",
        original_text: "appropriate for women who profess to worship God",
        korean_translation: "하나님을 경배한다고 고백하는 여자들에게 합당한",
        grammatical_explanation: "형용사 'appropriate', 관계절 'who profess' 수식"
      }
    ],
    vocabulary: [
      {
        word: "good deeds",
        ipa_pronunciation: "/ɡʊd diːdz/",
        korean_pronunciation: "굿 디즈",
        definition_korean: "선한 행실, 좋은 행동"
      },
      {
        word: "appropriate",
        ipa_pronunciation: "/əˈproʊpriət/",
        korean_pronunciation: "어프로프리엇",
        definition_korean: "적절한, 합당한"
      },
      {
        word: "profess",
        ipa_pronunciation: "/prəˈfes/",
        korean_pronunciation: "프러페스",
        definition_korean: "고백하다, 공언하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "9절의 부정적 명령('~이 아니라')에 이어 긍정적 대안을 제시합니다. 진정한 아름다움은 '선한 행실'에서 나옵니다. 이는 베드로전서 3:3-4와 유사한 가르침으로, 외적 장식보다 내적 품성을 우선시합니다. '하나님을 경배한다고 고백하는 여자들'은 단순한 명목상 신자가 아니라 진정으로 하나님을 섬기는 자들을 의미합니다. 그들에게 '합당한' 것은 화려한 외모가 아니라 선한 행실입니다. 이는 신앙 고백과 삶의 일치를 요구합니다."
    },
    korean_translation: {
      natural_translation: "오히려 하나님을 경배한다고 고백하는 여자들에게 합당한 선한 행실로 자신을 단장해야 합니다.",
      translation_notes: "'good deeds'는 외적 치장의 진정한 대안으로, 신앙 고백과 삶의 일치를 강조합니다."
    }
  },
  {
    reference: "1 Timothy 2:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 - 여자의 배움",
        original_text: "A woman should learn in quietness and full submission",
        korean_translation: "여자는 조용함과 완전한 순종 가운데 배워야 합니다",
        grammatical_explanation: "조동사 'should', 두 가지 방식 'quietness'와 'full submission' 병렬"
      }
    ],
    vocabulary: [
      {
        word: "learn",
        ipa_pronunciation: "/lɜːrn/",
        korean_pronunciation: "런",
        definition_korean: "배우다"
      },
      {
        word: "quietness",
        ipa_pronunciation: "/ˈkwaɪətnəs/",
        korean_pronunciation: "콰이엇니스",
        definition_korean: "조용함, 고요함"
      },
      {
        word: "submission",
        ipa_pronunciation: "/səbˈmɪʃn/",
        korean_pronunciation: "서브미션",
        definition_korean: "순종, 복종"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 논쟁적이지만 문화적 맥락을 이해하는 것이 중요합니다. 1세기에 여성들은 대부분 교육받지 못했고, 회당에서도 배울 기회가 제한적이었습니다. 바울이 '여자는 배워야 한다'고 말한 것 자체가 당시로서는 혁명적이었습니다. '조용함'은 단순히 침묵이 아니라 배우는 자의 겸손한 태도를 의미합니다. '완전한 순종'은 하나님의 말씀과 그것을 가르치는 권위에 대한 존중입니다. 이는 여성을 억압하려는 것이 아니라 질서 있는 배움의 환경을 만들려는 것입니다."
    },
    korean_translation: {
      natural_translation: "여자는 조용함과 완전한 순종 가운데 배워야 합니다.",
      translation_notes: "'should learn'은 당시 여성 교육이 제한적이었던 점을 고려하면 긍정적 격려로 볼 수 있습니다."
    }
  },
  {
    reference: "1 Timothy 2:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "금지 - 여자의 가르침과 권위",
        original_text: "I do not permit a woman to teach or to assume authority over a man",
        korean_translation: "나는 여자가 가르치거나 남자를 다스리는 것을 허락하지 않습니다",
        grammatical_explanation: "부정 'do not permit', 두 개의 부정사 'to teach'와 'to assume authority' 병렬"
      },
      {
        sequence_order: 2,
        semantic_classification: "요구 - 침묵",
        original_text: "she must be quiet",
        korean_translation: "그녀는 조용해야 합니다",
        grammatical_explanation: "조동사 'must', 11절의 'quietness'와 연결"
      }
    ],
    vocabulary: [
      {
        word: "permit",
        ipa_pronunciation: "/pərˈmɪt/",
        korean_pronunciation: "퍼밋",
        definition_korean: "허락하다"
      },
      {
        word: "assume",
        ipa_pronunciation: "/əˈsuːm/",
        korean_pronunciation: "어숨",
        definition_korean: "떠맡다, 취하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 가장 논쟁적인 구절 중 하나입니다. 바울은 두 가지를 금지합니다: (1) 여자가 남자를 가르치는 것, (2) 남자를 다스리는 것. 이는 공적 예배와 교회 리더십 맥락에서 이해해야 합니다. '가르침'은 권위 있는 교리 교육을 의미하며, '다스림'은 영적 권위 행사를 가리킵니다. 다음 구절(13-14절)에서 바울은 창조 질서와 타락 사건을 근거로 제시합니다. 이 구절의 해석은 계속 논쟁 중이며, 일부는 보편적 원칙으로, 일부는 특정 상황(에베소 교회)에 대한 지침으로 봅니다."
    },
    korean_translation: {
      natural_translation: "나는 여자가 남자를 가르치거나 남자를 다스리는 것을 허락하지 않습니다. 그녀는 조용해야 합니다.",
      translation_notes: "이 구절은 공적 예배에서의 권위 있는 가르침과 리더십에 초점을 맞추고 있으며, 문화적 맥락과 신학적 근거를 함께 고려해야 합니다."
    }
  },
  {
    reference: "1 Timothy 2:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "근거 - 창조 순서",
        original_text: "For Adam was formed first, then Eve",
        korean_translation: "아담이 먼저 지음을 받고 그 다음에 하와가 지음을 받았기 때문입니다",
        grammatical_explanation: "'For' 접속사로 12절의 근거 제시, 수동태 'was formed', 시간 부사 'first'와 'then' 대조"
      }
    ],
    vocabulary: [
      {
        word: "formed",
        ipa_pronunciation: "/fɔːrmd/",
        korean_pronunciation: "폼드",
        definition_korean: "형성되다, 만들어지다"
      },
      {
        word: "Adam",
        ipa_pronunciation: "/ˈædəm/",
        korean_pronunciation: "애덤",
        definition_korean: "아담 (첫 사람)"
      },
      {
        word: "Eve",
        ipa_pronunciation: "/iːv/",
        korean_pronunciation: "이브",
        definition_korean: "하와 (첫 여자)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 12절의 금지에 대한 신학적 근거로 창세기 2장의 창조 순서를 제시합니다. 아담이 먼저 창조되고 하와가 나중에 창조된 것은 단순히 시간적 순서가 아니라 어떤 원칙을 함축합니다. 바울은 이 순서에서 남자의 특정한 역할(가르침과 리더십)의 근거를 찾습니다. 그러나 이것이 여성의 가치나 능력을 폄하하는 것은 아닙니다. 창조 질서는 평등한 가치 안에서 구별된 역할을 제시합니다."
    },
    korean_translation: {
      natural_translation: "아담이 먼저 지음을 받고 그 다음에 하와가 지음을 받았기 때문입니다.",
      translation_notes: "창조 순서를 근거로 제시하는 것은 이것이 문화적 관습이 아니라 하나님의 창조 설계에 뿌리를 둔다는 의미입니다."
    }
  },
  {
    reference: "1 Timothy 2:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조 - 아담은 속지 않음",
        original_text: "And Adam was not the one deceived",
        korean_translation: "아담은 속은 자가 아니었고",
        grammatical_explanation: "대조 구조 시작, 부정 'was not', 'the one deceived' 수동 분사"
      },
      {
        sequence_order: 2,
        semantic_classification: "사실 - 여자가 속아 죄인이 됨",
        original_text: "it was the woman who was deceived and became a sinner",
        korean_translation: "여자가 속아서 죄인이 되었습니다",
        grammatical_explanation: "강조 구문 'it was... who', 수동태 'was deceived', 결과 'became a sinner'"
      }
    ],
    vocabulary: [
      {
        word: "deceived",
        ipa_pronunciation: "/dɪˈsiːvd/",
        korean_pronunciation: "디시브드",
        definition_korean: "속다, 기만당하다"
      },
      {
        word: "sinner",
        ipa_pronunciation: "/ˈsɪnər/",
        korean_pronunciation: "시너",
        definition_korean: "죄인"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 창세기 3장의 타락 사건을 두 번째 근거로 제시합니다. 뱀은 먼저 하와를 속였고(창 3:1-6), 하와가 선악과를 먹은 후 아담에게 주었습니다. 바울은 '아담은 속지 않았다'고 말하는데, 이는 아담이 죄 없다는 뜻이 아니라 그가 하와처럼 기만당한 것이 아니라 의도적으로 하와를 따라 불순종했다는 의미입니다(롬 5:12-19는 아담의 죄를 강조). 바울은 이 사건에서 교리적 속임에 대한 경고를 이끌어냅니다. 그러나 이것이 모든 여성이 쉽게 속는다는 의미는 아니며, 특정 상황(에베소의 거짓 교사들)과 연결될 수 있습니다."
    },
    korean_translation: {
      natural_translation: "아담은 속은 자가 아니었고, 여자가 속아서 죄인이 되었습니다.",
      translation_notes: "타락 사건을 언급하는 것은 교리적 속임의 위험성을 경고하며, 12절의 가르침 금지와 연결됩니다."
    }
  },
  {
    reference: "1 Timothy 2:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "구원 방식 - 해산을 통해",
        original_text: "But women will be saved through childbearing",
        korean_translation: "그러나 여자들은 해산을 통해 구원받을 것입니다",
        grammatical_explanation: "대조 접속사 'But', 미래 수동태 'will be saved', 'through childbearing' 수단"
      },
      {
        sequence_order: 2,
        semantic_classification: "조건 - 믿음과 사랑과 성결",
        original_text: "if they continue in faith, love and holiness with propriety",
        korean_translation: "만약 그들이 절제와 함께 믿음과 사랑과 거룩함 가운데 거한다면",
        grammatical_explanation: "조건절 'if', 'continue in' 지속성, 세 가지 덕목과 하나의 방식"
      }
    ],
    vocabulary: [
      {
        word: "childbearing",
        ipa_pronunciation: "/ˈtʃaɪldberɪŋ/",
        korean_pronunciation: "차일드베어링",
        definition_korean: "해산, 출산"
      },
      {
        word: "continue",
        ipa_pronunciation: "/kənˈtɪnjuː/",
        korean_pronunciation: "컨티뉴",
        definition_korean: "계속하다, 거하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 성경에서 가장 해석하기 어려운 구절 중 하나입니다. '해산을 통해 구원받는다'는 표현은 여러 해석이 있습니다: (1) 여성의 전통적 역할(출산과 양육)을 통한 하나님의 사역 참여, (2) 메시아(여자의 후손, 창 3:15)의 탄생을 통한 구원, (3) 출산의 고통과 위험을 통과하며 하나님을 신뢰함. 중요한 것은 이것이 행위 구원을 가르치지 않는다는 점입니다. '만약 그들이 믿음과 사랑과 거룩함 가운데 거한다면'이라는 조건은 진정한 구원의 증거를 보여줍니다. 바울은 14절의 부정적 언급 후, 여성들에게 소망과 존엄성을 회복시키려는 것으로 보입니다."
    },
    korean_translation: {
      natural_translation: "그러나 여자들은 해산을 통해 구원받을 것입니다. 만약 그들이 절제와 함께 믿음과 사랑과 거룩함 가운데 거한다면 말입니다.",
      translation_notes: "'saved through childbearing'은 여러 해석이 가능하며, 조건절은 진정한 믿음의 지속을 강조하여 행위 구원을 배제합니다."
    }
  }
]

async function main() {
  console.log('1 Timothy Chapter 2 분석 데이터를 저장합니다...')
  console.log(`총 ${analysesData.length}개 구절 저장 시작\n`)

  for (const data of analysesData) {
    await saveAnalysisToDb(data)
  }

  console.log('\n모든 구절 저장 완료!')
}

main()
