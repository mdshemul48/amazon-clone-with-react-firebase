import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

// firebase auth module
import { auth } from "../../util/firebase"
// castom component
import Logo from "../../shared/components/Logo"

// castom Css
import classes from "./Login.module.css"
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginHandler = (event) => {
        event.preventDefault()
        // login function
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            // login user and redirect to home page
            history.push("/")
        }).catch((err) => {
            alert(err.message)
        })
    }
    const signupHandler = (event) => {
        event.preventDefault()
        // register function

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // created and redirecting to the home page.
            history.push("/")
        }).catch((err) => {
            alert(err.message)
        })

    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div className={classes.login}>
            <Link to="/"><Logo img={"https://pngimg.com/uploads/amazon/amazon_PNG6.png"} /></Link>
            <div className={classes.login__container}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={emailChangeHandler} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={passwordChangeHandler} />
                    <button onClick={loginHandler} type="submit" className={classes.login__signInButton}>Sign In</button>
                </form>
                <p>By signing-in your agree to Amazon's Conditions of Use & Sale. Please cee our Privacy  Notice, our Cookies Notice and Our interest-Based Ads Notice.</p>
                <button onClick={signupHandler} className={classes.login__signUpButton}>Create your Amazon Account</button>
            </div>
        </div>

    )
}

export default Login;
