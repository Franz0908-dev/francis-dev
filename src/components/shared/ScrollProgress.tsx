import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function updateProgress() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const nextProgress =
        scrollHeight > 0 ? Math.min((scrollTop / scrollHeight) * 100, 100) : 0

      setProgress(nextProgress)
    }

    updateProgress()

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    })

    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px]"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-300 shadow-[0_0_14px_rgba(167,139,250,0.8)] transition-[width] duration-100"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}