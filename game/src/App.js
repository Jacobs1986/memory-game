import React, { Component } from 'react';

// components
import characters from "./components/character-array.json";
import Cards from "./components/Character-cards";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Css
import "./App.css"

class App extends Component {
  state = {
    characters: characters
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1 className="center">Match Game!</h1>
          </Row>
          <Row>
            Click each of the characters below to raise your score. Make sure you click each character only once! Can you beat your highscore?
      </Row>
          <Row>
            <Col md={3}>
              Score:
      </Col>
            <Col md={3}>
              Highscore:
      </Col>
          </Row>
        </Container>
        <Container id="card-container">
          <Row className="justify-content-md-center">
            {this.state.characters.map((info, index) =>
              <Cards
                key={index}
                name={info.name}
                image={info.image}
              />
            )}
            </Row>
        </Container>
      </div>
    )
  }
}

export default App;
