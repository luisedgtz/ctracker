import React,{useEffect,useState}from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'
import axios from 'axios'

import vector from '../../Assets/iconMap.svg'

const mapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDjYo193fAvvAyQvJ9Z5ejJA47vjp7aplU"

export default function MapFunction(props){
    const [redZones,setRedZones] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        axios.get("/area").then((response)=>{
            setRedZones(response.data)
            setLoading(false)
            console.log(response.data)
        })
    },[])

    if (loading){
        return <div>Loading</div>
    }

    const Map = withScriptjs(withGoogleMap((props) =>
        <GoogleMap 
        defaultZoom={15}
        defaultCenter={{lat: 25.650998, lng: -100.289762}}>

            {redZones.map(zone =>
                <Marker icon={{url: vector}} key={zone.areaId} position={{lat: zone.location._latitude, lng: zone.location._longitude}}></Marker>
            )}
        </GoogleMap>
    ))

    return(
        <Map
        googleMapURL= {mapURL}
        containerElement= {<div style={{height: '90vh', zIndex: '0'}}></div>}
        mapElement = {<div style={{height: '100%'}}></div>}
        loadingElement = {<p>Cargando</p>}
        ></Map>
    )

}
