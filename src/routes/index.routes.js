import express from 'express';
import authRoutes from './auth.routes.js';
import userRoutes from './users.routes.js';
import productRoutes from './products.routes.js';
import customerRoutes from './customers.routes.js';
import orderRoutes from './orders.routes.js';

const router = express.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(productRoutes);
router.use(customerRoutes);
router.use(orderRoutes);

export default router;