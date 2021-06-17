import { Fragment } from 'react'

import classes from './Banner.module.css'
function Banner() {
    return (
        <Fragment>
            <img className={classes.home__image} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
        </Fragment>
    )
}

export default Banner
