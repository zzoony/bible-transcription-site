import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

// 구약 39권 리스트 (JSON 파일의 키 이름)
const OLD_TESTAMENT_BOOKS = [
  // Torah (모세오경)
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',

  // Historical (역사서)
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
  '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther',

  // Wisdom (지혜서)
  'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',

  // Major Prophets (대선지서)
  'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',

  // Minor Prophets (소선지서)
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
  'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'
]

async function loadBookFromJSON(bookName: string, bibleData: any): Promise<number> {
  console.log(`\n📖 ${bookName} 로드 중...`)

  const bookData = bibleData[bookName]
  if (!bookData) {
    console.log(`  ⚠️ ${bookName} 데이터가 JSON에 없습니다`)
    return 0
  }

  let savedCount = 0
  let skippedCount = 0

  // 각 장(chapter) 처리
  for (const chapterNum in bookData) {
    const chapterData = bookData[chapterNum]

    // 각 절(verse) 처리
    for (const verseNum in chapterData) {
      const verseText = chapterData[verseNum]
      const reference = `${bookName} ${chapterNum}:${verseNum}`

      // 데이터베이스에 이미 있는지 확인
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', reference)
        .single()

      if (existing) {
        skippedCount++
        continue
      }

      // 새 구절 삽입
      const { error } = await supabase
        .from('verses')
        .insert({
          reference: reference,
          niv_text: verseText,
          analysis_completed: false
        })

      if (error) {
        console.error(`  ❌ DB 삽입 실패: ${reference}`, error.message)
      } else {
        savedCount++
        if (savedCount % 50 === 0) {
          console.log(`  ✅ ${savedCount}구절 저장됨...`)
        }
      }
    }
  }

  console.log(`✅ ${bookName} 완료: ${savedCount}구절 저장, ${skippedCount}구절 건너뜀`)
  return savedCount
}

async function main() {
  console.log('\n' + '='.repeat(60))
  console.log('🚀 구약 성경 JSON → DB 로드 시작')
  console.log('='.repeat(60) + '\n')

  // JSON 파일 읽기
  const jsonPath = path.join(process.cwd(), '..', '..', 'NIV_Bible.json')
  console.log(`📄 JSON 파일 경로: ${jsonPath}`)

  if (!fs.existsSync(jsonPath)) {
    console.error('❌ NIV_Bible.json 파일을 찾을 수 없습니다!')
    console.error(`   경로: ${jsonPath}`)
    return
  }

  console.log('📖 JSON 파일 파싱 중...')
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const bibleData = JSON.parse(jsonContent)
  console.log('✅ JSON 파일 로드 완료\n')

  let totalBooks = 0
  let totalVerses = 0

  for (const bookName of OLD_TESTAMENT_BOOKS) {
    const verses = await loadBookFromJSON(bookName, bibleData)
    totalBooks++
    totalVerses += verses

    console.log(`진행: ${totalBooks}/${OLD_TESTAMENT_BOOKS.length}권 완료, 총 ${totalVerses}구절\n`)

    // 책 사이에 500ms 대기
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log('\n' + '='.repeat(60))
  console.log(`🎉 구약 전체 로드 완료!`)
  console.log(`   총 ${totalBooks}권`)
  console.log(`   총 ${totalVerses}구절 저장`)
  console.log('='.repeat(60) + '\n')
}

main().catch(console.error)
