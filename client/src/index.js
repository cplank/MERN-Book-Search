//Importing react
import React from "react";
//importing ReactDOM which is a package that provides DOM-specific methods
//like the all important render() method
import ReactDOM from "react-dom";
//importing the App Component (which is a class component)
import App from "./App";
//This is some biz that comes with create-react-app
import registerServiceWorker from "./registerServiceWorker";

//This renders the App Component (where all of our route pages are located) and renders it inside
//the HTML element with the id of "root"
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
