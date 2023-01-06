import express from "express";

const router = express.Router();
router.post("/create", productController.create);
router.get("/getAll", productController.getAllItems);
router.get("/findById", productController.findById);

export default router;