// Core Entity Types based on data-model.md

/**
 * Verse entity - NIV 영어 원문
 * PRIMARY KEY: id
 * Matches database schema_v2.sql
 */
export interface Verse {
  id?: number
  book_id?: number
  chapter_id?: number
  verse_number: number
  reference: string // e.g., "Philippians 3:1"
  niv_text: string // NIV English text
  analysis_completed?: boolean
  created_at?: string
  updated_at?: string
  // Computed fields for compatibility
  book?: string // e.g., "Philippians"
  chapter?: number // e.g., 3
  verse?: number // e.g., 1
  text?: string // Alias for niv_text
}

/**
 * SentenceStructure entity - 문장 구조 분석
 * Describes sentence structure with semantic classification and grammatical explanation
 */
export interface SentenceStructure {
  id: number
  verse_id: number // FK to verses.id
  sequence_order: number
  semantic_classification: string // 의미적 분류
  original_text?: string
  korean_translation?: string
  grammatical_explanation: string // 문법적 설명
  created_at?: string
  updated_at?: string
}

/**
 * Vocabulary entity - 주요 단어 분석
 * Key vocabulary with IPA pronunciation and Korean phonetic representation
 */
export interface Vocabulary {
  id: number
  verse_id: number // FK to verses.id
  word: string // English word
  ipa_pronunciation: string // IPA pronunciation
  korean_pronunciation: string // Korean phonetic representation
  part_of_speech?: string // 품사
  definition_korean: string // Korean meaning/definition
  usage_note?: string
  frequency?: number
  created_at?: string
  updated_at?: string
}

/**
 * ContextualExplanation entity - 문맥 설명
 * Integrated historical, theological, and literary background explanation
 */
export interface ContextualExplanation {
  id: number
  verse_id: number // FK to verses.id
  integrated_explanation: string // Integrated contextual explanation
  cross_references?: string[]
  created_at?: string
  updated_at?: string
}

/**
 * KoreanTranslation entity - 한국어 번역
 * Natural Korean translation without literal/idiomatic distinction
 */
export interface KoreanTranslation {
  id: number
  verse_id: number // FK to verses.id
  natural_translation: string // Natural Korean translation
  translation_notes?: string
  created_at?: string
  updated_at?: string
}

/**
 * SpecialExplanation entity - 특별 설명
 * Grammatical and interpretive peculiarities
 */
export interface SpecialExplanation {
  id: number
  verse_id: number // FK to verses.id
  grammatical_notes?: string // Grammatical peculiarities
  interpretive_notes?: string // Interpretive peculiarities
  created_at?: string
  updated_at?: string
}

// API Response Types based on contracts/

/**
 * Search query parameters
 */
export interface SearchQuery {
  q: string // Search query string
  book?: string // Filter by book name (optional)
  chapter?: number // Filter by chapter number (optional)
  limit?: number // Results per page (default: 10)
  offset?: number // Pagination offset (default: 0)
}

/**
 * Search result item
 */
export interface SearchResult {
  reference: string // e.g., "Philippians 3:1"
  book: string
  chapter: number
  verse: number
  text: string // NIV verse text
  snippet?: string // Highlighted search snippet
  relevance_score?: number // Search relevance (0-1)
}

/**
 * Search API response
 * Endpoint: GET /api/search
 */
export interface SearchResponse {
  query: string
  results: SearchResult[]
  total: number // Total matching results
  limit: number
  offset: number
  hasMore: boolean // true if offset + limit < total
}

/**
 * Complete verse analysis combining all entities
 */
export interface VerseAnalysis {
  verse: Verse
  sentence_structure: SentenceStructure[] // Array of sentence structures
  vocabulary: Vocabulary[] // Array of key words
  contextual_explanation: ContextualExplanation | null
  korean_translation: KoreanTranslation | null
  special_explanation: SpecialExplanation | null
}

/**
 * Verse Analysis API response
 * Endpoint: GET /api/verse/{reference}
 */
export interface VerseAnalysisResponse {
  reference: string
  found: boolean
  data: VerseAnalysis | null
  error?: string
}

// Client State Types

/**
 * User preferences for UI and display
 */
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  fontSize: 'small' | 'medium' | 'large'
  showIPA: boolean // Show IPA pronunciation
  showKoreanPhonetic: boolean // Show Korean phonetic representation
  autoScroll: boolean // Auto-scroll to verse detail
  recentSearches: string[] // Last 10 searches
}

/**
 * Search state management
 */
export interface SearchState {
  query: string
  filters: {
    book?: string
    chapter?: number
  }
  results: SearchResult[]
  total: number
  limit: number
  offset: number
  hasMore: boolean
  isLoading: boolean
  error: string | null
}

/**
 * Verse loading state
 */
export interface VerseLoadingState {
  reference: string | null
  isLoading: boolean
  error: string | null
  data: VerseAnalysis | null
}

// Utility Types

/**
 * Parsed verse reference components
 */
export interface ParsedReference {
  book: string
  chapter: number
  verse: number
}

/**
 * API error response
 */
export interface ApiError {
  error: string
  message: string
  statusCode: number
  details?: Record<string, unknown>
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  limit: number
  offset: number
  total: number
  hasMore: boolean
  currentPage: number
  totalPages: number
}

/**
 * Determines whether a value represents a Verse entity.
 *
 * @param obj - The value to test
 * @returns `true` if `obj` has string `reference` and `text` properties and can be treated as a `Verse`, `false` otherwise.
 */

export function isVerse(obj: unknown): obj is Verse {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'reference' in obj &&
    'text' in obj &&
    typeof (obj as Verse).reference === 'string' &&
    typeof (obj as Verse).text === 'string'
  )
}

/**
 * Determines whether a value conforms to the SearchResponse interface shape.
 *
 * @returns `true` if `obj` conforms to `SearchResponse`, `false` otherwise.
 */
export function isSearchResponse(obj: unknown): obj is SearchResponse {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'query' in obj &&
    'results' in obj &&
    'total' in obj &&
    Array.isArray((obj as SearchResponse).results)
  )
}

/**
 * Checks whether a value conforms to the `VerseAnalysisResponse` shape.
 *
 * @param obj - The value to test
 * @returns `true` if `obj` is a `VerseAnalysisResponse`, `false` otherwise.
 */
export function isVerseAnalysisResponse(
  obj: unknown
): obj is VerseAnalysisResponse {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'reference' in obj &&
    'found' in obj &&
    typeof (obj as VerseAnalysisResponse).found === 'boolean'
  )
}