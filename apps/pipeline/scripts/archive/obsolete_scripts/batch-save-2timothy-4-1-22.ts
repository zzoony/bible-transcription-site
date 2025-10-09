import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 4:1-8: 바울의 마지막 부탁과 고백
  {
    reference: "2 Timothy 4:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "엄숙한 증언",
        original_text: "In the presence of God and of Christ Jesus, who will judge the living and the dead, and in view of his appearing and his kingdom, I give you this charge",
        korean_translation: "하나님 앞과 산 자와 죽은 자를 심판하실 그리스도 예수 앞에서 그의 나타나실 것과 그의 나라를 두고 엄히 명하노니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 가장 엄숙한 방식으로 디모데에게 마지막 부탁을 시작합니다. '하나님 앞과 그리스도 예수 앞에서'(ἐνώπιον τοῦ θεοῦ καὶ Χριστοῦ Ἰησοῦ) 증언하며, 그리스도의 '심판'(κρίνοντος), '나타나심'(ἐπιφάνειαν), '나라'(βασιλείαν)를 언급합니다. 이는 딤전 5:21; 6:13-14의 엄숙한 명령과 유사합니다. '산 자와 죽은 자를 심판하실'(τοῦ μέλλοντος κρίνειν ζῶντας καὶ νεκρούς)은 행 10:42 '하나님이 그를 살아 있는 자와 죽은 자의 재판장으로 정하신 이'를 반영합니다.",
      cross_references: ["행 10:42 (하나님이 그를 살아 있는 자와 죽은 자의 재판장으로 정하신 이)", "딤전 5:21 (하나님과 그리스도 예수와 택하심을 받은 천사들 앞에서 엄히 명하노니)", "딤전 6:13-14 (만물을 살게 하신 하나님 앞과... 내가 명하노니)"]
    },
    korean_translation: {
      natural_translation: "하나님 앞과 산 자와 죽은 자를 심판하실 그리스도 예수 앞에서 그의 나타나실 것과 그의 나라를 두고 엄히 명하노니"
    },
    special_explanation: {
      explanation_type: "엄숙한 증언 공식",
      content: "바울은 가장 엄숙한 방식으로 마지막 부탁을 시작합니다: (1) 하나님 앞에서(ἐνώπιον τοῦ θεοῦ), (2) 그리스도 예수 앞에서(Χριστοῦ Ἰησοῦ), (3) 심판자로서의 그리스도(κρίνοντος ζῶντας καὶ νεκρούς), (4) 재림(ἐπιφάνειαν), (5) 왕국(βασιλείαν). 이는 디모데가 이 명령을 하나님과 그리스도 앞에서 책임져야 함을 강조합니다."
    }
  },
  {
    reference: "2 Timothy 4:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 말씀을 전파하라",
        original_text: "Preach the word; be prepared in season and out of season",
        korean_translation: "너는 말씀을 전파하라 때를 얻든지 못 얻든지 항상 힘쓰라"
      },
      {
        sequence_order: 2,
        semantic_classification: "방법: 인내와 교훈",
        original_text: "correct, rebuke and encourage—with great patience and careful instruction",
        korean_translation: "범사에 오래 참음과 가르침으로 경책하며 경계하며 권하라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'말씀을 전파하라'(κήρυξον τὸν λόγον)는 바울의 핵심 명령입니다. '때를 얻든지 못 얻든지'(εὐκαίρως ἀκαίρως)는 '편리한 때든 불편한 때든'이라는 뜻으로, 상황에 관계없이 말씀을 전하라는 명령입니다. 사역자는 세 가지를 해야 합니다: (1) 경책(ἔλεγξον, convict/rebuke), (2) 경계(ἐπιτίμησον, warn), (3) 권면(παρακάλεσον, encourage). 이 모두는 '오래 참음과 가르침으로'(ἐν πάσῃ μακροθυμίᾳ καὶ διδαχῇ) 이루어져야 합니다.",
      cross_references: ["행 20:20 (유익한 것은 조금도 꺼리지 아니하고... 가르치기를 쉬지 아니하였노라)", "고후 4:2 (하나님의 말씀을 혼잡하게 하지 아니하고)", "딤후 2:24-25 (주의 종은... 온유함으로 거역하는 자를 훈계할지니)"]
    },
    korean_translation: {
      natural_translation: "너는 말씀을 전파하라. 때를 얻든지 못 얻든지 항상 힘쓰라. 범사에 오래 참음과 가르침으로 경책하며 경계하며 권하라."
    },
    special_explanation: {
      explanation_type: "말씀 사역의 핵심",
      content: "이 구절은 목회 사역의 핵심 명령입니다: (1) '말씀을 전파하라'(κήρυξον τὸν λόγον) - 복음 선포, (2) '때를 얻든지 못 얻든지'(εὐκαίρως ἀκαίρως) - 상황 무관, (3) 세 가지 사역: 경책(rebuke), 경계(warn), 권면(encourage), (4) '오래 참음과 가르침으로'(ἐν πάσῃ μακροθυμίᾳ καὶ διδαχῇ) - 인내와 교육. 이는 바울의 사역 철학입니다(행 20:20, 27, 31)."
    }
  },
  // 4:3-4는 토큰 효율을 위해 간결히
  {
    reference: "2 Timothy 4:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "미래 예언: 건전한 교훈 거부",
        original_text: "For the time will come when people will not put up with sound doctrine",
        korean_translation: "때가 이르리니 사람들이 바른 교훈을 받지 아니하고"
      },
      {
        sequence_order: 2,
        semantic_classification: "대안: 귀에 즐거운 교사들",
        original_text: "Instead, to suit their own desires, they will gather around them a great number of teachers to say what their itching ears want to hear",
        korean_translation: "귀가 가려워서 자기의 사욕을 따를 스승을 많이 두고"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'때가 이르리니'(ἔσται γὰρ καιρὸς)는 미래 예언입니다. 사람들이 '바른 교훈을 받지 않고'(τῆς ὑγιαινούσης διδασκαλίας οὐκ ἀνέξονται), '귀가 가려워서'(κνηθόμενοι τὴν ἀκοήν) 자기 욕망에 맞는 교사들을 찾을 것입니다. 이는 현대 '귀에 즐거운 복음'(ear-tickling gospel)의 위험을 경고합니다.",
      cross_references: ["살후 2:10-11 (불의의 모든 속임으로... 거짓 것을 믿게 하심)", "딤전 4:1 (후일에 어떤 사람들이 믿음에서 떠나)"]
    },
    korean_translation: {
      natural_translation: "때가 이르리니 사람들이 바른 교훈을 받지 아니하고 귀가 가려워서 자기의 사욕을 따를 스승을 많이 두고"
    },
    special_explanation: {
      explanation_type: "귀에 즐거운 복음",
      content: "'귀가 가려워서'(κνηθόμενοι τὴν ἀκοήν, itching ears)는 불편한 진리 대신 듣기 좋은 말을 원하는 것입니다. 이는 현대 번영신학, 긍정주의 복음 등 '귀에 즐거운 복음'의 위험을 경고합니다."
    }
  },
  {
    reference: "2 Timothy 4:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "결과: 진리에서 돌아섬",
        original_text: "They will turn their ears away from the truth and turn aside to myths",
        korean_translation: "또 그 귀를 진리에서 돌이켜 허탄한 이야기를 따르리라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "결과는 '진리에서 귀를 돌이켜'(ἀπὸ μὲν τῆς ἀληθείας τὴν ἀκοὴν ἀποστρέψουσιν) '허탄한 이야기로'(ἐπὶ δὲ τοὺς μύθους ἐκτραπήσονται) 돌아서는 것입니다. 이는 딤전 1:4; 4:7; 딛 1:14의 '허탄한 이야기'와 같습니다.",
      cross_references: ["딤전 1:4 (신화와 끝없는 족보에 몰두하지 말게 하라)", "딛 1:14 (유대인의 허탄한 이야기와 진리를 배반하는 사람들의 명령)"]
    },
    korean_translation: {
      natural_translation: "또 그 귀를 진리에서 돌이켜 허탄한 이야기를 따르리라."
    },
    special_explanation: {
      explanation_type: "진리 vs 신화",
      content: "사람들은 진리(ἀλήθεια)에서 귀를 돌이켜 신화(μύθους)로 향합니다. 이는 영지주의적 사변, 유대주의 족보 논쟁, 현대의 성경 왜곡 등을 가리킵니다."
    }
  },
  {
    reference: "2 Timothy 4:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 깨어 있으라",
        original_text: "But you, keep your head in all situations, endure hardship, do the work of an evangelist, discharge all the duties of your ministry",
        korean_translation: "그러나 너는 모든 일에 신중하여 고난을 받으며 전도자의 일을 하며 네 직무를 다하라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "다시 '그러나 너는'(Σὺ δὲ)라는 대조로 디모데를 구별합니다. 네 가지 명령: (1) 신중하라(νῆφε, be sober/clear-headed), (2) 고난을 받으라(κακοπάθησον), (3) 전도자의 일을 하라(ἔργον ποίησον εὐαγγελιστοῦ), (4) 직무를 다하라(τὴν διακονίαν σου πληροφόρησον).",
      cross_references: ["행 21:8 (전도자 빌립)", "엡 4:11 (어떤 사람은 사도로, 어떤 사람은 선지자로, 어떤 사람은 복음 전하는 자로)"]
    },
    korean_translation: {
      natural_translation: "그러나 너는 모든 일에 신중하여 고난을 받으며 전도자의 일을 하며 네 직무를 다하라."
    },
    special_explanation: {
      explanation_type: "사역자의 4가지 책임",
      content: "디모데는 네 가지를 해야 합니다: (1) 신중함(νῆφε, be sober) - 영적 각성, (2) 고난 감수(κακοπάθησον) - 복음을 위한 고난, (3) 전도자의 일(εὐαγγελιστοῦ) - 복음 선포, (4) 직무 완수(διακονίαν πληροφόρησον) - 사역 완성."
    }
  },
  // 4:6-8: 바울의 고백
  {
    reference: "2 Timothy 4:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 임박한 죽음",
        original_text: "For I am already being poured out like a drink offering, and the time for my departure is near",
        korean_translation: "나는 벌써 부음이 되어 나의 떠날 시각이 가까웠도다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 자신의 죽음을 두 가지 이미지로 표현합니다: (1) '부음이 됨'(σπένδομαι, being poured out like a drink offering) - 제사의 전제(奠祭, 민 15:5-10; 28:7), (2) '떠남'(ἀναλύσεως, departure) - 배가 닻을 올리거나 군대가 진을 걷는 것. 빌 2:17에서도 같은 이미지를 사용합니다: '만일 너희 믿음의 제물과 섬김 위에 내가 나를 전제로 드릴지라도'.",
      cross_references: ["빌 2:17 (너희 믿음의 제물과 섬김 위에 내가 나를 전제로 드릴지라도)", "빌 1:23 (내가 그 두 사이에 끼었으니 차라리 세상을 떠나서 그리스도와 함께 있을 욕망을 가진 이것이 더욱 좋으나)", "민 15:5-10 (전제로 포도주를 드릴지니)"]
    },
    korean_translation: {
      natural_translation: "나는 벌써 부음이 되어 나의 떠날 시각이 가까웠도다."
    },
    special_explanation: {
      explanation_type: "죽음의 두 이미지",
      content: "바울은 죽음을 두 가지로 표현합니다: (1) 전제(σπένδομαι, drink offering) - 구약 제사에서 포도주를 부어드리는 것(민 15:5-10). 바울의 생명이 하나님께 부어지는 제물입니다. (2) 떠남(ἀνάλυσις, departure) - 배가 닻을 올리거나 군대가 진을 걷는 것. 죽음은 끝이 아니라 새로운 여정의 시작입니다."
    }
  },
  {
    reference: "2 Timothy 4:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 삼중 고백",
        original_text: "I have fought the good fight, I have finished the race, I have kept the faith",
        korean_translation: "나는 선한 싸움을 싸우고 나의 달려갈 길을 마치고 믿음을 지켰으니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 자신의 사역을 세 가지로 요약합니다: (1) '선한 싸움을 싸웠고'(τὸν καλὸν ἀγῶνα ἠγώνισμαι) - 딤전 6:12 '믿음의 선한 싸움을 싸우라', (2) '달려갈 길을 마쳤고'(τὸν δρόμον τετέλεκα) - 행 20:24 '내가 달려갈 길과 주 예수께 받은 사명', (3) '믿음을 지켰습니다'(τὴν πίστιν τετήρηκα) - 계 2:10 '네가 죽도록 충성하라'. 세 동사 모두 완료형(perfect tense)으로 완성된 행동을 나타냅니다.",
      cross_references: ["딤전 6:12 (믿음의 선한 싸움을 싸우라)", "행 20:24 (내가 달려갈 길과 주 예수께 받은 사명)", "계 2:10 (네가 죽도록 충성하라 그리하면 내가 생명의 관을 네게 주리라)"]
    },
    korean_translation: {
      natural_translation: "나는 선한 싸움을 싸우고 나의 달려갈 길을 마치고 믿음을 지켰으니"
    },
    special_explanation: {
      explanation_type: "바울의 삼중 고백",
      content: "바울은 자신의 사역을 세 가지로 요약합니다: (1) 선한 싸움(τὸν καλὸν ἀγῶνα ἠγώνισμαι) - 영적 전투, (2) 달려갈 길 완주(τὸν δρόμον τετέλεκα) - 사명 완성, (3) 믿음 보존(τὴν πίστιν τετήρηκα) - 교리 수호. 세 동사 모두 완료형으로 성취된 행동을 나타냅니다. 이는 요 19:30 '다 이루었다'(τετέλεσται)와 유사합니다."
    }
  },
  {
    reference: "2 Timothy 4:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "보상: 의의 면류관",
        original_text: "Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day",
        korean_translation: "이제 후로는 나를 위하여 의의 면류관이 예비되었으므로 주 곧 의로우신 재판장이 그 날에 내게 주실 것이며"
      },
      {
        sequence_order: 2,
        semantic_classification: "확장: 모든 그리스도인에게",
        original_text: "and not only to me, but also to all who have longed for his appearing",
        korean_translation: "나만 아니라 주의 나타나심을 사모하는 모든 자에게도 주시리라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울의 보상은 '의의 면류관'(ὁ τῆς δικαιοσύνης στέφανος)입니다. 이는 금관이 아니라 승리자의 화환(στέφανος)입니다. '의로우신 재판장'(ὁ δίκαιος κριτής)이신 주께서 '그 날'(ἐν ἐκείνῃ τῇ ἡμέρᾳ, 재림의 날)에 주실 것입니다. 중요한 것은 이것이 바울만이 아니라 '주의 나타나심을 사모하는 모든 자'(πᾶσι τοῖς ἠγαπηκόσι τὴν ἐπιφάνειαν αὐτοῦ)에게 주어진다는 것입니다. 다른 면류관들: 생명의 면류관(약 1:12; 계 2:10), 영광의 면류관(벧전 5:4), 썩지 않는 면류관(고전 9:25).",
      cross_references: ["약 1:12 (생명의 관을 얻을 것)", "벧전 5:4 (시들지 아니하는 영광의 관을 얻으리라)", "계 2:10 (생명의 관을 네게 주리라)"]
    },
    korean_translation: {
      natural_translation: "이제 후로는 나를 위하여 의의 면류관이 예비되었으므로 주 곧 의로우신 재판장이 그 날에 내게 주실 것이며, 나만 아니라 주의 나타나심을 사모하는 모든 자에게도 주시리라."
    },
    special_explanation: {
      explanation_type: "의의 면류관",
      content: "'의의 면류관'(ὁ τῆς δικαιοσύνης στέφανος)은 승리자의 화환(στέφανος)으로, 금관(διάδημα)이 아닙니다. 이는 의로운 삶에 대한 보상입니다. '의로우신 재판장'(ὁ δίκαιος κριτής)은 공정하게 심판하시는 그리스도입니다. 중요한 것은 이것이 바울만이 아니라 '주의 나타나심을 사모하는 모든 자'에게 주어진다는 것입니다. 재림 대망은 신자의 표지입니다."
    }
  },
  // 4:9-22는 개인적 지시사항들 - 간결히
  {
    reference: "2 Timothy 4:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부탁: 속히 오라",
        original_text: "Do your best to come to me quickly",
        korean_translation: "너는 어서 속히 내게로 오라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 '속히'(ταχέως) 오라고 간청합니다. 이는 바울의 외로움과 임박한 죽음을 반영합니다.",
      cross_references: []
    },
    korean_translation: {
      natural_translation: "너는 어서 속히 내게로 오라."
    },
    special_explanation: {
      explanation_type: "바울의 외로움",
      content: "바울은 디모데에게 '속히'(σπούδασον ἐλθεῖν... ταχέως) 오라고 간청합니다. 이는 바울의 외로움과 임박한 죽음을 반영합니다. 다음 구절들에서 많은 동역자들이 떠났음이 밝혀집니다."
    }
  },
  {
    reference: "2 Timothy 4:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "버림받음: 데마",
        original_text: "for Demas, because he loved this world, has deserted me and has gone to Thessalonica",
        korean_translation: "데마는 이 세상을 사랑하여 나를 버리고 데살로니가로 갔고"
      },
      {
        sequence_order: 2,
        semantic_classification: "파송: 다른 동역자들",
        original_text: "Crescens has gone to Galatia, and Titus to Dalmatia",
        korean_translation: "그레스게는 갈라디아로, 디도는 달마디아로 갔고"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'데마'(Δημᾶς)는 골 4:14; 몬 1:24에서 바울의 동역자로 언급되지만, 여기서는 '이 세상을 사랑하여'(ἀγαπήσας τὸν νῦν αἰῶνα) 바울을 버렸습니다. 이는 요일 2:15 '이 세상이나 세상에 있는 것들을 사랑하지 말라'를 위반한 것입니다.",
      cross_references: ["골 4:14 (사랑하는 의사 누가와 데마가 너희에게 문안하느니라)", "몬 1:24 (나의 동역자 마가, 아리스다고, 데마, 누가)", "요일 2:15 (이 세상이나 세상에 있는 것들을 사랑하지 말라)"]
    },
    korean_translation: {
      natural_translation: "데마는 이 세상을 사랑하여 나를 버리고 데살로니가로 갔고, 그레스게는 갈라디아로, 디도는 달마디아로 갔고"
    },
    special_explanation: {
      explanation_type: "데마의 배교",
      content: "데마(Demas)는 한때 바울의 동역자였지만(골 4:14; 몬 1:24), '이 세상을 사랑하여'(ἀγαπήσας τὸν νῦν αἰῶνα) 바울을 버렸습니다. 이는 요일 2:15 '이 세상이나 세상에 있는 것들을 사랑하지 말라 누구든지 세상을 사랑하면 아버지의 사랑이 그 안에 있지 아니하니'를 위반한 배교의 예입니다."
    }
  },
  // 간결히 계속...
  {
    reference: "2 Timothy 4:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "누가만 남음",
        original_text: "Only Luke is with me",
        korean_translation: "누가만 나와 함께 있느니라"
      },
      {
        sequence_order: 2,
        semantic_classification: "부탁: 마가를 데려오라",
        original_text: "Get Mark and bring him with you, because he is helpful to me in my ministry",
        korean_translation: "네가 올 때에 마가를 데리고 오라 그가 나의 일에 유익하니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'누가'(Λουκᾶς)만 바울과 함께 있습니다. '마가'(Μᾶρκον)는 행 15:37-39에서 바울과 갈라섰지만, 이제는 회복되어 '유익한'(εὔχρηστος, useful) 사람이 되었습니다. 이는 실패한 사람도 회복될 수 있음을 보여줍니다.",
      cross_references: ["행 15:37-39 (바나바는 마가도 데리고 가고자 하나 바울은... 데리고 가기를 원하지 아니하여)", "골 4:10 (아리스다고와 바나바의 생질 마가)", "몬 1:24 (나의 동역자 마가)"]
    },
    korean_translation: {
      natural_translation: "누가만 나와 함께 있느니라. 네가 올 때에 마가를 데리고 오라. 그가 나의 일에 유익하니라."
    },
    special_explanation: {
      explanation_type: "마가의 회복",
      content: "마가(Mark)는 1차 전도여행 때 바울을 떠나(행 13:13) 바울과 바나바의 분열을 초래했지만(행 15:37-39), 이제는 '유익한'(εὔχρηστος, useful) 사람으로 회복되었습니다. 이는 실패한 사람도 하나님의 은혜로 회복될 수 있음을 보여줍니다."
    }
  },
  {
    reference: "2 Timothy 4:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "파송: 두기고",
        original_text: "I sent Tychicus to Ephesus",
        korean_translation: "두기고는 에베소로 보내었노라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'두기고'(Τυχικόν)는 바울의 신뢰받는 동역자로 엡 6:21-22; 골 4:7-8에서도 언급됩니다.",
      cross_references: ["엡 6:21 (나의 사정 곧 내가 무엇을 하는지 너희에게도 알리려 하노니 사랑을 받는 형제요 주 안에서 진실한 일꾼인 두기고가 모든 일을 너희에게 알리리라)", "골 4:7 (나의 모든 사정은 사랑을 받는 형제요 진실한 일꾼이요 주 안에서 함께 종 된 두기고가 너희에게 알리리니)"]
    },
    korean_translation: {
      natural_translation: "두기고는 에베소로 보내었노라."
    },
    special_explanation: {
      explanation_type: "두기고의 사명",
      content: "두기고(Tychicus)는 바울의 신뢰받는 동역자로, 아마도 이 편지를 전달하고 디모데를 대신하여 에베소 교회를 섬기도록 보내졌을 것입니다."
    }
  },
  // 계속 간결히...
  {
    reference: "2 Timothy 4:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부탁: 물품 가져오기",
        original_text: "When you come, bring the cloak that I left with Carpus at Troas, and my scrolls, especially the parchments",
        korean_translation: "네가 올 때에 내가 드로아 가보의 집에 둔 겉옷을 가지고 오고 또 책들 특히 가죽 종이로 된 것들을 가져오라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 실용적 필요를 요청합니다: (1) 겉옷(φαιλόνην) - 추운 감옥을 위해, (2) 책들(βιβλία), (3) 특히 가죽 종이들(μάλιστα τὰς μεμβράνας) - 아마도 구약 성경이나 중요한 문서들. 이는 바울이 죽음 앞에서도 연구와 학습을 계속했음을 보여줍니다.",
      cross_references: []
    },
    korean_translation: {
      natural_translation: "네가 올 때에 내가 드로아 가보의 집에 둔 겉옷을 가지고 오고 또 책들 특히 가죽 종이로 된 것들을 가져오라."
    },
    special_explanation: {
      explanation_type: "바울의 학구열",
      content: "바울은 죽음을 앞두고도 책들(βιβλία)과 가죽 종이들(μεμβράνας, 아마도 구약 성경)을 요청합니다. 이는 사역자가 죽는 날까지 말씀 연구를 계속해야 함을 보여줍니다."
    }
  },
  {
    reference: "2 Timothy 4:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "경고: 알렉산더",
        original_text: "Alexander the metalworker did me a great deal of harm. The Lord will repay him for what he has done",
        korean_translation: "구리 장색 알렉산더가 내게 해를 많이 입혔으매 주께서 그 행한 대로 그에게 갚으시리니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'구리 장색 알렉산더'(Ἀλέξανδρος ὁ χαλκεύς)는 딤전 1:20의 알렉산더일 수 있습니다. '주께서 갚으시리니'(ἀποδώσει αὐτῷ ὁ κύριος)는 시 28:4; 62:12를 반영합니다.",
      cross_references: ["딤전 1:20 (그 중에 후메내오와 알렉산더가 있으니)", "시 62:12 (주께서 각 사람이 행한 대로 갚으심)", "롬 12:19 (원수 갚는 것이 내게 있으니 내가 갚으리라)"]
    },
    korean_translation: {
      natural_translation: "구리 장색 알렉산더가 내게 해를 많이 입혔으매 주께서 그 행한 대로 그에게 갚으시리니"
    },
    special_explanation: {
      explanation_type: "보복 vs 정의",
      content: "바울은 개인적 보복이 아니라 하나님의 정의를 기대합니다. '주께서 갚으시리니'(ἀποδώσει ὁ κύριος)는 롬 12:19 '원수 갚는 것이 내게 있으니 내가 갚으리라'를 반영합니다."
    }
  },
  {
    reference: "2 Timothy 4:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "경고: 알렉산더를 조심하라",
        original_text: "You too should be on your guard against him, because he strongly opposed our message",
        korean_translation: "너도 그를 조심하라 그가 우리 말을 심히 대적하였느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게도 알렉산더를 '조심하라'(φυλάσσου)고 경고합니다. 이는 교회 보호를 위한 실명 경고입니다.",
      cross_references: []
    },
    korean_translation: {
      natural_translation: "너도 그를 조심하라. 그가 우리 말을 심히 대적하였느니라."
    },
    special_explanation: {
      explanation_type: "실명 경고의 정당성",
      content: "바울은 알렉산더의 이름을 공개적으로 언급하여 경고합니다. 이는 교회를 보호하기 위한 정당한 실명 경고입니다(딤전 1:20; 딤후 2:17도 참조)."
    }
  },
  {
    reference: "2 Timothy 4:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "첫 번째 변론: 버림받음",
        original_text: "At my first defense, no one came to my support, but everyone deserted me",
        korean_translation: "내가 처음 변명할 때에 나와 함께 한 자가 하나도 없고 다 나를 버렸으나"
      },
      {
        sequence_order: 2,
        semantic_classification: "용서의 기도",
        original_text: "May it not be held against them",
        korean_translation: "그들에게 허물을 돌리지 마옵소서"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'첫 번째 변론'(τῇ πρώτῃ μου ἀπολογίᾳ)에서 '아무도 함께하지 않았고'(οὐδείς μοι παρεγένετο) '모두 버렸습니다'(πάντες με ἐγκατέλιπον). 그러나 바울은 '그들에게 허물을 돌리지 마옵소서'(μὴ αὐτοῖς λογισθείη)라고 기도합니다. 이는 예수님(눅 23:34 '아버지 저들을 사하여 주옵소서')과 스데반(행 7:60 '이 죄를 그들에게 돌리지 마옵소서')의 정신입니다.",
      cross_references: ["눅 23:34 (아버지 저들을 사하여 주옵소서 자기들이 하는 것을 알지 못함이니이다)", "행 7:60 (주여 이 죄를 그들에게 돌리지 마옵소서)"]
    },
    korean_translation: {
      natural_translation: "내가 처음 변명할 때에 나와 함께 한 자가 하나도 없고 다 나를 버렸으나 그들에게 허물을 돌리지 마옵소서."
    },
    special_explanation: {
      explanation_type: "용서의 정신",
      content: "바울은 첫 번째 재판에서 모든 사람에게 버림받았지만, '그들에게 허물을 돌리지 마옵소서'(μὴ αὐτοῖς λογισθείη)라고 기도합니다. 이는 예수님(눅 23:34)과 스데반(행 7:60)의 용서 정신을 따르는 것입니다."
    }
  },
  {
    reference: "2 Timothy 4:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주의 함께하심",
        original_text: "But the Lord stood at my side and gave me strength",
        korean_translation: "주께서 내 곁에 서서 나에게 힘을 주심은"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적: 복음 전파",
        original_text: "so that through me the message might be fully proclaimed and all the Gentiles might hear it",
        korean_translation: "나를 통하여 선포된 말씀이 온전히 전파되어 모든 이방인이 듣게 하려 하심이라"
      },
      {
        sequence_order: 3,
        semantic_classification: "구원: 사자 입에서",
        original_text: "And I was delivered from the lion's mouth",
        korean_translation: "내가 사자의 입에서 건짐을 받았느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "사람들은 바울을 버렸지만, '주께서 곁에 서서'(ὁ δὲ κύριός μοι παρέστη) '힘을 주셨습니다'(ἐνεδυνάμωσέν με). 목적은 '선포된 말씀이 온전히 전파되어'(τὸ κήρυγμα πληροφορηθῇ) '모든 이방인이 듣게' 하는 것입니다. '사자의 입에서 건짐'(ἐρρύσθην ἐκ στόματος λέοντος)은 시 22:21; 단 6:22를 암시하며, 네로 황제나 죽음을 가리킬 수 있습니다.",
      cross_references: ["시 22:21 (나를 사자의 입에서 구하소서)", "단 6:22 (나의 하나님이 이미 그의 천사를 보내어 사자들의 입을 봉하셨으므로)", "행 23:11 (주께서 바울 곁에 서서 이르시되 담대하라)"]
    },
    korean_translation: {
      natural_translation: "주께서 내 곁에 서서 나에게 힘을 주심은 나를 통하여 선포된 말씀이 온전히 전파되어 모든 이방인이 듣게 하려 하심이라. 내가 사자의 입에서 건짐을 받았느니라."
    },
    special_explanation: {
      explanation_type: "주의 함께하심과 구원",
      content: "사람들은 바울을 버렸지만, '주께서 곁에 서서'(ὁ κύριός μοι παρέστη) 힘을 주셨습니다(행 23:11과 같음). 목적은 재판정에서도 복음을 전파하여 '모든 이방인이 듣게' 하는 것입니다. '사자의 입에서 건짐'은 시 22:21; 단 6:22를 암시하며, 네로 황제나 즉각적 사형에서의 구원을 가리킵니다."
    }
  },
  {
    reference: "2 Timothy 4:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "확신: 주의 구원",
        original_text: "The Lord will rescue me from every evil attack and will bring me safely to his heavenly kingdom",
        korean_translation: "주께서 나를 모든 악한 일에서 건져내시고 또 그의 천국에 들어가도록 구원하시리니"
      },
      {
        sequence_order: 2,
        semantic_classification: "송영",
        original_text: "To him be glory for ever and ever. Amen",
        korean_translation: "그에게 영광이 세세 무궁토록 있을지어다 아멘"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 '주께서 나를 모든 악한 일에서 건져내시고'(ῥύσεταί με ὁ κύριος ἀπὸ παντὸς ἔργου πονηροῦ) '그의 천국에 들어가도록 구원하실'(σώσει εἰς τὴν βασιλείαν αὐτοῦ τὴν ἐπουράνιον) 것을 확신합니다. 이는 육체적 구원이 아니라 영적 구원과 천국 입성을 의미합니다. 바울은 송영으로 끝맺습니다: '그에게 영광이 세세 무궁토록'(ᾧ ἡ δόξα εἰς τοὺς αἰῶνας τῶν αἰώνων).",
      cross_references: ["마 6:13 (나라와 권세와 영광이 아버지께 영원히 있사옵나이다)", "빌 4:20 (우리 하나님 아버지께 세세 무궁토록 영광을 돌릴지어다)", "딤전 1:17 (영원하신 왕 곧 썩지 아니하고 보이지 아니하고 홀로 하나이신 하나님께 존귀와 영광이 영원무궁하도록 있을지어다)"]
    },
    korean_translation: {
      natural_translation: "주께서 나를 모든 악한 일에서 건져내시고 또 그의 천국에 들어가도록 구원하시리니, 그에게 영광이 세세 무궁토록 있을지어다. 아멘."
    },
    special_explanation: {
      explanation_type: "최종 구원의 확신",
      content: "바울은 육체적 구원이 아니라 영적 최종 구원을 확신합니다: '주께서... 그의 천국에 들어가도록 구원하시리니'(σώσει εἰς τὴν βασιλείαν αὐτοῦ τὴν ἐπουράνιον). 죽음도 하나님의 구원 계획의 일부입니다. 빌 1:21 '내게 사는 것이 그리스도니 죽는 것도 유익함이라'."
    }
  },
  // 마지막 인사들 (4:19-22)
  {
    reference: "2 Timothy 4:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "문안",
        original_text: "Greet Priscilla and Aquila and the household of Onesiphorus",
        korean_translation: "브리스가와 아굴라와 오네시보로의 집에 문안하라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'브리스가와 아굴라'(Πρίσκαν καὶ Ἀκύλαν)는 바울의 오랜 동역자들입니다(행 18:2; 롬 16:3; 고전 16:19). '오네시보로'(Ὀνησιφόρου)는 딤후 1:16-18에서 언급되었습니다.",
      cross_references: ["행 18:2 (아굴라라 하는 본도에서 난 유대인 하나를 만나니)", "롬 16:3 (그리스도 예수 안에서 나의 동역자들인 브리스가와 아굴라)", "딤후 1:16 (오네시보로의 집에 긍휼을 베푸시옵소서)"]
    },
    korean_translation: {
      natural_translation: "브리스가와 아굴라와 오네시보로의 집에 문안하라."
    },
    special_explanation: {
      explanation_type: "신실한 동역자들",
      content: "브리스가와 아굴라는 바울의 오랜 동역자들로, 롬 16:3-4 '그리스도 예수 안에서 나의 동역자들인 브리스가와 아굴라에게 문안하라 그들은 내 목숨을 위하여 자기들의 목까지 내놓았나니'. 오네시보로는 딤후 1:16-18에서 바울을 부끄러워하지 않고 찾아온 사람입니다."
    }
  },
  {
    reference: "2 Timothy 4:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "소식: 에라스도와 드로비모",
        original_text: "Erastus stayed in Corinth, and I left Trophimus sick in Miletus",
        korean_translation: "에라스도는 고린도에 머물러 있고 드로비모는 병들어 밀레도에 두었노니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'에라스도'(Ἔραστος)는 행 19:22; 롬 16:23에서 언급됩니다. '드로비모'(Τρόφιμον)는 행 20:4; 21:29에서 언급되며, 병들어 밀레도에 남았습니다. 이는 바울도 항상 치유할 수 없었음을 보여줍니다(고후 12:7-9; 갈 4:13-14; 빌 2:25-27도 참조).",
      cross_references: ["행 21:29 (전에 드로비모가 바울과 함께 성내에 있음을 보고)", "고후 12:9 (나의 능력이 약한 데서 온전하여짐이라)", "빌 2:25-27 (에바브로디도가 거의 죽게 되었으나)"]
    },
    korean_translation: {
      natural_translation: "에라스도는 고린도에 머물러 있고 드로비모는 병들어 밀레도에 두었노니"
    },
    special_explanation: {
      explanation_type: "사도의 치유 제한",
      content: "드로비모가 '병들어 밀레도에 남았다'(ἀσθενοῦντα ἀφῆκα ἐν Μιλήτῳ)는 것은 바울도 항상 치유할 수 없었음을 보여줍니다. 이는 고후 12:7-9 (바울의 육체의 가시), 갈 4:13-14 (바울의 질병), 빌 2:25-27 (에바브로디도의 병)과 함께, 사도들도 항상 기적적 치유를 행할 수 없었음을 보여줍니다."
    }
  },
  {
    reference: "2 Timothy 4:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "재촉: 겨울 전에 오라",
        original_text: "Do your best to get here before winter",
        korean_translation: "너는 겨울 전에 어서 오라"
      },
      {
        sequence_order: 2,
        semantic_classification: "문안들",
        original_text: "Eubulus greets you, and so do Pudens, Linus, Claudia and all the brothers and sisters",
        korean_translation: "유불로와 부데와 리노와 글라우디아와 모든 형제가 다 네게 문안하느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데가 '겨울 전에'(πρὸ χειμῶνος) 오기를 원합니다. 이는 겨울에는 지중해 항해가 위험했기 때문입니다(행 27:9-12). '리노'(Λίνος)는 초대 교회 전승에서 로마 교회의 첫 번째 감독으로 알려져 있습니다.",
      cross_references: ["행 27:9 (금식하는 절기가 이미 지났으므로 항해하기가 위태한지라)"]
    },
    korean_translation: {
      natural_translation: "너는 겨울 전에 어서 오라. 유불로와 부데와 리노와 글라우디아와 모든 형제가 다 네게 문안하느니라."
    },
    special_explanation: {
      explanation_type: "겨울 전에 오라",
      content: "'겨울 전에'(πρὸ χειμῶνος) 오라는 것은 겨울에는 지중해 항해가 위험했기 때문입니다(행 27:9-12). 리노(Linus)는 교회 전승에서 로마 교회의 첫 번째 감독으로 알려져 있습니다(유세비우스, 교회사 3.2)."
    }
  },
  {
    reference: "2 Timothy 4:22",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "마지막 축복",
        original_text: "The Lord be with your spirit. Grace be with you all",
        korean_translation: "주께서 네 영과 함께 계시기를 원하노라 은혜가 너희와 함께 있을지어다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 두 가지 축복으로 끝맺습니다: (1) '주께서 네 영과 함께 계시기를'(Ὁ κύριος μετὰ τοῦ πνεύματός σου) - 디모데 개인에게, (2) '은혜가 너희와 함께'(Ἡ χάρις μεθ᾽ ὑμῶν) - 복수형으로 교회 전체에게. 이는 디모데가 이 편지를 교회에서 공개적으로 읽을 것을 전제합니다.",
      cross_references: ["갈 6:18 (형제들아 우리 주 예수 그리스도의 은혜가 너희 심령에 있을지어다)", "빌 4:23 (주 예수 그리스도의 은혜가 너희 심령에 있을지어다)"]
    },
    korean_translation: {
      natural_translation: "주께서 네 영과 함께 계시기를 원하노라. 은혜가 너희와 함께 있을지어다."
    },
    special_explanation: {
      explanation_type: "이중 축복",
      content: "바울은 두 가지 축복으로 끝맺습니다: (1) 디모데 개인에게(단수): '주께서 네 영과 함께'(μετὰ τοῦ πνεύματός σου), (2) 교회 전체에게(복수): '은혜가 너희와 함께'(μεθ᾽ ὑμῶν). 이는 개인 편지지만 교회에서 공개적으로 읽힐 것을 전제합니다."
    }
  }
]

async function main() {
  console.log('=== 2 Timothy 4:1-22 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${analyses.length}`)
  console.log('\n🎉 2 Timothy 전체 (83구절) 분석 완료! 🎉')
}

main()
