import { pool } from '../db.js';

export const getOrders = async (req, res) => {
  const { rows } = await pool.query('SELECT id, user_id, customer_id, products FROM orders');
  res.json(rows);
};

export const getOrder = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query('SELECT id, user_id, customer_id, products FROM orders WHERE id = $1', [id]);
  if (rows.length === 0) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(rows[0]);
};

export const createOrder = async (req, res) => {
  try {
    const { user_id, customer_id, products } = req.body;
    const { rows } = await pool.query('INSERT INTO orders (user_id, customer_id) VALUES ($1, $2) RETURNING id', [user_id, customer_id]);
    if (rows.length === 0) {
      return res.status(500).json({ message: 'An error occurred' });
    }
    const order_id = rows[0].id;
    const promises = products.map(async product => {
      return pool.query('INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)', [order_id, product.product_id, product.quantity]);
    });
    await Promise.all(promises);
    res.status(201).json({ id: order_id });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateOrder = async (req, res) => {
};

export const deleteOrder = async (req, res) => {
};