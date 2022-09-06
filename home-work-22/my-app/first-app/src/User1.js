import React, { Component } from 'react';

export default class User1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility: false
      }
      this.first = this.first.bind(this);
    }
    
    first () {
        this.setState (state => ({
            visibility: !state.visibility
        }));
    }
    
    
    render() {
            if(this.state.visibility) {
                return (
                    <div style={{marginRight: '-125px'}}>
                        <button onClick={this.first}>First</button>
                        <p>Name: Jon</p>
                        <p>Phone: +380123456789</p>
                        
                    </div>
                    );
            }else{
                return (
                    <div>
                        <button onClick={this.first}>First</button>
                    </div>
                    );
            }
          
    }  

}
