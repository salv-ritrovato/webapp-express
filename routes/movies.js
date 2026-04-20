import express from "express";
import { index, show } from "../controllers/moviesControllers.js";

const router = express.Router();

// INDEX
router.get("/", index);

// SHOW 
router.get("/:id", show);

export default router;