import { pool } from '../db.js';

export const getProducts = async (req, res) => {
  const { rows } = await pool.query('SELECT id, name, price FROM products');
  res.json(rows);
}

export const getProduct = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT id, name, price FROM products WHERE id = $1', [id]);
  if (rows.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(rows[0]);
};

export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { rows } = await pool.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id, name, price', [name, price]);
    if (rows.length === 0) {
      return res.status(500).json({ message: 'An error occurred' });
    }
    res.status(201).json(rows[0]);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { rowCount } = await pool.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING id, name, price', [name, price, id]);
  if (rowCount === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.sendStatus(204);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
  if (rowCount === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.sendStatus(204);
};