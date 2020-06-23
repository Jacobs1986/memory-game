import React, { Component } from 'react';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class App extends Component {

  render() {
    return (
      <Container>
        <Row>
          <h1>Match Game!</h1>
        </Row>
      </Container>
    );
  }
}

export default App;
