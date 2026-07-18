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
    <main>
      <Hero />
      <TechMarquee />
      <FeaturedProject />
      <WhyHireMe />
      <Stats />
      <CTA />
    </main>
  )
}