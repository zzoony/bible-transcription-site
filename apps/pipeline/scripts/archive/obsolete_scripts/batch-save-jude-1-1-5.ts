#!/usr/bin/env tsx
/**
 * Jude 1:1-5 분석 결과를 데이터베이스에 저장
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

const analyses = [
  {
    reference: "Jude 1:1",
    sentence_structures: [
      {
        original: "Jude, a servant of Jesus Christ and a brother of James",
        korean: "예수 그리스도의 종이며 야고보의 형제인 유다가",
        classification: "발신자 소개 (동격 명사구로 신분 표현)"
      },
      {
        original: "To those who have been called",
        korean: "부르심을 받은 자들에게",
        classification: "수신자 지정 (과거분사 수동태로 하나님의 주권적 부르심 강조)"
      },
      {
        original: "who are loved in God the Father",
        korean: "하나님 아버지 안에서 사랑받는",
        classification: "수신자 특징 1 (현재 수동태로 지속적 사랑 표현)"
      },
      {
        original: "and kept for Jesus Christ",
        korean: "예수 그리스도를 위해 지켜진",
        classification: "수신자 특징 2 (과거분사 수동태로 보호받는 상태 강조)"
      }
    ],
    vocabulary: [
      { word: "servant", ipa: "/ˈsɜːrvənt/", korean_pronunciation: "서번트", meaning: "종, 섬기는 자" },
      { word: "called", ipa: "/kɔːld/", korean_pronunciation: "콜드", meaning: "부르심을 받은" },
      { word: "loved", ipa: "/lʌvd/", korean_pronunciation: "러브드", meaning: "사랑받는" },
      { word: "kept", ipa: "/kɛpt/", korean_pronunciation: "켑트", meaning: "보호받는, 지켜진" }
    ],
    contextual_explanation: {
      historical: "유다서는 신약에서 가장 짧은 서신 중 하나로, 유다는 자신을 '예수 그리스도의 종이자 야고보의 형제'로 소개합니다.",
      theological: "수신자들은 '부르심을 받고, 하나님 아버지 안에서 사랑받으며, 예수 그리스도를 위해 보호받는' 자들로, 세 가지 수동태 표현은 모두 하나님의 주권적 은혜를 강조합니다.",
      literary: "야고보는 예루살렘 교회의 지도자였으므로, 이는 유다의 권위를 확립하는 동시에 겸손을 표현합니다."
    },
    korean_translation: {
      text: "예수 그리스도의 종이며 야고보의 형제인 유다가, 부르심을 받아 하나님 아버지 안에서 사랑받고 예수 그리스도를 위해 지켜진 여러분에게 편지합니다."
    },
    special_explanation: {
      note: "'kept for Jesus Christ'는 종말론적 의미를 담고 있어, 신자들이 그리스도의 재림까지 보호받는다는 확신을 전달합니다. 세 가지 과거분사(called, loved, kept)는 완료된 행위이지만 현재에도 유효한 상태를 나타냅니다."
    }
  },
  {
    reference: "Jude 1:2",
    sentence_structures: [
      {
        original: "Mercy, peace and love be yours in abundance",
        korean: "자비와 평화와 사랑이 여러분에게 넘치게 하소서",
        classification: "축복 기원 (접속법 현재형으로 간절한 바람 표현)"
      }
    ],
    vocabulary: [
      { word: "mercy", ipa: "/ˈmɜːrsi/", korean_pronunciation: "머시", meaning: "자비, 긍휼" },
      { word: "peace", ipa: "/piːs/", korean_pronunciation: "피스", meaning: "평화, 평안" },
      { word: "abundance", ipa: "/əˈbʌndəns/", korean_pronunciation: "어번던스", meaning: "풍성함, 넘침" }
    ],
    contextual_explanation: {
      historical: "전형적인 서신 인사말로, 자비(mercy), 평화(peace), 사랑(love)의 삼중 축복을 기원합니다.",
      theological: "'in abundance'는 단순한 소유가 아니라 넘치도록 많은 상태를 의미하며, 하나님의 무한한 은혜를 암시합니다.",
      literary: "이 세 가지 덕목은 신약 서신에서 자주 나타나는 주제로, 기독교 공동체의 핵심 가치를 대표합니다."
    },
    korean_translation: {
      text: "자비와 평화와 사랑이 여러분에게 넘치게 하소서."
    },
    special_explanation: {
      note: "'be yours'는 접속법으로, 단순한 바람이 아니라 하나님께 간구하는 기도의 형식입니다. 유다서는 매우 짧은 서신이므로, 인사말도 간결하지만 신학적으로 풍성합니다."
    }
  },
  {
    reference: "Jude 1:3",
    sentence_structures: [
      {
        original: "Dear friends, although I was very eager to write to you about the salvation we share",
        korean: "사랑하는 여러분, 나는 우리가 함께 나누는 구원에 대해 여러분에게 편지하고 싶었지만",
        classification: "양보절 (원래 의도 설명)"
      },
      {
        original: "I felt compelled to write and urge you",
        korean: "권면하는 편지를 써야겠다는 의무감을 느꼈습니다",
        classification: "주절 (실제 집필 동기)"
      },
      {
        original: "to contend for the faith",
        korean: "믿음을 위해 싸우라고",
        classification: "목적 (독자들에게 요청하는 행동)"
      },
      {
        original: "that was once for all entrusted to God's holy people",
        korean: "하나님의 거룩한 백성에게 한 번에 영원히 맡겨진",
        classification: "관계절 (믿음의 성격 설명)"
      }
    ],
    vocabulary: [
      { word: "eager", ipa: "/ˈiːɡər/", korean_pronunciation: "이거", meaning: "간절히 원하는" },
      { word: "compelled", ipa: "/kəmˈpɛld/", korean_pronunciation: "컴펠드", meaning: "강요받은, 의무감을 느낀" },
      { word: "contend", ipa: "/kənˈtɛnd/", korean_pronunciation: "컨텐드", meaning: "싸우다, 변호하다" },
      { word: "entrusted", ipa: "/ɪnˈtrʌstɪd/", korean_pronunciation: "인트러스티드", meaning: "맡겨진" }
    ],
    contextual_explanation: {
      historical: "유다는 원래 구원에 관한 긍정적인 편지를 쓰려 했으나, 거짓 교사들의 침입으로 인해 급하게 경고의 서신을 쓰게 되었습니다.",
      theological: "'contend for the faith'는 군사적 이미지로, 믿음을 위해 적극적으로 싸우라는 의미입니다. 'once for all'(ἅπαξ)은 일회적이며 완전한 계시를 강조하며, 사도들을 통해 전달된 복음이 더 이상 추가나 변경이 필요 없음을 암시합니다.",
      literary: "이 구절은 유다서의 주제를 명확히 제시합니다: 전통적 믿음의 변호(defense of orthodoxy)."
    },
    korean_translation: {
      text: "사랑하는 여러분, 나는 우리가 함께 나누는 구원에 대해 여러분에게 편지하고 싶었지만, 하나님의 거룩한 백성에게 한 번에 영원히 맡겨진 믿음을 위해 싸우라고 권면하는 편지를 써야겠다는 의무감을 느꼈습니다."
    },
    special_explanation: {
      note: "'felt compelled'는 내적 강권을 의미하며, 성령의 인도하심을 암시할 수 있습니다. 'once for all'은 헬라어 ἅπαξ의 번역으로, 히브리서에서도 그리스도의 단번 제사를 설명할 때 사용됩니다."
    }
  },
  {
    reference: "Jude 1:4",
    sentence_structures: [
      {
        original: "For certain individuals whose condemnation was written about long ago have secretly slipped in among you",
        korean: "오래전에 정죄가 기록된 어떤 사람들이 몰래 여러분 가운데 들어왔기 때문입니다",
        classification: "이유 설명 (거짓 교사들의 침입)"
      },
      {
        original: "They are ungodly people",
        korean: "그들은 경건하지 않은 자들로서",
        classification: "정체 규정"
      },
      {
        original: "who pervert the grace of our God into a license for immorality",
        korean: "우리 하나님의 은혜를 음란의 구실로 바꾸고",
        classification: "잘못된 가르침 1 (관계절)"
      },
      {
        original: "and deny Jesus Christ our only Sovereign and Lord",
        korean: "우리의 유일한 주권자이시며 주이신 예수 그리스도를 부인합니다",
        classification: "잘못된 가르침 2 (관계절)"
      }
    ],
    vocabulary: [
      { word: "condemnation", ipa: "/ˌkɒndɛmˈneɪʃən/", korean_pronunciation: "콘뎀네이션", meaning: "정죄, 형벌" },
      { word: "slipped", ipa: "/slɪpt/", korean_pronunciation: "슬립트", meaning: "몰래 들어옴" },
      { word: "ungodly", ipa: "/ʌnˈɡɒdli/", korean_pronunciation: "언갓리", meaning: "경건하지 않은" },
      { word: "pervert", ipa: "/pərˈvɜːrt/", korean_pronunciation: "퍼버트", meaning: "왜곡하다" },
      { word: "license", ipa: "/ˈlaɪsəns/", korean_pronunciation: "라이선스", meaning: "허가증, 방종" },
      { word: "immorality", ipa: "/ˌɪməˈræləti/", korean_pronunciation: "이머랠러티", meaning: "부도덕" },
      { word: "sovereign", ipa: "/ˈsɒvrɪn/", korean_pronunciation: "소브린", meaning: "주권자" }
    ],
    contextual_explanation: {
      historical: "유다는 교회 내부로 몰래 침투한 거짓 교사들을 고발합니다. 이들의 정죄는 '오래전에 기록되었다'고 하는데, 이는 구약의 경고(예: 신명기, 에스겔)나 사도들의 예언을 가리킬 수 있습니다.",
      theological: "이들은 하나님의 은혜를 성적 방종의 구실로 삼는 극단적인 자유주의(antinomianism)를 가르쳤으며, 예수 그리스도의 주권을 부인했습니다. 'Sovereign and Lord'는 정치적·신학적 권위를 모두 포괄하는 표현입니다.",
      literary: "유다서는 베드로후서 2장과 매우 유사한 내용을 담고 있어, 공통 자료를 사용했거나 한쪽이 다른 쪽을 참고했을 가능성이 있습니다."
    },
    korean_translation: {
      text: "오래전에 정죄가 기록된 어떤 사람들이 몰래 여러분 가운데 들어왔기 때문입니다. 그들은 경건하지 않은 자들로서, 우리 하나님의 은혜를 음란의 구실로 바꾸고, 우리의 유일한 주권자이시며 주이신 예수 그리스도를 부인합니다."
    },
    special_explanation: {
      note: "'license for immorality'는 율법폐기론(antinomianism)을 암시하며, 초대교회가 직면한 윤리적 도전을 보여줍니다. 'deny Jesus Christ'는 교리적 이단과 실천적 배교를 모두 포함할 수 있습니다."
    }
  },
  {
    reference: "Jude 1:5",
    sentence_structures: [
      {
        original: "Though you already know all this",
        korean: "여러분이 이 모든 것을 이미 알고 있지만",
        classification: "양보절 (독자들의 지식 인정)"
      },
      {
        original: "I want to remind you",
        korean: "나는 여러분에게 상기시키고 싶습니다",
        classification: "주절 (저자의 의도)"
      },
      {
        original: "that the Lord at one time delivered his people out of Egypt",
        korean: "주님께서 한때 자기 백성을 애굽에서 구원하셨지만",
        classification: "명사절 1 (하나님의 구원 행위)"
      },
      {
        original: "but later destroyed those who did not believe",
        korean: "나중에 믿지 않은 자들을 멸망시키셨습니다",
        classification: "명사절 2 (하나님의 심판 행위, 대조)"
      }
    ],
    vocabulary: [
      { word: "remind", ipa: "/rɪˈmaɪnd/", korean_pronunciation: "리마인드", meaning: "상기시키다" },
      { word: "delivered", ipa: "/dɪˈlɪvərd/", korean_pronunciation: "딜리버드", meaning: "구출하다" },
      { word: "destroyed", ipa: "/dɪˈstrɔɪd/", korean_pronunciation: "디스트로이드", meaning: "멸망시키다" }
    ],
    contextual_explanation: {
      historical: "유다는 출애굽 사건을 통해 하나님의 구원과 심판이라는 이중적 주제를 제시합니다. 이스라엘 백성은 애굽에서 구원받았지만, 광야에서 불신앙으로 인해 대부분 멸망했습니다(민수기 14장).",
      theological: "'already know'는 독자들이 이미 구약 역사를 알고 있음을 전제하지만, 'remind'는 그 의미를 현재 상황에 적용하기 위함입니다. 이는 거짓 교사들도 초기에는 하나님의 은혜를 경험했지만, 불신앙으로 심판받을 것임을 경고하는 예표입니다.",
      literary: "유다는 이어서 타락한 천사들(1:6)과 소돔과 고모라(1:7)의 예시를 추가하여 삼중 경고 패턴을 완성합니다."
    },
    korean_translation: {
      text: "여러분이 이 모든 것을 이미 알고 있지만, 나는 여러분에게 상기시키고 싶습니다. 주님께서 한때 자기 백성을 애굽에서 구원하셨지만, 나중에 믿지 않은 자들을 멸망시키셨습니다."
    },
    special_explanation: {
      note: "'though you already know'는 교훈적 수사법으로, 새로운 정보보다는 기억의 활성화를 목표로 합니다. 출애굽-광야 내러티브는 신약에서 배교와 불신앙의 경고로 자주 사용됩니다(고린도전서 10:1-13, 히브리서 3-4장)."
    }
  }
];

async function saveAnalyses() {
  console.log('\n=== Jude 1:1-5 분석 결과 저장 시작 ===\n');

  for (const analysis of analyses) {
    try {
      // 1. verse_id 가져오기
      const { data: verse, error: verseError } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', analysis.reference)
        .single();

      if (verseError || !verse) {
        console.error(`❌ ${analysis.reference} - 구절을 찾을 수 없습니다:`, verseError);
        continue;
      }

      const verseId = verse.id;

      // 2. sentence_structures 저장
      for (const structure of analysis.sentence_structures) {
        const { error } = await supabase
          .from('sentence_structures')
          .insert({
            verse_id: verseId,
            original_sentence: structure.original,
            korean_translation: structure.korean,
            classification: structure.classification
          });

        if (error) {
          console.error(`❌ ${analysis.reference} - sentence_structures 저장 실패:`, error);
        }
      }

      // 3. vocabulary 저장
      for (const vocab of analysis.vocabulary) {
        const { error } = await supabase
          .from('vocabulary')
          .insert({
            verse_id: verseId,
            word: vocab.word,
            ipa_pronunciation: vocab.ipa,
            korean_pronunciation: vocab.korean_pronunciation,
            meaning: vocab.meaning
          });

        if (error) {
          console.error(`❌ ${analysis.reference} - vocabulary 저장 실패:`, error);
        }
      }

      // 4. contextual_explanations 저장
      const { error: contextError } = await supabase
        .from('contextual_explanations')
        .insert({
          verse_id: verseId,
          historical_context: analysis.contextual_explanation.historical,
          theological_context: analysis.contextual_explanation.theological,
          literary_context: analysis.contextual_explanation.literary
        });

      if (contextError) {
        console.error(`❌ ${analysis.reference} - contextual_explanations 저장 실패:`, contextError);
      }

      // 5. korean_translations 저장
      const { error: translationError } = await supabase
        .from('korean_translations')
        .insert({
          verse_id: verseId,
          translation_text: analysis.korean_translation.text
        });

      if (translationError) {
        console.error(`❌ ${analysis.reference} - korean_translations 저장 실패:`, translationError);
      }

      // 6. special_explanations 저장
      const { error: specialError } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          explanation_text: analysis.special_explanation.note
        });

      if (specialError) {
        console.error(`❌ ${analysis.reference} - special_explanations 저장 실패:`, specialError);
      }

      // 7. analysis_completed 플래그 업데이트
      const { error: updateError } = await supabase
        .from('verses')
        .update({ analysis_completed: true })
        .eq('id', verseId);

      if (updateError) {
        console.error(`❌ ${analysis.reference} - analysis_completed 업데이트 실패:`, updateError);
      } else {
        console.log(`✅ ${analysis.reference} - 분석 완료`);
      }

    } catch (error) {
      console.error(`❌ ${analysis.reference} - 처리 중 오류:`, error);
    }
  }

  console.log('\n=== 저장 완료 ===\n');
}

saveAnalyses();
