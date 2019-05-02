//Importing react
import React from "react";
//Named functional components from Grid
import { Col, Row, Container } from "../components/Grid";
//Jumbotron import
import Jumbotron from "../components/Jumbotron";

//functional component
function NoMatch() {
  //must return
  return (
    //bringing in the Container Component and giving it a prop of fluid. As we know, if Container is fed fluid,
    //it becomes a Bootstrap class of container-fluid, otherwise it just remains a Bootstrap class of container.
    <Container fluid>
      {/* Bringin in the row component */}
      <Row>
        {/* Col, feeding it a prop of md-12 to determine it's Bootstrap class again */}
        <Col size="md-12">
          {/* Start of the Jumbotron */}
          <Jumbotron>
            {/* Two h1 HTML elements that are centered, letting the user know they've hit a 404 and showing
          them an eyeroll emoji, which is a little rude TBH (although it probably is their fault) */}
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            {/* Closing all our Components */}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
// Exporting the component
export default NoMatch;
