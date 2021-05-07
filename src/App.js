import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import Registrarse from "./components/auth/Registrarse"
import DashboardAdmin from './components/arbol/DashboardAdmin';
import "./index.css";


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/registrarse" component={Registrarse}/>
              <Route exact path="/dashboard-admin" component={DashboardAdmin}/>
          </Switch>
      </Router>
  );
}

export default App;
