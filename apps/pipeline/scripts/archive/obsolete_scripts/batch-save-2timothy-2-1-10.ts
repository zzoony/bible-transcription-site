import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Timothy 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "호칭과 명령",
        original_text: "You then, my son, be strong in the grace that is in Christ Jesus",
        korean_translation: "그러므로 내 아들아, 그리스도 예수 안에 있는 은혜 안에서 강건하여라",
        grammatical_explanation: "명령문 - '그러므로'(οὖν)는 1장의 권면에서 이어지며, '강건하여라'(ἐνδυναμοῦ)는 현재 수동 명령형으로 '힘을 받으라, 능력을 얻으라'는 의미입니다"
      }
    ],
    vocabulary: [
      {
        word: "strong",
        ipa_pronunciation: "/strɔŋ/",
        korean_pronunciation: "스트롱",
        part_of_speech: "형용사",
        definition_korean: "강한, 강건한",
        usage_note: "그리스어 ἐνδυναμοῦ(endunamou)는 '안에서 힘을 받다'는 의미의 수동태로, 은혜가 디모데를 강하게 만듭니다"
      },
      {
        word: "grace",
        ipa_pronunciation: "/ɡreɪs/",
        korean_pronunciation: "그레이스",
        part_of_speech: "명사",
        definition_korean: "은혜, 하나님의 무상의 호의",
        usage_note: "χάρις(charis) - 바울은 디모데에게 인간의 노력이 아니라 그리스도 안에 있는 은혜에서 힘을 얻으라고 합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 1장의 권면(고난을 두려워하지 말라, 믿음을 지키라)에서 이어서 '그러므로'(οὖν)로 2장을 시작합니다. '내 아들아'(τέκνον μου)는 바울과 디모데의 친밀한 영적 부자 관계를 나타냅니다(딤전 1:2, 18; 딤후 1:2). 핵심은 '그리스도 예수 안에 있는 은혜 안에서'(ἐν τῇ χάριτι τῇ ἐν Χριστῷ Ἰησοῦ) 강건하라는 명령입니다. 디모데의 힘은 자신에게서 나오는 것이 아니라 그리스도 안에 있는 은혜에서 나옵니다. 이는 바울 신학의 핵심인 '은혜로만'(sola gratia)을 반영합니다.",
      cross_references: ["엡 6:10 (주 안에서와 그 힘의 능력으로 강건하여지고)", "빌 4:13 (내게 능력 주시는 자 안에서)"]
    },
    korean_translation: {
      natural_translation: "그러므로 내 아들아, 그리스도 예수 안에 있는 은혜 안에서 강건하여라.",
      translation_notes: "수동 명령형을 능동형처럼 번역하되, '은혜가 너를 강하게 만들도록 하라'는 의미를 담습니다"
    },
    special_explanation: {
      explanation_type: "은혜 안에서의 능력",
      content: "그리스어 ἐνδυναμοῦ(endunamou)는 '강건하여라'가 아니라 '힘을 받으라'(be empowered)는 수동태 명령형입니다. 디모데는 스스로 강해지는 것이 아니라, 그리스도 안에 있는 은혜로부터 힘을 공급받습니다. 이는 사역자의 능력이 인간의 노력이나 자질이 아니라 하나님의 은혜에서 나온다는 것을 강조합니다. 엡 6:10 '주 안에서와 그 힘의 능력으로 강건하여지고'와 같은 구조입니다.",
      examples: ["엡 6:10 - 주 안에서 강건하여지고", "빌 4:13 - 내게 능력 주시는 자 안에서", "행 9:22 - 사울이 더욱 힘을 얻어(ἐνεδυναμοῦτο)"]
    }
  },
  {
    reference: "2 Timothy 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "전승의 원리",
        original_text: "And the things you have heard me say in the presence of many witnesses entrust to reliable people",
        korean_translation: "그리고 네가 많은 증인 앞에서 내게 들은 것들을 신실한 사람들에게 맡기라",
        grammatical_explanation: "명령문 - '맡기라'(παράθου)는 부탁하라, 위임하라는 의미의 명령형입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "전승의 목적",
        original_text: "who will also be qualified to teach others",
        korean_translation: "그들이 또한 다른 사람들을 가르칠 자격이 있는 사람들이어야 합니다",
        grammatical_explanation: "관계절 - '자격이 있는'(ἱκανοὶ ἔσονται)은 '적합할 것이다, 능력이 있을 것이다'는 미래형입니다"
      }
    ],
    vocabulary: [
      {
        word: "entrust",
        ipa_pronunciation: "/ɪnˈtrʌst/",
        korean_pronunciation: "인트러스트",
        part_of_speech: "동사",
        definition_korean: "맡기다, 위임하다, 부탁하다",
        usage_note: "그리스어 παράθου(parathou)는 '신뢰하여 넘겨주다'는 의미로, 딤전 6:20; 딤후 1:12, 14에서 '믿음의 유산'을 지키라는 맥락에서 사용됩니다"
      },
      {
        word: "reliable",
        ipa_pronunciation: "/rɪˈlaɪəbl/",
        korean_pronunciation: "릴라이어블",
        part_of_speech: "형용사",
        definition_korean: "신실한, 믿을 수 있는, 충성된",
        usage_note: "그리스어 πιστοῖς(pistois)는 '신실한, 믿음직한' 사람들을 의미합니다"
      },
      {
        word: "qualified",
        ipa_pronunciation: "/ˈkwɑːlɪfaɪd/",
        korean_pronunciation: "콸리파이드",
        part_of_speech: "형용사",
        definition_korean: "자격이 있는, 적합한, 유능한",
        usage_note: "그리스어 ἱκανοί(hikanoi)는 '능력 있는, 적합한, 충분한'이라는 뜻입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 사도적 전승(apostolic succession)의 원리를 담고 있습니다. 4세대의 연쇄가 나타납니다: (1) 바울 → (2) 디모데(많은 증인 앞에서 들음) → (3) 신실한 사람들(πιστοῖς ἀνθρώποις) → (4) 다른 사람들(ἑτέρους). '많은 증인 앞에서'(διὰ πολλῶν μαρτύρων)는 디모데가 받은 가르침이 공적이고 검증된 것임을 나타냅니다. '신실한 사람들'은 두 가지 자격을 갖추어야 합니다: (1) πιστοί(신실함, 충성됨), (2) ἱκανοί(가르칠 능력). 이는 초대 교회의 교사 자격 요건을 반영합니다(딤전 3:2; 딛 1:9). 이 전승 구조는 복음이 개인의 해석이 아니라 사도로부터 충실히 전수되어야 함을 강조합니다.",
      cross_references: ["딤전 6:20 (네게 부탁한 것을 지키라)", "딛 1:9 (미쁜 말씀의 가르침을 그대로 지켜)", "유 1:3 (한 번 성도에게 주신 믿음의 도를 위하여)"]
    },
    korean_translation: {
      natural_translation: "그리고 네가 많은 증인 앞에서 내게 들은 것들을 신실한 사람들에게 맡기라. 그들은 또한 다른 사람들을 가르칠 자격이 있는 사람들이어야 합니다.",
      translation_notes: "4세대 전승 구조를 명확히 드러내는 번역"
    },
    special_explanation: {
      explanation_type: "사도적 전승의 4세대",
      content: "이 구절은 복음 전승의 명확한 구조를 제시합니다: 바울(1세대) → 디모데(2세대) → 신실한 사람들(3세대) → 다른 사람들(4세대). 이는 초대 교회가 사도의 가르침을 어떻게 보존하고 전수했는지를 보여줍니다. '많은 증인 앞에서'는 가르침의 공개성과 검증 가능성을 나타냅니다. '신실한'(πιστοῖς)과 '자격이 있는'(ἱκανοί)이라는 두 요건은 교사가 품성(충성)과 능력(교수 역량) 모두를 갖추어야 함을 의미합니다.",
      examples: ["딤전 3:2 - 가르치기를 잘하며", "딛 1:9 - 바른 교훈으로 권면하고 거슬러 말하는 자들을 책망할 수 있는", "고전 4:17 - 그리스도 예수 안에서 나의 사랑하고 신실한 아들 디모데"]
    }
  },
  {
    reference: "2 Timothy 2:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 고난 동참",
        original_text: "Join with me in suffering, like a good soldier of Christ Jesus",
        korean_translation: "그리스도 예수의 좋은 군사처럼 나와 함께 고난을 받으라",
        grammatical_explanation: "명령문 - '고난을 받으라'(συγκακοπάθησον)는 '함께 고난받다'는 합성어 명령형입니다"
      }
    ],
    vocabulary: [
      {
        word: "suffer",
        ipa_pronunciation: "/ˈsʌfər/",
        korean_pronunciation: "서퍼",
        part_of_speech: "동사",
        definition_korean: "고난받다, 고통받다",
        usage_note: "그리스어 συγκακοπαθέω(sunkakopatheo)는 '함께'(σύν) + '고난받다'(κακοπαθέω)의 합성어입니다"
      },
      {
        word: "soldier",
        ipa_pronunciation: "/ˈsoʊldʒər/",
        korean_pronunciation: "솔저",
        part_of_speech: "명사",
        definition_korean: "군인, 군사, 병사",
        usage_note: "그리스어 στρατιώτης(stratiotes)는 전문 직업 군인을 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 세 가지 비유(군사 2:3-4, 운동선수 2:5, 농부 2:6)를 사용하여 사역의 본질을 설명합니다. 첫 번째 비유는 '그리스도 예수의 좋은 군사'(καλὸς στρατιώτης Χριστοῦ Ἰησοῦ)입니다. '함께 고난받으라'(συγκακοπάθησον)는 딤후 1:8에서 이미 언급되었습니다('나와 함께 복음을 위하여 고난을 받으라'). 군사 비유는 로마 제국의 직업 군인 제도를 배경으로 합니다. 로마 군인은 엄격한 훈련, 절대적 복종, 단일 목표(승리)에 집중하는 것으로 유명했습니다. '좋은 군사'(καλὸς στρατιώτης)는 충성되고 용감하며 헌신적인 군인을 의미합니다.",
      cross_references: ["딤후 1:8 (나와 함께 복음을 위하여 고난을 받으라)", "딤전 1:18 (선한 싸움을 싸우며)", "고전 9:7 (누가 자기 비용으로 병정 노릇 하느냐)"]
    },
    korean_translation: {
      natural_translation: "그리스도 예수의 좋은 군사처럼 나와 함께 고난을 받으라.",
      translation_notes: "군사 비유의 핵심은 고난 동참과 헌신입니다"
    },
    special_explanation: {
      explanation_type: "세 가지 비유의 시작: 군사",
      content: "바울은 2:3-6에서 세 가지 비유를 사용합니다: (1) 군사(2:3-4): 헌신과 고난, (2) 운동선수(2:5): 규칙 준수, (3) 농부(2:6): 수고와 보상. 군사 비유는 사역자의 고난과 헌신을 강조합니다. 로마 군인은 25년간 복무하며 결혼도 금지되었고, 오직 군대에만 집중했습니다. 이는 사역자가 세상 일에 얽매이지 않고 복음에 집중해야 함을 나타냅니다.",
      examples: ["엡 6:11-17 - 하나님의 전신갑주를 입으라", "빌 2:25 - 에바브로디도를 나의 형제요 함께 수고하고 함께 군사 된 자", "몬 1:2 - 우리와 함께 군사 된 아킵보"]
    }
  },
  {
    reference: "2 Timothy 2:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "군사 비유의 원리",
        original_text: "No one serving as a soldier gets entangled in civilian affairs",
        korean_translation: "군사로 복무하는 자는 아무도 세상 일에 얽매이지 않습니다",
        grammatical_explanation: "부정문 - '얽매이다'(ἐμπλέκεται)는 '엉키다, 복잡하게 되다'는 뜻입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적",
        original_text: "but rather tries to please his commanding officer",
        korean_translation: "오히려 자기를 군사로 모집한 자를 기쁘게 하려고 합니다",
        grammatical_explanation: "대조 - '기쁘게 하다'(ἀρέσῃ)는 만족시키다, 승인받다는 의미입니다"
      }
    ],
    vocabulary: [
      {
        word: "entangled",
        ipa_pronunciation: "/ɪnˈtæŋɡld/",
        korean_pronunciation: "인탱글드",
        part_of_speech: "형용사",
        definition_korean: "얽힌, 복잡하게 된",
        usage_note: "그리스어 ἐμπλέκεται(empleketai)는 '엉키다, 관여하다'는 뜻으로, 벧후 2:20에서 '세상의 더러움에 얽매이다'라는 부정적 의미로 사용됩니다"
      },
      {
        word: "civilian affairs",
        ipa_pronunciation: "/səˈvɪliən əˈfɛrz/",
        korean_pronunciation: "시빌리언 어페어즈",
        part_of_speech: "명사구",
        definition_korean: "세상 일, 민간인의 사무",
        usage_note: "그리스어 βιωτικαῖς πραγματείαις(biotikais pragmateiais)는 '일상 생활의 업무들'을 의미합니다"
      },
      {
        word: "commanding officer",
        ipa_pronunciation: "/kəˈmændɪŋ ˈɔfɪsər/",
        korean_pronunciation: "커맨딩 오피서",
        part_of_speech: "명사구",
        definition_korean: "모집한 자, 지휘관",
        usage_note: "그리스어 στρατολογήσαντι(stratologesanti)는 '군사로 모집한 자'라는 분사형입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "로마 제국의 직업 군인 제도를 배경으로 합니다. 로마 군인은 25년간 복무하며 결혼이 금지되었고, 상업 활동이나 민간 업무에 관여할 수 없었습니다. 이는 군대에 완전히 집중하기 위함이었습니다. '세상 일'(βιωτικαῖς πραγματείαις)은 일상적인 생활의 업무들을 의미하며, 사역자가 복음 전파와 양육에 집중하지 못하게 방해하는 모든 것을 가리킵니다. '모집한 자'(στρατολογήσαντι)는 그리스도를 가리키며, 사역자는 인간이 아니라 그리스도를 기쁘게 해야 합니다. 이는 갈 1:10 '내가 사람들을 기쁘게 하랴 하나님을 기쁘게 하랴'와 같은 원리입니다.",
      cross_references: ["갈 1:10 (사람들을 기쁘게 하랴 하나님을 기쁘게 하랴)", "고전 7:32-33 (장가 가지 않은 자는 주의 일을 염려하여)", "눅 14:18-20 (밭과 소와 장가를 핑계로 거절함)"]
    },
    korean_translation: {
      natural_translation: "군사로 복무하는 자는 아무도 세상 일에 얽매이지 않습니다. 오히려 자기를 군사로 모집한 자를 기쁘게 하려고 합니다.",
      translation_notes: "군사의 단일 목표: 지휘관을 기쁘게 하는 것"
    },
    special_explanation: {
      explanation_type: "로마 군인 제도와 사역자의 집중",
      content: "로마 군인은 가장 전문화되고 효율적인 군대였습니다. 군인은 25년간 복무하며 결혼이 금지되었고(세베루스 황제 이전), 상업 활동이나 민간 업무에 관여할 수 없었습니다. 이는 전투와 훈련에 완전히 집중하기 위함이었습니다. 바울은 이 제도를 사역자의 모델로 제시합니다. 사역자는 '세상 일'(일상 생활의 업무, 상업적 이익, 세속적 명예)에 얽매이지 않고, 오직 그리스도(모집한 자)를 기쁘게 하는 데 집중해야 합니다. 이는 전임 사역자의 성경적 근거 중 하나입니다(고전 9:14).",
      examples: ["고전 9:14 - 주께서도 복음 전하는 자들이 복음으로 말미암아 살리라 명하셨느니라", "갈 1:10 - 이제 내가 사람들에게 좋게 하랴 하나님께 좋게 하랴", "살전 2:4 - 사람을 기쁘게 하려 함이 아니요 오직 우리 마음을 감찰하시는 하나님을 기쁘게 하려 함이라"]
    }
  },
  {
    reference: "2 Timothy 2:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "운동선수 비유",
        original_text: "Similarly, anyone who competes as an athlete does not receive the victor's crown",
        korean_translation: "마찬가지로, 운동선수로 경기하는 자는 승리자의 면류관을 받지 못합니다",
        grammatical_explanation: "조건문 - '받지 못한다'는 부정문입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "조건",
        original_text: "except by competing according to the rules",
        korean_translation: "규칙대로 경기하지 않으면",
        grammatical_explanation: "조건절 - '규칙대로'(νομίμως)는 '합법적으로, 정당하게'라는 뜻입니다"
      }
    ],
    vocabulary: [
      {
        word: "athlete",
        ipa_pronunciation: "/ˈæθliːt/",
        korean_pronunciation: "애슬리트",
        part_of_speech: "명사",
        definition_korean: "운동선수, 경기자",
        usage_note: "그리스어 ἀθλέω(athleo)는 '경기하다, 경쟁하다'는 동사입니다"
      },
      {
        word: "victor's crown",
        ipa_pronunciation: "/ˈvɪktərz kraʊn/",
        korean_pronunciation: "빅터즈 크라운",
        part_of_speech: "명사구",
        definition_korean: "승리자의 면류관, 월계관",
        usage_note: "그리스어 στεφανοῦται(stephanoutai)는 '면류관을 받다'는 수동태입니다. 그리스-로마 경기의 상징적 보상입니다"
      },
      {
        word: "according to the rules",
        ipa_pronunciation: "/əˈkɔrdɪŋ tu ðə rulz/",
        korean_pronunciation: "어코딩 투 더 룰즈",
        part_of_speech: "전치사구",
        definition_korean: "규칙대로, 합법적으로",
        usage_note: "그리스어 νομίμως(nomimos)는 '합법적으로, 정당하게, 규칙에 따라'라는 부사입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 두 번째 비유는 그리스-로마 세계의 운동 경기입니다. 올림픽, 이스트미안 게임, 네메안 게임 등 대규모 경기들이 있었고, 승자는 '스테파노스'(στέφανος, 면류관)를 받았습니다. 이는 금관이 아니라 월계수, 올리브, 파슬리 등으로 만든 화환이었지만, 명예와 영광의 상징이었습니다. '규칙대로'(νομίμως)는 그리스 경기의 엄격한 규정을 가리킵니다: (1) 자격 요건(그리스 시민권), (2) 10개월 훈련 의무, (3) 경기 중 규칙 준수, (4) 부정행위 금지. 규칙을 어기면 실격(disqualified)되어 면류관을 받을 수 없었습니다. 바울은 이를 사역자의 성실성과 정직성에 적용합니다. 고전 9:24-27에서도 같은 비유를 사용합니다.",
      cross_references: ["고전 9:24-25 (운동장에서 달음질하는 자들이... 썩을 면류관)", "빌 3:14 (푯대를 향하여 그리스도 예수 안에서 하나님이 위에서 부르신 부름의 상)", "딤후 4:7-8 (선한 싸움을 싸우고... 의의 면류관)"]
    },
    korean_translation: {
      natural_translation: "마찬가지로, 운동선수로 경기하는 자는 규칙대로 경기하지 않으면 승리자의 면류관을 받지 못합니다.",
      translation_notes: "운동 경기 비유의 핵심: 규칙 준수와 정직성"
    },
    special_explanation: {
      explanation_type: "그리스 경기의 규칙과 사역의 정직성",
      content: "그리스-로마 세계의 운동 경기는 엄격한 규칙이 있었습니다: (1) 자격 요건: 그리스 시민권, 자유민 신분, (2) 훈련: 10개월간 의무 훈련 프로그램, (3) 서약: 규칙을 지키겠다는 제우스 신전에서의 맹세, (4) 경기: 부정행위 금지(뇌물, 폭력, 반칙), (5) 실격: 규칙 위반 시 면류관 박탈. 바울은 이를 사역자의 성실성(integrity)에 적용합니다. 사역자는 복음을 올바른 방법으로 전해야 합니다: (1) 진리를 왜곡하지 않고(고후 4:2), (2) 부정직한 방법을 사용하지 않고(살전 2:3-5), (3) 하나님의 말씀을 올바로 분별하여(딤후 2:15). 목적이 수단을 정당화하지 않습니다.",
      examples: ["고후 4:2 - 하나님의 말씀을 혼잡하게 하지 아니하고", "살전 2:3-5 - 간사함이나 속임수나 탐심으로 하지 아니함", "딤후 2:15 - 진리의 말씀을 옳게 분별하며"]
    }
  },
  {
    reference: "2 Timothy 2:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "농부 비유",
        original_text: "The hardworking farmer should be the first to receive a share of the crops",
        korean_translation: "수고하는 농부가 곡식의 몫을 먼저 받아야 합니다",
        grammatical_explanation: "당위문 - '받아야 한다'는 의무나 자격을 나타냅니다"
      }
    ],
    vocabulary: [
      {
        word: "hardworking",
        ipa_pronunciation: "/ˈhɑrdˌwɜrkɪŋ/",
        korean_pronunciation: "하드워킹",
        part_of_speech: "형용사",
        definition_korean: "수고하는, 열심히 일하는",
        usage_note: "그리스어 κοπιῶντα(kopionta)는 '고된 노동을 하다, 피곤하도록 일하다'는 분사형입니다"
      },
      {
        word: "share",
        ipa_pronunciation: "/ʃɛr/",
        korean_pronunciation: "셰어",
        part_of_speech: "명사",
        definition_korean: "몫, 분깃, 부분",
        usage_note: "그리스어 μεταλαμβάνειν(metalambanein)은 '받다, 나눠 갖다'는 동사입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 세 번째 비유는 농부입니다. 지중해 농업은 힘든 노동이었습니다: 경작, 파종, 제초, 수확, 타작 등 모든 과정이 육체적으로 고되었습니다(κοπιάω는 '피로할 정도로 일하다'). '먼저'(πρῶτον)라는 단어가 중요합니다. 농부는 자신이 재배한 곡식을 먼저 먹을 권리가 있습니다. 이는 사역자의 보상에 대한 비유입니다. 고전 9:7-11에서 바울은 같은 원리를 더 자세히 설명합니다: '누가 자기 비용으로 병정 노릇 하며... 과원을 만들고 그 열매를 먹지 아니하겠느냐... 소에게 망을 씌우지 말라... 곡식을 밟아 떠는 소에게 망을 씌우지 말라 하셨으니 하나님께서 어찌 소들을 위하여 염려하심이냐'. 딤전 5:17-18도 같은 원리입니다: '잘 다스리는 장로들은 배나 존경할 자로 알되 말씀과 가르침에 수고하는 이들은 더욱 그러하니라'.",
      cross_references: ["고전 9:7-11 (누가 자기 비용으로 병정 노릇 하며)", "딤전 5:17-18 (일하는 자가 그 삯을 받는 것이 마땅하다)", "신 25:4 (곡식을 밟아 떠는 소에게 망을 씌우지 말라)"]
    },
    korean_translation: {
      natural_translation: "수고하는 농부가 곡식의 몫을 먼저 받아야 합니다.",
      translation_notes: "농부 비유의 핵심: 수고한 자가 먼저 보상받는다"
    },
    special_explanation: {
      explanation_type: "사역자 보상의 원리",
      content: "세 가지 비유의 결론은 사역자의 정당한 보상입니다: (1) 군사 - 헌신과 고난(2:3-4), (2) 운동선수 - 규칙 준수와 정직성(2:5), (3) 농부 - 수고와 보상(2:6). 농부 비유는 사역자가 복음으로 생활할 권리를 지지합니다. '먼저'(πρῶτον)는 우선권을 나타냅니다. 고전 9:14 '주께서도 복음 전하는 자들이 복음으로 말미암아 살리라 명하셨느니라'. 딤전 5:17-18 '잘 다스리는 장로들은... 말씀과 가르침에 수고하는 이들은 더욱 그러하니라... 일하는 자가 그 삯을 받는 것이 마땅하다'. 그러나 바울 자신은 이 권리를 포기하고 자비량 사역을 했습니다(행 18:3; 20:34; 고전 9:12, 15; 살전 2:9; 살후 3:8).",
      examples: ["고전 9:14 - 복음 전하는 자들이 복음으로 말미암아 살리라", "딤전 5:18 - 일하는 자가 그 삯을 받는 것이 마땕하다", "눅 10:7 - 일꾼이 그 삯을 받는 것이 마땅하니라"]
    }
  },
  {
    reference: "2 Timothy 2:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 묵상하라",
        original_text: "Reflect on what I am saying",
        korean_translation: "내가 말하는 것을 깊이 생각하라",
        grammatical_explanation: "명령문 - '깊이 생각하라'(νόει)는 현재 명령형입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "약속: 깨달음",
        original_text: "for the Lord will give you insight into all this",
        korean_translation: "왜냐하면 주께서 이 모든 것에 대한 깨달음을 너에게 주실 것이기 때문입니다",
        grammatical_explanation: "이유절 - '주실 것이다'(δώσει)는 미래형입니다"
      }
    ],
    vocabulary: [
      {
        word: "reflect",
        ipa_pronunciation: "/rɪˈflɛkt/",
        korean_pronunciation: "리플렉트",
        part_of_speech: "동사",
        definition_korean: "깊이 생각하다, 묵상하다, 숙고하다",
        usage_note: "그리스어 νοέω(noeo)는 '지각하다, 이해하다, 마음으로 파악하다'는 뜻입니다"
      },
      {
        word: "insight",
        ipa_pronunciation: "/ˈɪnˌsaɪt/",
        korean_pronunciation: "인사이트",
        part_of_speech: "명사",
        definition_korean: "깨달음, 통찰력, 이해",
        usage_note: "그리스어 σύνεσις(sunesis)는 '이해, 깨달음, 지혜'를 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 세 가지 비유(군사, 운동선수, 농부)를 제시한 후, 디모데에게 이를 '깊이 생각하라'(νόει)고 명령합니다. 이는 단순히 읽고 넘어가는 것이 아니라, 묵상하고 적용하라는 뜻입니다. 그러나 인간의 노력만으로는 충분하지 않습니다. '주께서 이 모든 것에 대한 깨달음을 너에게 주실 것이다'(δώσει γάρ σοι ὁ κύριος σύνεσιν ἐν πᾶσιν)라는 약속이 따라옵니다. 이는 성경 이해에 있어서 인간의 노력과 하나님의 조명(illumination)이 함께 필요함을 보여줍니다. 시 119:18 '내 눈을 열어서 주의 율법의 기이한 것을 보게 하소서', 엡 1:17-18 '우리 주 예수 그리스도의 하나님, 영광의 아버지께서 지혜와 계시의 영을 너희에게 주사 하나님을 알게 하시고', 고전 2:12-14 '우리가 세상의 영을 받지 아니하고 오직 하나님으로부터 온 영을 받았으니 이는 우리로 하여금 하나님께서 우리에게 은혜로 주신 것들을 알게 하려 하심이라'와 같은 원리입니다.",
      cross_references: ["시 119:18 (내 눈을 열어서 주의 율법의 기이한 것을 보게 하소서)", "엡 1:17-18 (지혜와 계시의 영)", "고전 2:12-14 (하나님으로부터 온 영을 받아 하나님의 것들을 알게 함)"]
    },
    korean_translation: {
      natural_translation: "내가 말하는 것을 깊이 생각하라. 왜냐하면 주께서 이 모든 것에 대한 깨달음을 너에게 주실 것이기 때문입니다.",
      translation_notes: "묵상(인간의 노력)과 조명(하나님의 은혜)의 조화"
    },
    special_explanation: {
      explanation_type: "성경 이해의 두 요소: 묵상과 조명",
      content: "이 구절은 성경 이해에 필요한 두 가지 요소를 제시합니다: (1) 인간의 노력: '깊이 생각하라'(νόει) - 성경을 읽고, 묵상하고, 연구하는 책임, (2) 하나님의 조명: '주께서 깨달음을 주실 것이다'(δώσει σύνεσιν) - 성령의 조명과 가르침. 개혁주의 신학은 이를 '성령의 내적 증거'(testimonium Spiritus Sancti internum)라고 부릅니다. 인간의 노력만으로는 영적 진리를 깨달을 수 없고(고전 2:14 '육에 속한 사람은 하나님의 성령의 일들을 받지 아니하나니'), 하나님의 조명 없이는 성경이 단지 역사 문서에 불과합니다. 둘 다 필요합니다.",
      examples: ["고전 2:14 - 육에 속한 사람은 하나님의 성령의 일들을 받지 아니하나니", "요 16:13 - 진리의 성령이 오시면 그가 너희를 모든 진리 가운데로 인도하시리니", "눅 24:45 - 이에 그들의 마음을 열어 성경을 깨닫게 하시고"]
    }
  },
  {
    reference: "2 Timothy 2:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 기억하라",
        original_text: "Remember Jesus Christ, raised from the dead, descended from David",
        korean_translation: "예수 그리스도를 기억하라. 죽은 자들 가운데서 살아나시고, 다윗의 후손이신 분을",
        grammatical_explanation: "명령문 - '기억하라'(μνημόνευε)는 현재 명령형입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "근거: 복음",
        original_text: "This is my gospel",
        korean_translation: "이것이 내 복음입니다",
        grammatical_explanation: "동격 - '내 복음'(τὸ εὐαγγέλιόν μου)은 바울이 전한 복음의 핵심 내용입니다"
      }
    ],
    vocabulary: [
      {
        word: "raised",
        ipa_pronunciation: "/reɪzd/",
        korean_pronunciation: "레이즈드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "살아나신, 부활하신",
        usage_note: "그리스어 ἐγηγερμένον(egermenon)은 완료 수동 분사로 '일으켜진 상태에 있는'이라는 뜻입니다"
      },
      {
        word: "descended",
        ipa_pronunciation: "/dɪˈsɛndɪd/",
        korean_pronunciation: "디센디드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "후손인, ~에서 나온",
        usage_note: "그리스어 ἐκ σπέρματος(ek spermatos)는 '씨로부터'라는 뜻으로 혈통을 나타냅니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 복음의 핵심을 간결하게 제시합니다: '예수 그리스도를 기억하라. 죽은 자들 가운데서 살아나시고, 다윗의 후손이신 분을'. 이는 초대 교회의 가장 간결한 신앙고백(creed) 중 하나입니다. 두 가지 핵심 진리: (1) '죽은 자들 가운데서 살아나신'(ἐγηγερμένον ἐκ νεκρῶν): 부활 - 그리스도의 신성과 구원 완성의 증거(롬 1:4; 고전 15:17), (2) '다윗의 후손'(ἐκ σπέρματος Δαυίδ): 인성과 메시아 자격 - 구약의 약속 성취(삼하 7:12-16; 사 11:1; 렘 23:5; 마 1:1; 롬 1:3). 이는 예수 그리스도가 완전한 하나님이시며 완전한 인간이심을 선언합니다. '이것이 내 복음입니다'(κατὰ τὸ εὐαγγέλιόν μου)는 바울이 전한 복음의 핵심 메시지입니다(롬 2:16; 16:25).",
      cross_references: ["롬 1:3-4 (다윗의 혈통... 죽은 자들 가운데서 부활하사)", "고전 15:3-4 (그리스도께서 우리 죄를 위하여 죽으시고... 사흘 만에 살아나심)", "행 13:32-33 (예수를 살리심으로 우리 조상들에게 하신 약속을 이루셨다)"]
    },
    korean_translation: {
      natural_translation: "예수 그리스도를 기억하라. 죽은 자들 가운데서 살아나시고, 다윗의 후손이신 분을. 이것이 내 복음입니다.",
      translation_notes: "초대 교회 신앙고백의 핵심: 부활과 메시아"
    },
    special_explanation: {
      explanation_type: "초대 교회 신앙고백 공식",
      content: "이 구절은 초대 교회의 가장 간결한 신앙고백(creed) 중 하나입니다. 두 가지 핵심 진리를 담고 있습니다: (1) '죽은 자들 가운데서 살아나신': 부활(Resurrection) - 그리스도의 신성, 죽음에 대한 승리, 구원의 완성을 증명합니다. 완료 수동 분사(ἐγηγερμένον)는 '일으켜진 상태로 계속 있다'는 뜻으로, 부활이 과거 사건이지만 현재에도 유효함을 나타냅니다. (2) '다윗의 후손': 인성(Humanity)과 메시아 자격 - 구약의 약속 성취(삼하 7:12-16; 사 11:1; 렘 23:5). 예수님은 완전한 하나님(부활로 증명)이시며 완전한 인간(다윗의 혈통)이십니다. 이는 칼케돈 정의(Chalcedonian Definition, AD 451)의 성경적 기초입니다: 그리스도는 완전한 신성과 완전한 인성을 가지신 한 분입니다.",
      examples: ["롬 1:3-4 - 육신으로는 다윗의 혈통에서 나셨고, 성결의 영으로는 죽은 자들 가운데서 부활하사 능력으로 하나님의 아들로 선포되셨으니", "행 2:29-36 - 다윗이 죽어 장사되었으나, 하나님이 예수를 살리심", "롬 9:5 - 육신으로는 그리스도가 그들(이스라엘)에게서 나셨으니 그는 만물 위에 계셔서 세세에 찬양을 받으실 하나님이시니라"]
    }
  },
  {
    reference: "2 Timothy 2:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "고난의 현실",
        original_text: "for which I am suffering even to the point of being chained like a criminal",
        korean_translation: "이 복음 때문에 나는 범죄자처럼 사슬에 매이기까지 고난을 받고 있습니다",
        grammatical_explanation: "이유절 - '고난을 받다'(κακοπαθῶ)는 현재형으로 진행 중인 고통을 나타냅니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "대조: 복음의 자유",
        original_text: "But God's word is not chained",
        korean_translation: "그러나 하나님의 말씀은 매이지 않았습니다",
        grammatical_explanation: "대조문 - '매이지 않았다'(οὐ δέδεται)는 완료 수동태 부정문입니다"
      }
    ],
    vocabulary: [
      {
        word: "chained",
        ipa_pronunciation: "/tʃeɪnd/",
        korean_pronunciation: "체인드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "사슬에 묶인, 쇠사슬에 매인",
        usage_note: "그리스어 δέδεμαι(dedemai)는 '묶이다, 결박되다'는 완료 수동태입니다"
      },
      {
        word: "criminal",
        ipa_pronunciation: "/ˈkrɪmɪnl/",
        korean_pronunciation: "크리미널",
        part_of_speech: "명사",
        definition_korean: "범죄자, 악인",
        usage_note: "그리스어 κακοῦργος(kakourgos)는 '악을 행하는 자'라는 뜻으로, 눅 23:32-33에서 예수님과 함께 십자가에 못 박힌 '행악자들'을 가리키는 단어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 로마 감옥에서 이 편지를 쓰고 있습니다(딤후 1:8, 16-17; 2:9). '범죄자처럼'(ὡς κακοῦργος)는 바울이 일반 범죄자처럼 취급받고 있음을 나타냅니다. κακοῦργος는 '악을 행하는 자'라는 뜻으로, 눅 23:32-33에서 예수님과 함께 십자가에 못 박힌 '행악자들'을 가리키는 단어입니다. 바울은 로마법상 최고형을 받을 수 있는 중범죄자로 간주되었습니다. 그러나 '하나님의 말씀은 매이지 않았습니다'(ὁ λόγος τοῦ θεοῦ οὐ δέδεται)라는 선언은 복음의 불가항력성을 나타냅니다. 사도는 감옥에 갇혀 있지만, 복음은 계속 전파됩니다. 빌 1:12-14 '형제들아 내가 당한 일이 도리어 복음 전파에 진전이 되었음을 너희가 알기를 원하노라... 형제 중 다수가 나의 매임으로 말미암아 주 안에서 신뢰함으로 겁 없이 하나님의 말씀을 더욱 담대히 전하게 되었느니라'와 같은 원리입니다.",
      cross_references: ["빌 1:12-14 (내가 당한 일이 도리어 복음 전파에 진전이 되었음)", "행 28:30-31 (자기 셋집에 이태를 유하며... 하나님의 나라를 전파하며)", "사 55:11 (내 입에서 나가는 말도 이와 같이 헛되이 내게로 돌아오지 아니하고)"]
    },
    korean_translation: {
      natural_translation: "이 복음 때문에 나는 범죄자처럼 사슬에 매이기까지 고난을 받고 있습니다. 그러나 하나님의 말씀은 매이지 않았습니다.",
      translation_notes: "복음의 불가항력성: 전도자는 묶여도 복음은 자유롭다"
    },
    special_explanation: {
      explanation_type: "복음의 불가항력성",
      content: "바울은 로마 감옥에서 '범죄자'(κακοῦργος)로 취급받고 있습니다. 이 단어는 눅 23:32-33에서 예수님과 함께 십자가에 못 박힌 '행악자들'을 가리키는 단어로, 바울이 최악의 범죄자로 간주되었음을 나타냅니다. 네로 황제의 박해(AD 64-68) 하에서 기독교인들은 방화, 인육 섭취, 근친상간 등의 죄목으로 기소되었습니다. 그러나 '하나님의 말씀은 매이지 않았습니다'(ὁ λόγος τοῦ θεοῦ οὐ δέδεται)라는 역설적 선언은 복음의 불가항력성을 나타냅니다. 빌 1:12-14에서 바울은 자신의 투옥이 오히려 복음 전파에 진전이 되었다고 말합니다. 로마 황실 친위대(praetorian guard)에게 복음이 전해졌고(빌 1:13), 다른 믿는 이들이 더욱 담대해졌습니다(빌 1:14). 교회 역사는 이를 증명합니다: 박해는 교회를 파괴하지 못하고 오히려 성장시켰습니다(터툴리안: '순교자의 피는 교회의 씨앗이다').",
      examples: ["빌 1:13 - 나의 매임이 그리스도 안에서 모든 시위대 안과 그 밖의 모든 사람에게 나타났으니", "행 8:1-4 - 박해로 흩어진 자들이 두루 다니며 복음의 말씀을 전할새", "행 28:30-31 - 바울이 온 이태를 자기 셋집에 머물면서... 하나님의 나라를 전파하며"]
    }
  },
  {
    reference: "2 Timothy 2:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "인내의 이유",
        original_text: "Therefore I endure everything for the sake of the elect",
        korean_translation: "그러므로 나는 택함 받은 자들을 위하여 모든 것을 참습니다",
        grammatical_explanation: "이유절 - '참다'(ὑπομένω)는 현재형으로 계속적인 인내를 나타냅니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "인내의 목적",
        original_text: "that they too may obtain the salvation that is in Christ Jesus, with eternal glory",
        korean_translation: "그들도 그리스도 예수 안에 있는 구원을 영원한 영광과 함께 얻게 하려 함입니다",
        grammatical_explanation: "목적절 - '얻게 하려 함'(ἵνα τύχωσιν)은 목적을 나타내는 접속사입니다"
      }
    ],
    vocabulary: [
      {
        word: "endure",
        ipa_pronunciation: "/ɪnˈdʊr/",
        korean_pronunciation: "인듀어",
        part_of_speech: "동사",
        definition_korean: "견디다, 참다, 인내하다",
        usage_note: "그리스어 ὑπομένω(hupomeno)는 '밑에서'(ὑπό) + '머무르다'(μένω)의 합성어로 '끝까지 견디다'는 뜻입니다"
      },
      {
        word: "elect",
        ipa_pronunciation: "/ɪˈlɛkt/",
        korean_pronunciation: "일렉트",
        part_of_speech: "명사",
        definition_korean: "택함 받은 자들, 선택된 자들",
        usage_note: "그리스어 ἐκλεκτούς(eklektous)는 '선택된, 택함 받은'이라는 뜻입니다"
      },
      {
        word: "obtain",
        ipa_pronunciation: "/əbˈteɪn/",
        korean_pronunciation: "옵테인",
        part_of_speech: "동사",
        definition_korean: "얻다, 획득하다",
        usage_note: "그리스어 τυγχάνω(tunchano)는 '도달하다, 성취하다'는 뜻입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신이 고난을 참는 이유를 설명합니다: '택함 받은 자들을 위하여'(διὰ τοὺς ἐκλεκτούς). '택함 받은 자들'(ἐκλεκτούς)은 하나님께서 영원 전에 선택하신 자들을 가리킵니다(엡 1:4; 롬 8:29-30). 바울의 고난은 선택된 자들이 '그리스도 예수 안에 있는 구원을 영원한 영광과 함께 얻게 하려 함'입니다. 이는 바울의 사도적 사명입니다(행 9:15-16 '이 사람은 내 이름을 이방인과 임금들과 이스라엘 자손들에게 전하기 위하여 택한 나의 그릇이라... 내가 그를 위하여 그가 내 이름을 위하여 얼마나 고난을 받아야 할 것을 그에게 보이리라'). '그리스도 예수 안에 있는 구원'(σωτηρίας τῆς ἐν Χριστῷ Ἰησοῦ)은 그리스도와의 연합을 통한 구원을 의미합니다. '영원한 영광'(μετὰ δόξης αἰωνίου)은 미래의 완성된 구원(glorification)을 가리킵니다(롬 8:30 '또 미리 정하신 그들을 또한 부르시고 부르신 그들을 또한 의롭다 하시고 의롭다 하신 그들을 또한 영화롭게 하셨느니라'). 바울은 골 1:24에서도 같은 원리를 말합니다: '내가 이제 너희를 위하여 받는 괴로움을 기뻐하고 그리스도의 남은 고난을 그의 몸된 교회를 위하여 내 육체에 채우노라'.",
      cross_references: ["행 9:15-16 (택한 나의 그릇... 내 이름을 위하여 고난 받을 것)", "골 1:24 (그리스도의 남은 고난을 그의 몸된 교회를 위하여 내 육체에 채우노라)", "고후 1:5-6 (우리가 그리스도를 위하여 여러 가지 고난을 받으되... 너희를 위한 위로와 구원이 되는 것이니)"]
    },
    korean_translation: {
      natural_translation: "그러므로 나는 택함 받은 자들을 위하여 모든 것을 참습니다. 그들도 그리스도 예수 안에 있는 구원을 영원한 영광과 함께 얻게 하려 함입니다.",
      translation_notes: "사도적 고난의 목적: 선택된 자들의 구원 완성"
    },
    special_explanation: {
      explanation_type: "사도적 고난과 선택 교리",
      content: "이 구절은 바울의 고난 신학을 보여줍니다: (1) '택함 받은 자들'(ἐκλεκτούς): 하나님께서 영원 전에 선택하신 자들(엡 1:4; 롬 8:29-30). 이는 칼빈주의 5대 교리(TULIP) 중 'Unconditional Election'(무조건적 선택)을 반영합니다. (2) '모든 것을 참습니다'(πάντα ὑπομένω): 바울은 복음 전파를 위해 기꺼이 고난받습니다. (3) 목적: '그들도... 구원을 얻게 하려 함'(ἵνα καὶ αὐτοὶ σωτηρίας τύχωσιν). 선택 교리는 전도를 방해하지 않고 오히려 격려합니다. 바울은 선택된 자들이 복음을 듣고 믿게 될 것을 확신하기에 고난을 참습니다(행 18:9-10 '이 성중에 내 백성이 많음이라'). (4) '영원한 영광'(δόξης αἰωνίου): 구원의 최종 단계인 영화(glorification)를 가리킵니다(롬 8:30).",
      examples: ["행 18:9-10 - 내가 이 성중에 내 백성이 많으니 두려워하지 말며", "롬 8:29-30 - 하나님이 미리 아신 자들을 또한 그 아들의 형상을 본받게 하기 위하여 미리 정하셨으니", "엡 1:4 - 곧 창세 전에 그리스도 안에서 우리를 택하사"]
    }
  }
]

async function main() {
  console.log('=== 2 Timothy 2:1-10 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${analyses.length}`)
}

main()
