import { Suspense } from 'react'
import Container from '@/components/container'
import InfoCountry from '@/components/infoCountry'
import SkeletonCountry from '@/components/skeletonCountry'
import { getCountry } from '@/controllers/getCountry'

interface Props {
  params: Promise<{ id: string }>
}

export default async function CountryPage({ params }: Props) {
  const { id } = await params
  const res = await getCountry({ code: id })

  return (
    <Container width="md">
      <Suspense fallback={<SkeletonCountry />}>
        <InfoCountry country={res[0]} />
      </Suspense>
    </Container>
  )
}
