import { useState, useEffect } from 'react'
import { getTimeStringForTimezone } from '../utils/timeZonesCountry'
import { parseUtcOffset } from '../utils/timeZonesCountry'

export function useTimeZoneClock({ timezone }: { timezone: string }) {
  const offset = parseUtcOffset({ offset: timezone })
  const [time, setTime] = useState(getTimeStringForTimezone({ offset }))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeStringForTimezone({ offset }))
    }, 1000)

    return () => clearInterval(interval)
  }, [offset])

  return time
}
