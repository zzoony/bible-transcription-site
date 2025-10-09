import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkGenesis() {
  // 1. verses 테이블에서 Genesis 1:1 확인
  const { data: verses, error: versesError } = await supabase
    .from('verses')
    .select('*')
    .ilike('reference', 'Genesis 1:1%')
    .limit(5)

  console.log('\n=== VERSES 테이블 (Genesis 1:1) ===')
  if (versesError) {
    console.error('Error:', versesError)
  } else {
    console.log('결과 개수:', verses?.length || 0)
    console.log('데이터:', JSON.stringify(verses, null, 2))
  }

  // 2. verse_analyses 테이블에서 Genesis 1:1 분석 데이터 확인
  const { data: analyses, error: analysesError } = await supabase
    .from('verse_analyses')
    .select('*')
    .ilike('reference', 'Genesis 1:1%')
    .limit(5)

  console.log('\n=== VERSE_ANALYSES 테이블 (Genesis 1:1) ===')
  if (analysesError) {
    console.error('Error:', analysesError)
  } else {
    console.log('결과 개수:', analyses?.length || 0)
    if (analyses && analyses.length > 0) {
      console.log('첫 번째 분석 데이터 존재: YES')
      console.log('Reference:', analyses[0].reference)
    }
  }

  // 3. books 테이블에서 Genesis 확인
  const { data: books, error: booksError } = await supabase
    .from('books')
    .select('*')
    .eq('name_english', 'Genesis')

  console.log('\n=== BOOKS 테이블 (Genesis) ===')
  if (booksError) {
    console.error('Error:', booksError)
  } else {
    console.log('결과:', JSON.stringify(books, null, 2))
  }

  // 4. chapters 테이블에서 Genesis 1장 확인
  if (books && books.length > 0) {
    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('*')
      .eq('book_id', books[0].id)
      .eq('chapter_number', 1)

    console.log('\n=== CHAPTERS 테이블 (Genesis 1) ===')
    if (chaptersError) {
      console.error('Error:', chaptersError)
    } else {
      console.log('결과:', JSON.stringify(chapters, null, 2))

      // 5. chapter_id로 verses 조회
      if (chapters && chapters.length > 0) {
        const chapterId = chapters[0].id
        console.log('\n=== chapter_id로 VERSES 조회 ===')
        console.log('chapter_id:', chapterId)

        const { data: versesByChapterId, error: versesByChapterIdError } =
          await supabase
            .from('verses')
            .select('id, chapter_id, verse_number, reference, analysis_completed')
            .eq('chapter_id', chapterId)
            .limit(10)

        if (versesByChapterIdError) {
          console.error('Error:', versesByChapterIdError)
        } else {
          console.log('결과 개수:', versesByChapterId?.length || 0)
          console.log('데이터:', JSON.stringify(versesByChapterId, null, 2))
        }
      }
    }
  }
}

checkGenesis().catch(console.error)
