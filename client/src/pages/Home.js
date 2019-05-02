//Importing React and the Component class from reach
import React, { Component } from "react";
//More component imports
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";

//Named imports from the Grid component
import { Col, Row, Container } from "../components/Grid";
//named import from list component
import { List } from "../components/List";

//Home extends the Component class we imported above and therefore has access to state
class Home extends Component {
  //setting the initial state
  state = {
    //books is an empty array
    books: [],
    //q is an empty string (this comes into play in the Form component)
    q: "",
    //If books array above is empty, show this message
    message: "Search For A Book To Begin!"
  };

  //handleInputChange method occurs onChange from the Form Component
  handleInputChange = event => {
    //passing two props
    const { name, value } = event.target;
    //method that sets the new state
    this.setState({
      //the value of name will be dynamically updated as the user searches for a book.  
      [name]: value
    });
  };

  //This is the method that calls the Google Books API via the API Component we imported above
  getBooks = () => {
    // this hits the getBooks function inside API Component and passes it
    // q, which will contain the users book search. The initial state of q is an empty string
    //until completes a search
    API.getBooks(this.state.q)
      //If the API is successfully hit, this promise will run
      .then(res =>
        //Setting the state of the books array to be the object we get back from the Google Books API
        this.setState({
          books: res.data
        })
      )
      //If something goes horribly wrong, set books back to an empty array and run a new
      //message letting the user know nothing was found. 
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  //This is a method that is responsible for the submit button. The event is the onClick
  handleFormSubmit = event => {
    //prevent the submit button from refreshing the page
    event.preventDefault();
    //run the getBooks method above
    this.getBooks();
  };

  //This method is run when the save button is clicked. It takes a parameter, in this case
  //the id of the book.
  handleBookSave = id => {
    //Here, we're setting book to be the book whose id matches the id that was passed into 
    //handleBookSave 
    const book = this.state.books.find(book => book.id === id);

    //calling the saveBook function inside the API Component
    API.saveBook({
      //Since saveBook is a POST method, we need to send it the bookData its expecting.
      //we do that here, setting the data we get back from Google to fit our Collection structure
      //(i.e setting the googleId, since we'll have our own book id)
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
      //Once all that is set, this promise will run, which in turn runs the getBooks method above.
    }).then(() => this.getBooks());
  };

  //render function is what renders the whole page
  render() {
    //return so we can export below
    return (
      //Container component. Since we're not passing the props of fluid, this container will have the Bootstrap
      //class of container, NOT container-fluid.
      <Container>
        {/* Row component */}
        <Row>
          <Col size="md-12">
            {/* Jumbotron component */}
            <Jumbotron>
              {/* setting our header to be centered */}
              <h1 className="text-center">
                {/* Bolded header text */}
                <strong>(React) Google Books Search</strong>
              </h1>
              {/* Bootstrap centered h2 element with text */}
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
              {/* exiting our jumbotron and col components */}
            </Jumbotron>
          </Col>
          {/* starting a new column component */}
          <Col size="md-12">
            {/* Starting a Card component and declaring it's title and icon props */}
            <Card title="Book Search" icon="far fa-book">
              {/* Starting the form component */}
              <Form
                // handleInputChange evaluates to the handleInputChange method declared in the Home object,
                //which is why we need to declare this.handleInputChange. This points to the Home object. Same 
                //for handleFormSubmit.
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                //points to the q above in initial state, which will start out as an empty string.
                q={this.state.q}
              //closing the Form, Card, Col, and Row Components
              />
            </Card>
          </Col>
        </Row>
        {/* Starting a new Row with the Row Component */}
        <Row>
          {/* New Col with the Col Component */}
          <Col size="md-12">
            {/* New Card with the props of "results" being passed through Title  */}
            <Card title="Results">
              {/* Ternerery - if the books array we declared above isn't empty (but on inital state, it is empty) */}
              {this.state.books.length ? (
                // Render the List Component
                <List>
                  {/* Map over the current instance of the books array (which is why state) */}
                  {this.state.books.map(book => (
                    // For each book in the book array, render the Book Component
                    <Book
                      //The Book Component (for each book in the array above), gets passed the values for its props. 
                      // We need a key, so key is the book id we get back from the API
                      key={book.id}
                      // title, subtitle, link, authors, description, image are all taken from the API. book.volumeInfo.title
                      // is the path to retrieve the title from the Google Books object.
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      // Adding a join here so if there are multiple authors their names will be separated by a comma
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      // This is the save button prop. It generates a save button with an onClick function that calls the 
                      // handleBookSave method above
                      Button={() => (
                        <button
                          // Passing handleBookSave the book id
                          onClick={() => this.handleBookSave(book.id)}
                          // Bootstrap button class
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    // Exiting the Book Component
                    />
                  ))}
                  {/* Closing the List Component */}
                </List>
                // End of the ternary statement - if the array is empty, show the message that we set in the state above.
              ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              {/* Close the remaining Components */}
            </Card>
          </Col>
        </Row>
        {/* Bringing in the Footer Component */}
        <Footer />
        {/* Closing up the entire Container */}
      </Container>
    );
  }
}

// Export all this biz!
export default Home;
