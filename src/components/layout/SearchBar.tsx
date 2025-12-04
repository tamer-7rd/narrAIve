import { HiMagnifyingGlass } from 'react-icons/hi2'
import cn from '@/lib/utils/cn'

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <input
        type="text"
        placeholder="Search Narraive"
        aria-label="Search articles"
        className={cn(
          'searchbar-container',
          'hidden sm:block', // ← Скрыть на мобильных, показать на десктопе
          'w-full rounded-md border',
          'pl-4 pr-10 py-2',
          'text-base',
          'tracking-wider',
          'sm:font-light',
          'sm:placeholder:font-light',
          'focus:outline-none'
        )}
      />
      <HiMagnifyingGlass
        className={cn(
          'searchbar-icon',
          'block', // ← Скрыть на мобильных, показать на десктопе
          'sm:absolute sm:right-7 sm:top-1/2 sm:-translate-y-1/2',
          'size-7 sm:size-5 sm:pointer-events-none'
        )}
        aria-hidden="true"
      />
    </div>
  )
}
