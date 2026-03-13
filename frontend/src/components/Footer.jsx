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
  {
    label: 'Twitter', url: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  },
  {
    label: 'YouTube', url: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
  },
  {
    label: 'GitHub', url: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  },
  {
    label: 'LinkedIn', url: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  },
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
                
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--text)' }}>
                  AgentNexus
                </span>
              </Link>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
                A student project built to help beginners learn AI agents and automation. Written by a learner, for learners.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map(s => (
                  <a key={s.label} href={s.url} title={s.label} style={{
                    width: 34, height: 34,
                    background: 'var(--bg-3)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-3)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.color = 'var(--cyan)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-3)'
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
