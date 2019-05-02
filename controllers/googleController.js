//Importing axios for our API calls
const axios = require("axios");
//instantiaing our models into the variable db
const db = require("../models");


//server-side module expxort
module.exports = {
  //findAll method runs a function with two parameters
  findAll: function (req, res) {
    //setting req to be our query params from the getBooks method inside
    //our API Component
    const { query: params } = req;
    //doing the axiso call
    axios
      //GET method hitting the Google Books API using the proper query formatting which we get when
      //the getBooks method is run from the API Component
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      //promise returns the results
      .then(results =>
        //filtering through our results and saving the data we need
        //inside result
        results.data.items.filter(
          result =>
            //grabbing the title, link, authors, description, links, and thumbnails. Later,
            //these will become props that are fed to the Card Component
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )

      //Once the above promise wraps up, run a new function that takes one parameter 
      .then(apiBooks =>
        //Hitting our Book Collection and running the mongoose method find
        //run a new promise with a function with one parameter (an array of books)
        db.Book.find().then(dbBooks =>
          //Filter on our parameter 
          apiBooks.filter(apiBook =>
            //
            dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
          )
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};
