import React from 'react'
import Card from 'react-bootstrap/Card';

function Character(props) {
    return (
        <Card style={{ width: '18rem' }} onClick={props.click}>
            <Card.Img variant='top' src={props.image} style={{ height: '13rem' }} id={props.id} clicked={props.clicked}/>
            <Card.Body>
                <Card.Title name={props.name}>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Character;