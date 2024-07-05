import { Router } from "express";
import { validate } from "../middleware/validation.js";
import { verifyToken } from "../middleware/auth.js";
import { orderSchema } from "../schemas/order.schema.js";

import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
} from "../controllers/orders.controller.js";

const router = Router();

router.get("/orders", verifyToken, getOrders);
router.get("/orders/:id", verifyToken, getOrder);
router.post("/orders", [verifyToken, validate(orderSchema)], createOrder);
router.put("/orders/:id", [verifyToken, validate(orderSchema)], updateOrder);
router.delete("/orders/:id", verifyToken, deleteOrder);

export default router;