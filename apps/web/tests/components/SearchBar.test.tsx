import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from '@/components/search/SearchBar'

describe('SearchBar', () => {
  const mockOnSearch = jest.fn()
  const mockOnClear = jest.fn()
  const mockOnSuggestionSelect = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Basic Rendering', () => {
    it('should render search input', () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('type', 'text')
    })

    it('should render search button', () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const button = screen.getByTestId('search-button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Search')
    })

    it('should display custom placeholder', () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          placeholder="Search for verses..."
        />
      )

      const input = screen.getByTestId('search-input')
      expect(input).toHaveAttribute('placeholder', 'Search for verses...')
    })

    it('should display default value', () => {
      render(<SearchBar onSearch={mockOnSearch} defaultValue="love" />)

      const input = screen.getByTestId('search-input') as HTMLInputElement
      expect(input.value).toBe('love')
    })
  })

  describe('Search Functionality', () => {
    it('should call onSearch when form is submitted', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')
      const button = screen.getByTestId('search-button')

      await userEvent.type(input, 'love')
      fireEvent.click(button)

      expect(mockOnSearch).toHaveBeenCalledWith('love')
    })

    it('should call onSearch when Enter is pressed', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'love{Enter}')

      expect(mockOnSearch).toHaveBeenCalledWith('love')
    })

    it('should trim whitespace before searching', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, '  love  {Enter}')

      expect(mockOnSearch).toHaveBeenCalledWith('love')
    })

    it('should not submit empty search', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const button = screen.getByTestId('search-button')
      fireEvent.click(button)

      expect(mockOnSearch).not.toHaveBeenCalled()
    })

    it('should disable search button when input is empty', () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const button = screen.getByTestId('search-button')
      expect(button).toBeDisabled()
    })

    it('should enable search button when input has value', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')
      const button = screen.getByTestId('search-button')

      await userEvent.type(input, 'love')

      expect(button).toBeEnabled()
    })
  })

  describe('Clear Functionality', () => {
    it('should show clear button when input has value', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'love')

      const clearButton = screen.getByTestId('clear-button')
      expect(clearButton).toBeInTheDocument()
    })

    it('should not show clear button when input is empty', () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const clearButton = screen.queryByTestId('clear-button')
      expect(clearButton).not.toBeInTheDocument()
    })

    it('should clear input when clear button is clicked', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input') as HTMLInputElement

      await userEvent.type(input, 'love')
      expect(input.value).toBe('love')

      const clearButton = screen.getByTestId('clear-button')
      fireEvent.click(clearButton)

      expect(input.value).toBe('')
    })

    it('should call onClear callback when cleared', async () => {
      render(<SearchBar onSearch={mockOnSearch} onClear={mockOnClear} />)

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'love')

      const clearButton = screen.getByTestId('clear-button')
      fireEvent.click(clearButton)

      expect(mockOnClear).toHaveBeenCalled()
    })

    it('should focus input after clearing', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'love')

      const clearButton = screen.getByTestId('clear-button')
      fireEvent.click(clearButton)

      expect(input).toHaveFocus()
    })
  })

  describe('Debounced Search', () => {
    jest.useFakeTimers()

    it('should debounce search calls', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={true}
          debounceMs={300}
        />
      )

      const input = screen.getByTestId('search-input')

      // Type multiple characters quickly
      await userEvent.type(input, 'l')
      await userEvent.type(input, 'o')
      await userEvent.type(input, 'v')
      await userEvent.type(input, 'e')

      // Should not call immediately
      expect(mockOnSearch).not.toHaveBeenCalled()

      // Fast-forward time
      jest.advanceTimersByTime(300)

      // Should call once after debounce
      await waitFor(() => {
        expect(mockOnSearch).toHaveBeenCalledTimes(1)
      })
    })

    afterAll(() => {
      jest.useRealTimers()
    })
  })

  describe('Autocomplete', () => {
    const suggestions = ['love', 'loved', 'loving', 'lover']

    it('should show autocomplete dropdown when showAutocomplete is true', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={true}
          autocompleteSuggestions={suggestions}
        />
      )

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'lo')

      const dropdown = screen.getByTestId('autocomplete-dropdown')
      expect(dropdown).toBeInTheDocument()
    })

    it('should not show autocomplete when showAutocomplete is false', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={false}
          autocompleteSuggestions={suggestions}
        />
      )

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'lo')

      const dropdown = screen.queryByTestId('autocomplete-dropdown')
      expect(dropdown).not.toBeInTheDocument()
    })

    it('should display all suggestions', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={true}
          autocompleteSuggestions={suggestions}
        />
      )

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'lo')

      const suggestionElements = screen.getAllByTestId('autocomplete-suggestion')
      expect(suggestionElements).toHaveLength(suggestions.length)
    })

    it('should select suggestion on click', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={true}
          autocompleteSuggestions={suggestions}
          onSuggestionSelect={mockOnSuggestionSelect}
        />
      )

      const input = screen.getByTestId('search-input') as HTMLInputElement

      await userEvent.type(input, 'lo')

      const firstSuggestion = screen.getAllByTestId('autocomplete-suggestion')[0]
      fireEvent.click(firstSuggestion)

      expect(input.value).toBe('love')
      expect(mockOnSuggestionSelect).toHaveBeenCalledWith('love')
      expect(mockOnSearch).toHaveBeenCalledWith('love')
    })

    it('should hide suggestions on Escape key', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={true}
          autocompleteSuggestions={suggestions}
        />
      )

      const input = screen.getByTestId('search-input')

      await userEvent.type(input, 'lo')

      let dropdown = screen.getByTestId('autocomplete-dropdown')
      expect(dropdown).toBeInTheDocument()

      fireEvent.keyDown(input, { key: 'Escape' })

      dropdown = screen.queryByTestId('autocomplete-dropdown')
      expect(dropdown).not.toBeInTheDocument()
    })

    it('should require minimum 2 characters to show suggestions', async () => {
      render(
        <SearchBar
          onSearch={mockOnSearch}
          showAutocomplete={true}
          autocompleteSuggestions={suggestions}
        />
      )

      const input = screen.getByTestId('search-input')

      // Type 1 character
      await userEvent.type(input, 'l')

      let dropdown = screen.queryByTestId('autocomplete-dropdown')
      expect(dropdown).not.toBeInTheDocument()

      // Type second character
      await userEvent.type(input, 'o')

      dropdown = screen.getByTestId('autocomplete-dropdown')
      expect(dropdown).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA label for search input', () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')
      expect(input).toHaveAttribute('aria-label', 'Search')
    })

    it('should have proper ARIA label for clear button', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')
      await userEvent.type(input, 'love')

      const clearButton = screen.getByTestId('clear-button')
      expect(clearButton).toHaveAttribute('aria-label', 'Clear search')
    })

    it('should be keyboard navigable', async () => {
      render(<SearchBar onSearch={mockOnSearch} />)

      const input = screen.getByTestId('search-input')

      // Tab to input
      await userEvent.tab()
      expect(input).toHaveFocus()

      // Type and submit
      await userEvent.type(input, 'love{Enter}')
      expect(mockOnSearch).toHaveBeenCalledWith('love')
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <SearchBar onSearch={mockOnSearch} className="custom-class" />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('custom-class')
    })
  })
})