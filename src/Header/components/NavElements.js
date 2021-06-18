import React from 'react'

// castom components
import NavLink from './Navlink'
import Basket from "./Basket"
// castom context
import useStateValue from "../../context/Basket"

import classes from "./NavElements.module.css"
import { auth } from '../../util/firebase'
const NavElements = () => {
    const [{ user }] = useStateValue()
    const Login = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <div className={classes.header__nav}>
            {/* 1st link */}
            <NavLink to={user ? "#" : "/login"} lineOne={`Hello, ${user?.email || ""}`} LineTwo={!user ? "Sign In" : ` Signout`} onClick={Login} />

            {/* 2nd link */}
            <NavLink to="/" lineOne="Returns" LineTwo="& Orders" />


            {/* 3rd link */}
            <NavLink to="/" lineOne="Your" LineTwo="Prime" />


            {/* 4th link */}
            <Basket to="/checkout" />

        </div>
    )
}

export default NavElements
