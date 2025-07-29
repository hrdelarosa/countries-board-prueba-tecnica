import { useEffect, useState, useMemo } from 'react'
import { useQueryState, parseAsInteger, parseAsStringLiteral } from 'nuqs'
import { useDebounce } from './useDebounce'
import { filterCountries, sortCountries } from '../utils/filters'
import { SortBy, Regions, PAGE_SIZE, sortBy, regions } from '../config/filters'
import { Countries } from '@/types/api-endpoints'

export function useFilter({ countries }: { countries: Countries[] }) {
  const [search, setSearch] = useQueryState('search', {
    defaultValue: '',
  })
  const [sort, setSort] = useQueryState(
    'sort',
    parseAsStringLiteral(sortBy).withDefault(SortBy.NAME)
  )
  const [region, setRegion] = useQueryState(
    'region',
    parseAsStringLiteral(regions).withDefault(Regions.ALL)
  )
  const [inputValue, setInputValue] = useState(search || '')
  const [currentPage, setCurrentPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1)
  )
  const debouncedInput = useDebounce({ search: inputValue })

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSort(e.target.value as SortBy)

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value as Regions)
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSearch('')
    setSort(SortBy.NAME)
    setRegion(Regions.ALL)
    setInputValue('')
    setCurrentPage(1)
  }

  useEffect(() => {
    setCurrentPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedInput])

  useEffect(() => {
    if (debouncedInput !== search) {
      setSearch(debouncedInput)
    }
  }, [debouncedInput])

  const startIndex = (currentPage - 1) * PAGE_SIZE

  const sortedCountries = useMemo(() => {
    if (!countries) return []

    const filtered =
      debouncedInput !== ''
        ? countries.filter(
            (country) =>
              country.name.common
                .toLowerCase()
                .includes(debouncedInput.toLowerCase()) ||
              (country.capital &&
                country.capital.length > 0 &&
                country.capital[0]
                  .toLowerCase()
                  .includes(debouncedInput.toLowerCase()))
          )
        : countries

    const filteredByRegion =
      region !== Regions.ALL
        ? filterCountries({ countries: filtered, region })
        : filtered

    return sort
      ? sortCountries({
          countries: filteredByRegion,
          sortBy: sort,
        })
      : filteredByRegion
  }, [sort, countries, debouncedInput, region])

  const paginatedCountries = useMemo(() => {
    return sortedCountries.slice(startIndex, startIndex + PAGE_SIZE)
  }, [sortedCountries, startIndex])

  const numPages = useMemo(
    () => Math.ceil(sortedCountries.length / PAGE_SIZE),
    [sortedCountries]
  )

  return {
    sortedCountries: paginatedCountries,
    search: inputValue,
    setSearch: setInputValue,
    sort,
    handleSortChange,
    region,
    handleRegionChange,
    resetFilters,
    currentPage,
    setCurrentPage,
    numPages,
  }
}
