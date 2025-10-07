import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  '***REMOVED***'
)

async function removeDuplicateBooks() {
  console.log('\n🔧 중복 책 제거 시작...\n')

  // 1. 모든 책 조회
  const { data: books, error } = await supabase
    .from('books')
    .select('id, name_english, name_korean, testament')
    .order('id', { ascending: true })

  if (error) {
    console.error('❌ 조회 오류:', error)
    return
  }

  console.log(`📊 전체 등록된 책: ${books?.length}개\n`)

  // 2. 중복 찾기
  const booksByName: { [key: string]: any[] } = {}
  books?.forEach((book) => {
    const key = book.name_english
    if (!booksByName[key]) {
      booksByName[key] = []
    }
    booksByName[key].push(book)
  })

  const duplicates = Object.entries(booksByName)
    .filter(([_, books]) => books.length > 1)

  if (duplicates.length === 0) {
    console.log('✅ 중복된 책이 없습니다!')
    return
  }

  console.log(`🔴 중복 발견: ${duplicates.length}개 책\n`)

  // 3. 각 중복 책에 대해 처리
  for (const [name, bookList] of duplicates) {
    console.log(`\n📖 "${name}" 처리 중...`)
    console.log(`   총 ${bookList.length}개 중복`)

    // 가장 작은 ID를 유지
    const keepBook = bookList[0]
    const removeBooks = bookList.slice(1)

    console.log(`   ✅ 유지: ID ${keepBook.id} (${keepBook.name_korean})`)
    console.log(`   🗑️  삭제 대상: ${removeBooks.map(b => `ID ${b.id}`).join(', ')}`)

    // 4. 삭제할 book_id들의 관련 데이터 확인
    for (const book of removeBooks) {
      // chapters 확인
      const { data: chapters } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', book.id)

      // verses 확인
      const { data: verses } = await supabase
        .from('verses')
        .select('id')
        .eq('book_id', book.id)

      console.log(`      ID ${book.id}: chapters ${chapters?.length || 0}개, verses ${verses?.length || 0}개`)

      if ((chapters?.length || 0) > 0 || (verses?.length || 0) > 0) {
        console.log(`      ⚠️  관련 데이터가 있습니다. 먼저 정리가 필요합니다.`)

        // 5. verses를 유지할 book_id로 업데이트
        if ((verses?.length || 0) > 0) {
          console.log(`      🔄 verses ${verses?.length}개를 ID ${keepBook.id}로 이전 중...`)

          const { error: updateError } = await supabase
            .from('verses')
            .update({ book_id: keepBook.id })
            .eq('book_id', book.id)

          if (updateError) {
            console.error(`      ❌ verses 업데이트 실패:`, updateError.message)
            continue
          }

          console.log(`      ✅ verses 이전 완료`)
        }

        // 6. chapters를 유지할 book_id로 업데이트 (중복 방지 필요)
        if ((chapters?.length || 0) > 0) {
          console.log(`      🔄 chapters ${chapters?.length}개 처리 중...`)

          // 기존 chapters 확인
          const { data: existingChapters } = await supabase
            .from('chapters')
            .select('chapter_number')
            .eq('book_id', keepBook.id)

          const existingChapterNumbers = new Set(
            existingChapters?.map(c => c.chapter_number) || []
          )

          for (const chapter of chapters) {
            const { data: chapterData } = await supabase
              .from('chapters')
              .select('chapter_number')
              .eq('id', chapter.id)
              .single()

            if (chapterData && !existingChapterNumbers.has(chapterData.chapter_number)) {
              // 중복되지 않으면 book_id 업데이트
              await supabase
                .from('chapters')
                .update({ book_id: keepBook.id })
                .eq('id', chapter.id)
            } else {
              // 중복되면 삭제
              await supabase
                .from('chapters')
                .delete()
                .eq('id', chapter.id)
            }
          }

          console.log(`      ✅ chapters 정리 완료`)
        }
      }

      // 7. book 삭제
      console.log(`      🗑️  ID ${book.id} 삭제 중...`)

      const { error: deleteError } = await supabase
        .from('books')
        .delete()
        .eq('id', book.id)

      if (deleteError) {
        console.error(`      ❌ 삭제 실패:`, deleteError.message)
      } else {
        console.log(`      ✅ 삭제 완료`)
      }
    }
  }

  // 8. 최종 확인
  console.log('\n─────────────────────────────────────')
  console.log('📊 최종 확인 중...\n')

  const { data: finalBooks } = await supabase
    .from('books')
    .select('id, name_english, testament')

  const otCount = finalBooks?.filter(b => b.testament === 1).length || 0
  const ntCount = finalBooks?.filter(b => b.testament === 2).length || 0

  console.log(`총 ${finalBooks?.length}권`)
  console.log(`  구약: ${otCount}권 (예상: 39권) ${otCount === 39 ? '✅' : '❌'}`)
  console.log(`  신약: ${ntCount}권 (예상: 27권) ${ntCount === 27 ? '✅' : '❌'}`)

  console.log('\n✅ 중복 제거 완료!')
}

removeDuplicateBooks()
