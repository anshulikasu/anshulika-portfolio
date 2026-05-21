import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '@iconify/react'

const skillCategories = [
  {
    title: 'Languages',
    icon: 'solar:code-bold-duotone',
    color: '#7c3aed',
    skills: [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', level: 95 },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', level: 92 },
      { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official', level: 90 },
      { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official', level: 82 },
      { name: 'SQL', icon: 'vscode-icons:file-type-sql', level: 70 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'solar:widget-bold-duotone',
    color: '#ec4899',
    skills: [
      { name: 'React.js', icon: 'vscode-icons:file-type-reactjs', level: 93 },
      { name: 'Redux', icon: 'simple-icons:redux', level: 85 },
      { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind', level: 90 },
      { name: 'Framer Motion', icon: 'simple-icons:framer', level: 80 },
      { name: 'Material UI', icon: 'simple-icons:mui', level: 83 },
      { name: 'Bootstrap', icon: 'simple-icons:bootstrap', level: 88 },
      { name: 'shadcn/ui', icon: 'simple-icons:shadcnui', level: 78 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: 'solar:settings-bold-duotone',
    color: '#22d3ee',
    skills: [
      { name: 'REST APIs', icon: 'solar:transfer-horizontal-bold-duotone', level: 88 },
      { name: 'OAuth / JWT', icon: 'solar:shield-keyhole-bold-duotone', level: 80 },
      { name: 'Responsive Design', icon: 'solar:devices-bold-duotone', level: 95 },
      { name: 'Dark/Light Theme', icon: 'solar:moon-bold-duotone', level: 90 },
      { name: 'Git / GitHub', icon: 'mdi:github', level: 82 },
      { name: 'Accessibility a11y', icon: 'solar:accessibility-bold-duotone', level: 78 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2), transparent)' }}
        />
      </div>

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <Icon icon="solar:star-bold-duotone" width={16} />
            Technical Skills
          </span>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life with clean, efficient code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}20` }}
                >
                  <Icon icon={cat.icon} width={20} style={{ color: cat.color }} />
                </div>
                <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.15 + si * 0.07, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon icon={skill.icon} width={18} />
                        <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono" style={{ color: 'var(--subtext)' }}>{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'rgba(139, 92, 246, 0.1)' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: ci * 0.15 + si * 0.07 + 0.3, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 glass-card p-6"
        >
          <h3 className="text-center font-semibold mb-6" style={{ color: 'var(--text)' }}>
            All Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.flatMap((c) => c.skills).map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.03, type: 'spring', stiffness: 200 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="skill-pill"
              >
                <Icon icon={skill.icon} width={16} />
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
