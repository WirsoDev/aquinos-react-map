import React from 'react'
import '../styles/load.css'
import '../styles/map.css'
import worldIcon from '../icons/World.svg'
import Getdata from './GetData'


function nav(){
    return(
            <div className="header">
                <h1 className="header-title">MIA<span>2021</span></h1>
                <p>Products around the world!</p>
                <Getdata />
                <img src={worldIcon} alt="world"/>
            </div>

    )
}
export default nav