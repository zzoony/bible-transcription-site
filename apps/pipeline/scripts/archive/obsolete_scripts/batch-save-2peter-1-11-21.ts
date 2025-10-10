import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Peter 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "약속의 확장",
        original_text: "and you will receive a rich welcome into the eternal kingdom of our Lord and Savior Jesus Christ",
        korean_translation: "우리 주이시며 구주이신 예수 그리스도의 영원한 나라에 풍성하게 들어가게 될 것입니다",
        grammatical_explanation: "πλουσίως ἐπιχορηγηθήσεται ὑμῖν(풍성하게 공급될 것) + ἡ εἴσοδος(입장) + εἰς τὴν αἰώνιον βασιλείαν(영원한 나라 안으로)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "1:10의 약속이 계속됩니다. 미덕을 추구하는 자들은 단지 하나님 나라에 '들어갈' 뿐 아니라 '풍성하게' 환영받으며 들어갑니다. 이는 마 25:21, 23의 '주인의 즐거움에 참여하라'와 유사합니다."
    },
    korean_translation: {
      natural_translation: "우리 주이시며 구주이신 예수 그리스도의 영원한 나라에 풍성하게 들어가게 될 것입니다."
    }
  },
  {
    reference: "2 Peter 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "집필 목적",
        original_text: "So I will always remind you of these things, even though you know them and are firmly established in the truth you now have",
        korean_translation: "그러므로 여러분이 이런 것들을 알고 지금 가진 진리 안에 굳게 서 있을지라도, 나는 항상 여러분에게 이것들을 상기시키려 합니다",
        grammatical_explanation: "καίπερ εἰδότας(알고 있을지라도) + ἐστηριγμένους(굳게 세워진), 양보절"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 이미 아는 진리라도 반복해서 상기시키는 것이 중요하다고 봅니다. 이는 교회의 교육 사역의 핵심입니다 - 새로운 계시가 아니라 기존 진리의 반복입니다."
    },
    korean_translation: {
      natural_translation: "그러므로 여러분이 이런 것들을 알고 지금 가진 진리 안에 굳게 서 있을지라도, 나는 항상 여러분에게 이것들을 상기시키려 합니다."
    }
  },
  {
    reference: "2 Peter 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "베드로의 사명",
        original_text: "I think it is right to refresh your memory as long as I live in the tent of this body",
        korean_translation: "내가 이 장막에 있는 동안 여러분의 기억을 일깨우는 것이 옳다고 생각합니다",
        grammatical_explanation: "ἐφ' ὅσον εἰμὶ ἐν τούτῳ τῷ σκηνώματι(이 장막 안에 있는 동안) + διεγείρειν ὑμᾶς(여러분을 깨우다)"
      }
    ],
    vocabulary: [
      {
        word: "tent",
        ipa_pronunciation: "/tent/",
        korean_pronunciation: "텐트",
        part_of_speech: "명사",
        definition_korean: "장막, 천막",
        usage_note: "σκήνωμα, 육신의 비유"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 육신을 '장막'(σκήνωμα)이라고 부릅니다. 이는 임시 거처의 이미지로, 바울의 표현(고후 5:1-4)과 유사합니다. 베드로는 죽음이 임박함을 알고 있습니다(1:14)."
    },
    korean_translation: {
      natural_translation: "내가 이 장막에 있는 동안 여러분의 기억을 일깨우는 것이 옳다고 생각합니다."
    }
  },
  {
    reference: "2 Peter 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "순교 예고",
        original_text: "because I know that I will soon put it aside, as our Lord Jesus Christ has made clear to me",
        korean_translation: "우리 주 예수 그리스도께서 내게 분명히 보여 주신 것처럼, 나는 이 장막을 곧 벗게 될 것을 알기 때문입니다",
        grammatical_explanation: "ταχινή ἐστιν ἡ ἀπόθεσις τοῦ σκηνώματός μου(내 장막의 벗음이 빠르다) + καθὼς... ἐδήλωσέν μοι(보여주신 대로)"
      }
    ],
    vocabulary: [
      {
        word: "put aside",
        ipa_pronunciation: "/pʊt əˈsaɪd/",
        korean_pronunciation: "풋 어사이드",
        part_of_speech: "동사구",
        definition_korean: "벗다, 내려놓다",
        usage_note: "ἀπόθεσις, 옷 벗기, 죽음의 완곡어법"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 자신의 죽음이 임박했음(ταχινή, 빠른)을 알고 있습니다. 이는 요 21:18-19에서 예수께서 베드로의 순교를 예고하신 것을 가리킵니다. 전승에 따르면 베드로는 AD 64-67년경 네로 황제의 박해 때 거꾸로 십자가에 못 박혀 순교했습니다."
    },
    korean_translation: {
      natural_translation: "우리 주 예수 그리스도께서 내게 분명히 보여 주신 것처럼, 나는 이 장막을 곧 벗게 될 것을 알기 때문입니다."
    },
    special_explanation: {
      explanation_type: "베드로의 순교 예고",
      content: "ταχινή ἐστιν ἡ ἀπόθεσις τοῦ σκηνώματός μου(내 장막의 벗음이 빠르다)는 베드로의 임박한 순교를 가리킵니다. 예수께서 요 21:18-19에서 베드로의 죽음을 예고하셨습니다: '네가 늙어서는 네 팔을 벌리리니 남이 네게 띠 띠우고 원치 않는 곳으로 데려가리라.' 초대 교회 전승(유세비우스)에 따르면 베드로는 로마에서 거꾸로 십자가에 못 박혀 순교했습니다."
    }
  },
  {
    reference: "2 Peter 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "유산 남기기",
        original_text: "And I will make every effort to see that after my departure you will always be able to remember these things",
        korean_translation: "그리고 나는 내가 떠난 후에도 여러분이 항상 이것들을 기억할 수 있도록 힘쓸 것입니다",
        grammatical_explanation: "σπουδάσω(힘쓰겠다) + μετὰ τὴν ἐμὴν ἔξοδον(내 떠남 후에) + ἔχειν τὴν τούτων μνήμην(이것들의 기억을 갖다)"
      }
    ],
    vocabulary: [
      {
        word: "departure",
        ipa_pronunciation: "/dɪˈpɑːrtʃər/",
        korean_pronunciation: "디파처",
        part_of_speech: "명사",
        definition_korean: "떠남, 출발",
        usage_note: "ἔξοδος, 출애굽, 죽음의 완곡어법"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 자신의 죽음을 '출애굽'(ἔξοδος, exodus)이라고 부릅니다. 이는 눅 9:31에서 예수의 죽음을 '출애굽'으로 부른 것과 동일한 용어입니다. 베드로는 이 서신(2 Peter)을 자신의 '영적 유언'으로 남기고 있습니다."
    },
    korean_translation: {
      natural_translation: "그리고 나는 내가 떠난 후에도 여러분이 항상 이것들을 기억할 수 있도록 힘쓸 것입니다."
    },
    special_explanation: {
      explanation_type: "출애굽(Exodus)으로서의 죽음",
      content: "τὴν ἐμὴν ἔξοδον(나의 출애굽)은 죽음의 아름다운 표현입니다. ἔξοδος는 (1) 출애굽(Exodus) 사건, (2) 죽음을 가리킵니다. 눅 9:31에서 예수의 죽음도 '출애굽'(ἔξοδος)으로 불립니다. 죽음은 애굽(이 세상)을 떠나 약속의 땅(하나님 나라)으로 가는 출애굽입니다(히 11:13-16)."
    }
  },
  {
    reference: "2 Peter 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "목격자 증언",
        original_text: "For we did not follow cleverly devised stories when we told you about the coming of our Lord Jesus Christ in power, but we were eyewitnesses of his majesty",
        korean_translation: "우리가 우리 주 예수 그리스도의 능력 있는 재림에 대해 여러분에게 알릴 때, 교묘하게 꾸민 이야기를 따른 것이 아니라 그분의 위엄을 직접 목격한 증인들입니다",
        grammatical_explanation: "οὐ σεσοφισμένοις μύθοις(교묘하게 만들어진 신화들이 아니다) + ἀλλὰ ἐπόπται γενηθέντες(오히려 목격자가 되어)"
      }
    ],
    vocabulary: [
      {
        word: "cleverly devised",
        ipa_pronunciation: "/ˈklevərli dɪˈvaɪzd/",
        korean_pronunciation: "클레벌리 디바이즈드",
        part_of_speech: "형용사구",
        definition_korean: "교묘하게 꾸민",
        usage_note: "σοφίζω, 지혜롭게 만들다, 조작하다"
      },
      {
        word: "eyewitnesses",
        ipa_pronunciation: "/ˈaɪwɪtnəsɪz/",
        korean_pronunciation: "아이위트니시스",
        part_of_speech: "명사",
        definition_korean: "목격자",
        usage_note: "ἐπόπτης, 직접 본 자"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 복음이 '꾸며낸 신화'(μῦθος)가 아니라 역사적 사실임을 강조합니다. 그는 예수의 '위엄'(μεγαλειότης)을 직접 목격한 증인입니다. 이는 변화산 사건(마 17:1-8)을 가리킵니다(1:17-18)."
    },
    korean_translation: {
      natural_translation: "우리가 우리 주 예수 그리스도의 능력 있는 재림에 대해 여러분에게 알릴 때, 교묘하게 꾸민 이야기를 따른 것이 아니라 그분의 위엄을 직접 목격한 증인들입니다."
    },
    special_explanation: {
      explanation_type: "신화 vs 목격자 증언",
      content: "οὐ σεσοφισμένοις μύθοις(교묘하게 만들어진 신화들이 아니다)는 영지주의와 헬라 종교의 신화들을 반박합니다. 기독교는 μῦθος(만들어진 이야기)가 아니라 역사적 사실입니다. ἐπόπται(목격자)는 그리스 신비 종교에서 '입문자'를 가리키는 용어인데, 베드로는 이를 재정의하여 '직접 본 자'의 의미로 사용합니다. τῆς ἐκείνου μεγαλειότητος(그분의 위엄)은 변화산에서 드러난 예수의 영광입니다."
    }
  },
  {
    reference: "2 Peter 1:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "변화산 증언",
        original_text: "He received honor and glory from God the Father when the voice came to him from the Majestic Glory, saying, 'This is my Son, whom I love; with him I am well pleased.'",
        korean_translation: "그분이 하나님 아버지로부터 영예와 영광을 받으실 때, 지극히 큰 영광으로부터 '이는 내 사랑하는 아들이요 내 기뻐하는 자라'는 음성이 그분에게 들려왔습니다",
        grammatical_explanation: "λαβὼν... τιμὴν καὶ δόξαν(영예와 영광을 받으심) + φωνῆς ἐνεχθείσης αὐτῷ(그에게 전해진 음성)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 변화산 사건(마 17:1-8, 막 9:2-8, 눅 9:28-36)을 증언합니다. 하나님 아버지께서 구름 속에서 예수를 '내 사랑하는 아들'로 선언하셨습니다. 이는 예수의 신적 권위와 메시아 정체성의 확증입니다."
    },
    korean_translation: {
      natural_translation: "그분이 하나님 아버지로부터 영예와 영광을 받으실 때, 지극히 큰 영광으로부터 '이는 내 사랑하는 아들이요 내 기뻐하는 자라'는 음성이 그분에게 들려왔습니다."
    },
    special_explanation: {
      explanation_type: "변화산 사건",
      content: "베드로는 변화산(마 17:1-8)을 재림의 예표로 해석합니다. τῆς μεγαλοπρεποῦς δόξης(지극히 큰 영광)는 하나님의 임재를 가리키는 쉐키나 영광입니다. 하나님의 음성은 시 2:7('너는 내 아들이라')과 사 42:1('내 기뻐하는 자')를 결합합니다. 베드로, 야고보, 요한은 이 사건의 목격자였습니다(마 17:1)."
    }
  },
  {
    reference: "2 Peter 1:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "베드로의 증언",
        original_text: "We ourselves heard this voice that came from heaven when we were with him on the sacred mountain",
        korean_translation: "우리가 그분과 함께 거룩한 산에 있을 때 하늘로부터 온 이 음성을 우리 자신이 들었습니다",
        grammatical_explanation: "καὶ ταύτην τὴν φωνὴν ἡμεῖς ἠκούσαμεν(이 음성을 우리가 들었다) + σὺν αὐτῷ ὄντες ἐν τῷ ὄρει τῷ ἁγίῳ(거룩한 산에서 그와 함께 있으면서)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 '우리 자신이'(ἡμεῖς) 직접 들었음을 강조합니다. 이는 1인칭 복수로, 베드로, 야고보, 요한의 공동 증언입니다. '거룩한 산'은 전통적으로 다볼 산(Mt. Tabor)으로 여겨지지만, 헤르몬 산일 가능성도 있습니다."
    },
    korean_translation: {
      natural_translation: "우리가 그분과 함께 거룩한 산에 있을 때 하늘로부터 온 이 음성을 우리 자신이 들었습니다."
    }
  },
  {
    reference: "2 Peter 1:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "예언의 확증",
        original_text: "We also have the prophetic message as something completely reliable, and you will do well to pay attention to it, as to a light shining in a dark place, until the day dawns and the morning star rises in your hearts",
        korean_translation: "우리에게는 더욱 확실한 예언의 말씀이 있습니다. 날이 새고 새벽별이 여러분 마음에 떠오를 때까지, 어두운 곳을 비추는 등불처럼 그것에 주의를 기울이는 것이 좋습니다",
        grammatical_explanation: "βεβαιότερον τὸν προφητικὸν λόγον(더 확실한 예언의 말씀) + ὡς λύχνῳ φαίνοντι ἐν αὐχμηρῷ τόπῳ(어두운 곳에서 빛나는 등불처럼)"
      }
    ],
    vocabulary: [
      {
        word: "reliable",
        ipa_pronunciation: "/rɪˈlaɪəbl/",
        korean_pronunciation: "릴라이어블",
        part_of_speech: "형용사",
        definition_korean: "확실한, 믿을 만한",
        usage_note: "βέβαιος, 안정된, 확고한"
      },
      {
        word: "morning star",
        ipa_pronunciation: "/ˈmɔːrnɪŋ stɑːr/",
        korean_pronunciation: "모닝 스타",
        part_of_speech: "명사구",
        definition_korean: "새벽별, 샛별",
        usage_note: "φωσφόρος, 빛을 가져오는 자"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 변화산 경험(1:16-18)보다 '더 확실한'(βεβαιότερον) 것으로 '예언의 말씀'(구약 성경)을 제시합니다. 성경은 '어두운 곳'(이 세상)을 비추는 '등불'입니다. '새벽별'(φωσφόρος)은 그리스도(계 22:16)를 가리키며, 그분의 재림까지 성경에 주의를 기울여야 합니다."
    },
    korean_translation: {
      natural_translation: "우리에게는 더욱 확실한 예언의 말씀이 있습니다. 날이 새고 새벽별이 여러분 마음에 떠오를 때까지, 어두운 곳을 비추는 등불처럼 그것에 주의를 기울이는 것이 좋습니다."
    },
    special_explanation: {
      explanation_type: "성경과 새벽별",
      content: "βεβαιότερον τὸν προφητικὸν λόγον(더 확실한 예언의 말씀)은 논쟁적입니다. (1) 변화산 경험보다 성경이 '더' 확실하다? (2) 아니면 변화산 경험이 성경을 '더욱' 확실하게 만들었다? 후자가 문법적으로 더 타당합니다. φωσφόρος(새벽별, morning star)는 계 22:16의 '빛나는 새벽별'(ὁ ἀστὴρ ὁ λαμπρὸς ὁ πρωϊνός)인 그리스도를 가리킵니다. 재림까지 성경이 우리의 등불입니다(시 119:105)."
    }
  },
  {
    reference: "2 Peter 1:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성경 해석 원리",
        original_text: "Above all, you must understand that no prophecy of Scripture came about by the prophet's own interpretation of things",
        korean_translation: "무엇보다도 여러분은 이것을 알아야 합니다. 성경의 어떤 예언도 사사로이 풀이된 것이 아닙니다",
        grammatical_explanation: "πᾶσα προφητεία γραφῆς ἰδίας ἐπιλύσεως οὐ γίνεται(모든 성경 예언은 사적 해석에서 생기지 않는다)"
      }
    ],
    vocabulary: [
      {
        word: "interpretation",
        ipa_pronunciation: "/ɪnˌtɜːrprɪˈteɪʃn/",
        korean_pronunciation: "인터프리테이션",
        part_of_speech: "명사",
        definition_korean: "해석, 풀이",
        usage_note: "ἐπίλυσις, 풀어냄, 설명"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "'사사로이 풀이'(ἰδίας ἐπιλύσεως)는 두 가지로 해석됩니다: (1) 예언자 자신의 해석이 아니다(기원), (2) 개인적 해석으로만 풀 수 없다(적용). 문맥상 (1)이 타당합니다 - 예언자들은 자기 생각이 아니라 하나님의 계시를 전했습니다(1:21)."
    },
    korean_translation: {
      natural_translation: "무엇보다도 여러분은 이것을 알아야 합니다. 성경의 어떤 예언도 사사로이 풀이된 것이 아닙니다."
    },
    special_explanation: {
      explanation_type: "사적 해석(Private Interpretation)",
      content: "ἰδίας ἐπιλύσεως οὐ γίνεται(사적 해석에서 생기지 않는다)는 두 가지 해석이 가능합니다: (1) 기원 해석 - 예언자가 자기 생각으로 예언한 것이 아니다(이어지는 1:21이 이를 설명), (2) 적용 해석 - 성경을 개인이 마음대로 해석할 수 없다. 문맥상 (1)이 타당하지만, (2)도 간접적으로 함축됩니다. 성경은 성령의 감동으로 기록되었으므로(1:21), 성령의 조명으로 해석되어야 합니다."
    }
  },
  {
    reference: "2 Peter 1:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성경 영감 교리",
        original_text: "For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit",
        korean_translation: "예언은 사람의 뜻으로부터 나온 것이 결코 아니라, 사람들이 성령에 이끌려 하나님으로부터 말한 것입니다",
        grammatical_explanation: "οὐ θελήματι ἀνθρώπου ἠνέχθη προφητεία ποτέ(예언은 결코 사람의 뜻에 의해 전해지지 않았다) + ἀλλὰ... ὑπὸ πνεύματος ἁγίου φερόμενοι(성령에 의해 운반되어)"
      }
    ],
    vocabulary: [
      {
        word: "carried along",
        ipa_pronunciation: "/ˈkærid əˈlɔːŋ/",
        korean_pronunciation: "캐리드 얼롱",
        part_of_speech: "동사구",
        definition_korean: "이끌리다, 운반되다",
        usage_note: "φέρω, 나르다, 운반하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 성경 영감 교리의 핵심입니다. 예언자들은 자기 뜻이 아니라 '성령에 이끌려'(ὑπὸ πνεύματος ἁγίου φερόμενοι) 하나님의 말씀을 전했습니다. φέρω(운반하다)는 행 27:15, 17에서 배가 바람에 밀려가는 것을 묘사하는 단어입니다. 예언자들은 성령의 주권적 인도 아래 있었습니다."
    },
    korean_translation: {
      natural_translation: "예언은 사람의 뜻으로부터 나온 것이 결코 아니라, 사람들이 성령에 이끌려 하나님으로부터 말한 것입니다."
    },
    special_explanation: {
      explanation_type: "성경 영감(Inspiration)",
      content: "ὑπὸ πνεύματος ἁγίου φερόμενοι ἐλάλησαν ἀπὸ θεοῦ ἄνθρωποι(성령에 의해 운반되어 하나님으로부터 말한 사람들)는 성경 영감 교리의 완벽한 요약입니다. 세 가지 요소: (1) 인간 저자(ἄνθρωποι), (2) 신적 기원(ἀπὸ θεοῦ), (3) 성령의 주권적 인도(ὑπὸ πνεύματος ἁγίου φερόμενοι). φέρω(운반하다)는 배가 바람에 떠밀려가는 이미지(행 27:15, 17)로, 예언자들이 성령의 주권적 통제 아래 있었음을 보여줍니다. 이는 딤후 3:16의 θεόπνευστος(하나님이 숨을 불어넣은)와 보완적입니다."
    }
  }
]

async function main() {
  console.log('=== 2 Peter 1:11-21 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 2 Peter 1장 완료! ===')
}

main().catch(console.error)
