import React, { Component } from 'react';

let today = new Date();
    today.setHours(today.getHours() - today.getTimezoneOffset() / 60)
    let UTCstring = today.toUTCString();
    console.log(UTCstring);


<div className='today'></div>

export default class Users extends Component {
  render() {
    return (
      <div>
        <h1 style={{marginLeft: '35%'}}>Wellcom to home-page!</h1>
        <p style={{marginLeft: '38%'}}>{UTCstring}</p>
      </div>
    );
  }
  
}
