import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

import classes from "./Basket.module.css"
const Basket = (props) => {
    return (
        <Link to={props.to} className={classes.header__basket}>
            <div className={classes.header__optionBasket}>
                {/* shopping busket icon */}
                <ShoppingBasketIcon />
                {/* number of item in the basket */}
                <span className={`${classes.header__optionLineTwo} ${classes.headerBasketCount}`}>0</span>
            </div>
        </Link>
    )
}

export default Basket
