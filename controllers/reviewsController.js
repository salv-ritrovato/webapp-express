import connection from "../database/connection.js";

// INDEX
const index = async (req, res) => {
    const movie_id = req.params.id;

    const [results] = await connection.query(
        "SELECT * FROM reviews WHERE movie_id = ?",
        [movie_id]
    );

    res.json(results);
};

// STORE
const store = async (req, res) => {
    const movie_id = req.params.id;
    const { name, vote, text } = req.body;

    const [result] = await connection.query(
        "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)",
        [movie_id, name, vote, text]
    );

    const [[newReview]] = await connection.query(
        "SELECT * FROM reviews WHERE id = ?",
        [result.insertId]
    );

    res.status(201).json(newReview);
};

export { index, store };