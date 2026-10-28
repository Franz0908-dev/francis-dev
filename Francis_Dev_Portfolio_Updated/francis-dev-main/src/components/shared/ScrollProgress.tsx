import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    mass: 0.25,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-300 shadow-[0_0_16px_rgba(167,139,250,0.85)]"
    />
  )
}