import { pool } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const login = async (req, res) => {
  const { email, password } = req.body;
  const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  if (rows.length === 0) {
    return res.status(401).json({ message: 'User not found!' });
  }
  const user = rows[0];
  const hashedPassword = bcrypt.hashSync(password);
  const isPasswordMatch = bcrypt.compareSync(hashedPassword, user.password);
  if (!isPasswordMatch) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
  res.json({ token });
};