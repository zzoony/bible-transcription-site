'use client'

import Link from 'next/link'

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`border-t bg-background ${className || ''}`}
      data-testid="footer"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-sm text-muted-foreground">
              Bible Transcription Site provides detailed linguistic analysis of
              Bible verses with Korean translations and contextual explanations.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Credits Section */}
          <div>
            <h3 className="font-semibold mb-3">Credits</h3>
            <p className="text-sm text-muted-foreground">
              Scripture quotations are from the New International Version (NIV).
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Bible Transcription Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}