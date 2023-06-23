import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WrapperForHeros from './components/wrapperForHeros.js';
import WrapperForEpisodes from './components/wrapperForEpisodes.js';
import HomePage from './components/homePage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/heroes" element={<WrapperForHeros />} />
        <Route path="/episodes" element={<WrapperForEpisodes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
