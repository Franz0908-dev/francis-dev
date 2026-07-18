export type ProjectStatus =
  | 'Current Project'
  | 'Solo Academic Project'
  | 'Academic Project'
  | 'Personal Project'

export interface PortfolioProject {
  id: string
  title: string
  shortTitle: string
  status: ProjectStatus
  role: string
  description: string
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  image?: string
  caseStudyHref: string
  githubHref?: string
  liveHref?: string
}

export const projectsContent: PortfolioProject[] = [
  {
    id: 'sales-inventory',
    title: 'Sales & Inventory Management System',
    shortTitle: 'Sales & Inventory',
    status: 'Current Project',
    role: 'Full Stack Developer',
    description:
      'A full-stack application for managing products, inventory, receiving, sales, suppliers, customers, invoices, expenses, payments, and reports.',
    problem:
      'Disconnected records and manual processes make it difficult to monitor stock, transactions, suppliers, customers, and financial activity.',
    solution:
      'A centralized business platform that connects inventory and sales workflows while providing organized records and reporting.',
    features: [
      'Dashboard',
      'Product management',
      'Inventory monitoring',
      'Batch and stock receiving',
      'Orders and sales processing',
      'Customer management',
      'Supplier management',
      'Invoices and expenses',
      'Payment and refund workflows',
      'Reports',
      'Authentication and user roles',
    ],
    technologies: [
      'Laravel',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PHP',
      'MySQL',
      'Inertia.js',
    ],
    caseStudyHref: '/projects/sales-inventory',
  },
  {
    id: 'point-of-sale',
    title: 'Starbucks-Inspired Point of Sale System',
    shortTitle: 'Point of Sale',
    status: 'Solo Academic Project',
    role: 'Solo Full Stack Developer',
    description:
      'A coffee-shop-inspired point-of-sale system created as an individual academic project.',
    problem:
      'Cashiers need a simple interface for selecting products, reviewing orders, calculating totals, processing transactions, and producing receipts.',
    solution:
      'A structured cashier workflow that combines product selection, order summaries, transaction processing, inventory awareness, and receipt generation.',
    features: [
      'Cashier interface',
      'Product selection',
      'Product categories',
      'Order summary',
      'Sales calculation',
      'Transaction processing',
      'Inventory monitoring',
      'Receipt generation',
      'Transaction history',
    ],
    technologies: ['Java', 'MySQL', 'XAMPP'],
    caseStudyHref: '/projects/point-of-sale',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    shortTitle: 'Student Management',
    status: 'Academic Project',
    role: 'Developer',
    description:
      'A student-record application focused on managing and searching organized student information.',
    problem:
      'Student information becomes difficult to maintain when records are handled manually or spread across separate files.',
    solution:
      'A centralized record system with clear CRUD operations and searchable student information.',
    features: [
      'Add student records',
      'View student records',
      'Update student information',
      'Delete records',
      'Search students',
      'Database storage',
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    caseStudyHref: '/projects/student-management',
  },
  {
    id: 'portfolio',
    title: 'FRANCIS.DEV Portfolio Website',
    shortTitle: 'Developer Portfolio',
    status: 'Personal Project',
    role: 'Designer and Frontend Developer',
    description:
      'A premium multi-page developer portfolio designed to showcase projects, skills, certifications, and professional development.',
    problem:
      'Traditional one-page portfolios often provide limited space for explaining project workflows and development experience.',
    solution:
      'A multi-page portfolio with dedicated project case studies, recruiter-focused content, and a consistent Royal Purple design system.',
    features: [
      'Multi-page routing',
      'Project case studies',
      'Reusable design system',
      'Premium desktop interface',
      'Recruiter View',
      'Animated interactions',
      'Resume access',
      'Contact experience',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
      'React Router',
    ],
    caseStudyHref: '/projects/portfolio',
  },
]