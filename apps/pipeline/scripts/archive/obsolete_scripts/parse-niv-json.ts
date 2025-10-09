import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// NIV JSON 파일 경로
const jsonPath = path.resolve(__dirname, '../../../NIV_Bible.json')

// 신약 27권
const NT_BOOKS = [
  { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 },
  { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 },
  { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 },
  { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 },
  { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 },
  { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 },
  { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 },
  { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 },
  { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 },
  { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 },
  { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 },
  { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 },
  { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 },
  { name: 'Revelation', chapters: 22 }
]

interface ParsedVerse {
  reference: string
  niv_text: string
  book: string
  chapter: number
  verse: number
}

// JSON에서 구절을 파싱하여 reference로 분리
function parseVerses(biblejson: any): ParsedVerse[] {
  const verses: ParsedVerse[] = []

  for (const book of NT_BOOKS) {
    console.log(`\n📖 ${book.name} 파싱 중...`)

    const bookData = biblejson[book.name]
    if (!bookData) {
      console.log(`  ⚠️ ${book.name} 데이터 없음`)
      continue
    }

    // JSON에는 장이 '1'로만 되어 있을 수 있으므로 모든 키 확인
    const chapters = Object.keys(bookData)

    for (const chapterKey of chapters) {
      const chapterData = bookData[chapterKey]
      const verseKeys = Object.keys(chapterData)

      for (const verseKey of verseKeys) {
        const text = chapterData[verseKey]

        // 텍스트에서 실제 장:절 정보 추출 시도
        // 일부 텍스트는 여러 절이 합쳐져 있을 수 있음

        // 간단한 패턴: 각 verseKey를 reference로 사용
        const reference = `${book.name} ${chapterKey}:${verseKey}`

        if (text && text.trim()) {
          verses.push({
            reference,
            niv_text: text.trim(),
            book: book.name,
            chapter: parseInt(chapterKey),
            verse: parseInt(verseKey)
          })
        }
      }
    }

    console.log(`  ✅ ${verses.filter(v => v.book === book.name).length}개 구절 파싱 완료`)
  }

  return verses
}

async function saveToDatabase(verses: ParsedVerse[]) {
  let saved = 0
  let skipped = 0
  let failed = 0

  console.log(`\n💾 데이터베이스 저장 시작 (총 ${verses.length}개 구절)`)

  for (const verse of verses) {
    try {
      // 중복 확인
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', verse.reference)
        .single()

      if (existing) {
        skipped++
        continue
      }

      // 삽입
      const { error } = await supabase
        .from('verses')
        .insert({
          reference: verse.reference,
          niv_text: verse.niv_text
        })

      if (error) {
        console.error(`  ❌ 저장 실패: ${verse.reference}`, error.message)
        failed++
      } else {
        saved++
        if (saved % 100 === 0) {
          console.log(`  💾 ${saved}개 저장 완료...`)
        }
      }
    } catch (err: any) {
      console.error(`  ❌ 오류: ${verse.reference}`, err.message)
      failed++
    }
  }

  console.log(`\n📊 저장 완료:`)
  console.log(`  ✅ 저장: ${saved}개`)
  console.log(`  ⏭️  건너뜀: ${skipped}개`)
  console.log(`  ❌ 실패: ${failed}개`)
}

async function main() {
  console.log('📖 NIV_Bible.json 파싱 시작\n')

  // JSON 파일 읽기
  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  // 구절 파싱
  const verses = parseVerses(jsonData)

  console.log(`\n총 ${verses.length}개 구절 파싱 완료`)

  // 샘플 출력
  console.log('\n샘플 구절:')
  verses.slice(0, 5).forEach(v => {
    console.log(`  ${v.reference}: ${v.niv_text.substring(0, 60)}...`)
  })

  // 데이터베이스 저장
  await saveToDatabase(verses)
}

main().catch(console.error)
