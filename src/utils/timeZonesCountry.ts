export function parseUtcOffset({ offset }: { offset: string }): number {
  const match = offset.match(/UTC([+-])(\d{2}):(\d{2})/)

  if (!match) return 0

  const sign = match[1] === '+' ? 1 : -1
  const hours = Number.parseInt(match[2], 10)
  const minutes = Number.parseInt(match[3], 10)

  return sign * (hours + minutes / 60)
}

export function getTimeStringForTimezone({ offset }: { offset: number }) {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const timeLocal = new Date(utc + offset * 3600000)

  return timeLocal.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}
