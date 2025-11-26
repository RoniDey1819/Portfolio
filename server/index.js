const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Portfolio API is running',
        version: '2.0.0',
        database: 'PostgreSQL'
    });
});

// Health check endpoint - Moved up to ensure priority
app.get('/api/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.status(200).json({
            status: 'healthy',
            database: 'connected',
            timestamp: result.rows[0].now
        });
    } catch (err) {
        res.status(500).json({
            status: 'unhealthy',
            database: 'disconnected',
            error: err.message
        });
    }
});

// Get all projects
app.get('/api/projects', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM projects ORDER BY created_at DESC'
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).json({ error: 'Failed to fetch projects', details: err.message });
    }
});

// Get a single project by ID
app.get('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            'SELECT * FROM projects WHERE id = $1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching project:', err);
        res.status(500).json({ error: 'Failed to fetch project', details: err.message });
    }
});

// Create a new project
app.post('/api/projects', async (req, res) => {
    try {
        const { title, description, image_url, project_url, status, technologies } = req.body;

        const result = await pool.query(
            'INSERT INTO projects (title, description, image_url, project_url, status, technologies) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, description, image_url, project_url, status || 'completed', technologies || []]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error creating project:', err);
        res.status(500).json({ error: 'Failed to create project', details: err.message });
    }
});

// Update a project
app.put('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image_url, project_url, status, technologies } = req.body;

        const result = await pool.query(
            'UPDATE projects SET title = $1, description = $2, image_url = $3, project_url = $4, status = $5, technologies = $6 WHERE id = $7 RETURNING *',
            [title, description, image_url, project_url, status, technologies, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Error updating project:', err);
        res.status(500).json({ error: 'Failed to update project', details: err.message });
    }
});

// Delete a project
app.delete('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            'DELETE FROM projects WHERE id = $1 RETURNING *',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json({ message: 'Project deleted successfully', project: result.rows[0] });
    } catch (err) {
        console.error('Error deleting project:', err);
        res.status(500).json({ error: 'Failed to delete project', details: err.message });
    }
});

// Get all certifications
app.get('/api/certifications', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM certifications ORDER BY issue_date DESC'
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching certifications:', err);
        res.status(500).json({ error: 'Failed to fetch certifications', details: err.message });
    }
});

// Create a new certification
app.post('/api/certifications', async (req, res) => {
    try {
        const { title, issuer, issue_date, credential_id, credential_url, image_url } = req.body;

        const result = await pool.query(
            'INSERT INTO certifications (title, issuer, issue_date, credential_id, credential_url, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, issuer, issue_date, credential_id, credential_url, image_url]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error creating certification:', err);
        res.status(500).json({ error: 'Failed to create certification', details: err.message });
    }
});

// Submit a contact message
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const result = await pool.query(
            'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
            [name, email, message]
        );

        res.status(201).json({
            message: 'Message sent successfully',
            data: result.rows[0]
        });
    } catch (err) {
        console.error('Error submitting contact message:', err);
        res.status(500).json({ error: 'Failed to submit message', details: err.message });
    }
});

// Get all contact messages (for admin)
app.get('/api/contact', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM contact_messages ORDER BY created_at DESC'
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching contact messages:', err);
        res.status(500).json({ error: 'Failed to fetch messages', details: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📍 API endpoints:`);
    console.log(`   - GET  /api/health`);
    console.log(`   - GET  /api/projects`);
    console.log(`   - POST /api/projects`);
    console.log(`   - GET  /api/certifications`);
    console.log(`   - POST /api/contact`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    pool.end(() => {
        console.log('Database pool closed');
    });
});
