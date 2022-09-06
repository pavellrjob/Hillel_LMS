import React, { Component } from 'react';

export default class User3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility: false
      }
      this.third = this.third.bind(this);
    }
    
    third () {
        this.setState (state => ({
            visibility: !state.visibility
        }));
    }
    
    
    render() {
            if(this.state.visibility) {
                return (
                    <div>
                        <button onClick={this.third}>Third</button>
                        <p>Name: Bob</p>
                        <p>Phone: +380123213543</p>
                        
                    </div>
                    );
            }else{
                return (
                    <div>
                        <button onClick={this.third}>Third</button>
                    </div>
                    );
            }
          
    }  

}
