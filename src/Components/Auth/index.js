import React from 'react'
import Login from './login'
import SignUp from './signUp'

import firebase from '../../initializer/initilizer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";


class Index extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }
    
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}></Route>
                        <Route exact path="/signUp" component={SignUp}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Index;