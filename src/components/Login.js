import '../styles/login.css'


const Login = ( props ) => {

    return(
        <div className="login">
            <form onSubmit={props.onSubmit}>
                <input 
                type="password" 
                value={props.value} 
                placeholder='Password'
                onChange={props.onChange}
                />
                <button>GO</button>
                <p className={props.classname}>Wrong password!</p>
            </form>
        </div>
    )
}

export default Login
