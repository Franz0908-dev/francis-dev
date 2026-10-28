import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
}

export default function GradientText({
  children,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span className={cn('purple-gradient-text', className)} {...props}>
      {children}
    </span>
  )
}