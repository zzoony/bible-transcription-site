import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Thessalonians 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "간청 도입",
        original_text: "Concerning the coming of our Lord Jesus Christ and our being gathered to him, we ask you, brothers and sisters",
        korean_translation: "우리 주 예수 그리스도의 재림과 우리가 그분께로 모이는 것에 관하여, 형제자매 여러분, 우리가 여러분에게 간청합니다",
        grammatical_explanation: "περί(concerning) + 속격 명사구로 주제 제시. 두 가지 사건: (1) 재림, (2) 성도들의 모임"
      }
    ],
    vocabulary: [
      {
        word: "concerning",
        ipa_pronunciation: "/kənˈsɜːrnɪŋ/",
        korean_pronunciation: "컨서닝",
        part_of_speech: "전치사",
        definition_korean: "~에 관하여",
        usage_note: "περί + 속격, 주제 도입"
      },
      {
        word: "gathered",
        ipa_pronunciation: "/ˈɡæðərd/",
        korean_pronunciation: "개더드",
        part_of_speech: "과거분사",
        definition_korean: "모이다",
        usage_note: "ἐπισυναγωγή, 재림 시 성도들의 집합"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 2장에서 재림 전 일어날 배교와 불법의 사람에 대해 가르칩니다. 데살로니가 교회가 '주의 날이 이미 왔다'는 거짓 가르침에 동요되고 있었기 때문입니다(2:2). 바울은 재림 전 반드시 선행될 사건들(배교, 불법의 사람 출현)을 설명하여 교회를 안정시킵니다."
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 우리 주 예수 그리스도의 재림과 우리가 그분께로 모이는 것에 관하여 여러분에게 간청합니다."
    },
    special_explanation: {
      explanation_type: "재림과 성도의 모임",
      content: "바울은 두 가지를 연결합니다: (1) παρουσία(재림, coming), (2) ἐπισυναγωγή(모임, gathering). 이는 그리스도의 재림 시 성도들이 그분께로 모이는 사건을 가리킵니다(1 Thess 4:17의 '공중에서 주를 영접'과 동일)."
    }
  },
  {
    reference: "2 Thessalonians 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "금지 명령",
        original_text: "not to become easily unsettled or alarmed by the teaching allegedly from us—whether by a prophecy or by word of mouth or by letter",
        korean_translation: "우리에게서 나온 것이라고 주장하는 가르침에 의해—예언이든, 구두로든, 편지로든—쉽게 마음이 흔들리거나 불안해하지 마십시오",
        grammatical_explanation: "부정사 μὴ ταχέως σαλευθῆναι(not to be shaken), 세 가지 출처: (1) πνεύματος(영/예언), (2) λόγου(말), (3) ἐπιστολῆς(편지)"
      },
      {
        sequence_order: 2,
        semantic_classification: "거짓 가르침의 내용",
        original_text: "asserting that the day of the Lord has already come",
        korean_translation: "주의 날이 이미 왔다고 주장하는 것",
        grammatical_explanation: "ὡς ὅτι ἐνέστηκεν ἡ ἡμέρα τοῦ κυρίου, '주의 날이 현재 진행 중이다'라는 거짓 주장"
      }
    ],
    vocabulary: [
      {
        word: "unsettled",
        ipa_pronunciation: "/ʌnˈsetld/",
        korean_pronunciation: "언세틀드",
        part_of_speech: "형용사",
        definition_korean: "흔들리다, 동요하다",
        usage_note: "σαλεύω, 배가 폭풍에 흔들리는 이미지"
      },
      {
        word: "alarmed",
        ipa_pronunciation: "/əˈlɑːrmd/",
        korean_pronunciation: "얼라암드",
        part_of_speech: "형용사",
        definition_korean: "놀라다, 불안해하다",
        usage_note: "θροέω, 공황 상태"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가 교회에 거짓 교사들이 바울의 이름을 빌려 '주의 날이 이미 왔다'고 가르쳤습니다. 이는 성도들을 극심한 혼란에 빠뜨렸고, 바울은 이 거짓 가르침을 강력하게 반박합니다."
    },
    korean_translation: {
      natural_translation: "우리에게서 나왔다고 주장하는—예언이든, 말이든, 편지든—가르침 때문에 쉽게 마음이 흔들리거나 불안해하지 마십시오. 주의 날이 이미 왔다는 주장 말입니다."
    },
    special_explanation: {
      explanation_type: "거짓 가르침의 세 가지 출처",
      content: "바울은 거짓 가르침이 세 가지 형태로 전파되고 있음을 지적합니다: (1) πνεῦμα(영적 계시나 예언), (2) λόγος(구두 설교), (3) ἐπιστολή(위조된 편지). 특히 바울의 이름으로 위조된 편지가 유통되고 있었던 것으로 보입니다."
    }
  },
  {
    reference: "2 Thessalonians 2:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "강력한 경고",
        original_text: "Don't let anyone deceive you in any way",
        korean_translation: "아무도 어떤 방법으로든 여러분을 속이지 못하게 하십시오",
        grammatical_explanation: "금지 명령, μή τις + 접속법, 강력한 경고"
      },
      {
        sequence_order: 2,
        semantic_classification: "재림 전 선행 사건",
        original_text: "for that day will not come until the rebellion occurs and the man of lawlessness is revealed, the man doomed to destruction",
        korean_translation: "그 날은 배교가 일어나고 불법의 사람, 곧 멸망의 아들이 나타나기 전에는 오지 않을 것입니다",
        grammatical_explanation: "ἐὰν μὴ(unless) + 두 가지 선행 조건: (1) 배교(ἡ ἀποστασία), (2) 불법의 사람 출현"
      }
    ],
    vocabulary: [
      {
        word: "rebellion",
        ipa_pronunciation: "/rɪˈbeljən/",
        korean_pronunciation: "리벨리언",
        part_of_speech: "명사",
        definition_korean: "배교, 반역",
        usage_note: "ἀποστασία, 신앙으로부터의 이탈"
      },
      {
        word: "lawlessness",
        ipa_pronunciation: "/ˈlɔːləsnəs/",
        korean_pronunciation: "로리스니스",
        part_of_speech: "명사",
        definition_korean: "불법, 무법",
        usage_note: "ἀνομία, 하나님의 율법 거부"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 재림 전 반드시 일어날 두 가지 사건을 명확히 합니다: (1) 배교(the rebellion) - 대규모 신앙 이탈, (2) 불법의 사람(the man of lawlessness) 출현 - 적그리스도 인물. 이 두 사건이 일어나기 전에는 주의 날이 오지 않습니다."
    },
    korean_translation: {
      natural_translation: "아무도 어떤 방법으로든 여러분을 속이지 못하게 하십시오. 그 날은 배교가 먼저 일어나고 불법의 사람, 곧 멸망의 아들이 나타나기 전에는 오지 않을 것입니다."
    },
    special_explanation: {
      explanation_type: "불법의 사람(The Man of Lawlessness)",
      content: "ὁ ἄνθρωπος τῆς ἀνομίας(불법의 사람)는 ὁ υἱὸς τῆς ἀπωλείας(멸망의 아들)로도 불립니다. 이는 요한계시록의 '짐승', 다니엘서의 '작은 뿔'과 동일한 종말론적 인물(적그리스도)을 가리킵니다. '멸망의 아들'이라는 표현은 유다(요 17:12)에게도 사용되었습니다."
    }
  },
  {
    reference: "2 Thessalonians 2:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "적그리스도의 행위",
        original_text: "He will oppose and will exalt himself over everything that is called God or is worshiped",
        korean_translation: "그는 하나님이라 불리거나 경배 받는 모든 것을 대적하고 그 위에 자기를 높일 것입니다",
        grammatical_explanation: "현재분사 ἀντικείμενος(대적하는) + ὑπεραιρόμενος(높이는), 지속적 행위"
      },
      {
        sequence_order: 2,
        semantic_classification: "신성 모독의 정점",
        original_text: "so that he sets himself up in God's temple, proclaiming himself to be God",
        korean_translation: "심지어 하나님의 성전에 앉아 자기가 하나님이라고 선포할 것입니다",
        grammatical_explanation: "εἰς τὸν ναὸν τοῦ θεοῦ(하나님의 성전 안으로), 극단적 신성 모독"
      }
    ],
    vocabulary: [
      {
        word: "exalt",
        ipa_pronunciation: "/ɪɡˈzɔːlt/",
        korean_pronunciation: "이그졸트",
        part_of_speech: "동사",
        definition_korean: "높이다, 고양하다",
        usage_note: "ὑπεραίρω, 자기 신격화"
      },
      {
        word: "proclaiming",
        ipa_pronunciation: "/prəˈkleɪmɪŋ/",
        korean_pronunciation: "프로클레이밍",
        part_of_speech: "동명사",
        definition_korean: "선포하다, 공표하다",
        usage_note: "ἀποδεικνύντα, 공적 선언"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "불법의 사람은 다니엘 11:36-37의 예언(안티오쿠스 에피파네스의 예표)을 최종적으로 성취합니다. 그는 모든 신을 대적하고, 하나님의 성전에서 자신을 신으로 선포합니다. 역사적으로 안티오쿠스 에피파네스(BC 167년 성전 모독), 칼리굴라(AD 40년 성전에 자기 동상 설치 시도)가 부분적 성취였지만, 최종 성취는 종말의 적그리스도입니다."
    },
    korean_translation: {
      natural_translation: "그는 하나님이라 불리거나 경배 받는 모든 것을 대적하고 그 위에 자기를 높여, 하나님의 성전에 앉아 자기가 하나님이라고 선포할 것입니다."
    },
    special_explanation: {
      explanation_type: "하나님의 성전(God's Temple)",
      content: "τὸν ναὸν τοῦ θεοῦ(하나님의 성전)의 해석은 논쟁적입니다: (1) 문자적 견해: 재건될 예루살렘 성전, (2) 비유적 견해: 교회 또는 신자 개인. 문맥상 다니엘 9:27, 11:31의 성전 모독 예언과 연결되므로, 문자적 성전을 가리킬 가능성이 높습니다."
    }
  },
  {
    reference: "2 Thessalonians 2:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "회상 질문",
        original_text: "Don't you remember that when I was with you I used to tell you these things?",
        korean_translation: "내가 여러분과 함께 있을 때 이런 것들을 여러분에게 말했던 것을 기억하지 못합니까?",
        grammatical_explanation: "수사적 질문, οὐ μνημονεύετε(기억하지 못하느냐), 과거 교육 상기"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 이미 데살로니가 교회를 방문했을 때 종말론을 자세히 가르쳤습니다. 그러나 교회가 거짓 가르침에 흔들렸기 때문에, 다시 상기시킵니다."
    },
    korean_translation: {
      natural_translation: "내가 여러분과 함께 있을 때 이런 것들을 여러분에게 말했던 것을 기억하지 못합니까?"
    }
  },
  {
    reference: "2 Thessalonians 2:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현재 제약 설명",
        original_text: "And now you know what is holding him back, so that he may be revealed at the proper time",
        korean_translation: "그리고 지금 여러분은 그가 정해진 때에 나타나도록 그를 막고 있는 것이 무엇인지 압니다",
        grammatical_explanation: "τὸ κατέχον(막고 있는 것, 중성), 신비로운 제약 세력"
      }
    ],
    vocabulary: [
      {
        word: "holding back",
        ipa_pronunciation: "/ˈhoʊldɪŋ bæk/",
        korean_pronunciation: "홀딩 백",
        part_of_speech: "동사구",
        definition_korean: "막다, 제지하다",
        usage_note: "κατέχω, 억제하는 힘"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 불법의 사람이 아직 나타나지 않는 이유를 설명합니다. '막고 있는 것'(τὸ κατέχον)이 무엇인지는 논쟁적입니다: (1) 로마 제국/정부, (2) 성령, (3) 복음 전파, (4) 천사적 세력. 바울은 데살로니가 교회가 이미 알고 있다고 전제하므로, 구두로 가르쳤던 내용입니다."
    },
    korean_translation: {
      natural_translation: "그리고 지금 여러분은 그가 정해진 때에 나타나도록 그를 막고 있는 것이 무엇인지 압니다."
    },
    special_explanation: {
      explanation_type: "막고 있는 것(The Restrainer)",
      content: "τὸ κατέχον(중성, 2:6)과 ὁ κατέχων(남성, 2:7)이 교차 사용됩니다. 이는 '제도/세력'(중성)과 '인격적 존재'(남성)를 모두 암시합니다. 주요 견해: (1) 로마 제국과 황제, (2) 성령과 교회, (3) 하나님의 섭리적 통제. 확실한 것은 하나님이 정하신 때까지 불법의 사람이 억제된다는 점입니다."
    }
  },
  {
    reference: "2 Thessalonians 2:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현재 상황",
        original_text: "For the secret power of lawlessness is already at work",
        korean_translation: "불법의 비밀스러운 힘이 이미 작용하고 있습니다",
        grammatical_explanation: "τὸ μυστήριον τῆς ἀνομίας ἐνεργεῖται(현재 진행형), 숨겨진 악의 활동"
      },
      {
        sequence_order: 2,
        semantic_classification: "제약의 조건",
        original_text: "but the one who now holds it back will continue to do so till he is taken out of the way",
        korean_translation: "그러나 지금 막고 있는 이가 제거될 때까지 계속 막을 것입니다",
        grammatical_explanation: "ὁ κατέχων(남성 단수), ἕως ἐκ μέσου γένηται(중간에서 제거될 때까지)"
      }
    ],
    vocabulary: [
      {
        word: "secret power",
        ipa_pronunciation: "/ˈsiːkrət ˈpaʊər/",
        korean_pronunciation: "시크릿 파워",
        part_of_speech: "명사구",
        definition_korean: "비밀스러운 힘",
        usage_note: "μυστήριον, 숨겨진 악의 활동"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "불법의 '비밀'(mystery)은 이미 작용하고 있지만, 아직 완전히 드러나지 않았습니다. 제약자가 제거되면 불법의 사람이 완전히 나타날 것입니다."
    },
    korean_translation: {
      natural_translation: "불법의 비밀스러운 힘이 이미 작용하고 있지만, 지금 막고 있는 이가 제거될 때까지 계속 막을 것입니다."
    },
    special_explanation: {
      explanation_type: "불법의 비밀(The Mystery of Lawlessness)",
      content: "τὸ μυστήριον τῆς ἀνομίας는 '숨겨진 불법의 세력'입니다. 바울 시대에도 이미 작용하고 있었지만(요일 2:18 '많은 적그리스도'), 종말에 완전히 드러날 것입니다. '비밀'(μυστήριον)은 현재는 숨겨져 있지만 미래에 계시될 것을 의미합니다."
    }
  },
  {
    reference: "2 Thessalonians 2:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "불법의 사람 출현",
        original_text: "And then the lawless one will be revealed",
        korean_translation: "그러면 불법한 자가 나타날 것입니다",
        grammatical_explanation: "τότε ἀποκαλυφθήσεται(미래 수동태), 제약자 제거 후 출현"
      },
      {
        sequence_order: 2,
        semantic_classification: "그리스도의 심판",
        original_text: "whom the Lord Jesus will overthrow with the breath of his mouth and destroy by the splendor of his coming",
        korean_translation: "주 예수께서 그 입의 기운으로 죽이시고 재림의 영광으로 멸하실 것입니다",
        grammatical_explanation: "τῷ πνεύματι τοῦ στόματος αὐτοῦ(입의 영/기운), τῇ ἐπιφανείᾳ τῆς παρουσίας(재림의 나타남)"
      }
    ],
    vocabulary: [
      {
        word: "overthrow",
        ipa_pronunciation: "/ˌoʊvərˈθroʊ/",
        korean_pronunciation: "오버스로우",
        part_of_speech: "동사",
        definition_korean: "무너뜨리다, 죽이다",
        usage_note: "ἀναλόω(소멸시키다)"
      },
      {
        word: "splendor",
        ipa_pronunciation: "/ˈsplendər/",
        korean_pronunciation: "스플렌더",
        part_of_speech: "명사",
        definition_korean: "광채, 영광",
        usage_note: "ἐπιφάνεια, 재림의 영광스러운 나타남"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "불법의 사람이 나타나도, 그리스도께서 재림하실 때 즉시 심판하실 것입니다. 사 11:4('그 입의 막대기로')와 계 19:15('그 입에서 나오는 검')의 성취입니다. 그리스도의 말씀 자체가 적그리스도를 멸하는 능력입니다."
    },
    korean_translation: {
      natural_translation: "그러면 불법한 자가 나타날 것인데, 주 예수께서 그 입의 기운으로 죽이시고 재림의 영광으로 멸하실 것입니다."
    },
    special_explanation: {
      explanation_type: "입의 기운(Breath of His Mouth)",
      content: "τῷ πνεύματι τοῦ στόματος(입의 영/기운)은 사 11:4의 메시아 예언 인용입니다. 그리스도의 말씀 자체가 심판의 도구입니다(히 4:12, 계 19:15). 불법의 사람은 아무런 저항도 못하고 그리스도의 말씀 한 마디에 멸망합니다."
    }
  },
  {
    reference: "2 Thessalonians 2:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사탄의 능력으로 출현",
        original_text: "The coming of the lawless one will be in accordance with how Satan works",
        korean_translation: "불법한 자의 출현은 사탄의 활동에 따른 것입니다",
        grammatical_explanation: "κατ' ἐνέργειαν τοῦ Σατανᾶ(사탄의 역사에 따라), 사탄의 대리자"
      },
      {
        sequence_order: 2,
        semantic_classification: "거짓 기적들",
        original_text: "He will use all sorts of displays of power through signs and wonders that serve the lie",
        korean_translation: "그는 거짓에 속한 모든 능력과 표적과 기사를 행할 것입니다",
        grammatical_explanation: "ἐν πάσῃ δυνάμει καὶ σημείοις καὶ τέρασιν ψεύδους(거짓의 모든 능력, 표적, 기사)"
      }
    ],
    vocabulary: [
      {
        word: "accordance",
        ipa_pronunciation: "/əˈkɔːrdns/",
        korean_pronunciation: "어코던스",
        part_of_speech: "명사",
        definition_korean: "일치, 따름",
        usage_note: "κατά + 대격, ~에 따라"
      },
      {
        word: "wonders",
        ipa_pronunciation: "/ˈwʌndərz/",
        korean_pronunciation: "원더스",
        part_of_speech: "명사",
        definition_korean: "기사, 이적",
        usage_note: "τέρας, 놀라운 초자연적 사건"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "적그리스도는 진정한 기적이 아니라 사탄의 능력으로 '거짓 기적'을 행합니다(마 24:24, 계 13:13-14). 이는 사람들을 속여 거짓을 믿게 하기 위함입니다."
    },
    korean_translation: {
      natural_translation: "불법한 자의 출현은 사탄의 활동에 따른 것으로, 거짓에 속한 모든 능력과 표적과 기사를 행할 것입니다."
    },
    special_explanation: {
      explanation_type: "거짓 기적(Counterfeit Miracles)",
      content: "δυνάμεις, σημεῖα, τέρατα(능력, 표적, 기사)는 성경에서 하나님의 역사를 설명할 때 사용되는 용어들입니다(행 2:22). 그러나 여기서는 ψεύδους(거짓의)라는 수식어가 붙어, 사탄이 하나님의 능력을 모방한 거짓 기적을 행함을 보여줍니다. 애굽의 마술사들(출 7:11-12), 거짓 선지자들(신 13:1-3)의 최종 성취입니다."
    }
  },
  {
    reference: "2 Thessalonians 2:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "불의의 속임수",
        original_text: "and all the ways that wickedness deceives those who are perishing",
        korean_translation: "그리고 멸망하는 자들을 속이는 모든 불의한 방법들입니다",
        grammatical_explanation: "ἐν πάσῃ ἀπάτῃ ἀδικίας(모든 불의의 속임수), 도덕적 타락"
      },
      {
        sequence_order: 2,
        semantic_classification: "멸망의 이유",
        original_text: "They perish because they refused to love the truth and so be saved",
        korean_translation: "그들이 멸망하는 것은 진리의 사랑을 받아들이지 않아 구원받지 못했기 때문입니다",
        grammatical_explanation: "ἀνθ' ὧν(~때문에) + 부정사 οὐκ ἐδέξαντο τὴν ἀγάπην τῆς ἀληθείας(진리의 사랑을 받지 않음)"
      }
    ],
    vocabulary: [
      {
        word: "wickedness",
        ipa_pronunciation: "/ˈwɪkɪdnəs/",
        korean_pronunciation: "위키드니스",
        part_of_speech: "명사",
        definition_korean: "불의, 사악함",
        usage_note: "ἀδικία, 도덕적 부패"
      },
      {
        word: "perishing",
        ipa_pronunciation: "/ˈperɪʃɪŋ/",
        korean_pronunciation: "페리싱",
        part_of_speech: "현재분사",
        definition_korean: "멸망하는",
        usage_note: "ἀπόλλυμι, 영원한 멸망으로 가는 과정"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "사람들이 속는 것은 지적 능력 부족 때문이 아니라, '진리를 사랑하지 않는' 도덕적 선택 때문입니다(요 3:19-20). 진리 거부는 구원 거부입니다."
    },
    korean_translation: {
      natural_translation: "멸망하는 자들을 속이는 모든 불의한 방법들입니다. 그들이 멸망하는 것은 진리의 사랑을 받아들이지 않아 구원받지 못했기 때문입니다."
    },
    special_explanation: {
      explanation_type: "진리의 사랑(Love of the Truth)",
      content: "τὴν ἀγάπην τῆς ἀληθείας는 단순히 진리를 아는 것이 아니라 '진리를 사랑하는 것'입니다. 속임을 받는 것은 지적 문제가 아니라 도덕적/의지적 문제입니다. 사람들은 진리보다 거짓을 더 사랑하기 때문에 속습니다(요 3:19-20, 롬 1:18, 25)."
    }
  },
  {
    reference: "2 Thessalonians 2:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님의 심판",
        original_text: "For this reason God sends them a powerful delusion so that they will believe the lie",
        korean_translation: "이런 이유로 하나님께서 그들에게 강력한 미혹을 보내셔서 그들이 거짓을 믿게 하십니다",
        grammatical_explanation: "πέμπει αὐτοῖς ὁ θεὸς ἐνέργειαν πλάνης(하나님이 미혹의 역사를 보내심), 사법적 심판"
      }
    ],
    vocabulary: [
      {
        word: "delusion",
        ipa_pronunciation: "/dɪˈluːʒn/",
        korean_pronunciation: "딜루전",
        part_of_speech: "명사",
        definition_korean: "미혹, 착각",
        usage_note: "πλάνη, 진리로부터의 이탈"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "진리를 거부한 자들에게 하나님은 사법적 심판으로 '미혹'을 허락하십니다. 이는 파라오의 마음 강퍅케 하심(출 4-14장), 거짓 선지자 허락(왕상 22:22-23), 타락한 마음 내어 주심(롬 1:24, 26, 28)과 같은 원리입니다."
    },
    korean_translation: {
      natural_translation: "이런 이유로 하나님께서 그들에게 강력한 미혹을 보내셔서 그들이 거짓을 믿게 하십니다."
    },
    special_explanation: {
      explanation_type: "하나님의 사법적 맹목(Judicial Blindness)",
      content: "하나님이 '미혹을 보내신다'(πέμπει ἐνέργειαν πλάνης)는 것은 하나님이 적극적으로 사람을 속이신다는 뜻이 아닙니다. 이는 사법적 심판(judicial hardening)으로, 진리를 거부한 자들에게 하나님이 그들의 선택의 결과를 허락하시는 것입니다(롬 1:24, 26, 28 '내어 주심'). 하나님은 그들을 보호하지 않으시고, 그들이 선택한 거짓의 길로 가도록 내버려 두십니다."
    }
  },
  {
    reference: "2 Thessalonians 2:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "심판의 목적",
        original_text: "and so that all will be condemned who have not believed the truth but have delighted in wickedness",
        korean_translation: "그리하여 진리를 믿지 않고 불의를 기뻐한 모든 사람이 심판받게 하려는 것입니다",
        grammatical_explanation: "ἵνα κριθῶσιν πάντες(모든 사람이 심판받게 하려고), 두 가지 죄: (1) 진리 불신, (2) 불의 기뻐함"
      }
    ],
    vocabulary: [
      {
        word: "condemned",
        ipa_pronunciation: "/kənˈdemd/",
        korean_pronunciation: "컨뎀드",
        part_of_speech: "동사",
        definition_korean: "심판받다, 정죄되다",
        usage_note: "κρίνω, 사법적 판결"
      },
      {
        word: "delighted",
        ipa_pronunciation: "/dɪˈlaɪtɪd/",
        korean_pronunciation: "딜라이티드",
        part_of_speech: "형용사",
        definition_korean: "기뻐하다, 즐기다",
        usage_note: "εὐδοκέω, 적극적 선호"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "심판의 근거는 두 가지입니다: (1) 진리를 믿지 않음(소극적 거부), (2) 불의를 기뻐함(적극적 선택). 단순히 진리를 몰라서가 아니라, 진리보다 불의를 더 사랑했기 때문입니다."
    },
    korean_translation: {
      natural_translation: "그리하여 진리를 믿지 않고 불의를 기뻐한 모든 사람이 심판받게 하려는 것입니다."
    },
    special_explanation: {
      explanation_type: "심판의 이중 근거",
      content: "심판의 근거는 이중적입니다: (1) οἱ μὴ πιστεύσαντες τῇ ἀληθείᾳ(진리를 믿지 않은 자들) - 소극적 거부, (2) εὐδοκήσαντες τῇ ἀδικίᾳ(불의를 기뻐한 자들) - 적극적 선택. 진리 거부는 단순한 무지가 아니라 불의에 대한 사랑과 연결됩니다(요 3:19-20, 롬 1:18)."
    }
  },
  {
    reference: "2 Thessalonians 2:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감사 의무",
        original_text: "But we ought always to thank God for you, brothers and sisters loved by the Lord",
        korean_translation: "그러나 주님께 사랑받는 형제자매 여러분, 우리는 항상 여러분을 위해 하나님께 감사해야 합니다",
        grammatical_explanation: "ὀφείλομεν εὐχαριστεῖν(감사해야 한다), 도덕적 의무"
      },
      {
        sequence_order: 2,
        semantic_classification: "선택의 목적",
        original_text: "because God chose you as firstfruits to be saved through the sanctifying work of the Spirit and through belief in the truth",
        korean_translation: "하나님께서 여러분을 처음 열매로 택하셔서 성령의 거룩하게 하심과 진리를 믿음으로 구원받게 하셨기 때문입니다",
        grammatical_explanation: "εἵλατο ὑμᾶς ὁ θεός(하나님이 여러분을 택하셨다) + 두 가지 수단: (1) 성령의 성화, (2) 진리 믿음"
      }
    ],
    vocabulary: [
      {
        word: "firstfruits",
        ipa_pronunciation: "/ˈfɜːrstfruːts/",
        korean_pronunciation: "퍼스트프루츠",
        part_of_speech: "명사",
        definition_korean: "첫 열매, 처음 것",
        usage_note: "ἀπαρχή, 첫 수확물, 구원의 첫 열매"
      },
      {
        word: "sanctifying",
        ipa_pronunciation: "/ˈsæŋktɪfaɪɪŋ/",
        korean_pronunciation: "생크티파잉",
        part_of_speech: "동명사",
        definition_korean: "거룩하게 하다",
        usage_note: "ἁγιασμός, 성화 과정"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "2:1-12의 심판과 대조하여, 바울은 데살로니가 성도들의 구원을 감사합니다. 그들은 진리를 거부한 자들(2:10-12)과 달리, 하나님의 선택으로 구원받았습니다. 구원은 성령의 성화 사역과 진리에 대한 믿음을 통해 이루어집니다."
    },
    korean_translation: {
      natural_translation: "그러나 주님께 사랑받는 형제자매 여러분, 우리는 항상 여러분을 위해 하나님께 감사해야 합니다. 하나님께서 여러분을 처음 열매로 택하셔서 성령의 거룩하게 하심과 진리를 믿음으로 구원받게 하셨기 때문입니다."
    },
    special_explanation: {
      explanation_type: "구원의 삼위일체적 구조",
      content: "구원의 기원과 수단이 삼위일체적으로 제시됩니다: (1) 하나님이 택하심(εἵλατο ὑμᾶς ὁ θεός), (2) 성령의 거룩하게 하심(ἁγιασμῷ πνεύματος), (3) 진리를 믿음(πίστει ἀληθείας). 이는 벧전 1:2의 구조(성부의 예지, 성령의 거룩하게 하심, 예수 그리스도의 순종)와 유사합니다."
    }
  },
  {
    reference: "2 Thessalonians 2:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부르심의 수단",
        original_text: "He called you to this through our gospel",
        korean_translation: "하나님께서 우리의 복음을 통해 여러분을 이것을 위해 부르셨습니다",
        grammatical_explanation: "ἐκάλεσεν ὑμᾶς διὰ τοῦ εὐαγγελίου ἡμῶν(우리의 복음을 통해 부르심), 복음 전파의 수단성"
      },
      {
        sequence_order: 2,
        semantic_classification: "부르심의 목적",
        original_text: "that you might share in the glory of our Lord Jesus Christ",
        korean_translation: "그리하여 여러분이 우리 주 예수 그리스도의 영광을 얻게 하시려는 것입니다",
        grammatical_explanation: "εἰς περιποίησιν δόξης(영광을 소유하게 함), 궁극적 목적"
      }
    ],
    vocabulary: [
      {
        word: "share in",
        ipa_pronunciation: "/ʃer ɪn/",
        korean_pronunciation: "셰어 인",
        part_of_speech: "동사구",
        definition_korean: "함께 나누다, 소유하다",
        usage_note: "περιποίησις, 획득, 소유"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "하나님의 부르심은 '복음 전파'를 통해 이루어지며, 궁극적 목적은 성도들이 그리스도의 영광에 참여하는 것입니다(롬 8:17, 30)."
    },
    korean_translation: {
      natural_translation: "하나님께서 우리의 복음을 통해 여러분을 부르셔서, 우리 주 예수 그리스도의 영광을 얻게 하셨습니다."
    },
    special_explanation: {
      explanation_type: "영광의 소유(Obtaining Glory)",
      content: "εἰς περιποίησιν δόξης(영광을 소유하게 함)는 성도들의 최종 목적지입니다. 이는 롬 8:17('함께 영광받음'), 롬 8:30('영화롭게 하심'), 골 3:4('영광 중에 나타남')과 동일한 개념입니다. 그리스도와 연합한 자들은 그분의 영광에 참여합니다."
    }
  },
  {
    reference: "2 Thessalonians 2:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권면",
        original_text: "So then, brothers and sisters, stand firm",
        korean_translation: "그러므로 형제자매 여러분, 굳게 서십시오",
        grammatical_explanation: "ἄρα οὖν(그러므로) + 명령형 στήκετε(서라), 거짓 가르침에 대한 저항"
      },
      {
        sequence_order: 2,
        semantic_classification: "전통 지킴",
        original_text: "and hold fast to the teachings we passed on to you, whether by word of mouth or by letter",
        korean_translation: "그리고 우리가 말이나 편지로 여러분에게 전해 준 가르침을 굳게 지키십시오",
        grammatical_explanation: "κρατεῖτε τὰς παραδόσεις(전통들을 붙잡으라), 사도적 가르침의 권위"
      }
    ],
    vocabulary: [
      {
        word: "stand firm",
        ipa_pronunciation: "/stænd fɜːrm/",
        korean_pronunciation: "스탠드 펌",
        part_of_speech: "동사구",
        definition_korean: "굳게 서다",
        usage_note: "στήκω, 흔들리지 않고 버티다"
      },
      {
        word: "teachings",
        ipa_pronunciation: "/ˈtiːtʃɪŋz/",
        korean_pronunciation: "티칭스",
        part_of_speech: "명사",
        definition_korean: "가르침, 전통",
        usage_note: "παράδοσις, 전달된 교리"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 가르침(2:2)에 대항하여, 바울은 사도적 가르침(구두 전통과 서신)을 굳게 지킬 것을 명령합니다. 초대 교회에서 '전통'(παράδοσις)은 사도들이 전해준 복음과 교리를 의미했습니다."
    },
    korean_translation: {
      natural_translation: "그러므로 형제자매 여러분, 굳게 서서 우리가 말이나 편지로 여러분에게 전해 준 가르침을 굳게 지키십시오."
    },
    special_explanation: {
      explanation_type: "사도적 전통(Apostolic Tradition)",
      content: "παραδόσεις(전통들)는 사도들이 전해준 복음과 교리입니다. 바울은 두 가지 형태를 인정합니다: (1) διὰ λόγου(말을 통해) - 구두 가르침, (2) δι' ἐπιστολῆς ἡμῶν(우리의 편지를 통해) - 서신. 이는 신약 성경 형성의 초기 단계를 보여줍니다. 거짓 전통이 아니라 사도적 전통만이 권위가 있습니다."
    }
  },
  {
    reference: "2 Thessalonians 2:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 대상",
        original_text: "May our Lord Jesus Christ himself and God our Father, who loved us and by his grace gave us eternal encouragement and good hope",
        korean_translation: "우리를 사랑하시고 은혜로 영원한 위로와 좋은 소망을 주신 우리 주 예수 그리스도와 하나님 우리 아버지께서",
        grammatical_explanation: "αὐτὸς δὲ ὁ κύριος... καὶ ὁ θεός(주님과 하나님), 단수 동사로 연결되어 밀접한 연합 표현"
      }
    ],
    vocabulary: [
      {
        word: "encouragement",
        ipa_pronunciation: "/ɪnˈkʌrɪdʒmənt/",
        korean_pronunciation: "인커리지먼트",
        part_of_speech: "명사",
        definition_korean: "위로, 격려",
        usage_note: "παράκλησις, 성령의 위로 사역"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 기도로 2장을 마무리합니다. 그리스도와 성부 하나님은 성도들에게 '영원한 위로'(종말의 확신)와 '좋은 소망'(재림의 영광)을 주셨습니다."
    },
    korean_translation: {
      natural_translation: "우리를 사랑하시고 은혜로 영원한 위로와 좋은 소망을 주신 우리 주 예수 그리스도와 하나님 우리 아버지께서"
    },
    special_explanation: {
      explanation_type: "그리스도와 하나님의 연합",
      content: "αὐτὸς... ὁ κύριος ἡμῶν Ἰησοῦς Χριστὸς καὶ ὁ θεὸς ὁ πατὴρ(주 예수 그리스도와 하나님 아버지)가 단수 동사(παρακαλέσαι, 위로하시기를)로 연결됩니다. 이는 그리스도와 성부의 긴밀한 연합과 동등성을 암시합니다."
    }
  },
  {
    reference: "2 Thessalonians 2:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 내용",
        original_text: "encourage your hearts and strengthen you in every good deed and word",
        korean_translation: "여러분의 마음을 위로하시고 모든 선한 일과 말에 굳게 하시기를 기도합니다",
        grammatical_explanation: "παρακαλέσαι(위로하다) + στηρίξαι(굳게 하다), 내적 위로와 외적 행위의 강화"
      }
    ],
    vocabulary: [
      {
        word: "strengthen",
        ipa_pronunciation: "/ˈstreŋθən/",
        korean_pronunciation: "스트렝선",
        part_of_speech: "동사",
        definition_korean: "굳게 하다, 강하게 하다",
        usage_note: "στηρίζω, 확고하게 세우다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 성도들의 (1) 마음(내적 확신), (2) 행위와 말(외적 증거)이 모두 굳건해지기를 기도합니다. 거짓 가르침의 혼란 속에서도 진리 안에 확고히 서도록 하기 위함입니다."
    },
    korean_translation: {
      natural_translation: "여러분의 마음을 위로하시고 모든 선한 일과 말에 굳게 하시기를 기도합니다."
    },
    special_explanation: {
      explanation_type: "내적 위로와 외적 강화",
      content: "바울의 기도는 두 부분으로 구성됩니다: (1) παρακαλέσαι τὰς καρδίας(마음을 위로하심) - 내적 확신과 평안, (2) στηρίξαι ἐν παντὶ ἔργῳ καὶ λόγῳ ἀγαθῷ(모든 선한 일과 말에 굳게 하심) - 외적 행위의 확고함. 참된 위로는 언제나 선한 행위로 이어집니다."
    }
  }
]

async function main() {
  console.log('=== 2 Thessalonians 2:1-17 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
}

main().catch(console.error)
