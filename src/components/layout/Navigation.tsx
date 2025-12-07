import CustomLink from '../ui/Link'
import { mainNavLinks, exploreLinks, companyLinks, socialLinks } from '@/lib/constants/routes'
import cn from '@/lib/utils/cn'

const linkArrays = {
  mainNavLinks: mainNavLinks,
  exploreLinks: exploreLinks,
  companyLinks: companyLinks,
  socialLinks: socialLinks,
}

type Props = {
  ariaLabel?: string
  className?: string
  orientation?: 'horizontal' | 'vertical'
  linkClassName?: string
  listClassName?: string
  iconClassName?: string
  withIcons?: boolean
  withLabels?: boolean
  linkKey: keyof typeof linkArrays // Union Type (|) of String Literal Types ("mainNavLinks" | "exploreLinks" | "companyLinks" | "socialLinks")
  onItemClick?: () => void
}

export default function Navigation({
  className,
  ariaLabel = 'Primary',
  orientation = 'horizontal',
  linkClassName = '',
  listClassName = '',
  iconClassName = '',
  withIcons = false,
  withLabels = false,
  linkKey,
  onItemClick,
}: Props) {
  const baseListClasses = orientation === 'vertical' ? 'flex flex-col' : 'flex'

  const links = linkArrays[linkKey]

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ul className={cn(baseListClasses, listClassName)}>
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <CustomLink href={href} className={linkClassName} onClick={onItemClick}>
              {withIcons && Icon && <Icon className={iconClassName} aria-hidden="true" />}
              <span>{withLabels && label}</span>
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
