import { AnimatePresence, motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Download,
  Menu,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  NavLink,
  useLocation,
} from 'react-router-dom'
import {
  primaryNavigation,
  secondaryNavigation,
} from '../../config/navigation'
import { siteConfig } from '../../config/site'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const mobileNavigation = [
    ...primaryNavigation,
    ...secondaryNavigation.filter(
      (link) => link.path !== '/recruiter',
    ),
  ]

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 12)
    }

    updateScrolled()

    window.addEventListener('scroll', updateScrolled, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', updateScrolled)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeWithEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeWithEscape)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-white/[0.08] bg-[#050816]/88 shadow-[0_12px_45px_rgba(0,0,0,0.24)] backdrop-blur-2xl'
          : 'border-transparent bg-[#050816]/72 backdrop-blur-xl'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <NavLink
          to="/"
          aria-label="Francis Dev home"
          className="group relative z-10 inline-flex items-center text-base font-bold tracking-[-0.04em] text-white sm:text-lg"
        >
          <span>FRANCIS</span>

          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent">
            .DEV
          </span>

          <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
        </NavLink>

        <div className="hidden items-center gap-4 xl:flex 2xl:gap-5">
          {primaryNavigation.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `group relative py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-500 hover:text-slate-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`absolute inset-x-0 -bottom-[23px] mx-auto h-0.5 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa] transition-all duration-300 ${
                      isActive
                        ? 'w-5 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-3 group-hover:opacity-60'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <div className="h-6 w-px bg-white/[0.08]" />

          <NavLink
            to="/behind-the-build"
            className={({ isActive }) =>
              `text-sm transition-colors duration-300 ${
                isActive
                  ? 'text-violet-200'
                  : 'text-slate-500 hover:text-white'
              }`
            }
          >
            Behind the Build
          </NavLink>

          <NavLink
            to="/recruiter"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-4 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_rgba(124,58,237,0.42)]"
          >
            <BriefcaseBusiness size={15} />
            Recruiter View
          </NavLink>

          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.065] hover:text-white"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.045] text-slate-200 shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 active:scale-95 xl:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'menu'}
              initial={{
                opacity: 0,
                rotate: menuOpen ? -45 : 45,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: menuOpen ? 45 : -45,
                scale: 0.75,
              }}
              transition={{
                duration: 0.18,
                ease: 'easeOut',
              }}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-x-0 top-16 z-[-1] h-[calc(100dvh-4rem)] cursor-default bg-black/45 backdrop-blur-sm sm:top-20 sm:h-[calc(100dvh-5rem)] xl:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -18,
                scale: 0.985,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -16,
                scale: 0.985,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/[0.07] bg-[#050816]/96 px-4 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:top-20 sm:max-h-[calc(100dvh-5rem)] sm:px-6 sm:py-7 xl:hidden"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2">
                {mobileNavigation.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.025 * index,
                      duration: 0.22,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex min-h-14 items-center rounded-2xl border px-5 py-3 text-base transition duration-300 ${
                          isActive
                            ? 'border-violet-400/35 bg-violet-500/12 font-semibold text-violet-100 shadow-[inset_0_0_25px_rgba(139,92,246,0.08)]'
                            : 'border-white/[0.075] bg-white/[0.025] text-slate-300 hover:border-white/[0.13] hover:bg-white/[0.055] active:scale-[0.985]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.22,
                    duration: 0.22,
                  }}
                >
                  <NavLink
                    to="/recruiter"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-violet-400/25 bg-violet-500/10 px-5 text-base font-semibold text-violet-100 transition active:scale-[0.985]"
                  >
                    <BriefcaseBusiness size={18} />
                    Recruiter View
                  </NavLink>
                </motion.div>

                <motion.a
                  href={siteConfig.resumeUrl}
                  download
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.22,
                  }}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 px-5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(124,58,237,0.32)] transition active:scale-[0.985] sm:col-span-2"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}