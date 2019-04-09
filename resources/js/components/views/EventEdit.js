import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

//import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class EventEdit extends Component {
  render() {
    return(
      <>
      <Form>
        <Form.Group controlId="createForm.ControlInput1">
          <Form.Label>Name of the event:</Form.Label>
          <Form.Control type="text" defaultValue={this.props.package.name} onChange={this.props.onChangeName}/>
        </Form.Group>
        <Form.Group controlId="createForm.ControlInput2">
          <Form.Label>Date of the event:</Form.Label>
          <Form.Control  defaultValue={this.props.package.date} onChange={this.props.onChangeDate}/>
        </Form.Group>
        <Form.Group controlId="createForm.ControlTextarea1">
          <Form.Label>Description of the event:</Form.Label>
          <Form.Control type="text" defaultValue={this.props.package.description} onChange={this.props.onChangeDescription}/>
        </Form.Group>
      </Form>
        <div>
          <ConfirmModalContainer
            variant="info"
            label="Submit change"
            message="Do you want to change this event ?"
            onClick={this.props.onClick}/>
        </div>

      </>
    )
  }
}
