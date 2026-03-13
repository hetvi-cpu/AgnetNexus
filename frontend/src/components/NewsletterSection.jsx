import { useState } from 'react'
import { api } from '../api'

export default function NewsletterSection({ compact = false }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | loading | success | error
  const [msg, setMsg] = useState('')

  const handleSubmit = async () => {
    if (!email) return
    setState('loading')
    try {
      const data = await api.subscribe(email)
      setState('success'); setMsg(data.message); setEmail('')
    } catch {
      setState('error'); setMsg('Could not connect. Please try again.')
    }
  }

  if (compact) {
    return (
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
            Get new tutorials straight to your inbox
          </h3>
          <p style={{ fontSize: 14, color: 'var(--text-2)' }}>
            I send a friendly update whenever I post something new. No spam, just learning!
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flex: '0 0 400px', maxWidth: '100%' }}>
          {state === 'success' ? (
            <div style={{
              flex: 1, padding: '12px 20px',
              background: 'rgba(16,217,160,0.1)',
              border: '1px solid rgba(16,217,160,0.3)',
              borderRadius: 'var(--radius)',
              color: 'var(--green)',
              fontSize: 14, fontWeight: 500,
            }}>✓ {msg}</div>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                placeholder="your@email.com"
                className="input"
                style={{ flex: 1 }}
              />
              <button onClick={handleSubmit} className="btn btn-primary" disabled={state === 'loading'}>
                {state === 'loading' ? '...' : 'Subscribe'}
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg-3) 100%)',
      border: '1px solid var(--border)',
      borderRadius: 24,
      padding: '64px 40px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow */}
      <div style={{
        position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
        width: 400, height: 400,
        background: 'radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="label">Newsletter</span>
        <h2 className="section-title" style={{ marginBottom: 8 }}>
          Learn Together — One Email at a Time
        </h2>
        <p style={{ color: 'var(--text-2)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
          Join other learners who get my new tutorials delivered each week. Easy to read, easy to unsubscribe. Always free.
        </p>

        {state === 'success' ? (
          <div style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: 'rgba(16,217,160,0.1)',
            border: '1px solid rgba(16,217,160,0.3)',
            borderRadius: 'var(--radius)',
            color: 'var(--green)',
            fontWeight: 500,
          }}>✓ {msg}</div>
        ) : (
          <div style={{ display: 'flex', gap: 12, maxWidth: 460, margin: '0 auto' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email address"
              className="input"
              style={{ flex: 1 }}
            />
            <button onClick={handleSubmit} className="btn btn-primary" disabled={state === 'loading'}>
              {state === 'loading' ? '...' : 'Subscribe Free'}
            </button>
          </div>
        )}

        {state === 'error' && (
          <p style={{ marginTop: 10, color: '#f87171', fontSize: 13 }}>{msg}</p>
        )}

        <p style={{ marginTop: 14, fontSize: 12, color: 'var(--text-3)' }}>
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
