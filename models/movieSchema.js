const mongoose = require("mongoose");
const movies = new mongoose.Schema({
  type: String,
  type: Number,
  type: Date,
  type: Boolean,
  type: [String],
});

module.exports = mongoose.model("movies", movies);
