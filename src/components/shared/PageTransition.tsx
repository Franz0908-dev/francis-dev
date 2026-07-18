import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export default function PageTransition({
  children,
}: PropsWithChildren) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
        filter: 'blur(4px)',
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      exit={{
        opacity: 0,
        y: -8,
        filter: 'blur(2px)',
      }}
      transition={{
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}