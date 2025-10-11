// 배치 #1 분석 결과 (1 Corinthians 1:1-1:22, 15개 구절)
// 창세기 1:2 템플릿 기준 (90점 이상)

export const batch1Analyses = [
  // 1. 1 Corinthians 1:1
  {
    reference: "1 Corinthians 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "발신자 소개 - 권위 선언",
        original_text: "Paul, called to be an apostle of Christ Jesus by the will of God",
        korean_translation: "하나님의 뜻으로 그리스도 예수의 사도로 부르심을 받은 바울",
        grammatical_explanation: "주격 명사(Paul) + 과거분사구(called to be an apostle)로 수동적 부름을 강조. 전치사구 'by the will of God'가 권위의 출처를 명시하며, 사도직이 인간의 선택이 아닌 하나님의 주권적 행위임을 강조함"
      },
      {
        sequence_order: 2,
        semantic_classification: "공동 발신자 언급",
        original_text: "and our brother Sosthenes",
        korean_translation: "그리고 우리 형제 소스데네",
        grammatical_explanation: "접속사(and) + 소유격(our) + 명사구(brother Sosthenes). 간결한 명사구로 공동 발신자를 소개하며, 'our brother'라는 표현이 교회 공동체 내 친밀한 관계를 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "apostle",
        ipa_pronunciation: "[əˈpɒsl]",
        korean_pronunciation: "어파슬",
        part_of_speech: "명사",
        definition_korean: "사도 (그리스어 'ἀπόστολος'(apostolos)로, '보냄을 받은 자'를 의미함. 예수 그리스도로부터 직접 파송받아 복음을 전하고 교회를 세우는 특별한 권위를 가진 자. 12사도 외에 바울도 부활하신 그리스도를 만난 후 사도로 부름받음)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      },
      {
        word: "called",
        ipa_pronunciation: "[kɔːld]",
        korean_pronunciation: "콜드",
        part_of_speech: "과거분사",
        definition_korean: "부르심을 받은 (그리스어 'κλητός'(kletos)로, 하나님의 주권적 부르심을 나타냄. 단순한 초대가 아니라 효력 있는 부름으로, 응답할 수밖에 없는 하나님의 선택과 임명을 의미함. 바울의 사도직이 자발적 선택이 아님을 강조)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      },
      {
        word: "will",
        ipa_pronunciation: "[wɪl]",
        korean_pronunciation: "윌",
        part_of_speech: "명사",
        definition_korean: "뜻, 의지 (그리스어 'θέλημα'(thelema)로, 하나님의 주권적 의지와 계획을 나타냄. 하나님의 영원한 작정과 섭리를 포함하는 개념으로, 인간의 의지와 대비되어 절대적이고 완전한 의지를 의미함)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      },
      {
        word: "Christ",
        ipa_pronunciation: "[kraɪst]",
        korean_pronunciation: "크라이스트",
        part_of_speech: "고유명사",
        definition_korean: "그리스도, 메시야 (그리스어 'Χριστός'(Christos)로, 히브리어 '마시아흐'(기름부음받은 자)의 번역. 구약에서 예언된 왕이자 제사장이자 선지자인 구원자를 지칭. '예수 그리스도'는 예수가 약속된 메시야임을 선언하는 칭호)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      },
      {
        word: "Jesus",
        ipa_pronunciation: "[ˈdʒiːzəs]",
        korean_pronunciation: "지저스",
        part_of_speech: "고유명사",
        definition_korean: "예수 (그리스어 'Ἰησοῦς'(Iesous)로, 히브리어 '예슈아'(여호와는 구원이시다)에서 유래. 인간으로 오신 하나님의 아들의 이름이며, 그의 사역의 본질(구원)을 나타내는 이름)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      },
      {
        word: "brother",
        ipa_pronunciation: "[ˈbrʌðər]",
        korean_pronunciation: "브러더",
        part_of_speech: "명사",
        definition_korean: "형제 (그리스어 'ἀδελφός'(adelphos)로, 문자적으로는 같은 부모의 아들을 의미하지만, 신약에서는 그리스도 안에서 하나님을 아버지로 모시는 영적 형제 관계를 나타냄. 교회 공동체의 친밀하고 평등한 관계를 강조)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      },
      {
        word: "Sosthenes",
        ipa_pronunciation: "[ˈsɒsθəniːz]",
        korean_pronunciation: "소스데네스",
        part_of_speech: "고유명사",
        definition_korean: "소스데네 (그리스어 'Σωσθένης'(Sosthenes)로, '힘을 구원하는 자' 또는 '안전한 힘'을 의미. 사도행전 18:17에 나오는 회당장과 동일인일 가능성이 있으며, 바울과 함께 고린도교회에 서신을 쓰는 공동 저자로 언급됨)",
        usage_note: "1 Corinthians 1:1에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:1은 바울이 고린도교회에 보내는 편지의 서두로, 1세기 그리스-로마 서신 형식을 따릅니다. 발신자를 먼저 밝히는 것이 당시 관습이었으며, 바울은 자신의 정체성을 '그리스도 예수의 사도'로 규정합니다.

'부르심을 받은'(κλητός)이라는 표현은 바울의 권위가 인간의 임명이나 자발적 선택이 아니라 하나님의 주권적 부르심에 근거함을 강조합니다. 이는 고린도교회 내에서 바울의 사도적 권위를 의심하거나 도전하는 이들에 대한 응답으로 볼 수 있습니다. 사도행전 9장에서 다메섹 도상에서의 극적인 회심 경험을 통해 바울은 부활하신 그리스도로부터 직접 사도로 임명받았습니다.

'하나님의 뜻으로'(διὰ θελήματος θεοῦ)라는 구절은 바울의 사도직이 단순히 교회나 인간의 인정이 아니라 하나님의 영원한 계획과 섭리에 근거함을 명확히 합니다. 이는 갈라디아서 1:1에서도 반복되는 주제로, 바울의 권위가 예루살렘 사도들이나 인간의 승인에 의존하지 않음을 강조합니다.

소스데네의 언급은 흥미롭습니다. 사도행전 18:17에 나오는 고린도 회당장 소스데네와 동일인일 가능성이 높으며, 만약 그렇다면 그는 바울의 사역에 반대하다가 나중에 개종한 인물로 추정됩니다. '우리 형제'라는 표현은 그가 이제 그리스도인 공동체의 일원임을 나타내며, 바울과 함께 서신을 쓰는 공동 저자로서의 역할을 합니다.

문학적으로 이 서두는 전형적인 바울 서신의 패턴을 따르지만, 사도적 권위를 특별히 강조함으로써 편지 전체의 톤을 설정합니다. 고린도교회는 분열, 도덕적 문제, 영적 은사의 오용 등 여러 문제로 어려움을 겪고 있었기에, 바울은 자신의 권위를 명확히 함으로써 이어질 권면과 교정의 정당성을 확립합니다.`
    }],
    korean_translations: [{
      natural_translation: "하나님의 뜻으로 그리스도 예수의 사도로 부르심을 받은 바울과 우리 형제 소스데네는"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "그리스어 원문에서 'κλητὸς ἀπόστολος'(kletos apostolos, 부르심받은 사도)의 어순은 'called to be'보다 '부르심받은 사도'라는 정체성을 더 강하게 강조합니다. 과거분사 κλητός는 완료된 행위로서의 부르심을 나타내어, 바울의 사도직이 이미 확립된 사실임을 보여줍니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "바울의 자기 소개는 단순한 형식이 아니라 신학적 선언입니다. '하나님의 뜻으로'라는 구절은 하나님의 주권적 선택(divine sovereignty)과 예정론적 부르심을 반영하며, 이는 로마서 8:28-30의 부르심(calling) 개념과 연결됩니다. 바울의 사도직은 하나님의 영원한 구원 계획의 일부로서, 이방인에게 복음을 전하는 특별한 사명을 포함합니다(갈라디아서 1:15-16)."
      },
      {
        explanation_type: "역사적 배경",
        content: "1세기 그리스-로마 세계에서 서신은 발신자-수신자-인사 순서로 시작했습니다. 바울은 이 형식을 따르면서도 자신의 사도적 정체성을 강조함으로써, 단순한 개인 편지가 아니라 권위 있는 사도적 서신임을 명확히 합니다. 고린도교회 내 일부는 바울의 권위를 의심했기에(고린도후서 10-13장 참조), 이러한 자기 소개는 수사학적으로 매우 중요했습니다."
      }
    ]
  },

  // 2. 1 Corinthians 1:10
  {
    reference: "1 Corinthians 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "호소와 권면",
        original_text: "I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ",
        korean_translation: "형제자매 여러분, 우리 주 예수 그리스도의 이름으로 여러분에게 권면합니다",
        grammatical_explanation: "1인칭 동사(I appeal) + 전치사구(to you, in the name). 'παρακαλῶ'(parakaleo, 호소하다/권면하다)는 강한 설득과 권유를 나타내며, '주의 이름으로'라는 표현은 바울의 권면이 개인적 의견이 아니라 그리스도의 권위에 근거함을 강조합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "구체적 요청 - 일치",
        original_text: "that all of you agree with one another in what you say",
        korean_translation: "여러분 모두가 같은 말을 하며 서로 일치하기를",
        grammatical_explanation: "종속절(that-clause) + 접속사(and). 'τὸ αὐτὸ λέγητε'(to auto legete, 같은 것을 말하다)는 단순히 동의를 넘어서 공동의 복음 메시지를 선포하는 통일성을 의미합니다."
      },
      {
        sequence_order: 3,
        semantic_classification: "부정적 요소 제거",
        original_text: "and that there be no divisions among you",
        korean_translation: "여러분 가운데 분열이 없기를",
        grammatical_explanation: "부정 명령(no divisions) + 전치사구(among you). 'σχίσματα'(schismata, 분열)는 옷이 찢어지는 것을 나타내는 단어로, 교회 공동체의 심각한 분열을 생생하게 묘사합니다."
      },
      {
        sequence_order: 4,
        semantic_classification: "긍정적 목표 - 완전한 연합",
        original_text: "but that you be perfectly united in mind and thought",
        korean_translation: "오히려 같은 마음과 같은 생각으로 완전히 하나가 되기를 바랍니다",
        grammatical_explanation: "대조 접속사(but) + 수동태 분사구(perfectly united). 'κατηρτισμένοι'(katertismenoi, 온전하게 연합된)는 어부들이 찢어진 그물을 수선하는 것을 나타내는 단어로, 분열된 교회가 완전히 회복되어야 함을 강조합니다."
      }
    ],
    vocabulary: [
      {
        word: "appeal",
        ipa_pronunciation: "[əˈpiːl]",
        korean_pronunciation: "어필",
        part_of_speech: "동사",
        definition_korean: "호소하다, 권면하다 (그리스어 'παρακαλῶ'(parakaleo)로, '곁에서 부르다'라는 뜻. 단순한 요청을 넘어서 진심 어린 설득과 위로를 포함하는 강한 권면. 신약에서 자주 사용되며, 권위가 아닌 사랑으로 권유하는 목회적 접근을 나타냄)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      },
      {
        word: "agree",
        ipa_pronunciation: "[əˈɡriː]",
        korean_pronunciation: "어그리",
        part_of_speech: "동사",
        definition_korean: "동의하다, 일치하다 (그리스어 'τὸ αὐτὸ λέγητε'(to auto legete)를 번역한 것으로, 문자적으로는 '같은 것을 말하다'를 의미. 단순히 의견이 같다는 것을 넘어서, 복음의 핵심 메시지에 대한 공동의 고백과 선포를 나타냄)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      },
      {
        word: "divisions",
        ipa_pronunciation: "[dɪˈvɪʒənz]",
        korean_pronunciation: "디비전스",
        part_of_speech: "명사",
        definition_korean: "분열, 분파 (그리스어 'σχίσματα'(schismata)로, '찢김' 또는 '갈라짐'을 의미. 옷이나 천이 찢어지는 것을 나타내는 단어로, 교회 공동체가 심각하게 갈라진 상태를 생생하게 묘사. 그리스도의 몸인 교회가 찢겨진다는 강한 이미지를 전달함)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      },
      {
        word: "united",
        ipa_pronunciation: "[juːˈnaɪtɪd]",
        korean_pronunciation: "유나이티드",
        part_of_speech: "형용사",
        definition_korean: "연합된, 하나된 (그리스어 'κατηρτισμένοι'(katertismenoi)를 번역한 것으로, '온전하게 회복되다' 또는 '수선되다'를 의미. 어부들이 찢어진 그물을 고치는 것을 나타내는 단어로, 분열된 교회가 원래의 온전한 상태로 회복되어야 함을 강조)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      },
      {
        word: "mind",
        ipa_pronunciation: "[maɪnd]",
        korean_pronunciation: "마인드",
        part_of_speech: "명사",
        definition_korean: "마음, 생각 (그리스어 'νοῦς'(nous)로, 이성적 사고와 판단 능력을 나타냄. 단순한 감정이 아니라 신학적 이해와 영적 분별력을 포함하는 개념. 로마서 12:2의 '마음을 새롭게 함'에서도 같은 단어가 사용됨)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      },
      {
        word: "thought",
        ipa_pronunciation: "[θɔːt]",
        korean_pronunciation: "쏘트",
        part_of_speech: "명사",
        definition_korean: "생각, 견해 (그리스어 'γνώμη'(gnome)로, '의견' 또는 '판단'을 의미. 개인의 주관적 생각이 아니라, 복음에 근거한 공동의 신학적 확신과 판단을 나타냄. mind(νοῦς)와 함께 사용되어 완전한 내적 일치를 강조)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      },
      {
        word: "perfectly",
        ipa_pronunciation: "[ˈpɜːfɪktli]",
        korean_pronunciation: "퍼펙틀리",
        part_of_speech: "부사",
        definition_korean: "완전히, 온전히 (그리스어 'κατηρτισμένοι'(katertismenoi)의 완전성을 강조하는 표현. 부분적이거나 피상적인 연합이 아니라, 모든 면에서 완전하고 온전한 일치를 요구함. 하나님의 완전하심을 닮아가는 교회의 목표를 반영)",
        usage_note: "1 Corinthians 1:10에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:10은 고린도전서의 본론을 시작하는 핵심 구절로, 바울이 이 편지를 쓴 주된 이유 중 하나인 교회 내 분열 문제를 직접적으로 다룹니다. 고린도교회는 다양한 지도자들을 중심으로 분파가 형성되어 심각한 갈등을 겪고 있었습니다.

'παρακαλῶ'(parakaleo, 권면하다)라는 동사는 바울의 목회적 접근을 보여줍니다. 그는 사도적 권위를 내세워 명령하기보다는, 형제자매로서 진심 어린 호소를 통해 설득하고자 합니다. '우리 주 예수 그리스도의 이름으로'라는 표현은 이 권면이 개인적 선호가 아니라 그리스도의 권위와 뜻에 근거함을 명확히 합니다.

'σχίσματα'(schismata, 분열)라는 단어는 매우 강한 이미지를 전달합니다. 이 단어는 옷이나 천이 찢어지는 것을 나타내며, 마태복음 27:51에서 예수님이 십자가에서 죽으실 때 성전 휘장이 '찢어진' 것을 묘사할 때도 사용됩니다. 교회가 분열된다는 것은 그리스도의 몸이 찢겨진다는 것을 의미하며, 이는 십자가 사건만큼이나 심각한 문제입니다.

반대로 'κατηρτισμένοι'(katertismenoi, 온전하게 연합된)는 긍정적인 목표를 제시합니다. 이 단어는 어부들이 찢어진 그물을 수선하는 것을 나타내며(마태복음 4:21 참조), 분열된 교회가 원래의 온전한 상태로 회복되어야 함을 강조합니다. 마음(νοῦς)과 생각(γνώμη)에서의 완전한 일치는 단순한 외적 합의가 아니라, 복음에 대한 깊은 신학적 이해와 영적 확신의 공유를 의미합니다.

역사적으로 고린도는 그리스-로마 문화의 중심지로, 다양한 철학과 종교가 공존하는 다원주의적 환경이었습니다. 이러한 배경에서 그리스도인들이 세속적 가치관인 개인주의와 당파주의에 영향을 받아 교회 내에서도 분열이 일어났습니다. 바울은 이러한 세속적 패턴을 거부하고, 그리스도 안에서의 참된 연합을 회복할 것을 강력히 권면합니다.`
    }],
    korean_translations: [{
      natural_translation: "형제자매 여러분, 우리 주 예수 그리스도의 이름으로 여러분에게 권면합니다. 여러분 모두가 같은 말을 하며, 여러분 가운데 분열이 없이, 같은 마음과 같은 생각으로 완전히 하나가 되시기 바랍니다."
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 하나의 긴 문장으로, 주동사 'παρακαλῶ'(권면하다) 다음에 네 개의 종속절이 연결됩니다. 'ἵνα'(hina, ~하도록)로 시작하는 목적절들이 바울이 원하는 것을 구체적으로 제시하며, 부정(no divisions)과 긍정(perfectly united)을 대조적으로 배치하여 수사적 효과를 극대화합니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "교회의 연합은 바울 신학의 핵심 주제입니다. 에베소서 4:1-6에서도 '한 몸, 한 성령, 한 소망, 한 주, 한 믿음, 한 세례, 한 하나님'을 강조하며 연합을 촉구합니다. 이러한 연합은 삼위일체 하나님의 본질을 반영하며(요한복음 17:21), 세상을 향한 복음의 증거가 됩니다. 분열은 그리스도의 몸을 훼손하고 복음의 신뢰성을 떨어뜨립니다."
      },
      {
        explanation_type: "문학적 구조",
        content: "이 구절은 chiasm(교차 대구) 구조를 보입니다: A) 같은 말을 하라(긍정), B) 분열이 없게 하라(부정), B') 온전히 연합되라(부정의 반대), A') 같은 마음과 생각(긍정의 확장). 이러한 구조는 메시지를 강조하고 기억하기 쉽게 만들며, 외적 통일(말)에서 내적 통일(마음과 생각)로 심화되는 과정을 보여줍니다."
      }
    ]
  },

  // 3. 1 Corinthians 1:11
  {
    reference: "1 Corinthians 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "정보 출처 밝힘",
        original_text: "My brothers and sisters, some from Chloe's household have informed me",
        korean_translation: "형제자매 여러분, 클로에의 집 사람들이 제게 알려주었습니다",
        grammatical_explanation: "호격(My brothers and sisters) + 주어(some from Chloe's household) + 동사(have informed). 'ἐδηλώθη'(edelothe, 알려졌다)는 수동태로, 정보가 신뢰할 수 있는 출처로부터 공식적으로 전달되었음을 나타냅니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "문제 상황 보고",
        original_text: "that there are quarrels among you",
        korean_translation: "여러분 가운데 다툼이 있다는 것을",
        grammatical_explanation: "종속절(that-clause) + 존재 동사(there are) + 명사(quarrels). 'ἔριδες'(erides, 다툼)는 격렬한 언쟁과 갈등을 나타내며, 단순한 의견 차이를 넘어선 심각한 불화를 의미합니다."
      }
    ],
    vocabulary: [
      {
        word: "household",
        ipa_pronunciation: "[ˈhaʊshoʊld]",
        korean_pronunciation: "하우스홀드",
        part_of_speech: "명사",
        definition_korean: "가정, 집안 (그리스어 'οἱ Χλόης'(hoi Chloes)로, 문자적으로는 '클로에에 속한 사람들'을 의미. 1세기 로마 사회에서 가정(household)은 혈연 가족뿐 아니라 노예, 피고용인, 사업 동료까지 포함하는 확대된 공동체를 지칭)",
        usage_note: "1 Corinthians 1:11에서 사용됨"
      },
      {
        word: "Chloe",
        ipa_pronunciation: "[ˈkloʊi]",
        korean_pronunciation: "클로에",
        part_of_speech: "고유명사",
        definition_korean: "클로에 (그리스어 'Χλόη'(Chloe)로, '새싹' 또는 '푸른 풀'을 의미하는 이름. 고린도의 유력한 그리스도인 여성으로 추정되며, 그녀의 집 사람들이 고린도교회의 문제를 바울에게 보고했음. 이는 초대교회에서 여성 지도자들의 중요한 역할을 보여줌)",
        usage_note: "1 Corinthians 1:11에서 사용됨"
      },
      {
        word: "informed",
        ipa_pronunciation: "[ɪnˈfɔːmd]",
        korean_pronunciation: "인폼드",
        part_of_speech: "동사",
        definition_korean: "알리다, 보고하다 (그리스어 'ἐδηλώθη'(edelothe)로, '분명하게 밝혀지다' 또는 '공식적으로 알려지다'를 의미. 단순한 소문이 아니라, 신뢰할 수 있는 증인들의 공식적인 보고임을 강조. 수동태 형태는 정보의 객관성과 진실성을 나타냄)",
        usage_note: "1 Corinthians 1:11에서 사용됨"
      },
      {
        word: "quarrels",
        ipa_pronunciation: "[ˈkwɒrəlz]",
        korean_pronunciation: "쿼럴스",
        part_of_speech: "명사",
        definition_korean: "다툼, 논쟁 (그리스어 'ἔριδες'(erides)로, 격렬한 논쟁과 적대적인 갈등을 나타냄. 단순한 의견 차이(difference of opinion)를 넘어서, 감정적이고 파괴적인 대립을 의미. 갈라디아서 5:20에서는 '육체의 일'로 분류되며, 로마서 1:29에서는 죄악의 목록에 포함됨)",
        usage_note: "1 Corinthians 1:11에서 사용됨"
      },
      {
        word: "among",
        ipa_pronunciation: "[əˈmʌŋ]",
        korean_pronunciation: "어멍",
        part_of_speech: "전치사",
        definition_korean: "~가운데, ~사이에 (그리스어 'ἐν ὑμῖν'(en hymin)로, '여러분 안에' 또는 '여러분 사이에'를 의미. 외부가 아니라 교회 공동체 내부에서 발생한 문제임을 강조하며, 이는 더욱 심각한 상황임을 나타냄)",
        usage_note: "1 Corinthians 1:11에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:11은 바울이 고린도교회의 문제를 어떻게 알게 되었는지를 밝히는 구절입니다. 클로에의 집 사람들이 바울에게 교회의 분열 상황을 직접 보고했으며, 이는 단순한 소문이 아니라 신뢰할 수 있는 증인들의 공식적인 증언입니다.

클로에(Χλόη, Chloe)는 고린도의 유력한 그리스도인 여성으로 추정됩니다. 바울이 그녀의 이름을 공개적으로 언급한 것은 그녀가 교회 내에서 존경받는 인물이었으며, 그녀의 집 사람들의 증언이 신뢰할 만하다는 것을 보여줍니다. 1세기 로마 사회에서 '집안'(household)은 혈연 가족뿐 아니라 노예, 피고용인, 사업 동료까지 포함하는 확대된 공동체를 의미했습니다. 클로에의 집이 고린도와 에베소(바울이 편지를 쓴 곳) 사이를 오가는 무역이나 사업에 관여했을 가능성이 높으며, 이들이 고린도의 상황을 바울에게 전달한 것으로 보입니다.

'ἐδηλώθη'(edelothe, 알려졌다)는 수동태 동사로, 정보가 공식적으로 전달되었음을 나타냅니다. 이는 바울이 단순한 소문이나 추측에 근거하여 고린도교회를 비판하는 것이 아니라, 신뢰할 수 있는 증인들의 구체적인 보고에 기초하여 편지를 쓰고 있음을 강조합니다.

'ἔριδες'(erides, 다툼)는 단순한 의견 차이를 넘어서는 격렬한 논쟁과 적대적 갈등을 나타냅니다. 신약에서 이 단어는 부정적인 의미로 사용되며, 갈라디아서 5:20에서는 '육체의 일'로, 로마서 1:29에서는 죄악의 목록에 포함됩니다. 교회 내에서 이러한 다툼이 일어나는 것은 영적으로 심각한 문제입니다.

바울이 정보 출처를 명시한 것은 투명성과 책임성을 보여줍니다. 그는 익명의 고발이나 소문이 아니라, 구체적인 증인들의 보고에 근거하여 교회의 문제를 다루고 있습니다. 이는 마태복음 18장의 교회 권징 원칙과도 일치하며, 바울의 목회적 지혜를 보여줍니다.`
    }],
    korean_translations: [{
      natural_translation: "형제자매 여러분, 클로에의 집 사람들이 여러분 가운데 다툼이 있다는 것을 제게 알려주었습니다."
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 간결하지만 명확한 구조를 가집니다. 호격(My brothers and sisters)으로 시작하여 친밀한 관계를 강조하고, 주절에서 정보 출처를 밝힌 후, 종속절(that-clause)에서 문제의 내용을 제시합니다. 'ἐδηλώθη'(알려졌다)의 수동태 형태는 정보의 객관성을 강조합니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "클로에는 초대교회에서 중요한 역할을 한 여성 지도자 중 한 명입니다. 빌립보서의 유오디아와 순두게, 골로새서의 눔바처럼, 바울 시대 교회에는 많은 여성 지도자들이 있었으며, 이들은 가정교회를 운영하고 교회 공동체를 지원했습니다. 클로에의 집이 무역이나 사업에 관여했다면, 그녀는 상당한 재정적 자원과 사회적 영향력을 가진 인물이었을 것입니다."
      },
      {
        explanation_type: "목회적 지혜",
        content: "바울이 정보 출처를 명시한 것은 여러 목회적 의미가 있습니다. 첫째, 투명성을 보여줍니다. 둘째, 클로에의 집 사람들이 용기를 내어 문제를 보고한 것을 인정하고 지지합니다. 셋째, 고린도교회가 자신들의 문제를 부인하거나 축소할 수 없도록 합니다. 넷째, 마태복음 18장의 교회 권징 원칙(증인의 필요성)을 따릅니다."
      }
    ]
  },

  // 4. 1 Corinthians 1:12
  {
    reference: "1 Corinthians 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "문제 상황 구체화",
        original_text: "What I mean is this:",
        korean_translation: "제가 말하는 것은 이것입니다:",
        grammatical_explanation: "설명 도입 표현. 'τοῦτο δὲ λέγω'(touto de lego, 이것을 말하노니)는 앞서 언급한 '다툼'을 구체적으로 설명하기 위한 수사적 장치입니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "분파 선언 1 - 바울파",
        original_text: 'One of you says, "I follow Paul"',
        korean_translation: "여러분 중 어떤 이는 '나는 바울을 따른다'고 하고",
        grammatical_explanation: "주어(One of you) + 동사(says) + 직접 인용문. 'ἐγὼ μέν εἰμι Παύλου'(ego men eimi Paulou, 나는 바울에게 속했다)는 소유격 구문으로, 개인적 충성과 당파적 정체성을 나타냅니다."
      },
      {
        sequence_order: 3,
        semantic_classification: "분파 선언 2 - 아볼로파",
        original_text: 'another, "I follow Apollos"',
        korean_translation: "다른 이는 '나는 아볼로를 따른다'고 하며",
        grammatical_explanation: "생략 구문(another [says]). 반복을 피하기 위해 동사를 생략하고 직접 인용문만 제시하여, 분파 선언의 연속성을 강조합니다."
      },
      {
        sequence_order: 4,
        semantic_classification: "분파 선언 3 - 게바파",
        original_text: 'another, "I follow Cephas"',
        korean_translation: "또 다른 이는 '나는 게바를 따른다'고 하고",
        grammatical_explanation: "동일한 생략 구문. 게바는 베드로의 아람어 이름으로, 예루살렘 교회와의 연결성을 강조하는 분파를 나타냅니다."
      },
      {
        sequence_order: 5,
        semantic_classification: "분파 선언 4 - 그리스도파",
        original_text: 'still another, "I follow Christ."',
        korean_translation: "또 다른 이는 '나는 그리스도를 따른다'고 합니다",
        grammatical_explanation: "마지막 생략 구문 + 마침표로 선언 종결. 역설적으로 '그리스도파'조차도 배타적인 당파주의를 나타내며, 다른 그리스도인들을 비하하는 우월감을 드러냅니다."
      }
    ],
    vocabulary: [
      {
        word: "follow",
        ipa_pronunciation: "[ˈfɒloʊ]",
        korean_pronunciation: "팔로우",
        part_of_speech: "동사",
        definition_korean: "따르다, ~에 속하다 (그리스어 'εἰμι + 소유격'(eimi + genitive) 구문으로, 문자적으로는 '~의 것이다' 또는 '~에게 속하다'를 의미. 단순한 존경이나 선호를 넘어서, 배타적인 충성과 당파적 정체성을 나타냄. 1세기 그리스-로마 세계에서 철학 학파나 정치 파벌에 속하는 것과 유사한 개념)",
        usage_note: "1 Corinthians 1:12에서 사용됨"
      },
      {
        word: "Paul",
        ipa_pronunciation: "[pɔːl]",
        korean_pronunciation: "폴",
        part_of_speech: "고유명사",
        definition_korean: "바울 (그리스어 'Παῦλος'(Paulos)로, 히브리 이름 '사울'의 그리스식 표현. 고린도교회를 처음 개척한 사도로, AD 50-52년경 18개월 동안 고린도에 머물며 교회를 세웠음. 일부 교인들이 그를 '창립자'로 여기며 그의 이름으로 분파를 형성)",
        usage_note: "1 Corinthians 1:12에서 사용됨"
      },
      {
        word: "Apollos",
        ipa_pronunciation: "[əˈpɒləs]",
        korean_pronunciation: "어팔러스",
        part_of_speech: "고유명사",
        definition_korean: "아볼로 (그리스어 'Ἀπολλῶς'(Apollos)로, 알렉산드리아 출신의 유대인 그리스도인. 사도행전 18:24-28에 따르면 '말에 능하고' '성경에 통달한' 웅변가였으며, 바울 이후에 고린도에 와서 교회를 세웠음. 그의 지적이고 수사학적인 스타일이 일부 교인들을 매료시켜 '아볼로파'가 형성됨)",
        usage_note: "1 Corinthians 1:12에서 사용됨"
      },
      {
        word: "Cephas",
        ipa_pronunciation: "[ˈsiːfəs]",
        korean_pronunciation: "시파스",
        part_of_speech: "고유명사",
        definition_korean: "게바 (그리스어 'Κηφᾶς'(Kephas)로, 아람어 '바위'를 의미하는 베드로의 원래 이름. 예수님이 시몬에게 '게바'라는 이름을 주셨음(요한복음 1:42). 12사도 중 대표적 인물이자 예루살렘 교회의 지도자. 일부 유대계 그리스도인들이 그의 권위를 내세우며 분파를 형성한 것으로 보임)",
        usage_note: "1 Corinthians 1:12에서 사용됨"
      },
      {
        word: "Christ",
        ipa_pronunciation: "[kraɪst]",
        korean_pronunciation: "크라이스트",
        part_of_speech: "고유명사",
        definition_korean: "그리스도 (그리스어 'Χριστός'(Christos)로, 메시야를 의미. 역설적으로 '그리스도파'는 그리스도를 따른다고 주장하면서도 다른 그리스도인들을 배제하는 배타적 당파주의를 나타냄. 이들은 인간 지도자를 따르는 다른 그룹들보다 우월하다고 생각했을 가능성이 있음)",
        usage_note: "1 Corinthians 1:12에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:12는 고린도교회 내 분파 문제를 생생하게 보여주는 구절입니다. 바울은 네 가지 분파의 구호를 직접 인용하여, 문제의 심각성을 극적으로 드러냅니다.

네 분파는 각각 다른 지도자를 중심으로 형성되었습니다. '바울파'는 교회 창립자인 바울을 따르며, 그의 은혜 중심 신학과 이방인 선교 방식을 강조했을 것입니다. '아볼로파'는 알렉산드리아 출신의 웅변가 아볼로(사도행전 18:24-28)를 따르며, 그의 지적이고 수사학적인 설교 스타일을 선호했습니다. 아볼로는 '말에 능하고' '성경에 통달한' 인물로, 그리스 철학과 수사학에 익숙한 고린도의 지식인들을 매료시켰을 것입니다.

'게바(베드로)파'는 예루살렘 교회와의 연결성을 중시하는 유대계 그리스도인들이었을 가능성이 높습니다. 베드로는 12사도의 대표이자 예수님과 직접 동행한 인물이므로, 이들은 베드로의 권위를 내세워 자신들의 정통성을 주장했을 것입니다. 혹은 베드로가 고린도를 방문했거나, 그의 제자들이 고린도에 와서 영향을 미쳤을 가능성도 있습니다.

가장 역설적인 것은 '그리스도파'입니다. 이들은 인간 지도자를 따르는 다른 그룹들과 달리 그리스도를 직접 따른다고 주장하며, 영적 우월감을 드러냈을 것입니다. 그러나 바울은 1:13에서 이들의 주장도 결국 그리스도의 몸을 분열시키는 당파주의임을 지적합니다.

이러한 분파주의는 1세기 그리스-로마 세계의 철학 학파 문화를 반영합니다. 당시 고린도에는 스토아학파, 에피쿠로스학파, 견유학파 등 다양한 철학 학파들이 있었고, 사람들은 특정 스승을 따르며 그의 학파에 충성했습니다. 고린도 그리스도인들이 이러한 세속적 패턴을 교회에 적용하여, 영적 지도자들을 철학 스승처럼 대하고 당파를 형성한 것입니다.

바울은 이러한 분파주의가 그리스도의 복음과 근본적으로 양립할 수 없음을 강력히 주장합니다. 다음 구절(1:13)에서 그는 수사적 질문을 통해 이 문제를 예리하게 파고듭니다.`
    }],
    korean_translations: [{
      natural_translation: "제가 말하는 것은 이것입니다. 여러분 중 어떤 이는 '나는 바울을 따른다'고 하고, 다른 이는 '나는 아볼로를 따른다'고 하며, 또 다른 이는 '나는 게바를 따른다'고 하고, 또 다른 이는 '나는 그리스도를 따른다'고 합니다."
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 효과적인 수사적 구조를 가집니다. 도입 표현 후에 네 개의 직접 인용문이 반복되는 패턴으로, '한 사람은... 또 다른 사람은...'의 리듬이 분파의 연속성과 보편성을 강조합니다. 동사 'says'를 처음에만 사용하고 이후에는 생략하여(생략 구문), 빠른 속도로 분파 선언들을 나열함으로써 문제의 심각성을 극적으로 드러냅니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "1세기 고린도는 그리스-로마 문화의 중심지로, 다양한 철학 학파들이 경쟁했습니다. 사람들은 특정 철학자를 스승으로 삼고 그의 학파에 충성했으며, 서로 다른 학파 간에는 경쟁과 논쟁이 있었습니다. 고린도 그리스도인들이 이러한 문화적 패턴을 교회에 적용하여, 영적 지도자들을 철학 스승처럼 대하고 당파를 형성했습니다. 또한 고린도는 수사학과 웅변이 높이 평가되는 도시였기에, 설교 스타일과 지적 능력이 지도자 선호도에 큰 영향을 미쳤습니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "분파주의의 근본 문제는 그리스도의 유일성과 충족성을 부정하는 것입니다. 모든 그리스도인은 그리스도께 속하며(고린도전서 3:23), 인간 지도자들은 모두 '심는 자'와 '물주는 자'에 불과합니다(3:6-7). '그리스도파'조차도 문제인 이유는, 그들이 그리스도를 자신들만의 배타적 소유물로 주장하며 다른 그리스도인들을 배제했기 때문입니다. 참된 그리스도 중심성은 겸손과 연합을 낳지만, 거짓된 '그리스도주의'는 교만과 분열을 낳습니다."
      }
    ]
  },

  // 5. 1 Corinthians 1:13
  {
    reference: "1 Corinthians 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수사적 질문 1 - 그리스도의 분할 불가능성",
        original_text: "Is Christ divided?",
        korean_translation: "그리스도께서 나뉘어졌습니까?",
        grammatical_explanation: "수사적 질문(rhetorical question) + 수동태 동사(divided). 'μεμέρισται ὁ Χριστός'(memeristai ho Christos, 그리스도가 나뉘어졌는가?)는 완료 수동태로, 그리스도가 분열될 수 없음을 강조하는 반어적 질문입니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "수사적 질문 2 - 십자가 사건의 주체",
        original_text: "Was Paul crucified for you?",
        korean_translation: "바울이 여러분을 위해 십자가에 못 박혔습니까?",
        grammatical_explanation: "수사적 질문 + 수동태 동사(crucified) + 전치사구(for you). 'ἐσταυρώθη'(estau rothe, 십자가에 못 박혔는가?)는 부정적 답을 기대하며, 구원의 유일한 근거가 그리스도의 십자가임을 상기시킵니다."
      },
      {
        sequence_order: 3,
        semantic_classification: "수사적 질문 3 - 세례의 권위",
        original_text: "Were you baptized in the name of Paul?",
        korean_translation: "여러분이 바울의 이름으로 세례를 받았습니까?",
        grammatical_explanation: "수사적 질문 + 수동태 동사(baptized) + 전치사구(in the name of). 'εἰς τὸ ὄνομα Παύλου'(eis to onoma Paulou, 바울의 이름으로)는 권위와 소속을 나타내는 표현으로, 세례가 그리스도의 이름으로만 주어짐을 강조합니다."
      }
    ],
    vocabulary: [
      {
        word: "divided",
        ipa_pronunciation: "[dɪˈvaɪdɪd]",
        korean_pronunciation: "디바이디드",
        part_of_speech: "형용사/과거분사",
        definition_korean: "나뉘어진, 분할된 (그리스어 'μεμέρισται'(memeristai)로, 완료 수동태 형태. '나누다' 또는 '분배하다'를 의미하는 'μερίζω'(merizo)에서 유래. 그리스도의 몸이 분열될 수 없음을 강조하는 신학적 개념. 에베소서 4:4-6의 '한 몸, 한 성령, 한 소망, 한 주, 한 믿음, 한 세례, 한 하나님' 개념과 연결됨)",
        usage_note: "1 Corinthians 1:13에서 사용됨"
      },
      {
        word: "crucified",
        ipa_pronunciation: "[ˈkruːsɪfaɪd]",
        korean_pronunciation: "크루시파이드",
        part_of_speech: "과거분사",
        definition_korean: "십자가에 못 박힌 (그리스어 'ἐσταυρώθη'(estau rothe)로, 로마의 극형인 십자가 처형을 나타냄. 신약에서 예수 그리스도의 대속적 죽음을 지칭하는 핵심 용어. 갈라디아서 2:20 '내가 그리스도와 함께 십자가에 못 박혔다'에서처럼, 그리스도인의 정체성과 구원의 근거를 나타내는 신학적 개념)",
        usage_note: "1 Corinthians 1:13에서 사용됨"
      },
      {
        word: "baptized",
        ipa_pronunciation: "[bæpˈtaɪzd]",
        korean_pronunciation: "밥타이즈드",
        part_of_speech: "과거분사",
        definition_korean: "세례를 받은 (그리스어 'ἐβαπτίσθητε'(ebaptisthete)로, '담그다' 또는 '잠기다'를 의미하는 'βαπτίζω'(baptizo)에서 유래. 그리스도와의 연합, 죄로부터의 씻음, 교회 공동체로의 입문을 나타내는 의식. 로마서 6:3-4에서는 그리스도의 죽음과 부활에 연합하는 것으로 설명됨)",
        usage_note: "1 Corinthians 1:13에서 사용됨"
      },
      {
        word: "name",
        ipa_pronunciation: "[neɪm]",
        korean_pronunciation: "네임",
        part_of_speech: "명사",
        definition_korean: "이름, 권위 (그리스어 'ὄνομα'(onoma)로, 단순한 명칭이 아니라 그 사람의 본질, 권위, 임재를 나타냄. 구약에서 하나님의 이름은 그의 본질과 임재를 의미했으며(출애굽기 3:14), 신약에서 '예수의 이름으로'는 그의 권위와 대리적 행위를 나타냄. 세례가 '그리스도의 이름으로' 주어진다는 것은 그리스도께 속하게 됨을 의미)",
        usage_note: "1 Corinthians 1:13에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:13은 바울이 세 개의 강력한 수사적 질문을 통해 분파주의의 불합리성을 폭로하는 구절입니다. 각 질문은 명백한 답('아니오')을 전제하며, 고린도 교인들의 당파적 행동이 얼마나 복음의 본질과 모순되는지를 드러냅니다.

첫 번째 질문 '그리스도께서 나뉘어졌습니까?'는 분파주의의 근본적 문제를 지적합니다. 그리스도는 하나이며 분열될 수 없습니다. 에베소서 4:4-6에서 바울은 '한 몸, 한 성령, 한 소망, 한 주, 한 믿음, 한 세례, 한 하나님'을 강조하며, 교회의 연합이 삼위일체 하나님의 본질을 반영한다고 가르칩니다. 교회가 분열된다는 것은 그리스도의 몸이 찢겨진다는 것을 의미하며, 이는 불가능할 뿐 아니라 신성모독적입니다.

두 번째 질문 '바울이 여러분을 위해 십자가에 못 박혔습니까?'는 구원의 유일한 근거를 상기시킵니다. 오직 예수 그리스도만이 우리 죄를 위해 십자가에서 죽으셨으며, 어떤 인간 지도자도 그러한 대속적 역할을 할 수 없습니다. 고린도 교인들이 '나는 바울에게 속했다'고 말하는 것은, 마치 바울이 그들을 위해 십자가에 못 박힌 것처럼 그를 구원자의 위치에 두는 것입니다. 이는 그리스도의 유일한 구원 사역을 평가절하하는 것입니다.

세 번째 질문 '여러분이 바울의 이름으로 세례를 받았습니까?'는 세례의 신학적 의미를 강조합니다. 세례는 그리스도의 이름으로, 즉 그의 권위로 주어지며, 세례받은 자는 그리스도께 속하게 됩니다(갈라디아서 3:27 '그리스도로 옷 입었다'). '누구의 이름으로' 세례를 받았느냐는 누구에게 속하느냐를 결정하는 중요한 질문입니다. 사도행전 19:5에서도 요한의 세례를 받은 자들이 '주 예수의 이름으로' 다시 세례를 받는 장면이 나옵니다.

역사적으로 이 구절은 초대교회가 세례 의식에서 '아버지와 아들과 성령의 이름으로'(마태복음 28:19) 또는 '예수 그리스도의 이름으로'(사도행전 2:38)라는 세례 공식을 사용했음을 보여줍니다. 세례는 단순한 입교 의식이 아니라, 그리스도와의 연합과 교회 공동체로의 입문을 나타내는 신학적으로 깊은 의미를 가진 성례입니다.

바울의 이 세 질문은 논리적으로 긴밀하게 연결됩니다: (1) 그리스도는 하나이며 나뉠 수 없다 → (2) 오직 그리스도만이 우리를 위해 죽으셨다 → (3) 우리는 그리스도의 이름으로 세례를 받았다. 따라서 우리는 인간 지도자가 아니라 오직 그리스도께만 속해 있으며, 그리스도 안에서 하나입니다.`
    }],
    korean_translations: [{
      natural_translation: "그리스도께서 나뉘어졌습니까? 바울이 여러분을 위해 십자가에 못 박혔습니까? 여러분이 바울의 이름으로 세례를 받았습니까?"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 세 개의 수사적 질문(rhetorical questions)으로 구성되어 있으며, 모두 부정적 답변을 기대합니다. 그리스어 원문에서는 'μή'(me)라는 부정 질문 조사가 사용되어 '~이 아니지 않은가?'라는 뉘앙스를 전달합니다. 질문들은 점층적으로 구성되어: 신학적 불가능성(그리스도의 분할) → 역사적 사실(십자가 사건) → 개인적 경험(세례)의 순서로 독자를 설득합니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 바울 신학의 핵심 주제들을 압축적으로 담고 있습니다: (1) 그리스도론 - 그리스도의 유일성과 분열 불가능성, (2) 구원론 - 십자가를 통한 대속적 구원, (3) 성례전 신학 - 세례를 통한 그리스도와의 연합. 이 세 주제는 교회의 연합을 위한 신학적 기초를 제공합니다. 로마서 6:3-5에서 바울은 세례를 '그리스도의 죽음에 동참하는 것'으로 설명하며, 갈라디아서 3:27에서는 '그리스도로 옷 입는 것'으로 표현합니다."
      },
      {
        explanation_type: "수사학적 전략",
        content: "바울은 여기서 'diatribe' 스타일을 사용합니다. 이는 1세기 철학자들이 사용한 대화적 논증 기법으로, 가상의 청중과 대화하듯 질문을 던지고 답하는 방식입니다. 세 질문은 고린도 교인들이 스스로 답할 수밖에 없는 명백한 질문들이며, 이를 통해 그들의 분파주의가 얼마나 불합리한지를 스스로 깨닫게 만듭니다. 또한 바울은 자신의 이름을 사용함으로써 겸손을 보이며, 자신조차도 그리스도를 대신할 수 없음을 강조합니다."
      }
    ]
  },

  // 6. 1 Corinthians 1:14
  {
    reference: "1 Corinthians 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감사 표현",
        original_text: "I thank God",
        korean_translation: "나는 하나님께 감사합니다",
        grammatical_explanation: "주어(I) + 동사(thank) + 목적어(God). 간결한 감사 표현으로, 앞서 제기한 세례 문제(1:13)에 대한 바울 자신의 입장을 밝히기 시작합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "감사의 내용 - 제한된 세례 집행",
        original_text: "that I did not baptize any of you except Crispus and Gaius",
        korean_translation: "크리스보와 가이오 외에는 여러분 중 아무에게도 세례를 주지 않은 것을",
        grammatical_explanation: "종속절(that-clause) + 부정문(did not) + 예외 표현(except). 'οὐδένα ὑμῶν ἐβάπτισα'(oudena hymon ebaptisa, 여러분 중 아무도 세례주지 않았다)는 강한 부정으로, 극소수 예외만 있음을 강조합니다."
      }
    ],
    vocabulary: [
      {
        word: "thank",
        ipa_pronunciation: "[θæŋk]",
        korean_pronunciation: "쌩크",
        part_of_speech: "동사",
        definition_korean: "감사하다 (그리스어 'εὐχαριστῶ'(eucharisto)로, 'eu'(좋은) + 'charis'(은혜)에서 유래. 문자적으로는 '좋은 은혜를 인정하다'를 의미. 바울 서신에서 자주 사용되는 감사 표현으로, 하나님의 섭리와 주권을 인정하는 신학적 태도를 나타냄)",
        usage_note: "1 Corinthians 1:14에서 사용됨"
      },
      {
        word: "baptize",
        ipa_pronunciation: "[bæpˈtaɪz]",
        korean_pronunciation: "밥타이즈",
        part_of_speech: "동사",
        definition_korean: "세례를 주다 (그리스어 'βαπτίζω'(baptizo)로, '담그다' 또는 '잠기다'를 의미. 신약에서 그리스도인 입문 의식으로, 그리스도와의 연합과 죄로부터의 씻음을 상징. 바울은 자신의 주된 사역이 세례 집행보다 복음 전파임을 강조하기 위해 이 표현을 사용)",
        usage_note: "1 Corinthians 1:14에서 사용됨"
      },
      {
        word: "Crispus",
        ipa_pronunciation: "[ˈkrɪspəs]",
        korean_pronunciation: "크리스퍼스",
        part_of_speech: "고유명사",
        definition_korean: "크리스보 (그리스어 'Κρίσπος'(Krispos)로, 라틴어 이름. 사도행전 18:8에 따르면 고린도 회당장으로, 그의 온 집안과 함께 그리스도를 믿고 세례를 받았음. 회당장이라는 높은 지위에 있던 인물이 그리스도인이 되었다는 것은 당시 고린도교회에 큰 영향을 미쳤을 것임)",
        usage_note: "1 Corinthians 1:14에서 사용됨"
      },
      {
        word: "Gaius",
        ipa_pronunciation: "[ˈɡeɪəs]",
        korean_pronunciation: "게이어스",
        part_of_speech: "고유명사",
        definition_korean: "가이오 (그리스어 'Γάϊος'(Gaios)로, 흔한 로마식 이름. 로마서 16:23에서는 '나와 온 교회의 주인'으로 언급되며, 그의 집이 고린도교회의 모임 장소였을 가능성이 있음. 요한3서의 가이오와 동일인일 수도 있으나 확실하지 않음)",
        usage_note: "1 Corinthians 1:14에서 사용됨"
      },
      {
        word: "except",
        ipa_pronunciation: "[ɪkˈsɛpt]",
        korean_pronunciation: "익셉트",
        part_of_speech: "전치사",
        definition_korean: "~을 제외하고 (그리스어 'εἰ μή'(ei me)로, 문자적으로는 '만약 ~이 아니라면'을 의미. 강한 예외를 나타내는 표현으로, 바울이 극소수에게만 세례를 주었음을 강조. 이는 당파주의의 원인이 자신에게 있지 않음을 밝히는 수사적 전략)",
        usage_note: "1 Corinthians 1:14에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:14는 바울이 1:13에서 제기한 세례 문제에 대해 자신의 입장을 밝히는 구절입니다. 그는 하나님께 감사하는데, 그 이유는 고린도에서 극소수에게만 세례를 주었기 때문입니다.

이 감사는 역설적입니다. 일반적으로 사역자는 많은 사람에게 세례를 준 것을 감사하지만, 바울은 오히려 적게 준 것을 감사합니다. 이는 고린도교회의 분파주의 상황에서 볼 때, 만약 그가 많은 사람에게 세례를 주었다면 '바울파'가 더 강화되었을 것이기 때문입니다. 바울은 자신이 의도하지 않았지만, 하나님의 섭리로 이러한 결과를 가져왔음을 인정합니다.

크리스보(Κρίσπος)는 사도행전 18:8에 따르면 고린도 회당장이었습니다. "그리스도를 믿고 그와 그의 온 집안이 주님을 믿었으며"라고 기록되어 있습니다. 회당장이라는 높은 지위에 있던 유대인이 그리스도인이 되었다는 것은 고린도 유대인 공동체에 큰 파장을 일으켰을 것이며, 초기 고린도교회에 중요한 영향을 미쳤을 것입니다.

가이오(Γάϊος)는 로마서 16:23에서 "나와 온 교회의 주인"으로 언급됩니다. 이는 그의 집이 고린도교회의 주요 모임 장소였음을 시사합니다. 가이오는 상당한 재정적 자원을 가진 인물로, 바울과 고린도교회를 물질적으로 지원한 것으로 보입니다. 요한3서의 가이오와 동일인일 가능성도 있으나 확실하지 않습니다.

바울이 이 두 사람의 이름을 구체적으로 언급한 것은 몇 가지 이유가 있습니다. 첫째, 자신의 주장에 대한 구체적 증거를 제시하기 위함입니다. 둘째, 이들이 교회에서 잘 알려진 인물들이기에 누구도 반박할 수 없습니다. 셋째, 이들이 '바울파'를 주장하지 않았음을 간접적으로 보여줍니다.

초대교회에서 세례는 중요한 의식이었지만, 바울은 자신의 주된 사역이 세례 집행이 아니라 복음 전파임을 강조합니다(1:17). 이는 세례가 중요하지 않다는 의미가 아니라, 세례 집행자가 누구인지는 중요하지 않다는 것입니다. 중요한 것은 그리스도의 이름으로 세례를 받는 것이지, 누가 세례를 주는지가 아닙니다.`
    }],
    korean_translations: [{
      natural_translation: "나는 크리스보와 가이오 외에는 여러분 중 아무에게도 세례를 주지 않은 것을 하나님께 감사합니다."
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 간결한 구조로 강한 메시지를 전달합니다. 'εὐχαριστῶ'(감사하다) 다음에 'ὅτι'(that) 절이 와서 감사의 내용을 명시합니다. 'οὐδένα'(아무도 ~않다)는 강한 부정으로, 'εἰ μή'(~을 제외하고)와 함께 사용되어 극소수 예외만 있음을 극적으로 강조합니다. 이러한 수사적 구조는 청중의 주의를 집중시키고 메시지를 명확하게 전달합니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 성례전과 사역에 대한 중요한 신학적 원리를 담고 있습니다. 첫째, 세례의 효력은 집행자가 아니라 그리스도로부터 나옵니다. 누가 세례를 주든, 그것은 그리스도의 이름으로 주어지며 그의 권위에 근거합니다. 둘째, 사역자의 주된 역할은 성례전 집행이 아니라 복음 전파입니다(1:17). 셋째, 하나님의 섭리는 우리가 의식하지 못하는 중에도 역사하며, 미래의 문제를 미리 예비하십니다."
      },
      {
        explanation_type: "목회적 적용",
        content: "바울의 태도는 현대 교회 지도자들에게 중요한 교훈을 줍니다. 첫째, 사역의 성과를 개인적 업적으로 여기지 말아야 합니다. 바울은 많은 사람에게 세례를 준 것이 아니라 적게 준 것을 감사합니다. 둘째, 의도하지 않게 당파주의의 원인이 될 수 있는 상황을 경계해야 합니다. 셋째, 하나님의 섭리를 신뢰하며, 모든 결과를 그의 주권에 맡겨야 합니다. 넷째, 사역의 본질(복음 전파)을 잃지 말아야 합니다."
      }
    ]
  },

  // 7. 1 Corinthians 1:15
  {
    reference: "1 Corinthians 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "목적절 - 오해 방지",
        original_text: "so no one can say that you were baptized in my name",
        korean_translation: "그래서 아무도 여러분이 내 이름으로 세례를 받았다고 말할 수 없도록",
        grammatical_explanation: "목적 접속사(so) + 부정 주어(no one) + 동사(can say) + 종속절. 'ἵνα μή τις εἴπῃ'(hina me tis eipe, 아무도 말하지 못하도록)는 목적절로, 바울이 극소수에게만 세례를 준 이유를 설명합니다."
      }
    ],
    vocabulary: [
      {
        word: "so",
        ipa_pronunciation: "[soʊ]",
        korean_pronunciation: "소우",
        part_of_speech: "접속사",
        definition_korean: "그래서, 그러므로 (그리스어 'ἵνα'(hina)로, 목적이나 결과를 나타내는 접속사. 여기서는 바울이 극소수에게만 세례를 준 의도와 결과를 연결. 하나님의 섭리적 인도하심 아래 이러한 결과가 나타났음을 암시)",
        usage_note: "1 Corinthians 1:15에서 사용됨"
      },
      {
        word: "say",
        ipa_pronunciation: "[seɪ]",
        korean_pronunciation: "세이",
        part_of_speech: "동사",
        definition_korean: "말하다 (그리스어 'εἴπῃ'(eipe)로, 접속법 형태. 잠재적 가능성을 나타내며, '말할 수 있다' 또는 '주장할 수 있다'를 의미. 바울이 극소수에게만 세례를 줌으로써 당파주의의 구실을 제공하지 않았음을 강조)",
        usage_note: "1 Corinthians 1:15에서 사용됨"
      },
      {
        word: "name",
        ipa_pronunciation: "[neɪm]",
        korean_pronunciation: "네임",
        part_of_speech: "명사",
        definition_korean: "이름 (그리스어 'ὄνομα'(onoma)로, 1:13에서와 같이 권위와 소속을 나타냄. '바울의 이름으로 세례받았다'는 주장은 바울에게 속하게 되었다는 의미로, 그리스도가 아닌 인간에게 충성하는 당파주의를 정당화하는 근거가 될 수 있음)",
        usage_note: "1 Corinthians 1:15에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:15는 바울이 1:14에서 언급한 사실(극소수에게만 세례를 줌)의 의도와 결과를 설명하는 구절입니다. 그는 아무도 '바울의 이름으로 세례를 받았다'고 주장할 수 없도록 하기 위해 그렇게 했다고 말합니다.

이 구절은 바울의 목회적 지혜와 선견지명을 보여줍니다. 그는 고린도에서 사역할 당시에는 분파 문제를 예상하지 못했을 수 있지만, 하나님의 섭리로 극소수에게만 세례를 주었고, 이것이 나중에 당파주의의 구실을 제공하지 않는 결과를 가져왔습니다. 바울은 이를 하나님께 감사하며(1:14), 자신의 신중한 사역 방식이 의도하지 않게 좋은 결과를 낳았음을 인정합니다.

'내 이름으로 세례를 받았다'(εἰς τὸ ἐμὸν ὄνομα)는 표현은 1:13의 '바울의 이름으로 세례를 받았습니까?'와 같은 구문입니다. 이는 단순히 '바울이 세례를 주었다'는 것을 넘어서, '바울에게 속하게 되었다' 또는 '바울의 권위 아래 들어갔다'는 의미를 담고 있습니다. 초대교회에서 세례는 그리스도와의 연합과 그리스도의 몸인 교회로의 입문을 의미했으며, 오직 '그리스도의 이름으로'(또는 '성부와 성자와 성령의 이름으로') 주어져야 했습니다.

만약 바울이 고린도에서 많은 사람에게 세례를 주었다면, '바울파'가 '우리는 바울에게서 직접 세례를 받았다'고 주장하며 자신들의 우월성을 내세웠을 것입니다. 이는 세례의 본질을 왜곡하고 그리스도가 아닌 인간을 높이는 결과를 낳았을 것입니다. 바울은 자신이 극소수에게만 세례를 줌으로써 이러한 위험을 미리 차단했습니다.

이 구절은 또한 바울의 겸손을 보여줍니다. 그는 자신이 많은 사람에게 세례를 주어 '바울파'가 더 강해지는 것을 원하지 않았습니다. 오히려 그는 사람들이 그리스도께만 속하고 그리스도의 이름만 높이기를 원했습니다. 이는 요한복음 3:30에서 세례 요한이 말한 "그는 흥하여야 하겠고 나는 쇠하여야 하리라"는 정신과 일치합니다.

현대 교회에서도 이와 유사한 문제가 발생할 수 있습니다. 특정 유명한 목회자에게 세례를 받거나, 그의 손으로 안수를 받는 것을 특별하게 여기는 태도는 세례의 본질을 왜곡합니다. 중요한 것은 누가 세례를 주는가가 아니라, 그리스도의 이름으로 세례를 받는다는 사실 자체입니다.`
    }],
    korean_translations: [{
      natural_translation: "그래서 아무도 여러분이 내 이름으로 세례를 받았다고 말할 수 없습니다."
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 목적절(purpose clause)로, 'ἵνα μή'(hina me, ~하지 않도록)로 시작합니다. 'τις'(tis, 아무도)는 부정 주어로 사용되며, 'εἴπῃ'(eipe, 말하다)는 접속법 형태로 잠재적 가능성을 나타냅니다. 전체 구조는 '~하지 않도록'이라는 부정적 목적을 명확하게 표현하며, 바울의 신중한 사역 방식의 이유를 설명합니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 성례전의 본질에 대한 중요한 신학적 원리를 담고 있습니다. 세례의 효력은 집행자의 권위나 지위에서 나오는 것이 아니라, 그리스도의 이름과 그의 제정에서 나옵니다. 어거스틴은 후대에 도나투스 논쟁에서 이와 유사한 원리를 주장했습니다: 성례전의 효력은 집행하는 사제의 도덕성이나 정통성이 아니라, 그리스도 자신에게서 나온다는 'ex opere operato' 원리입니다. 바울은 이미 1세기에 이러한 원리를 실천했습니다."
      },
      {
        explanation_type: "목회적 지혜",
        content: "바울의 접근은 현대 교회 지도자들에게 중요한 교훈을 줍니다. 첫째, 의도하지 않게 개인 숭배(personality cult)의 대상이 되는 것을 경계해야 합니다. 둘째, 사역의 모든 영광이 그리스도께 돌아가도록 해야 합니다. 셋째, 겸손한 자세로 사역하되, 지혜롭게 잠재적 문제를 예방해야 합니다. 넷째, 하나님의 섭리를 신뢰하며, 자신이 의도하지 않았던 좋은 결과도 하나님의 인도하심으로 인정해야 합니다."
      }
    ]
  },

  // 8. 1 Corinthians 1:16
  {
    reference: "1 Corinthians 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "추가 정보 - 기억 수정",
        original_text: "(Yes, I also baptized the household of Stephanas;",
        korean_translation: "(그렇습니다, 나는 스데바나의 집안에도 세례를 주었습니다.",
        grammatical_explanation: "괄호로 삽입된 보충 정보. 'ἐβάπτισα δὲ καί'(ebaptisa de kai, 그러나 또한 세례를 주었다)는 앞서 언급한 두 사람(크리스보와 가이오) 외에 추가 예외가 있음을 나타냅니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "불확실한 기억",
        original_text: "beyond that, I don't remember if I baptized anyone else.)",
        korean_translation: "그 외에 내가 다른 누구에게 세례를 주었는지 기억나지 않습니다.)",
        grammatical_explanation: "대조 구문(beyond that) + 부정문(I don't remember) + 조건절(if). 'οὐκ οἶδα'(ouk oida, 알지 못한다)는 확신의 부재를 나타내며, 바울의 솔직함과 겸손을 보여줍니다."
      }
    ],
    vocabulary: [
      {
        word: "household",
        ipa_pronunciation: "[ˈhaʊshoʊld]",
        korean_pronunciation: "하우스홀드",
        part_of_speech: "명사",
        definition_korean: "가정, 집안 (그리스어 'οἶκος'(oikos)로, 1:11의 클로에의 집안과 같은 개념. 혈연 가족뿐 아니라 노예, 피고용인, 친척까지 포함하는 확대된 공동체. 1세기 로마 사회의 기본 사회 단위였으며, 가족 세례(household baptism)는 초대교회의 일반적 관행이었음)",
        usage_note: "1 Corinthians 1:16에서 사용됨"
      },
      {
        word: "Stephanas",
        ipa_pronunciation: "[ˈstɛfənəs]",
        korean_pronunciation: "스테파너스",
        part_of_speech: "고유명사",
        definition_korean: "스데바나 (그리스어 'Στεφανᾶς'(Stephanas)로, '왕관'을 의미하는 이름. 16:15에 따르면 '아가야의 첫 열매'로, 고린도 지역 최초의 개종자 가족. 16:17에서는 바울이 에베소에 있을 때 그를 방문한 것으로 언급됨. 초기 고린도교회의 핵심 지도자 중 한 명)",
        usage_note: "1 Corinthians 1:16에서 사용됨"
      },
      {
        word: "remember",
        ipa_pronunciation: "[rɪˈmɛmbər]",
        korean_pronunciation: "리멤버",
        part_of_speech: "동사",
        definition_korean: "기억하다 (그리스어 'οἶδα'(oida)로, '알다'를 의미하는 완료형 동사. 부정형 'οὐκ οἶδα'(ouk oida)는 '알지 못한다' 또는 '확신할 수 없다'를 의미. 바울의 솔직함과 겸손을 보여주며, 그가 세례 집행 기록을 중요하게 여기지 않았음을 나타냄)",
        usage_note: "1 Corinthians 1:16에서 사용됨"
      },
      {
        word: "beyond",
        ipa_pronunciation: "[bɪˈjɒnd]",
        korean_pronunciation: "비욘드",
        part_of_speech: "전치사",
        definition_korean: "~을 넘어서, ~외에 (그리스어 'λοιπόν'(loipon)으로, '나머지' 또는 '그 외'를 의미. 바울이 언급한 세 경우(크리스보, 가이오, 스데바나 가족) 외에 추가로 세례를 준 경우가 있는지 확실하지 않음을 나타냄)",
        usage_note: "1 Corinthians 1:16에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:16은 바울이 앞서 언급한 두 사람(크리스보와 가이오) 외에 추가로 세례를 준 경우를 기억해내는 장면입니다. 이 구절은 괄호 안에 삽입되어 있으며, 바울의 인간적인 면모와 솔직함을 잘 보여줍니다.

스데바나(Στεφανᾶς)와 그의 가족은 고린도교회에서 매우 중요한 위치를 차지합니다. 고린도전서 16:15에서 바울은 그들을 '아가야의 첫 열매'(ἀπαρχὴ τῆς Ἀχαΐας)라고 부르며, 고린도 지역(아가야 지방) 최초의 개종자 가족이었음을 밝힙니다. 또한 16:15-16에서는 "그들이 성도를 섬기기로 작정했다"고 말하며, 스데바나 가족이 고린도교회의 봉사와 지도력에서 핵심적 역할을 했음을 보여줍니다.

'가정 세례'(οἶκος baptism)는 초대교회의 일반적 관행이었습니다. 사도행전에서도 여러 차례 가정 전체가 세례를 받는 장면이 나옵니다: 루디아의 집(행 16:15), 빌립보 간수의 집(행 16:33), 고넬료의 집(행 10:48). 이는 1세기 로마 사회에서 가정이 기본 사회 단위였으며, 가장의 결정이 가족 전체에 영향을 미쳤음을 반영합니다. 스데바나의 가정 세례는 그가 믿은 후 그의 가족과 종들도 함께 그리스도를 믿고 세례를 받았음을 의미합니다.

바울이 "그 외에 내가 다른 누구에게 세례를 주었는지 기억나지 않습니다"라고 솔직하게 말한 것은 여러 의미가 있습니다. 첫째, 그는 세례 집행 기록을 세심하게 관리하지 않았습니다. 이는 그가 세례 집행 자체를 자신의 주된 사역으로 여기지 않았음을 보여줍니다(1:17 참조). 둘째, 그의 솔직함은 그가 자신의 권위나 업적을 과장하지 않는다는 것을 보여줍니다. 셋째, 이는 고린도교회 사람들이 바울이 누구에게 세례를 주었는지 정확히 알고 있었기에, 바울이 거짓으로 주장할 수 없었음을 암시합니다.

일부 학자들은 이 구절이 바울이 서신을 구술하는 과정에서 생각이 떠올라 추가한 것으로 봅니다. 바울은 필경사에게 구술하다가(로마서 16:22 참조) "아, 그리고 스데바나 가족에게도 세례를 주었지!"라고 추가했을 수 있습니다. 이러한 즉흥적 추가는 편지의 진실성과 자연스러움을 더해줍니다.

이 구절은 또한 바울의 기억이 완벽하지 않음을 보여줍니다. 그는 사도이지만 여전히 인간이며, 모든 세부 사항을 기억하지 못할 수 있습니다. 그러나 이것은 그의 메시지의 진실성을 약화시키지 않습니다. 오히려 그의 솔직함은 그가 정직하고 신뢰할 만한 증인임을 보여줍니다.`
    }],
    korean_translations: [{
      natural_translation: "(그렇습니다, 나는 스데바나의 집안에도 세례를 주었습니다. 그 외에 내가 다른 누구에게 세례를 주었는지 기억나지 않습니다.)"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 괄호(parenthesis) 안에 삽입되어 있으며, 주요 논증의 흐름을 잠시 중단하고 추가 정보를 제공합니다. '그렇습니다'(Yes)는 앞서 언급한 내용을 수정하는 표현이고, '그 외에'(beyond that)는 명확한 구분을 만듭니다. '오ὐκ οἶδα εἰ'(ouk oida ei, 알지 못한다 ~인지)는 불확실성을 나타내는 전형적인 그리스어 표현입니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "초대교회의 가정 세례는 1세기 로마 사회의 가부장적 구조를 반영합니다. 가장(pater familias)이 중요한 종교적 결정을 내리면, 그의 아내, 자녀, 종들도 함께 따랐습니다. 이는 개인주의적 현대 서구 사회와는 다른 집단주의적 문화를 반영합니다. 스데바나의 가정 세례는 한 사람의 회심이 전체 가정 공동체의 변화로 이어진 전형적인 예입니다. 16:15-18에서 스데바나 가족의 지속적인 봉사와 헌신은 그들의 세례가 진정한 회심이었음을 증명합니다."
      },
      {
        explanation_type: "문학적 기능",
        content: "이 괄호 삽입은 편지의 자연스러움과 진실성을 더해줍니다. 만약 바울이 세심하게 편집된 공식 문서를 작성했다면, 이러한 즉흥적 추가나 불확실한 기억 고백은 포함되지 않았을 것입니다. 이는 로마서 16:22에서 필경사 더디오가 자신을 소개하는 것처럼, 바울 서신이 실제 구술과 필사 과정에서 작성되었음을 보여주는 증거입니다. 이러한 '완벽하지 않은' 요소들이 오히려 편지의 신빙성을 높여줍니다."
      }
    ]
  },

  // 9. 1 Corinthians 1:17
  {
    reference: "1 Corinthians 1:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사명 선언 - 부정적",
        original_text: "For Christ did not send me to baptize,",
        korean_translation: "그리스도께서 나를 세례를 주라고 보내신 것이 아니라",
        grammatical_explanation: "인과 접속사(For) + 부정 구문(did not send). 'οὐ γὰρ ἀπέστειλέν με Χριστὸς βαπτίζειν'(ou gar apesteilen me Christos baptizein)은 강한 부정으로, 세례 집행이 바울의 주된 사명이 아님을 단호히 선언합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "사명 선언 - 긍정적",
        original_text: "but to preach the gospel",
        korean_translation: "복음을 전하라고 보내셨습니다",
        grammatical_explanation: "대조 접속사(but) + 부정사구(to preach). 'ἀλλὰ εὐαγγελίζεσθαι'(alla euangelizesthai)는 바울의 진정한 사명이 복음 전파임을 긍정적으로 선언합니다."
      },
      {
        sequence_order: 3,
        semantic_classification: "방법론적 제한",
        original_text: "not with wisdom and eloquence, lest the cross of Christ be emptied of its power",
        korean_translation: "말의 지혜로 하지 않게 하심은 그리스도의 십자가가 헛되지 않게 하려 하심이라",
        grammatical_explanation: "부정적 수단(not with) + 목적절(lest). 'οὐκ ἐν σοφίᾳ λόγου, ἵνα μὴ κενωθῇ ὁ σταυρὸς τοῦ Χριστοῦ'(ouk en sophia logou, hina me kenothe ho stauros)는 복음 전파 방법의 제한과 그 이유를 설명합니다."
      }
    ],
    vocabulary: [
      {
        word: "send",
        ipa_pronunciation: "[sɛnd]",
        korean_pronunciation: "센드",
        part_of_speech: "동사",
        definition_korean: "보내다, 파송하다 (그리스어 'ἀποστέλλω'(apostello)로, '사도'(apostolos)의 어원. '보냄을 받은 자'를 의미하며, 특정한 권위와 사명을 가지고 파송됨을 나타냄. 바울의 사도직은 그리스도로부터 직접 위임받은 것으로, 그 사명의 핵심은 복음 전파임)",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      },
      {
        word: "preach",
        ipa_pronunciation: "[priːtʃ]",
        korean_pronunciation: "프리치",
        part_of_speech: "동사",
        definition_korean: "전파하다, 선포하다 (그리스어 'εὐαγγελίζομαι'(euangelizomai)로, 'εὐ'(좋은) + 'ἀγγελία'(소식)에서 유래. '좋은 소식을 전하다'를 의미하며, 복음(euangelion)을 선포하는 행위를 나타냄. 단순한 정보 전달이 아니라, 구원의 메시지를 권위 있게 선포하는 것)",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      },
      {
        word: "gospel",
        ipa_pronunciation: "[ˈɡɒspəl]",
        korean_pronunciation: "가스펠",
        part_of_speech: "명사",
        definition_korean: "복음, 좋은 소식 (그리스어 'εὐαγγέλιον'(euangelion)로, 예수 그리스도의 죽음과 부활을 통한 구원의 소식. 로마서 1:16에서는 '구원을 주시는 하나님의 능력'으로 정의됨. 1세기 로마 제국에서는 황제의 승리나 즉위를 알리는 소식을 euangelion이라 불렀으나, 그리스도인들은 이를 예수 그리스도의 승리를 선포하는 용어로 사용)",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      },
      {
        word: "wisdom",
        ipa_pronunciation: "[ˈwɪzdəm]",
        korean_pronunciation: "위즈덤",
        part_of_speech: "명사",
        definition_korean: "지혜 (그리스어 'σοφία'(sophia)로, 여기서는 그리스 철학과 수사학의 지적 전통을 가리킴. 고린도는 그리스 문화의 중심지로 철학적 논증과 웅변술이 높이 평가되었음. 바울은 인간의 지혜가 복음의 능력을 가릴 수 있음을 경고함)",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      },
      {
        word: "eloquence",
        ipa_pronunciation: "[ˈɛləkwəns]",
        korean_pronunciation: "엘러퀀스",
        part_of_speech: "명사",
        definition_korean: "웅변, 말솜씨 (그리스어 'λόγος'(logos)로, 문자적으로는 '말' 또는 '이성'을 의미. 여기서는 수사학적 기교와 설득력 있는 말솜씨를 가리킴. 1세기 그리스-로마 세계에서 수사학(rhetoric)은 교육의 핵심이었으며, 설득력 있는 연설은 사회적 영향력의 원천이었음)",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      },
      {
        word: "emptied",
        ipa_pronunciation: "[ˈɛmptid]",
        korean_pronunciation: "엠티드",
        part_of_speech: "과거분사",
        definition_korean: "비우다, 무효로 만들다 (그리스어 'κενόω'(kenoo)로, '빈 것으로 만들다' 또는 '효력을 잃게 하다'를 의미. 빌립보서 2:7에서 그리스도가 '자기를 비우사'(ekenosen)에서도 같은 단어가 사용됨. 여기서는 십자가의 능력이 인간의 지혜에 의해 무효화될 위험을 경고)",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      },
      {
        word: "cross",
        ipa_pronunciation: "[krɒs]",
        korean_pronunciation: "크로스",
        part_of_speech: "명사",
        definition_korean: "십자가 (그리스어 'σταυρός'(stauros)로, 로마의 극형 도구. 그리스도의 대속적 죽음과 구원의 핵심 사건을 나타냄. 갈라디아서 6:14에서 바울은 '그리스도의 십자가 외에는 결코 자랑하지 아니하리니'라고 선언. 십자가는 유대인에게는 저주(신명기 21:23), 헬라인에게는 어리석음(1:23)이었으나, 믿는 자에게는 구원의 능력(1:18))",
        usage_note: "1 Corinthians 1:17에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:17은 바울이 자신의 사도직 사명을 명확히 정의하는 핵심 구절입니다. 그는 그리스도께서 자신을 세례를 주기 위해서가 아니라 복음을 전하기 위해 보내셨다고 선언하며, 복음 전파의 방법까지 구체적으로 제시합니다.

'ἀπέστειλέν'(apesteilen, 보내셨다)은 '사도'(apostolos)의 어원인 'ἀποστέλλω'(apostello)의 과거형입니다. 사도는 '보냄을 받은 자'를 의미하며, 바울은 자신이 그리스도로부터 직접 파송받았음을 강조합니다. 그의 사명은 세례 집행이 아니라 복음 전파(εὐαγγελίζεσθαι, euangelizesthai)입니다. 이는 세례가 중요하지 않다는 의미가 아니라, 세례는 다른 사람들도 할 수 있지만 사도적 복음 전파는 바울의 고유한 사명이라는 것입니다.

더 중요한 것은 복음 전파의 방법입니다. 바울은 '말의 지혜로'(ἐν σοφίᾳ λόγου, en sophia logou) 하지 않는다고 말합니다. 여기서 '지혜'(sophia)와 '말'(logos)은 모두 그리스 철학과 수사학의 핵심 개념입니다. 1세기 고린도는 그리스 문화의 중심지로, 철학적 논증과 웅변술이 높이 평가되었습니다. 사람들은 설득력 있는 연설과 논리적 증명을 통해 진리를 추구했으며, 수사학(rhetoric)은 교육의 핵심 과목이었습니다.

바울은 이러한 그리스식 접근을 의도적으로 거부합니다. 그 이유는 '그리스도의 십자가가 헛되지 않게 하려 함'(ἵνα μὴ κενωθῇ ὁ σταυρὸς τοῦ Χριστοῦ)입니다. '헛되게 하다'(κενόω, kenoo)는 '효력을 잃게 하다' 또는 '무효로 만들다'를 의미합니다. 만약 복음이 인간의 지혜와 웅변으로 전해진다면, 사람들은 메시지의 능력이 아니라 전달자의 기교에 매료될 것입니다. 그들은 십자가의 능력이 아니라 말하는 사람의 지혜를 신뢰하게 될 것입니다.

십자가는 그 자체로 능력이 있습니다(1:18 참조). 십자가는 로마 제국에서 가장 수치스럽고 잔인한 형벌이었으며, 유대인에게는 신명기 21:23의 저주('나무에 달린 자는 하나님께 저주를 받은 자')를, 헬라인에게는 어리석음을 의미했습니다. 그러나 바울은 바로 이 십자가가 구원의 능력이라고 선포합니다. 이러한 메시지는 인간의 지혜로는 받아들여질 수 없으며, 오직 성령의 역사로만 믿어질 수 있습니다.

바울의 접근은 고린도후서 10:3-5에서 더 구체화됩니다: "우리가 육신으로 행하나 육신에 따라 싸우지 아니하노니... 모든 이론을 무너뜨리며 하나님 아는 것을 대적하여 높아진 것을 다 무너뜨리고." 그는 인간의 지혜와 논리가 아니라 성령의 능력으로 사역합니다.

고린도전서 2:1-5에서 바울은 자신이 고린도에서 사역할 때 "말과 지혜의 아름다운 것으로 아니하고 다만 예수 그리스도와 그가 십자가에 못 박히신 것"만 전했다고 회상합니다. 그의 사역은 "사람의 지혜에 있지 아니하고 다만 하나님의 능력에" 근거했습니다.`
    }],
    korean_translations: [{
      natural_translation: "그리스도께서 나를 보내신 것은 세례를 주게 하려 하심이 아니요 복음을 전하게 하려 하심이니, 이는 그리스도의 십자가가 헛되지 않게 하려 함이라. 말의 지혜로 하지 아니함은"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 명확한 대조 구조를 가집니다: '~이 아니라(οὐ... ἀλλά)... 하기 위함'이라는 패턴으로, 바울의 사명을 부정적-긍정적으로 정의합니다. 'ἵνα μή'(hina me, ~하지 않도록)로 시작하는 목적절은 방법론적 제한의 이유를 설명하며, 수사적으로 강력한 경고를 전달합니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 바울의 '십자가 신학'(theologia crucis)의 핵심을 담고 있습니다. 십자가는 인간의 지혜와 능력의 실패를 드러내며, 하나님의 구원이 인간의 공로나 지혜가 아닌 순전한 은혜임을 선포합니다. 루터는 후대에 이를 '영광의 신학'(theologia gloriae)과 대비시켰습니다. 영광의 신학은 인간의 이성과 능력으로 하나님을 알 수 있다고 주장하지만, 십자가 신학은 하나님이 십자가의 약함과 어리석음을 통해 자신을 계시하셨음을 선포합니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "1세기 그리스-로마 세계에서 수사학은 교육과 사회적 영향력의 핵심이었습니다. 키케로, 퀸틸리아누스 등의 수사학자들은 설득의 기술을 체계화했으며, 소피스트들은 웅변술로 명성과 부를 얻었습니다. 고린도는 이러한 문화의 중심지였기에, 바울의 '지혜 없는' 복음 전파는 문화적으로 받아들이기 어려웠습니다. 고린도후서 10-11장에서 바울의 비판자들이 그의 '말과 지식'을 업신여긴 것은 이러한 문화적 배경을 반영합니다."
      }
    ]
  },

  // 10. 1 Corinthians 1:18
  {
    reference: "1 Corinthians 1:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "십자가 메시지에 대한 평가 1 - 멸망하는 자들",
        original_text: "For the message of the cross is foolishness to those who are perishing,",
        korean_translation: "십자가의 말씀이 멸망하는 자들에게는 미련한 것이요",
        grammatical_explanation: "인과 접속사(For) + 주어(message) + be동사(is) + 보어(foolishness) + 전치사구(to those who are perishing). 'ὁ λόγος ὁ τοῦ σταυροῦ... μωρία ἐστίν'(ho logos ho tou staurou... moria estin)은 십자가 메시지가 멸망하는 자들에게 어떻게 받아들여지는지를 설명합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "십자가 메시지에 대한 평가 2 - 구원받는 자들",
        original_text: "but to us who are being saved it is the power of God",
        korean_translation: "구원을 받는 우리에게는 하나님의 능력이니라",
        grammatical_explanation: "대조 접속사(but) + 전치사구(to us who are being saved) + be동사(is) + 보어(the power of God). 동일한 메시지가 다른 두 그룹에게 정반대로 인식됨을 대조적으로 제시합니다."
      }
    ],
    vocabulary: [
      {
        word: "message",
        ipa_pronunciation: "[ˈmɛsɪdʒ]",
        korean_pronunciation: "메시지",
        part_of_speech: "명사",
        definition_korean: "말씀, 메시지 (그리스어 'λόγος'(logos)로, '말', '이성', '원리'를 의미. 요한복음 1:1의 '태초에 말씀이 계시니라'에서도 같은 단어. 여기서는 십자가에 관한 선포와 가르침을 가리키며, 단순한 정보가 아니라 구원의 능력을 담은 하나님의 말씀)",
        usage_note: "1 Corinthians 1:18에서 사용됨"
      },
      {
        word: "foolishness",
        ipa_pronunciation: "[ˈfuːlɪʃnəs]",
        korean_pronunciation: "풀리쉬니스",
        part_of_speech: "명사",
        definition_korean: "어리석음, 미련함 (그리스어 'μωρία'(moria)로, 지적 무능력이나 판단력 부족을 의미. 그리스 철학에서 sophia(지혜)의 반대 개념. 로마서 1:22에서는 우상 숭배자들이 '스스로 지혜 있다 하나 미련하게 되어'에서 사용됨. 십자가는 인간의 이성과 논리로는 이해할 수 없는 역설적 진리)",
        usage_note: "1 Corinthians 1:18에서 사용됨"
      },
      {
        word: "perishing",
        ipa_pronunciation: "[ˈpɛrɪʃɪŋ]",
        korean_pronunciation: "페리싱",
        part_of_speech: "현재분사",
        definition_korean: "멸망하는, 소멸하는 (그리스어 'ἀπολλύμενοι'(apollymenoi)로, 현재 진행형. '파괴되고 있는' 또는 '영원한 죽음으로 향하고 있는' 상태를 나타냄. 요한복음 3:16 '믿는 자마다 멸망하지 않고'에서도 같은 어근 사용. 현재 진행형은 구원받지 못한 상태가 지속되고 있음을 강조)",
        usage_note: "1 Corinthians 1:18에서 사용됨"
      },
      {
        word: "saved",
        ipa_pronunciation: "[seɪvd]",
        korean_pronunciation: "세이브드",
        part_of_speech: "과거분사/현재분사",
        definition_korean: "구원받는 (그리스어 'σῳζομένοις'(sozomenois)로, 현재 진행형 수동태. '구원받고 있는' 또는 '구원의 과정에 있는'을 의미. 구원이 이미 완성된 것(칭의)이면서 동시에 지속적으로 진행되는 과정(성화)임을 나타냄. 로마서 1:16 '구원을 주시는 하나님의 능력'과 연결)",
        usage_note: "1 Corinthians 1:18에서 사용됨"
      },
      {
        word: "power",
        ipa_pronunciation: "[ˈpaʊər]",
        korean_pronunciation: "파워",
        part_of_speech: "명사",
        definition_korean: "능력 (그리스어 'δύναμις'(dynamis)로, '힘' 또는 '권능'을 의미. 영어 'dynamite'의 어원. 로마서 1:16 '복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력'에서도 같은 단어. 단순한 잠재력이 아니라 실제로 역사하는 초자연적 능력을 나타냄)",
        usage_note: "1 Corinthians 1:18에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:18은 바울이 십자가 신학의 핵심을 선언하는 구절로, 동일한 메시지가 두 부류의 사람들에게 정반대로 인식됨을 대조적으로 제시합니다.

'십자가의 말씀'(ὁ λόγος ὁ τοῦ σταυροῦ, ho logos ho tou staurou)은 십자가에서 이루어진 그리스도의 구원 사역에 관한 선포를 의미합니다. 이는 단순한 역사적 사실이 아니라, 그 사건의 구원론적 의미—그리스도께서 우리 죄를 위해 대신 죽으셨고, 그의 죽음이 우리를 하나님과 화해시켰다는 복음의 핵심 내용입니다.

'멸망하는 자들'(τοῖς ἀπολλυμένοις, tois apollymenois)은 현재 진행형으로, 지속적으로 멸망의 길을 걷고 있는 사람들을 가리킵니다. 이들에게 십자가의 메시지는 'μωρία'(moria, 미련한 것, 어리석음)입니다. 1세기 그리스-로마 세계에서 십자가형은 가장 수치스럽고 잔인한 형벌로, 노예나 반역자에게만 적용되었습니다. 로마 시민은 십자가형을 받지 않았으며, 키케로는 십자가라는 단어조차 로마 시민의 귀에 들어가서는 안 된다고 말했습니다. 유대인에게는 신명기 21:23에 따라 "나무에 달린 자는 하나님께 저주를 받은 자"였습니다.

그리스 철학의 관점에서도 십자가는 받아들일 수 없었습니다. 그들이 추구한 신은 불변하고, 고통받지 않으며(impassible), 초월적인 존재였습니다. 하나님이 인간이 되어 고통받고 죽는다는 것은 철학적으로 불가능했습니다. 또한 그리스 사상에서 구원은 지식(gnosis)과 철학적 깨달음을 통해 얻어지는 것이지, 어떤 역사적 사건(십자가)을 믿음으로 얻어지는 것이 아니었습니다.

반면 '구원을 받는 우리'(τοῖς σῳζομένοις, tois sozomenois)에게는 같은 메시지가 '하나님의 능력'(δύναμις θεοῦ, dynamis theou)입니다. '구원을 받는'도 현재 진행형으로, 구원이 이미 시작되었지만(칭의) 계속 진행되고 있는(성화) 과정임을 나타냅니다. 로마서 1:16에서 바울은 "복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력"이라고 선언했습니다.

십자가가 능력인 이유는 그것이 하나님의 의와 사랑을 동시에 나타내기 때문입니다. 십자가는 죄의 심각성(죄의 대가는 사망)과 하나님의 거룩함(죄는 반드시 심판받아야 함)을 보여주면서, 동시에 하나님의 놀라운 사랑(그리스도께서 우리를 대신하여 죽으심)을 나타냅니다. 로마서 3:25-26은 이를 "하나님께서... 자기의 의로우심을 나타내사... 자기도 의로우시며 또한 예수 믿는 자를 의롭다 하려 하심"이라고 설명합니다.

이 구절은 또한 영적 분별력의 문제를 다룹니다. 동일한 메시지를 듣고도 어떤 이는 미련하다고 거부하고, 어떤 이는 하나님의 능력으로 받아들입니다. 이 차이는 인간의 지적 능력에 있지 않고, 영적 상태에 있습니다. 고린도전서 2:14는 "육에 속한 사람은 하나님의 성령의 일들을 받지 아니하나니 이는 그것들이 그에게는 어리석게 보임이라"고 설명합니다.`
    }],
    korean_translations: [{
      natural_translation: "십자가의 말씀이 멸망하는 자들에게는 미련한 것이요 구원을 받는 우리에게는 하나님의 능력이라"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 완벽한 대조 구조(antithesis)를 보입니다: 동일한 주어(십자가의 말씀)가 두 다른 그룹(멸망하는 자들 vs 구원받는 우리)에게 정반대의 보어(미련한 것 vs 하나님의 능력)로 인식됩니다. 두 분사(perishing, being saved) 모두 현재 진행형으로, 지속되는 상태를 강조합니다. 이러한 대조적 평행 구조는 수사적으로 강력하며 기억하기 쉽습니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 '십자가 신학'(theologia crucis)의 정수를 담고 있습니다. 십자가는 인간의 지혜와 하나님의 지혜가 근본적으로 다름을 드러냅니다. 인간은 능력, 지혜, 영광으로 하나님을 찾지만, 하나님은 약함, 어리석음, 수치를 통해 자신을 계시하셨습니다. 이는 이사야 55:8-9 '내 생각이 너희의 생각과 다르며'를 구체화합니다. 또한 이 구절은 보편구원론을 거부합니다. 모든 사람이 구원받는 것이 아니라, 십자가를 믿는 자만 구원받습니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "십자가에 대한 1세기의 태도는 현대와 매우 달랐습니다. 로마 역사가 타키투스는 십자가형을 '가장 잔인하고 끔찍한 형벌'이라 불렀으며, 키케로는 십자가라는 단어조차 로마 시민의 생각에서 제거되어야 한다고 말했습니다. 유대인 역사가 요세푸스는 십자가형을 '가장 비참한 죽음'이라 기록했습니다. 2-3세기 이교도들은 그리스도인들을 조롱하며 '십자가에 못 박힌 신을 숭배한다'고 비난했습니다. 폼페이에서 발견된 낙서에는 십자가에 매달린 당나귀 머리 신을 숭배하는 사람이 그려져 있습니다."
      }
    ]
  },

  // 11. 1 Corinthians 1:19
  {
    reference: "1 Corinthians 1:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성경 인용 도입",
        original_text: "For it is written:",
        korean_translation: "기록되었으되",
        grammatical_explanation: "인과 접속사(For) + 수동태(it is written). 'γέγραπται γάρ'(gegraptai gar)는 완료 수동태로, 성경의 권위와 지속적 유효성을 나타내는 정형화된 인용 공식입니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "구약 인용 1 - 지혜의 파괴",
        original_text: '"I will destroy the wisdom of the wise;',
        korean_translation: "내가 지혜 있는 자들의 지혜를 멸하고",
        grammatical_explanation: "직접 인용문 + 미래 시제(will destroy). 이사야 29:14의 칠십인역(LXX) 인용으로, 하나님의 주권적 행위를 선언합니다."
      },
      {
        sequence_order: 3,
        semantic_classification: "구약 인용 2 - 총명의 폐기",
        original_text: 'the intelligence of the intelligent I will frustrate."',
        korean_translation: "총명한 자들의 총명을 폐하리라 하셨으니",
        grammatical_explanation: "병행 구조(parallelism) + 강조를 위한 어순 도치. '총명을... 폐하리라'가 강조되어 문장 끝에 위치하며, 하나님의 심판적 행위를 극대화합니다."
      }
    ],
    vocabulary: [
      {
        word: "written",
        ipa_pronunciation: "[ˈrɪtn]",
        korean_pronunciation: "리튼",
        part_of_speech: "과거분사",
        definition_korean: "기록되다 (그리스어 'γέγραπται'(gegraptai)로, 완료 수동태. '기록되어 지금도 유효하다'를 의미하며, 구약성경 인용 시 사용되는 정형화된 공식. 마태복음에서 예수님도 '기록되었으되'(gegraptai)라는 표현을 반복적으로 사용하심. 성경의 권위와 지속적 유효성을 강조)",
        usage_note: "1 Corinthians 1:19에서 사용됨"
      },
      {
        word: "destroy",
        ipa_pronunciation: "[dɪˈstrɔɪ]",
        korean_pronunciation: "디스트로이",
        part_of_speech: "동사",
        definition_korean: "멸하다, 파괴하다 (그리스어 'ἀπολῶ'(apolo)로, '완전히 없애다' 또는 '무효로 만들다'를 의미. 1:18의 '멸망하다'(apollymenoi)와 같은 어근. 하나님이 인간의 지혜를 심판하시고 그 효력을 제거하심을 나타냄)",
        usage_note: "1 Corinthians 1:19에서 사용됨"
      },
      {
        word: "wisdom",
        ipa_pronunciation: "[ˈwɪzdəm]",
        korean_pronunciation: "위즈덤",
        part_of_speech: "명사",
        definition_korean: "지혜 (그리스어 'σοφία'(sophia)로, 여기서는 인간의 철학적 지혜와 이성적 추론 능력을 가리킴. 이사야 29:14의 맥락에서는 유다의 지도자들이 앗수르에 대항하여 이집트와 동맹을 맺은 정치적 '지혜'를 비판)",
        usage_note: "1 Corinthians 1:19에서 사용됨"
      },
      {
        word: "intelligence",
        ipa_pronunciation: "[ɪnˈtɛlɪdʒəns]",
        korean_pronunciation: "인텔리전스",
        part_of_speech: "명사",
        definition_korean: "총명, 이해력 (그리스어 'σύνεσις'(synesis)로, '함께 놓다'에서 유래하여 '통찰력' 또는 '분별력'을 의미. sophia(지혜)보다 더 실용적이고 판단적인 능력을 나타냄. 골로새서 1:9에서는 '신령한 지혜와 총명'에서 긍정적으로 사용되지만, 여기서는 인간의 한계를 강조)",
        usage_note: "1 Corinthians 1:19에서 사용됨"
      },
      {
        word: "frustrate",
        ipa_pronunciation: "[ˈfrʌstreɪt]",
        korean_pronunciation: "프러스트레이트",
        part_of_speech: "동사",
        definition_korean: "폐하다, 무효로 만들다 (그리스어 'ἀθετήσω'(atheteso)로, '거부하다' 또는 '무가치하게 만들다'를 의미. 법적 용어로 계약이나 유언을 무효화하는 것을 나타냄. 하나님이 인간의 총명을 무력화시키고 그 가치를 제거하심을 강조)",
        usage_note: "1 Corinthians 1:19에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:19는 바울이 이사야 29:14를 인용하여 하나님이 인간의 지혜를 심판하신다는 구약의 증언을 제시하는 구절입니다. 이는 1:18에서 선언한 십자가의 역설적 능력에 대한 성경적 근거를 제공합니다.

'γέγραπται'(gegraptai, 기록되었으되)는 완료 수동태로, 과거에 기록되었지만 현재에도 여전히 유효함을 나타냅니다. 이는 신약에서 구약을 인용할 때 사용하는 정형화된 공식으로, 성경의 권위와 지속적 적용성을 강조합니다. 예수님도 광야 시험에서 사탄에게 응답하실 때 '기록되었으되'(gegraptai)를 반복적으로 사용하셨습니다(마태복음 4:4, 7, 10).

바울이 인용한 이사야 29:14는 역사적 맥락이 있습니다. 기원전 701년경, 앗수르 제국이 유다를 침공했을 때, 히스기야 왕의 정치 고문들은 앗수르에 대항하여 이집트와 동맹을 맺는 것이 '지혜로운' 정책이라고 주장했습니다. 그러나 이사야 선지자는 이를 하나님을 신뢰하지 않는 어리석음이라고 비난했습니다. 하나님은 인간의 '지혜로운' 정치적 계산을 멸하시고, 그들의 총명을 무효화하실 것이라고 선언하셨습니다.

바울은 이 구약 본문을 고린도 상황에 적용합니다. 고린도 사람들이 그리스 철학과 수사학의 지혜를 높이 평가하고, 십자가의 메시지를 어리석다고 거부하는 것은, 마치 유다의 지도자들이 자신들의 정치적 지혜를 신뢰하고 하나님의 말씀을 무시한 것과 같습니다. 하나님은 인간의 지혜를 심판하시고, 그것이 구원에 무용함을 드러내실 것입니다.

'지혜 있는 자들의 지혜'와 '총명한 자들의 총명'은 히브리 시의 병행법(parallelism)으로, 같은 개념을 다른 표현으로 반복하여 강조합니다. '멸하고'(ἀπολῶ, apolo)와 '폐하리라'(ἀθετήσω, atheteso)도 유사한 의미의 동사로, 하나님의 심판적 행위를 강조합니다.

이 인용은 바울의 논증에서 결정적 역할을 합니다. 그는 단지 자신의 의견을 제시하는 것이 아니라, 하나님의 계획과 역사하심의 패턴이 구약에서부터 일관되게 나타났음을 보여줍니다. 하나님은 항상 인간의 지혜를 부끄럽게 하시고, 세상이 자기 지혜로 하나님을 알지 못하게 하셨습니다(1:21).

로마서 1:18-23에서 바울은 이를 더 자세히 설명합니다. 인간은 창조 세계를 통해 하나님을 알 수 있었지만, "스스로 지혜 있다 하나 미련하게 되어" 하나님을 거부하고 우상을 숭배했습니다. 하나님은 인간의 지혜를 심판하심으로써, 구원이 인간의 지적 능력이 아니라 하나님의 은혜에 달려있음을 명확히 하십니다.

이는 또한 하나님의 주권을 강조합니다. "내가 멸하고", "내가 폐하리라"는 표현은 하나님이 역사를 주관하시며, 인간의 계획과 지혜가 하나님의 목적을 저지할 수 없음을 선언합니다. 잠언 21:30은 "지혜로도, 명철로도, 모략으로도 여호와를 당하지 못하느니라"고 말합니다.`
    }],
    korean_translations: [{
      natural_translation: "기록된 바 내가 지혜 있는 자들의 지혜를 멸하고 총명한 자들의 총명을 폐하리라 하셨으니"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 히브리 시의 병행법(parallelism)을 따릅니다: A) 지혜 있는 자들의 지혜를 멸하고, B) 총명한 자들의 총명을 폐하리라. 두 절은 동의적 병행으로, 같은 개념을 다른 단어로 반복하여 강조합니다. 그리스어에서는 '총명을... 폐하리라'의 어순이 도치되어(목적어가 동사보다 먼저) 수사적 강조를 더합니다. '기록되었으되'(gegraptai)의 완료 시제는 과거 사건의 현재적 유효성을 나타냅니다."
      },
      {
        explanation_type: "구약 배경",
        content: "이사야 29:14의 역사적 맥락은 앗수르 위기(기원전 701년)입니다. 산헤립의 앗수르 군대가 유다를 침공하자, 히스기야의 고문들은 이집트와 동맹을 맺자고 주장했습니다. 이사야는 이를 '입술로만 하나님을 경외하고 마음은 멀리하는' 위선이라 비난했습니다(이사야 29:13). 인간의 정치적 지혜는 하나님을 신뢰하지 않는 불신앙에서 나왔기에, 하나님은 그것을 심판하셨습니다. 결국 하나님이 직접 개입하셔서 앗수르 군대를 물리치셨습니다(이사야 37:36)."
      },
      {
        explanation_type: "신학적 적용",
        content: "이 구절은 '자연신학'(natural theology)의 한계를 보여줍니다. 인간은 이성과 관찰을 통해 하나님의 존재를 어느 정도 알 수 있지만(로마서 1:20), 구원의 진리는 계시(십자가)를 통해서만 알 수 있습니다. 계몽주의 이후 이성 중심의 신학은 십자가의 대속 교리를 '비이성적'이라 거부했지만, 바울은 하나님이 인간의 지혜를 부끄럽게 하셨다고 선언합니다. 또한 이는 지적 교만에 대한 경고입니다. 인간이 자신의 지혜를 자랑하고 하나님의 계시를 거부할 때, 하나님은 그 지혜를 멸하십니다."
      }
    ]
  },

  // 12. 1 Corinthians 1:2
  {
    reference: "1 Corinthians 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수신자 지정 1 - 장소와 정체성",
        original_text: "To the church of God in Corinth, to those sanctified in Christ Jesus and called to be his holy people,",
        korean_translation: "고린도에 있는 하나님의 교회 곧 그리스도 예수 안에서 거룩하여지고 성도라 부르심을 받은 자들",
        grammatical_explanation: "전치사구(To the church) + 두 개의 분사구(sanctified, called). 교회의 정체성을 장소(in Corinth), 신분(sanctified), 부르심(called)의 세 측면에서 설명합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "수신자 확대 - 보편적 교회",
        original_text: "together with all those everywhere who call on the name of our Lord Jesus Christ—their Lord and ours:",
        korean_translation: "그리고 각처에서 우리의 주 곧 그들과 우리의 주이신 예수 그리스도의 이름을 부르는 모든 자들에게",
        grammatical_explanation: "확대 구문(together with) + 관계절(who call on). 고린도교회만이 아니라 전 세계 모든 그리스도인을 포함하여, 편지의 보편적 적용성을 강조합니다."
      }
    ],
    vocabulary: [
      {
        word: "church",
        ipa_pronunciation: "[tʃɜːrtʃ]",
        korean_pronunciation: "처치",
        part_of_speech: "명사",
        definition_korean: "교회 (그리스어 'ἐκκλησία'(ekklesia)로, 'ἐκ'(밖으로) + 'καλέω'(부르다)에서 유래. '불러냄을 받은 모임'을 의미. 구약 칠십인역에서는 이스라엘 회중(qahal)을 지칭했으며, 신약에서는 그리스도를 믿는 자들의 공동체를 의미. '하나님의 교회'라는 표현은 교회가 인간의 조직이 아니라 하나님께 속한 거룩한 공동체임을 강조)",
        usage_note: "1 Corinthians 1:2에서 사용됨"
      },
      {
        word: "sanctified",
        ipa_pronunciation: "[ˈsæŋktɪfaɪd]",
        korean_pronunciation: "생크티파이드",
        part_of_speech: "과거분사",
        definition_korean: "거룩하게 된, 성화된 (그리스어 'ἡγιασμένοις'(hegiasmenois)로, 완료 수동 분사. '거룩하게 되었다'는 이미 완성된 상태를 나타냄. 그리스도와의 연합을 통해 하나님의 소유가 되고 구별된 상태(지위적 성화)를 의미하며, 이는 점진적 성화의 기초가 됨)",
        usage_note: "1 Corinthians 1:2에서 사용됨"
      },
      {
        word: "holy",
        ipa_pronunciation: "[ˈhoʊli]",
        korean_pronunciation: "홀리",
        part_of_speech: "형용사",
        definition_korean: "거룩한, 성스러운 (그리스어 'ἅγιοι'(hagioi)로, '구별된' 또는 '하나님께 속한'을 의미. 구약에서 하나님은 '거룩하신 분'(קָדוֹשׁ, qadosh)으로, 죄와 완전히 분리되신 분. 신약에서 '성도'(hagioi)는 그리스도 안에서 하나님께 속하게 된 모든 믿는 자를 지칭하며, 이는 도덕적 완전함이 아니라 하나님의 부르심과 소속을 나타냄)",
        usage_note: "1 Corinthians 1:2에서 사용됨"
      },
      {
        word: "call",
        ipa_pronunciation: "[kɔːl]",
        korean_pronunciation: "콜",
        part_of_speech: "동사",
        definition_korean: "부르다 (그리스어 'καλέω'(kaleo)로, 하나님의 효력 있는 부르심을 나타냄. 단순한 초대가 아니라, 응답을 이끌어내는 주권적 부르심. 로마서 8:30 '부르신 그들을 또한 의롭다 하시고'에서 구원의 필수 단계로 제시됨. 1:1의 바울이 '사도로 부르심을 받은'과 같은 개념)",
        usage_note: "1 Corinthians 1:2에서 사용됨"
      },
      {
        word: "name",
        ipa_pronunciation: "[neɪm]",
        korean_pronunciation: "네임",
        part_of_speech: "명사",
        definition_korean: "이름 (그리스어 'ὄνομα'(onoma)로, 1:10, 13, 15에서와 같이 본질, 권위, 임재를 나타냄. '주의 이름을 부르다'는 구약의 관용구(요엘 2:32)로, 하나님을 예배하고 의지하는 것을 의미. 사도행전 2:21에서 베드로가 이를 예수님께 적용하여 예수의 신성을 선포함)",
        usage_note: "1 Corinthians 1:2에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:2는 편지의 수신자를 지정하는 구절로, 고린도교회의 정체성을 신학적으로 정의하고 동시에 편지의 적용 범위를 전 세계 모든 그리스도인으로 확대합니다.

'하나님의 교회'(ἐκκλησία τοῦ θεοῦ, ekklesia tou theou)라는 표현은 교회의 소유권과 본질을 명확히 합니다. 교회는 인간이 세운 조직이나 특정 지도자에게 속한 것이 아니라, 하나님께 속한 거룩한 공동체입니다. 이는 1:10-13의 분파주의 문제와 직접 연결됩니다. 교회가 '하나님의 것'이라면, 어떻게 '바울파', '아볼로파'로 나뉠 수 있습니까?

'그리스도 예수 안에서 거룩하여지고'(ἡγιασμένοις ἐν Χριστῷ Ἰησοῦ, hegiasmenois en Christo Iesou)는 완료 수동 분사로, 이미 완성된 상태를 나타냅니다. 이것이 지위적 성화(positional sanctification)입니다. 고린도 교인들은 도덕적으로 완전하지 않았지만(5장의 성적 부도덕, 6장의 소송 문제 등), 그리스도 안에서 이미 '거룩하여진' 자들이었습니다. 히브리서 10:10은 "이 뜻을 따라 예수 그리스도의 몸을 단번에 드리심으로 말미암아 우리가 거룩함을 얻었노라"고 선언합니다.

'성도라 부르심을 받은 자들'(κλητοῖς ἁγίοις, kletois hagiois)은 고린도 교인들의 정체성을 정의합니다. 그들은 스스로 거룩해진 것이 아니라, 하나님의 효력 있는 부르심을 받은 자들입니다. 이는 1:1에서 바울이 '사도로 부르심을 받은'(κλητὸς ἀπόστολος, kletos apostolos)과 같은 구문으로, 하나님의 주권적 선택을 강조합니다.

흥미롭게도 바울은 수신자를 "고린도에 있는 하나님의 교회"로만 국한하지 않고, "각처에서... 예수 그리스도의 이름을 부르는 모든 자들"을 포함합니다. 이는 여러 의미가 있습니다. 첫째, 고린도교회의 문제들(분열, 도덕적 문제 등)이 그들만의 독특한 문제가 아니라 보편적 교회가 직면하는 문제임을 암시합니다. 둘째, 편지의 내용이 고린도만이 아니라 모든 교회에 적용 가능함을 명시합니다. 셋째, 고린도 교인들이 전 세계 그리스도인 공동체의 일부임을 상기시켜, 그들의 행동이 더 넓은 영향을 미침을 강조합니다.

'주의 이름을 부르는'(ἐπικαλουμένοις τὸ ὄνομα, epikalomenois to onoma)은 구약의 관용구입니다. 요엘 2:32는 "누구든지 여호와의 이름을 부르는 자는 구원을 받으리니"라고 예언했으며, 베드로는 오순절 설교에서 이를 예수님께 적용했습니다(사도행전 2:21). 이는 예수님의 신성과 구원자로서의 유일성을 선포하는 것입니다.

'그들과 우리의 주'(αὐτῶν τε καὶ ἡμῶν, auton te kai hemon)라는 표현은 모든 그리스도인이 동일한 주님을 섬긴다는 연합을 강조합니다. 분파주의는 마치 다른 주님을 섬기는 것처럼 행동하는 것이지만, 실제로는 모든 그리스도인이 한 주님께 속해 있습니다.`
    }],
    korean_translations: [{
      natural_translation: "고린도에 있는 하나님의 교회 곧 그리스도 예수 안에서 거룩하여지고 성도라 부르심을 받은 자들과 또 각처에서 우리의 주 곧 그들과 우리의 주이신 예수 그리스도의 이름을 부르는 모든 자들에게"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 확대되는 동심원 구조를 보입니다: 1) 고린도의 교회(지역적), 2) 그리스도 안에서 거룩하여진 자들(신분적), 3) 성도로 부르심 받은 자들(소명적), 4) 각처의 모든 그리스도인(보편적). 두 개의 완료 분사(sanctified, called)는 이미 완성된 상태를 나타내며, 현재 분사(who call on)는 지속적 행위를 나타냅니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 교회론의 핵심 진리들을 압축적으로 담고 있습니다: 1) 교회의 소유권 - 하나님의 교회, 2) 교회의 본질 - 그리스도 안에서 거룩하여진 공동체, 3) 교회의 기원 - 하나님의 부르심, 4) 교회의 범위 - 지역교회이면서 동시에 보편교회. 또한 지위적 성화와 점진적 성화를 구별합니다. 고린도 교인들은 이미 '거룩하여진' 자들이지만, 바울은 편지를 통해 그들이 실제 삶에서도 거룩하게 살도록 권면합니다(6:9-11 참조)."
      },
      {
        explanation_type: "수사학적 전략",
        content: "바울이 수신자를 확대한 것은 수사학적으로 중요합니다. 고린도 교인들은 자신들의 문제를 읽으면서 동시에 자신들이 세계 교회의 일부임을 인식하게 됩니다. 이는 그들의 행동이 지역적 영향만이 아니라 보편적 교회에 미치는 영향을 고려하도록 만듭니다. 또한 편지의 내용이 단순히 고린도만을 위한 것이 아니라 모든 교회를 위한 것임을 암시하여, 편지의 권위와 적용성을 강화합니다."
      }
    ]
  },

  // 13. 1 Corinthians 1:20
  {
    reference: "1 Corinthians 1:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수사적 질문 1 - 지혜자",
        original_text: "Where is the wise person?",
        korean_translation: "지혜 있는 자가 어디 있느냐?",
        grammatical_explanation: "수사적 질문(Where is) + 명사(wise person). 'ποῦ σοφός'(pou sophos)는 부정적 답변을 기대하는 수사적 질문으로, 인간 지혜의 무용함을 선언합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "수사적 질문 2 - 율법사",
        original_text: "Where is the teacher of the law?",
        korean_translation: "율법사가 어디 있느냐?",
        grammatical_explanation: "반복 구조 + 'γραμματεύς'(grammateus, 서기관/율법사). 유대교의 율법 전문가를 지칭하며, 그들의 종교적 지식의 한계를 지적합니다."
      },
      {
        sequence_order: 3,
        semantic_classification: "수사적 질문 3 - 변론가",
        original_text: "Where is the philosopher of this age?",
        korean_translation: "이 세대의 변론가가 어디 있느냐?",
        grammatical_explanation: "반복 구조 + 'συζητητής'(syzetetes, 논쟁하는 자). 그리스 철학자와 수사학자를 지칭하며, 세속적 지혜의 무력함을 선언합니다."
      },
      {
        sequence_order: 4,
        semantic_classification: "선언 - 하나님의 행위",
        original_text: "Has not God made foolish the wisdom of the world?",
        korean_translation: "하나님께서 이 세상의 지혜를 미련하게 하신 것이 아니냐?",
        grammatical_explanation: "수사적 질문(Has not) + 동사(made) + 보어(foolish). 긍정적 답변을 기대하는 부정 질문으로, 하나님의 심판적 행위를 확증합니다."
      }
    ],
    vocabulary: [
      {
        word: "wise",
        ipa_pronunciation: "[waɪz]",
        korean_pronunciation: "와이즈",
        part_of_speech: "형용사",
        definition_korean: "지혜로운 (그리스어 'σοφός'(sophos)로, 그리스 철학 전통의 핵심 개념. 플라톤의 철학자-왕(philosopher-kings)부터 스토아 철학의 현자(sage)까지, 지혜는 최고의 덕목이었음. 바울은 이러한 세속적 지혜가 구원에 무용함을 선포)",
        usage_note: "1 Corinthians 1:20에서 사용됨"
      },
      {
        word: "teacher of the law",
        ipa_pronunciation: "[ˈtiːtʃər əv ðə lɔː]",
        korean_pronunciation: "티처 오브 더 로",
        part_of_speech: "명사구",
        definition_korean: "율법사, 서기관 (그리스어 'γραμματεύς'(grammateus)로, 문자적으로는 '글 쓰는 자'. 유대교에서 율법을 연구하고 해석하는 전문가. 에스라 7:6 '율법에 익숙한 서기관'처럼 구약부터 중요한 역할. 신약에서는 종종 바리새인과 함께 언급되며, 예수님과 신학적 논쟁을 벌였음)",
        usage_note: "1 Corinthians 1:20에서 사용됨"
      },
      {
        word: "philosopher",
        ipa_pronunciation: "[fɪˈlɒsəfər]",
        korean_pronunciation: "필라서퍼",
        part_of_speech: "명사",
        definition_korean: "철학자, 변론가 (그리스어 'συζητητής'(syzetetes)로, '함께 논쟁하는 자'를 의미. 소피스트와 수사학자를 포함하여, 논리와 웅변으로 진리를 탐구한다고 주장하는 그리스-로마의 지식인들. 사도행전 17:18에서 에피쿠로스와 스토아 철학자들이 바울과 논쟁함)",
        usage_note: "1 Corinthians 1:20에서 사용됨"
      },
      {
        word: "age",
        ipa_pronunciation: "[eɪdʒ]",
        korean_pronunciation: "에이지",
        part_of_speech: "명사",
        definition_korean: "세대, 시대 (그리스어 'αἰών'(aion)으로, '이 시대'(현재 악한 세대)와 '오는 시대'(하나님 나라)를 구별하는 종말론적 개념. 에베소서 2:2 '이 세상 풍조'와 같은 맥락으로, 하나님을 거부하는 현재 세계 체제를 의미. 요한일서 2:15-17 '세상과 세상에 있는 것들을 사랑하지 말라' 참조)",
        usage_note: "1 Corinthians 1:20에서 사용됨"
      },
      {
        word: "world",
        ipa_pronunciation: "[wɜːrld]",
        korean_pronunciation: "월드",
        part_of_speech: "명사",
        definition_korean: "세상 (그리스어 'κόσμος'(kosmos)로, 물리적 세계뿐 아니라 하나님을 대적하는 인간 체제와 가치관을 의미. 요한복음 15:19 '너희가 세상에 속하지 아니함'처럼 중립적 의미와 부정적 의미 모두 가능. 여기서는 하나님의 지혜에 대립하는 인간 중심적 사고 체계를 지칭)",
        usage_note: "1 Corinthians 1:20에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:20은 바울이 세 개의 수사적 질문과 하나의 선언을 통해 인간 지혜의 무용함과 하나님의 심판을 극적으로 제시하는 구절입니다.

세 질문은 1세기 세계의 주요 지적 전통을 대표합니다. 첫째, '지혜 있는 자'(σοφός, sophos)는 그리스 철학자를 가리킵니다. 플라톤, 아리스토텔레스로부터 스토아 철학자들까지, 그리스 문화에서 지혜(sophia)는 최고의 덕목이었습니다. 플라톤의 국가론은 철학자-왕(philosopher-kings)이 통치해야 한다고 주장했으며, 스토아 철학은 현자(sage)가 되는 것을 삶의 목표로 제시했습니다.

둘째, '율법사'(γραμματεύς, grammateus)는 유대교의 율법 전문가를 의미합니다. 서기관이라고도 불리는 이들은 모세 오경을 연구하고 해석하며 가르치는 전문가들이었습니다. 에스라는 "율법에 익숙한 서기관"(에스라 7:6)으로, 이들의 역할 모델이었습니다. 신약 시대에는 대부분 바리새파에 속했으며, 예수님과 종종 신학적 논쟁을 벌였습니다(마태복음 23장 참조).

셋째, '이 세대의 변론가'(συζητητής τοῦ αἰῶνος τούτου, syzetetes tou aionos toutou)는 소피스트와 수사학자를 포함합니다. 이들은 논리와 웅변의 기술로 청중을 설득하는 전문가들이었습니다. 사도행전 17:18에서 에피쿠로스와 스토아 철학자들이 바울과 '논쟁'(συνέβαλλον, syneballon)한 것이 이들의 특징입니다.

바울은 "어디 있느냐?"(ποῦ, pou)라는 질문을 반복하여 수사적 효과를 극대화합니다. 이는 이사야 33:18의 메아리입니다: "네 마음은 두려워하던 것을 기억할 것이라 계산하던 자가 어디 있느냐 공세를 받던 자가 어디 있느냐 망대를 계수하던 자가 어디 있느냐?" 앗수르의 위협 앞에서 인간의 계획과 지혜가 무용했듯이, 십자가 앞에서 모든 인간 지혜는 무력합니다.

"하나님께서 이 세상의 지혜를 미련하게 하신 것이 아니냐?"는 1:19의 이사야 인용을 구체화합니다. 하나님은 인간의 지혜를 '미련하게 만드셨습니다'(ἐμώρανεν, emoranen). 이는 수동적으로 인간이 실패한 것이 아니라, 하나님이 능동적으로 인간의 지혜를 무효화하셨음을 강조합니다. 로마서 1:21-22는 이를 설명합니다: "하나님을 알되 하나님을 영화롭게도 아니하며 감사하지도 아니하고 오히려 그 생각이 허망하여지며 미련한 마음이 어두워졌나니 스스로 지혜 있다 하나 미련하게 되어..."

'이 세상의 지혜'(τοῦ κόσμου τούτου, tou kosmou toutou)는 단순히 잘못된 정보가 아니라, 하나님 없이 인간 이성만으로 진리를 찾으려는 전체 체계를 의미합니다. 요한복음 15:19에서 예수님은 제자들에게 "너희가 세상에 속하였으면 세상이 자기의 것을 사랑할 것이나 너희는 세상에 속한 자가 아니요 도리어 내가 너희를 세상에서 택하였기 때문에 세상이 너희를 미워하느니라"고 말씀하셨습니다.

바울의 요점은 명확합니다: 그리스 철학자들도, 유대 율법사들도, 그리스-로마 수사학자들도 십자가의 지혜를 발견할 수 없었습니다. 구원의 진리는 인간의 지적 노력으로 도달할 수 없으며, 오직 하나님의 계시를 통해서만 알 수 있습니다.`
    }],
    korean_translations: [{
      natural_translation: "지혜 있는 자가 어디 있느냐 선비가 어디 있느냐 이 세대의 변론가가 어디 있느냐 하나님께서 이 세상의 지혜를 미련하게 하신 것이 아니냐"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 anaphora(수사적 반복)를 사용합니다: 'ποῦ'(where)를 세 번 반복하여 리듬감과 강조를 만듭니다. 세 질문은 모두 부정적 답변('없다')을 기대하며, 마지막 질문은 부정 형태('Has not')로 긍정적 답변('그렇다')을 이끌어냅니다. 이러한 수사적 구조는 청중을 논증에 참여시키고 메시지를 강력하게 전달합니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "1세기 세계는 지적 전통이 풍부했습니다. 그리스에는 플라톤의 아카데미, 아리스토텔레스의 리케이온, 에피쿠로스 학파, 스토아 학파 등이 있었고, 유대교에는 힐렐과 샴마이 학파 등 다양한 랍비 전통이 있었습니다. 로마는 키케로, 세네카 같은 수사학자와 철학자들을 배출했습니다. 고린도는 이러한 지적 전통들이 만나는 국제 도시였습니다. 바울의 질문은 이 모든 전통이 십자가의 진리를 발견하지 못했음을 선언합니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 '일반계시'의 한계와 '특별계시'의 필요성을 보여줍니다. 로마서 1:19-20은 창조 세계를 통해 하나님의 영원하신 능력과 신성을 알 수 있다고 말하지만, 이것만으로는 구원에 이르지 못합니다. 인간의 지혜로는 하나님을 알 수 없으며(1:21), 오직 십자가의 계시를 통해서만 구원의 길이 열립니다. 이는 자연신학과 계시신학의 관계, 이성과 믿음의 관계에 대한 근본적 질문을 제기합니다."
      }
    ]
  },

  // 14. 1 Corinthians 1:21
  {
    reference: "1 Corinthians 1:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "이유절 - 하나님의 지혜 안에서의 실패",
        original_text: "For since in the wisdom of God the world through its wisdom did not know him,",
        korean_translation: "하나님의 지혜에 있어서는 이 세상이 자기 지혜로 하나님을 알지 못하므로",
        grammatical_explanation: "인과 접속사(For since) + 전치사구(in the wisdom of God) + 주어(the world) + 부정문(did not know). 하나님의 주권적 계획 안에서 인간 지혜의 실패를 설명합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "결과절 - 하나님의 새로운 방법",
        original_text: "God was pleased through the foolishness of what was preached to save those who believe",
        korean_translation: "하나님께서 전도의 미련한 것으로 믿는 자들을 구원하시기를 기뻐하셨도다",
        grammatical_explanation: "주어(God) + 동사(was pleased) + 부정사구(to save) + 목적어(those who believe). 하나님의 새로운 구원 방법—전도를 통한 구원—을 선언합니다."
      }
    ],
    vocabulary: [
      {
        word: "know",
        ipa_pronunciation: "[noʊ]",
        korean_pronunciation: "노우",
        part_of_speech: "동사",
        definition_korean: "알다 (그리스어 'ἔγνω'(egno)로, 단순한 정보가 아니라 인격적 관계적 앎을 의미. 요한복음 17:3 '영생은 곧 유일하신 참 하나님과 그가 보내신 자 예수 그리스도를 아는 것'에서처럼, 구원과 직결되는 지식. 여기서는 세상이 이성과 철학으로 하나님을 아는 데 실패했음을 나타냄)",
        usage_note: "1 Corinthians 1:21에서 사용됨"
      },
      {
        word: "pleased",
        ipa_pronunciation: "[pliːzd]",
        korean_pronunciation: "플리즈드",
        part_of_speech: "과거분사",
        definition_korean: "기뻐하시다 (그리스어 'εὐδόκησεν'(eudokesen)로, 하나님의 주권적 의지와 선택을 나타냄. 마태복음 3:17 '이는 내 사랑하는 아들이요 내 기뻐하는 자라'에서도 같은 단어. 하나님이 십자가와 전도를 구원의 방법으로 선택하신 것은 그의 주권적 기쁨과 계획임을 강조)",
        usage_note: "1 Corinthians 1:21에서 사용됨"
      },
      {
        word: "preached",
        ipa_pronunciation: "[priːtʃt]",
        korean_pronunciation: "프리치드",
        part_of_speech: "과거분사",
        definition_korean: "전도되다, 선포되다 (그리스어 'κήρυγμα'(kerygma)로, 선포된 메시지 또는 전도의 행위를 의미. 왕의 전령(κῆρυξ, keryx)이 공식 선언을 하듯이, 복음을 권위 있게 선포하는 것. 로마서 10:14-15 '믿지 아니하는 이를 어찌 부르리요... 전파하는 자가 없이 어찌 들으리요' 참조)",
        usage_note: "1 Corinthians 1:21에서 사용됨"
      },
      {
        word: "save",
        ipa_pronunciation: "[seɪv]",
        korean_pronunciation: "세이브",
        part_of_speech: "동사",
        definition_korean: "구원하다 (그리스어 'σῶσαι'(sosai)로, 위험이나 파멸에서 건지는 것. 구약에서 하나님은 이스라엘을 이집트에서 '구원하신' 분(출애굽기 14:30). 신약에서는 죄와 사망과 하나님의 진노로부터의 구원을 의미. 로마서 5:9 '그러므로 이제 우리가 그의 피로 말미암아 의롭다 하심을 받았으니 더욱 그로 말미암아 진노하심에서 구원을 받을 것이니' 참조)",
        usage_note: "1 Corinthians 1:21에서 사용됨"
      },
      {
        word: "believe",
        ipa_pronunciation: "[bɪˈliːv]",
        korean_pronunciation: "빌리브",
        part_of_speech: "동사",
        definition_korean: "믿다 (그리스어 'πιστεύω'(pisteuo)로, 단순한 지적 동의를 넘어서 신뢰와 헌신을 포함하는 개념. 히브리어 '아만'(אָמַן)에서 유래하여 '확고하다', '의지하다'를 의미. 요한복음 3:16 '하나님이 세상을 이처럼 사랑하사... 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라' 참조)",
        usage_note: "1 Corinthians 1:21에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:21은 바울 신학의 핵심을 담은 구절로, 인간 지혜의 실패와 하나님의 새로운 구원 방법을 대조적으로 제시합니다.

"하나님의 지혜에 있어서는"(ἐν τῇ σοφίᾳ τοῦ θεοῦ, en te sophia tou theou)는 중요한 표현입니다. 이는 세상이 하나님을 알지 못한 것이 우연이나 인간의 단순한 실패가 아니라, 하나님의 주권적 계획 안에서 일어난 일임을 의미합니다. 하나님은 인간이 자기 지혜로 구원에 이르지 못하도록 계획하셨습니다. 이는 로마서 11:32-33과 연결됩니다: "하나님이 모든 사람을 순종하지 아니하는 가운데 가두어 두심은 모든 사람에게 긍휼을 베풀려 하심이로다 깊도다 하나님의 지혜와 지식의 풍성함이여 그의 판단은 헤아리지 못할 것이며 그의 길은 찾지 못할 것이로다."

"이 세상이 자기 지혜로 하나님을 알지 못하므로"는 인간 이성의 한계를 선언합니다. 그리스 철학자들은 논리와 이성으로 궁극적 진리를 찾으려 했고, 유대 율법사들은 율법 연구를 통해 하나님을 알려고 했지만, 모두 실패했습니다. 로마서 1:21-22는 이를 설명합니다: "하나님을 알되 하나님을 영화롭게도 아니하며 감사하지도 아니하고 오히려 그 생각이 허망하여지며 미련한 마음이 어두워졌나니 스스로 지혜 있다 하나 미련하게 되어..."

하나님의 응답은 역설적입니다: "전도의 미련한 것으로"(διὰ τῆς μωρίας τοῦ κηρύγματος, dia tes morias tou kerygmatos). '전도'(κήρυγμα, kerygma)는 왕의 전령(κῆρυξ, keryx)이 공식 선언을 하는 것을 의미합니다. 복음 전도는 단순한 제안이나 철학적 논증이 아니라, 왕의 명령처럼 권위 있는 선포입니다.

"미련한 것"(μωρία, moria)이라는 표현은 세상의 관점을 반영합니다. 세상은 십자가의 메시지를 미련하다고 여기지만(1:18), 하나님은 바로 이 '미련한' 전도를 통해 구원하시기를 기뻐하셨습니다. 이는 고린도후서 4:7과 연결됩니다: "우리가 이 보배를 질그릇에 가졌으니 이는 심히 큰 능력은 하나님께 있고 우리에게 있지 아니함을 알게 하려 함이라."

"하나님께서... 기뻐하셨도다"(εὐδόκησεν ὁ θεός, eudokesen ho theos)는 하나님의 주권적 선택을 강조합니다. 이는 인간의 필요에 대한 반응이 아니라, 하나님의 영원한 계획과 기쁨에서 나온 것입니다. 에베소서 1:5, 9는 "그 기쁘신 뜻대로... 그의 뜻의 비밀을 우리에게 알리신 것"이라고 말합니다.

"믿는 자들을 구원하시기를"은 구원의 조건을 명시합니다. 인간의 지혜, 행위, 공로가 아니라 '믿음'(πίστις, pistis)이 구원의 수단입니다. 이는 에베소서 2:8-9의 핵심입니다: "너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니 이것은 너희에게서 난 것이 아니요 하나님의 선물이라 행위에서 난 것이 아니니 이는 누구든지 자랑하지 못하게 함이라."

로마서 10:14-17은 이 진리를 확장합니다: "그런즉 그들이 믿지 아니하는 이를 어찌 부르리요 듣지도 못한 이를 어찌 믿으리요 전파하는 자가 없이 어찌 들으리요... 그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라." 전도는 하나님이 선택하신 구원의 방법이며, 이를 통해 성령께서 믿음을 일으키십니다.`
    }],
    korean_translations: [{
      natural_translation: "하나님의 지혜에 있어서는 이 세상이 자기 지혜로 하나님을 알지 못하므로 하나님께서 전도의 미련한 것으로 믿는 자들을 구원하시기를 기뻐하셨도다"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 복잡한 종속 구조를 가집니다: 'ἐπειδὴ γὰρ'(for since)로 시작하는 이유절이 'εὐδόκησεν ὁ θεός'(God was pleased)라는 주절을 설명합니다. 'ἐν τῇ σοφίᾳ τοῦ θεοῦ'(in the wisdom of God)는 전체 문장의 틀을 제공하여, 모든 일이 하나님의 주권적 계획 안에서 일어남을 강조합니다. '믿는 자들'(τοὺς πιστεύοντας, tous pisteuontas)은 현재 분사로 지속적인 믿음을 나타냅니다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 종교개혁의 핵심 원리인 '오직 믿음'(sola fide)과 '오직 은혜'(sola gratia)를 명확히 제시합니다. 구원은 인간의 지혜, 행위, 공로가 아니라 하나님의 은혜와 믿음으로 이루어집니다. 또한 '전도'(κήρυγμα)의 중요성을 강조합니다. 하나님은 전도를 통해 믿음을 일으키시고 구원하십니다(로마서 10:17). 이는 교회의 선교적 사명의 신학적 기초를 제공합니다."
      },
      {
        explanation_type: "목회적 적용",
        content: "이 구절은 현대 교회에 중요한 교훈을 줍니다. 첫째, 복음 전도는 선택사항이 아니라 하나님이 정하신 구원의 방법입니다. 둘째, 전도 방법에 대한 지침을 제공합니다—인간의 지혜와 웅변이 아니라 십자가의 메시지 자체가 능력입니다. 셋째, 지적 방어(apologetics)의 한계와 역할을 보여줍니다. 논증으로 사람을 설득할 수는 있지만, 구원은 성령께서 전도를 통해 믿음을 일으키실 때 일어납니다. 넷째, 전도자의 겸손을 촉구합니다—우리는 단지 '미련한' 메시지를 전하는 전령일 뿐이며, 능력은 하나님께 있습니다."
      }
    ]
  },

  // 15. 1 Corinthians 1:22
  {
    reference: "1 Corinthians 1:22",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "유대인의 요구",
        original_text: "Jews demand signs",
        korean_translation: "유대인은 표적을 구하고",
        grammatical_explanation: "주어(Jews) + 동사(demand) + 목적어(signs). 간결한 현재 시제로 유대인의 지속적 태도를 묘사합니다."
      },
      {
        sequence_order: 2,
        semantic_classification: "헬라인의 추구",
        original_text: "and Greeks look for wisdom",
        korean_translation: "헬라인은 지혜를 찾으나",
        grammatical_explanation: "접속사(and) + 주어(Greeks) + 동사(look for) + 목적어(wisdom). 병행 구조로 두 그룹의 대조적 접근을 제시합니다."
      }
    ],
    vocabulary: [
      {
        word: "Jews",
        ipa_pronunciation: "[dʒuːz]",
        korean_pronunciation: "주스",
        part_of_speech: "명사",
        definition_korean: "유대인 (그리스어 'Ἰουδαῖοι'(Ioudaioi)로, 유다 지파에서 유래. 구약의 언약 백성이자 메시야를 기다리는 민족. 신약에서는 종종 '헬라인'과 대조되어 유대교 전통과 율법을 따르는 민족을 지칭. 로마서 1:16 '먼저는 유대인에게요 그리고 헬라인에게로다' 참조)",
        usage_note: "1 Corinthians 1:22에서 사용됨"
      },
      {
        word: "demand",
        ipa_pronunciation: "[dɪˈmænd]",
        korean_pronunciation: "디맨드",
        part_of_speech: "동사",
        definition_korean: "요구하다, 구하다 (그리스어 'αἰτέω'(aiteo)로, 강한 요청이나 요구를 의미. 마태복음 12:38에서 서기관과 바리새인들이 예수님께 '표적 보이기를 구한' 것처럼, 믿음보다 증거를 먼저 요구하는 태도. 요한복음 4:48 '너희는 표적과 기사를 보지 못하면 도무지 믿지 아니하리라' 참조)",
        usage_note: "1 Corinthians 1:22에서 사용됨"
      },
      {
        word: "signs",
        ipa_pronunciation: "[saɪnz]",
        korean_pronunciation: "사인스",
        part_of_speech: "명사",
        definition_korean: "표적, 신호 (그리스어 'σημεῖον'(semeion)으로, 초자연적 행위나 기적을 통한 하나님의 계시. 출애굽기의 열 가지 재앙(출 7-12장), 광야의 기적들(만나, 물)이 대표적. 유대인들은 메시야가 오면 놀라운 표적을 행할 것으로 기대했음(요한복음 7:31). 그러나 예수님은 '악하고 음란한 세대가 표적을 구한다'고 비판하심(마태복음 16:4))",
        usage_note: "1 Corinthians 1:22에서 사용됨"
      },
      {
        word: "Greeks",
        ipa_pronunciation: "[ɡriːks]",
        korean_pronunciation: "그릭스",
        part_of_speech: "명사",
        definition_korean: "헬라인, 그리스인 (그리스어 'Ἕλληνες'(Hellenes)로, 넓게는 그리스 문화와 언어를 사용하는 모든 이방인을 지칭. 알렉산더 대왕 이후 헬레니즘 문화가 지중해 전역에 퍼졌으며, 그리스어가 공용어가 됨. 사도행전 17장에서 아테네 사람들이 '새로운 것'을 듣기 원한 것처럼, 철학과 지혜를 추구하는 문화적 전통을 가짐)",
        usage_note: "1 Corinthians 1:22에서 사용됨"
      },
      {
        word: "wisdom",
        ipa_pronunciation: "[ˈwɪzdəm]",
        korean_pronunciation: "위즈덤",
        part_of_speech: "명사",
        definition_korean: "지혜 (그리스어 'σοφία'(sophia)로, 1:17, 19, 20에서 계속 언급됨. 그리스 문화에서 최고의 가치로, 철학(φιλοσοφία, philosophia)은 '지혜를 사랑함'을 의미. 플라톤의 이데아론, 아리스토텔레스의 형이상학, 스토아의 윤리학 등 이성적 논증을 통해 진리를 추구함)",
        usage_note: "1 Corinthians 1:22에서 사용됨"
      }
    ],
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 1:22는 바울이 유대인과 헬라인의 대조적 접근 방식을 간결하게 제시하는 구절로, 1:23의 십자가 메시지가 양측 모두에게 걸림돌이 되는 이유를 설명하는 배경을 제공합니다.

