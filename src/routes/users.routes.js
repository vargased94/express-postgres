import { Router } from 'express';
import { validate } from '../middleware/validationMiddleware.js';
import { userSchema } from '../schemas/user.js';

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/users.controllers.js';

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", validate(userSchema), createUser);
router.put("/users/:id", validate(userSchema), updateUser);
router.delete("/users/:id", deleteUser);

export default router;