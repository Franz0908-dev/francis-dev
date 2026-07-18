import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant =
  | 'default'
  | 'purple'
  | 'success'
  | 'warning'
  | 'outline'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  default: 'border-white/10 bg-white/[0.045] text-slate-300',
  purple: 'border-violet-400/20 bg-violet-500/10 text-violet-200',
  success: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-300',
  warning: 'border-amber-400/20 bg-amber-500/10 text-amber-300',
  outline: 'border-white/10 bg-transparent text-slate-400',
}

export default function Badge({
  children,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}