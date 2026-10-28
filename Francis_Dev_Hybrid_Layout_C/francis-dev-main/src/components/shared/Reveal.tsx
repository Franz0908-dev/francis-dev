import { motion } from 'framer-motion'
import type {
  PropsWithChildren,
  ReactNode,
} from 'react'
import { cn } from '../../lib/cn'

interface RevealProps extends PropsWithChildren {
  className?: string
  delay?: number
  distance?: number
  amount?: number
  once?: boolean
}

interface StaggerContainerProps extends PropsWithChildren {
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
  amount = 0.18,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0.05,
  staggerChildren = 0.08,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 22,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={cn('h-full', className)}
    >
      {children}
    </motion.div>
  )
}

export default Reveal