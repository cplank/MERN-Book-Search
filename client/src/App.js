//Importing React
import React from "react";
//Importing the named Components from the react-router pacakage
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Importing all of our pages, and our Nav Component
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

//App is a functional component
function App() {
  return (
    //The Router Component from the react-router package is what lets us easily have different pages
    <Router>
      <div>
        {/* Nav Component is visible on all our pages */}
        <Nav />
        {/* Switch Component from react-router allows us to switch between pages */}
        <Switch>
          {/* Route Component, feeding it the exact path so our pages don't append onto each other
        Sending it the path to our Home Component Page */}
          <Route exact path="/" component={Home} />
          {/* Route to the Saved Component Page */}
          <Route exact path="/saved" component={Saved} />
          {/* Route to the No Match Component Page */}
          <Route component={NoMatch} />
          {/* Closing our Components and div */}
        </Switch>
      </div>
    </Router>
  );
}

//Export that biz!
export default App;
