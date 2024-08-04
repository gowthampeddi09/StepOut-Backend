const pool = require('../utils/db');

const createUser = async (username, password, email) => {
  const [result] = await pool.query(
    'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
    [username, password, email]
  );
  return result.insertId;
};

const getUserByUsername = async (username) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
};

module.exports = { createUser, getUserByUsername };
