import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const nav = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'AI Tools', path: '/tools' },
  { label: 'Tutorials', path: '/tutorials' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 24px',
      background: scrolled ? 'rgba(6,11,24,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 18,
            background: 'linear-gradient(135deg, var(--text), var(--cyan))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}>AgentNexus</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
          {nav.map(item => (
            <NavLink key={item.path} to={item.path} style={({ isActive }) => ({
              padding: '7px 14px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              color: isActive ? 'var(--cyan)' : 'var(--text-2)',
              background: isActive ? 'var(--cyan-glow)' : 'transparent',
              transition: 'all 0.2s',
            })}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/blog" className="btn btn-primary" style={{ fontSize: 13, padding: '8px 18px' }}>
          Start Learning →
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', color: 'var(--text)', fontSize: 22 }}
          className="burger-btn"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--bg-2)',
          borderBottom: '1px solid var(--border)',
          padding: '16px 24px',
        }}>
          {nav.map(item => (
            <NavLink key={item.path} to={item.path}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                display: 'block', padding: '12px 0',
                borderBottom: '1px solid var(--border)',
                color: isActive ? 'var(--cyan)' : 'var(--text)',
                fontSize: 15, fontWeight: 500,
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
          header .btn-primary { display: none; }
        }
      `}</style>
    </header>
  )
}
