import DashboardBrigadista from './components/arbol/DashboardBrigadista';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardAdmin from './components/arbol/DashboardAdmin';
import Registrarse from "./components/auth/Registrarse"
import Contacto from './components/layout/Contacto';
import Acercade from './components/layout/Acercade';
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import React from 'react';
import "./index.css";


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/registrarse" component={Registrarse}/>
              <Route exact path="/dashboard-admin" component={DashboardAdmin}/>
              <Route exact path="/dashboard-brigadista" component={DashboardBrigadista}/>
              <Route exact path="/acerca-de" component={Acercade}/>
              <Route exact path="/contacto" component={Contacto}/>
          </Switch>
      </Router>
  );
}

export default App;
