import { Skeleton } from '@heroui/skeleton'
import { PAGE_SIZE } from '@/config/filters'

export default function SkeletonDash() {
  return (
    <section className="w-full space-y-10">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <Skeleton className="w-full max-w-md h-10 rounded-lg mt-6" />

        <div className="flex md:justify-end gap-3">
          <Skeleton className="w-32 h-10 rounded-lg mt-6" />
          <Skeleton className="w-36 h-10 rounded-lg mt-6" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: PAGE_SIZE }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[252px] rounded-lg" />
        ))}
      </div>

      <div className="flex justify-center mb-5">
        <ul className="flex flex-nowrap h-fit max-w-fit relative gap-1 items-center overflow-visible">
          {Array.from({ length: 9 }).map((_, index) => (
            <li key={index}>
              <Skeleton className="size-9 md:size-10 rounded-lg" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
