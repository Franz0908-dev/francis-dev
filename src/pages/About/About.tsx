import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Code2,
  GraduationCap,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { aboutContent, journeyContent } from '../../content'
import Timeline from '../../components/shared/Timeline'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
  TechBadge,
} from '../../components/ui'

const timelineItems = journeyContent.map((item) => ({
  year: item.period,
  title: item.title,
  description: item.description,
}))

const highlights = [
  {
    icon: Target,
    label: 'Career Goal',
    value: 'Full Stack Software Engineer',
  },
  {
    icon: GraduationCap,
    label: 'Learning Style',
    value: 'Project-Based Development',
  },
  {
    icon: Code2,
    label: 'Current Focus',
    value: 'Laravel, React & TypeScript',
  },
]

export default function About() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden pb-24 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-30" />
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[140px]" />
          <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[150px]" />
        </div>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            <Badge variant="purple">{aboutContent.eyebrow}</Badge>

            <h1 className="mt-7 text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-white">
              Building software with
              <GradientText> purpose.</GradientText>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
              {aboutContent.title}
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-[0.8fr_1.2fr] items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-8 rounded-full bg-violet-500/25 blur-[100px]" />

              <GlassCard className="relative overflow-hidden p-3">
                <div className="relative h-[560px] overflow-hidden rounded-2xl">
                  <img
                    src="/images/profile/francis-about.png"
                    alt="Francis Lee Recanil working as a web developer"
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-sm font-semibold text-white">
                      Francis Lee Recanil
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Full Stack Web Developer
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="absolute -bottom-8 -right-8 w-56 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Current Focus</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Business Software
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-2xl font-semibold leading-9 text-white">
                {aboutContent.introduction}
              </p>

              <div className="mt-7 space-y-5">
                {aboutContent.story.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-slate-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-9 grid grid-cols-3 gap-4">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <GlassCard key={label} className="p-5">
                    <Icon size={20} className="text-violet-300" />

                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-600">
                      {label}
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-white">
                      {value}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <div className="grid grid-cols-2 gap-8">
            <GlassCard hoverable className="p-8">
              <div className="mb-6 inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                <Target size={23} />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Career Goal
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {aboutContent.careerGoal}
              </p>
            </GlassCard>

            <GlassCard hoverable className="p-8">
              <div className="mb-6 inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                <Workflow size={23} />
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Development Philosophy
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {aboutContent.developmentPhilosophy}
              </p>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-[0.9fr_1.1fr] items-start gap-16">
            <SectionHeading
              eyebrow="AI-Assisted Development"
              title="AI improves the workflow. Engineering decisions remain mine."
              description={aboutContent.aiWorkflow}
            />

            <GlassCard className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                Professional Values
              </p>

              <div className="mt-7 space-y-5">
                {aboutContent.values.map((value) => (
                  <div key={value} className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-violet-300"
                    />

                    <p className="text-sm leading-7 text-slate-400">
                      {value}
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
          <SectionHeading
            eyebrow="Current Focus"
            title="Skills I am actively strengthening."
            description="I continue developing my technical foundation through hands-on projects, debugging, testing, and workflow improvements."
            align="center"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {aboutContent.currentFocus.map((focus) => (
              <TechBadge key={focus} className="px-5 py-3 text-sm">
                {focus}
              </TechBadge>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-[0.75fr_1.25fr] gap-20">
            <div>
              <SectionHeading
                eyebrow="Development Journey"
                title="Learning through every project."
                description="Each project introduced new tools, workflows, problems, and lessons that continue shaping how I approach software development."
              />

              <Link
                to="/journey"
                className="mt-8 inline-flex items-center text-sm font-semibold text-violet-300 transition hover:text-violet-200"
              >
                View Full Journey →
              </Link>
            </div>

            <GlassCard className="p-9">
              <Timeline items={timelineItems} />
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
                  Explore My Work
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
                  See how these skills are applied in real projects.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Explore my inventory, point-of-sale, student management, and
                  portfolio projects.
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