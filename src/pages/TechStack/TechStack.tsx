import { motion } from 'framer-motion'
import {
  Braces,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Layers3,
  Monitor,
  ServerCog,
  Sparkles,
  TestTube2,
  Wrench,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { techStackContent } from '../../content'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
  TechBadge,
} from '../../components/ui'

const categoryIcons = {
  Frontend: Monitor,
  Backend: ServerCog,
  Database,
  'Development Tools': Wrench,
  'Quality and Workflow': TestTube2,
}

const technologyDetails: Record<
  string,
  {
    summary: string
    experience: string
    favoriteFeatures: string[]
    projectUsage: string[]
  }
> = {
  HTML5: {
    summary:
      'Used to create semantic and accessible page structures for web applications.',
    experience: 'Core frontend foundation',
    favoriteFeatures: [
      'Semantic elements',
      'Forms',
      'Accessibility structure',
    ],
    projectUsage: [
      'Student Management System',
      'Portfolio Website',
    ],
  },

  CSS3: {
    summary:
      'Used for custom layouts, responsive interfaces, animation, and visual styling.',
    experience: 'Core frontend foundation',
    favoriteFeatures: [
      'Grid',
      'Flexbox',
      'Custom properties',
      'Transitions',
    ],
    projectUsage: [
      'Student Management System',
      'Portfolio Website',
    ],
  },

  JavaScript: {
    summary:
      'Used to add interactivity, data handling, browser behavior, and application logic.',
    experience: 'Frontend development',
    favoriteFeatures: [
      'Array methods',
      'Modules',
      'Async workflows',
      'DOM APIs',
    ],
    projectUsage: [
      'Student Management System',
      'Portfolio Website',
    ],
  },

  TypeScript: {
    summary:
      'Used to improve code safety, maintainability, editor support, and component contracts.',
    experience: 'Current active focus',
    favoriteFeatures: [
      'Interfaces',
      'Type inference',
      'Union types',
      'Typed component props',
    ],
    projectUsage: [
      'Sales & Inventory System',
      'FRANCIS.DEV Portfolio',
    ],
  },

  React: {
    summary:
      'Used to create reusable, interactive, and data-driven user interfaces.',
    experience: 'Current active focus',
    favoriteFeatures: [
      'Reusable components',
      'Hooks',
      'State management',
      'Declarative UI',
    ],
    projectUsage: [
      'Sales & Inventory System',
      'FRANCIS.DEV Portfolio',
    ],
  },

  'Tailwind CSS': {
    summary:
      'Used to build consistent user interfaces quickly through utility-first styling.',
    experience: 'Current active focus',
    favoriteFeatures: [
      'Utility classes',
      'Responsive variants',
      'Design-system consistency',
      'Fast prototyping',
    ],
    projectUsage: [
      'Sales & Inventory System',
      'FRANCIS.DEV Portfolio',
    ],
  },

  PHP: {
    summary:
      'Used for backend development, server-side processing, validation, and database workflows.',
    experience: 'Backend development',
    favoriteFeatures: [
      'Server-side logic',
      'Form processing',
      'Database integration',
      'Application workflows',
    ],
    projectUsage: [
      'Student Management System',
      'Sales & Inventory System',
    ],
  },

  Laravel: {
    summary:
      'Used for modern PHP application development with routing, validation, authentication, and database tools.',
    experience: 'Primary backend framework',
    favoriteFeatures: [
      'Routing',
      'Eloquent ORM',
      'Validation',
      'Authentication',
      'Migrations',
    ],
    projectUsage: [
      'Sales & Inventory Management System',
    ],
  },

  'Inertia.js': {
    summary:
      'Used to connect Laravel backend routes and React pages without building a separate API for every screen.',
    experience: 'Current project integration',
    favoriteFeatures: [
      'Shared Laravel and React workflow',
      'Server-side routing',
      'Page props',
      'Form helpers',
    ],
    projectUsage: [
      'Sales & Inventory Management System',
    ],
  },

  Java: {
    summary:
      'Used for object-oriented programming and desktop application development.',
    experience: 'Academic application development',
    favoriteFeatures: [
      'Object-oriented design',
      'Classes and methods',
      'Desktop UI logic',
      'Reusable application code',
    ],
    projectUsage: [
      'Starbucks-Inspired POS System',
    ],
  },

  MySQL: {
    summary:
      'Used for relational database design, queries, records, relationships, and application persistence.',
    experience: 'Primary relational database',
    favoriteFeatures: [
      'Relational tables',
      'Joins',
      'Indexes',
      'Constraints',
      'Structured queries',
    ],
    projectUsage: [
      'Sales & Inventory System',
      'Point of Sale System',
      'Student Management System',
    ],
  },

  'Laravel Migrations': {
    summary:
      'Used to define and version database structures directly inside Laravel projects.',
    experience: 'Database workflow',
    favoriteFeatures: [
      'Schema versioning',
      'Rollback support',
      'Repeatable setup',
      'Team consistency',
    ],
    projectUsage: [
      'Sales & Inventory Management System',
    ],
  },

  Git: {
    summary:
      'Used to track code changes, create commits, manage branches, and protect project history.',
    experience: 'Daily development workflow',
    favoriteFeatures: [
      'Commits',
      'Branches',
      'Change tracking',
      'Rollback',
    ],
    projectUsage: [
      'FRANCIS.DEV Portfolio',
      'Current development projects',
    ],
  },

  GitHub: {
    summary:
      'Used for source-code hosting, repository management, project presentation, and collaboration.',
    experience: 'Version-control platform',
    favoriteFeatures: [
      'Repositories',
      'README documentation',
      'Commit history',
      'Project sharing',
    ],
    projectUsage: [
      'FRANCIS.DEV Portfolio',
      'Portfolio project repositories',
    ],
  },

  'VS Code': {
    summary:
      'Primary development editor used for React, TypeScript, PHP, and project management.',
    experience: 'Primary code editor',
    favoriteFeatures: [
      'Extensions',
      'Integrated terminal',
      'TypeScript support',
      'Git integration',
    ],
    projectUsage: [
      'All current web development projects',
    ],
  },

  XAMPP: {
    summary:
      'Used as a local development environment for PHP, Apache, and MySQL projects.',
    experience: 'Local server environment',
    favoriteFeatures: [
      'Apache',
      'MySQL',
      'phpMyAdmin',
      'Local project hosting',
    ],
    projectUsage: [
      'Student Management System',
      'POS System',
      'Local Laravel development',
    ],
  },

  Postman: {
    summary:
      'Used to inspect, test, and debug HTTP requests and API behavior.',
    experience: 'API testing tool',
    favoriteFeatures: [
      'Request collections',
      'Headers',
      'JSON bodies',
      'Response inspection',
    ],
    projectUsage: [
      'Backend and API testing',
    ],
  },

  Figma: {
    summary:
      'Used for visual planning, wireframes, interface concepts, and layout decisions.',
    experience: 'UI planning tool',
    favoriteFeatures: [
      'Wireframes',
      'Components',
      'Layout planning',
      'Design review',
    ],
    projectUsage: [
      'FRANCIS.DEV Portfolio planning',
    ],
  },

  Canva: {
    summary:
      'Used for quick visual assets, presentation layouts, and supporting graphics.',
    experience: 'Visual-content tool',
    favoriteFeatures: [
      'Templates',
      'Quick layouts',
      'Export tools',
      'Presentation assets',
    ],
    projectUsage: [
      'Portfolio supporting assets',
      'Academic presentations',
    ],
  },

  Photoshop: {
    summary:
      'Used for image cleanup, editing, visual preparation, and presentation assets.',
    experience: 'Image-editing tool',
    favoriteFeatures: [
      'Image adjustments',
      'Background cleanup',
      'Layer editing',
      'Export optimization',
    ],
    projectUsage: [
      'Portfolio images',
      'Project presentation assets',
    ],
  },

  ESLint: {
    summary:
      'Used to detect code-quality issues and maintain consistent JavaScript and TypeScript standards.',
    experience: 'Code-quality workflow',
    favoriteFeatures: [
      'Static analysis',
      'Rule enforcement',
      'Editor feedback',
      'React integration',
    ],
    projectUsage: [
      'FRANCIS.DEV Portfolio',
    ],
  },

  Prettier: {
    summary:
      'Used to keep source-code formatting clean and consistent.',
    experience: 'Formatting workflow',
    favoriteFeatures: [
      'Automatic formatting',
      'Consistent code style',
      'Editor integration',
    ],
    projectUsage: [
      'React and TypeScript projects',
    ],
  },

  Pest: {
    summary:
      'Used for expressive and readable automated testing in Laravel applications.',
    experience: 'Currently learning and applying',
    favoriteFeatures: [
      'Readable syntax',
      'Feature tests',
      'Laravel integration',
    ],
    projectUsage: [
      'Sales & Inventory testing workflow',
    ],
  },

  PHPUnit: {
    summary:
      'Used for automated PHP testing and validating application behavior.',
    experience: 'Testing foundation',
    favoriteFeatures: [
      'Assertions',
      'Unit tests',
      'Feature validation',
    ],
    projectUsage: [
      'Laravel application testing',
    ],
  },

  Debugging: {
    summary:
      'A practical workflow for finding errors, reading logs, checking output, and verifying fixes.',
    experience: 'Continuous project practice',
    favoriteFeatures: [
      'Error tracing',
      'Console inspection',
      'Build verification',
      'Step-by-step isolation',
    ],
    projectUsage: [
      'All development projects',
    ],
  },

  'Test Planning': {
    summary:
      'Used to define important workflows, expected outcomes, edge cases, and validation steps.',
    experience: 'Developing engineering practice',
    favoriteFeatures: [
      'Scenario coverage',
      'Regression checks',
      'Workflow validation',
    ],
    projectUsage: [
      'Sales & Inventory System',
      'Portfolio development',
    ],
  },

  'AI-Assisted Development': {
    summary:
      'Used to support ideation, debugging, refactoring, documentation, planning, and development speed.',
    experience: 'Daily productivity workflow',
    favoriteFeatures: [
      'Code review support',
      'Debugging assistance',
      'Documentation drafting',
      'Planning acceleration',
    ],
    projectUsage: [
      'FRANCIS.DEV Portfolio',
      'Sales & Inventory System',
    ],
  },

  'Responsive Web Design': {
    summary:
      'Used to make layouts adapt across desktop, tablet, and mobile screen sizes.',
    experience: 'Frontend design practice',
    favoriteFeatures: [
      'Fluid layouts',
      'Breakpoints',
      'Flexible components',
      'Responsive spacing',
    ],
    projectUsage: [
      'Portfolio Website',
      'Web application interfaces',
    ],
  },
}

