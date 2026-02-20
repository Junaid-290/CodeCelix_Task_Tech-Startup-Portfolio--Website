# Tech Startup Portfolio Website

**MERN Stack Project**  
**Developer: M. Junaid Akbar**

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    MERN STACK                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌─────────┐    ┌─────────┐    ┌─────────────┐      │
│   │  React  │───▶│ Express │───▶│  MongoDB    │      │
│   │(Frontend)│◀───│ (API)   │◀───│ (Database)  │      │
│   └─────────┘    └─────────┘    └─────────────┘      │
│        │                                        │      │
│        │         ┌─────────┐                     │      │
│        └────────│  Node   │◀────────────────────┘      │
│                 └─────────┘                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
tech-startup-portfolio/
├── .gitignore
├── package.json               # Root - runs both client & server
├── README.md
├── WIRE FRAME.svg            # Visual sitemap
│
├── client/                    # React Frontend (Vite)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── Navbar.css
│       │   ├── Footer.jsx
│       │   ├── Footer.css
│       │   ├── Loading.jsx
│       │   └── Loading.css
│       └── pages/
│           ├── Contact.jsx
│           └── Contact.css
│
└── server/                    # Express Backend
    ├── package.json
    ├── index.js
    └── routes/
        └── contact.js
```

---

## 🚀 Quick Start

### Run Both (Frontend + Backend)
```bash
npm run dev
```
- React: http://localhost:3000
- Express API: http://localhost:5000

### Run Frontend Only
```bash
cd client
npm run dev
```

### Run Backend Only
```bash
cd server
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all submissions |
| GET | `/api/health` | Health check |

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Router** - Routing

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime
- **MongoDB** - Database (via Mongoose)
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

---

## ✨ Features

### UI Components
- Responsive Navbar with sticky animation
- Mobile hamburger menu
- Loading screen with progress animation
- Footer with sitemap links
- Contact page with form validation

### Animations
- Scroll-triggered animations
- Button hover effects
- Form feedback with loading states
- Navbar backdrop blur

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus states
- Reduced motion support

---

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1023px  
- Desktop: ≥ 1024px

---

## 📦 Dependencies

### Frontend (`client/`)
```json
{
  "framer-motion": "^10.16.16",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.21.1"
}
```

### Backend (`server/`)
```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "mongoose": "^8.0.3"
}
```

---

## ⚠️ Important

**DO NOT** open `index.html` directly in browser!

You MUST run the development server:
```bash
npm run dev
```
Then open: **http://localhost:3000**

---

**Built with ❤️ using MERN Stack**
