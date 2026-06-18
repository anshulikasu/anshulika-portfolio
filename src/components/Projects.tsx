import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '@iconify/react'

const projects = [
  {
    title: 'Autoolic',
    subtitle: 'SaaS Tool Builder Platform',
    company: 'Outgrow',
    icon: 'solar:widget-6-bold-duotone',
    gradient: 'from-violet-600 to-purple-400',
    bgGlow: 'rgba(124, 58, 237, 0.15)',
    color: '#8b5cf6',
    fullStack: true,
    description:
      'A full-stack SaaS platform for creating, customizing, and publishing interactive marketing tools — with a Node.js/Express backend, MongoDB data layer, JWT auth, and AI-powered analytics dashboard.',
    features: [
      'Built REST APIs with Node.js & Express for tool CRUD, publishing, and subscription management',
      'Designed MongoDB schemas for user data, tool configs, analytics events, and quota tracking',
      'Implemented JWT authentication with RBAC — subscription tiers control feature access',
      'Drag-and-drop tool builder UI with live preview and real-time data persistence',
      'AI-powered content generation via ChatGPT & Gemini APIs with async streaming',
      'Visitor analytics dashboard with optimized aggregation queries and lazy loading',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'TypeScript', 'JWT', 'ChatGPT API', 'Gemini API'],
    type: 'SaaS Product',
    status: 'Live',
  },
  {
    title: 'MockAI',
    subtitle: 'AI-Powered Interview Platform',
    company: 'Outgrow',
    icon: 'solar:robot-bold-duotone',
    gradient: 'from-pink-600 to-rose-400',
    bgGlow: 'rgba(236, 72, 153, 0.15)',
    color: '#ec4899',
    fullStack: true,
    description:
      'A full-stack mock interview platform with a Node.js backend handling session management, RBAC, scoring logic, and CSV/XLSX export — paired with a real-time React UI for video interviews and AI transcription.',
    features: [
      'Developed Express.js APIs for interview session lifecycle — create, record, evaluate, report',
      'Built MongoDB data models for student profiles, cohorts, scores, and domain tagging',
      'Implemented RBAC separating student and admin roles with protected API routes',
      'Backend scoring engine: weighted average calculation and company shortlisting logic',
      'Real-time video/audio recording with live AI transcription and avatar integration',
      'CSV/XLSX export pipeline — server-side data aggregation with client-side download trigger',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'TypeScript', 'JWT', 'RBAC', 'Material UI'],
    type: 'EdTech Platform',
    status: 'Live',
  },
  {
    title: 'Flight Booking Portal',
    subtitle: 'Real-Time Travel Booking System',
    company: 'Frantic Infotech',
    icon: 'solar:airplane-bold-duotone',
    gradient: 'from-cyan-500 to-blue-400',
    bgGlow: 'rgba(34, 211, 238, 0.15)',
    color: '#22d3ee',
    fullStack: false,
    description:
      'A responsive flight booking application with Node.js middleware for external API orchestration, real-time availability checks, booking confirmation flows, and a modernized company website.',
    features: [
      'Built Node.js middleware layer to aggregate and normalize data from multiple flight APIs',
      'Implemented booking confirmation flow with server-side validation and error handling',
      'Developed REST API endpoints for search, filter, and seat availability queries',
      'Reusable React component library for search forms, result cards, and booking steps',
      'Real-time flight status updates via polling with optimistic UI feedback',
      'Mobile-first responsive design with modernized company landing pages',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JavaScript', 'Bootstrap', 'CSS3'],
    type: 'Travel Platform',
    status: 'Delivered',
  },
  {
    title: 'Health Platform',
    subtitle: 'Healthcare Web Application',
    company: 'Yapıta Health',
    icon: 'solar:heart-pulse-bold-duotone',
    gradient: 'from-rose-500 to-pink-400',
    bgGlow: 'rgba(244, 114, 182, 0.15)',
    color: '#f472b6',
    fullStack: false,
    description:
      'A health-tech web application with a Node.js authentication backend, JWT-secured APIs, and a React frontend covering onboarding, FAQ, and landing pages for optimal user engagement.',
    features: [
      'Built JWT-based authentication API with Node.js — secure login, signup, and session management',
      'Implemented protected routes on both backend (middleware) and frontend (React guards)',
      'MySQL database integration for user records and health profile data',
      'Multi-page React application with smooth onboarding and authentication workflows',
      'Improved navigation flow and login/signup UX reducing drop-off rate',
      'FAQ and landing page components with performance-optimized rendering',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'HTML5', 'CSS3', 'JavaScript'],
    type: 'Health-Tech',
    status: 'Delivered',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
      />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Icon icon="solar:folder-bold-duotone" width={16} />
            Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Full-stack products built for scale — React frontends, Node.js APIs, MongoDB & MySQL databases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group relative"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: proj.bgGlow, borderRadius: 'inherit' }}
              />

              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${proj.gradient}`}
                    >
                      <Icon icon={proj.icon} width={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>{proj.title}</h3>
                      <p className="text-xs" style={{ color: 'var(--subtext)' }}>{proj.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${proj.color}20`, color: proj.color }}
                    >
                      {proj.status}
                    </span>
                    {proj.fullStack && (
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(34, 211, 238, 0.12)', color: '#22d3ee' }}
                      >
                        Full Stack
                      </span>
                    )}
                    <span className="text-xs" style={{ color: 'var(--subtext)' }}>
                      @ {proj.company}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--subtext)' }}>
                  {proj.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--subtext)' }}>
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {proj.features.slice(0, 4).map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-xs" style={{ color: 'var(--subtext)' }}>
                        <Icon icon="solar:check-circle-bold-duotone" width={14} style={{ color: proj.color, flexShrink: 0, marginTop: 1 }} />
                        {f}
                      </li>
                    ))}
                    {proj.features.length > 4 && (
                      <li className="text-xs font-medium" style={{ color: proj.color }}>
                        +{proj.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{
                          background: 'rgba(139, 92, 246, 0.07)',
                          color: 'var(--primary)',
                          border: '1px solid rgba(139, 92, 246, 0.12)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`h-1 w-full bg-gradient-to-r ${proj.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
