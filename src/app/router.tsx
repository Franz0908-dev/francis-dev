import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import RouteLoader from '../components/feedback/RouteLoader'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))
const Projects = lazy(() => import('../pages/Projects/Projects'))
const ProjectDetails = lazy(() => import('../pages/ProjectDetails/ProjectDetails'))
const TechStack = lazy(() => import('../pages/TechStack/TechStack'))
const Journey = lazy(() => import('../pages/Journey/Journey'))
const BehindTheBuild = lazy(() => import('../pages/BehindTheBuild/BehindTheBuild'))
const Recruiter = lazy(() => import('../pages/Recruiter/Recruiter'))
const Playground = lazy(() => import('../pages/Playground/Playground'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<ProjectDetails />} />
            <Route path="tech-stack" element={<TechStack />} />
            <Route path="journey" element={<Journey />} />
            <Route path="behind-the-build" element={<BehindTheBuild />} />
            <Route path="recruiter" element={<Recruiter />} />
            <Route path="playground" element={<Playground />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project-details" element={<Navigate to="/projects" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
