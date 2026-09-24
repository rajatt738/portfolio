# Rajat Kasaudhan — Developer Portfolio

A production-ready, full-featured developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- Dark/light theme toggle with localStorage persistence
- Smooth scroll navigation with active section indicator
- Framer Motion animations (respects prefers-reduced-motion)
- Responsive mobile-first design
- Project category filtering
- Functional contact form via EmailJS with mailto fallback
- Resume PDF download
- Full SEO metadata (Open Graph, Twitter Cards)
- robots.txt & sitemap.xml

## 🛠 Tech Stack

| Category | Technologies |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Contact | EmailJS / mailto fallback |
| Deployment | Vercel |

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── resume.pdf          ← Place your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SectionHeading.tsx
│   │   └── ProjectCard.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   └── portfolio.ts    ← Edit your profile data here
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useActiveSection.ts
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── vercel.json
└── ...
```

## 🚀 Prerequisites

- Node.js 18+
- npm 9+
- Git

## ⚙️ Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/rajat738/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗 Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

## 📧 EmailJS Setup

1. Create a free account at [https://www.emailjs.com](https://www.emailjs.com)
2. Create a service (e.g., Gmail) and note the **Service ID**
3. Create an email template and note the **Template ID**
4. Get your **Public Key** from the Account section
5. Fill in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> If these variables are not set, the contact form will display a mailto fallback link.

## 📄 Resume Setup

Place your resume PDF at:
```
public/resume.pdf
```

The "Download Resume" button will then work automatically.

## 🌐 Vercel Deployment

### Option A: GitHub + Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: professional developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Sign in at [https://vercel.com](https://vercel.com) with GitHub
3. Click **Add New Project** → Import your portfolio repository
4. Framework: **Vite** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
8. Click **Deploy** → wait ~60 seconds → your site is live! 🎉

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel
# Follow the prompts
```

## 🔗 Custom Domain

1. In Vercel dashboard → your project → **Domains**
2. Add your custom domain (e.g., `rajatkasaudhan.dev`)
3. Update DNS records as directed by Vercel
4. Update the canonical URL in `index.html` and `sitemap.xml`

## 🔧 Troubleshooting

| Issue | Fix |
|---|---|
| `npm run dev` fails | Run `npm install` first |
| Styles not loading | Ensure `tailwind.config.js` content paths are correct |
| Build type errors | Run `npx tsc --noEmit` for details |
| EmailJS not sending | Check env variables and EmailJS dashboard |
| Resume download 404 | Place `resume.pdf` in the `/public` folder |

## 🖥 IDE Setup

Works seamlessly in:
- **VS Code**: Open the `portfolio/` folder, install ESLint + Prettier extensions
- **Cursor**: Same as VS Code
- **Antigravity IDE**: Open `portfolio/` as workspace, run `npm run dev`

---

Built with ❤️ by [Rajat Kasaudhan](https://github.com/rajat738)
