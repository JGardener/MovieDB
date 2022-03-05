import {useState, useEffect} from 'react';
import Card from '../../Card/Card';
import styles from './SearchResults.module.css'
const SearchResults = () => {
    const [searchResults, updateSearchResults] = useState(null);
    useEffect(() => {
        const getData = () => {
            fetch(`https://www.omdbapi.com/?s=Spirited&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((data) => updateSearchResults(data));
        }
        getData();
    }, []);
    
    console.log(searchResults);
    
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
            <p>You searched for:</p>
            <p>Total Results: {searchResults.totalResults}</p>
            <div className={styles.resultsWrapper}>
                {searchResults.Search.map(item => {
                    return(
                        <Card 
                            key={item.imdbID}
                            poster={item.Poster}
                            title={item.Title}
                            released={item.Year}
                        />
                    )
                })}
            </div>
        </div>
    )}   
}

export default SearchResults