import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="max-w-md">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-muted-foreground mb-2">
              404
            </h1>
            <h2 className="text-2xl font-semibold mb-4">페이지를 찾을 수 없습니다</h2>
            <p className="text-muted-foreground">
              요청하신 페이지가 존재하지 않거나 이동되었습니다.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="default">
                <Home className="h-4 w-4 mr-2" />
                홈으로
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="outline">
                <Search className="h-4 w-4 mr-2" />
                구절 검색
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}