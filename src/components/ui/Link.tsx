import Link from 'next/link'
import cn from '@/lib/utils/cn'

type LinkProps = {
  children: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
}

export default function CustomLink({ children, href, className = '', onClick }: LinkProps) {
  const defaultClasses = 'tracking-wide text-base font-light'
  return (
    <Link href={href} onClick={onClick} className={cn(defaultClasses, className)}>
      {children}
    </Link>
  )
}
