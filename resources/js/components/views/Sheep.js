import React, { Component } from 'react';

export default class Sheep extends Component {
  render() {
    return(
      <div>
        Example.js says : {this.props.message}
        <p>"You're god damn right !"</p>
      </div>
    )
  }
}
