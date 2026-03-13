const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

const posts = [
  { id: 1, title: "What Are AI Agents? A Complete Beginner's Guide", slug: "what-are-ai-agents-beginners-guide", category: "AI Agents Basics", excerpt: "Discover what AI agents are, how they think autonomously, and why they're the future of intelligent automation. Zero jargon, pure clarity.", readTime: "8 min read", date: "Mar 08, 2026", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", featured: true, tags: ["AI Agents", "Beginner", "Guide"] },
  { id: 2, title: "5 Automation Workflows That Save 10 Hours Every Week", slug: "automation-workflows-save-10-hours", category: "Automation Tutorials", excerpt: "Real, copy-paste workflows using n8n and Zapier that eliminate repetitive tasks — email triage, social posting, lead nurturing, and more.", readTime: "12 min read", date: "Mar 05, 2026", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", featured: true, tags: ["Automation", "Workflows", "Productivity"] },
  { id: 3, title: "Zapier vs n8n vs Make: The Ultimate 2026 Comparison", slug: "zapier-vs-n8n-vs-make-comparison-2026", category: "AI Tools Reviews", excerpt: "Which automation platform should you choose? We put all three head-to-head on price, power, ease-of-use, and AI capabilities.", readTime: "15 min read", date: "Mar 01, 2026", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", featured: true, tags: ["Tools", "Comparison", "Zapier", "n8n"] },
  { id: 4, title: "How to Build Your First AI Agent in 30 Minutes", slug: "build-first-ai-agent-30-minutes", category: "Workflow Projects", excerpt: "Step-by-step tutorial: build a working AI agent that monitors your inbox, classifies emails, and drafts smart replies — no coding required.", readTime: "10 min read", date: "Feb 27, 2026", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80", featured: false, tags: ["AI Agent", "Tutorial", "No-Code"] },
  { id: 5, title: "Top 10 AI Automation Tools for 2026", slug: "top-ai-automation-tools-2026", category: "AI Tools Reviews", excerpt: "From LangChain to CrewAI and beyond — the definitive list of tools every AI automation enthusiast needs to know in 2026.", readTime: "11 min read", date: "Feb 24, 2026", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80", featured: false, tags: ["Tools", "2026", "AI"] },
  { id: 6, title: "From Zero to Automation: Tech Career Guide for 2026", slug: "tech-career-guide-automation-2026", category: "Tech Career Guides", excerpt: "How to pivot into AI automation — skills, certifications, income ranges, and the exact roadmap to land your first role.", readTime: "18 min read", date: "Feb 20, 2026", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", featured: false, tags: ["Career", "Roadmap", "Skills"] },
  { id: 7, title: "n8n Self-Hosting Guide: Full Setup on a $5 VPS", slug: "n8n-self-hosting-guide-vps", category: "Automation Tutorials", excerpt: "Host your own n8n instance, set up SSL, and run unlimited automations for $5/month. Full step-by-step with screenshots.", readTime: "20 min read", date: "Feb 16, 2026", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", featured: false, tags: ["n8n", "Self-Hosting", "DevOps"] },
  { id: 8, title: "CrewAI Multi-Agent Systems: A Practical Introduction", slug: "crewai-multi-agent-systems-intro", category: "AI Agents Basics", excerpt: "Learn how to orchestrate teams of AI agents with CrewAI — roles, tasks, tools, and your first collaborative agent project.", readTime: "14 min read", date: "Feb 12, 2026", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80", featured: false, tags: ["CrewAI", "Multi-Agent", "LLM"] },
];

const tools = [
  { id: 1, name: "n8n", category: "Workflow Automation", description: "Open-source workflow automation with 400+ integrations. Self-hostable and infinitely extensible.", logo: "🔄", rating: 4.8, pricing: "Free (Self-hosted) / $20/mo Cloud", tags: ["Open Source", "No-Code", "Self-Host"], url: "https://n8n.io", featured: true },
  { id: 2, name: "Zapier", category: "Workflow Automation", description: "The easiest way to connect 6,000+ apps and automate your work without writing a single line of code.", logo: "⚡", rating: 4.6, pricing: "Free / From $19.99/mo", tags: ["Beginner Friendly", "Cloud", "No-Code"], url: "https://zapier.com", featured: true },
  { id: 3, name: "Make (Integromat)", category: "Workflow Automation", description: "Visual automation platform with powerful data transformation and complex scenario building.", logo: "🎨", rating: 4.5, pricing: "Free / From $9/mo", tags: ["Visual", "Advanced", "Cloud"], url: "https://make.com", featured: true },
  { id: 4, name: "LangChain", category: "AI Agent Framework", description: "The leading framework for building LLM-powered applications and autonomous AI agents.", logo: "🦜", rating: 4.7, pricing: "Open Source / Free", tags: ["Python", "LLM", "Agent Framework"], url: "https://langchain.com", featured: true },
  { id: 5, name: "CrewAI", category: "AI Agent Framework", description: "Framework for orchestrating role-playing, autonomous AI agents that work together as a crew.", logo: "🚀", rating: 4.6, pricing: "Open Source / Free", tags: ["Multi-Agent", "Python", "Orchestration"], url: "https://crewai.com", featured: false },
  { id: 6, name: "Activepieces", category: "Workflow Automation", description: "Open-source Zapier alternative. Beautiful UI, 100+ integrations, and self-hostable.", logo: "🧩", rating: 4.4, pricing: "Free (Self-hosted) / Cloud", tags: ["Open Source", "Alternative", "No-Code"], url: "https://activepieces.com", featured: false },
];

const resources = [
  { id: 1, title: "AI Agents Starter Kit", description: "Everything you need to launch your first AI agent.", type: "PDF Bundle", icon: "📦", downloads: "4.2k" },
  { id: 2, title: "n8n Workflow Templates Pack", description: "50 ready-to-import n8n workflows for common use cases.", type: "Template Pack", icon: "🔄", downloads: "8.7k" },
  { id: 3, title: "Automation ROI Calculator", description: "Calculate how much time your automations save per month.", type: "Spreadsheet", icon: "📊", downloads: "2.1k" },
  { id: 4, title: "AI Tools Comparison Cheatsheet", description: "Top 20 AI automation tools compared side by side.", type: "Cheatsheet", icon: "📋", downloads: "6.5k" },
  { id: 5, title: "Prompt Engineering for Agents", description: "Write prompts that make AI agents smarter and reliable.", type: "PDF Guide", icon: "✍️", downloads: "3.9k" },
  { id: 6, title: "Automation Career Roadmap 2026", description: "Full learning path from beginner to automation engineer.", type: "Roadmap PDF", icon: "🗺️", downloads: "5.3k" },
];

const videos = [
  { id: 1, title: "Build an AI Agent in 15 Minutes", videoId: "dQw4w9WgXcQ", duration: "15:42", views: "48K" },
  { id: 2, title: "n8n Crash Course for Beginners 2026", videoId: "dQw4w9WgXcQ", duration: "32:18", views: "127K" },
  { id: 3, title: "Zapier vs n8n: Which Is Better?", videoId: "dQw4w9WgXcQ", duration: "22:05", views: "89K" },
];

const categories = [
  { name: "AI Agents Basics", count: 12 },
  { name: "Automation Tutorials", count: 28 },
  { name: "Workflow Projects", count: 15 },
  { name: "AI Tools Reviews", count: 20 },
  { name: "Tech Career Guides", count: 9 },
];

// ─── Routes ───────────────────────────────────────────────────────────────────

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/posts', (req, res) => {
  const { category, featured, limit } = req.query;
  let result = [...posts];
  if (category) result = result.filter(p => p.category === category);
  if (featured === 'true') result = result.filter(p => p.featured);
  if (limit) result = result.slice(0, parseInt(limit));
  res.json({ posts: result, total: result.length });
});

app.get('/api/posts/:slug', (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

app.get('/api/tools',      (req, res) => res.json({ tools, total: tools.length }));
app.get('/api/resources',  (req, res) => res.json({ resources, total: resources.length }));
app.get('/api/videos',     (req, res) => res.json({ videos }));
app.get('/api/categories', (req, res) => res.json({ categories }));
app.get('/api/stats',      (req, res) => res.json({ articles: posts.length, tools: tools.length, resources: resources.length, subscribers: 12847 }));

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'Valid email required' });
  console.log('New subscriber:', email);
  res.json({ success: true, message: "You're subscribed! Welcome to AgentNexus." });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message are required' });
  console.log('Contact from:', name, email);
  res.json({ success: true, message: "Thanks! We'll get back to you soon." });
});

app.listen(PORT, () => console.log(`AgentNexus API running on port ${PORT}`));
