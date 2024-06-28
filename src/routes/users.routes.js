import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.send("Users route");
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("Users route");
});

router.post("/users", (req, res) => {
  res.send("Users route");
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("Users route");
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("Users route");
});

export default router;