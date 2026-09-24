# Ranajit Gupta — Developer Portfolio

A modern, fast, responsive developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**, based on the design mockup and pre-configured for deployment on **Vercel**.

---

## 🚀 Quick Start (Local Development)

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Run local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

### Option 1: Via GitHub (Recommended)
1. Initialize Git and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   ```
2. Create a new repository on your GitHub account (e.g. `portfolio`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
5. Select your GitHub repository.
6. Framework preset will automatically detect **Vite**. Click **Deploy**!

### Option 2: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📝 What to Provide / Customize

All your portfolio data is centrally managed in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts). Here is the checklist of assets and details to personalize:

### 1. Photo & Images
- **Hero Profile Photo**: Place your preferred high-resolution photo in [`public/hero-person.jpg`](./public/hero-person.jpg) (currently pre-populated from your design mockup).
- **Project Screenshots**: Place project screenshots in [`public/projects/`](./public/projects/):
  - `gym-fitness.jpg`
  - `expense-tracker.jpg`
  - `github-analysis.jpg`

### 2. Resume / CV
- Place your PDF resume in [`public/resume.pdf`](./public/resume.pdf) so the **"Download CV"** button and modal directly downloads your actual resume.

### 3. Links & Handles ([`src/data/portfolioData.ts`](./src/data/portfolioData.ts))
- **GitHub profile**: Replace `https://github.com` with your exact profile link (e.g., `https://github.com/your-username`).
- **LinkedIn profile**: Replace `https://linkedin.com` with your exact profile link.
- **WhatsApp number**: Update `https://wa.me/9193320121093` if you want a different phone number.
- **Projects**:
  - Live demo URLs (`liveUrl`)
  - GitHub repositories (`githubUrl`)

### 4. Contact Details
- Your email address: `gupta.ranajit0904@gmail.com`
- Your phone number: `+91 93320121093`
- Your location: `Giridih, Jharkhand, India`

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg               # Portfolio favicon
│   ├── hero-person.jpg           # Profile image shown on hero banner
│   ├── resume.pdf                # Downloadable CV / resume PDF
│   └── projects/                 # Project thumbnail screenshots
│       ├── gym-fitness.jpg
│       ├── expense-tracker.jpg
│       └── github-analysis.jpg
├── src/
│   ├── components/
│   │   ├── About.tsx             # About section with personal summary, traits & info card
│   │   ├── Contact.tsx           # Contact form with validation, confetti & quick channels
│   │   ├── CvModal.tsx           # Interactive CV preview with print & download options
│   │   ├── Experience.tsx        # Work experience, leadership & education timeline
│   │   ├── Footer.tsx            # Footer with copyright, back-to-top & navigation links
│   │   ├── Hero.tsx              # Hero greeting, tagline, CTA buttons & quick metrics
│   │   ├── Navbar.tsx            # Sticky header with theme toggle & mobile drawer
│   │   ├── ProjectModal.tsx      # Modal popup for expanded project details
│   │   ├── Projects.tsx          # Filterable project gallery with preview modals
│   │   ├── Skills.tsx            # Interactive category-filtered skill badges
│   │   └── TechIcons.tsx         # SVG icons for languages, frameworks and databases
│   ├── context/
│   │   └── ThemeContext.tsx      # Dark / Light theme provider with localStorage sync
│   ├── data/
│   │   └── portfolioData.ts      # Central configuration for all content, bio & projects
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces for portfolio data models
│   ├── App.tsx                   # Main application layout
│   ├── index.css                 # Tailwind directives, animations & custom scrollbar
│   └── main.tsx                  # React DOM entry point
├── index.html                    # HTML entry with Caveat handwriting & Inter fonts
├── package.json                  # NPM scripts and dependencies
├── tailwind.config.js            # Tailwind styling setup
├── tsconfig.json                 # TypeScript compiler configuration
├── vercel.json                   # Vercel deployment routing configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## ✨ Features

- **🌓 Dark & Light Mode**: Seamless theme switching with system preference detection and localStorage persistence.
- **📱 Fully Responsive**: Pixel-perfect layout across mobile, tablet, laptop, and ultra-wide screens.
- **📄 Interactive CV Modal**: Built-in resume preview with quick print and direct PDF download buttons.
- **🎯 Categorized Skills Showcase**: Filter skills across Languages, Frontend, Backend, Mobile, Databases, and Tools.
- **💻 Project Gallery & Modals**: Detailed popups showcasing project highlights, tech tags, and links to live demos / GitHub.
- **📬 Interactive Contact Form**: Client-side validation, instant celebratory confetti animations, and fallback to direct email/WhatsApp links.
- **⚡ Ultra Fast & Optimized**: Powered by Vite and Tailwind CSS for instant load times and high Lighthouse performance.

---

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts Vite local development server at `http://localhost:5173` |
| `npm run build` | Compiles TypeScript and builds the production bundle in `/dist` |
| `npm run preview` | Runs a local server to preview the production `/dist` build |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

