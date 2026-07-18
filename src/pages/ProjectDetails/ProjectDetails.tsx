import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  ExternalLink,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  UserRound,
  Wrench,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
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

interface ProjectCaseStudy {
  challenges: string[]
  lessons: string[]
  improvements: string[]
  architecture: string[]
}

const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  'sales-inventory': {
    challenges: [
      'Connecting multiple business modules while keeping data consistent.',
      'Designing inventory workflows for stock receiving, sales, payments, and refunds.',
      'Organizing roles and permissions for different system users.',
      'Presenting complex business information through a clear dashboard.',
    ],
    lessons: [
      'Business requirements must be understood before designing the database.',
      'Reusable frontend components reduce duplication across larger applications.',
      'Validation is essential for protecting inventory and financial records.',
      'Large systems are easier to maintain when features are divided into clear modules.',
    ],
    improvements: [
      'Add barcode scanning and printable barcode labels.',
      'Implement real-time low-stock notifications.',
      'Create more detailed financial and inventory analytics.',
      'Add cloud deployment, automated backups, and audit logs.',
    ],
    architecture: [
      'Laravel backend and application logic',
      'React and TypeScript user interface',
      'Inertia.js frontend-backend integration',
      'MySQL relational database',
      'Tailwind CSS design system',
    ],
  },

  'point-of-sale': {
    challenges: [
      'Designing a cashier workflow that remains fast and easy to understand.',
      'Calculating orders, totals, and transaction records accurately.',
      'Keeping product and inventory data synchronized after every sale.',
      'Creating receipt information from completed transactions.',
    ],
    lessons: [
      'Cashier interfaces should minimize unnecessary steps.',
      'Transaction calculations need clear validation and testing.',
      'Product categories make large menus easier to navigate.',
      'Database structure affects how easily reports and receipts can be generated.',
    ],
    improvements: [
      'Add barcode and QR-code support.',
      'Create staff authentication and shift management.',
      'Add discount, payment-method, and refund workflows.',
      'Improve printable receipt templates and sales reports.',
    ],
    architecture: [
      'Java application logic',
      'Desktop cashier interface',
      'MySQL relational database',
      'Local XAMPP development environment',
    ],
  },

  'student-management': {
    challenges: [
      'Keeping student records organized and searchable.',
      'Validating form input before saving records.',
      'Handling create, update, view, and delete operations consistently.',
      'Designing a clear table interface for multiple student records.',
    ],
    lessons: [
      'CRUD applications provide a strong foundation for larger systems.',
      'Form validation improves data quality.',
      'Search and filtering make record systems more useful.',
      'Consistent database naming improves maintainability.',
    ],
    improvements: [
      'Add student authentication and role-based access.',
      'Include attendance, subjects, grades, and enrollment modules.',
      'Add printable student reports.',
      'Improve responsive behavior and accessibility.',
    ],
    architecture: [
      'PHP server-side application',
      'HTML, CSS, and JavaScript interface',
      'MySQL relational database',
      'Local XAMPP environment',
    ],
  },

  portfolio: {
    challenges: [
      'Creating a premium visual style without using a generic template.',
      'Maintaining consistent typography, spacing, colors, and components.',
      'Organizing many pages and project case studies.',
      'Balancing animation, performance, and readability.',
    ],
    lessons: [
      'A design system makes multi-page development faster and more consistent.',
      'Content structure should be planned before building page layouts.',
      'Reusable components reduce development time.',
      'A portfolio should explain project decisions, not only display screenshots.',
    ],
    improvements: [
      'Complete tablet and mobile responsive layouts.',
      'Add real project screenshots and live demonstrations.',
      'Connect the contact form to an email service.',
      'Add accessibility, SEO, analytics, and performance improvements.',
    ],
    architecture: [
      'React and TypeScript application',
      'React Router multi-page navigation',
      'Tailwind CSS design system',
      'Framer Motion animation system',
      'Data-driven project and content files',
    ],
  },
}

const previewBars = [48, 72, 56, 88, 64, 94, 78]

