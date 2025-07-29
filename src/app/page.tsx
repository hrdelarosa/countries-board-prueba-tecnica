import { Suspense } from 'react'
import Container from '@/components/container'
import Dashboard from '@/components/dashboard'
import SkeletonDash from '@/components/skeletonDash'
import { getAllCountries } from '@/controllers/getAllCountries'

export default async function Home() {
  const res = await getAllCountries()

  return (
    <Container>
      <Suspense fallback={<SkeletonDash />}>
        <Dashboard countries={res} />
      </Suspense>
    </Container>
  )
}
