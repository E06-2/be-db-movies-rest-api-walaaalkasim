const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const movieRoutes = require("./routes/movies");
const commentRoutes = require("./routes/comments");

const app = express();

dotenv.config();

// Middleware:
app.use(cors());
app.use(express.json());

// Routes:
app.use("/movies", movieRoutes);
app.use("/comments", commentRoutes);

console.log("Loading mflix server... 🎥");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍"))
  .catch(() => console.log("Database is not connected! ☹️"));

app.listen(3001, () => console.log("The server is listening... 🎥"));
