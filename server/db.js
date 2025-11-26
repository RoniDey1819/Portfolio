// postgres.js
const { Pool } = require('pg');
require('dotenv').config();

// Create PostgreSQL connection pool using Neon connection string
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Required for Neon
    }
});

// Test the connection
pool.connect()
    .then(() => console.log("✅ Connected to Neon PostgreSQL"))
    .catch((err) => {
        console.error("❌ Error connecting to Neon PostgreSQL:", err.message);
        console.error("Connection string (masked):", process.env.DATABASE_URL?.slice(0, 30) + "...");
    });

// Handle idle client errors
pool.on('error', (err) => {
    console.error("Unexpected PostgreSQL idle client error:", err);
    process.exit(1);
});

module.exports = pool;
