const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'pgb1794@2004',
  database: 'irctc'
});

module.exports = pool;
