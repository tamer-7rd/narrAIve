import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { cn } from '@/lib/utils/cn'

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Narraive"
        className={cn(
          'searchbar-container',
          'w-full rounded-lg border',
          'pl-4 pr-10 py-2',
          'text-base sm:text-sm',
          'tracking-wider',
          'sm:placeholder:font-light',
          'focus:outline-none'
        )}
      />
      <MagnifyingGlassIcon
        className={cn(
          'searchbar-icon',
          'absolute right-3 top-1/2 -translate-y-1/2',
          'size-5 pointer-events-none'
        )}
        aria-hidden="true"
      />
    </div>
  )
}
