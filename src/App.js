import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta"
import "./index.css";


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          </Switch>
      </Router>
  );
}

export default App;
