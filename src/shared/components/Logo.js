import React from 'react'


import classes from "./Logo.module.css"

const Logo = () => {
    return (
        <React.Fragment>
            <img className={classes.header__logo} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </React.Fragment>
    )
}


export default Logo;