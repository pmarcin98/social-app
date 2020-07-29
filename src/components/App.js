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

    <div className="Container">

    <S.DivLeft>
      <S.Svg viewBox="0 0 24 24" ><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></S.Svg>
    </S.DivLeft>

    <S.DivRight>

      <Router>

        <S.Nav>
          <S.Ul>
            <S.Li>
              <S.Link className="link" to="/">Home</S.Link>
            </S.Li>
            <S.Li>
              <S.Link className="link" to="/login">Login</S.Link>
            </S.Li>
            <S.Li>
              <S.Link className="link" to="/signup">SignUp</S.Link>
            </S.Li>
          </S.Ul>
        </S.Nav>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />

          
        </Switch>
      </Router>
    </S.DivRight>
    <S.Footer>
        <S.A href="https://twitter.com/">Informacje</S.A>
        <S.A href="https://twitter.com/">Centrum Pomocy</S.A>
        <S.A href="https://twitter.com/">Warunki</S.A>
        <S.A href="https://twitter.com/">Polityka Prywatności</S.A>
        <S.A href="https://twitter.com/">Cookies</S.A>
        <S.A href="https://twitter.com/">Informacja o reklamach</S.A>
        <S.A href="https://twitter.com/">Blog</S.A>
        <S.A href="https://twitter.com/">Status</S.A>
        <S.A href="https://twitter.com/">Oferta pracy</S.A>
        <S.A href="https://twitter.com/">Marka</S.A>
        <S.A href="https://twitter.com/">Reklama</S.A>
        <S.A href="https://twitter.com/">Marketing</S.A>
        <S.A href="https://twitter.com/">Firmy</S.A>
        <S.A href="https://twitter.com/">Deweloperzy</S.A>
        <S.A href="https://twitter.com/">Ścieżka</S.A>
        <S.A href="https://twitter.com/">Ustawienia</S.A>

        <p>© 2020 Twitter, Inc.</p>
       
    </S.Footer>
    </div>
  );
}

export default App;
