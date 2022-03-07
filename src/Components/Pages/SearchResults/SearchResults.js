import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '../../Card/Card';
import styles from './SearchResults.module.css'

const SearchResults = () => {
    
    const [searchResults, updateSearchResults] = useState(null);
    const location = useLocation();
    
    useEffect(() => {    
        
        const getData = () => {
            fetch(`https://www.omdbapi.com/?s=${location.state.searchParam}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((data) => updateSearchResults(data))
            
        }
        getData();
    }, []);
        
    // console.log(search)
    if(searchResults == null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
        <div className={styles.wrapper}>
            <h1>Search Results:</h1>
            <p>You searched for: {location.state.searchParam.replace(/\+/g, " ")}</p>
            <p>Total Results: {searchResults.totalResults}</p>
            <div className={styles.resultsWrapper}>
                {searchResults.Search.map(item => {
                    return(      
                        <Link 
                            key={item.imdbID} 
                            to={'/results/specific'}
                            state={{movie: item.imdbID}}
                            style={{textDecoration:'none'}}>
                                <Card 
                                    key={item.imdbID}
                                    poster={item.Poster}
                                    title={item.Title}
                                    released={item.Year}
                                />                        
                        </Link>                  
                    )
                })}
            </div>
        </div>
    )}   
}

export default SearchResults