import '../styles/login.css'
import { useRef, useEffect} from 'react'


const Login = ( props ) => {

    const inputBox = useRef(null)

    useEffect(()=>{
        inputBox.current.focus()
    }, [])

    return(
        <div className="login">
            <form onSubmit={props.onSubmit}>
                <input
                type="password" 
                value={props.value} 
                placeholder='Password'
                onChange={props.onChange}
                ref={inputBox}
                />
                <button>GO</button>
                <p className={props.classname}>Wrong password!</p>
            </form>
        </div>
    )
}

export default Login