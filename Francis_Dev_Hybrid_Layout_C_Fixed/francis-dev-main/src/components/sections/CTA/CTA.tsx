import { ArrowRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactContent } from '../../../content'
import { Container, Section } from '../../ui'

export default function CTA() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent px-12 py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-purple-500/15 blur-[90px]" />

          <div className="relative flex flex-col items-start gap-7 sm:gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Let&apos;s work together
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl text-white">
                {contactContent.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                {contactContent.description}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Contact Me
                <Mail size={17} />
              </Link>

              <Link
                to="/recruiter"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-violet-400/35 hover:text-white"
              >
                Recruiter View

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}