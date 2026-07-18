import { BriefcaseBusiness, Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { primaryNavigation, secondaryNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/site'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#050816]/90 backdrop-blur-2xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <NavLink
          to="/"
          className="text-base font-bold tracking-[-0.04em] text-white sm:text-lg"
        >
          FRANCIS<span className="text-violet-400">.DEV</span>
        </NavLink>

        <div className="hidden items-center gap-5 xl:flex">
          {primaryNavigation.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `relative py-2 text-sm transition ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-200'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-[23px] mx-auto h-0.5 w-5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <div className="h-6 w-px bg-white/[0.08]" />

          <NavLink
            to="/behind-the-build"
            className={({ isActive }) =>
              `text-sm transition ${isActive ? 'text-violet-200' : 'text-slate-500 hover:text-white'}`
            }
          >
            Behind the Build
          </NavLink>

          <NavLink
            to="/recruiter"
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-violet-600 px-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            <BriefcaseBusiness size={15} />
            Recruiter View
          </NavLink>

          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-slate-300 transition hover:border-violet-400/40 hover:text-white"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-300 xl:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/[0.07] bg-[#050816]/98 px-4 py-5 backdrop-blur-2xl sm:px-6 xl:hidden"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2">
            {[...primaryNavigation, ...secondaryNavigation].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200'
                    : 'rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-slate-400'
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold text-white sm:col-span-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
