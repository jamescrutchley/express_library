const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

genreSchema.virtual("url").get(function () {
  return `/catalogue/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", genreSchema);
