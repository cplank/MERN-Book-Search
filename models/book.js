//importing mongoose, which works are our ORM for mongo
const mongoose = require("mongoose");
//importing our schema from mongoose
const Schema = mongoose.Schema;

//setting up the book collection, instantiating a new instance of Schema from above
//Setting up the collection's key:value pairs
const bookSchema = new Schema({
  //each document in the book collection will have a title, which is a string and is required
  title: { type: String, required: true },
  //a subtitle, not required, also a string
  subtitle: { type: String },
  //atuhros, an array of string, is also required
  authors: { type: [String], required: true },
  //link, which is a string and required
  link: { type: String, required: true },
  //description, which is a string and required
  description: { type: String, required: true },
  //image, a string, required
  image: { type: String, required: true },
  //googleId, a string, required, and must be unique (this functions as our primary key)
  googleId: { type: String, required: true, unique: true }
});

//setting Book to evaluate to the model above
const Book = mongoose.model("Book", bookSchema);

//exporting the book model via Book.
module.exports = Book;
