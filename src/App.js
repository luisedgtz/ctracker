import React, { Component } from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  } from "react-router-dom";

import Auth from './Components/Auth/index'
import app from './Components/App/index'
import firebase from './initializer/initilizer'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user);
      if(user){
        this.setState({user});
      //  localStorage.setItem('user', user.uid);
      }else {
        this.setState({user:null});
      //  localStorage.removeItem('user');
      }
    });

  }

  render(){
    return (
      <div className="App"><div className="App">
      <div className="wrapper">
        <Router>
        {this.state.user ? (<Redirect to="/app/map"></Redirect>) : (<Redirect to="/"></Redirect>)}
          <Switch>
            <Route exact path="/app/map" component={app}></Route>
            <Route exact path="/" component={Auth}></Route>
          </Switch>
        </Router>
      </div>
      </div>
      </div>
    );
  }
  
}

export default App;
