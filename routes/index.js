//requiring the path, which gets used here
const path = require("path");
//express and its friend
const router = require("express").Router();
//our apiRoutes
const apiRoutes = require("./api");

//tellling express to use the api path (api/books/||api/books/:id||api/google/)
router.use("/api", apiRoutes);

//telling express to point to our index.html page
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

//export our router
module.exports = router;
