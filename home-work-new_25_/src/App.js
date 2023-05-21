import './App.css';
import WrapperForHeros from './components/wrapperForHeros.js';
import WrapperForEpisodes from './components/wrapperForEpisodes.js';

function App() {
  return (
    <div className="container App">
      <div className="row">
        <div className="col-6">
          <h5>List of characters</h5>
          <WrapperForHeros />
        </div>
        <div className="col-6">
          <h5>List of episods</h5>
          <WrapperForEpisodes />
        </div>
      </div>
    </div>
  );
}

export default App;
