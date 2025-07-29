import { endpoints } from '@/config/apiEndpoints'
import { Country } from '@/types/api-endpoints'

export async function getCountry({
  code,
}: {
  code: string
}): Promise<Country[]> {
  try {
    const response = await fetch(endpoints.country({ code }))
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
