import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import '../styles/map.css'
import env from "react-dotenv"

function Map(){
    
    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 40.4000403,lng:-8.1229435}}/>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function RenderMap() {
    return(
        <div className="map">
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${env.API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
    )
}

export default RenderMap


