import type { ComponentType, SVGProps } from 'react'
import { ChartBarIcon, HomeIcon, NewspaperIcon } from '@heroicons/react/24/outline'

interface NavLink {
  href: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  // Это единственный способ в TypeScript передать структуру данных внутрь другого типа. (то что сверху этого коммента)
}

export const mainNavLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/News', label: 'News', icon: NewspaperIcon },
  { href: '/Data', label: 'Analytics', icon: ChartBarIcon },
]
