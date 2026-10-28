import { Award, ExternalLink } from 'lucide-react'
import { GlassCard } from '../ui'

interface CertificateCardProps {
  title: string
  issuer: string
  date?: string
  image?: string
  href?: string
}

export default function CertificateCard({
  title,
  issuer,
  date,
  image,
  href,
}: CertificateCardProps) {
  return (
    <GlassCard hoverable className="flex h-full flex-col overflow-hidden">
      <div className="flex h-44 items-center sm:h-48 justify-center border-b border-white/[0.07] bg-white/[0.02]">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <Award size={48} className="text-violet-400/60" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-violet-400">
          {issuer}
        </p>

        <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>

        {date && <p className="mt-2 text-sm text-slate-500">{date}</p>}

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center pt-5 gap-2 text-sm font-semibold text-violet-300"
          >
            View Certificate
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </GlassCard>
  )
}