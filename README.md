# Theophilus Taiwo Ajibade | Portfolio & Engineering Showcase

A responsive, high-performance portfolio application showcasing frontend engineering and full-stack solutions. Built with a modern React, Vite, and TypeScript Single Page Application (SPA) frontend and a decoupled Node.js/Express contact micro-service powered by the Resend email API.

## Live Deployment
- **Frontend URL:** [https://theophilus-ajibade.vercel.app](https://theophilus-ajibade.vercel.app)
- **API Health Endpoint:** [https://theophilus-portfolio-api.onrender.com/health](https://theophilus-portfolio-api.onrender.com/health)

## Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express, TypeScript, Resend API, CORS
- **Infrastructure:** Vercel (Frontend CI/CD), Render (Backend Web Service)

## Monorepo Architecture
- `client/`: Modern frontend SPA featuring dark theme styling, project filtering, accessibility controls, and transactional contact form handling.
- `server/`: Express microservice managing cross-origin validation and email routing to Resend.

## Local Setup & Development

### Client
```bash
cd client
npm install
npm run dev
```

### Server
```bash
cd server
npm install
npm run dev
```

