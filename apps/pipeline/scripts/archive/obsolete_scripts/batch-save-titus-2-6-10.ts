import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 2:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "젊은 남성 지침",
        original_text: "Similarly, encourage the young men to be self-controlled",
        korean_translation: "마찬가지로 젊은 남성들에게 자제력이 있으라고 권면하십시오",
        grammatical_explanation: "similarly로 연결"
      }
    ],
    vocabulary: [
      { word: "similarly", ipa_pronunciation: "/ˈsɪmələrli/", korean_pronunciation: "시밀럴리", definition_korean: "마찬가지로" },
      { word: "encourage", ipa_pronunciation: "/ɪnˈkʌrɪdʒ/", korean_pronunciation: "인커리지", definition_korean: "권면하다" },
      { word: "self-controlled", ipa_pronunciation: "/sɛlf kənˈtroʊld/", korean_pronunciation: "셀프 컨트롤드", definition_korean: "자제력 있는" }
    ],
    contextual_explanation: {
      integrated_explanation: "젊은 남성들(νεωτέρους)을 위한 지침은 놀랍도록 간결합니다: '자제력'(σωφρονεῖν) 하나만 언급됩니다. 이는 젊은 남성들의 가장 큰 도전이 충동 조절임을 시사합니다. '자제력'은 디도서의 핵심 용어로 반복됩니다(1:8; 2:2, 4, 5, 6, 12). 그리스어 σωφροσύνη는 '건전한 마음'을 의미하며, 욕망과 충동을 절제하는 능력입니다. 2:7-8은 디도 자신이 젊은 남성들에게 모범이 되어야 함을 강조합니다."
    },
    korean_translation: {
      natural_translation: "마찬가지로 젊은 남성들에게 자제력이 있으라고 권면하십시오."
    },
    special_explanation: {
      explanation_type: "자제력의 중요성",
      content: "'자제력'(σωφροσύνη)은 그리스 철학의 4대 덕목 중 하나였으며(지혜, 용기, 정의, 절제), 디도서는 이를 기독교적으로 재해석합니다. 모든 연령과 성별에게 강조되지만(2:2, 4, 5, 6, 12), 특히 젊은 남성에게 유일한 지침으로 제시되어 그 중요성을 부각시킵니다."
    }
  },
  {
    reference: "Titus 2:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "모범의 명령",
        original_text: "In everything set them an example by doing what is good",
        korean_translation: "모든 일에서 선한 일을 행함으로 그들에게 모범을 보이십시오",
        grammatical_explanation: "디도에게 직접 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "가르침의 자세",
        original_text: "In your teaching show integrity, seriousness",
        korean_translation: "가르침에서 성실함과 진지함을 보이십시오",
        grammatical_explanation: "2가지 교육 태도"
      }
    ],
    vocabulary: [
      { word: "set an example", ipa_pronunciation: "/sɛt æn ɪɡˈzæmpəl/", korean_pronunciation: "셋 언 이그잼플", definition_korean: "모범을 보이다" },
      { word: "integrity", ipa_pronunciation: "/ɪnˈtɛɡrəti/", korean_pronunciation: "인테그리티", definition_korean: "성실함, 청렴" },
      { word: "seriousness", ipa_pronunciation: "/ˈsɪriəsnəs/", korean_pronunciation: "시리어스니스", definition_korean: "진지함" }
    ],
    contextual_explanation: {
      integrated_explanation: "디도는 젊은 남성들(2:6)에게 모범(τύπον)이 되어야 합니다. '모든 일에서'(περὶ πάντα)는 포괄적 모범을 강조합니다. '선한 일'(καλῶν ἔργων)은 디도서의 핵심 주제입니다(1:16; 2:14; 3:1, 8, 14). 가르침에서 두 가지 자세가 요구됩니다: (1) '성실함'(ἀφθορίαν - '부패하지 않음'), (2) '진지함'(σεμνότητα). 디도의 삶과 가르침이 일치해야 했습니다(딤전 4:12)."
    },
    korean_translation: {
      natural_translation: "모든 일에서 선한 일을 행함으로 그들에게 모범을 보이고, 가르침에서 성실함과 진지함을 보이십시오."
    },
    special_explanation: {
      explanation_type: "리더십의 모범",
      content: "'모범'(τύπος)은 '타입'이라는 영어 단어의 어원으로, '찍어낸 형태'를 의미합니다. 디도는 젊은 남성들이 '복사'할 수 있는 살아있는 본보기가 되어야 했습니다. 딤전 4:12는 디모데에게도 '믿는 자의 본'이 되라고 권면합니다."
    }
  },
  {
    reference: "Titus 2:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "말의 건전함",
        original_text: "and soundness of speech that cannot be condemned",
        korean_translation: "그리고 비난받을 수 없는 건전한 말을 하십시오",
        grammatical_explanation: "계속되는 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적",
        original_text: "so that those who oppose you may be ashamed because they have nothing bad to say about us",
        korean_translation: "그래야 반대하는 자들이 우리에 대해 나쁘게 말할 것이 없어서 부끄러워할 것입니다",
        grammatical_explanation: "so that으로 목적 제시"
      }
    ],
    vocabulary: [
      { word: "soundness", ipa_pronunciation: "/ˈsaʊndnəs/", korean_pronunciation: "사운드니스", definition_korean: "건전함" },
      { word: "condemned", ipa_pronunciation: "/kənˈdɛmd/", korean_pronunciation: "컨뎀드", definition_korean: "비난받는" },
      { word: "oppose", ipa_pronunciation: "/əˈpoʊz/", korean_pronunciation: "어포즈", definition_korean: "반대하다" },
      { word: "ashamed", ipa_pronunciation: "/əˈʃeɪmd/", korean_pronunciation: "어셰임드", definition_korean: "부끄러워하는" }
    ],
    contextual_explanation: {
      integrated_explanation: "디도의 '말의 건전함'(λόγον ὑγιῆ ἀκατάγνωστον)은 1:9, 2:1의 '건전한 교리'와 연결됩니다. '비난받을 수 없는'(ἀκατάγνωστον)은 법정 용어로, 고소할 근거가 없다는 뜻입니다. 목적은 '반대하는 자들'(ὁ ἐξ ἐναντίας)을 부끄럽게 만드는 것입니다. 그들이 '우리에 대해 나쁘게 말할 것'이 없으면(μηδὲν ἔχων λέγειν περὶ ἡμῶν φαῦλον), 복음의 진실성이 입증됩니다. 이는 2:5, 10의 패턴을 반복합니다: 신자의 삶이 복음을 증거합니다(벧전 2:12, 15)."
    },
    korean_translation: {
      natural_translation: "그리고 비난받을 수 없는 건전한 말을 하십시오. 그래야 반대하는 자들이 우리에 대해 나쁘게 말할 것이 없어서 부끄러워할 것입니다."
    },
    special_explanation: {
      explanation_type: "변증적 삶",
      content: "디도서는 '변증적 삶'(apologetic life)을 강조합니다: 신자의 삶이 복음을 방어하는 최고의 논증입니다. 2:5('하나님의 말씀이 비방받지 않게'), 2:8('반대자들이 부끄러워하게'), 2:10('가르침을 아름답게')은 모두 같은 원리를 반복합니다."
    }
  },
  {
    reference: "Titus 2:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "종의 순종",
        original_text: "Teach slaves to be subject to their masters in everything",
        korean_translation: "종들에게 모든 일에서 자기 주인에게 순종하고",
        grammatical_explanation: "기본 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "종의 태도 1",
        original_text: "to try to please them",
        korean_translation: "그들을 기쁘게 하려고 노력하며",
        grammatical_explanation: "긍정적 태도"
      },
      {
        sequence_order: 3,
        semantic_classification: "종의 태도 2",
        original_text: "not to talk back to them",
        korean_translation: "그들에게 말대꾸하지 말라고 가르치십시오",
        grammatical_explanation: "부정적 금지"
      }
    ],
    vocabulary: [
      { word: "slaves", ipa_pronunciation: "/sleɪvz/", korean_pronunciation: "슬레이브즈", definition_korean: "종들" },
      { word: "subject", ipa_pronunciation: "/səbˈdʒɛkt/", korean_pronunciation: "서브젝트", definition_korean: "순종하는" },
      { word: "please", ipa_pronunciation: "/pliːz/", korean_pronunciation: "플리즈", definition_korean: "기쁘게 하다" },
      { word: "talk back", ipa_pronunciation: "/tɔːk bæk/", korean_pronunciation: "토크 백", definition_korean: "말대꾸하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "종들(δούλους)을 위한 지침이 제시됩니다. 로마 제국 인구의 1/3이 노예였고, 초대교회에도 많은 노예 신자가 있었습니다. 세 가지 지침: (1) '모든 일에서 순종'(ὑποτάσσεσθαι ἐν πᾶσιν), (2) '기쁘게 함'(εὐαρέστους εἶναι), (3) '말대꾸 않음'(μὴ ἀντιλέγοντας). 바울은 노예제도 자체를 지지하지 않았지만(빌레몬서 참조), 현실 속에서 복음적 삶을 강조했습니다. 엡 6:5-8, 골 3:22-25도 유사한 가르침을 제공합니다."
    },
    korean_translation: {
      natural_translation: "종들에게 모든 일에서 자기 주인에게 순종하고, 그들을 기쁘게 하려고 노력하며, 그들에게 말대꾸하지 말라고 가르치십시오."
    },
    special_explanation: {
      explanation_type: "노예와 복음",
      content: "신약은 노예제도를 직접 공격하지 않고 변혁시켰습니다. 빌레몬서는 오네시모를 '사랑받는 형제'(빌 1:16)로 부르며, 갈 3:28은 '종이나 자유인이나 차이가 없다'고 선언합니다. 종들의 복음적 삶은 제도를 안에서부터 변화시키는 능력이었습니다(고전 7:21-24)."
    }
  },
  {
    reference: "Titus 2:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "종의 태도 3",
        original_text: "and not to steal from them",
        korean_translation: "그리고 그들에게서 훔치지 않으며",
        grammatical_explanation: "계속되는 금지"
      },
      {
        sequence_order: 2,
        semantic_classification: "종의 긍정적 특성",
        original_text: "but to show that they can be fully trusted",
        korean_translation: "오히려 완전히 신뢰받을 수 있음을 보이라고 하십시오",
        grammatical_explanation: "but으로 대조"
      },
      {
        sequence_order: 3,
        semantic_classification: "최종 목적",
        original_text: "so that in every way they will make the teaching about God our Savior attractive",
        korean_translation: "그래야 그들이 모든 면에서 우리 구주 하나님의 가르침을 아름답게 할 것입니다",
        grammatical_explanation: "so that으로 목적 제시"
      }
    ],
    vocabulary: [
      { word: "steal", ipa_pronunciation: "/stiːl/", korean_pronunciation: "스틸", definition_korean: "훔치다" },
      { word: "fully trusted", ipa_pronunciation: "/ˈfʊli ˈtrʌstɪd/", korean_pronunciation: "풀리 트러스티드", definition_korean: "완전히 신뢰받는" },
      { word: "attractive", ipa_pronunciation: "/əˈtræktɪv/", korean_pronunciation: "어트랙티브", definition_korean: "매력적인, 아름다운" }
    ],
    contextual_explanation: {
      integrated_explanation: "종들의 마지막 두 지침: (4) '훔치지 않음'(μὴ νοσφιζομένους - 몰래 빼돌리지 않음), (5) '완전히 신뢰받을 수 있음'(πᾶσαν πίστιν ἐνδεικνυμένους ἀγαθήν). 최종 목적은 감동적입니다: '우리 구주 하나님의 가르침을 아름답게 함'(τὴν διδασκαλίαν τὴν τοῦ σωτῆρος ἡμῶν θεοῦ κοσμῶσιν). '아름답게 하다'(κοσμέω)는 '장식하다'는 뜻으로, 종들의 삶이 복음을 보석처럼 빛나게 한다는 의미입니다. 사회 최하층인 노예들도 복음을 증거하는 중요한 역할을 담당했습니다."
    },
    korean_translation: {
      natural_translation: "그리고 그들에게서 훔치지 않으며, 오히려 완전히 신뢰받을 수 있음을 보이라고 하십시오. 그래야 그들이 모든 면에서 우리 구주 하나님의 가르침을 아름답게 할 것입니다."
    },
    special_explanation: {
      explanation_type: "복음을 아름답게 함",
      content: "'아름답게 하다'(κοσμέω)는 '우주'(cosmos)와 같은 어근으로, '질서 잡다', '장식하다'는 뜻입니다. 신자의 삶은 복음 교리에 아름다움을 더합니다. 사회 최하층인 노예들조차 복음을 빛나게 할 수 있다는 혁명적 메시지입니다. 벧전 3:3-4도 유사하게 '내적 아름다움'을 강조합니다."
    }
  }
]

async function main() {
  let successCount = 0
  let failureCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failureCount++
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n=== 완료 ===`)
  console.log(`성공: ${successCount}`)
  console.log(`실패: ${failureCount}`)

  if (successCount > 0) {
    const { createClient } = await import('@supabase/supabase-js')
    const dotenv = await import('dotenv')
    dotenv.config()

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    )

    for (const analysis of analyses) {
      await supabase
        .from('verses')
        .update({ analysis_completed: true })
        .eq('reference', analysis.reference)
    }
    console.log(`✅ ${successCount}개 구절 analysis_completed 플래그 업데이트 완료`)
  }
}

main()