export default function ProjectDetails() {
  const { projectId } = useParams()

  const project = projectsContent.find(
    (projectItem) => projectItem.id === projectId,
  )

  if (!project) {
    return (
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        <Container>
          <GlassCard className="mx-auto max-w-2xl p-6 text-center sm:p-10 lg:p-12">
            <Layers3
              size={48}
              className="mx-auto text-violet-400/60"
            />

            <h1 className="mt-6 text-3xl font-bold text-white">
              Project not found
            </h1>

            <p className="mt-4 leading-7 text-slate-500">
              The project you are looking for does not exist or may have been
              moved.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </Link>
          </GlassCard>
        </Container>
      </main>
    )
  }

  const caseStudy =
    projectCaseStudies[project.id] ??
    projectCaseStudies.portfolio

  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden pb-24 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-violet-600/15 blur-[150px]" />
          <div className="absolute right-0 top-16 h-[460px] w-[460px] rounded-full bg-purple-500/15 blur-[160px]" />
        </div>

        <Container className="relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-300"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
          >
            <div>
              <Badge
                variant={
                  project.status === 'Current Project'
                    ? 'success'
                    : 'purple'
                }
              >
                {project.status}
              </Badge>

              <h1 className="mt-7 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl lg:leading-[1.02] tracking-[-0.055em] text-white">
                {project.shortTitle}
                <GradientText> Case Study.</GradientText>
              </h1>

              <p className="mt-7 text-xl leading-9 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <GlassCard className="p-5">
                  <UserRound size={19} className="text-violet-300" />

                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-600">
                    My Role
                  </p>

                  <p className="mt-2 text-sm font-semibold text-white">
                    {project.role}
                  </p>
                </GlassCard>

                <GlassCard className="p-5">
                  <Layers3 size={19} className="text-violet-300" />

                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-600">
                    Project Type
                  </p>

                  <p className="mt-2 text-sm font-semibold text-white">
                    {project.status}
                  </p>
                </GlassCard>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <TechBadge key={technology}>
                    {technology}
                  </TechBadge>
                ))}
              </div>
            </div>

            <GlassCard className="relative overflow-hidden p-5">
              <div className="absolute inset-12 rounded-full bg-violet-500/20 blur-[100px]" />

              <div className="relative rounded-2xl border border-white/[0.08] bg-[#080b18] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                  <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-slate-700">
                    {project.shortTitle} Preview
                  </span>
                </div>

                <div className="grid h-[390px] grid-cols-[0.24fr_0.76fr] gap-4">
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

                    <div className="mt-3 h-48 rounded-xl border border-violet-400/10 bg-gradient-to-b from-violet-500/10 to-transparent p-5">
                      <div className="flex h-full items-end gap-3">
                        {previewBars.map((height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/40 to-purple-300/75"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="h-14 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                      <div className="h-14 rounded-xl border border-white/[0.06] bg-white/[0.025]" />
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            <GlassCard hoverable className="p-5 sm:p-6 lg:p-8">
              <div className="mb-6 inline-flex rounded-xl border border-red-400/15 bg-red-500/10 p-3 text-red-300">
                <Wrench size={23} />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Business Problem
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {project.problem}
              </p>
            </GlassCard>

            <GlassCard hoverable className="p-5 sm:p-6 lg:p-8">
              <div className="mb-6 inline-flex rounded-xl border border-emerald-400/15 bg-emerald-500/10 p-3 text-emerald-300">
                <Lightbulb size={23} />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Proposed Solution
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {project.solution}
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Core Features"
            title="Features designed around the project workflow."
            description={`The ${project.title} includes the following main capabilities.`}
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <GlassCard hoverable className="h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-sm font-bold text-violet-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature}
                  </h3>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <SectionHeading
              eyebrow="Architecture"
              title="A clear structure for maintainable development."
              description="The project combines interface, application, and database technologies based on its requirements."
            />

            <GlassCard className="p-5 sm:p-6 lg:p-8">
              <div className="space-y-4">
                {caseStudy.architecture.map((architectureItem) => (
                  <div
                    key={architectureItem}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4"
                  >
                    <Database
                      size={18}
                      className="shrink-0 text-violet-300"
                    />

                    <span className="text-sm text-slate-400">
                      {architectureItem}
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
          <SectionHeading
            eyebrow="Project Reflection"
            title="Challenges, lessons, and opportunities for improvement."
            description="Building software involves more than completing features. Each project creates opportunities to improve technical decisions and workflow understanding."
          />

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <GlassCard className="p-7">
              <div className="inline-flex rounded-xl border border-amber-400/15 bg-amber-500/10 p-3 text-amber-300">
                <Wrench size={22} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Challenges
              </h3>

              <div className="mt-6 space-y-4">
                {caseStudy.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />

                    <p className="text-sm leading-7 text-slate-500">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                <Lightbulb size={22} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Lessons Learned
              </h3>

              <div className="mt-6 space-y-4">
                {caseStudy.lessons.map((lesson) => (
                  <div key={lesson} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0 text-violet-300"
                    />

                    <p className="text-sm leading-7 text-slate-500">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-7">
              <div className="inline-flex rounded-xl border border-emerald-400/15 bg-emerald-500/10 p-3 text-emerald-300">
                <Rocket size={22} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Future Improvements
              </h3>

              <div className="mt-6 space-y-4">
                {caseStudy.improvements.map((improvement) => (
                  <div
                    key={improvement}
                    className="flex items-start gap-3"
                  >
                    <ArrowRight
                      size={17}
                      className="mt-1 shrink-0 text-emerald-300"
                    />

                    <p className="text-sm leading-7 text-slate-500">
                      {improvement}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <ShieldCheck size={30} className="text-violet-300" />

              <h2 className="mt-6 text-3xl font-bold tracking-[-0.035em] text-white">
                Technology Stack
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                These tools were selected based on the interface, application,
                and database needs of the project.
              </p>
            </div>

            <GlassCard className="p-5 sm:p-6 lg:p-8">
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
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

      <Section spacing="lg">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-purple-500/10 to-transparent px-12 py-14">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-500/25 blur-[90px]" />

            <div className="relative flex flex-col items-start gap-7 sm:gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  Continue Exploring
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl text-white">
                  Explore more development projects.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  View the complete project collection and learn how each
                  application contributed to my development journey.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3">
                {project.liveHref && (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                )}

                <Link
                  to="/projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-6 text-sm font-semibold text-slate-300 transition hover:border-violet-400/35 hover:text-white"
                >
                  <ArrowLeft size={16} />
                  All Projects
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}