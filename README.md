# AgentNexus

 A free, beginner-friendly website to learn AI agents and automation. Covers n8n, Zapier, Make, LangChain & more through simple tutorials, tool reviews, step-by-step projects, and free downloadable resources. Built with React + Node.js. Made by a student, for students.

---

## What is AgentNexus?

AgentNexus is a student project built to help beginners learn AI agents and automation tools through practical, plain-English tutorials. No jargon, no prior experience required — just clear guides written by someone who learned it all step by step.

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero, featured articles, tools, YouTube tutorials, free resources |
| **Blog** | Searchable articles with category filters |
| **AI Tools** | Honest reviews of n8n, Zapier, Make, LangChain, CrewAI and more |
| **Tutorials** | Step-by-step guides filtered by level and tool |
| **Resources** | Free downloadable templates, cheatsheets, and roadmaps |
| **About** | The story behind the project |
| **Contact** | Get in touch |

---

## Tech Stack

- **Frontend** — React 18, Vite 5, React Router 6
- **Backend** — Node.js, Express 4
- **Styling** — Pure CSS with CSS variables (no frameworks)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/agentnexus.git
cd agentnexus
```

### 2. Start the backend

```bash
cd backend
npm install
npm run dev
# Runs on http://localhost:3001
```

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

Open `http://localhost:5173` in your browser.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/posts` | All blog posts |
| GET | `/api/tools` | All AI tools |
| GET | `/api/resources` | Free resources |
| GET | `/api/categories` | Blog categories |
| POST | `/api/subscribe` | Newsletter signup |
| POST | `/api/contact` | Contact form |

---

## Project Structure

```
agentnexus/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   └── vite.config.js
└── README.md
```

---

## License

MIT — free to use, fork, and learn from.

---

Made with care by a student, for students.
