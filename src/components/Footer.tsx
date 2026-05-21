import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: 'mdi:github', href: 'https://github.com/anshulikasu', label: 'GitHub' },
  { icon: 'mdi:linkedin', href: 'https://linkedin.com/in/anshulika-singh-781245232', label: 'LinkedIn' },
  { icon: 'mdi:email', href: 'mailto:anshulikasingh355@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="border-t pt-12 pb-8"
      style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="text-2xl font-black font-mono mb-3" style={{ color: 'var(--primary)' }}>
              {'<AS />'}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--subtext)' }}>
              Frontend developer passionate about building beautiful, accessible, and performant web experiences.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(139, 92, 246, 0.08)',
                    border: '1px solid var(--border)',
                    color: 'var(--subtext)',
                  }}
                >
                  <Icon icon={s.icon} width={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--text)' }}>Quick Links</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm text-left transition-colors duration-200 hover:underline"
                  style={{ color: 'var(--subtext)' }}
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--text)' }}>Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:anshulikasingh355@gmail.com"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:underline"
                style={{ color: 'var(--subtext)' }}
              >
                <Icon icon="solar:letter-bold-duotone" width={16} style={{ color: 'var(--primary)' }} />
                anshulikasingh355@gmail.com
              </a>
              <a
                href="tel:+919027465848"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:underline"
                style={{ color: 'var(--subtext)' }}
              >
                <Icon icon="solar:phone-bold-duotone" width={16} style={{ color: 'var(--primary)' }} />
                +91 90274 65848
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--subtext)' }}>
                <Icon icon="solar:map-point-bold-duotone" width={16} style={{ color: 'var(--primary)' }} />
                Gurugram, India
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--subtext)' }}>
            © {new Date().getFullYear()} Anshulika Singh. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: 'var(--subtext)' }}>
            Built with
            <Icon icon="vscode-icons:file-type-reactjs" width={14} />
            React +
            <Icon icon="vscode-icons:file-type-typescript-official" width={14} />
            TypeScript
            <span style={{ color: 'var(--primary)' }} className="font-medium">&amp; lots of ☕</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
