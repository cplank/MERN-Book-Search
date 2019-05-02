//Importing React
import React from "react";
//ListItem is a named import from the List component. Importing here so we have access to it.
import { ListItem } from "../List";
//Row and Col are both named exports from the Grid component. Importing here so we have access to them. 
import { Row, Col } from "../Grid";
//Importing the CSS file for this component
import "./style.css";

// Book is a functional component and therefore not a stateful component. It takes various props as parameters
// which will then be fed in from different components. (title, subtitle, authors, link, description, image are
// all going to come from the information we get back from the API)
function Book({ title, subtitle, authors, link, description, image, Button }) {
  //always need to return so you have something to export. 
  return (
    //This is the returned element from the ListItem component we imported above.  
    <ListItem>
      {/* Now we're in JSX! You can tell by the combination of HTML and Javascript (introduced with {} around the Javascript)
    Row is the imported component from above that returns an element with children. We're giving it the Bootstrap class of
    flex-wrap-reverse our app is mobile friendly  */}
      <Row className="flex-wrap-reverse">
        {/* Col is the imported component from above. Feeding it the size prop, which the component uses to create a Bootstrap class
      of col-md-8 for the div that renders the child elements (the col is added inside the component function and returned). This
      is what makes sure the columns work inside the flex box and everything is mobile responsive. */}
        <Col size="md-8">
          {/*H3 element with the font-italic Bootstrap class (so it'll be italicized). The content that's rendered inside the element
      is the title of each book result from the API call.   */}
          <h3 className="font-italic">{title}</h3>
          {/*I'm pretty sure subtitle && is unncessary here. I removed it and everything still rendered fine. Otherwise, the
        H5 element will have the subtitle of each book result from the API call   */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
          {/* Closing the Col component */}
        </Col>
        {/* Starting a new Col component - this one will be a different size than the others and therefore its children will get 
        the Classname col-md-4 instead of 8 like the Col component above.  */}
        <Col size="md-4">
          {/* Creating a contaner for the buttons */}
          <div className="btn-container">
            {/* Giving the buttons bootstrap classes, opening in a new tab, and grabbing the link from each book result. This
          button takes the user to the Google Play Books store so they can view the book and purhcase it. */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* Brining in the Button component we passed through props above.*/}
            <Button />
          </div>
        </Col>
      </Row>
      {/* More of the same as above */}
      <Row>
        <Col size="md-6">
          {/* referecing the authros prop */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        {/* More of above - setting the different break points */}
        <Col size="12 sm-4 md-2">
          {/* Giving the image the source from the image prop and the title as its alt text */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          {/* Putting the description in a paragaph element */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

//Exporting this functional component
export default Book;
