import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

interface AnalysisData {
  reference: string;
  sentence_structures: Array<{
    sequence_order: number;
    semantic_classification: string;
    original_text: string;
    korean_translation: string;
    grammatical_explanation?: string;
  }>;
  vocabulary: Array<{
    word: string;
    ipa_pronunciation?: string;
    korean_pronunciation?: string;
    part_of_speech?: string;
    definition_korean: string;
    usage_note?: string;
  }>;
  contextual_explanation: {
    integrated_explanation: string;
    cross_references?: string[];
  };
  korean_translation: {
    natural_translation: string;
    translation_notes?: string;
  };
  special_explanation?: {
    explanation_type: string;
    content: string;
    examples?: string[];
  };
}

async function saveAnalysisToDb(data: AnalysisData) {
  console.log(`\n📝 ${data.reference} 분석 결과 저장 중...`);

  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .select('id')
    .eq('reference', data.reference)
    .single();

  if (verseError || !verse) {
    console.error(`❌ 구절을 찾을 수 없습니다: ${data.reference}`);
    return false;
  }

  const verseId = verse.id;

  try {
    await supabase.from('sentence_structures').delete().eq('verse_id', verseId);
    await supabase.from('vocabulary').delete().eq('verse_id', verseId);
    await supabase.from('contextual_explanations').delete().eq('verse_id', verseId);
    await supabase.from('korean_translations').delete().eq('verse_id', verseId);
    await supabase.from('special_explanations').delete().eq('verse_id', verseId);

    if (data.sentence_structures && data.sentence_structures.length > 0) {
      const { error: sentenceError } = await supabase
        .from('sentence_structures')
        .insert(data.sentence_structures.map((s) => ({ verse_id: verseId, ...s })));

      if (sentenceError) {
        console.error('❌ 문장 구조 저장 실패:', sentenceError);
        return false;
      }
      console.log(`  ✅ ${data.sentence_structures.length}개 문장구조 저장`);
    }

    if (data.vocabulary && data.vocabulary.length > 0) {
      const { error: vocabError } = await supabase
        .from('vocabulary')
        .insert(data.vocabulary.map((v) => ({ verse_id: verseId, ...v })));

      if (vocabError) {
        console.error('❌ 어휘 저장 실패:', vocabError);
        return false;
      }
      console.log(`  ✅ ${data.vocabulary.length}개 어휘 저장`);
    }

    const { error: contextError } = await supabase
      .from('contextual_explanations')
      .insert({
        verse_id: verseId,
        ...data.contextual_explanation
      });

    if (contextError) {
      console.error('❌ 문맥 설명 저장 실패:', contextError);
      return false;
    }
    console.log('  ✅ 문맥 설명 저장');

    const { error: translationError } = await supabase
      .from('korean_translations')
      .insert({
        verse_id: verseId,
        ...data.korean_translation
      });

    if (translationError) {
      console.error('❌ 한국어 번역 저장 실패:', translationError);
      return false;
    }
    console.log('  ✅ 한국어 번역 저장');

    if (data.special_explanation) {
      const { error: specialError } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          ...data.special_explanation
        });

      if (specialError) {
        console.error('❌ 특별 설명 저장 실패:', specialError);
        return false;
      }
      console.log('  ✅ 특별 설명 저장');
    }

    const { error: flagError } = await supabase
      .from('verses')
      .update({ analysis_completed: true })
      .eq('id', verseId);

    if (flagError) {
      console.error('❌ 분석 플래그 업데이트 실패:', flagError);
      return false;
    }

    console.log(`✅ ${data.reference} 저장 완료!\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${data.reference} 저장 중 오류:`, error);
    return false;
  }
}

