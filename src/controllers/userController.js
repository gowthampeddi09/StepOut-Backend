const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, getUserByUsername } = require('../models/userModel');

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userId = await createUser(username, hashedPassword, email);
  res.status(201).json({ status: 'Account successfully created', user_id: userId });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ status: 'Incorrect username/password provided. Please retry' });
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ status: 'Login successful', user_id: user.id, access_token: token });
};

module.exports = { registerUser, loginUser };
