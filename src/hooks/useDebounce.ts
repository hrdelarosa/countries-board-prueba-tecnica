import { useState, useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'

export function useDebounce({ search }: { search: string }) {
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value)
    }, 200),
    []
  )

  useEffect(() => {
    debouncedSetSearch(search)
  }, [search, debouncedSetSearch])

  return debouncedSearch
}
