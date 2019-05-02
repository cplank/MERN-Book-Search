//requiring the express package
const express = require("express");

//bringing in mongoose
const mongoose = require("mongoose");
//our routes
const routes = require("./routes");
//instantiaging express into app
const app = express();
//if in production, use process.env.PORT, otherwise use port 3001
const PORT = process.env.PORT || 3001;

//express middleware that parses our objects and returns JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//if we're in production, serve up our static files from client/build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//express use our routes!
app.use(routes);

//connecting mongoose to our mongodb
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://username:password321@ds133331.mlab.com:33331/heroku_lv2qq26h",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

//turn on our server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
