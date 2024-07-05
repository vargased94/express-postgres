import { pool } from '../db.js';

export const getInvoices = async (req, res) => {
  res.json({ message: 'getInvoices' });
};

export const getInvoice = async (req, res) => {
  res.json({ message: 'getInvoice' });
}

export const createInvoice = async (req, res) => {
  res.json({ message: 'createInvoice' });
}

export const updateInvoice = async (req, res) => {
  res.json({ message: 'updateInvoice' });
}

export const deleteInvoice = async (req, res) => {
  res.json({ message: 'deleteInvoice' });
}