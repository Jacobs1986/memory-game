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
    score: 0
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Function to do something when the character is clicked.
characterClick = (state) => {
  // The function gets the click state of the object
  // Conditional statement
  // If the state is false
  if (!state) { 
    // then it needs to be set to true
    console.log("This character hasn't been selected yet.")
    // The score needs to update
    // Then the entire array needs to be reshuffled
  }
  // Else if the state is true
  else {
    console.log("This character has been selected.")
    // The game is over.
    // The current score needs to be set to high score
  }
}

componentDidMount() {
  this.setState({ characters: this.shuffle(characters) });
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
           {this.state.characters.map((info, index) => {
             return (
               <Cards 
                key={index}
                id={index}
                name={info.name}
                image={info.image}
                clicked={info.clicked}
                click={this.characterClick}
               />
             )
           })}
            </Row>
        </Container>
      </div>
    )
  }
}

export default App;
