import { pool } from '../db.js';

export const getCustomers = async (req, res) => {
  const { rows } = await pool.query('SELECT id, name, phone, email FROM customers');
  res.json(rows);
};

export const getCustomer = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT id, name, phone, email FROM customers WHERE id = $1', [id]);
  if (rows.length === 0) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.json(rows[0]);
};

export const createCustomer = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const { rows } = await pool.query('INSERT INTO customers (name, phone, email) VALUES ($1, $2, $3) RETURNING id, name, phone, email', [name, phone, email]);
    if (rows.length === 0) {
      return res.status(500).json({ message: 'An error occurred' });
    }
    res.status(201).json(rows[0]);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, phone, email } = req.body;
  const { rowCount } = await pool.query('UPDATE customers SET name = $1, phone = $2, email = $3 WHERE id = $4 RETURNING *', [name, phone, email, id]);
  if (rowCount === 0) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.sendStatus(204);
}

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query('DELETE FROM customers WHERE id = $1 RETURNING *', [id]);
  if (rowCount === 0) {
    return res.status(404).json({ message: 'Customer not found' });
  }
  res.sendStatus(204);
};