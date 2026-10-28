import { cn } from '../../lib/cn'

interface DividerProps {
  className?: string
  glow?: boolean
}

export default function Divider({
  className,
  glow = false,
}: DividerProps) {
  return (
    <div
      className={cn(
        'h-px w-full bg-white/[0.08]',
        glow &&
          'bg-gradient-to-r from-transparent via-violet-400/50 to-transparent',
        className,
      )}
    />
  )
}