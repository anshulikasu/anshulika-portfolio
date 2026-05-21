import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '@iconify/react'

const courses = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Computer Networks',
  'Web Technologies',
  'Software Engineering',
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Icon icon="solar:diploma-bold-duotone" width={16} />
            Education
          </span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle mx-auto">
            A strong foundation in Computer Science that powers my passion for engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card overflow-hidden"
          >
            <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)' }} />

            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.35, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(236, 72, 153, 0.1))' }}
                >
                  <Icon icon="solar:graduation-cap-bold-duotone" width={40} style={{ color: 'var(--primary)' }} />
                </motion.div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>
                        Bachelor of Technology
                      </h3>
                      <p className="font-semibold" style={{ color: 'var(--primary)' }}>
                        Computer Science and Engineering
                      </p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--primary)' }}
                    >
                      Graduated
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                    {[
                      { icon: 'solar:buildings-bold-duotone', text: 'IMS Engineering College, Ghaziabad' },
                      { icon: 'solar:map-point-bold-duotone', text: 'Uttar Pradesh, India' },
                      { icon: 'solar:calendar-bold-duotone', text: '2018 – 2022' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-1.5">
                        <Icon icon={item.icon} width={14} style={{ color: 'var(--subtext)' }} />
                        <span className="text-sm" style={{ color: 'var(--subtext)' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                      <Icon icon="solar:book-bold-duotone" width={16} style={{ color: 'var(--primary)' }} />
                      Core Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {courses.map((c, i) => (
                        <motion.span
                          key={c}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + i * 0.07 }}
                          className="px-3 py-1 rounded-lg text-xs font-medium"
                          style={{
                            background: 'rgba(139, 92, 246, 0.07)',
                            color: 'var(--text)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {c}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-6 grid grid-cols-3 gap-4"
          >
            {[
              { icon: 'solar:code-bold-duotone', label: 'Problem Solving', value: 'Strong' },
              { icon: 'solar:users-group-rounded-bold-duotone', label: 'Teamwork', value: 'Excellent' },
              { icon: 'solar:refresh-bold-duotone', label: 'Quick Learner', value: 'Always' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -3 }}
                className="glass-card p-4 text-center"
              >
                <Icon icon={item.icon} width={24} style={{ color: 'var(--primary)', margin: '0 auto 8px' }} />
                <div className="text-sm font-bold gradient-text">{item.value}</div>
                <div className="text-xs" style={{ color: 'var(--subtext)' }}>{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
