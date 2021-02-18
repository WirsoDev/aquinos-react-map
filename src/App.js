import Login from './components/Login'
import env from "react-dotenv"
import { useState } from 'react'

const App = () =>{
  
  const [code, setCode] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [logerror, setLogError] = useState(false)

  function checkCode(e){
    e.preventDefault()
    
    if(code == env.CODE){
      setIsValid(true)
    }else{
      setLogError(true)
      setCode('')
    }
  }
  if(!isValid){

    return(
      <div class="app">
        <Login 
          onSubmit={checkCode}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          errorMessage={ logerror ? 'NOP' : ''}
        /> 
      </div>
     )
  }else{
    return(
      <h1>You are in!</h1>
    )
  }
}

export default App
