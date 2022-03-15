import { Link } from 'react-router-dom';
import { useState } from 'react';


import styles from './Search.module.css'

const Search = () => {

    const [search, updateSearch] = useState("");

    const getSearch = (e) => {
        let formattedSearch = e.target.value.replace(/\s/g, '+');;
        updateSearch(formattedSearch);
    }

    return(
        <div className={styles.wrapper}>
            <label htmlFor='search'>Title:</label>
            <input onChange={getSearch} type="text" placeholder="Search..."/>
            <button className={styles.button}>
                <Link 
                    className={styles.buttonLink}
                    to={"/results"}
                    state={{searchParam: search}}
                    >Search
                </Link>
            </button>
        </div>
    )
}

export default Search;