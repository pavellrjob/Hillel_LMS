import React, { Component } from 'react';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';


export default class Users extends Component {
    
    render() {
                return (
                    <div style={{display: 'flex', marginLeft: '30px', marginTop:'50px'}}>
                        <div  style={{marginRight: '130px'}}><User1></User1></div>
                        <div  style={{marginRight: '130px'}}><User2></User2></div>
                        <div  style={{marginRight: '100px'}}><User3></User3></div>
                    </div>
                    );
            
          
    }  

      
}
