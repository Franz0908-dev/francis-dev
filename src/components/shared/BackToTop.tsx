import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function checkScrollPosition() {
      setVisible(window.scrollY > 500)
    }

    checkScrollPosition()

    window.addEventListener('scroll', checkScrollPosition, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-[#0b1020]/90 text-violet-200 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-violet-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-5 opacity-0'
      }`}
    >
      <ArrowUp size={19} />
    </button>
  )
}