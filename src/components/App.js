import React from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Router>

        <nav>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>

          <Route exact path="/" component={Home} />

          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
