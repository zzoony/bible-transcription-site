'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * Wraps children with next-themes' ThemeProvider and forwards all received props to it.
 *
 * @param children - React nodes to be rendered inside the provider
 * @param props - Props forwarded to the underlying NextThemesProvider
 * @returns A JSX element rendering NextThemesProvider that wraps the provided children
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}