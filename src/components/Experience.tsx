import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const experiences = [
  {
    company: 'Outgrow',
    role: 'Front End Web Developer',
    period: 'Jul 2024 – Present',
    location: 'Gurugram, India',
    type: 'Full-time',
    current: true,
    logo: 'solar:buildings-bold-duotone',
    color: '#7c3aed',
    description: 'Building and optimizing scalable frontend architecture for SaaS products serving thousands of users.',
    responsibilities: [
      'Built and optimized scalable frontend architecture using React.js, Redux, and Tailwind CSS',
      'Developed reusable UI components for dashboards, payment systems, authentication, and analytics',
      'Enhanced user experience by implementing theming, tool management flows, and onboarding features',
      'Integrated third-party APIs (Entropy, ChatGPT, Gemini) to enable AI-powered tools and analytics dashboards',
    ],
    projects: [
      {
        name: 'Autoolic',
        icon: 'solar:widget-6-bold-duotone',
        color: '#8b5cf6',
        points: [
          'Designed and developed a SaaS tool builder to create, edit, customize, and publish interactive tools with live links',
          'Implemented secure subscription flows (monthly/yearly) with upgrade options and usage limits',
          'Built a tool data tracking system to monitor usage and provide visitor analytics',
          'Developed an AI-powered dashboard integrating free and paid APIs for content generation and analytics',
          'Created custom user interface including chat functionality, settings, and FAQ support sections',
        ],
      },
      {
        name: 'MockAI',
        icon: 'solar:robot-bold-duotone',
        color: '#ec4899',
        points: [
          'Built responsive Student & Admin dashboards with cohort/domain filters, CSV/XLSX exports, and detailed interview reports',
          'Developed interactive mock interview UI with video/audio recording, live transcription, and AI-avatar integration',
          'Implemented role domain tagging, inline admin question editing, and dynamic practice modules for students',
          'Created frontend for Student Profiler tool with weighted average scoring and ranking system for company shortlisting',
        ],
      },
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'TypeScript', 'ChatGPT API', 'Gemini API'],
  },
  {
    company: 'Frantic Infotech Pvt Ltd',
    role: 'Front End Web Developer',
    period: 'Dec 2022 – Feb 2024',
    location: 'Noida, India',
    type: 'Full-time',
    current: false,
    logo: 'solar:airplane-bold-duotone',
    color: '#22d3ee',
    description: 'Developed responsive flight booking modules with real-time updates and seamless API integrations.',
    responsibilities: [
      'Developed responsive flight booking modules using React.js with reusable UI components',
      'Implemented real-time flight updates and booking confirmations through external API integrations',
      'Enhanced the company website by modernizing design and improving overall user experience',
    ],
    projects: [],
    tech: ['React.js', 'JavaScript', 'REST APIs', 'CSS3', 'Bootstrap'],
  },
  {
    company: 'Yapıta Health Pvt Ltd',
    role: 'Frontend Developer Intern',
    period: 'Apr 2022 – Sep 2022',
    location: 'Gurugram, India',
    type: 'Internship',
    current: false,
    logo: 'solar:heart-pulse-bold-duotone',
    color: '#f472b6',
    description: 'Built React-based pages and improved navigation flows for a health-tech platform.',
    responsibilities: [
      'Built multiple React-based pages including FAQ, landing, and authentication workflows',
      'Improved navigation and login/signup processes for better usability and performance',
    ],
    projects: [],
    tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState<number>(0)

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Icon icon="solar:bag-bold-duotone" width={16} />
            Work Experience
          </span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle mx-auto">
            3+ years of building real-world products across health-tech, travel, and SaaS industries.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, var(--primary), rgba(124, 58, 237, 0.1))' }} />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative md:pl-20"
              >
                <div
                  className="hidden md:flex absolute left-4 top-6 w-9 h-9 rounded-xl items-center justify-center z-10"
                  style={{ background: `${exp.color}20`, border: `2px solid ${exp.color}40` }}
                >
                  <Icon icon={exp.logo} width={18} style={{ color: exp.color }} />
                </div>

                <motion.div
                  className="glass-card overflow-hidden cursor-pointer"
                  onClick={() => setExpanded(expanded === i ? -1 : i)}
                  whileHover={{ y: -2 }}
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${exp.color}20` }}
                        >
                          <Icon icon={exp.logo} width={20} style={{ color: exp.color }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
                                Current
                              </span>
                            )}
                            <span
                              className="px-2 py-0.5 rounded-full text-xs font-medium"
                              style={{ background: `${exp.color}15`, color: exp.color }}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold" style={{ color: exp.color }}>{exp.company}</span>
                            <span style={{ color: 'var(--subtext)' }}>·</span>
                            <span className="text-sm" style={{ color: 'var(--subtext)' }}>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Icon icon="solar:calendar-bold-duotone" width={14} style={{ color: 'var(--subtext)' }} />
                            <span className="text-sm font-mono" style={{ color: 'var(--subtext)' }}>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: expanded === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-lg"
                        style={{ background: 'rgba(139, 92, 246, 0.08)' }}
                      >
                        <Icon icon="solar:alt-arrow-down-bold-duotone" width={18} style={{ color: 'var(--primary)' }} />
                      </motion.div>
                    </div>

                    <p className="mt-3 text-sm" style={{ color: 'var(--subtext)' }}>{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            background: 'rgba(139, 92, 246, 0.08)',
                            color: 'var(--primary)',
                            border: '1px solid rgba(139, 92, 246, 0.15)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t" style={{ borderColor: 'var(--border)' }}>
                          <div className="pt-5">
                            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                              <Icon icon="solar:list-check-bold-duotone" width={16} style={{ color: 'var(--primary)' }} />
                              Responsibilities
                            </h4>
                            <ul className="space-y-2 mb-6">
                              {exp.responsibilities.map((r, ri) => (
                                <motion.li
                                  key={ri}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: ri * 0.06 }}
                                  className="flex items-start gap-2.5 text-sm"
                                  style={{ color: 'var(--subtext)' }}
                                >
                                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--primary)' }} />
                                  {r}
                                </motion.li>
                              ))}
                            </ul>

                            {exp.projects.length > 0 && (
                              <div className="space-y-4">
                                <h4 className="font-semibold text-sm flex items-center gap-2" style={{ color: 'var(--text)' }}>
                                  <Icon icon="solar:folder-bold-duotone" width={16} style={{ color: 'var(--primary)' }} />
                                  Key Projects
                                </h4>
                                {exp.projects.map((proj) => (
                                  <div
                                    key={proj.name}
                                    className="rounded-xl p-4"
                                    style={{ background: `${proj.color}08`, border: `1px solid ${proj.color}20` }}
                                  >
                                    <div className="flex items-center gap-2 mb-3">
                                      <Icon icon={proj.icon} width={18} style={{ color: proj.color }} />
                                      <span className="font-semibold text-sm" style={{ color: proj.color }}>{proj.name}</span>
                                    </div>
                                    <ul className="space-y-1.5">
                                      {proj.points.map((pt, pi) => (
                                        <li key={pi} className="flex items-start gap-2 text-xs" style={{ color: 'var(--subtext)' }}>
                                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: proj.color }} />
                                          {pt}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
