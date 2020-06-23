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
    characters: characters,
    score: 0,
    clickState: false
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1 className="center">Marvel Memory</h1>
          </Row>
          <Row>
            <h3>
              Apocalypse is at it again! This time he's erased the X-Men's memory. Help them get it back by clicking each hero only once! Careful though, each time you choose one they will change position. It's up to you to keep track of who you have already helped.
            </h3>
      </Row>
          <Row>
            <Col md={3}>
              <h4>
                Score: {this.state.score}
              </h4>
      </Col>
            <Col md={3}>
              <h4>
                Highscore:
              </h4>
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
                clicked={this.state.clickState}
              />
            )}
            </Row>
        </Container>
      </div>
    )
  }
}

export default App;
