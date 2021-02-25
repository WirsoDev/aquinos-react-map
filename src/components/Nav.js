import React from 'react'
import '../styles/load.css'
import '../styles/map.css'
import worldIcon from '../icons/World.svg'

function nav(){
    return(
            <div className="header">
                <h1 className="header-title">MIA<span>2021</span></h1>
                <p>Products around the world!</p>
                <h2>Total viewers <span>34</span></h2>
                <h2>AR available <span>20</span></h2>
            <img src={worldIcon} alt="world"/>
        </div>

    )
}
export default nav