import React from 'react'
import useStateValue from '../../context/Basket'
import classes from "./CheckoutProduct.module.css"
function CheckoutProduct(props) {
    const { id, title, image, price, rating } = props
    const [, dispatch] = useStateValue()

    const itemRemoveHandler = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id

        })
    }
    return (
        <div className={classes.CheckoutProduct}>
            <img className={classes.checkoutProduct__image} src={image} alt={title} />
            <div className={classes.checkoutProduct__info}>
                <p className={classes.checkoutProduct__title}>{title}</p>
                <p className={classes.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={classes.checkoutProduct__rating}>
                    {Array(rating).fill().map((_) => <p key={Math.random()}>⭐</p>)}
                </div>
                <button onClick={itemRemoveHandler}>Remove form Basket.</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
