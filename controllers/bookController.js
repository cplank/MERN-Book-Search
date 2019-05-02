//instantiating our models into a variable, db
const db = require("../models");

//This export works with the API Component, and the  
//router export. From the user side, the user triggers an Axios call
//(when they visit the Saved page, for example), that Axios call is then routed
//, via the router export, to the correct path. Continuing on our example,
//when a user visits the Saved page, they are routed to the
//findAll method below from books.js (exported as router). The findAll
//method below is then run and returns the saved books.


//server-side exporting this module
module.exports = {
  //findAll method takes two parameters
  findAll: function (req, res) {
    //hitting our Book collection and running the mongoose .find
    //method with the object we're finding
    db.Book.find(req.query)
      //promise that returns an object that gets rendered as JSON
      .then(dbBook => res.json(dbBook))
      //return an error if something goes wrong
      .catch(err => res.status(422).json(err));
  },
  //method that runs a function with two parameters
  findById: function (req, res) {
    //hitting our Book collection and running the mongoose method 
    //findById, passing that method the id of the object we're searching
    db.Book.findById(req.params.id)
      //promise that returns a JSON object
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
  //method that funs a function with two parmeters
  create: function (req, res) {
    //hitting our Book collection and running the mongoose method
    //.create and passing it the object we want to create in the database
    db.Book.create(req.body)
      //promise that returns a JSON object
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //method that runs a function with two parameters
  update: function (req, res) {
    //hitting our Book Collection and running thte mongoose method
    //findOneAndUpdate, and passing it the id of the book we want to update and the
    //body of what needs to be updated
    db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
      //Promise that returns a JSON object 
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  //method with a function like above
  remove: function (req, res) {
    //hits our Book collection and runs the mongoose method
    //findById passing it the id of the book w want to find
    db.Book.findById(req.params.id)
      //First promise runs the .remove method
      .then(dbBook => dbBook.remove())
      //second promise then returns an object
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  }
};
