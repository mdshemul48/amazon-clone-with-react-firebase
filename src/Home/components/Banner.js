import { Fragment } from 'react'

import classes from './Banner.module.css'
function Banner() {
    return (
        <Fragment>
            <img className={classes.home__image} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg" alt="" />
        </Fragment>
    )
}

export default Banner
