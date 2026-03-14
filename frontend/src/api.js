// Automatically uses your Render backend URL in production
// and localhost in development

const BASE = import.meta.env.VITE_API_URL 

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const api = {
  getPosts:    (params = '') => apiFetch(`/api/posts${params}`),
  getTools:    ()            => apiFetch('/api/tools'),
  getResources:()            => apiFetch('/api/resources'),
  getVideos:   ()            => apiFetch('/api/videos'),
  getCategories:()           => apiFetch('/api/categories'),
  getStats:    ()            => apiFetch('/api/stats'),
  subscribe:   (email)       => apiFetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) }),
  contact:     (data)        => apiFetch('/api/contact',   { method: 'POST', body: JSON.stringify(data) }),
}
