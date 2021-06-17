import React from 'react'

// castom css
import classes from "./Product.module.css"
function Product(props) {
    const { id, title, price, rating, image } = props;
    return (
        <div className={classes.product}>
            <div className={classes.product_info}>
                <p>{title}</p>
                <p className={classes.product__price}><small>$</small> <strong>{price}</strong></p>
                <div className={classes.product__rating}>
                    {Array(rating).fill(<p>⭐</p>)}
                </div>

            </div>
            <img src={image} alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
