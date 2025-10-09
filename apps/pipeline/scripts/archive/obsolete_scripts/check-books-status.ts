import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

async function main() {
  const { data: books, error } = await supabase
    .from('books')
    .select('*')
    .order('id')

  if (error) {
    console.error('❌ 오류:', error)
    return
  }

  console.log('\n=== BOOKS 테이블 현황 ===\n')
  console.log('ID   | 이름')
  console.log('-----|--------------------')

  if (books && books.length > 0) {
    console.log('\n첫 번째 book 레코드의 모든 필드:')
    console.log(JSON.stringify(books[0], null, 2))
    console.log('\n')
  }

  books?.forEach(book => {
    const bookName = book.name_english || '(이름 없음)'
    const testament = book.testament === 1 ? 'OT' : book.testament === 2 ? 'NT' : '??'
    console.log(`${String(book.id).padStart(4)} | ${testament} | ${bookName.padEnd(20)} | ${book.name_korean || ''}`)
  })

  console.log(`\n총 ${books?.length || 0}권 등록됨\n`)
}

main().catch(console.error)
