import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import NewsletterSection from '../components/NewsletterSection'

const STATS = [
  { value: '50+', label: 'Free Tutorials' },
  { value: '12K+', label: 'Fellow Learners' },
  { value: '20+', label: 'Tools Explored' },
  { value: '100%', label: 'Free & Beginner Friendly' },
]

const YOUTUBE_VIDEOS = [
  { title: 'Build an AI Agent in 15 Minutes', videoId: 'dQw4w9WgXcQ', duration: '15:42', views: '48K' },
  { title: 'n8n Crash Course for Beginners 2026', videoId: 'dQw4w9WgXcQ', duration: '32:18', views: '127K' },
  { title: 'Zapier vs n8n: Which Is Better?', videoId: 'dQw4w9WgXcQ', duration: '22:05', views: '89K' },
]

const CATEGORIES = [
  { name: 'AI Agents Basics', icon: '🤖', count: 12, color: 'var(--cyan)' },
  { name: 'Automation Tutorials', icon: '⚙️', count: 28, color: 'var(--purple)' },
  { name: 'Workflow Projects', icon: '🔗', count: 15, color: 'var(--green)' },
  { name: 'AI Tools Reviews', icon: '🧪', count: 20, color: 'var(--orange)' },
  { name: 'Tech Career Guides', icon: '🎯', count: 9, color: 'var(--cyan)' },
]

export default function Home() {
  const [posts, setPosts] = useState([])
  const [tools, setTools] = useState([])
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/posts?limit=6').then(r => r.json()),
      fetch('/api/tools').then(r => r.json()),
      fetch('/api/resources').then(r => r.json()),
    ]).then(([p, t, res]) => {
      setPosts(p.posts || [])
      setTools((t.tools || []).slice(0, 4))
      setResources((res.resources || []).slice(0, 3))
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        minHeight: '110vh',
        display: 'flex', alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,214,245,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -200, right: -100,
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Badge */}
          <div className="animate-fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px',
            background: 'var(--cyan-glow)',
            border: '1px solid rgba(6,214,245,0.3)',
            borderRadius: 100,
            fontSize: 13,
            color: 'var(--cyan)',
            fontWeight: 500,
            marginBottom: 28,
          }}>
            <span className="glow-dot" style={{ width: 6, height: 6 }} />
             Made by a student, for students
          </div>

          <h1 className="animate-fade-up delay-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(34px, 5.5vw, 72px)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 20,
          }}>
            Learn AI Agents &<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Automation
            </span>{' '}
            the Easy Way
          </h1>

          <p className="animate-fade-up delay-2" style={{
            fontSize: 'clamp(16px, 1.6vw, 16px)',
            color: 'var(--text-2)',
            maxWidth: 560,
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Simple, friendly tutorials written by a student who figured it all out step by step.
            If I could learn it, so can you — no experience needed! 🚀
          </p>

          <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blog" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>
              Start Learning (It's Free!) →
            </Link>
            <Link to="/resources" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: 16 }}>
              Free Downloads
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-4" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24, maxWidth: 640, margin: '64px auto 0',
          }}>
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 28, fontWeight: 800,
                  color: 'var(--text)',
                  marginBottom: 4,
                }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ────────────────────────────────────────── */}
      <section style={{ padding: '0 24px 80px', marginTop: -20 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.name} to="/blog" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 20px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                color: 'var(--text-2)',
                fontSize: 14, fontWeight: 500,
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cat.color
                e.currentTarget.style.color = cat.color
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span style={{ fontSize: 12, opacity: 0.6 }}>({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── LATEST ARTICLES ───────────────────────────────────── */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="label">Latest Articles</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>What I've Been Writing About 📝</h2>
            </div>
            <Link to="/blog" className="btn btn-outline">View All Posts →</Link>
          </div>

          {loading ? (
            <div className="grid-3">
              {[1,2,3].map(i => (
                <div key={i} className="card" style={{ height: 360 }}>
                  <div className="skeleton" style={{ height: 180 }} />
                  <div style={{ padding: 24 }}>
                    <div className="skeleton" style={{ height: 16, width: '60%', marginBottom: 12 }} />
                    <div className="skeleton" style={{ height: 20, marginBottom: 8 }} />
                    <div className="skeleton" style={{ height: 20, width: '80%' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid-3">
              {posts.slice(0, 6).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="divider" />

      {/* ── POPULAR TOOLS ─────────────────────────────────────── */}
      <section className="section" style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="label">Popular AI Tools</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Tools I Actually Use & Recommend 🔧</h2>
            </div>
            <Link to="/tools" className="btn btn-outline">All Tools →</Link>
          </div>

          <div className="grid-4">
            {tools.map(tool => (
              <div key={tool.id} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{tool.logo}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{tool.name}</h3>
                <span className="badge badge-cyan" style={{ marginBottom: 10, display: 'inline-block' }}>{tool.category}</span>
                <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16 }}>
                  {tool.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span className="stars">{'★'.repeat(Math.floor(tool.rating))}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-3)', marginLeft: 4 }}>{tool.rating}</span>
                  </div>
                  <a href={tool.url} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: 13 }}>
                    Visit →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── YOUTUBE TUTORIALS ─────────────────────────────────── */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="label">YouTube Tutorials</span>
            <h2 className="section-title">Watch Along With Me 🎬</h2>
            <p className="section-sub">I learn better by watching, so I made videos too. Follow along at your own pace!</p>
          </div>

          <div className="grid-3">
            {YOUTUBE_VIDEOS.map(video => (
              <div key={video.id} className="card" style={{ cursor: 'pointer' }}>
                <div style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  background: 'var(--bg-3)',
                }}>
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      width: 56, height: 56,
                      background: 'rgba(255,0,0,0.9)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20,
                      boxShadow: '0 4px 20px rgba(255,0,0,0.4)',
                      transition: 'transform 0.2s',
                    }}>▶</div>
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 8, right: 8,
                    background: 'rgba(0,0,0,0.8)',
                    padding: '2px 8px',
                    borderRadius: 4,
                    fontSize: 12,
                    fontFamily: 'var(--font-mono)',
                  }}>{video.duration}</div>
                </div>
                <div style={{ padding: '16px 20px' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6, lineHeight: 1.4 }}>{video.title}</h3>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', display: 'flex', gap: 10 }}>
                    <span>👁 {video.views} views</span>
                    <span>AgentFlow Lab</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── FREE RESOURCES ────────────────────────────────────── */}
      <section className="section" style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="label">Free Resources</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Freebies to Help You Get Started 🎁</h2>
            </div>
            <Link to="/resources" className="btn btn-outline">All Resources →</Link>
          </div>

          <div className="grid-3">
            {resources.map(res => (
              <div key={res.id} className="card" style={{ padding: 28, display: 'flex', gap: 20, flexDirection: 'row', alignItems: 'flex-start' }}>
                <div style={{
                  width: 52, height: 52, flexShrink: 0,
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}>{res.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{res.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 12 }}>{res.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="badge badge-purple">{res.type}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-3)' }}>⬇ {res.downloads}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────── */}
      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container">
          <NewsletterSection />
        </div>
      </section>
    </div>
  )
}
