import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hoverable?: boolean
}

export default function GlassCard({
  children,
  className,
  hoverable = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-panel',
        hoverable &&
          'transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:shadow-[0_30px_90px_rgba(0,0,0,0.32)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}