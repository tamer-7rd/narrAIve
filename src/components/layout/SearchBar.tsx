import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import cn from '@/lib/utils/cn'

interface Props {
  className?: string
}

export default function SearchBar({ className }: Props) {
  return (
    <div className={cn('relative', className)}>
      <input
        type="text"
        placeholder="Search Narraive"
        className={cn(
          'searchbar-container',
          'w-full rounded-lg border',
          'pl-4 pr-10 py-2',
          'text-base',
          'tracking-wider',
          'sm:font-light',
          'sm:placeholder:font-light',
          'focus:outline-none'
        )}
      />
      <MagnifyingGlassIcon
        className={cn(
          'searchbar-icon',
          'absolute right-7 top-1/2 -translate-y-1/2',
          'size-5 pointer-events-none'
        )}
        aria-hidden="true"
      />
    </div>
  )
}
