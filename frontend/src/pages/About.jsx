import { Link } from 'react-router-dom'

const TEAM = [
  { name: 'Alex', role: 'Student & Founder', emoji: '🧠', bio: 'Computer science student obsessed with AI tools. Started this site to document everything I learn so I never forget it — and so you can learn too!' },
  { name: 'Sam', role: 'Content Contributor', emoji: '✍️', bio: 'Fellow student and writer who helps turn confusing AI concepts into something anyone can actually understand.' },
  { name: 'Jordan', role: 'Automation Tinkerer', emoji: '⚙️', bio: 'Spends way too much time building n8n workflows. Contributes the more advanced tutorials once I\'ve tested them myself first.' },
]

const VALUES = [
  { icon: '🧪', title: 'Learn By Doing', desc: 'Every guide includes a real project you can build yourself. Reading is great, but doing is better.' },
  { icon: '💬', title: 'Plain English Only', desc: 'No jargon, no buzzwords. If a 12-year-old can\'t understand it, I rewrite it.' },
  { icon: '❤️', title: 'Made With Care', desc: 'Every tutorial is written by a real student who actually went through the confusion first.' },
  { icon: '🆓', title: 'Always Free', desc: 'All tutorials and resources are free. Education shouldn\'t cost money to access.' },
]

const MILESTONES = [
  { year: '2024', label: 'Started Learning AI Tools', desc: 'Discovered n8n and got completely hooked on automation' },
  { year: '2024', label: 'Wrote My First Tutorial', desc: 'Posted my first beginner guide — it helped more people than I expected!' },
  { year: '2025', label: 'Launched AgentFlow Lab', desc: 'Turned my notes into a proper website to help other learners' },
  { year: '2026', label: 'Still Learning, Still Sharing', desc: 'Growing the content library one tutorial at a time' },
]

export default function About() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <div className="page-header" style={{ padding: '80px 24px 60px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <span className="label">About</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Hi! I'm a Student Who Loves<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Teaching What I Learn 
            </span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.7 }}>
            AgentFlow Lab is a student project I built to share what I've discovered about AI agents and automation tools. I learn something new, I write it down, and hopefully it helps you too!
          </p>
        </div>
      </div>

      <div style={{ padding: '60px 24px 80px' }}>
        <div className="container">
          {/* Mission */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60,
            alignItems: 'center', marginBottom: 80,
          }}>
            <div>
              <span className="label">Why I Made This</span>
              <h2 className="section-title">Learning is Better When You Share It</h2>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 }}>
                I started this project because every AI tutorial I found was either too complicated or assumed I already knew things I didn't. So I started writing my own notes in a way that actually made sense to me.
              </p>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.8 }}>
                This website is the result of that. It's a collection of everything I've learned, written as clearly and simply as I can. If you're a beginner, you're in exactly the right place!
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--surface), var(--bg-3))',
              border: '1px solid var(--border)',
              borderRadius: 20, padding: 40,
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {[
                  { v: '50+', l: 'Tutorials Published' },
                  { v: '12K+', l: 'Monthly Readers' },
                  { v: '25K+', l: 'Resource Downloads' },
                  { v: '6', l: 'Tools In-Depth Reviewed' },
                ].map(s => (
                  <div key={s.l} style={{ textAlign: 'center', padding: '20px 12px', background: 'var(--bg)', borderRadius: 12, border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: 'var(--cyan)', marginBottom: 4 }}>{s.v}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div style={{ marginBottom: 80 }}>
            <span className="label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <div className="grid-4" style={{ marginTop: 32 }}>
              {VALUES.map(v => (
                <div key={v.title} style={{
                  padding: 28, background: 'var(--surface)',
                  border: '1px solid var(--border)', borderRadius: 16,
                }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{v.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 80 }}>
            <span className="label">Story</span>
            <h2 className="section-title">Our Journey</h2>
            <div style={{ marginTop: 32, position: 'relative' }}>
              <div style={{
                position: 'absolute', left: 70, top: 0, bottom: 0, width: 1,
                background: 'linear-gradient(to bottom, var(--cyan), var(--purple))',
                opacity: 0.3,
              }} />
              {MILESTONES.map((m, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 24,
                  marginBottom: 32, paddingLeft: 0,
                }}>
                  <div style={{
                    minWidth: 60, textAlign: 'right',
                    fontFamily: 'var(--font-mono)', fontSize: 13,
                    color: 'var(--cyan)', fontWeight: 600, paddingTop: 2,
                  }}>{m.year}</div>
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%',
                    background: 'var(--cyan)', flexShrink: 0, marginTop: 4,
                    boxShadow: '0 0 8px var(--cyan)',
                  }} />
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{m.label}</h4>
                    <p style={{ fontSize: 14, color: 'var(--text-2)' }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div style={{ marginBottom: 80 }}>
            <span className="label">Who's Behind This</span>
            <h2 className="section-title">Students Helping Students 🎓</h2>
            <div className="grid-3" style={{ marginTop: 32 }}>
              {TEAM.map(member => (
                <div key={member.name} className="card" style={{ padding: 32, textAlign: 'center' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--cyan-glow), var(--purple-glow))',
                    border: '2px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 32, margin: '0 auto 16px',
                  }}>{member.emoji}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--cyan)', fontWeight: 500, marginBottom: 12 }}>{member.role}</p>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center', padding: '64px 40px',
            background: 'linear-gradient(135deg, var(--surface), var(--bg-3))',
            border: '1px solid var(--border)', borderRadius: 24,
          }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, marginBottom: 12 }}>
              Let's Learn Together! 🚀
            </h2>
            <p style={{ color: 'var(--text-2)', marginBottom: 28 }}>
              Whether you're just starting out or already dabbling — you're welcome here. Dive in, ask questions, and enjoy the journey!
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/blog" className="btn btn-primary" style={{ padding: '13px 28px' }}>
                Browse Free Tutorials →
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '13px 28px' }}>
                Say Hello 👋
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
