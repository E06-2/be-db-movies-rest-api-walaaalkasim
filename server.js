const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

dotenv.config();

app.use(cors());
express.json();
console.log("Loading mflix server... đĨ");
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! đ"))
  .catch(() => console.log("Database is not connected! âšī¸"));

app.listen(3001, () => console.log("The server is listening... đĨ"));
