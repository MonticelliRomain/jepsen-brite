import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

export default class ConfirmModal extends Component {
  render() {
    return(
      <React.Fragment>
        <Button variant={this.props.variant} onClick={this.props.handleShow}>
          {this.props.label}
        </Button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation required</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={this.props.onClick}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}
