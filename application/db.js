const { Pool } = require('pg');

let { DB_SERVER, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = new Pool({ 
    user: DB_USER, 
    host: DB_SERVER, 
    database: DB_NAME, 
    password: DB_PASSWORD, 
    port: DB_PORT
});

module.exports = pool;
