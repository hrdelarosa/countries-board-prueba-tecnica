import { Countries } from '@/types/api-endpoints'
import CardCountry from './cardCountry'

export default function ListCountries({
  countries,
}: {
  countries: Countries[]
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-in animate-duration-200">
      {countries.length > 0 &&
        countries.map((country, index) => (
          <CardCountry
            key={country.name.common}
            country={country}
            index={index}
          />
        ))}
    </div>
  )
}
