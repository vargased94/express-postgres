import { Router } from "express";
import { validate } from "../middleware/validation.js";
import { loginSchema, registerSchema } from "../schemas/auth.js";
import { login, register } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/auth/login", validate(loginSchema), login);
router.post("/auth/register", validate(registerSchema), register);

export default router;