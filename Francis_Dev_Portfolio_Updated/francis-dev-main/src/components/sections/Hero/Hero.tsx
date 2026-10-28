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
    <section className="relative overflow-hidden pb-12 pt-24 sm:pb-18 sm:pt-28 lg:pb-24 lg:pt-32 xl:min-h-[calc(100vh-80px)] xl:pb-0 xl:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0 opacity-30 sm:opacity-45" />

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
          className="absolute -left-52 top-20 h-[340px] w-[340px] rounded-full bg-violet-600/20 blur-[120px] sm:h-[420px] sm:w-[420px] xl:-left-32 xl:top-24"
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
          className="absolute -right-48 top-[500px] h-[340px] w-[340px] rounded-full bg-purple-500/20 blur-[120px] sm:h-[440px] sm:w-[440px] lg:top-[620px] xl:-right-20 xl:top-14 xl:h-[480px] xl:w-[480px] xl:blur-[150px]"
        />

        <div className="absolute bottom-0 left-1/2 h-48 w-[520px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[110px] sm:w-[760px] xl:h-64 xl:w-[900px] xl:blur-[130px]" />
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-9 sm:gap-14 lg:gap-18 xl:min-h-[calc(100vh-80px)] xl:grid-cols-[1.08fr_0.92fr] xl:gap-16 xl:py-20">
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
            className="mb-4 gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.14em] sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.16em]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />
            {heroContent.availability}
          </Badge>

          <p className="mb-2 text-base font-medium text-slate-300 sm:mb-3 sm:text-lg lg:text-xl">
            {heroContent.introduction}
          </p>

          <h1 className="max-w-3xl text-[2.55rem] font-bold leading-[0.99] tracking-[-0.05em] text-white min-[380px]:text-5xl sm:text-6xl lg:text-7xl xl:text-6xl">
            {firstNames}{' '}
            <GradientText>{highlightedName}</GradientText>
          </h1>

          <div className="mt-4 flex items-start gap-3 sm:mt-6 sm:items-center">
            <div className="mt-3 h-px w-8 shrink-0 bg-gradient-to-r from-violet-400 to-transparent sm:mt-0 sm:w-12" />

            <h2 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              {heroContent.role}
            </h2>
          </div>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            {heroContent.headline}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            {heroContent.description}
          </p>

          <div className="mt-4 max-w-2xl rounded-2xl border border-violet-400/10 bg-violet-500/[0.045] p-4 sm:mt-5 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0 rounded-lg bg-violet-500/10 p-2 text-violet-300 sm:mt-1">
                <Sparkles size={17} />
              </div>

              <p className="text-xs leading-5 text-slate-400 sm:text-sm sm:leading-7">
                {heroContent.aiStatement}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-4">
            <Link
              to={heroContent.primaryAction.href}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 px-6 text-sm font-semibold text-white shadow-[0_14px_45px_rgba(139,92,246,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(139,92,246,0.5)] active:scale-[0.98] lg:w-auto"
            >
              {heroContent.primaryAction.label}

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={heroContent.secondaryAction.href}
              download
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.075] active:scale-[0.98] lg:w-auto"
            >
              <Download size={17} />
              {heroContent.secondaryAction.label}
            </a>

            <a
              href={heroContent.githubAction.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:text-white active:scale-[0.98] sm:col-span-2 lg:w-auto"
            >
              <GitBranch size={17} />
              {heroContent.githubAction.label}
            </a>
          </div>

          <div className="mt-8 sm:mt-11">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:mb-4 sm:text-[11px] sm:tracking-[0.22em]">
              Technologies I work with
            </p>

            <div className="flex max-w-3xl flex-wrap gap-1.5 sm:gap-2.5">
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
          className="relative mx-auto flex min-h-[350px] w-full max-w-[410px] items-center justify-center sm:min-h-[500px] sm:max-w-[570px] lg:min-h-[590px] lg:max-w-[650px] xl:min-h-[610px] xl:max-w-none"
        >
          <div className="absolute h-[275px] w-[275px] rounded-full border border-violet-400/15 min-[380px]:h-[305px] min-[380px]:w-[305px] sm:h-[430px] sm:w-[430px] lg:h-[480px] lg:w-[480px] xl:h-[500px] xl:w-[500px]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            className="absolute h-[248px] w-[248px] rounded-full border border-dashed border-purple-400/25 min-[380px]:h-[278px] min-[380px]:w-[278px] sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px] xl:h-[450px] xl:w-[450px]"
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
            className="absolute h-[225px] w-[225px] rounded-full bg-violet-500/25 blur-[55px] min-[380px]:h-[255px] min-[380px]:w-[255px] sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px] xl:h-[410px] xl:w-[410px] xl:blur-[75px]"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="relative z-10 h-[205px] w-[205px] overflow-hidden rounded-full border border-violet-300/50 bg-[#0d1021] p-1.5 shadow-[0_0_40px_rgba(139,92,246,0.5),0_0_90px_rgba(168,85,247,0.2)] min-[380px]:h-[235px] min-[380px]:w-[235px] sm:h-[310px] sm:w-[310px] sm:p-2 lg:h-[340px] lg:w-[340px] xl:h-[360px] xl:w-[360px]"
          >
            <img
              src="/images/profile/francis-hero.png"
              alt={heroContent.name}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full rounded-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass-panel absolute left-1 top-5 z-20 w-[142px] p-3 min-[380px]:w-[158px] sm:left-3 sm:top-16 sm:w-48 sm:p-4 lg:w-52 lg:p-5 xl:left-0 xl:top-24"
          >
            <div className="mb-2 flex items-center gap-2 sm:mb-4 sm:gap-3">
              <div className="rounded-lg bg-violet-500/12 p-1.5 text-violet-300 sm:p-2">
                <BriefcaseBusiness size={16} />
              </div>

              <span className="text-[9px] text-slate-500 sm:text-xs">
                Current Project
              </span>
            </div>

            <p className="text-[10px] font-semibold leading-4 text-white sm:text-sm sm:leading-6">
              Sales &amp; Inventory System
            </p>

            <p className="mt-1 text-[8px] text-slate-500 sm:mt-2 sm:text-xs">
              Laravel · React · TypeScript
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass-panel absolute right-1 top-16 z-20 w-[118px] p-3 sm:right-4 sm:top-24 sm:w-36 sm:p-4 lg:w-40 xl:right-0 xl:top-32"
          >
            <div className="flex items-center gap-1.5 text-violet-300 sm:gap-2">
              <MapPin size={14} />
              <span className="text-[9px] text-slate-400 sm:text-xs">
                Location
              </span>
            </div>

            <p className="mt-2 text-[10px] font-semibold text-white sm:mt-3 sm:text-sm">
              {heroContent.location}
            </p>

            <p className="mt-1 text-[8px] text-slate-500 sm:text-xs">
              {heroContent.timezone}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass-panel absolute bottom-2 right-2 z-20 w-[144px] p-3 sm:bottom-12 sm:right-5 sm:w-44 sm:p-4 lg:bottom-16 lg:w-48 lg:p-5 xl:bottom-20"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399] sm:h-2.5 sm:w-2.5" />

              <span className="text-[9px] font-semibold text-white sm:text-xs">
                Available for Work
              </span>
            </div>

            <p className="mt-2 text-[8px] leading-4 text-slate-500 sm:mt-3 sm:text-xs sm:leading-5">
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
            className="absolute h-[266px] w-[266px] min-[380px]:h-[296px] min-[380px]:w-[296px] sm:h-[420px] sm:w-[420px] lg:h-[470px] lg:w-[470px] xl:h-[490px] xl:w-[490px]"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-xl border border-violet-400/20 bg-[#0d1021]/90 p-2 text-violet-300 shadow-[0_0_28px_rgba(139,92,246,0.25)] sm:p-3">
              <Code2 size={17} className="sm:h-5 sm:w-5" />
            </div>

            <div className="absolute bottom-5 left-0 rounded-xl border border-violet-400/20 bg-[#0d1021]/90 p-2 text-violet-300 shadow-[0_0_28px_rgba(139,92,246,0.25)] sm:bottom-10 sm:p-3">
              <Sparkles size={17} className="sm:h-5 sm:w-5" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}