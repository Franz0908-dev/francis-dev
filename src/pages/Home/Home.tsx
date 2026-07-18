import {
  CTA,
  FeaturedProject,
  Hero,
  Stats,
  TechMarquee,
  WhyHireMe,
} from '../../components/sections'

export default function Home() {
  return (
    <main className="page-shell overflow-hidden">
      <Hero />
      <TechMarquee />
      <FeaturedProject />
      <WhyHireMe />
      <Stats />
      <CTA />
    </main>
  )
}