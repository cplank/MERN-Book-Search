//requiring express and its built in middleware, .Router
const router = require("express").Router();
//importing our controllers
const bookController = require("../../controllers/bookController");

//This is the root route for books. For example, inside our API Component, when a user
//goes to the Saved Page Component, that hits this route with a GET method,
//so we know we'll run bookController.findAll from the controller Compopnent imported above.  
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

//These are the routes that are id specific - find by id, update,
//and delete all need the id of the book in order ot run.
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

//exporting our router
module.exports = router;
