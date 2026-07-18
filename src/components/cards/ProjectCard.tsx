import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge, GlassCard, TechBadge } from '../ui'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  status?: string
  href: string
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  status = 'Completed',
  href,
}: ProjectCardProps) {
  return (
    <GlassCard hoverable className="flex h-full flex-col overflow-hidden">
      <div className="h-56 overflow-hidden border-b border-white/[0.07] bg-white/[0.02]">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="hero-grid h-full w-full opacity-60" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge variant="purple">{status}</Badge>

        <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>

        <Link
          to={href}
          className="group mt-auto inline-flex pt-6 items-center gap-2 text-sm font-semibold text-violet-300"
        >
          View Project
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </GlassCard>
  )
}