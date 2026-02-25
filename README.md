# Portfolio

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built%20with%20React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)](https://vitejs.dev/)

## Overview

A modern, responsive **frontend-only** personal portfolio website showcasing projects, skills, certifications, research papers, and contact information. Built with **React** and **Vite**. Features a sleek dark/light theme, smooth animations, glassmorphism effects, and a clean UI that works across all devices.

**No backend required.** All content data lives in a single file (`src/data/portfolioData.js`) that makes it trivially easy to add new projects, certifications, papers, and more.

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://portfolio-drab-psi-55.vercel.app/)

## Features

- **Frontend Only** – Zero backend, zero database. Pure static site.
- **Scalable Data Architecture** – All portfolio content is in `portfolioData.js`. Just add entries to arrays.
- **Responsive Design** – Mobile-first layout with fluid grids.
- **Dark/Light Theme** – Persisted theme preference using `localStorage`.
- **Animated UI** – Parallax effects, 3D card tilts, floating particles, gradient mesh backgrounds.
- **Project Showcase** – Interactive cards with tech-stack tags and live links.
- **Contact Form** – Uses `mailto:` — no backend needed.
- **SEO Optimized** – Open Graph tags, meta descriptions, semantic HTML.

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Framework  | React 18 + Vite 5           |
| Styling    | Vanilla CSS + CSS Variables |
| Icons      | react-icons                 |
| Deployment | Vercel (static)             |

## Project Structure

```
Portfolio/
├── client/
│   ├── public/
│   │   └── images/            # Static images (certifications, projects, resume)
│   ├── src/
│   │   ├── assets/            # Profile image
│   │   ├── components/        # All React components + CSS
│   │   ├── data/
│   │   │   └── portfolioData.js  ← ⭐ EDIT THIS FILE to add content
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css          # Global design system
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── .gitignore
├── package.json               # Root scripts (dev, build, preview)
└── README.md
```

## Installation

### Prerequisites

- **Node.js** (v18 or later)
- **npm** (v9+) or **yarn**

```bash
# Clone the repository
git clone https://github.com/RoniDey1819/Portfolio.git
cd Portfolio
```

### Setup & Run

```bash
# Install client dependencies
cd client
npm install

# Run the development server
npm run dev
# → Opens at http://localhost:5173
```

Or from the root directory:

```bash
npm run dev
```

### Build for Production

```bash
npm run build    # Output in client/dist/
npm run preview  # Preview the production build locally
```

## How to Add Content

All portfolio data lives in **`client/src/data/portfolioData.js`**. To add content, simply append new objects to the respective arrays:

### Add a New Project
```js
// In portfolioData.js → projects array
{
  id: 4,
  title: "My New Project",
  description: "What it does...",
  imageUrl: "/images/projects/pimg4.png",     // Add image to public/images/projects/
  projectUrl: "https://github.com/...",
  status: "completed",                         // "completed" or "current"
  technologies: ["React", "Node.js", "Docker"],
},
```

### Add a New Certification
```js
// In portfolioData.js → certifications array
{
  id: 3,
  title: "Your Certification",
  issuer: "Issuing Org",
  issueDate: "2025-01-15",
  credentialId: "CERT-123",
  credentialUrl: "https://...",
  imageUrl: "/images/certifications/cert3.png",
},
```

### Add a New Paper
```js
// In portfolioData.js → papers array
{
  id: 3,
  title: "Paper Title",
  abstract: "Abstract text...",
  paperUrl: "https://arxiv.org/...",
  publicationDate: "2025-06-01",
  authors: ["Author 1", "Author 2"],
  journal: "Journal Name",
  doi: "10.xxx/...",
},
```

## Scripts Overview

| Script    | Description                       |
|-----------|-----------------------------------|
| `dev`     | Starts Vite development server    |
| `build`   | Bundles the app for production    |
| `preview` | Serves the production build locally |

## Deployment

This is a static site — deploy anywhere:

- **Vercel**: Push to GitHub → auto-deploys from the `client/` directory.
- **Netlify**: Set build command to `cd client && npm run build`, publish directory to `client/dist`.
- **GitHub Pages**: Build and push the `client/dist/` folder.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m "Add awesome feature"`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a Pull Request.

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## Contact

- **Name**: Roni Dey
- **Email**: [ronidey1819@gmail.com](mailto:ronidey1819@gmail.com)
- **LinkedIn**: [linkedin.com/in/ronidey1819](https://linkedin.com/in/ronidey1819)
- **GitHub**: [github.com/RoniDey1819](https://github.com/RoniDey1819)

---

*Built by Roni Dey*
