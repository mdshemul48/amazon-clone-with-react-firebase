import React from 'react'


// castom components 
import Banner from '../components/Banner';
import Product from '../components/Product';
// castom css
import classes from './Home.module.css';
function Home() {
    return (
        <div className={classes.home}>
            <Banner />

            {/* product id, title, price, rating, image */}
            {/* product */}
            <div className={classes.home__row}>
                <Product id={234234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
                <Product id={234234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
            </div>
            <div className={classes.home__row}>
                <Product id={234234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
                <Product id={234234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
                <Product id={234234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
            </div>
            <div className={classes.home__row}>
                <Product id={234234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
            </div>
        </div>
    )
}

export default Home
