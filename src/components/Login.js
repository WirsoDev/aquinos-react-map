import '../styles/login.css'
import React, { useState } from "react";

const Login = () => {

    const [value, setValue] = useState('')


    function checkCode(){

        if(value == 1234){
            alert('IN')
        }else{
            alert('nop')
        }
    }
    
    return(
        <div className="login">
            <form onSubmit={checkCode}>
                <h1>Enter code:</h1>
                <input 
                type="text" 
                value={value} 
                placeholder='your code here'
                onChange={(e) => setValue(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Login