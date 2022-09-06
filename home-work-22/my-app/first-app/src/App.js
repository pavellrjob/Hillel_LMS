 import './App.css';
 import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Users from './Users';
import Home from './Home'

function App() {
  return (
    <div>
      <header style={{display:'flex', backgroundColor: 'grey'}}>
        <h1 style={{margin: '30px'}}><Link style={{textDecoration: 'none'}} to='./'>Home</Link></h1>
        <h1 style={{margin: '30px'}}><Link style={{textDecoration: 'none'}} to='./Users'>Users</Link></h1>
      
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Users' element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
