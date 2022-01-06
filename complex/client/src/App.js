import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 3
                  </a>
                  Realizacja zadania nr1 w ramach laboratorium PFSwCO.  
                  Jakub Nieradko
          <Link to="/">Home</Link>
           <Link to="/fibcal">Kalkulator</Link>
          <Link to="/otherpage">Opis uslugi</Link>
        </header>
        <div>
          <Route exact path="/fibcal" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;