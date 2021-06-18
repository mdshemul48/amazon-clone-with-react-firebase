import React from 'react'

import CurrencyFormat from "react-currency-format"
import useStateValue from '../../context/Basket'
import { getBasketTotal } from "../../reducer/Reducer"
import classes from "./SubTotal.module.css"
function SubTotal() {
    const [{ basket }] = useStateValue()
    return (
        <div className={classes.subTotal}>
            {/* price */}
            <CurrencyFormat
                renderText={(value) => {
                    return <>
                        <p>Subtotal ({basket.length} items): <strong>{value}</strong>)</p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift.
                        </small>
                    </>
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Proceed to the Checkout</button>
        </div>
    )
}

export default SubTotal
