import React from 'react'

// importing context 
import useStateValue from "../../context/Basket"
// castom css
import classes from "./Product.module.css"
function Product(props) {
    const [, dispatch] = useStateValue()

    const { id, title, price, rating, image } = props;


    const addToBasketHandler = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id, title, price, rating, image
            }
        })

    }

    return (
        <div className={classes.product}>
            <div className={classes.product_info}>
                <p>{title}</p>
                <p className={classes.product__price}><small>$</small> <strong>{price}</strong></p>
                <div className={classes.product__rating}>
                    {Array(rating).fill().map(() => <p key={Math.random()}>⭐</p>)}
                </div>

            </div>
            <img src={image} alt="" />
            <button onClick={addToBasketHandler}>Add to basket</button>
        </div>
    )
}

export default Product
