import { pool } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const { rows } = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword]);
    if (rows.length === 0) {
      return res.status(500).json({ message: 'An error occurred' });
    }
    res.status(201).json(rows[0]);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if (rows.length === 0) {
    return res.status(401).json({ message: 'User not found!' });
  }
  const user = rows[0];
  const isPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!isPasswordMatch) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
  res.json({ token });
};