import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Coffee,
  GraduationCap,
  Layers3,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { journeyContent } from '../../content'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
  TechBadge,
} from '../../components/ui'

const milestoneIcons = [
  BookOpen,
  Code2,
  Coffee,
  GraduationCap,
  Layers3,
  BriefcaseBusiness,
]

const milestoneAccentClasses = [
  'border-blue-400/20 bg-blue-500/10 text-blue-300',
  'border-cyan-400/20 bg-cyan-500/10 text-cyan-300',
  'border-amber-400/20 bg-amber-500/10 text-amber-300',
  'border-emerald-400/20 bg-emerald-500/10 text-emerald-300',
  'border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-300',
  'border-violet-400/20 bg-violet-500/10 text-violet-300',
]

const currentFocus = [
  'Laravel',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'MySQL',
  'Testing',
  'Architecture',
  'AI-Assisted Development',
]

const journeyLessons = [
  {
    icon: Target,
    title: 'Start with the problem',
    description:
      'Understanding the workflow and user requirements makes implementation clearer and more useful.',
  },
  {
    icon: Code2,
    title: 'Build through practice',
    description:
      'Every real project improves problem solving, debugging, database design, and frontend development.',
  },
  {
    icon: Sparkles,
    title: 'Use AI responsibly',
    description:
      'AI supports planning and productivity, while technical decisions, review, and validation remain under my control.',
  },
  {
    icon: Rocket,
    title: 'Keep improving',
    description:
      'Each completed feature creates a new opportunity to refactor, test, document, and learn.',
  },
]

export default function Journey() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden pb-24 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-35" />

          <div className="absolute -left-40 top-16 h-[440px] w-[440px] rounded-full bg-violet-600/15 blur-[150px]" />

          <div className="absolute right-0 top-20 h-[460px] w-[460px] rounded-full bg-purple-500/15 blur-[160px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <Badge variant="purple">Development Journey</Badge>

            <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl lg:leading-[1.02] tracking-[-0.055em] text-white">
              Learning through
              <GradientText> every project.</GradientText>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
              A timeline of the projects, technologies, challenges, and lessons
              that continue shaping my path as a Full Stack Web Developer.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <GlassCard className="p-6">
              <BookOpen size={22} className="text-violet-300" />

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-600">
                Starting Point
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Programming Fundamentals
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <Layers3 size={22} className="text-violet-300" />

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-600">
                Projects Built
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Business and Academic Systems
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <Rocket size={22} className="text-violet-300" />

              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-slate-600">
                Current Direction
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Full Stack Software Engineering
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="From fundamentals to full-stack business applications."
            description="Each stage introduced new technologies, development workflows, and practical software challenges."
          />

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-violet-400 via-violet-400/30 to-transparent" />

            <div className="space-y-16">
              {journeyContent.map((milestone, index) => {
                const Icon =
                  milestoneIcons[index] ?? GraduationCap

                const accentClass =
                  milestoneAccentClasses[index] ??
                  milestoneAccentClasses[
                    milestoneAccentClasses.length - 1
                  ]

                const isLeft = index % 2 === 0

                return (
                  <motion.article
                    key={`${milestone.period}-${milestone.title}`}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -32 : 32,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    className="relative grid grid-cols-2 gap-16"
                  >
                    <div
                      className={
                        isLeft
                          ? 'pr-10'
                          : 'col-start-2 pl-10'
                      }
                    >
                      <GlassCard hoverable className="p-7">
                        <div
                          className={`inline-flex rounded-xl border p-3 ${accentClass}`}
                        >
                          <Icon size={23} />
                        </div>

                        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                          {milestone.period}
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white">
                          {milestone.title}
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-slate-500">
                          {milestone.description}
                        </p>

                        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                          Milestone {String(index + 1).padStart(2, '0')}
                        </div>
                      </GlassCard>
                    </div>

                    <div className="absolute left-1/2 top-9 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#050816] bg-violet-600 text-sm font-bold text-white shadow-[0_0_28px_rgba(139,92,246,0.65)]">
                      {index + 1}
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Lessons Along the Way"
              title="What every project taught me."
              description="Development is not only about finishing features. It is also about understanding mistakes, improving decisions, and building better workflows."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
              {journeyLessons.map(
                ({ icon: Icon, title, description }) => (
                  <GlassCard
                    key={title}
                    hoverable
                    className="p-6"
                  >
                    <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {description}
                    </p>
                  </GlassCard>
                ),
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <SectionHeading
            eyebrow="Current Chapter"
            title="Building larger applications with a stronger engineering workflow."
            description="My current focus is improving full-stack application architecture, testing, reusable components, database design, and maintainable development practices."
            align="center"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {currentFocus.map((focus) => (
              <TechBadge
                key={focus}
                className="px-5 py-3 text-sm"
              >
                {focus}
              </TechBadge>
            ))}
          </div>

          <GlassCard className="mx-auto mt-12 max-w-4xl p-8">
            <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
              <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-violet-300">
                <BriefcaseBusiness size={27} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                  Current Major Project
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Sales &amp; Inventory Management System
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-400">
                  A larger full-stack business application combining products,
                  stock receiving, sales, suppliers, customers, invoices,
                  expenses, payments, permissions, and reports.
                </p>

                <Link
                  to="/projects/sales-inventory"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                >
                  Open Case Study

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </GlassCard>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent px-12 py-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/25 blur-[90px]" />

            <div className="relative flex flex-col items-start gap-7 sm:gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  The Journey Continues
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl text-white">
                  Every new project creates the next milestone.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Explore the applications that contributed to this journey and
                  the technologies used to build them.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
                >
                  Explore Projects

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-slate-300 transition hover:border-violet-400/35 hover:text-white"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}