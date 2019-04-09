import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer'

export default class EventDisplay extends Component {
  render() {
    return(
      <>
        <div>
          <Card className="text-center">
            <Card.Header> {this.props.package.name} {this.props.package.username} {this.props.package.date}</Card.Header>
            <Card.Body>
              <Card.Text>
                {this.props.package.description}
              </Card.Text>
              <p>Lorem ipsum</p>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Row>
                <Col>
                  <p>I want to go !</p>
                </Col>
                <Col>
                <Form>
                  <Link to={"/event-edit-"+this.props.package.id}>
                    <Button variant="secondary">Edit Event</Button>
                  </Link>
                </Form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="mb-3">
                      <Form.Check
                        custom
                        type='checkbox'
                        id="custom-checkbox"
                        label="Register to this event"
                      />
                  </div>
                </Col>
                <Col>
                  <div><ConfirmModalContainer
                    variant="danger"
                    label="Erase"
                    message="Do you want to delete this event ?"
                    onClick={this.props.onClick}/>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </div>
        <CardDeck>
          {this.props.participants.map(participant =>
            <Card key={Math.random()}>
              <Card.Body>
                <Card.Title>{participant.pseudo}</Card.Title>
                <Card.Text>
                  Lorem Ipsum
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          )}
        </CardDeck>
      </>
    )
  }
}
