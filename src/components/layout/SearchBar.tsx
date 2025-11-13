import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg border-1 searchbar-border font-nunito pl-4 pr-10 py-2 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm"
      />
      <MagnifyingGlassIcon
        className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}
