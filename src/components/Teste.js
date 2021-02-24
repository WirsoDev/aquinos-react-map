import { React, useState } from 'react';

function Teste(){

    const [data, setData] = useState([
        ["yoru", "40.4000403", "-8.1229435", "2021-01-27T16:39:21.441Z", "Desktop"],
        ["audrey", "40.4000403", "-8.1229435", "2021-01-27T16:42:18.758Z", "Desktop"],
        ["audrey", "40.40605592", "-8.130266725", "2021-01-27T16:43:08.008Z", "Mobile"]
    ])

    function handleClick(){
        console.log(data)
    }

    return(
        <div className="cenas">
        <h1 onClick={handleClick}>Hello</h1>
        { data.map((a)=>{
            return(
                <p>{parseFloat(a[1])}</p>
            )
        }) }
        </div>
    )
}

export default Teste