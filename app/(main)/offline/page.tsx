import { Card, CardContent } from '@/components/ui/card'
import { WifiOff } from 'lucide-react'

export default function OfflinePage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="max-w-md">
        <CardContent className="pt-12 pb-12 text-center">
          <WifiOff className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-2xl font-semibold mb-4">
            오프라인 상태입니다
          </h1>
          <p className="text-muted-foreground mb-6">
            인터넷 연결을 확인하고 다시 시도해 주세요.
          </p>
          <p className="text-sm text-muted-foreground">
            일부 캐시된 콘텐츠는 사용 가능할 수 있습니다.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}