"유대인은 표적을 구하고"는 유대교 전통의 특징을 요약합니다. 구약에서 하나님은 반복적으로 표적(אוֹת, ot)을 통해 자신을 계시하셨습니다: 출애굽의 열 가지 재앙(출 7-12장), 홍해를 가르심(출 14장), 광야의 만나와 메추라기(출 16장), 반석에서 나온 물(출 17장), 불기둥과 구름기둥(출 13:21-22) 등. 신명기 13:1-3은 거짓 선지자도 표적을 행할 수 있음을 경고하지만, 일반적으로 표적은 하나님의 권위와 능력을 증명하는 수단이었습니다.

1세기 유대교에서 메시야가 오면 놀라운 표적들을 행할 것으로 기대했습니다. 요한복음 7:31은 "무리 중에 많은 사람이 예수를 믿고 말하되 그리스도께서 오실지라도 그 행하실 표적이 이 사람이 행한 것보다 더 많으랴"라고 기록합니다. 그러나 마태복음 12:38-39에서 서기관과 바리새인들이 예수님께 "선생님이여 우리에게 표적 보이기를 원하나이다"라고 요구했을 때, 예수님은 "악하고 음란한 세대가 표적을 구하나 선지자 요나의 표적 밖에는 보일 표적이 없느니라"고 대답하셨습니다. '요나의 표적'은 예수님의 죽음과 부활을 가리키는데, 이것이 바로 유대인들이 받아들이기 가장 어려운 표적이었습니다.

