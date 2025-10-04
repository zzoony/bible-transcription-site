'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export interface HeaderProps {
  onMenuClick?: () => void
  showMobileMenu?: boolean
  className?: string
}

export function Header({
  onMenuClick,
  showMobileMenu = false,
  className,
}: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect to set mounted on client side
  useState(() => {
    setMounted(true)
  })

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header
      className={`border-b bg-background sticky top-0 z-50 ${className || ''}`}
      data-testid="header"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Mobile Menu Button */}
        {showMobileMenu && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="md:hidden"
            aria-label="Menu"
            data-testid="mobile-menu-button"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* Logo/Title */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            data-testid="logo"
          >
            Bible Transcription
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6" role="navigation">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/search"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Search
          </Link>
        </nav>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          data-testid="theme-toggle"
        >
          {mounted && theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  )
}