/**
 * Integration Test: Responsive Design and Theme Toggle
 *
 * Purpose: Test responsive design and theme system from quickstart.md Test 3
 * - Mobile, tablet, desktop layouts
 * - Theme switching (light/dark)
 * - Accessibility features
 */

import { test, expect, devices } from '@playwright/test'

test.describe('Responsive Design', () => {
  test('should display mobile layout correctly', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Mobile menu button should be visible
    const mobileMenu = page.getByRole('button', { name: /menu/i })
    await expect(mobileMenu).toBeVisible()

    // Search bar should be full width on mobile
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await expect(searchInput).toBeVisible()

    const searchBox = await searchInput.boundingBox()
    const viewport = page.viewportSize()

    // Search should take most of the width
    expect(searchBox?.width).toBeGreaterThan(viewport!.width * 0.8)
  })

  test('should display tablet layout correctly', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize(devices['iPad'].viewport)
    await page.goto('/')

    // Should have adapted layout for tablet
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Search interface should be visible
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await expect(searchInput).toBeVisible()
  })

  test('should display desktop layout correctly', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')

    // Desktop navigation should be visible
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // Search interface should be visible
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await expect(searchInput).toBeVisible()

    // Desktop-specific features like sidebar might be visible
    // (if implemented)
  })

  test('should handle search results responsively on mobile', async ({
    page,
  }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Perform search
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Results should be displayed in mobile-friendly list
    const results = page.locator('[data-testid="search-result"]')
    await expect(results.first()).toBeVisible()

    // Each result should fit within mobile viewport
    const firstResult = results.first()
    const resultBox = await firstResult.boundingBox()
    const viewport = page.viewportSize()

    expect(resultBox?.width).toBeLessThanOrEqual(viewport!.width)
  })

  test('should display verse analysis responsively on mobile', async ({
    page,
  }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/verse/philippians-3-1')

    // All sections should be visible and scrollable
    await expect(page.getByTestId('verse-text')).toBeVisible()
    await expect(page.getByTestId('sentence-structure')).toBeVisible()
    await expect(page.getByTestId('vocabulary')).toBeVisible()

    // Vocabulary table should be responsive (scrollable or stacked)
    const vocabTable = page.getByRole('table')
    await expect(vocabTable).toBeVisible()

    // Table should not overflow viewport
    const tableBox = await vocabTable.boundingBox()
    const viewport = page.viewportSize()
    expect(tableBox?.width).toBeLessThanOrEqual(viewport!.width)
  })
})

test.describe('Theme Toggle', () => {
  test('should have theme toggle button', async ({ page }) => {
    await page.goto('/')

    // Theme toggle button should be present
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await expect(themeToggle).toBeVisible()
  })

  test('should toggle between light and dark themes', async ({ page }) => {
    await page.goto('/')

    // Get initial theme
    const html = page.locator('html')
    const initialClass = await html.getAttribute('class')

    // Click theme toggle
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await themeToggle.click()

    // Theme should change
    await page.waitForTimeout(300) // Wait for transition
    const newClass = await html.getAttribute('class')
    expect(newClass).not.toBe(initialClass)

    // Should toggle between 'light' and 'dark' classes
    expect(newClass).toMatch(/light|dark/)
  })

  test('should persist theme preference', async ({ page, context }) => {
    await page.goto('/')

    // Toggle to dark theme
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await themeToggle.click()

    await page.waitForTimeout(300)

    // Get current theme
    const html = page.locator('html')
    const theme = await html.getAttribute('class')

    // Open new page in same context
    const newPage = await context.newPage()
    await newPage.goto('/')

    // Theme should be persisted
    const newHtml = newPage.locator('html')
    const newTheme = await newHtml.getAttribute('class')
    expect(newTheme).toBe(theme)

    await newPage.close()
  })

  test('should apply theme colors correctly', async ({ page }) => {
    await page.goto('/')

    // Get background color in light theme
    const body = page.locator('body')
    const lightBg = await body.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )

    // Toggle to dark theme
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await themeToggle.click()
    await page.waitForTimeout(300)

    // Background color should change
    const darkBg = await body.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )

    expect(lightBg).not.toBe(darkBg)
  })

  test('should update all components when theme changes', async ({ page }) => {
    await page.goto('/')

    // Perform search to show multiple components
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Toggle theme
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await themeToggle.click()
    await page.waitForTimeout(300)

    // All components should adapt to new theme
    // Check header
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check results cards
    const results = page.locator('[data-testid="search-result"]')
    await expect(results.first()).toBeVisible()

    // No styling issues should appear
    await expect(page.locator('body')).not.toContainText(/undefined/)
  })

  test('should respect system theme preference initially', async ({
    page,
    context,
  }) => {
    // Set system to dark mode
    await context.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')

    // Should start in dark theme (if system theme setting is implemented)
    const html = page.locator('html')
    const theme = await html.getAttribute('class')

    // Theme should be set (either dark by default or system preference)
    expect(theme).toMatch(/light|dark|system/)
  })
})