const defaultTechnology = 'React'

export default function TechStack() {
  type TechCategory = (typeof techStackContent)[number]['category']

const [activeCategory, setActiveCategory] = useState<TechCategory>(
  techStackContent[0].category,
)

  const [selectedTechnology, setSelectedTechnology] =
    useState(defaultTechnology)

  const activeGroup = useMemo(
    () =>
      techStackContent.find(
        (group) => group.category === activeCategory,
      ) ?? techStackContent[0],
    [activeCategory],
  )

  const selectedDetails =
    technologyDetails[selectedTechnology] ?? {
      summary:
        'A technology used across my current development workflow and portfolio projects.',
      experience: 'Active development experience',
      favoriteFeatures: [
        'Practical application',
        'Reusable workflow',
        'Continuous learning',
      ],
      projectUsage: [
        'Portfolio and academic projects',
      ],
    }

  function selectCategory(category: TechCategory) {
    setActiveCategory(category)

    const selectedGroup = techStackContent.find(
      (group) => group.category === category,
    )

    if (selectedGroup?.technologies[0]) {
      setSelectedTechnology(selectedGroup.technologies[0])
    }
  }

  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden pb-20 pt-24">
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
            <Badge variant="purple">Technology Explorer</Badge>

            <h1 className="mt-7 text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-white">
              Tools I use to build
              <GradientText> modern software.</GradientText>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
              Explore the frontend, backend, database, development, and
              quality tools used throughout my projects and learning journey.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-5 gap-4">
            {techStackContent.map((group) => {
              const Icon =
                categoryIcons[
                  group.category as keyof typeof categoryIcons
                ] ?? Layers3

              const isActive = activeCategory === group.category

              return (
                <button
                  key={group.category}
                  type="button"
                  onClick={() => selectCategory(group.category)}
                  className={
                    isActive
                      ? 'rounded-2xl border border-violet-400/35 bg-violet-500/15 p-5 text-left shadow-[0_16px_50px_rgba(139,92,246,0.15)]'
                      : 'rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-left transition hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.045]'
                  }
                >
                  <Icon
                    size={22}
                    className={
                      isActive
                        ? 'text-violet-300'
                        : 'text-slate-600'
                    }
                  />

                  <p
                    className={
                      isActive
                        ? 'mt-4 text-sm font-semibold text-white'
                        : 'mt-4 text-sm font-semibold text-slate-400'
                    }
                  >
                    {group.category}
                  </p>

                  <p className="mt-2 text-xs text-slate-600">
                    {group.technologies.length} technologies
                  </p>
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-[0.7fr_1.3fr] items-start gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                {activeGroup.category}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white">
                Select a technology.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {activeGroup.description}
              </p>

              <div className="mt-8 space-y-3">
                {activeGroup.technologies.map((technology) => {
                  const isSelected =
                    selectedTechnology === technology

                  return (
                    <button
                      key={technology}
                      type="button"
                      onClick={() =>
                        setSelectedTechnology(technology)
                      }
                      className={
                        isSelected
                          ? 'flex w-full items-center justify-between rounded-xl border border-violet-400/35 bg-violet-500/15 px-5 py-4 text-left'
                          : 'flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-left transition hover:border-violet-400/20 hover:bg-white/[0.045]'
                      }
                    >
                      <span
                        className={
                          isSelected
                            ? 'text-sm font-semibold text-white'
                            : 'text-sm font-medium text-slate-400'
                        }
                      >
                        {technology}
                      </span>

                      <span
                        className={
                          isSelected
                            ? 'h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.8)]'
                            : 'h-2 w-2 rounded-full bg-slate-800'
                        }
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            <motion.div
              key={selectedTechnology}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
            >
              <GlassCard className="relative overflow-hidden p-9">
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <Badge variant="purple">
                        Selected Technology
                      </Badge>

                      <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-white">
                        {selectedTechnology}
                      </h2>

                      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                        {selectedDetails.summary}
                      </p>
                    </div>

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                      <Code2 size={34} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mt-9 grid grid-cols-3 gap-4">
                    <GlassCard className="p-5">
                      <GraduationCap
                        size={19}
                        className="text-violet-300"
                      />

                      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-600">
                        Experience
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        {selectedDetails.experience}
                      </p>
                    </GlassCard>

                    <GlassCard className="p-5">
                      <Braces
                        size={19}
                        className="text-violet-300"
                      />

                      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-600">
                        Features
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        {selectedDetails.favoriteFeatures.length}{' '}
                        highlighted
                      </p>
                    </GlassCard>

                    <GlassCard className="p-5">
                      <GitBranch
                        size={19}
                        className="text-violet-300"
                      />

                      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-600">
                        Projects
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        {selectedDetails.projectUsage.length}{' '}
                        project uses
                      </p>
                    </GlassCard>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                        Favorite Features
                      </p>

                      <div className="mt-6 space-y-4">
                        {selectedDetails.favoriteFeatures.map(
                          (feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle2
                                size={17}
                                className="shrink-0 text-violet-300"
                              />

                              <span className="text-sm text-slate-400">
                                {feature}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                        Used In
                      </p>

                      <div className="mt-6 space-y-4">
                        {selectedDetails.projectUsage.map(
                          (project) => (
                            <div
                              key={project}
                              className="flex items-center gap-3"
                            >
                              <Layers3
                                size={17}
                                className="shrink-0 text-violet-300"
                              />

                              <span className="text-sm text-slate-400">
                                {project}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Complete Stack"
            title="A growing toolkit for full-stack development."
            description="My stack continues to develop through hands-on projects, technical practice, debugging, testing, and continuous learning."
            align="center"
          />

          <div className="mt-12 grid grid-cols-5 gap-5">
            {techStackContent.map((group, groupIndex) => {
              const Icon =
                categoryIcons[
                  group.category as keyof typeof categoryIcons
                ] ?? Layers3

              return (
                <motion.article
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: groupIndex * 0.08,
                  }}
                >
                  <GlassCard hoverable className="h-full p-6">
                    <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {group.category}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.technologies.map((technology) => (
                        <TechBadge key={technology}>
                          {technology}
                        </TechBadge>
                      ))}
                    </div>
                  </GlassCard>
                </motion.article>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-[0.8fr_1.2fr] items-center gap-16">
            <div>
              <Sparkles
                size={30}
                className="text-violet-300"
              />

              <h2 className="mt-6 text-3xl font-bold tracking-[-0.035em] text-white">
                Currently learning and improving.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Development tools continue to evolve, so I focus on
                strengthening fundamentals while learning better architecture,
                testing, accessibility, and deployment practices.
              </p>
            </div>

            <GlassCard className="p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Advanced Laravel workflows',
                  'React architecture patterns',
                  'TypeScript best practices',
                  'Automated testing',
                  'Accessibility standards',
                  'Application deployment',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-violet-300"
                    />

                    <span className="text-sm text-slate-400">
                      {item}
                    </span>
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
                  See the Stack in Action
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
                  Explore projects built using these technologies.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Review the applications, workflows, and case studies where
                  these tools were used.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex h-12 shrink-0 items-center rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}