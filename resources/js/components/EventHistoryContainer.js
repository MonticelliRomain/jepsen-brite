import React, { Component } from 'react';

//import components
import EventHistory from './views/EventHistory';
import { getOldEvents } from './Api';

export default class EventHistoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    const events = await getOldEvents();
    this.setState({
     events: events
   })
 }

  render() {
    return(
      <EventHistory package={this.state.events} />
    )
  }
}
