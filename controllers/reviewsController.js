import connection from "../database/connection.js";

// STORE
const store = async (req, res) => {
    const movie_id = req.params.id;
    const { name, vote, text } = req.body;

    const [result] = await connection.query(
        "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)",
        [movie_id, name, vote, text]
    );

    res.json({
        message: "Review sent successfully!",
        review_id: result.insertId
    });
};

export { store };