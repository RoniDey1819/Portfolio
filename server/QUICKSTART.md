# Portfolio Backend - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Configure Environment
1. Copy `.env.example` to `.env` (if not already done)
2. Ensure your `.env` has the correct Neon PostgreSQL connection string:
   ```
   SERVER_PORT=3002
   DATABASE_URL=postgresql://neondb_owner:npg_G3dZOzxI7KqV@ep-holy-credit-a1hgdmlb-pooler.ap-southeast-1.aws.neon.tech/portfolio_db?sslmode=require&channel_binding=require
   ```

### Step 2: Start the Server
```bash
cd server
npm run dev
```

You should see:
```
✅ Connected to Neon PostgreSQL
🚀 Server is running on port 3002
```

### Step 3: Test the API
Open your browser and go to:
- http://localhost:3002/api/health (should show "healthy")
- http://localhost:3002/api/projects (should show projects)

## 🌐 Frontend Integration
Your React frontend is configured to connect to `http://localhost:3002/api/projects`.

Make sure both servers are running:
- Backend: `npm run dev` (in server folder) - Port 3002
- Frontend: `npm run dev` (in client folder) - Port 5174

## � Troubleshooting

### "Cannot GET /api/health"
- Make sure you are using port **3002**, not 3000.
- Check if the server log shows "Server is running on port 3002".

### "EADDRINUSE"
- Port 3002 is busy. Change `SERVER_PORT` in `.env` to another port (e.g., 3003) and update `ProjectList.jsx`.
