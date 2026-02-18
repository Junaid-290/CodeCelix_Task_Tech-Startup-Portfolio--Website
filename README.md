# NexaFlow AI - Tech Startup Portfolio Website

**MERN Stack Project**  
**Team Member: M. Junaid Akbar**  
**Role: Research + UX + Design + Prototype of Contact page**

---

## 🏗️ MERN Stack Architecture

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

## 📋 M. Junaid Akbar's Deliverables

### ✅ 1. Sitemap (Information Architecture)
- Full site structure: Home → About → Services → Case Studies → Blog → Contact

### ✅ 2. Contact Form Flow
- Complete form with validation
- Fields: Name, Email, Company, Service, Message

### ✅ 3. Contact Page (Wireframe + High-Fidelity UI)
- Modern dark theme with gradient accents
- Fully responsive design

### ✅ 4. Contact Page Animations
- Scroll-triggered animations
- Form feedback with loading states
- Button hover effects

### ✅ 5. Navbar + Sticky Animation
- Sticky navigation with backdrop blur
- Mobile responsive hamburger menu

### ✅ 6. Footer Design
- Full sitemap links
- Social media integration

### ✅ 7. Loading Animation
- Logo animation with progress bar

---

## 🚀 Quick Start

### Option 1: Run Both (Frontend + Backend)
```bash
# From project root
npm run dev
```
This runs both React (port 3000) and Express API (port 5000)

### Option 2: Run Frontend Only
```bash
cd client
npm run dev
```
Opens at http://localhost:3000

### Option 3: Run Backend Only
```bash
cd server
npm run dev
```
API runs at http://localhost:5000

---

## 📁 Project Structure (MERN)

```
tech-startup-portfolio/
├── client/                    # REACT Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx    # Navigation + Sitemap
│   │   │   ├── Footer.jsx    # Footer
│   │   │   └── Loading.jsx   # Loading Animation
│   │   ├── pages/
│   │   │   └── Contact.jsx   # Contact Page
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # EXPRESS Backend
│   ├── routes/
│   │   └── contact.js        # Contact API Endpoint
│   ├── index.js              # Server entry
│   └── package.json
│
└── package.json               # Root (runs both)
```

---

## 🔌 API Endpoints (Express)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all submissions |
| GET | `/api/health` | Health check |

---

## 🎨 Tech Stack

- **M**ongoDB - Database
- **E**xpress.js - Backend framework
- **R**eact 18 - Frontend library
- **N**ode.js - JavaScript runtime

### Additional:
- **Vite** - Build tool
- **Framer Motion** - Animations
- **React Router** - Routing

---

## 📱 Features

### Responsive Design
- Mobile: < 640px
- Tablet: 640px - 1023px  
- Desktop: ≥ 1024px

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus states
- Reduced motion support

### Animations
- Navbar sticky with blur
- Loading animation
- Scroll triggers
- Hover effects

---

## ⚠️ Important: How to Run

**DO NOT** open `index.html` directly in browser!

You MUST run the development server:

```bash
# Terminal command to run:
npm run dev
```

Then open: **http://localhost:3000**

---

## 📦 Dependencies

### Frontend (client/)
- react, react-dom
- framer-motion (animations)
- react-router-dom

### Backend (server/)
- express
- mongoose (MongoDB)
- cors
- dotenv

---

**Built with ❤️ using MERN Stack**
