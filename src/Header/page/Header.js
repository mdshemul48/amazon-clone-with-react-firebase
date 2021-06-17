import React from 'react'
import { Link } from 'react-router-dom';

// Header Component
// this is the main header of the site.

// castom components
import Logo from '../../shared/components/Logo';
// castom css module
import classes from "./Header.module.css"
function Header() {
    return (
        <nav className={classes.header}>
            {/* logo on the left -> img */}

            <Link to="/">
                <Logo />
            </Link>
            {/* search box  */}
            {/* 3 links  */}
            {/* basket item with number */}
        </nav >
    )
}

export default Header;
