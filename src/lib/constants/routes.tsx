import type { ComponentType, SVGProps } from 'react'
import { HiChartBar, HiHome, HiNewspaper } from 'react-icons/hi2'

interface NavLink {
  href: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  // Это единственный способ в TypeScript передать структуру данных внутрь другого типа. (то что сверху этого коммента)
}

export const mainNavLinks: NavLink[] = [
  { href: '/', label: 'Home', icon: HiHome },
  { href: '/News', label: 'News', icon: HiNewspaper },
  { href: '/Data', label: 'Analytics', icon: HiChartBar },
]