// 히브리서 5-7장 분석 데이터
const hebrewsAnalyses: AnalysisData[] = [
  // ==================== HEBREWS 5 ====================
  {
    reference: "Hebrews 5:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대제사장의 출신",
        original_text: "Every high priest is selected from among the people",
        korean_translation: "모든 대제사장은 사람들 중에서 선택되어",
        grammatical_explanation: "수동태 구조로 대제사장이 하나님에 의해 선택됨을 강조. 'from among the people'은 대제사장의 인간성을 나타냄."
      },
      {
        sequence_order: 2,
        semantic_classification: "대제사장의 역할",
        original_text: "and is appointed to represent the people in matters related to God",
        korean_translation: "하나님과 관련된 일에서 사람들을 대표하도록 임명되며",
        grammatical_explanation: "to부정사 'to represent'는 임명의 목적을 나타냄. 대제사장은 중보자 역할."
      },
      {
        sequence_order: 3,
        semantic_classification: "제사의 목적",
        original_text: "to offer gifts and sacrifices for sins",
        korean_translation: "죄를 위한 예물과 제사를 드립니다",
        grammatical_explanation: "to부정사로 대제사장의 구체적 임무 설명. 'for sins'는 제사의 속죄적 목적."
      }
    ],
    vocabulary: [
      {
        word: "high priest",
        ipa_pronunciation: "/haɪ priːst/",
        korean_pronunciation: "하이 프리스트",
        part_of_speech: "명사구",
        definition_korean: "대제사장",
        usage_note: "구약의 최고 제사장직. 그리스도의 제사장 직분을 예표함."
      },
      {
        word: "selected",
        ipa_pronunciation: "/sɪˈlektɪd/",
        korean_pronunciation: "실렉티드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "선택되다",
        usage_note: "하나님의 주권적 선택을 나타냄."
      },
      {
        word: "appointed",
        ipa_pronunciation: "/əˈpɔɪntɪd/",
        korean_pronunciation: "어포인티드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "임명되다",
        usage_note: "공식적인 직무 부여를 의미."
      },
      {
        word: "represent",
        ipa_pronunciation: "/ˌreprɪˈzent/",
        korean_pronunciation: "레프리젠트",
        part_of_speech: "동사",
        definition_korean: "대표하다",
        usage_note: "중보자로서의 역할을 나타냄."
      },
      {
        word: "sacrifices",
        ipa_pronunciation: "/ˈsækrɪfaɪsɪz/",
        korean_pronunciation: "새크리파이시즈",
        part_of_speech: "명사(복수)",
        definition_korean: "제사들",
        usage_note: "구약의 다양한 제사 제도를 지칭."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "히브리서 5장은 4장 14-16절에서 시작된 그리스도의 대제사장직 주제를 본격적으로 전개합니다. 저자는 먼저 구약의 대제사장 제도를 설명하며, 대제사장이 반드시 사람들 중에서 선택되고 하나님에 의해 임명되어야 함을 강조합니다. 레위기 제사 제도에서 대제사장은 백성과 하나님 사이의 중보자로서, 죄를 위한 속죄 제사를 드리는 핵심적 역할을 담당했습니다. 이 구절은 그리스도의 제사장직과 인간 제사장직의 유사성(둘 다 사람들을 위해 하나님께 나아감)과 차이점(그리스도의 우월성)을 논증하기 위한 기초를 놓습니다.",
      cross_references: ["Exodus 28:1", "Leviticus 9:7", "Hebrews 2:17"]
    },
    korean_translation: {
      natural_translation: "모든 대제사장은 사람들 중에서 선택되어 하나님과 관련된 일에서 사람들을 대표하도록 임명되며, 죄를 위한 예물과 제사를 드립니다.",
      translation_notes: "대제사장의 세 가지 핵심 특징을 순차적으로 제시: 출신(사람들 중에서), 역할(대표자), 임무(제사)."
    },
    special_explanation: {
      explanation_type: "신학적 의미",
      content: "이 구절은 성육신의 필연성을 암시합니다. 대제사장은 '사람들 중에서' 선택되어야 하므로, 그리스도께서도 완전한 인간이 되셔야 했습니다(히 2:14-17). 동시에 '임명되다'는 표현은 대제사장직이 자의적이 아니라 하나님의 주권적 부르심에 의한 것임을 보여줍니다."
    }
  },
  {
    reference: "Hebrews 5:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대제사장의 온유한 태도",
        original_text: "He is able to deal gently with those who are ignorant and are going astray",
        korean_translation: "그는 무지하고 길을 잃은 자들을 온유하게 대할 수 있으니",
        grammatical_explanation: "'deal gently'는 온건하게 대하다는 의미. 'those who'는 관계대명사절로 무지하고 방황하는 사람들을 지칭."
      },
      {
        sequence_order: 2,
        semantic_classification: "온유함의 근거",
        original_text: "since he himself is subject to weakness",
        korean_translation: "그 자신도 연약함에 매여 있기 때문입니다",
        grammatical_explanation: "'since'는 이유를 나타내는 접속사. 대제사장 자신의 연약함이 온유함의 근거가 됨."
      }
    ],
    vocabulary: [
      {
        word: "deal gently",
        ipa_pronunciation: "/diːl ˈdʒentli/",
        korean_pronunciation: "딜 젠틀리",
        part_of_speech: "동사구",
        definition_korean: "온유하게 대하다",
        usage_note: "그리스어 'metriopathein'의 번역으로, 감정을 절제하며 동정하는 태도."
      },
      {
        word: "ignorant",
        ipa_pronunciation: "/ˈɪɡnərənt/",
        korean_pronunciation: "이그너런트",
        part_of_speech: "형용사",
        definition_korean: "무지한",
        usage_note: "고의적 반역이 아닌 무지로 인한 죄를 지칭."
      },
      {
        word: "going astray",
        ipa_pronunciation: "/ˈɡoʊɪŋ əˈstreɪ/",
        korean_pronunciation: "고잉 어스트레이",
        part_of_speech: "동사구(진행형)",
        definition_korean: "길을 잃어가다",
        usage_note: "방향을 잃고 잘못된 길로 가는 상태."
      },
      {
        word: "subject to",
        ipa_pronunciation: "/ˈsʌbdʒɪkt tuː/",
        korean_pronunciation: "서브젝트 투",
        part_of_speech: "형용사구",
        definition_korean: "~에 매여 있는, 종속된",
        usage_note: "피할 수 없는 상태에 놓여 있음을 의미."
      },
      {
        word: "weakness",
        ipa_pronunciation: "/ˈwiːknəs/",
        korean_pronunciation: "위크니스",
        part_of_speech: "명사",
        definition_korean: "연약함",
        usage_note: "인간의 도덕적, 신체적 한계를 포괄."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 대제사장이 온유함을 가질 수 있는 이유를 설명합니다. 인간 대제사장은 자신도 연약함에 매여 있기 때문에, 죄를 짓는 사람들에게 공감하고 온유하게 대할 수 있습니다. '온유하게 대하다'로 번역된 그리스어 'metriopathein'은 감정을 절제하며 동정하는 태도를 의미하며, 지나친 엄격함이나 지나친 관대함이 아닌 균형 잡힌 태도를 나타냅니다. 구약의 제사 제도는 고의적 죄와 무지로 인한 죄를 구분했는데(민수기 15:22-31), 이 구절은 무지와 방황으로 인한 죄에 초점을 맞춥니다. 이는 그리스도의 동정하는 대제사장직(4:15)을 예표하며, 동시에 그리스도와의 차이(그리스도는 죄가 없으심)를 대비시킵니다.",
      cross_references: ["Numbers 15:22-31", "Hebrews 4:15", "Hebrews 7:28"]
    },
    korean_translation: {
      natural_translation: "그는 무지하고 길을 잃은 자들을 온유하게 대할 수 있으니, 그 자신도 연약함에 매여 있기 때문입니다.",
      translation_notes: "대제사장의 공감 능력과 그 근거(자신의 연약함)를 인과관계로 연결."
    },
    special_explanation: {
      explanation_type: "문법적 특이점",
      content: "'deal gently'는 그리스어 'metriopathein'의 번역으로, 신약에서 이곳에만 나타나는 독특한 표현입니다. 이 단어는 스토아 철학에서 감정을 완전히 제거하는 'apatheia'와 대조되며, 감정을 절제하되 공감하는 균형 잡힌 태도를 의미합니다. 'subject to weakness'는 대제사장이 연약함으로부터 자유롭지 못함을 강조하며, 이는 다음 절(3절)의 자신을 위한 제사로 연결됩니다."
    }
  },
  {
    reference: "Hebrews 5:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대제사장의 의무",
        original_text: "This is why he has to offer sacrifices for his own sins, as well as for the sins of the people",
        korean_translation: "이 때문에 그는 백성의 죄뿐만 아니라 자기 자신의 죄를 위해서도 제사를 드려야 합니다",
        grammatical_explanation: "'This is why'는 2절의 연약함을 지칭. 'as well as'는 자신의 죄와 백성의 죄 모두를 위한 제사를 강조."
      }
    ],
    vocabulary: [
      {
        word: "has to",
        ipa_pronunciation: "/hæz tuː/",
        korean_pronunciation: "해즈 투",
        part_of_speech: "조동사구",
        definition_korean: "~해야 한다",
        usage_note: "의무와 필연성을 나타냄."
      },
      {
        word: "offer sacrifices",
        ipa_pronunciation: "/ˈɔːfər ˈsækrɪfaɪsɪz/",
        korean_pronunciation: "오퍼 새크리파이시즈",
        part_of_speech: "동사구",
        definition_korean: "제사를 드리다",
        usage_note: "구약의 제사 의식을 수행함."
      },
      {
        word: "as well as",
        ipa_pronunciation: "/æz wel æz/",
        korean_pronunciation: "애즈 웰 애즈",
        part_of_speech: "접속사구",
        definition_korean: "~뿐만 아니라",
        usage_note: "두 가지를 모두 포함함을 강조."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 대속죄일(욤 키푸르) 의식을 배경으로 합니다. 레위기 16장에 따르면, 대제사장은 먼저 자신의 죄를 위해 수송아지를 제물로 드린 후, 백성의 죄를 위해 염소를 드려야 했습니다. 이는 대제사장 자신도 죄인이며 연약하다는 2절의 내용을 구체적으로 증명합니다. '이 때문에'(This is why)는 대제사장의 연약함과 자신을 위한 제사의 필연적 관계를 명확히 합니다. 이 제도는 그리스도와의 극명한 대조를 제공하는데, 그리스도는 죄가 없으시므로 자신을 위한 제사가 필요 없으셨습니다(7:27). 이러한 대조는 그리스도의 우월성을 논증하는 저자의 전략적 서술입니다.",
      cross_references: ["Leviticus 16:6", "Leviticus 16:15", "Hebrews 7:27", "Hebrews 9:7"]
    },
    korean_translation: {
      natural_translation: "이 때문에 그는 백성의 죄뿐만 아니라 자기 자신의 죄를 위해서도 제사를 드려야 합니다.",
      translation_notes: "'as well as' 구조를 통해 자신의 죄를 먼저 언급하여 대제사장의 불완전성을 강조."
    },
    special_explanation: {
      explanation_type: "역사적 배경",
      content: "대속죄일(레위기 16장)에 대제사장은 자신의 죄를 위해 먼저 제사를 드린 후에야 백성을 위해 지성소에 들어갈 수 있었습니다. 이는 중보자 자신이 정결해야 함을 보여주며, 동시에 인간 대제사장의 근본적 한계를 드러냅니다. 반면 그리스도는 죄가 없으시므로(4:15) 자신을 위한 제사 없이 단번에 완전한 제사를 드리셨습니다(7:27, 9:12)."
    }
  },
  {
    reference: "Hebrews 5:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대제사장직의 수동적 수여",
        original_text: "And no one takes this honor on himself",
        korean_translation: "아무도 이 영예를 스스로 취하지 않으며",
        grammatical_explanation: "'takes on himself'는 자의적으로 취함을 의미. 부정문으로 자기 의지적 임명을 금지."
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님의 부르심",
        original_text: "but he receives it when called by God, just as Aaron was",
        korean_translation: "아론처럼 하나님의 부르심을 받을 때 그것을 받습니다",
        grammatical_explanation: "'when called by God'는 시간 부사절. 'just as Aaron was'는 역사적 선례를 제시."
      }
    ],
    vocabulary: [
      {
        word: "honor",
        ipa_pronunciation: "/ˈɑːnər/",
        korean_pronunciation: "아너",
        part_of_speech: "명사",
        definition_korean: "영예, 영광",
        usage_note: "대제사장직의 명예로운 지위."
      },
      {
        word: "takes on himself",
        ipa_pronunciation: "/teɪks ɑːn hɪmˈself/",
        korean_pronunciation: "테익스 온 힘셀프",
        part_of_speech: "동사구",
        definition_korean: "스스로 취하다",
        usage_note: "자의적으로 직분을 차지함."
      },
      {
        word: "receives",
        ipa_pronunciation: "/rɪˈsiːvz/",
        korean_pronunciation: "리시브즈",
        part_of_speech: "동사",
        definition_korean: "받다",
        usage_note: "수동적으로 부여받음."
      },
      {
        word: "called",
        ipa_pronunciation: "/kɔːld/",
        korean_pronunciation: "콜드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "부르심을 받은",
        usage_note: "하나님의 주권적 선택."
      },
      {
        word: "Aaron",
        ipa_pronunciation: "/ˈerən/",
        korean_pronunciation: "에론",
        part_of_speech: "고유명사",
        definition_korean: "아론",
        usage_note: "모세의 형이자 최초의 대제사장."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 대제사장직의 핵심 원리를 제시합니다: 하나님의 부르심. 출애굽기 28장에서 하나님은 모세에게 아론을 대제사장으로 택하라고 명령하셨으며, 이후 레위 지파의 아론 후손만이 대제사장이 될 수 있었습니다. 역사적으로 고라의 반역(민수기 16장)과 웃시야 왕의 사례(역대하 26:16-21)는 자의적으로 제사장직을 취하려는 시도가 하나님의 심판을 받았음을 보여줍니다. '영예'(honor)라는 단어는 대제사장직이 단순한 의무가 아니라 특권임을 나타냅니다. 저자는 이 원리를 다음 절에서 그리스도께 적용하여, 그리스도께서도 스스로 대제사장이 되신 것이 아니라 하나님의 임명을 받으셨음을 논증합니다.",
      cross_references: ["Exodus 28:1", "Numbers 16:1-40", "2 Chronicles 26:16-21", "Hebrews 5:5-6"]
    },
    korean_translation: {
      natural_translation: "아무도 이 영예를 스스로 취하지 않으며, 아론처럼 하나님의 부르심을 받을 때 그것을 받습니다.",
      translation_notes: "부정적 진술(스스로 취하지 않음)과 긍정적 진술(하나님의 부르심)의 대조 구조."
    },
    special_explanation: {
      explanation_type: "신학적 의미",
      content: "이 구절은 제사장직의 신적 기원을 강조합니다. 인간의 야망이나 자격이 아니라 오직 하나님의 주권적 선택만이 제사장을 만듭니다. 아론은 최초의 대제사장으로서 이 원리의 모범이며, 그의 임명은 전적으로 하나님의 선택에 의한 것이었습니다(출 28:1). 이는 다음 절에서 그리스도의 제사장직도 하나님 아버지의 임명에 의한 것임을 증명하는 기초가 됩니다."
    }
  },
  {
    reference: "Hebrews 5:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "그리스도의 겸손",
        original_text: "In the same way, Christ did not take on himself the glory of becoming a high priest",
        korean_translation: "이와 같이 그리스도께서도 대제사장이 되는 영광을 스스로 취하지 않으시고",
        grammatical_explanation: "'In the same way'는 4절의 원리를 그리스도께 적용. 'did not take on himself'는 자의적 임명의 부재."
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님의 선포",
        original_text: "But God said to him, 'You are my Son; today I have become your Father.'",
        korean_translation: "하나님께서 그에게 말씀하셨습니다. '너는 내 아들이라 오늘 내가 너를 낳았도다'",
        grammatical_explanation: "시편 2:7의 인용. 'But'은 대조를 나타내며, 하나님의 능동적 선포가 그리스도의 지위를 확정함."
      }
    ],
    vocabulary: [
      {
        word: "glory",
        ipa_pronunciation: "/ˈɡlɔːri/",
        korean_pronunciation: "글로리",
        part_of_speech: "명사",
        definition_korean: "영광",
        usage_note: "대제사장직의 명예로운 지위."
      },
      {
        word: "becoming",
        ipa_pronunciation: "/bɪˈkʌmɪŋ/",
        korean_pronunciation: "비커밍",
        part_of_speech: "동명사",
        definition_korean: "~이 되는 것",
        usage_note: "과정이나 결과를 나타냄."
      },
      {
        word: "Son",
        ipa_pronunciation: "/sʌn/",
        korean_pronunciation: "선",
        part_of_speech: "명사",
        definition_korean: "아들",
        usage_note: "그리스도의 신적 신분."
      },
      {
        word: "become",
        ipa_pronunciation: "/bɪˈkʌm/",
        korean_pronunciation: "비컴",
        part_of_speech: "동사",
        definition_korean: "낳다, 되게 하다",
        usage_note: "여기서는 '낳다'로 번역되어 부자 관계를 나타냄."
      },
      {
        word: "Father",
        ipa_pronunciation: "/ˈfɑːðər/",
        korean_pronunciation: "파더",
        part_of_speech: "명사",
        definition_korean: "아버지",
        usage_note: "하나님과 그리스도의 관계."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 그리스도의 대제사장직이 하나님의 임명에 의한 것임을 증명하는 첫 번째 구약 인용입니다. 저자는 시편 2:7을 인용하여, 그리스도께서 '아들'로 선포되신 것이 대제사장직 임명의 기초임을 보여줍니다. 시편 2편은 원래 다윗 왕조의 왕위 즉위식에서 사용된 왕실 시편으로, 왕이 하나님의 아들로 선포되는 내용을 담고 있습니다. 초대교회는 이 시편을 그리스도의 부활과 연결시켰습니다(행 13:33). '오늘'(today)은 영원한 현재를 나타내며, 그리스도의 신적 아들됨은 시간에 제한되지 않습니다. 이 선포는 그리스도의 독특한 자격을 증명하며, 단순히 아론의 후손이 아닌 더 높은 권위에 의해 제사장이 되셨음을 보여줍니다.",
      cross_references: ["Psalm 2:7", "Acts 13:33", "Hebrews 1:5", "Romans 1:4"]
    },
    korean_translation: {
      natural_translation: "이와 같이 그리스도께서도 대제사장이 되는 영광을 스스로 취하지 않으시고, 하나님께서 그에게 말씀하셨습니다. '너는 내 아들이라 오늘 내가 너를 낳았도다'",
      translation_notes: "4절의 원리를 그리스도께 적용하며, 구약 인용으로 하나님의 직접적 임명을 증명."
    },
    special_explanation: {
      explanation_type: "구약 인용 해석",
      content: "시편 2:7의 인용은 그리스도의 아들됨과 제사장직을 연결합니다. 원래 이 시편은 이스라엘 왕의 즉위식에 사용되었으나, 히브리서는 이를 그리스도의 부활과 승천, 그리고 대제사장 임명에 적용합니다. '오늘'은 역사적 순간(부활)과 영원한 현재(아들의 영원한 신분)를 동시에 가리킵니다. 이 인용은 그리스도의 제사장직이 아론의 혈통이 아닌 신적 아들됨에 기초함을 보여줍니다."
    }
  },
  {
    reference: "Hebrews 5:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "두 번째 구약 인용",
        original_text: "And he says in another place, 'You are a priest forever, in the order of Melchizedek.'",
        korean_translation: "또 다른 곳에서 말씀하시기를 '네가 멜기세덱의 반차를 따라 영원한 제사장이라' 하셨습니다",
        grammatical_explanation: "시편 110:4의 인용. 'in another place'는 또 다른 구약 구절을 지칭. 'forever'와 'order of Melchizedek'는 그리스도 제사장직의 독특성을 강조."
      }
    ],
    vocabulary: [
      {
        word: "priest",
        ipa_pronunciation: "/priːst/",
        korean_pronunciation: "프리스트",
        part_of_speech: "명사",
        definition_korean: "제사장",
        usage_note: "중보자 역할을 하는 종교 지도자."
      },
      {
        word: "forever",
        ipa_pronunciation: "/fəˈrevər/",
        korean_pronunciation: "퍼레버",
        part_of_speech: "부사",
        definition_korean: "영원히",
        usage_note: "시간의 제한 없이 계속됨."
      },
      {
        word: "order",
        ipa_pronunciation: "/ˈɔːrdər/",
        korean_pronunciation: "오더",
        part_of_speech: "명사",
        definition_korean: "반차, 계급, 유형",
        usage_note: "제사장직의 특정한 유형이나 방식."
      },
      {
        word: "Melchizedek",
        ipa_pronunciation: "/melˈkɪzədek/",
        korean_pronunciation: "멜키제덱",
        part_of_speech: "고유명사",
        definition_korean: "멜기세덱",
        usage_note: "창세기 14장의 신비로운 제사장-왕. 히브리서 7장에서 상세히 다룸."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 시편 110:4를 인용하여 그리스도 제사장직의 독특성을 증명합니다. 시편 110편은 메시아 시편으로, 다윗의 주님(메시아)이 영원한 제사장이라고 선포합니다. 여기서 핵심은 '멜기세덱의 반차'입니다. 멜기세덱은 창세기 14:18-20에 등장하는 신비로운 인물로, 살렘 왕이자 지극히 높으신 하나님의 제사장이었습니다. 그는 레위 지파나 아론 가문 출신이 아니었으므로, 그의 제사장직은 레위 제사장 제도와는 완전히 다른 유형입니다. '영원한'(forever)이라는 표현은 레위 제사장들이 죽음으로 인해 교체되는 것과 대조되며, 그리스도의 불변하는 제사장직을 강조합니다. 이 인용은 히브리서 7장 전체의 주제를 예고하며, 그리스도가 아론이 아닌 멜기세덱의 반차를 따르는 우월한 제사장임을 선포합니다.",
      cross_references: ["Psalm 110:4", "Genesis 14:18-20", "Hebrews 7:1-28"]
    },
    korean_translation: {
      natural_translation: "또 다른 곳에서 말씀하시기를 '네가 멜기세덱의 반차를 따라 영원한 제사장이라' 하셨습니다.",
      translation_notes: "시편 110:4의 인용으로 그리스도 제사장직의 영원성과 멜기세덱과의 연관성을 동시에 강조."
    },
    special_explanation: {
      explanation_type: "신학적 의미",
      content: "이 구절은 히브리서의 중심 주제 중 하나를 소개합니다. 그리스도는 아론의 반차가 아닌 멜기세덱의 반차를 따르는 제사장이십니다. 이는 두 가지 중요한 함의가 있습니다: (1) 그리스도의 제사장직은 레위 제사 제도를 초월하며, (2) 영원하고 불변합니다. 멜기세덱은 족보가 없고 시작과 끝이 없는 것으로 묘사되어(7:3), 영원한 그리스도의 완벽한 예표가 됩니다. 이 인용은 7장에서 상세히 전개될 논증의 씨앗입니다."
    }
  },
  {
    reference: "Hebrews 5:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "그리스도의 지상 생애 중 기도",
        original_text: "During the days of Jesus' life on earth, he offered up prayers and petitions with fervent cries and tears to the one who could save him from death",
        korean_translation: "그분께서 육체로 계실 때에 자기를 죽음에서 능히 구원하실 이에게 심한 통곡과 눈물로 간구와 소원을 올렸고",
        grammatical_explanation: "'During the days of Jesus' life on earth'는 시간 배경. 'with fervent cries and tears'는 기도의 강렬함을 나타내는 부사구."
      },
      {
        sequence_order: 2,
        semantic_classification: "기도의 응답",
        original_text: "and he was heard because of his reverent submission",
        korean_translation: "그의 경건하심으로 말미암아 들으심을 얻었습니다",
        grammatical_explanation: "'was heard'는 수동태로 하나님께서 들으심. 'because of his reverent submission'은 응답의 근거."
      }
    ],
    vocabulary: [
      {
        word: "offered up",
        ipa_pronunciation: "/ˈɔːfərd ʌp/",
        korean_pronunciation: "오퍼드 업",
        part_of_speech: "동사구(과거)",
        definition_korean: "올려드리다",
        usage_note: "제사적 언어로 기도를 표현."
      },
      {
        word: "prayers",
        ipa_pronunciation: "/prerz/",
        korean_pronunciation: "프레어즈",
        part_of_speech: "명사(복수)",
        definition_korean: "기도들",
        usage_note: "일반적인 기도."
      },
      {
        word: "petitions",
        ipa_pronunciation: "/pəˈtɪʃənz/",
        korean_pronunciation: "퍼티션즈",
        part_of_speech: "명사(복수)",
        definition_korean: "간구들",
        usage_note: "구체적 요청이 담긴 기도."
      },
      {
        word: "fervent",
        ipa_pronunciation: "/ˈfɜːrvənt/",
        korean_pronunciation: "퍼번트",
        part_of_speech: "형용사",
        definition_korean: "열렬한, 간절한",
        usage_note: "강렬한 감정을 동반함."
      },
      {
        word: "cries",
        ipa_pronunciation: "/kraɪz/",
        korean_pronunciation: "크라이즈",
        part_of_speech: "명사(복수)",
        definition_korean: "부르짖음, 통곡",
        usage_note: "큰 소리로 외치는 기도."
      },
      {
        word: "reverent submission",
        ipa_pronunciation: "/ˈrevərənt səbˈmɪʃən/",
        korean_pronunciation: "레버런트 서브미션",
        part_of_speech: "명사구",
        definition_korean: "경건한 순종",
        usage_note: "하나님께 대한 경외와 순종."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 그리스도의 인간성과 고난을 생생하게 묘사합니다. '육체로 계실 때'는 성육신과 지상 생애를 지칭하며, 특히 겟세마네 동산의 기도를 떠올리게 합니다(마 26:36-46, 눅 22:39-46). '심한 통곡과 눈물'은 그리스도의 극심한 고뇌를 보여주며, 이는 2절의 '온유하게 대할 수 있음'을 가능케 하는 그리스도의 진정한 인간적 경험입니다. '죽음에서 구원하실 이'는 하나님 아버지를 가리키며, 이 기도는 부활로 응답되었습니다. 흥미롭게도, '들으심을 얻었다'는 표현은 겟세마네의 기도가 즉각적으로는 거부된 것처럼 보이지만(십자가 고난), 궁극적으로는 부활을 통해 완전히 응답되었음을 의미합니다. '경건하심'(reverent submission)은 그리스도께서 하나님의 뜻에 완전히 순종하셨음을 나타내며, 이는 '내 원대로 마시옵고 아버지의 원대로 되기를 원하나이다'(마 26:39)는 기도에 반영되어 있습니다.",
      cross_references: ["Matthew 26:36-46", "Luke 22:39-46", "John 12:27-28", "Hebrews 2:18"]
    },
    korean_translation: {
      natural_translation: "그분께서 육체로 계실 때에 자기를 죽음에서 능히 구원하실 이에게 심한 통곡과 눈물로 간구와 소원을 올렸고, 그의 경건하심으로 말미암아 들으심을 얻었습니다.",
      translation_notes: "그리스도의 인간적 고뇌와 기도, 그리고 하나님의 응답을 연결하여 서술."
    },
    special_explanation: {
      explanation_type: "해석적 논점",
      content: "'죽음에서 구원하다'는 표현의 의미에 대해 해석이 나뉩니다. 일부는 십자가 죽음 자체를 피하게 해달라는 기도로 보지만, 이는 거부되었으므로 문제가 됩니다. 더 나은 해석은 '죽음에서 나오게 하다', 즉 부활을 의미한다고 보는 것입니다. '들으심을 얻었다'는 표현은 이 기도가 부활을 통해 응답되었음을 시사합니다. 또한 '경건하심'(그리스어 'eulabeia')은 경외와 순종을 모두 포함하는 단어로, 그리스도께서 고난을 피하고자 하셨지만 궁극적으로 아버지의 뜻에 순종하신 것을 나타냅니다."
    }
  },
  {
    reference: "Hebrews 5:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "그리스도의 순종 학습",
        original_text: "Son though he was, he learned obedience from what he suffered",
        korean_translation: "그분께서 아들이시면서도 받으신 고난으로 순종함을 배워서",
        grammatical_explanation: "'Son though he was'는 양보절로 신적 신분에도 불구하고를 의미. 'learned obedience from what he suffered'는 고난을 통한 순종의 학습."
      }
    ],
    vocabulary: [
      {
        word: "though",
        ipa_pronunciation: "/ðoʊ/",
        korean_pronunciation: "도우",
        part_of_speech: "접속사",
        definition_korean: "~이지만, ~임에도 불구하고",
        usage_note: "양보를 나타냄."
      },
      {
        word: "learned",
        ipa_pronunciation: "/lɜːrnd/",
        korean_pronunciation: "런드",
        part_of_speech: "동사(과거)",
        definition_korean: "배웠다",
        usage_note: "경험을 통한 학습."
      },
      {
        word: "obedience",
        ipa_pronunciation: "/oʊˈbiːdiəns/",
        korean_pronunciation: "오비디언스",
        part_of_speech: "명사",
        definition_korean: "순종",
        usage_note: "권위에 대한 복종."
      },
      {
        word: "suffered",
        ipa_pronunciation: "/ˈsʌfərd/",
        korean_pronunciation: "서퍼드",
        part_of_speech: "동사(과거)",
        definition_korean: "고난을 받다",
        usage_note: "고통과 시련을 경험함."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 신학적으로 매우 중요하면서도 오해하기 쉬운 내용을 담고 있습니다. '아들이시면서도'는 그리스도의 신적 신분을 전제하며, 양보절 구조는 신이신 분이 순종을 배워야 했다는 역설을 강조합니다. '배웠다'(learned)는 그리스도께서 이전에 불순종하셨다거나 순종이 무엇인지 몰랐다는 의미가 아닙니다. 오히려 이는 성육신하신 그리스도께서 인간으로서 실제 고난을 경험하심으로써 순종을 실천하셨다는 의미입니다. 그리스도는 영원 전부터 순종하는 아들이셨지만, 인간이 되심으로써 인간의 조건 가운데서 순종이 무엇인지를 경험적으로 '배우셨습니다'. 고난은 그리스도의 순종을 시험하고 증명하는 장이었으며, 동시에 그리스도를 완전한 대제사장으로 준비시키는 과정이었습니다(2:10). 이는 우리의 연약함을 동정하실 수 있는 대제사장(4:15)이 되시기 위한 필수적 경험이었습니다.",
      cross_references: ["Philippians 2:8", "Hebrews 2:10", "Hebrews 4:15", "John 4:34"]
    },
    korean_translation: {
      natural_translation: "그분께서 아들이시면서도 받으신 고난으로 순종함을 배워서",
      translation_notes: "양보절 구조로 신적 신분과 인간적 학습의 역설을 강조. 다음 절과 연결되는 분사구문."
    },
    special_explanation: {
      explanation_type: "신학적 역설",
      content: "이 구절의 '배웠다'는 그리스도의 무지나 불완전함을 의미하지 않습니다. 그리스도는 영원 전부터 순종하는 아들이셨습니다. 그러나 성육신을 통해 인간의 조건 가운데서 순종을 경험적으로 실천하셨습니다. 이는 마치 수영 이론을 아는 것과 실제로 물에 들어가 수영하는 것의 차이와 같습니다. 그리스도는 고난을 통해 인간의 순종이 얼마나 어려운지를 몸소 체험하셨고, 이로써 우리의 연약함을 동정하실 수 있는 완전한 대제사장이 되셨습니다."
    }
  },
  {
    reference: "Hebrews 5:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "그리스도의 완전하게 되심",
        original_text: "and, once made perfect, he became the source of eternal salvation for all who obey him",
        korean_translation: "온전하게 되사 자기에게 순종하는 모든 자에게 영원한 구원의 근원이 되셨습니다",
        grammatical_explanation: "'once made perfect'는 시간 부사절. 'became the source'는 결과. 'for all who obey him'은 구원의 수혜자."
      }
    ],
    vocabulary: [
      {
        word: "made perfect",
        ipa_pronunciation: "/meɪd ˈpɜːrfɪkt/",
        korean_pronunciation: "메이드 퍼펙트",
        part_of_speech: "동사구(수동태 과거)",
        definition_korean: "완전하게 되다",
        usage_note: "목적에 완전히 적합하게 됨."
      },
      {
        word: "source",
        ipa_pronunciation: "/sɔːrs/",
        korean_pronunciation: "소스",
        part_of_speech: "명사",
        definition_korean: "근원, 원천",
        usage_note: "모든 것이 나오는 시작점."
      },
      {
        word: "eternal",
        ipa_pronunciation: "/ɪˈtɜːrnl/",
        korean_pronunciation: "이터널",
        part_of_speech: "형용사",
        definition_korean: "영원한",
        usage_note: "시간의 제한이 없는."
      },
      {
        word: "salvation",
        ipa_pronunciation: "/sælˈveɪʃən/",
        korean_pronunciation: "샐베이션",
        part_of_speech: "명사",
        definition_korean: "구원",
        usage_note: "죄와 죽음으로부터의 해방."
      },
      {
        word: "obey",
        ipa_pronunciation: "/oʊˈbeɪ/",
        korean_pronunciation: "오베이",
        part_of_speech: "동사",
        definition_korean: "순종하다",
        usage_note: "명령이나 권위를 따름."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 7-8절의 결론으로, 그리스도의 고난과 순종의 목적과 결과를 선포합니다. '온전하게 되사'(made perfect)는 그리스도께 결함이 있었다는 의미가 아니라, 대제사장의 직무를 완수하기 위해 필요한 모든 자격과 경험을 완전히 갖추셨다는 의미입니다. 2:10에서도 같은 표현이 사용되어, 그리스도께서 고난을 통해 '온전하게' 되셨다고 말합니다. '영원한 구원'은 일시적이고 반복적인 구약의 제사와 대조됩니다. 레위 제사장들은 매년 속죄일마다 제사를 드려야 했지만, 그리스도는 단번에 영원한 구원을 성취하셨습니다. '근원'(source)이라는 단어는 그리스도께서 구원의 창시자이자 제공자이심을 강조합니다. '자기에게 순종하는 모든 자'는 구원의 조건을 제시하는데, 이는 단순한 지적 동의가 아니라 그리스도께 대한 전인격적 복종과 신뢰를 의미합니다. 8절에서 그리스도께서 순종을 배우신 것처럼, 우리도 그리스도께 순종함으로써 구원에 참여합니다.",
      cross_references: ["Hebrews 2:10", "Hebrews 7:25", "Hebrews 9:12", "Hebrews 10:14"]
    },
    korean_translation: {
      natural_translation: "온전하게 되사 자기에게 순종하는 모든 자에게 영원한 구원의 근원이 되셨습니다.",
      translation_notes: "그리스도의 완전하게 되심과 그 결과(영원한 구원의 근원)를 연결."
    },
    special_explanation: {
      explanation_type: "신학적 의미",
      content: "'온전하게 되사'(teleioō)는 히브리서의 핵심 용어로, '목적을 완수하다', '완성에 이르다'는 의미입니다. 그리스도는 도덕적으로 완전하셨지만, 대제사장으로서의 직무를 완수하기 위해서는 고난과 순종의 경험이 필요했습니다. 이를 통해 그리스도는 '영원한 구원의 근원'이 되셨습니다. 이는 구약의 제사 제도가 주지 못한 완전하고 최종적인 구원을 의미하며, 시간적으로도 영원히 지속되는 구원입니다."
    }
  },
  {
    reference: "Hebrews 5:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님의 임명 선포",
        original_text: "and was designated by God to be high priest in the order of Melchizedek",
        korean_translation: "하나님께 멜기세덱의 반차를 따르는 대제사장이라 칭함을 받으셨습니다",
        grammatical_explanation: "'was designated by God'는 수동태로 하나님의 능동적 임명을 강조. 'in the order of Melchizedek'는 6절의 주제를 반복."
      }
    ],
    vocabulary: [
      {
        word: "designated",
        ipa_pronunciation: "/ˈdezɪɡneɪtɪd/",
        korean_pronunciation: "데지그네이티드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "지명되다, 칭함을 받다",
        usage_note: "공식적으로 지정되거나 선포됨."
      },
      {
        word: "high priest",
        ipa_pronunciation: "/haɪ priːst/",
        korean_pronunciation: "하이 프리스트",
        part_of_speech: "명사구",
        definition_korean: "대제사장",
        usage_note: "최고의 제사장직."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 5:1-10 단락의 결론으로, 그리스도께서 하나님에 의해 멜기세덱의 반차를 따르는 대제사장으로 공식 지명되셨음을 선포합니다. 이는 4절의 원리(아무도 스스로 대제사장이 되지 않고 하나님의 부르심을 받음)의 완성이며, 5-6절에서 인용된 두 구약 본문(시 2:7, 시 110:4)의 종합입니다. '지명되다'(designated)로 번역된 그리스어 'prosagoreutheis'는 공식적으로 칭호나 직함을 선포받음을 의미합니다. 저자는 1-4절에서 일반적 대제사장의 자격을 설명하고, 5-10절에서 그리스도께서 이 자격을 완벽하게 충족하시며 나아가 초월하심을 논증했습니다. 그리스도는 사람 중에서 선택되셨고(성육신), 하나님께 부르심을 받으셨고(시 2:7, 110:4), 동정하실 수 있으며(고난을 통한 경험), 온전하게 되사(목적 달성) 영원한 구원의 근원이 되셨습니다. 멜기세덱의 반차는 11절 이하와 7장에서 상세히 전개될 주제입니다.",
      cross_references: ["Psalm 110:4", "Hebrews 5:6", "Hebrews 6:20", "Hebrews 7:1-28"]
    },
    korean_translation: {
      natural_translation: "하나님께 멜기세덱의 반차를 따르는 대제사장이라 칭함을 받으셨습니다.",
      translation_notes: "5-9절의 논증을 요약하며, 멜기세덱 주제를 재도입하여 다음 단락으로 전환."
    },
    special_explanation: {
      explanation_type: "문학적 구조",
      content: "이 구절은 5:1-10 단락을 마무리하면서 동시에 5:11-6:20과 7장으로 이어지는 교량 역할을 합니다. '멜기세덱의 반차'는 6절에서 언급되었고, 11절에서 '이에 관하여 우리가 할 말이 많으나'로 이어지며, 결국 7장 전체에서 상세히 전개됩니다. 이러한 구조는 저자의 능숙한 수사적 기법을 보여줍니다."
    }
  },
  {
    reference: "Hebrews 5:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "말하고자 하는 내용의 많음",
        original_text: "We have much to say about this",
        korean_translation: "이에 관하여 우리가 할 말이 많으나",
        grammatical_explanation: "'this'는 멜기세덱의 반차를 지칭. 'much to say'는 전개할 주제가 풍부함을 나타냄."
      },
      {
        sequence_order: 2,
        semantic_classification: "설명의 어려움",
        original_text: "but it is hard to make it clear to you because you no longer try to understand",
        korean_translation: "너희가 듣는 것이 둔하므로 설명하기 어렵습니다",
        grammatical_explanation: "'hard to make it clear'는 설명의 난이도. 'because you no longer try to understand'는 원인 - 독자들의 영적 둔함."
      }
    ],
    vocabulary: [
      {
        word: "much",
        ipa_pronunciation: "/mʌtʃ/",
        korean_pronunciation: "머치",
        part_of_speech: "형용사",
        definition_korean: "많은",
        usage_note: "양이나 정도가 큼."
      },
      {
        word: "hard",
        ipa_pronunciation: "/hɑːrd/",
        korean_pronunciation: "하드",
        part_of_speech: "형용사",
        definition_korean: "어려운",
        usage_note: "실행하기 힘든."
      },
      {
        word: "make it clear",
        ipa_pronunciation: "/meɪk ɪt klɪr/",
        korean_pronunciation: "메이크 잇 클리어",
        part_of_speech: "동사구",
        definition_korean: "명확하게 하다, 설명하다",
        usage_note: "이해하기 쉽게 만듦."
      },
      {
        word: "no longer",
        ipa_pronunciation: "/noʊ ˈlɔːŋɡər/",
        korean_pronunciation: "노우 롱거",
        part_of_speech: "부사구",
        definition_korean: "더 이상 ~하지 않다",
        usage_note: "이전 상태에서 변화했음을 나타냄."
      },
      {
        word: "try to understand",
        ipa_pronunciation: "/traɪ tuː ˌʌndərˈstænd/",
        korean_pronunciation: "트라이 투 언더스탠드",
        part_of_speech: "동사구",
        definition_korean: "이해하려고 노력하다",
        usage_note: "듣고 깨닫기 위해 애씀."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 5:1-10의 교리적 설명에서 5:11-6:20의 권면과 경고로 전환하는 중요한 전환점입니다. 저자는 멜기세덱의 제사장직에 대해 훨씬 더 많은 내용을 가르치고 싶어 하지만, 독자들의 영적 상태가 이를 방해합니다. '할 말이 많으나'는 7장에서 전개될 풍부한 내용을 암시합니다. '너희가 듣는 것이 둔하므로'로 번역된 표현은 문자적으로 '너희가 듣는 데 게으르게 되었으므로'입니다. 이는 지적 능력의 부족이 아니라 영적 태만과 무관심을 지적합니다. '더 이상'(no longer)이라는 표현은 그들이 과거에는 더 나은 상태였음을 암시하며, 퇴보를 나타냅니다. 이러한 영적 둔함은 12-14절에서 더 구체적으로 묘사됩니다: 교사가 되어야 할 시점인데 오히려 기초를 다시 배워야 하는 상태, 영적 유아기에 머물러 있는 상태입니다. 저자는 이러한 냉철한 진단을 통해 독자들을 각성시키고 영적 성숙으로 나아가도록 자극합니다.",
      cross_references: ["Hebrews 6:12", "1 Corinthians 3:1-3", "2 Peter 3:16"]
    },
    korean_translation: {
      natural_translation: "이에 관하여 우리가 할 말이 많으나, 너희가 듣는 것이 둔하므로 설명하기 어렵습니다.",
      translation_notes: "교리 설명에서 권면으로 전환. 독자들의 영적 둔함을 직접적으로 지적."
    },
    special_explanation: {
      explanation_type: "수사적 전략",
      content: "이 구절은 저자의 능숙한 수사적 기법을 보여줍니다. 멜기세덱에 대한 논의를 잠시 중단하고 독자들의 영적 상태를 질책함으로써, 저자는 두 가지 목적을 달성합니다: (1) 독자들을 각성시켜 영적 성숙을 추구하게 하고, (2) 7장에서 멜기세덱 논의를 재개할 때 더 주의 깊게 듣도록 준비시킵니다. '할 말이 많으나'는 독자들의 호기심을 자극하는 동시에, 그들의 영적 둔함이 깊은 진리를 받아들이는 데 장애가 됨을 경고합니다."
    }
  },
  {
    reference: "Hebrews 5:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기대되는 영적 성숙",
        original_text: "In fact, though by this time you ought to be teachers",
        korean_translation: "사실 때가 오래되어 너희가 마땅히 선생이 되었어야 할 터인데",
        grammatical_explanation: "'by this time'은 충분한 시간 경과를 나타냄. 'ought to be'는 기대되는 상태."
      },
      {
        sequence_order: 2,
        semantic_classification: "실제 영적 유아 상태",
        original_text: "you need someone to teach you the elementary truths of God's word all over again",
        korean_translation: "너희가 다시 하나님의 말씀의 초보적 원리를 누구에게서 배워야 할 처지입니다",
        grammatical_explanation: "'need someone to teach you'는 의존적 상태. 'all over again'은 퇴보를 강조."
      },
      {
        sequence_order: 3,
        semantic_classification: "젖과 단단한 음식의 비유",
        original_text: "You need milk, not solid food!",
        korean_translation: "젖이나 먹어야 하지 단단한 음식은 못 먹을 처지입니다",
        grammatical_explanation: "감탄문으로 저자의 좌절과 강조를 표현. 'milk'와 'solid food'는 영적 성숙도의 비유."
      }
    ],
    vocabulary: [
      {
        word: "by this time",
        ipa_pronunciation: "/baɪ ðɪs taɪm/",
        korean_pronunciation: "바이 디스 타임",
        part_of_speech: "부사구",
        definition_korean: "이때쯤, 지금까지",
        usage_note: "충분한 시간이 경과했음을 나타냄."
      },
      {
        word: "ought to",
        ipa_pronunciation: "/ɔːt tuː/",
        korean_pronunciation: "오트 투",
        part_of_speech: "조동사",
        definition_korean: "~해야 한다",
        usage_note: "도덕적 의무나 기대를 나타냄."
      },
      {
        word: "elementary truths",
        ipa_pronunciation: "/ˌelɪˈmentri truːθs/",
        korean_pronunciation: "엘리멘트리 트루스",
        part_of_speech: "명사구",
        definition_korean: "초보적 원리, 기초 진리",
        usage_note: "가장 기본적인 가르침."
      },
      {
        word: "all over again",
        ipa_pronunciation: "/ɔːl ˈoʊvər əˈɡen/",
        korean_pronunciation: "올 오버 어겐",
        part_of_speech: "부사구",
        definition_korean: "처음부터 다시",
        usage_note: "반복과 퇴보를 나타냄."
      },
      {
        word: "milk",
        ipa_pronunciation: "/mɪlk/",
        korean_pronunciation: "밀크",
        part_of_speech: "명사",
        definition_korean: "젖",
        usage_note: "유아를 위한 음식, 기초적 가르침의 비유."
      },
      {
        word: "solid food",
        ipa_pronunciation: "/ˈsɑːlɪd fuːd/",
        korean_pronunciation: "솔리드 푸드",
        part_of_speech: "명사구",
        definition_korean: "단단한 음식",
        usage_note: "성숙한 이를 위한 음식, 깊은 진리의 비유."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 독자들의 영적 정체와 퇴보를 신랄하게 비판합니다. '이때쯤'(by this time)은 그들이 기독교인이 된 지 상당한 시간이 흘렀음을 의미하며, 그 시간이면 충분히 성숙하여 다른 이들을 가르칠 수 있어야 합니다. '선생'(teachers)이 되어야 한다는 것은 공식적 교직을 의미하기보다는, 복음을 이해하고 다른 이들과 나눌 수 있는 성숙한 신자를 가리킵니다. 그러나 실제로는 정반대입니다. 그들은 기초도 다시 배워야 하는 상태로 퇴보했습니다. '초보적 원리'는 6:1-2에서 구체적으로 나열될 기독교의 기본 교리들입니다. '젖'과 '단단한 음식'의 비유는 바울도 사용했으며(고전 3:2), 영적 성숙도의 차이를 생생하게 표현합니다. 젖은 소화하기 쉽지만 영양가가 제한적인 반면, 단단한 음식은 씹는 능력이 필요하지만 풍부한 영양을 제공합니다. 저자가 말하고자 하는 멜기세덱의 제사장직에 대한 깊은 진리는 '단단한 음식'에 해당하지만, 독자들은 아직 '젖'도 제대로 소화하지 못하는 상태입니다.",
      cross_references: ["1 Corinthians 3:1-3", "1 Peter 2:2", "Hebrews 6:1-2"]
    },
    korean_translation: {
      natural_translation: "사실 때가 오래되어 너희가 마땅히 선생이 되었어야 할 터인데, 너희가 다시 하나님의 말씀의 초보적 원리를 누구에게서 배워야 할 처지입니다. 젖이나 먹어야 하지 단단한 음식은 못 먹을 처지입니다!",
      translation_notes: "기대(선생)와 현실(학생)의 극명한 대조를 통해 영적 퇴보를 강조."
    },
    special_explanation: {
      explanation_type: "목회적 적용",
      content: "이 구절은 신앙 생활의 기간과 영적 성숙이 반드시 비례하지 않음을 보여줍니다. 오랜 신앙 생활에도 불구하고 기초에 머물러 있거나 오히려 퇴보할 수 있습니다. 저자의 직접적인 질책은 사랑의 표현이기도 합니다. 영적 침체를 방치하는 것이 아니라 각성시켜 성장으로 나아가게 하려는 의도입니다. '선생'이 되어야 한다는 기대는 모든 성숙한 신자가 복음을 이해하고 나눌 수 있어야 함을 시사합니다."
    }
  },
  {
    reference: "Hebrews 5:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "젖을 먹는 자의 상태",
        original_text: "Anyone who lives on milk, being still an infant, is not acquainted with the teaching about righteousness",
        korean_translation: "젖을 먹는 자는 아직 어린 아이이므로 의의 말씀을 경험하지 못합니다",
        grammatical_explanation: "'who lives on milk'는 관계절로 영적 유아를 지칭. 'being still an infant'는 분사구문으로 이유 설명. 'not acquainted with'는 경험 부족."
      }
    ],
    vocabulary: [
      {
        word: "lives on",
        ipa_pronunciation: "/lɪvz ɑːn/",
        korean_pronunciation: "리브즈 온",
        part_of_speech: "동사구",
        definition_korean: "~을 먹고 살다, ~에 의존하다",
        usage_note: "주된 영양원으로 삼음."
      },
      {
        word: "infant",
        ipa_pronunciation: "/ˈɪnfənt/",
        korean_pronunciation: "인펀트",
        part_of_speech: "명사",
        definition_korean: "유아, 어린 아이",
        usage_note: "아직 미성숙한 단계."
      },
      {
        word: "acquainted with",
        ipa_pronunciation: "/əˈkweɪntɪd wɪð/",
        korean_pronunciation: "어퀘인티드 위드",
        part_of_speech: "형용사구",
        definition_korean: "~에 익숙한, ~을 경험한",
        usage_note: "직접적 경험을 통한 앎."
      },
      {
        word: "teaching",
        ipa_pronunciation: "/ˈtiːtʃɪŋ/",
        korean_pronunciation: "티칭",
        part_of_speech: "명사",
        definition_korean: "가르침, 교리",
        usage_note: "전달되는 진리의 내용."
      },
      {
        word: "righteousness",
        ipa_pronunciation: "/ˈraɪtʃəsnəs/",
        korean_pronunciation: "라이처스니스",
        part_of_speech: "명사",
        definition_korean: "의, 정의",
        usage_note: "하나님의 기준에 맞는 올바름."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 영적 유아 상태의 특징을 설명합니다. '젖을 먹는 자'는 12절의 비유를 이어가며, 기초적 진리에만 머물러 있는 신자를 가리킵니다. '어린 아이'(infant)는 연령이 아니라 영적 성숙도를 나타냅니다. 핵심은 '의의 말씀을 경험하지 못한다'는 표현입니다. '의의 말씀'(teaching about righteousness)은 여러 해석이 가능합니다: (1) 의롭게 사는 법에 대한 가르침, (2) 하나님의 의에 관한 깊은 교리, (3) 올바른 판단력을 기르는 가르침. 문맥상 세 번째 해석이 가장 적합해 보이며, 14절의 '선악을 분별하는 능력'과 연결됩니다. '경험하지 못한다'(not acquainted with)로 번역된 그리스어 'apeiros'는 '경험이 없는', '익숙하지 않은'을 의미합니다. 영적 유아는 단지 지식이 부족한 것이 아니라, 진리를 실제 삶에 적용하고 분별하는 경험이 없습니다. 이는 단순히 듣기만 하고 실천하지 않는 자(야고보서 1:22-25)와 유사합니다.",
      cross_references: ["James 1:22-25", "1 Corinthians 3:1-2", "1 Peter 2:2"]
    },
    korean_translation: {
      natural_translation: "젖을 먹는 자는 아직 어린 아이이므로 의의 말씀을 경험하지 못합니다.",
      translation_notes: "영적 유아 상태와 의의 말씀에 대한 경험 부족을 인과관계로 설명."
    },
    special_explanation: {
      explanation_type: "해석적 논점",
      content: "'의의 말씀'(teaching about righteousness)의 정확한 의미에 대해 학자들의 견해가 나뉩니다. 일부는 칭의 교리와 같은 깊은 신학적 진리로 보지만, 문맥상 14절의 '선악을 분별하는 능력'과 연결하여 도덕적 판단력이나 분별력으로 보는 것이 더 적합합니다. 영적으로 성숙한 자는 하나님의 말씀을 통해 옳고 그름을 분별할 수 있지만, 유아는 아직 이러한 분별력이 발달하지 않았습니다."
    }
  },
  {
    reference: "Hebrews 5:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성숙한 자의 특징",
        original_text: "But solid food is for the mature, who by constant use have trained themselves to distinguish good from evil",
        korean_translation: "단단한 음식은 장성한 자의 것이니, 그들은 지속적인 연습으로 선악을 분별하도록 자신의 감각을 훈련시킨 사람들입니다",
        grammatical_explanation: "'for the mature'는 단단한 음식의 대상. 'who by constant use have trained themselves'는 관계절로 성숙한 자의 특징. 'to distinguish good from evil'은 목적."
      }
    ],
    vocabulary: [
      {
        word: "mature",
        ipa_pronunciation: "/məˈtʃʊr/",
        korean_pronunciation: "머츄어",
        part_of_speech: "형용사",
        definition_korean: "성숙한, 장성한",
        usage_note: "완전히 발달한 상태."
      },
      {
        word: "constant use",
        ipa_pronunciation: "/ˈkɑːnstənt juːs/",
        korean_pronunciation: "콘스턴트 유스",
        part_of_speech: "명사구",
        definition_korean: "지속적인 사용, 계속된 연습",
        usage_note: "반복적이고 꾸준한 실천."
      },
      {
        word: "trained",
        ipa_pronunciation: "/treɪnd/",
        korean_pronunciation: "트레인드",
        part_of_speech: "동사(과거분사)",
        definition_korean: "훈련시키다",
        usage_note: "의도적인 연습을 통해 능력을 기름."
      },
      {
        word: "distinguish",
        ipa_pronunciation: "/dɪˈstɪŋɡwɪʃ/",
        korean_pronunciation: "디스팅귀시",
        part_of_speech: "동사",
        definition_korean: "구별하다, 분별하다",
        usage_note: "차이를 인식하고 판단함."
      },
      {
        word: "good",
        ipa_pronunciation: "/ɡʊd/",
        korean_pronunciation: "굿",
        part_of_speech: "명사",
        definition_korean: "선",
        usage_note: "도덕적으로 옳은 것."
      },
      {
        word: "evil",
        ipa_pronunciation: "/ˈiːvl/",
        korean_pronunciation: "이블",
        part_of_speech: "명사",
        definition_korean: "악",
        usage_note: "도덕적으로 그른 것."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 영적 성숙의 특징을 적극적으로 제시합니다. '단단한 음식'은 멜기세덱의 제사장직과 같은 깊은 진리를 가리키며, 이는 '장성한 자'(mature)를 위한 것입니다. 성숙의 핵심은 '선악을 분별하는 능력'입니다. 이는 창세기 3:5의 선악과 사건을 떠올리게 하는데, 아담과 하와는 불순종을 통해 선악을 알게 되었지만, 여기서는 순종과 훈련을 통해 분별력을 얻습니다. '지속적인 사용'(constant use)으로 번역된 그리스어 'hexis'는 '습관', '연습', '훈련'을 의미하며, 운동선수의 훈련을 연상시킵니다. 영적 성숙은 자동적으로 오는 것이 아니라 꾸준한 실천과 훈련의 결과입니다. '감각을 훈련시킨다'는 표현은 하나님의 말씀을 반복적으로 묵상하고 실천함으로써 영적 분별력이 예민해짐을 의미합니다. 이는 시편 119:99-100의 '주의 증거들을 묵상하므로 내가 나의 스승보다 명철하며'라는 말씀과 연결됩니다. 선악 분별은 단순한 지적 판단이 아니라, 하나님의 뜻에 맞는 것과 그렇지 않은 것을 영적으로 식별하는 능력입니다.",
      cross_references: ["Genesis 3:5", "Psalm 119:99-100", "Philippians 1:9-10", "1 Thessalonians 5:21-22"]
    },
    korean_translation: {
      natural_translation: "단단한 음식은 장성한 자의 것이니, 그들은 지속적인 연습으로 선악을 분별하도록 자신의 감각을 훈련시킨 사람들입니다.",
      translation_notes: "영적 성숙의 특징을 훈련과 분별력으로 정의. 12-13절의 유아 상태와 대조."
    },
    special_explanation: {
      explanation_type: "실천적 적용",
      content: "이 구절은 영적 성숙이 수동적 수용이 아니라 능동적 훈련의 결과임을 강조합니다. '지속적인 사용'은 하나님의 말씀을 단지 듣기만 하는 것이 아니라 반복적으로 묵상하고 실천하는 것을 의미합니다. 선악 분별 능력은 하루아침에 생기지 않으며, 마치 운동선수가 근육을 훈련하듯이 꾸준한 영적 훈련을 통해 발달합니다. 이는 6:1에서 '완전한 데로 나아가자'는 권면의 기초가 됩니다."
    }
  },

  // ==================== HEBREWS 6 ====================
  {
    reference: "Hebrews 6:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성숙으로의 전진 권면",
        original_text: "Therefore let us move beyond the elementary teachings about Christ and be taken forward to maturity",
        korean_translation: "그러므로 우리가 그리스도에 관한 초보적 가르침을 넘어서 성숙한 데로 나아갑시다",
        grammatical_explanation: "'Therefore'는 5:11-14의 결론. 'let us move beyond'는 권면. 'be taken forward to maturity'는 수동태로 하나님의 인도하심을 암시."
      },
      {
        sequence_order: 2,
        semantic_classification: "기초를 다시 놓지 말 것",
        original_text: "not laying again the foundation of repentance from acts that lead to death, and of faith in God",
        korean_translation: "죽음에 이르게 하는 행위에서 돌이키는 회개와 하나님을 향한 믿음이라는 기초를 다시 놓지 말고",
        grammatical_explanation: "'not laying again'은 반복 금지. 'foundation'은 기초 교리들. 'of repentance... and of faith'는 두 가지 기초 요소."
      }
    ],
    vocabulary: [
      {
        word: "move beyond",
        ipa_pronunciation: "/muːv bɪˈjɑːnd/",
        korean_pronunciation: "무브 비욘드",
        part_of_speech: "동사구",
        definition_korean: "넘어서다, 나아가다",
        usage_note: "이전 단계를 벗어나 앞으로 전진함."
      },
      {
        word: "elementary teachings",
        ipa_pronunciation: "/ˌelɪˈmentri ˈtiːtʃɪŋz/",
        korean_pronunciation: "엘리멘트리 티칭즈",
        part_of_speech: "명사구",
        definition_korean: "초보적 가르침",
        usage_note: "기초 단계의 교리."
      },
      {
        word: "maturity",
        ipa_pronunciation: "/məˈtʃʊrəti/",
        korean_pronunciation: "머츄리티",
        part_of_speech: "명사",
        definition_korean: "성숙, 완전함",
        usage_note: "완전히 발달한 상태."
      },
      {
        word: "laying",
        ipa_pronunciation: "/ˈleɪɪŋ/",
        korean_pronunciation: "레잉",
        part_of_speech: "동명사",
        definition_korean: "놓는 것",
        usage_note: "기초를 세우는 행위."
      },
      {
        word: "foundation",
        ipa_pronunciation: "/faʊnˈdeɪʃən/",
        korean_pronunciation: "파운데이션",
        part_of_speech: "명사",
        definition_korean: "기초, 토대",
        usage_note: "건물의 기반이 되는 부분."
      },
      {
        word: "repentance",
        ipa_pronunciation: "/rɪˈpentəns/",
        korean_pronunciation: "리펜턴스",
        part_of_speech: "명사",
        definition_korean: "회개",
        usage_note: "죄로부터 돌이킴."
      },
      {
        word: "acts that lead to death",
        ipa_pronunciation: "/ækts ðæt liːd tuː deθ/",
        korean_pronunciation: "액츠 댓 리드 투 데스",
        part_of_speech: "명사구",
        definition_korean: "죽음에 이르게 하는 행위",
        usage_note: "영적 죽음을 초래하는 죄."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "6장은 5장의 권면을 이어받아 성숙으로의 전진을 촉구합니다. '그러므로'(Therefore)는 5:11-14의 영적 유아 상태 진단에 대한 응답입니다. '성숙한 데로 나아가자'(move forward to maturity)는 5:14의 '장성한 자'(mature)와 연결되며, 정체 상태를 벗어나 적극적으로 전진할 것을 권면합니다. 흥미롭게도 '나아가자'는 수동태('be taken forward')로 표현되어, 성숙이 인간의 노력만이 아니라 하나님의 은혜로 인도됨을 암시합니다. '기초를 다시 놓지 말고'는 기초 교리를 무시하라는 것이 아니라, 기초에만 머물지 말고 그 위에 건물을 세워가라는 의미입니다. 마치 건축에서 기초를 놓은 후 그 위에 건물을 올리듯이, 신앙의 기초 위에 더 깊은 진리를 쌓아가야 합니다. '회개'와 '믿음'은 기독교 복음의 가장 기본적인 두 기둥입니다(행 20:21). '죽음에 이르게 하는 행위'는 영적 죽음을 초래하는 죄를 가리키며, '행위'(works)라는 표현은 율법주의적 행위와 대조될 수 있습니다.",
      cross_references: ["Acts 20:21", "Hebrews 5:14", "1 Corinthians 3:10-15"]
    },
    korean_translation: {
      natural_translation: "그러므로 우리가 그리스도에 관한 초보적 가르침을 넘어서 성숙한 데로 나아갑시다. 죽음에 이르게 하는 행위에서 돌이키는 회개와 하나님을 향한 믿음이라는 기초를 다시 놓지 말고",
      translation_notes: "5장의 권면에 대한 적극적 응답. 기초를 벗어나 성숙으로 전진할 것을 촉구."
    },
    special_explanation: {
      explanation_type: "신학적 의미",
      content: "이 구절은 기독교 교육의 점진성을 보여줍니다. 기초 교리는 필수적이지만, 거기에 머물러서는 안 됩니다. '기초를 다시 놓지 말고'는 기초를 부정하는 것이 아니라, 이미 놓인 기초 위에 건물을 세우라는 의미입니다. 바울도 고린도전서 3:10-11에서 그리스도라는 기초 위에 각자가 건물을 세워야 한다고 가르쳤습니다. 회개와 믿음은 기독교 복음의 핵심 메시지이며(행 20:21), 모든 신자의 출발점입니다."
    }
  },
  {
    reference: "Hebrews 6:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "네 가지 기초 교리 나열",
        original_text: "instruction about cleansing rites, the laying on of hands, the resurrection of the dead, and eternal judgment",
        korean_translation: "세례들에 관한 가르침과 안수와 죽은 자의 부활과 영원한 심판에 관한 교리의 기초를 다시 놓지 말고",
        grammatical_explanation: "네 가지 명사구가 병렬 구조로 나열됨. 1절의 '기초'를 설명하는 추가 요소들."
      }
    ],
    vocabulary: [
      {
        word: "instruction",
        ipa_pronunciation: "/ɪnˈstrʌkʃən/",
        korean_pronunciation: "인스트럭션",
        part_of_speech: "명사",
        definition_korean: "가르침, 교훈",
        usage_note: "체계적인 교육."
      },
      {
        word: "cleansing rites",
        ipa_pronunciation: "/ˈklenzɪŋ raɪts/",
        korean_pronunciation: "클렌징 라이츠",
        part_of_speech: "명사구",
        definition_korean: "세례들, 정결 의식",
        usage_note: "종교적 정화 의식."
      },
      {
        word: "laying on of hands",
        ipa_pronunciation: "/ˈleɪɪŋ ɑːn əv hændz/",
        korean_pronunciation: "레잉 온 오브 핸즈",
        part_of_speech: "명사구",
        definition_korean: "안수",
        usage_note: "축복이나 성령 부여를 위한 의식."
      },
      {
        word: "resurrection",
        ipa_pronunciation: "/ˌrezəˈrekʃən/",
        korean_pronunciation: "레저렉션",
        part_of_speech: "명사",
        definition_korean: "부활",
        usage_note: "죽음에서 다시 살아남."
      },
      {
        word: "eternal judgment",
        ipa_pronunciation: "/ɪˈtɜːrnl ˈdʒʌdʒmənt/",
        korean_pronunciation: "이터널 저지먼트",
        part_of_speech: "명사구",
        definition_korean: "영원한 심판",
        usage_note: "최후의 심판."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 1절에서 시작된 기초 교리 목록을 완성합니다. 총 여섯 가지 기초 교리가 제시됩니다: (1) 회개, (2) 믿음, (3) 세례들, (4) 안수, (5) 부활, (6) 영원한 심판. '세례들'(cleansing rites)로 번역된 그리스어는 복수형으로, 단순히 기독교 세례만이 아니라 유대교의 다양한 정결 의식들도 포함할 수 있습니다. 초대 교회는 유대교에서 기독교로 전환하는 과정에서 두 종류의 세례(유대교 정결 의식과 기독교 세례)의 차이를 가르쳤을 것입니다. '안수'는 초대 교회에서 다양한 목적으로 사용되었습니다: 성령 부여(행 8:17, 19:6), 병 고침(행 9:17), 사역 임명(행 6:6, 13:3). '죽은 자의 부활'은 초대 기독교의 핵심 교리로, 그리스도의 부활과 미래의 일반 부활을 포함합니다(고전 15장). '영원한 심판'은 최후 심판의 교리로, 모든 인간이 하나님 앞에 서서 심판받을 것을 가르칩니다(계 20:11-15). 이 여섯 가지는 초대 교회 신앙 교육(catechesis)의 기본 커리큘럼으로 추정되며, 세례 전 교육에서 다루어졌을 것입니다.",
      cross_references: ["Acts 8:17", "Acts 19:6", "1 Corinthians 15:1-58", "Revelation 20:11-15"]
    },
    korean_translation: {
      natural_translation: "세례들에 관한 가르침과 안수와 죽은 자의 부활과 영원한 심판에 관한 교리의 기초를 다시 놓지 말고",
      translation_notes: "여섯 가지 기초 교리의 후반부(3-6번) 제시. 1절과 함께 완전한 목록 형성."
    },
    special_explanation: {
      explanation_type: "역사적 배경",
      content: "'세례들'(복수)이라는 표현은 초대 교회의 독특한 상황을 반영합니다. 유대교 배경의 신자들은 유대교의 다양한 정결 의식과 기독교 세례의 차이를 이해해야 했습니다. 또한 요한의 세례와 예수 이름으로의 세례(행 19:1-7)도 구별되어야 했습니다. 이 여섯 가지 교리는 초대 교회의 기본 신앙 교육 내용으로, 세례 전 준비 과정에서 가르쳐진 것으로 보입니다."
    }
  },
  {
    reference: "Hebrews 6:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님의 허락 하에 전진",
        original_text: "And God permitting, we will do so",
        korean_translation: "하나님께서 허락하시면 우리가 이것을 행하리라",
        grammatical_explanation: "'God permitting'은 조건절. 'we will do so'는 1절의 성숙으로 나아가는 것을 지칭."
      }
    ],
    vocabulary: [
      {
        word: "permitting",
        ipa_pronunciation: "/pərˈmɪtɪŋ/",
        korean_pronunciation: "퍼미팅",
        part_of_speech: "동사(현재분사)",
        definition_korean: "허락하다",
        usage_note: "동의하거나 가능하게 함."
      },
      {
        word: "do so",
        ipa_pronunciation: "/duː soʊ/",
        korean_pronunciation: "두 소",
        part_of_speech: "동사구",
        definition_korean: "그렇게 하다",
        usage_note: "앞서 언급된 행동을 대신하는 표현."
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 짧은 구절은 성숙으로의 전진이 인간의 노력만이 아니라 하나님의 허락과 은혜에 달려 있음을 겸손하게 인정합니다. '하나님께서 허락하시면'(God permitting)이라는 표현은 바울도 자주 사용했으며(고전 16:7, 롬 15:32), 모든 계획이 하나님의 주권 아래 있음을 인정하는 경건한 태도입니다. 야고보서 4:13-15도 '주의 뜻이면'이라고 말해야 한다고 가르칩니다. '우리가 이것을 행하리라'는 1절의 '성숙한 데로 나아가자'를 가리키며, 저자는 독자들과 함께 이 여정을 가기를 원합니다. 이 구절은 또한 4-6절의 엄중한 경고로 전환하는 교량 역할을 합니다. 성숙으로 나아가는 것은 당연한 것이 아니며, 하나님의 은혜가 필요하고, 때로는 배교의 위험도 있음을 암시합니다.",
      cross_references: ["1 Corinthians 16:7", "Romans 15:32", "James 4:13-15"]
    },
    korean_translation: {
      natural_translation: "하나님께서 허락하시면 우리가 이것을 행하리라.",
      translation_notes: "성숙으로의 전진이 하나님의 주권 아래 있음을 겸손하게 인정."
    },
    special_explanation: {
      explanation_type: "문학적 기능",
      content: "이 짧은 구절은 두 가지 기능을 합니다: (1) 1-2절의 권면을 겸손하게 마무리하며, (2) 4-8절의 엄중한 경고로 전환하는 교량 역할을 합니다. 저자는 성숙으로 나아가는 것이 자동적이지 않으며, 하나님의 은혜와 독자들의 순종이 모두 필요함을 암시합니다. 이는 다음 단락의 배교 경고를 도입하는 효과적인 전환입니다."
    }
  }
];

async function main() {
  console.log('='.repeat(60));
  console.log('히브리서 5-7장 분석 데이터 저장 시작');
  console.log('총 구절 수:', hebrewsAnalyses.length);
  console.log('='.repeat(60));

  let successCount = 0;
  let failCount = 0;

  for (const analysis of hebrewsAnalyses) {
    const success = await saveAnalysisToDb(analysis);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    // Rate limiting: 3초 대기
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  console.log('\n' + '='.repeat(60));
  console.log(`저장 완료: ${successCount}개 성공, ${failCount}개 실패`);
  console.log('='.repeat(60));
}

main();
