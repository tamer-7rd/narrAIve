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
  const defaultClasses = 'border-1 button-border rounded-lg tracking-wide font-nunito text-white'

  const variantClasses = {
    primary:
      'bg-cyan-400 underline underline-offset-6 decoration-1 decoration-cyan-300 transition-colors duration-200 hover:bg-cyan-950',
    secondary: 'underline underline-offset-6 decoration-cyan-300',
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
