import React from 'react'
import { Link } from 'react-router-dom'

import classes from "./NavLink.module.css"
const NavLinks = (props) => {
    return (

        <Link to={props.to} className={classes.header_link}>
            <div className={classes.header__option}>
                <span className={classes.header__optionLineOne}>{props.lineOne}</span>
                <span className={classes.header__optionLineTwo}>{props.LineTwo}</span>
            </div>
        </Link>

    )
}

export default NavLinks
