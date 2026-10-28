import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Monitor,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  projectsContent,
  techStackContent,
} from '../../content'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
  TechBadge,
} from '../../components/ui'

const developmentStages = [
  {
    icon: Workflow,
    number: '01',
    title: 'Planning',
    description:
      'Define the website goals, target audience, project scope, pages, content requirements, and recruiter experience.',
    items: [
      'Website vision',
      'Target audience',
      'Project roadmap',
      'Technology selection',
    ],
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Information Architecture',
    description:
      'Organize the website into clear pages, navigation paths, reusable sections, and project case studies.',
    items: [
      'Sitemap',
      'Navigation structure',
      'Page hierarchy',
      'Content organization',
    ],
  },
  {
    icon: Monitor,
    number: '03',
    title: 'Wireframes and UI',
    description:
      'Design a desktop-first layout with a premium dark interface, royal-purple branding, and recruiter-focused presentation.',
    items: [
      'Desktop wireframes',
      'Purple visual identity',
      'Glass components',
      'Page layouts',
    ],
  },
  {
    icon: Code2,
    number: '04',
    title: 'Component Development',
    description:
      'Build reusable React and TypeScript components before assembling the complete pages.',
    items: [
      'Design system',
      'Reusable UI components',
      'Layout components',
      'Section components',
    ],
  },
  {
    icon: Database,
    number: '05',
    title: 'Data and Content',
    description:
      'Separate portfolio information from page markup through typed content and project data files.',
    items: [
      'Project data',
      'About content',
      'Recruiter content',
      'Technology data',
    ],
  },
  {
    icon: TestTube2,
    number: '06',
    title: 'Verification',
    description:
      'Run linting and production builds after major development batches to catch problems early.',
    items: [
      'ESLint verification',
      'TypeScript checks',
      'Production builds',
      'Browser testing',
    ],
  },
]

const engineeringDecisions = [
  {
    icon: Code2,
    title: 'React with TypeScript',
    description:
      'React supports reusable interfaces, while TypeScript improves component contracts, editor support, and maintainability.',
  },
  {
    icon: Layers3,
    title: 'Reusable Design System',
    description:
      'Shared buttons, cards, containers, badges, headings, and utilities maintain visual consistency across every page.',
  },
  {
    icon: Database,
    title: 'Data-Driven Content',
    description:
      'Project information and website copy are stored separately from UI code, making updates easier and safer.',
  },
  {
    icon: Workflow,
    title: 'Feature-Based Development',
    description:
      'The website is developed page by page and component by component instead of placing everything inside one large file.',
  },
  {
    icon: GitBranch,
    title: 'Version-Control Ready',
    description:
      'The project structure, documentation, and build process are prepared for Git and GitHub workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Build Verification',
    description:
      'Lint and production build commands are used throughout development to detect errors before deployment.',
  },
]

const challenges = [
  {
    title: 'Maintaining a premium visual identity',
    description:
      'The design needs to feel polished and professional without becoming overly decorative, neon, or difficult to read.',
    solution:
      'Use restrained purple accents, consistent spacing, glass surfaces, large typography, and strong content hierarchy.',
  },
  {
    title: 'Managing a multi-page portfolio',
    description:
      'Many pages and project case studies can create duplicated markup and inconsistent styling.',
    solution:
      'Create reusable layouts, section components, content files, and a shared design system.',
  },
  {
    title: 'Keeping generated code maintainable',
    description:
      'Large development batches can introduce encoding issues, TypeScript mismatches, or repeated code.',
    solution:
      'Write files using UTF-8, keep content typed, run lint and builds, and fix errors before continuing.',
  },
  {
    title: 'Balancing AI assistance with engineering control',
    description:
      'AI can increase development speed, but generated output still needs review and verification.',
    solution:
      'Use AI for planning and acceleration while manually validating architecture, code, output, and user experience.',
  },
]

const workflowRules = [
  'Plan the page before implementing it.',
  'Keep content separate from presentation.',
  'Use reusable components before duplicating styles.',
  'Run ESLint and production builds regularly.',
  'Review generated code instead of trusting it automatically.',
  'Verify interfaces in the browser after every major sprint.',
  'Refactor repeated patterns into shared components.',
  'Document decisions that may matter during interviews.',
]

const stack = techStackContent.flatMap((group) => group.technologies)

const uniqueStack = Array.from(new Set(stack))

