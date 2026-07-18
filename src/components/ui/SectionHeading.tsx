import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-[-0.04em] text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}