import express from "express";
import connection from "../database/connection.js";

const router = express.Router();

// INDEX
router.get("/", async (req, res) => {
    const [movies] = await connection.query("SELECT * FROM movies");
    res.json(movies);
});

// SHOW
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const [movies] = await connection.query("SELECT * FROM movies WHERE id = ?", [id]);
    const movie = movies[0];
    res.json(movie);
});

export default router;
