/**
 * Integration Test: Verse Analysis Display
 *
 * Purpose: Test complete verse analysis display from quickstart.md Test 2
 * - Complete analysis display
 * - All linguistic components
 * - Data fetching and rendering
 */

import { test, expect } from '@playwright/test'

test.describe('Verse Analysis Display', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate directly to a verse detail page
    await page.goto('/verse/philippians-3-1')
  })

  test('should display complete verse analysis', async ({ page }) => {
    // Test 2 from quickstart.md: Verse Analysis Display

    // Original text should be displayed
    const verseText = page.getByTestId('verse-text')
    await expect(verseText).toBeVisible()
    await expect(verseText).not.toBeEmpty()

    // Verse reference should be displayed
    const reference = page.getByTestId('verse-reference')
    await expect(reference).toBeVisible()
    await expect(reference).toContainText('Philippians 3:1')
  })

  test('should display sentence structure analysis', async ({ page }) => {
    // Sentence structure section should be visible
    const structureSection = page.getByTestId('sentence-structure')
    await expect(structureSection).toBeVisible()

    // Should have heading
    const heading = structureSection.getByRole('heading', {
      name: /sentence structure/i,
    })
    await expect(heading).toBeVisible()

    // Should have description
    const description = structureSection.getByTestId('structure-description')
    await expect(description).toBeVisible()
    await expect(description).not.toBeEmpty()
  })

  test('should display vocabulary table', async ({ page }) => {
    // Vocabulary section should be visible
    const vocabSection = page.getByTestId('vocabulary')
    await expect(vocabSection).toBeVisible()

    // Should have heading
    const heading = vocabSection.getByRole('heading', {
      name: /vocabulary|주요 단어/i,
    })
    await expect(heading).toBeVisible()

    // Should have table with vocabulary items
    const vocabTable = vocabSection.getByRole('table')
    await expect(vocabTable).toBeVisible()

    // Table should have headers
    await expect(vocabTable.getByRole('columnheader', { name: /word/i })).toBeVisible()
    await expect(vocabTable.getByRole('columnheader', { name: /ipa/i })).toBeVisible()
    await expect(vocabTable.getByRole('columnheader', { name: /korean/i })).toBeVisible()
    await expect(vocabTable.getByRole('columnheader', { name: /meaning/i })).toBeVisible()

    // Should have at least one vocabulary entry
    const rows = vocabTable.getByRole('row')
    const rowCount = await rows.count()
    expect(rowCount).toBeGreaterThan(1) // Header + at least 1 data row
  })

  test('should display IPA and Korean pronunciation', async ({ page }) => {
    const vocabSection = page.getByTestId('vocabulary')
    const vocabTable = vocabSection.getByRole('table')

    // Get first data row
    const firstRow = vocabTable.getByRole('row').nth(1)

    // Should have IPA pronunciation
    const ipaCell = firstRow.locator('td').nth(1)
    await expect(ipaCell).not.toBeEmpty()

    // Should have Korean phonetic representation
    const koreanCell = firstRow.locator('td').nth(2)
    await expect(koreanCell).not.toBeEmpty()
    // Korean pronunciation should contain Korean characters
    const koreanText = await koreanCell.textContent()
    expect(koreanText).toMatch(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)
  })

  test('should display contextual explanation', async ({ page }) => {
    // Contextual explanation section should be visible
    const contextSection = page.getByTestId('contextual-explanation')
    await expect(contextSection).toBeVisible()

    // Should have heading
    const heading = contextSection.getByRole('heading', {
      name: /context|문맥 설명/i,
    })
    await expect(heading).toBeVisible()

    // Should have explanation text
    const explanation = contextSection.getByTestId('explanation-text')
    await expect(explanation).toBeVisible()
    await expect(explanation).not.toBeEmpty()
  })

  test('should display Korean translation', async ({ page }) => {
    // Korean translation section should be visible
    const translationSection = page.getByTestId('korean-translation')
    await expect(translationSection).toBeVisible()

    // Should have heading
    const heading = translationSection.getByRole('heading', {
      name: /korean translation|한국어 번역/i,
    })
    await expect(heading).toBeVisible()

    // Should have translation text with Korean characters
    const translation = translationSection.getByTestId('translation-text')
    await expect(translation).toBeVisible()
    const translationText = await translation.textContent()
    expect(translationText).toMatch(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/)
  })

  test('should display special explanation section', async ({ page }) => {
    // Special explanation section should be visible (may not exist for all verses)
    const specialSection = page.getByTestId('special-explanation')

    // If section exists, verify content
    if (await specialSection.isVisible()) {
      const heading = specialSection.getByRole('heading', {
        name: /special|특별 설명/i,
      })
      await expect(heading).toBeVisible()

      const explanation = specialSection.getByTestId('special-text')
      await expect(explanation).toBeVisible()
      await expect(explanation).not.toBeEmpty()
    }
  })

  test('should handle verse without complete analysis', async ({ page }) => {
    // Navigate to verse that might not have full analysis
    await page.goto('/verse/genesis-1-1')

    // Verse text should still be displayed
    const verseText = page.getByTestId('verse-text')
    await expect(verseText).toBeVisible()

    // Should show message about missing analysis or empty states
    const analysisContainer = page.getByTestId('analysis-container')

    // If analysis sections are missing, should handle gracefully
    // No error messages should be displayed
    await expect(page.locator('body')).not.toContainText(/error/i)
  })

  test('should provide copy-to-clipboard functionality', async ({ page }) => {
    // Copy button should be present
    const copyButton = page.getByRole('button', { name: /copy/i })
    await expect(copyButton).toBeVisible()

    // Click copy button
    await copyButton.click()

    // Success feedback should appear
    const successMessage = page.getByText(/copied/i)
    await expect(successMessage).toBeVisible({ timeout: 2000 })
  })

  test('should provide sharing functionality', async ({ page }) => {
    // Share button should be present
    const shareButton = page.getByRole('button', { name: /share/i })
    await expect(shareButton).toBeVisible()

    // Click share button
    await shareButton.click()

    // Share modal or options should appear
    const shareModal = page.getByTestId('share-modal')
    await expect(shareModal).toBeVisible({ timeout: 1000 })
  })

  test('should have proper semantic HTML structure', async ({ page }) => {
    // Main content should be in <main> tag
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Sections should use <section> or <article> tags
    const sections = page.locator('section, article')
    const sectionCount = await sections.count()
    expect(sectionCount).toBeGreaterThan(0)

    // Headings should follow proper hierarchy
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()

    const h2List = page.locator('h2')
    const h2Count = await h2List.count()
    expect(h2Count).toBeGreaterThan(0)
  })

  test('should load analysis data within 2 seconds', async ({ page }) => {
    const start = Date.now()

    await page.goto('/verse/philippians-3-1')

    // Wait for all analysis sections to be visible
    await expect(page.getByTestId('verse-text')).toBeVisible()
    await expect(page.getByTestId('sentence-structure')).toBeVisible()
    await expect(page.getByTestId('vocabulary')).toBeVisible()

    const duration = Date.now() - start
    expect(duration).toBeLessThan(2000)
  })

  test('should navigate back to search results', async ({ page }) => {
    // Navigate from search results to verse detail
    await page.goto('/')
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    const firstResult = page.locator('[data-testid="search-result"]').first()
    await firstResult.click()

    // Should be on verse detail page
    await expect(page.url()).toMatch(/\/verse\//)

    // Back button should be present
    const backButton = page.getByRole('button', { name: /back|return/i })
    await expect(backButton).toBeVisible()

    // Click back
    await backButton.click()

    // Should return to search results
    await expect(page.url()).toContain('/search')
  })

  test('should display verse reference in correct format', async ({ page }) => {
    const reference = page.getByTestId('verse-reference')
    await expect(reference).toBeVisible()

    // Reference should be in "Book Chapter:Verse" format
    const referenceText = await reference.textContent()
    expect(referenceText).toMatch(/[A-Z][a-z]+ \d+:\d+/)
  })

  test('should show loading state while fetching data', async ({ page }) => {
    // Navigate to verse (simulate slow network)
    await page.route('**/api/verse/**', async (route) => {
      await page.waitForTimeout(500)
      await route.continue()
    })

    await page.goto('/verse/philippians-3-1')

    // Loading indicator should appear
    const loading = page.getByTestId('verse-loading')
    await expect(loading).toBeVisible({ timeout: 1000 })

    // Then content should appear
    await expect(page.getByTestId('verse-text')).toBeVisible()
  })
})