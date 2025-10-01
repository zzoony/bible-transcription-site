# Quickstart Guide: Bible Transcription Site

**Purpose**: Validate core functionality through user journey testing
**Target Audience**: Developers, QA testers, stakeholders
**Estimated Time**: 10-15 minutes

## Prerequisites

### Environment Setup
```bash
# Clone repository
git clone [repository-url]
cd bible-transcription-site

# Install dependencies
npm install

# Environment configuration
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

### Required Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Core User Journey Tests

### Test 1: Homepage and Search Interface
**Goal**: Verify search functionality works correctly

1. **Navigate to homepage**
   - URL: `http://localhost:3000`
   - Expected: Clean, modern interface with prominent search bar
   - Verify: Dark/light theme toggle is visible and functional

2. **Perform basic search**
   - Action: Type "love" in search bar
   - Expected: Real-time search suggestions appear
   - Expected: Search results display within 500ms

3. **Validate search results**
   - Expected: Results show verse references (e.g., "1 Corinthians 13:4")
   - Expected: Preview text visible for each result
   - Expected: Relevance-based ordering
   - Expected: "No results" message for invalid searches

### Test 2: Verse Analysis Display
**Goal**: Verify detailed analysis functionality

1. **Access verse detail**
   - Action: Click on "Philippians 3:1" from search results
   - Expected: Navigate to `/verse/philippians-3-1`
   - Expected: Complete analysis loads within 1 second

2. **Verify analysis components**
   - Expected: Original NIV text prominently displayed
   - Expected: Sentence structure breakdown visible
   - Expected: Vocabulary table with IPA and Korean pronunciation
   - Expected: Cultural/historical context explanation
   - Expected: Korean translation(s) displayed
   - Expected: Special explanations section

3. **Test interactive features**
   - Action: Click copy button for verse text
   - Expected: Text copied to clipboard with confirmation
   - Action: Click share button
   - Expected: Share dialog opens with verse reference and text

### Test 3: Responsive Design
**Goal**: Verify mobile and tablet compatibility

1. **Test mobile viewport**
   - Action: Resize browser to 375px width
   - Expected: Layout adapts to mobile-first design
   - Expected: Search bar remains accessible
   - Expected: Analysis sections stack vertically

2. **Test tablet viewport**
   - Action: Resize browser to 768px width
   - Expected: Optimized layout for tablet viewing
   - Expected: Navigation remains intuitive

3. **Test desktop viewport**
   - Action: Resize browser to 1024px+ width
   - Expected: Full desktop layout utilizes available space
   - Expected: Side-by-side content where appropriate

### Test 4: Performance and Accessibility
**Goal**: Verify non-functional requirements

1. **Performance validation**
   - Metric: Initial page load completes in <2 seconds
   - Metric: Search response time <500ms
   - Metric: Verse analysis loads in <1 second
   - Tool: Chrome DevTools Network tab

2. **Accessibility validation**
   - Test: Navigate using only keyboard (Tab, Enter, Arrow keys)
   - Test: Screen reader compatibility (use browser dev tools)
   - Test: Color contrast meets WCAG 2.1 AA standards
   - Expected: All interactive elements are keyboard accessible

### Test 5: Error Handling
**Goal**: Verify graceful error handling

1. **Test invalid search**
   - Action: Search for "xyznonexistent123"
   - Expected: "No results found" message with search suggestions

2. **Test invalid verse reference**
   - Action: Navigate to `/verse/invalid-reference`
   - Expected: 404 page with navigation back to search

3. **Test network errors**
   - Action: Disconnect network, perform search
   - Expected: Error message with retry option
   - Expected: Cached results still accessible if available

## Advanced Feature Tests

### Test 6: Theme Persistence
**Goal**: Verify theme preference persistence

1. **Switch to dark mode**
   - Action: Toggle theme to dark mode
   - Expected: Immediate UI change to dark theme

2. **Refresh page**
   - Expected: Dark theme persists after page reload
   - Expected: Theme preference saved in localStorage

### Test 7: Search Filtering
**Goal**: Verify advanced search capabilities

1. **Book-specific search**
   - Action: Search "joy" with Philippians filter
   - Expected: Results limited to Philippians book only

2. **Reference-based search**
   - Action: Search "Philippians 3:1"
   - Expected: Direct navigation to verse analysis page

## Success Criteria Checklist

### Functional Requirements
- [ ] Search functionality works with real-time results
- [ ] Verse analysis displays all required components
- [ ] Copy and share features function correctly
- [ ] Theme toggle works and persists preferences
- [ ] Error states display appropriate messages

### Performance Requirements
- [ ] Initial page load: <2 seconds
- [ ] Search response: <500ms
- [ ] Verse analysis load: <1 second
- [ ] No blocking JavaScript errors in console

### Design Requirements
- [ ] Modern, professional appearance
- [ ] Consistent spacing and typography
- [ ] Smooth animations and transitions
- [ ] Dark/light mode toggle functional

### Accessibility Requirements
- [ ] Full keyboard navigation support
- [ ] Screen reader compatibility
- [ ] WCAG 2.1 AA color contrast compliance
- [ ] Semantic HTML structure

## Troubleshooting Common Issues

### Development Server Won't Start
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Supabase Connection Errors
- Verify environment variables are correctly set
- Check Supabase project status and API keys
- Ensure database tables exist with correct schema

### Search Not Working
- Verify Supabase connection
- Check browser network tab for API errors
- Confirm database contains verse data

### Theme Toggle Not Working
- Check localStorage in browser dev tools
- Verify CSS custom properties are defined
- Ensure JavaScript is enabled

## Manual Testing Script

```bash
# Run all tests
npm run test

# Run E2E tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y

# Build and serve production version
npm run build
npm run start
```

## Deployment Validation

### Pre-deployment Checklist
- [ ] All tests pass locally
- [ ] Build completes without errors
- [ ] Environment variables configured for production
- [ ] Database migration completed (if required)

### Post-deployment Verification
- [ ] Production URL accessible
- [ ] Search functionality works on production
- [ ] SSL certificate valid
- [ ] Analytics/monitoring configured

**Expected Duration**: Complete validation should take 10-15 minutes for experienced developers, 20-30 minutes for first-time users.