const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = 3001; // Use a different port to avoid conflicts

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

app.get('/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ status: 'ok', time: result.rows[0].now });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
});
