import { Router } from 'express';
import { validate } from '../middleware/validation.js';
import { verifyToken } from '../middleware/auth.js';
import { invoiceSchema } from '../schemas/invoice.schema.js';

import {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice
} from '../controllers/invoices.controller.js';

const router = Router();

router.get('/invoices', verifyToken, getInvoices);
router.get('/invoices/:id', verifyToken, getInvoice);
router.post('/invoices', [verifyToken, validate(invoiceSchema)], createInvoice);
router.put('/invoices/:id', [verifyToken, validate(invoiceSchema)], updateInvoice);
router.delete('/invoices/:id', verifyToken, deleteInvoice);

export default router;