import { useEffect, useState } from 'react'
import { SortBy, Regions } from '@/config/filters'

export function useClearButtonVisibility({
  sort,
  region,
}: {
  sort: SortBy
  region: Regions
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (sort !== SortBy.NAME || region !== Regions.ALL) setIsVisible(true)
    else setIsVisible(false)
  }, [sort, region])

  return { isVisible }
}
