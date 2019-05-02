//Importing react
import React from "react";

//Exporting a named component, Container, a functional component takes two props
export function Container({ fluid, children }) {
  //returning the HTML element, if container has been fed the prop fluid, make the Bootstrap class
  //container-fluid, otherwise the Bootstrap class will just be container. 
  //Render all its children with their biz
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//exporting named function Row, which also takes two props
export function Row({ fluid, children }) {
  //again, make it a fluid element if that prop is passed, otherwise don't. Children always, tho
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//Col takes two props, but instead of fluid its size
export function Col({ size, children }) {
  return (
    <div
      //Do some weirdly unnecessary finaglying so that the Boostrap class is col-whateverpropis-fed. This allows
      //the flexbox to shrink and grow the proper amount depending on the breakpoint and how many columns
      //are needed. 

      //I feel like there should be an easier way. 
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {/* children, yo */}
      {children}
    </div>
  );
}
