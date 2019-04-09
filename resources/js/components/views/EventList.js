import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//import components


export default class EventList extends Component {
  render() {
    return(
      <>
        <div>
          {this.props.package.map(event =>
            <Card bg="light" style={{ width: '100%', marginBottom: '0.5rem' }} key={event.id}>
              <Card.Body>
                <Card.Title>
                  <h3>{event.name}</h3>
                  <h4>{event.author}</h4>
                </Card.Title>
                <Card.Text>
                  {event.description}
                </Card.Text>
                <Card.Text>
                  {event.date}
                </Card.Text>
                <Link to={"/event-display-"+event.id}>
                  <Button variant="secondary">More info</Button>
                </Link>
              </Card.Body>
            </Card>
          )}
        </div>
      </>
    )
  }
}
