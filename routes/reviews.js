import express from "express";
import { index, store } from "../controllers/reviewsController.js";

const router = express.Router();

// GET
router.get("/:id/reviews", index);

// POST
router.post("/:id/reviews", store);

export default router;