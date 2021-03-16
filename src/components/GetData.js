import {React, useState, useEffect} from 'react'
import getDoc from '../scripts/getDocSheets'


function Getdata(){
    const [number, setnumber] = useState([])
    const [mobile, setMobile] = useState([])

    useEffect(()=>{
        let sheet;

        getDoc().then(doc => {
            sheet = doc.sheetsByIndex[0];
            sheet.getRows().then(rows => {
                rows.map(row => {
                    const data = row['_rawData']
                    setnumber(prevnumber =>([...prevnumber, ...[data]]))
                    if(data.includes('Mobile')){
                        setMobile(prevMobile =>([...prevMobile, ...[data]]))
                    }  
                })
            })
        })
    },[])

    const last = number[number.length - 1]

    return(
        <>
            <h2>Total viewers <span>{number.length}</span></h2>
            <h2>AR available <span>{mobile.length}</span></h2>
            <h2>Last seen on <span>{last ? last[3].slice(0, 10): '0'}</span></h2>
        </>
        )

}
export default Getdata