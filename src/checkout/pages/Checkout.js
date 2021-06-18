import React from 'react'


// castom import
import CheckoutProduct from '../components/CheckoutProduct'
import SubTotal from '../components/SubTotal'
// importing context 
import useStateValue from "../../context/Basket"

import classes from "./Checkout.module.css"
function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className={classes.checkout}>
            <div className={classes.checkout__left}>
                <img className={classes.checkout__ad} src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_jpg" alt="" />

                {basket?.length === 0 ? (
                    <div>
                        <h2> Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                    </div>) : (
                    <div>
                        <h2 className={classes.checkout__title}>Your Shopping Basket</h2>
                        {/* list of all the checkout products. */}
                        {basket.map((item) => {
                            return <CheckoutProduct key={item.id} id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image} />
                        })}

                    </div>)}
            </div>
            {basket.length > 0 && (<div>
                {/* subtotal components */}
                {/* <SubTotal /> */}
                <SubTotal />
            </div>)}
        </div>
    )
}

export default Checkout
