# Verse Analysis API Contract

**Endpoint**: `GET /api/verse/{reference}`
**Purpose**: Retrieve complete linguistic analysis for a specific Bible verse

## Request Schema

### Path Parameters
```typescript
interface VerseParams {
  reference: string; // Scripture reference (e.g., "Philippians-3-1", "philippians-3-1")
}
```

### Query Parameters
```typescript
interface VerseQuery {
  format?: "full" | "minimal"; // Analysis detail level (default: "full")
}
```

### Example Requests
```
GET /api/verse/Philippians-3-1
GET /api/verse/philippians-3-1?format=minimal
```

## Response Schema

### Success Response (200)
```typescript
interface VerseAnalysisResponse {
  verse: {
    id: number;
    reference: string;
    niv_text: string;
    book_name: string;
    chapter_number: number;
    verse_number: number;
    analysis_completed: boolean;
  };
  analysis: {
    sentence_structures: SentenceStructure[];
    vocabulary: Vocabulary[];
    contextual_explanations: ContextualExplanation[];
    korean_translations: KoreanTranslation[];
    special_explanations: SpecialExplanation[];
  };
  metadata: {
    total_elements: number;
    analysis_quality: "complete" | "partial" | "basic";
    last_updated: string; // ISO 8601 timestamp
  };
}

interface SentenceStructure {
  id: number;
  structure_type: string;
  original_text: string;
  korean_translation: string;
  grammatical_analysis: string;
  order_index: number;
}

interface Vocabulary {
  id: number;
  word: string;
  ipa_pronunciation: string;
  korean_pronunciation: string;
  part_of_speech: string;
  definition: string;
  order_index: number;
}

interface ContextualExplanation {
  id: number;
  explanation_type: string;
  content: string;
  related_verses: string[];
}

interface KoreanTranslation {
  id: number;
  translation_type: string;
  korean_text: string;
  notes?: string;
}

interface SpecialExplanation {
  id: number;
  explanation_type: string;
  content: string;
  technical_level: string;
}
```

### Minimal Format Response
```typescript
interface MinimalVerseResponse {
  verse: {
    reference: string;
    niv_text: string;
  };
  analysis: {
    primary_korean_translation: string;
    key_vocabulary: Array<{
      word: string;
      korean_pronunciation: string;
      definition: string;
    }>;
    main_context: string;
  };
}
```

### Error Responses

#### 404 Not Found
```typescript
interface ErrorResponse {
  error: "VERSE_NOT_FOUND";
  message: string;
  suggestion?: string; // Alternative reference format
}
```

#### 400 Bad Request
```typescript
interface ErrorResponse {
  error: "INVALID_REFERENCE";
  message: string;
  expected_format: string;
}
```

#### 500 Internal Server Error
```typescript
interface ErrorResponse {
  error: "ANALYSIS_UNAVAILABLE";
  message: string;
  request_id: string;
}
```

## Contract Tests

### Test Cases
1. **Valid verse reference**
   - Path: "/api/verse/Philippians-3-1"
   - Expected: 200 response with complete analysis

2. **Case insensitive reference**
   - Path: "/api/verse/philippians-3-1"
   - Expected: 200 response (same as above)

3. **Minimal format request**
   - Path: "/api/verse/Philippians-3-1?format=minimal"
   - Expected: 200 response with simplified data

4. **Invalid reference format**
   - Path: "/api/verse/invalid-reference"
   - Expected: 400 error "INVALID_REFERENCE"

5. **Non-existent verse**
   - Path: "/api/verse/Philippians-99-99"
   - Expected: 404 error "VERSE_NOT_FOUND"

6. **Incomplete analysis**
   - Path: "/api/verse/some-incomplete-verse"
   - Expected: 200 response with partial analysis marked

### Performance Requirements
- Response time: <1s for full analysis
- Response time: <300ms for minimal format
- Timeout: 3s maximum
- Cache: 24 hours for complete analyses