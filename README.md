# NILAKSHI.EXE — Personal Portfolio Website
### B.Tech Artificial Intelligence & Machine Learning Student | Aspiring AI Engineer

> *"Exploring Intelligence. Building Tomorrow."*

A visually exceptional, futuristic AI Innovation Lab personal portfolio for **Nilakshi Tripathi**, 3rd-year undergraduate specializing in Artificial Intelligence & Machine Learning at **Buddha Institute of Technology, GIDA, Gorakhpur, India**.

---

## 🌟 Key Features

1. **Futuristic AI Innovation Lab Aesthetic**
   - Color palette inspired by deep intelligence systems: Deep Navy (`#080B18`), Dark Background (`#0B1020`), Electric Purple (`#8B5CF6`), Neon Cyan (`#22D3EE`), and Crisp White (`#F8FAFC`).
   - High-performance, interactive HTML5 Canvas Neural Network background with dynamic node physics and mouse interactivity.
   - Original vector illustrated AI Researcher avatar (no fake human photos).
   - Glassmorphism cards with cyber HUD brackets and subtle ambient glows.

2. **Transparent, Honest Skill Presentation**
   - Skills reflect genuine 3rd-year undergraduate level without inflated claims or unconfirmed libraries.
   - **Programming Languages**: Python (Core / Practical), Java (Basic / Academic), C (Basic / Academic), C++ (Basic / Academic).
   - **AI / ML Tooling**: YOLO / Ultralytics (Practical Application in AegisNova), FastAPI (Backend APIs), SQLite (Event Storage).
   - **Tools**: Git & GitHub, VS Code.

3. **Featured Project: AEGISNOVA Showcase & Interactive Simulator**
   - Farm security and wildlife intrusion detection system using computer vision.
   - Interactive live simulation console demonstrating real-time YOLO bounding box inference, threat classification levels (Critical, High, Medium, Low), FastAPI JSON payload structure, and SQLite event records.
   - Honest student prototype presentation — clearly marked as an academic project without commercial claims.

4. **Dedicated Internship Opportunity Hub**
   - Active status callout for recruiters looking for AI/ML, Computer Vision, or Python Interns.
   - Highlights strong foundations, rapid learning agility, and collaborative spirit.

5. **Direct, Functional Contact System**
   - One-click copy email with visual toast notification.
   - Direct `mailto:` launcher pre-filling visitor inquiry parameters.
   - Direct verified links to [LinkedIn](https://www.linkedin.com/in/nilakshi-tripathi/) and [GitHub](https://github.com/tripathinilakshi20).
   - Zero fake backend or mockup databases.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk, Inter, and JetBrains Mono

---

## 📁 Project Structure

```
portfolio/
├── index.html                   # HTML entry with full SEO metadata & OpenGraph tags
├── package.json                 # Project dependencies & build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme, custom colors & animations
├── vite.config.js               # Vite configuration with relative base support
├── README.md                    # Project documentation & deployment guide
└── src/
    ├── main.jsx                 # React root DOM mount
    ├── App.jsx                  # Main application orchestrator
    ├── index.css                # Tailwind directives & glassmorphism utilities
    ├── data/
    │   └── portfolioData.js     # Single source of truth for verified facts
    └── components/
        ├── Navbar.jsx           # High-tech sticky navbar with mobile drawer
        ├── Hero.jsx             # Hero section with headline & illustrated avatar
        ├── AiAvatarIllustration.jsx # Custom SVG AI researcher holographic illustration
        ├── NeuralBackground.jsx # Interactive HTML5 Canvas neural network
        ├── About.jsx            # Academic path & engineering philosophy
        ├── Skills.jsx           # Honest categorized technical skill cards
        ├── Projects.jsx         # AEGISNOVA detailed showcase
        ├── AegisSimulator.jsx   # Interactive live detection simulation console
        ├── Education.jsx        # Buddha Institute of Technology credentials
        ├── Internship.jsx       # Availability & value propositions for recruiters
        ├── Contact.jsx          # Working email dispatch & social channels
        ├── Footer.jsx           # High-tech footer & brand tagline
        └── Toast.jsx            # Floating action notification pill
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### 1. Installation

Clone or extract the repository and install dependencies:

```bash
cd portfolio
npm install
```

### 2. Local Development

Start the Vite development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build

Create an optimized static build for production:

```bash
npm run build
```

The compiled assets will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Method A: Deploy to Vercel (Recommended — Fast & Free)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nilakshi Tripathi portfolio"
   git branch -M main
   git remote add origin https://github.com/tripathinilakshi20/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
   - Click **"Add New..."** → **"Project"**.
   - Select your `portfolio` repository.
   - Framework Preset will automatically detect **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**.

Your website will be live globally in under 60 seconds with free SSL and automatic redeployments on every git push!

---

### Method B: Deploy to GitHub Pages

1. Install `gh-pages` (optional helper) or use GitHub Actions:
   ```bash
   npm install -D gh-pages
   ```

2. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Ensure `vite.config.js` has `base: './'` (already configured!).

4. Run:
   ```bash
   npm run deploy
   ```

5. Go to your repository settings on GitHub:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment**, select source branch: `gh-pages` / `root`.
   - Click Save. Your site will be published at `https://tripathinilakshi20.github.io/portfolio/`.

---

## 📜 Academic Integrity Note

All qualifications, skills, and projects in this portfolio are presented with complete honesty:
- **No inflated metrics or fabricated CGPA**
- **No unconfirmed libraries or frameworks**
- **No fake customer reviews or testimonials**
- **Original vector avatar without generative human portraits**
- **AEGISNOVA is accurately documented as an academic student project**

---

Designed by **Nilakshi Tripathi**  
*B.Tech Artificial Intelligence & Machine Learning Student*  
*Buddha Institute of Technology, GIDA, Gorakhpur, India*


## Contact form email setup (Formspree)

The contact form sends submissions to Formspree. It does not silently pretend to send: if the endpoint is missing or Formspree rejects the request, the visitor sees an error.

1. Create a form at https://formspree.io using the inbox that should receive portfolio enquiries.
2. Verify the receiving email address when Formspree asks.
3. Copy the form endpoint. It looks like `https://formspree.io/f/xxxxxxxx`.
4. In the project root, copy `.env.example` to `.env` and replace the placeholder:
   `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx`
5. Restart the Vite dev server after changing `.env` (`npm run dev`).
6. For production, add the same `VITE_FORMSPREE_ENDPOINT` variable in your hosting provider's environment-variable/build settings, then rebuild and redeploy.
7. Test from the live deployed site using a real email address. Confirm the enquiry arrives in the verified inbox and check spam/junk if needed.

The Formspree endpoint is intended to be public in browser code; do not put private SMTP passwords or secret API keys in `VITE_` variables. Formspree account-side spam filtering plus the hidden honeypot field and browser validation are enabled. For stronger abuse protection, configure Formspree's spam controls or add server-side rate limiting through a backend.

## Resume

No resume file was present in the supplied project archive. Add the approved PDF to `public/resume.pdf` and then link it from the UI before publishing a download button. Do not link to a non-existent file.
