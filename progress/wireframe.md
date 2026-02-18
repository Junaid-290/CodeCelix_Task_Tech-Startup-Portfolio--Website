# Tech Startup Portfolio Website - Wireframe Document

## Project Overview
- **Project Name:** NexaFlow AI Portfolio
- **Type:** Single-page website (MERN Stack)
- **Current Route:** `/` and `/contact` both render Contact page

---

## Page Structure

### 1. Loading Screen (Initial View)
```
┌─────────────────────────────────────────┐
│                                         │
│            [Animated Logo]              │
│                                         │
│            NexaFlow ...                 │
│                                         │
│         [████████████] 100%             │
│                                         │
└─────────────────────────────────────────┘
```

### 2. Main Page Layout
```
┌─────────────────────────────────────────┐
│  [Logo]  Home About Services  [Get      │  <- Sticky Navbar
│           Blog Contact     Started]      │
├─────────────────────────────────────────┤
│                                         │
│            GET IN TOUCH                 │  <- Badge
│                                         │
│      LET'S CREATE                      │  <- Hero Title
│      SOMETHING EXTRAORDINARY            │
│                                         │
│  Have a vision? Let's bring it to      │  <- Description
│  life. Our team of experts is ready    │
│  to transform your ideas into reality. │
│                                         │
│         [ START A PROJECT ]             │  <- CTA Button
│                                         │
│              ↓ Scroll                   │  <- Scroll Indicator
├─────────────────────────────────────────┤
│  SAY HELLO    │  ┌─────────────────┐   │
│                │  │ Name *          │   │
│  We'd love    │  │ Email *         │   │
│  to hear...   │  │ Company         │   │
│                │  │ Service         │   │
│  ┌──────────┐ │  │ Message *       │   │
│  │ 📧 Email │ │  │                 │   │
│  └──────────┘ │  │ [SEND MESSAGE] │   │
│  ┌──────────┐ │  └─────────────────┘   │
│  │ 📍 Lahore│ │                         │
│  └──────────┘ │                         │
│  ┌──────────┐ │                         │
│  │ ⏱ 24hrs │ │                         │
│  └──────────┘ │                         │
├─────────────────────────────────────────┤
│         📍 Lahore, Pakistan            │  <- Map Section (Compact)
├─────────────────────────────────────────┤
│  NEXAFLOW  │ Company │ Services │Legal  │  <- Footer
│  [Desc]    │ About   │ AI Sol.  │Privacy│
│  [Social]  │ Careers │ Automation│Terms │
│            │ Blog    │ ML        │Cookies│
│            │ Press   │ Analytics │Security│
│  © 2026 NexaFlow AI. All rights         │
│  Powered by Innovation • Driven by Excel │
└─────────────────────────────────────────┘
```

---

## Component Specifications

### Navbar
- **Position:** Fixed top
- **Background:** Transparent → Dark glass on scroll
- **Logo:** Left-aligned with gradient icon
- **Links:** Home, About, Services, Case Studies, Blog, Contact
- **CTA:** "Get Started" button (right-aligned)
- **Mobile:** Hamburger menu

### Hero Section
- **Background:** #5F6F52 (Dark Sage Green)
- **Elements:** Animated grid, floating orbs
- **Typography:** Large bold title with clamp()
- **Animation:** Staggered fade-in

### Contact Form Section
- **Layout:** 2-column grid (info + form)
- **Form Fields:** Name, Email, Company, Service (dropdown), Message
- **Validation:** Client-side with error states
- **Submit:** Loading state with spinner

### Footer
- **Layout:** 5-column grid (brand + 4 link sections)
- **Sections:** Company, Services, Resources, Legal
- **Social:** Twitter, LinkedIn, GitHub, YouTube

---

## Color Palette
- **Primary Background:** #0A0A0A (Dark)
- **Hero Background:** #5F6F52 (Dark Sage)
- **Accent:** #A9B388 (Olive Green)
- **Text Light:** #FEFAE0 (Cream)
- **Secondary Accent:** #B99470 (Terracotta)

---

## Responsive Breakpoints
- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

---

## Current Routes
| Route | Component |
|-------|-----------|
| `/` | Contact (Home) |
| `/contact` | Contact |

---

## Documentation
- [Day 1 - Research](day-1-research.md)
- [Day 2 - Wireframe](day-2-wireframe.md)
- [Day 3 - UI Design](day-3-ui-design.md)
- [Day 4 - Animations](day-4-animations.md)
- [Day 5 - Final](day-5-final.md)
