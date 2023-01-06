import express from "express";

const router = express.Router();

router.post("/addOrder", orderController.addOrder);
router.get("/getAll", orderController.getAll);

export default router;