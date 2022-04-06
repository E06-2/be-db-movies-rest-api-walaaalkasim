const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config();

console.log('Loading mflix server... 🎥')

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Database connected! 😍'))
    .catch(() => console.log('Database is not connected! ☹️'));

app.listen(3001, () => console.log('The server is listening... 🎥'));