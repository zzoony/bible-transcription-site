/**
 * Integration Test: Search Functionality User Journey
 *
 * Purpose: Test complete user flow from quickstart.md Test 1
 * - Search interface interaction
 * - Result display and navigation
 * - Verse detail viewing
 */

import { test, expect } from '@playwright/test'

test.describe('Search Flow User Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display search interface on home page', async ({ page }) => {
    // Test 1 from quickstart.md: Search Interface
    await expect(page).toHaveTitle(/Bible Transcription/i)

    // Search bar should be visible
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await expect(searchInput).toBeVisible()
    await expect(searchInput).toBeEditable()

    // Search button or icon should be present
    const searchButton = page.getByRole('button', { name: /search/i })
    await expect(searchButton).toBeVisible()
  })

  test('should search and display results', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Enter search query
    await searchInput.fill('love')
    await searchInput.press('Enter')

    // Wait for results to load
    await page.waitForLoadState('networkidle')

    // Should navigate to search results page or show results
    await expect(page.url()).toContain('/search')

    // Results should be displayed
    const results = page.locator('[data-testid="search-result"]')
    await expect(results.first()).toBeVisible({ timeout: 5000 })

    // Each result should have verse reference and text
    const firstResult = results.first()
    await expect(firstResult.getByTestId('verse-reference')).toBeVisible()
    await expect(firstResult.getByTestId('verse-text')).toBeVisible()
  })

  test('should handle empty search results gracefully', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Search for non-existent term
    await searchInput.fill('xyznonexistent123')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Should show "no results" message
    const noResults = page.getByText(/no results found/i)
    await expect(noResults).toBeVisible()
  })

  test('should navigate to verse detail from search results', async ({
    page,
  }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Perform search
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Click on first result
    const firstResult = page.locator('[data-testid="search-result"]').first()
    await firstResult.click()

    // Should navigate to verse detail page
    await expect(page.url()).toMatch(/\/verse\/[a-z]+-\d+-\d+/)

    // Verse detail should be displayed
    await expect(page.getByTestId('verse-text')).toBeVisible()
  })

  test('should implement debounced autocomplete search', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Start typing
    await searchInput.fill('lo')

    // Autocomplete suggestions should appear after delay
    await page.waitForTimeout(500) // Debounce delay

    const autocomplete = page.locator('[data-testid="autocomplete-dropdown"]')
    await expect(autocomplete).toBeVisible({ timeout: 2000 })

    // Should show relevant suggestions
    const suggestions = page.locator('[data-testid="autocomplete-suggestion"]')
    await expect(suggestions.first()).toBeVisible()
  })

  test('should support pagination in search results', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Search for common term to get many results
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Should have pagination controls if results > limit
    const totalResults = await page
      .getByTestId('total-results')
      .textContent()
    const total = parseInt(totalResults || '0')

    if (total > 10) {
      // Next page button should be visible
      const nextButton = page.getByRole('button', { name: /next/i })
      await expect(nextButton).toBeVisible()
      await expect(nextButton).toBeEnabled()

      // Click next page
      await nextButton.click()
      await page.waitForLoadState('networkidle')

      // URL should update with pagination
      await expect(page.url()).toMatch(/offset=\d+/)

      // Previous button should now be enabled
      const prevButton = page.getByRole('button', { name: /previous/i })
      await expect(prevButton).toBeEnabled()
    }
  })

  test('should filter search by book', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Enter search query
    await searchInput.fill('love')

    // Select book filter (Philippians)
    const bookFilter = page.getByRole('combobox', { name: /book/i })
    await bookFilter.selectOption('Philippians')

    // Submit search
    await searchInput.press('Enter')
    await page.waitForLoadState('networkidle')

    // All results should be from Philippians
    const results = page.locator('[data-testid="search-result"]')
    const count = await results.count()

    for (let i = 0; i < count; i++) {
      const reference = await results
        .nth(i)
        .getByTestId('verse-reference')
        .textContent()
      expect(reference).toContain('Philippians')
    }
  })

  test('should maintain search state on back navigation', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Perform search
    await searchInput.fill('love')
    await searchInput.press('Enter')
    await page.waitForLoadState('networkidle')

    // Navigate to verse detail
    const firstResult = page.locator('[data-testid="search-result"]').first()
    await firstResult.click()

    // Go back
    await page.goBack()

    // Search query should be preserved
    await expect(searchInput).toHaveValue('love')

    // Results should still be displayed
    const results = page.locator('[data-testid="search-result"]')
    await expect(results.first()).toBeVisible()
  })

  test('should highlight search terms in results', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Search with specific term
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Search term should be highlighted in results
    const highlighted = page.locator('[data-testid="search-result"] mark')
    await expect(highlighted.first()).toBeVisible()
    await expect(highlighted.first()).toContainText(/love/i)
  })

  test('should show loading state during search', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Start search
    await searchInput.fill('love')
    await searchInput.press('Enter')

    // Loading indicator should appear briefly
    const loading = page.getByTestId('search-loading')
    await expect(loading).toBeVisible({ timeout: 1000 })

    // Then results should appear
    await page.waitForLoadState('networkidle')
    const results = page.locator('[data-testid="search-result"]')
    await expect(results.first()).toBeVisible()
  })

  test('should handle special characters in search query', async ({ page }) => {
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Search with special characters
    await searchInput.fill("God's")
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Should not error and show relevant results or no results
    await expect(page.locator('body')).not.toContainText(/error/i)
  })
})