//Importing reac and the class Component
import React, { Component } from "react";
//All of our Component imports
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
//Named imports from Grid and List
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//Saved extends the Component Class and therefore has access to state
class Saved extends Component {
  //setting the initial state
  state = {
    //books starts out as an empty array
    books: []
  };

  //once our Component has rendered, run the getSavedBooks method that's declared below
  componentDidMount() {
    this.getSavedBooks();
  }

  //getSavedBooks is a method of the Saved Class
  getSavedBooks = () => {
    // run the getSavedBooks function inside our API Component
    API.getSavedBooks()
      //Once that runs, this promise will happen
      .then(res =>
        //set the state of books above to be the data we get back from the GET method 
        //inside the getSavedBooks function.
        this.setState({
          books: res.data
        })
      )
      //if something goes wrong, log the error to the console
      .catch(err => console.log(err));
  };

  //a method that takes a parameter
  handleBookDelete = id => {
    //run the deleteBook function inside the API Component, passing
    //the parameter above to delete book (becuase it also needs an argument)
    //After that finishes, run another promise that calls the getSavedBooks
    //method above so we can see our newly updated saved books list (without the book
    //we just deleted)
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  //renders the page
  render() {
    //gotta return
    return (
      //Container Component. Since we're not passing fluid as a prop, this Container will have the 
      //Bootstrap class of container, NOT container-fluid
      <Container>
        {/* Bringing in the Row Component */}
        <Row>
          {/* Col Component and feeding it the breakpoint for its Bootstrap class */}
          <Col size="md-12">
            {/* Jumbotron Component */}
            <Jumbotron>
              {/* h1 HTML element that is centered and has some bolded text */}
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              {/* h2 HTML element that is centered and has some text */}
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
              {/* Closing up our Components */}
            </Jumbotron>
          </Col>
        </Row>
        {/* Starting a new Row Component */}
        <Row>
          {/* Col, again feeding the breakpoint */}
          <Col size="md-12">
            {/* Render the Card Component with the Saved Books title and donwload icon as its props */}
            <Card title="Saved Books" icon="download">
              {/* IF the books array has a length */}
              {this.state.books.length ? (
                // Render the List Component
                <List>
                  {/* Map over books in the array */}
                  {this.state.books.map(book => (
                    // Render a Book Component for each book in the array
                    <Book
                      // Pass its props with their values
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      // Button prop
                      Button={() => (
                        <button
                          // This time, insetead of saving, this button runs the handleBookDelete method above,
                          //feeding the arugment of the id of the current book
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
                // Otherwise, if the array is empty, let the user know they don't have any saved book
              ) : (
                  <h2 className="text-center">No Saved Books</h2>
                )}
              {/* Closing all our Components */}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// Export all that biz!
export default Saved;
