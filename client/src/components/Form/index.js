//import react
import React from "react";

//function component that takes three props
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    //beginning of the form
    <form>
      {/* Bootstrap form */}
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        {/* Start of where users can search for a book */}
        <input
          className="form-control"
          id="Title"
          type="text"
          // Passing in the q props which will upate as the user types
          value={q}
          // Placeholder
          placeholder="Ready Player One"
          name="q"
          // Passing in the handleInputChange method via props
          onChange={handleInputChange}
          // User has to put ssomething in in order to search
          required
        />
      </div>
      <div className="pull-right">
        <button
          // Passing the handleFormSubmit method through the onClick. 
          onClick={handleFormSubmit}
          // button's with type submit immediately refresh the page
          type="submit"
          // Bootstrap button classes
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

//Exporting the form component
export default Form;
