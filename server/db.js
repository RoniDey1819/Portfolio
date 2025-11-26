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

// Test the connection and verify database
pool.connect()
    .then(async (client) => {
        console.log("✅ Connected to Neon PostgreSQL");

        // Log database info
        const dbResult = await client.query('SELECT current_database(), current_schema()');
        console.log("📊 Database:", dbResult.rows[0].current_database);
        console.log("📊 Schema:", dbResult.rows[0].current_schema);

        // Check if tables exist
        const tablesResult = await client.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_type = 'BASE TABLE'
        `);
        console.log("📋 Tables found:", tablesResult.rows.map(r => r.table_name).join(', ') || 'NONE');

        client.release();
    })
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
