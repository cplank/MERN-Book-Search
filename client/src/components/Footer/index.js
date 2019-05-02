//Importing react
import React from "react";

//functional component
function Footer() {
  return (
    <footer>
      <hr />
      {/* paragraph with Bootstrap pull-right (keeps it to the right of the container) */}
      <p className="pull-right">
        {/* Github icon */}
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

//exporting the component
export default Footer;