"헬라인은 지혜를 찾으나"는 그리스-로마 문화의 핵심을 포착합니다. 철학(φιλοσοφία, philosophia)은 문자적으로 '지혜를 사랑함'을 의미하며, 그리스 문화는 이성적 탐구를 통해 진리를 발견할 수 있다고 믿었습니다. 플라톤은 이데아론을 통해 영원한 진리를 추구했고, 아리스토텔레스는 논리학과 형이상학을 발전시켰으며, 스토아 철학자들은 로고스(Λόγος, 우주적 이성)와의 조화를 추구했습니다.

사도행전 17:21은 아테네 사람들의 특징을 이렇게 묘사합니다: "모든 아테네 사람과 거기서 나그네 된 외국인들이 가장 새로운 것을 말하고 듣는 것 이외에는 달리 시간을 쓰지 않음이더라." 그들은 끊임없이 새로운 철학과 이론을 탐구했지만, 십자가의 메시지는 받아들이기 어려웠습니다. 같은 장 32절은 "그들이 죽은 자의 부활을 듣고 어떤 사람은 조롱도 하고"라고 기록합니다.

바울은 이 두 그룹의 요구를 제시함으로써, 다음 구절(1:23)에서 선포할 '십자가에 못 박힌 그리스도'가 양측 모두를 만족시키지 못함을 준비합니다. 유대인에게 십자가는 신명기 21:23의 저주("나무에 달린 자는 하나님께 저주를 받은 자")를 의미하므로 표적이 아니라 걸림돌입니다. 헬라인에게 십자가는 논리적으로 불합리하고 철학적으로 받아들일 수 없으므로 지혜가 아니라 미련함입니다.

