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
    description:
      'A full-featured SaaS platform that lets users create, customize, and publish interactive marketing tools with real-time analytics and AI-powered capabilities.',
    features: [
      'Drag-and-drop tool builder with live preview',
      'Subscription management (monthly/yearly) with usage limits',
      'Visitor analytics & data tracking dashboard',
      'AI-powered content generation via ChatGPT & Gemini APIs',
      'Custom chat UI, settings, FAQ support sections',
      'Fully accessible, responsive design',
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'TypeScript', 'ChatGPT API', 'Gemini API', 'Framer Motion'],
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
    description:
      'An interactive mock interview platform with video recording, live AI transcription, avatar integration, and comprehensive admin/student dashboards for tracking performance.',
    features: [
      'Live video/audio recording with AI transcription',
      'AI-avatar integration for realistic interview simulation',
      'Student & Admin dashboards with cohort filters',
      'CSV/XLSX export of interview reports',
      'Role domain tagging and inline question editing',
      'Weighted average scoring & company shortlisting system',
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'REST APIs', 'TypeScript', 'Material UI'],
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
    description:
      'A responsive flight booking web application with real-time availability checks, booking confirmations, and a modernized company landing experience.',
    features: [
      'Real-time flight availability and pricing updates',
      'Seamless booking confirmation flows',
      'Reusable React component library',
      'External flight API integrations',
      'Modernized company website design',
      'Mobile-first responsive layouts',
    ],
    tech: ['React.js', 'JavaScript', 'REST APIs', 'Bootstrap', 'CSS3'],
    type: 'Travel Platform',
    status: 'Delivered',
  },
  {
    title: 'Health Platform UI',
    subtitle: 'Healthcare Web Application',
    company: 'Yapıta Health',
    icon: 'solar:heart-pulse-bold-duotone',
    gradient: 'from-rose-500 to-pink-400',
    bgGlow: 'rgba(244, 114, 182, 0.15)',
    color: '#f472b6',
    description:
      'A health-tech web application with smooth authentication flows, FAQ pages, and landing pages designed for optimal user engagement and accessibility.',
    features: [
      'Multi-page React application architecture',
      'Smooth authentication & onboarding workflows',
      'FAQ and landing page components',
      'Improved navigation for better usability',
      'Performance-optimized login/signup process',
    ],
    tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
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
            Real-world products built for scale, designed for delight.
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
                    <span
                      className="text-xs"
                      style={{ color: 'var(--subtext)' }}
                    >
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
