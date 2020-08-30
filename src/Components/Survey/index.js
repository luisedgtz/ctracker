import React from 'react'
import Survey from './survey'

class Index extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Survey></Survey>
            </div>
        )
    }
}

export default Index;