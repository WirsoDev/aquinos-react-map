import '../styles/login.css'
import { useState } from 'react'

const Login = ( props ) => {

    return(
        <div className="login">
            <form onSubmit={props.onSubmit}>
                <h1>Enter code:</h1>
                <input 
                type="password" 
                value={props.value} 
                placeholder='your code here'
                onChange={props.onChange}
                />
                <button>submit</button>
                <p>{props.errorMessage}</p>
            </form>
        </div>
    )
}

export default Login
