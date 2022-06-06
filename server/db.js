// Import node-postgres library for interfacing with PostgreSQL database
const Pool = require("pg").Pool;

// Create a connection pool for allowing frequent queries on the web application
const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "cookbook"
});

// Export const pool as a module to be used elsewhere in the app
module.exports = pool;
