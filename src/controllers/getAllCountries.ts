import { endpoints } from '@/config/apiEndpoints'
import { Countries } from '@/types/api-endpoints'

export async function getAllCountries(): Promise<Countries[]> {
  try {
    const response = await fetch(endpoints.all)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
