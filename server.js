import express from "express";
import dotenv from "dotenv";
import connection from "./database/connection.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});