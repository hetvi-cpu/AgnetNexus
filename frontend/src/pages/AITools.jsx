import { useState, useEffect } from 'react'
import { api } from '../api'
import { Link } from 'react-router-dom'

const TOOL_CATEGORIES = ['All', 'Workflow Automation', 'AI Agent Framework']

export default function AITools() {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    api.getTools()
      .then(data => { setTools(data.tools || []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = activeCategory === 'All' ? tools : tools.filter(t => t.category === activeCategory)

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="page-header" style={{ padding: '80px 24px 60px' }}>
        <div className="container">
          <span className="label">AI Tools</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Tools I've Tested So You Don't Have To
          </h1>
          <p className="section-sub">
            Honest, beginner-friendly reviews from someone who's tried them all. No complicated jargon — just what works and what doesn't!
          </p>
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        <div className="container">
          {/* Category filters */}
          <div style={{ display: 'flex', gap: 10, padding: '28px 0', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
            {TOOL_CATEGORIES.map(cat => (
              <button key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--cyan)' : 'var(--border)',
                  background: activeCategory === cat ? 'var(--cyan-glow)' : 'transparent',
                  color: activeCategory === cat ? 'var(--cyan)' : 'var(--text-2)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Tools grid */}
          <div style={{ padding: '40px 0 80px' }}>
            {loading ? (
              <div className="grid-3">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="card" style={{ height: 300, padding: 28 }}>
                    <div className="skeleton" style={{ width: 48, height: 48, borderRadius: 12, marginBottom: 16 }} />
                    <div className="skeleton" style={{ height: 18, width: '60%', marginBottom: 10 }} />
                    <div className="skeleton" style={{ height: 14, marginBottom: 8 }} />
                    <div className="skeleton" style={{ height: 14, width: '80%' }} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid-3">
                {filtered.map(tool => (
                  <div key={tool.id} className="card" style={{ padding: 28 }}>
                    {tool.featured && (
                      <div style={{
                        float: 'right',
                        padding: '3px 10px',
                        background: 'var(--cyan-glow)',
                        border: '1px solid rgba(6,214,245,0.3)',
                        borderRadius: 100,
                        fontSize: 11, color: 'var(--cyan)', fontWeight: 600,
                      }}>⭐ Featured</div>
                    )}

                    <div style={{
                      fontSize: 40, marginBottom: 16, width: 56, height: 56,
                      background: 'var(--bg-3)',
                      border: '1px solid var(--border)',
                      borderRadius: 14,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{tool.logo}</div>

                    <h3 style={{ fontSize: 20, fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 4 }}>
                      {tool.name}
                    </h3>
                    <span className="badge badge-purple" style={{ marginBottom: 12, display: 'inline-block' }}>
                      {tool.category}
                    </span>

                    <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16 }}>
                      {tool.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                      {tool.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div style={{
                      padding: '14px 0 0',
                      borderTop: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                          <span className="stars">{'★'.repeat(Math.floor(tool.rating))}</span>
                          <span style={{ fontSize: 13, fontWeight: 600 }}>{tool.rating}</span>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{tool.pricing}</div>
                      </div>
                      <a href={tool.url} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: 13 }}>
                        Visit Site →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, var(--surface), var(--bg-3))',
            border: '1px solid var(--border)',
            borderRadius: 20, padding: '48px 40px',
            textAlign: 'center', marginBottom: 80,
          }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 10 }}>
              Not sure where to start?
            </h2>
            <p style={{ color: 'var(--text-2)', marginBottom: 24 }}>
              That's totally normal! I wrote a beginner-friendly guide comparing the top tools to help you pick the right one.
            </p>
            <Link to="/blog" className="btn btn-primary">Read My Comparison Guide →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}