import React from 'react'
import Login from './login'
import SignUp from './signUp'

class Index extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Login></Login>
                <SignUp></SignUp>
            </div>
        )
    }
}

export default Index;