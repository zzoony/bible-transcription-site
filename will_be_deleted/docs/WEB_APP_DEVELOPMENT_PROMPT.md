# Bible Transcription Site - Web Application Development Prompt

## 🎯 Project Overview

I want to build a modern web application for Bible verse analysis using **spec-kit** for project management, **Next.js** for the frontend, **Supabase** as the backend, and publish it using **v0**. The application should follow v0's modern design patterns and component library standards.

## 📊 Current State

### ✅ Backend Ready
- **Database**: Supabase PostgreSQL with complete schema
- **Data**: 715 rows of Bible analysis data (Philippians complete)
  - 104 verses with full linguistic analysis
  - 147 sentence structures, 191 vocabulary entries
  - 64 contextual explanations, 64 Korean translations
  - 139 special explanations
- **API**: Supabase REST API with row-level security
- **Authentication**: Supabase Auth configured

### 📁 Existing Project Structure
```
bible-transcription-site/
├── agents/                 # Analysis engines (existing)
├── database/              # Local PostgreSQL (existing)
├── docs/                  # Documentation (existing)
├── scripts/               # Migration scripts (existing)
├── temp/                  # Temporary files (existing)
├── .env                   # Environment variables (with Supabase config)
└── package.json           # Node.js dependencies (basic)
```

## 🛠 Tech Stack Requirements

### Frontend Framework
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling (v0 compatible)
- **shadcn/ui** components (v0 standard)

### Backend & Database
- **Supabase** (already configured)
  - URL: `https://kmbndafjfxzbyokzqgno.supabase.co`
  - Anon Key: Available in `.env`
  - Service Key: Available in `.env`

### Development Tools
- **spec-kit** for project specification and management
- **v0** for component generation and design
- **ESLint + Prettier** for code quality

## 🎨 Design Requirements (v0 Style)

### Visual Design
- **Modern, clean interface** following v0 design patterns
- **Responsive design** (mobile-first approach)
- **Dark/light mode support**
- **Professional typography** with proper hierarchy
- **Consistent spacing** using Tailwind design tokens

### Component Library
- Use **shadcn/ui** components exclusively
- Follow **v0 component patterns**:
  - Card-based layouts
  - Proper loading states
  - Error boundaries
  - Accessible form controls
  - Smooth animations/transitions

### Color Scheme
- **Primary**: Modern blue palette (v0 style)
- **Secondary**: Subtle grays for content
- **Accent**: Gold/amber for highlights
- **Semantic colors**: Success (green), warning (yellow), error (red)

## 📋 Feature Requirements

### Core Features
1. **Verse Search & Browse**
   - Search by text content, reference, or keyword
   - Browse by book/chapter/verse
   - Advanced filtering options

2. **Detailed Verse Analysis Display**
   - Original NIV text
   - Sentence structure breakdown
   - Vocabulary with IPA + Korean pronunciation
   - Contextual explanations
   - Korean translations
   - Special explanations

3. **Modern UI Components**
   - Search bar with autocomplete
   - Responsive verse cards
   - Expandable analysis sections
   - Copy-to-clipboard functionality
   - Share verse feature

### Technical Features
- **Server-side rendering** for SEO
- **Progressive Web App** capabilities
- **Real-time search** with debouncing
- **Infinite scroll** for large result sets
- **Optimistic updates** for better UX

## 🗂 Spec-Kit Setup Instructions

### 1. Initialize spec-kit
```bash
# Install spec-kit globally
npm install -g @spec-kit/cli

# Initialize in project root
cd /Users/peter/Dev/bible-transcription-site
spec-kit init --template=nextjs-app

# Configure for Bible transcription site
spec-kit config set project-name "Bible Transcription Site"
spec-kit config set description "Modern Bible verse analysis with linguistic insights"
```

### 2. Create Specifications
```bash
# Create feature specifications
spec-kit spec create features/verse-search.md
spec-kit spec create features/verse-analysis.md
spec-kit spec create features/responsive-design.md
spec-kit spec create api/supabase-integration.md
```

## 🚀 Development Workflow

