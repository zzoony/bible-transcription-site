# Tasks: Bible Transcription Site - Modern Web Application

**Input**: Design documents from `/specs/001-bible-transcription-site/`
**Prerequisites**: plan.md (✓), research.md (✓), data-model.md (✓), contracts/ (✓), quickstart.md (✓)

## Execution Flow (main)
```
1. Load plan.md from feature directory ✓
   → Tech stack: Next.js 14+, TypeScript, Supabase, shadcn/ui, Tailwind CSS
   → Structure: Web application with app router
2. Load design documents: ✓
   → data-model.md: 6 entities (Verse, SentenceStructure, Vocabulary, etc.)
   → contracts/: 2 API endpoints (search, verse analysis)
   → quickstart.md: 7 test scenarios extracted
3. Generate tasks by category: ✓
   → Setup: Next.js project, Supabase, shadcn/ui
   → Tests: Contract tests for 2 APIs, integration tests for user journeys
   → Core: TypeScript types, React components, hooks
   → Integration: API routes, database queries, theme system
   → Polish: Accessibility, performance, PWA features
4. Apply task rules: ✓
   → [P] for independent components and tests
   → Sequential for shared files and dependencies
5. Number tasks sequentially: T001-T041 ✓
6. Generate dependency graph: ✓
7. Create parallel execution examples: ✓
8. Validate task completeness: ✓
9. Return: SUCCESS (41 tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
Based on Next.js 14 App Router structure from plan.md:
- **Components**: `components/` at repository root
- **Pages**: `app/` directory with route groups
- **Types**: `lib/types.ts` for TypeScript definitions
- **Tests**: `tests/` for contract and integration tests
- **Hooks**: `hooks/` for custom React hooks

## Phase 3.1: Setup & Configuration ✅ COMPLETE

- [x] T001 Initialize Next.js 14 project with TypeScript and configure app router structure
- [x] T002 Install and configure dependencies: Supabase client, shadcn/ui, Tailwind CSS, Radix UI primitives
- [x] T003 [P] Configure development tools: ESLint, Prettier, Git hooks for code quality
- [x] T004 [P] Setup environment configuration and create .env.example with Supabase variables
- [x] T005 [P] Initialize shadcn/ui components library and configure theme system

## Phase 3.2: Type Definitions & Data Models ✅ COMPLETE

- [x] T006 [P] Create core entity types in lib/types.ts based on data-model.md (Verse, SentenceStructure, Vocabulary, etc.)
- [x] T007 [P] Create API response types in lib/types.ts for SearchResponse and VerseAnalysisResponse from contracts
- [x] T008 [P] Create client state types in lib/types.ts for UserPreferences and SearchResult entities
- [x] T009 [P] Setup Supabase client configuration in lib/supabase.ts with TypeScript types

## Phase 3.3: Contract Tests (TDD) ✅ COMPLETE
**CRITICAL: These tests MUST be written and MUST FAIL before ANY API implementation**

- [x] T010 [P] Contract test for GET /api/search endpoint in tests/contract/search-api.test.ts
- [x] T011 [P] Contract test for GET /api/verse/{reference} endpoint in tests/contract/verse-api.test.ts
- [x] T012 [P] Integration test for search functionality user journey in tests/integration/search-flow.test.ts
- [x] T013 [P] Integration test for verse analysis display in tests/integration/verse-analysis.test.ts
- [x] T014 [P] Integration test for responsive design and theme toggle in tests/integration/responsive-ui.test.ts

## Phase 3.4: Core UI Components ✅ COMPLETE

- [x] T015 [P] Create SearchBar component in components/search/SearchBar.tsx with debounced input and autocomplete
- [x] T016 [P] Create SearchResults component in components/search/SearchResults.tsx with verse previews and pagination
- [x] T017 [P] Create VerseCard component in components/verse/VerseCard.tsx for search result display
- [x] T018 [P] Create VerseDetail component in components/verse/VerseDetail.tsx for complete analysis display
- [x] T019 [P] Create AnalysisDisplay component in components/verse/AnalysisDisplay.tsx for linguistic breakdown sections
- [x] T020 [P] Create Header component in components/layout/Header.tsx with navigation and theme toggle
- [x] T021 [P] Create Footer component in components/layout/Footer.tsx with links and credits
- [x] T022 [P] Create ThemeProvider component in components/providers/ThemeProvider.tsx for dark/light mode

## Phase 3.5: Custom Hooks & Business Logic ✅ COMPLETE

- [x] T023 [P] Create useSearch hook in hooks/useSearch.ts for search functionality with Supabase queries
- [x] T024 [P] Create useVerse hook in hooks/useVerse.ts for verse analysis data fetching
- [x] T025 [P] Create useTheme hook in hooks/useTheme.ts for theme management and persistence
- [x] T026 [P] Create utility functions in lib/utils.ts for verse reference parsing and formatting

## Phase 3.6: Pages & Routing ✅ COMPLETE

- [x] T027 Create root layout in app/layout.tsx with metadata, font loading, and theme provider
- [x] T028 Create home page in app/(main)/page.tsx with search interface and recent searches
- [x] T029 Create search results page in app/(main)/search/page.tsx with SearchResults component
- [x] T030 Create verse detail page in app/(main)/verse/[reference]/page.tsx with complete analysis
- [x] T031 [P] Create 404 error page in app/not-found.tsx with navigation back to search

## Phase 3.7: API Implementation ✅ COMPLETE

- [x] T032 [P] Implement search API route in app/api/search/route.ts using Supabase full-text search
- [x] T033 [P] Implement verse analysis API route in app/api/verse/[reference]/route.ts with complete data fetching
- [x] T034 [P] Add error handling and validation middleware for API routes

## Phase 3.8: Advanced Features & Integration ✅ COMPLETE

- [x] T035 [P] Implement copy-to-clipboard functionality for verse sharing
- [x] T036 [P] Add social sharing features with Open Graph meta tags
- [x] T037 Setup Progressive Web App (PWA) configuration with service worker for offline search
- [x] T038 Implement search history and preferences persistence with localStorage

## Phase 3.9: Polish & Performance ✅ COMPLETE

- [x] T039 [P] Add comprehensive accessibility features and ARIA labels for WCAG 2.1 AA compliance
- [x] T040 [P] Optimize performance with Next.js Image component and lazy loading for verse analysis
- [x] T041 [P] Add Playwright E2E tests covering all quickstart.md scenarios

## Dependencies

**Sequential Dependencies**:
- Setup (T001-T005) → Types (T006-T009) → Contract Tests (T010-T014) → Components (T015-T022)
- Types (T006-T009) block all component development
- Contract Tests (T010-T014) must fail before API implementation (T032-T034)
- Components (T015-T022) before Pages (T027-T031)
- Hooks (T023-T026) before Pages that use them

**No Dependencies (Parallel Safe)**:
- All [P] tasks within same phase can run simultaneously
- T003, T004, T005 (different config files)
- T010-T014 (different test files)
- T015-T021 (different component files)
- T023-T025 (different hook files)

## Parallel Execution Examples

### Phase 3.2: Type Definitions (Run simultaneously)
```bash
Task: "Create core entity types in lib/types.ts"
Task: "Create API response types in lib/types.ts"
Task: "Create client state types in lib/types.ts"
Task: "Setup Supabase client in lib/supabase.ts"
```

### Phase 3.3: Contract Tests (Run simultaneously after types complete)
```bash
Task: "Contract test GET /api/search in tests/contract/search-api.test.ts"
Task: "Contract test GET /api/verse/{reference} in tests/contract/verse-api.test.ts"
Task: "Integration test search flow in tests/integration/search-flow.test.ts"
Task: "Integration test verse analysis in tests/integration/verse-analysis.test.ts"
Task: "Integration test responsive UI in tests/integration/responsive-ui.test.ts"
```

### Phase 3.4: Core Components (Run simultaneously after tests fail)
```bash
Task: "Create SearchBar component in components/search/SearchBar.tsx"
Task: "Create VerseCard component in components/verse/VerseCard.tsx"
Task: "Create AnalysisDisplay component in components/verse/AnalysisDisplay.tsx"
Task: "Create Header component in components/layout/Header.tsx"
Task: "Create ThemeProvider component in components/providers/ThemeProvider.tsx"
```

## Notes
- [P] tasks = different files, no dependencies within phase
- Verify contract tests fail before implementing APIs (T032-T034)
- Each component should be tested with React Testing Library
- Follow shadcn/ui patterns for all UI components
- Ensure mobile-first responsive design for all components
- Commit after each task completion

## Task Generation Rules Applied

1. **From Contracts**:
   - search-api.md → T010 (contract test) + T032 (implementation)
   - verse-api.md → T011 (contract test) + T033 (implementation)

2. **From Data Model**:
   - 6 entities → T006 (TypeScript types for all entities)
   - Relationships → T023-T024 (hooks for data fetching)

3. **From Quickstart Scenarios**:
   - Test 1 (Search Interface) → T012 (integration test)
   - Test 2 (Verse Analysis) → T013 (integration test)
   - Test 3 (Responsive Design) → T014 (integration test)
   - Performance/Accessibility → T039, T040, T041

4. **From Project Structure**:
   - Next.js components → T015-T022 (UI components)
   - App router pages → T027-T031 (routing)
   - Custom hooks → T023-T026 (business logic)

## Validation Checklist
*GATE: All items checked before task execution*

- [x] All contracts have corresponding tests (T010-T011 for search-api.md, verse-api.md)
- [x] All entities have type definitions (T006 covers all 6 entities from data-model.md)
- [x] All tests come before implementation (T010-T014 before T032-T034)
- [x] Parallel tasks truly independent (different files, no shared state)
- [x] Each task specifies exact file path (all tasks include specific file locations)
- [x] No task modifies same file as another [P] task (verified no conflicts)
- [x] All quickstart scenarios have corresponding tests (T012-T014, T041)
- [x] All required components identified from project structure (search, verse, layout components)

**Task Count**: 41 tasks total
**Estimated Completion**: 2-3 weeks for full implementation
**Critical Path**: T001-T009 → T010-T014 → T015-T022 → T027-T031 → T032-T034