import { Card, CardContent } from '@/components/ui/card'
import { WifiOff } from 'lucide-react'

export default function OfflinePage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="max-w-md">
        <CardContent className="pt-12 pb-12 text-center">
          <WifiOff className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-2xl font-semibold mb-4">
            You&apos;re Offline
          </h1>
          <p className="text-muted-foreground mb-6">
            Please check your internet connection and try again.
          </p>
          <p className="text-sm text-muted-foreground">
            Some cached content may still be available.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}