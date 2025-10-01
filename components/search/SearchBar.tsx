'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface SearchBarProps {
  onSearch: (query: string) => void
  onClear?: () => void
  placeholder?: string
  defaultValue?: string
  debounceMs?: number
  showAutocomplete?: boolean
  autocompleteSuggestions?: string[]
  onSuggestionSelect?: (suggestion: string) => void
  className?: string
}

export function SearchBar({
  onSearch,
  onClear,
  placeholder = 'Search Bible verses...',
  defaultValue = '',
  debounceMs = 300,
  showAutocomplete = false,
  autocompleteSuggestions = [],
  onSuggestionSelect,
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const debounceTimerRef = useRef<NodeJS.Timeout>()
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Debounced search
  const debouncedSearch = useCallback(
    (value: string) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }

      debounceTimerRef.current = setTimeout(() => {
        if (value.trim()) {
          onSearch(value.trim())
        }
      }, debounceMs)
    },
    [onSearch, debounceMs]
  )

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (showAutocomplete && value.length >= 2) {
      setShowSuggestions(true)
      debouncedSearch(value)
    } else {
      setShowSuggestions(false)
    }
  }

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
      setShowSuggestions(false)
    }
  }

  // Handle clear
  const handleClear = () => {
    setQuery('')
    setShowSuggestions(false)
    onClear?.()
    inputRef.current?.focus()
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    setShowSuggestions(false)
    onSuggestionSelect?.(suggestion)
    onSearch(suggestion)
  }

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Cleanup debounce timer
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  return (
    <div className={cn('relative w-full', className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              className="pl-10 pr-10"
              aria-label="Search"
              data-testid="search-input"
            />
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
                data-testid="clear-button"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button
            type="submit"
            size="default"
            disabled={!query.trim()}
            data-testid="search-button"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </form>

      {/* Autocomplete Suggestions */}
      {showAutocomplete && showSuggestions && autocompleteSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 mt-2 w-full rounded-md border bg-popover shadow-md"
          data-testid="autocomplete-dropdown"
        >
          <ul className="max-h-60 overflow-auto p-1">
            {autocompleteSuggestions.map((suggestion, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  data-testid="autocomplete-suggestion"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}