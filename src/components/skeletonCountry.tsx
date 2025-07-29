import { Skeleton } from '@heroui/skeleton'

export default function SkeletonCountry() {
  return (
    <section className="flex flex-col gap-4">
      <Skeleton className="w-full h-[108px] rounded-lg" />
      <Skeleton className="w-full h-[282px] rounded-lg" />

      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="w-full h-[282px] rounded-lg" />
        <Skeleton className="w-full h-[282px] rounded-lg" />
      </div>

      <Skeleton className="w-full h-[322px] rounded-lg" />

      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <Skeleton className="w-28 h-10 rounded-lg" />
        <Skeleton className="w-32 h-10 rounded-lg" />
        <Skeleton className="w-28 h-10 rounded-lg" />
      </div>
    </section>
  )
}
