import { Router } from "express";
import { validate } from "../middleware/validation.js";
import { loginSchema } from "../schemas/auth.js";

const router = Router();

router.post("/auth/login", validate(loginSchema));

export default router;