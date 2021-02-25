import Login from './components/Login'
import { useState, useEffect } from 'react'
import RenderMap from './components/RenderMap'
import env from "react-dotenv"
import './styles/app.css'
import './styles/login.css'


const App = () =>{
  
  const [code, setCode] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [ error, setError ] = useState(false)

  function checkCode(e){
    e.preventDefault()
    
    if(code === env.CODE){
      setIsValid(true)
    }else{
      setError(true)
    }
  }

  useEffect(() => {
    
    setError(false)
  },[code])

  if(!isValid){
    return(
      <div class="app">
        <Login 
          onSubmit={checkCode}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          classname={ error ? 'error' : 'noerror' } 
        /> 
      </div>
     )
  }else{
    return(
        <RenderMap />
    )
  }
}

export default App
