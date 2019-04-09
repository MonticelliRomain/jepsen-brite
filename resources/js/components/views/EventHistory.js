import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export default class EventHistory extends Component {
  render() {
    return(
      <>
      <div>
        {this.props.package.map(event =>
          <Card bg="light" style={{ width: '100%', marginBottom: '0.5rem' }} key={event.id}>
            <Card.Body>
              <Card.Title>
                <h3>{event.name}</h3>
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


