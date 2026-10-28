import { motion } from 'framer-motion'
import { ArrowRight, ImageIcon } from 'lucide-react'
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
    <motion.article
      initial={{
        opacity: 0,
        y: 26,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[21px] bg-gradient-to-br from-violet-400/0 via-violet-400/0 to-fuchsia-400/0 opacity-0 blur-sm transition duration-500 group-hover:from-violet-400/25 group-hover:via-purple-400/10 group-hover:to-fuchsia-400/20 group-hover:opacity-100"
      />

      <GlassCard
        hoverable
        className="project-card relative flex h-full flex-col overflow-hidden"
      >
        <Link
          to={href}
          aria-label={`View ${title}`}
          className="project-card-image relative block h-48 overflow-hidden border-b border-white/[0.07] bg-white/[0.02] sm:h-56"
        >
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.055]"
            />
          ) : (
            <div className="hero-grid flex h-full w-full items-center justify-center opacity-60">
              <div className="rounded-2xl border border-white/10 bg-[#080b1a]/70 p-4 text-slate-500 backdrop-blur-xl">
                <ImageIcon size={24} />
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070a18]/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-50" />

          <div className="pointer-events-none absolute inset-0 bg-violet-500/[0.035] opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <Badge variant="purple">{status}</Badge>
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <Link to={href} className="group/title">
            <h3 className="text-xl font-semibold tracking-tight text-white transition duration-300 group-hover/title:text-violet-200 sm:text-[1.35rem]">
              {title}
            </h3>
          </Link>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-500">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <TechBadge key={technology}>
                {technology}
              </TechBadge>
            ))}
          </div>

          <div className="mt-auto pt-7">
            <Link
              to={href}
              className="project-link group/link inline-flex min-h-11 items-center gap-2 rounded-xl border border-violet-400/15 bg-violet-500/[0.055] px-4 text-sm font-semibold text-violet-200 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-500/[0.11] hover:text-white active:scale-[0.98]"
            >
              View Project

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}