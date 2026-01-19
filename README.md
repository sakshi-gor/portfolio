# Sakshi Gor - Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and experience as a Data Science Developer specializing in NLP, ML, and GenAI.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Live Preview

Visit the portfolio at the published URL once deployed.

---

## Table of Contents 📜

- [Design](#design-)
  - [Fonts](#fonts)
  - [Color Scheme](#color-scheme)
  - [Visual Theme](#visual-theme)
- [Built With](#built-with-)
- [How to Run Locally?](#how-to-run-locally-)
- [Sections](#sections-)
- [Folder Structure](#folder-structure-)
- [Features](#features-)
- [Connect With Me](#connect-with-me-)
- [License](#license-)

---

## Design 🎨

### Fonts

- **System Font Stack** - Clean, performant typography using native system fonts
- **Monospace** - Terminal-inspired code snippets using `font-mono`

### Color Scheme

#### Light Mode

| Color | Usage |
|-------|-------|
| **Slate 50** | Background |
| **Slate 900** | Primary Text |
| **Blue 600** | Accent/Links |
| **Slate 100** | Card Backgrounds |

#### Dark Mode

| Color | Usage |
|-------|-------|
| **Slate 950** | Background |
| **Slate 50** | Primary Text |
| **Blue 400** | Accent/Links |
| **Slate 800/900** | Card Backgrounds |

### Visual Theme

- **Terminal Aesthetic** - Console-style headers (e.g., `$ cat skills.json`, `$ git log`)
- **Glassmorphism** - Frosted glass card effects with backdrop blur
- **Interactive Particles** - Canvas-based particle network responding to mouse movement
- **Smooth Animations** - Subtle hover states and transitions throughout

---

## Built With 📦

### Core Technologies

- 💙 [React](https://reactjs.org/) - UI framework for building component-based interfaces
- 💜 [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript for better DX
- 💙 [Vite](https://vitejs.dev/) - Next-generation frontend build tool
- 💜 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### UI Components & Styling

- 💙 [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed, accessible components
- 💜 [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- 💙 [Lucide React](https://lucide.dev/) - Beautiful & consistent icon library
- 💜 [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) - Animation utilities

### Functionality

- 💙 [EmailJS](https://www.emailjs.com/) - Contact form email delivery without backend
- 💜 [React Router](https://reactrouter.com/) - Client-side routing
- 💙 [React Hook Form](https://react-hook-form.com/) - Performant form handling
- 💜 [Zod](https://zod.dev/) - TypeScript-first schema validation

### Development Tools

- 💙 [ESLint](https://eslint.org/) - Code linting and quality
- 💜 [PostCSS](https://postcss.org/) - CSS processing

---

## How to Run Locally? 🎯

Make sure you have [Node.js](https://nodejs.org/en/) (v18+) and [git](https://git-scm.com/) installed.

```bash
# Verify installations
node --version
git --version
```

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/sakshi-gor/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at [http://localhost:8080](http://localhost:8080)

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## Sections 🔖

| Section | Description |
|---------|-------------|
| **Hero** | Interactive landing with particle network, role title, and CTAs |
| **About** | Professional summary with key statistics |
| **Skills** | Categorized technical skills with terminal-style display |
| **Projects** | Featured work with descriptions and links |
| **Experience** | Work history timeline with achievements |
| **Contact** | Email form with EmailJS integration + social links |

---

## Folder Structure 📂

```
portfolio/
├── public/
│   ├── robots.txt
│   └── Sakshi_Gor_Resume.docx
├── workflows/
│   ├── deploy.yml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── About.tsx              # About section
│   │   ├── Contact.tsx            # Contact form
│   │   ├── Experience.tsx         # Work experience timeline
│   │   ├── Hero.tsx               # Landing section
│   │   ├── Navigation.tsx         # Header navigation
│   │   ├── ParticleNetwork.tsx    # Interactive background
│   │   ├── Projects.tsx           # Project showcase
│   │   └── Skills.tsx             # Skills display
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile detection hook
│   │   └── use-toast.ts           # Toast notifications
│   ├── lib/
│   │   └── utils.ts               # Utility functions (cn)
│   ├── pages/
│   │   ├── Index.tsx              # Main page layout
│   │   └── NotFound.tsx           # 404 page
│   ├── App.tsx                    # App entry with routing
│   ├── App.css                    # Global styles
│   ├── index.css                  # Tailwind & design tokens
│   └── main.tsx                   # React DOM entry
├── index.html                     # HTML template
├── tailwind.config.ts             # Tailwind configuration
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies & scripts
```

---

## Features ✨

| Feature | Implementation |
|---------|----------------|
| **Interactive Particle Network** | Canvas-based animation with mouse tracking using `requestAnimationFrame` |
| **Dark/Light Mode** | Theme toggle with `document.documentElement.classList` and localStorage persistence |
| **Responsive Design** | Mobile-first approach with Tailwind breakpoints (`sm`, `md`, `lg`, `xl`) |
| **Contact Form** | EmailJS integration for serverless email delivery |
| **Smooth Scrolling** | Native `scrollIntoView` with `behavior: 'smooth'` |
| **Glassmorphism Cards** | `backdrop-blur` and semi-transparent backgrounds |
| **Terminal UI Elements** | Monospace fonts and console-style section headers |

---

## Connect With Me 📫

- **GitHub**: [github.com/sakshi-gor](https://github.com/sakshi-gor)
- **LinkedIn**: [linkedin.com/in/sakshi-gor](https://www.linkedin.com/in/sakshi-gor/)
- **WordPress**: [sakshigor.wordpress.com](https://sakshigor.wordpress.com/)
- **Email**: sakshigor249@gmail.com

---

## License 📝

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ using React, TypeScript, and Tailwind CSS</p>
