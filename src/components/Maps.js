import {React, useEffect, useState} from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import env from "react-dotenv"
import '../styles/map.css'


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

    useEffect(()=>{
        let sheet;
        let buck = []
        getDoc().then(doc => {
            sheet = doc.sheetsByIndex[0];
            sheet.getRows().then(rows => {
                rows.map(row => {
                    //console.log(row['_rawData']);
                    const data = row['_rawData']
                    buck.push(data)
                })
            })
        })
        setLocations(buck)
    },[])

    // debug!
    function clickHandler(){
        locations.map((obj)=>{
            return(
                console.log(parseFloat(obj[1]))
            )
        })
    }

    return(
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat: 40.4000403,lng:-8.1229435}}
        >
        <Marker position={{lat: 41.23425345,lng:-8.1223435}} onClick={clickHandler}/>
        <Marker position={{lat: 41.23425345,lng:-8.1249435}} onClick={clickHandler}/>
        <Marker position={{lat: 41.23425345,lng:-8.1269435}} onClick={clickHandler}/>
        { locations.map((obj)=>{
            
            return(
                <Marker position={{lat: parseFloat(obj[1]), lng: parseFloat(obj[2])}}/>
            )
        }) }
        </GoogleMap>
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


