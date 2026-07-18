import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_14px_40px_rgba(139,92,246,0.30)] hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(139,92,246,0.45)]',
  secondary:
    'border border-white/10 bg-white/[0.055] text-white backdrop-blur-xl hover:border-violet-400/35 hover:bg-white/[0.09]',
  outline:
    'border border-violet-400/30 bg-transparent text-violet-200 hover:border-violet-300/60 hover:bg-violet-500/10',
  ghost:
    'bg-transparent text-slate-400 hover:bg-white/[0.05] hover:text-white',
  danger:
    'bg-red-500/90 text-white hover:bg-red-400',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 rounded-lg px-4 text-xs',
  md: 'h-11 rounded-xl px-5 text-sm',
  lg: 'h-12 rounded-xl px-6 text-sm',
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition duration-300 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}