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
                <Product id={23445234} title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls" price={39.00} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg" />
                <Product id={234345234} title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote" price={29.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Q-l2M0hZL._AC_SX466_.jpg" />
            </div>
            <div className={classes.home__row}>
                <Product id={23423234} title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service" price={62.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg" />
                <Product id={23453454234} title="SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter" price={18.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/6175wb%2BNlSL._AC_SX679_.jpg" />
                <Product id={2343453453234} title="AMD Ryzen 9 5950X 16-core, 32-Thread Unlocked Desktop Processor" price={1089.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/61gMd1izD5L._AC_SL1500_.jpg" />
            </div>
            <div className={classes.home__row}>
                <Product id={233453454234} title="Lexar NM620 1TB M.2 2280 PCIe Internal SSD, Up to 3300MB/s Read, for PC Enthusiasts and Gamers" price={159.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71yVR8rNnlL._AC_SX679_.jpg" />
            </div>
        </div>
    )
}

export default Home
