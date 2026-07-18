import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,

  GraduationCap,

  Mail,
  MapPin,
  Phone,
  Server,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const skills = [
  'Laravel',
  'PHP',
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'MySQL',
  'Inertia.js',
  'Git',
  'GitHub',
]

const preferredRoles = [
  'Junior Full-Stack Developer',
  'Junior Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'IT Support or Technical Role',
]

export default function Recruiter() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:pt-40">
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-80 h-80 w-80 rounded-full bg-fuchsia-600/[0.07] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2">
              <BriefcaseBusiness size={15} className="text-violet-300" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                Recruiter View
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/[0.07] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs font-medium text-emerald-300">
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-400">
                Candidate Overview
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Francis Lee
                <span className="block bg-gradient-to-r from-violet-300 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
                  Recanil
                </span>
              </h1>

              <h2 className="mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
                Aspiring Full-Stack Web Developer
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Fourth-year BS Computer Engineering student with practical
                internship experience and hands-on knowledge in developing
                responsive web applications using Laravel, React, TypeScript,
                PHP, Tailwind CSS, and MySQL.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/documents/RECANIL-FRANCIS-LEE.pdf"
                  download
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  <Download size={17} />
                  Download Resume
                </a>

                <a
                  href="mailto:francislee.0908@gmail.com"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-slate-200 transition hover:border-violet-400/40"
                >
                  <Mail size={17} />
                  Contact Me
                </a>

                <Link
                  to="/projects"
                  className="inline-flex h-12 items-center gap-2 px-3 text-sm font-semibold text-violet-300"
                >
                  View Projects
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <img
                    src="/images/profile/francis-recruiter.png"
                    alt="Francis Lee Recanil"
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent px-6 pb-6 pt-24">
                    <p className="text-xl font-bold">Francis Lee Recanil</p>

                    <p className="mt-1 text-sm text-slate-300">
                      Full-Stack Web Developer
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                      <MapPin size={14} className="text-violet-300" />
                      Valenzuela City, Philippines
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
              <GraduationCap size={22} className="text-violet-300" />

              <p className="mt-4 text-xl font-bold">4th Year Student</p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Bachelor of Science in Computer Engineering
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
              <Code2 size={22} className="text-violet-300" />

              <p className="mt-4 text-xl font-bold">Full-Stack Focus</p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Responsive frontend and business-oriented backend development
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
              <Server size={22} className="text-violet-300" />

              <p className="mt-4 text-xl font-bold">Practical Experience</p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Voluntary IT internship and collaborative software projects
              </p>
            </div>
          </div>

          <section className="mt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Technical Skills
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Technologies I work with
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 text-sm font-medium text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-24 rounded-[2rem] border border-violet-400/15 bg-violet-500/[0.06] p-7 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Flagship Project
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                  Sales and Inventory Management System
                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  A full-stack business application for managing products,
                  inventory, orders, customers, suppliers, payments, expenses,
                  reports, and sales channels.
                </p>

                <Link
                  to="/projects"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-300"
                >
                  Explore the project
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Product Management',
                  'Order Processing',
                  'Inventory Monitoring',
                  'Customer Records',
                  'Supplier Management',
                  'Sales Reports',
                  'Expense Tracking',
                  'Role-Based Access',
                ].map((module) => (
                  <div
                    key={module}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#050816]/60 px-4 py-3"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-emerald-400"
                    />

                    <span className="text-xs text-slate-300">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
                Preferred Roles
              </p>

              <div className="mt-6 space-y-3">
                {preferredRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3"
                  >
                    <CheckCircle2 size={16} className="text-violet-300" />

                    <span className="text-sm text-slate-300">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
                Contact Information
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:francislee.0908@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-white/[0.07] p-4 transition hover:border-violet-400/30"
                >
                  <Mail size={19} className="text-violet-300" />

                  <div>
                    <p className="text-xs text-slate-600">Email</p>
                    <p className="mt-1 text-sm text-slate-300">
                      francislee.0908@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+639325364205"
                  className="flex items-center gap-4 rounded-xl border border-white/[0.07] p-4 transition hover:border-violet-400/30"
                >
                  <Phone size={19} className="text-violet-300" />

                  <div>
                    <p className="text-xs text-slate-600">Phone</p>
                    <p className="mt-1 text-sm text-slate-300">
                      0932 536 4205
                    </p>
                  </div>
                </a>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Franz0908-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/[0.08] px-5 text-sm text-slate-300"
                  >
                    <Code2 size={17} />
                    GitHub
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/recanil-francis-lee-53b77a402"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/[0.08] px-5 text-sm text-slate-300"
                  >
                    <BriefcaseBusiness size={17} />
                    LinkedIn
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
