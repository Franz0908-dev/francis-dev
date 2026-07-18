import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Copy,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  Sparkles,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { contactContent } from '../../content'
import {
  Badge,
  Container,
  GlassCard,
  GradientText,
  Section,
  SectionHeading,
} from '../../components/ui'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Add your email address',
    href: 'mailto:your-email@example.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactContent.location,
    href: '#',
  },
  {
    icon: Clock3,
    label: 'Timezone',
    value: 'UTC +8',
    href: '#',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Availability',
    value: contactContent.availability,
    href: '#',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('your-email@example.com')
      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

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
            <Badge variant="success" className="gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              {contactContent.availability}
            </Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              {contactContent.eyebrow}
            </p>

            <h1 className="mt-4 text-6xl font-bold leading-[1.02] tracking-[-0.055em] text-white">
              Let&apos;s start a
              <GradientText> conversation.</GradientText>
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-400">
              {contactContent.title}
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-500">
              {contactContent.description}
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-[0.82fr_1.18fr] items-start gap-10">
            <div className="space-y-5">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <GlassCard key={label} hoverable className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                        {label}
                      </p>

                      {href.startsWith('mailto:') ? (
                        <a
                          href={href}
                          className="mt-2 block text-base font-semibold text-white transition hover:text-violet-300"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-2 text-base font-semibold leading-7 text-white">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}

              <GlassCard className="p-6">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                      Quick Copy
                    </p>

                    <p className="mt-2 text-sm font-semibold text-white">
                      your-email@example.com
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-xs font-semibold text-slate-300 transition hover:border-violet-400/35 hover:text-white"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 size={15} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={15} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </GlassCard>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <GlassCard className="relative overflow-hidden p-8">
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <Badge variant="purple">Send a Message</Badge>

                      <h2 className="mt-6 text-3xl font-bold tracking-[-0.035em] text-white">
                        Tell me about the opportunity.
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-slate-500">
                        {contactContent.responseMessage}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-violet-300">
                      <MessageSquareText size={27} />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <label className="space-y-2">
                        <span className="text-sm text-slate-400">
                          {contactContent.form.nameLabel}
                        </span>

                        <input
                          name="name"
                          required
                          autoComplete="name"
                          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="space-y-2">
                        <span className="text-sm text-slate-400">
                          {contactContent.form.emailLabel}
                        </span>

                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <label className="block space-y-2">
                      <span className="text-sm text-slate-400">
                        {contactContent.form.subjectLabel}
                      </span>

                      <input
                        name="subject"
                        required
                        className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
                        placeholder="Project, role, or collaboration"
                      />
                    </label>

                    <label className="block space-y-2">
                      <span className="text-sm text-slate-400">
                        {contactContent.form.messageLabel}
                      </span>

                      <textarea
                        name="message"
                        required
                        rows={7}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
                        placeholder="Tell me about the opportunity, project, or role..."
                      />
                    </label>

                    <div className="flex items-center justify-between gap-6">
                      <p className="max-w-lg text-xs leading-6 text-slate-600">
                        This form currently demonstrates the UI flow. Email
                        delivery will be connected during deployment setup.
                      </p>

                      <button
                        type="submit"
                        className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
                      >
                        {contactContent.form.submitLabel}
                        <Send size={17} />
                      </button>
                    </div>

                    {submitted && (
                      <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-5 py-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-300"
                          />

                          <div>
                            <p className="text-sm font-semibold text-emerald-200">
                              Form submitted successfully.
                            </p>

                            <p className="mt-1 text-xs leading-6 text-emerald-300/70">
                              Email integration will be connected before final
                              deployment.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section className="border-y border-white/[0.06] bg-white/[0.012]">
        <Container>
          <SectionHeading
            eyebrow="Good Fit"
            title="The opportunities I am currently open to."
            description="I am looking for opportunities where I can contribute to real software while continuing to strengthen my full-stack development skills."
            align="center"
          />

          <div className="mt-12 grid grid-cols-4 gap-5">
            {[
              {
                title: 'Internships',
                description:
                  'Hands-on software development experience with guidance, collaboration, and real project work.',
              },
              {
                title: 'Junior Web Roles',
                description:
                  'Entry-level frontend, backend, or full-stack roles using modern development technologies.',
              },
              {
                title: 'Collaborative Projects',
                description:
                  'Team-based applications where I can contribute features, debugging, testing, and documentation.',
              },
              {
                title: 'Business Systems',
                description:
                  'Inventory, sales, POS, record management, and workflow-focused web applications.',
              },
            ].map((item) => (
              <GlassCard key={item.title} hoverable className="p-6">
                <Sparkles size={21} className="text-violet-300" />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-[0.8fr_1.2fr] items-center gap-16">
            <div>
              <Mail size={30} className="text-violet-300" />

              <h2 className="mt-6 text-3xl font-bold tracking-[-0.035em] text-white">
                Prefer a quick introduction?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-400">
                You can review my recruiter overview, project case studies,
                technology stack, and development journey before reaching out.
              </p>
            </div>

            <GlassCard className="p-8">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/recruiter"
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.045]"
                >
                  <BriefcaseBusiness
                    size={22}
                    className="text-violet-300"
                  />

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    Recruiter View
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    A concise overview of skills, projects, availability, and
                    professional strengths.
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300">
                    Open Overview

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>

                <Link
                  to="/projects"
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-white/[0.045]"
                >
                  <Sparkles
                    size={22}
                    className="text-violet-300"
                  />

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    Project Case Studies
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Explore project problems, solutions, features, technology
                    choices, challenges, and lessons learned.
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300">
                    Explore Projects

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
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
                  Let&apos;s Connect
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white">
                  Ready to discuss a role, project, or collaboration?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Send a message with the details and I will review the
                  opportunity carefully.
                </p>
              </div>

              <a
                href="mailto:your-email@example.com"
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                <Mail size={17} />
                Email Me
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}