import { React, useEffect, useState } from "react";
import WrappedMap from './Maps'
import env from "react-dotenv"
import '../styles/load.css'
import '../styles/map.css'
import worldIcon from '../icons/World.svg'



function RenderMap() {

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(true)
        }, 4000)
        return(()=>{
            clearTimeout(timer)
        })
    }, [])

    if(loading){
        return(
            <div className="map">
                <div className="header">
                    <h1 className="header-title">MIA<span>2021</span></h1>
                    <p>Products around the world!</p>
                    <h2>Total viewers <span>2</span></h2>
                    <h2>AR available <span>2</span></h2>
                    <img src={worldIcon} alt="world"/>
                </div>
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
                <h1>loading data</h1>
            </div>
        )
    }

}


export default RenderMap