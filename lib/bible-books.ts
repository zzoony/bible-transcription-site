/**
 * Bible book name mappings for Korean search support
 */

export const BIBLE_BOOKS_KOR_TO_ENG: Record<string, string> = {
  // Old Testament
  창세기: 'Genesis',
  출애굽기: 'Exodus',
  레위기: 'Leviticus',
  민수기: 'Numbers',
  신명기: 'Deuteronomy',
  여호수아: 'Joshua',
  사사기: 'Judges',
  룻기: 'Ruth',
  사무엘상: '1 Samuel',
  사무엘하: '2 Samuel',
  열왕기상: '1 Kings',
  열왕기하: '2 Kings',
  역대상: '1 Chronicles',
  역대하: '2 Chronicles',
  에스라: 'Ezra',
  느헤미야: 'Nehemiah',
  에스더: 'Esther',
  욥기: 'Job',
  시편: 'Psalms',
  잠언: 'Proverbs',
  전도서: 'Ecclesiastes',
  아가: 'Song of Solomon',
  이사야: 'Isaiah',
  예레미야: 'Jeremiah',
  예레미야애가: 'Lamentations',
  에스겔: 'Ezekiel',
  다니엘: 'Daniel',
  호세아: 'Hosea',
  요엘: 'Joel',
  아모스: 'Amos',
  오바댜: 'Obadiah',
  요나: 'Jonah',
  미가: 'Micah',
  나훔: 'Nahum',
  하박국: 'Habakkuk',
  스바냐: 'Zephaniah',
  학개: 'Haggai',
  스가랴: 'Zechariah',
  말라기: 'Malachi',

  // New Testament
  마태복음: 'Matthew',
  마가복음: 'Mark',
  누가복음: 'Luke',
  요한복음: 'John',
  사도행전: 'Acts',
  로마서: 'Romans',
  고린도전서: '1 Corinthians',
  고린도후서: '2 Corinthians',
  갈라디아서: 'Galatians',
  에베소서: 'Ephesians',
  빌립보서: 'Philippians',
  골로새서: 'Colossians',
  데살로니가전서: '1 Thessalonians',
  데살로니가후서: '2 Thessalonians',
  디모데전서: '1 Timothy',
  디모데후서: '2 Timothy',
  디도서: 'Titus',
  빌레몬서: 'Philemon',
  히브리서: 'Hebrews',
  야고보서: 'James',
  베드로전서: '1 Peter',
  베드로후서: '2 Peter',
  요한일서: '1 John',
  요한이서: '2 John',
  요한삼서: '3 John',
  유다서: 'Jude',
  요한계시록: 'Revelation',
}

export const BIBLE_BOOKS_ENG_TO_KOR: Record<string, string> = Object.fromEntries(
  Object.entries(BIBLE_BOOKS_KOR_TO_ENG).map(([kor, eng]) => [eng, kor])
)

/**
 * Convert a Korean Bible book name to its English equivalent.
 *
 * @param koreanBook - The Korean book name (e.g., "창세기")
 * @returns The English book name if a mapping exists, `null` otherwise
 */
export function koreanBookToEnglish(koreanBook: string): string | null {
  return BIBLE_BOOKS_KOR_TO_ENG[koreanBook] || null
}

/**
 * Converts an English Bible book name to its Korean equivalent.
 *
 * @param englishBook - English book name to convert
 * @returns The Korean book name if a mapping exists, `null` otherwise.
 */
export function englishBookToKorean(englishBook: string): string | null {
  return BIBLE_BOOKS_ENG_TO_KOR[englishBook] || null
}

/**
 * Determines whether the given string is a recognized Korean Bible book name.
 *
 * @returns `true` if the input matches a known Korean Bible book name, `false` otherwise.
 */
export function isKoreanBookName(name: string): boolean {
  return name in BIBLE_BOOKS_KOR_TO_ENG
}

/**
 * Parses a Korean Bible reference and returns its English book name with chapter and verse.
 *
 * @param reference - Korean reference in the form "BookName chapter:verse" (e.g., "빌립보서 3:1")
 * @returns An object with `book` (English book name), numeric `chapter`, and numeric `verse` when parsing and conversion succeed; `null` otherwise
 */
export function parseKoreanReference(
  reference: string
): { book: string; chapter: number; verse: number } | null {
  // Pattern: "책명 숫자:숫자"
  const match = reference.match(/^(.+?)\s+(\d+):(\d+)$/)
  if (!match) return null

  const [, koreanBook, chapterStr, verseStr] = match
  const englishBook = koreanBookToEnglish(koreanBook)

  if (!englishBook) return null

  return {
    book: englishBook,
    chapter: parseInt(chapterStr),
    verse: parseInt(verseStr),
  }
}

/**
 * Determine whether the input is a Korean Bible book name (optionally followed by a chapter:verse) and return parsed search parameters.
 *
 * @returns If the input is a Korean book name, an object with `isBookName: true` and `book` set to the English book name; otherwise an object with `isBookName: false` and `searchTerm` set to the trimmed query.
 */
export function parseSearchQuery(query: string): {
  isBookName: boolean
  book?: string
  searchTerm?: string
} {
  const trimmed = query.trim()

  // Check if it's a Korean book name
  const englishBook = koreanBookToEnglish(trimmed)
  if (englishBook) {
    return {
      isBookName: true,
      book: englishBook,
    }
  }

  // Check if it's a Korean book name with chapter/verse reference
  const refMatch = trimmed.match(/^(.+?)\s+(\d+):(\d+)$/)
  if (refMatch) {
    const [, koreanBook] = refMatch
    const engBook = koreanBookToEnglish(koreanBook)
    if (engBook) {
      return {
        isBookName: true,
        book: engBook,
      }
    }
  }

  // Not a book name, regular search term
  return {
    isBookName: false,
    searchTerm: trimmed,
  }
}