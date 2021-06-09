import DashboardBrigadista from './components/dashboard/DashboardBrigadista';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DashboardAdmin from './components/dashboard/DashboardAdmin';
import EditInfoTree from './components/Changes/EditInfoTree';
import Registrarse from "./components/auth/Registrarse"
import Contacto from './components/layout/Contacto';
import Acercade from './components/layout/Acercade';
import Home from "./components/layout/Home";
import Login from "./components/auth/Login";
import { ContextProvider } from './context';
import Maps from './components/maps/Index';
import React from 'react';
import "./index.css";



function App() {
  return (
      <ContextProvider>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/registrarse" component={Registrarse}/>
              <Route exact path="/dashboard-admin" component={DashboardAdmin}/>
              <Route exact path="/dashboard-brigadista" component={DashboardBrigadista}/>
              <Route exact path="/acerca-de" component={Acercade}/>
              <Route exact path="/contacto" component={Contacto}/>
              <Route exact path='/edit-info' component={EditInfoTree}/>
              <Route exact path='/maps' component={Maps}/>
          </Switch>
        </Router>
      </ContextProvider>
  );
}

export default App;
