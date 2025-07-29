const BASE_URL = 'https://restcountries.com/v3.1'

export const endpoints = {
  all: `${BASE_URL}/all?fields=name,flags,currencies,population,capital,languages,region,subregion,cca2,area`,
  region: `${BASE_URL}/region/`,
  country: ({ code }: { code: string }) => `${BASE_URL}/alpha?codes=${code}`,
  flag: ({ cca2 }: { cca2: string }) =>
    `https://flagsapi.com/${cca2}/flat/64.png`,
}
