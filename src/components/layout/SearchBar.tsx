import { HiMagnifyingGlass } from 'react-icons/hi2'
import Input from '../ui/Input'
import cn from '@/lib/utils/cn'

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Input
        type="text"
        placeholder="Search Narraive"
        aria-label="Search website"
        className="hidden sm:block"
      />
      <HiMagnifyingGlass
        // Hide on mobile, show on desktop (block)
        className="searchbar-icon block sm:absolute sm:right-7 sm:top-1/2 sm:-translate-y-1/2 size-7 sm:size-5 sm:pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
