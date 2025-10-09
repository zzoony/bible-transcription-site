import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

async function main() {
  try {
    console.log('Revelation 구절 조회 중...');

    // 전체 구절 조회
    const { data: verses, error } = await supabase
      .from('verses')
      .select('reference, niv_text')
      .ilike('reference', 'Revelation%')
      .order('reference');

    if (error) throw error;

    console.log(`\n총 ${verses.length}개 구절 발견\n`);

    // 샘플 3개 출력
    console.log('샘플:');
    verses.slice(0, 3).forEach(v => {
      console.log(`- ${v.reference}: ${v.niv_text.substring(0, 80)}...`);
    });

    // 분석 상태 확인 - verse_id로 조회
    const verseIds = verses.map(v => v.reference);
    const { data: analyzed, error: analyzedError } = await supabase
      .from('verses')
      .select('reference, analysis_completed')
      .ilike('reference', 'Revelation%');

    if (analyzedError) throw analyzedError;

    const completed = analyzed.filter(a => a.analysis_completed);
    console.log(`\n분석 완료: ${completed.length}개`);
    console.log(`분석 필요: ${verses.length - completed.length}개\n`);

    // 장별 통계
    const chapterStats = new Map<number, { total: number; completed: number }>();
    verses.forEach(v => {
      const match = v.reference.match(/Revelation (\d+):/);
      if (match) {
        const chapter = parseInt(match[1]);
        if (!chapterStats.has(chapter)) {
          chapterStats.set(chapter, { total: 0, completed: 0 });
        }
        chapterStats.get(chapter)!.total++;
      }
    });

    completed.forEach(v => {
      const match = v.reference.match(/Revelation (\d+):/);
      if (match) {
        const chapter = parseInt(match[1]);
        if (chapterStats.has(chapter)) {
          chapterStats.get(chapter)!.completed++;
        }
      }
    });

    console.log('장별 통계:');
    Array.from(chapterStats.entries())
      .sort((a, b) => a[0] - b[0])
      .forEach(([chapter, stats]) => {
        const percent = ((stats.completed / stats.total) * 100).toFixed(0);
        console.log(`  Chapter ${chapter}: ${stats.completed}/${stats.total} (${percent}%)`);
      });

  } catch (err) {
    console.error('오류:', err);
  }
}

main();
