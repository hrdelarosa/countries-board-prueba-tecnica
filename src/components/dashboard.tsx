'use client'
import { Pagination } from '@heroui/pagination'
import Filters from './filters'
import ListCountries from './listCountries'
import { useFilter } from '@/hooks/useFilter'
import { Countries } from '@/types/api-endpoints'
import { Frown } from 'lucide-react'

export default function Dashboard({ countries }: { countries: Countries[] }) {
  const {
    sortedCountries,
    search,
    setSearch,
    sort,
    handleSortChange,
    region,
    handleRegionChange,
    resetFilters,
    currentPage,
    setCurrentPage,
    numPages,
  } = useFilter({ countries })

  return (
    <section className="w-full space-y-10">
      <Filters
        search={search}
        setSearch={setSearch}
        sort={sort}
        handleSortChange={handleSortChange}
        region={region}
        handleRegionChange={handleRegionChange}
        resetFilters={resetFilters}
      />

      {numPages === 0 ? (
        <div className="flex justify-center animate-fade-in animate-duration-200">
          <p className="text-3xl font-bold inline-flex items-center gap-2">
            No countries found <Frown className="size-7" />
          </p>
        </div>
      ) : (
        <ListCountries countries={sortedCountries} />
      )}

      {numPages > 0 && (
        <div className="flex justify-center mb-5">
          <Pagination
            showControls
            page={currentPage}
            total={numPages}
            size="lg"
            variant="light"
            onChange={(page) => {
              setCurrentPage(page)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        </div>
      )}
    </section>
  )
}
