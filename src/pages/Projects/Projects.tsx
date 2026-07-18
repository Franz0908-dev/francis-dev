import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  Monitor,
  Search,
  Sparkles,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsContent } from '../../content'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
  TechBadge,
} from '../../components/ui'

const filters = [
  'All',
  'Current Project',
  'Solo Academic Project',
  'Academic Project',
  'Personal Project',
] as const

const projectIcons = {
  'sales-inventory': BriefcaseBusiness,
  'point-of-sale': Monitor,
  'student-management': GraduationCap,
  portfolio: Code2,
}

const projectGradients = {
  'sales-inventory':
    'from-violet-600/30 via-purple-500/15 to-transparent',
  'point-of-sale':
    'from-amber-500/20 via-orange-500/10 to-transparent',
  'student-management':
    'from-blue-500/20 via-cyan-500/10 to-transparent',
  portfolio:
    'from-fuchsia-500/20 via-violet-500/10 to-transparent',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>('All')

  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return projectsContent.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' || project.status === activeFilter

      const matchesSearch =
        normalizedQuery.length === 0 ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.technologies.some((technology) =>
          technology.toLowerCase().includes(normalizedQuery),
        )

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const featuredProject = projectsContent[0]

  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="absolute -left-40 top-16 h-[440px] w-[440px] rounded-full bg-violet-600/15 blur-[150px]" />
          <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[150px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <Badge variant="purple">Selected Work</Badge>

            <h1 className="mt-7 text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-white">
              Projects built around
              <GradientText> real workflows.</GradientText>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
              Explore the business systems, academic applications, and
              personal projects that shaped my development experience.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-[1fr_auto] items-center gap-6">
            <label className="relative">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects or technologies..."
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
              />
            </label>

            <p className="text-sm text-slate-600">
              {filteredProjects.length}{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={
                    isActive
                      ? 'rounded-full border border-violet-400/35 bg-violet-500/15 px-4 py-2 text-xs font-semibold text-violet-200'
                      : 'rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-slate-500 transition hover:border-violet-400/20 hover:text-slate-300'
                  }
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-[0.82fr_1.18fr] items-center gap-14">
            <div>
              <Badge variant="success" className="gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                {featuredProject.status}
              </Badge>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                Flagship Project
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
                {featuredProject.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {featuredProject.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <TechBadge key={technology}>{technology}</TechBadge>
                ))}
              </div>

              <Link
                to={featuredProject.caseStudyHref}
                className="group mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                View Full Case Study

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <GlassCard className="relative overflow-hidden p-5">
              <div className="absolute inset-10 rounded-full bg-violet-500/20 blur-[100px]" />

              <div className="relative rounded-2xl border border-white/[0.08] bg-[#080b18] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                  <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-slate-700">
                    Sales &amp; Inventory Dashboard
                  </span>
                </div>

                <div className="grid h-[360px] grid-cols-[0.23fr_0.77fr] gap-4">
                  <aside className="rounded-xl border border-white/[0.05] bg-white/[0.025] p-4">
                    <div className="mb-8 h-10 w-10 rounded-xl bg-violet-500/40" />

                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className="mb-4 h-2 rounded-full bg-white/[0.07]"
                      />
                    ))}
                  </aside>

                  <div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.035] p-4"
                        >
                          <div className="h-2 w-12 rounded-full bg-white/10" />
                          <div className="mt-4 h-5 w-16 rounded bg-violet-500/20" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 h-44 rounded-xl border border-violet-400/10 bg-gradient-to-b from-violet-500/10 to-transparent p-5">
                      <div className="flex h-full items-end gap-3">
                        {[42, 66, 54, 82, 68, 94, 76].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/40 to-purple-300/75"
                              style={{ height: `${height}%` }}
                            />
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="h-12 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                      <div className="h-12 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Project Collection"
            title="Applications, systems, and experiments."
            description="Each project represents a different stage of my development journey, from academic applications to larger full-stack business systems."
          />

          {filteredProjects.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => {
                const Icon =
                  projectIcons[
                    project.id as keyof typeof projectIcons
                  ] ?? Layers3

                const gradient =
                  projectGradients[
                    project.id as keyof typeof projectGradients
                  ] ?? 'from-violet-500/20 to-transparent'

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                  >
                    <GlassCard
                      hoverable
                      className="h-full overflow-hidden"
                    >
                      <div
                        className={`relative h-64 overflow-hidden border-b border-white/[0.07] bg-gradient-to-br ${gradient}`}
                      >
                        <div className="hero-grid absolute inset-0 opacity-35" />

                        <div className="absolute left-7 top-7">
                          <Badge variant="purple">
                            {project.status}
                          </Badge>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-3xl border border-white/10 bg-[#0b0e1c]/80 p-8 text-violet-300 shadow-[0_25px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                            <Icon size={54} strokeWidth={1.4} />
                          </div>
                        </div>

                        <div className="absolute bottom-6 right-6 rounded-full border border-white/[0.08] bg-[#050816]/70 px-4 py-2 text-xs font-medium text-slate-400 backdrop-blur-xl">
                          {project.role}
                        </div>
                      </div>

                      <div className="p-7">
                        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-slate-500">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 6)
                            .map((technology) => (
                              <TechBadge key={technology}>
                                {technology}
                              </TechBadge>
                            ))}
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-6">
                          <span className="text-xs uppercase tracking-[0.16em] text-slate-700">
                            {project.features.length} features
                          </span>

                          <Link
                            to={project.caseStudyHref}
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                          >
                            View Project

                            <ArrowRight
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.article>
                )
              })}
            </div>
          ) : (
            <GlassCard className="mt-12 p-12 text-center">
              <Search
                size={42}
                className="mx-auto text-violet-400/60"
              />

              <h3 className="mt-6 text-xl font-semibold text-white">
                No projects found
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveFilter('All')
                  setSearchQuery('')
                }}
                className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Reset Filters
              </button>
            </GlassCard>
          )}
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-[0.8fr_1.2fr] items-center gap-14">
            <div>
              <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                <Sparkles size={24} />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-[-0.035em] text-white">
                Every project is part of the learning process.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                These projects helped me improve my understanding of
                application workflows, databases, frontend development,
                backend logic, debugging, testing, and software organization.
              </p>
            </div>

            <GlassCard className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                What these projects demonstrate
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  'Business workflow implementation',
                  'Frontend and backend integration',
                  'Relational database usage',
                  'CRUD application development',
                  'Responsive interface design',
                  'Debugging and continuous improvement',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 text-sm leading-6 text-slate-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent px-12 py-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/25 blur-[90px]" />

            <div className="relative flex items-center justify-between gap-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Featured Case Study
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
                  Explore how the Sales &amp; Inventory System was built.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Review the problem, solution, modules, technologies,
                  challenges, lessons learned, and future improvements.
                </p>
              </div>

              <Link
                to="/projects/sales-inventory"
                className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Open Case Study

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}