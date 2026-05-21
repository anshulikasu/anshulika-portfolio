import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import { toggleTheme } from '../store/themeSlice'
import type { RootState } from '../store'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const dispatch = useDispatch()
  const mode = useSelector((state: RootState) => state.theme.mode)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setActive(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-xl shadow-lg'
          : 'py-5'
      }`}
      style={{
        background: scrolled
          ? mode === 'dark'
            ? 'rgba(5, 8, 22, 0.85)'
            : 'rgba(248, 247, 255, 0.85)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="section-container flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold font-mono"
          style={{ color: 'var(--primary)' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {'<AS />'}
        </motion.a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              whileHover={{ y: -1 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === link.href
                  ? 'text-primary-500 bg-primary-500/10'
                  : 'hover:text-primary-400 hover:bg-primary-500/5'
              }`}
              style={{ color: active === link.href ? 'var(--primary)' : 'var(--subtext)' }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => dispatch(toggleTheme())}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl transition-all duration-300"
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              color: 'var(--primary)',
              border: '1px solid var(--border)',
            }}
            aria-label="Toggle theme"
          >
            <Icon
              icon={mode === 'dark' ? 'solar:sun-bold-duotone' : 'solar:moon-bold-duotone'}
              width={20}
            />
          </motion.button>

          <motion.button
            className="md:hidden p-2.5 rounded-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'rgba(139, 92, 246, 0.1)',
              color: 'var(--primary)',
              border: '1px solid var(--border)',
            }}
          >
            <Icon icon={mobileOpen ? 'solar:close-bold' : 'solar:hamburger-menu-bold'} width={20} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: mode === 'dark' ? 'rgba(5, 8, 22, 0.95)' : 'rgba(248, 247, 255, 0.95)',
              borderTop: '1px solid var(--border)',
            }}
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-primary-500/10"
                  style={{ color: active === link.href ? 'var(--primary)' : 'var(--text)' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
