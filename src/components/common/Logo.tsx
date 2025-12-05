import cn from '@/lib/utils/cn'

type LogoProps = {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  return (
    <h1 className={cn(className, 'logo-container')}>
      <span>narr</span>
      <span className="logo-a">A</span>
      <span className="logo-i">I</span>
      <span>ve</span>
    </h1>
  )
}
