//requriing path, which is declared by never read
const path = require("path");
//bringing in express and its built in middleware
const router = require("express").Router();
//bookRoutes is our router from books.js
const bookRoutes = require("./books");
//our router that was exported in google.js
const googleRoutes = require("./google");

//telling express to use that path (again, api/books/||api/books/:id)
router.use("/books", bookRoutes);

//telling express to use our google router path (api/google/)
router.use("/google", googleRoutes);

//exporting our router.
module.exports = router;
