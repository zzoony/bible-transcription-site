import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Thessalonians 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "발신인과 수신인",
        original_text: "Paul, Silas and Timothy, To the church of the Thessalonians in God our Father and the Lord Jesus Christ",
        korean_translation: "바울과 실라와 디모데는 하나님 우리 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니"
      }
    ],
    vocabulary: [
      {
        word: "Thessalonians",
        ipa_pronunciation: "/ˌθɛsəˈloʊniənz/",
        korean_pronunciation: "데살로니언즈",
        part_of_speech: "명사",
        definition_korean: "데살로니가 사람들",
        usage_note: "마케도니아의 주요 항구 도시 데살로니가의 주민들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가전서와 거의 동일한 인사말입니다(살전 1:1). 차이점은 '하나님 우리 아버지와 주 예수 그리스도 안에'(ἐν θεῷ πατρὶ ἡμῶν καὶ κυρίῳ Ἰησοῦ Χριστῷ)라는 표현이 추가되었습니다. 이는 교회의 정체성이 하나님과 그리스도 안에 있음을 강조합니다. 데살로니가 교회는 바울의 2차 전도여행 때 세워졌습니다(행 17:1-9).",
      cross_references: ["살전 1:1 (바울과 실라와 디모데는 데살로니가인의 교회에)", "행 17:1-9 (데살로니가에서 복음 전파)"]
    },
    korean_translation: {
      natural_translation: "바울과 실라와 디모데는 하나님 우리 아버지와 주 예수 그리스도 안에 있는 데살로니가인의 교회에 편지하노니"
    },
    special_explanation: {
      explanation_type: "데살로니가 교회",
      content: "데살로니가는 마케도니아의 주요 항구 도시로, 로마 제국의 중요한 무역 중심지였습니다. 바울은 2차 전도여행 때 이곳에서 약 3주간 회당에서 전도했습니다(행 17:2). 교회는 유대인과 이방인으로 구성되었으며, 박해를 받았지만 믿음이 견고했습니다(살전 1:6-8)."
    }
  },
  {
    reference: "2 Thessalonians 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "축복",
        original_text: "Grace and peace to you from God the Father and the Lord Jesus Christ",
        korean_translation: "하나님 아버지와 주 예수 그리스도로부터 은혜와 평강이 너희에게 있을지어다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "전형적인 바울의 축복 공식입니다. '은혜'(χάρις)는 하나님의 무상의 호의, '평강'(εἰρήνη)은 히브리어 샬롬(שָׁלוֹם)의 번역으로 완전한 복지와 하나님과의 화평을 의미합니다.",
      cross_references: ["롬 1:7", "고전 1:3", "엡 1:2"]
    },
    korean_translation: {
      natural_translation: "하나님 아버지와 주 예수 그리스도로부터 은혜와 평강이 너희에게 있을지어다."
    },
    special_explanation: {
      explanation_type: "은혜와 평강",
      content: "바울은 모든 서신에서 '은혜와 평강'(χάρις καὶ εἰρήνη)으로 시작합니다. 은혜(χάρις)는 그리스 문화의 인사, 평강(εἰρήνη)은 유대 문화의 샬롬을 결합한 것으로, 복음이 유대인과 이방인을 하나로 만드는 것을 상징합니다."
    }
  },
  {
    reference: "2 Thessalonians 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감사의 의무",
        original_text: "We ought always to thank God for you, brothers and sisters, and rightly so",
        korean_translation: "형제들아 우리가 너희를 위하여 항상 하나님께 감사할 것이 마땅하니 이것이 합당함은"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유: 믿음의 성장",
        original_text: "because your faith is growing more and more, and the love all of you have for one another is increasing",
        korean_translation: "너희 믿음이 더욱 자라고 너희 모두가 서로 사랑함이 풍성함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 '항상 감사할 것이 마땅하다'(ὀφείλομεν εὐχαριστεῖν... καθὼς ἄξιόν ἐστιν)고 말합니다. 이유는 두 가지입니다: (1) 믿음이 '더욱 자라고'(ὑπεραυξάνει, 과도하게 성장하다), (2) 사랑이 '풍성함'(πλεονάζει, 넘쳐흐르다). 살전 3:10, 12에서 바울이 기도했던 것이 응답되었습니다.",
      cross_references: ["살전 3:10 (너희 믿음이 부족한 것을 보충하게 하려 함이라)", "살전 3:12 (주께서 우리가 너희를 사랑함과 같이 너희도 피차간과 모든 사람에 대한 사랑이 더욱 많아 넘치게 하사)"]
    },
    korean_translation: {
      natural_translation: "형제들아 우리가 너희를 위하여 항상 하나님께 감사할 것이 마땅하니 이것이 합당함은 너희 믿음이 더욱 자라고 너희 모두가 서로 사랑함이 풍성함이라."
    },
    special_explanation: {
      explanation_type: "믿음과 사랑의 성장",
      content: "'믿음이 더욱 자라고'(ὑπεραυξάνει)는 '초과하여 성장하다'는 의미의 강한 표현입니다. '사랑이 풍성함'(πλεονάζει)은 '넘쳐흐르다'는 뜻입니다. 이는 살전 3:10, 12에서 바울이 기도했던 내용이 응답된 것입니다."
    }
  },
  {
    reference: "2 Thessalonians 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자랑",
        original_text: "Therefore, among God's churches we boast about your perseverance and faith in all the persecutions and trials you are enduring",
        korean_translation: "그러므로 우리가 너희가 견디고 있는 모든 박해와 환난 중에서 너희 인내와 믿음으로 말미암아 하나님의 여러 교회에서 우리가 친히 자랑하노라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가 교회를 '하나님의 여러 교회에서'(ἐν ταῖς ἐκκλησίαις τοῦ θεοῦ) 자랑합니다. 이유는 '모든 박해와 환난 중에서'(ἐν πᾶσιν τοῖς διωγμοῖς ὑμῶν καὶ ταῖς θλίψεσιν) 보인 '인내와 믿음'(ὑπομονῆς καὶ πίστεως) 때문입니다. 살전 1:6; 2:14에서도 그들의 환난이 언급됩니다.",
      cross_references: ["살전 1:6 (많은 환난 가운데서 성령의 기쁨으로)", "살전 2:14 (유대에 있는 하나님의 교회들이 받은 것과 같은 고난을 동족에게서 받았느니라)"]
    },
    korean_translation: {
      natural_translation: "그러므로 우리가 너희가 견디고 있는 모든 박해와 환난 중에서 너희 인내와 믿음으로 말미암아 하나님의 여러 교회에서 우리가 친히 자랑하노라."
    },
    special_explanation: {
      explanation_type: "박해 중의 인내",
      content: "데살로니가 교회는 계속되는 박해(διωγμοί)와 환난(θλίψεις) 가운데 있었습니다. 행 17:5-9에서 유대인들이 폭동을 일으켰고, 이 박해는 계속되었습니다. 그러나 그들은 인내(ὑπομονή, 견딤)와 믿음(πίστις)을 보였습니다."
    }
  },
  {
    reference: "2 Thessalonians 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "증거: 하나님의 의로운 심판",
        original_text: "All this is evidence that God's judgment is right",
        korean_translation: "이는 하나님의 의로운 심판의 증거니"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적: 하나님 나라에 합당",
        original_text: "and as a result you will be counted worthy of the kingdom of God, for which you are suffering",
        korean_translation: "너희로 하여금 하나님의 나라에 합당한 자로 여기심을 받게 하려 함이라 너희가 그 나라를 위하여 고난을 받느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "데살로니가 교회의 인내는 '하나님의 의로운 심판의 증거'(ἔνδειγμα τῆς δικαίας κρίσεως τοῦ θεοῦ)입니다. 그들의 고난은 무의미하지 않고, '하나님의 나라에 합당한 자로 여김 받게'(εἰς τὸ καταξιωθῆναι ὑμᾶς τῆς βασιλείας τοῦ θεοῦ) 하는 과정입니다. 이는 행 14:22 '우리가 하나님의 나라에 들어가려면 많은 환난을 겪어야 할 것이라'와 같은 원리입니다.",
      cross_references: ["행 14:22 (우리가 하나님의 나라에 들어가려면 많은 환난을 겪어야 할 것이라)", "빌 1:29 (그리스도를 위하여 너희에게 은혜를 주신 것은... 또한 그를 위하여 고난도 받게 하려 하심이라)"]
    },
    korean_translation: {
      natural_translation: "이는 하나님의 의로운 심판의 증거니 너희로 하여금 하나님의 나라에 합당한 자로 여기심을 받게 하려 함이라. 너희가 그 나라를 위하여 고난을 받느니라."
    },
    special_explanation: {
      explanation_type: "고난과 하나님 나라",
      content: "고난은 '하나님 나라에 합당한 자로 여김 받게 하는'(καταξιωθῆναι τῆς βασιλείας) 과정입니다. 이는 고난 자체가 공로가 아니라, 고난 중에 보이는 믿음과 인내가 구원의 진정성을 증명한다는 의미입니다. 행 14:22, 빌 1:29와 같은 원리입니다."
    }
  },
  {
    reference: "2 Thessalonians 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님의 의로운 보응",
        original_text: "God is just: He will pay back trouble to those who trouble you",
        korean_translation: "하나님께서는 의로우사 너희를 괴롭게 하는 자들에게는 환난으로 갚으시고"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'하나님께서는 의로우시므로'(δίκαιον παρὰ θεῷ) 박해자들에게 '환난으로 갚으십니다'(ἀνταποδοῦναι... θλῖψιν). 이는 하나님의 보응 정의(retributive justice)를 나타냅니다. 신 32:35; 롬 12:19 '원수 갚는 것이 내게 있으니 내가 갚으리라'와 같은 원리입니다.",
      cross_references: ["신 32:35 (그들이 실족할 그때에 내가 보복하리라)", "롬 12:19 (원수 갚는 것이 내게 있으니 내가 갚으리라)", "히 10:30 (원수 갚는 것이 내게 있으니 내가 갚으리라)"]
    },
    korean_translation: {
      natural_translation: "하나님께서는 의로우사 너희를 괴롭게 하는 자들에게는 환난으로 갚으시고"
    },
    special_explanation: {
      explanation_type: "하나님의 보응 정의",
      content: "'의로우시므로'(δίκαιον) 하나님은 박해자들에게 '환난으로 갚으십니다'(ἀνταποδοῦναι θλῖψιν). 이는 보응 정의(retributive justice)입니다. 롬 12:19 '원수 갚는 것이 내게 있으니 내가 갚으리라'. 신자는 개인적 보복을 하지 않고 하나님의 정의를 기다립니다."
    }
  },
  {
    reference: "2 Thessalonians 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신자들에게는 안식",
        original_text: "and give relief to you who are troubled, and to us as well",
        korean_translation: "환난을 받는 너희에게는 우리와 함께 안식으로 갚으시는 것이 하나님의 의로우심이라"
      },
      {
        sequence_order: 2,
        semantic_classification: "시기: 주의 재림",
        original_text: "This will happen when the Lord Jesus is revealed from heaven in blazing fire with his powerful angels",
        korean_translation: "주 예수께서 자기의 능력의 천사들과 함께 하늘로부터 불꽃 가운데에 나타나실 때에"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "고난받는 신자들에게는 '안식'(ἄνεσιν, 긴장에서의 해방)을 주십니다. 이는 '주 예수께서 하늘로부터 나타나실 때'(ἐν τῇ ἀποκαλύψει τοῦ κυρίου Ἰησοῦ ἀπ᾽ οὐρανοῦ) 일어납니다. '불꽃 가운데'(ἐν πυρὶ φλογός)는 출 3:2; 19:18의 하나님 현현(theophany)을 연상시킵니다.",
      cross_references: ["출 3:2 (불꽃 가운데에 나타나시니라)", "출 19:18 (시내 산에 연기가 자욱하니 여호와께서 불 가운데서 거기 강림하심)", "계 19:11-16 (하늘이 열린 것을 내가 보니)"]
    },
    korean_translation: {
      natural_translation: "환난을 받는 너희에게는 우리와 함께 안식으로 갚으시는 것이 하나님의 의로우심이라. 주 예수께서 자기의 능력의 천사들과 함께 하늘로부터 불꽃 가운데에 나타나실 때에"
    },
    special_explanation: {
      explanation_type: "그리스도의 재림 현현",
      content: "'나타나실 때'(ἐν τῇ ἀποκαλύψει, at the revelation)는 재림을 가리킵니다. '불꽃 가운데'(ἐν πυρὶ φλογός)는 출 3:2 (떨기나무 불꽃), 출 19:18 (시내산 강림)의 하나님 현현(theophany)을 연상시킵니다. 재림은 심판과 구원을 동반합니다."
    }
  },
  {
    reference: "2 Thessalonians 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "심판의 대상 1: 하나님을 모르는 자",
        original_text: "He will punish those who do not know God",
        korean_translation: "하나님을 모르는 자들과"
      },
      {
        sequence_order: 2,
        semantic_classification: "심판의 대상 2: 복음 불순종",
        original_text: "and do not obey the gospel of our Lord Jesus",
        korean_translation: "우리 주 예수의 복음에 순종하지 않는 자들에게 형벌을 내리시리니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "심판 대상은 두 그룹입니다: (1) '하나님을 모르는 자들'(τοῖς μὴ εἰδόσιν θεόν) - 이방인, (2) '복음에 순종하지 않는 자들'(τοῖς μὴ ὑπακούουσιν τῷ εὐαγγελίῳ) - 복음을 거부한 자들. 롬 1:18-32 (하나님을 알되 하나님을 영화롭게도 감사하지도 아니함)과 연결됩니다.",
      cross_references: ["롬 1:18-32 (하나님을 알되 하나님을 영화롭게도 하지 아니하며)", "롬 10:16 (다 복음을 순종하지 아니하였도다)", "벧전 4:17 (하나님의 집에서 심판을 시작할 때가 되었나니)"]
    },
    korean_translation: {
      natural_translation: "하나님을 모르는 자들과 우리 주 예수의 복음에 순종하지 않는 자들에게 형벌을 내리시리니"
    },
    special_explanation: {
      explanation_type: "두 그룹의 심판",
      content: "심판 대상: (1) '하나님을 모르는 자들'(τοῖς μὴ εἰδόσιν θεόν) - 이방인, 하나님 계시를 거부한 자들, (2) '복음에 순종하지 않는 자들'(τοῖς μὴ ὑπακούουσιν τῷ εὐαγγελίῳ) - 복음을 듣고도 거부한 자들. 이 둘은 겹칠 수 있습니다."
    }
  },
  {
    reference: "2 Thessalonians 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "형벌의 내용",
        original_text: "They will be punished with everlasting destruction and shut out from the presence of the Lord and from the glory of his might",
        korean_translation: "그들은 주의 얼굴과 그의 힘의 영광 앞에서 떠나 영원한 멸망의 형벌을 받으리로다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "형벌은 '영원한 멸망'(ὄλεθρον αἰώνιον)입니다. 이는 '주의 얼굴과 그의 힘의 영광 앞에서 떠남'(ἀπὸ προσώπου τοῦ κυρίου καὶ ἀπὸ τῆς δόξης τῆς ἰσχύος αὐτοῦ)입니다. 사 2:10, 19, 21 '여호와의 영광의 광채 앞에서 떠나'를 반영합니다. 영원한 멸망은 소멸(annihilation)이 아니라 영원한 하나님과의 분리입니다.",
      cross_references: ["사 2:10 (여호와의 위엄과 그 광대하심의 영광 앞에서 떠나 바위 틈에 들어가며)", "마 25:41 (너희는 나를 떠나 마귀와 그 사자들을 위하여 예비된 영원한 불에 들어가라)", "계 14:11 (그 고난의 연기가 세세토록 올라가리로다)"]
    },
    korean_translation: {
      natural_translation: "그들은 주의 얼굴과 그의 힘의 영광 앞에서 떠나 영원한 멸망의 형벌을 받으리로다."
    },
    special_explanation: {
      explanation_type: "영원한 멸망",
      content: "'영원한 멸망'(ὄλεθρον αἰώνιον)은 소멸(annihilation)이 아니라 '주의 얼굴과 영광 앞에서 떠남'(ἀπὸ προσώπου... καὶ ἀπὸ τῆς δόξης)입니다. 이는 영원한 하나님과의 분리, 영원한 고통을 의미합니다(마 25:41, 46; 계 14:11)."
    }
  },
  {
    reference: "2 Thessalonians 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "시기: 주의 재림",
        original_text: "on the day he comes to be glorified in his holy people and to be marveled at among all those who have believed",
        korean_translation: "그 날에 그가 강림하사 그의 성도들에게서 영광을 받으시고 모든 믿는 자들에게서 놀랍게 여김을 얻으시리니"
      },
      {
        sequence_order: 2,
        semantic_classification: "확증",
        original_text: "This includes you, because you believed our testimony to you",
        korean_translation: "우리의 증거가 너희에게 믿어졌음이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "재림 시 그리스도는 '그의 성도들에게서 영광을 받으시고'(ἐνδοξασθῆναι ἐν τοῖς ἁγίοις αὐτοῦ) '모든 믿는 자들에게서 놀랍게 여김을 얻으십니다'(θαυμασθῆναι ἐν πᾶσιν τοῖς πιστεύσασιν). 이는 시 89:7 '거룩한 자들의 모임 가운데에서 심히 존경 받으시며'를 반영합니다. 데살로니가 교회도 포함됩니다.",
      cross_references: ["시 89:7 (하나님은 거룩한 자들의 모임 가운데에서 심히 존경 받으시며)", "골 3:4 (그리스도께서 우리 생명이신 그가 나타나실 그때에 너희도 그와 함께 영광 중에 나타나리라)"]
    },
    korean_translation: {
      natural_translation: "그 날에 그가 강림하사 그의 성도들에게서 영광을 받으시고 모든 믿는 자들에게서 놀랍게 여김을 얻으시리니, 우리의 증거가 너희에게 믿어졌음이라."
    },
    special_explanation: {
      explanation_type: "성도들 안에서의 영광",
      content: "그리스도는 재림 시 '성도들 안에서'(ἐν τοῖς ἁγίοις αὐτοῦ) 영광을 받으십니다. 이는 구원받은 성도들이 그리스도의 영광을 반영하고 증거한다는 뜻입니다. 골 3:4 '그리스도께서 우리 생명이신 그가 나타나실 그때에 너희도 그와 함께 영광 중에 나타나리라'."
    }
  },
  {
    reference: "2 Thessalonians 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도의 이유",
        original_text: "With this in mind, we constantly pray for you",
        korean_translation: "이러므로 우리도 항상 너희를 위하여 기도함은"
      },
      {
        sequence_order: 2,
        semantic_classification: "기도 내용 1: 부르심에 합당",
        original_text: "that our God may make you worthy of his calling",
        korean_translation: "우리 하나님이 너희를 그 부르심에 합당한 자로 여기시고"
      },
      {
        sequence_order: 3,
        semantic_classification: "기도 내용 2: 선의 뜻과 믿음의 역사 이루심",
        original_text: "and that by his power he may bring to fruition your every desire for goodness and your every deed prompted by faith",
        korean_translation: "모든 선을 기뻐함과 믿음의 역사를 능력으로 이루게 하시고"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가 교회를 위해 '항상 기도합니다'(προσευχόμεθα πάντοτε). 기도 내용: (1) '부르심에 합당한 자로 여기심'(ἀξιώσῃ τῆς κλήσεως) - 이는 하나님의 사역입니다, (2) '모든 선을 기뻐함과 믿음의 역사를 능력으로 이루심'(πληρώσῃ πᾶσαν εὐδοκίαν ἀγαθωσύνης καὶ ἔργον πίστεως ἐν δυνάμει). 이는 빌 2:13 '너희 안에서 행하시는 이는 하나님이시니 자기의 기쁘신 뜻을 위하여 너희에게 소원을 두고 행하게 하시나니'와 같습니다.",
      cross_references: ["빌 2:13 (하나님이시니 자기의 기쁘신 뜻을 위하여 너희에게 소원을 두고 행하게 하시나니)", "엡 1:18 (그의 부르심의 소망이 무엇이며)", "살전 2:12 (자기 나라와 영광에 이르게 하시는 하나님께 합당히 행하게 하려 함이라)"]
    },
    korean_translation: {
      natural_translation: "이러므로 우리도 항상 너희를 위하여 기도함은 우리 하나님이 너희를 그 부르심에 합당한 자로 여기시고 모든 선을 기뻐함과 믿음의 역사를 능력으로 이루게 하시고"
    },
    special_explanation: {
      explanation_type: "부르심에 합당",
      content: "'부르심에 합당한 자로 여기심'(ἀξιώσῃ τῆς κλήσεως)은 하나님의 사역입니다. 인간은 스스로 합당해질 수 없고, 하나님이 합당하게 만드십니다. '모든 선을 기뻐함과 믿음의 역사를 능력으로 이루심'도 하나님의 능력(ἐν δυνάμει)으로 됩니다. 빌 2:13과 같은 원리입니다."
    }
  },
  {
    reference: "2 Thessalonians 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "목적: 예수의 이름이 영광 받음",
        original_text: "We pray this so that the name of our Lord Jesus may be glorified in you, and you in him",
        korean_translation: "우리 주 예수의 이름이 너희 가운데서 영광을 받으시고 너희도 그 안에서 영광을 받게 하려 함이라"
      },
      {
        sequence_order: 2,
        semantic_classification: "근거: 하나님의 은혜",
        original_text: "according to the grace of our God and the Lord Jesus Christ",
        korean_translation: "이는 우리 하나님과 주 예수 그리스도의 은혜대로 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "기도의 궁극적 목적은 '주 예수의 이름이 너희 가운데서 영광을 받으시고'(ἐνδοξασθῇ τὸ ὄνομα τοῦ κυρίου ἡμῶν Ἰησοῦ ἐν ὑμῖν) '너희도 그 안에서 영광을 받게'(ὑμεῖς ἐν αὐτῷ) 하는 것입니다. 이는 상호적 영광(mutual glorification)입니다: 그리스도는 성도들을 통해 영광 받으시고, 성도들은 그리스도 안에서 영광을 받습니다. 이 모든 것은 '하나님과 주 예수 그리스도의 은혜대로'(κατὰ τὴν χάριν τοῦ θεοῦ ἡμῶν καὶ κυρίου Ἰησοῦ Χριστοῦ) 됩니다.",
      cross_references: ["요 17:10 (내 것은 다 아버지의 것이요 아버지의 것은 내 것이온데 내가 그들로 말미암아 영광을 받았나이다)", "빌 1:20 (나의 몸에서 그리스도가 존귀하게 되게 하려 하나니)", "벧전 4:11 (모든 일에 예수 그리스도로 말미암아 하나님이 영광을 받으시게 하려 함이니)"]
    },
    korean_translation: {
      natural_translation: "우리 주 예수의 이름이 너희 가운데서 영광을 받으시고 너희도 그 안에서 영광을 받게 하려 함이라. 이는 우리 하나님과 주 예수 그리스도의 은혜대로 함이라."
    },
    special_explanation: {
      explanation_type: "상호적 영광",
      content: "그리스도는 성도들 '안에서'(ἐν ὑμῖν) 영광을 받으시고, 성도들은 그리스도 '안에서'(ἐν αὐτῷ) 영광을 받습니다. 이는 상호적 영광(mutual glorification)입니다. 요 17:10 '내가 그들로 말미암아 영광을 받았나이다'. 이 모든 것은 은혜(χάρις)로 됩니다."
    }
  }
]

async function main() {
  console.log('=== 2 Thessalonians 1:1-12 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${analyses.length}`)
}

main()
