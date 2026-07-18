import { homeStatistics } from '../../../content'
import { Container, GlassCard, Section } from '../../ui'

export default function Stats() {
  return (
    <Section spacing="sm">
      <Container>
        <div className="grid grid-cols-4 gap-5">
          {homeStatistics.map(({ value, label }) => (
            <GlassCard
              key={label}
              hoverable
              className="p-6 text-center"
            >
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
    </Section>
  )
}