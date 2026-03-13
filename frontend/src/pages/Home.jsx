import { Link } from 'react-router-dom'
import { getPosts, tools, resources, videos } from '../data'
import BlogCard from '../components/BlogCard'
import NewsletterSection from '../components/NewsletterSection'

const STATS = [
  { value: '50+', label: 'Free Tutorials' },
  { value: '12K+', label: 'Fellow Learners' },
  { value: '20+', label: 'Tools Explored' },
  { value: '100%', label: 'Free & Beginner Friendly' },
]

const CATEGORIES = [
  { name: 'AI Agents Basics', icon: '🤖', count: 12, color: 'var(--cyan)' },
  { name: 'Automation Tutorials', icon: '⚙️', count: 28, color: 'var(--purple)' },
  { name: 'Workflow Projects', icon: '🔗', count: 15, color: 'var(--green)' },
  { name: 'AI Tools Reviews', icon: '🧪', count: 20, color: 'var(--orange)' },
  { name: 'Tech Career Guides', icon: '🎯', count: 9, color: 'var(--cyan)' },
]

const latestPosts = getPosts({ limit: 6 })
const featuredTools = tools.slice(0, 4)
const featuredResources = resources.slice(0, 3)

export default function Home() {
  return (
    <div>
      <section style={{ minHeight: '110vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,214,245,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -200, right: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.3, maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="animate-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'var(--cyan-glow)', border: '1px solid rgba(6,214,245,0.3)', borderRadius: 100, fontSize: 13, color: 'var(--cyan)', fontWeight: 500, marginBottom: 28 }}>
            <span className="glow-dot" style={{ width: 6, height: 6 }} />
            Made by a student, for students
          </div>

          <h1 className="animate-fade-up delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20 }}>
            Learn AI Agents &<br />
            <span style={{ background: 'linear-gradient(135deg, var(--cyan), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Automation</span>{' '}the Easy Way
          </h1>

          <p className="animate-fade-up delay-2" style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: 'var(--text-2)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Simple, friendly tutorials written by a student who figured it all out step by step. If I could learn it, so can you — no experience needed.
          </p>

          <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blog" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>Start Learning (It's Free!) →</Link>
            <Link to="/resources" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: 15 }}>Free Downloads</Link>
          </div>

          <div className="animate-fade-up delay-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, maxWidth: 640, margin: '64px auto 0' }}>
            {STATS.map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 24px 80px', marginTop: -20 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.name} to="/blog" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--text-2)', fontSize: 13, fontWeight: 500, transition: 'all 0.2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.color = cat.color; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <span>{cat.icon}</span><span>{cat.name}</span><span style={{ fontSize: 11, opacity: 0.6 }}>({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div><span className="label">Latest Articles</span><h2 className="section-title" style={{ marginBottom: 0 }}>What I've Been Writing About</h2></div>
            <Link to="/blog" className="btn btn-outline">View All Posts →</Link>
          </div>
          <div className="grid-3">{latestPosts.map(post => <BlogCard key={post.id} post={post} />)}</div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div><span className="label">Popular AI Tools</span><h2 className="section-title" style={{ marginBottom: 0 }}>Tools I Actually Use & Recommend</h2></div>
            <Link to="/tools" className="btn btn-outline">All Tools →</Link>
          </div>
          <div className="grid-4">
            {featuredTools.map(tool => (
              <div key={tool.id} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{tool.logo}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{tool.name}</h3>
                <span className="badge badge-cyan" style={{ marginBottom: 10, display: 'inline-block' }}>{tool.category}</span>
                <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 14 }}>{tool.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div><span className="stars">{'★'.repeat(Math.floor(tool.rating))}</span><span style={{ fontSize: 11, color: 'var(--text-3)', marginLeft: 4 }}>{tool.rating}</span></div>
                  <a href={tool.url} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: 12 }}>Visit →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="label">YouTube Tutorials</span>
            <h2 className="section-title">Watch Along With Me</h2>
            <p className="section-sub">I learn better by watching, so I made videos too. Follow along at your own pace!</p>
          </div>
          <div className="grid-3">
            {videos.map(video => (
              <div key={video.id} className="card" style={{ cursor: 'pointer' }}>
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-3)' }}>
                  <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} onError={e => { e.target.src = 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80' }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 52, height: 52, background: 'rgba(255,0,0,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, boxShadow: '0 4px 20px rgba(255,0,0,0.4)' }}>▶</div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.8)', padding: '2px 8px', borderRadius: 4, fontSize: 11, fontFamily: 'var(--font-mono)' }}>{video.duration}</div>
                </div>
                <div style={{ padding: '14px 18px' }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, lineHeight: 1.4 }}>{video.title}</h3>
                  <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{video.views} views · AgentNexus</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section" style={{ padding: '80px 24px', background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div><span className="label">Free Resources</span><h2 className="section-title" style={{ marginBottom: 0 }}>Freebies to Help You Get Started</h2></div>
            <Link to="/resources" className="btn btn-outline">All Resources →</Link>
          </div>
          <div className="grid-3">
            {featuredResources.map(res => (
              <div key={res.id} className="card" style={{ padding: 24, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, flexShrink: 0, background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{res.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{res.title}</h3>
                  <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 10 }}>{res.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="badge badge-purple">{res.type}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{res.downloads} downloads</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 24px' }}>
        <div className="container"><NewsletterSection /></div>
      </section>
    </div>
  )
}
