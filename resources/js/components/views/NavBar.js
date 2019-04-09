import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

//importcomponents
import { logUser } from '../Api';

export default class NavBar extends Component{
  constructor(props){
    super(props);

    this.onChangeEmailAdress = this.onChangeEmailAdress.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      emailAdress: "",
      password: ""
    }
  }

  onChangeEmailAdress(input) {
    this.setState({
      emailAdress: input.target.value
    })
  }

  onChangePassword(input) {
    this.setState({
      password: input.target.value
    })
  }

  onSubmit(data) {
    data.preventDefault();
    let obj = {
      "email": this.state.emailAdress,
      "password": this.state.password
    };
    logUser(JSON.stringify(obj));
  }

  render() {
    return(
      <>
      <Navbar bg="primary" variant="dark" style={{ marginBottom: '0.5rem' }}>
        <Link to={"/"}>
          <Button variant="primary">Home</Button>
        </Link>
        <Nav className="mr-auto">
          <Link to={"/event-create"}>
            <Button variant="primary">Create Event</Button>
          </Link>
          <Link to={"/event-history"}>
            <Button variant="primary">Past Events</Button>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Email" className=" mr-sm-2" onChange={this.onChangeEmailAdress}/>
          <FormControl type="password" placeholder="Password" className=" mr-sm-2" onChange={this.onChangePassword}/>
          <Button type="submit" onClick={this.onSubmit}>Login</Button>
        </Form>
        <Link to={"/user-register"}>
          <Button variant="primary">Register</Button>
        </Link>
      </Navbar>
      </>
    )
  }
}
