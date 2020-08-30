import React, {useRef} from 'react'
import Map from './map'

const mapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDjYo193fAvvAyQvJ9Z5ejJA47vjp7aplU"

class Index extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userLat: 25.686613,
            userLng: -100.316116
        }
    }

    componentDidMount = () =>{
    }

    render(){
        return(
            <Map 
                userLat = {this.state.userLat}
                userLng = {this.state.userLng}
                googleMapURL= {mapURL}
                containerElement= {<div style={{height: '90vh', zIndex: '0'}}></div>}
                mapElement = {<div style={{height: '100%'}}></div>}
                loadingElement = {<p>Cargando</p>}
            ></Map>
        )
    }
}

export default Index;