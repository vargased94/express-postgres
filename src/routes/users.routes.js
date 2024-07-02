import { Router } from 'express';
import { validate } from '../middleware/validation.js';
import { verifyToken } from '../middleware/auth.js';
import { userSchema } from '../schemas/user.schema.js';

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/users.controller.js';

const router = Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUser);
router.post("/users", [verifyToken, validate(userSchema)], createUser);
router.put("/users/:id", [verifyToken, validate(userSchema)], updateUser);
router.delete("/users/:id", verifyToken, deleteUser);

export default router;