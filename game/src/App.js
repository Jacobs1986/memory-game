import React, { Component } from 'react';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {

  render() {
    return (
      <Container>
        <Row>
          <h1>Match Game!</h1>
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
        <Row>
          Character cards go here
        </Row>
      </Container>
    );
  }
}

export default App;
