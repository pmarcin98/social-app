import React from 'react';
import S from '../styles/S.App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';


function App() {
  return (
    <div className="App">
      <Router>

        <S.Nav>
          <ul>
            <S.Li>
              <S.Link className="link" to="/">Home</S.Link>
            </S.Li>
            <S.Li>
              <S.Link className="link" to="/login">Login</S.Link>
            </S.Li>
            <S.Li>
              <S.Link className="link" to="/signup">SignUp</S.Link>
            </S.Li>
          </ul>
        </S.Nav>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
