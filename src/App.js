import React, { Component } from 'react';
import firebase from './initializer/initializer'

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
          <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Map}></Route>
            <Route exact path="/survey" component={Survey}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </Switch>
        </Router>
      </div>
      </div>
        {/* {this.state.user ? (<Home/>):(<Login/>)} */}
      </div>
    );
  }
  
}

export default App;
