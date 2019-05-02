//I think it's pretty clear from the last 5 components I get how this works. 
import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
