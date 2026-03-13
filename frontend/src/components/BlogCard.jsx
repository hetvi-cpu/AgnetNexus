import { Link } from 'react-router-dom'

const categoryColors = {
  'AI Agents Basics': 'badge-cyan',
  'Automation Tutorials': 'badge-purple',
  'Workflow Projects': 'badge-green',
  'AI Tools Reviews': 'badge-orange',
  'Tech Career Guides': 'badge-cyan',
}

export default function BlogCard({ post, featured = false }) {
  return (
    <article className="card" style={{
      display: 'flex',
      flexDirection: featured ? 'row' : 'column',
      gap: 0,
    }}>
      {/* Image */}
      <div style={{
        width: featured ? '45%' : '100%',
        aspectRatio: featured ? 'auto' : '16/9',
        flexShrink: 0,
        overflow: 'hidden',
        position: 'relative',
        minHeight: featured ? 240 : 0,
      }}>
        <img
          src={post.image}
          alt={post.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(6,11,24,0.6) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span className={`badge ${categoryColors[post.category] || 'badge-cyan'}`}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: featured ? 22 : 18,
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: 10,
          color: 'var(--text)',
          transition: 'color 0.2s',
        }}>
          <Link to={`/blog`}
            onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--text)'}
          >
            {post.title}
          </Link>
        </h2>

        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
          {post.excerpt}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 14,
          borderTop: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-3)' }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <Link to="/blog" className="btn btn-ghost" style={{ fontSize: 13 }}>
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}
