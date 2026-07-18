import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  spacing?: 'sm' | 'md' | 'lg'
}

const spacingStyles = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20 lg:py-24',
  lg: 'py-20 sm:py-24 lg:py-32',
}

export default function Section({
  children,
  className,
  spacing = 'md',
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('relative', spacingStyles[spacing], className)}
      {...props}
    >
      {children}
    </section>
  )
}