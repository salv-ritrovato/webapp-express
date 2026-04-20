import connection from "../database/connection.js";

// INDEX
const index = async (req, res) => {
    const [movies] = await connection.query("SELECT * FROM movies");
    res.json(movies);
};

// SHOW
const show = async (req, res) => {
    const id = req.params.id;
    const [movies] = await connection.query("SELECT * FROM movies WHERE id = ?", [id]);
    const movie = movies[0];
    res.json(movie);
};

export { index, show };