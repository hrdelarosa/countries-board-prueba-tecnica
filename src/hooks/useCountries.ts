import { useEffect, useState } from 'react'
import { Country } from '../types/api-endpoints'
import { getAllCountries } from '../controllers/getAllCountries'

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    async function fetchCountries() {
      const countries = await getAllCountries()
      setCountries(countries.slice(0, 24))
      setLoading(false)
    }
    fetchCountries()
  }, [])

  return { countries, loading }
}
