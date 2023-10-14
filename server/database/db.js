const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'movie',
    user: 'postgres',
    password: 'password',
});

module.exports = pool;