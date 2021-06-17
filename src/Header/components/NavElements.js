import React from 'react'

// castom components
import NavLink from './Navlink'
import classes from "./NavElements.module.css"
const NavElements = () => {
    return (
        <div className={classes.header__nav}>
            {/* 1st link */}
            <NavLink to="/login" firstText="Hello Sam" secondText="Sign In" />

            {/* 2nd link */}
            <NavLink to="/" firstText="Returns" secondText="& Orders" />


            {/* 3rd link */}
            <NavLink to="/" firstText="Your" secondText="Prime" />


            {/* 4th link */}


        </div>
    )
}

export default NavElements
