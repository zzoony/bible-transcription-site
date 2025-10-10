import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 2:14-18: 쓸데없는 말다툼 경계
  {
    reference: "2 Timothy 2:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 상기시키라",
        original_text: "Keep reminding God's people of these things",
        korean_translation: "이것들을 그들에게 상기시키라"
      },
      {
        sequence_order: 2,
        semantic_classification: "경고: 말다툼 금지",
        original_text: "Warn them before God against quarreling about words",
        korean_translation: "하나님 앞에서 말다툼하지 말라고 엄히 경고하라"
      },
      {
        sequence_order: 3,
        semantic_classification: "결과: 무익함",
        original_text: "it is of no value, and only ruins those who listen",
        korean_translation: "이는 아무 유익이 없고 듣는 자들을 망하게 할 뿐이라"
      }
    ],
    vocabulary: [
      {
        word: "quarreling",
        ipa_pronunciation: "/ˈkwɔrəlɪŋ/",
        korean_pronunciation: "쿼럴링",
        part_of_speech: "명사",
        definition_korean: "말다툼, 언쟁",
        usage_note: "그리스어 λογομαχέω(logomacheo)는 '말'(λόγος) + '싸우다'(μάχομαι)의 합성어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 '이것들'(ταῦτα, 2:11-13의 신앙고백 찬송)을 계속 상기시키라고 명령합니다. 그리고 '말다툼'(λογομαχία)을 경고합니다. 이는 본질이 아닌 단어나 용어를 두고 논쟁하는 것을 의미합니다. 딤전 6:4에서도 같은 경고가 나옵니다: '말다툼과 언쟁으로 병들었으니'(νοσῶν περὶ ζητήσεις καὶ λογομαχίας). 이런 논쟁은 '아무 유익이 없고'(ἐπ᾽ οὐδὲν χρήσιμον), '듣는 자들을 망하게 할 뿐입니다'(ἐπὶ καταστροφῇ τῶν ἀκουόντων). 초대 교회는 영지주의(Gnosticism)와 유대주의 논쟁들로 어려움을 겪었습니다(딤전 1:4; 4:7; 6:20; 딛 3:9).",
      cross_references: ["딤전 6:4 (말다툼과 언쟁으로 병들었으니)", "딛 3:9 (어리석은 변론과 족보 이야기를 버리라)", "고후 10:5 (모든 이론을 무너뜨리며)"]
    },
    korean_translation: {
      natural_translation: "이것들을 그들에게 상기시키라. 하나님 앞에서 말다툼하지 말라고 엄히 경고하라. 이는 아무 유익이 없고 듣는 자들을 망하게 할 뿐이라."
    },
    special_explanation: {
      explanation_type: "말다툼의 위험성",
      content: "λογομαχία(logamachia)는 '말에 대한 싸움'으로, 본질적 교리가 아닌 용어나 표현을 두고 다투는 것입니다. 이는 '아무 유익이 없고'(no value), '듣는 자들을 망하게 할 뿐'입니다(ruins). 초대 교회는 영지주의의 '아이온'(aeon) 개념, 유대주의의 족보 논쟁 등으로 분열되었습니다. 이런 논쟁은 구원의 본질(그리스도의 죽음과 부활)에서 주의를 돌리고 교회를 파괴합니다."
    }
  },
  {
    reference: "2 Timothy 2:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 인정받기를 힘쓰라",
        original_text: "Do your best to present yourself to God as one approved",
        korean_translation: "네가 하나님 앞에 인정받은 일꾼으로 자신을 드리기를 힘쓰라"
      },
      {
        sequence_order: 2,
        semantic_classification: "자격: 부끄러울 것 없는",
        original_text: "a worker who does not need to be ashamed",
        korean_translation: "부끄러울 것이 없는 일꾼으로"
      },
      {
        sequence_order: 3,
        semantic_classification: "방법: 진리를 올바로 분별",
        original_text: "and who correctly handles the word of truth",
        korean_translation: "진리의 말씀을 올바로 분별하는 자로"
      }
    ],
    vocabulary: [
      {
        word: "approved",
        ipa_pronunciation: "/əˈpruvd/",
        korean_pronunciation: "어프루브드",
        part_of_speech: "형용사",
        definition_korean: "인정받은, 승인된",
        usage_note: "그리스어 δόκιμος(dokimos)는 '검증된, 시험을 통과한'이라는 뜻입니다"
      },
      {
        word: "correctly handles",
        ipa_pronunciation: "/kəˈrɛktli ˈhændlz/",
        korean_pronunciation: "커렉틀리 핸들즈",
        part_of_speech: "동사구",
        definition_korean: "올바로 분별하다, 바르게 자르다",
        usage_note: "그리스어 ὀρθοτομέω(orthotomeo)는 '곧게'(ὀρθός) + '자르다'(τέμνω)의 합성어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 목회서신에서 가장 중요한 구절 중 하나입니다. '힘쓰라'(σπούδασον)는 '열심히 노력하라'는 명령형입니다. '인정받은'(δόκιμον)은 금속이나 동전을 검증하는 과정에서 사용되는 용어로, '시험을 통과한, 진품으로 판명된'이라는 뜻입니다(롬 16:10 '그리스도 안에서 인정받은 아벨레를'). '부끄러울 것이 없는 일꾼'(ἀνεπαίσχυντον ἐργάτην)은 자신의 일을 충실히 수행하여 수치를 당하지 않는 사람을 의미합니다. 가장 중요한 부분은 '진리의 말씀을 올바로 분별하는'(ὀρθοτομοῦντα τὸν λόγον τῆς ἀληθείας)입니다. ὀρθοτομέω는 '곧게 자르다'(cutting straight)는 뜻으로, 다음과 같은 해석들이 있습니다: (1) 길을 곧게 내다(잠 3:6; 11:5 LXX), (2) 천을 곧게 자르다(재단사 비유), (3) 성경을 올바로 해석하다. 대부분의 학자들은 세 번째 의미로 봅니다: 성경을 정확하게 해석하고 가르치는 것.",
      cross_references: ["잠 3:6 (그가 네 길을 지도하시리라, LXX에서 ὀρθοτομέω 사용)", "딤전 4:16 (네 자신과 가르침을 살펴)", "행 17:11 (말씀을 받을새 이것이 그러한가 하여 날마다 성경을 상고)"]
    },
    korean_translation: {
      natural_translation: "네가 하나님 앞에 인정받은 일꾼으로, 부끄러울 것이 없는 일꾼으로, 진리의 말씀을 올바로 분별하는 자로 자신을 드리기를 힘쓰라."
    },
    special_explanation: {
      explanation_type: "올바로 분별하다 (ὀρθοτομέω)",
      content: "ὀρθοτομέω(orthotomeo)는 '곧게'(ὀρθός) + '자르다'(τέμνω)의 합성어로, 신약에서 이 구절에만 나타납니다. 칠십인역(LXX)에서는 잠 3:6; 11:5에서 '길을 곧게 하다'는 의미로 사용됩니다. 이 단어의 의미: (1) 길을 곧게 내다(making a straight road), (2) 천을 곧게 자르다(cutting cloth straight, 재단사), (3) 진리를 올바로 나누다(dividing truth correctly). 대부분의 학자들은 세 번째 의미로 해석합니다: 성경을 정확하게 해석하고 가르치는 것. 이는 문맥 해석(context), 문법-역사적 해석(grammatical-historical), 유추 해석(analogy of Scripture) 등 건전한 해석 원리들을 따르는 것을 의미합니다. 잘못된 해석(말다툼, 이단 교리)과 대조됩니다."
    }
  },
  // 2:16-18
  {
    reference: "2 Timothy 2:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 헛된 말을 피하라",
        original_text: "Avoid godless chatter",
        korean_translation: "경건하지 않은 헛된 말을 피하라"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과: 더욱 경건하지 않음으로",
        original_text: "because those who indulge in it will become more and more ungodly",
        korean_translation: "이는 그들이 점점 더 경건하지 않음으로 나아갈 것이기 때문이라"
      }
    ],
    vocabulary: [
      {
        word: "godless chatter",
        ipa_pronunciation: "/ˈɡɑdləs ˈtʃætər/",
        korean_pronunciation: "갓리스 채터",
        part_of_speech: "명사구",
        definition_korean: "경건하지 않은 헛된 말",
        usage_note: "그리스어 βέβηλος κενοφωνία(bebelos kenophonia)는 '세속적인'(βέβηλος) + '빈 소리'(κενοφωνία)입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 '경건하지 않은 헛된 말'(τὰς δὲ βεβήλους κενοφωνίας)을 피하라고 명령합니다. 이는 딤전 6:20에서도 경고되었습니다: '거짓되이 일컫는 지식의 망령되고 허한 말'. βέβηλος는 '세속적인, 속된, 성스럽지 않은'이라는 뜻이고, κενοφωνία는 '빈 소리, 허튼 소리'입니다. 이런 말들은 '점점 더 경건하지 않음으로 나아갑니다'(ἐπὶ πλεῖον προκόψουσιν ἀσεβείας). 영지주의의 철학적 사변, 유대주의의 족보 논쟁 등이 이에 해당합니다.",
      cross_references: ["딤전 6:20 (거짓되이 일컫는 지식의 망령되고 허한 말)", "딛 3:9 (어리석은 변론을 버리라)", "골 2:8 (헛된 속임수로 사로잡힐까)"]
    },
    korean_translation: {
      natural_translation: "경건하지 않은 헛된 말을 피하라. 이는 그들이 점점 더 경건하지 않음으로 나아갈 것이기 때문이라."
    },
    special_explanation: {
      explanation_type: "헛된 말의 누적 효과",
      content: "바울은 거짓 교리가 '점점 더'(ἐπὶ πλεῖον) 나아간다고 경고합니다. 이는 이단의 진행성(progressive nature)을 나타냅니다. 작은 오류가 시간이 지나면서 더 큰 오류로 발전합니다. 역사적으로 영지주의는 처음에는 작은 철학적 사변이었지만, 점차 그리스도의 육체성을 부인하는 이단으로 발전했습니다."
    }
  },
  {
    reference: "2 Timothy 2:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "비유: 썩은 것처럼 퍼짐",
        original_text: "Their teaching will spread like gangrene",
        korean_translation: "그들의 가르침은 썩은 것처럼 퍼질 것이라"
      },
      {
        sequence_order: 2,
        semantic_classification: "실례: 후메내오와 빌레도",
        original_text: "Among them are Hymenaeus and Philetus",
        korean_translation: "그 중에 후메내오와 빌레도가 있으니"
      }
    ],
    vocabulary: [
      {
        word: "gangrene",
        ipa_pronunciation: "/ˈɡæŋɡrin/",
        korean_pronunciation: "갱그린",
        part_of_speech: "명사",
        definition_korean: "괴저, 썩은 상처",
        usage_note: "그리스어 γάγγραινα(gaggraina)는 조직이 썩어 퍼지는 병을 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교리는 '괴저'(γάγγραινα)처럼 퍼집니다. 괴저는 조직이 썩어 죽어가는 병으로, 치료하지 않으면 몸 전체로 퍼져 생명을 위협합니다. 바울은 두 명의 거짓 교사를 지명합니다: (1) 후메내오(Ὑμέναιος): 딤전 1:20에서도 언급되며 '믿음에 관하여 파선한 자'로 묘사됩니다, (2) 빌레도(Φίλητος): 이 구절에만 나타납니다. 이들의 구체적 가르침은 2:18에서 설명됩니다.",
      cross_references: ["딤전 1:20 (그 중에 후메내오와 알렉산더가 있으니)", "고전 5:6 (적은 누룩이 온 덩어리에 퍼지는 줄을 알지 못하느냐)", "갈 5:9 (적은 누룩이 온 덩어리에 퍼지느니라)"]
    },
    korean_translation: {
      natural_translation: "그들의 가르침은 썩은 것처럼 퍼질 것이라. 그 중에 후메내오와 빌레도가 있으니"
    },
    special_explanation: {
      explanation_type: "거짓 교사들의 실명 공개",
      content: "바울은 거짓 교사들의 이름을 공개적으로 언급합니다: 후메내오(딤전 1:20; 딤후 2:17), 빌레도(딤후 2:17), 알렉산더(딤전 1:20; 딤후 4:14). 이는 교회를 보호하기 위한 공개적 경고입니다. 이들은 '믿음에 관하여 파선'(shipwrecked their faith)하고, 교회에 해를 끼치고 있었습니다."
    }
  },
  {
    reference: "2 Timothy 2:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교리: 부활 부인",
        original_text: "who have departed from the truth. They say that the resurrection has already taken place",
        korean_translation: "진리에서 벗어났으니, 부활이 이미 지나갔다고 말하여"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과: 믿음을 무너뜨림",
        original_text: "and they destroy the faith of some",
        korean_translation: "어떤 사람들의 믿음을 무너뜨리느니라"
      }
    ],
    vocabulary: [
      {
        word: "resurrection",
        ipa_pronunciation: "/ˌrɛzəˈrɛkʃən/",
        korean_pronunciation: "레저렉션",
        part_of_speech: "명사",
        definition_korean: "부활",
        usage_note: "그리스어 ἀνάστασις(anastasis)는 '일으켜 세움'이라는 뜻입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "후메내오와 빌레도의 거짓 교리는 '부활이 이미 지나갔다'(τὴν ἀνάστασιν ἤδη γεγονέναι)는 것입니다. 이는 영지주의의 영향을 받은 것으로 보입니다. 영지주의는 육체를 악하게 보고 영적 부활만 인정했습니다. 그들은 부활을 문자적 육체의 부활이 아니라 영적 깨달음이나 세례 시의 경험으로 재해석했습니다(골 2:12 '세례로 그와 함께 장사되었고 그 안에서 또한 일으킴을 받았느니라'를 오해). 이는 '어떤 사람들의 믿음을 무너뜨렸습니다'(ἀνατρέπουσιν τήν τινων πίστιν). 고전 15:12-19에서 바울은 부활 부인의 심각성을 설명합니다: '부활이 없으면 우리의 전파하는 것도 헛것이요 또 너희 믿음도 헛것이며'(고전 15:14).",
      cross_references: ["고전 15:12-19 (부활이 없으면 우리의 믿음도 헛것)", "골 2:12 (세례로 그와 함께 장사되었고)", "살후 2:2 (주의 날이 이미 이르렀다고 말하는 자)"]
    },
    korean_translation: {
      natural_translation: "진리에서 벗어났으니, 부활이 이미 지나갔다고 말하여 어떤 사람들의 믿음을 무너뜨리느니라."
    },
    special_explanation: {
      explanation_type: "부활 부인 이단",
      content: "후메내오와 빌레도는 '부활이 이미 지나갔다'(the resurrection has already happened)고 주장했습니다. 이는 육체의 미래 부활을 부인하고, 부활을 영적 경험(세례, 깨달음)으로 재해석한 것입니다. 영지주의는 육체를 악하게 보았기 때문에 육체의 부활을 거부했습니다. 이는 기독교의 핵심 교리(그리스도의 육체 부활, 믿는 자의 미래 부활)를 파괴하는 것입니다. 고전 15:12-19에서 바울은 부활 없이는 복음 전체가 무너진다고 경고합니다."
    }
  },
  // 2:19-21
  {
    reference: "2 Timothy 2:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "확신: 하나님의 터",
        original_text: "Nevertheless, God's solid foundation stands firm",
        korean_translation: "그럼에도 불구하고, 하나님의 견고한 터는 섰으니"
      },
      {
        sequence_order: 2,
        semantic_classification: "인침 1: 주께서 아심",
        original_text: "sealed with this inscription: 'The Lord knows those who are his'",
        korean_translation: "이런 인침이 있으되 '주께서 자기 백성을 아신다'"
      },
      {
        sequence_order: 3,
        semantic_classification: "인침 2: 불의에서 떠남",
        original_text: "and, 'Everyone who confesses the name of the Lord must turn away from wickedness'",
        korean_translation: "또 '주의 이름을 부르는 자마다 불의에서 떠날지어다'"
      }
    ],
    vocabulary: [
      {
        word: "foundation",
        ipa_pronunciation: "/faʊnˈdeɪʃən/",
        korean_pronunciation: "파운데이션",
        part_of_speech: "명사",
        definition_korean: "터, 기초",
        usage_note: "그리스어 θεμέλιος(themelios)는 건물의 기초를 의미합니다"
      },
      {
        word: "sealed",
        ipa_pronunciation: "/sild/",
        korean_pronunciation: "실드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "인침을 받은, 봉인된",
        usage_note: "그리스어 σφραγίς(sphragis)는 공식 인장이나 도장을 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들의 활동에도 불구하고, '하나님의 견고한 터는 섰습니다'(ὁ μέντοι στερεὸς θεμέλιος τοῦ θεοῦ ἕστηκεν). 이는 하나님의 선택과 보존의 확실성을 나타냅니다. 이 터는 두 가지 '인침'(σφραγῖδα)을 가지고 있습니다: (1) '주께서 자기 백성을 아신다'(Ἔγνω κύριος τοὺς ὄντας αὐτοῦ): 민 16:5 LXX에서 고라의 반역 때 하나님이 '자기 사람들을 아신다'고 말씀하신 것을 인용합니다. 이는 하나님의 선택과 주권을 나타냅니다(요 10:14 '나는 내 양을 알고'). (2) '주의 이름을 부르는 자마다 불의에서 떠날지어다'(Ἀποστήτω ἀπὸ ἀδικίας πᾶς ὁ ὀνομάζων τὸ ὄνομα κυρίου): 이는 민 16:26을 암시하며, 진정한 믿음은 거룩한 삶으로 증명된다는 뜻입니다. 두 인침은 하나님의 주권(선택)과 인간의 책임(성화)을 함께 나타냅니다.",
      cross_references: ["민 16:5 (여호와께서 자기에게 속한 자가 누구인지... 아시나니)", "요 10:14 (나는 선한 목자라 내가 내 양을 알고)", "마 7:23 (내가 너희를 도무지 알지 못하니)"]
    },
    korean_translation: {
      natural_translation: "그럼에도 불구하고, 하나님의 견고한 터는 섰으니, 이런 인침이 있으되 '주께서 자기 백성을 아신다' 또 '주의 이름을 부르는 자마다 불의에서 떠날지어다'"
    },
    special_explanation: {
      explanation_type: "두 개의 인침: 선택과 성화",
      content: "하나님의 터는 두 개의 '인침'(σφραγίς, seal/inscription)을 가지고 있습니다: (1) '주께서 자기 백성을 아신다': 하나님의 선택(Divine Election). 민 16:5 고라의 반역 때 하나님이 '자기 사람들을 아신다'고 하신 말씀. 요 10:14 '나는 내 양을 알고'. 이는 하나님의 주권과 성도의 견인을 나타냅니다. (2) '주의 이름을 부르는 자마다 불의에서 떠날지어다': 신자의 성화(Sanctification). 진정한 믿음은 거룩한 삶으로 증명됩니다. 이 두 인침은 개혁주의 신학의 균형을 보여줍니다: 하나님의 주권(선택)과 인간의 책임(순종)."
    }
  },
  // 나머지 구절들도 같은 패턴으로...
  {
    reference: "2 Timothy 2:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "비유: 큰 집의 그릇들",
        original_text: "In a large house there are articles not only of gold and silver, but also of wood and clay",
        korean_translation: "큰 집에는 금 그릇과 은 그릇뿐 아니라 나무 그릇과 질그릇도 있어"
      },
      {
        sequence_order: 2,
        semantic_classification: "용도 구분",
        original_text: "some are for special purposes and some for common use",
        korean_translation: "어떤 것은 귀히 쓰는 데 있고 어떤 것은 천히 쓰는 데 있느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 교회를 '큰 집'(μεγάλῃ οἰκίᾳ)으로 비유하고, 교회 구성원들을 여러 종류의 '그릇'(σκεύη)으로 비유합니다. 금/은 그릇은 귀한 용도, 나무/질그릇은 일상 용도를 가리킵니다. 이는 롬 9:21-23의 도공과 그릇 비유와 연결됩니다.",
      cross_references: ["롬 9:21-23 (토기장이가 진흙 한 덩이로... 귀히 쓸 그릇과 천히 쓸 그릇)"]
    },
    korean_translation: {
      natural_translation: "큰 집에는 금 그릇과 은 그릇뿐 아니라 나무 그릇과 질그릇도 있어, 어떤 것은 귀히 쓰는 데 있고 어떤 것은 천히 쓰는 데 있느니라."
    },
    special_explanation: {
      explanation_type: "그릇 비유",
      content: "교회 안에는 다양한 '그릇들'이 있습니다: 금/은(귀한 용도), 나무/질(일상 용도). 이는 교회 구성원들의 다양성과 충성도의 차이를 나타냅니다. 다음 구절(2:21)에서 자기 자신을 깨끗케 하는 사람이 귀히 쓰임 받는 그릇이 된다고 설명합니다."
    }
  },
  {
    reference: "2 Timothy 2:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건: 자신을 깨끗케 함",
        original_text: "Those who cleanse themselves from the latter will be instruments for special purposes",
        korean_translation: "그러므로 누구든지 이런 것에서 자기를 깨끗하게 하면 귀히 쓰는 그릇이 되어"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과: 거룩하고 유익함",
        original_text: "made holy, useful to the Master and prepared to do any good work",
        korean_translation: "거룩하고 주인의 쓰심에 합당하며 모든 선한 일에 준비된 자가 되리라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'이런 것에서'(ἀπὸ τούτων)는 거짓 교사들이나 불의를 가리킵니다. 자기를 깨끗하게 하는 사람은 (1) 거룩하고(ἡγιασμένον), (2) 주인께 유익하며(εὔχρηστον τῷ δεσπότῃ), (3) 모든 선한 일에 준비된(εἰς πᾶν ἔργον ἀγαθὸν ἡτοιμασμένον) 그릇이 됩니다.",
      cross_references: ["엡 2:10 (그의 만드신 바라 그리스도 예수 안에서 선한 일을 위하여 지으심을 받은 자)"]
    },
    korean_translation: {
      natural_translation: "그러므로 누구든지 이런 것에서 자기를 깨끗하게 하면 귀히 쓰는 그릇이 되어, 거룩하고 주인의 쓰심에 합당하며 모든 선한 일에 준비된 자가 되리라."
    },
    special_explanation: {
      explanation_type: "성화와 유용성",
      content: "자기를 깨끗하게 하는 것은 성화(sanctification)의 과정입니다. 이는 거짓 교리와 불의에서 분리되는 것을 의미합니다. 그 결과는 하나님께 유용한 그릇이 되는 것입니다: 거룩하고, 주인께 쓸모 있고, 선한 일에 준비된 상태."
    }
  },
  // 2:22-26
  {
    reference: "2 Timothy 2:22",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 피하라",
        original_text: "Flee the evil desires of youth",
        korean_translation: "청년의 정욕을 피하고"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령: 추구하라",
        original_text: "and pursue righteousness, faith, love and peace",
        korean_translation: "의와 믿음과 사랑과 화평을 추구하라"
      },
      {
        sequence_order: 3,
        semantic_classification: "조건: 깨끗한 마음으로 주를 부르는 자들",
        original_text: "along with those who call on the Lord out of a pure heart",
        korean_translation: "깨끗한 마음으로 주를 부르는 자들과 함께"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "디모데는 젊었기 때문에(딤전 4:12 '누구든지 네 연소함을 업신여기지 못하게 하라'), 바울은 '청년의 정욕'(νεωτερικὰς ἐπιθυμίας)을 경계하라고 합니다. 이는 성적 욕망뿐 아니라 야망, 논쟁적 태도, 조급함 등을 포함할 수 있습니다. 대신 네 가지 덕목을 추구하라고 합니다: 의, 믿음, 사랑, 화평. 이는 '깨끗한 마음으로 주를 부르는 자들과 함께' 추구해야 합니다 - 고립이 아니라 공동체 안에서.",
      cross_references: ["딤전 4:12 (누구든지 네 연소함을 업신여기지 못하게 하라)", "딤전 6:11 (오직 너 하나님의 사람아 이것들을 피하고 의와 경건과 믿음과 사랑과 인내와 온유를 따르며)"]
    },
    korean_translation: {
      natural_translation: "청년의 정욕을 피하고 의와 믿음과 사랑과 화평을 추구하라. 깨끗한 마음으로 주를 부르는 자들과 함께."
    },
    special_explanation: {
      explanation_type: "청년 사역자의 경계와 추구",
      content: "디모데는 젊은 사역자였습니다(딤전 4:12). 바울은 '청년의 정욕'을 경계하라고 합니다. 이는 성적 욕망뿐 아니라 야망, 논쟁적 태도, 조급함, 명예욕 등을 포함할 수 있습니다. 대신 네 가지를 추구하라고 합니다: (1) 의(δικαιοσύνη), (2) 믿음(πίστις), (3) 사랑(ἀγάπη), (4) 화평(εἰρήνη). 이는 공동체 안에서('함께') 추구해야 합니다."
    }
  },
  {
    reference: "2 Timothy 2:23",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 어리석은 논쟁 버리라",
        original_text: "Don't have anything to do with foolish and stupid arguments",
        korean_translation: "어리석고 무식한 변론을 버리라"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유: 다툼만 일으킴",
        original_text: "because you know they produce quarrels",
        korean_translation: "이는 다툼을 일으킬 뿐임을 네가 알거니와"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'어리석고 무식한 변론'(μωρὰς καὶ ἀπαιδεύτους ζητήσεις)은 교훈이 없고 무익한 논쟁들을 가리킵니다. 이는 2:14의 '말다툼'(λογομαχία)과 연결됩니다. 이런 논쟁들은 '다툼을 일으킬 뿐'(γεννῶσιν μάχας)입니다.",
      cross_references: ["딛 3:9 (어리석은 변론과 족보 이야기를 버리라)"]
    },
    korean_translation: {
      natural_translation: "어리석고 무식한 변론을 버리라. 이는 다툼을 일으킬 뿐임을 네가 알거니와"
    },
    special_explanation: {
      explanation_type: "무익한 논쟁 회피",
      content: "'어리석고 무식한 변론'(foolish and stupid arguments)은 영지주의의 철학적 사변, 유대주의의 족보 논쟁, 용어 다툼 등을 가리킵니다. 이런 논쟁은 교회에 유익이 없고 다툼만 일으킵니다. 사역자는 이런 논쟁을 피해야 합니다."
    }
  },
  {
    reference: "2 Timothy 2:24",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주의 종의 자격 1",
        original_text: "And the Lord's servant must not be quarrelsome but must be kind to everyone",
        korean_translation: "주의 종은 다투지 아니하고 모든 사람에게 온유하며"
      },
      {
        sequence_order: 2,
        semantic_classification: "주의 종의 자격 2-3",
        original_text: "able to teach, not resentful",
        korean_translation: "가르치기를 잘하며 참을성이 있어야 하고"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 '주의 종'(δοῦλον κυρίου)의 자격을 제시합니다: (1) 다투지 않음(οὐ δεῖ μάχεσθαι), (2) 모든 사람에게 온유함(ἤπιον εἶναι πρὸς πάντας), (3) 가르치기를 잘함(διδακτικόν), (4) 참을성(ἀνεξίκακον, '악을 견디는'). 이는 딤전 3:2-3의 감독 자격(온유, 다투지 않는)과 연결됩니다.",
      cross_references: ["딤전 3:2-3 (감독은... 온유하며 다투지 아니하며)", "갈 5:22-23 (성령의 열매는... 오래 참음과 자비와 양선과 충성)"]
    },
    korean_translation: {
      natural_translation: "주의 종은 다투지 아니하고 모든 사람에게 온유하며 가르치기를 잘하며 참을성이 있어야 하고"
    },
    special_explanation: {
      explanation_type: "주의 종의 4가지 자격",
      content: "바울은 주의 종(사역자)의 네 가지 자격을 제시합니다: (1) 다투지 않음(not quarrelsome): 논쟁적이지 않고, (2) 온유함(kind): 모든 사람에게 부드럽고, (3) 가르치기를 잘함(able to teach): 교수 능력, (4) 참을성(not resentful): 악을 견디는 능력. 이는 목회 사역의 핵심 자질들입니다."
    }
  },
  {
    reference: "2 Timothy 2:25",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "방법: 온유하게 훈계",
        original_text: "Opponents must be gently instructed",
        korean_translation: "대적하는 자들을 온유함으로 훈계할지니"
      },
      {
        sequence_order: 2,
        semantic_classification: "소망: 회개와 진리 깨달음",
        original_text: "in the hope that God will grant them repentance leading them to a knowledge of the truth",
        korean_translation: "혹 하나님이 그들에게 회개함을 주사 진리를 알게 하실까 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'대적하는 자들'(τοὺς ἀντιδιατιθεμένους)은 거짓 교사들이나 믿음에서 벗어난 자들을 가리킵니다. 이들을 '온유함으로 훈계'(ἐν πραΰτητι παιδεύοντα)해야 합니다. 목적은 '하나님이 그들에게 회개함을 주사 진리를 알게 하실까' 함입니다. 여기서 중요한 것은 회개(μετάνοια)도 하나님께서 주시는 것(δῴη ὁ θεός)이라는 점입니다. 이는 행 11:18 '하나님께서 이방인에게도 생명 얻는 회개를 주셨도다'와 같은 원리입니다.",
      cross_references: ["행 11:18 (하나님께서 이방인에게도 생명 얻는 회개를 주셨도다)", "행 5:31 (이스라엘에게 회개함과 죄 사함을 주시려고)", "갈 6:1 (온유한 심령으로 그러한 자를 바로잡으라)"]
    },
    korean_translation: {
      natural_translation: "대적하는 자들을 온유함으로 훈계할지니, 혹 하나님이 그들에게 회개함을 주사 진리를 알게 하실까 함이라."
    },
    special_explanation: {
      explanation_type: "회개는 하나님의 선물",
      content: "이 구절은 중요한 신학적 진리를 담고 있습니다: 회개(μετάνοια)도 하나님께서 주시는 것(δῴη ὁ θεός)입니다. 인간은 스스로 회개할 수 없고, 하나님이 회개할 마음을 주셔야 합니다(행 11:18 '하나님께서 이방인에게도 생명 얻는 회개를 주셨도다', 행 5:31 '이스라엘에게 회개함과 죄 사함을 주시려고'). 따라서 사역자는 온유함으로 가르치되, 결과는 하나님께 맡겨야 합니다."
    }
  },
  {
    reference: "2 Timothy 2:26",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "목적: 마귀의 올무에서 벗어남",
        original_text: "and that they will come to their senses and escape from the trap of the devil",
        korean_translation: "그들이 깨어 마귀의 올무에서 벗어나"
      },
      {
        sequence_order: 2,
        semantic_classification: "현재 상태: 마귀에게 사로잡힘",
        original_text: "who has taken them captive to do his will",
        korean_translation: "마귀의 뜻을 따르도록 사로잡힌 데서 벗어날까 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들과 속은 자들은 '마귀의 올무'(τῆς τοῦ διαβόλου παγίδος)에 걸려 있고, '마귀의 뜻을 따르도록 사로잡혔습니다'(ἐζωγρημένοι ὑπ᾽ αὐτοῦ εἰς τὸ ἐκείνου θέλημα). ἐζωγρημένοι는 '생포된, 사로잡힌'이라는 뜻입니다. 바울의 소망은 그들이 '깨어'(ἀνανήψωσιν, '술에서 깨다, 정신을 차리다') 마귀의 지배에서 벗어나는 것입니다. 이는 딤전 3:7의 '마귀의 올무'와 연결됩니다.",
      cross_references: ["딤전 3:7 (마귀의 올무에 빠질까 함이라)", "엡 6:12 (우리의 씨름은 혈과 육을 상대하는 것이 아니요... 악의 영들을 상대함이라)", "고후 2:11 (사탄에게 속지 않게 하려 함이라)"]
    },
    korean_translation: {
      natural_translation: "그들이 깨어 마귀의 올무에서 벗어나, 마귀의 뜻을 따르도록 사로잡힌 데서 벗어날까 함이라."
    },
    special_explanation: {
      explanation_type: "마귀의 올무와 사로잡힘",
      content: "거짓 교리에 속은 자들은 '마귀의 올무'(devil's trap)에 걸려 있고, '마귀의 뜻을 따르도록 사로잡혔습니다'(taken captive to do his will). ἐζωγρημένοι는 전쟁 포로를 '생포하다'는 의미로, 마귀에게 완전히 지배당하는 상태를 나타냅니다. 사역자의 온유한 훈계는 그들이 '깨어'(ἀνανήψωσιν, sober up, come to their senses) 마귀의 지배에서 벗어나도록 돕는 것입니다."
    }
  }
]

async function main() {
  console.log('=== 2 Timothy 2:14-26 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${analyses.length}`)
}

main()
