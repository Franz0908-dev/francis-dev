import { heroContent } from '../../../content'

export default function TechMarquee() {
  const technologies = [
    ...heroContent.technologies,
    ...heroContent.technologies,
  ]

  return (
    <section className="border-y border-white/[0.07] bg-white/[0.015] py-5">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[#050816] to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-5">
          {technologies.map((technology, index) => (
            <div
              key={`${technology}-${index}`}
              className="flex items-center gap-5"
            >
              <span className="whitespace-nowrap text-sm font-medium text-slate-400">
                {technology}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-violet-500/70 shadow-[0_0_10px_rgba(139,92,246,0.65)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}