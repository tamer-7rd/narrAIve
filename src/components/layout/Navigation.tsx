import cn from '@/lib/utils/cn'
import CustomLink from '../ui/Link'
import { mainNavLinks } from '@/lib/constants/routes'

type Props = {
  ariaLabel?: string
  className?: string
}

export default function Navigation({ className, ariaLabel = 'Primary' }: Props) {
  const defaultClasses = 'flex'
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className={cn(defaultClasses)}>
        {mainNavLinks.map((link) => (
          <li key={link.href}>
            <CustomLink href={link.href}>{link.label}</CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
