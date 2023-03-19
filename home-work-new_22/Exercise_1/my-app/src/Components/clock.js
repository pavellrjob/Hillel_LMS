import React from 'react';
import Car from '.././Car.jpg';
import '.././App.css';


const allStyle = {
  image: {
    width: '300px',
    height: '150px',
    margin: '50px',
    borderRadius: '10px'
  },
  conteiner: {
    padding: '5px',
    width: '350px',
    height: '300px',
    border: '2px solid #282c34'
  },
  text: {
    width: '300px',
    margin: '50px',
    marginTop: '0',
    textAlign: 'center',
    border: '2px solid #282c34'
  },
  time: {
    maxWidth: '300px',
    marginLeft: '100px'
  }
}



class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style={allStyle.time}>
        <h2>{`This time - ${this.state.date.toLocaleTimeString()}`}</h2>
      </div>
    );
  }
} 




class Clock extends React.Component {
  constructor (props) {
    super (props)
  }
  render() {
    return (
      <div style={this.props.conteiner}>
        <img src={this.props.image} style={allStyle.image}/>,
        <p style={allStyle.text}>{`first-${this.props.text}`}</p>
        
      </div>
    );
  }
}


function App() {
  return (
    <React.Fragment>
      <Timer>
        <h2></h2>
      </Timer>
      <Clock text='Some text' image={Car}></Clock>
    </React.Fragment>
  )
}

export default App;