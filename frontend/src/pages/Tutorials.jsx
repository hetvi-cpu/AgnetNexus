import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LEVELS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced']
const TOOLS_FILTER = ['All Tools', 'n8n', 'Zapier', 'Make', 'LangChain', 'CrewAI']

const TUTORIALS = [
  {
    id: 1, title: "n8n Crash Course: From Zero to First Workflow",
    level: "Beginner", tool: "n8n", duration: "45 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    steps: 12, category: "Workflow Automation",
    description: "A complete crash course on n8n. Install, connect apps, and run your first automated workflow from scratch.",
  },
  {
    id: 2, title: "Build an Email Triage AI Agent",
    level: "Beginner", tool: "n8n", duration: "30 min",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    steps: 8, category: "AI Agents",
    description: "Create an AI agent that reads your inbox, classifies emails by priority, and drafts responses automatically.",
  },
  {
    id: 3, title: "Zapier Multi-Step Zaps Masterclass",
    level: "Beginner", tool: "Zapier", duration: "25 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    steps: 6, category: "Workflow Automation",
    description: "Go beyond simple 2-step Zaps and build powerful multi-step workflows that handle complex business logic.",
  },
  {
    id: 4, title: "CrewAI: Build a Research Assistant Team",
    level: "Intermediate", tool: "CrewAI", duration: "60 min",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
    steps: 15, category: "AI Agents",
    description: "Orchestrate a crew of AI agents — a researcher, analyst, and writer — to produce comprehensive research reports.",
  },
  {
    id: 5, title: "LangChain Tool-Calling Agents",
    level: "Intermediate", tool: "LangChain", duration: "90 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    steps: 18, category: "AI Agents",
    description: "Build LangChain agents that can call real APIs, search the web, and interact with databases autonomously.",
  },
  {
    id: 6, title: "Make.com: Advanced Data Transformation",
    level: "Advanced", tool: "Make", duration: "50 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    steps: 14, category: "Workflow Automation",
    description: "Master Make's data store, JSON parsing, and HTTP modules to build enterprise-grade automation pipelines.",
  },
  {
    id: 7, title: "Automated Social Media Content Pipeline",
    level: "Beginner", tool: "n8n", duration: "35 min",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    steps: 9, category: "Workflow Automation",
    description: "Build a pipeline that generates, schedules, and posts social media content across platforms automatically.",
  },
  {
    id: 8, title: "AI-Powered Lead Scoring with Zapier & GPT",
    level: "Intermediate", tool: "Zapier", duration: "40 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    steps: 11, category: "AI Agents",
    description: "Integrate GPT into your Zapier workflows to automatically score and segment incoming leads.",
  },
  {
    id: 9, title: "Self-Hosted n8n on a $5 VPS — Full Setup",
    level: "Intermediate", tool: "n8n", duration: "55 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    steps: 20, category: "DevOps",
    description: "Host n8n yourself for unlimited automation with SSL, Docker, and Nginx reverse proxy on a budget VPS.",
  },
]

const levelColors = { Beginner: 'badge-green', Intermediate: 'badge-orange', Advanced: 'badge-purple' }

export default function Tutorials() {
  const [level, setLevel] = useState('All Levels')
  const [tool, setTool] = useState('All Tools')

  const filtered = TUTORIALS.filter(t => {
    const matchLevel = level === 'All Levels' || t.level === level
    const matchTool = tool === 'All Tools' || t.tool === tool
    return matchLevel && matchTool
  })

  return (
    <div style={{ paddingTop: 64 }}>
      <div className="page-header" style={{ padding: '80px 24px 60px' }}>
        <div className="container">
          <span className="label">Tutorials</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
            Follow Along, Step by Step
          </h1>
          <p className="section-sub">
            Each tutorial is written the way I wished someone had explained it to me — simple, clear, and with no assumptions about what you already know.
          </p>
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        <div className="container">
          {/* Filters */}
          <div style={{
            padding: '24px 0', marginBottom: 8,
            borderBottom: '1px solid var(--border)',
            display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 4 }}>Level</span>
              {LEVELS.map(l => (
                <button key={l} onClick={() => setLevel(l)} style={{
                  padding: '6px 14px', borderRadius: 100, fontSize: 13,
                  border: '1px solid',
                  borderColor: level === l ? 'var(--cyan)' : 'var(--border)',
                  background: level === l ? 'var(--cyan-glow)' : 'transparent',
                  color: level === l ? 'var(--cyan)' : 'var(--text-2)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>{l}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: 4 }}>Tool</span>
              {TOOLS_FILTER.map(t => (
                <button key={t} onClick={() => setTool(t)} style={{
                  padding: '6px 14px', borderRadius: 100, fontSize: 13,
                  border: '1px solid',
                  borderColor: tool === t ? 'var(--purple)' : 'var(--border)',
                  background: tool === t ? 'var(--purple-glow)' : 'transparent',
                  color: tool === t ? 'var(--purple)' : 'var(--text-2)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}>{t}</button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p style={{ fontSize: 13, color: 'var(--text-3)', padding: '16px 0 32px' }}>
            {filtered.length} tutorial{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>No tutorials match those filters!</h3>
              <p style={{ color: 'var(--text-2)', marginTop: 8 }}>Try removing a filter — there's something here for every level.</p>
              <button onClick={() => { setLevel('All Levels'); setTool('All Tools') }}
                className="btn btn-outline" style={{ marginTop: 20 }}>Show All Tutorials</button>
            </div>
          ) : (
            <div className="grid-3" style={{ paddingBottom: 80 }}>
              {filtered.map(tut => (
                <article key={tut.id} className="card" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', flexShrink: 0 }}>
                    <img src={tut.image} alt={tut.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(6,11,24,0.7) 0%, transparent 60%)',
                    }} />
                    <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                      <span className={`badge ${levelColors[tut.level]}`}>{tut.level}</span>
                    </div>
                    <div style={{
                      position: 'absolute', bottom: 12, right: 12,
                      background: 'rgba(0,0,0,0.7)',
                      padding: '3px 10px',
                      borderRadius: 6,
                      fontSize: 11, fontFamily: 'var(--font-mono)',
                    }}>⏱ {tut.duration}</div>
                  </div>
                  <div style={{ padding: '18px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                      <span className="badge badge-cyan">{tut.tool}</span>
                      <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{tut.steps} steps</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, lineHeight: 1.35, marginBottom: 8 }}>
                      {tut.title}
                    </h3>
                    <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                      {tut.description}
                    </p>
                    <Link to="/blog" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '9px 18px', fontSize: 13, marginTop: 'auto' }}>
                      Start Tutorial →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
