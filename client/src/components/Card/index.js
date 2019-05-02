//Importing react
import React from "react";

//functional component, Card, takes three props
function Card({ icon, title, children }) {
  //Always return!
  return (
    //Standard Bootstrap card
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* The book icon and the title  */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* Rendering all the children props in the card body */}
      <div className="card-body">{children}</div>
    </div>
  );
}

//exporting the component
export default Card;
