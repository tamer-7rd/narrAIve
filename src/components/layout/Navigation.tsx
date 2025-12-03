import CustomLink from '../ui/Link'
import { mainNavLinks } from '@/lib/constants/routes'

type Props = {
  ariaLabel?: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
  linkClassName?: string
  iconClassName?: string
  withIcons?: boolean
  onItemClick?: () => void
}

export default function Navigation({
  className,
  ariaLabel = 'Primary',
  orientation = 'horizontal',
  linkClassName = '',
  iconClassName = '',
  withIcons = false,
  onItemClick,
}: Props) {
  const baseListClasses = orientation === 'vertical' ? 'flex flex-col' : 'flex'
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className={baseListClasses}>
        {mainNavLinks.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <CustomLink href={href} className={linkClassName} onClick={onItemClick}>
              {withIcons && <Icon className={iconClassName} aria-hidden="true" />}
              <span>{label}</span>
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