### Phase 1: Project Setup (1-2 hours)
1. **spec-kit initialization** and project structure
2. **Next.js 14 setup** with TypeScript
3. **Supabase client configuration**
4. **shadcn/ui installation** and theme setup
5. **Basic routing structure**

### Phase 2: Core Components (3-4 hours)
1. **Layout components** (header, footer, navigation)
2. **Verse search interface**
3. **Verse card components**
4. **Analysis display components**
5. **Loading and error states**

### Phase 3: Feature Implementation (4-5 hours)
1. **Search functionality** with Supabase queries
2. **Verse detail pages** with full analysis
3. **Responsive design** implementation
4. **Performance optimization**
5. **PWA features**

### Phase 4: Polish & Deploy (1-2 hours)
1. **v0 design review** and refinements
2. **Testing and debugging**
3. **Vercel deployment** setup
4. **Domain configuration**

## 📝 Specific Implementation Guidelines

### Supabase Integration
```typescript
// Example query structure for verse search
const searchVerses = async (query: string) => {
  const { data, error } = await supabase
    .from('verses')
    .select(`
      *,
      sentence_structures(*),
      vocabulary(*),
      contextual_explanations(*),
      korean_translations(*),
      special_explanations(*)
    `)
    .ilike('niv_text', `%${query}%`)
    .limit(20)

  return { data, error }
}
```

### Component Structure
```
components/
├── ui/              # shadcn/ui components
├── verse/           # Verse-specific components
│   ├── VerseCard.tsx
│   ├── VerseDetail.tsx
│   └── AnalysisDisplay.tsx
├── search/          # Search components
│   ├── SearchBar.tsx
│   └── SearchResults.tsx
└── layout/          # Layout components
    ├── Header.tsx
    ├── Footer.tsx
    └── Navigation.tsx
```

### File Structure
```
app/
├── (main)/
│   ├── page.tsx           # Home page with search
│   ├── search/
│   │   └── page.tsx       # Search results
│   └── verse/
│       └── [reference]/
│           └── page.tsx   # Verse detail page
├── globals.css
└── layout.tsx
```

## 🎯 Success Criteria

### Functional Requirements
- [ ] Verse search works with real-time results
- [ ] Complete verse analysis displays correctly
- [ ] Responsive design works on all devices
- [ ] Performance: <2s initial load, <500ms search
- [ ] Accessibility: WCAG 2.1 AA compliance

### Design Requirements
- [ ] Follows v0 design patterns consistently
- [ ] Professional, modern appearance
- [ ] Smooth animations and transitions
- [ ] Consistent spacing and typography
- [ ] Dark/light mode toggle works

### Technical Requirements
- [ ] TypeScript with strict mode
- [ ] SEO optimized with proper meta tags
- [ ] PWA installation available
- [ ] Error handling and loading states
- [ ] Production deployment successful

## 🔗 Environment Variables
```env
# Supabase Configuration (already in .env)
SUPABASE_URL=https://kmbndafjfxzbyokzqgno.supabase.co
SUPABASE_ANON_KEY=[existing_key]
SUPABASE_SERVICE_KEY=[existing_key]

# Next.js Configuration
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_ANON_KEY
```

## 📋 Getting Started Command

Execute this development setup in order:

1. **Spec-kit setup**: `spec-kit init --template=nextjs-app`
2. **Dependencies**: `npm install @supabase/supabase-js @radix-ui/react-* class-variance-authority`
3. **shadcn/ui setup**: `npx shadcn-ui@latest init`
4. **Development server**: `npm run dev`
5. **v0 integration**: Use v0 to generate component designs and copy to project

## 🎨 v0 Prompts for Component Generation

### Search Interface
```
Create a modern Bible verse search interface using shadcn/ui components. Include:
- Large search input with autocomplete
- Filter buttons for books/chapters
- Recent searches display
- Clean, professional design with proper spacing
- Dark mode support
```

### Verse Analysis Card
```
Design a comprehensive verse analysis card component with:
- Verse reference and text prominently displayed
- Expandable sections for grammar, vocabulary, context
- IPA pronunciation and Korean translations
- Copy and share buttons
- Professional biblical study aesthetic
```

This prompt provides a complete roadmap for building a professional Bible transcription web application that leverages your existing Supabase backend and follows modern v0 design patterns.