import Link from 'next/link'
import { cn } from '@/lib/utils/cn'

interface LinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export default function CustomLink({ children, href, className = '' }: LinkProps) {
  const defaultClasses = 'font-base sm:font-light'
  return (
    <Link href={href} className={cn(className, defaultClasses)}>
      {children}
    </Link>
  )
}
