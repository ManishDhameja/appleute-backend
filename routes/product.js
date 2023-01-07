import express from "express";
import * as productController from "../controller/product.js";

const router = express.Router();
router.post("/create", productController.create);
router.get("/getAll", productController.getAllItems);
router.get("/findById", productController.findById);

export default router;