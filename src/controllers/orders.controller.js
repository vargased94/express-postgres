import { pool } from '../db.js';

export const getOrders = async (req, res) => {
  res.json({ message: 'getOrders' });
};

export const getOrder = async (req, res) => {
  res.json({ message: 'getOrder' });
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
  res.json({ message: 'updateOrder' });
};

export const deleteOrder = async (req, res) => {
  res.json({ message: 'deleteOrder' });
};