import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { primaryNavigation } from '../../config/navigation'
import { siteConfig } from '../../config/site'

const footerLinks = primaryNavigation.filter((link) => link.path !== '/')

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#050816]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-16">
          <div className="max-w-md md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-lg font-bold tracking-[-0.04em] text-white">
              FRANCIS<span className="text-violet-400">.DEV</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Full-Stack Web Developer building modern business applications using Laravel, React, TypeScript, PHP, and MySQL.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              <span className="text-xs font-medium text-emerald-300">Available for opportunities</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Navigation</p>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-slate-500 transition hover:text-violet-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">Quick Access</p>
            <div className="mt-5 space-y-3">
              <Link to="/recruiter" className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-violet-300">
                <BriefcaseBusiness size={16} /> Recruiter View
              </Link>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-violet-300">
                <Code2 size={16} /> GitHub
              </a>
              <Link to="/contact" className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-violet-300">
                <Mail size={16} /> Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FRANCIS.DEV. All rights reserved.</p>
          <p>Designed and developed by {siteConfig.fullName}.</p>
        </div>
      </div>
    </footer>
  )
}
