import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import Logout from './components/logout';
import PrivateRoute from './components/HOC/withPrivate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute>
          <Route path="/home" component={Home} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
