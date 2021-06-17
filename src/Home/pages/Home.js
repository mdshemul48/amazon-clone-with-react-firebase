import React from 'react'


// castom components 
import Banner from '../components/Banner';
import classes from './Home.module.css';
function Home() {
    return (
        <div className={classes.home}>
            <Banner />
        </div>
    )
}

export default Home
