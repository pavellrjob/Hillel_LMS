import React, { Component } from 'react';

export default class User2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility: false
      }
      this.second = this.second.bind(this);
    }
    
    second () {
        this.setState (state => ({
            visibility: !state.visibility
        }));
    }
    
    
    render() {
            if(this.state.visibility) {
                return (
                    <div style={{marginRight: '-105px'}}>
                        <button onClick={this.second}>Second</button>
                        <p>Name: Alice</p>
                        <p>Phone: +380123123123</p>
                        
                    </div>
                    );
            }else{
                return (
                    <div>
                        <button onClick={this.second}>Second</button>
                    </div>
                    );
            }
          
    }  

}
