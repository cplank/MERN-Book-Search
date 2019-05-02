//Importing axios so we can do our API calls
import axios from "axios";

//exporting all of these methods
export default {
  //this method runs a function that takes an argument.
  getBooks: function (q) {
    //and on return, runs a GET axios call that gets routed through api/google (which
    //points to googleController) sending over parameters of q, which evalutes to a string "title",
    //+ q, which is a vairable that evaluates to the user's search. This is contructing the query URL that will
    //be used to hit the Google Books API 
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  //this method runs a function that doesnt take any arguments
  getSavedBooks: function () {
    //returns the result from a GET call to the api/books route that goes through books.js. Since this is a GET, 
    //api/books will hit the findAll method from bookController and return all books
    return axios.get("/api/books");
  },

  //this method is how we delete a book. It runs a function that takes a parameter, in this case id
  deleteBook: function (id) {
    //it sends an axios call to books.js, which then points to the remove method in bookController
    return axios.delete("/api/books/" + id);
  },

  //saveBook runs a function that takes the bookData object (which we constructed inside the Home page)
  saveBook: function (bookData) {
    //axios then does a POST via the api/books route which is routed in books.js and points to the bookController
    //create method.
    return axios.post("/api/books", bookData);
  }
};
