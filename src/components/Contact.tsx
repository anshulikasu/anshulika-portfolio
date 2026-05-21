import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '@iconify/react'

const contactInfo = [
  {
    icon: 'solar:letter-bold-duotone',
    label: 'Email',
    value: 'anshulikasingh355@gmail.com',
    href: 'mailto:anshulikasingh355@gmail.com',
    color: '#7c3aed',
  },
  {
    icon: 'solar:phone-bold-duotone',
    label: 'Phone',
    value: '+91 90274 65848',
    href: 'tel:+919027465848',
    color: '#ec4899',
  },
  {
    icon: 'solar:map-point-bold-duotone',
    label: 'Location',
    value: 'Gurugram, Haryana, India',
    href: null,
    color: '#22d3ee',
  },
  {
    icon: 'mdi:github',
    label: 'GitHub',
    value: 'github.com/anshulikasu',
    href: 'https://github.com/anshulikasu',
    color: '#f472b6',
  },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState(initialForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setSent(true)
      setForm(initialForm)
      setTimeout(() => setSent(false), 4000)
    } catch {
      alert('Failed to send message. Please email directly at anshulikasingh355@gmail.com')
    } finally {
      setSending(false)
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 font-medium`
  const inputStyle = {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }} />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
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
            <Icon icon="solar:chat-round-bold-duotone" width={16} />
            Contact
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 mb-6">
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>
                Open to Opportunities
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--subtext)' }}>
                I'm always interested in exciting frontend opportunities, freelance projects,
                and collaborations. Whether you have a question or just want to say hi — my inbox is open!
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">Available for work</span>
              </div>
            </div>

            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass-card p-4"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: `${info.color}15` }}
                    >
                      <Icon icon={info.icon} width={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'var(--subtext)' }}>{info.label}</div>
                      <div className="text-sm font-medium transition-colors duration-200 group-hover:underline" style={{ color: 'var(--text)' }}>
                        {info.value}
                      </div>
                    </div>
                    <Icon icon="solar:arrow-right-up-bold" width={14} className="ml-auto" style={{ color: info.color }} />
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}15` }}
                    >
                      <Icon icon={info.icon} width={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'var(--subtext)' }}>{info.label}</div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{info.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8"
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text)' }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--subtext)' }}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--subtext)' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--subtext)' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration / Job opportunity"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--subtext)' }}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { y: -2 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, #10b981, #059669)'
                    : 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: sent ? '0 4px 15px rgba(16, 185, 129, 0.4)' : '0 4px 15px rgba(124, 58, 237, 0.4)',
                  opacity: sending ? 0.8 : 1,
                }}
              >
                {sent ? (
                  <>
                    <Icon icon="solar:check-circle-bold-duotone" width={20} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Icon icon="solar:refresh-bold" width={20} />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon icon="solar:paper-plane-bold-duotone" width={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