그러나 바울은 1:24에서 "부르심을 받은 자들에게는 유대인이나 헬라인이나 그리스도는 하나님의 능력이요 하나님의 지혜"라고 선언할 것입니다. 십자가는 인간의 기대를 뛰어넘는 하나님의 방법이며, 믿음의 눈으로 볼 때 가장 큰 표적이자 가장 깊은 지혜입니다.

로마서 1:16은 이를 통합합니다: "내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력이 됨이라 먼저는 유대인에게요 그리고 헬라인에게로다." 복음은 유대인과 헬라인 모두를 위한 것이지만, 양측 모두 자신들의 기대를 내려놓고 하나님의 방법을 받아들여야 합니다.`
    }],
    korean_translations: [{
      natural_translation: "유대인은 표적을 구하고 헬라인은 지혜를 찾으나"
    }],
    special_explanations: [
      {
        explanation_type: "문법적 특징",
        content: "이 구절은 완벽한 병행 구조(parallelism)를 보입니다: A) 유대인 + 동사(구하다) + 표적, B) 헬라인 + 동사(찾다) + 지혜. 두 절은 현재 시제를 사용하여 지속적이고 특징적인 태도를 나타냅니다. 'μέν... δέ'(men... de) 구문은 대조를 강조하며, 간결한 문장은 기억하기 쉽고 수사적으로 강력합니다. 이는 1:23에서 전개될 십자가 메시지의 보편적 거부를 준비합니다."
      },
      {
        explanation_type: "역사적 배경",
        content: "1세기는 유대교와 헬레니즘이 충돌하고 융합하는 시대였습니다. 알렉산더 대왕(기원전 356-323) 이후 그리스 문화가 중동 전역에 퍼졌고, 유대인들도 헬레니즘의 영향을 받았습니다(마카비 시대의 갈등 참조). 고린도는 이러한 문화적 교차로였습니다. 회당과 그리스 철학 학파가 공존했고, 유대인과 헬라인이 함께 살았습니다. 바울 자신도 유대인이면서 헬라 교육을 받았기에(사도행전 22:3, 행 21:39), 양측 문화를 모두 이해했습니다."
      },
      {
        explanation_type: "신학적 적용",
        content: "이 구절은 복음 변증과 상황화(contextualization)의 한계를 보여줍니다. 바울은 유대인에게는 '유대인처럼', 헬라인에게는 '헬라인처럼' 되었지만(9:20-22), 십자가의 메시지 자체는 타협하지 않았습니다. 현대 교회도 문화적으로 적합한 방식으로 복음을 전해야 하지만, 복음의 본질—십자가를 통한 구원—은 변경할 수 없습니다. 또한 이는 종교적 경험주의(표적 중심)와 이성주의(지혜 중심) 모두의 한계를 보여줍니다. 참된 믿음은 표적이나 논리적 증명이 아니라 하나님의 계시에 대한 응답입니다."
      }
    ]
  }
];
