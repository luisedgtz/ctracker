import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Map from '../Map/index'
import Nav from '../Nav/index'
import Survey from '../Survey/index'
import Profile from '../myProfile/index'

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
                    <Nav></Nav>
                    <Switch>
                        <Route exact path="/app/map" component={Map}></Route>
                        <Route exact path="/app/survey" component={Survey}></Route>
                        <Route exact path="/app/profile" component={Profile}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Index;