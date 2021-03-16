import { React, useEffect, useState } from "react";
import WrappedMap from './Maps'
import Nav from './Nav'
import env from "react-dotenv"
import '../styles/load.css'
import '../styles/map.css'


function RenderMap() {
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(true)
        }, 3000)
        return(()=>{
            clearTimeout(timer)
        })
    }, [])

    if(loading){
        return(
            <div className="map">
                <Nav />
                <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${env.API_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
            </div>
        )
    }else{
        return(
            <div className="onload">
                <span></span>
            </div>
        )
    }

}


export default RenderMap