# 🚀 Free Production Deployment Guide

This guide will help you deploy your full-stack portfolio for **free** using Vercel (Frontend), Render (Backend), and Neon (Database).

---

## 1️⃣ Database: Neon PostgreSQL (Already Done!)
You are already using Neon. Ensure your connection string is safe.
- **Action**: Keep your `DATABASE_URL` handy. You will need it for the backend deployment.

---

## 2️⃣ Backend: Deploy to Render (Free)
Render offers a free tier for Node.js web services.

1. **Push your code to GitHub**:
   - Make sure your project is in a GitHub repository.
   - Ensure `server/` and `client/` are committed.

2. **Create Web Service on Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com/).
   - Click **New +** -> **Web Service**.
   - Connect your GitHub repository.

3. **Configure Service**:
   - **Name**: `portfolio-backend`
   - **Root Directory**: `server` (Important!)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free

4. **Environment Variables**:
   - Add the following variables in the "Environment" tab:
     - `DATABASE_URL`: (Paste your Neon connection string here)
     - `SERVER_PORT`: `3000` (Render uses internal port mapping, 3000 is fine here)

5. **Deploy**:
   - Click **Create Web Service**.
   - Wait for the build to finish.
   - **Copy your Backend URL** (e.g., `https://portfolio-backend.onrender.com`).

---

## 3️⃣ Frontend: Deploy to Vercel (Free)
Vercel is the best place to host React apps.

1. **Update Frontend API URL**:
   - Before deploying, we need to make the API URL dynamic so it works in production.
   - Open `client/src/components/ProjectList.jsx`.
   - Change the hardcoded `http://localhost:3002` to use an environment variable.

2. **Create Vercel Project**:
   - Go to [vercel.com](https://vercel.com/).
   - Click **Add New** -> **Project**.
   - Import your GitHub repository.

3. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client` (Important! Click "Edit" next to Root Directory and select `client`).

4. **Environment Variables**:
   - Add a variable:
     - `VITE_API_URL`: `https://your-backend-url.onrender.com` (Paste the URL from Step 2).

5. **Deploy**:
   - Click **Deploy**.
   - Vercel will build and host your site.

---

## 4️⃣ Final Polish
- **CORS**: Once your frontend is deployed, you might need to update your backend `cors` configuration if you face issues.
  - In `server/index.js`, update `app.use(cors())` to:
    ```javascript
    app.use(cors({
      origin: 'https://your-frontend-url.vercel.app'
    }));
    ```
  - Redeploy the backend if you make this change.

---

## 🎉 Done!
Your portfolio is now live:
- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.onrender.com`
- **Database**: Neon PostgreSQL (Cloud)
