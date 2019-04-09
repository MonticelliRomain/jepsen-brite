import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// import components
import ConfirmModalContainer from '../ConfirmModalContainer';

export default class UserRegister extends Component{
    render(){
        return(
           <>
             <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" onChange={this.props.onChangeName}/>
                </Form.Group>
                <Form.Group controlId="formBasicPseudo">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control type="pseudo" placeholder="Pseudo" onChange={this.props.onChangePseudo}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.props.onChangeEmailAdress}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.props.onChangePassword}/>
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            <div><ConfirmModalContainer
                variant="primary"
                label="Submit"
                message="Do you want to edit this event ?"
                onClick={this.props.onSubmit}/>
            </div>
           </>
        );
    }
}
    
    
    
    
