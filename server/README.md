# Portfolio Backend - PostgreSQL Setup

## Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)

## Setup Instructions

### 1. Install PostgreSQL
Download and install PostgreSQL from: https://www.postgresql.org/download/

### 2. Create Database
```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE portfolio_db;

# Exit psql
\q
```

### 3. Install Dependencies
```bash
cd server
npm install
```

### 4. Configure Environment Variables
Copy `.env.example` to `.env` and update with your PostgreSQL credentials:
```bash
cp .env.example .env
```

Edit `.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=portfolio_db
SERVER_PORT=3000
```

### 5. Run Database Setup
```bash
# Run the setup SQL file
psql -U postgres -d portfolio_db -f setup.sql
```

Or manually:
```bash
psql -U postgres -d portfolio_db
# Then paste the contents of setup.sql
```

### 6. Start the Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Certifications
- `GET /api/certifications` - Get all certifications
- `POST /api/certifications` - Create a new certification

### Contact
- `POST /api/contact` - Submit a contact message
- `GET /api/contact` - Get all contact messages (admin)

### Health Check
- `GET /api/health` - Check server and database status

## Testing the API

### Using curl:
```bash
# Get all projects
curl http://localhost:3000/api/projects

# Create a new project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Project",
    "description": "Project description",
    "image_url": "https://example.com/image.jpg",
    "project_url": "https://github.com/user/project",
    "status": "current",
    "technologies": ["React", "Node.js"]
  }'

# Submit contact message
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to connect!"
  }'
```

## Database Schema

### Projects Table
- `id` - Serial (auto-increment)
- `title` - VARCHAR(255)
- `description` - TEXT
- `image_url` - VARCHAR(500)
- `project_url` - VARCHAR(500)
- `status` - VARCHAR(20) ('completed' or 'current')
- `technologies` - TEXT[] (array)
- `created_at` - TIMESTAMP
- `updated_at` - TIMESTAMP

### Certifications Table
- `id` - Serial
- `title` - VARCHAR(255)
- `issuer` - VARCHAR(255)
- `issue_date` - DATE
- `credential_id` - VARCHAR(255)
- `credential_url` - VARCHAR(500)
- `image_url` - VARCHAR(500)
- `created_at` - TIMESTAMP

### Contact Messages Table
- `id` - Serial
- `name` - VARCHAR(255)
- `email` - VARCHAR(255)
- `message` - TEXT
- `status` - VARCHAR(20) ('unread', 'read', 'archived')
- `created_at` - TIMESTAMP

## Troubleshooting

### Connection Issues
1. Ensure PostgreSQL is running: `pg_ctl status`
2. Check your credentials in `.env`
3. Verify database exists: `psql -U postgres -l`

### Port Already in Use
Change `SERVER_PORT` in `.env` to a different port (e.g., 3001)

### Database Errors
Reset the database:
```bash
psql -U postgres
DROP DATABASE portfolio_db;
CREATE DATABASE portfolio_db;
\q
psql -U postgres -d portfolio_db -f setup.sql
```
