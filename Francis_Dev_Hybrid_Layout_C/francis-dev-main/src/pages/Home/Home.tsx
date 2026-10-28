import { ArrowRight, BriefcaseBusiness, Code2, Github, GraduationCap, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../../components/sections'
import { Container } from '../../components/ui'
import { projectsContent } from '../../content'

const featuredIds = ['sales-inventory', 'point-of-sale', 'school-laboratory']
const featured = featuredIds.map(id => projectsContent.find(p => p.id === id)).filter((p): p is NonNullable<typeof p> => Boolean(p))
const skills = ['Laravel', 'React', 'TypeScript', 'Tailwind CSS', 'PHP', 'SQLite', 'Inertia.js', 'Git & GitHub', 'ChatGPT', 'Gemini', 'Codex', 'Claude']

export default function Home() {
  return <main className="page-shell overflow-hidden">
    <Hero />
    <Container className="relative pb-12 pt-4 sm:pb-16">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { icon: GraduationCap, title: '300 Hours', subtitle: 'Chimes Consulting internship' },
          { icon: Code2, title: 'Full Stack', subtitle: 'Laravel · React · TypeScript' },
          { icon: BriefcaseBusiness, title: 'Junior Developer', subtitle: 'Open to opportunities' },
          { icon: Github, title: 'Project-Based', subtitle: 'Internship & academic work' },
        ].map(({icon: Icon, title, subtitle}) => <div key={title} className="flex items-center gap-3 rounded-2xl border border-violet-400/15 bg-white/[0.035] p-4">
          <div className="rounded-xl bg-violet-500/15 p-2 text-violet-300"><Icon size={19}/></div>
          <div><p className="text-sm font-semibold text-white">{title}</p><p className="mt-1 text-xs leading-5 text-slate-400">{subtitle}</p></div>
        </div>)}
      </div>
      <div className="mb-5 mt-12 flex flex-wrap items-end justify-between gap-3">
        <div><p className="text-xs font-semibold uppercase tracking-widest text-violet-300">Selected work</p><h2 className="mt-2 text-3xl font-bold text-white">Featured <span className="text-violet-400">Projects</span></h2></div>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-violet-300 hover:text-white">View All Projects <ArrowRight size={16}/></Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map(project => <Link key={project.id} to={project.caseStudyHref} className="group rounded-2xl border border-violet-400/15 bg-gradient-to-b from-violet-500/10 to-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-violet-400/50">
          <div className="mb-4 flex h-20 items-center justify-center rounded-xl border border-white/5 bg-[#111027] text-violet-300"><Code2 size={32}/></div>
          <p className="text-xs text-violet-300">{project.status}</p><h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">{project.technologies.slice(0,4).map(t => <span key={t} className="rounded-md bg-violet-500/10 px-2 py-1 text-[11px] text-violet-200">{t}</span>)}</div>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300">View Details <ArrowRight size={15}/></p>
        </Link>)}
      </div>
      <div className="mb-5 mt-11 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold text-white">Tech <span className="text-violet-400">Stack</span></h2><Link to="/tech-stack" className="text-sm text-violet-300 hover:text-white">See all skills →</Link></div>
      <div className="flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-xl border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2.5 text-sm text-slate-200">{skill}</span>)}</div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-violet-400/25 bg-gradient-to-r from-violet-500/15 to-transparent px-6 py-5"><div><h2 className="text-xl font-semibold text-white">Let's build something together.</h2><p className="mt-1 text-sm text-slate-400">Explore my experience or reach out about junior development opportunities.</p></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-500">Get in Touch <Mail size={17}/></Link></div>
    </Container>
  </main>
}
