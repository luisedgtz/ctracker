import React, { Component } from 'react';
import firebase from './initializer/initializer'

import './App.css';

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
      <div className="App">
        {this.state.user ? (<Home/>):(<Login/>)}
      </div>
    );
  }
  
}

export default App;
