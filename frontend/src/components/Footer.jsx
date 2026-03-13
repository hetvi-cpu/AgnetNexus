import { Link } from 'react-router-dom'
import NewsletterSection from './NewsletterSection'

const links = {
  Learn: [
    { label: 'AI Agents Basics', path: '/blog' },
    { label: 'Automation Tutorials', path: '/tutorials' },
    { label: 'Workflow Projects', path: '/blog' },
    { label: 'Free Resources', path: '/resources' },
  ],
  Tools: [
    { label: 'AI Tools Reviews', path: '/tools' },
    { label: 'n8n Guides', path: '/tutorials' },
    { label: 'Zapier Tutorials', path: '/tutorials' },
    { label: 'Make Automation', path: '/tutorials' },
  ],
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Newsletter', path: '/' },
  ],
}

const socials = [
  { label: 'Twitter', icon: '🐦', url: '#' },
  { label: 'YouTube', icon: '📺', url: '#' },
  { label: 'GitHub', icon: '🐙', url: '#' },
  { label: 'LinkedIn', icon: '💼', url: '#' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
      {/* Newsletter */}
      <div style={{ padding: '64px 24px', background: 'var(--bg-2)', borderBottom: '1px solid var(--border)' }}>
        <NewsletterSection compact />
      </div>

      {/* Links grid */}
      <div style={{ padding: '56px 24px 40px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
            {/* Brand */}
            <div>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 34, height: 34,
                  background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                  borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                }}>🔮</div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text)' }}>
                  AgentNexus
                </span>
              </Link>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
                A student project built to help beginners learn AI agents and automation. Written by a learner, for learners. 🎓
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {socials.map(s => (
                  <a key={s.label} href={s.url} title={s.label} style={{
                    width: 36, height: 36,
                    background: 'var(--bg-3)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav groups */}
            {Object.entries(links).map(([group, items]) => (
              <div key={group}>
                <h4 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 16 }}>
                  {group}
                </h4>
                <ul style={{ listStyle: 'none' }}>
                  {items.map(item => (
                    <li key={item.label} style={{ marginBottom: 10 }}>
                      <Link to={item.path} style={{
                        fontSize: 14, color: 'var(--text-2)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid var(--border)',
            paddingTop: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
          }}>
            <p style={{ fontSize: 13, color: 'var(--text-3)' }}>
              © 2026 AgentNexus — A student project made with ❤️ for fellow learners.
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
                <a key={t} href="#" style={{ fontSize: 13, color: 'var(--text-3)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--text)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-3)'}>
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .grid-links { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
