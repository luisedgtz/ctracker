import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps'

const Map = (props) =>{

    return(
        <GoogleMap 
        defaultZoom={15}
        defaultCenter={{lat: props.userLat, lng: props.userLng}}/>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
