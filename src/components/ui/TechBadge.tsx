import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TechBadgeProps {
  children: ReactNode
  icon?: ReactNode
  className?: string
}

export default function TechBadge({
  children,
  icon,
  className,
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.075] px-4 py-2 text-xs font-medium text-violet-100 transition hover:border-violet-400/35 hover:bg-violet-500/[0.13]',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}