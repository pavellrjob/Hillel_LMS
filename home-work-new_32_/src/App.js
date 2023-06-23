import './App.css';
import WSChat from './components/WsChat.js';
import WSProvider from './providers/wsProvider';

const App = () => (
  <WSProvider>
    <WSChat />
  </WSProvider>
);

export default App;
