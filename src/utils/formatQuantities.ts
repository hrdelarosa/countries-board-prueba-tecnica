export function formatPopulation({
  population,
  format = 'number',
}: PopulationProps) {
  return format === 'number'
    ? population.toLocaleString()
    : `${population.toLocaleString()} people`
}

export function formatArea({ area, format = 'number' }: AreaProps) {
  return format === 'number'
    ? area.toLocaleString()
    : `${area.toLocaleString()} km²`
}

export function formatCoordinates({ coordinates }: { coordinates: number[] }) {
  return `${coordinates[0]}°N ${coordinates[1]}°W`
}

export function formatDensity({
  population,
  area,
}: {
  population: number
  area: number
}) {
  return `${Math.round(population / area).toLocaleString()} people/km²`
}
