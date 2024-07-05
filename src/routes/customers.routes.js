import { Router } from 'express';
import { validate } from '../middleware/validation.js';
import { verifyToken } from '../middleware/auth.js';
import { customerSchema } from '../schemas/customer.schema.js';

import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/customers.controller.js';

const router = Router();

router.get("/customers", verifyToken, getCustomers);
router.get("/customers/:id", verifyToken, getCustomer);
router.post("/customers", [verifyToken, validate(customerSchema)], createCustomer);
router.put("/customers/:id", [verifyToken, validate(customerSchema)], updateCustomer);
router.delete("/customers/:id", verifyToken, deleteCustomer);

export default router;