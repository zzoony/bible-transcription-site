import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';

const analyses: AnalysisData[] = [
  {
    reference: "1 Thessalonians 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "서신 인사 - 발신자와 수신자",
        original_text: "Paul, Silas and Timothy, To the church of the Thessalonians in God the Father and the Lord Jesus Christ",
        korean_translation: "바울과 실라와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인들의 교회에",
        grammatical_explanation: "발신자(Paul, Silas, Timothy) + 수신자(church of the Thessalonians) + 신학적 위치(in God the Father and the Lord Jesus Christ)"
      },
      {
        sequence_order: 2,
        semantic_classification: "축복 기원",
        original_text: "Grace and peace to you",
        korean_translation: "은혜와 평강이 너희에게 있을지어다"
      }
    ],
    vocabulary: [
      {
        word: "Thessalonians",
        ipa_pronunciation: "/ˌθɛsəˈloʊniənz/",
        korean_pronunciation: "쎄쌀로우니언즈",
        definition_korean: "데살로니가 사람들 (마케도니아의 주요 도시 데살로니가에 사는 신자들)"
      },
      {
        word: "Grace",
        ipa_pronunciation: "/ɡreɪs/",
        korean_pronunciation: "그레이스",
        definition_korean: "은혜 (χάρις, 하나님의 호의와 선물)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가는 마케도니아의 수도이자 주요 항구 도시였습니다. 바울은 제2차 전도여행(AD 49-50년경) 중 이곳에서 약 3주간 사역했고(행 17:1-9), 이후 아테네와 고린도에서 이 편지를 썼습니다(AD 50-51년경). 실라와 디모데는 바울의 동역자들로, 함께 데살로니가 교회를 세웠습니다.",
      cross_references: ["행 17:1-9 (데살로니가 전도)", "행 17:1 (회당에서의 사역)"]
    },
    korean_translation: {
      natural_translation: "바울과 실라와 디모데는 하나님 아버지와 주 예수 그리스도 안에 있는 데살로니가인들의 교회에 편지합니다. 은혜와 평강이 여러분에게 있기를 빕니다."
    },
    special_explanation: {
      explanation_type: "초기 서신의 특징",
      content: "1 Thessalonians는 바울의 가장 초기 서신(AD 50-51년) 중 하나입니다. 후기 서신들과 달리 교리적 논쟁보다는 목회적 격려와 재림 대망이 중심입니다. '하나님 아버지와 주 예수 그리스도'라는 표현은 초기 기독교의 높은 기독론을 보여줍니다."
    }
  },
  {
    reference: "1 Thessalonians 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감사의 표현",
        original_text: "We always thank God for all of you",
        korean_translation: "우리는 너희 모두를 위하여 항상 하나님께 감사하고"
      },
      {
        sequence_order: 2,
        semantic_classification: "중보기도의 지속성",
        original_text: "continually mention you in our prayers",
        korean_translation: "우리의 기도에서 끊임없이 너희를 기억합니다"
      }
    ],
    vocabulary: [
      {
        word: "continually",
        ipa_pronunciation: "/kənˈtɪnjuəli/",
        korean_pronunciation: "컨티뉴얼리",
        definition_korean: "끊임없이, 계속해서 (ἀδιαλείπτως)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울 서신의 전형적인 패턴: 인사(1절) → 감사(2-3절) → 본론. 'always'와 'continually'는 바울의 끊임없는 목회적 관심을 강조합니다. 데살로니가 교회는 핍박 중에도 믿음을 지켰기에 바울의 기쁨과 감사의 대상이었습니다."
    },
    korean_translation: {
      natural_translation: "우리는 여러분 모두를 위해 항상 하나님께 감사하며, 기도할 때마다 끊임없이 여러분을 기억합니다."
    }
  },
  {
    reference: "1 Thessalonians 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "삼중 덕목 - 믿음·사랑·소망의 열매",
        original_text: "We remember before our God and Father your work produced by faith, your labor prompted by love, and your endurance inspired by hope in our Lord Jesus Christ",
        korean_translation: "하나님 아버지 앞에서 너희의 믿음의 역사와 사랑의 수고와 우리 주 예수 그리스도에 대한 소망의 인내를 끊임없이 기억함이니",
        grammatical_explanation: "세 개의 병렬 목적어(work/labor/endurance) + 각각의 수식구(produced by faith/prompted by love/inspired by hope)"
      }
    ],
    vocabulary: [
      {
        word: "produced",
        ipa_pronunciation: "/prəˈduːst/",
        korean_pronunciation: "프러듀스트",
        definition_korean: "낳다, 생산하다 (믿음에서 나오는)"
      },
      {
        word: "prompted",
        ipa_pronunciation: "/ˈprɒmptɪd/",
        korean_pronunciation: "프롬프티드",
        definition_korean: "촉발하다, 일으키다 (사랑이 동기가 되는)"
      },
      {
        word: "endurance",
        ipa_pronunciation: "/ɪnˈdjʊərəns/",
        korean_pronunciation: "인듀런스",
        definition_korean: "인내, 견딤 (ὑπομονή)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "초대교회의 '믿음-소망-사랑' 삼중 구조를 보여줍니다(고전 13:13). 데살로니가 교회는 심한 핍박(행 17:5-9) 속에서도 (1) 믿음으로 실천하고, (2) 사랑으로 수고하며, (3) 소망으로 인내했습니다.",
      cross_references: ["고전 13:13 (믿음, 소망, 사랑)", "골 1:4-5 (삼중 덕목)"]
    },
    korean_translation: {
      natural_translation: "우리는 하나님 아버지 앞에서 여러분이 믿음으로 행한 일과, 사랑으로 수고한 것과, 우리 주 예수 그리스도를 향한 소망 가운데 인내한 것을 기억합니다."
    },
    special_explanation: {
      explanation_type: "삼중 덕목의 실천적 적용",
      content: "고전 13:13의 '믿음-소망-사랑'이 여기서는 '믿음의 행위(work) - 사랑의 수고(labor) - 소망의 인내(endurance)'로 실천됩니다. 신학적 덕목이 반드시 구체적 행동으로 나타나야 함을 보여주는 초대교회의 증거입니다."
    }
  },
  {
    reference: "1 Thessalonians 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "선택 교리 - 하나님의 주권적 선택",
        original_text: "For we know, brothers and sisters loved by God, that he has chosen you",
        korean_translation: "하나님의 사랑을 받은 형제들아 우리는 너희를 택하심을 아노니"
      }
    ],
    vocabulary: [
      {
        word: "chosen",
        ipa_pronunciation: "/ˈtʃoʊzən/",
        korean_pronunciation: "초우즌",
        definition_korean: "선택된 (ἐκλογή, 하나님의 주권적 선택)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "'하나님께 사랑받는 형제자매들'이라는 호칭은 교회의 두 가지 본질을 드러냅니다: (1) 하나님의 사랑의 대상, (2) 가족 공동체. '선택하셨다(chosen)'는 구약의 이스라엘 선택이 신약 교회로 확장된 것을 보여줍니다.",
      cross_references: ["신 7:6-8 (이스라엘 선택)", "엡 1:4-5 (교회 선택)"]
    },
    korean_translation: {
      natural_translation: "하나님께 사랑받는 형제자매 여러분, 우리는 하나님께서 여러분을 선택하셨다는 것을 압니다."
    },
    special_explanation: {
      explanation_type: "선택(Election) 교리",
      content: "ἐκλογή(선택)는 신약에서 하나님의 주권적 은혜를 나타내는 핵심 용어입니다. 바울은 데살로니가 성도들의 믿음의 열매를 보고 그들이 '선택받았음을 안다'고 말합니다. 선택이 추상적 교리가 아니라 삶으로 확증되는 현실임을 보여줍니다."
    }
  },
  {
    reference: "1 Thessalonians 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "복음의 삼중 능력 - 능력·성령·확신",
        original_text: "because our gospel came to you not simply with words but also with power, with the Holy Spirit and deep conviction",
        korean_translation: "이는 우리 복음이 말로만 너희에게 이른 것이 아니라 또한 능력과 성령과 큰 확신으로 된 것임이라",
        grammatical_explanation: "부정(not simply with words) + 긍정(but also with power, with the Holy Spirit and deep conviction)"
      },
      {
        sequence_order: 2,
        semantic_classification: "사역자의 모범",
        original_text: "You know how we lived among you for your sake",
        korean_translation: "우리가 너희 가운데서 너희를 위하여 어떠한 사람이 된 것을 너희가 아는 바와 같으니라"
      }
    ],
    vocabulary: [
      {
        word: "conviction",
        ipa_pronunciation: "/kənˈvɪkʃən/",
        korean_pronunciation: "컨빅션",
        definition_korean: "확신 (πληροφορία, 완전한 확신)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가에서 약 3주간 사역했지만 강력한 영향을 남겼습니다. 복음이 '능력(δύναμις)'과 '성령'과 '깊은 확신'과 함께 왔다는 것은 단순한 지적 동의를 넘어선 성령의 초자연적 역사를 보여줍니다.",
      cross_references: ["고전 2:4-5 (능력의 증거)", "히 2:3-4 (표적과 기사)"]
    },
    korean_translation: {
      natural_translation: "우리의 복음이 여러분에게 말로만 전해진 것이 아니라 능력과 성령과 깊은 확신으로 전해졌기 때문입니다. 우리가 여러분을 위하여 여러분 가운데서 어떻게 살았는지 여러분이 알고 있습니다."
    },
    special_explanation: {
      explanation_type: "복음의 삼중 능력",
      content: "진정한 복음 전파의 세 가지 요소: (1) δύναμις(능력) - 기적과 표적을 동반한 하나님의 능력, (2) πνεῦμα ἅγιον(성령) - 성령의 역사와 은사들, (3) πληροφορία πολλή(깊은 확신) - 전도자와 수용자 모두의 확신. 이것은 단순한 인간의 설득이 아니라 성령의 초자연적 역사입니다."
    }
  },
  {
    reference: "1 Thessalonians 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "고난 중의 기쁨 - 역설적 기독교",
        original_text: "You became imitators of us and of the Lord, for you welcomed the message in the midst of severe suffering with the joy given by the Holy Spirit",
        korean_translation: "또 너희는 많은 환난 가운데서 성령의 기쁨으로 도를 받아 우리와 주를 본받은 자가 되었으니"
      }
    ],
    vocabulary: [
      {
        word: "imitators",
        ipa_pronunciation: "/ˈɪmɪteɪtərz/",
        korean_pronunciation: "이미테이터즈",
        definition_korean: "본받는 자들 (μιμηταί)"
      },
      {
        word: "severe suffering",
        ipa_pronunciation: "/sɪˈvɪər ˈsʌfərɪŋ/",
        korean_pronunciation: "시비어 서퍼링",
        definition_korean: "심한 고난 (θλῖψις πολλή)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가 교회는 설립 직후 심한 핍박을 받았습니다(행 17:5-9). 그러나 그들은 '고난 중에 기쁨'이라는 역설을 경험했습니다. 이 기쁨은 인간적 낙관주의가 아니라 '성령이 주신' 초자연적 기쁨입니다.",
      cross_references: ["행 17:5-9 (데살로니가 박해)", "1 Thess 2:14 (유대인들의 박해)"]
    },
    korean_translation: {
      natural_translation: "여러분은 우리와 주님을 본받는 자가 되었습니다. 여러분이 심한 고난 가운데서도 성령께서 주시는 기쁨으로 말씀을 받아들였기 때문입니다."
    },
    special_explanation: {
      explanation_type: "역설의 기독교 - 고난 중의 기쁨",
      content: "'심한 고난 중에(ἐν θλίψει πολλῇ) 성령의 기쁨으로(μετὰ χαρᾶς πνεύματος ἁγίου)'는 기독교의 핵심 역설입니다. 예수님(히 12:2), 바울(고후 6:10), 초대교회(행 5:41)의 특징입니다. 데살로니가 성도들이 이 역설을 체험했다는 것은 그들이 진정으로 '그리스도를 본받는 자'가 되었음을 증명합니다."
    }
  },
  {
    reference: "1 Thessalonians 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "영향력의 확장",
        original_text: "And so you became a model to all the believers in Macedonia and Achaia",
        korean_translation: "그러므로 너희가 마게도냐와 아가야에 있는 모든 믿는 자의 본이 되었는지라"
      }
    ],
    vocabulary: [
      {
        word: "model",
        ipa_pronunciation: "/ˈmɒdəl/",
        korean_pronunciation: "모들",
        definition_korean: "모범, 본 (τύπος)"
      },
      {
        word: "Macedonia",
        ipa_pronunciation: "/ˌmæsɪˈdoʊniə/",
        korean_pronunciation: "매씨도우니아",
        definition_korean: "마케도니아 (북부 그리스)"
      },
      {
        word: "Achaia",
        ipa_pronunciation: "/əˈkeɪə/",
        korean_pronunciation: "어케이아",
        definition_korean: "아가야 (남부 그리스)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가 교회는 설립된 지 얼마 안 되었지만, 그들의 '고난 중의 기쁨'이 소문으로 퍼져 그리스 전역의 모범이 되었습니다. 진정한 믿음의 전염력 - 말이 아니라 삶으로 증거할 때 영향력이 확산됩니다."
    },
    korean_translation: {
      natural_translation: "그래서 여러분은 마케도니아와 아가야에 있는 모든 믿는 자들에게 본이 되었습니다."
    }
  },
  {
    reference: "1 Thessalonians 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "복음의 확장 - 지역을 넘어 전 세계로",
        original_text: "The Lord's message rang out from you not only in Macedonia and Achaia—your faith in God has become known everywhere",
        korean_translation: "주의 말씀이 너희에게로부터 마게도냐와 아가야에만 들릴 뿐 아니라 하나님을 향하는 너희 믿음의 소문이 각처에 퍼졌으므로"
      },
      {
        sequence_order: 2,
        semantic_classification: "자명한 증거",
        original_text: "Therefore we do not need to say anything about it",
        korean_translation: "우리는 아무 말도 할 것이 없노라"
      }
    ],
    vocabulary: [
      {
        word: "rang out",
        ipa_pronunciation: "/ræŋ aʊt/",
        korean_pronunciation: "랭 아웃",
        definition_korean: "울려 퍼지다 (ἐξήχηται)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "'울려 퍼졌다(rang out)'는 나팔 소리나 천둥소리처럼 강력하게 확산되는 이미지입니다. 데살로니가는 주요 무역 항구이자 로마의 군사 요충지였기에, 이곳의 소식이 빠르게 퍼질 수 있었습니다. 초대교회의 급속한 확산의 증거입니다."
    },
    korean_translation: {
      natural_translation: "주님의 말씀이 여러분에게서 마케도니아와 아가야뿐 아니라 모든 곳에 울려 퍼졌습니다. 하나님을 향한 여러분의 믿음이 모든 곳에 알려져서, 우리가 그것에 대해 아무 말도 할 필요가 없을 정도입니다."
    }
  },
  {
    reference: "1 Thessalonians 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "환대의 증언",
        original_text: "for they themselves report what kind of reception you gave us",
        korean_translation: "저희가 우리에 대하여 스스로 고하되"
      },
      {
        sequence_order: 2,
        semantic_classification: "회심의 삼중 운동",
        original_text: "They tell how you turned to God from idols to serve the living and true God",
        korean_translation: "우리가 어떻게 너희 가운데 들어간 것과 너희가 어떻게 우상을 버리고 하나님께로 돌아와서 살아 계시고 참되신 하나님을 섬기는지"
      }
    ],
    vocabulary: [
      {
        word: "reception",
        ipa_pronunciation: "/rɪˈsɛpʃən/",
        korean_pronunciation: "리셉션",
        definition_korean: "환대, 영접 (εἴσοδος)"
      },
      {
        word: "turned",
        ipa_pronunciation: "/tɜːrnd/",
        korean_pronunciation: "턴드",
        definition_korean: "돌아섰다 (ἐπεστρέψατε, 회심하다)"
      },
      {
        word: "idols",
        ipa_pronunciation: "/ˈaɪdəlz/",
        korean_pronunciation: "아이돌즈",
        definition_korean: "우상들 (εἴδωλα)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가는 이방인 도시였고, 대부분의 성도들이 우상숭배 배경에서 왔습니다. 회심은 세 단계: (1) 우상에서 떠남 - 부정적 단절, (2) 하나님께 돌아섬 - 긍정적 귀의, (3) 살아계시고 참되신 하나님을 섬김 - 지속적 헌신.",
      cross_references: ["행 14:15 (우상을 버리라)", "행 26:18-20 (어둠에서 빛으로)"]
    },
    korean_translation: {
      natural_translation: "사람들 스스로가 우리가 여러분에게 어떻게 받아들여졌는지를 이야기합니다. 그들은 여러분이 어떻게 우상을 버리고 하나님께 돌아서서 살아계시고 참되신 하나님을 섬기게 되었는지를 말합니다."
    },
    special_explanation: {
      explanation_type: "회심(Conversion)의 구조",
      content: "신약에서 회심을 가장 명확하게 정의한 구절 중 하나입니다. 세 가지 요소: (1) ἀπὸ τῶν εἰδώλων(우상에서 떠남) - 옛 삶과의 단절, (2) πρὸς τὸν θεόν(하나님께 돌아섬) - 새로운 대상으로의 전환, (3) δουλεύειν θεῷ ζῶντι καὶ ἀληθινῷ(살아계시고 참되신 하나님을 섬김) - 지속적 헌신. 이것은 단순한 종교 변경이 아니라 전인격적 방향 전환입니다."
    }
  },
  {
    reference: "1 Thessalonians 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "종말론 - 부활·재림·구원",
        original_text: "and to wait for his Son from heaven, whom he raised from the dead—Jesus, who rescues us from the coming wrath",
        korean_translation: "또 죽은 자들 가운데서 다시 살리신 그의 아들이 하늘로부터 강림하심을 기다린다고 말하니 이는 장래의 노하심에서 우리를 건지시는 예수시니라",
        grammatical_explanation: "목적구(to wait) + 관계절(whom he raised) + 동격(Jesus) + 관계절(who rescues)"
      }
    ],
    vocabulary: [
      {
        word: "wait for",
        ipa_pronunciation: "/weɪt fɔːr/",
        korean_pronunciation: "웨이트 포",
        definition_korean: "기다리다 (ἀναμένειν, 인내하며 사모함)"
      },
      {
        word: "rescues",
        ipa_pronunciation: "/ˈrɛskjuːz/",
        korean_pronunciation: "레스큐즈",
        definition_korean: "구하다 (ῥυόμενον)"
      },
      {
        word: "wrath",
        ipa_pronunciation: "/ræθ/",
        korean_pronunciation: "래쓰",
        definition_korean: "진노 (ὀργῆς, 하나님의 심판)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "1 Thessalonians의 핵심 주제는 '재림 대망'입니다(각 장이 재림으로 끝남). '하늘로부터 아들을 기다린다'는 것은 초대교회의 생생한 재림 소망을 보여줍니다. 예수님은 (1) 죽은 자들 가운데서 부활하신 분(과거)이자, (2) 다가올 진노에서 구하실 분(미래)입니다.",
      cross_references: ["마 3:7 (다가올 진노)", "롬 5:9 (진노에서 구원)", "계 6:16-17 (진노의 날)"]
    },
    korean_translation: {
      natural_translation: "그리고 하늘로부터 하나님의 아들이 오시기를 기다립니다. 하나님께서 죽은 자들 가운데서 살리신 예수님, 그분은 다가올 진노에서 우리를 구원하십니다."
    },
    special_explanation: {
      explanation_type: "초대교회의 재림 대망",
      content: "ἀναμένειν(기다리다)는 단순한 기대가 아니라 '인내하며 사모하는 대망'을 의미합니다. 예수님은 네 가지로 묘사됩니다: (1) τὸν υἱὸν αὐτοῦ(그의 아들) - 신적 정체성, (2) ἐκ τῶν οὐρανῶν(하늘로부터) - 재림의 방향, (3) ὃν ἤγειρεν ἐκ τῶν νεκρῶν(죽은 자들 가운데서 살리신) - 부활의 증거, (4) τὸν ῥυόμενον(다가올 진노에서 구하시는) - 종말론적 구원. 기독교 신앙의 과거(부활), 현재(섬김), 미래(재림) 차원을 모두 포함합니다."
    }
  }
];

async function main() {
  console.log('📖 1 Thessalonians 1:1-10 분석 시작...');

  for (const analysis of analyses) {
    try {
      await saveAnalysisToDb(analysis);
      console.log(`✅ ${analysis.reference} 저장 완료`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error(`❌ ${analysis.reference} 저장 실패:`, error);
    }
  }

  console.log('✅ 1 Thessalonians 1장 전체 완료!');
}

main();
