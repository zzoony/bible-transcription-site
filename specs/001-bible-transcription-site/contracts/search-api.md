# Search API Contract

**Endpoint**: `GET /api/search`
**Purpose**: Search Bible verses by text content, reference, or keywords

## Request Schema

### Query Parameters
```typescript
interface SearchQuery {
  q: string;                    // Search query (required)
  limit?: number;              // Results limit (default: 20, max: 100)
  offset?: number;             // Pagination offset (default: 0)
  book?: string;               // Filter by book name (optional)
  chapter?: number;            // Filter by chapter (optional)
  include_analysis?: boolean;   // Include full analysis data (default: false)
}
```

### Example Requests
```
GET /api/search?q=love&limit=10
GET /api/search?q=Philippians 3:1
GET /api/search?q=joy&book=Philippians&include_analysis=true
```

## Response Schema

### Success Response (200)
```typescript
interface SearchResponse {
  results: SearchResult[];
  total_count: number;
  query: string;
  execution_time_ms: number;
  pagination: {
    limit: number;
    offset: number;
    has_more: boolean;
  };
}

interface SearchResult {
  verse: {
    id: number;
    reference: string;
    niv_text: string;
    book_name: string;
    chapter_number: number;
    verse_number: number;
  };
  relevance_score: number;
  match_highlights: string[];
  preview_text: string;
  analysis?: VerseAnalysis; // Only if include_analysis=true
}
```

### Error Responses

#### 400 Bad Request
```typescript
interface ErrorResponse {
  error: "INVALID_QUERY" | "INVALID_LIMIT" | "INVALID_BOOK";
  message: string;
  details?: Record<string, string>;
}
```

#### 500 Internal Server Error
```typescript
interface ErrorResponse {
  error: "SEARCH_FAILED";
  message: string;
  request_id: string;
}
```

## Contract Tests

### Test Cases
1. **Valid text search**
   - Query: "love"
   - Expected: 200 response with relevant verses

2. **Valid reference search**
   - Query: "Philippians 3:1"
   - Expected: 200 response with exact verse match

3. **Empty query**
   - Query: ""
   - Expected: 400 error "INVALID_QUERY"

4. **Invalid limit**
   - Query: "love", limit: 101
   - Expected: 400 error "INVALID_LIMIT"

5. **No results**
   - Query: "xyznonexistent"
   - Expected: 200 response with empty results array

6. **Book filter**
   - Query: "joy", book: "Philippians"
   - Expected: 200 response with Philippians verses only

### Performance Requirements
- Response time: <500ms for typical queries
- Timeout: 5s maximum
- Rate limit: 100 requests per minute per IP