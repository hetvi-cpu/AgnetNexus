import { useState, useEffect } from 'react'
import { api } from '../api'
import NewsletterSection from '../components/NewsletterSection'

export default function Resources() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [downloaded, setDownloaded] = useState(new Set())

  useEffect(() => {
    api.getResources()
      .then(data => { setResources(data.resources || []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleDownload = (id, title) => {
    setDownloaded(prev => new Set([...prev, id]))
    // In a real app, trigger actual file download
    setTimeout(() => {
      const a = document.createElement('a')
      a.href = '#'
      a.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf'
      a.click()
    }, 500)
  }

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="page-header" style={{ padding: '80px 24px 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <span className="label">Free Resources</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Helpful Freebies I Made For You
          </h1>
          <p className="section-sub">
            Templates, cheatsheets, and guides I put together while learning. They saved me hours — hopefully they'll save you some time too! Everything is completely free.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { label: '6 Free Downloads', icon: '📦' },
              { label: '25K+ Downloads Total', icon: '⬇' },
              { label: 'New Resources Monthly', icon: '🔄' },
            ].map(item => (
            <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 16px',
                background: 'var(--cyan-glow)',
                border: '1px solid rgba(6,214,245,0.2)',
                borderRadius: 100,
                fontSize: 13, color: 'var(--cyan)', fontWeight: 500,
              }}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '60px 24px 80px' }}>
        <div className="container">
          {loading ? (
            <div className="grid-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="card" style={{ height: 220, padding: 28 }}>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <div className="skeleton" style={{ width: 52, height: 52, borderRadius: 12, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div className="skeleton" style={{ height: 16, marginBottom: 10 }} />
                      <div className="skeleton" style={{ height: 12, marginBottom: 6 }} />
                      <div className="skeleton" style={{ height: 12, width: '70%' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid-3">
              {resources.map(res => (
                <div key={res.id} className="card" style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                    <div style={{
                      width: 52, height: 52, flexShrink: 0,
                      background: 'linear-gradient(135deg, var(--cyan-glow), var(--purple-glow))',
                      border: '1px solid var(--border)',
                      borderRadius: 14,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 26,
                    }}>{res.icon}</div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>{res.title}</h3>
                      <span className="badge badge-purple">{res.type}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 20 }}>
                    {res.description}
                  </p>

                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    paddingTop: 16, borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: 12, color: 'var(--text-3)' }}>⬇ {res.downloads} downloads</span>
                    <button
                      onClick={() => handleDownload(res.id, res.title)}
                      className={downloaded.has(res.id) ? 'btn' : 'btn btn-primary'}
                      style={{
                        padding: '8px 18px',
                        fontSize: 13,
                        background: downloaded.has(res.id) ? 'rgba(16,217,160,0.1)' : undefined,
                        color: downloaded.has(res.id) ? 'var(--green)' : undefined,
                        border: downloaded.has(res.id) ? '1px solid rgba(16,217,160,0.3)' : undefined,
                      }}
                    >
                      {downloaded.has(res.id) ? '✓ Downloaded!' : '⬇ Download Free'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Submit resource CTA */}
          <div style={{
            marginTop: 64,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '40px',
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>💡</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 8 }}>
                Have Something to Share?
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                Made a template or cheatsheet that helped you? Share it with other learners! Every small contribution helps the community grow.
              </p>
              <button className="btn btn-outline">Submit Your Resource →</button>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, var(--cyan-glow), var(--purple-glow))',
              border: '1px solid rgba(6,214,245,0.2)',
              borderRadius: 20,
              padding: '40px',
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>🔔</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 8 }}>
                Want New Resources First?
              </h3>
              <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                I add new freebies whenever I make something useful. Subscribe and you'll be the first to know — no spam, I promise!
              </p>
              <button className="btn btn-primary">Yes, Notify Me! →</button>
            </div>
          </div>

          {/* Newsletter */}
          <div style={{ marginTop: 64 }}>
            <NewsletterSection />
          </div>
        </div>
      </div>
    </div>
  )
}
