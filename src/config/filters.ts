import { Country } from '@/types/api-endpoints'

export const enum SortBy {
  NAME = 'name',
  POPULATION = 'population',
  AREA = 'area',
  CURRENCY = 'currency',
}

export const sortBy = [
  SortBy.NAME,
  SortBy.POPULATION,
  SortBy.AREA,
  SortBy.CURRENCY,
] as const

export const enum Regions {
  ALL = 'All',
  ANTARCTIC = 'Antarctic',
  AMERICAS = 'Americas',
  EUROPE = 'Europe',
  AFRICA = 'Africa',
  ASIA = 'Asia',
  OCEANIA = 'Oceania',
}

export const regions = [
  Regions.ALL,
  Regions.ANTARCTIC,
  Regions.AMERICAS,
  Regions.EUROPE,
  Regions.AFRICA,
  Regions.ASIA,
  Regions.OCEANIA,
] as const

export const PAGE_SIZE = 24
