import React from 'react'
import Profile from './profile'

class Index extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Profile></Profile>
            </div>
        )
    }
}

export default Index;