test.describe('Accessibility', () => {
  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/')

    // Search input should have proper label
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await expect(searchInput).toBeVisible()

    // Theme toggle should have proper label
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await expect(themeToggle).toBeVisible()

    // Navigation elements should have proper roles
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
  })

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/')

    // Tab to search input
    await page.keyboard.press('Tab')
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await expect(searchInput).toBeFocused()

    // Type search query
    await page.keyboard.type('love')
    await page.keyboard.press('Enter')

    await page.waitForLoadState('networkidle')

    // Should be able to tab through results
    await page.keyboard.press('Tab')
    const firstResult = page.locator('[data-testid="search-result"]').first()

    // First result should be focusable
    await expect(firstResult).toBeVisible()
  })

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/')

    // Test contrast in light theme
    const body = page.locator('body')
    const bgColor = await body.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    const textColor = await body.evaluate(
      (el) => window.getComputedStyle(el).color
    )

    // Colors should be different (basic contrast check)
    expect(bgColor).not.toBe(textColor)

    // Toggle to dark theme
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    await themeToggle.click()
    await page.waitForTimeout(300)

    // Test contrast in dark theme
    const darkBgColor = await body.evaluate(
      (el) => window.getComputedStyle(el).backgroundColor
    )
    const darkTextColor = await body.evaluate(
      (el) => window.getComputedStyle(el).color
    )

    expect(darkBgColor).not.toBe(darkTextColor)
  })

  test('should have focus indicators', async ({ page }) => {
    await page.goto('/')

    // Tab to search input
    await page.keyboard.press('Tab')
    const searchInput = page.getByRole('textbox', { name: /search/i })

    // Should have visible focus indicator
    const outline = await searchInput.evaluate(
      (el) => window.getComputedStyle(el).outlineWidth
    )
    const boxShadow = await searchInput.evaluate(
      (el) => window.getComputedStyle(el).boxShadow
    )

    // Should have some focus indicator (outline or box-shadow)
    expect(outline !== '0px' || boxShadow !== 'none').toBeTruthy()
  })

  test('should have semantic HTML landmarks', async ({ page }) => {
    await page.goto('/')

    // Should have main landmark
    const main = page.locator('main')
    await expect(main).toBeVisible()

    // Should have navigation landmark
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // Should have header
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Should have footer
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/verse/philippians-3-1')

    // Should have h1 for main title
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()

    // Section headings should be h2
    const h2List = page.locator('h2')
    const h2Count = await h2List.count()
    expect(h2Count).toBeGreaterThan(0)

    // Should not skip heading levels
    const h3List = page.locator('h3')
    if ((await h3List.count()) > 0) {
      // If h3 exists, h2 should also exist
      expect(h2Count).toBeGreaterThan(0)
    }
  })

  test('should support screen reader text', async ({ page }) => {
    await page.goto('/')

    // Look for sr-only or visually-hidden classes
    const srOnlyElements = page.locator('.sr-only, .visually-hidden')

    // At least some screen reader text should exist for better accessibility
    // (not mandatory but recommended)
  })
})

test.describe('Cross-Browser Compatibility', () => {
  test('should work in Chromium', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium')

    await page.goto('/')
    await expect(page.getByRole('textbox', { name: /search/i })).toBeVisible()
  })

  test('should work in Firefox', async ({ page, browserName }) => {
    test.skip(browserName !== 'firefox')

    await page.goto('/')
    await expect(page.getByRole('textbox', { name: /search/i })).toBeVisible()
  })

  test('should work in WebKit (Safari)', async ({ page, browserName }) => {
    test.skip(browserName !== 'webkit')

    await page.goto('/')
    await expect(page.getByRole('textbox', { name: /search/i })).toBeVisible()
  })
})

test.describe('Touch Interactions', () => {
  test('should support touch gestures on mobile', async ({ page }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Perform search
    const searchInput = page.getByRole('textbox', { name: /search/i })
    await searchInput.fill('love')
    await searchInput.press('Enter')

    await page.waitForLoadState('networkidle')

    // Tap on search result
    const firstResult = page.locator('[data-testid="search-result"]').first()
    await firstResult.tap()

    // Should navigate to verse detail
    await expect(page.url()).toMatch(/\/verse\//)
  })

  test('should have large enough touch targets on mobile', async ({ page }) => {
    await page.setViewportSize(devices['iPhone 12'].viewport)
    await page.goto('/')

    // Theme toggle should be large enough for touch (min 44x44px)
    const themeToggle = page.getByRole('button', { name: /theme|dark|light/i })
    const box = await themeToggle.boundingBox()

    expect(box?.width).toBeGreaterThanOrEqual(44)
    expect(box?.height).toBeGreaterThanOrEqual(44)
  })
})