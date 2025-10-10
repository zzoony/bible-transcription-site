import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

// 구약 39권 리스트
const OLD_TESTAMENT_BOOKS = [
  // Torah (모세오경)
  { name: 'Genesis', chapters: 50 },
  { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 },
  { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 },

  // Historical (역사서)
  { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 },
  { name: 'Ruth', chapters: 4 },
  { name: '1 Samuel', chapters: 31 },
  { name: '2 Samuel', chapters: 24 },
  { name: '1 Kings', chapters: 22 },
  { name: '2 Kings', chapters: 25 },
  { name: '1 Chronicles', chapters: 29 },
  { name: '2 Chronicles', chapters: 36 },
  { name: 'Ezra', chapters: 10 },
  { name: 'Nehemiah', chapters: 13 },
  { name: 'Esther', chapters: 10 },

  // Wisdom (지혜서)
  { name: 'Job', chapters: 42 },
  { name: 'Psalms', chapters: 150 },
  { name: 'Proverbs', chapters: 31 },
  { name: 'Ecclesiastes', chapters: 12 },
  { name: 'Song of Solomon', chapters: 8 },

  // Major Prophets (대선지서)
  { name: 'Isaiah', chapters: 66 },
  { name: 'Jeremiah', chapters: 52 },
  { name: 'Lamentations', chapters: 5 },
  { name: 'Ezekiel', chapters: 48 },
  { name: 'Daniel', chapters: 12 },

  // Minor Prophets (소선지서)
  { name: 'Hosea', chapters: 14 },
  { name: 'Joel', chapters: 3 },
  { name: 'Amos', chapters: 9 },
  { name: 'Obadiah', chapters: 1 },
  { name: 'Jonah', chapters: 4 },
  { name: 'Micah', chapters: 7 },
  { name: 'Nahum', chapters: 3 },
  { name: 'Habakkuk', chapters: 3 },
  { name: 'Zephaniah', chapters: 3 },
  { name: 'Haggai', chapters: 2 },
  { name: 'Zechariah', chapters: 14 },
  { name: 'Malachi', chapters: 4 }
]

const BIBLE_API_BASE = 'https://bible-api.com'

async function fetchVerseFromAPI(reference: string): Promise<string | null> {
  try {
    const encodedRef = encodeURIComponent(reference)
    const response = await fetch(`${BIBLE_API_BASE}/${encodedRef}?translation=kjv`)

    if (!response.ok) {
      console.error(`  ❌ API 오류 (${response.status}): ${reference}`)
      return null
    }

    const data = await response.json()
    return data.text || null
  } catch (error) {
    console.error(`  ❌ 네트워크 오류: ${reference}`, error)
    return null
  }
}

async function fetchChapter(bookName: string, chapter: number): Promise<number> {
  console.log(`\n📖 ${bookName} ${chapter}장 가져오는 중...`)

  const reference = `${bookName} ${chapter}`
  const chapterText = await fetchVerseFromAPI(reference)

  if (!chapterText) {
    console.log(`  ⚠️ ${reference} 건너뛰기 (API 응답 없음)`)
    return 0
  }

  // 구절 분리 (각 줄이 구절)
  const verses = chapterText.split('\n').filter(v => v.trim().length > 0)
  let savedCount = 0

  for (let verseNum = 1; verseNum <= verses.length; verseNum++) {
    const verseRef = `${bookName} ${chapter}:${verseNum}`
    const verseText = verses[verseNum - 1].trim()

    // 데이터베이스에 이미 있는지 확인
    const { data: existing } = await supabase
      .from('verses')
      .select('id')
      .eq('reference', verseRef)
      .single()

    if (existing) {
      console.log(`  ⏭️ ${verseRef} 이미 존재`)
      continue
    }

    // 새 구절 삽입
    const { error } = await supabase
      .from('verses')
      .insert({
        reference: verseRef,
        niv_text: verseText,
        analysis_completed: false
      })

    if (error) {
      console.error(`  ❌ DB 삽입 실패: ${verseRef}`, error.message)
    } else {
      savedCount++
      if (savedCount % 5 === 0) {
        console.log(`  ✅ ${savedCount}구절 저장됨...`)
      }
    }

    // Rate limiting: 100ms (초당 10구절)
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  console.log(`✅ ${bookName} ${chapter}장 완료: ${savedCount}구절 저장`)
  return savedCount
}

async function fetchBook(book: { name: string, chapters: number }) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`📚 ${book.name} 수집 시작 (총 ${book.chapters}장)`)
  console.log('='.repeat(60))

  let totalVerses = 0

  for (let chapter = 1; chapter <= book.chapters; chapter++) {
    const verses = await fetchChapter(book.name, chapter)
    totalVerses += verses

    // 장 사이에 500ms 대기
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log(`\n✅ ${book.name} 완료: 총 ${totalVerses}구절 저장\n`)
  return totalVerses
}

async function main() {
  console.log('\n' + '='.repeat(60))
  console.log('🚀 구약 NIV 텍스트 수집 시작')
  console.log('='.repeat(60) + '\n')

  let totalBooks = 0
  let totalVerses = 0

  for (const book of OLD_TESTAMENT_BOOKS) {
    const verses = await fetchBook(book)
    totalBooks++
    totalVerses += verses

    console.log(`진행: ${totalBooks}/${OLD_TESTAMENT_BOOKS.length}권 완료, 총 ${totalVerses}구절\n`)
  }

  console.log('\n' + '='.repeat(60))
  console.log(`🎉 구약 전체 수집 완료!`)
  console.log(`   총 ${totalBooks}권`)
  console.log(`   총 ${totalVerses}구절`)
  console.log('='.repeat(60) + '\n')
}

main().catch(console.error)
