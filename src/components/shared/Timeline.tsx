interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-violet-400 via-violet-400/30 to-transparent" />

      <div className="space-y-10">
        {items.map((item) => (
          <article key={`${item.year}-${item.title}`} className="relative pl-10">
            <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-[#050816] bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.7)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              {item.year}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}