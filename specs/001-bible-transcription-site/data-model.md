# Data Model: Bible Transcription Site

**Generated**: 2025-09-29
**Context**: Modern web application for Bible verse analysis

## Core Entities

### Verse
**Purpose**: Primary biblical text unit with reference information
**Attributes**:
- `id`: Unique identifier (integer, primary key)
- `book_name`: Biblical book name (string, e.g., "Philippians")
- `chapter_number`: Chapter number (integer)
- `verse_number`: Verse number (integer)
- `reference`: Full scripture reference (string, e.g., "Philippians 3:1")
- `niv_text`: NIV translation text (string)
- `analysis_completed`: Analysis completion status (boolean)
- `created_at`: Record creation timestamp
- `updated_at`: Last modification timestamp

**Relationships**:
- One-to-many with SentenceStructure
- One-to-many with Vocabulary
- One-to-many with ContextualExplanation
- One-to-many with KoreanTranslation
- One-to-many with SpecialExplanation

**Validation Rules**:
- `book_name` must be non-empty
- `chapter_number` must be positive integer
- `verse_number` must be positive integer
- `niv_text` must be non-empty
- `reference` must follow format "[Book] [Chapter]:[Verse]"

### SentenceStructure
**Purpose**: Grammatical and semantic analysis of verse components
**Attributes**:
- `id`: Unique identifier (integer, primary key)
- `verse_id`: Foreign key to Verse (integer)
- `structure_type`: Classification type (string, e.g., "interrogative", "declarative")
- `original_text`: Source text being analyzed (string)
- `korean_translation`: Korean rendering (string)
- `grammatical_analysis`: Technical grammar breakdown (string)
- `order_index`: Sequence within verse (integer)

**Relationships**:
- Many-to-one with Verse

**Validation Rules**:
- `verse_id` must reference existing verse
- `structure_type` must be non-empty
- `original_text` must be non-empty
- `order_index` must be non-negative

### Vocabulary
**Purpose**: Individual word or phrase analysis with pronunciation
**Attributes**:
- `id`: Unique identifier (integer, primary key)
- `verse_id`: Foreign key to Verse (integer)
- `word`: English word or phrase (string)
- `ipa_pronunciation`: International Phonetic Alphabet notation (string)
- `korean_pronunciation`: Korean pronunciation guide (string)
- `part_of_speech`: Grammatical category (string)
- `definition`: Meaning explanation (string)
- `order_index`: Sequence within verse (integer)

**Relationships**:
- Many-to-one with Verse

**Validation Rules**:
- `verse_id` must reference existing verse
- `word` must be non-empty
- `ipa_pronunciation` must follow IPA format
- `korean_pronunciation` must be non-empty
- `definition` must be non-empty

### ContextualExplanation
**Purpose**: Historical, cultural, and theological background
**Attributes**:
- `id`: Unique identifier (integer, primary key)
- `verse_id`: Foreign key to Verse (integer)
- `explanation_type`: Category (string, e.g., "historical", "cultural", "theological")
- `content`: Explanation text (string)
- `related_verses`: Cross-references (string array)

**Relationships**:
- Many-to-one with Verse

**Validation Rules**:
- `verse_id` must reference existing verse
- `explanation_type` must be non-empty
- `content` must be non-empty

### KoreanTranslation
**Purpose**: Natural Korean language renderings
**Attributes**:
- `id`: Unique identifier (integer, primary key)
- `verse_id`: Foreign key to Verse (integer)
- `translation_type`: Style category (string, e.g., "natural", "literal")
- `korean_text`: Korean translation text (string)
- `notes`: Translation approach notes (string, optional)

**Relationships**:
- Many-to-one with Verse

**Validation Rules**:
- `verse_id` must reference existing verse
- `translation_type` must be non-empty
- `korean_text` must be non-empty

### SpecialExplanation
**Purpose**: Linguistic peculiarities and interpretative notes
**Attributes**:
- `id`: Unique identifier (integer, primary key)
- `verse_id`: Foreign key to Verse (integer)
- `explanation_type`: Category (string, e.g., "grammatical", "interpretative")
- `content`: Explanation text (string)
- `technical_level`: Complexity indicator (string, e.g., "basic", "intermediate", "advanced")

**Relationships**:
- Many-to-one with Verse

**Validation Rules**:
- `verse_id` must reference existing verse
- `explanation_type` must be non-empty
- `content` must be non-empty

## Derived Entities (Frontend)

### SearchResult
**Purpose**: Aggregated search response data
**Attributes**:
- `verse`: Complete Verse entity
- `relevance_score`: Search ranking (number)
- `match_highlights`: Matched text segments (string array)
- `preview_text`: Truncated verse text (string)

### VerseAnalysis
**Purpose**: Complete analysis data for single verse
**Attributes**:
- `verse`: Complete Verse entity
- `sentence_structures`: Array of SentenceStructure entities
- `vocabulary`: Array of Vocabulary entities
- `contextual_explanations`: Array of ContextualExplanation entities
- `korean_translations`: Array of KoreanTranslation entities
- `special_explanations`: Array of SpecialExplanation entities

### UserPreferences (Client State)
**Purpose**: User interface and experience settings
**Attributes**:
- `theme`: UI theme preference ("light" | "dark")
- `recent_searches`: Last search queries (string array, max 10)
- `preferred_translation`: Default translation style preference
- `font_size`: Text display size preference

## State Transitions

### Verse Analysis Loading
```
Initial → Loading → Loaded | Error
```

### Search States
```
Idle → Searching → Results | No Results | Error
```

### Theme Toggle
```
Light ⟷ Dark
```

## Data Integrity Constraints

### Referential Integrity
- All foreign keys must reference existing parent records
- Cascade delete: Removing verse removes all related analysis data
- No orphaned analysis records allowed

### Business Logic Constraints
- Each verse must have at least one sentence structure entry
- Vocabulary entries should cover significant words (not articles/prepositions)
- At least one Korean translation per verse
- Context explanations should be appropriate for general audiences

### Performance Constraints
- Search queries must complete within 500ms
- Verse analysis loading must complete within 1s
- Full-text search indexes on verse content and translations
- Composite indexes on (book_name, chapter_number, verse_number)

## Database Schema Compatibility

**Current Supabase Schema**: ✅ Compatible
- Existing tables: `verses`, `sentence_structures`, `vocabulary`, `contextual_explanations`, `korean_translations`, `special_explanations`
- Data volume: 715 total records with complete analysis for Philippians
- No migration required for initial implementation

**Future Enhancements**:
- User authentication tables (when auth features added)
- Search history tracking (for analytics)
- User annotations and bookmarks
- Additional Bible translations