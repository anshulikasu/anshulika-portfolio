import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '@iconify/react'

const stats = [
  { value: '3+', label: 'Years Experience', icon: 'solar:calendar-bold-duotone' },
  { value: '10+', label: 'Projects Shipped', icon: 'solar:rocket-bold-duotone' },
  { value: '3', label: 'Companies Worked', icon: 'solar:buildings-bold-duotone' },
  { value: '100%', label: 'Passion for UI', icon: 'solar:heart-bold-duotone' },
]

const highlights = [
  { icon: 'solar:code-bold-duotone', text: 'Scalable frontend architecture' },
  { icon: 'solar:palette-bold-duotone', text: 'Pixel-perfect UI implementation' },
  { icon: 'solar:plug-circle-bold-duotone', text: 'Third-party API integration' },
  { icon: 'solar:accessibility-bold-duotone', text: 'Accessible & responsive design' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Icon icon="solar:user-bold-duotone" width={16} />
            About Me
          </span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle mx-auto">
            A full stack developer who builds end-to-end — from pixel-perfect UIs to backend APIs and databases.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1))',
                  border: '1px solid var(--border)',
                  padding: '2px',
                }}
              >
                <div
                  className="rounded-3xl p-8 md:p-10"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}
                    >
                      AS
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>Anshulika Singh</h3>
                      <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>Frontend Web Developer</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs" style={{ color: 'var(--subtext)' }}>Available for opportunities</span>
                      </div>
                    </div>
                  </div>

                  <p className="leading-relaxed mb-6 text-base" style={{ color: 'var(--subtext)' }}>
                    I'm a full stack developer with <strong style={{ color: 'var(--text)' }}>3+ years of experience</strong> building
                    scalable web applications end-to-end — from pixel-perfect React UIs to Node.js APIs and MongoDB databases. I specialize in React.js ecosystems with a strong eye for design and performance.
                  </p>

                  <p className="leading-relaxed text-base" style={{ color: 'var(--subtext)' }}>
                    Currently at <strong style={{ color: 'var(--primary)' }}>Outgrow</strong>, I architect and build
                    SaaS tools including AI-powered dashboards, subscription flows, and interactive analytics —
                    helping businesses create engaging experiences for millions of users.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {highlights.map((h, i) => (
                      <motion.div
                        key={h.text}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        className="flex items-center gap-2.5 p-3 rounded-xl"
                        style={{ background: 'rgba(139, 92, 246, 0.06)', border: '1px solid var(--border)' }}
                      >
                        <Icon icon={h.icon} width={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        <span className="text-xs font-medium" style={{ color: 'var(--text)' }}>{h.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7c3aed20, #ec489920)', border: '1px solid var(--border)' }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Icon icon="solar:code-square-bold-duotone" width={36} style={{ color: 'var(--primary)' }} />
              </motion.div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-5 text-center group cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(139, 92, 246, 0.1)' }}
                  >
                    <Icon icon={s.icon} width={22} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
                  <div className="text-xs font-medium" style={{ color: 'var(--subtext)' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="glass-card p-6"
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <Icon icon="solar:map-point-bold-duotone" width={18} style={{ color: 'var(--primary)' }} />
                Quick Info
              </h4>
              <div className="space-y-3">
                {[
                  { icon: 'solar:map-point-bold-duotone', label: 'Location', value: 'Gurugram, India' },
                  { icon: 'solar:diploma-bold-duotone', label: 'Degree', value: 'B.Tech – CSE' },
                  { icon: 'solar:buildings-2-bold-duotone', label: 'Current', value: 'Outgrow · Full-time' },
                  { icon: 'solar:letter-bold-duotone', label: 'Email', value: 'anshulikasingh355@gmail.com' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <Icon icon={item.icon} width={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: 'var(--subtext)' }}>{item.label}:</span>
                    <span className="text-sm font-medium ml-auto text-right" style={{ color: 'var(--text)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex gap-3"
            >
              <a
                href="mailto:anshulikasingh355@gmail.com"
                className="btn-primary flex items-center gap-2 flex-1 justify-center text-sm"
              >
                <Icon icon="solar:letter-bold-duotone" width={18} />
                Hire Me
              </a>
              <a
                href="https://github.com/anshulikasu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 flex-1 justify-center text-sm"
              >
                <Icon icon="mdi:github" width={18} />
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
