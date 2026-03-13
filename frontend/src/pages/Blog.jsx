import { useState, useEffect } from 'react'
import { api } from '../api'
import BlogCard from '../components/BlogCard'

const CATEGORIES = ['All', 'AI Agents Basics', 'Automation Tutorials', 'Workflow Projects', 'AI Tools Reviews', 'Tech Career Guides']

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.getPosts()
      .then(data => { setPosts(data.posts || []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <div className="page-header" style={{ padding: '80px 24px 60px' }}>
        <div className="container">
          <span className="label">Blog</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>
            All My Tutorials & Notes
          </h1>
          <p className="section-sub">
            I write about everything I learn — AI agents, automation tools, and beginner-friendly projects. Think of it as my public study notes!
          </p>

          {/* Search */}
          <div style={{ maxWidth: 480, position: 'relative' }}>
            <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input"
              style={{ paddingLeft: 40 }}
            />
          </div>
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        <div className="container">
          {/* Category filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', padding: '28px 0', borderBottom: '1px solid var(--border)' }}>
            {CATEGORIES.map(cat => (
              <button key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 100,
                  fontSize: 13, fontWeight: 500,
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--cyan)' : 'var(--border)',
                  background: activeCategory === cat ? 'var(--cyan-glow)' : 'transparent',
                  color: activeCategory === cat ? 'var(--cyan)' : 'var(--text-2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 14, color: 'var(--text-3)' }}>
              {loading ? 'Loading...' : `${filtered.length} article${filtered.length !== 1 ? 's' : ''} found`}
            </p>
          </div>

          {/* Featured */}
          {!loading && activeCategory === 'All' && !search && filtered[0] && (
            <div style={{ marginBottom: 40 }}>
              <BlogCard post={filtered[0]} featured />
            </div>
          )}

          {/* Grid */}
          {loading ? (
            <div className="grid-3" style={{ paddingBottom: 80 }}>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="card" style={{ height: 340 }}>
                  <div className="skeleton" style={{ height: 160 }} />
                  <div style={{ padding: 20 }}>
                    <div className="skeleton" style={{ height: 14, width: '50%', marginBottom: 10 }} />
                    <div className="skeleton" style={{ height: 18, marginBottom: 8 }} />
                    <div className="skeleton" style={{ height: 18, width: '75%' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>—</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 8 }}>Hmm, nothing found!</h3>
              <p style={{ color: 'var(--text-2)' }}>Try a different search term or browse all categories.</p>
            </div>
          ) : (
            <div className="grid-3" style={{ paddingBottom: 80 }}>
              {(activeCategory === 'All' && !search ? filtered.slice(1) : filtered).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
