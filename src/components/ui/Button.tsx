'use client'

import cn from '@/lib/utils/cn'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({
  children,
  onClick,
  size = 'md',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const defaultClasses =
    'border button-border rounded-md tracking-wider text-lg sm:text-base sm:font-light'

  const variantClasses = {
    primary: 'btn-primary underline underline-offset-6 decoration-1 transition-colors duration-300',
    secondary: 'btn-secondary underline underline-offset-6',
  }

  const sizeClasses = {
    sm: 'min-w-10 p-2',
    md: 'min-w-40 p-2',
    lg: 'min-w-80 p-2',
  }

  return (
    <button
      onClick={onClick}
      className={cn(defaultClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </button>
  )
}
