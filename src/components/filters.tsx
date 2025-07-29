import { Input } from '@heroui/input'
import { Kbd } from '@heroui/kbd'
import { Select, SelectItem } from '@heroui/react'
import { Tooltip } from '@heroui/tooltip'
import { Button } from '@heroui/button'
import { Search, Trash } from 'lucide-react'
import { SortBy, sortBy, Regions, regions } from '@/config/filters'
import { capitalize } from '@/utils/capitalize'
import { useSearchShortcut } from '@/hooks/useSearchShortcut'
import { useClearButtonVisibility } from '@/hooks/useClearButtonVisibility'

interface Props {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  sort: SortBy
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  region: Regions
  handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  resetFilters: () => void
}

export default function Filters({
  search,
  setSearch,
  sort = SortBy.NAME,
  handleSortChange,
  region,
  handleRegionChange,
  resetFilters,
}: Props) {
  const { searchRef, isMac } = useSearchShortcut()
  const { isVisible } = useClearButtonVisibility({ sort, region })

  return (
    <div className="flex flex-col md:flex-row justify-between gap-2">
      <Input
        className="w-full md:max-w-md"
        label="Search"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Search for a country..."
        radius="lg"
        startContent={
          <Search className="size-4 mb-0.5 pointer-events-none shrink-0" />
        }
        endContent={
          <div className="hidden lg:block">
            <Kbd keys={[isMac ? 'command' : 'ctrl']}>K</Kbd>
          </div>
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ref={searchRef}
      />

      <div className="flex md:justify-end gap-3">
        {isVisible && (
          <Tooltip content="Clear filters" closeDelay={100}>
            <Button
              isIconOnly
              variant="ghost"
              radius="lg"
              onPress={resetFilters}
            >
              <Trash className="size-4 mb-0.5 pointer-events-none shrink-0" />
            </Button>
          </Tooltip>
        )}

        <Select
          className="w-32"
          selectedKeys={[sort]}
          label="Sort by"
          labelPlacement="outside"
          radius="lg"
          onChange={handleSortChange}
        >
          {sortBy.map((option) => (
            <SelectItem key={option}>{capitalize({ str: option })}</SelectItem>
          ))}
        </Select>

        <Select
          className="w-36"
          selectedKeys={[region]}
          label="Filter by Region"
          labelPlacement="outside"
          radius="lg"
          onChange={handleRegionChange}
        >
          {regions.map((option) => (
            <SelectItem key={option}>{option}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  )
}
