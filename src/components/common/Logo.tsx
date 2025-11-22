import cn from '@/lib/utils/cn'

interface Props {
  className?: string
}

export default function Logo({ className }: Props) {
  return (
    <h1 className={cn('logo-container', className)}>
      <span>narr</span>
      <span className="logo-a">A</span>
      <span className="logo-i">I</span>
      <span>ve</span>
    </h1>
  )
}
