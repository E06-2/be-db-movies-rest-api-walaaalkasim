const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
  name: { type: String },
  email: { type: String },
  movie_id: {
    ref: "movie",
    type: Schema.Types.ObjectId,
  },
  text: { type: String },
  date: { type: Date, default: new Date() },
});

const Comment = model("comment", CommentSchema);

module.exports = Comment;
