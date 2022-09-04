import React, { Component } from 'react';

export default class Ccomponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url}></img>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
