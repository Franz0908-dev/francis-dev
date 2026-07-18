import {
  BriefcaseBusiness,
  Code2,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { professionalStrengths } from '../../../content'
import {
  Container,
  GlassCard,
  Section,
  SectionHeading,
} from '../../ui'

const icons = [
  BriefcaseBusiness,
  Code2,
  Sparkles,
  Workflow,
]

export default function WhyHireMe() {
  return (
    <Section className="border-y border-white/[0.06] bg-white/[0.012]">
      <Container>
        <SectionHeading
          eyebrow="Why Work With Me"
          title="More than code — I focus on useful software."
          description="I combine modern development tools, practical project experience, and an AI-assisted workflow to build maintainable applications."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {professionalStrengths.map(
            ({ title, description }, index) => {
              const Icon = icons[index]

              return (
                <GlassCard
                  key={title}
                  hoverable
                  className="p-6"
                >
                  <div className="mb-5 inline-flex rounded-xl border border-violet-400/15 bg-violet-500/10 p-3 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {description}
                  </p>
                </GlassCard>
              )
            },
          )}
        </div>
      </Container>
    </Section>
  )
}