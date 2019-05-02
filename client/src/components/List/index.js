//Importing React
import React from "react";
//Importing the CSS file for this component
import "./style.css";

// This component exports both the List and ListItem components. These are named exports that each take their children as props,
//meaning what we pass to children will render for each element within <ul></ul>. This allows for flexibility if we don't know
//how many elements (children) we're expecting ahead of time. In this case, List and ListItem are going to be passed props from 
//our API hit, so we know how many results are returned may vary from book to book.  

export const List = ({ children }) => (
  //list-group is a Bootstrap specific class
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  //We do a return here because we need access to the children of the returned element. list-group-item
  //is a Bootstrap class.
  return <li className="list-group-item">{children}</li>;
}
