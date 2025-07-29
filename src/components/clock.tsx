'use client'
import { useTimeZoneClock } from '../hooks/useTimeZoneClock'

export default function Clock({ timezone }: { timezone: string }) {
  const time = useTimeZoneClock({ timezone })

  return (
    <div className="font-mono text-lg" suppressHydrationWarning>
      {time}
    </div>
  )
}