export default function BehindTheBuild() {
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
            className="max-w-5xl"
          >
            <Badge variant="purple">Behind the Build</Badge>

            <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl lg:leading-[1.02] tracking-[-0.055em] text-white">
              How FRANCIS.DEV was
              <GradientText> planned and built.</GradientText>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
              A transparent look at the planning process, design decisions,
              component architecture, development workflow, challenges, and
              lessons behind this portfolio.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {[
              {
                value: '10',
                label: 'Roadmap Phases',
              },
              {
                value: `${projectsContent.length}`,
                label: 'Documented Projects',
              },
              {
                value: `${uniqueStack.length}+`,
                label: 'Tools and Technologies',
              },
              {
                value: '100%',
                label: 'Custom-Built Interface',
              },
            ].map(({ value, label }) => (
              <GlassCard key={label} hoverable className="p-6 text-center">
                <p className="purple-gradient-text text-4xl font-bold tracking-tight">
                  {value}
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  {label}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <SectionHeading
            eyebrow="Development Process"
            title="A structured workflow from idea to implementation."
            description="The portfolio was divided into clear phases so design, content, components, and development could be completed without losing consistency."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {developmentStages.map(
              ({ icon: Icon, number, title, description, items }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                >
                  <GlassCard hoverable className="h-full p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                        <Icon size={23} />
                      </div>

                      <span className="text-sm font-bold text-violet-400/40">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {description}
                    </p>

                    <div className="mt-6 space-y-3 border-t border-white/[0.07] pt-6">
                      {items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-violet-300"
                          />

                          <span className="text-xs text-slate-500">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.article>
              ),
            )}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Architecture Decisions"
            title="Why the project is structured this way."
            description="Each technical decision supports maintainability, consistency, scalability, or development speed."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {engineeringDecisions.map(
              ({ icon: Icon, title, description }) => (
                <GlassCard key={title} hoverable className="p-7">
                  <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {description}
                  </p>
                </GlassCard>
              ),
            )}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeading
              eyebrow="Project Structure"
              title="A scalable React application organization."
              description="Files are grouped by responsibility so pages, shared components, content, utilities, styles, and data remain easy to locate."
            />

            <GlassCard className="overflow-hidden p-0">
              <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-6 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                <span className="ml-3 text-xs text-slate-600">
                  src/
                </span>
              </div>

              <pre className="overflow-x-auto p-7 font-mono text-sm leading-7 text-slate-400">
{`src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── cards/
│   ├── sections/
│   ├── forms/
│   └── shared/
├── content/
├── pages/
├── layouts/
├── router/
├── constants/
├── data/
├── hooks/
├── lib/
├── styles/
├── types/
└── utils/`}
              </pre>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Technology Stack"
                title="Tools selected for modern frontend development."
                description="The portfolio uses a focused stack that supports reusable components, type safety, animation, styling, routing, and production builds."
              />

              <Link
                to="/tech-stack"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
              >
                Open Technology Explorer

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <GlassCard className="p-5 sm:p-6 lg:p-8">
              <div className="flex flex-wrap gap-3">
                {uniqueStack.map((technology) => (
                  <TechBadge
                    key={technology}
                    className="px-5 py-3 text-sm"
                  >
                    {technology}
                  </TechBadge>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <SectionHeading
            eyebrow="Challenges and Solutions"
            title="Problems encountered during the build."
            description="Building a larger portfolio required decisions around consistency, code quality, maintainability, and responsible AI usage."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {challenges.map(({ title, description, solution }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <GlassCard hoverable className="h-full p-7">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-amber-400/15 bg-amber-500/10 p-3 text-amber-300">
                      <Wrench size={20} />
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                      Challenge {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {description}
                  </p>

                  <div className="mt-6 rounded-xl border border-emerald-400/15 bg-emerald-500/[0.06] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {solution}
                    </p>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="AI-Assisted Workflow"
              title="Faster development without surrendering technical control."
              description="AI helped accelerate planning, drafting, debugging, refactoring, and documentation, but every implementation still required review and verification."
            />

            <GlassCard className="relative overflow-hidden p-5 sm:p-6 lg:p-8">
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-[90px]" />

              <div className="relative">
                <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                  <Sparkles size={23} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  How AI supports the project
                </h3>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {[
                    'Planning and brainstorming',
                    'Code drafting and refactoring',
                    'Debugging support',
                    'Documentation preparation',
                    'Content organization',
                    'Testing ideas and edge cases',
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

                <div className="mt-6 rounded-xl border border-violet-400/15 bg-violet-500/[0.06] p-5">
                  <p className="text-sm leading-7 text-slate-300">
                    Architecture decisions, code review, error verification,
                    testing, implementation choices, and final output remain
                    under my control.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <SectionHeading
            eyebrow="Development Rules"
            title="Principles used throughout the project."
            description="These rules help keep the project organized and reduce avoidable development problems."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {workflowRules.map((rule, index) => (
              <GlassCard key={rule} hoverable className="p-6">
                <span className="text-sm font-bold text-violet-400/40">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p className="mt-5 text-sm font-medium leading-7 text-slate-300">
                  {rule}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <GlassCard className="p-5 sm:p-6 lg:p-8">
              <Code2 size={25} className="text-violet-300" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                What Worked
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Planning first, using reusable components, separating content,
                and verifying builds made multi-page development much faster.
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6 lg:p-8">
              <TestTube2 size={25} className="text-violet-300" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                What Needs Improvement
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Responsive behavior, accessibility, automated tests, real
                project screenshots, contact integration, and optimization
                still need final development.
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6 lg:p-8">
              <ShieldCheck size={25} className="text-violet-300" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                Main Lesson
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                A strong process and clear architecture matter as much as the
                final visual result when building maintainable software.
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent px-12 py-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/25 blur-[90px]" />

            <div className="relative flex flex-col items-start gap-7 sm:gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Explore the Result
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl text-white">
                  See how the process became a complete portfolio.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Explore the projects, technology stack, development journey,
                  and recruiter overview created from this workflow.
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
                  to="/recruiter"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-slate-300 transition hover:border-violet-400/35 hover:text-white"
                >
                  Recruiter View
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}