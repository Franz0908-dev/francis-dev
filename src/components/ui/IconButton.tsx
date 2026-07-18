import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  label: string
}

export default function IconButton({
  children,
  label,
  className,
  type = 'button',
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.035] text-slate-400 transition hover:border-violet-400/35 hover:bg-violet-500/10 hover:text-violet-200',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}