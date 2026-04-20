import express from "express";
import connection from "../database/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const [movies] = await connection.query("SELECT * FROM movies");
    res.json(movies);
});

export default router;