import { useState } from 'react'

const CONTACT_OPTIONS = [
  { icon: '🙋', title: 'Questions Welcome', desc: 'Stuck on something? No question is too basic. Ask away!' },
  { icon: '💡', title: 'Tutorial Requests', desc: 'Want me to cover a specific tool or topic? Let me know!' },
  { icon: '🐛', title: 'Found a Mistake?', desc: 'I\'m still learning too — if you spot an error, please tell me!' },
  { icon: '👋', title: 'Just Saying Hi', desc: 'Seriously, feel free to just say hello. I love hearing from other learners.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [state, setState] = useState('idle')
  const [msg, setMsg] = useState('')

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setState('error'); setMsg('Please fill in all required fields.'); return
    }
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) { setState('success'); setMsg(data.message); setForm({ name: '', email: '', subject: '', message: '' }) }
      else { setState('error'); setMsg(data.error || 'Something went wrong') }
    } catch {
      setState('error'); setMsg('Could not connect. Please try again.')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    background: 'var(--bg-3)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    color: 'var(--text)',
    fontSize: 15,
    fontFamily: 'var(--font-body)',
    transition: 'all 0.2s',
  }

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="page-header" style={{ padding: '80px 24px 60px' }}>
        <div className="container">
          <span className="label">Contact</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Got a Question? Just Ask! 
          </h1>
          <p className="section-sub">
            I'm a student, not a company — so I genuinely read and reply to every message. No chatbots, no automated replies, just me!
          </p>
        </div>
      </div>

      <div style={{ padding: '60px 24px 80px' }}>
        <div className="container">
          {/* Contact options */}
          <div className="grid-4" style={{ marginBottom: 64 }}>
            {CONTACT_OPTIONS.map(opt => (
              <div key={opt.title} style={{
                padding: 24,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--cyan)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{opt.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{opt.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{opt.desc}</p>
              </div>
            ))}
          </div>

          {/* Main form + info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
            {/* Info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 20 }}>
                How to Reach Me
              </h2>
              {[
                { icon: '📧', label: 'Email', value: 'hello@agentflowlab.com' },
                { icon: '🐦', label: 'Twitter', value: '@agentflowlab' },
                { icon: '⏱', label: 'Response time', value: 'Usually same day or next day!' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)', marginTop: 2 }}>{item.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 32 }}>
                <p style={{ fontSize: 13, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>Social Media</p>
                {['🐦 Twitter', '📺 YouTube', '🐙 GitHub', '💼 LinkedIn'].map(s => (
                  <a key={s} href="#" style={{
                    display: 'block', padding: '10px 0',
                    fontSize: 14, color: 'var(--text-2)',
                    borderBottom: '1px solid var(--border)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-2)'}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 20, padding: 40,
            }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginBottom: 28 }}>
                Send a Message
              </h2>

              {state === 'success' ? (
                <div style={{
                  padding: 32, textAlign: 'center',
                  background: 'rgba(16,217,160,0.08)',
                  border: '1px solid rgba(16,217,160,0.3)',
                  borderRadius: 16,
                }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 8, color: 'var(--green)' }}>
                    Message received! 🎉
                  </h3>
                  <p style={{ color: 'var(--text-2)' }}>Thanks so much for reaching out! I'll get back to you as soon as I can.</p>
                  <button onClick={() => setState('idle')} className="btn btn-outline" style={{ marginTop: 20 }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-2)' }}>
                        Name <span style={{ color: 'var(--cyan)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px var(--cyan-glow)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-2)' }}>
                        Email <span style={{ color: 'var(--cyan)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="your@email.com"
                        style={inputStyle}
                        onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px var(--cyan-glow)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-2)' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={update('subject')}
                      placeholder="What's this about?"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px var(--cyan-glow)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-2)' }}>
                      Message <span style={{ color: 'var(--cyan)' }}>*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us what's on your mind..."
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                      onFocus={e => { e.target.style.borderColor = 'var(--cyan)'; e.target.style.boxShadow = '0 0 0 3px var(--cyan-glow)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  {state === 'error' && (
                    <div style={{
                      padding: '12px 16px',
                      background: 'rgba(248,113,113,0.1)',
                      border: '1px solid rgba(248,113,113,0.3)',
                      borderRadius: 10,
                      color: '#f87171', fontSize: 14,
                    }}>⚠ {msg}</div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={state === 'loading'}
                    className="btn btn-primary"
                    style={{ padding: '14px 28px', fontSize: 15, justifyContent: 'center' }}
                  >
                    {state === 'loading' ? 'Sending...' : 'Send Message →'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
