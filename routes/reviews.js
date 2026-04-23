import express from "express";
import { store } from "../controllers/reviewsController.js";

const router = express.Router();

// POST
router.post("/:id/reviews", store);

export default router;