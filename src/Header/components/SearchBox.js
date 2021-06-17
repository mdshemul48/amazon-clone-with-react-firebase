import React from 'react'

import SearchIcon from "@material-ui/icons/Search"

// castom css module 
import classes from "./SearchBox.module.css";
const SearchBox = () => {
    return (
        <div className={classes.header__search}>
            <input type="text" className={classes.header__searchInput} />
            <SearchIcon className={classes.header__searchIcon} />
        </div>
    )
}

export default SearchBox;
