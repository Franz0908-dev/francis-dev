import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroContent } from '../../../content'
import {
  Badge,
  Container,
  GradientText,
  TechBadge,
} from '../../ui'

export default function Hero() {
  const nameParts = heroContent.name.split(' ')
  const highlightedName = nameParts.pop()
  const firstNames = nameParts.join(' ')

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-50" />

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -24, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 13,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 32, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
          className="absolute -right-20 top-14 h-[480px] w-[480px] rounded-full bg-purple-500/20 blur-[150px]"
        />

        <div className="absolute bottom-0 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <Container className="relative grid min-h-[calc(100vh-80px)] grid-cols-[1.08fr_0.92fr] items-center gap-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          <Badge
            variant="success"
            className="mb-7 gap-2 px-4 py-2 uppercase tracking-[0.16em]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
            {heroContent.availability}
          </Badge>

          <p className="mb-3 text-xl font-medium text-slate-300">
            {heroContent.introduction}
          </p>

          <h1 className="max-w-3xl text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-white">
            {firstNames}{' '}
            <GradientText>{highlightedName}</GradientText>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-violet-400 to-transparent" />

            <h2 className="text-3xl font-semibold tracking-tight text-white">
              {heroContent.role}
            </h2>
          </div>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {heroContent.headline}
          </p>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
            {heroContent.description}
          </p>

          <div className="mt-5 max-w-2xl rounded-2xl border border-violet-400/10 bg-violet-500/[0.045] p-5">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-lg bg-violet-500/10 p-2 text-violet-300">
                <Sparkles size={17} />
              </div>

              <p className="text-sm leading-7 text-slate-400">
                {heroContent.aiStatement}
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to={heroContent.primaryAction.href}
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 text-sm font-semibold text-white shadow-[0_14px_45px_rgba(139,92,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(139,92,246,0.5)]"
            >
              {heroContent.primaryAction.label}

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={heroContent.secondaryAction.href}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.075]"
            >
              <Download size={17} />
              {heroContent.secondaryAction.label}
            </a>

            <a
              href={heroContent.githubAction.href}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/10 px-6 text-sm font-semibold text-slate-400 transition duration-300 hover:border-violet-400/35 hover:text-white"
            >
              <GitBranch size={17} />
              {heroContent.githubAction.label}
            </a>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
              Technologies I work with
            </p>

            <div className="flex max-w-3xl flex-wrap gap-2.5">
              {heroContent.technologies.map((technology) => (
                <TechBadge key={technology}>{technology}</TechBadge>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex min-h-[610px] items-center justify-center"
        >
          <div className="absolute h-[500px] w-[500px] rounded-full border border-violet-400/15" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className="absolute h-[450px] w-[450px] rounded-full border border-dashed border-purple-400/25"
          />

          <motion.div
            animate={{
              scale: [1, 1.07, 1],
              opacity: [0.55, 0.85, 0.55],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="absolute h-[410px] w-[410px] rounded-full bg-violet-500/25 blur-[75px]"
          />

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="relative z-10 h-[360px] w-[360px] overflow-hidden rounded-full border border-violet-300/50 bg-[#0d1021] p-2 shadow-[0_0_45px_rgba(139,92,246,0.55),0_0_110px_rgba(168,85,247,0.25)]"
          >
            <img
              src="/images/profile/francis-hero.png"
              alt={heroContent.name}
              className="h-full w-full rounded-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass-panel absolute left-0 top-24 z-20 w-52 p-5"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-violet-500/12 p-2 text-violet-300">
                <BriefcaseBusiness size={18} />
              </div>

              <span className="text-xs text-slate-500">
                Current Project
              </span>
            </div>

            <p className="text-sm font-semibold leading-6 text-white">
              Sales &amp; Inventory System
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Laravel · React · TypeScript
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass-panel absolute right-0 top-32 z-20 w-40 p-4"
          >
            <div className="flex items-center gap-2 text-violet-300">
              <MapPin size={16} />
              <span className="text-xs text-slate-400">Location</span>
            </div>

            <p className="mt-3 text-sm font-semibold text-white">
              {heroContent.location}
            </p>

            <p className="mt-1 text-xs text-slate-500">
              {heroContent.timezone}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass-panel absolute bottom-20 right-5 z-20 w-48 p-5"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />

              <span className="text-xs font-semibold text-white">
                Available for Work
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Open to internships and entry-level web development roles.
            </p>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className="absolute h-[490px] w-[490px]"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-xl border border-violet-400/20 bg-[#0d1021]/90 p-3 text-violet-300 shadow-[0_0_28px_rgba(139,92,246,0.25)]">
              <Code2 size={20} />
            </div>

            <div className="absolute bottom-10 left-0 rounded-xl border border-violet-400/20 bg-[#0d1021]/90 p-3 text-violet-300 shadow-[0_0_28px_rgba(139,92,246,0.25)]">
              <Sparkles size={20} />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}