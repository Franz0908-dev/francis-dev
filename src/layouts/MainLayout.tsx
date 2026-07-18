import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import BackToTop from '../components/shared/BackToTop'
import PageTransition from '../components/shared/PageTransition'
import RouteEffects from '../components/shared/RouteEffects'
import ScrollProgress from '../components/shared/ScrollProgress'

export default function MainLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <RouteEffects />
      <ScrollProgress />

      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[120] -translate-y-24 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition focus:translate-y-0"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}