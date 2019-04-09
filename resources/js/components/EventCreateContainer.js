import React, { Component } from 'react';

//import components
import EventCreate from './views/EventCreate';
import { createEvent } from './Api';

export default class EventCreateContainer extends Component {
  constructor(props){
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      date: "",
      description: ""
    }
  }

  onChangeName(input){
    this.setState({
     name: input.target.value
   });
  }

  onChangeDate(input){
    this.setState({
     date: input.target.value
   });
  }

  onChangeDescription(input){
    this.setState({
     description: input.target.value
   });
  }

  onSubmit(data){
    data.preventDefault();
    const obj = {
      "name": this.state.name,
      "date": this.state.date,
      "description": this.state.description
    }
    createEvent(obj)
    this.props.history.push('/')
  }

  render() {
    return(
      <EventCreate
        onChangeName={this.onChangeName}
        onChangeDate={this.onChangeDate}
        onChangeDescription={this.onChangeDescription}
        onClick={this.onSubmit}
      />
    )
  }
}
