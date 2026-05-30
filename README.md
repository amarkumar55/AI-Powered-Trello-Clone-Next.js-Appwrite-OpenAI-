# 🧠 AI-Powered Trello Clone
### Next.js 13.4 · OpenAI · Appwrite Cloud · Zustand · Drag-and-Drop · TypeScript

![Next.js](https://img.shields.io/badge/Next.js-13.4_App_Router-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT_API-412991?style=flat-square&logo=openai)
![Appwrite](https://img.shields.io/badge/Appwrite-Cloud_Backend-FD366E?style=flat-square&logo=appwrite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Educational-lightgrey?style=flat-square)

> A Kanban task manager with AI-powered board summarization — drag tasks across stages, and OpenAI automatically analyzes the board state and surfaces insights about pending work, blockers, and progress in real time.

---

## 🤖 What Makes This Different from a Standard Trello Clone

Most Trello clones stop at drag-and-drop. This one integrates OpenAI to analyze the board state on every change — summarizing pending tasks, flagging in-progress items, and providing context-aware productivity insights without any manual input.

---

## 🏗️ Architecture

```
User drags / updates task
        │
        ▼
Zustand Store            ← Local state update, instant UI response
        │
        ▼
Appwrite Cloud           ← Persists task to DB, updates collection
        │
        ▼
OpenAI API               ← Receives board state, generates summary
        │
        ▼
Board Summary Panel      ← AI insights rendered in real time
```

**Why Zustand over Redux?** Lightweight, no boilerplate, works cleanly with Next.js App Router — ideal for local board state that doesn't need a full Redux setup.

**Why Appwrite?** BaaS (Backend-as-a-Service) with auth, database, and storage in one — removes the need for a custom backend while maintaining production-grade cloud infrastructure.

---

## ✨ Features

- 🗂️ Four-stage Kanban board — To-Do · In Progress · Review · Done
- 🤖 AI board summarization — OpenAI analyzes board state on every change
- 🧠 Context-aware insights — pending tasks, blockers, completed work highlighted
- 🔄 Drag-and-drop — reorder and move tasks via `react-beautiful-dnd`
- 🔐 Authentication — Appwrite Cloud auth
- ☁️ Cloud persistence — Appwrite database + storage
- 📱 Fully responsive — Tailwind CSS

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 13.4 (App Router) | SSR, routing, API |
| Language | TypeScript | Type safety |
| State | Zustand | Lightweight client state |
| Drag & Drop | react-beautiful-dnd | Task reordering |
| Backend | Appwrite Cloud | Auth, DB, storage |
| AI | OpenAI API | Board summarization |
| Styling | Tailwind CSS · Heroicons | UI components |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/amarskdev/AI-Powered-Trello-Clone-Next.js-Appwrite-OpenAI-
cd tello

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
# Appwrite
NEXT_PUBLIC_PROJECT_ID=your_appwrite_project_id
NEXT_PUBLIC_DB_ID=your_database_id
NEXT_PUBLIC_TODO_COLLECTION_ID=your_todo_collection_id
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_STORAGE_ID=your_storage_bucket_id

# OpenAI
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

### Appwrite Setup

1. Create an account at [appwrite.io](https://appwrite.io)
2. Create a project → database → collections → storage bucket
3. Copy IDs into `.env.local`

```bash
# Run the development server
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
app/
├── components/       # BoardColumn, TaskCard, AISummary, Modal
├── hooks/            # Custom hooks for Appwrite + board logic
├── store/            # Zustand board state store
├── utils/            # OpenAI integration, helpers
└── styles/           # Global CSS
```

---

## 🌍 Use Cases

- Personal task management with AI productivity insights
- Team Kanban boards with automated status summaries
- AI-assisted planning and sprint tracking
- OpenAI + Next.js integration reference implementation

---

## 🔭 Roadmap

- [ ] Multi-board support
- [ ] Team collaboration with real-time updates (Pusher)
- [ ] AI task prioritization suggestions
- [ ] Due dates and deadline alerts
- [ ] Mobile app (React Native)

---

## 🤝 Connect With Me

---

<div align="center">

### 👤 About the Author

**Amar Kumar**  
*Senior Backend Engineer · IBM Certified AI Engineer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-amarskdev-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amarskdev)
[![GitHub](https://img.shields.io/badge/GitHub-amarskdev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/amarskdev)
[![Gmail](https://img.shields.io/badge/Gmail-amarsk.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:amarsk.dev@gmail.com)
[![LeetCode](https://img.shields.io/badge/LeetCode-amarskdev-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](https://leetcode.com/u/amarskdev)
[![Instagram](https://img.shields.io/badge/Instagram-amarsk.dev-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/amarsk.dev/)
[![Credly](https://img.shields.io/badge/Credly-Badges-FF6B00?style=for-the-badge&logo=credly&logoColor=white)](https://www.credly.com/users/amarskdev/)

*If you found this project useful, consider giving it a ⭐ — it means a lot!*

</div>

---

*Kanban meets GPT — board state analyzed automatically, so you focus on shipping not status updates.*
