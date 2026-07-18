import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../components/ui'

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center pt-20">
      <Container className="py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          Error 404
        </p>
        <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
          The page may have been moved, renamed, or no longer exists.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            <Home size={17} />
            Return home
          </Link>
          <Link
            to="/projects"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-slate-200 transition hover:border-violet-400/40"
          >
            <ArrowLeft size={17} />
            Browse projects
          </Link>
        </div>
      </Container>
    </section>
  )
}
