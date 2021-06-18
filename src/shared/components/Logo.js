import React from 'react'


import classes from "./Logo.module.css"

const Logo = (props) => {
    return (
        <React.Fragment>
            <img className={classes.header__logo} src={props.img || "https://pngimg.com/uploads/amazon/amazon_PNG11.png"} alt="" />
        </React.Fragment>
    )
}


export default Logo;