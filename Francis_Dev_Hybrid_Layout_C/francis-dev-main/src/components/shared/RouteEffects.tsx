import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type RouteMetadata = {
  title: string
  description: string
}

const defaultMetadata: RouteMetadata = {
  title: 'Francis Lee Recanil | Full-Stack Web Developer',
  description:
    'Portfolio of Francis Lee Recanil, an aspiring full-stack web developer building modern applications with Laravel, React, TypeScript, PHP, and MySQL.',
}

const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'Francis Lee Recanil | Full-Stack Web Developer',
    description:
      'Explore the portfolio, projects, skills, and professional journey of Francis Lee Recanil.',
  },
  '/about': {
    title: 'About | Francis Lee Recanil',
    description:
      'Learn about Francis Lee Recanil, his background, development interests, experience, and professional goals.',
  },
  '/projects': {
    title: 'Projects | Francis Lee Recanil',
    description:
      'Explore full-stack web development projects built using Laravel, React, TypeScript, PHP, Tailwind CSS, and MySQL.',
  },
  '/tech-stack': {
    title: 'Tech Stack | Francis Lee Recanil',
    description:
      'View the frontend, backend, database, development tools, and technologies used by Francis Lee Recanil.',
  },
  '/journey': {
    title: 'Journey | Francis Lee Recanil',
    description:
      'Follow the academic, internship, project, and professional development journey of Francis Lee Recanil.',
  },
  '/behind-the-build': {
    title: 'Behind the Build | Francis Lee Recanil',
    description:
      'Discover the planning, design, development, and technical decisions behind the FRANCIS.DEV portfolio.',
  },
  '/recruiter': {
    title: 'Recruiter View | Francis Lee Recanil',
    description:
      'A concise recruiter-focused overview of the experience, technical skills, projects, and contact details of Francis Lee Recanil.',
  },
  '/playground': {
    title: 'Playground | Francis Lee Recanil',
    description:
      'Explore development experiments, interface concepts, and interactive work by Francis Lee Recanil.',
  },
  '/contact': {
    title: 'Contact | Francis Lee Recanil',
    description:
      'Contact Francis Lee Recanil regarding internships, junior developer roles, collaborations, and technical opportunities.',
  },
}

function getMetadata(pathname: string): RouteMetadata {
  if (pathname.startsWith('/projects/')) {
    return {
      title: 'Project Details | Francis Lee Recanil',
      description:
        'View project details, technologies, features, development process, and outcomes.',
    }
  }

  return routeMetadata[pathname] ?? defaultMetadata
}

function updateMetaDescription(description: string) {
  let metaDescription = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  )

  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }

  metaDescription.content = description
}

function updateOpenGraphMetadata(title: string, description: string) {
  const metadata = [
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ]

  metadata.forEach(({ property, content }) => {
    let element = document.querySelector<HTMLMetaElement>(
      `meta[property="${property}"]`,
    )

    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('property', property)
      document.head.appendChild(element)
    }

    element.content = content
  })
}

export default function RouteEffects() {
  const location = useLocation()

  useEffect(() => {
    const metadata = getMetadata(location.pathname)

    document.title = metadata.title
    updateMetaDescription(metadata.description)
    updateOpenGraphMetadata(metadata.title, metadata.description)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [location.pathname])

  return null
}