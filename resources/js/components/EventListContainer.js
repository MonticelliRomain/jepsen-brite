import React, { Component } from 'react';

//import components
import EventList from './views/EventList';
import { getAllEvents } from './Api';

export default class EventListContainer extends Component {
  constructor (props) {
    super (props);
    this.state = {
      events: []
    }
  }

 async componentDidMount() {
     const events = await getAllEvents();
     this.setState({
      events: events
    })
  }

  

  render() {
    return(
      <EventList package={this.state.events}/>
    )
  }
}
