import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { styled } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Home />
    </div>
    </Router>
  );
}

export default App;
