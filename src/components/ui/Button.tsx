'use client'

interface ButtonProps {
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
  const defaultClasses = 'border-1 border-gray-50 tracking-wide font-nunito text-white'

  const variantClasses = {
    primary:
      'bg-cyan-400 underline underline-offset-6 decoration-1 decoration-cyan-400/75 transition-colors duration-100 hover:bg-gray-900',
    secondary: 'underline underline-offset-7 decoration-cyan-500/75',
  }

  const sizeClasses = {
    sm: 'min-w-10 p-2',
    md: 'min-w-40 p-2',
    lg: 'min-w-80 p-2',
  }

  return (
    <button
      onClick={onClick}
      className={`
            ${defaultClasses}
            ${variantClasses[variant]}
            ${sizeClasses[size]}
            ${className}
        `}
    >
      {children}
    </button>
  )
}
