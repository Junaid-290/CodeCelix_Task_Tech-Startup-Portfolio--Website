# Day 2: Wireframing

## 🎯 Objectives
- Create low-fidelity wireframes
- Define layout structure
- Plan component hierarchy
- Design user flow

---

## 📐 Contact Page Wireframe

### Layout Structure

```
┌─────────────────────────────────────────────┐
│              NAVBAR (Sticky)                │
├─────────────────────────────────────────────┤
│                                             │
│           HERO SECTION                      │
│   ┌─────────────────────────────────┐      │
│   │  "Let's Connect & Build          │      │
│   │   Something Amazing"            │      │
│   │                                 │      │
│   │  [Get in Touch Badge]           │      │
│   └─────────────────────────────────┘      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   ┌──────────────┐  ┌──────────────────┐   │
│   │ CONTACT INFO │  │   CONTACT FORM    │   │
│   │              │  │                  │   │
│   │ 📧 Email     │  │ [Name]  [Email]  │   │
│   │ 📍 Location  │  │ [Company][Service]│   │
│   │ ⏱️ Response  │  │ [Message Area]    │   │
│   │              │  │                  │   │
│   │              │  │ [Send Button]    │   │
│   └──────────────┘  └──────────────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│              MAP SECTION                    │
│         "Lahore, Pakistan"                  │
│                                             │
├─────────────────────────────────────────────┤
│                  FOOTER                     │
└─────────────────────────────────────────────┘
```

---

## 🔧 Component Breakdown

### 1. Navbar Component
- Logo (left)
- Navigation links (center)
- CTA button (right)
- Mobile hamburger menu

### 2. Hero Section
- Badge/tagline
- Main headline
- Subtitle description
- Floating particles background

### 3. Contact Info Card
- Email method
- Location method (Lahore, Pakistan)
- Response time method

### 4. Contact Form
- Name field (required)
- Email field (required, validated)
- Company field (optional)
- Service dropdown (optional)
- Message textarea (required)
- Submit button

### 5. Map Section
- Location display
- Placeholder map visual

---

## 🎨 Design Decisions

### Responsive Breakpoints
- **Mobile:** < 640px (single column)
- **Tablet:** 640px - 1023px (adjusted spacing)
- **Desktop:** ≥ 1024px (two-column layout)

### Accessibility Considerations
- ARIA labels on all inputs
- Error messages with role="alert"
- Focus states on all interactive elements
- Keyboard navigation support

---

## ✅ Day 2 Deliverables

- [x] Low-fidelity wireframe created
- [x] Component hierarchy defined
- [x] Layout structure planned
- [x] User flow documented

---

## 📝 Wireframe Visual Description

The wireframe follows a clean, centered layout with:
1. **Hero** taking 40% viewport height for impact
2. **Two-column** contact section (info left, form right)
3. **Full-width** map section at bottom
4. **Sticky navbar** throughout scroll

This ensures users can:
- Quickly understand the page purpose
- Find contact information easily
- Complete the form with minimal friction
