//importing express and its built in middleware, .Router 
const router = require("express").Router();
//importing our google controllers
const googleController = require("../../controllers/googleController");

//this is the root route for the path api/google. It only runs a GET method to googleController.findAll
router
  .route("/")
  .get(googleController.findAll);

//exporting our router.
module.exports = router;
