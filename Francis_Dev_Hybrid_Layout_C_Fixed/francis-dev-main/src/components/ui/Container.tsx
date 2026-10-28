import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ContainerSize = 'default' | 'wide' | 'reading'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: ContainerSize
}

const sizes: Record<ContainerSize, string> = {
  default: 'max-w-7xl',
  wide: 'max-w-[1440px]',
  reading: 'max-w-3xl',
}

export default function Container({
  children,
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}