<div align="center">

# ✨ Dynamic Modern Developer Portfolio

A sleek, hyper-performant, and visually stunning developer portfolio built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Designed with a **100% data-driven architecture** — customize the entire portfolio (bio, projects, skills, experience, achievements, and contacts) simply by updating a single JSON file in `src/data/` without touching component code!

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v14-black?style=for-the-badge&logo=framer&logoColor=0055FF)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[Live Demo](#) · [Report Bug](https://github.com/dikshant261/myportfolio/issues) · [Request Feature](https://github.com/dikshant261/myportfolio/issues)

</div>

---

## 📑 Table of Contents

- [🌟 Key Features](#-key-features)
- [🏗️ How It Works (Architecture)](#️-how-it-works-architecture)
- [⚙️ Installation & Setup Commands](#️-installation--setup-commands)
- [🛠️ How to Customize via Data Folder](#️-how-to-customize-via-data-folder)
  - [1. Personal Info (`personalInfo`)](#1-personal-info-personalinfo)
  - [2. Hero Section (`hero`)](#2-hero-section-hero)
  - [3. Skills & Tech Stack (`skills`)](#3-skills--tech-stack-skills)
  - [4. Work Experience (`experience`)](#4-work-experience-experience)
  - [5. Featured Projects (`projects`)](#5-featured-projects-projects)
  - [6. Hackathons & Awards (`achievements`)](#6-hackathons--awards-achievements)
  - [7. Services Offered (`services`)](#7-services-offered-services)
  - [8. Contact & Socials (`contact`)](#8-contact--socials-contact)
- [🖼️ Managing Static Assets (Images & Resume)](#️-managing-static-assets-images--resume)
- [📁 Folder Structure](#-folder-structure)
- [🚢 Build & Deployment](#-build--deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Key Features

- **⚡ 100% Data-Driven:** Modify your bio, skills, projects, and work history from `src/data/portfolio.json` without modifying any React components.
- **🎨 Modern Glassmorphism & Cyber Aesthetics:** Ambient interactive background glow, frosted glass cards, and micro-interactions.
- **🌗 Dark / Light Mode Support:** Smooth theme switching with persistent user preference.
- **📱 Fully Responsive:** Carefully optimized for mobile phones, tablets, laptops, and ultra-wide displays.
- **🪄 Fluid Animations:** Powered by `framer-motion` for smooth scroll entrances and interactive button states.
- **🔍 Project Filtering:** Interactive category filters (`Full Stack`, `Frontend`, etc.) with modal/video preview support.
- **🛡️ Strict Type Safety:** All portfolio data is strictly validated with TypeScript interfaces in `src/types/portfolio.ts`.
- **⚡ Supercharged Tooling:** Vite 8 HMR + Oxlint for instant reloads and ultra-fast build times.

---

## 🏗️ How It Works (Architecture)

This portfolio separates **content** from **presentation**:

```
 ┌────────────────────────────────────────┐
 │       src/data/portfolio.json          │ ◄─── YOU EDIT THIS FILE
 └───────────────────┬────────────────────┘
                     │ Imports typed data
                     ▼
 ┌────────────────────────────────────────┐
 │           src/App.tsx                  │ ◄─── Validates types with
 └───────────────────┬────────────────────┘      src/types/portfolio.ts
                     │ Distributes props
                     ▼
  ┌───────────┬───────────┬───────────┬───────────┬───────────┐
  ▼           ▼           ▼           ▼           ▼           ▼
Navbar      Hero        About      Skills    Projects    Experience...
```

1. All information is stored as structured JSON in [`src/data/portfolio.json`](src/data/portfolio.json).
2. TypeScript interfaces in [`src/types/portfolio.ts`](src/types/portfolio.ts) guarantee type safety and auto-completion.
3. [`src/App.tsx`](src/App.tsx) imports the JSON data and feeds each section's data into its respective component (`<Hero />`, `<Projects />`, `<Skills />`, etc.).
4. Media files (profile photo, resume PDF, project screenshots) live inside the [`public/`](public/) folder and are referenced by path (e.g., `"/profile.png"`).

---

## ⚙️ Installation & Setup Commands

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version **18.x** or **20.x+** recommended)
- [npm](https://www.npmjs.com/) (or yarn / pnpm)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/dikshant261/myportfolio.git
cd myportfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port displayed in your terminal). Any change you save in `src/data/portfolio.json` will trigger instant Hot Module Replacement (HMR).

### 4. Code Quality & Linting
Run Oxlint to check code quality:
```bash
npm run lint
```

### 5. Production Build
Compile TypeScript and generate an optimized production bundle:
```bash
npm run build
```

### 6. Preview Production Build
Preview the generated `dist/` directory locally:
```bash
npm run preview
```

---

## 🛠️ How to Customize via Data Folder

To customize this portfolio for yourself, you only need to edit **[`src/data/portfolio.json`](src/data/portfolio.json)**. Here is an overview of every section:

### 1. Personal Info (`personalInfo`)
Located at the top of `src/data/portfolio.json`:

```json
"personalInfo": {
  "name": "Your Name",
  "profession": "Full Stack Developer",
  "tagline": "Building modern, scalable and user-focused web applications.",
  "location": "City, Country",
  "email": "yourname@example.com",
  "phone": "+1 234 567 8900",
  "linkedin": "https://linkedin.com/in/yourusername",
  "github": "https://github.com/yourusername",
  "twitter": "https://x.com/yourusername",
  "resume": "/Your_Resume.pdf",
  "profileImage": "/profile.png",
  "about": "A concise summary of who you are, what you specialize in, and what drives you.",
  "stats": [
    { "label": "Projects Built", "value": "10+" },
    { "label": "Years Experience", "value": "2+" },
    { "label": "Hackathon Wins", "value": "1" },
    { "label": "Client Satisfaction", "value": "100%" }
  ]
}
```

---

### 2. Hero Section (`hero`)
Controls the main landing viewport:

```json
"hero": {
  "greeting": "Hi, I'm",
  "headline": "Your Name",
  "subHeadline": "Full Stack Developer & Cloud Engineer",
  "description": "I craft clean, scalable, and interactive digital products with modern web architecture and resilient engineering.",
  "primaryButton": "View My Work",
  "secondaryButton": "Contact Me",
  "statusText": "Available for new projects & opportunities",
  "statusAvailable": true
}
```

---

### 3. Skills & Tech Stack (`skills`)
Add, modify, or categorize your skills. Categories commonly used: `Frontend`, `Backend`, `Database`, `Tools`.

```json
"skills": [
  {
    "name": "React.js",
    "category": "Frontend",
    "level": "Advanced",
    "icon": "react"
  },
  {
    "name": "Node.js",
    "category": "Backend",
    "level": "Advanced",
    "icon": "node"
  },
  {
    "name": "PostgreSQL",
    "category": "Database",
    "level": "Intermediate",
    "icon": "postgresql"
  }
]
```

> 💡 **Available Icons**: The built-in icon renderer (`src/components/SkillIcon.tsx`) automatically matches keywords like `react`, `typescript`, `javascript`, `tailwind`, `node`, `express`, `mongo`, `postgres`, `sql`, `prisma`, `docker`, `git`, `postman`, `api`, `html`, and `css`.

---

### 4. Work Experience (`experience`)
Chronological record of your work history or freelance engagements:

```json
"experience": [
  {
    "jobProfile": "Software Developer",
    "companyName": "Company Name",
    "startDate": "Aug 2024",
    "endDate": "Present",
    "location": "Remote / On-site",
    "description": [
      "Engineered high-performance web applications using React and TypeScript.",
      "Optimized API queries reducing load latency by 35%.",
      "Collaborated in an agile cross-functional engineering team."
    ],
    "technologies": ["React", "TypeScript", "Node.js", "Tailwind CSS"]
  }
]
```

---

### 5. Featured Projects (`projects`)
Add your case studies and apps. You can mark specific projects as `featured: true` to give them prominence:

```json
"projects": [
  {
    "projectName": "My Awesome Project",
    "shortDescription": "A quick 1-sentence summary of what this application does.",
    "description": "An in-depth explanation of the architecture, key problems solved, and highlights of the product.",
    "technologies": ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    "projectLink": "https://your-live-demo.com",
    "githubLink": "https://github.com/yourusername/project-repo",
    "image": "/projects/preview-image.png",
    "featured": true,
    "category": "Full Stack"
  }
]
```

---

### 6. Hackathons & Awards (`achievements`)
Showcase your competition awards, hackathon rankings, and recognitions:

```json
"achievements": [
  {
    "title": "Hackathon Champion",
    "organization": "National Tech Fest",
    "description": "Secured 1st place among 150+ teams by creating an AI-assisted application.",
    "date": "May, 2025",
    "awardType": "1st Place Winner"
  }
]
```

---

### 7. Services Offered (`services`)
Outline the development services or freelance offerings you provide:

```json
"services": [
  {
    "title": "Frontend Engineering",
    "description": "High-performance, accessible, and responsive user interfaces with modern CSS.",
    "icon": "layout"
  },
  {
    "title": "Backend & API Architecture",
    "description": "Robust RESTful APIs built with Node.js and Express.",
    "icon": "server"
  }
]
```

---

### 8. Contact & Socials (`contact`)
Configure the text displayed on your contact card:

```json
"contact": {
  "heading": "Let's Build Something Exceptional Together",
  "description": "Have an exciting project, a role to discuss, or just want to chat? Reach out anytime.",
  "email": "yourname@example.com",
  "phone": "+1 234 567 8900",
  "location": "Available Worldwide / Remote"
}
```

---

## 🖼️ Managing Static Assets (Images & Resume)

All static files are stored in the root [`public/`](public/) directory and served at the root URL path:

| File Type | Storage Location | Referenced In `portfolio.json` |
| :--- | :--- | :--- |
| **Profile Photo** | `public/profile.png` | `"profileImage": "/profile.png"` |
| **Resume PDF** | `public/My_Resume.pdf` | `"resume": "/My_Resume.pdf"` |
| **Project Images** | `public/projects/my-app.png` | `"image": "/projects/my-app.png"` |
| **Project Videos** | `public/projects/demo.mp4` | `"projectLink": "/projects/demo.mp4"` |
| **Favicon** | `public/favicon.svg` | Automatically loaded by `index.html` |

---

## 📁 Folder Structure

```text
myportfolio/
├── public/                       # Static public assets
│   ├── projects/                 # Project screenshots and demo videos
│   ├── profile.png               # Profile avatar image
│   ├── favicon.svg               # Web browser favicon
│   └── Dikshant_Kumar_Resume.pdf # Downloadable resume file
├── src/
│   ├── assets/                   # Bundled graphics and assets
│   ├── components/               # UI components
│   │   ├── Navbar.tsx            # Sticky frosted navbar
│   │   ├── Hero.tsx              # Landing hero banner
│   │   ├── About.tsx             # Bio and metrics section
│   │   ├── Skills.tsx            # Categorized skills grid
│   │   ├── Experience.tsx        # Career timeline
│   │   ├── Projects.tsx          # Filterable project showcase
│   │   ├── Achievements.tsx      # Hackathons and honors
│   │   ├── Services.tsx          # Services offerings
│   │   ├── Contact.tsx           # Contact form and details
│   │   ├── Footer.tsx            # Footer navigation
│   │   ├── SignatureVisual.tsx   # Canvas ambient lighting effect
│   │   ├── ThemeToggle.tsx       # Dark / Light mode switcher
│   │   └── SkillIcon.tsx         # SVG tech stack icons
│   ├── data/
│   │   └── portfolio.json        # ⭐️ SINGLE SOURCE OF TRUTH DATA FILE
│   ├── types/
│   │   └── portfolio.ts          # TypeScript type definitions
│   ├── App.tsx                   # Root component assembling sections
│   ├── index.css                 # Global Tailwind CSS styles
│   └── main.tsx                  # React DOM entry point
├── index.html                    # Root HTML template
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

---

## 🚢 Build & Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Import your `myportfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, ensure `base: './'` is configured if using a subpath repository.
2. Run `npm run build`.
3. Deploy the contents of the `dist/` directory to your `gh-pages` branch.

---

## 🤝 Contributing

Contributions, feedback, and star ratings are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <sub>Built with ❤️ using React 19, TypeScript, and Vite.</sub>
</div>
