import React from 'react'

// castom components
import NavLink from './Navlink'
import classes from "./NavElements.module.css"
const NavElements = () => {
    return (
        <div className={classes.header__nav}>
            {/* 1st link */}
            <NavLink to="/login" lineOne="Hello Sam" LineTwo="Sign In" />

            {/* 2nd link */}
            <NavLink to="/checkout" lineOne="Returns" LineTwo="& Orders" />


            {/* 3rd link */}
            <NavLink to="/" lineOne="Your" LineTwo="Prime" />


            {/* 4th link */}


        </div>
    )
}

export default NavElements
