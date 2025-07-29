import { Countries } from '@/types/api-endpoints'
import { SortBy, Regions } from '../config/filters'

export const sortCountries = ({
  countries,
  sortBy,
}: {
  countries: Countries[]
  sortBy: SortBy
}) => {
  return [...countries].sort((a, b) => {
    if (sortBy === SortBy.NAME) {
      return a.name.common.localeCompare(b.name.common)
    }
    if (sortBy === SortBy.POPULATION) {
      return b.population - a.population
    }
    if (sortBy === SortBy.AREA) {
      return b.area - a.area
    }
    if (sortBy === SortBy.CURRENCY) {
      if (
        a.currencies &&
        Object.values(a.currencies)[0] &&
        b.currencies &&
        Object.values(b.currencies)[0]
      ) {
        return Object.values(a.currencies)[0].name.localeCompare(
          Object.values(b.currencies)[0].name
        )
      }
      return 0
    }
    return 0
  })
}

export const filterCountries = ({
  countries,
  region,
}: {
  countries: Countries[]
  region: Regions
}) => {
  return [...countries].filter((country) => country.region === region)
}
