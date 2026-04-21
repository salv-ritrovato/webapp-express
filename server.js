import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./database/connection.js"
import moviesRouter from "./routes/movies.js";
import notFound from "./middlewares/notFound.js";
import serverError from "./middlewares/serverError.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
});

app.use("/movies", moviesRouter);

app.use(notFound);
app.use(serverError);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});