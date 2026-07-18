import {
  ArrowRight,
  Database,
  Package,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProjectContent } from '../../../content'
import {
  Badge,
  Container,
  GlassCard,
  Section,
  SectionHeading,
  TechBadge,
} from '../../ui'

const featureIcons = [
  Package,
  ShoppingCart,
  Database,
  ShieldCheck,
]

export default function FeaturedProject() {
  const visibleFeatures = featuredProjectContent.features.slice(0, 4)

  return (
    <Section spacing="lg">
      <Container>
        <SectionHeading
          eyebrow={featuredProjectContent.eyebrow}
          title="Software built for real business workflows."
          description={featuredProjectContent.summary}
        />

        <GlassCard className="mt-12 overflow-hidden p-8">
          <div className="grid grid-cols-[0.86fr_1.14fr] items-center gap-12">
            <div>
              <Badge variant="purple">
                {featuredProjectContent.status}
              </Badge>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-white">
                {featuredProjectContent.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {featuredProjectContent.solution}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {visibleFeatures.map((feature, index) => {
                  const Icon = featureIcons[index]

                  return (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3"
                    >
                      <Icon size={17} className="text-violet-300" />

                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredProjectContent.technologies.map((technology) => (
                  <TechBadge key={technology}>
                    {technology}
                  </TechBadge>
                ))}
              </div>

              <Link
                to={featuredProjectContent.caseStudyHref}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
              >
                Open Case Study

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-violet-500/20 blur-[90px]" />

              <div className="relative rounded-2xl border border-white/10 bg-[#080b18] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />

                  <span className="ml-3 text-[10px] uppercase tracking-[0.18em] text-slate-700">
                    Business Dashboard
                  </span>
                </div>

                <div className="grid h-[330px] grid-cols-[0.23fr_0.77fr] gap-4">
                  <aside className="rounded-xl border border-white/[0.05] bg-white/[0.025] p-4">
                    <div className="mb-8 h-9 w-9 rounded-xl bg-violet-500/40" />

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
                          <div className="h-2 w-14 rounded-full bg-white/10" />
                          <div className="mt-4 h-5 w-20 rounded bg-violet-500/20" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 h-40 rounded-xl border border-violet-400/10 bg-gradient-to-b from-violet-500/10 to-transparent p-5">
                      <div className="flex h-full items-end gap-3">
                        {[36, 58, 42, 78, 62, 88, 70].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/40 to-purple-300/70"
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
            </div>
          </div>
        </GlassCard>
      </Container>
    </Section>
  )
}