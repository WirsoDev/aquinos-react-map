import {React, useEffect, useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import env from "react-dotenv"
import '../styles/map.css'
import mapStyles from '../mapStyles'
import phoneIcon from '../icons/phone.svg'
import desktopIcon from '../icons/Desktop.svg'


const getDoc = async () => {
    const doc = new GoogleSpreadsheet(env.SHEET_ID);
    
    await doc.useServiceAccountAuth({
        client_email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

 
function Map(){

    const [locations, setLocations] = useState([])
    const [selected, setSelected] = useState()
    const [isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        let sheet;
        getDoc().then(doc => {
            sheet = doc.sheetsByIndex[0];
            sheet.getRows().then(rows => {
                rows.map(row => {
                    const data = row['_rawData']
                    setLocations(prevLocations =>([...prevLocations, ...[data]]))
                })
            })
        })
    },[])

    // debug!
    function clickHandler(obj){
       setSelected(obj)
    }

    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
    }

    return(
        <div className="rapper">
            <GoogleMap 
                defaultZoom={4}
                defaultCenter={{lat: 40.4000403,lng:-8.1229435}}
                options={options}
            >
            { locations.map((obj)=>{   
                return(
                    <Marker
                    onClick={()=>{clickHandler(obj)}}
                    position={{lat: parseFloat(obj[1]), lng: parseFloat(obj[2])}}
                    icon={obj[4]==='Desktop' ? {url:desktopIcon, scaledSize: new window.google.maps.Size(30, 30)}:{url:phoneIcon, scaledSize: new window.google.maps.Size(30, 30)}}
                    />
                )
            }) }
            {selected ?
            <InfoWindow 
            position={{lat: parseFloat(selected[1]), lng:parseFloat(selected[2])}}
            onCloseClick={()=>{setSelected(null)}}>
                <div className="box">
                    <h1>{`Model ${selected[0]}`}</h1>
                    <p>{`Seen on ${selected[4]}`}</p>
                    <p>{`At : ${selected[3].slice(0, 10)}`}</p>
                </div>
            </InfoWindow> 
            :null}
            </GoogleMap>
        </div>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


function RenderMap() {
    return(
        <div className="map">
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${env.API_KEY}`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
        />
        </div>
    )
}

export default RenderMap


