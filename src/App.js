import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";

import Map from './Components/Map/index'
import Nav from './Components/Nav/index'
import Auth from './Components/Auth/index'
import Survey from './Components/Survey/index'
import Profile from './Components/myProfile/index'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Map}></Route>
            <Route exact path="/survey" component={Survey}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
