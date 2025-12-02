# Portfolio

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Built%20with%20React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js)](https://nodejs.org/)

##  Overview

A modern, responsive personal portfolio website showcasing projects, skills, certifications, and contact information. Built with **React**, **Vite**, and **Node.js** backend. Features a sleek dark/light theme, smooth animations, and a clean UI that works across devices.

##  Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://portfolio-drab-psi-55.vercel.app/) 

##  Features

- **Responsive Design** – Mobile‑first layout with fluid grids.
- **Dark/Light Theme** – Persisted theme preference using `localStorage`.
- **Animated UI** – Subtle micro‑animations for hover effects and transitions.
- **Project Showcase** – Interactive cards with screenshots and live links.
- **Contact Form** – Integrated with email service (e.g., EmailJS).
- **Backend API** – Node.js/Express server for data handling and health checks.

##  Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| React 18 + Vite | Node.js + Express | MySQL (Aiven) |
| CSS Modules / Sass | JWT Auth | SSL connections |
| Framer Motion (optional) | dotenv for env vars |

##  Installation

### Prerequisites

- **Node.js** (v20 or later)
- **npm** (v9+) or **yarn**

```bash
# Clone the repository
git clone https://github.com/your-username/Portfolio.git
cd Portfolio
```

### Frontend Setup

```bash
# Install dependencies
npm install   # or yarn install

# Run the development server
npm run dev   # Vite dev server (http://localhost:5173)
```

### Backend Setup

```bash
cd server
npm install

# Create a .env file based on .env.example
cp .env.example .env
# Edit .env with your MySQL credentials and any API keys

# Start the backend
npm start   # runs on http://localhost:3002 by default
```

##  Usage

- Open `http://localhost:5173` in your browser to view the frontend.
- The frontend communicates with the backend at `http://localhost:3002/api`.
- Edit component files under `client/src/components` to customize content.
- Update project data in the backend or a JSON file as needed.

##  Scripts Overview

| Script | Description |
|--------|-------------|
| `dev` | Starts Vite development server |
| `build` | Bundles the app for production |
| `preview` | Serves the production build locally |
| `start` (backend) | Launches Express server |
| `test` | Runs any test suite (if configured) |

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m "Add awesome feature"`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a Pull Request.

Make sure to adhere to the existing code style and run `npm run lint` before submitting.

##  License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

##  Contact

- **Name**: Roni Dey
- **Email**: [ronidey1819@gmail.com](mailto:ronidey1819@gmail.com)
- **LinkedIn**: [linkedin.com/in/ronidey1819](https://linkedin.com/in/ronidey1819)
- **GitHub**: [github.com/RoniDey1819](https://github.com/RoniDey1819)

---

*Built by Roni Dey*
