import React from 'react'
import { Link, useHistory } from "react-router-dom"


// castom component
import Logo from "../../shared/components/Logo"

// castom Css
import classes from "./Login.module.css"
function Login() {

    const loginHandler = () => {

    }
    const signupHandler = () => {

    }
    return (
        <div className={classes.login}>
            <Link to="/"><Logo img={"https://pngimg.com/uploads/amazon/amazon_PNG6.png"} /></Link>
            <div className={classes.login__container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button onClick={loginHandler} type="submit" className={classes.login__signInButton}>Sign In</button>
                </form>
                <p>By signing-in your agree to Amazon's Conditions of Use & Sale. Please cee our Privacy  Notice, our Cookies Notice and Our interest-Based Ads Notice.</p>
                <button onClick={signupHandler} className={classes.login__signUpButton}>Create your Amazon Account</button>
            </div>
        </div>

    )
}

export default Login;
