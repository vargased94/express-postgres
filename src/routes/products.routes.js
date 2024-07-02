import { Router } from 'express';
import { validate } from '../middleware/validation.js';
import { verifyToken } from '../middleware/auth.js';
import { productSchema } from '../schemas/product.schema.js';

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/products.controller.js';

const router = Router();

router.get("/products", verifyToken, getProducts);
router.get("/products/:id", verifyToken, getProduct);
router.post("/products", [verifyToken, validate(productSchema)], createProduct);
router.put("/products/:id", [verifyToken, validate(productSchema)], updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

export default router;