# React Admin Dashboard

This is a fully Dockerized React Admin Dashboard built with Vite, React, and TypeScript. It includes routing, mock authentication, context-based theme/profile management, chart visualizations, and mock API integrations.

---

## ✨ Features

- 🔐 **Mock Authentication** using localStorage token
- 🧭 **React Router v6+** for route-based navigation
- 📊 **Recharts** for data visualizations (Line and Bar charts)
- 👥 **Users Page** with data from JSONPlaceholder, add/search/sort capabilities
- ⚙️ **Settings Page** with dark mode toggle and profile update form
- 🎨 **Dark Mode** preference stored in localStorage
- 🧠 **State Management** using Context API for theme and profile
- 🐳 **Dockerized**: Build and serve via Docker + Nginx
- 🧹 **Clean, modular, scalable codebase**

---

## 📁 Project Structure

```bash
src/
├── assets/               # Icons, PNGs, SVGs
│   ├── icons/
│   ├── png/
│   └── svg/
├── components/           # Reusable UI components (Card, GraphCard, etc.)
├── context/              # Context for dark mode and profile form
├── layouts/              # Main layout wrapper (MainLayout.tsx)
├── pages/                # Login, Dashboard, Users, Settings
├── routes/               # Route configuration and PrivateRoute
├── services/             # authService.ts, apiService.ts
├── App.tsx
└── main.tsx


---

## 🚀 Running Locally

### 1. Development (Vite)
```bash
npm install
npm run dev
