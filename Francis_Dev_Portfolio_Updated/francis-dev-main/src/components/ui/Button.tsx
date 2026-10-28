import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
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
  loading?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'border border-violet-400/20 bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-[0_14px_40px_rgba(139,92,246,0.30)] hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(139,92,246,0.45)] active:translate-y-0 active:scale-[0.98]',
  secondary:
    'border border-white/10 bg-white/[0.055] text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.09] active:translate-y-0 active:scale-[0.98]',
  outline:
    'border border-violet-400/30 bg-transparent text-violet-200 hover:-translate-y-0.5 hover:border-violet-300/60 hover:bg-violet-500/10 hover:text-white active:translate-y-0 active:scale-[0.98]',
  ghost:
    'border border-transparent bg-transparent text-slate-400 hover:bg-white/[0.05] hover:text-white active:scale-[0.98]',
  danger:
    'border border-red-400/20 bg-red-500/90 text-white shadow-[0_12px_35px_rgba(239,68,68,0.2)] hover:-translate-y-0.5 hover:bg-red-400 active:translate-y-0 active:scale-[0.98]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-10 rounded-lg px-4 text-xs',
  md: 'min-h-11 rounded-xl px-5 text-sm',
  lg: 'min-h-12 rounded-xl px-6 text-sm',
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        'premium-button relative isolate inline-flex items-center justify-center gap-2 overflow-hidden font-semibold transition duration-300 ease-out disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="premium-button-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
      />

      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}

      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}