import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Search } from 'lucide-react'

/**
 * Renders a centered 404 "Page Not Found" UI with actions to go home or search.
 *
 * Displays a prominent "404" heading, a brief explanatory message, and two action
 * buttons linking to the home page and the search page.
 *
 * @returns The JSX element for the NotFound page
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="max-w-md">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-muted-foreground mb-2">
              404
            </h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="default">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Search Verses
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}