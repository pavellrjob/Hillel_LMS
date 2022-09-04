 import './App.css';
 import './Fcomponent'
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import image from './Box.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image}></img>
        <h1>First title</h1>
        <p>04.09.2022</p>
       
        <Fcomponent></Fcomponent>
        <Ccomponent url={image}></Ccomponent>
        <Ccomponent name="Boxing gloves"></Ccomponent>
        
      </header>
    </div>
  );
}

export default App;
